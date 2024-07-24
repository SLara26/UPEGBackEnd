// Importamos el módulo 'pool' desde el archivo 'db.js' para manejar las conexiones a la base de datos.
import { pool } from "../db.js";

/**
 * Obtiene todos los modulos desde la base de datos.
 * Responde con un array de modulos en formato JSON.
 * En caso de error, devuelve un mensaje de error con estado 500.
 */
const getModulos = async (req, res) => {
    try {
        const { rows } = await pool.query('SELECT * FROM modulo');
        res.json(rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ message: 'Error al obtener los modulos' });
    }
}

const getModulo = async (req, res) => {
    const { modulo } = req.body; // Campo que enviarás para buscar
    try {
        const result = await pool.query('SELECT id_modulo FROM modulo WHERE nombre_modulo = $1', [modulo]);

        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Módulo no encontrado' });
        }

        res.json({ id_modulo: result.rows[0].id_modulo });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: 'Error al obtener el módulo' });
    }
};

const getEmpresas = async (req, res) => {
    try {
        const { rows } = await pool.query('SELECT * FROM empresa');
        res.json(rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ message: 'Error al obtener las empresas' });
    }
}


// Exportamos las funciones para que puedan ser utilizadas en otros módulos.
export {
    getModulos,
    getModulo,
    getEmpresas
}