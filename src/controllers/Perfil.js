// Importamos el módulo 'pool' desde el archivo 'db.js' para manejar las conexiones a la base de datos.
import { pool } from "../db.js";

/**
 * Obtiene todos los perfiles desde la base de datos.
 * Responde con un array de perfiles en formato JSON.
 * En caso de error, devuelve un mensaje de error con estado 500.
 */
const getPerfiles = async (req, res) => {
    try {
        const { rows } = await pool.query('SELECT * FROM perfil');
        res.json(rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ message: 'Error al obtener los perfiles' });
    }
}

/**
 * Obtiene un perfil específico por su ID desde la base de datos.
 * Responde con el perfil encontrado en formato JSON.
 * Si el perfil no existe, responde con un estado 404 y un mensaje de error.
 * En caso de error, devuelve un mensaje de error con estado 500.
 */
const getPerfil = async (req, res) => {
    const { id_perfil } = req.body
    try {
        const result = await pool.query('SELECT * FROM perfil where id_perfil= $1',
            [id_perfil]
        )
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Perfil no encontrada' });
        }

        res.json(result.rows[0]);
    } catch (error) {
        console.error(err.message);
        res.status(500).json({ message: 'Error al obtener el perfil' });
    }
}


/**
 * Crea un nuevo perfil en la base de datos.
 * Espera recibir 'perfil' y 'estado' en el cuerpo de la solicitud.
 * Responde con un mensaje de éxito y el perfil creado en formato JSON.
 * En caso de error, devuelve un mensaje de error con estado 500.
 */
const postPerfil = async (req, res) => {
    const { perfil, estado } = req.body;
    console.log('Respuesta del servidor:', req.body);
    try {
        const result = await pool.query(
            'INSERT INTO perfil (perfil, estado) VALUES ($1, $2) RETURNING *',
            [perfil, estado]
        );

        res.json({ message: 'Perfil creada exitosamente', perfil: result.rows[0] });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al crear el Perfil' });
    }
}


/**
 * Actualiza un perfil existente en la base de datos por su ID.
 * Espera recibir 'perfil', 'estado' y 'id_perfil' en el cuerpo de la solicitud.
 * Responde con un mensaje de éxito y el perfil actualizado en formato JSON.
 * Si el perfil no existe, responde con un estado 404 y un mensaje de error.
 * En caso de error, devuelve un mensaje de error con estado 500.
 */
const putPerfil = async (req, res) => {
    const { perfil, estado, id_perfil } = req.body
    try {
        const result = await pool.query('UPDATE perfil SET perfil= $1, estado= $2 where id_perfil = $3 RETURNING *',
            [perfil, estado, id_perfil]
        );

        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Direccion no encontrada' });
        }

        res.json({ message: 'Direccion actualizada exitosamente', perfil: result.rows[0] });

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al actualizar la direccion' });
    }
}

// Exportamos las funciones para que puedan ser utilizadas en otros módulos.
export {
    getPerfiles,
    getPerfil,
    postPerfil,
    putPerfil
}