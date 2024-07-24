import { Router } from "express";
import { forgotPassword, validateTempPassword, resetPassword } from "../controllers/Recuperacion.js";
//import router from "./Usuario.js";

const router = Router();
//Recuperacion
router.post('/forgot-password', forgotPassword);
router.post('/validate-temp-password', validateTempPassword);
router.post('/reset-password', resetPassword);

export default router