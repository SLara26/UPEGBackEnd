/**
 * Importa el módulo `dotenv` para gestionar variables de entorno.
 * 
 * El módulo `dotenv` carga las variables de entorno desde un archivo `.env` en `process.env`.
 * Esto permite mantener configuraciones sensibles y credenciales fuera del código fuente.
 */
import dotenv from 'dotenv';

/**
 * Carga las variables de entorno desde un archivo `.env` en `process.env`.
 * 
 * El módulo `dotenv` se utiliza para gestionar configuraciones sensibles (como
 * credenciales de base de datos) mediante el almacenamiento en un archivo `.env`.
 * Esta línea asegura que las variables de entorno definidas en el archivo `.env`
 * estén disponibles en `process.env`.
 */
dotenv.config();

/**
 * Exporta las variables de configuración de PostgreSQL desde `process.env`.
 * 
 * Estas variables se utilizan para configurar la conexión a la base de datos PostgreSQL.
 * 
 * @property {string} DB_USER - El nombre de usuario para autenticarse en la base de datos PostgreSQL.
 * @property {string} DB_HOST - El host donde se encuentra la base de datos PostgreSQL.
 * @property {string} DB_PASSWORD - La contraseña para autenticarse en la base de datos PostgreSQL.
 * @property {string} DB_DATABASE - El nombre de la base de datos PostgreSQL.
 * @property {string|number} DB_PORT - El puerto en el que la base de datos PostgreSQL está escuchando.
 * @property {string|number} PORT - El puerto en el que el servidor de la aplicación está escuchando (por defecto 3000).
 */
export const DB_USER =process.env.DB_USER
export const DB_HOST=process.env.DB_HOST
export const DB_PASSWORD=process.env.DB_PASSWORD
export const DB_DATABASE=process.env.DB_DATABASE
export const DB_PORT=process.env.DB_PORT
export const PORT = process.env.PORT || 3000;


/**
 * Exporta las variables de configuración de Microsoft SQL Server desde `process.env`.
 * 
 * Estas variables se utilizan para configurar la conexión a la base de datos Microsoft SQL Server.
 * 
 * @property {string} MSSQL_USER - El nombre de usuario para autenticarse en la base de datos Microsoft SQL Server.
 * @property {string} MSSQL_HOST - El host donde se encuentra la base de datos Microsoft SQL Server.
 * @property {string} MSSQL_PASSWORD - La contraseña para autenticarse en la base de datos Microsoft SQL Server.
 * @property {string} MSSQL_DATABASE - El nombre de la base de datos Microsoft SQL Server.
 * @property {string|number} MSSQL_PORT - El puerto en el que la base de datos Microsoft SQL Server está escuchando.
 */
export const MSSQL_USER = process.env.MSSQL_USER;
export const MSSQL_HOST = process.env.MSSQL_HOST;
export const MSSQL_PASSWORD = process.env.MSSQL_PASSWORD;
export const MSSQL_DATABASE = process.env.MSSQL_DATABASE;
export const MSSQL_PORT = process.env.MSSQL_PORT;




