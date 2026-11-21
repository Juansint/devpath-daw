/* Bases de datos: apuntes de clase (Prometeo DAW), en el orden de los temas de los profesores.
   Diseño (E/R y modelo relacional) → DDL → DML y restricciones → integridad referencial → consultas. PostgreSQL. */
window.LECCIONES = window.LECCIONES || {};
LECCIONES["bbdd"] = {
  lang: "sql",
  capitulos: [
    {
      t: "Diagrama entidad/relación",
      d: "Entidades, atributos, relaciones y cardinalidad.",
      secciones: [
        {
          n: "1.1", t: "Entidad", m: "2 min", v: 0,
          b: "Una entidad es un objeto o concepto del mundo real del que queremos guardar información y que existe por sí mismo dentro del sistema: un paciente, un cliente, un curso. En el diagrama se dibuja como un rectángulo con el nombre en singular.",
          k: ["Entidad = algo con existencia propia de lo que guardamos datos.", "Se dibuja con un rectángulo.", "Se nombra en singular: Paciente, no Pacientes."],
          c: "┌──────────┐\n│ Paciente │   ← entidad\n└──────────┘",
          tip: "en un enunciado, las entidades suelen ser los sustantivos de los que se dice «de cada X se guarda…»."
        },
        {
          n: "1.2", t: "Atributos y clave primaria", m: "3 min", v: 0,
          b: "Un atributo es una característica que describe a una entidad (nombre, teléfono, fecha…). Toda entidad tiene uno o varios. Siempre hay un atributo, o una combinación de ellos, que identifica de forma única a cada ejemplar: es la clave primaria. En el diagrama los atributos van en óvalos y la clave primaria se subraya.",
          k: ["Atributo = propiedad que describe a la entidad (óvalo).", "Clave primaria = identifica cada ejemplar sin repetirse (óvalo subrayado).", "Puede ser un solo atributo (DNI) o una combinación."],
          c: "Paciente\n  ( DNI )      ← subrayado: clave primaria\n  ( Nombre )\n  ( Teléfono )",
          tip: "si el enunciado no da un identificador natural (DNI, ISBN, matrícula…), añadid un id o código.",
          q: { t: "¿Qué atributo es mejor clave primaria de un Libro?", o: ["Título", "Autor", "ISBN", "Precio"], ok: 2, why: "El ISBN identifica cada libro sin repetirse; títulos y autores pueden coincidir." }
        },
        {
          n: "1.3", t: "Relaciones y cardinalidad", m: "4 min", v: 0,
          b: "Una relación es un vínculo con sentido entre dos o más entidades y se dibuja con un rombo y un verbo (Atiende, Hace, Publica). La cardinalidad indica con cuántos ejemplares de una entidad se puede asociar cada ejemplar de la otra. Hay tres posibilidades: 1:1, 1:N y N:N.",
          k: ["Relación = rombo con un verbo.", "1:N es la más habitual: un cliente hace muchos pedidos.", "Para sacarla, pregunta en los dos sentidos: ¿uno o varios?"],
          c: "Dentista ─1─< Atiende >─1─ Paciente   (1:1)\nDentista ─1─< Atiende >─N─ Paciente   (1:N)\nDentista ─N─< Atiende >─N─ Paciente   (N:N)",
          tip: "leedlo en voz alta en los dos sentidos: «un dentista atiende a N pacientes» y «un paciente es atendido por 1 dentista» → 1:N.",
          a: [["1:1", "Cada ejemplar de A va con uno solo de B, y al revés."], ["1:N", "Uno de A va con muchos de B; cada B con un solo A."], ["N:N", "Muchos de A con muchos de B."]],
          at: "Cardinalidades", ah: ["Tipo", "Significa"]
        },
        {
          n: "1.4", t: "Ejemplo 1:N: tienda y pedidos", m: "3 min", v: 0,
          b: "Una tienda guarda de cada cliente su identificador, nombre y correo, y de cada pedido la fecha y el importe total. Un cliente puede hacer varios pedidos, pero cada pedido es de un solo cliente. Salen dos entidades (Cliente y Pedido) unidas por la relación Hace con cardinalidad 1:N.",
          k: ["Entidades: Cliente y Pedido.", "Relación: Hace, 1 cliente → N pedidos.", "Claves: IDCliente e IDPedido."],
          c: "Cliente ─1─< Hace >─N─ Pedido\n  IDCliente              IDPedido\n  Nombre                 Fecha\n  E-mail                 Total",
          tip: "la palabra «varios» marca la N y «un único» marca el 1."
        },
        {
          n: "1.5", t: "Atributos de relación (N:N)", m: "4 min", v: 0,
          b: "Una relación N:N puede tener sus propios atributos: datos que no pertenecen a ninguna de las dos entidades, sino a la unión de ambas. Ninguno de ellos es clave primaria. Ejemplo: en una academia, un alumno se matricula en varios cursos y un curso tiene varios alumnos; la fecha de matrícula y la nota final son de cada matrícula, no del alumno ni del curso.",
          k: ["Solo las relaciones N:N llevan atributos propios.", "Esos atributos nunca son clave primaria.", "Pregunta clave: ¿este dato depende de los dos a la vez?"],
          c: "Alumno ─N─< Matricula en >─N─ Curso\n  DNI          ( Fecha )       Código\n  Nombre       ( Nota final )  Nombre\n  Apellidos                    Número horas\n  E-mail",
          tip: "la nota no puede ir en Alumno (tiene una por curso) ni en Curso (tiene una por alumno): va en la relación.",
          q: { t: "En una plataforma de streaming, ¿dónde va la valoración que un usuario da a una serie?", o: ["En Usuario", "En Serie", "En la relación Ve (N:N)", "En una entidad Valoración sin relación"], ok: 2, why: "La valoración depende del usuario y de la serie a la vez, así que es un atributo de la relación N:N." }
        },
        {
          n: "1.6", t: "Cómo resolver un enunciado", m: "4 min", v: 0,
          b: "Para pasar un texto a diagrama: subraya las cosas de las que se guardan datos (entidades), lista sus atributos, busca los verbos que las unen (relaciones) y saca la cardinalidad preguntando en los dos sentidos. Los enunciados de clase meten a propósito información que no forma parte del sistema (una máquina de café, el color de las paredes, funciones «que no se gestionarán todavía»): esa información se ignora.",
          k: ["1. Entidades → 2. Atributos y clave → 3. Relaciones → 4. Cardinalidad.", "«Varios», «muchos» → N; «único», «solo uno» → 1.", "Descarta lo que el enunciado dice que no se incluye."],
          c: "Taller: Propietario ─1─< Tiene >─N─ Vehículo\nBiblioteca: Editorial ─1─< Publica >─N─ Libro\nCine: Película ─N─< Reparto >─N─ Actor   (atributo: personaje)",
          tip: "si el enunciado dice «de cada línea / participación / asignación interesa…», casi seguro es un atributo de una relación N:N.",
          e: "convertir en entidad algo que el enunciado excluye expresamente, como el sistema de puntos o la máquina de café de la clínica."
        }
      ]
    },
    {
      t: "Modelo relacional",
      d: "Pasar el diagrama E/R a tablas con PK y FK.",
      secciones: [
        {
          n: "2.1", t: "De entidad a tabla", m: "3 min", v: 0,
          b: "En el modelo relacional cada entidad se convierte en una tabla. Sus atributos pasan a ser columnas y la clave primaria se marca con (PK). Los nombres de tablas van en plural y en minúsculas, y los de columnas en minúsculas con guiones bajos.",
          k: ["Entidad → tabla (en plural).", "Atributo → columna.", "Clave primaria → columna marcada con PK."],
          c: "clientes\n  id_cliente (PK)\n  nombre\n  email",
          tip: "pasad todo a minúsculas y sin tildes ni espacios: IDCliente → id_cliente, E-mail → email."
        },
        {
          n: "2.2", t: "Relación 1:N: la clave foránea", m: "4 min", v: 0,
          b: "Una relación 1:N no genera tabla nueva: la clave primaria de la tabla del lado 1 se copia como columna en la tabla del lado N. Esa columna se llama clave foránea (FK) y apunta a la fila con la que está relacionada.",
          k: ["La FK va siempre en el lado N.", "La FK tiene el mismo nombre y tipo que la PK a la que apunta.", "Cada pedido guarda el id_cliente de quien lo hizo."],
          c: "clientes                pedidos\n  id_cliente (PK)  ◄──┐   id_pedido (PK)\n  nombre             │   fecha\n  email              │   total\n                     └── id_cliente (FK)",
          o: "clientes                      pedidos\nid_cliente | nombre           id_pedido | fecha      | total | id_cliente\n1          | Sofía            1         | 15-05-2026 | 23.89 | 1\n2          | Julio            2         | 15-05-2026 | 32.34 | 1\n3          | Elena            3         | 16-05-2026 | 57.21 | 2",
          tip: "con los datos de ejemplo se ve: Sofía (1) tiene dos pedidos, Julio uno y Elena ninguno.",
          q: { t: "Un cliente hace muchos pedidos. ¿Dónde va la clave foránea?", o: ["id_pedido en clientes", "id_cliente en pedidos", "En una tabla intermedia", "En las dos tablas"], ok: 1, why: "En una 1:N la FK va en el lado N: cada pedido guarda el cliente al que pertenece." }
        },
        {
          n: "2.3", t: "Relación N:N: tabla intermedia", m: "4 min", v: 0,
          b: "Una relación N:N se convierte en una tabla nueva que contiene las claves primarias de las dos entidades como claves foráneas, más los atributos de la relación. Para la clave primaria de esa tabla hay dos opciones: la combinación de las dos FK, o un identificador propio (id_matricula), que es la que usamos en clase.",
          k: ["N:N → tabla nueva con nombre de la relación (matriculas).", "Lleva las dos FK y los atributos de la relación.", "PK: las dos FK juntas o un id propio."],
          c: "alumnos         cursos          matriculas\n  dni (PK)        codigo (PK)     id_matricula (PK)\n  nombre          nombre          dni (FK)\n  apellidos       horas           codigo (FK)\n  email                           fecha\n                                  nota",
          o: "matriculas\nid_matricula | dni       | codigo | fecha      | nota\n1            | 11111111A | 1      | 15-09-2026 | 5.9\n2            | 22222222B | 2      | 15-10-2026 | 4.2\n3            | 22222222B | 1      | 15-11-2026 | 8.4",
          tip: "con un id propio un alumno puede matricularse dos veces del mismo curso (por ejemplo, si repite); con PK (dni, codigo) no."
        },
        {
          n: "2.4", t: "Tablas, filas y columnas", m: "2 min", v: 0,
          b: "Una vez definidas, las tablas se llenan de filas. Cada fila es un ejemplar (un cliente, una matrícula) y cada columna guarda un dato de ese ejemplar. Las FK contienen valores que existen en la PK de la otra tabla: así es como se relacionan los datos.",
          k: ["Fila = registro; columna = campo.", "Una FK solo puede contener valores que existan en la PK a la que apunta.", "La PK nunca se repite ni puede quedar vacía."],
          c: "cursos\ncodigo | nombre                 | horas\n1      | Programación           | 200\n2      | Bases de datos         | 150\n3      | Entornos de desarrollo | 90",
          tip: "inventad 3 o 4 filas de ejemplo para comprobar que vuestro modelo responde a lo que pide el enunciado."
        },
        {
          n: "2.5", t: "Diseñar un caso completo", m: "5 min", v: 0,
          b: "En las actividades (clínica Salud Integral, librería El estante curioso) se pide el diagrama E/R y el modelo relacional. El proceso: identificar entidades y descartar lo que no entra, decidir cardinalidades, aplicar las reglas (1:N → FK en el lado N; N:N → tabla intermedia) y revisar que cada dato tiene su sitio.",
          k: ["Especialidad 1:N Médico → id_especialidad (FK) en medicos.", "Paciente N:N Médico con fecha, hora, motivo y estado → tabla citas.", "Venta/Pedido N:N Libro con cantidad → tablas de líneas."],
          c: "-- Pistas para la librería:\n-- cliente 1:N venta,   cliente 1:N pedido\n-- venta  N:N libro (cantidad)  → lineas_venta\n-- pedido N:N libro (cantidad)  → lineas_pedido\n-- editorial 1:N libro,  genero 1:N libro",
          tip: "antes de entregar, repasad cada frase del enunciado y comprobad en qué tabla y columna queda guardado ese dato.",
          e: "poner una lista de valores en una columna (libros = '1, 4, 7'). Si una cosa tiene varias de otra, es una relación y va en otra tabla."
        }
      ]
    },
    {
      t: "DDL: crear bases de datos y tablas",
      d: "PostgreSQL, pgAdmin, CREATE, ALTER y DROP.",
      secciones: [
        {
          n: "3.1", t: "PostgreSQL, psql y pgAdmin", m: "3 min", v: 0,
          b: "PostgreSQL es un motor de bases de datos: un programa sin interfaz que guarda los datos en disco, ejecuta las consultas y gestiona usuarios, permisos y transacciones. Funciona como servicio en segundo plano escuchando en el puerto 5432 (arquitectura cliente-servidor). Para hablar con él usamos un cliente: psql (línea de comandos) o pgAdmin (interfaz visual).",
          k: ["Para conectarte: servidor, puerto, usuario, contraseña y base de datos.", "psql = cliente de terminal; pgAdmin = cliente gráfico.", "En una web full stack, el backend es quien habla con la base de datos."],
          c: "frontend (HTML, CSS, JS)\n      ⇅ JSON\nbackend (servidor de aplicaciones)\n      ⇅ SQL\nPostgreSQL :5432",
          tip: "en pgAdmin: Object Explorer (árbol de objetos), Query Tool (donde escribes SQL) y Data Output (resultados).",
          a: [["Object Explorer", "Árbol con servidores, bases de datos, esquemas y tablas."], ["Query Tool", "Editor para escribir y ejecutar SQL."], ["Data Output", "Resultado de la consulta."], ["Messages", "Errores y avisos de PostgreSQL."]],
          at: "Partes de pgAdmin", ah: ["Panel", "Para qué sirve"]
        },
        {
          n: "3.2", t: "La base de datos postgres", m: "2 min", v: 0,
          b: "En PostgreSQL no te conectas «al servidor» sin más: siempre te conectas a una base de datos concreta. La base de datos postgres existe para que siempre haya una a la que conectarse; es un punto neutro desde el que administrar (crear o borrar bases de datos, crear usuarios) sin estar dentro de una de trabajo.",
          k: ["postgres = base de datos de administración; no se borra.", "La Query Tool se abre con clic derecho sobre una base de datos.", "La pestaña muestra base_de_datos/usuario@servidor."],
          c: "Clic derecho en postgres → Query Tool\npostgres/postgres@PostgreSQL 18",
          tip: "fijaos siempre en la pestaña de la Query Tool: indica en qué base de datos se ejecutará lo que escribáis."
        },
        {
          n: "3.3", t: "CREATE y DROP DATABASE", m: "3 min",
          b: "Las bases de datos se crean con CREATE DATABASE y se eliminan con DROP DATABASE. Las dos sentencias se ejecutan desde una Query Tool abierta en otra base de datos (normalmente postgres), porque no puedes borrar la base de datos en la que estás. WITH (FORCE) cierra las conexiones abiertas y fuerza el borrado. Cada base de datos nueva trae un esquema llamado public, una especie de carpeta donde se crean por defecto las tablas.",
          k: ["CREATE DATABASE nombre;", "DROP DATABASE nombre WITH (FORCE);", "Las tablas se crean por defecto en el esquema public."],
          c: "-- desde una Query Tool sobre postgres\nCREATE DATABASE vuelos;\n\nDROP DATABASE pruebas;\nDROP DATABASE ejemplos WITH (FORCE);",
          tip: "después de crear una base de datos, refrescad el Object Explorer (F5) para verla.",
          e: "intentar borrar una base de datos desde una Query Tool abierta sobre ella misma: PostgreSQL no lo permite."
        },
        {
          n: "3.4", t: "CREATE TABLE y tipos de datos", m: "4 min",
          b: "Para crear una tabla abre una Query Tool sobre su base de datos «anfitriona» y usa CREATE TABLE con la lista de columnas y el tipo de cada una, partiendo del modelo relacional. El tipo define qué valores admite la columna y cuánto ocupa.",
          k: ["CREATE TABLE nombre (columna tipo, …);", "La Query Tool debe estar en la base de datos correcta.", "Las fechas se escriben como texto: '2026-09-14'."],
          c: "CREATE TABLE clientes (\n  id_cliente INTEGER,\n  nombre     VARCHAR(100),\n  email      VARCHAR(100)\n);",
          tip: "en el último campo no va coma antes del paréntesis de cierre: es el error de sintaxis más típico.",
          a: [["SMALLINT / INTEGER / BIGINT", "Enteros de 2, 4 y 8 bytes."], ["DECIMAL(t,d)", "Decimal exacto: t dígitos en total, d decimales."], ["VARCHAR(n)", "Texto de hasta n caracteres."], ["CHAR(n)", "Texto de exactamente n caracteres."], ["TEXT", "Texto sin límite."], ["DATE", "Fecha 'AAAA-MM-DD'."], ["TIME", "Hora 'HH:MM'."], ["TIMESTAMP", "Fecha y hora 'AAAA-MM-DD HH:MM:SS'."], ["BOOLEAN", "true o false."]],
          at: "Tipos de datos", ah: ["Tipo", "Uso"]
        },
        {
          n: "3.5", t: "Elegir el tipo adecuado", m: "4 min",
          b: "Elegir bien el tipo es la mitad del ejercicio. Mira qué se va a guardar: si tiene longitud fija, si lleva decimales y cuántos, si puede ser negativo o muy grande, y si se van a hacer cálculos con él. Los teléfonos, códigos postales o DNI no son números aunque tengan cifras: no se suman y pueden empezar por 0.",
          k: ["Longitud fija (DNI, IBAN, código de 3 letras) → CHAR(n).", "Dinero → DECIMAL con 2 decimales; DECIMAL(4,1) = hasta 999,9.", "Cifras enormes (miles de millones) → BIGINT."],
          c: "CREATE TABLE mascotas (\n  nombre           VARCHAR(50),\n  especie          VARCHAR(40),\n  fecha_nacimiento DATE,\n  peso             DECIMAL(4,1),\n  vacunada         BOOLEAN\n);",
          tip: "INTEGER llega a unos 2.100 millones; para reproducciones o movimientos bancarios que lo superen, BIGINT.",
          q: { t: "¿Qué tipo usarías para un código postal como 08001?", o: ["INTEGER", "CHAR(5)", "DECIMAL(5,0)", "SMALLINT"], ok: 1, why: "No se opera con él y puede empezar por 0, que un número perdería. Tiene longitud fija: CHAR(5)." }
        },
        {
          n: "3.6", t: "ALTER TABLE y DROP TABLE", m: "3 min",
          b: "ALTER TABLE cambia la estructura de una tabla que ya existe sin perder sus datos: renombrar la tabla, añadir, renombrar o eliminar columnas. DROP TABLE elimina la tabla entera con todos sus datos.",
          k: ["RENAME TO cambia el nombre de la tabla.", "ADD COLUMN / RENAME COLUMN … TO / DROP COLUMN.", "DROP TABLE nombre; borra estructura y datos."],
          c: "ALTER TABLE alumnos RENAME TO info_alumnos;\nALTER TABLE alumnos ADD COLUMN email VARCHAR(100);\nALTER TABLE alumnos RENAME COLUMN email TO correo_electronico;\nALTER TABLE alumnos DROP COLUMN correo_electronico;\n\nDROP TABLE ejemplo;",
          tip: "DROP no pide confirmación: lo que borra no se recupera."
        }
      ]
    },
    {
      t: "DML y restricciones",
      d: "INSERT, UPDATE, DELETE, CHECK, NOT NULL, UNIQUE, claves y REFERENCES.",
      secciones: [
        {
          n: "4.1", t: "INSERT", m: "3 min",
          b: "INSERT INTO añade filas. Si indicas las columnas, los valores van en ese orden y las columnas que no nombres quedan a NULL (o con su valor por defecto). Si no las indicas, tienes que dar un valor para cada columna en el orden de la tabla. Se pueden insertar varias filas separando los grupos con comas.",
          k: ["INSERT INTO t (col1, col2) VALUES (v1, v2);", "Sin lista de columnas: todos los valores, en orden.", "Varias filas: VALUES (…), (…), (…);"],
          c: "INSERT INTO alumnos (id_alumno, nombre, fecha_nacimiento)\nVALUES (2, 'Óscar', '2002-05-07');\n\nINSERT INTO alumnos VALUES (1, 'Rafael', '2002-01-01');\n\nINSERT INTO alumnos (id_alumno, nombre) VALUES (2, 'Rosa');  -- fecha a NULL\n\nINSERT INTO alumnos VALUES\n  (4, 'Aurora',  '2003-01-01'),\n  (3, 'Rodrigo', '2004-01-01');",
          tip: "sin clave primaria la tabla acepta ids repetidos (fíjate en los dos id 2): por eso existen las restricciones."
        },
        {
          n: "4.2", t: "UPDATE, DELETE y SELECT", m: "3 min",
          b: "UPDATE … SET modifica valores de las filas que cumplen el WHERE. DELETE FROM borra filas. En los dos casos, sin WHERE se afecta a toda la tabla. SELECT muestra el contenido: * para todas las columnas o una lista con las que quieras.",
          k: ["UPDATE t SET col = valor WHERE condición;", "DELETE FROM t WHERE condición;", "SELECT * FROM t; o SELECT col1, col2 FROM t;"],
          c: "UPDATE notas_bbdd SET aprobado = true  WHERE nota >= 5;\nUPDATE notas_bbdd SET aprobado = false WHERE nota < 5;\n\nDELETE FROM alumnos WHERE id_alumno = 4;\nDELETE FROM alumnos;            -- ¡borra todas!\n\nSELECT * FROM notas_bbdd;\nSELECT id_alumno, aprobado FROM notas_bbdd;",
          o: "id_alumno | nota | aprobado\n1         | 7.8  | true\n2         | 3.4  | false",
          tip: "antes de un UPDATE o DELETE, ejecutad un SELECT con el mismo WHERE para ver qué filas vais a tocar.",
          e: "olvidar el WHERE: un DELETE FROM alumnos; vacía la tabla entera."
        },
        {
          n: "4.3", t: "CHECK", m: "3 min",
          b: "Las restricciones se escriben detrás del tipo de cada columna. CHECK obliga a que el valor cumpla una condición, que se escribe con operadores de comparación (>, <, >=, <=, =, <>) y lógicos (AND, OR, NOT). Si un INSERT o UPDATE no la cumple, PostgreSQL lo rechaza con un error.",
          k: ["columna tipo CHECK (condición)", "PostgreSQL le pone nombre: tabla_columna_check.", "Se ve en pgAdmin en Constraints."],
          c: "CREATE TABLE alumnos (\n  id_alumno INTEGER,\n  nota      DECIMAL(3,1) CHECK (nota >= 0 AND nota <= 10),\n  aprobado  BOOLEAN\n);\n\nINSERT INTO alumnos VALUES (1, -7.8, null);",
          o: "ERROR: new row for relation \"alumnos\" violates check constraint \"alumnos_nota_check\"",
          tip: "también podéis escribir CHECK (nota BETWEEN 0 AND 10): es equivalente.",
          q: { t: "¿Qué CHECK limita un descuento a como mucho el 20 %?", o: ["CHECK (descuento < 20)", "CHECK (descuento >= 0 AND descuento <= 20)", "CHECK (descuento = 20)", "CHECK (descuento > 20)"], ok: 1, why: "Hay que permitir de 0 a 20, ambos incluidos." }
        },
        {
          n: "4.4", t: "NOT NULL, UNIQUE y DEFAULT", m: "4 min",
          b: "NOT NULL obliga a rellenar la columna. UNIQUE impide que dos filas tengan el mismo valor (pero admite varios NULL). DEFAULT da un valor cuando el INSERT no lo indica. Se pueden combinar en la misma columna.",
          k: ["NOT NULL → obligatorio.", "UNIQUE → sin repetidos.", "DEFAULT valor → valor si no se indica otro."],
          c: "CREATE TABLE alumnos (\n  id_alumno INTEGER,\n  nombre    VARCHAR(20) NOT NULL UNIQUE,\n  nota      DECIMAL(3,1) CHECK (nota >= 0 AND nota <= 10)\n);\n\nCREATE TABLE empleados (\n  id_empleado INTEGER,\n  nombre      VARCHAR(30),\n  activo      BOOLEAN DEFAULT true\n);\nINSERT INTO empleados VALUES (1, 'Sofía'), (2, 'Alberto');",
          o: "id_empleado | nombre  | activo\n1           | Sofía   | true\n2           | Alberto | true",
          tip: "«obligatorio» = NOT NULL; «no puede haber dos iguales» = UNIQUE; «si no se indica, será…» = DEFAULT.",
          a: [["null value … violates not-null constraint", "Falta un valor obligatorio."], ["duplicate key value violates unique constraint", "Valor repetido en una columna UNIQUE o PK."], ["violates check constraint", "El valor no cumple el CHECK."]],
          at: "Errores que verás", ah: ["Mensaje", "Causa"]
        },
        {
          n: "4.5", t: "CREATE TYPE (enumerados)", m: "3 min",
          b: "Cuando una columna solo puede tomar unos valores concretos (pendiente, entregado…) puedes crear un tipo enumerado con CREATE TYPE … AS ENUM y usarlo como tipo de la columna. Cualquier otro valor se rechaza. El tipo aparece en pgAdmin dentro del esquema, en Types.",
          k: ["CREATE TYPE nombre AS ENUM ('a', 'b', …);", "Se crea antes que la tabla que lo usa.", "Alternativa: VARCHAR con CHECK (col IN (…))."],
          c: "CREATE TYPE estado_pedido AS ENUM ('pendiente', 'entregado');\n\nCREATE TABLE pedidos (\n  id_pedido    INTEGER,\n  fecha_pedido DATE,\n  estado       estado_pedido\n);\n\nINSERT INTO pedidos VALUES (1, '2026-09-01', 'realizado');",
          o: "ERROR: invalid input value for enum estado_pedido: \"realizado\"",
          tip: "en el gimnasio: disciplina (yoga, pilates, crossfit, funcional) y estado de la sesión son candidatos a ENUM."
        },
        {
          n: "4.6", t: "PRIMARY KEY e IDENTITY", m: "4 min",
          b: "PRIMARY KEY marca la clave primaria: no admite repetidos ni NULL. Si quieres que la base de datos genere el número sola, usa GENERATED ALWAYS AS IDENTITY: nadie puede escribirlo a mano y en los INSERT se omite esa columna. Puedes elegir el valor inicial y el incremento.",
          k: ["PRIMARY KEY = UNIQUE + NOT NULL.", "GENERATED ALWAYS AS IDENTITY → número automático.", "(START WITH 1000 INCREMENT BY 1) cambia el arranque."],
          c: "CREATE TABLE lineas_ventas (\n  id_linea INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,\n  cantidad INTEGER NOT NULL,\n  precio   DECIMAL(5,2) NOT NULL\n);\n\nINSERT INTO lineas_ventas (cantidad, precio) VALUES (10, 42.42);\nINSERT INTO lineas_ventas (cantidad, precio) VALUES (5, 100);",
          o: "id_linea | cantidad | precio\n1        | 10       | 42.42\n2        | 5        | 100.00",
          tip: "si un INSERT falla, el número ya se gastó y no se reutiliza (puede quedar 1, 2, 4…). DELETE tampoco reinicia la cuenta; para empezar de nuevo en 1: TRUNCATE lineas_ventas RESTART IDENTITY;",
          e: "incluir la columna IDENTITY en el INSERT: con GENERATED ALWAYS, PostgreSQL da error. Hay que indicar solo las demás columnas."
        },
        {
          n: "4.7", t: "Columnas calculadas: GENERATED ALWAYS AS", m: "3 min",
          b: "Una columna generada calcula su valor a partir de otras columnas de la misma fila, como un total = cantidad × precio. Nadie puede escribirla: se actualiza sola. Desde PostgreSQL 18, si no indicas nada el valor se calcula al leerlo (VIRTUAL); si quieres guardarlo en disco, termina con STORED.",
          k: ["col tipo GENERATED ALWAYS AS (expresión)", "No se incluye en los INSERT.", "STORED la guarda en disco; sin nada, PG 18 la calcula al leer."],
          c: "CREATE TABLE lineas_ventas (\n  id_linea INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,\n  cantidad INTEGER NOT NULL,\n  precio   DECIMAL(5,2) NOT NULL,\n  total    DECIMAL(7,2) GENERATED ALWAYS AS (cantidad * precio)\n);\n\nINSERT INTO lineas_ventas (cantidad, precio) VALUES (10, 42.42);",
          o: "id_linea | cantidad | precio | total\n1        | 10       | 42.42  | 424.20",
          tip: "en el gimnasio, el total de la sesión con descuento: precio - precio * descuento / 100."
        },
        {
          n: "4.8", t: "REFERENCES: claves foráneas", m: "4 min",
          b: "REFERENCES crea la clave foránea: la columna solo admite valores que existan en la PK de la otra tabla. Así se implementa el modelo relacional. En una 1:N la FK va en la tabla del lado N; en una N:N, la tabla intermedia tiene dos FK. pgAdmin dibuja el diagrama de la base de datos con clic derecho → ERD For Database.",
          k: ["col tipo REFERENCES tabla(columna_pk)", "La tabla referenciada se crea (y se llena) antes.", "ERD For Database muestra las tablas y sus relaciones."],
          c: "CREATE TABLE especialidades (\n  id_especialidad INTEGER PRIMARY KEY,\n  nombre          VARCHAR(30) NOT NULL UNIQUE\n);\nCREATE TABLE medicos (\n  id_medico       INTEGER PRIMARY KEY,\n  nombre          VARCHAR(30),\n  id_especialidad INTEGER REFERENCES especialidades(id_especialidad)\n);\n\n-- N:N\nCREATE TABLE matriculas (\n  id_matricula INTEGER PRIMARY KEY,\n  fecha        DATE,\n  id_alumno    INTEGER REFERENCES alumnos(id_alumno),\n  id_curso     INTEGER REFERENCES cursos(id_curso)\n);",
          tip: "el orden importa: primero las tablas sin FK (especialidades, alumnos, cursos) y después las que apuntan a ellas.",
          q: { t: "¿Qué pasa si insertas un médico con id_especialidad = 9 y esa especialidad no existe?", o: ["Se inserta con NULL", "Se crea la especialidad 9", "Da error de clave foránea", "Se inserta sin problema"], ok: 2, why: "REFERENCES solo admite valores que existen en la tabla referenciada." }
        }
      ]
    },
    {
      t: "Integridad referencial",
      d: "Qué impide REFERENCES y ON DELETE / ON UPDATE.",
      secciones: [
        {
          n: "5.1", t: "Qué impide REFERENCES", m: "4 min",
          b: "Si sesiones.id_socio REFERENCES socios(id_socio), la base de datos protege la relación por los dos lados. En la tabla hija (sesiones) no puedes insertar ni cambiar un id_socio que no exista en socios. En la tabla padre (socios) no puedes borrar una fila ni cambiar su PK si alguna sesión la está usando. Sí puedes poner id_socio a NULL (si la columna lo permite) y cambiar columnas que no son la PK, como el nombre.",
          k: ["Hija: no se insertan ni actualizan FK que no existen.", "Padre: no se borra ni se cambia una PK que esté en uso.", "Por defecto el comportamiento es NO ACTION (rechazar)."],
          c: "id_socio INTEGER REFERENCES socios(id_socio)\n\nDELETE FROM socios WHERE id_socio = 1;        -- Rafael tiene sesiones → ERROR\nUPDATE socios SET id_socio = 9 WHERE id_socio = 1;   -- ERROR\nINSERT INTO sesiones VALUES (5, 'Funcional', 7);   -- socio 7 no existe → ERROR\nDELETE FROM socios WHERE id_socio = 4;        -- Diana sin sesiones → OK",
          tip: "probad estos casos uno a uno en pgAdmin: es lo que piden en la entrega (ejemplos de DELETE y UPDATE)."
        },
        {
          n: "5.2", t: "ON DELETE CASCADE y SET NULL", m: "3 min",
          b: "Si no quieres que se bloquee el borrado del padre, puedes decir qué hacer con las filas hijas. ON DELETE CASCADE borra también todas las filas hijas. ON DELETE SET NULL las conserva, pero pone su FK a NULL.",
          k: ["ON DELETE CASCADE → al borrar el padre, se borran los hijos.", "ON DELETE SET NULL → los hijos se quedan sin padre (NULL).", "Sin nada → no se puede borrar mientras tenga hijos."],
          c: "-- borrar a Rafael elimina todas sus sesiones\nid_socio INTEGER REFERENCES socios(id_socio) ON DELETE CASCADE\n\n-- borrar a Rafael deja sus sesiones con id_socio NULL\nid_socio INTEGER REFERENCES socios(id_socio) ON DELETE SET NULL",
          tip: "SET NULL no tiene sentido si la FK es NOT NULL: el borrado fallaría.",
          e: "usar CASCADE sin pensar: borrar un cliente borraría todas sus facturas, que normalmente hay que conservar."
        },
        {
          n: "5.3", t: "ON UPDATE CASCADE y SET NULL", m: "3 min",
          b: "Lo mismo para cuando cambia la PK del padre. ON UPDATE CASCADE copia el nuevo valor en todas las filas hijas, así que siguen relacionadas. ON UPDATE SET NULL pone la FK de las hijas a NULL. Se pueden combinar las dos reglas en la misma columna.",
          k: ["ON UPDATE CASCADE → los hijos siguen al padre con su nuevo id.", "ON UPDATE SET NULL → los hijos pierden la relación.", "Se combinan: ON DELETE … ON UPDATE …"],
          c: "id_socio INTEGER REFERENCES socios(id_socio)\n  ON DELETE CASCADE\n  ON UPDATE CASCADE",
          tip: "si cambias el id de Rafael de 1 a 9 con ON UPDATE CASCADE, sus sesiones pasan a tener id_socio = 9.",
          a: [["(nada) / NO ACTION", "Rechaza el cambio si hay hijos."], ["ON DELETE CASCADE", "Borra los hijos."], ["ON DELETE SET NULL", "Pone a NULL la FK de los hijos."], ["ON UPDATE CASCADE", "Actualiza la FK de los hijos con el nuevo valor."], ["ON UPDATE SET NULL", "Pone a NULL la FK de los hijos."]],
          at: "Reglas de integridad", ah: ["Regla", "Qué hace con las filas hijas"]
        },
        {
          n: "5.4", t: "Traducir un enunciado a reglas", m: "4 min",
          b: "Los enunciados describen las reglas con frases. «No puede eliminarse mientras tenga…» o «no puede cambiarse…» → no pongas nada (comportamiento por defecto). «Se queda sin…» → SET NULL. «Se eliminan con él» → ON DELETE CASCADE. «Deben seguir siendo suyas» al cambiar el id → ON UPDATE CASCADE. «Obligatoriamente» o «no puede existir sin…» → NOT NULL en la FK.",
          k: ["Bloquear → sin cláusula.", "Quedarse sin → SET NULL.", "Desaparecer con él / seguirle → CASCADE."],
          c: "-- Escuela de fútbol (pistas)\n-- jugador → equipo:   obligatorio, bloquea borrar/cambiar\n-- jugador → taquilla: opcional; retirar o renumerar → sin taquilla\n-- sancion → jugador:  obligatorio; baja → se borran; cambio de ficha → le siguen",
          tip: "haced una tabla con cada FK y las dos preguntas: ¿qué pasa si borro el padre? ¿y si cambio su id?"
        }
      ]
    },
    {
      t: "Consultas sobre una tabla",
      d: "SELECT, WHERE, ORDER BY, LIMIT, agregados, GROUP BY y funciones.",
      secciones: [
        {
          n: "6.1", t: "SELECT y FROM", m: "3 min",
          b: "El propósito de una base de datos es responder preguntas, y todo lo anterior sirve para prepararla. SELECT es la sentencia para preguntar: dices qué quieres conocer (SELECT) y de qué tabla (FROM). Responde con los datos que hay en ese momento y su respuesta no se guarda en ningún sitio.",
          k: ["SELECT ¿qué quiero conocer? FROM ¿de qué tabla?", "* trae todas las columnas.", "Se pueden calcular columnas y renombrarlas con AS."],
          c: "SELECT * FROM libros;\nSELECT titulo FROM libros;\nSELECT titulo, stock FROM libros;\n\n-- columna calculada con alias\nSELECT titulo, (precio_venta - precio_compra) AS margen\nFROM libros;\n\n-- sin repetidos\nSELECT DISTINCT autor FROM libros;",
          tip: "convertid cada pregunta en castellano en las dos partes: «¿cuál es el margen de cada libro?» → SELECT título y margen FROM libros."
        },
        {
          n: "6.2", t: "Funciones de agregado", m: "3 min",
          b: "Las funciones de agregado resumen todas las filas en un solo valor: SUM suma, COUNT cuenta, AVG hace la media, MIN y MAX dan el mínimo y el máximo.",
          k: ["SUM(stock) = ejemplares totales.", "COUNT(id_libro) = número de títulos.", "AVG, MIN y MAX sobre precio_venta."],
          c: "SELECT SUM(stock) FROM libros;          -- ¿cuántos libros hay?\nSELECT COUNT(id_libro) FROM libros;     -- ¿cuántos títulos?\nSELECT AVG(precio_venta) FROM libros;   -- precio medio\nSELECT MIN(precio_venta) FROM libros;   -- el más barato\nSELECT MAX(precio_venta) FROM libros;   -- el más caro",
          tip: "fijaos en la diferencia: SUM(stock) cuenta ejemplares; COUNT cuenta filas (títulos).",
          q: { t: "¿Cuántos títulos distintos hay en la tabla libros?", o: ["SUM(stock)", "COUNT(id_libro)", "MAX(id_libro)", "AVG(stock)"], ok: 1, why: "Cada fila es un título, así que hay que contar filas." }
        },
        {
          n: "6.3", t: "ORDER BY y LIMIT", m: "3 min",
          b: "ORDER BY ordena el resultado: ascendente por defecto (ASC) o descendente con DESC. LIMIT se queda con las primeras filas. Juntos sirven para los «top»: los 5 más caros, los 3 mejor pagados…",
          k: ["ORDER BY col → de menor a mayor.", "ORDER BY col DESC → de mayor a menor.", "LIMIT n → solo n filas (siempre después de ORDER BY)."],
          c: "SELECT titulo, precio_venta\nFROM libros\nORDER BY precio_venta DESC;\n\n-- autores de los 5 libros más caros\nSELECT autor\nFROM libros\nORDER BY precio_venta DESC\nLIMIT 5;",
          tip: "para ordenar por dos criterios: ORDER BY departamento, salario DESC (A-Z y, dentro de cada uno, de mayor a menor)."
        },
        {
          n: "6.4", t: "WHERE: filtrar filas", m: "3 min",
          b: "WHERE se queda solo con las filas que cumplen una condición. Se usan los operadores de comparación y BETWEEN para rangos (incluye los dos extremos).",
          k: ["WHERE ¿de qué filas?", "=, <>, <, >, <=, >=", "BETWEEN 20 AND 30 incluye 20 y 30."],
          c: "SELECT titulo, precio_venta\nFROM libros\nWHERE precio_venta > 42;\n\nSELECT titulo, precio_venta\nFROM libros\nWHERE precio_venta BETWEEN 20 AND 30;",
          tip: "«ambos incluidos» en un enunciado es la pista para usar BETWEEN."
        },
        {
          n: "6.5", t: "LIKE, IS NULL, IN, AND y OR", m: "4 min",
          b: "LIKE busca patrones en textos: % es cualquier cantidad de caracteres y _ es exactamente uno. IS NULL / IS NOT NULL detectan datos vacíos. IN compara con una lista de valores. AND exige que se cumplan todas las condiciones y OR al menos una.",
          k: ["LIKE '%verano%' contiene «verano»; LIKE 'G%' empieza por G.", "LIKE '_____' = exactamente 5 caracteres.", "IN ('a', 'b') equivale a = 'a' OR = 'b'."],
          c: "SELECT titulo FROM libros WHERE titulo LIKE '%verano%';\nSELECT titulo FROM libros WHERE titulo LIKE '_____';\n\nSELECT nombre FROM clientes WHERE telefono IS NULL;\n\nSELECT titulo, autor FROM libros\nWHERE autor IN ('Antonio Gala', 'Javier Cercas');\n\nSELECT titulo FROM libros\nWHERE precio_venta > 70 AND autor = 'Antonio Gala';",
          tip: "los textos van entre comillas simples rectas ('…'). Si copiáis de un PDF y salen comillas curvas (‘…’), PostgreSQL da error.",
          e: "escribir WHERE telefono = NULL: nunca devuelve filas. Hay que usar IS NULL."
        },
        {
          n: "6.6", t: "Fechas, booleanos y subconsultas", m: "4 min",
          b: "Las fechas se comparan como texto 'AAAA-MM-DD' y current_date es la fecha de hoy. Las columnas BOOLEAN se comparan con TRUE o FALSE. Para preguntas como «el libro más caro» necesitas primero calcular el máximo: se hace con una subconsulta entre paréntesis dentro del WHERE.",
          k: ["WHERE fecha_venta = current_date → hoy.", "Entre dos fechas: >= y <= (o BETWEEN).", "WHERE col = (SELECT MAX(col) FROM t) → la fila con el máximo."],
          c: "SELECT COUNT(id_venta) FROM ventas\nWHERE fecha_venta = current_date;\n\nSELECT COUNT(id_venta) FROM ventas\nWHERE fecha_venta >= '2026-04-01' AND fecha_venta <= '2026-04-08';\n\nSELECT nombre FROM clientes WHERE activo = FALSE;\n\n-- autor del libro más caro\nSELECT autor FROM libros\nWHERE precio_venta = (SELECT MAX(precio_venta) FROM libros);",
          tip: "también sirve para «empleados que cobran más que la media»: WHERE salario > (SELECT AVG(salario) FROM empleados)."
        },
        {
          n: "6.7", t: "GROUP BY y HAVING", m: "4 min",
          b: "GROUP BY agrupa las filas que comparten un valor y calcula los agregados por cada grupo (precio medio de cada autor, empleados de cada departamento). HAVING filtra grupos, igual que WHERE filtra filas. Toda columna del SELECT que no sea un agregado tiene que estar en el GROUP BY.",
          k: ["GROUP BY ¿cómo agrupo las filas?", "HAVING ¿con qué grupos me quedo? (admite agregados).", "WHERE filtra antes de agrupar; HAVING, después."],
          c: "SELECT autor, AVG(precio_venta)\nFROM libros\nGROUP BY autor;\n\n-- departamentos cuya suma de salarios supera 200.000\nSELECT departamento, SUM(salario)\nFROM empleados\nGROUP BY departamento\nHAVING SUM(salario) > 200000;",
          tip: "HAVING autor = 'Antonio Gala' funciona, pero filtrar un autor concreto es más claro y rápido con WHERE antes del GROUP BY. Guardad HAVING para condiciones con agregados.",
          q: { t: "¿Dónde va «ciudades con 5 o más empleados»?", o: ["WHERE COUNT(*) >= 5", "HAVING COUNT(*) >= 5", "ORDER BY COUNT(*) >= 5", "LIMIT 5"], ok: 1, why: "Es una condición sobre un agregado de cada grupo, así que va en HAVING." }
        },
        {
          n: "6.8", t: "Funciones útiles", m: "4 min",
          b: "PostgreSQL trae funciones para redondear, trabajar con fechas y unir textos. Son las que necesitarás en la práctica de la tabla empleados: salario redondeado, año de alta, antigüedad y nombre completo.",
          k: ["ROUND(n, 2) redondea a 2 decimales.", "EXTRACT(YEAR FROM fecha) saca el año; AGE(fecha) el tiempo transcurrido.", "CONCAT(a, ' ', b) une textos (los NULL cuentan como vacío)."],
          c: "SELECT nombre, ROUND(salario / 12, 2) AS salario_mensual FROM empleados;\nSELECT CONCAT(nombre, ' ', apellidos) AS nombre_completo FROM empleados;\nSELECT nombre, EXTRACT(YEAR FROM fecha_alta) AS anio_alta FROM empleados;\nSELECT nombre FROM empleados\nWHERE AGE(fecha_alta) > INTERVAL '5 years';",
          tip: "CURRENT_DATE va sin paréntesis; NOW() con ellos, y además incluye la hora.",
          a: [["ROUND(n, d)", "ROUND(3.14159, 2) → 3.14"], ["CURRENT_DATE", "Fecha de hoy, sin hora."], ["NOW()", "Fecha y hora actuales con zona horaria."], ["EXTRACT(YEAR FROM f)", "Una parte de la fecha: YEAR, MONTH, DAY, HOUR…"], ["AGE(f)", "Tiempo desde f hasta hoy: 36 years 5 mons 26 days."], ["CONCAT(a, b)", "CONCAT('Ana', ' ', 'Ruiz') → Ana Ruiz"]],
          at: "Funciones", ah: ["Función", "Qué hace"]
        },
        {
          n: "6.9", t: "El orden de las cláusulas", m: "2 min",
          b: "Las cláusulas de un SELECT siempre se escriben en el mismo orden. No todas son obligatorias, pero las que uses tienen que ir en su sitio.",
          k: ["SELECT → FROM → WHERE → GROUP BY → HAVING → ORDER BY → LIMIT.", "Solo SELECT es obligatorio (FROM casi siempre).", "Cada cláusula responde a una pregunta."],
          c: "SELECT   ciudad, AVG(salario) AS media   -- ¿qué quiero conocer?\nFROM     empleados                       -- ¿de qué tabla?\nWHERE    teletrabaja = true              -- ¿de qué filas?\nGROUP BY ciudad                          -- ¿cómo agrupo?\nHAVING   COUNT(*) >= 2                   -- ¿con qué grupos me quedo?\nORDER BY media DESC                      -- ¿en qué orden?\nLIMIT    3;                              -- ¿cuántos resultados?",
          tip: "si os sale un error de sintaxis «near …», revisad primero que las cláusulas estén en este orden."
        }
      ]
    },
    {
      t: "Consultas sobre varias tablas",
      d: "JOIN … ON, alias, filtros y JOIN de tres tablas.",
      secciones: [
        {
          n: "7.1", t: "La cláusula JOIN", m: "4 min",
          b: "Cuando la respuesta está repartida en varias tablas, JOIN las une. Con ON indicas qué columnas tienen que coincidir: normalmente la FK de una tabla con la PK de la otra. Si hay columnas con el mismo nombre en las dos tablas, se escribe tabla.columna para saber de cuál hablas.",
          k: ["FROM a JOIN b ON a.fk = b.pk", "tabla.columna evita ambigüedades (dos columnas nombre).", "JOIN solo devuelve filas que tienen pareja en las dos tablas."],
          c: "-- ¿Cuáles son las especialidades de los médicos?\nSELECT medicos.nombre AS medico, especialidades.nombre AS especialidad\nFROM medicos\nJOIN especialidades\n  ON medicos.id_especialidad = especialidades.id_especialidad;",
          o: "medico   | especialidad\nFernando | Neurología\nSofía    | Neurología\nArturo   | Cardiología\nLaura    | Cardiología\nRafael   | Psiquiatría\nRosa     | Oftalmología",
          tip: "el ON sale directamente del modelo relacional: une la FK con la PK a la que apunta.",
          e: "olvidar el ON: se combinan todas las filas de una tabla con todas las de la otra."
        },
        {
          n: "7.2", t: "Alias de tabla", m: "2 min",
          b: "Para no escribir el nombre completo de la tabla cada vez, puedes darle un alias corto en el FROM y en el JOIN, y usarlo en todo el SELECT. El resultado es el mismo.",
          k: ["FROM medicos m JOIN especialidades e", "Luego m.nombre, e.nombre…", "Alias de columna (AS) ≠ alias de tabla."],
          c: "SELECT m.nombre AS medico, e.nombre AS especialidad\nFROM medicos m\nJOIN especialidades e ON m.id_especialidad = e.id_especialidad;",
          tip: "usad la inicial de la tabla como alias: es lo más legible."
        },
        {
          n: "7.3", t: "JOIN con filtros", m: "3 min",
          b: "Después del JOIN puedes añadir WHERE, GROUP BY, ORDER BY… como en una consulta normal. El filtro puede usar columnas de cualquiera de las tablas unidas.",
          k: ["El WHERE va después de todos los JOIN.", "Puedes filtrar por columnas de cualquier tabla.", "Sirve igual con GROUP BY y ORDER BY."],
          c: "SELECT m.nombre, e.nombre\nFROM medicos m\nJOIN especialidades e ON m.id_especialidad = e.id_especialidad\nWHERE m.nombre LIKE 'R%';",
          o: "nombre | nombre\nRafael | Psiquiatría\nRosa   | Oftalmología",
          tip: "si dos columnas del resultado se llaman igual, ponedles alias con AS para que se distingan."
        },
        {
          n: "7.4", t: "JOIN sobre tres tablas", m: "4 min",
          b: "Puedes encadenar tantos JOIN como necesites: cada uno añade una tabla con su ON. Ejemplo: los jugadores tienen la FK de su equipo y de su taquilla, así que para saber dónde están las taquillas de los jugadores de un equipo hay que unir las tres tablas.",
          k: ["Un JOIN … ON por cada tabla que añades.", "Las tablas se unen por las FK del modelo.", "El WHERE va al final, después del último JOIN."],
          c: "-- ¿Dónde se ubican las taquillas de los jugadores del Real Madrid?\nSELECT jugadores.nombre, equipos.nombre, taquillas.ubicacion\nFROM jugadores\nJOIN equipos   ON jugadores.id_equipo   = equipos.id_equipo\nJOIN taquillas ON jugadores.id_taquilla = taquillas.id_taquilla\nWHERE equipos.nombre = 'Real Madrid';",
          o: "nombre | nombre      | ubicacion\nPepe   | Real Madrid | planta 3\nLuis   | Real Madrid | pasillo B",
          tip: "con el diagrama ERD delante, seguid las flechas de tabla en tabla: cada flecha es un JOIN."
        },
        {
          n: "7.5", t: "JOIN y GROUP BY", m: "4 min",
          b: "Muchas preguntas mezclan varias tablas con agregados: número de platos de cada restaurante, pedidos de cada cliente, unidades vendidas de cada plato. Primero se unen las tablas con JOIN y después se agrupa por la columna que define cada grupo.",
          k: ["Primero JOIN, luego GROUP BY.", "Agrupa por el nombre (o id) de lo que cuentas «de cada».", "ORDER BY el agregado para ordenar de más a menos."],
          c: "-- Número de platos que ofrece cada restaurante\nSELECT r.nombre, COUNT(p.id) AS num_platos\nFROM restaurantes r\nJOIN platos p ON p.restaurante_id = r.id\nGROUP BY r.nombre;\n\n-- Pedidos de cada cliente, de más a menos\nSELECT c.nombre, COUNT(pe.id) AS pedidos\nFROM clientes c\nJOIN pedidos pe ON pe.cliente_id = c.id\nGROUP BY c.nombre\nORDER BY pedidos DESC;",
          tip: "«de cada X» en el enunciado → GROUP BY X.",
          q: { t: "Para «unidades vendidas de cada plato», ¿qué tablas necesitas como mínimo?", o: ["Solo platos", "platos y lineas_pedido", "platos y restaurantes", "pedidos y clientes"], ok: 1, why: "Las cantidades están en lineas_pedido y el nombre del plato en platos." }
        }
      ]
    }
  ],
  chuleta: [
    ["Entidad / atributo / relación", "Rectángulo / óvalo (PK subrayada) / rombo con un verbo.", "", "Diseño"],
    ["1:N → FK en el lado N", "La PK del lado 1 se copia como clave foránea en la tabla del lado N.", "pedidos.id_cliente → clientes.id_cliente", "Diseño"],
    ["N:N → tabla intermedia", "Tabla nueva con las dos FK y los atributos de la relación.", "matriculas (id_matricula, dni, codigo, fecha, nota)", "Diseño"],
    ["CREATE DATABASE / DROP DATABASE", "Desde una Query Tool en otra base de datos (postgres).", "DROP DATABASE pruebas WITH (FORCE);", "DDL"],
    ["CREATE TABLE", "Crear una tabla con columnas y tipos.", "CREATE TABLE clientes (\n  id_cliente INTEGER PRIMARY KEY,\n  nombre VARCHAR(100) NOT NULL\n);", "DDL"],
    ["ALTER TABLE", "Renombrar tabla o columnas, añadir o quitar columnas.", "ALTER TABLE alumnos ADD COLUMN email VARCHAR(100);", "DDL"],
    ["DROP TABLE", "Eliminar una tabla y sus datos.", "DROP TABLE ejemplo;", "DDL"],
    ["INSERT INTO", "Añadir filas.", "INSERT INTO alumnos (nombre) VALUES ('Rosa'), ('Óscar');", "DML"],
    ["UPDATE … SET … WHERE", "Modificar filas. Sin WHERE cambia todas.", "UPDATE notas SET aprobado = true WHERE nota >= 5;", "DML"],
    ["DELETE FROM … WHERE", "Borrar filas. Sin WHERE borra todas.", "DELETE FROM alumnos WHERE id_alumno = 4;", "DML"],
    ["TRUNCATE … RESTART IDENTITY", "Vaciar la tabla y reiniciar el contador IDENTITY.", "TRUNCATE lineas_ventas RESTART IDENTITY;", "DML"],
    ["CHECK (condición)", "El valor debe cumplir la condición.", "nota DECIMAL(3,1) CHECK (nota >= 0 AND nota <= 10)", "Restricciones"],
    ["NOT NULL / UNIQUE / DEFAULT", "Obligatorio / sin repetidos / valor por defecto.", "activo BOOLEAN DEFAULT true", "Restricciones"],
    ["CREATE TYPE … AS ENUM", "Tipo con una lista cerrada de valores.", "CREATE TYPE estado AS ENUM ('pendiente', 'entregado');", "Restricciones"],
    ["GENERATED ALWAYS AS IDENTITY PRIMARY KEY", "Clave primaria numérica automática.", "id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY", "Restricciones"],
    ["GENERATED ALWAYS AS (expr)", "Columna calculada a partir de otras.", "total DECIMAL(7,2) GENERATED ALWAYS AS (cantidad * precio)", "Restricciones"],
    ["REFERENCES tabla(pk)", "Clave foránea: el valor debe existir en la otra tabla.", "id_socio INTEGER REFERENCES socios(id_socio)", "Integridad"],
    ["ON DELETE CASCADE / SET NULL", "Al borrar el padre: borrar los hijos / dejarlos a NULL.", "REFERENCES socios(id_socio) ON DELETE CASCADE", "Integridad"],
    ["ON UPDATE CASCADE / SET NULL", "Al cambiar la PK del padre: actualizar los hijos / dejarlos a NULL.", "REFERENCES socios(id_socio) ON UPDATE CASCADE", "Integridad"],
    ["SELECT … FROM", "Qué quiero conocer y de qué tabla.", "SELECT titulo, stock FROM libros;", "Consultas"],
    ["DISTINCT / AS", "Quitar repetidos / poner alias.", "SELECT DISTINCT autor FROM libros;", "Consultas"],
    ["WHERE", "Filtrar filas: =, <>, <, >, BETWEEN, LIKE, IN, IS NULL, AND, OR.", "WHERE precio_venta BETWEEN 20 AND 30", "Consultas"],
    ["LIKE '%texto%' / '_'", "% = cualquier texto; _ = un carácter.", "WHERE titulo LIKE '%verano%'", "Consultas"],
    ["ORDER BY … DESC / LIMIT n", "Ordenar y quedarse con las primeras n filas.", "ORDER BY precio_venta DESC LIMIT 5", "Consultas"],
    ["COUNT / SUM / AVG / MIN / MAX", "Funciones de agregado.", "SELECT AVG(precio_venta) FROM libros;", "Consultas"],
    ["GROUP BY / HAVING", "Agrupar y filtrar grupos.", "GROUP BY autor HAVING COUNT(*) >= 2", "Consultas"],
    ["ROUND / EXTRACT / AGE / CONCAT", "Redondear, partes de fecha, antigüedad, unir textos.", "EXTRACT(YEAR FROM fecha_alta)", "Consultas"],
    ["JOIN … ON", "Unir tablas por FK = PK.", "FROM medicos m JOIN especialidades e ON m.id_especialidad = e.id_especialidad", "Varias tablas"]
  ],
  retos: [
    { t: "Un alumno se matricula en varios cursos y un curso tiene varios alumnos. ¿Cómo queda en el modelo relacional?", o: ["FK id_curso en alumnos", "FK dni en cursos", "Una tabla matriculas con las dos FK", "Una sola tabla con todo"], ok: 2, why: "Las relaciones N:N se convierten en una tabla intermedia con las claves de las dos entidades." },
    { t: "¿Desde dónde se ejecuta DROP DATABASE tienda?", o: ["Desde una Query Tool sobre tienda", "Desde una Query Tool sobre otra base de datos, como postgres", "Desde Data Output", "No se puede borrar"], ok: 1, why: "No puedes borrar la base de datos a la que estás conectado." },
    { t: "¿Qué tipo usarías para un IBAN español (siempre 24 caracteres)?", o: ["BIGINT", "VARCHAR(100)", "CHAR(24)", "TEXT"], ok: 2, why: "Tiene longitud fija y lleva letras: CHAR(24)." },
    { t: "Una columna id con GENERATED ALWAYS AS IDENTITY. ¿Cómo haces el INSERT?", o: ["Indicando el id a mano", "Listando solo las demás columnas", "Poniendo NULL en el id", "Con UPDATE"], ok: 1, why: "La base de datos genera el id y no deja escribirlo, así que se omite." },
    { t: "Borras un socio que tiene sesiones y la FK no tiene ON DELETE. ¿Qué pasa?", o: ["Se borran sus sesiones", "Las sesiones quedan con NULL", "Da error y no se borra", "Se borra solo el socio"], ok: 2, why: "Por defecto la integridad referencial impide borrar un padre con hijos." },
    { t: "«Si un jugador se da de baja, sus sanciones se eliminan con él.» ¿Qué regla pones?", o: ["ON DELETE SET NULL", "ON DELETE CASCADE", "ON UPDATE CASCADE", "Ninguna"], ok: 1, why: "Borrar el padre debe borrar los hijos: ON DELETE CASCADE." },
    { t: "¿Qué devuelve WHERE titulo LIKE '_____'?", o: ["Títulos que contienen un guion bajo", "Títulos de exactamente 5 caracteres", "Títulos vacíos", "Todos los títulos"], ok: 1, why: "Cada _ representa exactamente un carácter." },
    { t: "¿Cuál es el orden correcto?", o: ["SELECT, WHERE, FROM, ORDER BY", "SELECT, FROM, GROUP BY, WHERE", "SELECT, FROM, WHERE, GROUP BY, HAVING, ORDER BY, LIMIT", "FROM, SELECT, LIMIT, ORDER BY"], ok: 2, why: "Es el orden fijo de las cláusulas de un SELECT." },
    { t: "¿Qué une el ON de un JOIN entre medicos y especialidades?", o: ["medicos.nombre = especialidades.nombre", "medicos.id_especialidad = especialidades.id_especialidad", "medicos.id_medico = especialidades.id_especialidad", "No necesita ON"], ok: 1, why: "Se une la FK de medicos con la PK de especialidades." }
  ]
};
