// Importamos el módulo 'pool' desde el archivo 'db.js' para manejar las conexiones a la base de datos.
import { pool } from "../db.js";

const getGradosAcademicos = async (req, res) => {
    try {
        const { rows } = await pool.query(`select ga.id_grado_academico, ga.grado_academico, ne.nivel_educativo, ga.estado 
                            from grado_academico as ga
                            inner join nivel_educativo as ne on ne.id_nivel_educativo =ga.id_nivel_educativo;
        `);
        res.json(rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ message: 'Error al obtener los gestores' });
    }
}

const getGradoAcademico = async (req, res) => {
    const { id_grado_academico } = req.body
    try {
        // Ejecutamos una consulta SQL para seleccionar un gestor por su id.
        const result = await pool.query(`select ga.id_grado_academico, ga.grado_academico, ne.nivel_educativo, ga.estado 
                            from grado_academico as ga
                            inner join nivel_educativo as ne on ne.id_nivel_educativo =ga.id_nivel_educativo
                            where ga.id_grado_academico = $1;
        `,
            [id_grado_academico]
        )

        // Si no se encuentra el gestor, respondemos con un error 404.
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Grado academico no encontrado' });
        }

        // Respondemos con los resultados de la consulta en formato JSON.
        res.json(result.rows[0]);
    } catch (error) {
        // En caso de error, imprimimos el mensaje de error en la consola y enviamos una respuesta de error 500.
        console.error(err.message);
        res.status(500).json({ message: 'Error al obtener el Grado Academico' });
    }
}

const getGradoAcademicoPorNivel = async (req, res) => {
    const { nivel_educativo } = req.params;
    console.log("nivel", req.params);
    try {
        // Ejecutamos una consulta SQL para seleccionar los grados académicos por nombre de nivel educativo.
        const result = await pool.query(`
            SELECT ga.id_grado_academico, ga.grado_academico, ne.nivel_educativo, ga.estado 
            FROM grado_academico AS ga
            INNER JOIN nivel_educativo AS ne ON ne.id_nivel_educativo = ga.id_nivel_educativo
            WHERE ne.nivel_educativo = $1;
        `, [nivel_educativo]);

        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Grado academico no encontrado' });
        }
        // Respondemos con los resultados de la consulta en formato JSON.
        res.json(result.rows);
    } catch (error) {
        // En caso de error, imprimimos el mensaje de error en la consola y enviamos una respuesta de error 500.
        console.error(error.message);
        res.status(500).json({ message: 'Error al obtener los Grados Académicos por Nivel Educativo' });
    }
};


const postGradoAcademico = async (req, res) => {
    const { grado_academico, estado, id_nivel_educativo } = req.body;
    console.log('Respuesta del servidor:', req.body);
    try {
        // Ejecutamos una consulta SQL para insertar un nuevo gestor.
        const result = await pool.query(
            'INSERT INTO grado_academico (grado_academico, id_nivel_educativo, estado) VALUES ($1, $2, $3) RETURNING *',
            [grado_academico, id_nivel_educativo, estado]
        );

        // Respondemos con un mensaje de éxito y los detalles del gestor creado.
        res.json({ message: 'Grado academico creado exitosamente', grado_academico: result.rows[0] });
    } catch (error) {
        // En caso de error, imprimimos el mensaje de error en la consola y enviamos una respuesta de error 500.
        console.error(error);
        res.status(500).json({ error: 'Error al crear el grado academico' });
    }
}

const putGradoAcademico = async (req, res) => {
    const { grado_academico, id_nivel_educativo, estado, id_grado_academico } = req.body

    try {
        // Ejecutamos una consulta SQL para actualizar un gestor existente.
        const result = await pool.query('UPDATE grado_academico SET grado_academico= $1, id_nivel_educativo= $2, estado = $3 where id_grado_academico = $4 RETURNING *',
            [grado_academico, id_nivel_educativo, estado, id_grado_academico]
        );

        // Si no se encuentra el gestor, respondemos con un error 404.
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Grado Academico no encontrado' });
        }

        // Respondemos con un mensaje de éxito y los detalles del gestor actualizado.
        res.json({ message: 'Grado Academico actualizado exitosamente', grado_academico: result.rows[0] });

    } catch (error) {
        // En caso de error, imprimimos el mensaje de error en la consola y enviamos una respuesta de error 500.
        console.error(error);
        res.status(500).json({ error: 'Error al actualizar rl grado academico' });
    }
}

// Exportamos las funciones para que puedan ser utilizadas en otros módulos.
export {
    getGradosAcademicos,
    getGradoAcademico,
    getGradoAcademicoPorNivel,
    postGradoAcademico,
    putGradoAcademico
}