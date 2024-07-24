/**
 * Importa el objeto pool desde el archivo db.js, que contiene la configuración para conectar y ejecutar consultas en la base de datos.
 */
import { pool } from "../db.js";


/**
 * Obtiene todas las filas de la tabla regional y las devuelve como respuesta JSON. 
 * En caso de error, maneja la excepción devolviendo un mensaje de error con un estado HTTP 500.
 */
const getRegionales = async (req, res) => {

    try {
        const { rows } = await pool.query(`SELECT r.id_regional, r.regional, r.descripcion, m.modulo,d.departamento, m.id_modulo, r.estado
      FROM regional AS r
          INNER JOIN modulo AS m ON r.id_modulo = m.id_modulo
          INNER JOIN departamento as d ON d.id_departamento = r.id_departamento;
             `);
        res.json(rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ message: 'Error al obtener los regional' });
    }
}

/**
 * Obtiene una fila específica de la tabla regional basada en el id_regional proporcionado en req.body. 
 * Si no encuentra ninguna fila, devuelve un estado HTTP 404 con un mensaje de error. 
 * Maneja otros errores con un estado HTTP 500.
 */
const getRegional = async (req, res) => {
    const { id_regional } = req.body
    try {
        const result = await pool.query('SELECT * FROM regional where id_regional= $1',
            [id_regional]
        )
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Regional no encontrada' });
        }

        res.json(result.rows[0]);
    } catch (error) {
        console.error(err.message);
        res.status(500).json({ message: 'Error al obtener la regional' });
    }
}

const getRegionalSiEmpleo = async (req, res) => {

    try {
        const result = await pool.query(`SELECT r.regional, d.departamento 
       FROM regional AS r
       INNER JOIN departamento AS d ON d.id_departamento = r.id_departamento
       WHERE r.id_modulo = 1 AND r.estado = $1`,
            ['A']);
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Regional no encontrada' });
        }

        res.json(result.rows);
    } catch (error) {
        console.error(err.message);
        res.status(500).json({ message: 'Error al obtener la regional' });
    }
}

const getRegionalCiudadMujer = async (req, res) => {

    try {
        const result = await pool.query('SELECT regional FROM regional where id_modulo=2 AND estado = $1', ['A']);
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Regional no encontrada' });
        }

        res.json(result.rows);
    } catch (error) {
        console.error(err.message);
        res.status(500).json({ message: 'Error al obtener la regional' });
    }
}


const getModulos = async (req, res) => {
    try {
        const { rows } = await pool.query('SELECT modulo FROM modulo');
        res.json(rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ message: 'Error al obtener los modulos' });
    }
}



/**
 * Inserta una nueva fila en la tabla regional con los valores de regional y estado proporcionados en req.body. 
 * Devuelve la fila insertada como parte de la respuesta JSON. En caso de error,
 * maneja la excepción devolviendo un estado HTTP 500 con un mensaje de error.
 */
const postRegional = async (req, res) => {
    const { regional, estado, descripcion, id_modulo, id_departamento } = req.body;
    console.log('Respuesta del servidor:', req.body);
    try {
        const result = await pool.query(
            'INSERT INTO regional (regional, estado, descripcion, id_modulo, id_departamento) VALUES ($1, $2, $3, $4, $5) RETURNING *',
            [regional, estado, descripcion, id_modulo, id_departamento]
        );

        res.json({ message: 'Regional creada exitosamente', regional: result.rows[0] });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al crear el direccion' });
    }
}

/**
 * Actualiza una fila específica en la tabla regional utilizando 
 * los nuevos valores de regional y estado, identificados por id_regional en req.body. 
 * Devuelve la fila actualizada como parte de la respuesta JSON. Si no encuentra la fila a actualizar, 
 * devuelve un estado HTTP 404 con un mensaje de error. Maneja otros errores con un estado HTTP 500.
 */
const putRegional = async (req, res) => {
    const { regional, estado, descripcion, id_modulo, id_departamento, id_regional } = req.body
    console.log("Esto recibio back", req.body);
    try {
        const result = await pool.query('UPDATE regional SET regional= $1, estado= $2, descripcion= $3, id_modulo=$4, id_departamento=$5 where id_regional = $6 RETURNING *',
            [regional, estado, descripcion, id_modulo, id_departamento, id_regional]
        );

        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Regional no encontrada' });
        }

        res.json({ message: 'Regional actualizada exitosamente', regional: result.rows[0] });

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al actualizar la regional' });
    }
}

/**
 * Exporta todas las funciones definidas 
 * (getRegionales, getRegional, postRegional, putRegional) 
 * para que puedan ser utilizadas por otros módulos o scripts en el proyecto.
 */
export {
    getRegionales,
    getRegional,
    postRegional,
    putRegional,
    getRegionalSiEmpleo,
    getRegionalCiudadMujer

}
