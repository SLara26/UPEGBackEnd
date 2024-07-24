// Importamos el módulo 'pool' desde el archivo 'db.js' para manejar las conexiones a la base de datos.
import { pool } from "../db.js";


/**
 * Obtiene todos los perfiles desde la base de datos.
 * Responde con un array de perfiles en formato JSON.
 * En caso de error, devuelve un mensaje de error con estado 500.
 */


const getPermisos = async (req, res) => {
    const { id_perfil } = req.params;

    try {
        // Consulta SQL para obtener la contraseña cifrada y el estado del usuario por perfil.
        const { rows } = await pool.query(`
            SELECT id_objeto, id_perfil, id_rol, permiso_insertar, permiso_editar, 
            permiso_consultar, creado_por, fecha_creacion, modificado_por, 
            fecha_modificacion
            FROM ms_permisos
            WHERE id_perfil= $1`,
            [id_perfil]);

        // Si no encuentra el usuario, responde con un error 400.
        if (rows.length === 0) {
            return res.status(400).json({ message: 'No existe el perfil' });
        } else {
            return res.json(rows);
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error en el servidor' });
    }
}






export {
    getPermisos
}