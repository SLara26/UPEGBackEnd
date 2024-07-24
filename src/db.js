/**
 * Importa el módulo `pg` para interactuar con la base de datos PostgreSQL.
 * 
 * El módulo `pg` proporciona una API para conectar, consultar y manejar la base
 * de datos PostgreSQL desde Node.js.
 */
import pg from 'pg'; 

/**
 * Importa las variables de config.js necesarias para la conexión a la base de datos.
 * 
 * Estas variables (`DB_DATABASE`, `DB_HOST`, `DB_PASSWORD`, `DB_PORT`, `DB_USER`)
 * se obtienen desde el archivo `config.js` y contienen los detalles de la conexión,
 * como el nombre de la base de datos, el host, la contraseña, el puerto y el usuario.
 */
import { DB_DATABASE, DB_HOST, DB_PASSWORD, DB_PORT, DB_USER } from './config.js'


/**
 * Crea una nueva instancia del grupo de conexiones de PostgreSQL.
 * 
 * El módulo `pg` se utiliza para interactuar con la base de datos PostgreSQL.
 * Los detalles de la conexión (usuario, host, contraseña, base de datos y puerto)
 * se importan desde un archivo de configuración separado.
 * 
 * El grupo de conexiones (pool) permite reutilizar conexiones de base de datos,
 * lo que puede mejorar el rendimiento al reducir el tiempo necesario para abrir
 * y cerrar conexiones repetidamente.
 * 
 * @property {string} user - El nombre de usuario para autenticarse en la base de datos.
 * @property {string} host - El host donde se encuentra la base de datos.
 * @property {string} password - La contraseña para autenticarse en la base de datos.
 * @property {string} database - El nombre de la base de datos a la que se conecta.
 * @property {number} port - El puerto en el que la base de datos está escuchando.
 */
export const pool = new pg.Pool({
    user: DB_USER,
    host: DB_HOST,
    password: DB_PASSWORD,
    database: DB_DATABASE,
    port: DB_PORT
})
