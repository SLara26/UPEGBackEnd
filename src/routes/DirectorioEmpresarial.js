import { Router } from "express";

import { getEmpresasEmpleate } from "../controllers/DirectorioEmpresarial.js";

const router = Router();

//rutas de gestion
router.get('/EmpresasEmpleate', getEmpresasEmpleate);


export default router;