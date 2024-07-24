import { Router } from "express";
import { getRegistrosCiudadMujer } from "../controllers/CiudadMujer.js";

const router = Router();


//rutas de ciudad mujer
router.get('/RegistrosCiudadMujer', getRegistrosCiudadMujer);
//router.get('/RegistroCiudadMujer', getRegistroCiudadMujer)


export default router;