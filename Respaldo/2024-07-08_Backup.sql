PGDMP         0    	            |            DBUPEG    15.7    15.7 �    (           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            )           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            *           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            +           1262    65697    DBUPEG    DATABASE     ~   CREATE DATABASE "DBUPEG" WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Spanish_Honduras.1252';
    DROP DATABASE "DBUPEG";
                postgres    false            �            1259    65698    asesoria_ventanilla_unica    TABLE     A  CREATE TABLE public.asesoria_ventanilla_unica (
    id_asesoria_ventanilla_unica integer NOT NULL,
    asesoria_ocupacional_miembros_con_discapacidad bigint DEFAULT 0 NOT NULL,
    asesoria_programa_de_trabajo_en_el_extrangero_ptte bigint DEFAULT 0 NOT NULL,
    otras_asesorias_brindadas_vu bigint DEFAULT 0 NOT NULL
);
 -   DROP TABLE public.asesoria_ventanilla_unica;
       public         heap    postgres    false            �            1259    65704 :   asesoria_ventanilla_unica_id_asesoria_ventanilla_unica_seq    SEQUENCE     �   CREATE SEQUENCE public.asesoria_ventanilla_unica_id_asesoria_ventanilla_unica_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 Q   DROP SEQUENCE public.asesoria_ventanilla_unica_id_asesoria_ventanilla_unica_seq;
       public          postgres    false    214            ,           0    0 :   asesoria_ventanilla_unica_id_asesoria_ventanilla_unica_seq    SEQUENCE OWNED BY     �   ALTER SEQUENCE public.asesoria_ventanilla_unica_id_asesoria_ventanilla_unica_seq OWNED BY public.asesoria_ventanilla_unica.id_asesoria_ventanilla_unica;
          public          postgres    false    215            �            1259    65705 ?   atencion_telefonica_a_empleador_para_promocion_y_capacitacion_s    TABLE     �   CREATE TABLE public.atencion_telefonica_a_empleador_para_promocion_y_capacitacion_s (
    id_atencion_telefonica integer NOT NULL,
    gestion_via_telefono bigint DEFAULT 0 NOT NULL
);
 S   DROP TABLE public.atencion_telefonica_a_empleador_para_promocion_y_capacitacion_s;
       public         heap    postgres    false            �            1259    65709 ?   atencion_telefonica_a_empleador_para_id_atencion_telefonica_seq    SEQUENCE     �   CREATE SEQUENCE public.atencion_telefonica_a_empleador_para_id_atencion_telefonica_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 V   DROP SEQUENCE public.atencion_telefonica_a_empleador_para_id_atencion_telefonica_seq;
       public          postgres    false    216            -           0    0 ?   atencion_telefonica_a_empleador_para_id_atencion_telefonica_seq    SEQUENCE OWNED BY     �   ALTER SEQUENCE public.atencion_telefonica_a_empleador_para_id_atencion_telefonica_seq OWNED BY public.atencion_telefonica_a_empleador_para_promocion_y_capacitacion_s.id_atencion_telefonica;
          public          postgres    false    217            �            1259    65710 ?   atencion_virtual_a_empleador_para_promocion_y_capacitacion_serv    TABLE     �   CREATE TABLE public.atencion_virtual_a_empleador_para_promocion_y_capacitacion_serv (
    id_atencion_virtual integer NOT NULL,
    gestion_via_correo bigint DEFAULT 0 NOT NULL,
    gestion_via_whatsapp bigint DEFAULT 0 NOT NULL
);
 S   DROP TABLE public.atencion_virtual_a_empleador_para_promocion_y_capacitacion_serv;
       public         heap    postgres    false            �            1259    65715 ?   atencion_virtual_a_empleador_para_promo_id_atencion_virtual_seq    SEQUENCE     �   CREATE SEQUENCE public.atencion_virtual_a_empleador_para_promo_id_atencion_virtual_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 V   DROP SEQUENCE public.atencion_virtual_a_empleador_para_promo_id_atencion_virtual_seq;
       public          postgres    false    218            .           0    0 ?   atencion_virtual_a_empleador_para_promo_id_atencion_virtual_seq    SEQUENCE OWNED BY     �   ALTER SEQUENCE public.atencion_virtual_a_empleador_para_promo_id_atencion_virtual_seq OWNED BY public.atencion_virtual_a_empleador_para_promocion_y_capacitacion_serv.id_atencion_virtual;
          public          postgres    false    219            �            1259    65716    derivacion_interistitucional    TABLE     �  CREATE TABLE public.derivacion_interistitucional (
    id_derivacion_interistitucional integer NOT NULL,
    derivaciones bigint DEFAULT 0 NOT NULL,
    derivacion_a_formalizacion bigint DEFAULT 0 NOT NULL,
    derivacion_asistencia_tecnica bigint DEFAULT 0 NOT NULL,
    derivacion_a_emprendimiento bigint DEFAULT 0 NOT NULL,
    derivacion_a_credito bigint DEFAULT 0 NOT NULL,
    modulo_ciudad_mujer bigint DEFAULT 0 NOT NULL
);
 0   DROP TABLE public.derivacion_interistitucional;
       public         heap    postgres    false            �            1259    65725 ?   derivacion_interistitucional_id_derivacion_interistituciona_seq    SEQUENCE     �   CREATE SEQUENCE public.derivacion_interistitucional_id_derivacion_interistituciona_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 V   DROP SEQUENCE public.derivacion_interistitucional_id_derivacion_interistituciona_seq;
       public          postgres    false    220            /           0    0 ?   derivacion_interistitucional_id_derivacion_interistituciona_seq    SEQUENCE OWNED BY     �   ALTER SEQUENCE public.derivacion_interistitucional_id_derivacion_interistituciona_seq OWNED BY public.derivacion_interistitucional.id_derivacion_interistitucional;
          public          postgres    false    221            �            1259    65726    direccion_general    TABLE     �   CREATE TABLE public.direccion_general (
    id_direccion_general integer NOT NULL,
    direccion_general character varying(50) NOT NULL,
    estado character(1) NOT NULL
);
 %   DROP TABLE public.direccion_general;
       public         heap    postgres    false            �            1259    65729 *   direccion_general_id_direccion_general_seq    SEQUENCE     �   CREATE SEQUENCE public.direccion_general_id_direccion_general_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 A   DROP SEQUENCE public.direccion_general_id_direccion_general_seq;
       public          postgres    false    222            0           0    0 *   direccion_general_id_direccion_general_seq    SEQUENCE OWNED BY     y   ALTER SEQUENCE public.direccion_general_id_direccion_general_seq OWNED BY public.direccion_general.id_direccion_general;
          public          postgres    false    223            �            1259    65730 -   empresa_asesorada_por_unidad_promocion_empleo    TABLE       CREATE TABLE public.empresa_asesorada_por_unidad_promocion_empleo (
    id_empresa_asesorada_por_unidad_promocion_empleo integer NOT NULL,
    orientacion_a_empleador_para_acceso_y_uso_de_bolsa_trabajo_empl bigint DEFAULT 0 NOT NULL,
    puestos_de_trabajo bigint DEFAULT 0 NOT NULL
);
 A   DROP TABLE public.empresa_asesorada_por_unidad_promocion_empleo;
       public         heap    postgres    false            �            1259    65735 ?   empresa_asesorada_por_unidad__id_empresa_asesorada_por_unid_seq    SEQUENCE     �   CREATE SEQUENCE public.empresa_asesorada_por_unidad__id_empresa_asesorada_por_unid_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 V   DROP SEQUENCE public.empresa_asesorada_por_unidad__id_empresa_asesorada_por_unid_seq;
       public          postgres    false    224            1           0    0 ?   empresa_asesorada_por_unidad__id_empresa_asesorada_por_unid_seq    SEQUENCE OWNED BY     �   ALTER SEQUENCE public.empresa_asesorada_por_unidad__id_empresa_asesorada_por_unid_seq OWNED BY public.empresa_asesorada_por_unidad_promocion_empleo.id_empresa_asesorada_por_unidad_promocion_empleo;
          public          postgres    false    225            �            1259    65736    grado_academico    TABLE     �   CREATE TABLE public.grado_academico (
    id_grado_academico integer NOT NULL,
    grado_academico character varying(100) NOT NULL,
    id_nivel_educativo integer,
    estado character(1)
);
 #   DROP TABLE public.grado_academico;
       public         heap    postgres    false            �            1259    65739 &   grado_academico_id_grado_academico_seq    SEQUENCE     �   CREATE SEQUENCE public.grado_academico_id_grado_academico_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 =   DROP SEQUENCE public.grado_academico_id_grado_academico_seq;
       public          postgres    false    226            2           0    0 &   grado_academico_id_grado_academico_seq    SEQUENCE OWNED BY     q   ALTER SEQUENCE public.grado_academico_id_grado_academico_seq OWNED BY public.grado_academico.id_grado_academico;
          public          postgres    false    227            �            1259    65740    intermediacion_laboral    TABLE     �   CREATE TABLE public.intermediacion_laboral (
    id_intermediacion_laboral integer NOT NULL,
    intermediacion_candidato bigint DEFAULT 0 NOT NULL,
    empresas_intermedio character varying(255) NOT NULL,
    intermediacion bigint DEFAULT 0 NOT NULL
);
 *   DROP TABLE public.intermediacion_laboral;
       public         heap    postgres    false            �            1259    65745 4   intermediacion_laboral_id_intermediacion_laboral_seq    SEQUENCE     �   CREATE SEQUENCE public.intermediacion_laboral_id_intermediacion_laboral_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 K   DROP SEQUENCE public.intermediacion_laboral_id_intermediacion_laboral_seq;
       public          postgres    false    228            3           0    0 4   intermediacion_laboral_id_intermediacion_laboral_seq    SEQUENCE OWNED BY     �   ALTER SEQUENCE public.intermediacion_laboral_id_intermediacion_laboral_seq OWNED BY public.intermediacion_laboral.id_intermediacion_laboral;
          public          postgres    false    229            �            1259    65746    modulo    TABLE     �   CREATE TABLE public.modulo (
    id_modulo integer NOT NULL,
    modulo character varying(100) NOT NULL,
    descripcion character varying(255)
);
    DROP TABLE public.modulo;
       public         heap    postgres    false            �            1259    65749    modulo_id_modulo_seq    SEQUENCE     �   CREATE SEQUENCE public.modulo_id_modulo_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 +   DROP SEQUENCE public.modulo_id_modulo_seq;
       public          postgres    false    230            4           0    0    modulo_id_modulo_seq    SEQUENCE OWNED BY     M   ALTER SEQUENCE public.modulo_id_modulo_seq OWNED BY public.modulo.id_modulo;
          public          postgres    false    231            �            1259    65750    movimiento_migratorio    TABLE       CREATE TABLE public.movimiento_migratorio (
    id_movimiento_migratorio integer NOT NULL,
    migrante_retornado bigint DEFAULT 0 NOT NULL,
    refugiado_migrante bigint DEFAULT 0 NOT NULL,
    desplazado_interno bigint DEFAULT 0 NOT NULL,
    marinos bigint DEFAULT 0 NOT NULL
);
 )   DROP TABLE public.movimiento_migratorio;
       public         heap    postgres    false            �            1259    65757 2   movimiento_migratorio_id_movimiento_migratorio_seq    SEQUENCE     �   CREATE SEQUENCE public.movimiento_migratorio_id_movimiento_migratorio_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 I   DROP SEQUENCE public.movimiento_migratorio_id_movimiento_migratorio_seq;
       public          postgres    false    232            5           0    0 2   movimiento_migratorio_id_movimiento_migratorio_seq    SEQUENCE OWNED BY     �   ALTER SEQUENCE public.movimiento_migratorio_id_movimiento_migratorio_seq OWNED BY public.movimiento_migratorio.id_movimiento_migratorio;
          public          postgres    false    233            �            1259    65758    ms_parametro    TABLE     �   CREATE TABLE public.ms_parametro (
    id_parametro integer NOT NULL,
    id_usuario integer,
    parametro character varying(150) NOT NULL,
    valor character varying(250) NOT NULL
);
     DROP TABLE public.ms_parametro;
       public         heap    postgres    false            �            1259    65761    ms_parametro_id_parametro_seq    SEQUENCE     �   CREATE SEQUENCE public.ms_parametro_id_parametro_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 4   DROP SEQUENCE public.ms_parametro_id_parametro_seq;
       public          postgres    false    234            6           0    0    ms_parametro_id_parametro_seq    SEQUENCE OWNED BY     _   ALTER SEQUENCE public.ms_parametro_id_parametro_seq OWNED BY public.ms_parametro.id_parametro;
          public          postgres    false    235            �            1259    65762    nivel_educativo    TABLE     �   CREATE TABLE public.nivel_educativo (
    id_nivel_educativo integer NOT NULL,
    nivel_educativo character varying(100) NOT NULL
);
 #   DROP TABLE public.nivel_educativo;
       public         heap    postgres    false            �            1259    65765 &   nivel_educativo_id_nivel_educativo_seq    SEQUENCE     �   CREATE SEQUENCE public.nivel_educativo_id_nivel_educativo_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 =   DROP SEQUENCE public.nivel_educativo_id_nivel_educativo_seq;
       public          postgres    false    236            7           0    0 &   nivel_educativo_id_nivel_educativo_seq    SEQUENCE OWNED BY     q   ALTER SEQUENCE public.nivel_educativo_id_nivel_educativo_seq OWNED BY public.nivel_educativo.id_nivel_educativo;
          public          postgres    false    237            �            1259    65766    orientacion_laboral    TABLE     �  CREATE TABLE public.orientacion_laboral (
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
       public         heap    postgres    false            �            1259    65776 .   orientacion_laboral_id_orientacion_laboral_seq    SEQUENCE     �   CREATE SEQUENCE public.orientacion_laboral_id_orientacion_laboral_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 E   DROP SEQUENCE public.orientacion_laboral_id_orientacion_laboral_seq;
       public          postgres    false    238            8           0    0 .   orientacion_laboral_id_orientacion_laboral_seq    SEQUENCE OWNED BY     �   ALTER SEQUENCE public.orientacion_laboral_id_orientacion_laboral_seq OWNED BY public.orientacion_laboral.id_orientacion_laboral;
          public          postgres    false    239            �            1259    65777    perfil    TABLE     �   CREATE TABLE public.perfil (
    id_perfil integer NOT NULL,
    perfil character varying(50),
    estado character(1),
    id_regional integer
);
    DROP TABLE public.perfil;
       public         heap    postgres    false            �            1259    65780    perfil_id_perfil_seq    SEQUENCE     �   CREATE SEQUENCE public.perfil_id_perfil_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 +   DROP SEQUENCE public.perfil_id_perfil_seq;
       public          postgres    false    240            9           0    0    perfil_id_perfil_seq    SEQUENCE OWNED BY     M   ALTER SEQUENCE public.perfil_id_perfil_seq OWNED BY public.perfil.id_perfil;
          public          postgres    false    241            �            1259    65781    regional    TABLE     �   CREATE TABLE public.regional (
    id_regional integer NOT NULL,
    regional character varying(50) NOT NULL,
    estado character(1) NOT NULL,
    descripcion character varying(300),
    id_modulo integer
);
    DROP TABLE public.regional;
       public         heap    postgres    false            �            1259    65784    regional_id_regional_seq    SEQUENCE     �   CREATE SEQUENCE public.regional_id_regional_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 /   DROP SEQUENCE public.regional_id_regional_seq;
       public          postgres    false    242            :           0    0    regional_id_regional_seq    SEQUENCE OWNED BY     U   ALTER SEQUENCE public.regional_id_regional_seq OWNED BY public.regional.id_regional;
          public          postgres    false    243            �            1259    65785    registro    TABLE     �  CREATE TABLE public.registro (
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
       public         heap    postgres    false            �            1259    65794    registro_id_registro_seq    SEQUENCE     �   CREATE SEQUENCE public.registro_id_registro_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 /   DROP SEQUENCE public.registro_id_registro_seq;
       public          postgres    false    244            ;           0    0    registro_id_registro_seq    SEQUENCE OWNED BY     U   ALTER SEQUENCE public.registro_id_registro_seq OWNED BY public.registro.id_registro;
          public          postgres    false    245            �            1259    65795    registro_mensual    TABLE     �  CREATE TABLE public.registro_mensual (
    id_registro_mensual integer NOT NULL,
    id_empresa_asesorada_por_unidad_promocion_empleo integer,
    id_atencion_virtual integer,
    id_atencion_telefonica integer,
    id_registro_y_validacion_de_empresa_con_usuario integer,
    id_seguimiento integer,
    id_servicio integer,
    nombre_empresa character varying(150) NOT NULL,
    fecha timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    observacion character varying(500)
);
 $   DROP TABLE public.registro_mensual;
       public         heap    postgres    false            �            1259    65801 (   registro_mensual_id_registro_mensual_seq    SEQUENCE     �   CREATE SEQUENCE public.registro_mensual_id_registro_mensual_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 ?   DROP SEQUENCE public.registro_mensual_id_registro_mensual_seq;
       public          postgres    false    246            <           0    0 (   registro_mensual_id_registro_mensual_seq    SEQUENCE OWNED BY     u   ALTER SEQUENCE public.registro_mensual_id_registro_mensual_seq OWNED BY public.registro_mensual.id_registro_mensual;
          public          postgres    false    247            �            1259    65802 ,   registro_y_validacion_de_empresa_con_usuario    TABLE       CREATE TABLE public.registro_y_validacion_de_empresa_con_usuario (
    id_registro_y_validacion_de_empresa_con_usuario integer NOT NULL,
    validacion_actualizacion_de_datos_de_empresa bigint DEFAULT 0 NOT NULL,
    registro_de_empresa_en_empleate bigint DEFAULT 0 NOT NULL
);
 @   DROP TABLE public.registro_y_validacion_de_empresa_con_usuario;
       public         heap    postgres    false            �            1259    65807 ?   registro_y_validacion_de_empr_id_registro_y_validacion_de_e_seq    SEQUENCE     �   CREATE SEQUENCE public.registro_y_validacion_de_empr_id_registro_y_validacion_de_e_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 V   DROP SEQUENCE public.registro_y_validacion_de_empr_id_registro_y_validacion_de_e_seq;
       public          postgres    false    248            =           0    0 ?   registro_y_validacion_de_empr_id_registro_y_validacion_de_e_seq    SEQUENCE OWNED BY     �   ALTER SEQUENCE public.registro_y_validacion_de_empr_id_registro_y_validacion_de_e_seq OWNED BY public.registro_y_validacion_de_empresa_con_usuario.id_registro_y_validacion_de_empresa_con_usuario;
          public          postgres    false    249            �            1259    65808    seguimiento_a_empresa    TABLE     �  CREATE TABLE public.seguimiento_a_empresa (
    id_seguimiento integer NOT NULL,
    seguimiento_via_telefono_efectivo bigint DEFAULT 0 NOT NULL,
    seguimiento_via_correo_efectivo bigint DEFAULT 0 NOT NULL,
    seguimiento_via_telefono_no_efectivo bigint DEFAULT 0 NOT NULL,
    seguimiento_via_correo_no_efectivo bigint DEFAULT 0 NOT NULL,
    telefono_correo_que_se_comunico character varying(80) DEFAULT ''::character varying
);
 )   DROP TABLE public.seguimiento_a_empresa;
       public         heap    postgres    false            �            1259    65816 (   seguimiento_a_empresa_id_seguimiento_seq    SEQUENCE     �   CREATE SEQUENCE public.seguimiento_a_empresa_id_seguimiento_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 ?   DROP SEQUENCE public.seguimiento_a_empresa_id_seguimiento_seq;
       public          postgres    false    250            >           0    0 (   seguimiento_a_empresa_id_seguimiento_seq    SEQUENCE OWNED BY     u   ALTER SEQUENCE public.seguimiento_a_empresa_id_seguimiento_seq OWNED BY public.seguimiento_a_empresa.id_seguimiento;
          public          postgres    false    251            �            1259    65817    seguimiento_gestion_siempleo    TABLE     �   CREATE TABLE public.seguimiento_gestion_siempleo (
    id_seguimiento_gestion_siempleo integer NOT NULL,
    seguimiento_a_candidato bigint DEFAULT 0 NOT NULL,
    seguimiento_a_orientado bigint DEFAULT 0 NOT NULL
);
 0   DROP TABLE public.seguimiento_gestion_siempleo;
       public         heap    postgres    false            �            1259    65822 ?   seguimiento_gestion_siempleo_id_seguimiento_gestion_siemple_seq    SEQUENCE     �   CREATE SEQUENCE public.seguimiento_gestion_siempleo_id_seguimiento_gestion_siemple_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 V   DROP SEQUENCE public.seguimiento_gestion_siempleo_id_seguimiento_gestion_siemple_seq;
       public          postgres    false    252            ?           0    0 ?   seguimiento_gestion_siempleo_id_seguimiento_gestion_siemple_seq    SEQUENCE OWNED BY     �   ALTER SEQUENCE public.seguimiento_gestion_siempleo_id_seguimiento_gestion_siemple_seq OWNED BY public.seguimiento_gestion_siempleo.id_seguimiento_gestion_siempleo;
          public          postgres    false    253            �            1259    65823    servicio    TABLE     �  CREATE TABLE public.servicio (
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
       public         heap    postgres    false            �            1259    65836    servicio_id_servicio_seq    SEQUENCE     �   CREATE SEQUENCE public.servicio_id_servicio_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 /   DROP SEQUENCE public.servicio_id_servicio_seq;
       public          postgres    false    254            @           0    0    servicio_id_servicio_seq    SEQUENCE OWNED BY     U   ALTER SEQUENCE public.servicio_id_servicio_seq OWNED BY public.servicio.id_servicio;
          public          postgres    false    255                        1259    65837    usuario    TABLE     !  CREATE TABLE public.usuario (
    id_usuario integer NOT NULL,
    id_regional integer,
    id_direccion_general integer,
    id_perfil integer,
    nombre character varying(40) NOT NULL,
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
       public         heap    postgres    false                       1259    65842    usuario_id_usuario_seq    SEQUENCE     �   CREATE SEQUENCE public.usuario_id_usuario_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 -   DROP SEQUENCE public.usuario_id_usuario_seq;
       public          postgres    false    256            A           0    0    usuario_id_usuario_seq    SEQUENCE OWNED BY     Q   ALTER SEQUENCE public.usuario_id_usuario_seq OWNED BY public.usuario.id_usuario;
          public          postgres    false    257            �           2604    65843 6   asesoria_ventanilla_unica id_asesoria_ventanilla_unica    DEFAULT     �   ALTER TABLE ONLY public.asesoria_ventanilla_unica ALTER COLUMN id_asesoria_ventanilla_unica SET DEFAULT nextval('public.asesoria_ventanilla_unica_id_asesoria_ventanilla_unica_seq'::regclass);
 e   ALTER TABLE public.asesoria_ventanilla_unica ALTER COLUMN id_asesoria_ventanilla_unica DROP DEFAULT;
       public          postgres    false    215    214            �           2604    65844 V   atencion_telefonica_a_empleador_para_promocion_y_capacitacion_s id_atencion_telefonica    DEFAULT     �   ALTER TABLE ONLY public.atencion_telefonica_a_empleador_para_promocion_y_capacitacion_s ALTER COLUMN id_atencion_telefonica SET DEFAULT nextval('public.atencion_telefonica_a_empleador_para_id_atencion_telefonica_seq'::regclass);
 �   ALTER TABLE public.atencion_telefonica_a_empleador_para_promocion_y_capacitacion_s ALTER COLUMN id_atencion_telefonica DROP DEFAULT;
       public          postgres    false    217    216            �           2604    65845 S   atencion_virtual_a_empleador_para_promocion_y_capacitacion_serv id_atencion_virtual    DEFAULT     �   ALTER TABLE ONLY public.atencion_virtual_a_empleador_para_promocion_y_capacitacion_serv ALTER COLUMN id_atencion_virtual SET DEFAULT nextval('public.atencion_virtual_a_empleador_para_promo_id_atencion_virtual_seq'::regclass);
 �   ALTER TABLE public.atencion_virtual_a_empleador_para_promocion_y_capacitacion_serv ALTER COLUMN id_atencion_virtual DROP DEFAULT;
       public          postgres    false    219    218            �           2604    65846 <   derivacion_interistitucional id_derivacion_interistitucional    DEFAULT     �   ALTER TABLE ONLY public.derivacion_interistitucional ALTER COLUMN id_derivacion_interistitucional SET DEFAULT nextval('public.derivacion_interistitucional_id_derivacion_interistituciona_seq'::regclass);
 k   ALTER TABLE public.derivacion_interistitucional ALTER COLUMN id_derivacion_interistitucional DROP DEFAULT;
       public          postgres    false    221    220            �           2604    65847 &   direccion_general id_direccion_general    DEFAULT     �   ALTER TABLE ONLY public.direccion_general ALTER COLUMN id_direccion_general SET DEFAULT nextval('public.direccion_general_id_direccion_general_seq'::regclass);
 U   ALTER TABLE public.direccion_general ALTER COLUMN id_direccion_general DROP DEFAULT;
       public          postgres    false    223    222            �           2604    65848 ^   empresa_asesorada_por_unidad_promocion_empleo id_empresa_asesorada_por_unidad_promocion_empleo    DEFAULT     �   ALTER TABLE ONLY public.empresa_asesorada_por_unidad_promocion_empleo ALTER COLUMN id_empresa_asesorada_por_unidad_promocion_empleo SET DEFAULT nextval('public.empresa_asesorada_por_unidad__id_empresa_asesorada_por_unid_seq'::regclass);
 �   ALTER TABLE public.empresa_asesorada_por_unidad_promocion_empleo ALTER COLUMN id_empresa_asesorada_por_unidad_promocion_empleo DROP DEFAULT;
       public          postgres    false    225    224            �           2604    65849 "   grado_academico id_grado_academico    DEFAULT     �   ALTER TABLE ONLY public.grado_academico ALTER COLUMN id_grado_academico SET DEFAULT nextval('public.grado_academico_id_grado_academico_seq'::regclass);
 Q   ALTER TABLE public.grado_academico ALTER COLUMN id_grado_academico DROP DEFAULT;
       public          postgres    false    227    226            �           2604    65850 0   intermediacion_laboral id_intermediacion_laboral    DEFAULT     �   ALTER TABLE ONLY public.intermediacion_laboral ALTER COLUMN id_intermediacion_laboral SET DEFAULT nextval('public.intermediacion_laboral_id_intermediacion_laboral_seq'::regclass);
 _   ALTER TABLE public.intermediacion_laboral ALTER COLUMN id_intermediacion_laboral DROP DEFAULT;
       public          postgres    false    229    228            �           2604    65851    modulo id_modulo    DEFAULT     t   ALTER TABLE ONLY public.modulo ALTER COLUMN id_modulo SET DEFAULT nextval('public.modulo_id_modulo_seq'::regclass);
 ?   ALTER TABLE public.modulo ALTER COLUMN id_modulo DROP DEFAULT;
       public          postgres    false    231    230            �           2604    65852 .   movimiento_migratorio id_movimiento_migratorio    DEFAULT     �   ALTER TABLE ONLY public.movimiento_migratorio ALTER COLUMN id_movimiento_migratorio SET DEFAULT nextval('public.movimiento_migratorio_id_movimiento_migratorio_seq'::regclass);
 ]   ALTER TABLE public.movimiento_migratorio ALTER COLUMN id_movimiento_migratorio DROP DEFAULT;
       public          postgres    false    233    232            �           2604    65853    ms_parametro id_parametro    DEFAULT     �   ALTER TABLE ONLY public.ms_parametro ALTER COLUMN id_parametro SET DEFAULT nextval('public.ms_parametro_id_parametro_seq'::regclass);
 H   ALTER TABLE public.ms_parametro ALTER COLUMN id_parametro DROP DEFAULT;
       public          postgres    false    235    234            �           2604    65854 "   nivel_educativo id_nivel_educativo    DEFAULT     �   ALTER TABLE ONLY public.nivel_educativo ALTER COLUMN id_nivel_educativo SET DEFAULT nextval('public.nivel_educativo_id_nivel_educativo_seq'::regclass);
 Q   ALTER TABLE public.nivel_educativo ALTER COLUMN id_nivel_educativo DROP DEFAULT;
       public          postgres    false    237    236            �           2604    65855 *   orientacion_laboral id_orientacion_laboral    DEFAULT     �   ALTER TABLE ONLY public.orientacion_laboral ALTER COLUMN id_orientacion_laboral SET DEFAULT nextval('public.orientacion_laboral_id_orientacion_laboral_seq'::regclass);
 Y   ALTER TABLE public.orientacion_laboral ALTER COLUMN id_orientacion_laboral DROP DEFAULT;
       public          postgres    false    239    238            �           2604    65856    perfil id_perfil    DEFAULT     t   ALTER TABLE ONLY public.perfil ALTER COLUMN id_perfil SET DEFAULT nextval('public.perfil_id_perfil_seq'::regclass);
 ?   ALTER TABLE public.perfil ALTER COLUMN id_perfil DROP DEFAULT;
       public          postgres    false    241    240            �           2604    65857    regional id_regional    DEFAULT     |   ALTER TABLE ONLY public.regional ALTER COLUMN id_regional SET DEFAULT nextval('public.regional_id_regional_seq'::regclass);
 C   ALTER TABLE public.regional ALTER COLUMN id_regional DROP DEFAULT;
       public          postgres    false    243    242            �           2604    65858    registro id_registro    DEFAULT     |   ALTER TABLE ONLY public.registro ALTER COLUMN id_registro SET DEFAULT nextval('public.registro_id_registro_seq'::regclass);
 C   ALTER TABLE public.registro ALTER COLUMN id_registro DROP DEFAULT;
       public          postgres    false    245    244            �           2604    65859 $   registro_mensual id_registro_mensual    DEFAULT     �   ALTER TABLE ONLY public.registro_mensual ALTER COLUMN id_registro_mensual SET DEFAULT nextval('public.registro_mensual_id_registro_mensual_seq'::regclass);
 S   ALTER TABLE public.registro_mensual ALTER COLUMN id_registro_mensual DROP DEFAULT;
       public          postgres    false    247    246            �           2604    65860 \   registro_y_validacion_de_empresa_con_usuario id_registro_y_validacion_de_empresa_con_usuario    DEFAULT     �   ALTER TABLE ONLY public.registro_y_validacion_de_empresa_con_usuario ALTER COLUMN id_registro_y_validacion_de_empresa_con_usuario SET DEFAULT nextval('public.registro_y_validacion_de_empr_id_registro_y_validacion_de_e_seq'::regclass);
 �   ALTER TABLE public.registro_y_validacion_de_empresa_con_usuario ALTER COLUMN id_registro_y_validacion_de_empresa_con_usuario DROP DEFAULT;
       public          postgres    false    249    248                       2604    65861 $   seguimiento_a_empresa id_seguimiento    DEFAULT     �   ALTER TABLE ONLY public.seguimiento_a_empresa ALTER COLUMN id_seguimiento SET DEFAULT nextval('public.seguimiento_a_empresa_id_seguimiento_seq'::regclass);
 S   ALTER TABLE public.seguimiento_a_empresa ALTER COLUMN id_seguimiento DROP DEFAULT;
       public          postgres    false    251    250                       2604    65862 <   seguimiento_gestion_siempleo id_seguimiento_gestion_siempleo    DEFAULT     �   ALTER TABLE ONLY public.seguimiento_gestion_siempleo ALTER COLUMN id_seguimiento_gestion_siempleo SET DEFAULT nextval('public.seguimiento_gestion_siempleo_id_seguimiento_gestion_siemple_seq'::regclass);
 k   ALTER TABLE public.seguimiento_gestion_siempleo ALTER COLUMN id_seguimiento_gestion_siempleo DROP DEFAULT;
       public          postgres    false    253    252            
           2604    65863    servicio id_servicio    DEFAULT     |   ALTER TABLE ONLY public.servicio ALTER COLUMN id_servicio SET DEFAULT nextval('public.servicio_id_servicio_seq'::regclass);
 C   ALTER TABLE public.servicio ALTER COLUMN id_servicio DROP DEFAULT;
       public          postgres    false    255    254                       2604    65864    usuario id_usuario    DEFAULT     x   ALTER TABLE ONLY public.usuario ALTER COLUMN id_usuario SET DEFAULT nextval('public.usuario_id_usuario_seq'::regclass);
 A   ALTER TABLE public.usuario ALTER COLUMN id_usuario DROP DEFAULT;
       public          postgres    false    257    256            �          0    65698    asesoria_ventanilla_unica 
   TABLE DATA           �   COPY public.asesoria_ventanilla_unica (id_asesoria_ventanilla_unica, asesoria_ocupacional_miembros_con_discapacidad, asesoria_programa_de_trabajo_en_el_extrangero_ptte, otras_asesorias_brindadas_vu) FROM stdin;
    public          postgres    false    214   �      �          0    65705 ?   atencion_telefonica_a_empleador_para_promocion_y_capacitacion_s 
   TABLE DATA           �   COPY public.atencion_telefonica_a_empleador_para_promocion_y_capacitacion_s (id_atencion_telefonica, gestion_via_telefono) FROM stdin;
    public          postgres    false    216   !      �          0    65710 ?   atencion_virtual_a_empleador_para_promocion_y_capacitacion_serv 
   TABLE DATA           �   COPY public.atencion_virtual_a_empleador_para_promocion_y_capacitacion_serv (id_atencion_virtual, gestion_via_correo, gestion_via_whatsapp) FROM stdin;
    public          postgres    false    218   P                 0    65716    derivacion_interistitucional 
   TABLE DATA           �   COPY public.derivacion_interistitucional (id_derivacion_interistitucional, derivaciones, derivacion_a_formalizacion, derivacion_asistencia_tecnica, derivacion_a_emprendimiento, derivacion_a_credito, modulo_ciudad_mujer) FROM stdin;
    public          postgres    false    220   �                0    65726    direccion_general 
   TABLE DATA           \   COPY public.direccion_general (id_direccion_general, direccion_general, estado) FROM stdin;
    public          postgres    false    222   �                0    65730 -   empresa_asesorada_por_unidad_promocion_empleo 
   TABLE DATA           �   COPY public.empresa_asesorada_por_unidad_promocion_empleo (id_empresa_asesorada_por_unidad_promocion_empleo, orientacion_a_empleador_para_acceso_y_uso_de_bolsa_trabajo_empl, puestos_de_trabajo) FROM stdin;
    public          postgres    false    224                    0    65736    grado_academico 
   TABLE DATA           j   COPY public.grado_academico (id_grado_academico, grado_academico, id_nivel_educativo, estado) FROM stdin;
    public          postgres    false    226   :                 0    65740    intermediacion_laboral 
   TABLE DATA           �   COPY public.intermediacion_laboral (id_intermediacion_laboral, intermediacion_candidato, empresas_intermedio, intermediacion) FROM stdin;
    public          postgres    false    228   9!      
          0    65746    modulo 
   TABLE DATA           @   COPY public.modulo (id_modulo, modulo, descripcion) FROM stdin;
    public          postgres    false    230   �!                0    65750    movimiento_migratorio 
   TABLE DATA           �   COPY public.movimiento_migratorio (id_movimiento_migratorio, migrante_retornado, refugiado_migrante, desplazado_interno, marinos) FROM stdin;
    public          postgres    false    232   �"                0    65758    ms_parametro 
   TABLE DATA           R   COPY public.ms_parametro (id_parametro, id_usuario, parametro, valor) FROM stdin;
    public          postgres    false    234   �"                0    65762    nivel_educativo 
   TABLE DATA           N   COPY public.nivel_educativo (id_nivel_educativo, nivel_educativo) FROM stdin;
    public          postgres    false    236   �#                0    65766    orientacion_laboral 
   TABLE DATA           �   COPY public.orientacion_laboral (id_orientacion_laboral, charlas_orientacion_laboral, orientacion_taller, aplicacion_prueba, creacion_correo, impresion_cv, envio_cv, elaboracion_cv) FROM stdin;
    public          postgres    false    238   �#                0    65777    perfil 
   TABLE DATA           H   COPY public.perfil (id_perfil, perfil, estado, id_regional) FROM stdin;
    public          postgres    false    240   ($                0    65781    regional 
   TABLE DATA           Y   COPY public.regional (id_regional, regional, estado, descripcion, id_modulo) FROM stdin;
    public          postgres    false    242   x$                0    65785    registro 
   TABLE DATA           �  COPY public.registro (id_registro, id_regional, id_derivacion_interistitucional, id_movimiento_migratorio, id_seguimiento_gestion_siempleo, id_asesoria_ventanilla_unica, id_intermediacion_laboral, id_orientacion_laboral, fecha, nombre_completo, identidad, edad, genero, id_grado_academico, telefono, correo_electronico, inspeccion_por_primera_vez, actualizacion_informacion_candidato, observacion, id_modulo, id_usuario) FROM stdin;
    public          postgres    false    244   n%                0    65795    registro_mensual 
   TABLE DATA             COPY public.registro_mensual (id_registro_mensual, id_empresa_asesorada_por_unidad_promocion_empleo, id_atencion_virtual, id_atencion_telefonica, id_registro_y_validacion_de_empresa_con_usuario, id_seguimiento, id_servicio, nombre_empresa, fecha, observacion) FROM stdin;
    public          postgres    false    246   �&                0    65802 ,   registro_y_validacion_de_empresa_con_usuario 
   TABLE DATA           �   COPY public.registro_y_validacion_de_empresa_con_usuario (id_registro_y_validacion_de_empresa_con_usuario, validacion_actualizacion_de_datos_de_empresa, registro_de_empresa_en_empleate) FROM stdin;
    public          postgres    false    248   P'                0    65808    seguimiento_a_empresa 
   TABLE DATA           �   COPY public.seguimiento_a_empresa (id_seguimiento, seguimiento_via_telefono_efectivo, seguimiento_via_correo_efectivo, seguimiento_via_telefono_no_efectivo, seguimiento_via_correo_no_efectivo, telefono_correo_que_se_comunico) FROM stdin;
    public          postgres    false    250   �'                 0    65817    seguimiento_gestion_siempleo 
   TABLE DATA           �   COPY public.seguimiento_gestion_siempleo (id_seguimiento_gestion_siempleo, seguimiento_a_candidato, seguimiento_a_orientado) FROM stdin;
    public          postgres    false    252   �'      "          0    65823    servicio 
   TABLE DATA           i  COPY public.servicio (id_servicio, visita_de_empresa_a_oficina_senaeh, visita_presencial_a_instalaciones_de_empresa, brindar_espacio_fisico_a_empresa, empresa_derivada_a_servicios_complementarios, servicio_prueba_psicometrica, envio_listado_de_candidato, realizacion_convocatoria, accion_difusion_servicio, vacante, empresa_que_proporciona_vacante) FROM stdin;
    public          postgres    false    254   :(      $          0    65837    usuario 
   TABLE DATA           �   COPY public.usuario (id_usuario, id_regional, id_direccion_general, id_perfil, nombre, primer_apellido, segundo_apellido, correo_electronico, contrasena, telefono, cargo, estado, intentos) FROM stdin;
    public          postgres    false    256   n(      B           0    0 :   asesoria_ventanilla_unica_id_asesoria_ventanilla_unica_seq    SEQUENCE SET     i   SELECT pg_catalog.setval('public.asesoria_ventanilla_unica_id_asesoria_ventanilla_unica_seq', 13, true);
          public          postgres    false    215            C           0    0 ?   atencion_telefonica_a_empleador_para_id_atencion_telefonica_seq    SEQUENCE SET     m   SELECT pg_catalog.setval('public.atencion_telefonica_a_empleador_para_id_atencion_telefonica_seq', 6, true);
          public          postgres    false    217            D           0    0 ?   atencion_virtual_a_empleador_para_promo_id_atencion_virtual_seq    SEQUENCE SET     m   SELECT pg_catalog.setval('public.atencion_virtual_a_empleador_para_promo_id_atencion_virtual_seq', 6, true);
          public          postgres    false    219            E           0    0 ?   derivacion_interistitucional_id_derivacion_interistituciona_seq    SEQUENCE SET     n   SELECT pg_catalog.setval('public.derivacion_interistitucional_id_derivacion_interistituciona_seq', 13, true);
          public          postgres    false    221            F           0    0 *   direccion_general_id_direccion_general_seq    SEQUENCE SET     X   SELECT pg_catalog.setval('public.direccion_general_id_direccion_general_seq', 4, true);
          public          postgres    false    223            G           0    0 ?   empresa_asesorada_por_unidad__id_empresa_asesorada_por_unid_seq    SEQUENCE SET     m   SELECT pg_catalog.setval('public.empresa_asesorada_por_unidad__id_empresa_asesorada_por_unid_seq', 6, true);
          public          postgres    false    225            H           0    0 &   grado_academico_id_grado_academico_seq    SEQUENCE SET     U   SELECT pg_catalog.setval('public.grado_academico_id_grado_academico_seq', 15, true);
          public          postgres    false    227            I           0    0 4   intermediacion_laboral_id_intermediacion_laboral_seq    SEQUENCE SET     c   SELECT pg_catalog.setval('public.intermediacion_laboral_id_intermediacion_laboral_seq', 13, true);
          public          postgres    false    229            J           0    0    modulo_id_modulo_seq    SEQUENCE SET     B   SELECT pg_catalog.setval('public.modulo_id_modulo_seq', 2, true);
          public          postgres    false    231            K           0    0 2   movimiento_migratorio_id_movimiento_migratorio_seq    SEQUENCE SET     a   SELECT pg_catalog.setval('public.movimiento_migratorio_id_movimiento_migratorio_seq', 13, true);
          public          postgres    false    233            L           0    0    ms_parametro_id_parametro_seq    SEQUENCE SET     K   SELECT pg_catalog.setval('public.ms_parametro_id_parametro_seq', 7, true);
          public          postgres    false    235            M           0    0 &   nivel_educativo_id_nivel_educativo_seq    SEQUENCE SET     T   SELECT pg_catalog.setval('public.nivel_educativo_id_nivel_educativo_seq', 4, true);
          public          postgres    false    237            N           0    0 .   orientacion_laboral_id_orientacion_laboral_seq    SEQUENCE SET     ]   SELECT pg_catalog.setval('public.orientacion_laboral_id_orientacion_laboral_seq', 12, true);
          public          postgres    false    239            O           0    0    perfil_id_perfil_seq    SEQUENCE SET     B   SELECT pg_catalog.setval('public.perfil_id_perfil_seq', 3, true);
          public          postgres    false    241            P           0    0    regional_id_regional_seq    SEQUENCE SET     F   SELECT pg_catalog.setval('public.regional_id_regional_seq', 7, true);
          public          postgres    false    243            Q           0    0    registro_id_registro_seq    SEQUENCE SET     G   SELECT pg_catalog.setval('public.registro_id_registro_seq', 10, true);
          public          postgres    false    245            R           0    0 (   registro_mensual_id_registro_mensual_seq    SEQUENCE SET     V   SELECT pg_catalog.setval('public.registro_mensual_id_registro_mensual_seq', 5, true);
          public          postgres    false    247            S           0    0 ?   registro_y_validacion_de_empr_id_registro_y_validacion_de_e_seq    SEQUENCE SET     m   SELECT pg_catalog.setval('public.registro_y_validacion_de_empr_id_registro_y_validacion_de_e_seq', 6, true);
          public          postgres    false    249            T           0    0 (   seguimiento_a_empresa_id_seguimiento_seq    SEQUENCE SET     V   SELECT pg_catalog.setval('public.seguimiento_a_empresa_id_seguimiento_seq', 6, true);
          public          postgres    false    251            U           0    0 ?   seguimiento_gestion_siempleo_id_seguimiento_gestion_siemple_seq    SEQUENCE SET     n   SELECT pg_catalog.setval('public.seguimiento_gestion_siempleo_id_seguimiento_gestion_siemple_seq', 13, true);
          public          postgres    false    253            V           0    0    servicio_id_servicio_seq    SEQUENCE SET     F   SELECT pg_catalog.setval('public.servicio_id_servicio_seq', 6, true);
          public          postgres    false    255            W           0    0    usuario_id_usuario_seq    SEQUENCE SET     D   SELECT pg_catalog.setval('public.usuario_id_usuario_seq', 7, true);
          public          postgres    false    257                       2606    65866 8   asesoria_ventanilla_unica asesoria_ventanilla_unica_pkey 
   CONSTRAINT     �   ALTER TABLE ONLY public.asesoria_ventanilla_unica
    ADD CONSTRAINT asesoria_ventanilla_unica_pkey PRIMARY KEY (id_asesoria_ventanilla_unica);
 b   ALTER TABLE ONLY public.asesoria_ventanilla_unica DROP CONSTRAINT asesoria_ventanilla_unica_pkey;
       public            postgres    false    214                       2606    65868    atencion_telefonica_a_empleador_para_promocion_y_capacitacion_s atencion_telefonica_a_empleador_para_promocion_y_capacitac_pkey 
   CONSTRAINT     �   ALTER TABLE ONLY public.atencion_telefonica_a_empleador_para_promocion_y_capacitacion_s
    ADD CONSTRAINT atencion_telefonica_a_empleador_para_promocion_y_capacitac_pkey PRIMARY KEY (id_atencion_telefonica);
 �   ALTER TABLE ONLY public.atencion_telefonica_a_empleador_para_promocion_y_capacitacion_s DROP CONSTRAINT atencion_telefonica_a_empleador_para_promocion_y_capacitac_pkey;
       public            postgres    false    216                       2606    65870    atencion_virtual_a_empleador_para_promocion_y_capacitacion_serv atencion_virtual_a_empleador_para_promocion_y_capacitacion_pkey 
   CONSTRAINT     �   ALTER TABLE ONLY public.atencion_virtual_a_empleador_para_promocion_y_capacitacion_serv
    ADD CONSTRAINT atencion_virtual_a_empleador_para_promocion_y_capacitacion_pkey PRIMARY KEY (id_atencion_virtual);
 �   ALTER TABLE ONLY public.atencion_virtual_a_empleador_para_promocion_y_capacitacion_serv DROP CONSTRAINT atencion_virtual_a_empleador_para_promocion_y_capacitacion_pkey;
       public            postgres    false    218                        2606    65872 >   derivacion_interistitucional derivacion_interistitucional_pkey 
   CONSTRAINT     �   ALTER TABLE ONLY public.derivacion_interistitucional
    ADD CONSTRAINT derivacion_interistitucional_pkey PRIMARY KEY (id_derivacion_interistitucional);
 h   ALTER TABLE ONLY public.derivacion_interistitucional DROP CONSTRAINT derivacion_interistitucional_pkey;
       public            postgres    false    220            "           2606    65874 9   direccion_general direccion_general_direccion_general_key 
   CONSTRAINT     �   ALTER TABLE ONLY public.direccion_general
    ADD CONSTRAINT direccion_general_direccion_general_key UNIQUE (direccion_general);
 c   ALTER TABLE ONLY public.direccion_general DROP CONSTRAINT direccion_general_direccion_general_key;
       public            postgres    false    222            $           2606    65876 (   direccion_general direccion_general_pkey 
   CONSTRAINT     x   ALTER TABLE ONLY public.direccion_general
    ADD CONSTRAINT direccion_general_pkey PRIMARY KEY (id_direccion_general);
 R   ALTER TABLE ONLY public.direccion_general DROP CONSTRAINT direccion_general_pkey;
       public            postgres    false    222            &           2606    65878 `   empresa_asesorada_por_unidad_promocion_empleo empresa_asesorada_por_unidad_promocion_empleo_pkey 
   CONSTRAINT     �   ALTER TABLE ONLY public.empresa_asesorada_por_unidad_promocion_empleo
    ADD CONSTRAINT empresa_asesorada_por_unidad_promocion_empleo_pkey PRIMARY KEY (id_empresa_asesorada_por_unidad_promocion_empleo);
 �   ALTER TABLE ONLY public.empresa_asesorada_por_unidad_promocion_empleo DROP CONSTRAINT empresa_asesorada_por_unidad_promocion_empleo_pkey;
       public            postgres    false    224            (           2606    65880 3   grado_academico grado_academico_grado_academico_key 
   CONSTRAINT     y   ALTER TABLE ONLY public.grado_academico
    ADD CONSTRAINT grado_academico_grado_academico_key UNIQUE (grado_academico);
 ]   ALTER TABLE ONLY public.grado_academico DROP CONSTRAINT grado_academico_grado_academico_key;
       public            postgres    false    226            *           2606    65882 $   grado_academico grado_academico_pkey 
   CONSTRAINT     r   ALTER TABLE ONLY public.grado_academico
    ADD CONSTRAINT grado_academico_pkey PRIMARY KEY (id_grado_academico);
 N   ALTER TABLE ONLY public.grado_academico DROP CONSTRAINT grado_academico_pkey;
       public            postgres    false    226            ,           2606    65884 2   intermediacion_laboral intermediacion_laboral_pkey 
   CONSTRAINT     �   ALTER TABLE ONLY public.intermediacion_laboral
    ADD CONSTRAINT intermediacion_laboral_pkey PRIMARY KEY (id_intermediacion_laboral);
 \   ALTER TABLE ONLY public.intermediacion_laboral DROP CONSTRAINT intermediacion_laboral_pkey;
       public            postgres    false    228            .           2606    65886    modulo modulo_pkey 
   CONSTRAINT     W   ALTER TABLE ONLY public.modulo
    ADD CONSTRAINT modulo_pkey PRIMARY KEY (id_modulo);
 <   ALTER TABLE ONLY public.modulo DROP CONSTRAINT modulo_pkey;
       public            postgres    false    230            0           2606    65888 0   movimiento_migratorio movimiento_migratorio_pkey 
   CONSTRAINT     �   ALTER TABLE ONLY public.movimiento_migratorio
    ADD CONSTRAINT movimiento_migratorio_pkey PRIMARY KEY (id_movimiento_migratorio);
 Z   ALTER TABLE ONLY public.movimiento_migratorio DROP CONSTRAINT movimiento_migratorio_pkey;
       public            postgres    false    232            2           2606    65890 '   ms_parametro ms_parametro_parametro_key 
   CONSTRAINT     g   ALTER TABLE ONLY public.ms_parametro
    ADD CONSTRAINT ms_parametro_parametro_key UNIQUE (parametro);
 Q   ALTER TABLE ONLY public.ms_parametro DROP CONSTRAINT ms_parametro_parametro_key;
       public            postgres    false    234            4           2606    65892    ms_parametro ms_parametro_pkey 
   CONSTRAINT     f   ALTER TABLE ONLY public.ms_parametro
    ADD CONSTRAINT ms_parametro_pkey PRIMARY KEY (id_parametro);
 H   ALTER TABLE ONLY public.ms_parametro DROP CONSTRAINT ms_parametro_pkey;
       public            postgres    false    234            6           2606    65894 3   nivel_educativo nivel_educativo_nivel_educativo_key 
   CONSTRAINT     y   ALTER TABLE ONLY public.nivel_educativo
    ADD CONSTRAINT nivel_educativo_nivel_educativo_key UNIQUE (nivel_educativo);
 ]   ALTER TABLE ONLY public.nivel_educativo DROP CONSTRAINT nivel_educativo_nivel_educativo_key;
       public            postgres    false    236            8           2606    65896 $   nivel_educativo nivel_educativo_pkey 
   CONSTRAINT     r   ALTER TABLE ONLY public.nivel_educativo
    ADD CONSTRAINT nivel_educativo_pkey PRIMARY KEY (id_nivel_educativo);
 N   ALTER TABLE ONLY public.nivel_educativo DROP CONSTRAINT nivel_educativo_pkey;
       public            postgres    false    236            :           2606    65898 ,   orientacion_laboral orientacion_laboral_pkey 
   CONSTRAINT     ~   ALTER TABLE ONLY public.orientacion_laboral
    ADD CONSTRAINT orientacion_laboral_pkey PRIMARY KEY (id_orientacion_laboral);
 V   ALTER TABLE ONLY public.orientacion_laboral DROP CONSTRAINT orientacion_laboral_pkey;
       public            postgres    false    238            <           2606    65900    perfil perfil_pkey 
   CONSTRAINT     W   ALTER TABLE ONLY public.perfil
    ADD CONSTRAINT perfil_pkey PRIMARY KEY (id_perfil);
 <   ALTER TABLE ONLY public.perfil DROP CONSTRAINT perfil_pkey;
       public            postgres    false    240            >           2606    65902    regional regional_pkey 
   CONSTRAINT     ]   ALTER TABLE ONLY public.regional
    ADD CONSTRAINT regional_pkey PRIMARY KEY (id_regional);
 @   ALTER TABLE ONLY public.regional DROP CONSTRAINT regional_pkey;
       public            postgres    false    242            B           2606    65904 (   registro registro_correo_electronico_key 
   CONSTRAINT     q   ALTER TABLE ONLY public.registro
    ADD CONSTRAINT registro_correo_electronico_key UNIQUE (correo_electronico);
 R   ALTER TABLE ONLY public.registro DROP CONSTRAINT registro_correo_electronico_key;
       public            postgres    false    244            D           2606    65906    registro registro_identidad_key 
   CONSTRAINT     _   ALTER TABLE ONLY public.registro
    ADD CONSTRAINT registro_identidad_key UNIQUE (identidad);
 I   ALTER TABLE ONLY public.registro DROP CONSTRAINT registro_identidad_key;
       public            postgres    false    244            H           2606    65908 &   registro_mensual registro_mensual_pkey 
   CONSTRAINT     u   ALTER TABLE ONLY public.registro_mensual
    ADD CONSTRAINT registro_mensual_pkey PRIMARY KEY (id_registro_mensual);
 P   ALTER TABLE ONLY public.registro_mensual DROP CONSTRAINT registro_mensual_pkey;
       public            postgres    false    246            F           2606    65910    registro registro_pkey 
   CONSTRAINT     ]   ALTER TABLE ONLY public.registro
    ADD CONSTRAINT registro_pkey PRIMARY KEY (id_registro);
 @   ALTER TABLE ONLY public.registro DROP CONSTRAINT registro_pkey;
       public            postgres    false    244            J           2606    65912 ^   registro_y_validacion_de_empresa_con_usuario registro_y_validacion_de_empresa_con_usuario_pkey 
   CONSTRAINT     �   ALTER TABLE ONLY public.registro_y_validacion_de_empresa_con_usuario
    ADD CONSTRAINT registro_y_validacion_de_empresa_con_usuario_pkey PRIMARY KEY (id_registro_y_validacion_de_empresa_con_usuario);
 �   ALTER TABLE ONLY public.registro_y_validacion_de_empresa_con_usuario DROP CONSTRAINT registro_y_validacion_de_empresa_con_usuario_pkey;
       public            postgres    false    248            L           2606    65914 0   seguimiento_a_empresa seguimiento_a_empresa_pkey 
   CONSTRAINT     z   ALTER TABLE ONLY public.seguimiento_a_empresa
    ADD CONSTRAINT seguimiento_a_empresa_pkey PRIMARY KEY (id_seguimiento);
 Z   ALTER TABLE ONLY public.seguimiento_a_empresa DROP CONSTRAINT seguimiento_a_empresa_pkey;
       public            postgres    false    250            N           2606    65916 >   seguimiento_gestion_siempleo seguimiento_gestion_siempleo_pkey 
   CONSTRAINT     �   ALTER TABLE ONLY public.seguimiento_gestion_siempleo
    ADD CONSTRAINT seguimiento_gestion_siempleo_pkey PRIMARY KEY (id_seguimiento_gestion_siempleo);
 h   ALTER TABLE ONLY public.seguimiento_gestion_siempleo DROP CONSTRAINT seguimiento_gestion_siempleo_pkey;
       public            postgres    false    252            P           2606    65918    servicio servicio_pkey 
   CONSTRAINT     ]   ALTER TABLE ONLY public.servicio
    ADD CONSTRAINT servicio_pkey PRIMARY KEY (id_servicio);
 @   ALTER TABLE ONLY public.servicio DROP CONSTRAINT servicio_pkey;
       public            postgres    false    254            @           2606    65920    regional unique_descripcion 
   CONSTRAINT     ]   ALTER TABLE ONLY public.regional
    ADD CONSTRAINT unique_descripcion UNIQUE (descripcion);
 E   ALTER TABLE ONLY public.regional DROP CONSTRAINT unique_descripcion;
       public            postgres    false    242            R           2606    65922 &   usuario usuario_correo_electronico_key 
   CONSTRAINT     o   ALTER TABLE ONLY public.usuario
    ADD CONSTRAINT usuario_correo_electronico_key UNIQUE (correo_electronico);
 P   ALTER TABLE ONLY public.usuario DROP CONSTRAINT usuario_correo_electronico_key;
       public            postgres    false    256            T           2606    65924    usuario usuario_pkey 
   CONSTRAINT     Z   ALTER TABLE ONLY public.usuario
    ADD CONSTRAINT usuario_pkey PRIMARY KEY (id_usuario);
 >   ALTER TABLE ONLY public.usuario DROP CONSTRAINT usuario_pkey;
       public            postgres    false    256            Y           2606    65925    registro fk_grado_academico    FK CONSTRAINT     �   ALTER TABLE ONLY public.registro
    ADD CONSTRAINT fk_grado_academico FOREIGN KEY (id_grado_academico) REFERENCES public.grado_academico(id_grado_academico);
 E   ALTER TABLE ONLY public.registro DROP CONSTRAINT fk_grado_academico;
       public          postgres    false    3370    226    244            X           2606    65930    regional fk_modulo    FK CONSTRAINT     {   ALTER TABLE ONLY public.regional
    ADD CONSTRAINT fk_modulo FOREIGN KEY (id_modulo) REFERENCES public.modulo(id_modulo);
 <   ALTER TABLE ONLY public.regional DROP CONSTRAINT fk_modulo;
       public          postgres    false    3374    230    242            Z           2606    65935    registro fk_modulo    FK CONSTRAINT     {   ALTER TABLE ONLY public.registro
    ADD CONSTRAINT fk_modulo FOREIGN KEY (id_modulo) REFERENCES public.modulo(id_modulo);
 <   ALTER TABLE ONLY public.registro DROP CONSTRAINT fk_modulo;
       public          postgres    false    3374    230    244            W           2606    65940    perfil fk_regional    FK CONSTRAINT     �   ALTER TABLE ONLY public.perfil
    ADD CONSTRAINT fk_regional FOREIGN KEY (id_regional) REFERENCES public.regional(id_regional);
 <   ALTER TABLE ONLY public.perfil DROP CONSTRAINT fk_regional;
       public          postgres    false    240    3390    242            [           2606    65945    registro fk_usuario    FK CONSTRAINT        ALTER TABLE ONLY public.registro
    ADD CONSTRAINT fk_usuario FOREIGN KEY (id_usuario) REFERENCES public.usuario(id_usuario);
 =   ALTER TABLE ONLY public.registro DROP CONSTRAINT fk_usuario;
       public          postgres    false    256    244    3412            U           2606    65950 7   grado_academico grado_academico_id_nivel_educativo_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.grado_academico
    ADD CONSTRAINT grado_academico_id_nivel_educativo_fkey FOREIGN KEY (id_nivel_educativo) REFERENCES public.nivel_educativo(id_nivel_educativo);
 a   ALTER TABLE ONLY public.grado_academico DROP CONSTRAINT grado_academico_id_nivel_educativo_fkey;
       public          postgres    false    236    226    3384            V           2606    65955 )   ms_parametro ms_parametro_id_usuario_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.ms_parametro
    ADD CONSTRAINT ms_parametro_id_usuario_fkey FOREIGN KEY (id_usuario) REFERENCES public.usuario(id_usuario);
 S   ALTER TABLE ONLY public.ms_parametro DROP CONSTRAINT ms_parametro_id_usuario_fkey;
       public          postgres    false    3412    234    256            \           2606    65960 3   registro registro_id_asesoria_ventanilla_unica_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.registro
    ADD CONSTRAINT registro_id_asesoria_ventanilla_unica_fkey FOREIGN KEY (id_asesoria_ventanilla_unica) REFERENCES public.asesoria_ventanilla_unica(id_asesoria_ventanilla_unica);
 ]   ALTER TABLE ONLY public.registro DROP CONSTRAINT registro_id_asesoria_ventanilla_unica_fkey;
       public          postgres    false    244    214    3354            ]           2606    65965 6   registro registro_id_derivacion_interistitucional_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.registro
    ADD CONSTRAINT registro_id_derivacion_interistitucional_fkey FOREIGN KEY (id_derivacion_interistitucional) REFERENCES public.derivacion_interistitucional(id_derivacion_interistitucional);
 `   ALTER TABLE ONLY public.registro DROP CONSTRAINT registro_id_derivacion_interistitucional_fkey;
       public          postgres    false    220    3360    244            ^           2606    65970 0   registro registro_id_intermediacion_laboral_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.registro
    ADD CONSTRAINT registro_id_intermediacion_laboral_fkey FOREIGN KEY (id_intermediacion_laboral) REFERENCES public.intermediacion_laboral(id_intermediacion_laboral);
 Z   ALTER TABLE ONLY public.registro DROP CONSTRAINT registro_id_intermediacion_laboral_fkey;
       public          postgres    false    244    3372    228            _           2606    65975 /   registro registro_id_movimiento_migratorio_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.registro
    ADD CONSTRAINT registro_id_movimiento_migratorio_fkey FOREIGN KEY (id_movimiento_migratorio) REFERENCES public.movimiento_migratorio(id_movimiento_migratorio);
 Y   ALTER TABLE ONLY public.registro DROP CONSTRAINT registro_id_movimiento_migratorio_fkey;
       public          postgres    false    244    232    3376            `           2606    65980 -   registro registro_id_orientacion_laboral_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.registro
    ADD CONSTRAINT registro_id_orientacion_laboral_fkey FOREIGN KEY (id_orientacion_laboral) REFERENCES public.orientacion_laboral(id_orientacion_laboral);
 W   ALTER TABLE ONLY public.registro DROP CONSTRAINT registro_id_orientacion_laboral_fkey;
       public          postgres    false    238    244    3386            a           2606    65985 "   registro registro_id_regional_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.registro
    ADD CONSTRAINT registro_id_regional_fkey FOREIGN KEY (id_regional) REFERENCES public.regional(id_regional);
 L   ALTER TABLE ONLY public.registro DROP CONSTRAINT registro_id_regional_fkey;
       public          postgres    false    3390    242    244            b           2606    65990 6   registro registro_id_seguimiento_gestion_siempleo_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.registro
    ADD CONSTRAINT registro_id_seguimiento_gestion_siempleo_fkey FOREIGN KEY (id_seguimiento_gestion_siempleo) REFERENCES public.seguimiento_gestion_siempleo(id_seguimiento_gestion_siempleo);
 `   ALTER TABLE ONLY public.registro DROP CONSTRAINT registro_id_seguimiento_gestion_siempleo_fkey;
       public          postgres    false    3406    244    252            c           2606    65995 =   registro_mensual registro_mensual_id_atencion_telefonica_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.registro_mensual
    ADD CONSTRAINT registro_mensual_id_atencion_telefonica_fkey FOREIGN KEY (id_atencion_telefonica) REFERENCES public.atencion_telefonica_a_empleador_para_promocion_y_capacitacion_s(id_atencion_telefonica);
 g   ALTER TABLE ONLY public.registro_mensual DROP CONSTRAINT registro_mensual_id_atencion_telefonica_fkey;
       public          postgres    false    246    216    3356            d           2606    66000 :   registro_mensual registro_mensual_id_atencion_virtual_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.registro_mensual
    ADD CONSTRAINT registro_mensual_id_atencion_virtual_fkey FOREIGN KEY (id_atencion_virtual) REFERENCES public.atencion_virtual_a_empleador_para_promocion_y_capacitacion_serv(id_atencion_virtual);
 d   ALTER TABLE ONLY public.registro_mensual DROP CONSTRAINT registro_mensual_id_atencion_virtual_fkey;
       public          postgres    false    3358    218    246            e           2606    66005 P   registro_mensual registro_mensual_id_empresa_asesorada_por_unidad_promocion_fkey    FK CONSTRAINT     .  ALTER TABLE ONLY public.registro_mensual
    ADD CONSTRAINT registro_mensual_id_empresa_asesorada_por_unidad_promocion_fkey FOREIGN KEY (id_empresa_asesorada_por_unidad_promocion_empleo) REFERENCES public.empresa_asesorada_por_unidad_promocion_empleo(id_empresa_asesorada_por_unidad_promocion_empleo);
 z   ALTER TABLE ONLY public.registro_mensual DROP CONSTRAINT registro_mensual_id_empresa_asesorada_por_unidad_promocion_fkey;
       public          postgres    false    3366    246    224            f           2606    66010 P   registro_mensual registro_mensual_id_registro_y_validacion_de_empresa_con_u_fkey    FK CONSTRAINT     +  ALTER TABLE ONLY public.registro_mensual
    ADD CONSTRAINT registro_mensual_id_registro_y_validacion_de_empresa_con_u_fkey FOREIGN KEY (id_registro_y_validacion_de_empresa_con_usuario) REFERENCES public.registro_y_validacion_de_empresa_con_usuario(id_registro_y_validacion_de_empresa_con_usuario);
 z   ALTER TABLE ONLY public.registro_mensual DROP CONSTRAINT registro_mensual_id_registro_y_validacion_de_empresa_con_u_fkey;
       public          postgres    false    246    248    3402            g           2606    66015 5   registro_mensual registro_mensual_id_seguimiento_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.registro_mensual
    ADD CONSTRAINT registro_mensual_id_seguimiento_fkey FOREIGN KEY (id_seguimiento) REFERENCES public.seguimiento_a_empresa(id_seguimiento);
 _   ALTER TABLE ONLY public.registro_mensual DROP CONSTRAINT registro_mensual_id_seguimiento_fkey;
       public          postgres    false    250    246    3404            h           2606    66020 2   registro_mensual registro_mensual_id_servicio_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.registro_mensual
    ADD CONSTRAINT registro_mensual_id_servicio_fkey FOREIGN KEY (id_servicio) REFERENCES public.servicio(id_servicio);
 \   ALTER TABLE ONLY public.registro_mensual DROP CONSTRAINT registro_mensual_id_servicio_fkey;
       public          postgres    false    246    254    3408            i           2606    66025    usuario usuario_id_perfil_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.usuario
    ADD CONSTRAINT usuario_id_perfil_fkey FOREIGN KEY (id_perfil) REFERENCES public.perfil(id_perfil);
 H   ALTER TABLE ONLY public.usuario DROP CONSTRAINT usuario_id_perfil_fkey;
       public          postgres    false    256    3388    240            j           2606    66030     usuario usuario_id_regional_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.usuario
    ADD CONSTRAINT usuario_id_regional_fkey FOREIGN KEY (id_regional) REFERENCES public.regional(id_regional);
 J   ALTER TABLE ONLY public.usuario DROP CONSTRAINT usuario_id_regional_fkey;
       public          postgres    false    256    3390    242            k           2606    66035 !   usuario usuario_id_regional_fkey1    FK CONSTRAINT     �   ALTER TABLE ONLY public.usuario
    ADD CONSTRAINT usuario_id_regional_fkey1 FOREIGN KEY (id_regional) REFERENCES public.direccion_general(id_direccion_general);
 K   ALTER TABLE ONLY public.usuario DROP CONSTRAINT usuario_id_regional_fkey1;
       public          postgres    false    3364    256    222            �   >   x�5�� !�3c?��b�u�L���e! V�6��������*�(Kň��|{
�<bo      �      x�3�4�2b 6b3 6������� 5}      �   #   x�3�4�4�2�&`�L��ICNKNK�=... f��          :   x�]λ  B��1�����sX�k�9����B�Ј���mAr&M�����W'I��R�         )   x�3�pu�t�2�tqw��@:�ӓ�H{� b���� �F�         $   x�3�44 ".cNCNC.0i
&��������� u�2         �   x�}�MN�0FדS�IZ~��Z	JQ�d3��0R<F��qX������y�O3%<[����qPº����(�MXG�z[�&���
^"�]�����f8�Sx�:`?Ew�w=��%<�^�����X�Z��]�i�����;�-%��q8ka����u�[E2�߹�,�s�O��6���1x�	_����h�.y�hQؠ��b��;9�D&�x��{�~������(~ $&��         Z   x�3�4�tNL�IUp���/�4�2�4A.c(m�M���9g���?�9�9T�J[BiC�� �
4PH�-(J-N,��aV��qqq M��      
   �   x�=O;N�0��S��h�Z���@G3a��1c	n�8�^�q�����^��Y�CG�OYD��ٸTB$̇���yF&#P��@X�
�Թ	U�^ShF�_�8��T2�+M��&����9(�f�����n��C{g�]��d��Y��$���V��I
�y���S:���F�jT�T���^ѩd�1*$Uv@�yVW莮�����﹇��(��s�W��M�����i|��q�?2x�         ?   x�E��	 !��di�Ի]����4��O!NŊ6뱺50�p��Z��H*Y��G��*$7�i         �   x�E���0Eg�c"��tE<Ą��ƒ�Q
*qd���qa`���\���&��Nͤ 3a^zU%����بC}����z:c�����;�*�	^��t-%�]e}=�$�͔��vY����e�mǞ�k���"~ ��6K         ?   x�3�tM)MNL�<�9O!������D.#d��Ԕ�D.cd��҂Ԣ��".dр�T�1z\\\ ?{!�         ?   x�e��  ߡ'xE{��:�F�峐ИpT��l&�.>���ٗ��kA��rx
�Ni�         @   x�3���K�/�M,�LN�t���2�(�/�L-I,��Wpu��s��&�e&�sz��1z\\\ `$�         �   x�}�=N�@�z}�9@b�vL�T`((�E"h�̆�Y4ى�'܈�S�b��̧�^��4ƃ�Ϩ�TG68���u1����Y<�+rmd�����z�,��vO|�|+~��i拺n@�Y���*����Ng&	m����7�G��Ѫ"+�nʥ��`y���o%��'�'��\@h�it�?�?Ɔ�+�J=
���L>$�>�>��X$��?�[��9#�2�y�e�T�c&         3  x����N�0��ӧ�����n���D��K�MW�V�6�>b|z3K@�BJZί�T�P�"�T3QΤ��$y�B�>Ah�X�ZTZi�%l�{�.E"o����TJW��(����]o|���ӌ��i$��s����Y<=,��z�|!��Z�B`������.�089%I��1�c2[��]�f�@��pw
��#+ �b�@q;��cQ2D"No�^�������C���4f�\I�a��}��}�i�s��ߛd��4X
�%�����J(�%&}EXE�?m#���p�s���^��%˷�/�{�c_��*         �   x����B!E����n���W�F�HRA?_��NN����t���(x&���Y��Cc�����]��8���0R����[8GRzN��to�K`�Јx=�g��#�<�z���ƒ�1"݁�XR��P;��6J���z�         #   x�3�4�4�2�&`�L��ICN#N#�=... f,�         \   x���1� @љ�7��*�P�z�l�/_U;b��-a$�p��K�N���o^��~�3f{w?����N묃Y��s/�          ;   x�%�� !�7c�=]������&d�� ��`��N��H���ǪW�j`�?T=�F���      "   $   x�3�4Ą\�XEM���b5�*j�i�	�b���� <x�      $   �  x����r�0���Sd�5�.���E�����Ӎ02Pd$L0�ԧ�U!�ܚ,;g����9�~a�+�LDDrZ ����^�sAk��ql|�8�pʔ�Eʱ }=�kj���(�}U���É��#??(�4��8����I�$NP����|��k;45 �IQ0 j� O2�o�1�_HПߜ�˛�=ȣ��p�mi����Fﺚ�CCz�x�DZp�+�`�K�Wә>˹��l��A�5�ъ�jnG�)±�q���n/J�����}�J�Ο1A��R�����uf\�ȴ�7��k\cN��1�1����r9��������~�ٻYtR� \��QQa��a��&�ݝ�0h�����MlR� ׁ�e����DbK
]�K:�`��9��
����UG��b�3��ڂ%.*���e�����r:&[�p�/�OX5��a��l�x�Ayi����0-���S��z����     