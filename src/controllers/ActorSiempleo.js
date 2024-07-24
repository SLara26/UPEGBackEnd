/* Importa el objeto pool desde el archivo db.js, que contiene la configuración para conectar y ejecutar consultas en la base de datos.
 */
import { pool } from "../db.js";

//Trae la lista de actores
const getActoresSiempleo = async (req, res) => {

    try {
        const { rows } = await pool.query(`select ase.id_actor, d.departamento, r.regional, ase.institucion, c.condicion, 
            ase.nombre, ase.telefono, ase.correo_electronico, ase.cargo, ase.pagina_web, ase.x, ase.facebook, ase.instagram, ase.ubicacion 
            from actor_siempleo as ase
            inner join regional as r on r.id_regional = ase.id_regional
            inner join departamento as d on d.id_departamento = r.id_departamento
            inner join condicion as c on c.id_condicion = ase.id_condicion order by ase.id_actor desc;`);
        res.json(rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ message: 'Error al obtener los actores' });
    }
}

//Trae la matriz de actores
const getMatrizActoresSiempleo = async (req, res) => {

    try {
        const { rows } = await pool.query(`SELECT mase.id_matriz_actor, as2.institucion AS actor_principal,mase.objetivo_de_la_institucion, as2.nombre, as2.cargo, as2.telefono, as2.correo_electronico, r.regional,
    as2.ubicacion, string_agg( distinct as3.institucion, ', ') AS actores_intermediarios, mase.expectativas_de_coordinacion_interistitucional, c.condicion, STRING_AGG(distinct ppas.programa_o_proyecto_vigente, ', ') AS programas_proyectos_vigentes
    FROM matriz_actores_si_empleo AS mase
    JOIN actor_siempleo AS as2 ON mase.id_actor = as2.id_actor
    JOIN actor_siempleo AS as3 ON as3.id_actor = ANY(mase.coordinacion_interistitucional)
    JOIN regional as r on r.id_regional = as2.id_regional
    JOIN condicion as c on c.id_condicion= as2.id_condicion
    LEFT JOIN proyectos_programas_actor_siempleo as ppas on ppas.id_actor= as2.id_actor 
    GROUP BY mase.id_matriz_actor, as2.institucion, mase.objetivo_de_la_institucion, as2.nombre, as2.cargo, as2.telefono, as2.correo_electronico, r.regional,
    as2.ubicacion, mase.expectativas_de_coordinacion_interistitucional, c.condicion order by mase.id_matriz_actor desc;;`);
        res.json(rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ message: 'Error al obtener los actores' });
    }
}

//Trae la matriz de programas y proyectos de los actores
const getMatrizProgramasActoresSiEmpleo = async (req, res)=>{
    try {
        const {rows} = await pool.query(`select mppas.id_matriz_proyectos, as2.institucion , array_to_string(ppas.areas_enfoque, ', ') as areas_enfoque, ppas.programa_o_proyecto_vigente, ppas.objetivo_del_programa, ppas.fecha_inicio, ppas.fecha_final, ppas.meta_beneficiarios, ppas.requisitos, ppas.cobertura, as2.nombre, 
       ppas.priorizacion, ppas.observacion,  CASE
                    WHEN ppas.estado = 'A' THEN 'Activo'
                    WHEN ppas.estado = 'I' THEN 'Inactivo'
                    ELSE 'Desconocido'
                END AS estado 
       from matriz_proyectos_programas_actor_siempleo as mppas 
       inner join proyectos_programas_actor_siempleo ppas ON ppas.id_proyecto = mppas.id_proyecto
       inner join actor_siempleo as2 on as2.id_actor = ppas.id_actor;`)
        res.json(rows)
    } catch (error) {
        console.error(error.message);
        res.status(500).json({message: 'Error al obtener la matriz de programas de actores'})
    }
}

//Inserta un nuevo actor
const postActorSiempleo = async (req, res) => {
    const {
        id_regional, institucion, id_condicion, nombre, telefono, correo_electronico, cargo, pagina_web, x, facebook, instagram, ubicacion, // Actor siempleo
        areas_enfoque, programa_o_proyecto_vigente, objetivo_del_programa, meta_beneficiarios, requisitos, cobertura, priorizacion, observacion, fecha_inicio, fecha_final, estado, //Proyecto actor siempleo
        objetivo_de_la_institucion, coordinacion_interistitucional, expectativas_de_coordinacion_interistitucional //Matriz Actor Siempleo
    } = req.body;

    try {
        // QUERY QUE INSERTA LOS DATOS EN LA TABLA "Actor si empleo"
        const actor_siempleo_Values = [
            id_regional, institucion, id_condicion, nombre, telefono, correo_electronico, cargo, pagina_web, x, facebook, instagram, ubicacion
        ];

        const actor_siempleo_Query = await pool.query(`
        INSERT INTO actor_siempleo
        (id_regional, institucion, id_condicion, nombre, telefono, correo_electronico, cargo, pagina_web, x, facebook, instagram, ubicacion)
        VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12) RETURNING id_actor;`, actor_siempleo_Values);

        const id_actor = actor_siempleo_Query.rows[0].id_actor;

        //--------------------------------------------------------------------------------------------------------------------------

        // QUERY QUE INSERTA LOS DATOS EN LA TABLA "Proyectos_programas_actor_siempleo"
        const proyecto_programa_actor_siempleo_Values = [
            id_actor, areas_enfoque, programa_o_proyecto_vigente, objetivo_del_programa, meta_beneficiarios, requisitos, cobertura, priorizacion, observacion, fecha_inicio, fecha_final, estado
        ];

        const proyecto_programa_actor_siempleo_Query = await pool.query(`
        INSERT INTO proyectos_programas_actor_siempleo
        (id_actor, areas_enfoque, programa_o_proyecto_vigente, objetivo_del_programa, meta_beneficiarios, requisitos, cobertura, priorizacion, observacion, fecha_inicio, fecha_final, estado)
        VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12) RETURNING id_proyecto;`, proyecto_programa_actor_siempleo_Values);

        const id_proyecto = proyecto_programa_actor_siempleo_Query.rows[0].id_proyecto;

        //--------------------------------------------------------------------------------------------------------------------------
          // QUERY QUE INSERTA LOS DATOS EN LA TABLA "Proyectos_programas_actor_siempleo"
          const matriz_proyecto_programa_actor_siempleo_Values = [
            id_proyecto
        ];

        const matriz_proyecto_programa_actor_siempleo_Query = await pool.query(`
        INSERT INTO matriz_proyectos_programas_actor_siempleo
        (id_proyecto)
        VALUES($1) RETURNING id_matriz_proyectos;`, matriz_proyecto_programa_actor_siempleo_Values);

        const id_matriz_proyectos = matriz_proyecto_programa_actor_siempleo_Query.rows[0].id_matriz_proyectos;

        //--------------------------------------------------------------------------------------------------------------------------
        // QUERY QUE INSERTA LOS DATOS EN LA MERA TABLA "Matriz Actor Si empleo"

        const matriz_actor_siempleo_values = [id_actor, objetivo_de_la_institucion, coordinacion_interistitucional, expectativas_de_coordinacion_interistitucional]

        const matriz_actor_siempleo_Query = `
            INSERT INTO public.matriz_actores_si_empleo
            (id_actor, objetivo_de_la_institucion, coordinacion_interistitucional, expectativas_de_coordinacion_interistitucional)
            VALUES($1, $2, $3, $4)
            RETURNING id_matriz_actor;
        `;

        const matriz_actor_siempleo_Result = await pool.query(matriz_actor_siempleo_Query, matriz_actor_siempleo_values);
        const id_matriz_actor = matriz_actor_siempleo_Result.rows[0].id_matriz_actor;

        // Commit de la transacción si todas las consultas se ejecutaron correctamente
        await pool.query('COMMIT');
        res.status(201).json({ message: 'Actor Si Empleo insertado en matriz exitosamente', id_matriz_actor: id_matriz_actor });
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

const postProgramaActorSiempleo = async (req, res) => {
    const {
        id_actor, areas_enfoque, programa_o_proyecto_vigente, objetivo_del_programa, meta_beneficiarios, requisitos, cobertura, priorizacion, observacion, fecha_inicio, fecha_final, estado, //Proyecto actor siempleo
    } = req.body;

    try {
        //--------------------------------------------------------------------------------------------------------------------------

        // QUERY QUE INSERTA LOS DATOS EN LA TABLA "Proyectos_programas_actor_siempleo"
        const proyecto_programa_actor_siempleo_Values = [
            id_actor, areas_enfoque, programa_o_proyecto_vigente, objetivo_del_programa, meta_beneficiarios, requisitos, cobertura, priorizacion, observacion, fecha_inicio, fecha_final, estado
        ];

        const proyecto_programa_actor_siempleo_Query = await pool.query(`
        INSERT INTO proyectos_programas_actor_siempleo
        (id_actor, areas_enfoque, programa_o_proyecto_vigente, objetivo_del_programa, meta_beneficiarios, requisitos, cobertura, priorizacion, observacion, fecha_inicio, fecha_final, estado)
        VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12) RETURNING id_proyecto;`, proyecto_programa_actor_siempleo_Values);

        const id_proyecto = proyecto_programa_actor_siempleo_Query.rows[0].id_proyecto;

        //--------------------------------------------------------------------------------------------------------------------------
          // QUERY QUE INSERTA LOS DATOS EN LA TABLA "Proyectos_programas_actor_siempleo"
          const matriz_proyecto_programa_actor_siempleo_Values = [
            id_proyecto
        ];

        const matriz_proyecto_programa_actor_siempleo_Query = await pool.query(`
        INSERT INTO matriz_proyectos_programas_actor_siempleo
        (id_proyecto)
        VALUES($1) RETURNING id_matriz_proyectos;`, matriz_proyecto_programa_actor_siempleo_Values);

        const id_matriz_proyectos = matriz_proyecto_programa_actor_siempleo_Query.rows[0].id_matriz_proyectos;

        // Commit de la transacción si todas las consultas se ejecutaron correctamente
        await pool.query('COMMIT');
        res.status(201).json({ message: 'Proyecto de Actor Si Empleo insertado en matriz exitosamente', id_matriz_proyectos: id_matriz_proyectos });
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

const putProgramasActoresSiEmpleo = async (req, res) => {
    const { id_actor, areas_enfoque, programa_o_proyecto_vigente, objetivo_del_programa, meta_beneficiarios, requisitos, cobertura, priorizacion, observacion, fecha_inicio, fecha_final, estado, id_proyecto  } = req.body
    try {
        const result = await pool.query(`UPDATE proyectos_programas_actor_siempleo
        SET id_actor= $1, areas_enfoque= $2, programa_o_proyecto_vigente= $3, objetivo_del_programa= $4, meta_beneficiarios= $5, requisitos= $6, cobertura= $7, priorizacion= $8, observacion= $9, fecha_inicio= $10, fecha_final= $11, estado= $12
        WHERE id_proyecto= $13 RETURNING *`,
            [id_actor, areas_enfoque, programa_o_proyecto_vigente, objetivo_del_programa, meta_beneficiarios, requisitos, cobertura, priorizacion, observacion, fecha_inicio, fecha_final, estado, id_proyecto  ]
        );

        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Proyecto de Actor en matriz no encontrado' });
        }

        res.json({ message: 'Proyecto de Actor Si Empleo en matriz actualizado exitosamente', matriz: result.rows[0] });

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al actualizar el actor en la matriz' });
    }
}

const putActoresSiEmpleo = async (req, res) => {
    const { id_regional, institucion, id_condicion, nombre, telefono, correo_electronico, cargo, pagina_web, x, facebook, instagram, ubicacion, id_actor,
           objetivo_de_la_institucion, coordinacion_interistitucional, expectativas_de_coordinacion_interistitucional, id_matriz_actor } = req.body

     const client = await pool.connect()
    try {

        await client.query('BEGIN');

        const actualizar_actor_siempleo_Query = `UPDATE actor_siempleo
        SET id_regional= $1, institucion= $2, id_condicion= $3, nombre= $4, telefono= $5, correo_electronico= $6, cargo= $7, pagina_web= $8, x= $9, facebook= $10, instagram= $11, ubicacion= $12
        WHERE id_actor= $13`;

        await client.query(actualizar_actor_siempleo_Query, [
            id_regional, institucion, id_condicion, nombre, telefono, correo_electronico, cargo, pagina_web, x, facebook, instagram, ubicacion, id_actor,
        ])

        const actualizar_matiz_actor_siempleo_Query = `UPDATE matriz_actores_si_empleo
        SET id_actor= $1, objetivo_de_la_institucion= $2, coordinacion_interistitucional=$3, expectativas_de_coordinacion_interistitucional=$4
        WHERE id_matriz_actor= $5`;

        await client.query(actualizar_matiz_actor_siempleo_Query, [
            id_actor, objetivo_de_la_institucion, coordinacion_interistitucional, expectativas_de_coordinacion_interistitucional, id_matriz_actor
        ]) 

        await client.query('COMMIT');
        res.status(200).send({ message: 'Actor si empleo actualizado exitosamente' });

    } catch (error) {
        console.error(error);
        await client.query('ROLLBACK');
        res.status(500).json({ error: 'Error al actualizar el actor si empleo' });
    }
}

export {
    getActoresSiempleo,
    getMatrizActoresSiempleo,
    getMatrizProgramasActoresSiEmpleo,
    postActorSiempleo,
    postProgramaActorSiempleo, 
    putProgramasActoresSiEmpleo,
    putActoresSiEmpleo
}
