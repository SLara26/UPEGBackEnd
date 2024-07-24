import { Router } from "express";

import { getIntermediaciones, getIntermediacion, putIntermediacion, postIntermediacion } from "../controllers/Intermediacion.js";

const router = Router();
//rutas
router.get('/tipo_intermediaciones', getIntermediaciones);
router.get('/tipo_intermediacion', getIntermediacion);
router.post('/InsertarTipoIntermediacon', postIntermediacion);
router.put('/ActualizarTipo_intermediacion', putIntermediacion)
export default router;