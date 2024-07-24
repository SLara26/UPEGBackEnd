import { Router } from "express";
import { getCondiciones, getCondicion, postCondicion, putCondicion } from "../controllers/Condicion.js";

const router = Router();
//rutas
router.get('/Condiciones', getCondiciones); 
router.get('/Condicion', getCondicion);
router.post('/InsertarCondicion', postCondicion);
router.put('/ActualizarCondicion', putCondicion);



export default router;