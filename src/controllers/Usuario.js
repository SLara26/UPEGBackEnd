// Importamos los módulos necesarios desde los archivos locales y de npm.
import { pool } from "../db.js"; // Conexión a la base de datos PostgreSQL
import crypto from 'crypto'; // Para generar contraseñas aleatorias
import bcrypt from 'bcrypt'; // Para cifrar contraseñas
import nodemailer from 'nodemailer'; // Para enviar correos electrónicos
import jwt from 'jsonwebtoken'; // Para generar tokens de autenticación JSON Web Token (JWT)

/**
 * Función asincrónica que obtiene la lista de todos los usuarios desde la base de datos.
 * @param {object} req - El objeto de solicitud HTTP.
 * @param {object} res - El objeto de respuesta HTTP.
 */
const getUsers = async (req, res) => {
    try {
        // Consulta SQL para obtener usuarios junto con sus detalles adicionales.
        const { rows } = await pool.query(`SELECT 
                u.*, 
                dg.direccion_general AS direccion_general,
                p.perfil AS perfil,
                r.regional AS regional,
                CASE
                    WHEN u.estado = 'A' THEN 'Activo'
                    WHEN u.estado = 'I' THEN 'Inactivo'
                    WHEN u.estado = 'N' THEN 'Nuevo'
                    WHEN u.estado = 'B' THEN 'Bloqueado'
                    ELSE 'Desconocido'
                END AS estado_texto
            FROM 
                usuario u
            JOIN 
                direccion_general dg ON u.id_direccion_general = dg.id_direccion_general
            JOIN 
                perfil p ON u.id_perfil = p.id_perfil
            JOIN 
                regional r ON u.id_regional = r.id_regional `);

        // Respondemos con los resultados de la consulta en formato JSON.
        res.json(rows);
    } catch (err) {
        // En caso de error, imprimimos el mensaje de error en la consola y enviamos una respuesta de error 500.
        console.error(err.message);
        res.status(500).json({ message: 'Error al obtener los usuarios' });
    }
}


/**
 * Función asincrónica que obtiene un usuario específico por su ID desde la base de datos.
 * @param {object} req - El objeto de solicitud HTTP.
 * @param {object} res - El objeto de respuesta HTTP.
 */
const getUsuario = async (req, res) => {
    const { id_usuario } = req.params;
    try {
        // Consulta SQL para obtener un usuario específico por su ID junto con sus detalles adicionales.
        const result = await pool.query(
            `SELECT
            u.*,
            dg.direccion_general AS direccion_general,
            p.perfil AS perfil,
            r.regional AS regional,
            CASE
                WHEN u.estado = 'A' THEN 'Activo'
                WHEN u.estado = 'I' THEN 'Inactivo'
                WHEN u.estado = 'N' THEN 'Nuevo'
                WHEN u.estado = 'B' THEN 'Bloqueado'
                ELSE 'Desconocido'
            END AS estado_texto
            FROM
                usuario u
            JOIN
                direccion_general dg ON u.id_direccion_general = dg.id_direccion_general
            JOIN
                perfil p ON u.id_perfil = p.id_perfil
            JOIN
                regional r ON u.id_regional = r.id_regional
            WHERE
                u.id_usuario = $1;
            `, [id_usuario]
        );

        // Si no se encuentra el usuario, responde con un error 404.
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Usuario no encontrado' });
        }

        // Respondemos con los resultados de la consulta en formato JSON.
        res.json(result.rows[0]);
    } catch (error) {
        // En caso de error, imprimimos el mensaje de error en la consola y enviamos una respuesta de error 500.
        console.error(error);
        res.status(500).json({ error: 'Error al obtener los datos del usuario' });
    }
}


/**
 * Función asincrónica para autenticar usuarios durante el proceso de inicio de sesión.
 * @param {object} req - El objeto de solicitud HTTP con correo_electronico y contrasena.
 * @param {object} res - El objeto de respuesta HTTP.
 */
const Login = async (req, res) => {
    const { correo_electronico, contrasena } = req.body;
    try {
        // Consulta SQL para obtener la contraseña cifrada y el estado del usuario por correo electrónico.
        const { rows } = await pool.query('SELECT contrasena, estado, intentos FROM usuario WHERE correo_electronico = $1 ', [correo_electronico]);

        // Si no encuentra el usuario, responde con un error 400.
        if (rows.length === 0) {
            return res.status(400).json({ message: 'Correo electrónico o contraseña incorrectos' });
        }

        const usuario = rows[0];

        // Compara la contraseña proporcionada con la contraseña almacenada cifrada
        const contrasenaValida = await bcrypt.compare(contrasena, usuario.contrasena);

        // Si la contraseña no es válida, actualiza el contador de intentos de inicio de sesión.
        if (!contrasenaValida) {
            let Intentos = usuario.intentos + 1;

            await pool.query('UPDATE usuario SET intentos = $1 WHERE correo_electronico = $2', [Intentos, correo_electronico]);

            // Si hay 3 intentos fallidos, inactiva la cuenta del usuario.
            if (Intentos >= 3) {
                await pool.query('UPDATE usuario SET estado = $1 WHERE correo_electronico = $2', ['I', correo_electronico]);
                return res.status(403).json({ message: 'Cuenta bloqueada. Contacta con el administrador.' });
            }

            return res.status(401).json({ message: 'Credenciales incorrectas' });
        }

        // Reinicia los intentos de inicio de sesión si la autenticación es exitosa.
        await pool.query('UPDATE usuario SET intentos = 0 WHERE correo_electronico = $1', [correo_electronico]);

        // Genera un token de autenticación JWT si el usuario está activo.
        if (usuario.estado === 'A') {
            const token = jwt.sign({ userId: usuario.id_usuario }, 'secreto');
            return res.json({ message: 'Login exitoso', token });
        } else if (usuario.estado === 'I' || usuario.estado === 'B') {
            return res.status(400).json({ message: 'Usuario inactivo o no verificado' });
        } else if (usuario.estado === 'N') {
            res.json({ redirect: true, usuario: usuario.correo_electronico })
        } else {
            return res.status(400).json({ message: 'Estado de usuario no válido' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error en el servidor' });
    }
}



const getVerificarCorreo = async (req, res) => {
    const { correo_electronico } = req.params;
    console.log(req.params);
    try {
        // Consulta SQL para obtener la contraseña cifrada y el estado del usuario por correo electrónico.
        const { rows } = await pool.query('SELECT correo_electronico FROM usuario WHERE correo_electronico = $1 ', [correo_electronico]);

        // Si no encuentra el usuario, responde con un error 400.
        if (rows.length === 0) {
            return res.status(400).json({ message: 'No existe el correo electrónico' });
        } else {
            return res.json({ message: 'Correo verificado correctamente' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error en el servidor' });
    }
}



/**
 * Función asincrónica que obtiene el estado de un usuario por su correo electrónico desde la base de datos.
 * @param {object} req - El objeto de solicitud HTTP con correo_electronico.
 * @param {object} res - El objeto de respuesta HTTP.
 */
const getEstadoxCorreo = async (req, res) => {
    const { correo_electronico } = req.params;
    console.log(req.params);

    try {
        // Consulta SQL para obtener el estado de un usuario por su correo electrónico.
        const result = await pool.query(`SELECT
            u.*,
            dg.direccion_general AS direccion_general,
            p.perfil AS perfil,
            r.regional AS regional,
            u.estado
            FROM
                usuario u
            JOIN
                direccion_general dg ON u.id_direccion_general = dg.id_direccion_general
            JOIN
                perfil p ON u.id_perfil = p.id_perfil
            JOIN
                regional r ON u.id_regional = r.id_regional
            WHERE
                u.correo_electronico 
            = $1`, [correo_electronico]
        );

        // Si no se encuentra el usuario, responde con un error 404.
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Usuario no encontrado' });
        }

        res.json(result.rows[0]); // Devuelve el estado del usuario encontrado en formato JSON.
    } catch (error) {
        // En caso de error, imprime el mensaje de error en la consola y envía una respuesta de error 500.
        console.error(error);
        res.status(500).json({ error: 'Error al obtener el estado del usuario' });
    }
};


/**
 * Función asincrónica que permite al usuario cambiar su contraseña por primera vez.
 * @param {object} req - El objeto de solicitud HTTP con correo_electronico, nuevaContrasena y confirmarContrasena.
 * @param {object} res - El objeto de respuesta HTTP.
 */
const PrimerCambioContrasena = async (req, res) => {
    const { correo_electronico, nuevaContrasena, confirmarContrasena } = req.body;

    // Verifica que las contraseñas coincidan antes de continuar.
    if (nuevaContrasena !== confirmarContrasena) {
        return res.status(400).json({ error: 'Las contraseñas no coinciden' });
    }

    // Genera un hash cifrado para la nueva contraseña antes de actualizarla en la base de datos.
    const contrasenaHashed = await bcrypt.hash(nuevaContrasena, 10);
    await pool.query('UPDATE usuario SET contrasena = $1, estado = $2 WHERE correo_electronico = $3', [contrasenaHashed, 'A', correo_electronico]);

    // Envía una respuesta exitosa indicando que la contraseña ha sido cambiada exitosamente.
    res.json({ mensaje: '¡Contraseña cambiada exitosamente!' });
}


/**
 * Función sincrónica que genera una contraseña aleatoria basada en una longitud especificada.
 * @param {number} length - La longitud deseada de la contraseña aleatoria.
 * @returns {string} - La contraseña aleatoria generada.
 */
// Función para generar una contraseña temporal que cumpla con los requisitos
function generateTempPassword() {
    const length = 8;
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@$!%*?&";
    let tempPassword = "";

    while (true) {
        tempPassword = Array(length)
            .fill(charset)
            .map(x => x[Math.floor(Math.random() * x.length)])
            .join('');

        if (
            /[A-Z]/.test(tempPassword) && // al menos una letra mayúscula
            /[@$!%*?&]/.test(tempPassword) && // al menos un carácter especial
            /[0-9]/.test(tempPassword) && // al menos un número
            tempPassword.length >= 8 // mínimo 8 caracteres
        ) {
            break;
        }
    }

    return tempPassword;
}


//Obtener el correo del que se envia
const { rows: filaCorreoRows } = await pool.query("SELECT valor FROM ms_parametro where id_parametro=6;");
const correoUsuario = filaCorreoRows[0].valor;
//Obtener la contraseña 
const { rows: filaCorreoPassRows } = await pool.query("SELECT valor FROM ms_parametro where id_parametro=7;");
const correoPass = filaCorreoPassRows[0].valor;


/**
 * Función asincrónica que crea un nuevo usuario en la base de datos y envía un correo electrónico con la contraseña generada.
 * @param {object} req - El objeto de solicitud HTTP con los datos del nuevo usuario.
 * @param {object} res - El objeto de respuesta HTTP.
 */

//Funcion para generar las contraseñas a los nuevos usuarios.
function generarContrasena(length) {
    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
  const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const numbers = '0123456789';
  const specialChars = '@$!%*?&';
  const allChars = lowercase + uppercase + numbers + specialChars;
  let password = '';

  // Asegurar que la contraseña tenga al menos una caracter de diferente tipo
  password += lowercase[crypto.randomInt(0, lowercase.length)];
  password += uppercase[crypto.randomInt(0, uppercase.length)];
  password += numbers[crypto.randomInt(0, numbers.length)];
  password += specialChars[crypto.randomInt(0, specialChars.length)];

  // Completar el resto de la contraseña
  for (let i = 4; i < length; i++) {
    password += allChars[crypto.randomInt(0, allChars.length)];
  }

  // Mezclar la contraseña para distribuir los caracteres obligatorios aleatoriamente
  password = password.split('').sort(() => 0.5 - Math.random()).join('');

  return password;
}


const postUsers = async (req, res) => {
    const { id_regional, id_direccion_general, id_perfil, nombres, primer_apellido, segundo_apellido, correo_electronico, telefono, cargo } = req.body;
    console.log('Respuesta del servidor:', req.body);


    try {
        // Genera una nueva contraseña aleatoria.
        const newPassword = generarContrasena(8);
        // Cifra la nueva contraseña antes de almacenarla en la base de datos.
        const hashedPassword = await bcrypt.hash(newPassword, 10);

        // Inserta un nuevo usuario en la base de datos con los datos proporcionados.
        const result = await pool.query(
            'INSERT INTO usuario (id_regional, id_direccion_general, id_perfil, nombres, primer_apellido, segundo_apellido, correo_electronico, contrasena, telefono, cargo) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING *',
            [id_regional, id_direccion_general, id_perfil, nombres, primer_apellido, segundo_apellido, correo_electronico, hashedPassword, telefono, cargo]
        );

        // Envía un correo electrónico con la nueva contraseña generada al correo electrónico del usuario.
        await ContrasenaAlCorreo(correo_electronico, newPassword);

        // Responde con un mensaje de éxito y los datos del usuario creado en formato JSON.
        res.json({ message: 'Usuario creado exitosamente', usuario: result.rows[0] });
    } catch (error) {
        // En caso de error, imprime el mensaje de error en la consola y envía una respuesta de error 500.
        console.error(error);
        res.status(500).json({ error: 'Error al crear el usuario' });
    }
}


/**
 * Función asincrónica que envía un correo electrónico con la nueva contraseña temporal generada para un usuario.
 * @param {string} correo_electronico - El correo electrónico del destinatario.
 * @param {string} password - La nueva contraseña temporal generada.
 */
const ContrasenaAlCorreo = async (correo_electronico, password) => {
    // Consulta SQL para obtener el nombre completo del usuario por su correo electrónico.
    const datos = await pool.query('SELECT nombres || \' \' || primer_apellido AS nombre_completo FROM usuario WHERE correo_electronico = $1', [correo_electronico]);
    const datoUsuario = datos.rows[0].nombre_completo;


    try {
        // Configuración del transporte para enviar correos electrónicos usando nodemailer.
        let transporter = nodemailer.createTransport({
            host: 'mail.trabajo.gob.hn',
            port: 25, //
            auth: {
                user: correoUsuario,// Usuario del correo electrónico de origen (definido previamente)
                pass: correoPass, // Contraseña del correo electrónico de origen (definida previamente)
            }
        });

        // Configuración del correo electrónico a enviar.
        let info = await transporter.sendMail({
            from: correoUsuario, // Dirección de correo electrónico de origen
            to: correo_electronico, // Dirección de correo electrónico de destino
            subject: 'Contraseña', // Asunto del correo electrónico
            html: `
            <html>
            <head>
            <style>
            body {
                font-family: Arial, sans-serif;
                background-color: #f4f4f4;
                margin: 0;
                padding: 0;
            }
            .container {
                max-width: 90%;
                margin: 50px auto;
                padding: 20px;
                background-color: #fff;
                border-radius: 8px;
                box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                border: 2px solid #88CFE0;
            }
            h1 {
                color: #2980B9;
            }
            p {
                color: #555;
            }
            a {
                color: #007BFF;
                text-decoration: underline;
            }
            img {
                max-width: 100%;
                height: auto;
                display: block;
                margin: 0 auto 20px;
            }
            @media (max-width: 600px) {
                .container {
                    padding: 15px;
                }
                h1 {
                    font-size: 1.5em;
                }
                p {
                    font-size: 1em;
                }
            }
            </style>
            </head>
            <body>
            
                <div class="container">
                   
                    <h2>Contraseña de usuario nuevo</h2>
                    <p>Estimado/a usuario/a, <strong>${datoUsuario}</strong></p>
                    <p>Se le ha creado un usuario en el sistema de SI Empleo. Por favor, tenga en cuenta los siguientes pasos:</p>
                    <ol>
                        <li>Ingrese al sistema y en login ingrese su correo en el campo de <strong>Correo Electrónico</strong>.</li>
                        <li>En el campo de <strong>Contraseña</strong> ingrese la siguiente contraseña temporal y de click en ingresar: <span style="color: #2471A3; text-decoration: underline; font-size: 18px; font-weight: bold;">${password}</span></li>
                        <li>Proceda a agregar una nueva contraseña.</li>
                    </ol>
                    
                    <p>Si usted no solicitó la creación de usuario por favor comunicarse con el administrador.</p>
                </div>
            </body>
            </html>
            `


        });
        // Imprime en consola el mensaje de confirmación del envío del correo electrónico.
        console.log('Message sent: %s', info.messageId);
    } catch (error) {
        // En caso de error, imprime el mensaje de error en la consola.
        console.error('Error sending email:', error);
    }
}


/**
 * Función asincrónica que actualiza los datos de un usuario existente en la base de datos.
 * @param {object} req - El objeto de solicitud HTTP con los datos actualizados del usuario.
 * @param {object} res - El objeto de respuesta HTTP.
 */
const putUsers = async (req, res) => {
    const { id_usuario, id_regional, id_direccion_general, id_perfil, nombres, primer_apellido, segundo_apellido, correo_electronico, telefono, cargo, estado } = req.body;
    console.log('Datos recibidos en la API:', req.body);
    try {
        // Consulta SQL para actualizar los datos de un usuario existente por su ID.
        const result = await pool.query(
            'UPDATE usuario SET id_regional = $1, id_direccion_general = $2, id_perfil = $3, nombres = $4, primer_apellido = $5, segundo_apellido = $6, correo_electronico = $7, telefono = $8, cargo = $9, estado = $10, intentos = 0 WHERE id_usuario = $11 RETURNING *',
            [id_regional, id_direccion_general, id_perfil, nombres, primer_apellido, segundo_apellido, correo_electronico, telefono, cargo, estado, id_usuario]
        );

        // Si no se encuentra el usuario, responde con un error 404.
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Usuario no encontrado' });
        }

        // Responde con un mensaje de éxito y los datos del usuario actualizado en formato JSON.
        res.json({ message: 'Usuario actualizado exitosamente', usuario: result.rows[0] });
    } catch (error) {
        // En caso de error, imprime el mensaje de error en la consola y envía una respuesta de error 500.
        console.error(error);
        res.status(500).json({ error: 'Error al actualizar el usuario' });
    }
}


/**
 * Función asincrónica que actualiza el estado de un usuario en la base de datos.
 * @param {object} req - El objeto de solicitud HTTP con el estado y ID del usuario.
 * @param {object} res - El objeto de respuesta HTTP.
 */
const putEstadoUser = async (req, res) => {
    const { estado, id_usuario } = req.body;
    try {
        // Actualiza el estado de un usuario por su ID.
        await pool.query('UPDATE usuario SET estado = $1 WHERE id_usuario = $2', [estado, id_usuario]);

        // Consulta SQL para obtener los datos actualizados del usuario después de la actualización.
        const { rows } = await pool.query('SELECT * FROM usuario WHERE id_usuario = $1', [id_usuario]);
        if (rows.length === 0) {
            return res.status(404).json({ message: 'Usuario no encontrado después de actualizar' });
        }

        // Responde con un mensaje de éxito y los datos del usuario actualizado en formato JSON.
        res.json({ message: `Actualizando el estado del usuario ${id_usuario} a ${estado}`, usuario: rows[0] });
    } catch (err) {
        // En caso de error, imprime el mensaje de error en la consola y envía una respuesta de error 500.
        console.error(err.message);
        res.status(500).json({ message: 'Error al actualizar el estado del usuario' });
    }
}

// Exportamos las funciones para que puedan ser utilizadas en otros módulos.
export {
    getUsers,
    getUsuario,
    Login,
    PrimerCambioContrasena,
    postUsers,
    putUsers,
    putEstadoUser,
    getEstadoxCorreo,
    getVerificarCorreo
}