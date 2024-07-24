import { Router } from "express";
import {getRegionales, getRegional, postRegional, putRegional, getRegionalCiudadMujer, getRegionalSiEmpleo} from "../controllers/Regional.js";

const router = Router();
//rutas
router.get('/Regionales', getRegionales); 
router.get('/Regional', getRegional);
router.get('/RegionalSiEmpleo', getRegionalSiEmpleo);
router.get('/RegionalCiudadMujer', getRegionalCiudadMujer);
router.post('/InsertarRegional', postRegional);
router.put('/ActualizarRegional', putRegional)

export default router;