/**
 * Importa el objeto pool desde el archivo db.js, que contiene la configuración para conectar y ejecutar consultas en la base de datos.
 */
import { pool } from "../db.js";

const getEtnias = async (req, res) => {

    try {
        const { rows } = await pool.query(`select * from etnia order by id_etnia desc;`);
        res.json(rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ message: 'Error al obtener las etnias' });
    }
}

const getEtnia = async (req, res) => {
    const { id_etnia } = req.body
    try {
        const result = await pool.query('select * from etnia where id_etnia= $1;',
            [id_etnia]
        )
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'etnia no encontrado' });
        }
        res.json(result.rows[0]);
    } catch (error) {
        console.error(err.message);
        res.status(500).json({ message: 'Error al obtener la etnia' });
    }
}

const postEtnia = async (req, res) => {
    const { etnia, estado } = req.body;
    console.log('Respuesta del servidor:', req.body);
    try {
        const result = await pool.query(
            'INSERT INTO etnia (etnia, estado) VALUES ($1, $2) RETURNING *',
            [etnia, estado]
        );
        res.json({ message: 'Condicion creado exitosamente', condicion: result.rows[0] });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al crear el direccion' });
    }
}

const putEtnia = async (req, res) => {
    const { etnia, estado, id_etnia } = req.body
    try {
        const result = await pool.query('UPDATE etnia SET etnia= $1, estado= $2 where id_etnia = $3 RETURNING *',
            [etnia, estado, id_etnia]
        );
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Etnia no encontrada' });
        }
        res.json({ message: 'Etnia actualizado exitosamente', perfil: result.rows[0] });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al actualizar el etnia' });
    }
}


export {
    getEtnias,
    getEtnia,
    postEtnia,
    putEtnia
}
