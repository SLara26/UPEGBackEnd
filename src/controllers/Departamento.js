/**
 * Importa el objeto pool desde el archivo db.js, que contiene la configuración para conectar y ejecutar consultas en la base de datos.
 */
import { pool } from "../db.js";

const getDepartamentos = async (req, res) => {

    try {
        const { rows } = await pool.query(`select * from departamento order by id_departamento desc;`);
        res.json(rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ message: 'Error al obtener los departamentos' });
    }
}

const getDepartamento = async (req, res) => {
    const { id_departamento } = req.body
    try {
        const result = await pool.query('select * from departamento where id_departamento= $1;',
            [id_departamento]
        )
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Depto no encontrado' });
        }

        res.json(result.rows[0]);
    } catch (error) {
        console.error(err.message);
        res.status(500).json({ message: 'Error al obtener el perfil' });
    }
}

const postDepartamento = async (req, res) => {
    const { departamento } = req.body;
    console.log('Respuesta del servidor:', req.body);
    try {
        const result = await pool.query(
            'INSERT INTO departamento (departamento) VALUES ($1) RETURNING *',
            [departamento]
        );

        res.json({ message: 'Depatamento creado exitosamente', departamento: result.rows[0] });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al crear el direccion' });
    }
}

const putDepartamento = async (req, res) => {
    const { departamento, id_departamento } = req.body
    try {
        const result = await pool.query('UPDATE departamento SET departamento= $1 where id_departamento = $2 RETURNING *',
            [departamento, id_departamento]
        );

        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Departamento no encontrada' });
        }

        res.json({ message: 'Departamento actualizado exitosamente', perfil: result.rows[0] });

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al actualizar el depto' });
    }
}


export {
    getDepartamentos,
    getDepartamento,
    postDepartamento,
    putDepartamento
}
