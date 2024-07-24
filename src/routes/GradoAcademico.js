import { Router } from "express";
//import {getRegionales, getRegional, postRegional, putRegional} from "../controllers/Regional.js";
import { getGradosAcademicos, getGradoAcademico, getGradoAcademicoPorNivel, postGradoAcademico, putGradoAcademico } from "../controllers/GradoAcademico.js";

const router = Router();
//rutas
router.get('/GradosAcademicos', getGradosAcademicos);
router.get('/GradoAcademico', getGradoAcademico);
router.get('/GradoAcademicoPorNivel/:nivel_educativo', getGradoAcademicoPorNivel);
router.post('/InsertarGradoAcademico', postGradoAcademico)
router.put('/ActualizarGradoAcademico', putGradoAcademico)

export default router;