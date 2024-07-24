import jwt from "jsonwebtoken";

const verificarToken = (req, res, next) => {
    const token = req.headers.authorization;

    if (!token) {
        return res.status(401).json({ error: 'Acceso no autorizado - Token no proporcionado' });
    }

    try {
        const decoded = jwt.verify(token, 'secreto'); // Verificar y decodificar el token
        req.userId = decoded.userId; // Agregar el ID de usuario decodificado al objeto de solicitud
        next(); // Continuar con la siguiente operación después de la verificación
    } catch (error) {
        console.error(error);
        return res.status(403).json({ error: 'Acceso no autorizado - Token inválido' });
    }
};

export {verificarToken}