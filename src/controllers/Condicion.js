/**
 * Importa el objeto pool desde el archivo db.js, que contiene la configuración para conectar y ejecutar consultas en la base de datos.
 */
import { pool } from "../db.js";

const getCondiciones = async (req, res) => {

    try {
        const { rows } = await pool.query(`select * from condicion order by id_condicion desc;`);
        res.json(rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ message: 'Error al obtener los departamentos' });
    }
}

const getCondicion = async (req, res) => {
    const { id_condicion } = req.body
    try {
        const result = await pool.query('select * from condicion where id_condicion= $1;',
            [id_condicion]
        )
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Condicion no encontrado' });
        }

        res.json(result.rows[0]);
    } catch (error) {
        console.error(err.message);
        res.status(500).json({ message: 'Error al obtener la condicion' });
    }
}

const postCondicion = async (req, res) => {
    const { condicion, estado } = req.body;
    console.log('Respuesta del servidor:', req.body);
    try {
        const result = await pool.query(
            'INSERT INTO condicion (condicion, estado) VALUES ($1, $2) RETURNING *',
            [condicion, estado]
        );

        res.json({ message: 'Condicion creado exitosamente', condicion: result.rows[0] });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al crear el direccion' });
    }
}

const putCondicion = async (req, res) => {
    const { condicion, estado, id_condicion } = req.body
    try {
        const result = await pool.query('UPDATE condicion SET condicion= $1, estado= $2 where id_condicion = $3 RETURNING *',
            [condicion, estado, id_condicion]
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
    getCondiciones,
    getCondicion,
    postCondicion,
    putCondicion
}
