/**
 * Importa el objeto pool desde el archivo db.js, que contiene la configuración para conectar y ejecutar consultas en la base de datos.
 */
import { pool } from "../db.js";

const getServiciosRequeridos = async (req, res) => {

    try {
        const { rows } = await pool.query(`select * from servicio_requerido order by id_servicio_requerido desc;`);
        res.json(rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ message: 'Error al obtener los servicios' });
    }
}

const getServicioRequerido = async (req, res) => {
    const { id_servicio_requerido } = req.body
    try {
        const result = await pool.query('select * from servicio_requerido where id_servicio_requerido= $1;',
            [id_servicio_requerido]
        )
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Servicio requerido no encontrado' });
        }
        res.json(result.rows[0]);
    } catch (error) {
        console.error(err.message);
        res.status(500).json({ message: 'Error al obtener el servicio requerido' });
    }
}

const postServicioRequerido = async (req, res) => {
    const { servicio_requerido, estado } = req.body;
    console.log('Respuesta del servidor:', req.body);
    try {
        const result = await pool.query(
            'INSERT INTO servicio_requerido (servicio_requerido, estado) VALUES ($1, $2) RETURNING *',
            [servicio_requerido, estado]
        );
        res.json({ message: 'Servicio requerido creado exitosamente', servicio: result.rows[0] });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al crear el direccion' });
    }
}

const putServicioRequerido = async (req, res) => {
    const { servicio_requerido, estado, id_servicio_requerido } = req.body
    try {
        const result = await pool.query('UPDATE servicio_requerido SET servicio_requerido= $1, estado= $2 where id_servicio_requerido = $3 RETURNING *',
            [servicio_requerido, estado, id_servicio_requerido]
        );
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Servicio requerido no encontrada' });
        }
        res.json({ message: 'Servicio requerido actualizado exitosamente', servicio: result.rows[0] });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al actualizar el servicio requerido' });
    }
}


export {
    getServiciosRequeridos,
    getServicioRequerido,
    postServicioRequerido,
    putServicioRequerido
}
