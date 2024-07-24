// Importamos el módulo 'pool' desde el archivo 'db.js' para manejar las conexiones a la base de datos.

import sql from 'mssql';

/**
 * Obtiene todas las empresas desde la base de datos de EMPLEATE.
 * Responde con un array de perfiles en formato JSON.
 * En caso de error, devuelve un mensaje de error con estado 500.
 */
const getEmpresasEmpleate = async (req, res) => {
    try {
        // Construir la consulta SQL con parámetros dinámicos
        const query = `
           SELECT e.EmId, e.EmNombreRZ, e.EmRTN, e.EmNombreCM, e.EmFecha, e.EmEmail, e.PaId, e.DeId, e.MuId, e.EmDireccion, 
                    e.EmTelefono1, e.EmTelefono2, e.EmHombres, e.EmMujeres, e.EmDiscapacitado, e.EmContacto1, e.EmCargo1, 
                    e.EmEmail1, e.EmContacto2, e.EmCargo2, e.EmEmail2, e.Emusuario, e.EmPassword, e.Empassword1, e.EmPeroEmp, e.EMCiudad, 
                    e.EMcontactoCel1, e.EmContactoCel2, e.EmServicio, e.EMNombre, e.EmIdentidad, e.EMPersonaJuridica, e.EMpersonaNatural, 
                    ae.AEDescripcion, e.EmFechaIngreso, e.colocador, e.EstatusEmpresa, e.aceptaterminos, e.sector, e.NivelEducativoH, e.NivelEducativoM, 
                    e.NivelEducatvoD, e.Brindacapacitacion, e.Tipocapacitacion1, e.Tipocapacitacion2, e.Tipocapacitacion3, e.Tipocapacitacion4, 
                    e.Necesidadformacion1, e.Necesidadformacion2, e.Necesidadformacion3, e.Necesidadformacion4, e.ModificadaPor, e.EMPersonaMicro, 
                    e.EmPersonaPequena, e.EmPersonaMediana, e.emusuario2, e.RecolectadoPor, e.cogestora, e.MotivoDesactivacion, e.Agenciacolocacion, 
                    e.AgenciaCertificada, e.ObsRtn, e.Sucursal, e.RTNValidado, e.EmFechaModificacion, e.TipoEmpresa2020
            FROM Empresas as e
            inner join ActividadesEconomicas as ae on e.CodAE = ae.CodAE 

        `;

        // Ejecutar la consulta SQL
        const result = await sql.query(query);

        // Transformar los datos si es necesario
        const transformedResults = result.recordset.map(row => ({
            EmId: row.EmId,
            EmNombreRZ: row.EmNombreRZ,
            EmRTN: row.EmRTN,
            EmNombreCM: row.EmNombreCM,
            EmFecha: row.EmFecha,
            EmEmail: row.EmEmail,
            PaId: row.PaId,
            DeId: row.DeId,
            MuId: row.MuId,
            EmDireccion: row.EmDireccion,
            EmTelefono1: row.EmTelefono1,
            EmTelefono2: row.EmTelefono2,
            EmHombres: row.EmHombres,
            EmMujeres: row.EmMujeres,
            EmDiscapacitado: row.EmDiscapacitado,
            mContacto1: row.mContacto1,
            EmCargo1: row.EmCargo1,
            EmEmail1: row.EmEmail1,
            EmContacto2: row.EmContacto2,
            EmCargo2: row.EmCargo2,
            EmEmail2: row.EmEmail2,
            Emusuario: row.Emusuario,
            EmPassword: row.EmPassword,
            Empassword1: row.Empassword1,
            EmPeroEmp: row.EmPeroEmp,
            EMCiudad: row.EMCiudad,
            EMcontactoCel1: row.EMcontactoCel1,
            EmContactoCel2: row.EmContactoCel2,
            EmServicio: row.EmServicio,
            EMNombre: row.EMNombre,
            EmIdentidad: row.EmIdentidad,
            EMPersonaJuridica: row.EMPersonaJuridica,
            EMpersonaNatural: row.EMpersonaNatural,
            AEDescripcion: row.AEDescripcion,
            EmFechaIngreso: row.EmFechaIngreso,
            colocador: row.colocador,
            EstatusEmpresa: row.EstatusEmpresa,
            aceptaterminos: row.aceptaterminos,
            sector: row.sector,
            NivelEducativoH: row.NivelEducativoH,
            NivelEducativoM: row.NivelEducativoM,
            NivelEducatvoD: row.NivelEducatvoD,
            Brindacapacitacion: row.Brindacapacitacion,
            Tipocapacitacion1: row.Tipocapacitacion1,
            Tipocapacitacion2: row.Tipocapacitacion2,
            Tipocapacitacion3: row.Tipocapacitacion3,
            Tipocapacitacion4: row.Tipocapacitacion4,
            Necesidadformacion1: row.Necesidadformacion1,
            Necesidadformacion2: row.Necesidadformacion2,
            Necesidadformacion3: row.Necesidadformacion3,
            Necesidadformacion4: row.Necesidadformacion4,
            ModificadaPor: row.ModificadaPor,
            EMPersonaMicro: row.EMPersonaMicro,
            EmPersonaPequena: row.EmPersonaPequena,
            EmPersonaMediana: row.EmPersonaMediana,
            emusuario2: row.emusuario2,
            RecolectadoPor: row.RecolectadoPor,
            cogestora: row.cogestora,
            MotivoDesactivacion: row.MotivoDesactivacion,
            Agenciacolocacion: row.Agenciacolocacion,
            AgenciaCertificada: row.AgenciaCertificada,
            ObsRtn: row.ObsRtn,
            Sucursal: row.Sucursal,
            RTNValidado: row.RTNValidado,
            EmFechaModificacion: row.EmFechaModificacion,
            TipoEmpresa2020: row.TipoEmpresa2020

        }));

        // Enviar respuesta JSON con los resultados transformados
        res.status(200).json(transformedResults);
    } catch (error) {
        console.error('Error al ejecutar consulta SQL:', error);
        res.status(500).json({ message: 'Error al obtener las empresas desde EMPLEATE' });
    }
}

// Exportamos las funciones para que puedan ser utilizadas en otros módulos.
export {
    getEmpresasEmpleate
}
