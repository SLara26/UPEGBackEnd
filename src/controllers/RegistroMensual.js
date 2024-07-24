// Importamos el módulo 'pool' desde el archivo 'db.js' para manejar las conexiones a la base de datos.
import { pool } from "../db.js";


const getRegistrosMensuales = async (req, res) => {
    try {
        const { rows } = await pool.query(`
            select  
                rm.id_registro_mensual, rm.nombre_empresa, 
                s.visita_de_empresa_a_oficina_senaeh, s.visita_presencial_a_instalaciones_de_empresa,
                avaeppycs.gestion_via_correo, avaeppycs.gestion_via_whatsapp, 
                ataeppycs.gestion_via_telefono, 
                ryvdecu.validacion_actualizacion_de_datos_de_empresa, ryvdecu.registro_de_empresa_en_empleate,
                eapupe.orientacion_a_empleador_para_acceso_y_uso_de_bolsa_trabajo_empl, eapupe.puestos_de_trabajo,
                s.brindar_espacio_fisico_a_empresa, s.empresa_derivada_a_servicios_complementarios, s.servicio_prueba_psicometrica, 
                s.envio_listado_de_candidato, s.realizacion_convocatoria, s.accion_difusion_servicio, s.vacante, s.empresa_que_proporciona_vacante,
                g.nombres, rm.fecha, rm.observacion as observacion_registro_mensual,
                sae.seguimiento_via_telefono_efectivo, sae.seguimiento_via_correo_efectivo, 
                sae.seguimiento_via_telefono_no_efectivo, sae.seguimiento_via_correo_no_efectivo, 
                sae.telefono_correo_que_se_comunico, sae.observacion as observacion_seguimiento_empresa
                from registro_mensual as rm
                inner join empresa_asesorada_por_unidad_promocion_empleo as eapupe on eapupe.id_empresa_asesorada_por_unidad_promocion_empleo=rm.id_empresa_asesorada_por_unidad_promocion_empleo
                inner join atencion_virtual_a_empleador_para_promocion_y_capacitacion_serv  as avaeppycs on avaeppycs.id_atencion_virtual = rm.id_atencion_virtual 
                inner join atencion_telefonica_a_empleador_para_promocion_y_capacitacion_s as ataeppycs on ataeppycs.id_atencion_telefonica =rm.id_atencion_telefonica 
                inner join registro_y_validacion_de_empresa_con_usuario as ryvdecu on ryvdecu.id_registro_y_validacion_de_empresa_con_usuario=rm.id_registro_y_validacion_de_empresa_con_usuario 
                inner join seguimiento_a_empresa as sae on sae.id_seguimiento = rm.id_seguimiento 
                inner join servicio as s on s.id_servicio=rm.id_servicio
                inner join usuario as g on g.id_usuario=rm.id_usuario
                order by rm.id_registro_mensual desc;
        `);

        // Inicializar variables para las sumatorias
        let sumaVisita_de_empresa_a_oficina_senaeh = 0;
        let sumaVisita_presencial_a_instalaciones_de_empresa = 0;
        let sumaGestion_via_correo = 0;
        let sumaGestion_via_whatsapp = 0;
        let sumaGestion_via_telefono = 0;
        let sumavalidacion_actualizacion_de_datos_de_empresa = 0;
        let sumaRegistro_de_empresa_en_empleate = 0;
        let sumaOrientacion_a_empleador_para_acceso_y_uso_de_bolsa_trabajo_empl = 0;
        let sumaPuestos_de_trabajo = 0;
        let sumaBrindar_espacio_fisico_a_empresa = 0;
        let sumaEmpresa_derivada_a_servicios_complementarios = 0;
        let sumaServicio_prueba_psicometrica = 0;
        let sumaEnvio_listado_de_candidato = 0;
        let sumaRealizacion_convocatoria = 0;
        let sumaAccion_difusion_servicio = 0;
        let sumaVacante = 0;
        let sumaEmpresa_que_proporciona_vacante = 0;
        let sumaSeguimiento_via_telefono_efectivo = 0;
        let sumaSeguimiento_via_correo_efectivo = 0;
        let sumaSeguimiento_via_telefono_no_efectivo = 0;
        let sumaSeguimiento_via_correo_no_efectivo = 0;

        // Iterar sobre los registros para calcular las sumatorias
        rows.forEach(row => {

            sumaVisita_de_empresa_a_oficina_senaeh += parseInt(row.visita_de_empresa_a_oficina_senaeh, 10);
            sumaVisita_presencial_a_instalaciones_de_empresa += parseInt(row.visita_presencial_a_instalaciones_de_empresa, 10);
            //----------------------------------------------------------------------------------------------
            //ESTOS DOS SE SUMAN
            sumaGestion_via_correo += parseInt(row.gestion_via_correo, 10);
            sumaGestion_via_whatsapp += parseInt(row.gestion_via_whatsapp, 10);
            //----------------------------------------------------------------------------------------------


            sumaGestion_via_telefono += parseInt(row.gestion_via_telefono, 10);


            //----------------------------------------------------------------------------------------------
            //ESTOS DOS SE SUMAN
            sumavalidacion_actualizacion_de_datos_de_empresa += parseInt(row.validacion_actualizacion_de_datos_de_empresa, 10);
            sumaRegistro_de_empresa_en_empleate += parseInt(row.registro_de_empresa_en_empleate, 10);
            //----------------------------------------------------------------------------------------------
            //ESTOS DOS SE SUMAN
            sumaOrientacion_a_empleador_para_acceso_y_uso_de_bolsa_trabajo_empl += parseInt(row.orientacion_a_empleador_para_acceso_y_uso_de_bolsa_trabajo_empl, 10);
            sumaPuestos_de_trabajo += parseInt(row.puestos_de_trabajo, 10);
            //----------------------------------------------------------------------------------------------

            sumaBrindar_espacio_fisico_a_empresa += parseInt(row.brindar_espacio_fisico_a_empresa, 10);
            sumaEmpresa_derivada_a_servicios_complementarios += parseInt(row.empresa_derivada_a_servicios_complementarios, 10);
            sumaServicio_prueba_psicometrica += parseInt(row.servicio_prueba_psicometrica, 10);
            sumaEnvio_listado_de_candidato += parseInt(row.envio_listado_de_candidato, 10);
            sumaRealizacion_convocatoria += parseInt(row.realizacion_convocatoria, 10);
            sumaAccion_difusion_servicio += parseInt(row.accion_difusion_servicio, 10);
            sumaVacante += parseInt(row.vacante, 10);
            sumaEmpresa_que_proporciona_vacante += parseInt(row.empresa_que_proporciona_vacante, 10);

            //----------------------------------------------------------------------------------------------
            //ESTOS DOS SE SUMAN
            sumaSeguimiento_via_telefono_efectivo += parseInt(row.seguimiento_via_telefono_efectivo, 10);
            sumaSeguimiento_via_correo_efectivo += parseInt(row.seguimiento_via_correo_efectivo, 10);
            //----------------------------------------------------------------------------------------------

            //ESTOS DOS SE SUMAN
            sumaSeguimiento_via_telefono_no_efectivo += parseInt(row.seguimiento_via_telefono_no_efectivo, 10);
            sumaSeguimiento_via_correo_no_efectivo += parseInt(row.seguimiento_via_correo_no_efectivo, 10);


            //----------------------------------------------------------------------------------------------

        });


        // Calcular el total sumando las sumatorias parciales
        const Total_Atenciones_virtuales_a_empleadores = sumaGestion_via_correo + sumaGestion_via_whatsapp;
        const Total_Registro_y_validación_de_empresas = sumavalidacion_actualizacion_de_datos_de_empresa + sumaRegistro_de_empresa_en_empleate;
        const Total_Empresas_asesoradas = sumaOrientacion_a_empleador_para_acceso_y_uso_de_bolsa_trabajo_empl + sumaPuestos_de_trabajo;
        const Total_Acciones_seguimiento_efectivo = sumaSeguimiento_via_telefono_efectivo + sumaSeguimiento_via_correo_efectivo;
        const Total_Acciones_seguimiento_NO_efectivo = sumaSeguimiento_via_telefono_no_efectivo + sumaSeguimiento_via_correo_no_efectivo;

        res.json({
            registro_mensual: rows,
            sumas_registro_mensual: {
                sumaVisita_de_empresa_a_oficina_senaeh,
                sumaVisita_presencial_a_instalaciones_de_empresa,
                //-------------------------------------------------------------------------

                Total_Atenciones_virtuales_a_empleadores: {
                    Total_Atenciones_virtuales_a_empleadores,
                    sumaGestion_via_correo,
                    sumaGestion_via_whatsapp,
                },

                //-------------------------------------------------------------------------
                sumaGestion_via_telefono,
                //-------------------------------------------------------------------------
                Total_Registro_y_validación_de_empresas: {
                    Total_Registro_y_validación_de_empresas,
                    sumavalidacion_actualizacion_de_datos_de_empresa,
                    sumaRegistro_de_empresa_en_empleate,
                },

                //-------------------------------------------------------------------------
                Total_Empresas_asesoradas: {
                    Total_Empresas_asesoradas,
                    sumaOrientacion_a_empleador_para_acceso_y_uso_de_bolsa_trabajo_empl,
                    sumaPuestos_de_trabajo,
                },

                // -------------------------------------------------------------------------
                sumaBrindar_espacio_fisico_a_empresa,
                sumaEmpresa_derivada_a_servicios_complementarios,
                sumaServicio_prueba_psicometrica,
                sumaEnvio_listado_de_candidato,
                sumaRealizacion_convocatoria,
                sumaAccion_difusion_servicio,
                sumaVacante,
                sumaEmpresa_que_proporciona_vacante,
                //-------------------------------------------------------------------------
                Total_Acciones_seguimiento_efectivo: {
                    Total_Acciones_seguimiento_efectivo,
                    sumaSeguimiento_via_telefono_efectivo,
                    sumaSeguimiento_via_correo_efectivo,
                },

                // -------------------------------------------------------------------------

                Total_Acciones_seguimiento_NO_efectivo: {
                    Total_Acciones_seguimiento_NO_efectivo,
                    sumaSeguimiento_via_telefono_no_efectivo,
                    sumaSeguimiento_via_correo_no_efectivo,
                }
                // -------------------------------------------------------------------------


            }

        });

    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: 'Error al obtener los registros mensuales' });
    }
}

const getRegistroMensual = async (req, res) => {
    const { id_registro_mensual } = req.body
    try {
        const { rows } = await pool.query(`
            select  rm.id_registro_mensual,rm.nombre_empresa, s.visita_de_empresa_a_oficina_senaeh, s.visita_presencial_a_instalaciones_de_empresa,
            avaeppycs.gestion_via_correo, avaeppycs.gestion_via_whatsapp, ataeppycs.gestion_via_telefono,  
            ryvdecu.validacion_actualizacion_de_datos_de_empresa, ryvdecu.registro_de_empresa_en_empleate,
            eapupe.orientacion_a_empleador_para_acceso_y_uso_de_bolsa_trabajo_empl, eapupe.puestos_de_trabajo,
            s.brindar_espacio_fisico_a_empresa, s.empresa_derivada_a_servicios_complementarios, s.servicio_prueba_psicometrica, s.envio_listado_de_candidato, s.realizacion_convocatoria, s.accion_difusion_servicio, s.vacante, s.empresa_que_proporciona_vacante,
            g.nombres, rm.fecha, rm.observacion as observacion_registro_mensual,
            sae.seguimiento_via_telefono_efectivo, sae.seguimiento_via_correo_efectivo, sae.seguimiento_via_telefono_no_efectivo, sae.seguimiento_via_correo_no_efectivo, sae.telefono_correo_que_se_comunico, sae.observacion as observacion_seguimiento_empresa
            from registro_mensual as rm
            inner join empresa_asesorada_por_unidad_promocion_empleo as eapupe on eapupe.id_empresa_asesorada_por_unidad_promocion_empleo=rm.id_empresa_asesorada_por_unidad_promocion_empleo
            inner join atencion_virtual_a_empleador_para_promocion_y_capacitacion_serv  as avaeppycs on avaeppycs.id_atencion_virtual = rm.id_atencion_virtual 
            inner join atencion_telefonica_a_empleador_para_promocion_y_capacitacion_s as ataeppycs on ataeppycs.id_atencion_telefonica =rm.id_atencion_telefonica 
            inner join registro_y_validacion_de_empresa_con_usuario as ryvdecu on ryvdecu.id_registro_y_validacion_de_empresa_con_usuario=rm.id_registro_y_validacion_de_empresa_con_usuario 
            inner join seguimiento_a_empresa as sae on sae.id_seguimiento = rm.id_seguimiento 
            inner join servicio as s on s.id_servicio=rm.id_servicio
            inner join usuario as g on g.id_usuario=rm.id_usuario
            where rm.id_registro_mensual= $1;`, [id_registro_mensual]);

        res.json(rows);

    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: 'Error al obtener los registros mensuales' });
    }
}

const PostRegistroMensual = async (req, res) => {
    const {
        orientacion_a_empleador_para_acceso_y_uso_de_bolsa_trabajo_empleate, puestos_de_trabajo,
        gestion_via_correo, gestion_via_whatsapp,
        gestion_via_telefono,
        validacion_actualizacion_de_datos_de_empresa, registro_de_empresa_en_empleate,
        seguimiento_via_telefono_efectivo, seguimiento_via_correo_efectivo, seguimiento_via_telefono_no_efectivo, seguimiento_via_correo_no_efectivo, telefono_correo_que_se_comunico,
        visita_de_empresa_a_oficina_senaeh, visita_presencial_a_instalaciones_de_empresa, brindar_espacio_fisico_a_empresa, empresa_derivada_a_servicios_complementarios, servicio_prueba_psicometrica, envio_listado_de_candidato, realizacion_convocatoria, accion_difusion_servicio, vacante, empresa_que_proporciona_vacante,
        nombre_empresa, fecha, observacion, nombres

    } = req.body;

    try {
        // QUERY QUE INSERTA LOS DATOS EN LA TABLA "empresa_asesorada_por_unidad_promocion_empleo"
        const empresa_asesorada_Values = [
            orientacion_a_empleador_para_acceso_y_uso_de_bolsa_trabajo_empleate, puestos_de_trabajo
        ];

        const empresa_asesorada_Query = await pool.query(`
        INSERT INTO empresa_asesorada_por_unidad_promocion_empleo
         (orientacion_a_empleador_para_acceso_y_uso_de_bolsa_trabajo_empleate, puestos_de_trabajo)
         VALUES($1, $2) RETURNING id_empresa_asesorada_por_unidad_promocion_empleo;`, empresa_asesorada_Values);

        const id_empresa_asesorada_por_unidad_promocion_empleo = empresa_asesorada_Query.rows[0].id_empresa_asesorada_por_unidad_promocion_empleo;

        //--------------------------------------------------------------------------------------------------------------------------

        // QUERY QUE INSERTA LOS DATOS EN LA TABLA "atencion_virtual_a_empleador_para_promocion_y_capacitacion_servicios"
        const atencion_virtual_a_empleador_para_promocion_y_capacitacion_servicios_Values = [
            gestion_via_correo, gestion_via_whatsapp
        ];

        const atencion_virtual_a_empleador_para_promocion_y_capacitacion_servicios_Query = await pool.query(`
        INSERT INTO atencion_virtual_a_empleador_para_promocion_y_capacitacion_servicios
        (gestion_via_correo, gestion_via_whatsapp)
        VALUES($1, $2) RETURNING id_atencion_virtual;`, atencion_virtual_a_empleador_para_promocion_y_capacitacion_servicios_Values);

        const id_atencion_virtual = atencion_virtual_a_empleador_para_promocion_y_capacitacion_servicios_Query.rows[0].id_atencion_virtual;

        //--------------------------------------------------------------------------------------------------------------------------

        // QUERY QUE INSERTA LOS DATOS EN LA TABLA "atencion_telefonica_a_empleador_para_promocion_y_capacitacion_servicios"
        const atencion_telefonica_a_empleador_para_promocion_y_capacitacion_servicios_Values = [
            gestion_via_telefono
        ];

        const atencion_telefonica_a_empleador_para_promocion_y_capacitacion_servicios_Query = await pool.query(`
        INSERT INTO atencion_telefonica_a_empleador_para_promocion_y_capacitacion_servicios
        (gestion_via_telefono)
        VALUES($1) RETURNING id_atencion_telefonica;`, atencion_telefonica_a_empleador_para_promocion_y_capacitacion_servicios_Values);

        const id_atencion_telefonica = atencion_telefonica_a_empleador_para_promocion_y_capacitacion_servicios_Query.rows[0].id_atencion_telefonica;

        //--------------------------------------------------------------------------------------------------------------------------

        // QUERY QUE INSERTA LOS DATOS EN LA TABLA "registro_y_validacion_de_empresa_con_usuario"
        const registro_y_validacion_de_empresa_con_usuario_Values = [
            validacion_actualizacion_de_datos_de_empresa, registro_de_empresa_en_empleate
        ];

        const registro_y_validacion_de_empresa_con_usuario_Query = await pool.query(`
        INSERT INTO registro_y_validacion_de_empresa_con_usuario
        (validacion_actualizacion_de_datos_de_empresa, registro_de_empresa_en_empleate)
        VALUES($1, $2) RETURNING id_registro_y_validacion_de_empresa_con_usuario;`, registro_y_validacion_de_empresa_con_usuario_Values);

        const id_registro_y_validacion_de_empresa_con_usuario = registro_y_validacion_de_empresa_con_usuario_Query.rows[0].id_registro_y_validacion_de_empresa_con_usuario;

        //--------------------------------------------------------------------------------------------------------------------------
        // QUERY QUE INSERTA LOS DATOS EN LA TABLA "seguimiento_a_empresa"
        const seguimiento_a_empresa_Values = [
            seguimiento_via_telefono_efectivo, seguimiento_via_correo_efectivo, seguimiento_via_telefono_no_efectivo, seguimiento_via_correo_no_efectivo, telefono_correo_que_se_comunico
        ];

        const seguimiento_a_empresa_Query = await pool.query(`
        INSERT INTO seguimiento_a_empresa
        (seguimiento_via_telefono_efectivo, seguimiento_via_correo_efectivo, seguimiento_via_telefono_no_efectivo, seguimiento_via_correo_no_efectivo, telefono_correo_que_se_comunico)
        VALUES($1, $2, $3, $4, $5) RETURNING id_seguimiento;`, seguimiento_a_empresa_Values);

        const id_seguimiento = seguimiento_a_empresa_Query.rows[0].id_seguimiento;

        //--------------------------------------------------------------------------------------------------------------------------
        // QUERY QUE INSERTA LOS DATOS EN LA TABLA "seguimiento_a_empresa"
        const servicio_Values = [
            visita_de_empresa_a_oficina_senaeh, visita_presencial_a_instalaciones_de_empresa, brindar_espacio_fisico_a_empresa, empresa_derivada_a_servicios_complementarios, servicio_prueba_psicometrica, envio_listado_de_candidato, realizacion_convocatoria, accion_difusion_servicio, vacante, empresa_que_proporciona_vacante
        ];

        const servicio_Query = await pool.query(`
        INSERT INTO servicio
        (visita_de_empresa_a_oficina_senaeh, visita_presencial_a_instalaciones_de_empresa, brindar_espacio_fisico_a_empresa, empresa_derivada_a_servicios_complementarios, servicio_prueba_psicometrica, envio_listado_de_candidato, realizacion_convocatoria, accion_difusion_servicio, vacante, empresa_que_proporciona_vacante)
        VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING id_servicio;`, servicio_Values);

        const id_servicio = servicio_Query.rows[0].id_servicio;

        // Trae los registros de la tabla relacionada `usuario`
        const result = await pool.query(`SELECT id_usuario FROM usuario where nombres= $1;`, [nombres]);
        const id_usuario = result.rows[0].id_usuario;

        //--------------------------------------------------------------------------------------------------------------------------
        // QUERY QUE INSERTA LOS DATOS EN LA MERA TABLA "registro_mensual"

        const registro_mensual_values = [id_empresa_asesorada_por_unidad_promocion_empleo, id_atencion_virtual, id_atencion_telefonica, id_registro_y_validacion_de_empresa_con_usuario,
            id_seguimiento, id_servicio, id_usuario, nombre_empresa, fecha, observacion]

        const registroMensualQuery = `
            INSERT INTO registro_mensual
            (id_empresa_asesorada_por_unidad_promocion_empleo, id_atencion_virtual, id_atencion_telefonica, id_registro_y_validacion_de_empresa_con_usuario, id_seguimiento, id_servicio, id_usuario, nombre_empresa, fecha, observacion)
            VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
            RETURNING id_registro_mensual;
        `;

        const registro_mensual_Result = await pool.query(registroMensualQuery, registro_mensual_values);
        const id_registro_mensual = registro_mensual_Result.rows[0].id_registro_mensual;

        // Commit de la transacción si todas las consultas se ejecutaron correctamente
        await pool.query('COMMIT');
        res.status(201).json({ message: 'Registro mensual insertado exitosamente', id_registro_mensual: id_registro_mensual });
    } catch (error) {
        try {
            await pool.query('ROLLBACK');
        } catch (rollbackError) {
            console.error('Error al hacer rollback:', rollbackError.message);
        }
        console.error(error.message);
        res.status(500).json({ message: 'Error al insertar el registro' });
    }
}

const PutEmpresaAsesoradaPorUnidadPromocionEmpleo = async (req, res) => {

    const {
        orientacion_a_empleador_para_acceso_y_uso_de_bolsa_trabajo_empleate,
        puestos_de_trabajo,
        id_empresa_asesorada_por_unidad_promocion_empleo

    } = req.body;

    console.log('Datos recibidos en la API:', req.body); //muestra los datos en la consola
    try {

        // QUERY QUE ACTUALIZA LOS DATOS EN LA TABLA derivacion_interistitucional
        const result = await pool.query(
            `UPDATE empresa_asesorada_por_unidad_promocion_empleo
             SET orientacion_a_empleador_para_acceso_y_uso_de_bolsa_trabajo_empleate=$1, puestos_de_trabajo=$2
             WHERE id_empresa_asesorada_por_unidad_promocion_empleo= $3 RETURNING *;`,
            [
                orientacion_a_empleador_para_acceso_y_uso_de_bolsa_trabajo_empleate,
                puestos_de_trabajo,
                id_empresa_asesorada_por_unidad_promocion_empleo
            ]
        );

        //Hace una verificacion de si existe el registro en la tabla
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'empresa asesorada no encontrada' });
        }

        //Muestra unmensaje en la consola cuando se actualiza el registro
        res.json({ message: 'derivacion_interistitucional actualizada exitosamente', empresa_asesorada: result.rows[0] });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al actualizar la derivacion_interistitucional' });
    }
}

const PutAtencionVirtualaEmpleadorParaPromocionyCapacitacionServicios = async (req, res) => {

    const {
        gestion_via_correo,
        gestion_via_whatsapp,
        id_atencion_virtual

    } = req.body;

    console.log('Datos recibidos en la API:', req.body); //muestra los datos en la consola
    try {

        // QUERY QUE ACTUALIZA LOS DATOS EN LA TABLA derivacion_interistitucional
        const result = await pool.query(
            `UPDATE atencion_virtual_a_empleador_para_promocion_y_capacitacion_servicios
             SET gestion_via_correo= $1, gestion_via_whatsapp= $2
             WHERE id_atencion_virtual= $3 RETURNING *;`,
            [
                gestion_via_correo,
                gestion_via_whatsapp,
                id_atencion_virtual
            ]
        );

        //Hace una verificacion de si existe el registro en la tabla
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'empresa asesorada no encontrada' });
        }

        //Muestra unmensaje en la consola cuando se actualiza el registro
        res.json({ message: 'Atencion virtual actualizada exitosamente', atencion_virtual: result.rows[0] });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al actualizar la atencion virtual' });
    }
}

const PutAtencionTelefonicaaEmpleadorParaPromocionyCapacitacionServicios = async (req, res) => {

    const {
        gestion_via_telefono,
        id_atencion_telefonica

    } = req.body;

    console.log('Datos recibidos en la API:', req.body); //muestra los datos en la consola
    try {

        // QUERY QUE ACTUALIZA LOS DATOS EN LA TABLA derivacion_interistitucional
        const result = await pool.query(
            `UPDATE atencion_telefonica_a_empleador_para_promocion_y_capacitacion_servicios
             SET gestion_via_telefono= $1
             WHERE id_atencion_telefonica= $2 RETURNING *;`,
            [
                gestion_via_telefono,
                id_atencion_telefonica
            ]
        );

        //Hace una verificacion de si existe el registro en la tabla
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'empresa asesorada no encontrada' });
        }

        //Muestra unmensaje en la consola cuando se actualiza el registro
        res.json({ message: 'Atencion virtual actualizada exitosamente', atencion_telefonica: result.rows[0] });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al actualizar la atencion virtual' });
    }
}

const PutRegistroyValidacionDeEmpresaConUsuario = async (req, res) => {

    const {
        validacion_actualizacion_de_datos_de_empresa,
        registro_de_empresa_en_empleate,
        id_registro_y_validacion_de_empresa_con_usuario

    } = req.body;

    console.log('Datos recibidos en la API:', req.body); //muestra los datos en la consola
    try {

        // QUERY QUE ACTUALIZA LOS DATOS EN LA TABLA derivacion_interistitucional
        const result = await pool.query(
            `UPDATE registro_y_validacion_de_empresa_con_usuario
            SET validacion_actualizacion_de_datos_de_empresa=$1, registro_de_empresa_en_empleate=$2
            WHERE id_registro_y_validacion_de_empresa_con_usuario= $3 RETURNING *;`,
            [
                validacion_actualizacion_de_datos_de_empresa,
                registro_de_empresa_en_empleate,
                id_registro_y_validacion_de_empresa_con_usuario
            ]
        );

        //Hace una verificacion de si existe el registro en la tabla
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'empresa asesorada no encontrada' });
        }

        //Muestra unmensaje en la consola cuando se actualiza el registro
        res.json({ message: 'Registro y validacion actualizada exitosamente', registro_validacion: result.rows[0] });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al actualizar la atencion virtual' });
    }
}

const PutSeguimientoaEmpresa = async (req, res) => {

    const {
        seguimiento_via_telefono_efectivo,
        seguimiento_via_correo_efectivo,
        seguimiento_via_telefono_no_efectivo,
        seguimiento_via_correo_no_efectivo,
        telefono_correo_que_se_comunico,
        id_seguimiento

    } = req.body;

    console.log('Datos recibidos en la API:', req.body); //muestra los datos en la consola
    try {

        // QUERY QUE ACTUALIZA LOS DATOS EN LA TABLA derivacion_interistitucional
        const result = await pool.query(
            `UPDATE seguimiento_a_empresa
            SET seguimiento_via_telefono_efectivo= $1, seguimiento_via_correo_efectivo= $2, seguimiento_via_telefono_no_efectivo= $3, seguimiento_via_correo_no_efectivo= $4, telefono_correo_que_se_comunico= $5
            WHERE id_seguimiento= $6 RETURNING *;`,
            [
                seguimiento_via_telefono_efectivo,
                seguimiento_via_correo_efectivo,
                seguimiento_via_telefono_no_efectivo,
                seguimiento_via_correo_no_efectivo,
                telefono_correo_que_se_comunico,
                id_seguimiento
            ]
        );

        //Hace una verificacion de si existe el registro en la tabla
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'empresa asesorada no encontrada' });
        }

        //Muestra unmensaje en la consola cuando se actualiza el registro
        res.json({ message: 'Registro y validacion actualizada exitosamente', registro_validacion: result.rows[0] });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al actualizar la atencion virtual' });
    }
}

const PutServicio = async (req, res) => {

    const {
        visita_de_empresa_a_oficina_senaeh,
        visita_presencial_a_instalaciones_de_empresa,
        brindar_espacio_fisico_a_empresa,
        empresa_derivada_a_servicios_complementarios,
        servicio_prueba_psicometrica,
        envio_listado_de_candidato,
        realizacion_convocatoria,
        accion_difusion_servicio,
        vacante,
        empresa_que_proporciona_vacante,
        id_servicio

    } = req.body;

    console.log('Datos recibidos en la API:', req.body); //muestra los datos en la consola
    try {

        // QUERY QUE ACTUALIZA LOS DATOS EN LA TABLA derivacion_interistitucional
        const result = await pool.query(
            `UPDATE servicio
            SET visita_de_empresa_a_oficina_senaeh= $1, visita_presencial_a_instalaciones_de_empresa= $2, brindar_espacio_fisico_a_empresa= $3, empresa_derivada_a_servicios_complementarios= $4, servicio_prueba_psicometrica= $5, envio_listado_de_candidato= $6, realizacion_convocatoria= $7, accion_difusion_servicio= $8, vacante= $9, empresa_que_proporciona_vacante= $10
            WHERE id_servicio= $11 RETURNING *;`,
            [
                visita_de_empresa_a_oficina_senaeh,
                visita_presencial_a_instalaciones_de_empresa,
                brindar_espacio_fisico_a_empresa,
                empresa_derivada_a_servicios_complementarios,
                servicio_prueba_psicometrica,
                envio_listado_de_candidato,
                realizacion_convocatoria,
                accion_difusion_servicio,
                vacante,
                empresa_que_proporciona_vacante,
                id_servicio
            ]
        );

        //Hace una verificacion de si existe el registro en la tabla
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'empresa asesorada no encontrada' });
        }

        //Muestra unmensaje en la consola cuando se actualiza el registro
        res.json({ message: 'Registro y validacion actualizada exitosamente', registro_validacion: result.rows[0] });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al actualizar la atencion virtual' });
    }
}


export {
    getRegistrosMensuales,
    getRegistroMensual,
    PostRegistroMensual,
    PutEmpresaAsesoradaPorUnidadPromocionEmpleo,
    PutAtencionVirtualaEmpleadorParaPromocionyCapacitacionServicios,
    PutAtencionTelefonicaaEmpleadorParaPromocionyCapacitacionServicios,
    PutRegistroyValidacionDeEmpresaConUsuario,
    PutSeguimientoaEmpresa,
    PutServicio
}
