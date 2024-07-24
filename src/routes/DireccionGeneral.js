import { Router } from "express";
import {getDireccionGeneral, getDireccionesGenerales, postDireccionGeneral, putDireccionGeneral} from "../controllers/DirecionGeneral.js";

const router = Router();
//rutas
router.get('/DireccionesGenerales', getDireccionesGenerales); 
router.get('/DireccionGeneral', getDireccionGeneral)
router.post('/InsertarDireccionGeneral', postDireccionGeneral);
router.put('/ActualizarDireccionGeneral', putDireccionGeneral)

export default router;