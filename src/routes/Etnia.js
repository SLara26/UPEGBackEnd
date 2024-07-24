import { Router } from "express";
import { getEtnias, getEtnia, postEtnia, putEtnia } from "../controllers/Etnia.js";

const router = Router();
//rutas
router.get('/Etnias', getEtnias); 
router.get('/Etnia', getEtnia);
router.post('/InsertarEtnia', postEtnia);
router.put('/ActualizarEtnia', putEtnia)

export default router;