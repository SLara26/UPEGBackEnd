import { Router } from "express";
import {getPerfiles, getPerfil, postPerfil, putPerfil} from "../controllers/Perfil.js";

const router = Router();
//rutas
router.get('/Perfiles', getPerfiles); 
router.get('/Perfil', getPerfil)
router.post('/InsertarPerfil', postPerfil);
router.put('/ActualizarPerfil', putPerfil)

export default router;