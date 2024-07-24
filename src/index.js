import express from "express";
import { PORT } from "./config.js";
import morgan from "morgan";
import cors from "cors";
import Usuario from "./routes/Usuario.js";
import DirecionGeneral from "./routes/DireccionGeneral.js";
import Perfil from "./routes/Perfil.js";
import Regional from "./routes/Regional.js";
import Recuperacion from "./routes/Recuperacion.js";
import RegistrosBitacoraGestiones from "./routes/BitacoraGestion.js";
import RegistroMensual from "./routes/RegistroMensual.js";
import CiudadMujer from "./routes/CiudadMujer.js";
import GradoAcademico from "./routes/GradoAcademico.js"
import NivelEducativo from "./routes/NivelEducativo.js"
import Modulos from "./routes/Modulo.js"
import BackUp from "./routes/BackUp.js"
import Intermediacion from "./routes/Intermediacion.js"
import Etnia from "./routes/Etnia.js"
import ServicioRequerido from "./routes/ServicioRequerido.js"
import ActorSiempleo from './routes/ActorSiempleo.js'
import Departamento from "./routes/Departamento.js"
import { pool } from "./db.js";  // Importa la conexión a PostgreSQL
import { connectToMSSQL } from "./mssql.js";  // Importa la conexión a SQL Server
import Condicion from "./routes/Condicion.js"
import DirectorioEmpresarial from "./routes/DirectorioEmpresarial.js";
import Seguridad from "./routes/Seguridad.js"

const app = express();

import dotenv from 'dotenv';
dotenv.config();

/**
 * Configura y establece un servidor Express con diversas rutas y middlewares.
 * 
 * Se utilizan los módulos `express`, `morgan`, `cors`, y otros para configurar
 * el servidor, manejar rutas específicas y establecer conexiones a bases de datos
 * PostgreSQL y SQL Server.
 * 
 * @property {number} PORT - El puerto en el que el servidor está escuchando.
 */


app.use(morgan('dev'));  // Middleware para registrar las solicitudes HTTP
app.use(cors());  // Middleware para permitir solicitudes desde otros orígenes (CORS)
app.use(express.json());  // Middleware para parsear solicitudes con JSON
app.use(express.urlencoded({ extended: false }));  // Middleware para parsear solicitudes URL-encoded

//Routes

app.use(BackUp)
app.use(Usuario);
app.use(DirecionGeneral)
app.use(Perfil)
app.use(Regional)
app.use(Recuperacion)
app.use(RegistrosBitacoraGestiones)
app.use(RegistroMensual)
app.use(CiudadMujer)
app.use(GradoAcademico)
app.use(NivelEducativo)
app.use(Modulos)
app.use(Intermediacion)
app.use(Etnia)
app.use(ServicioRequerido)
app.use(ActorSiempleo)
app.use(Departamento)
app.use(Condicion)
app.use(DirectorioEmpresarial)
app.use(Seguridad)


// Inicia el servidor en el puerto especificado
app.listen(PORT);
console.log('Server on port', PORT);


// Conexión a PostgreSQL y muestra el estado de la conexión
pool.query('SELECT NOW()').then(result => {
  console.log('Connected to PostgreSQL:', result.rows[0]);
  console.log('Server on port', process.env.PORT);
}).catch(err => {
  console.error('Error connecting to PostgreSQL:', err);
});


// Conexión a SQL Server y muestra el estado de la conexión
connectToMSSQL().then(() => {
  // Inicia el servidor solo después de establecer las conexiones
  app.listen(process.env.MSSQL_PORT, () => {
    console.log(`Server running on port ${process.env.MSSQL_PORT}`);
  });
}).catch(err => {
  console.error('Error connecting to SQL Server:', err);
});