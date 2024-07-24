// Importamos el módulo 'pool' desde el archivo 'db.js' para manejar las conexiones a la base de datos.
import { pool } from "../db.js";
import sql from 'mssql';


const getCandidatosID = async (req, res) => {
    const { CaNumeroIdentidad } = req.body;
    console.log(CaNumeroIdentidad);

    // Verificar que CaNumeroIdentidad no esté vacío
    if (!CaNumeroIdentidad) {
        return res.status(400).json({ message: 'El campo CaNumeroIdentidad es obligatorio' });
    }

    const query = `
        SELECT CaId, CaprimerNombre, CaSegundoNombre, CaPrimerApellido, CaSegundoApellido, CaSexo, CaFechaNacimiento, CaNumeroIdentidad, NaId, CaEstadoCivil, DeId, MuId, CaDomicilio, CaEmail, CaEmailAlterno, CaTelefonoAlterno, CaTelefono, CaCelular, CaEstadoLaboral, CaIHSS, CaJornada, CaDisViajarE, CaDisViajar, CaLicencia, CaCarro, CaMoto, CaMarino, CaTraMar, CaDisMar, CaSHE, Causuario, Capassword, Capassword1, CaTipoLicencia, Lugid, cafecha, Edad, Ocid, CaDiscapacitado, CiudadId, CaJefeFamilia, CaTiempoDesempleo, CaLicmoto, colocador, NivelEducativo, RecibirCorreo, observacioncandidato, EsmarinoActual, CatipoUsuario, aceptaterminos, PoseeCorreo, CiudadNacimiento, Camigrante, etnias, BajaMilitar, ocid2, ocid3, aparecerBuscador, Sector, Nivel, UltimoGrado, Grado, Titulo, NivelE, modificadopor, NombreCompleto, Estatus, FechaModificacion, FechaActCandidato, existeMunicipio, Nacionalidad1
        FROM Candidatos
        WHERE CaNumeroIdentidad = @CaNumeroIdentidad
    `;

    try {
        // Crear una nueva solicitud SQL
        const request = new sql.Request();

        // Establecer el parámetro
        request.input('CaNumeroIdentidad', sql.VarChar, CaNumeroIdentidad);

        // Ejecutar la consulta SQL
        const result = await request.query(query);

        // Registrar el resultado
        console.log(result.recordset[0]);

        // Enviar respuesta JSON con los resultados
        res.status(200).json(result.recordset[0]);
    } catch (error) {
        console.error('Error al ejecutar consulta SQL:', error);
        res.status(500).json({ message: 'Error al obtener los candidatos desde EMPLEATE' });
    }
};


//Función asincrónica que muestra todos los registros de si empleo
const getRegistrosSiEmpleo = async (req, res) => {
    try {
        // Utilizo query y formateo el SQL para que traiga los datos
        const { rows } = await pool.query(`
                SELECT 
                    r.id_registro, r.fecha, 
                    --estos datos son del candidato
                    r.nombre_completo, r.identidad, r.edad, r.genero, 
                    ne.nivel_educativo, ga.grado_academico, 

                    -- Subquery 1: Teléfonos
                    t.telefono, t.id_tipo_telefono,

                    r.correo_electronico, 

                    r.inspeccion_por_primera_vez, r.actualizacion_informacion_candidato,

                    -- Subquery 2: Intermediaciones Laborales
                    il.empresa_intermedio, il.intermediacion_candidato, il.id_tipo_intermediacion,

                    ol.charlas_orientacion_laboral, ol.orientacion_taller, ol.aplicacion_prueba, 
                    ol.creacion_correo, ol.elaboracion_cv, ol.impresion_cv, ol.envio_cv, 

                    di.derivaciones, di.derivacion_a_formalizacion, di.derivacion_asistencia_tecnica, 
                    di.derivacion_a_emprendimiento, di.derivacion_a_credito, di.modulo_ciudad_mujer,

                    mm.migrante_retornado, mm.refugiado_migrante, mm.desplazado_interno, mm.marinos, 

                    sgs.seguimiento_a_candidato, sgs.seguimiento_a_orientado,

                    avu.asesoria_ocupacional_miembros_con_discapacidad, 
                    avu.asesoria_programa_de_trabajo_en_el_extrangero_ptte, 
                    avu.otras_asesorias_brindadas_vu, 

                     --estos datos son del usuario
                    u.nombres, u.primer_apellido, u.segundo_apellido,
                    
                    r.observacion, m.modulo

                FROM 
                    registro AS r
                    INNER JOIN grado_academico AS ga ON r.id_grado_academico = ga.id_grado_academico
                    INNER JOIN nivel_educativo AS ne ON ga.id_nivel_educativo = ne.id_nivel_educativo
                    INNER JOIN regional AS re ON r.id_regional = re.id_regional
                    INNER JOIN derivacion_interistitucional AS di ON r.id_derivacion_interistitucional = di.id_derivacion_interistitucional
                    INNER JOIN movimiento_migratorio AS mm ON r.id_movimiento_migratorio = mm.id_movimiento_migratorio
                    INNER JOIN seguimiento_gestion_siempleo AS sgs ON r.id_seguimiento_gestion_siempleo = sgs.id_seguimiento_gestion_siempleo 
                    INNER JOIN asesoria_ventanilla_unica AS avu ON r.id_asesoria_ventanilla_unica = avu.id_asesoria_ventanilla_unica
                    INNER JOIN orientacion_laboral AS ol ON r.id_orientacion_laboral = ol.id_orientacion_laboral
                    INNER JOIN usuario AS u ON u.id_usuario = r.id_usuario
                    INNER JOIN modulo AS m ON m.id_modulo = r.id_modulo
                    inner join intermediacion_laboral as il on r.id_intermediacion_laboral= il.id_intermediacion_laboral
                    --inner join tipo_intermediacion as ti on il.id_tipo_intermediacion= ti.id_tipo_intermediacion
                    inner join telefono as t on r.id_telefono=t.id_telefono
                    --inner join tipo_telefono as tt  on t.id_tipo_telefono=tt.id_tipo_telefono
                WHERE 
                    m.modulo = 'Si Empleo' 
                ORDER BY 
                    r.id_registro DESC;

 `);

        // Inicializar variables para las sumatorias
        let sumaInspeccion_por_primera_vez = 0;
        let sumaActualizacion_informacion_candidato = 0;
        let sumaDerivaciones = 0;
        let sumaDerivacion_a_formalizacion = 0;
        let sumaDerivacion_asistencia_tecnica = 0;
        let sumaDerivacion_a_emprendimiento = 0;
        let sumaDerivacion_a_credito = 0;
        let sumaModulo_ciudad_mujer = 0;
        let sumaMigrante_retornado = 0;
        let sumaRefugiado_migrante = 0;
        let sumaDesplazado_interno = 0;
        let sumaMarinos = 0;
        let sumaSeguimiento_a_candidato = 0;
        let sumaSeguimiento_a_orientado = 0;
        let sumaAsesoria_ocupacional_miembros_con_discapacidad = 0;
        let sumaAsesoria_programa_de_trabajo_en_el_extrangero_ptte = 0;
        let sumaOtras_asesorias_brindadas_vu = 0;
        let sumaIntermediacion_candidato = 0;
        //let sumaEmpresas_intermedio =0;
        let sumaIntermediacion = 0;
        let sumaCharlas_orientacion_laboral = 0;
        let sumaOrientacion_taller = 0;
        let sumaAplicacion_prueba = 0;
        let sumaCreacion_correo = 0;
        let sumaElaboracion_cv = 0;
        let sumaImpresion_cv = 0;
        let sumaEnvio_cv = 0;

        // Inicializar contadores de genero
        let cuentaFemenino = 0;
        let cuentaMasculino = 0;
        let cuentaOtro = 0;




        // Iterar sobre los registros para calcular las sumatorias
        rows.forEach(row => {
            sumaInspeccion_por_primera_vez += parseInt(row.inspeccion_por_primera_vez, 10);
            sumaActualizacion_informacion_candidato += parseInt(row.actualizacion_informacion_candidato, 10);
            sumaDerivaciones += parseInt(row.derivaciones, 10);
            sumaDerivacion_a_formalizacion += parseInt(row.derivacion_a_formalizacion, 10);
            sumaDerivacion_asistencia_tecnica += parseInt(row.derivacion_asistencia_tecnica, 10);
            sumaDerivacion_a_emprendimiento += parseInt(row.derivacion_a_emprendimiento, 10);
            sumaDerivacion_a_credito += parseInt(row.derivacion_a_credito, 10);
            sumaModulo_ciudad_mujer += parseInt(row.modulo_ciudad_mujer, 10);
            sumaMigrante_retornado += parseInt(row.migrante_retornado, 10);
            sumaRefugiado_migrante += parseInt(row.refugiado_migrante, 10);
            sumaDesplazado_interno += parseInt(row.desplazado_interno, 10);
            sumaMarinos += parseInt(row.marinos, 10);
            sumaSeguimiento_a_candidato += parseInt(row.seguimiento_a_candidato, 10);
            sumaSeguimiento_a_orientado += parseInt(row.seguimiento_a_orientado, 10);
            sumaAsesoria_ocupacional_miembros_con_discapacidad += parseInt(row.asesoria_ocupacional_miembros_con_discapacidad, 10);
            sumaAsesoria_programa_de_trabajo_en_el_extrangero_ptte += parseInt(row.asesoria_programa_de_trabajo_en_el_extrangero_ptte, 10);
            sumaOtras_asesorias_brindadas_vu += parseInt(row.otras_asesorias_brindadas_vu, 10);
            sumaIntermediacion_candidato += parseInt(row.intermediacion_candidato, 10);
            // sumaEmpresas_intermedio+= parseInt(row.empresas_intermedio, 10);
            sumaIntermediacion += parseInt(row.intermediacion, 10);
            sumaCharlas_orientacion_laboral += parseInt(row.charlas_orientacion_laboral, 10);
            sumaOrientacion_taller += parseInt(row.orientacion_taller, 10);
            sumaAplicacion_prueba += parseInt(row.aplicacion_prueba, 10);
            sumaCreacion_correo += parseInt(row.creacion_correo, 10);
            sumaElaboracion_cv += parseInt(row.elaboracion_cv, 10);
            sumaImpresion_cv += parseInt(row.impresion_cv, 10);
            sumaEnvio_cv += parseInt(row.envio_cv, 10);

            // Contar valores de genero
            if (row.genero === 'Femenino') {
                cuentaFemenino++;
            } else if (row.genero === 'Masculino') {
                cuentaMasculino++;
            } else {
                cuentaOtro++;
            }



        });

        // Calcular el total sumando las sumatorias parciales
        const total = sumaInspeccion_por_primera_vez + sumaActualizacion_informacion_candidato + sumaDerivaciones +
            sumaDerivacion_a_formalizacion + sumaDerivacion_asistencia_tecnica + sumaDerivacion_a_emprendimiento +
            sumaDerivacion_a_credito + sumaModulo_ciudad_mujer + sumaMigrante_retornado + sumaRefugiado_migrante +
            sumaDesplazado_interno + sumaMarinos + sumaSeguimiento_a_candidato + sumaSeguimiento_a_orientado +
            sumaAsesoria_ocupacional_miembros_con_discapacidad + sumaAsesoria_programa_de_trabajo_en_el_extrangero_ptte +
            sumaOtras_asesorias_brindadas_vu + sumaIntermediacion_candidato + /* sumaEmpresas_intermedio + */
            sumaIntermediacion + sumaCharlas_orientacion_laboral + sumaOrientacion_taller + sumaAplicacion_prueba +
            sumaCreacion_correo + sumaElaboracion_cv + sumaImpresion_cv + sumaEnvio_cv;

        const genero = cuentaFemenino + cuentaMasculino + cuentaOtro;

        // Enviar los registros y las sumatorias como respuesta en formato JSON
        res.json({
            registros: rows,
            sumatorias: {
                sumaInspeccion_por_primera_vez,
                sumaActualizacion_informacion_candidato,
                sumaDerivaciones,
                sumaDerivacion_a_formalizacion,
                sumaDerivacion_asistencia_tecnica,
                sumaDerivacion_a_emprendimiento,
                sumaDerivacion_a_credito,
                sumaModulo_ciudad_mujer,
                sumaMigrante_retornado,
                sumaRefugiado_migrante,
                sumaDesplazado_interno,
                sumaMarinos,
                sumaSeguimiento_a_candidato,
                sumaSeguimiento_a_orientado,
                sumaAsesoria_programa_de_trabajo_en_el_extrangero_ptte,
                sumaOtras_asesorias_brindadas_vu,
                sumaIntermediacion_candidato,
                //sumaEmpresas_intermedio,
                sumaIntermediacion,
                sumaCharlas_orientacion_laboral,
                sumaOrientacion_taller,
                sumaAplicacion_prueba,
                sumaCreacion_correo,
                sumaElaboracion_cv,
                sumaImpresion_cv,
                sumaEnvio_cv,
                total
            },
            genero: {
                femenino: cuentaFemenino,
                masculino: cuentaMasculino,
                otro: cuentaOtro,
                genero
            }
        });
    } catch (error) {
        // Registro del error en la consola y envío de una respuesta de error con un mensaje adecuado
        console.error(error.message);
        res.status(500).json({ message: 'Error al obtener los registros de registro de gestiones' });
    }
};



const getEmpresaRTN = async (req, res) => {
    const { EmRTN } = req.body;

    // Verificar que EmRTN sea un array
    if (!Array.isArray(EmRTN)) {
        return res.status(400).json({ message: 'EmRTN debe ser un array' });
    }

    // Construir la lista de parámetros dinámicos para la consulta
    const placeholders = EmRTN.map((_, index) => `@EmRTN${index}`).join(',');
    const query = `
        SELECT e.EmNombreRZ 
        FROM Empresas e
        INNER JOIN Vacantes v ON v.EmId = e.EmId  
        WHERE v.VaEstatus = 1 AND e.RTNValidado = 1 AND e.EmRTN IN (${placeholders})
    `;

    try {
        // Configurar la solicitud y agregar parámetros dinámicos
        const request = new sql.Request();
        EmRTN.forEach((rtn, index) => {
            request.input(`EmRTN${index}`, sql.VarChar, rtn);
        });

        // Ejecutar la consulta SQL
        const result = await request.query(query);

        // Enviar respuesta JSON con los resultados
        res.status(200).json(result.recordset);
    } catch (error) {
        console.error('Error al ejecutar consulta SQL:', error);
        res.status(500).json({ message: 'Error al obtener las empresas desde EMPLEATE' });
    }
};



// Función asincrónica que muestra todos los registros de gestión de bitácora filtrados por id_regional
const getRegistrosRegional = async (req, res) => {
    try {
        // Obtengo el id_regional de los parámetros de la solicitud
        const { regional } = req.params;
        //   console.log('El id de la regional es:', req.body.id_regional);

        // Verifico que se haya proporcionado el id_regional
        if (!regional) {
            return res.status(400).json({ message: 'El la regional es requerida' });
        }

        // Utilizo query y formateo el SQL para que traiga los datos filtrados por id_regional
        const { rows } = await pool.query(`
       SELECT 
            r.id_registro, 
            r.id_regional,
            r.id_derivacion_interistitucional,
            r.id_movimiento_migratorio,
            r.id_seguimiento_gestion_siempleo,
            r.id_asesoria_ventanilla_unica,
            r.id_intermediacion_laboral,
            r.id_grado_academico,
            r.id_telefono,
            r.id_usuario,
            r.id_modulo,
            r.fecha, r.nombre_completo, r.identidad, r.edad, r.genero, 
            ne.nivel_educativo, ga.grado_academico, r.correo_electronico, 
            r.inspeccion_por_primera_vez, r.actualizacion_informacion_candidato,
            di.derivaciones, di.derivacion_a_formalizacion, di.derivacion_asistencia_tecnica, 
            di.derivacion_a_emprendimiento, di.derivacion_a_credito, di.modulo_ciudad_mujer, di.acuerdos_con_cooperante,
            mm.migrante_retornado, mm.refugiado_migrante, mm.desplazado_interno, mm.marinos, et.etnia,
            sgs.seguimiento_a_candidato, sgs.seguimiento_a_orientado,
            avu.asesoria_ocupacional_miembros_con_discapacidad, 
            avu.asesoria_programa_de_trabajo_en_el_extrangero_ptte, 
            avu.otras_asesorias_brindadas_vu, 
            ol.charlas_orientacion_laboral, ol.orientacion_taller, ol.aplicacion_prueba, 
            ol.creacion_correo, ol.elaboracion_cv, ol.impresion_cv, ol.envio_cv, 
            r.observacion, m.modulo,
            u.nombres, u.primer_apellido, u.segundo_apellido,
            -- Subquery 1: Teléfonos
            ARRAY_AGG(distinct tel.telefono) AS telefonos,
            ARRAY_AGG(distinct tt.tipo_telefono) AS tipos_telefono,
            -- Subquery 2: Intermediaciones Laborales
            ARRAY_AGG(DISTINCT il.empresa_intermedio) AS empresas_intermedias,
            ARRAY_AGG(DISTINCT il.intermediacion_candidato) AS intermediacion_candidatos,
            ARRAY_AGG(distinct ti.tipo_intermediacion) AS tipos_intermediacion
        FROM 
            registro AS r
            INNER JOIN grado_academico AS ga ON r.id_grado_academico = ga.id_grado_academico
            INNER JOIN nivel_educativo AS ne ON ga.id_nivel_educativo = ne.id_nivel_educativo
            INNER JOIN regional AS re ON r.id_regional = re.id_regional
            INNER JOIN derivacion_interistitucional AS di ON r.id_derivacion_interistitucional = di.id_derivacion_interistitucional
            INNER JOIN movimiento_migratorio AS mm ON r.id_movimiento_migratorio = mm.id_movimiento_migratorio
            INNER JOIN etnia AS et ON mm.id_etnia = et.id_etnia 
            INNER JOIN seguimiento_gestion_siempleo AS sgs ON r.id_seguimiento_gestion_siempleo = sgs.id_seguimiento_gestion_siempleo 
            INNER JOIN asesoria_ventanilla_unica AS avu ON r.id_asesoria_ventanilla_unica = avu.id_asesoria_ventanilla_unica
            INNER JOIN orientacion_laboral AS ol ON r.id_orientacion_laboral = ol.id_orientacion_laboral
            INNER JOIN usuario AS u ON u.id_usuario = r.id_usuario
            INNER JOIN modulo AS m ON m.id_modulo = r.id_modulo
            -- Subquery 1: Teléfonos
            LEFT JOIN ( 
                SELECT distinct 
                    id_telefono, 
                    unnest(telefono) AS telefono, 
                    unnest(id_tipo_telefono) AS id_tipo_telefono
                FROM 
                    telefono
            ) AS tel ON r.id_telefono = tel.id_telefono
            LEFT JOIN tipo_telefono tt ON tel.id_tipo_telefono = tt.id_tipo_telefono
            -- Subquery 2: Intermediaciones Laborales
            LEFT JOIN (
                SELECT distinct 
                    id_intermediacion_laboral, 
                    empresa_intermedio, 
                    unnest(intermediacion_candidato) AS intermediacion_candidato, 
                    unnest(id_tipo_intermediacion) AS id_tipo_intermediacion
                FROM 
                    intermediacion_laboral
            ) AS il ON r.id_intermediacion_laboral = il.id_intermediacion_laboral
            LEFT JOIN tipo_intermediacion ti ON il.id_tipo_intermediacion = ti.id_tipo_intermediacion
        WHERE 
            re.regional = $1 AND m.modulo = 'Si Empleo'
        GROUP BY 
            r.id_registro, r.fecha, r.nombre_completo, r.identidad, r.edad, r.genero, 
            ne.nivel_educativo, ga.grado_academico, r.correo_electronico, 
            r.inspeccion_por_primera_vez, r.actualizacion_informacion_candidato,
            di.derivaciones, di.derivacion_a_formalizacion, di.derivacion_asistencia_tecnica, 
            di.derivacion_a_emprendimiento, di.derivacion_a_credito, di.modulo_ciudad_mujer, di.acuerdos_con_cooperante,
            mm.migrante_retornado, mm.refugiado_migrante, mm.desplazado_interno, mm.marinos, et.etnia,
            sgs.seguimiento_a_candidato, sgs.seguimiento_a_orientado,
            avu.asesoria_ocupacional_miembros_con_discapacidad, 
            avu.asesoria_programa_de_trabajo_en_el_extrangero_ptte, 
            avu.otras_asesorias_brindadas_vu, 
            ol.charlas_orientacion_laboral, ol.orientacion_taller, ol.aplicacion_prueba, 
            ol.creacion_correo, ol.elaboracion_cv, ol.impresion_cv, ol.envio_cv, 
            r.observacion, m.modulo,
            u.nombres, u.primer_apellido, u.segundo_apellido
        ORDER BY 
            r.id_registro DESC;      
                    

                
   

        `, [regional]);

        // Envío los registros obtenidos como respuesta en formato JSON
        res.json(rows);
    } catch (error) {
        // Registro del error en la consola y envío de una respuesta de error con un mensaje adecuado
        console.error(error.message);
        res.status(500).json({ message: 'Error al obtener los registros de registro de gestiones' });
    }
};


const getEmpresasSS = async (req, res) => {
    try {
        // Construir la consulta SQL con parámetros dinámicos
        const query = `
            SELECT  usuarios.regional,
                        empresas.EmNombreRZ,
                        empresas.EmRTN,
                        SUM(vacantes.VaNumVacantes) AS totalVacantes
                    FROM Empresas
                    INNER JOIN Vacantes ON Vacantes.EmId = Empresas.EmId  
                    INNER JOIN Usuarios ON Usuarios.UsUser = empresas.colocador 
                    WHERE vaestatus = 1 and RTNValidado=1 
                    GROUP BY usuarios.regional, empresas.EmNombreRZ, empresas.EmRTN 
        `;

        // Ejecutar la consulta SQL
        const result = await sql.query(query);

        // Enviar respuesta JSON con los resultados
        res.status(200).json(result.recordset);
    } catch (error) {
        console.error('Error al ejecutar consulta SQL:', error);
        res.status(500).json({ message: 'Error al obtener las empresas desde EMPLEATE' });
    }
};



const getTipoTelefono = async (req, res) => {
    try {
        const tipoTelefonos = await pool.query(`
            SELECT id_tipo_telefono, tipo_telefono
            FROM tipo_telefono
        `);

        res.status(200).json(tipoTelefonos.rows); // Enviar respuesta con los resultados
    } catch (err) {
        console.error("Error al obtener tipos de teléfono:", err);
        res.status(500).json({ error: "Error interno del servidor" });
    }
};



//Función asincrónica que insertar registros en registro de Gestion
const insertRegistroSiEmpleo = async (req, res) => {

    //Define las variables
    const {
        regional, derivaciones, derivacion_a_formalizacion, derivacion_asistencia_tecnica, derivacion_a_emprendimiento, derivacion_a_credito, modulo_ciudad_mujer, acuerdos_con_cooperante,
        migrante_retornado, refugiado_migrante, desplazado_interno, marinos, id_etnia,
        seguimiento_a_candidato, seguimiento_a_orientado,
        asesoria_ocupacional_miembros_con_discapacidad, asesoria_programa_de_trabajo_en_el_extrangero_ptte, otras_asesorias_brindadas_vu,

        charlas_orientacion_laboral, orientacion_taller, aplicacion_prueba, creacion_correo, impresion_cv, envio_cv, elaboracion_cv,
        fecha, nombre_completo, identidad, fecha_nacimiento, edadCalculada, genero, grado_academico, telefono, tipo_telefono, correo_electronico,
        inspeccion_por_primera_vez, actualizacion_informacion_candidato,
        observacion, modulo, id_usuario
    } = req.body;

    //muestra los datos del body en la consola
    console.log('Respuesta del servidor:', req.body);


    try {

        //----------------------------------------------------------------------------------------------------------------------------
        //REGIONAL
        //----------------------------------------------------------------------------------------------------------------------------
        // Trae los registros de la tabla relacionada  `regional`
        const resultRegional = await pool.query(`SELECT id_regional FROM regional WHERE regional=$1 AND estado='A';`, [regional]);
        const id_regional = resultRegional.rows[0].id_regional;//guardar los datos en una variable constante
        console.log("Id regional: " + id_regional);

        //----------------------------------------------------------------------------------------------------------------------------
        //DERIVACION
        //----------------------------------------------------------------------------------------------------------------------------
        //define las variables
        const derivacionValues = [
            derivaciones, derivacion_a_formalizacion, derivacion_asistencia_tecnica, derivacion_a_emprendimiento, derivacion_a_credito, modulo_ciudad_mujer, acuerdos_con_cooperante
        ];

        // QUERY QUE INSERTA LOS DATOS EN LA TABLA derivacion_interistitucional
        const derivacionQuery = await pool.query(`
            INSERT INTO derivacion_interistitucional (derivaciones, derivacion_a_formalizacion, derivacion_asistencia_tecnica, derivacion_a_emprendimiento, derivacion_a_credito, modulo_ciudad_mujer, acuerdos_con_cooperante)
            VALUES ($1, $2, $3, $4, $5, $6, $7)
            RETURNING id_derivacion_interistitucional;`, derivacionValues);
        console.log("Id derivacion: " + derivacionQuery.rows[0].id_derivacion_interistitucional);//muestra los datos en la consola
        const id_derivacion_interistitucional = derivacionQuery.rows[0].id_derivacion_interistitucional; //guardar los datos en una variable constante


        //----------------------------------------------------------------------------------------------------------------------------
        // Insertar en la tabla relacionada `movimiento_migratorio`
        //----------------------------------------------------------------------------------------------------------------------------
        //define las variables
        const migratorioValues = [
            migrante_retornado, refugiado_migrante, desplazado_interno, marinos, id_etnia
        ];

        // QUERY QUE INSERTA LOS DATOS EN LA TABLA movimiento_migratorio
        const migratorioQuery = await pool.query(`
            INSERT INTO movimiento_migratorio (migrante_retornado, refugiado_migrante, desplazado_interno, marinos, id_etnia)
            VALUES ($1, $2, $3, $4, $5) 
            RETURNING id_movimiento_migratorio;`, migratorioValues);

        console.log("migracion: " + migratorioQuery.rows[0].id_movimiento_migratorio);//muestra los datos en la consola
        const id_movimiento_migratorio = migratorioQuery.rows[0].id_movimiento_migratorio;//guardar los datos en una variable constante



        //----------------------------------------------------------------------------------------------------------------------------
        // Insertar en la tabla relacionada `seguimiento_gestion_siempleo`
        //----------------------------------------------------------------------------------------------------------------------------
        const seguimientoValues = [
            seguimiento_a_candidato, seguimiento_a_orientado
        ];

        // QUERY QUE INSERTA LOS DATOS EN LA TABLA seguimiento_gestion_siempleo
        const seguimientoQuery = await pool.query(`
            INSERT INTO seguimiento_gestion_siempleo (seguimiento_a_candidato, seguimiento_a_orientado)
            VALUES ($1, $2)
            RETURNING id_seguimiento_gestion_siempleo;`, seguimientoValues);

        console.log("seguimiento: " + seguimientoQuery.rows[0].id_seguimiento_gestion_siempleo);//muestra los datos en la consola
        const id_seguimiento_gestion_siempleo = seguimientoQuery.rows[0].id_seguimiento_gestion_siempleo;//guardar los datos en una variable constante

        //----------------------------------------------------------------------------------------------------------------------------
        // Insertar en la tabla relacionada `asesoria_ventanilla_unica`
        //----------------------------------------------------------------------------------------------------------------------------
        const asesoriaValues = [
            asesoria_ocupacional_miembros_con_discapacidad, asesoria_programa_de_trabajo_en_el_extrangero_ptte, otras_asesorias_brindadas_vu
        ];

        // QUERY QUE INSERTA LOS DATOS EN LA TABLA asesoria_ventanilla_unica
        const asesoriaQuery = await pool.query(`
            INSERT INTO asesoria_ventanilla_unica (asesoria_ocupacional_miembros_con_discapacidad, asesoria_programa_de_trabajo_en_el_extrangero_ptte, otras_asesorias_brindadas_vu)
            VALUES ($1, $2, $3)
            RETURNING id_asesoria_ventanilla_unica;` , asesoriaValues);

        console.log("ventanilla: " + asesoriaQuery.rows[0].id_asesoria_ventanilla_unica);//muestra los datos en la consola
        const id_asesoria_ventanilla_unica = asesoriaQuery.rows[0].id_asesoria_ventanilla_unica;//guardar los datos en una variable constante



        //----------------------------------------------------------------------------------------------------------------------------
        // Select en la tabla `empresas` de la base de datos EMPLEATE
        //----------------------------------------------------------------------------------------------------------------------------
        // Select en SQLServer

        /**
         *  •	Extracción de emRtnArray: Obtiene el arreglo de empresas en la variable emRtnArray del cuerpo de la solicitud (req.body).
            •	Validación: Verifica que emRtnArray exista y sea un arreglo. Si no cumple con estas condiciones, responde con un error 400 (solicitud incorrecta).
         */
        const { emRtnArray } = req.body;
        console.log('Empresas con vacantes para intermediar: ' + emRtnArray);
        // Verificar que emRtnArray exista y sea un arreglo
        if (!emRtnArray || !Array.isArray(emRtnArray)) {
            return res.status(400).json({ message: 'emRtnArray debe ser un arreglo de textos' });
        }


        /** 
         *  •	Placeholders Dinámicos: Crea una lista de placeholders para los parámetros de la consulta SQL utilizando los elementos de emRtnArray.
            •	Consulta SQL: Construye la consulta SQL para seleccionar información de las tablas Empresas, Vacantes y Usuarios. La consulta:
                o	Selecciona la regional del usuario, el nombre de la empresa (EmNombreRZ), el RTN de la empresa (EmRTN), y el total de vacantes (totalVacantes).
                o	Filtra las empresas donde el estado de la vacante (vaestatus) es 1 y el RTN está validado (RTNValidado = 1).
                o	Filtra las empresas cuyos RTNs están en emRtnArray.
                o	Agrupa los resultados por regional, EmNombreRZ y EmRTN.
        */
        // Construir la consulta SQL con parámetros dinámicos
        const placeholders = emRtnArray.map((_, index) => `@rtn${index}`).join(', ');
        const query = `
                    SELECT  usuarios.regional,
                        empresas.EmNombreRZ,
                        empresas.EmRTN,
                        SUM(vacantes.VaNumVacantes) AS totalVacantes
                    FROM Empresas
                    INNER JOIN Vacantes ON Vacantes.EmId = Empresas.EmId  
                    INNER JOIN Usuarios ON Usuarios.UsUser = empresas.colocador 
                    WHERE vaestatus = 1 and RTNValidado=1 and empresas.EmRTN IN (${placeholders})
                    GROUP BY usuarios.regional, empresas.EmNombreRZ, empresas.EmRTN 
                `;

        /**
         * Solicitud SQL: Crea una nueva solicitud SQL (sql.Request).
         * Asignación de Parámetros: Asigna cada RTN en emRtnArray como un parámetro de la consulta utilizando request.input.
         * Ejecución: Ejecuta la consulta SQL y almacena el resultado en result.
         */
        const request = new sql.Request();
        emRtnArray.forEach((rtn, index) => {
            request.input(`rtn${index}`, sql.VarChar, rtn);
        });

        const result = await request.query(query);

        /**
         * Registro: Registra en la consola las empresas a las que se intermediaron, 
         * obtenidas del cuerpo de la solicitud (req.body.RtnEmpresas).
         */
        const RtnEmpresas = req.body.RtnEmpresas;
        console.log('Las empresas a las que se intermedio son: ' + RtnEmpresas);


        //----------------------------------------------------------------------------------------------------------------------------
        // Trae los registros de la tabla `tipo_intermediacion`
        //----------------------------------------------------------------------------------------------------------------------------

        /**
         * Extrae id_tipo_intermediacion del cuerpo de la solicitud (req.body). Se espera que sea un arreglo de identificadores.
         */
        const { id_tipo_intermediacion } = req.body;

        /**
         * Verifica si id_tipo_intermediacion es un arreglo y si no está vacío. Si no cumple con estas condiciones, 
         * responde con un error 400 (Bad Request).
         */
        if (!Array.isArray(id_tipo_intermediacion) || id_tipo_intermediacion.length === 0) {
            return res.status(400).json({ error: 'El arreglo id_tipo_intermediacion debe ser un arreglo no vacío.' });
        }

        /**
         * Crea una cadena de marcadores de posición para la consulta SQL utilizando el formato $1, $2, etc., 
         * correspondiente al número de elementos en id_tipo_intermediacion. Luego, construye una consulta SQL 
         * que selecciona tipo_intermediacion e id_tipo_intermediacion de la tabla tipo_intermediacion donde tipo_intermediacion 
         * está en la lista de valores proporcionados y estado es 'A'.
         */
        const placeholders2 = id_tipo_intermediacion.map((_, index) => `$${index + 1}`).join(', ');
        const query2 = `
            SELECT tipo_intermediacion, id_tipo_intermediacion 
            FROM tipo_intermediacion 
            WHERE tipo_intermediacion IN (${placeholders2}) AND estado='A';
        `;

        /**
         * Ejecuta la consulta SQL utilizando el cliente de base de datos (pool). id_tipo_intermediacion se 
         * pasa como parámetros para la consulta, asegurando que los valores se escapen adecuadamente para prevenir 
         * inyecciones SQL.
         */
        const resultTipoIntermediacion = await pool.query(query2, id_tipo_intermediacion);

        //Si no se encuentran resultados, responde con un error 404 (Not Found).
        if (resultTipoIntermediacion.rows.length === 0) {
            return res.status(404).json({ error: 'No se encontraron tipos de intermediación activos para los valores proporcionados.' });
        }


        // Extrae los id_tipo_intermediacion de los resultados y los registra en la consola.
        const tipo_intermediacion = resultTipoIntermediacion.rows.map(row => row.id_tipo_intermediacion);
        console.log("Ids tipo intermediacion: " + tipo_intermediacion);



        //----------------------------------------------------------------------------------------------------------------------------
        // Insertar en la tabla relacionada `intermediacion_laboral`
        //----------------------------------------------------------------------------------------------------------------------------
        /**
         * Ejecución de la consulta de inserción:
         * Utiliza el método query del objeto pool (que representa la conexión a la base de datos) para ejecutar una consulta SQL.
         * La consulta SQL inserta valores en la tabla intermediacion_laboral en las columnas empresa_intermedio, intermediacion_candidato y id_tipo_intermediacion.
         * Los valores para la consulta son proporcionados por las variables emRtnArray, RtnEmpresas y tipo_intermediacion.
         * La cláusula RETURNING id_intermediacion_laboral hace que la consulta devuelva el valor del campo id_intermediacion_laboral recién insertado.
         */
        const intermediacionQuery = await pool.query(
            `INSERT INTO intermediacion_laboral (empresa_intermedio, intermediacion_candidato, id_tipo_intermediacion) 
                VALUES ($1, $2, $3) 
                RETURNING id_intermediacion_laboral;`,
            [emRtnArray, RtnEmpresas, tipo_intermediacion]
        );

        /**
         * Registro del resultado en la consola:
         * Muestra en la consola el id_intermediacion_laboral del registro recién insertado.
         */
        console.log("intermediacion: " + intermediacionQuery.rows[0].id_intermediacion_laboral);//muestra los datos en la consola

        /**
         * Almacenamiento del resultado en una variable constante:
         * Almacena el id_intermediacion_laboral en una constante llamada id_intermediacion_laboral para su uso posterior en el código.
         */
        const id_intermediacion_laboral = intermediacionQuery.rows[0].id_intermediacion_laboral;//guardar los datos en una variable constante



        //----------------------------------------------------------------------------------------------------------------------------
        // Insertar en la tabla relacionada `orientacion_laboral`
        //----------------------------------------------------------------------------------------------------------------------------
        const orientacionValues = [
            charlas_orientacion_laboral, orientacion_taller, aplicacion_prueba, creacion_correo, impresion_cv, envio_cv, elaboracion_cv
        ];

        // QUERY QUE INSERTA LOS DATOS EN LA TABLA orientacion_laboral
        const orientacionQuery = await pool.query(`
            INSERT INTO orientacion_laboral (charlas_orientacion_laboral, orientacion_taller, aplicacion_prueba, creacion_correo, impresion_cv, envio_cv, elaboracion_cv)
            VALUES ($1, $2, $3, $4, $5, $6, $7)
            RETURNING id_orientacion_laboral;` , orientacionValues);

        console.log("orientacion: " + orientacionQuery.rows[0].id_orientacion_laboral);//muestra los datos en la consola
        const id_orientacion_laboral = orientacionQuery.rows[0].id_orientacion_laboral;//guardar l//muestra los datos en la consolaos datos en una variable constante

        //  MODULO
        //----------------------------------------------------------------------------------------------------------------------------
        // Trae los registros de la tabla relacionada `usuario`
        const resultModulo = await pool.query(`SELECT id_modulo FROM modulo WHERE modulo= $1;`, [modulo]);
        const id_modulo = resultModulo.rows[0].id_modulo;//guardar los datos en una variable constante
        console.log("Id Modulo: " + id_modulo); //muestra los datos en la consola


        //----------------------------------------------------------------------------------------------------------------------------
        //GRADO ACADEMICO
        //----------------------------------------------------------------------------------------------------------------------------
        // Trae los registros de la tabla relacionada `grado academico`
        const resultGrado = await pool.query(`SELECT id_grado_academico FROM grado_academico WHERE grado_academico=$1 AND estado='A';`, [grado_academico]);
        const id_grado_academico = resultGrado.rows[0].id_grado_academico;//guardar los datos en una variable constante
        console.log("Id Grado Academico: " + id_grado_academico); //muestra los datos en la consola

        //----------------------------------------------------------------------------------------------------------------------------
        //TELEFONO
        //----------------------------------------------------------------------------------------------------------------------------
        //const { telefono, tipo_telefono } = req.body;
        const telefonoValues = [
            telefono, tipo_telefono
        ];
        const TipoTel = await pool.query(
            `
            SELECT id_tipo_telefono
            FROM tipo_telefono
            WHERE tipo_telefono = ANY($1::varchar[]);
            `, [telefonoValues]
        );

        const id_tipo_telefono = TipoTel.rows.map(row => row.id_tipo_telefono);
        console.log("id_tipo_telefono: ", id_tipo_telefono);



        // QUERY QUE INSERTA LOS DATOS EN LA TABLA telefono
        const regTelefono = await pool.query(`
                INSERT INTO telefono (telefono, id_tipo_telefono)
                VALUES ($1, $2) 
                RETURNING id_telefono`, [telefono, id_tipo_telefono]);

        console.log("Id_telefono: " + regTelefono.rows[0].id_telefono); // Muestra los datos en la consola
        const id_telefono = regTelefono.rows[0].id_telefono; // Guardar los datos en una variable constante

        //res.status(201).json({ id_telefono }); // Enviar la respuesta con el id_telefono


        //----------------------------------------------------------------------------------------------------------------------------
        // Insertar el registro en la tabla principal `registro`
        //----------------------------------------------------------------------------------------------------------------------------

        // QUERY QUE INSERTA LOS DATOS EN LA TABLA registro
        try {

            const { fecha_nacimiento } = req.body;
            console.log('Fecha de nacimiento:', fecha_nacimiento);

            // Función para calcular la edad a partir de la fecha de nacimiento
            function calcularEdad(fecha_nacimiento) {
                // Convertir la fecha de nacimiento de DD-MM-YYYY a un objeto Date
                const [dia, mes, anio] = fecha_nacimiento.split('-').map(Number);
                const nacimiento = new Date(anio, mes - 1, dia);

                // Verificar si la fecha de nacimiento es válida
                if (isNaN(nacimiento)) {
                    console.error('Fecha de nacimiento no es válida');
                    return null;
                }

                const hoy = new Date();
                let edad = hoy.getFullYear() - nacimiento.getFullYear();
                const mesDiferencia = hoy.getMonth() - nacimiento.getMonth();
                if (mesDiferencia < 0 || (mesDiferencia === 0 && hoy.getDate() < nacimiento.getDate())) {
                    edad--;
                }
                console.log('Edad calculada:', edad);
                return edad;
            }

            const edadCalculada = calcularEdad(fecha_nacimiento);
            if (edadCalculada !== null) {
                console.log('Edad:', edadCalculada);
            } else {
                console.log('No se pudo calcular la edad debido a una fecha de nacimiento no válida');
            }
            // const edadCalculada = calcularEdad(fecha_nacimiento);
            console.log(edadCalculada);

            const registroQuery = `
INSERT INTO registro (
    id_regional, id_derivacion_interistitucional, id_movimiento_migratorio, id_seguimiento_gestion_siempleo, id_asesoria_ventanilla_unica,
    id_intermediacion_laboral, id_orientacion_laboral,
    fecha, nombre_completo, identidad, fecha_nacimiento, edad, genero, id_grado_academico, id_telefono,  correo_electronico, 
    inspeccion_por_primera_vez, actualizacion_informacion_candidato, observacion, id_modulo, id_usuario
)
VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21)
RETURNING id_registro;
`;

            const registroValues = [
                id_regional, id_derivacion_interistitucional, id_movimiento_migratorio, id_seguimiento_gestion_siempleo, id_asesoria_ventanilla_unica,
                id_intermediacion_laboral, id_orientacion_laboral,
                new Date(), nombre_completo, identidad, fecha_nacimiento, edadCalculada, genero, id_grado_academico, id_telefono, correo_electronico,
                inspeccion_por_primera_vez, actualizacion_informacion_candidato, observacion, id_modulo, id_usuario
            ];


            const registroResult = await pool.query(registroQuery, registroValues);
            const idRegistro = registroResult.rows[0].id_registro;//guardar los datos en una variable constante

            // Commit de la transacción si todas las consultas se ejecutaron correctamente
            await pool.query('COMMIT');
            res.status(201).json({ message: 'Registro ingresado exitosamente', id_registro: idRegistro });//Muestra unmensaje en la consola cuando se actualiza el registro

        } catch (error) {
            throw new Error(`Error al ingresar el registro: ${error.message}`);
        }

    } catch (error) {
        // Rollback en caso de error y que no se procese bien el registro
        try {
            await pool.query('ROLLBACK');
        } catch (rollbackError) {
            console.error('Error al hacer rollback:', rollbackError.message);
        }
        console.error(error.message);
        res.status(500).json({ message: 'Error al insertar el registro' });
    }
}



const updateData = async (req, res) => {
    const {
        id_registro,
        nombre_completo,
        identidad,
        edad,
        genero,
        id_grado_academico,
        telefono, tipo_telefono, id_telefono,
        correo_electronico,
        inspeccion_por_primera_vez,
        actualizacion_informacion_candidato,
        observacion,

        id_derivacion_interistitucional,
        derivaciones,
        derivacion_a_formalizacion,
        derivacion_asistencia_tecnica,
        derivacion_a_emprendimiento,
        derivacion_a_credito,
        modulo_ciudad_mujer,
        acuerdos_con_cooperante,

        id_movimiento_migratorio,
        migrante_retornado,
        refugiado_migrante,
        desplazado_interno,
        marinos,
        id_etnia,

        id_seguimiento_gestion_siempleo,
        seguimiento_a_candidato,
        seguimiento_a_orientado,

        id_asesoria_ventanilla_unica,
        asesoria_ocupacional_miembros_con_discapacidad,
        asesoria_programa_de_trabajo_en_el_extrangero_ptte,
        otras_asesorias_brindadas_vu,

        id_intermediacion_laboral,


        id_orientacion_laboral,
        charlas_orientacion_laboral,
        orientacion_taller,
        aplicacion_prueba,
        creacion_correo,
        impresion_cv,
        envio_cv,
        elaboracion_cv

    } = req.body;

    console.log('Datos recibidos en la API:', req.body);

    try {

        ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 

        //////////////////////////////////////

        const TipoTel = await pool.query(
            `
            SELECT id_tipo_telefono
                FROM tipo_telefono
            WHERE tipo_telefono = ANY($1::varchar[]);
            `, [tipo_telefono]
        );

        const id_tipo_telefono = TipoTel.rows.map(row => row.id_tipo_telefono);
        console.log("id_tipo_telefono: ", id_tipo_telefono);

        // QUERY QUE INSERTA LOS DATOS EN LA TABLA telefono
        const regTelefono = await pool.query(`
            UPDATE telefono 
                SET telefono=$1, id_tipo_telefono=$2
            WHERE id_telefono=$3  RETURNING *`,
            [telefono, id_tipo_telefono, id_telefono]
        );

        console.log("Id_telefono: " + regTelefono.rows[0].id_telefono); // Muestra los datos en la consola




        // Actualización en tabla 'registro'
        const resultRegistro = await pool.query(
            `UPDATE registro 
                    SET nombre_completo=$1, identidad=$2, edad=$3, genero=$4, id_grado_academico=$5, correo_electronico=$6, inspeccion_por_primera_vez=$7, 
                    actualizacion_informacion_candidato=$8, observacion=$9
                 WHERE id_registro=$10 RETURNING *;`,
            [
                nombre_completo,
                identidad,
                edad,
                genero,
                id_grado_academico,
                correo_electronico,
                inspeccion_por_primera_vez,
                actualizacion_informacion_candidato,
                observacion,
                id_registro
            ]
        );
        console.log('id_registro: ' + resultRegistro.rows[0].id_registro);







        /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


        // Actualización en tabla 'derivacion'
        const resultDerivacion_interistitucional = await pool.query(
            `UPDATE derivacion_interistitucional 
                    SET derivaciones=$1, derivacion_a_formalizacion=$2, derivacion_asistencia_tecnica=$3, 
                    derivacion_a_emprendimiento=$4, derivacion_a_credito=$5, modulo_ciudad_mujer=$6 , acuerdos_con_cooperante= $7
                 WHERE id_derivacion_interistitucional=$7 RETURNING *`,
            [
                derivaciones,
                derivacion_a_formalizacion,
                derivacion_asistencia_tecnica,
                derivacion_a_emprendimiento,
                derivacion_a_credito,
                modulo_ciudad_mujer,
                acuerdos_con_cooperante,
                id_derivacion_interistitucional
            ]
        );


        console.log("id_derivacion_interistitucional: " + resultDerivacion_interistitucional.rows[0].id_derivacion_interistitucional);//muestra los datos en la consola


        /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


        // Actualización en tabla 'movimiento_migratorio'
        const resultMovimientoMigratorio = await pool.query(
            `UPDATE movimiento_migratorio 
                    SET migrante_retornado=$1, refugiado_migrante=$2, desplazado_interno=$3, marinos=$4, id_etnia=$5
                 WHERE id_movimiento_migratorio=$6 RETURNING *`,
            [
                migrante_retornado,
                refugiado_migrante,
                desplazado_interno,
                marinos,
                id_etnia,
                id_movimiento_migratorio
            ]
        );
        console.log("id_movimiento_migratorio: " + resultMovimientoMigratorio.rows[0].id_movimiento_migratorio);//muestra los datos en la consola


        /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

        // Actualización en tabla 'seguimiento_gestion_siempleo'
        const resultSeguimientoGestionEmpleo = await pool.query(
            `UPDATE seguimiento_gestion_siempleo 
                    SET seguimiento_a_candidato=$1, seguimiento_a_orientado=$2 
                 WHERE id_seguimiento_gestion_siempleo=$3 RETURNING *`,
            [
                seguimiento_a_candidato,
                seguimiento_a_orientado,
                id_seguimiento_gestion_siempleo
            ]
        );

        console.log("id_seguimiento_gestion_siempleo: " + resultSeguimientoGestionEmpleo.rows[0].id_seguimiento_gestion_siempleo);//muestra los datos en la consola


        /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


        // Actualización en tabla 'asesoria_ventanilla_unica'
        const resultAsesoriaVentanillaUnica = await pool.query(
            'UPDATE asesoria_ventanilla_unica SET asesoria_ocupacional_miembros_con_discapacidad=$1, asesoria_programa_de_trabajo_en_el_extrangero_ptte=$2, otras_asesorias_brindadas_vu=$3 WHERE id_asesoria_ventanilla_unica=$4 RETURNING *',
            [
                asesoria_ocupacional_miembros_con_discapacidad,
                asesoria_programa_de_trabajo_en_el_extrangero_ptte,
                otras_asesorias_brindadas_vu,
                id_asesoria_ventanilla_unica
            ]
        );


        console.log("id_asesoria_ventanilla_unica: " + resultAsesoriaVentanillaUnica.rows[0].id_asesoria_ventanilla_unica);//muestra los datos en la consola


        /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



        //----------------------------------------------------------------------------------------------------------------------------
        // Select en la tabla `empresas` de la base de datos EMPLEATE
        //----------------------------------------------------------------------------------------------------------------------------
        // Select en SQLServer
        const { emRtnArray } = req.body;
        console.log('Empresas con vacantes para intermediar: ' + emRtnArray);

        // Verificar que emRtnArray exista y sea un arreglo
        if (!emRtnArray || !Array.isArray(emRtnArray)) {
            return res.status(400).json({ message: 'emRtnArray debe ser un arreglo de textos' });
        }


        // Construir la consulta SQL con parámetros dinámicos
        const placeholders = emRtnArray.map((_, index) => `@rtn${index}`).join(', ');
        const query = `
                    SELECT  usuarios.regional,
                        empresas.EmNombreRZ,
                        empresas.EmRTN,
                        SUM(vacantes.VaNumVacantes) AS totalVacantes
                    FROM Empresas
                    INNER JOIN Vacantes ON Vacantes.EmId = Empresas.EmId  
                    INNER JOIN Usuarios ON Usuarios.UsUser = empresas.colocador 
                    WHERE vaestatus = 1 and RTNValidado=1 and empresas.EmRTN IN (${placeholders})
                    GROUP BY usuarios.regional, empresas.EmNombreRZ, empresas.EmRTN 
                `;

        const request = new sql.Request();
        emRtnArray.forEach((rtn, index) => {
            request.input(`rtn${index}`, sql.VarChar, rtn);
        });

        const result = await request.query(query);
        const RtnEmpresas = req.body.RtnEmpresas;
        console.log('Las empresas sa las que se intermedio son: ' + RtnEmpresas);


        //----------------------------------------------------------------------------------------------------------------------------
        // Trae los registros de la tabla relacionada `tipo_intermediacion`
        //----------------------------------------------------------------------------------------------------------------------------

        const { id_tipo_intermediacion } = req.body; // Suponiendo que es un arreglo de VARCHAR
        if (!Array.isArray(id_tipo_intermediacion) || id_tipo_intermediacion.length === 0) {
            return res.status(400).json({ error: 'El arreglo id_tipo_intermediacion debe ser un arreglo no vacío.' });
        }
        // Construye una lista de placeholders ($1, $2, ...) para la consulta
        const placeholders2 = id_tipo_intermediacion.map((_, index) => `$${index + 1}`).join(', ');
        const query2 = `
                    SELECT id_tipo_intermediacion 
                    FROM tipo_intermediacion 
                    WHERE tipo_intermediacion IN (${placeholders2}) AND estado='A';
                `;
        const resultTipoIntermediacion = await pool.query(query2, id_tipo_intermediacion);
        if (resultTipoIntermediacion.rows.length === 0) {
            return res.status(404).json({ error: 'No se encontraron tipos de intermediación activos para los valores proporcionados.' });
        }
        // Extrae los ids de la respuesta
        const tipo_intermediacion = resultTipoIntermediacion.rows.map(row => row.id_tipo_intermediacion);
        console.log("Ids tipo intermediacion: " + tipo_intermediacion);

        //----------------------------------------------------------------------------------------------------------------------------
        // Actualizar en la tabla relacionada `intermediacion_laboral`
        //----------------------------------------------------------------------------------------------------------------------------

        const resultIntermediacionLaboral = await pool.query(
            `UPDATE intermediacion_laboral 
                     SET empresa_intermedio = $1, intermediacion_candidato = $2, id_tipo_intermediacion = $3 
                 WHERE id_intermediacion_laboral=$4 RETURNING *`,
            [emRtnArray, RtnEmpresas, tipo_intermediacion, id_intermediacion_laboral]
        );


        console.log("intermediacion: " + resultIntermediacionLaboral.rows[0].id_intermediacion_laboral);//muestra los datos en la consola


        /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



        // Actualización en tabla 'orientacion_laboral'
        const resultOrientacionLaboral = await pool.query(
            'UPDATE orientacion_laboral SET charlas_orientacion_laboral=$1, orientacion_taller=$2, aplicacion_prueba=$3, creacion_correo=$4, impresion_cv=$5, envio_cv=$6, elaboracion_cv=$7 WHERE id_orientacion_laboral=$8 RETURNING *',
            [
                charlas_orientacion_laboral,
                orientacion_taller,
                aplicacion_prueba,
                creacion_correo,
                impresion_cv,
                envio_cv,
                elaboracion_cv,
                id_orientacion_laboral
            ]
        );
        console.log("id_orientacion_laboral: " + resultOrientacionLaboral.rows[0].id_orientacion_laboral);//muestra los datos en la consola


        /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // Respuesta final si todas las actualizaciones fueron exitosas
        res.json({ message: 'Todos los registros actualizados exitosamente' });
    } catch (error) {
        console.error('Error al actualizar datos:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};



// Exportamos las funciones para que puedan ser utilizadas en otros módulos.
export {
    getRegistrosSiEmpleo,
    insertRegistroSiEmpleo,
    getRegistrosRegional,
    updateData,
    getTipoTelefono,
    getEmpresasSS,
    getEmpresaRTN,
    getCandidatosID

}
