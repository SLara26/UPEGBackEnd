// Importa el pool de conexiones a la base de datos y las librerías necesarias
import { pool } from "../db.js";
import nodemailer from "nodemailer";
import bcrypt from 'bcryptjs';
import crypto from 'crypto';


// Realiza las consultas a la base de datos para obtener el usuario y la contraseña del correo del que se envia
const { rows: filaCorreoRows } = await pool.query("SELECT valor FROM ms_parametro where id_parametro=6;");
const correoUsuario = filaCorreoRows[0].valor;
const { rows: filaCorreoPassRows } = await pool.query("SELECT valor FROM ms_parametro where id_parametro=7;");
const correoPass = filaCorreoPassRows[0].valor;


// Configura el transporte de correo con los valores obtenidos de la base de datos
const transporter = nodemailer.createTransport({

    host: 'mail.trabajo.gob.hn',
    port: 25,
    auth: {
        user: correoUsuario,
        pass: correoPass

        /*
        user: 'monitoreoupeg@trabajo.gob.hn',
        pass: 'M0n17r3o.24up3g'  */
        /*    user: 'puniversidad@trabajo.gob.hn',
           pass: 'Trabajo19.'  */

    },

});


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

// Función para manejar el proceso de olvido de contraseña
const forgotPassword = async (req, res) => {
    const { correo_electronico } = req.body;
    try {
        const result = await pool.query('SELECT id_usuario, estado FROM usuario WHERE correo_electronico = $1', [correo_electronico]);
        const user = result.rows[0];

        if (!user) {
            return res.status(404).json({ message: 'Correo no encontrado' });
        }

        const tempPassword = generateTempPassword();
        const hashedPassword = await bcrypt.hash(tempPassword, 10);
        await pool.query('UPDATE usuario SET contrasena = $1 WHERE correo_electronico = $2', [hashedPassword, correo_electronico]);


        // Actualizar la columna estado a 'N' si está en 'A'
         if (user.estado === 'A') {
            await pool.query('UPDATE usuario SET estado = $1 WHERE correo_electronico = $2', ['I', correo_electronico]);
        }
 
        // sentencia para concatenar el nombre y apellido y mostratlo en el correo de envio de contraasena
        const datos = await pool.query('SELECT nombres || \' \' || primer_apellido AS nombre_completo FROM usuario WHERE correo_electronico = $1', [correo_electronico]);
        const datoUsuario = datos.rows[0].nombre_completo;

        await transporter.sendMail({
            from: correoUsuario,
            to: correo_electronico,
            subject: 'Recuperación de contraseña',
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
                   
                    <h2>Cambio de contraseña</h2>
                    <p>Estimado/a usuario/a, <strong>${datoUsuario}</strong></p>
                    <p>Le informamos que ha recibido este correo electrónico porque ha solicitado restablecer su contraseña en el sistema de SI Empleo. Por favor, tenga en cuenta los siguientes pasos:</p>
                    <ol>
                        <li>Regrese al sistema.</li>
                        <li>Ingrese la siguiente contraseña temporal: <span style="color: #2471A3; text-decoration: underline; font-size: 18px; font-weight: bold;">${tempPassword}</span></li>
                        <li>Después de ingresar la contraseña temporal, proceda a agregar una nueva contraseña.</li>
                    </ol>
                    <p>La pantalla estará activa por <strong>5 minutos</strong>, de lo contrario su usuario quedará inactivo y deberá comunicarse con el administrador.</p>
                    <p>Si usted no solicitó un cambio de contraseña por favor comunicarse con el administrador.</p>
                </div>
            </body>
            </html>
            `
        });
        

        res.json({ message: 'Contraseña temporal enviada al correo' });
    } catch (error) {
        res.status(500).json({ message: 'Error al procesar la solicitud', error: error.message });
    }
};

// Función para validar la contraseña temporal
const validateTempPassword = async (req, res) => {
    const { correo_electronico, tempPassword } = req.body;
    //console.log(req.body);

    // Verifica que los campos necesarios estén presentes
    if (!correo_electronico || !tempPassword) {
        return res.status(400).json({ message: 'Correo electrónico y contraseña temporal son requeridos' });
    }

    try {
        const result = await pool.query('SELECT contrasena FROM usuario WHERE correo_electronico = $1', [correo_electronico]);

        // Verifica si se encontró un usuario con el correo electrónico proporcionado
        if (result.rows.length === 0) {
            return res.status(404).json({ message: 'Correo no encontrado' });
        }
        const user = result.rows[0];

        // Compara la contraseña temporal proporcionada con la contraseña almacenada en la base de datos
        /*  const passwordMatch = tempPassword === user.contrasena; */

        // Compara la contraseña temporal proporcionada con la contraseña almacenada en la base de datos
        const passwordMatch = await bcrypt.compare(tempPassword, user.contrasena);

        //si la contrasena es correcta me manda un mensaje de contrasena correcta y si no es correcta tambien lo indica
        if (passwordMatch) {
            return res.json({ message: 'Contraseña temporal verificada correctamente' });
        } else {
            return res.status(400).json({ message: 'Contraseña temporal incorrecta' });
        }
    } catch (error) {
        console.error('Error al procesar la solicitud:', error); // Log para debug
        res.status(500).json({ message: 'Error al procesar la solicitud', error: error.message });
    }
};


// Función para resetear la contraseña
const resetPassword = async (req, res) => {
    const { correo_electronico, newPassword, confirmNewPassword } = req.body;

    if (newPassword !== confirmNewPassword) {
        return res.status(400).json({ message: 'Las contraseñas no coinciden' });
    }

    try {

        const hashedPassword = await bcrypt.hash(newPassword, 10);
        await pool.query('UPDATE usuario SET contrasena = $1 WHERE correo_electronico = $2', [hashedPassword, correo_electronico]);


        // Verificar y actualizar la columna estado a 'A' si está en 'N'
        const result = await pool.query('SELECT estado FROM usuario WHERE correo_electronico = $1', [correo_electronico]);
        const user = result.rows[0];

        if (user.estado === 'I') {
            await pool.query('UPDATE usuario SET estado = $1 WHERE correo_electronico = $2', ['A', correo_electronico]);
        }

        res.json({ message: 'Contraseña actualizada correctamente' });
    } catch (error) {
        res.status(500).json({ message: 'Error al procesar la solicitud', error: error.message });
    }
};

// Exportamos las funciones para que puedan ser utilizadas en otros módulos.
export{
    forgotPassword,
    validateTempPassword,
    resetPassword

}