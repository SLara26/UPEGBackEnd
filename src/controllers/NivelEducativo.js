// Importamos el módulo 'pool' desde el archivo 'db.js' para manejar las conexiones a la base de datos.
import { pool } from "../db.js";

const getNivelesEducativos = async (req, res) => {
    try {
        const {rows} = await pool.query(`SELECT * FROM nivel_educativo;`);
        res.json(rows);  
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ message: 'Error al obtener los niveles educativos' });
    }
}

const getNivelEducativo = async (req, res) => {
    const { id_nivel_educativo } = req.body
    try {
        // Ejecutamos una consulta SQL para seleccionar un gestor por su id.
        const result = await pool.query(`select * from nivel_educativo where id_nivel_educativo= $1;`,
            [id_nivel_educativo]
        )

        // Si no se encuentra el gestor, respondemos con un error 404.
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Nivel Educativo no encontrado' });
        }

        // Respondemos con los resultados de la consulta en formato JSON.
        res.json(result.rows[0]);
    } catch (error) {
        // En caso de error, imprimimos el mensaje de error en la consola y enviamos una respuesta de error 500.
        console.error(err.message);
        res.status(500).json({ message: 'Error al obtener el Grado Academico' });
    }
}

 const postNivelEducativo = async (req, res) => {
    const { nivel_educativo } = req.body;
    console.log('Respuesta del servidor:', req.body);
    try {
        // Ejecutamos una consulta SQL para insertar un nuevo gestor.
        const result = await pool.query(
            'INSERT INTO nivel_educativo (nivel_educativo) VALUES ($1) RETURNING *',
            [nivel_educativo]
        );

        // Respondemos con un mensaje de éxito y los detalles del gestor creado.
        res.json({ message: 'Nivel educativo creado exitosamente', nivel_educativo: result.rows[0] });
    } catch (error) {
        // En caso de error, imprimimos el mensaje de error en la consola y enviamos una respuesta de error 500.
        console.error(error);
        res.status(500).json({ error: 'Error al crear el nivel educativo' });
    }
} 

const putNivelEducativo = async (req, res) => {
    const {  nivel_educativo, id_nivel_educativo} = req.body
    try {
        // Ejecutamos una consulta SQL para actualizar un gestor existente.
        const result = await pool.query('UPDATE nivel_educativo SET nivel_educativo= $1 where id_nivel_educativo = $2 RETURNING *',
            [nivel_educativo, id_nivel_educativo]
        );

         // Si no se encuentra el gestor, respondemos con un error 404.
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Nivel Educativo no encontrado' });
        }

        // Respondemos con un mensaje de éxito y los detalles del gestor actualizado.
        res.json({ message: 'Nivel Educativo actualizado exitosamente', nivel_educativo: result.rows[0] });

    } catch (error) {
         // En caso de error, imprimimos el mensaje de error en la consola y enviamos una respuesta de error 500.
        console.error(error);
        res.status(500).json({ error: 'Error al actualizar el nivel educativo' });
    }
}

// Exportamos las funciones para que puedan ser utilizadas en otros módulos.
export {
    getNivelesEducativos,
    getNivelEducativo,
    postNivelEducativo,
    putNivelEducativo
}