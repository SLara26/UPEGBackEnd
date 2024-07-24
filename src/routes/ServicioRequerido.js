import { Router } from "express";
import { getServiciosRequeridos, getServicioRequerido, postServicioRequerido, putServicioRequerido } from "../controllers/ServicioRequerido.js";

const router = Router();
//rutas
router.get('/ServiciosRequeridos', getServiciosRequeridos); 
router.get('/ServicioRequerido', getServicioRequerido);
router.post('/InsertarServicioRequerido', postServicioRequerido);
router.put('/ActualizarServicioRequerido', putServicioRequerido)

export default router;