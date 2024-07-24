import { Router } from "express";
//import { getGradosAcademicos, getGradoAcademico, postGradoAcademico, putGradoAcademico } from "../controllers/GradoAcademico.js";
import { getNivelesEducativos, getNivelEducativo, postNivelEducativo, putNivelEducativo } from "../controllers/NivelEducativo.js";

const router = Router();
//rutas
router.get('/NivelesEducativos', getNivelesEducativos); 
router.get('/NivelEducativo', getNivelEducativo);
router.post('/InsertarNivelEducativo', postNivelEducativo)
router.put('/ActualizarNivelEducativo', putNivelEducativo);

export default router;