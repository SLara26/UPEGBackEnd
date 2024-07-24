import { Router } from "express";
import { getRegistrosMensuales, PostRegistroMensual, PutEmpresaAsesoradaPorUnidadPromocionEmpleo, PutAtencionVirtualaEmpleadorParaPromocionyCapacitacionServicios, 
       PutAtencionTelefonicaaEmpleadorParaPromocionyCapacitacionServicios, PutRegistroyValidacionDeEmpresaConUsuario, getRegistroMensual, PutSeguimientoaEmpresa, PutServicio
 } from "../controllers/RegistroMensual.js";

const router = Router();


//rutas de gestion
router.get('/RegistrosMensuales', getRegistrosMensuales);
router.get('/RegistroMensual', getRegistroMensual);
router.post('/InsertarRegistroMensual', PostRegistroMensual);
router.put('/ActualizarEmpresaAsesoradaPorUnidadPromocionEmpleo', PutEmpresaAsesoradaPorUnidadPromocionEmpleo)
router.put('/ActualizarAtencionVirtualaEmpleadorParaPromocionyCapacitacionServicios', PutAtencionVirtualaEmpleadorParaPromocionyCapacitacionServicios)
router.put('/ActualizarAtencionTelefonicaaEmpleadorParaPromocionyCapacitacionServicios', PutAtencionTelefonicaaEmpleadorParaPromocionyCapacitacionServicios)
router.put('/ActualizarRegistroyValidacionDeEmpresaConUsuario', PutRegistroyValidacionDeEmpresaConUsuario)
router.put('/ActualizarSeguimientoaEmpresa', PutSeguimientoaEmpresa)
router.put('/ActualizarServicio', PutServicio)



export default router;