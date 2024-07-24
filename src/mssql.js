/**
 * Importamos el módulo 'mssql' para manejar la conexión a la base de datos de SQL Server
*/
import sql from 'mssql';

/**
 * Importamos las variables de configuración desde el archivo 'config.js'
*/
import { MSSQL_USER, MSSQL_HOST, MSSQL_PASSWORD, MSSQL_DATABASE, MSSQL_PORT } from './config.js';


/**
 * Configuración para la conexión a la base de datos MSSQL.
 * 
 * Este objeto contiene los detalles necesarios para establecer una conexión con
 * una base de datos Microsoft SQL Server. Los detalles de la conexión (usuario,
 * host, contraseña, base de datos y puerto) se importan desde un archivo de
 * configuración separado.
 * 
 * 
 * @property {string} user - El nombre de usuario para autenticarse en la base de datos.
 * @property {string} password - La contraseña para autenticarse en la base de datos.
 * @property {string} database - El nombre de la base de datos a la que se conecta.
 * @property {string} server - El host donde se encuentra la base de datos.
 * @property {number} port - El puerto en el que la base de datos está escuchando.
 * @property {object} pool - Configuración del grupo de conexiones.
 * @property {number} pool.max - Número máximo de conexiones en el pool.
 * @property {number} pool.min - Número mínimo de conexiones en el pool.
 * @property {number} pool.idleTimeoutMillis - Tiempo de espera antes de cerrar una conexión inactiva.
 * @property {object} options - Opciones adicionales de configuración.
 * @property {boolean} options.encrypt - Encriptación para Azure SQL Database.
 * @property {boolean} options.trustServerCertificate - Confiar en certificados autofirmados (desarrollo local).
 */
const sqlConfig = {
    user: MSSQL_USER,
    password: MSSQL_PASSWORD,
    database: MSSQL_DATABASE,
    server: MSSQL_HOST,
    port: parseInt(MSSQL_PORT),
    pool: {
        max: 10,
        min: 0,
        idleTimeoutMillis: 30000
    },
    options: {
        encrypt: true, // For Azure SQL Database
        trustServerCertificate: true // Change to true for local dev / self-signed certs
    }
};



/**
 * Conecta a la base de datos MSSQL.
 * 
 * Esta función asíncrona intenta establecer una conexión con la base de datos
 * utilizando la configuración especificada en `sqlConfig`. Si la conexión es
 * exitosa, imprime un mensaje de éxito en la consola. Si falla, captura el error
 * y lo imprime en la consola, ayudando a identificar problemas de conexión.
 * 
 * @returns {Promise<void>} Una promesa que se resuelve si la conexión es exitosa, 
 * o se rechaza con un error si la conexión falla.
 */
export async function connectToMSSQL() {
    try {
        await sql.connect(sqlConfig);
        console.log('Connected to MSSQL database');
    } catch (err) {
        console.error('Database connection failed:', err);
    }
}



