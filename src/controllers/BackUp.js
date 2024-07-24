

// Importamos el módulo 'pool' desde el archivo 'db.js' para manejar las conexiones a la base de datos.
import { pool } from "../db.js";
import fs from "fs";
import { exec } from "child_process";
import { DB_USER, DB_HOST, DB_PASSWORD, DB_DATABASE } from "../config.js"; // Importamos las variables de configuración de la base de datos


const BackUp = async (req, res) => {
    const Fecha = new Date();
    const year = Fecha.getFullYear();
    const month = (Fecha.getMonth() + 1).toString().padStart(2, '0');
    const day = Fecha.getDate().toString().padStart(2, '0');
    const FechaCreacion = `${year}-${month}-${day}`;

    try {
        const fileName = `./Respaldo/${FechaCreacion}_Backup.sql`;
        const dumpCommand = `pg_dump -h ${DB_HOST} -U ${DB_USER} -d ${DB_DATABASE} -F c -b -v -f ${fileName}`;

        // Establecemos la variable de entorno PGPASSWORD
        process.env.PGPASSWORD = DB_PASSWORD;

        console.log(dumpCommand);

        exec(dumpCommand, async (error, stdout, stderr) => {
            if (error) {
                console.error(stderr);
                throw new Error("Ha ocurrido un error al realizar el respaldo de la base de datos.");
            } else {
                console.log('¡Backup creado exitosamente!');
                res.status(200).json({ message: 'Backup creado exitosamente' });
            }
        });

    } catch (err) {
        console.error(err.message);
        res.status(500).json({ message: 'Error al crear el respaldo' });
    }
}


/* const getArchivos = async (req, res) => {
    try {

        const files = fs.readdirSync('./Respaldo');

        const fileStats = files.map(file => {
            const filePath = `./Respaldo/${file}`;
            const stat = fs.statSync(filePath);
            return { file, lastAccessed: stat.atimeMs };
        });

        const sortedFiles = fileStats.sort((a, b) => b.lastAccessed - a.lastAccessed);
        const sortedFileNames = sortedFiles.map(file => file.file);

        return sortedFileNames;
    } catch (error) {
        console.error(error);
        console.log("Error al listar archivos");
    }
} */

export{
  /*   getArchivos, */
    BackUp
}