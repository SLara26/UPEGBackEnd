import { pool } from "../db.js";

const getRegistrosCiudadMujer = async (req, res) => {
    try {
        // Utilizo query y formateo el SQL para que traiga los datos
        const { rows } = await pool.query(`
            select r.id_registro, r.fecha, r.nombre_completo, r.identidad, r.edad, r.genero, ne.nivel_educativo, ga.grado_academico, r.telefono, r.correo_electronico, 

                r.inspeccion_por_primera_vez, r.actualizacion_informacion_candidato,

                di.derivaciones, di.derivacion_a_formalizacion, di.derivacion_asistencia_tecnica, di.derivacion_a_emprendimiento, di.derivacion_a_credito, di.modulo_ciudad_mujer,

                mm.migrante_retornado, mm.refugiado_migrante, mm.desplazado_interno, mm.marinos, 

                sgs.seguimiento_a_candidato , sgs.seguimiento_a_orientado,

                avu.asesoria_ocupacional_miembros_con_discapacidad, avu.asesoria_programa_de_trabajo_en_el_extrangero_ptte, avu.otras_asesorias_brindadas_vu,

                il.intermediacion_candidato, il.empresas_intermedio, il.intermediacion, 
                
                ol.charlas_orientacion_laboral, ol.orientacion_taller, ol.aplicacion_prueba, ol.creacion_correo, ol.elaboracion_cv, ol.impresion_cv, ol.envio_cv, 
                
                concat(u.nombre,' ',u.primer_apellido) as gestor, r.observacion, m.modulo

            from registro as r
            inner join grado_academico as ga on r.id_grado_academico = ga.id_grado_academico
            inner join nivel_educativo as ne on ga.id_nivel_educativo= ne.id_nivel_educativo
            inner join regional as re on r.id_regional=re.id_regional
            inner join derivacion_interistitucional as di on r.id_derivacion_interistitucional=di.id_derivacion_interistitucional
            inner join movimiento_migratorio as mm on r.id_movimiento_migratorio=mm.id_movimiento_migratorio
            inner join seguimiento_gestion_siempleo as sgs on r.id_seguimiento_gestion_siempleo=sgs.id_seguimiento_gestion_siempleo 
            inner join asesoria_ventanilla_unica as avu on r.id_asesoria_ventanilla_unica=avu.id_asesoria_ventanilla_unica
            inner join intermediacion_laboral as il on r.id_intermediacion_laboral=il.id_intermediacion_laboral
            inner join orientacion_laboral as ol on r.id_orientacion_laboral=ol.id_orientacion_laboral
            inner join usuario as u on u.id_usuario = r.id_usuario
            inner join modulo as m on m.id_modulo = r.id_modulo
            where m.modulo = 'Ciudad Mujer' order by r.id_registro desc 
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


const getRegistroCiudadMujer = async (req, res) => {
    const { id_registro_ciudad_mujer } = req.body
    try {
        const { rows } = await pool.query(`select cm.id_registro_ciudad_mujer, cm.fecha, cm.nombre, cm.identidad, cm.edad , cm.nivel_educativo, cm.telefono, cm.correo_electronico, cm.inspeccion_por_primera_vez, cm.actualizacion,
ilcm.intermediacion_candidato, ilcm.empresas_intermedio, ilcm.intermediacion ,
olcm.charlas_orientacion_laboral, olcm.orientacion_taller, olcm.aplicacion_prueba, olcm.elaboracion_cv, olcm.impresion_cv, olcm.creacion_correo, olcm.envio_cv,
dicm.derivaciones, dicm.derivacion_a_formalizacion, dicm.derivacion_asistencia_tecnica, dicm.derivacion_a_emprendimiento, dicm.derivacion_a_credito, dicm.modulo_ciudad_mujer 
from ciudad_mujer as cm
inner join gestor_ciudad_mujer as gcm on gcm.id_gestor=cm.id_gestor
inner join orientacion_laboral_ciudad_mujer as olcm on olcm.id_orientacion_laboral = cm.id_orientacion_laboral 
inner join intermediacion_laboral_ciudad_mujer as ilcm on ilcm.id_intermediacion_laboral = cm.id_intermediacion_laboral 
inner join derivacion_interistitucional_ciudad_mujer as dicm on dicm.id_derivacion_interistitucional = cm.id_derivacion_interistitucional
where cm.id_registro_ciudad_mujer= $1;`
           , [id_registro_ciudad_mujer]);

        res.json(rows);

    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: 'Error al obtener el registro' });
    }
}

export{
    getRegistrosCiudadMujer
}