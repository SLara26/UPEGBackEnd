import { Router } from "express";
//import {getRegionales, getRegional, postRegional, putRegional, getRegionalCiudadMujer, getRegionalSiEmpleo} from "../controllers/Regional.js";
import { getDepartamentos, getDepartamento, postDepartamento, putDepartamento } from "../controllers/Departamento.js";

const router = Router();
//rutas
router.get('/Departamentos', getDepartamentos); 
router.get('/Departamento', getDepartamento);
router.post('/InsertarDepartamento', postDepartamento)
router.put('/ActualizarDepartamento', putDepartamento)


export default router;