// Importamos el módulo 'pool' desde el archivo 'db.js' para manejar las conexiones a la base de datos.
import { pool } from "../db.js";


//Función asincrónica que muestra todos los registros de direcciones generales
const getDireccionesGenerales = async (req, res) => {
    try {
        //Se utiliza un query y se formatea el SQL para que traiga los datos
        const { rows } = await pool.query(`SELECT 
            id_direccion_general,
            direccion_general,
            estado AS estado,
            CASE 
                WHEN estado = 'A' THEN 'Activo'
                WHEN estado = 'I' THEN 'Inactivo'
                ELSE estado
            END AS estado_traducido
            FROM direccion_general;
        `);

        res.json(rows); //Se envían los registros obtenidos como respuesta en formato JSON
    } catch (error) { //catch para atrapar lor errores
        console.error(error.message);
        res.status(500).json({ message: 'Error al obtener las direcciones_generales' });
    }
}

//Función asincrónica que muestra un dato de los registros de direcciones generales
const getDireccionGeneral = async (req, res) => {
    const { id_direccion_general } = req.body //Trae los datos en las variables
    try {
        //Se utiliza un query y se formatea el SQL para que traiga el dato que deseamos de la tabla
        const result = await pool.query('SELECT * FROM direccion_general where id_direccion_general= $1',
            [id_direccion_general]
        )
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Direccion no encontrada' });
        }

        res.json(result.rows[0]);//Se envían los registros obtenidos como respuesta en formato JSON
    } catch (error) {//catch para atrapar lor errores
        console.error(err.message);
        res.status(500).json({ message: 'Error al obtener la direccion_general' });
    }
}

//Función asincrónica que permite insertar registros en la tabla de direccion_general
const postDireccionGeneral = async (req, res) => {
    const { direccion_general, estado } = req.body; //Trae los datos en las variables
    console.log('Respuesta del servidor:', req.body); //Log que muestra el texto en la consola
    try {
        //Se utiliza un query y se formatea el SQL para que inserte el dato que deseamos en la tabla
        const result = await pool.query(
            'INSERT INTO direccion_general (direccion_general, estado) VALUES ($1, $2) RETURNING *',
            [direccion_general, estado]
        );

        //Se muestra un mensaje de éxito si el dato es ingresado con éxito
        res.json({ message: 'Direccion creada exitosamente', usuario: result.rows[0] });
    } catch (error) {//catch para atrapar lor errores
        console.error(error);
        res.status(500).json({ error: 'Error al crear el direccion' });
    }
}

//Función asincrónica que permite actualizar registros en la tabla de direccion_general
const putDireccionGeneral = async (req, res) => {
    const { direccion_general, estado, id_direccion_general } = req.body //Trae los datos en las variables
    console.log(req.body);
    try {
        //Se utiliza un query y se formatea el SQL para que actualice el dato que deseamos en la tabla
        const result = await pool.query('UPDATE direccion_general SET direccion_general= $1, estado= $2 where id_direccion_general = $3 RETURNING *',
            [direccion_general, estado, id_direccion_general]
        );

        //Sentencia que permite verificar si existe o no el registro en la tabla
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Direccion no encontrada' });//muesta un mensaje si no se encuentra el registro
        }

        //Se muestra un mensaje de éxito si el dato es ingresado con éxito
        res.json({ message: 'Direccion actualizada exitosamente', direccion_general: result.rows[0] });

    } catch (error) {//catch para atrapar lor errores
        console.error(error);
        res.status(500).json({ error: 'Error al actualizar la direccion' });
    }
}


// Exportamos las funciones para que puedan ser utilizadas en otros módulos.
export {
    getDireccionesGenerales,
    getDireccionGeneral,
    postDireccionGeneral,
    putDireccionGeneral
}