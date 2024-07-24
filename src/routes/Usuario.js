import { Router } from "express";
import { pool } from "../db.js";
import { Login, PrimerCambioContrasena, getUsers, getUsuario, postUsers, putUsers, putEstadoUser, getEstadoxCorreo, getVerificarCorreo } from "../controllers/Usuario.js";
//import { verificarToken } from "../Middlewares/verificacion.js";

const router = Router();

router.post('/login', Login);//comparación del login
router.put('/login/PrimerCambioContrasena', PrimerCambioContrasena)
router.get('/VerificarCorreo/:correo_electronico', getVerificarCorreo)


router.get('/EstadoxCorreo/:correo_electronico', getEstadoxCorreo); //Muestra un usuario
router.get('/users', getUsers); //Muesta los usuarios
router.get('/usuario/:id_usuario', getUsuario); //Muestra un usuario
router.post('/insertarUsuario', postUsers); //Inserta nuevos registros
router.put('/actualizarpUsuario', putUsers); //Actuaiza los datos de un usuario
router.put('/actualizarEstadoUsuario', putEstadoUser);// Usuario no se elimina, solo se desactiva

export default router;