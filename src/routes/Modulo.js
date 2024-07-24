import { Router } from "express";
import { getModulos, getModulo, getEmpresas } from "../controllers/Modulo.js";
const router = Router();

//rutas
router.get('/Modulos', getModulos);
router.get('/Modulo/:modulo', getModulo);
router.get('/Empresas', getEmpresas);


export default router;