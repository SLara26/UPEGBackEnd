// Importamos el módulo 'pool' desde el archivo 'db.js' para manejar las conexiones a la base de datos.
import { pool } from "../db.js";

/**
 * Obtiene todos los tipos de intermediacion desde la base de datos.
 * Responde con un array de tipos de intermediacion en formato JSON.
 * En caso de error, devuelve un mensaje de error con estado 500.
 */
const getIntermediaciones = async (req, res) => {
    try {
        const { rows } = await pool.query('SELECT * FROM tipo_intermediacion');
        res.json(rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ message: 'Error al obtener los perfiles' });
    }
}

/**
 * Obtiene un tipos de intermediacion específico por su ID desde la base de datos.
 * Responde con el tipos de intermediacion encontrado en formato JSON.
 * Si el tipos de intermediacion no existe, responde con un estado 404 y un mensaje de error.
 * En caso de error, devuelve un mensaje de error con estado 500.
 */
const getIntermediacion = async (req, res) => {
    const { id_tipo_intermediacion } = req.body
    try {
        const result = await pool.query('SELECT * FROM tipo_intermediacion where id_tipo_intermediacion= $1',
            [id_tipo_intermediacion]
        )
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Tipo de intermediacion no encontrada' });
        }

        res.json(result.rows[0]);
    } catch (error) {
        console.error(err.message);
        res.status(500).json({ message: 'Error al obtener el Tipo de intermediacion ' });
    }
}


/**
 * Crea un nuevo tipos de intermediacion en la base de datos.
 * Espera recibir 'tipos de intermediacion' y 'estado' en el cuerpo de la solicitud.
 * Responde con un mensaje de éxito y el tipos de intermediacion creado en formato JSON.
 * En caso de error, devuelve un mensaje de error con estado 500.
 */
const postIntermediacion = async (req, res) => {
    const { tipo_intermediacion, estado } = req.body;
    console.log('Respuesta del servidor:', req.body);
    try {
        const result = await pool.query(
            'INSERT INTO tipo_intermediacion (tipo_intermediacion, estado) VALUES ($1, $2) RETURNING *',
            [tipo_intermediacion, estado]
        );

        res.json({ message: 'Intermediacion creada exitosamente', perfil: result.rows[0] });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al crear el direccion' });
    }
}


const putIntermediacion = async (req, res) => {
    const { tipo_intermediacion, estado, id_tipo_intermediacion } = req.body
    try {
        const result = await pool.query('UPDATE tipo_intermediacion SET tipo_intermediacion= $1, estado= $2 where id_tipo_intermediacion =$3 RETURNING *',
            [tipo_intermediacion, estado, id_tipo_intermediacion]
        );

        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Tipo intermediacion  no encontrada' });
        }

        res.json({ message: 'Tipo intermediacion  actualizada exitosamente', tipo_intermediacion: result.rows[0] });

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al actualizar la tipo intermediacion' });
    }
}

// Exportamos las funciones para que puedan ser utilizadas en otros módulos.
export {
    getIntermediaciones,
    getIntermediacion,
    postIntermediacion,
    putIntermediacion,
}