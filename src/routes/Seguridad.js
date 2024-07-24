import { Router } from "express";

import { getPermisos } from "../controllers/Seguridad.js";

const router = Router();

//Rutas
router.get('/permisos/:id_perfil', getPermisos);

export default router;