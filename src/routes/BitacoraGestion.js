import { Router } from "express";

import { getRegistrosSiEmpleo, getRegistrosRegional, insertRegistroSiEmpleo, updateData, /* putAsesoriaVentanillaUnica, putDatosPersonales, putDerivacion, putIntermediacionLaboral, putMovimientoMigratorio, putOrientacionLaboral, putSeguimientoGestionSiempleo */ 

getTipoTelefono,
getEmpresasSS,
getEmpresaRTN,
getCandidatosID

    } from "../controllers/BitacoraGestion.js";

const router = Router();


//rutas de gestion
router.get('/RegistrosSiEmpleo', getRegistrosSiEmpleo);
router.get('/RegistrosRegional/:regional', getRegistrosRegional);
router.post('/InsertRegistroSiEmpleo', insertRegistroSiEmpleo);
/* router.put('/UpdateRegistro', putDatosPersonales);
router.put('/Derivacion', putDerivacion);
router.put('/MovimientoMigratorio', putMovimientoMigratorio);
router.put('/Seguimiento', putSeguimientoGestionSiempleo);
router.put('/Ventanilla', putAsesoriaVentanillaUnica);
router.put('/Intermedicacion', putIntermediacionLaboral);
router.put('/Orientacion', putOrientacionLaboral); */
router.put('/UpdateRegistros',updateData)

router.get('/GetTEmpresasEmpleate', getEmpresasSS)
router.get('/GetTEmpresasRTN', getEmpresaRTN)
router.get('/CandidatosEmpleate', getCandidatosID)

router.get('/GetTipoTelefono', getTipoTelefono)









export default router;