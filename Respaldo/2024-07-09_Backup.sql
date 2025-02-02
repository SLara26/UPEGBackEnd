PGDMP     	    0        	        |            DBUPEG    15.7    15.7    �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            �           1262    66519    DBUPEG    DATABASE     ~   CREATE DATABASE "DBUPEG" WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Spanish_Honduras.1252';
    DROP DATABASE "DBUPEG";
                postgres    false            �            1259    66520    asesoria_ventanilla_unica    TABLE     A  CREATE TABLE public.asesoria_ventanilla_unica (
    id_asesoria_ventanilla_unica integer NOT NULL,
    asesoria_ocupacional_miembros_con_discapacidad bigint DEFAULT 0 NOT NULL,
    asesoria_programa_de_trabajo_en_el_extrangero_ptte bigint DEFAULT 0 NOT NULL,
    otras_asesorias_brindadas_vu bigint DEFAULT 0 NOT NULL
);
 -   DROP TABLE public.asesoria_ventanilla_unica;
       public         heap    postgres    false            �            1259    66526 :   asesoria_ventanilla_unica_id_asesoria_ventanilla_unica_seq    SEQUENCE     �   CREATE SEQUENCE public.asesoria_ventanilla_unica_id_asesoria_ventanilla_unica_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 Q   DROP SEQUENCE public.asesoria_ventanilla_unica_id_asesoria_ventanilla_unica_seq;
       public          postgres    false    214            �           0    0 :   asesoria_ventanilla_unica_id_asesoria_ventanilla_unica_seq    SEQUENCE OWNED BY     �   ALTER SEQUENCE public.asesoria_ventanilla_unica_id_asesoria_ventanilla_unica_seq OWNED BY public.asesoria_ventanilla_unica.id_asesoria_ventanilla_unica;
          public          postgres    false    215            �            1259    66527 ?   atencion_telefonica_a_empleador_para_promocion_y_capacitacion_s    TABLE     �   CREATE TABLE public.atencion_telefonica_a_empleador_para_promocion_y_capacitacion_s (
    id_atencion_telefonica integer NOT NULL,
    gestion_via_telefono bigint DEFAULT 0 NOT NULL
);
 S   DROP TABLE public.atencion_telefonica_a_empleador_para_promocion_y_capacitacion_s;
       public         heap    postgres    false            �            1259    66531 ?   atencion_telefonica_a_empleador_para_id_atencion_telefonica_seq    SEQUENCE     �   CREATE SEQUENCE public.atencion_telefonica_a_empleador_para_id_atencion_telefonica_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 V   DROP SEQUENCE public.atencion_telefonica_a_empleador_para_id_atencion_telefonica_seq;
       public          postgres    false    216            �           0    0 ?   atencion_telefonica_a_empleador_para_id_atencion_telefonica_seq    SEQUENCE OWNED BY     �   ALTER SEQUENCE public.atencion_telefonica_a_empleador_para_id_atencion_telefonica_seq OWNED BY public.atencion_telefonica_a_empleador_para_promocion_y_capacitacion_s.id_atencion_telefonica;
          public          postgres    false    217            �            1259    66532 ?   atencion_virtual_a_empleador_para_promocion_y_capacitacion_serv    TABLE     �   CREATE TABLE public.atencion_virtual_a_empleador_para_promocion_y_capacitacion_serv (
    id_atencion_virtual integer NOT NULL,
    gestion_via_correo bigint DEFAULT 0 NOT NULL,
    gestion_via_whatsapp bigint DEFAULT 0 NOT NULL
);
 S   DROP TABLE public.atencion_virtual_a_empleador_para_promocion_y_capacitacion_serv;
       public         heap    postgres    false            �            1259    66537 ?   atencion_virtual_a_empleador_para_promo_id_atencion_virtual_seq    SEQUENCE     �   CREATE SEQUENCE public.atencion_virtual_a_empleador_para_promo_id_atencion_virtual_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 V   DROP SEQUENCE public.atencion_virtual_a_empleador_para_promo_id_atencion_virtual_seq;
       public          postgres    false    218            �           0    0 ?   atencion_virtual_a_empleador_para_promo_id_atencion_virtual_seq    SEQUENCE OWNED BY     �   ALTER SEQUENCE public.atencion_virtual_a_empleador_para_promo_id_atencion_virtual_seq OWNED BY public.atencion_virtual_a_empleador_para_promocion_y_capacitacion_serv.id_atencion_virtual;
          public          postgres    false    219            �            1259    66538    certificacion    TABLE     s  CREATE TABLE public.certificacion (
    id_certificacion integer NOT NULL,
    se_habilito_para_empleo bigint DEFAULT 0 NOT NULL,
    se_habilito_para_emprendimiento bigint DEFAULT 0 NOT NULL,
    se_certifico_el_personal bigint DEFAULT 0 NOT NULL,
    interesado_no_se_presento_o_matriculo bigint DEFAULT 0 NOT NULL,
    interesado_se_retiro bigint DEFAULT 0 NOT NULL,
    interesado_fue_retirado_por_inasistencias_u_otras_faltas bigint DEFAULT 0 NOT NULL,
    recibio_asistecia_tecnica bigint DEFAULT 0 NOT NULL,
    se_otorgo_finaciamiento bigint DEFAULT 0 NOT NULL,
    recibio_capital_semilla bigint DEFAULT 0 NOT NULL
);
 !   DROP TABLE public.certificacion;
       public         heap    postgres    false            �            1259    66550 "   certificacion_id_certificacion_seq    SEQUENCE     �   CREATE SEQUENCE public.certificacion_id_certificacion_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 9   DROP SEQUENCE public.certificacion_id_certificacion_seq;
       public          postgres    false    220            �           0    0 "   certificacion_id_certificacion_seq    SEQUENCE OWNED BY     i   ALTER SEQUENCE public.certificacion_id_certificacion_seq OWNED BY public.certificacion.id_certificacion;
          public          postgres    false    221            �            1259    66551    derivacion_interistitucional    TABLE     �  CREATE TABLE public.derivacion_interistitucional (
    id_derivacion_interistitucional integer NOT NULL,
    derivaciones bigint DEFAULT 0 NOT NULL,
    derivacion_a_formalizacion bigint DEFAULT 0 NOT NULL,
    derivacion_asistencia_tecnica bigint DEFAULT 0 NOT NULL,
    derivacion_a_emprendimiento bigint DEFAULT 0 NOT NULL,
    derivacion_a_credito bigint DEFAULT 0 NOT NULL,
    modulo_ciudad_mujer bigint DEFAULT 0 NOT NULL
);
 0   DROP TABLE public.derivacion_interistitucional;
       public         heap    postgres    false            �            1259    66560 ?   derivacion_interistitucional_id_derivacion_interistituciona_seq    SEQUENCE     �   CREATE SEQUENCE public.derivacion_interistitucional_id_derivacion_interistituciona_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 V   DROP SEQUENCE public.derivacion_interistitucional_id_derivacion_interistituciona_seq;
       public          postgres    false    222            �           0    0 ?   derivacion_interistitucional_id_derivacion_interistituciona_seq    SEQUENCE OWNED BY     �   ALTER SEQUENCE public.derivacion_interistitucional_id_derivacion_interistituciona_seq OWNED BY public.derivacion_interistitucional.id_derivacion_interistitucional;
          public          postgres    false    223            �            1259    66561    direccion_general    TABLE     �   CREATE TABLE public.direccion_general (
    id_direccion_general integer NOT NULL,
    direccion_general character varying(50) NOT NULL,
    estado character(1) NOT NULL
);
 %   DROP TABLE public.direccion_general;
       public         heap    postgres    false            �            1259    66564 *   direccion_general_id_direccion_general_seq    SEQUENCE     �   CREATE SEQUENCE public.direccion_general_id_direccion_general_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 A   DROP SEQUENCE public.direccion_general_id_direccion_general_seq;
       public          postgres    false    224            �           0    0 *   direccion_general_id_direccion_general_seq    SEQUENCE OWNED BY     y   ALTER SEQUENCE public.direccion_general_id_direccion_general_seq OWNED BY public.direccion_general.id_direccion_general;
          public          postgres    false    225            �            1259    66565    empresa    TABLE     d   CREATE TABLE public.empresa (
    id_empresa integer NOT NULL,
    empresa character varying(50)
);
    DROP TABLE public.empresa;
       public         heap    postgres    false            �            1259    66568 -   empresa_asesorada_por_unidad_promocion_empleo    TABLE       CREATE TABLE public.empresa_asesorada_por_unidad_promocion_empleo (
    id_empresa_asesorada_por_unidad_promocion_empleo integer NOT NULL,
    orientacion_a_empleador_para_acceso_y_uso_de_bolsa_trabajo_empl bigint DEFAULT 0 NOT NULL,
    puestos_de_trabajo bigint DEFAULT 0 NOT NULL
);
 A   DROP TABLE public.empresa_asesorada_por_unidad_promocion_empleo;
       public         heap    postgres    false            �            1259    66573 ?   empresa_asesorada_por_unidad__id_empresa_asesorada_por_unid_seq    SEQUENCE     �   CREATE SEQUENCE public.empresa_asesorada_por_unidad__id_empresa_asesorada_por_unid_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 V   DROP SEQUENCE public.empresa_asesorada_por_unidad__id_empresa_asesorada_por_unid_seq;
       public          postgres    false    227            �           0    0 ?   empresa_asesorada_por_unidad__id_empresa_asesorada_por_unid_seq    SEQUENCE OWNED BY     �   ALTER SEQUENCE public.empresa_asesorada_por_unidad__id_empresa_asesorada_por_unid_seq OWNED BY public.empresa_asesorada_por_unidad_promocion_empleo.id_empresa_asesorada_por_unidad_promocion_empleo;
          public          postgres    false    228            �            1259    66574    empresa_id_empresa_seq    SEQUENCE     �   CREATE SEQUENCE public.empresa_id_empresa_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 -   DROP SEQUENCE public.empresa_id_empresa_seq;
       public          postgres    false    226            �           0    0    empresa_id_empresa_seq    SEQUENCE OWNED BY     Q   ALTER SEQUENCE public.empresa_id_empresa_seq OWNED BY public.empresa.id_empresa;
          public          postgres    false    229            �            1259    66575    grado_academico    TABLE     �   CREATE TABLE public.grado_academico (
    id_grado_academico integer NOT NULL,
    grado_academico character varying(100) NOT NULL,
    id_nivel_educativo integer,
    estado character(1)
);
 #   DROP TABLE public.grado_academico;
       public         heap    postgres    false            �            1259    66578 &   grado_academico_id_grado_academico_seq    SEQUENCE     �   CREATE SEQUENCE public.grado_academico_id_grado_academico_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 =   DROP SEQUENCE public.grado_academico_id_grado_academico_seq;
       public          postgres    false    230            �           0    0 &   grado_academico_id_grado_academico_seq    SEQUENCE OWNED BY     q   ALTER SEQUENCE public.grado_academico_id_grado_academico_seq OWNED BY public.grado_academico.id_grado_academico;
          public          postgres    false    231            �            1259    66579    informe_del_actor    TABLE     �   CREATE TABLE public.informe_del_actor (
    id_actor integer NOT NULL,
    nombre_actor character varying(100) NOT NULL,
    programa_proyecto_vigente character varying(100),
    fecha date DEFAULT CURRENT_DATE
);
 %   DROP TABLE public.informe_del_actor;
       public         heap    postgres    false            �            1259    66583    informe_del_actor_id_actor_seq    SEQUENCE     �   CREATE SEQUENCE public.informe_del_actor_id_actor_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 5   DROP SEQUENCE public.informe_del_actor_id_actor_seq;
       public          postgres    false    232            �           0    0    informe_del_actor_id_actor_seq    SEQUENCE OWNED BY     a   ALTER SEQUENCE public.informe_del_actor_id_actor_seq OWNED BY public.informe_del_actor.id_actor;
          public          postgres    false    233            �            1259    66584    intermediacion_laboral    TABLE     �   CREATE TABLE public.intermediacion_laboral (
    id_intermediacion_laboral integer NOT NULL,
    intermediacion_candidato bigint DEFAULT 0 NOT NULL,
    id_empresa integer NOT NULL,
    id_tipo_intermediacion integer
);
 *   DROP TABLE public.intermediacion_laboral;
       public         heap    postgres    false            �            1259    66588 4   intermediacion_laboral_id_intermediacion_laboral_seq    SEQUENCE     �   CREATE SEQUENCE public.intermediacion_laboral_id_intermediacion_laboral_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 K   DROP SEQUENCE public.intermediacion_laboral_id_intermediacion_laboral_seq;
       public          postgres    false    234            �           0    0 4   intermediacion_laboral_id_intermediacion_laboral_seq    SEQUENCE OWNED BY     �   ALTER SEQUENCE public.intermediacion_laboral_id_intermediacion_laboral_seq OWNED BY public.intermediacion_laboral.id_intermediacion_laboral;
          public          postgres    false    235            �            1259    66589    modulo    TABLE     �   CREATE TABLE public.modulo (
    id_modulo integer NOT NULL,
    modulo character varying(100) NOT NULL,
    descripcion character varying(255)
);
    DROP TABLE public.modulo;
       public         heap    postgres    false            �            1259    66592    modulo_id_modulo_seq    SEQUENCE     �   CREATE SEQUENCE public.modulo_id_modulo_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 +   DROP SEQUENCE public.modulo_id_modulo_seq;
       public          postgres    false    236            �           0    0    modulo_id_modulo_seq    SEQUENCE OWNED BY     M   ALTER SEQUENCE public.modulo_id_modulo_seq OWNED BY public.modulo.id_modulo;
          public          postgres    false    237            �            1259    66593    movimiento_migratorio    TABLE       CREATE TABLE public.movimiento_migratorio (
    id_movimiento_migratorio integer NOT NULL,
    migrante_retornado bigint DEFAULT 0 NOT NULL,
    refugiado_migrante bigint DEFAULT 0 NOT NULL,
    desplazado_interno bigint DEFAULT 0 NOT NULL,
    marinos bigint DEFAULT 0 NOT NULL
);
 )   DROP TABLE public.movimiento_migratorio;
       public         heap    postgres    false            �            1259    66600 2   movimiento_migratorio_id_movimiento_migratorio_seq    SEQUENCE     �   CREATE SEQUENCE public.movimiento_migratorio_id_movimiento_migratorio_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 I   DROP SEQUENCE public.movimiento_migratorio_id_movimiento_migratorio_seq;
       public          postgres    false    238            �           0    0 2   movimiento_migratorio_id_movimiento_migratorio_seq    SEQUENCE OWNED BY     �   ALTER SEQUENCE public.movimiento_migratorio_id_movimiento_migratorio_seq OWNED BY public.movimiento_migratorio.id_movimiento_migratorio;
          public          postgres    false    239            �            1259    66601 	   ms_objeto    TABLE     �  CREATE TABLE public.ms_objeto (
    id_objeto integer NOT NULL,
    objeto character varying(100) NOT NULL,
    descripcion character varying(255),
    tipo_objeto character varying(50),
    creado_por character varying(60),
    fecha_creacion timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    modificado_por character varying(60),
    fecha_modificacion timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);
    DROP TABLE public.ms_objeto;
       public         heap    postgres    false            �            1259    66608    ms_objeto_id_objeto_seq    SEQUENCE     �   CREATE SEQUENCE public.ms_objeto_id_objeto_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 .   DROP SEQUENCE public.ms_objeto_id_objeto_seq;
       public          postgres    false    240            �           0    0    ms_objeto_id_objeto_seq    SEQUENCE OWNED BY     S   ALTER SEQUENCE public.ms_objeto_id_objeto_seq OWNED BY public.ms_objeto.id_objeto;
          public          postgres    false    241            �            1259    66609    ms_parametro    TABLE     �   CREATE TABLE public.ms_parametro (
    id_parametro integer NOT NULL,
    id_usuario integer,
    parametro character varying(150) NOT NULL,
    valor character varying(250) NOT NULL
);
     DROP TABLE public.ms_parametro;
       public         heap    postgres    false            �            1259    66612    ms_parametro_id_parametro_seq    SEQUENCE     �   CREATE SEQUENCE public.ms_parametro_id_parametro_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 4   DROP SEQUENCE public.ms_parametro_id_parametro_seq;
       public          postgres    false    242            �           0    0    ms_parametro_id_parametro_seq    SEQUENCE OWNED BY     _   ALTER SEQUENCE public.ms_parametro_id_parametro_seq OWNED BY public.ms_parametro.id_parametro;
          public          postgres    false    243            �            1259    66613    ms_permisos    TABLE     �  CREATE TABLE public.ms_permisos (
    id_objeto integer,
    id_rol integer,
    permiso_insertar character(1) DEFAULT NULL::bpchar,
    permiso_editar character(1) DEFAULT NULL::bpchar,
    permiso_consultar character(1) DEFAULT NULL::bpchar,
    creado_por character varying(60),
    fecha_creacion timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    modificado_por character varying(60),
    fecha_modificacion timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);
    DROP TABLE public.ms_permisos;
       public         heap    postgres    false            �            1259    66621    ms_rol    TABLE     u  CREATE TABLE public.ms_rol (
    id_rol integer NOT NULL,
    rol character varying(100) NOT NULL,
    descripcion character varying(255),
    creado_por character varying(60),
    fecha_creacion timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    modificado_por character varying(60),
    fecha_modificacion timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);
    DROP TABLE public.ms_rol;
       public         heap    postgres    false            �            1259    66626    ms_rol_id_rol_seq    SEQUENCE     �   CREATE SEQUENCE public.ms_rol_id_rol_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public.ms_rol_id_rol_seq;
       public          postgres    false    245            �           0    0    ms_rol_id_rol_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public.ms_rol_id_rol_seq OWNED BY public.ms_rol.id_rol;
          public          postgres    false    246            �            1259    66627    nivel_educativo    TABLE     �   CREATE TABLE public.nivel_educativo (
    id_nivel_educativo integer NOT NULL,
    nivel_educativo character varying(100) NOT NULL
);
 #   DROP TABLE public.nivel_educativo;
       public         heap    postgres    false            �            1259    66630 &   nivel_educativo_id_nivel_educativo_seq    SEQUENCE     �   CREATE SEQUENCE public.nivel_educativo_id_nivel_educativo_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 =   DROP SEQUENCE public.nivel_educativo_id_nivel_educativo_seq;
       public          postgres    false    247            �           0    0 &   nivel_educativo_id_nivel_educativo_seq    SEQUENCE OWNED BY     q   ALTER SEQUENCE public.nivel_educativo_id_nivel_educativo_seq OWNED BY public.nivel_educativo.id_nivel_educativo;
          public          postgres    false    248            �            1259    66631    orientacion_laboral    TABLE     �  CREATE TABLE public.orientacion_laboral (
    id_orientacion_laboral integer NOT NULL,
    charlas_orientacion_laboral bigint DEFAULT 0 NOT NULL,
    orientacion_taller bigint DEFAULT 0 NOT NULL,
    aplicacion_prueba bigint DEFAULT 0 NOT NULL,
    creacion_correo bigint DEFAULT 0 NOT NULL,
    impresion_cv bigint DEFAULT 0 NOT NULL,
    envio_cv bigint DEFAULT 0 NOT NULL,
    elaboracion_cv bigint DEFAULT 0 NOT NULL
);
 '   DROP TABLE public.orientacion_laboral;
       public         heap    postgres    false            �            1259    66641 .   orientacion_laboral_id_orientacion_laboral_seq    SEQUENCE     �   CREATE SEQUENCE public.orientacion_laboral_id_orientacion_laboral_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 E   DROP SEQUENCE public.orientacion_laboral_id_orientacion_laboral_seq;
       public          postgres    false    249            �           0    0 .   orientacion_laboral_id_orientacion_laboral_seq    SEQUENCE OWNED BY     �   ALTER SEQUENCE public.orientacion_laboral_id_orientacion_laboral_seq OWNED BY public.orientacion_laboral.id_orientacion_laboral;
          public          postgres    false    250            �            1259    66642    perfil    TABLE     �   CREATE TABLE public.perfil (
    id_perfil integer NOT NULL,
    perfil character varying(50),
    estado character(1),
    id_regional integer,
    id_rol integer
);
    DROP TABLE public.perfil;
       public         heap    postgres    false            �            1259    66645    perfil_id_perfil_seq    SEQUENCE     �   CREATE SEQUENCE public.perfil_id_perfil_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 +   DROP SEQUENCE public.perfil_id_perfil_seq;
       public          postgres    false    251            �           0    0    perfil_id_perfil_seq    SEQUENCE OWNED BY     M   ALTER SEQUENCE public.perfil_id_perfil_seq OWNED BY public.perfil.id_perfil;
          public          postgres    false    252            �            1259    66646    regional    TABLE     �   CREATE TABLE public.regional (
    id_regional integer NOT NULL,
    regional character varying(50) NOT NULL,
    estado character(1) NOT NULL,
    descripcion character varying(300),
    id_modulo integer
);
    DROP TABLE public.regional;
       public         heap    postgres    false            �            1259    66649    regional_id_regional_seq    SEQUENCE     �   CREATE SEQUENCE public.regional_id_regional_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 /   DROP SEQUENCE public.regional_id_regional_seq;
       public          postgres    false    253            �           0    0    regional_id_regional_seq    SEQUENCE OWNED BY     U   ALTER SEQUENCE public.regional_id_regional_seq OWNED BY public.regional.id_regional;
          public          postgres    false    254            �            1259    66650    registro    TABLE     �  CREATE TABLE public.registro (
    id_registro integer NOT NULL,
    id_regional integer,
    id_derivacion_interistitucional integer,
    id_movimiento_migratorio integer,
    id_seguimiento_gestion_siempleo integer,
    id_asesoria_ventanilla_unica integer,
    id_intermediacion_laboral integer,
    id_orientacion_laboral integer,
    fecha date DEFAULT CURRENT_DATE,
    nombre_completo character varying(100) NOT NULL,
    identidad character varying(13) NOT NULL,
    edad integer NOT NULL,
    genero character varying(30) NOT NULL,
    id_grado_academico integer,
    telefono character varying(12) NOT NULL,
    correo_electronico character varying(80) NOT NULL,
    inspeccion_por_primera_vez bigint DEFAULT 0 NOT NULL,
    actualizacion_informacion_candidato bigint DEFAULT 0 NOT NULL,
    observacion character varying(500),
    id_modulo integer,
    id_usuario integer,
    CONSTRAINT registro_edad_check CHECK ((edad >= 18))
);
    DROP TABLE public.registro;
       public         heap    postgres    false                        1259    66659    registro_id_registro_seq    SEQUENCE     �   CREATE SEQUENCE public.registro_id_registro_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 /   DROP SEQUENCE public.registro_id_registro_seq;
       public          postgres    false    255            �           0    0    registro_id_registro_seq    SEQUENCE OWNED BY     U   ALTER SEQUENCE public.registro_id_registro_seq OWNED BY public.registro.id_registro;
          public          postgres    false    256                       1259    66660    registro_mensual    TABLE     �  CREATE TABLE public.registro_mensual (
    id_registro_mensual integer NOT NULL,
    id_empresa_asesorada_por_unidad_promocion_empleo integer,
    id_atencion_virtual integer,
    id_atencion_telefonica integer,
    id_registro_y_validacion_de_empresa_con_usuario integer,
    id_seguimiento integer,
    id_servicio integer,
    nombre_empresa character varying(150) NOT NULL,
    fecha timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    observacion character varying(500),
    id_usuario integer
);
 $   DROP TABLE public.registro_mensual;
       public         heap    postgres    false                       1259    66666 (   registro_mensual_id_registro_mensual_seq    SEQUENCE     �   CREATE SEQUENCE public.registro_mensual_id_registro_mensual_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 ?   DROP SEQUENCE public.registro_mensual_id_registro_mensual_seq;
       public          postgres    false    257            �           0    0 (   registro_mensual_id_registro_mensual_seq    SEQUENCE OWNED BY     u   ALTER SEQUENCE public.registro_mensual_id_registro_mensual_seq OWNED BY public.registro_mensual.id_registro_mensual;
          public          postgres    false    258                       1259    66667 !   registro_seguimiento_a_derivacion    TABLE     I  CREATE TABLE public.registro_seguimiento_a_derivacion (
    id_registro_seguimiento_a_derivacion integer NOT NULL,
    id_actor integer,
    id_verificacion integer,
    id_seguimiento_derivado integer,
    id_certificacion integer,
    id_usuario integer,
    observacion character varying(500) DEFAULT ''::character varying
);
 5   DROP TABLE public.registro_seguimiento_a_derivacion;
       public         heap    postgres    false                       1259    66673 ?   registro_seguimiento_a_deriva_id_registro_seguimiento_a_der_seq    SEQUENCE     �   CREATE SEQUENCE public.registro_seguimiento_a_deriva_id_registro_seguimiento_a_der_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 V   DROP SEQUENCE public.registro_seguimiento_a_deriva_id_registro_seguimiento_a_der_seq;
       public          postgres    false    259            �           0    0 ?   registro_seguimiento_a_deriva_id_registro_seguimiento_a_der_seq    SEQUENCE OWNED BY     �   ALTER SEQUENCE public.registro_seguimiento_a_deriva_id_registro_seguimiento_a_der_seq OWNED BY public.registro_seguimiento_a_derivacion.id_registro_seguimiento_a_derivacion;
          public          postgres    false    260                       1259    66674 ,   registro_y_validacion_de_empresa_con_usuario    TABLE       CREATE TABLE public.registro_y_validacion_de_empresa_con_usuario (
    id_registro_y_validacion_de_empresa_con_usuario integer NOT NULL,
    validacion_actualizacion_de_datos_de_empresa bigint DEFAULT 0 NOT NULL,
    registro_de_empresa_en_empleate bigint DEFAULT 0 NOT NULL
);
 @   DROP TABLE public.registro_y_validacion_de_empresa_con_usuario;
       public         heap    postgres    false                       1259    66679 ?   registro_y_validacion_de_empr_id_registro_y_validacion_de_e_seq    SEQUENCE     �   CREATE SEQUENCE public.registro_y_validacion_de_empr_id_registro_y_validacion_de_e_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 V   DROP SEQUENCE public.registro_y_validacion_de_empr_id_registro_y_validacion_de_e_seq;
       public          postgres    false    261            �           0    0 ?   registro_y_validacion_de_empr_id_registro_y_validacion_de_e_seq    SEQUENCE OWNED BY     �   ALTER SEQUENCE public.registro_y_validacion_de_empr_id_registro_y_validacion_de_e_seq OWNED BY public.registro_y_validacion_de_empresa_con_usuario.id_registro_y_validacion_de_empresa_con_usuario;
          public          postgres    false    262                       1259    66680    seguimiento_a_derivados    TABLE     �  CREATE TABLE public.seguimiento_a_derivados (
    id_seguimiento_derivado integer NOT NULL,
    nombre_persona_empresa_derivada character varying(100) NOT NULL,
    identidad character varying(15) NOT NULL,
    telefono character varying(15),
    servicio_requerido character varying(80) NOT NULL,
    inicio_curso_formalizacion bigint DEFAULT 0 NOT NULL,
    finalizo_curso_formalizacion bigint DEFAULT 0 NOT NULL
);
 +   DROP TABLE public.seguimiento_a_derivados;
       public         heap    postgres    false                       1259    66685 3   seguimiento_a_derivados_id_seguimiento_derivado_seq    SEQUENCE     �   CREATE SEQUENCE public.seguimiento_a_derivados_id_seguimiento_derivado_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 J   DROP SEQUENCE public.seguimiento_a_derivados_id_seguimiento_derivado_seq;
       public          postgres    false    263            �           0    0 3   seguimiento_a_derivados_id_seguimiento_derivado_seq    SEQUENCE OWNED BY     �   ALTER SEQUENCE public.seguimiento_a_derivados_id_seguimiento_derivado_seq OWNED BY public.seguimiento_a_derivados.id_seguimiento_derivado;
          public          postgres    false    264            	           1259    66686    seguimiento_a_empresa    TABLE     �  CREATE TABLE public.seguimiento_a_empresa (
    id_seguimiento integer NOT NULL,
    seguimiento_via_telefono_efectivo bigint DEFAULT 0 NOT NULL,
    seguimiento_via_correo_efectivo bigint DEFAULT 0 NOT NULL,
    seguimiento_via_telefono_no_efectivo bigint DEFAULT 0 NOT NULL,
    seguimiento_via_correo_no_efectivo bigint DEFAULT 0 NOT NULL,
    telefono_correo_que_se_comunico character varying(80) DEFAULT ''::character varying,
    observacion character varying(500)
);
 )   DROP TABLE public.seguimiento_a_empresa;
       public         heap    postgres    false            
           1259    66696 (   seguimiento_a_empresa_id_seguimiento_seq    SEQUENCE     �   CREATE SEQUENCE public.seguimiento_a_empresa_id_seguimiento_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 ?   DROP SEQUENCE public.seguimiento_a_empresa_id_seguimiento_seq;
       public          postgres    false    265            �           0    0 (   seguimiento_a_empresa_id_seguimiento_seq    SEQUENCE OWNED BY     u   ALTER SEQUENCE public.seguimiento_a_empresa_id_seguimiento_seq OWNED BY public.seguimiento_a_empresa.id_seguimiento;
          public          postgres    false    266                       1259    66697    seguimiento_gestion_siempleo    TABLE     �   CREATE TABLE public.seguimiento_gestion_siempleo (
    id_seguimiento_gestion_siempleo integer NOT NULL,
    seguimiento_a_candidato bigint DEFAULT 0 NOT NULL,
    seguimiento_a_orientado bigint DEFAULT 0 NOT NULL
);
 0   DROP TABLE public.seguimiento_gestion_siempleo;
       public         heap    postgres    false                       1259    66702 ?   seguimiento_gestion_siempleo_id_seguimiento_gestion_siemple_seq    SEQUENCE     �   CREATE SEQUENCE public.seguimiento_gestion_siempleo_id_seguimiento_gestion_siemple_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 V   DROP SEQUENCE public.seguimiento_gestion_siempleo_id_seguimiento_gestion_siemple_seq;
       public          postgres    false    267            �           0    0 ?   seguimiento_gestion_siempleo_id_seguimiento_gestion_siemple_seq    SEQUENCE OWNED BY     �   ALTER SEQUENCE public.seguimiento_gestion_siempleo_id_seguimiento_gestion_siemple_seq OWNED BY public.seguimiento_gestion_siempleo.id_seguimiento_gestion_siempleo;
          public          postgres    false    268                       1259    66703    servicio    TABLE     �  CREATE TABLE public.servicio (
    id_servicio integer NOT NULL,
    visita_de_empresa_a_oficina_senaeh bigint DEFAULT 0 NOT NULL,
    visita_presencial_a_instalaciones_de_empresa bigint DEFAULT 0 NOT NULL,
    brindar_espacio_fisico_a_empresa bigint DEFAULT 0 NOT NULL,
    empresa_derivada_a_servicios_complementarios bigint DEFAULT 0 NOT NULL,
    servicio_prueba_psicometrica bigint DEFAULT 0 NOT NULL,
    envio_listado_de_candidato bigint DEFAULT 0 NOT NULL,
    realizacion_convocatoria bigint DEFAULT 0 NOT NULL,
    accion_difusion_servicio bigint DEFAULT 0 NOT NULL,
    vacante bigint DEFAULT 0 NOT NULL,
    empresa_que_proporciona_vacante bigint DEFAULT 0 NOT NULL
);
    DROP TABLE public.servicio;
       public         heap    postgres    false                       1259    66716    servicio_id_servicio_seq    SEQUENCE     �   CREATE SEQUENCE public.servicio_id_servicio_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 /   DROP SEQUENCE public.servicio_id_servicio_seq;
       public          postgres    false    269            �           0    0    servicio_id_servicio_seq    SEQUENCE OWNED BY     U   ALTER SEQUENCE public.servicio_id_servicio_seq OWNED BY public.servicio.id_servicio;
          public          postgres    false    270                       1259    66717    tipo_intermediacion    TABLE     �   CREATE TABLE public.tipo_intermediacion (
    id_tipo_intermediacion integer NOT NULL,
    tipo_intermediacion character varying(50) NOT NULL,
    estado character(1) DEFAULT 'A'::bpchar
);
 '   DROP TABLE public.tipo_intermediacion;
       public         heap    postgres    false                       1259    66721 .   tipo_intermediacion_id_tipo_intermediacion_seq    SEQUENCE     �   CREATE SEQUENCE public.tipo_intermediacion_id_tipo_intermediacion_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 E   DROP SEQUENCE public.tipo_intermediacion_id_tipo_intermediacion_seq;
       public          postgres    false    271            �           0    0 .   tipo_intermediacion_id_tipo_intermediacion_seq    SEQUENCE OWNED BY     �   ALTER SEQUENCE public.tipo_intermediacion_id_tipo_intermediacion_seq OWNED BY public.tipo_intermediacion.id_tipo_intermediacion;
          public          postgres    false    272                       1259    66722    usuario    TABLE     "  CREATE TABLE public.usuario (
    id_usuario integer NOT NULL,
    id_regional integer,
    id_direccion_general integer,
    id_perfil integer,
    nombres character varying(40) NOT NULL,
    primer_apellido character varying(40) NOT NULL,
    segundo_apellido character varying(40),
    correo_electronico character varying(100) NOT NULL,
    contrasena character varying(150) NOT NULL,
    telefono character varying(15),
    cargo character varying(40) NOT NULL,
    estado character(1) DEFAULT 'N'::bpchar,
    intentos integer DEFAULT 0
);
    DROP TABLE public.usuario;
       public         heap    postgres    false                       1259    66727    usuario_id_usuario_seq    SEQUENCE     �   CREATE SEQUENCE public.usuario_id_usuario_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 -   DROP SEQUENCE public.usuario_id_usuario_seq;
       public          postgres    false    273            �           0    0    usuario_id_usuario_seq    SEQUENCE OWNED BY     Q   ALTER SEQUENCE public.usuario_id_usuario_seq OWNED BY public.usuario.id_usuario;
          public          postgres    false    274                       1259    66728    verificacion_del_plan_de_accion    TABLE       CREATE TABLE public.verificacion_del_plan_de_accion (
    id_verificacion integer NOT NULL,
    programa_acciones_conjuntas bigint DEFAULT 0 NOT NULL,
    cuenta_con_plan_de_trabajo bigint DEFAULT 0 NOT NULL,
    cuenta_con_medio_de_verificacion bigint DEFAULT 0 NOT NULL
);
 3   DROP TABLE public.verificacion_del_plan_de_accion;
       public         heap    postgres    false                       1259    66734 3   verificacion_del_plan_de_accion_id_verificacion_seq    SEQUENCE     �   CREATE SEQUENCE public.verificacion_del_plan_de_accion_id_verificacion_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 J   DROP SEQUENCE public.verificacion_del_plan_de_accion_id_verificacion_seq;
       public          postgres    false    275            �           0    0 3   verificacion_del_plan_de_accion_id_verificacion_seq    SEQUENCE OWNED BY     �   ALTER SEQUENCE public.verificacion_del_plan_de_accion_id_verificacion_seq OWNED BY public.verificacion_del_plan_de_accion.id_verificacion;
          public          postgres    false    276            �           2604    66735 6   asesoria_ventanilla_unica id_asesoria_ventanilla_unica    DEFAULT     �   ALTER TABLE ONLY public.asesoria_ventanilla_unica ALTER COLUMN id_asesoria_ventanilla_unica SET DEFAULT nextval('public.asesoria_ventanilla_unica_id_asesoria_ventanilla_unica_seq'::regclass);
 e   ALTER TABLE public.asesoria_ventanilla_unica ALTER COLUMN id_asesoria_ventanilla_unica DROP DEFAULT;
       public          postgres    false    215    214                       2604    66736 V   atencion_telefonica_a_empleador_para_promocion_y_capacitacion_s id_atencion_telefonica    DEFAULT     �   ALTER TABLE ONLY public.atencion_telefonica_a_empleador_para_promocion_y_capacitacion_s ALTER COLUMN id_atencion_telefonica SET DEFAULT nextval('public.atencion_telefonica_a_empleador_para_id_atencion_telefonica_seq'::regclass);
 �   ALTER TABLE public.atencion_telefonica_a_empleador_para_promocion_y_capacitacion_s ALTER COLUMN id_atencion_telefonica DROP DEFAULT;
       public          postgres    false    217    216                       2604    66737 S   atencion_virtual_a_empleador_para_promocion_y_capacitacion_serv id_atencion_virtual    DEFAULT     �   ALTER TABLE ONLY public.atencion_virtual_a_empleador_para_promocion_y_capacitacion_serv ALTER COLUMN id_atencion_virtual SET DEFAULT nextval('public.atencion_virtual_a_empleador_para_promo_id_atencion_virtual_seq'::regclass);
 �   ALTER TABLE public.atencion_virtual_a_empleador_para_promocion_y_capacitacion_serv ALTER COLUMN id_atencion_virtual DROP DEFAULT;
       public          postgres    false    219    218                       2604    66738    certificacion id_certificacion    DEFAULT     �   ALTER TABLE ONLY public.certificacion ALTER COLUMN id_certificacion SET DEFAULT nextval('public.certificacion_id_certificacion_seq'::regclass);
 M   ALTER TABLE public.certificacion ALTER COLUMN id_certificacion DROP DEFAULT;
       public          postgres    false    221    220                       2604    66739 <   derivacion_interistitucional id_derivacion_interistitucional    DEFAULT     �   ALTER TABLE ONLY public.derivacion_interistitucional ALTER COLUMN id_derivacion_interistitucional SET DEFAULT nextval('public.derivacion_interistitucional_id_derivacion_interistituciona_seq'::regclass);
 k   ALTER TABLE public.derivacion_interistitucional ALTER COLUMN id_derivacion_interistitucional DROP DEFAULT;
       public          postgres    false    223    222                       2604    66740 &   direccion_general id_direccion_general    DEFAULT     �   ALTER TABLE ONLY public.direccion_general ALTER COLUMN id_direccion_general SET DEFAULT nextval('public.direccion_general_id_direccion_general_seq'::regclass);
 U   ALTER TABLE public.direccion_general ALTER COLUMN id_direccion_general DROP DEFAULT;
       public          postgres    false    225    224                       2604    66741    empresa id_empresa    DEFAULT     x   ALTER TABLE ONLY public.empresa ALTER COLUMN id_empresa SET DEFAULT nextval('public.empresa_id_empresa_seq'::regclass);
 A   ALTER TABLE public.empresa ALTER COLUMN id_empresa DROP DEFAULT;
       public          postgres    false    229    226                       2604    66742 ^   empresa_asesorada_por_unidad_promocion_empleo id_empresa_asesorada_por_unidad_promocion_empleo    DEFAULT     �   ALTER TABLE ONLY public.empresa_asesorada_por_unidad_promocion_empleo ALTER COLUMN id_empresa_asesorada_por_unidad_promocion_empleo SET DEFAULT nextval('public.empresa_asesorada_por_unidad__id_empresa_asesorada_por_unid_seq'::regclass);
 �   ALTER TABLE public.empresa_asesorada_por_unidad_promocion_empleo ALTER COLUMN id_empresa_asesorada_por_unidad_promocion_empleo DROP DEFAULT;
       public          postgres    false    228    227                       2604    66743 "   grado_academico id_grado_academico    DEFAULT     �   ALTER TABLE ONLY public.grado_academico ALTER COLUMN id_grado_academico SET DEFAULT nextval('public.grado_academico_id_grado_academico_seq'::regclass);
 Q   ALTER TABLE public.grado_academico ALTER COLUMN id_grado_academico DROP DEFAULT;
       public          postgres    false    231    230                       2604    66744    informe_del_actor id_actor    DEFAULT     �   ALTER TABLE ONLY public.informe_del_actor ALTER COLUMN id_actor SET DEFAULT nextval('public.informe_del_actor_id_actor_seq'::regclass);
 I   ALTER TABLE public.informe_del_actor ALTER COLUMN id_actor DROP DEFAULT;
       public          postgres    false    233    232            !           2604    66745 0   intermediacion_laboral id_intermediacion_laboral    DEFAULT     �   ALTER TABLE ONLY public.intermediacion_laboral ALTER COLUMN id_intermediacion_laboral SET DEFAULT nextval('public.intermediacion_laboral_id_intermediacion_laboral_seq'::regclass);
 _   ALTER TABLE public.intermediacion_laboral ALTER COLUMN id_intermediacion_laboral DROP DEFAULT;
       public          postgres    false    235    234            #           2604    66746    modulo id_modulo    DEFAULT     t   ALTER TABLE ONLY public.modulo ALTER COLUMN id_modulo SET DEFAULT nextval('public.modulo_id_modulo_seq'::regclass);
 ?   ALTER TABLE public.modulo ALTER COLUMN id_modulo DROP DEFAULT;
       public          postgres    false    237    236            $           2604    66747 .   movimiento_migratorio id_movimiento_migratorio    DEFAULT     �   ALTER TABLE ONLY public.movimiento_migratorio ALTER COLUMN id_movimiento_migratorio SET DEFAULT nextval('public.movimiento_migratorio_id_movimiento_migratorio_seq'::regclass);
 ]   ALTER TABLE public.movimiento_migratorio ALTER COLUMN id_movimiento_migratorio DROP DEFAULT;
       public          postgres    false    239    238            )           2604    66748    ms_objeto id_objeto    DEFAULT     z   ALTER TABLE ONLY public.ms_objeto ALTER COLUMN id_objeto SET DEFAULT nextval('public.ms_objeto_id_objeto_seq'::regclass);
 B   ALTER TABLE public.ms_objeto ALTER COLUMN id_objeto DROP DEFAULT;
       public          postgres    false    241    240            ,           2604    66749    ms_parametro id_parametro    DEFAULT     �   ALTER TABLE ONLY public.ms_parametro ALTER COLUMN id_parametro SET DEFAULT nextval('public.ms_parametro_id_parametro_seq'::regclass);
 H   ALTER TABLE public.ms_parametro ALTER COLUMN id_parametro DROP DEFAULT;
       public          postgres    false    243    242            2           2604    66750    ms_rol id_rol    DEFAULT     n   ALTER TABLE ONLY public.ms_rol ALTER COLUMN id_rol SET DEFAULT nextval('public.ms_rol_id_rol_seq'::regclass);
 <   ALTER TABLE public.ms_rol ALTER COLUMN id_rol DROP DEFAULT;
       public          postgres    false    246    245            5           2604    66751 "   nivel_educativo id_nivel_educativo    DEFAULT     �   ALTER TABLE ONLY public.nivel_educativo ALTER COLUMN id_nivel_educativo SET DEFAULT nextval('public.nivel_educativo_id_nivel_educativo_seq'::regclass);
 Q   ALTER TABLE public.nivel_educativo ALTER COLUMN id_nivel_educativo DROP DEFAULT;
       public          postgres    false    248    247            6           2604    66752 *   orientacion_laboral id_orientacion_laboral    DEFAULT     �   ALTER TABLE ONLY public.orientacion_laboral ALTER COLUMN id_orientacion_laboral SET DEFAULT nextval('public.orientacion_laboral_id_orientacion_laboral_seq'::regclass);
 Y   ALTER TABLE public.orientacion_laboral ALTER COLUMN id_orientacion_laboral DROP DEFAULT;
       public          postgres    false    250    249            >           2604    66753    perfil id_perfil    DEFAULT     t   ALTER TABLE ONLY public.perfil ALTER COLUMN id_perfil SET DEFAULT nextval('public.perfil_id_perfil_seq'::regclass);
 ?   ALTER TABLE public.perfil ALTER COLUMN id_perfil DROP DEFAULT;
       public          postgres    false    252    251            ?           2604    66754    regional id_regional    DEFAULT     |   ALTER TABLE ONLY public.regional ALTER COLUMN id_regional SET DEFAULT nextval('public.regional_id_regional_seq'::regclass);
 C   ALTER TABLE public.regional ALTER COLUMN id_regional DROP DEFAULT;
       public          postgres    false    254    253            @           2604    66755    registro id_registro    DEFAULT     |   ALTER TABLE ONLY public.registro ALTER COLUMN id_registro SET DEFAULT nextval('public.registro_id_registro_seq'::regclass);
 C   ALTER TABLE public.registro ALTER COLUMN id_registro DROP DEFAULT;
       public          postgres    false    256    255            D           2604    66756 $   registro_mensual id_registro_mensual    DEFAULT     �   ALTER TABLE ONLY public.registro_mensual ALTER COLUMN id_registro_mensual SET DEFAULT nextval('public.registro_mensual_id_registro_mensual_seq'::regclass);
 S   ALTER TABLE public.registro_mensual ALTER COLUMN id_registro_mensual DROP DEFAULT;
       public          postgres    false    258    257            F           2604    66757 F   registro_seguimiento_a_derivacion id_registro_seguimiento_a_derivacion    DEFAULT     �   ALTER TABLE ONLY public.registro_seguimiento_a_derivacion ALTER COLUMN id_registro_seguimiento_a_derivacion SET DEFAULT nextval('public.registro_seguimiento_a_deriva_id_registro_seguimiento_a_der_seq'::regclass);
 u   ALTER TABLE public.registro_seguimiento_a_derivacion ALTER COLUMN id_registro_seguimiento_a_derivacion DROP DEFAULT;
       public          postgres    false    260    259            H           2604    66758 \   registro_y_validacion_de_empresa_con_usuario id_registro_y_validacion_de_empresa_con_usuario    DEFAULT     �   ALTER TABLE ONLY public.registro_y_validacion_de_empresa_con_usuario ALTER COLUMN id_registro_y_validacion_de_empresa_con_usuario SET DEFAULT nextval('public.registro_y_validacion_de_empr_id_registro_y_validacion_de_e_seq'::regclass);
 �   ALTER TABLE public.registro_y_validacion_de_empresa_con_usuario ALTER COLUMN id_registro_y_validacion_de_empresa_con_usuario DROP DEFAULT;
       public          postgres    false    262    261            K           2604    66759 /   seguimiento_a_derivados id_seguimiento_derivado    DEFAULT     �   ALTER TABLE ONLY public.seguimiento_a_derivados ALTER COLUMN id_seguimiento_derivado SET DEFAULT nextval('public.seguimiento_a_derivados_id_seguimiento_derivado_seq'::regclass);
 ^   ALTER TABLE public.seguimiento_a_derivados ALTER COLUMN id_seguimiento_derivado DROP DEFAULT;
       public          postgres    false    264    263            N           2604    66760 $   seguimiento_a_empresa id_seguimiento    DEFAULT     �   ALTER TABLE ONLY public.seguimiento_a_empresa ALTER COLUMN id_seguimiento SET DEFAULT nextval('public.seguimiento_a_empresa_id_seguimiento_seq'::regclass);
 S   ALTER TABLE public.seguimiento_a_empresa ALTER COLUMN id_seguimiento DROP DEFAULT;
       public          postgres    false    266    265            T           2604    66761 <   seguimiento_gestion_siempleo id_seguimiento_gestion_siempleo    DEFAULT     �   ALTER TABLE ONLY public.seguimiento_gestion_siempleo ALTER COLUMN id_seguimiento_gestion_siempleo SET DEFAULT nextval('public.seguimiento_gestion_siempleo_id_seguimiento_gestion_siemple_seq'::regclass);
 k   ALTER TABLE public.seguimiento_gestion_siempleo ALTER COLUMN id_seguimiento_gestion_siempleo DROP DEFAULT;
       public          postgres    false    268    267            W           2604    66762    servicio id_servicio    DEFAULT     |   ALTER TABLE ONLY public.servicio ALTER COLUMN id_servicio SET DEFAULT nextval('public.servicio_id_servicio_seq'::regclass);
 C   ALTER TABLE public.servicio ALTER COLUMN id_servicio DROP DEFAULT;
       public          postgres    false    270    269            b           2604    66763 *   tipo_intermediacion id_tipo_intermediacion    DEFAULT     �   ALTER TABLE ONLY public.tipo_intermediacion ALTER COLUMN id_tipo_intermediacion SET DEFAULT nextval('public.tipo_intermediacion_id_tipo_intermediacion_seq'::regclass);
 Y   ALTER TABLE public.tipo_intermediacion ALTER COLUMN id_tipo_intermediacion DROP DEFAULT;
       public          postgres    false    272    271            d           2604    66764    usuario id_usuario    DEFAULT     x   ALTER TABLE ONLY public.usuario ALTER COLUMN id_usuario SET DEFAULT nextval('public.usuario_id_usuario_seq'::regclass);
 A   ALTER TABLE public.usuario ALTER COLUMN id_usuario DROP DEFAULT;
       public          postgres    false    274    273            g           2604    66765 /   verificacion_del_plan_de_accion id_verificacion    DEFAULT     �   ALTER TABLE ONLY public.verificacion_del_plan_de_accion ALTER COLUMN id_verificacion SET DEFAULT nextval('public.verificacion_del_plan_de_accion_id_verificacion_seq'::regclass);
 ^   ALTER TABLE public.verificacion_del_plan_de_accion ALTER COLUMN id_verificacion DROP DEFAULT;
       public          postgres    false    276    275            r          0    66520    asesoria_ventanilla_unica 
   TABLE DATA           �   COPY public.asesoria_ventanilla_unica (id_asesoria_ventanilla_unica, asesoria_ocupacional_miembros_con_discapacidad, asesoria_programa_de_trabajo_en_el_extrangero_ptte, otras_asesorias_brindadas_vu) FROM stdin;
    public          postgres    false    214   q�      t          0    66527 ?   atencion_telefonica_a_empleador_para_promocion_y_capacitacion_s 
   TABLE DATA           �   COPY public.atencion_telefonica_a_empleador_para_promocion_y_capacitacion_s (id_atencion_telefonica, gestion_via_telefono) FROM stdin;
    public          postgres    false    216   Җ      v          0    66532 ?   atencion_virtual_a_empleador_para_promocion_y_capacitacion_serv 
   TABLE DATA           �   COPY public.atencion_virtual_a_empleador_para_promocion_y_capacitacion_serv (id_atencion_virtual, gestion_via_correo, gestion_via_whatsapp) FROM stdin;
    public          postgres    false    218   �      x          0    66538    certificacion 
   TABLE DATA           Q  COPY public.certificacion (id_certificacion, se_habilito_para_empleo, se_habilito_para_emprendimiento, se_certifico_el_personal, interesado_no_se_presento_o_matriculo, interesado_se_retiro, interesado_fue_retirado_por_inasistencias_u_otras_faltas, recibio_asistecia_tecnica, se_otorgo_finaciamiento, recibio_capital_semilla) FROM stdin;
    public          postgres    false    220   4�      z          0    66551    derivacion_interistitucional 
   TABLE DATA           �   COPY public.derivacion_interistitucional (id_derivacion_interistitucional, derivaciones, derivacion_a_formalizacion, derivacion_asistencia_tecnica, derivacion_a_emprendimiento, derivacion_a_credito, modulo_ciudad_mujer) FROM stdin;
    public          postgres    false    222   \�      |          0    66561    direccion_general 
   TABLE DATA           \   COPY public.direccion_general (id_direccion_general, direccion_general, estado) FROM stdin;
    public          postgres    false    224   ��      ~          0    66565    empresa 
   TABLE DATA           6   COPY public.empresa (id_empresa, empresa) FROM stdin;
    public          postgres    false    226   ��                0    66568 -   empresa_asesorada_por_unidad_promocion_empleo 
   TABLE DATA           �   COPY public.empresa_asesorada_por_unidad_promocion_empleo (id_empresa_asesorada_por_unidad_promocion_empleo, orientacion_a_empleador_para_acceso_y_uso_de_bolsa_trabajo_empl, puestos_de_trabajo) FROM stdin;
    public          postgres    false    227   E�      �          0    66575    grado_academico 
   TABLE DATA           j   COPY public.grado_academico (id_grado_academico, grado_academico, id_nivel_educativo, estado) FROM stdin;
    public          postgres    false    230   y�      �          0    66579    informe_del_actor 
   TABLE DATA           e   COPY public.informe_del_actor (id_actor, nombre_actor, programa_proyecto_vigente, fecha) FROM stdin;
    public          postgres    false    232   x�      �          0    66584    intermediacion_laboral 
   TABLE DATA           �   COPY public.intermediacion_laboral (id_intermediacion_laboral, intermediacion_candidato, id_empresa, id_tipo_intermediacion) FROM stdin;
    public          postgres    false    234   ��      �          0    66589    modulo 
   TABLE DATA           @   COPY public.modulo (id_modulo, modulo, descripcion) FROM stdin;
    public          postgres    false    236   (�      �          0    66593    movimiento_migratorio 
   TABLE DATA           �   COPY public.movimiento_migratorio (id_movimiento_migratorio, migrante_retornado, refugiado_migrante, desplazado_interno, marinos) FROM stdin;
    public          postgres    false    238   #�      �          0    66601 	   ms_objeto 
   TABLE DATA           �   COPY public.ms_objeto (id_objeto, objeto, descripcion, tipo_objeto, creado_por, fecha_creacion, modificado_por, fecha_modificacion) FROM stdin;
    public          postgres    false    240   ��      �          0    66609    ms_parametro 
   TABLE DATA           R   COPY public.ms_parametro (id_parametro, id_usuario, parametro, valor) FROM stdin;
    public          postgres    false    242   ��      �          0    66613    ms_permisos 
   TABLE DATA           �   COPY public.ms_permisos (id_objeto, id_rol, permiso_insertar, permiso_editar, permiso_consultar, creado_por, fecha_creacion, modificado_por, fecha_modificacion) FROM stdin;
    public          postgres    false    244   ��      �          0    66621    ms_rol 
   TABLE DATA           z   COPY public.ms_rol (id_rol, rol, descripcion, creado_por, fecha_creacion, modificado_por, fecha_modificacion) FROM stdin;
    public          postgres    false    245   ޜ      �          0    66627    nivel_educativo 
   TABLE DATA           N   COPY public.nivel_educativo (id_nivel_educativo, nivel_educativo) FROM stdin;
    public          postgres    false    247   Z�      �          0    66631    orientacion_laboral 
   TABLE DATA           �   COPY public.orientacion_laboral (id_orientacion_laboral, charlas_orientacion_laboral, orientacion_taller, aplicacion_prueba, creacion_correo, impresion_cv, envio_cv, elaboracion_cv) FROM stdin;
    public          postgres    false    249   ��      �          0    66642    perfil 
   TABLE DATA           P   COPY public.perfil (id_perfil, perfil, estado, id_regional, id_rol) FROM stdin;
    public          postgres    false    251   �      �          0    66646    regional 
   TABLE DATA           Y   COPY public.regional (id_regional, regional, estado, descripcion, id_modulo) FROM stdin;
    public          postgres    false    253   a�      �          0    66650    registro 
   TABLE DATA           �  COPY public.registro (id_registro, id_regional, id_derivacion_interistitucional, id_movimiento_migratorio, id_seguimiento_gestion_siempleo, id_asesoria_ventanilla_unica, id_intermediacion_laboral, id_orientacion_laboral, fecha, nombre_completo, identidad, edad, genero, id_grado_academico, telefono, correo_electronico, inspeccion_por_primera_vez, actualizacion_informacion_candidato, observacion, id_modulo, id_usuario) FROM stdin;
    public          postgres    false    255   W�      �          0    66660    registro_mensual 
   TABLE DATA             COPY public.registro_mensual (id_registro_mensual, id_empresa_asesorada_por_unidad_promocion_empleo, id_atencion_virtual, id_atencion_telefonica, id_registro_y_validacion_de_empresa_con_usuario, id_seguimiento, id_servicio, nombre_empresa, fecha, observacion, id_usuario) FROM stdin;
    public          postgres    false    257   0�      �          0    66667 !   registro_seguimiento_a_derivacion 
   TABLE DATA           �   COPY public.registro_seguimiento_a_derivacion (id_registro_seguimiento_a_derivacion, id_actor, id_verificacion, id_seguimiento_derivado, id_certificacion, id_usuario, observacion) FROM stdin;
    public          postgres    false    259   С      �          0    66674 ,   registro_y_validacion_de_empresa_con_usuario 
   TABLE DATA           �   COPY public.registro_y_validacion_de_empresa_con_usuario (id_registro_y_validacion_de_empresa_con_usuario, validacion_actualizacion_de_datos_de_empresa, registro_de_empresa_en_empleate) FROM stdin;
    public          postgres    false    261   �      �          0    66680    seguimiento_a_derivados 
   TABLE DATA           �   COPY public.seguimiento_a_derivados (id_seguimiento_derivado, nombre_persona_empresa_derivada, identidad, telefono, servicio_requerido, inicio_curso_formalizacion, finalizo_curso_formalizacion) FROM stdin;
    public          postgres    false    263   %�      �          0    66686    seguimiento_a_empresa 
   TABLE DATA           �   COPY public.seguimiento_a_empresa (id_seguimiento, seguimiento_via_telefono_efectivo, seguimiento_via_correo_efectivo, seguimiento_via_telefono_no_efectivo, seguimiento_via_correo_no_efectivo, telefono_correo_que_se_comunico, observacion) FROM stdin;
    public          postgres    false    265   y�      �          0    66697    seguimiento_gestion_siempleo 
   TABLE DATA           �   COPY public.seguimiento_gestion_siempleo (id_seguimiento_gestion_siempleo, seguimiento_a_candidato, seguimiento_a_orientado) FROM stdin;
    public          postgres    false    267   �      �          0    66703    servicio 
   TABLE DATA           i  COPY public.servicio (id_servicio, visita_de_empresa_a_oficina_senaeh, visita_presencial_a_instalaciones_de_empresa, brindar_espacio_fisico_a_empresa, empresa_derivada_a_servicios_complementarios, servicio_prueba_psicometrica, envio_listado_de_candidato, realizacion_convocatoria, accion_difusion_servicio, vacante, empresa_que_proporciona_vacante) FROM stdin;
    public          postgres    false    269   O�      �          0    66717    tipo_intermediacion 
   TABLE DATA           b   COPY public.tipo_intermediacion (id_tipo_intermediacion, tipo_intermediacion, estado) FROM stdin;
    public          postgres    false    271   ��      �          0    66722    usuario 
   TABLE DATA           �   COPY public.usuario (id_usuario, id_regional, id_direccion_general, id_perfil, nombres, primer_apellido, segundo_apellido, correo_electronico, contrasena, telefono, cargo, estado, intentos) FROM stdin;
    public          postgres    false    273   �      �          0    66728    verificacion_del_plan_de_accion 
   TABLE DATA           �   COPY public.verificacion_del_plan_de_accion (id_verificacion, programa_acciones_conjuntas, cuenta_con_plan_de_trabajo, cuenta_con_medio_de_verificacion) FROM stdin;
    public          postgres    false    275   ץ      �           0    0 :   asesoria_ventanilla_unica_id_asesoria_ventanilla_unica_seq    SEQUENCE SET     i   SELECT pg_catalog.setval('public.asesoria_ventanilla_unica_id_asesoria_ventanilla_unica_seq', 23, true);
          public          postgres    false    215            �           0    0 ?   atencion_telefonica_a_empleador_para_id_atencion_telefonica_seq    SEQUENCE SET     m   SELECT pg_catalog.setval('public.atencion_telefonica_a_empleador_para_id_atencion_telefonica_seq', 6, true);
          public          postgres    false    217            �           0    0 ?   atencion_virtual_a_empleador_para_promo_id_atencion_virtual_seq    SEQUENCE SET     m   SELECT pg_catalog.setval('public.atencion_virtual_a_empleador_para_promo_id_atencion_virtual_seq', 6, true);
          public          postgres    false    219            �           0    0 "   certificacion_id_certificacion_seq    SEQUENCE SET     P   SELECT pg_catalog.setval('public.certificacion_id_certificacion_seq', 1, true);
          public          postgres    false    221            �           0    0 ?   derivacion_interistitucional_id_derivacion_interistituciona_seq    SEQUENCE SET     n   SELECT pg_catalog.setval('public.derivacion_interistitucional_id_derivacion_interistituciona_seq', 23, true);
          public          postgres    false    223            �           0    0 *   direccion_general_id_direccion_general_seq    SEQUENCE SET     X   SELECT pg_catalog.setval('public.direccion_general_id_direccion_general_seq', 4, true);
          public          postgres    false    225            �           0    0 ?   empresa_asesorada_por_unidad__id_empresa_asesorada_por_unid_seq    SEQUENCE SET     m   SELECT pg_catalog.setval('public.empresa_asesorada_por_unidad__id_empresa_asesorada_por_unid_seq', 6, true);
          public          postgres    false    228            �           0    0    empresa_id_empresa_seq    SEQUENCE SET     D   SELECT pg_catalog.setval('public.empresa_id_empresa_seq', 5, true);
          public          postgres    false    229            �           0    0 &   grado_academico_id_grado_academico_seq    SEQUENCE SET     U   SELECT pg_catalog.setval('public.grado_academico_id_grado_academico_seq', 15, true);
          public          postgres    false    231            �           0    0    informe_del_actor_id_actor_seq    SEQUENCE SET     L   SELECT pg_catalog.setval('public.informe_del_actor_id_actor_seq', 1, true);
          public          postgres    false    233            �           0    0 4   intermediacion_laboral_id_intermediacion_laboral_seq    SEQUENCE SET     c   SELECT pg_catalog.setval('public.intermediacion_laboral_id_intermediacion_laboral_seq', 22, true);
          public          postgres    false    235            �           0    0    modulo_id_modulo_seq    SEQUENCE SET     B   SELECT pg_catalog.setval('public.modulo_id_modulo_seq', 2, true);
          public          postgres    false    237            �           0    0 2   movimiento_migratorio_id_movimiento_migratorio_seq    SEQUENCE SET     a   SELECT pg_catalog.setval('public.movimiento_migratorio_id_movimiento_migratorio_seq', 23, true);
          public          postgres    false    239            �           0    0    ms_objeto_id_objeto_seq    SEQUENCE SET     E   SELECT pg_catalog.setval('public.ms_objeto_id_objeto_seq', 1, true);
          public          postgres    false    241            �           0    0    ms_parametro_id_parametro_seq    SEQUENCE SET     K   SELECT pg_catalog.setval('public.ms_parametro_id_parametro_seq', 7, true);
          public          postgres    false    243            �           0    0    ms_rol_id_rol_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public.ms_rol_id_rol_seq', 1, true);
          public          postgres    false    246            �           0    0 &   nivel_educativo_id_nivel_educativo_seq    SEQUENCE SET     T   SELECT pg_catalog.setval('public.nivel_educativo_id_nivel_educativo_seq', 4, true);
          public          postgres    false    248            �           0    0 .   orientacion_laboral_id_orientacion_laboral_seq    SEQUENCE SET     ]   SELECT pg_catalog.setval('public.orientacion_laboral_id_orientacion_laboral_seq', 21, true);
          public          postgres    false    250            �           0    0    perfil_id_perfil_seq    SEQUENCE SET     B   SELECT pg_catalog.setval('public.perfil_id_perfil_seq', 3, true);
          public          postgres    false    252            �           0    0    regional_id_regional_seq    SEQUENCE SET     F   SELECT pg_catalog.setval('public.regional_id_regional_seq', 7, true);
          public          postgres    false    254            �           0    0    registro_id_registro_seq    SEQUENCE SET     G   SELECT pg_catalog.setval('public.registro_id_registro_seq', 17, true);
          public          postgres    false    256            �           0    0 (   registro_mensual_id_registro_mensual_seq    SEQUENCE SET     V   SELECT pg_catalog.setval('public.registro_mensual_id_registro_mensual_seq', 5, true);
          public          postgres    false    258            �           0    0 ?   registro_seguimiento_a_deriva_id_registro_seguimiento_a_der_seq    SEQUENCE SET     m   SELECT pg_catalog.setval('public.registro_seguimiento_a_deriva_id_registro_seguimiento_a_der_seq', 1, true);
          public          postgres    false    260            �           0    0 ?   registro_y_validacion_de_empr_id_registro_y_validacion_de_e_seq    SEQUENCE SET     m   SELECT pg_catalog.setval('public.registro_y_validacion_de_empr_id_registro_y_validacion_de_e_seq', 6, true);
          public          postgres    false    262            �           0    0 3   seguimiento_a_derivados_id_seguimiento_derivado_seq    SEQUENCE SET     a   SELECT pg_catalog.setval('public.seguimiento_a_derivados_id_seguimiento_derivado_seq', 1, true);
          public          postgres    false    264            �           0    0 (   seguimiento_a_empresa_id_seguimiento_seq    SEQUENCE SET     V   SELECT pg_catalog.setval('public.seguimiento_a_empresa_id_seguimiento_seq', 6, true);
          public          postgres    false    266            �           0    0 ?   seguimiento_gestion_siempleo_id_seguimiento_gestion_siemple_seq    SEQUENCE SET     n   SELECT pg_catalog.setval('public.seguimiento_gestion_siempleo_id_seguimiento_gestion_siemple_seq', 23, true);
          public          postgres    false    268            �           0    0    servicio_id_servicio_seq    SEQUENCE SET     F   SELECT pg_catalog.setval('public.servicio_id_servicio_seq', 6, true);
          public          postgres    false    270            �           0    0 .   tipo_intermediacion_id_tipo_intermediacion_seq    SEQUENCE SET     \   SELECT pg_catalog.setval('public.tipo_intermediacion_id_tipo_intermediacion_seq', 4, true);
          public          postgres    false    272            �           0    0    usuario_id_usuario_seq    SEQUENCE SET     D   SELECT pg_catalog.setval('public.usuario_id_usuario_seq', 7, true);
          public          postgres    false    274            �           0    0 3   verificacion_del_plan_de_accion_id_verificacion_seq    SEQUENCE SET     a   SELECT pg_catalog.setval('public.verificacion_del_plan_de_accion_id_verificacion_seq', 1, true);
          public          postgres    false    276            m           2606    66767 8   asesoria_ventanilla_unica asesoria_ventanilla_unica_pkey 
   CONSTRAINT     �   ALTER TABLE ONLY public.asesoria_ventanilla_unica
    ADD CONSTRAINT asesoria_ventanilla_unica_pkey PRIMARY KEY (id_asesoria_ventanilla_unica);
 b   ALTER TABLE ONLY public.asesoria_ventanilla_unica DROP CONSTRAINT asesoria_ventanilla_unica_pkey;
       public            postgres    false    214            o           2606    66769    atencion_telefonica_a_empleador_para_promocion_y_capacitacion_s atencion_telefonica_a_empleador_para_promocion_y_capacitac_pkey 
   CONSTRAINT     �   ALTER TABLE ONLY public.atencion_telefonica_a_empleador_para_promocion_y_capacitacion_s
    ADD CONSTRAINT atencion_telefonica_a_empleador_para_promocion_y_capacitac_pkey PRIMARY KEY (id_atencion_telefonica);
 �   ALTER TABLE ONLY public.atencion_telefonica_a_empleador_para_promocion_y_capacitacion_s DROP CONSTRAINT atencion_telefonica_a_empleador_para_promocion_y_capacitac_pkey;
       public            postgres    false    216            q           2606    66771    atencion_virtual_a_empleador_para_promocion_y_capacitacion_serv atencion_virtual_a_empleador_para_promocion_y_capacitacion_pkey 
   CONSTRAINT     �   ALTER TABLE ONLY public.atencion_virtual_a_empleador_para_promocion_y_capacitacion_serv
    ADD CONSTRAINT atencion_virtual_a_empleador_para_promocion_y_capacitacion_pkey PRIMARY KEY (id_atencion_virtual);
 �   ALTER TABLE ONLY public.atencion_virtual_a_empleador_para_promocion_y_capacitacion_serv DROP CONSTRAINT atencion_virtual_a_empleador_para_promocion_y_capacitacion_pkey;
       public            postgres    false    218            s           2606    66773     certificacion certificacion_pkey 
   CONSTRAINT     l   ALTER TABLE ONLY public.certificacion
    ADD CONSTRAINT certificacion_pkey PRIMARY KEY (id_certificacion);
 J   ALTER TABLE ONLY public.certificacion DROP CONSTRAINT certificacion_pkey;
       public            postgres    false    220            u           2606    66775 >   derivacion_interistitucional derivacion_interistitucional_pkey 
   CONSTRAINT     �   ALTER TABLE ONLY public.derivacion_interistitucional
    ADD CONSTRAINT derivacion_interistitucional_pkey PRIMARY KEY (id_derivacion_interistitucional);
 h   ALTER TABLE ONLY public.derivacion_interistitucional DROP CONSTRAINT derivacion_interistitucional_pkey;
       public            postgres    false    222            w           2606    66777 9   direccion_general direccion_general_direccion_general_key 
   CONSTRAINT     �   ALTER TABLE ONLY public.direccion_general
    ADD CONSTRAINT direccion_general_direccion_general_key UNIQUE (direccion_general);
 c   ALTER TABLE ONLY public.direccion_general DROP CONSTRAINT direccion_general_direccion_general_key;
       public            postgres    false    224            y           2606    66779 (   direccion_general direccion_general_pkey 
   CONSTRAINT     x   ALTER TABLE ONLY public.direccion_general
    ADD CONSTRAINT direccion_general_pkey PRIMARY KEY (id_direccion_general);
 R   ALTER TABLE ONLY public.direccion_general DROP CONSTRAINT direccion_general_pkey;
       public            postgres    false    224            }           2606    66781 `   empresa_asesorada_por_unidad_promocion_empleo empresa_asesorada_por_unidad_promocion_empleo_pkey 
   CONSTRAINT     �   ALTER TABLE ONLY public.empresa_asesorada_por_unidad_promocion_empleo
    ADD CONSTRAINT empresa_asesorada_por_unidad_promocion_empleo_pkey PRIMARY KEY (id_empresa_asesorada_por_unidad_promocion_empleo);
 �   ALTER TABLE ONLY public.empresa_asesorada_por_unidad_promocion_empleo DROP CONSTRAINT empresa_asesorada_por_unidad_promocion_empleo_pkey;
       public            postgres    false    227            {           2606    66783    empresa empresa_pkey 
   CONSTRAINT     Z   ALTER TABLE ONLY public.empresa
    ADD CONSTRAINT empresa_pkey PRIMARY KEY (id_empresa);
 >   ALTER TABLE ONLY public.empresa DROP CONSTRAINT empresa_pkey;
       public            postgres    false    226                       2606    66785 3   grado_academico grado_academico_grado_academico_key 
   CONSTRAINT     y   ALTER TABLE ONLY public.grado_academico
    ADD CONSTRAINT grado_academico_grado_academico_key UNIQUE (grado_academico);
 ]   ALTER TABLE ONLY public.grado_academico DROP CONSTRAINT grado_academico_grado_academico_key;
       public            postgres    false    230            �           2606    66787 $   grado_academico grado_academico_pkey 
   CONSTRAINT     r   ALTER TABLE ONLY public.grado_academico
    ADD CONSTRAINT grado_academico_pkey PRIMARY KEY (id_grado_academico);
 N   ALTER TABLE ONLY public.grado_academico DROP CONSTRAINT grado_academico_pkey;
       public            postgres    false    230            �           2606    66789 (   informe_del_actor informe_del_actor_pkey 
   CONSTRAINT     l   ALTER TABLE ONLY public.informe_del_actor
    ADD CONSTRAINT informe_del_actor_pkey PRIMARY KEY (id_actor);
 R   ALTER TABLE ONLY public.informe_del_actor DROP CONSTRAINT informe_del_actor_pkey;
       public            postgres    false    232            �           2606    66791 2   intermediacion_laboral intermediacion_laboral_pkey 
   CONSTRAINT     �   ALTER TABLE ONLY public.intermediacion_laboral
    ADD CONSTRAINT intermediacion_laboral_pkey PRIMARY KEY (id_intermediacion_laboral);
 \   ALTER TABLE ONLY public.intermediacion_laboral DROP CONSTRAINT intermediacion_laboral_pkey;
       public            postgres    false    234            �           2606    66793    modulo modulo_pkey 
   CONSTRAINT     W   ALTER TABLE ONLY public.modulo
    ADD CONSTRAINT modulo_pkey PRIMARY KEY (id_modulo);
 <   ALTER TABLE ONLY public.modulo DROP CONSTRAINT modulo_pkey;
       public            postgres    false    236            �           2606    66795 0   movimiento_migratorio movimiento_migratorio_pkey 
   CONSTRAINT     �   ALTER TABLE ONLY public.movimiento_migratorio
    ADD CONSTRAINT movimiento_migratorio_pkey PRIMARY KEY (id_movimiento_migratorio);
 Z   ALTER TABLE ONLY public.movimiento_migratorio DROP CONSTRAINT movimiento_migratorio_pkey;
       public            postgres    false    238            �           2606    66797    ms_objeto ms_objeto_objeto_key 
   CONSTRAINT     [   ALTER TABLE ONLY public.ms_objeto
    ADD CONSTRAINT ms_objeto_objeto_key UNIQUE (objeto);
 H   ALTER TABLE ONLY public.ms_objeto DROP CONSTRAINT ms_objeto_objeto_key;
       public            postgres    false    240            �           2606    66799    ms_objeto ms_objeto_pkey 
   CONSTRAINT     ]   ALTER TABLE ONLY public.ms_objeto
    ADD CONSTRAINT ms_objeto_pkey PRIMARY KEY (id_objeto);
 B   ALTER TABLE ONLY public.ms_objeto DROP CONSTRAINT ms_objeto_pkey;
       public            postgres    false    240            �           2606    66801 '   ms_parametro ms_parametro_parametro_key 
   CONSTRAINT     g   ALTER TABLE ONLY public.ms_parametro
    ADD CONSTRAINT ms_parametro_parametro_key UNIQUE (parametro);
 Q   ALTER TABLE ONLY public.ms_parametro DROP CONSTRAINT ms_parametro_parametro_key;
       public            postgres    false    242            �           2606    66803    ms_parametro ms_parametro_pkey 
   CONSTRAINT     f   ALTER TABLE ONLY public.ms_parametro
    ADD CONSTRAINT ms_parametro_pkey PRIMARY KEY (id_parametro);
 H   ALTER TABLE ONLY public.ms_parametro DROP CONSTRAINT ms_parametro_pkey;
       public            postgres    false    242            �           2606    66805    ms_rol ms_rol_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.ms_rol
    ADD CONSTRAINT ms_rol_pkey PRIMARY KEY (id_rol);
 <   ALTER TABLE ONLY public.ms_rol DROP CONSTRAINT ms_rol_pkey;
       public            postgres    false    245            �           2606    66807    ms_rol ms_rol_rol_key 
   CONSTRAINT     O   ALTER TABLE ONLY public.ms_rol
    ADD CONSTRAINT ms_rol_rol_key UNIQUE (rol);
 ?   ALTER TABLE ONLY public.ms_rol DROP CONSTRAINT ms_rol_rol_key;
       public            postgres    false    245            �           2606    66809 3   nivel_educativo nivel_educativo_nivel_educativo_key 
   CONSTRAINT     y   ALTER TABLE ONLY public.nivel_educativo
    ADD CONSTRAINT nivel_educativo_nivel_educativo_key UNIQUE (nivel_educativo);
 ]   ALTER TABLE ONLY public.nivel_educativo DROP CONSTRAINT nivel_educativo_nivel_educativo_key;
       public            postgres    false    247            �           2606    66811 $   nivel_educativo nivel_educativo_pkey 
   CONSTRAINT     r   ALTER TABLE ONLY public.nivel_educativo
    ADD CONSTRAINT nivel_educativo_pkey PRIMARY KEY (id_nivel_educativo);
 N   ALTER TABLE ONLY public.nivel_educativo DROP CONSTRAINT nivel_educativo_pkey;
       public            postgres    false    247            �           2606    66813 ,   orientacion_laboral orientacion_laboral_pkey 
   CONSTRAINT     ~   ALTER TABLE ONLY public.orientacion_laboral
    ADD CONSTRAINT orientacion_laboral_pkey PRIMARY KEY (id_orientacion_laboral);
 V   ALTER TABLE ONLY public.orientacion_laboral DROP CONSTRAINT orientacion_laboral_pkey;
       public            postgres    false    249            �           2606    66815    perfil perfil_pkey 
   CONSTRAINT     W   ALTER TABLE ONLY public.perfil
    ADD CONSTRAINT perfil_pkey PRIMARY KEY (id_perfil);
 <   ALTER TABLE ONLY public.perfil DROP CONSTRAINT perfil_pkey;
       public            postgres    false    251            �           2606    66817    regional regional_pkey 
   CONSTRAINT     ]   ALTER TABLE ONLY public.regional
    ADD CONSTRAINT regional_pkey PRIMARY KEY (id_regional);
 @   ALTER TABLE ONLY public.regional DROP CONSTRAINT regional_pkey;
       public            postgres    false    253            �           2606    66819 (   registro registro_correo_electronico_key 
   CONSTRAINT     q   ALTER TABLE ONLY public.registro
    ADD CONSTRAINT registro_correo_electronico_key UNIQUE (correo_electronico);
 R   ALTER TABLE ONLY public.registro DROP CONSTRAINT registro_correo_electronico_key;
       public            postgres    false    255            �           2606    66821    registro registro_identidad_key 
   CONSTRAINT     _   ALTER TABLE ONLY public.registro
    ADD CONSTRAINT registro_identidad_key UNIQUE (identidad);
 I   ALTER TABLE ONLY public.registro DROP CONSTRAINT registro_identidad_key;
       public            postgres    false    255            �           2606    66823 &   registro_mensual registro_mensual_pkey 
   CONSTRAINT     u   ALTER TABLE ONLY public.registro_mensual
    ADD CONSTRAINT registro_mensual_pkey PRIMARY KEY (id_registro_mensual);
 P   ALTER TABLE ONLY public.registro_mensual DROP CONSTRAINT registro_mensual_pkey;
       public            postgres    false    257            �           2606    66825    registro registro_pkey 
   CONSTRAINT     ]   ALTER TABLE ONLY public.registro
    ADD CONSTRAINT registro_pkey PRIMARY KEY (id_registro);
 @   ALTER TABLE ONLY public.registro DROP CONSTRAINT registro_pkey;
       public            postgres    false    255            �           2606    66827 H   registro_seguimiento_a_derivacion registro_seguimiento_a_derivacion_pkey 
   CONSTRAINT     �   ALTER TABLE ONLY public.registro_seguimiento_a_derivacion
    ADD CONSTRAINT registro_seguimiento_a_derivacion_pkey PRIMARY KEY (id_registro_seguimiento_a_derivacion);
 r   ALTER TABLE ONLY public.registro_seguimiento_a_derivacion DROP CONSTRAINT registro_seguimiento_a_derivacion_pkey;
       public            postgres    false    259            �           2606    66829 ^   registro_y_validacion_de_empresa_con_usuario registro_y_validacion_de_empresa_con_usuario_pkey 
   CONSTRAINT     �   ALTER TABLE ONLY public.registro_y_validacion_de_empresa_con_usuario
    ADD CONSTRAINT registro_y_validacion_de_empresa_con_usuario_pkey PRIMARY KEY (id_registro_y_validacion_de_empresa_con_usuario);
 �   ALTER TABLE ONLY public.registro_y_validacion_de_empresa_con_usuario DROP CONSTRAINT registro_y_validacion_de_empresa_con_usuario_pkey;
       public            postgres    false    261            �           2606    66831 =   seguimiento_a_derivados seguimiento_a_derivados_identidad_key 
   CONSTRAINT     }   ALTER TABLE ONLY public.seguimiento_a_derivados
    ADD CONSTRAINT seguimiento_a_derivados_identidad_key UNIQUE (identidad);
 g   ALTER TABLE ONLY public.seguimiento_a_derivados DROP CONSTRAINT seguimiento_a_derivados_identidad_key;
       public            postgres    false    263            �           2606    66833 4   seguimiento_a_derivados seguimiento_a_derivados_pkey 
   CONSTRAINT     �   ALTER TABLE ONLY public.seguimiento_a_derivados
    ADD CONSTRAINT seguimiento_a_derivados_pkey PRIMARY KEY (id_seguimiento_derivado);
 ^   ALTER TABLE ONLY public.seguimiento_a_derivados DROP CONSTRAINT seguimiento_a_derivados_pkey;
       public            postgres    false    263            �           2606    66835 0   seguimiento_a_empresa seguimiento_a_empresa_pkey 
   CONSTRAINT     z   ALTER TABLE ONLY public.seguimiento_a_empresa
    ADD CONSTRAINT seguimiento_a_empresa_pkey PRIMARY KEY (id_seguimiento);
 Z   ALTER TABLE ONLY public.seguimiento_a_empresa DROP CONSTRAINT seguimiento_a_empresa_pkey;
       public            postgres    false    265            �           2606    66837 >   seguimiento_gestion_siempleo seguimiento_gestion_siempleo_pkey 
   CONSTRAINT     �   ALTER TABLE ONLY public.seguimiento_gestion_siempleo
    ADD CONSTRAINT seguimiento_gestion_siempleo_pkey PRIMARY KEY (id_seguimiento_gestion_siempleo);
 h   ALTER TABLE ONLY public.seguimiento_gestion_siempleo DROP CONSTRAINT seguimiento_gestion_siempleo_pkey;
       public            postgres    false    267            �           2606    66839    servicio servicio_pkey 
   CONSTRAINT     ]   ALTER TABLE ONLY public.servicio
    ADD CONSTRAINT servicio_pkey PRIMARY KEY (id_servicio);
 @   ALTER TABLE ONLY public.servicio DROP CONSTRAINT servicio_pkey;
       public            postgres    false    269            �           2606    66841 ,   tipo_intermediacion tipo_intermediacion_pkey 
   CONSTRAINT     ~   ALTER TABLE ONLY public.tipo_intermediacion
    ADD CONSTRAINT tipo_intermediacion_pkey PRIMARY KEY (id_tipo_intermediacion);
 V   ALTER TABLE ONLY public.tipo_intermediacion DROP CONSTRAINT tipo_intermediacion_pkey;
       public            postgres    false    271            �           2606    66843 ?   tipo_intermediacion tipo_intermediacion_tipo_intermediacion_key 
   CONSTRAINT     �   ALTER TABLE ONLY public.tipo_intermediacion
    ADD CONSTRAINT tipo_intermediacion_tipo_intermediacion_key UNIQUE (tipo_intermediacion);
 i   ALTER TABLE ONLY public.tipo_intermediacion DROP CONSTRAINT tipo_intermediacion_tipo_intermediacion_key;
       public            postgres    false    271            �           2606    66845    regional unique_descripcion 
   CONSTRAINT     ]   ALTER TABLE ONLY public.regional
    ADD CONSTRAINT unique_descripcion UNIQUE (descripcion);
 E   ALTER TABLE ONLY public.regional DROP CONSTRAINT unique_descripcion;
       public            postgres    false    253            �           2606    66847 &   usuario usuario_correo_electronico_key 
   CONSTRAINT     o   ALTER TABLE ONLY public.usuario
    ADD CONSTRAINT usuario_correo_electronico_key UNIQUE (correo_electronico);
 P   ALTER TABLE ONLY public.usuario DROP CONSTRAINT usuario_correo_electronico_key;
       public            postgres    false    273            �           2606    66849    usuario usuario_pkey 
   CONSTRAINT     Z   ALTER TABLE ONLY public.usuario
    ADD CONSTRAINT usuario_pkey PRIMARY KEY (id_usuario);
 >   ALTER TABLE ONLY public.usuario DROP CONSTRAINT usuario_pkey;
       public            postgres    false    273            �           2606    66851 D   verificacion_del_plan_de_accion verificacion_del_plan_de_accion_pkey 
   CONSTRAINT     �   ALTER TABLE ONLY public.verificacion_del_plan_de_accion
    ADD CONSTRAINT verificacion_del_plan_de_accion_pkey PRIMARY KEY (id_verificacion);
 n   ALTER TABLE ONLY public.verificacion_del_plan_de_accion DROP CONSTRAINT verificacion_del_plan_de_accion_pkey;
       public            postgres    false    275            �           2606    66852 !   intermediacion_laboral fk_empresa    FK CONSTRAINT     �   ALTER TABLE ONLY public.intermediacion_laboral
    ADD CONSTRAINT fk_empresa FOREIGN KEY (id_empresa) REFERENCES public.empresa(id_empresa);
 K   ALTER TABLE ONLY public.intermediacion_laboral DROP CONSTRAINT fk_empresa;
       public          postgres    false    234    226    3451            �           2606    66857    registro fk_grado_academico    FK CONSTRAINT     �   ALTER TABLE ONLY public.registro
    ADD CONSTRAINT fk_grado_academico FOREIGN KEY (id_grado_academico) REFERENCES public.grado_academico(id_grado_academico);
 E   ALTER TABLE ONLY public.registro DROP CONSTRAINT fk_grado_academico;
       public          postgres    false    230    3457    255            �           2606    66862    regional fk_modulo    FK CONSTRAINT     {   ALTER TABLE ONLY public.regional
    ADD CONSTRAINT fk_modulo FOREIGN KEY (id_modulo) REFERENCES public.modulo(id_modulo);
 <   ALTER TABLE ONLY public.regional DROP CONSTRAINT fk_modulo;
       public          postgres    false    236    253    3463            �           2606    66867    registro fk_modulo    FK CONSTRAINT     {   ALTER TABLE ONLY public.registro
    ADD CONSTRAINT fk_modulo FOREIGN KEY (id_modulo) REFERENCES public.modulo(id_modulo);
 <   ALTER TABLE ONLY public.registro DROP CONSTRAINT fk_modulo;
       public          postgres    false    3463    236    255            �           2606    66872    perfil fk_regional    FK CONSTRAINT     �   ALTER TABLE ONLY public.perfil
    ADD CONSTRAINT fk_regional FOREIGN KEY (id_regional) REFERENCES public.regional(id_regional);
 <   ALTER TABLE ONLY public.perfil DROP CONSTRAINT fk_regional;
       public          postgres    false    253    251    3487            �           2606    66877    perfil fk_rol    FK CONSTRAINT     p   ALTER TABLE ONLY public.perfil
    ADD CONSTRAINT fk_rol FOREIGN KEY (id_rol) REFERENCES public.ms_rol(id_rol);
 7   ALTER TABLE ONLY public.perfil DROP CONSTRAINT fk_rol;
       public          postgres    false    251    245    3475            �           2606    66882 -   intermediacion_laboral fk_tipo_intermediacion    FK CONSTRAINT     �   ALTER TABLE ONLY public.intermediacion_laboral
    ADD CONSTRAINT fk_tipo_intermediacion FOREIGN KEY (id_tipo_intermediacion) REFERENCES public.tipo_intermediacion(id_tipo_intermediacion);
 W   ALTER TABLE ONLY public.intermediacion_laboral DROP CONSTRAINT fk_tipo_intermediacion;
       public          postgres    false    3513    271    234            �           2606    66887    registro fk_usuario    FK CONSTRAINT        ALTER TABLE ONLY public.registro
    ADD CONSTRAINT fk_usuario FOREIGN KEY (id_usuario) REFERENCES public.usuario(id_usuario);
 =   ALTER TABLE ONLY public.registro DROP CONSTRAINT fk_usuario;
       public          postgres    false    273    3519    255            �           2606    66892    registro_mensual fk_usuario    FK CONSTRAINT     �   ALTER TABLE ONLY public.registro_mensual
    ADD CONSTRAINT fk_usuario FOREIGN KEY (id_usuario) REFERENCES public.usuario(id_usuario);
 E   ALTER TABLE ONLY public.registro_mensual DROP CONSTRAINT fk_usuario;
       public          postgres    false    273    257    3519            �           2606    66897 7   grado_academico grado_academico_id_nivel_educativo_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.grado_academico
    ADD CONSTRAINT grado_academico_id_nivel_educativo_fkey FOREIGN KEY (id_nivel_educativo) REFERENCES public.nivel_educativo(id_nivel_educativo);
 a   ALTER TABLE ONLY public.grado_academico DROP CONSTRAINT grado_academico_id_nivel_educativo_fkey;
       public          postgres    false    230    247    3481            �           2606    66902 )   ms_parametro ms_parametro_id_usuario_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.ms_parametro
    ADD CONSTRAINT ms_parametro_id_usuario_fkey FOREIGN KEY (id_usuario) REFERENCES public.usuario(id_usuario);
 S   ALTER TABLE ONLY public.ms_parametro DROP CONSTRAINT ms_parametro_id_usuario_fkey;
       public          postgres    false    3519    242    273            �           2606    66907 &   ms_permisos ms_permisos_id_objeto_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.ms_permisos
    ADD CONSTRAINT ms_permisos_id_objeto_fkey FOREIGN KEY (id_objeto) REFERENCES public.ms_objeto(id_objeto);
 P   ALTER TABLE ONLY public.ms_permisos DROP CONSTRAINT ms_permisos_id_objeto_fkey;
       public          postgres    false    240    244    3469            �           2606    66912 #   ms_permisos ms_permisos_id_rol_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.ms_permisos
    ADD CONSTRAINT ms_permisos_id_rol_fkey FOREIGN KEY (id_rol) REFERENCES public.ms_rol(id_rol);
 M   ALTER TABLE ONLY public.ms_permisos DROP CONSTRAINT ms_permisos_id_rol_fkey;
       public          postgres    false    245    3475    244            �           2606    66917 3   registro registro_id_asesoria_ventanilla_unica_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.registro
    ADD CONSTRAINT registro_id_asesoria_ventanilla_unica_fkey FOREIGN KEY (id_asesoria_ventanilla_unica) REFERENCES public.asesoria_ventanilla_unica(id_asesoria_ventanilla_unica);
 ]   ALTER TABLE ONLY public.registro DROP CONSTRAINT registro_id_asesoria_ventanilla_unica_fkey;
       public          postgres    false    3437    214    255            �           2606    66922 6   registro registro_id_derivacion_interistitucional_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.registro
    ADD CONSTRAINT registro_id_derivacion_interistitucional_fkey FOREIGN KEY (id_derivacion_interistitucional) REFERENCES public.derivacion_interistitucional(id_derivacion_interistitucional);
 `   ALTER TABLE ONLY public.registro DROP CONSTRAINT registro_id_derivacion_interistitucional_fkey;
       public          postgres    false    255    222    3445            �           2606    66927 0   registro registro_id_intermediacion_laboral_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.registro
    ADD CONSTRAINT registro_id_intermediacion_laboral_fkey FOREIGN KEY (id_intermediacion_laboral) REFERENCES public.intermediacion_laboral(id_intermediacion_laboral);
 Z   ALTER TABLE ONLY public.registro DROP CONSTRAINT registro_id_intermediacion_laboral_fkey;
       public          postgres    false    234    3461    255            �           2606    66932 /   registro registro_id_movimiento_migratorio_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.registro
    ADD CONSTRAINT registro_id_movimiento_migratorio_fkey FOREIGN KEY (id_movimiento_migratorio) REFERENCES public.movimiento_migratorio(id_movimiento_migratorio);
 Y   ALTER TABLE ONLY public.registro DROP CONSTRAINT registro_id_movimiento_migratorio_fkey;
       public          postgres    false    255    238    3465            �           2606    66937 -   registro registro_id_orientacion_laboral_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.registro
    ADD CONSTRAINT registro_id_orientacion_laboral_fkey FOREIGN KEY (id_orientacion_laboral) REFERENCES public.orientacion_laboral(id_orientacion_laboral);
 W   ALTER TABLE ONLY public.registro DROP CONSTRAINT registro_id_orientacion_laboral_fkey;
       public          postgres    false    255    249    3483            �           2606    66942 "   registro registro_id_regional_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.registro
    ADD CONSTRAINT registro_id_regional_fkey FOREIGN KEY (id_regional) REFERENCES public.regional(id_regional);
 L   ALTER TABLE ONLY public.registro DROP CONSTRAINT registro_id_regional_fkey;
       public          postgres    false    253    3487    255            �           2606    66947 6   registro registro_id_seguimiento_gestion_siempleo_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.registro
    ADD CONSTRAINT registro_id_seguimiento_gestion_siempleo_fkey FOREIGN KEY (id_seguimiento_gestion_siempleo) REFERENCES public.seguimiento_gestion_siempleo(id_seguimiento_gestion_siempleo);
 `   ALTER TABLE ONLY public.registro DROP CONSTRAINT registro_id_seguimiento_gestion_siempleo_fkey;
       public          postgres    false    3509    255    267            �           2606    66952 =   registro_mensual registro_mensual_id_atencion_telefonica_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.registro_mensual
    ADD CONSTRAINT registro_mensual_id_atencion_telefonica_fkey FOREIGN KEY (id_atencion_telefonica) REFERENCES public.atencion_telefonica_a_empleador_para_promocion_y_capacitacion_s(id_atencion_telefonica);
 g   ALTER TABLE ONLY public.registro_mensual DROP CONSTRAINT registro_mensual_id_atencion_telefonica_fkey;
       public          postgres    false    257    216    3439            �           2606    66957 :   registro_mensual registro_mensual_id_atencion_virtual_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.registro_mensual
    ADD CONSTRAINT registro_mensual_id_atencion_virtual_fkey FOREIGN KEY (id_atencion_virtual) REFERENCES public.atencion_virtual_a_empleador_para_promocion_y_capacitacion_serv(id_atencion_virtual);
 d   ALTER TABLE ONLY public.registro_mensual DROP CONSTRAINT registro_mensual_id_atencion_virtual_fkey;
       public          postgres    false    218    257    3441            �           2606    66962 P   registro_mensual registro_mensual_id_empresa_asesorada_por_unidad_promocion_fkey    FK CONSTRAINT     .  ALTER TABLE ONLY public.registro_mensual
    ADD CONSTRAINT registro_mensual_id_empresa_asesorada_por_unidad_promocion_fkey FOREIGN KEY (id_empresa_asesorada_por_unidad_promocion_empleo) REFERENCES public.empresa_asesorada_por_unidad_promocion_empleo(id_empresa_asesorada_por_unidad_promocion_empleo);
 z   ALTER TABLE ONLY public.registro_mensual DROP CONSTRAINT registro_mensual_id_empresa_asesorada_por_unidad_promocion_fkey;
       public          postgres    false    227    3453    257            �           2606    66967 P   registro_mensual registro_mensual_id_registro_y_validacion_de_empresa_con_u_fkey    FK CONSTRAINT     +  ALTER TABLE ONLY public.registro_mensual
    ADD CONSTRAINT registro_mensual_id_registro_y_validacion_de_empresa_con_u_fkey FOREIGN KEY (id_registro_y_validacion_de_empresa_con_usuario) REFERENCES public.registro_y_validacion_de_empresa_con_usuario(id_registro_y_validacion_de_empresa_con_usuario);
 z   ALTER TABLE ONLY public.registro_mensual DROP CONSTRAINT registro_mensual_id_registro_y_validacion_de_empresa_con_u_fkey;
       public          postgres    false    257    261    3501            �           2606    66972 5   registro_mensual registro_mensual_id_seguimiento_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.registro_mensual
    ADD CONSTRAINT registro_mensual_id_seguimiento_fkey FOREIGN KEY (id_seguimiento) REFERENCES public.seguimiento_a_empresa(id_seguimiento);
 _   ALTER TABLE ONLY public.registro_mensual DROP CONSTRAINT registro_mensual_id_seguimiento_fkey;
       public          postgres    false    3507    257    265            �           2606    66977 2   registro_mensual registro_mensual_id_servicio_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.registro_mensual
    ADD CONSTRAINT registro_mensual_id_servicio_fkey FOREIGN KEY (id_servicio) REFERENCES public.servicio(id_servicio);
 \   ALTER TABLE ONLY public.registro_mensual DROP CONSTRAINT registro_mensual_id_servicio_fkey;
       public          postgres    false    257    269    3511            �           2606    66982 Q   registro_seguimiento_a_derivacion registro_seguimiento_a_derivacion_id_actor_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.registro_seguimiento_a_derivacion
    ADD CONSTRAINT registro_seguimiento_a_derivacion_id_actor_fkey FOREIGN KEY (id_actor) REFERENCES public.informe_del_actor(id_actor);
 {   ALTER TABLE ONLY public.registro_seguimiento_a_derivacion DROP CONSTRAINT registro_seguimiento_a_derivacion_id_actor_fkey;
       public          postgres    false    232    3459    259            �           2606    66987 Y   registro_seguimiento_a_derivacion registro_seguimiento_a_derivacion_id_certificacion_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.registro_seguimiento_a_derivacion
    ADD CONSTRAINT registro_seguimiento_a_derivacion_id_certificacion_fkey FOREIGN KEY (id_certificacion) REFERENCES public.certificacion(id_certificacion);
 �   ALTER TABLE ONLY public.registro_seguimiento_a_derivacion DROP CONSTRAINT registro_seguimiento_a_derivacion_id_certificacion_fkey;
       public          postgres    false    259    220    3443            �           2606    66992 `   registro_seguimiento_a_derivacion registro_seguimiento_a_derivacion_id_seguimiento_derivado_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.registro_seguimiento_a_derivacion
    ADD CONSTRAINT registro_seguimiento_a_derivacion_id_seguimiento_derivado_fkey FOREIGN KEY (id_seguimiento_derivado) REFERENCES public.seguimiento_a_derivados(id_seguimiento_derivado);
 �   ALTER TABLE ONLY public.registro_seguimiento_a_derivacion DROP CONSTRAINT registro_seguimiento_a_derivacion_id_seguimiento_derivado_fkey;
       public          postgres    false    263    3505    259            �           2606    66997 S   registro_seguimiento_a_derivacion registro_seguimiento_a_derivacion_id_usuario_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.registro_seguimiento_a_derivacion
    ADD CONSTRAINT registro_seguimiento_a_derivacion_id_usuario_fkey FOREIGN KEY (id_usuario) REFERENCES public.usuario(id_usuario);
 }   ALTER TABLE ONLY public.registro_seguimiento_a_derivacion DROP CONSTRAINT registro_seguimiento_a_derivacion_id_usuario_fkey;
       public          postgres    false    3519    273    259            �           2606    67002 X   registro_seguimiento_a_derivacion registro_seguimiento_a_derivacion_id_verificacion_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.registro_seguimiento_a_derivacion
    ADD CONSTRAINT registro_seguimiento_a_derivacion_id_verificacion_fkey FOREIGN KEY (id_verificacion) REFERENCES public.verificacion_del_plan_de_accion(id_verificacion);
 �   ALTER TABLE ONLY public.registro_seguimiento_a_derivacion DROP CONSTRAINT registro_seguimiento_a_derivacion_id_verificacion_fkey;
       public          postgres    false    3521    259    275            �           2606    67007    usuario usuario_id_perfil_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.usuario
    ADD CONSTRAINT usuario_id_perfil_fkey FOREIGN KEY (id_perfil) REFERENCES public.perfil(id_perfil);
 H   ALTER TABLE ONLY public.usuario DROP CONSTRAINT usuario_id_perfil_fkey;
       public          postgres    false    273    251    3485            �           2606    67012     usuario usuario_id_regional_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.usuario
    ADD CONSTRAINT usuario_id_regional_fkey FOREIGN KEY (id_regional) REFERENCES public.regional(id_regional);
 J   ALTER TABLE ONLY public.usuario DROP CONSTRAINT usuario_id_regional_fkey;
       public          postgres    false    253    3487    273            �           2606    67017 !   usuario usuario_id_regional_fkey1    FK CONSTRAINT     �   ALTER TABLE ONLY public.usuario
    ADD CONSTRAINT usuario_id_regional_fkey1 FOREIGN KEY (id_regional) REFERENCES public.direccion_general(id_direccion_general);
 K   ALTER TABLE ONLY public.usuario DROP CONSTRAINT usuario_id_regional_fkey1;
       public          postgres    false    224    3449    273            r   Q   x�5���0C�o<L�<�]��U�@��9��hae�=�+{娜��h��T��nS2F;+����hc<�<�7��K�a��      t      x�3�4�2b 6b3 6������� 5}      v   #   x�3�4�4�2�&`�L��ICNKNK�=... f��      x      x�3�4�4B84����� &m�      z   P   x�]л�0�Z&0���K��#�q��<�9��3
tCԡQ�&nڐi2��oeV�Yf��23�l�¶�Ua�{I� �)�      |   )   x�3�pu�t�2�tqw��@:�ӓ�H{� b���� �F�      ~   @   x�3�t�I,��2��L��2�tNL�IUp���/�2����K)-I��2��J-.I-J������ �p         $   x�3�44 ".cNCNC.0i
&��������� u�2      �   �   x�}�MN�0FדS�IZ~��Z	JQ�d3��0R<F��qX������y�O3%<[����qPº����(�MXG�z[�&���
^"�]�����f8�Sx�:`?Ew�w=��%<�^�����X�Z��]�i�����;�-%��q8ka����u�[E2�߹�,�s�O��6���1x�	_����h�.y�hQؠ��b��;9�D&�x��{�~������(~ $&��      �   6   x�3��/�IQ�,����t�-(J�K���L�+��4202�50�5������� b�P      �   Z   x�5���0�x�*vH�����(A g�ȑ�b=)��]������������M�p��:v-���ekD����(��������A�I      �   �   x�=O;N�0��S��h�Z���@G3a��1c	n�8�^�q�����^��Y�CG�OYD��ٸTB$̇���yF&#P��@X�
�Թ	U�^ShF�_�8��T2�+M��&����9(�f�����n��C{g�]��d��Y��$���V��I
�y���S:���F�jT�T���^ѩd�1*$Uv@�yVW莮�����﹇��(��s�W��M�����i|��q�?2x�      �   R   x�E�Q
�0����0�D��]��9���𳗏�X�.����p׬���N��b'�T��c1�q&�1 #*�"*�)ڽx ?       �   i   x�3��Tp�-�I��tO-.���K,RHT��/VHN�K�LI,�/�t.JM,�QpM�,���yť9@&g���������������������������	~Y�=... �h"Y      �   �   x�E���0Eg�c"��tE<Ą��ƒ�Q
*qd���qa`���\���&��Nͤ 3a^zU%����بC}����z:c�����;�*�	^��t-%�]e}=�$�͔��vY����e�mǞ�k���"~ ��6K      �   3   x�3�4�,�?N##]s]SC+c+3=C3CCs��\1z\\\ -l>      �   l   x�}ɻ�  ���d��d׀��	sl�3,ˀ��\�7�ob*ԯ�4u�P�1u��p�x	$���c�,X��jԹ+g�4�y�F��M����;��i��@g%       �   ?   x�3�tM)MNL�<�9O!������D.#d��Ԕ�D.cd��҂Ԣ��".dр�T�1z\\\ ?{!�      �   R   x�e���0��0(��]���!�sN"��KR��:c.�.� ��������d���xHU�Ք�dA]��.
�Q����z-      �   F   x�3�(�/�L-I,��Wpu�t��".cΐ����|NO��!�g^Z~QnbIfr"P�!�!W� ϻ�      �   �   x�}�=N�@�z}�9@b�vL�T`((�E"h�̆�Y4ى�'܈�S�b��̧�^��4ƃ�Ϩ�TG68���u1����Y<�+rmd�����z�,��vO|�|+~��i拺n@�Y���*����Ng&	m����7�G��Ѫ"+�nʥ��`y���o%��'�'��\@h�it�?�?Ɔ�+�J=
���L>$�>�>��X$��?�[��9#�2�y�e�T�c&      �   �  x����N�0�ד�����ėY��"�V 6�����Ԗ���g���	��������=�$8�ń�	W�0�da��~ U�1���P��:��l�dc׵�RR+�{��f�7��6a�#j�1x�3�i\�,��yE�3PN�JP��x�vo�󑓳R ��9��ؙ�م�6��o���ۓ78=�JȡL�@�{�y})�g�"��a�1x�\�0���~C?��>c0��i�u��K���3�iGV�=x��t�3�����G��AȗE�8�8��Wu o�u �7���`����-i��6����E�${i.E�*��"�##��[�x3�ß�B�xQÔ)�n��4�?�^|J�;�+���+�;=L5O���U�RDwGIG�����2��CM�u���b-��2��$���rB5�=U56V5��`.JU`��o�j����O��}�fY�U�#      �   �   x����B!E����n���W�F�HRA?_��NN��ܛN0u�$��;k�uh�~�2�+{�G8FB�>��!�H0)='�O���K`�Иz=�g��#�<�|���ƒ�2�݁�XR��P;��6J�?{�      �      x�3�4�C�=... �      �   #   x�3�4�4�2�&`�L��ICN#N#�=... f,�      �   D   x�3�t��L�LTpO���K��4�0042 C3KsNKsSsN�܂�Լ��Լ�|NCN�=... 3�      �   h   x�3�4����Ԝ�D��������\�?.c�lJjNbF~QQ>����Ҽ���Ģ\4#L*�sr�s�R2є�Vb�i��fFƦf�f�~�y�y�\1z\\\ ^(5�      �   N   x�%���0��]�/�@/�_�V���%�������ս������O7�	SZ�B ���A	Lp
�p�o�{�� 6�!      �   $   x�3�4Ą\�XEM���b5�*j�i�	�b���� <x�      �   O   x�3��H,)N,(�t�2�t�/*J�Wp�IM.)���L�
s���%g&� �&����E�
^�Ey�)��@�=... |W�      �   �  x����r�0���Sx�5����ZԬ
�`�ugo�I1B���;�)�ŚR;u��r�\09̜���I,���״�i�r�� a���}��%#��+�c��J�ce����4��CE�ہ��t�#o���V�/J2����R��ѤhD�k~ݧ�����<�a9&\�>P;�����;&8��A^ρ��k����������܋�f�iHQV���	<��&d�sCm<чQ1���R3l�f5x�����z�y4�#������4.9M��P�/�yw7Wz��c�Kz�8��d���Z�r�i9 Ѳ�;g]���(ogj�%ۤ ����d\�;�����A���Y}�W�0ZD�VQa�A/]ƣ\�k䅍����gCLV*�u�i�&��"��ʖD��)43.*�q�t����?��:����<,2^��?�9�+y�D��Q���������d�<=�����<6�`�Y�b�wx�86�PFv����=��t:�7��      �      x�3�4A�=... ��     