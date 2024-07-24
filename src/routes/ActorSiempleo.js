
import { Router } from "express";
import { getActoresSiempleo, getMatrizActoresSiempleo, getMatrizProgramasActoresSiEmpleo, postActorSiempleo, postProgramaActorSiempleo, putProgramasActoresSiEmpleo, putActoresSiEmpleo } from "../controllers/ActorSiempleo.js";

const router = Router();
//rutas
router.get('/ActoresSiempleo', getActoresSiempleo); 
router.get('/MatrizProgramasActoresSiempleo', getMatrizProgramasActoresSiEmpleo);
router.get('/MatrizActoresSiempleo', getMatrizActoresSiempleo);
router.post('/InsertarActorSiempleo', postActorSiempleo);
router.post('/InsertarProgramaActorSiempleo', postProgramaActorSiempleo);
router.put('/ActualizarProgramaActorSiempleo', putProgramasActoresSiEmpleo);
router.put('/ActulizarActorSiempleo', putActoresSiEmpleo);

export default router;
