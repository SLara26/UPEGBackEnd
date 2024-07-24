import { Router } from "express";
import { BackUp } from "../controllers/BackUp.js";
const router = Router();

//Rutas
router.get('/BackUp', BackUp);
//router.get('/Archivos', getArchivos);

export default router;