window.LECCIONES = window.LECCIONES || {};
LECCIONES["sql"] = {
 "lang": "sql",
 "capitulos": [
  {
   "t": "SELECT y WHERE",
   "d": "Leer columnas y filtrar filas.",
   "secciones": [
    {
     "n": "1.1",
     "t": "Bases de datos relacionales",
     "m": "3 min",
     "b": "Una base de datos relacional guarda la información en tablas con filas (registros) y columnas (campos). Cada tabla trata un tema y se relaciona con otras mediante claves. SQL es el lenguaje estándar para consultarlas y modificarlas en sistemas como PostgreSQL, MySQL, SQL Server u Oracle.",
     "k": [
      "Tabla = filas + columnas; cada columna tiene un tipo.",
      "SQL se divide en DDL (estructura), DML (datos), DQL (consultas) y DCL (permisos).",
      "Las sentencias terminan en punto y coma."
     ],
     "c": "-- DDL: CREATE, ALTER, DROP\n-- DML: INSERT, UPDATE, DELETE\n-- DQL: SELECT\n-- DCL: GRANT, REVOKE",
     "tip": "aprendeos estas cuatro familias: suelen preguntarlas en el examen."
    },
    {
     "n": "1.2",
     "t": "SELECT",
     "m": "3 min",
     "b": "SELECT lee datos. Indicas las columnas y la tabla con FROM. El asterisco trae todas las columnas, pero en código real conviene pedir solo las necesarias: es más rápido y no se rompe si la tabla cambia.",
     "k": [
      "SELECT col1, col2 FROM tabla;",
      "* trae todas las columnas.",
      "SQL no distingue mayúsculas en las palabras clave."
     ],
     "c": "SELECT nombre, nota\nFROM alumnos;",
     "tip": "escribid las palabras clave en mayúsculas y los nombres en minúsculas: se lee mejor."
    },
    {
     "n": "1.3",
     "t": "WHERE y operadores",
     "m": "4 min",
     "b": "WHERE filtra las filas que cumplen una condición. Se usan operadores de comparación (=, <>, <, >, <=, >=) y lógicos (AND, OR, NOT). AND tiene prioridad sobre OR, así que conviene usar paréntesis.",
     "k": [
      "<> (o !=) significa distinto.",
      "AND se evalúa antes que OR.",
      "Los textos van entre comillas simples."
     ],
     "c": "SELECT nombre, nota\nFROM alumnos\nWHERE (curso = 'DAW1' OR curso = 'DAW2')\n  AND nota >= 5;",
     "tip": "sin paréntesis, esa consulta devolvería todo DAW1 aunque esté suspenso.",
     "a": [
      [
       "=",
       "Igual."
      ],
      [
       "<> o !=",
       "Distinto."
      ],
      [
       "< > <= >=",
       "Menor, mayor, menor o igual, mayor o igual."
      ],
      [
       "AND",
       "Se cumplen las dos condiciones."
      ],
      [
       "OR",
       "Se cumple al menos una."
      ],
      [
       "NOT",
       "Niega la condición."
      ]
     ],
     "at": "Operadores de WHERE",
     "ah": [
      "Operador",
      "Significado"
     ]
    },
    {
     "n": "1.4",
     "t": "LIKE, IN, BETWEEN y NULL",
     "m": "4 min",
     "b": "LIKE busca patrones (% = cualquier texto, _ = un carácter). IN compara con una lista, BETWEEN con un rango cerrado, e IS NULL detecta valores vacíos. NULL significa «desconocido» y nunca es igual a nada, ni siquiera a otro NULL.",
     "k": [
      "nombre LIKE 'A%' empieza por A; '%ez' acaba en ez.",
      "BETWEEN 5 AND 9 incluye 5 y 9.",
      "Usa IS NULL / IS NOT NULL, nunca = NULL."
     ],
     "c": "SELECT * FROM alumnos\nWHERE nombre LIKE 'M%'\n  AND curso IN ('DAW1', 'DAW2')\n  AND nota BETWEEN 5 AND 9\n  AND email IS NOT NULL;",
     "tip": "en PostgreSQL, ILIKE busca sin distinguir mayúsculas; en MySQL, LIKE ya lo hace por defecto.",
     "e": "escribir WHERE email = NULL: nunca devuelve filas, porque NULL no es igual a nada. Hay que usar IS NULL.",
     "q": {
      "t": "¿Qué condición encuentra los alumnos sin correo?",
      "o": [
       "email = NULL",
       "email IS NULL",
       "email = ''",
       "NOT email"
      ],
      "ok": 1,
      "why": "NULL se comprueba con IS NULL o IS NOT NULL."
     }
    }
   ]
  },
  {
   "t": "ORDER BY y LIMIT",
   "d": "Ordenar, limitar y transformar resultados.",
   "secciones": [
    {
     "n": "2.1",
     "t": "ORDER BY",
     "m": "3 min",
     "b": "ORDER BY ordena por una o varias columnas, ascendente (ASC, por defecto) o descendente (DESC). Sin ORDER BY el orden no está garantizado. En PostgreSQL puedes decidir dónde van los NULL con NULLS FIRST o NULLS LAST.",
     "k": [
      "ORDER BY curso, nota DESC ordena por curso y luego por nota.",
      "Se puede ordenar por un alias o una expresión.",
      "NULLS LAST pone los vacíos al final."
     ],
     "c": "SELECT nombre, curso, nota\nFROM alumnos\nORDER BY curso ASC, nota DESC NULLS LAST;",
     "tip": "si el resultado tiene que salir en un orden, pedidlo siempre explícitamente."
    },
    {
     "n": "2.2",
     "t": "LIMIT, OFFSET y DISTINCT",
     "m": "3 min",
     "b": "LIMIT limita las filas y OFFSET salta las primeras: juntos sirven para paginar. DISTINCT elimina filas repetidas del resultado.",
     "k": [
      "LIMIT 10 OFFSET 20 = página 3 de 10 en 10.",
      "DISTINCT se aplica a la combinación de columnas.",
      "Usa LIMIT siempre con ORDER BY."
     ],
     "c": "SELECT DISTINCT curso FROM alumnos;\n\nSELECT nombre, nota FROM alumnos\nORDER BY nota DESC\nLIMIT 3;",
     "tip": "en SQL Server se usa SELECT TOP 3 en lugar de LIMIT."
    },
    {
     "n": "2.3",
     "t": "Alias y expresiones",
     "m": "3 min",
     "b": "AS da un nombre a una columna calculada o a una tabla. Puedes hacer operaciones aritméticas, concatenar textos con || y redondear con ROUND.",
     "k": [
      "precio * 1.21 AS con_iva",
      "nombre || ' ' || apellidos concatena (PostgreSQL).",
      "Alias de tabla: FROM alumnos a."
     ],
     "c": "SELECT nombre || ' ' || apellidos AS alumno,\n       ROUND(nota * 10) AS nota_100\nFROM alumnos a;",
     "tip": "en MySQL se concatena con CONCAT(nombre, ' ', apellidos)."
    },
    {
     "n": "2.4",
     "t": "Funciones de texto",
     "m": "4 min",
     "b": "SQL tiene funciones para manipular textos: pasar a mayúsculas o minúsculas, medir la longitud, recortar espacios, extraer partes o reemplazar caracteres.",
     "k": [
      "UPPER, LOWER, LENGTH, TRIM.",
      "SUBSTRING(texto FROM 1 FOR 3) extrae.",
      "REPLACE(texto, 'a', 'b') sustituye."
     ],
     "c": "SELECT UPPER(nombre) AS mayus,\n       LENGTH(nombre) AS letras,\n       SUBSTRING(email FROM POSITION('@' IN email) + 1) AS dominio\nFROM alumnos;",
     "tip": "TRIM evita errores al comparar textos que llegan con espacios de un formulario.",
     "a": [
      [
       "UPPER(t) / LOWER(t)",
       "Mayúsculas / minúsculas."
      ],
      [
       "LENGTH(t)",
       "Número de caracteres."
      ],
      [
       "TRIM(t)",
       "Quita espacios de los extremos."
      ],
      [
       "SUBSTRING(t FROM i FOR n)",
       "Extrae n caracteres desde i."
      ],
      [
       "REPLACE(t, a, b)",
       "Sustituye a por b."
      ],
      [
       "CONCAT(a, b) o a || b",
       "Une textos."
      ],
      [
       "POSITION(x IN t)",
       "Posición de x dentro de t."
      ]
     ],
     "at": "Funciones de texto",
     "ah": [
      "Función",
      "Qué hace"
     ]
    },
    {
     "n": "2.5",
     "t": "Funciones de fecha",
     "m": "4 min",
     "b": "Las fechas se guardan con tipos como DATE, TIME o TIMESTAMP. Puedes obtener la fecha actual, extraer partes, sumar intervalos y calcular diferencias.",
     "k": [
      "CURRENT_DATE y NOW() dan la fecha y hora actuales.",
      "EXTRACT(YEAR FROM fecha) saca el año.",
      "fecha + INTERVAL '7 days' suma una semana."
     ],
     "c": "SELECT id, fecha_pedido,\n       EXTRACT(MONTH FROM fecha_pedido) AS mes,\n       fecha_pedido + INTERVAL '3 days' AS entrega_estimada\nFROM pedidos\nWHERE fecha_pedido >= CURRENT_DATE - INTERVAL '30 days';",
     "tip": "en MySQL: DATE_ADD(fecha, INTERVAL 3 DAY) y MONTH(fecha)."
    },
    {
     "n": "2.6",
     "t": "CASE y COALESCE",
     "m": "4 min",
     "b": "CASE permite devolver valores distintos según condiciones, como un if dentro de la consulta. COALESCE devuelve el primer valor que no sea NULL, ideal para poner un valor por defecto.",
     "k": [
      "CASE WHEN … THEN … ELSE … END",
      "COALESCE(telefono, 'Sin teléfono')",
      "Se pueden usar en SELECT, ORDER BY y GROUP BY."
     ],
     "c": "SELECT nombre,\n       CASE\n         WHEN nota >= 9 THEN 'Sobresaliente'\n         WHEN nota >= 5 THEN 'Aprobado'\n         ELSE 'Suspenso'\n       END AS calificacion,\n       COALESCE(email, 'sin correo') AS email\nFROM alumnos;",
     "tip": "CASE dentro de un COUNT o SUM permite contar por categorías en una sola consulta."
    }
   ]
  },
  {
   "t": "JOIN",
   "d": "Combinar varias tablas.",
   "secciones": [
    {
     "n": "3.1",
     "t": "INNER JOIN",
     "m": "4 min",
     "b": "INNER JOIN combina filas de dos tablas que cumplen la condición ON, normalmente que la clave foránea coincide con la primaria. Solo devuelve las filas con pareja en ambas tablas.",
     "k": [
      "FROM a JOIN b ON a.b_id = b.id",
      "JOIN a secas equivale a INNER JOIN.",
      "Usa alias para no repetir nombres largos."
     ],
     "c": "SELECT a.nombre, c.nombre AS curso\nFROM alumnos a\nJOIN cursos c ON a.curso_id = c.id;",
     "tip": "dibujad las tablas y unid con flechas las columnas del ON.",
     "a": [
      [
       "INNER JOIN",
       "Solo filas con pareja en las dos tablas."
      ],
      [
       "LEFT JOIN",
       "Todas las de la izquierda; NULL si no hay pareja."
      ],
      [
       "RIGHT JOIN",
       "Todas las de la derecha; NULL si no hay pareja."
      ],
      [
       "FULL JOIN",
       "Todas las de ambas tablas."
      ],
      [
       "CROSS JOIN",
       "Todas las combinaciones posibles."
      ]
     ],
     "at": "Tipos de JOIN",
     "ah": [
      "JOIN",
      "Qué devuelve"
     ]
    },
    {
     "n": "3.2",
     "t": "LEFT y RIGHT JOIN",
     "m": "4 min",
     "b": "LEFT JOIN devuelve todas las filas de la tabla izquierda, tengan o no pareja; las columnas de la derecha salen a NULL si no la hay. RIGHT JOIN hace lo mismo con la tabla derecha. Combinado con IS NULL sirve para encontrar registros sin relación.",
     "k": [
      "LEFT: todas las de la izquierda.",
      "RIGHT: todas las de la derecha (se suele reescribir como LEFT).",
      "LEFT JOIN + WHERE … IS NULL = «huérfanos»."
     ],
     "c": "-- clientes que nunca han hecho un pedido\nSELECT c.nombre\nFROM clientes c\nLEFT JOIN pedidos p ON p.cliente_id = c.id\nWHERE p.id IS NULL;",
     "tip": "este patrón sale muchísimo en exámenes y entrevistas.",
     "e": "poner en el WHERE una condición sobre la tabla de la derecha (WHERE p.total > 50): las filas sin pareja tienen NULL y desaparecen, así que el LEFT JOIN se comporta como un INNER JOIN. Esa condición va en el ON.",
     "q": {
      "t": "¿Qué devuelve clientes LEFT JOIN pedidos?",
      "o": [
       "Solo clientes con pedidos",
       "Todos los clientes, con NULL si no tienen pedidos",
       "Solo los pedidos",
       "Todas las combinaciones"
      ],
      "ok": 1,
      "why": "LEFT JOIN conserva todas las filas de la tabla de la izquierda."
     }
    },
    {
     "n": "3.3",
     "t": "FULL y CROSS JOIN",
     "m": "3 min",
     "b": "FULL OUTER JOIN devuelve todas las filas de ambas tablas, con NULL donde no hay pareja. CROSS JOIN combina cada fila de una tabla con todas las de la otra (producto cartesiano).",
     "k": [
      "FULL JOIN: todo de ambos lados.",
      "CROSS JOIN: todas las combinaciones posibles.",
      "MySQL no tiene FULL JOIN: se simula con UNION."
     ],
     "c": "SELECT t.talla, c.color\nFROM tallas t\nCROSS JOIN colores c;   -- todas las combinaciones talla-color",
     "tip": "un CROSS JOIN sin querer (olvidar el ON) multiplica filas: cuidado."
    },
    {
     "n": "3.4",
     "t": "Self join",
     "m": "3 min",
     "b": "Un self join une una tabla consigo misma usando dos alias. Se usa cuando una fila se relaciona con otra de la misma tabla, por ejemplo un empleado y su jefe.",
     "k": [
      "La misma tabla con dos alias.",
      "Típico en jerarquías: empleado → jefe.",
      "Usa LEFT JOIN si alguien no tiene jefe."
     ],
     "c": "SELECT e.nombre AS empleado, j.nombre AS jefe\nFROM empleados e\nLEFT JOIN empleados j ON e.jefe_id = j.id;",
     "tip": "poned alias que expliquen el papel: e (empleado), j (jefe)."
    },
    {
     "n": "3.5",
     "t": "JOIN de varias tablas",
     "m": "4 min",
     "b": "Puedes encadenar varios JOIN para recorrer relaciones: por ejemplo, de clientes a pedidos y de pedidos a productos a través de una tabla intermedia.",
     "k": [
      "Cada JOIN añade una tabla y su ON.",
      "Las tablas intermedias unen relaciones N:M.",
      "Filtra con WHERE al final."
     ],
     "c": "SELECT c.nombre, p.id AS pedido, pr.nombre AS producto, pp.cantidad\nFROM clientes c\nJOIN pedidos p           ON p.cliente_id = c.id\nJOIN pedido_productos pp ON pp.pedido_id = p.id\nJOIN productos pr        ON pr.id = pp.producto_id\nWHERE p.fecha_pedido >= '2026-01-01';",
     "tip": "en el proyecto de pedidos a domicilio necesitaréis exactamente esta consulta."
    }
   ]
  },
  {
   "t": "GROUP BY",
   "d": "Agrupar con COUNT, AVG, SUM y HAVING.",
   "secciones": [
    {
     "n": "4.1",
     "t": "Funciones de agregado",
     "m": "3 min",
     "b": "Las funciones de agregado resumen muchas filas en un valor: COUNT cuenta, SUM suma, AVG calcula la media, y MIN y MAX dan el mínimo y el máximo.",
     "k": [
      "COUNT(*) cuenta filas; COUNT(col) ignora NULL.",
      "COUNT(DISTINCT col) cuenta valores distintos.",
      "Sin GROUP BY, devuelven una sola fila."
     ],
     "c": "SELECT COUNT(*) AS total,\n       COUNT(DISTINCT curso) AS cursos,\n       ROUND(AVG(nota), 2) AS media,\n       MAX(nota) AS mejor\nFROM alumnos;",
     "tip": "COUNT(email) y COUNT(*) dan resultados distintos si hay correos vacíos.",
     "a": [
      [
       "COUNT(*)",
       "Cuenta filas."
      ],
      [
       "COUNT(col)",
       "Cuenta valores no nulos."
      ],
      [
       "COUNT(DISTINCT col)",
       "Cuenta valores distintos."
      ],
      [
       "SUM(col)",
       "Suma."
      ],
      [
       "AVG(col)",
       "Media."
      ],
      [
       "MIN(col) / MAX(col)",
       "Mínimo / máximo."
      ]
     ],
     "at": "Funciones de agregado",
     "ah": [
      "Función",
      "Resultado"
     ]
    },
    {
     "n": "4.2",
     "t": "GROUP BY",
     "m": "4 min",
     "b": "GROUP BY agrupa las filas que comparten valores y calcula los agregados por grupo. Toda columna del SELECT que no sea un agregado debe aparecer en el GROUP BY.",
     "k": [
      "Un resultado por cada grupo.",
      "Columnas no agregadas → en el GROUP BY.",
      "Se puede agrupar por varias columnas."
     ],
     "c": "SELECT curso, COUNT(*) AS total, ROUND(AVG(nota), 1) AS media\nFROM alumnos\nGROUP BY curso\nORDER BY media DESC;",
     "tip": "el error «must appear in the GROUP BY clause» es justo esa regla.",
     "e": "poner en el SELECT una columna que no está en el GROUP BY ni dentro de una función de agregado: PostgreSQL da el error «must appear in the GROUP BY clause»."
    },
    {
     "n": "4.3",
     "t": "HAVING",
     "m": "3 min",
     "b": "HAVING filtra grupos después de agrupar; WHERE filtra filas antes. HAVING admite agregados.",
     "k": [
      "WHERE → filas; HAVING → grupos.",
      "Orden lógico: FROM → WHERE → GROUP BY → HAVING → SELECT → ORDER BY → LIMIT.",
      "No uses HAVING para lo que puede hacer WHERE."
     ],
     "c": "SELECT curso, AVG(nota) AS media\nFROM alumnos\nWHERE nota IS NOT NULL\nGROUP BY curso\nHAVING AVG(nota) > 7;",
     "tip": "aprended el orden lógico: explica por qué no puedes usar un alias del SELECT en el WHERE.",
     "q": {
      "t": "¿Dónde filtras «cursos con media mayor que 7»?",
      "o": [
       "WHERE AVG(nota) > 7",
       "HAVING AVG(nota) > 7",
       "ORDER BY AVG(nota) > 7",
       "GROUP BY AVG(nota) > 7"
      ],
      "ok": 1,
      "why": "Los filtros sobre agregados van en HAVING, después de agrupar."
     }
    },
    {
     "n": "4.4",
     "t": "Agrupar con JOIN",
     "m": "4 min",
     "b": "Lo más habitual es combinar JOIN y GROUP BY para obtener informes: ventas por cliente, pedidos por mes o productos más vendidos.",
     "k": [
      "Primero se unen las tablas, luego se agrupa.",
      "Agrupa por la clave y el nombre.",
      "Ordena por el agregado para hacer rankings."
     ],
     "c": "SELECT pr.nombre, SUM(pp.cantidad) AS unidades\nFROM productos pr\nJOIN pedido_productos pp ON pp.producto_id = pr.id\nGROUP BY pr.id, pr.nombre\nORDER BY unidades DESC\nLIMIT 5;",
     "tip": "el «top 5 de productos» es un ejercicio clásico de examen."
    }
   ]
  },
  {
   "t": "Subconsultas y conjuntos",
   "d": "Consultas dentro de consultas, CTE y UNION.",
   "secciones": [
    {
     "n": "5.1",
     "t": "Subconsultas en WHERE",
     "m": "4 min",
     "b": "Una subconsulta es un SELECT dentro de otro. En el WHERE se usa para comparar con un valor calculado (subconsulta escalar) o con una lista de valores (con IN).",
     "k": [
      "Escalar: devuelve un solo valor.",
      "Con IN: devuelve una columna de valores.",
      "Va siempre entre paréntesis."
     ],
     "c": "-- alumnos por encima de la media\nSELECT nombre, nota FROM alumnos\nWHERE nota > (SELECT AVG(nota) FROM alumnos);\n\n-- alumnos de cursos de mañana\nSELECT nombre FROM alumnos\nWHERE curso_id IN (SELECT id FROM cursos WHERE turno = 'mañana');",
     "tip": "probad primero la subconsulta sola para ver qué devuelve."
    },
    {
     "n": "5.2",
     "t": "EXISTS",
     "m": "3 min",
     "b": "EXISTS comprueba si una subconsulta devuelve al menos una fila. Suele ser una subconsulta correlacionada: hace referencia a la fila de la consulta exterior.",
     "k": [
      "EXISTS / NOT EXISTS devuelven verdadero o falso.",
      "La subconsulta usa columnas de la consulta exterior.",
      "NOT EXISTS es otra forma de buscar huérfanos."
     ],
     "c": "SELECT c.nombre\nFROM clientes c\nWHERE EXISTS (\n  SELECT 1 FROM pedidos p\n  WHERE p.cliente_id = c.id AND p.total > 100\n);",
     "tip": "con EXISTS da igual lo que pongas en el SELECT interior: se suele poner 1."
    },
    {
     "n": "5.3",
     "t": "Subconsultas en FROM",
     "m": "3 min",
     "b": "Una subconsulta en el FROM funciona como una tabla temporal, a la que hay que dar un alias. Sirve para calcular algo primero y luego consultarlo.",
     "k": [
      "FROM (SELECT …) AS alias",
      "Útil para filtrar sobre agregados.",
      "Hace la consulta más legible por pasos."
     ],
     "c": "SELECT curso, media\nFROM (\n  SELECT curso, AVG(nota) AS media\n  FROM alumnos GROUP BY curso\n) AS medias\nWHERE media > 6;",
     "tip": "si la subconsulta del FROM no lleva alias, PostgreSQL da error."
    },
    {
     "n": "5.4",
     "t": "CTE con WITH",
     "m": "4 min",
     "b": "Una CTE (Common Table Expression) define con WITH una consulta con nombre que luego usas como si fuera una tabla. Hace las consultas largas mucho más fáciles de leer.",
     "k": [
      "WITH nombre AS (SELECT …) SELECT … FROM nombre;",
      "Puedes definir varias separadas por comas.",
      "WITH RECURSIVE permite recorrer jerarquías."
     ],
     "c": "WITH ventas AS (\n  SELECT cliente_id, SUM(total) AS gastado\n  FROM pedidos GROUP BY cliente_id\n)\nSELECT c.nombre, v.gastado\nFROM ventas v JOIN clientes c ON c.id = v.cliente_id\nORDER BY v.gastado DESC;",
     "tip": "las CTE están en PostgreSQL y en MySQL 8 o superior."
    },
    {
     "n": "5.5",
     "t": "UNION, INTERSECT y EXCEPT",
     "m": "3 min",
     "b": "Los operadores de conjuntos combinan resultados de varias consultas con las mismas columnas: UNION los junta, INTERSECT deja los comunes y EXCEPT los que están en la primera y no en la segunda.",
     "k": [
      "UNION quita duplicados; UNION ALL no.",
      "Las consultas deben tener el mismo número y tipo de columnas.",
      "En MySQL, EXCEPT e INTERSECT llegaron en la versión 8.0.31."
     ],
     "c": "SELECT email FROM alumnos\nUNION\nSELECT email FROM profesores;\n\nSELECT email FROM alumnos\nEXCEPT\nSELECT email FROM suscriptores;",
     "tip": "UNION ALL es más rápido si sabéis que no hay duplicados."
    }
   ]
  },
  {
   "t": "Crear y modificar tablas (DDL)",
   "d": "CREATE, ALTER TABLE, DROP y restricciones.",
   "secciones": [
    {
     "n": "6.1",
     "t": "CREATE DATABASE y esquemas",
     "m": "3 min",
     "b": "Una base de datos agrupa tablas, y dentro de ella los esquemas organizan los objetos por áreas. En PostgreSQL el esquema por defecto es public.",
     "k": [
      "CREATE DATABASE nombre;",
      "CREATE SCHEMA ventas;",
      "\\c nombre (psql) o USE nombre (MySQL) para conectarte."
     ],
     "c": "CREATE DATABASE pedidos_db;\n\\c pedidos_db\nCREATE SCHEMA IF NOT EXISTS ventas;",
     "tip": "IF NOT EXISTS evita errores si ejecutáis el script dos veces."
    },
    {
     "n": "6.2",
     "t": "CREATE TABLE y tipos de datos",
     "m": "5 min",
     "b": "CREATE TABLE define una tabla con sus columnas y tipos. Elegir bien el tipo ahorra espacio y evita errores: números exactos para dinero, fechas para fechas y textos con longitud máxima cuando tenga sentido.",
     "k": [
      "Enteros: INT, BIGINT; autoincremento: SERIAL o GENERATED ALWAYS AS IDENTITY.",
      "Dinero: NUMERIC(10,2), nunca FLOAT.",
      "Texto: VARCHAR(n) o TEXT; fechas: DATE, TIMESTAMP; BOOLEAN."
     ],
     "c": "CREATE TABLE clientes (\n  id         INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,\n  nombre     VARCHAR(100) NOT NULL,\n  email      VARCHAR(150),\n  creado_en  TIMESTAMP DEFAULT NOW()\n);",
     "tip": "en MySQL el autoincremento es INT AUTO_INCREMENT PRIMARY KEY.",
     "a": [
      [
       "INT / BIGINT",
       "Enteros."
      ],
      [
       "SERIAL / IDENTITY",
       "Entero autoincremental para claves."
      ],
      [
       "NUMERIC(10,2)",
       "Decimal exacto: dinero."
      ],
      [
       "REAL / DOUBLE PRECISION",
       "Decimal aproximado (no para dinero)."
      ],
      [
       "VARCHAR(n) / TEXT",
       "Texto con o sin límite."
      ],
      [
       "BOOLEAN",
       "true o false."
      ],
      [
       "DATE / TIME / TIMESTAMP",
       "Fecha, hora, fecha y hora."
      ],
      [
       "JSONB",
       "Documento JSON (PostgreSQL)."
      ]
     ],
     "at": "Tipos de datos habituales",
     "ah": [
      "Tipo",
      "Uso"
     ]
    },
    {
     "n": "6.3",
     "t": "Restricciones",
     "m": "5 min",
     "b": "Las restricciones protegen la calidad de los datos: PRIMARY KEY identifica cada fila, FOREIGN KEY garantiza que una referencia existe, UNIQUE impide duplicados, NOT NULL obliga a rellenar, CHECK valida una condición y DEFAULT da un valor por defecto. Con ON DELETE decides qué pasa con los hijos al borrar el padre.",
     "k": [
      "ON DELETE CASCADE borra los hijos; RESTRICT lo impide; SET NULL los deja sin padre.",
      "Nombra tus restricciones con CONSTRAINT para poder modificarlas luego.",
      "CHECK (precio >= 0) valida valores."
     ],
     "c": "CREATE TABLE pedidos (\n  id          SERIAL PRIMARY KEY,\n  cliente_id  INT NOT NULL,\n  total       NUMERIC(10,2) CHECK (total >= 0),\n  estado      VARCHAR(20) DEFAULT 'pendiente',\n  CONSTRAINT fk_pedidos_cliente\n    FOREIGN KEY (cliente_id) REFERENCES clientes(id)\n    ON DELETE CASCADE\n);",
     "tip": "pensad bien el ON DELETE: borrar un cliente, ¿debe borrar sus pedidos?",
     "a": [
      [
       "PRIMARY KEY",
       "Identifica cada fila: única y no nula."
      ],
      [
       "FOREIGN KEY … REFERENCES",
       "El valor debe existir en otra tabla."
      ],
      [
       "UNIQUE",
       "No admite valores repetidos."
      ],
      [
       "NOT NULL",
       "Obligatorio."
      ],
      [
       "CHECK (condición)",
       "El valor debe cumplir la condición."
      ],
      [
       "DEFAULT valor",
       "Valor si no se indica otro."
      ],
      [
       "ON DELETE CASCADE / SET NULL / RESTRICT",
       "Qué pasa con los hijos al borrar el padre."
      ]
     ],
     "at": "Restricciones",
     "ah": [
      "Restricción",
      "Qué garantiza"
     ]
    },
    {
     "n": "6.4",
     "t": "ALTER TABLE: añadir y eliminar columnas",
     "m": "4 min",
     "b": "ALTER TABLE modifica una tabla que ya existe sin perder sus datos. Con ADD COLUMN añades columnas (con valor por defecto para las filas existentes) y con DROP COLUMN las eliminas junto con sus datos.",
     "k": [
      "ALTER TABLE t ADD COLUMN col tipo;",
      "ALTER TABLE t DROP COLUMN col;",
      "IF EXISTS / IF NOT EXISTS evitan errores."
     ],
     "c": "ALTER TABLE clientes ADD COLUMN telefono VARCHAR(20);\nALTER TABLE clientes ADD COLUMN activo BOOLEAN NOT NULL DEFAULT true;\nALTER TABLE clientes DROP COLUMN IF EXISTS fax;",
     "tip": "si añadís una columna NOT NULL a una tabla con datos, necesitáis un DEFAULT.",
     "q": {
      "t": "¿Cómo añades la columna telefono a clientes?",
      "o": [
       "UPDATE clientes ADD telefono",
       "ALTER TABLE clientes ADD COLUMN telefono VARCHAR(20);",
       "INSERT INTO clientes (telefono)",
       "CREATE COLUMN telefono"
      ],
      "ok": 1,
      "why": "ALTER TABLE cambia la estructura; ADD COLUMN añade el campo."
     }
    },
    {
     "n": "6.5",
     "t": "ALTER TABLE: renombrar y cambiar tipos",
     "m": "4 min",
     "b": "También puedes renombrar una columna o la tabla entera, cambiar el tipo de dato de una columna y añadir o quitar su valor por defecto o su NOT NULL.",
     "k": [
      "RENAME COLUMN viejo TO nuevo; RENAME TO nueva_tabla.",
      "ALTER COLUMN col TYPE nuevo_tipo (USING para convertir).",
      "ALTER COLUMN col SET / DROP DEFAULT y SET / DROP NOT NULL."
     ],
     "c": "ALTER TABLE clientes RENAME COLUMN nombre TO nombre_completo;\nALTER TABLE clientes ALTER COLUMN telefono TYPE VARCHAR(30);\nALTER TABLE pedidos ALTER COLUMN total TYPE NUMERIC(12,2);\nALTER TABLE clientes ALTER COLUMN email SET NOT NULL;\nALTER TABLE clientes RENAME TO usuarios;",
     "tip": "en MySQL se cambia el tipo con ALTER TABLE t MODIFY COLUMN col tipo."
    },
    {
     "n": "6.6",
     "t": "ALTER TABLE: añadir y quitar restricciones",
     "m": "4 min",
     "b": "Las restricciones también se pueden añadir o eliminar después de crear la tabla. Si los datos existentes no cumplen la nueva restricción, la sentencia falla: primero hay que limpiarlos.",
     "k": [
      "ADD CONSTRAINT nombre UNIQUE / CHECK / FOREIGN KEY.",
      "DROP CONSTRAINT nombre.",
      "Los datos actuales deben cumplir la restricción."
     ],
     "c": "ALTER TABLE clientes ADD CONSTRAINT uq_clientes_email UNIQUE (email);\nALTER TABLE pedidos ADD CONSTRAINT ck_estado\n  CHECK (estado IN ('pendiente', 'enviado', 'entregado'));\nALTER TABLE pedidos DROP CONSTRAINT ck_estado;",
     "tip": "por eso conviene dar nombre a las restricciones: si no, Postgres inventa uno."
    },
    {
     "n": "6.7",
     "t": "DROP y TRUNCATE",
     "m": "3 min",
     "b": "DROP TABLE elimina la tabla entera (estructura y datos). TRUNCATE vacía todos los datos pero conserva la estructura, y es mucho más rápido que un DELETE sin WHERE. Ambos son peligrosos en producción.",
     "k": [
      "DROP TABLE IF EXISTS t;",
      "TRUNCATE t RESTART IDENTITY reinicia los id.",
      "CASCADE elimina también lo que depende de la tabla."
     ],
     "c": "TRUNCATE TABLE pedidos RESTART IDENTITY;\nDROP TABLE IF EXISTS pedido_productos;\nDROP TABLE IF EXISTS pedidos CASCADE;",
     "tip": "antes de un DROP en una base de datos real: copia de seguridad."
    }
   ]
  },
  {
   "t": "Modificar datos y transacciones",
   "d": "INSERT, UPDATE, DELETE y transacciones.",
   "secciones": [
    {
     "n": "7.1",
     "t": "INSERT",
     "m": "4 min",
     "b": "INSERT añade filas. Indica siempre las columnas para no depender de su orden. Puedes insertar varias filas a la vez o copiar el resultado de un SELECT. En PostgreSQL, RETURNING devuelve los datos insertados, como el id generado.",
     "k": [
      "INSERT INTO t (cols) VALUES (…), (…);",
      "INSERT INTO t (cols) SELECT …",
      "RETURNING id devuelve el id nuevo."
     ],
     "c": "INSERT INTO clientes (nombre, email) VALUES\n  ('Ana', 'ana@mail.com'),\n  ('Luis', 'luis@mail.com')\nRETURNING id;",
     "tip": "en MySQL no existe RETURNING: se usa LAST_INSERT_ID()."
    },
    {
     "n": "7.2",
     "t": "UPDATE",
     "m": "4 min",
     "b": "UPDATE modifica filas existentes. Sin WHERE cambia toda la tabla, así que revisa siempre la condición. Puedes usar valores calculados o subconsultas.",
     "k": [
      "UPDATE t SET col = valor WHERE condición;",
      "Se pueden cambiar varias columnas a la vez.",
      "Ejecuta antes un SELECT con el mismo WHERE."
     ],
     "c": "UPDATE productos\nSET precio = precio * 1.05, actualizado = NOW()\nWHERE categoria = 'bebidas';\n\nUPDATE pedidos SET estado = 'enviado'\nWHERE id IN (SELECT pedido_id FROM envios WHERE fecha = CURRENT_DATE);",
     "tip": "un UPDATE sin WHERE es el error más caro que se puede cometer en SQL.",
     "e": "olvidar el WHERE en un UPDATE: se modifican todas las filas de la tabla."
    },
    {
     "n": "7.3",
     "t": "DELETE",
     "m": "3 min",
     "b": "DELETE borra filas que cumplen la condición. Las claves foráneas pueden impedirlo o borrar en cascada según el ON DELETE que definiste.",
     "k": [
      "DELETE FROM t WHERE condición;",
      "Sin WHERE borra todo (mejor TRUNCATE si es lo que quieres).",
      "Las FK pueden bloquear el borrado."
     ],
     "c": "DELETE FROM pedidos\nWHERE estado = 'cancelado'\n  AND fecha_pedido < CURRENT_DATE - INTERVAL '1 year';",
     "tip": "muchas apps no borran: marcan la fila como inactiva (borrado lógico)."
    },
    {
     "n": "7.4",
     "t": "Transacciones",
     "m": "5 min",
     "b": "Una transacción agrupa varias operaciones para que se apliquen todas o ninguna. Se abre con BEGIN, se confirma con COMMIT y se deshace con ROLLBACK. Garantiza las propiedades ACID: atomicidad, consistencia, aislamiento y durabilidad.",
     "k": [
      "BEGIN; … COMMIT; o ROLLBACK;",
      "Si algo falla en medio, ROLLBACK deja todo como estaba.",
      "ACID: atomicidad, consistencia, aislamiento, durabilidad."
     ],
     "c": "BEGIN;\nUPDATE productos SET stock = stock - 2 WHERE id = 7;\nINSERT INTO pedidos (cliente_id, total) VALUES (3, 19.80);\nCOMMIT;\n-- si algo falla: ROLLBACK;",
     "tip": "en psql podéis practicar: BEGIN, un DELETE, comprobar y ROLLBACK.",
     "q": {
      "t": "¿Qué hace ROLLBACK?",
      "o": [
       "Confirma los cambios",
       "Deshace los cambios de la transacción",
       "Borra la tabla",
       "Hace una copia"
      ],
      "ok": 1,
      "why": "ROLLBACK devuelve los datos al estado anterior al BEGIN."
     }
    }
   ]
  },
  {
   "t": "Diseño y rendimiento",
   "d": "Relaciones, normalización, índices, vistas y permisos.",
   "secciones": [
    {
     "n": "8.1",
     "t": "Relaciones 1:1, 1:N y N:M",
     "m": "4 min",
     "b": "En una relación 1:N (un cliente, muchos pedidos) la clave foránea va en el lado «muchos». En una N:M (pedidos y productos) se crea una tabla intermedia con las dos claves foráneas. Las 1:1 son poco habituales y se resuelven con una FK única.",
     "k": [
      "1:N → FK en la tabla del lado N.",
      "N:M → tabla intermedia con dos FK.",
      "La clave primaria de la intermedia suele ser compuesta."
     ],
     "c": "CREATE TABLE pedido_productos (\n  pedido_id   INT REFERENCES pedidos(id) ON DELETE CASCADE,\n  producto_id INT REFERENCES productos(id),\n  cantidad    INT NOT NULL CHECK (cantidad > 0),\n  PRIMARY KEY (pedido_id, producto_id)\n);",
     "tip": "haced el diagrama entidad-relación antes de escribir ningún CREATE TABLE."
    },
    {
     "n": "8.2",
     "t": "Normalización (1FN, 2FN, 3FN)",
     "m": "5 min",
     "b": "Normalizar evita datos repetidos e inconsistentes. 1FN: cada celda tiene un solo valor. 2FN: todo depende de la clave completa (importante con claves compuestas). 3FN: nada depende de otra columna que no sea la clave.",
     "k": [
      "1FN: nada de «HTML, CSS» en una celda.",
      "2FN: sin dependencias parciales de la clave.",
      "3FN: sin dependencias entre columnas no clave."
     ],
     "c": "-- Mal (no 3FN): ciudad y código postal se repiten en cada pedido\n-- pedidos(id, cliente, direccion, ciudad, cp)\n-- Bien: la dirección va con el cliente\n-- clientes(id, nombre, direccion, ciudad, cp)\n-- pedidos(id, cliente_id, fecha)",
     "tip": "si al cambiar un dato tenéis que actualizar muchas filas, falta normalizar."
    },
    {
     "n": "8.3",
     "t": "Índices",
     "m": "4 min",
     "b": "Un índice acelera las búsquedas sobre una columna, como el índice de un libro. Las claves primarias y UNIQUE ya tienen índice. A cambio, ocupan espacio y hacen algo más lentas las escrituras.",
     "k": [
      "CREATE INDEX nombre ON tabla (columna);",
      "Indexa columnas usadas en WHERE, JOIN y ORDER BY.",
      "EXPLAIN muestra si una consulta usa el índice."
     ],
     "c": "CREATE INDEX idx_pedidos_cliente ON pedidos (cliente_id);\nCREATE INDEX idx_pedidos_fecha ON pedidos (fecha_pedido);\nEXPLAIN SELECT * FROM pedidos WHERE cliente_id = 3;",
     "tip": "no indexéis todo: solo lo que realmente se consulta mucho.",
     "e": "crear índices en todas las columnas: ocupan espacio y hacen más lentos los INSERT y UPDATE. Indexa solo lo que se busca mucho."
    },
    {
     "n": "8.4",
     "t": "Vistas",
     "m": "3 min",
     "b": "Una vista es una consulta guardada con nombre que se usa como una tabla. Simplifica consultas complejas y permite mostrar solo ciertas columnas a ciertos usuarios.",
     "k": [
      "CREATE VIEW nombre AS SELECT …;",
      "Se consulta como una tabla normal.",
      "CREATE OR REPLACE VIEW la actualiza."
     ],
     "c": "CREATE OR REPLACE VIEW resumen_clientes AS\nSELECT c.id, c.nombre, COUNT(p.id) AS pedidos, COALESCE(SUM(p.total), 0) AS gastado\nFROM clientes c\nLEFT JOIN pedidos p ON p.cliente_id = c.id\nGROUP BY c.id, c.nombre;\n\nSELECT * FROM resumen_clientes ORDER BY gastado DESC;",
     "tip": "una vista con el informe principal del proyecto queda muy bien en la entrega."
    },
    {
     "n": "8.5",
     "t": "Usuarios y permisos",
     "m": "4 min",
     "b": "Con DCL controlas quién puede hacer qué. Se crean usuarios o roles y se les conceden permisos sobre tablas con GRANT, o se retiran con REVOKE. La aplicación no debería conectarse con el usuario administrador.",
     "k": [
      "CREATE ROLE / CREATE USER.",
      "GRANT SELECT, INSERT ON tabla TO usuario;",
      "REVOKE retira permisos."
     ],
     "c": "CREATE USER app_pedidos WITH PASSWORD 'cambia_esto';\nGRANT SELECT, INSERT, UPDATE ON clientes, pedidos TO app_pedidos;\nREVOKE UPDATE ON clientes FROM app_pedidos;",
     "tip": "principio de mínimo privilegio: cada usuario, solo lo que necesita."
    }
   ]
  },
  {
   "t": "Funciones de ventana",
   "d": "OVER, PARTITION BY, rankings, LAG y LEAD, acumulados y top N por grupo.",
   "secciones": [
    {
     "n": "9.1",
     "t": "OVER y PARTITION BY",
     "m": "6 min",
     "b": [
      "Una función de ventana calcula un valor usando un grupo de filas relacionadas con la fila actual, pero sin agruparlas: cada fila sigue apareciendo en el resultado. Se escribe con OVER (…) detrás de la función. Por ejemplo, SUM(importe) OVER (PARTITION BY ciudad) añade a cada venta el total de su ciudad.",
      "PARTITION BY divide las filas en grupos (como GROUP BY, pero sin juntarlas) y ORDER BY dentro del OVER indica el orden dentro de cada grupo. Los ejemplos de este capítulo usan esta tabla de ventas por vendedor y mes."
     ],
     "k": [
      "función() OVER (PARTITION BY … ORDER BY …).",
      "A diferencia de GROUP BY, no reduce el número de filas.",
      "Permite comparar cada fila con el total de su grupo.",
      "Funcionan en PostgreSQL, MySQL 8+, SQL Server y Oracle."
     ],
     "c": "CREATE TABLE ventas (\n  id       SERIAL PRIMARY KEY,\n  vendedor TEXT,\n  ciudad   TEXT,\n  mes      INT,\n  importe  NUMERIC(8,2)\n);\nINSERT INTO ventas (vendedor, ciudad, mes, importe) VALUES\n  ('Ana',  'Madrid',  1, 300), ('Ana',  'Madrid',  2, 450),\n  ('Luis', 'Madrid',  1, 500), ('Luis', 'Madrid',  2, 200),\n  ('Sara', 'Sevilla', 1, 400), ('Sara', 'Sevilla', 2, 400),\n  ('Javi', 'Sevilla', 1, 150), ('Javi', 'Sevilla', 2, 550);\n\nSELECT vendedor, ciudad, importe,\n       SUM(importe) OVER (PARTITION BY ciudad) AS total_ciudad,\n       ROUND(100.0 * importe / SUM(importe) OVER (PARTITION BY ciudad), 1) AS porcentaje\nFROM ventas\nWHERE mes = 1\nORDER BY ciudad, importe DESC;",
     "o": " vendedor | ciudad  | importe | total_ciudad | porcentaje \n----------+---------+---------+--------------+------------\n Luis     | Madrid  |  500.00 |       800.00 |       62.5\n Ana      | Madrid  |  300.00 |       800.00 |       37.5\n Sara     | Sevilla |  400.00 |       550.00 |       72.7\n Javi     | Sevilla |  150.00 |       550.00 |       27.3\n(4 rows)",
     "tip": "el porcentaje de cada fila sobre el total de su grupo es un caso de uso clásico."
    },
    {
     "n": "9.2",
     "t": "ROW_NUMBER, RANK y DENSE_RANK",
     "m": "5 min",
     "b": [
      "Estas funciones numeran las filas según un orden. ROW_NUMBER da un número distinto a cada fila aunque haya empates. RANK da el mismo puesto a los empatados y se salta los siguientes (1, 2, 3, 3, 5). DENSE_RANK también empata, pero sin huecos (1, 2, 3, 3, 4).",
      "Se pueden combinar con GROUP BY: primero se agrupa y luego la función de ventana ordena los grupos, como en este ranking de vendedores por total vendido."
     ],
     "k": [
      "ROW_NUMBER: siempre distinto.",
      "RANK: empates con huecos.",
      "DENSE_RANK: empates sin huecos.",
      "Se aplican después del GROUP BY."
     ],
     "c": "SELECT vendedor,\n       SUM(importe) AS total,\n       ROW_NUMBER() OVER (ORDER BY SUM(importe) DESC) AS fila,\n       RANK()       OVER (ORDER BY SUM(importe) DESC) AS rank,\n       DENSE_RANK() OVER (ORDER BY SUM(importe) DESC) AS dense_rank\nFROM ventas\nGROUP BY vendedor\nORDER BY total DESC, vendedor;",
     "o": " vendedor | total  | fila | rank | dense_rank \n----------+--------+------+------+------------\n Sara     | 800.00 |    1 |    1 |          1\n Ana      | 750.00 |    2 |    2 |          2\n Javi     | 700.00 |    3 |    3 |          3\n Luis     | 700.00 |    4 |    3 |          3\n(4 rows)",
     "a": [
      [
       "ROW_NUMBER()",
       "1, 2, 3, 4 (sin empates)."
      ],
      [
       "RANK()",
       "1, 2, 3, 3, 5 (empates con hueco)."
      ],
      [
       "DENSE_RANK()",
       "1, 2, 3, 3, 4 (empates sin hueco)."
      ],
      [
       "NTILE(n)",
       "Divide en n grupos (cuartiles…)."
      ]
     ],
     "at": "Funciones de ranking",
     "ah": [
      "Función",
      "Numeración"
     ],
     "q": {
      "t": "Javi y Luis empatan en 3.er puesto. ¿Qué devuelve RANK para el siguiente vendedor?",
      "o": [
       "4",
       "5",
       "3",
       "NULL"
      ],
      "ok": 1,
      "why": "RANK deja un hueco por cada empate: 1, 2, 3, 3, 5."
     },
     "tip": "fijaos en la diferencia entre las columnas fila, rank y dense_rank para Javi y Luis."
    },
    {
     "n": "9.3",
     "t": "LAG, LEAD y acumulados",
     "m": "5 min",
     "b": [
      "LAG(columna) devuelve el valor de la fila anterior dentro de la ventana y LEAD el de la siguiente. Sirven para comparar un periodo con el anterior: la diferencia de ventas respecto al mes pasado.",
      "SUM(…) OVER (… ORDER BY …) calcula un total acumulado: cada fila suma todas las anteriores de su grupo. Para no repetir la misma ventana varias veces se le puede dar nombre con WINDOW w AS (…)."
     ],
     "k": [
      "LAG(col) = valor anterior; LEAD(col) = siguiente.",
      "La primera fila de cada grupo no tiene anterior: NULL.",
      "SUM() OVER (ORDER BY …) = acumulado.",
      "WINDOW w AS (…) reutiliza una ventana."
     ],
     "c": "SELECT vendedor, mes, importe,\n       LAG(importe) OVER w AS anterior,\n       importe - LAG(importe) OVER w AS diferencia,\n       SUM(importe) OVER w AS acumulado\nFROM ventas\nWHERE vendedor IN ('Ana', 'Luis')\nWINDOW w AS (PARTITION BY vendedor ORDER BY mes)\nORDER BY vendedor, mes;",
     "o": " vendedor | mes | importe | anterior | diferencia | acumulado \n----------+-----+---------+----------+------------+-----------\n Ana      |   1 |  300.00 |          |            |    300.00\n Ana      |   2 |  450.00 |   300.00 |     150.00 |    750.00\n Luis     |   1 |  500.00 |          |            |    500.00\n Luis     |   2 |  200.00 |   500.00 |    -300.00 |    700.00\n(4 rows)",
     "tip": "LAG con un segundo argumento mira varias filas atrás: LAG(importe, 12) para el mismo mes del año anterior."
    },
    {
     "n": "9.4",
     "t": "Top N por grupo",
     "m": "5 min",
     "b": [
      "Una pregunta muy frecuente: «el mejor vendedor de cada ciudad» o «los 3 productos más vendidos de cada categoría». Se resuelve numerando las filas dentro de cada grupo con ROW_NUMBER() OVER (PARTITION BY …) en una CTE o subconsulta y quedándose con las que tienen número 1 (o menor o igual que N).",
      "No se puede filtrar directamente una función de ventana en el WHERE, porque el WHERE se evalúa antes; por eso se necesita la CTE."
     ],
     "k": [
      "ROW_NUMBER() OVER (PARTITION BY grupo ORDER BY …).",
      "Filtra en una consulta exterior: WHERE puesto <= 3.",
      "Las funciones de ventana no pueden ir en el WHERE.",
      "Usa RANK si quieres incluir empates."
     ],
     "c": "WITH ranking AS (\n  SELECT ciudad, vendedor, SUM(importe) AS total,\n         ROW_NUMBER() OVER (PARTITION BY ciudad ORDER BY SUM(importe) DESC) AS puesto\n  FROM ventas\n  GROUP BY ciudad, vendedor\n)\nSELECT ciudad, vendedor, total\nFROM ranking\nWHERE puesto = 1\nORDER BY ciudad;",
     "o": " ciudad  | vendedor | total  \n---------+----------+--------\n Madrid  | Ana      | 750.00\n Sevilla | Sara     | 800.00\n(2 rows)",
     "e": "escribir WHERE ROW_NUMBER() OVER (…) = 1: da error porque las funciones de ventana se calculan después del WHERE.",
     "tip": "es una pregunta habitual en entrevistas técnicas de SQL."
    }
   ]
  },
  {
   "t": "Programar en la base de datos",
   "d": "Funciones, procedimientos, triggers, JSONB y copias de seguridad.",
   "secciones": [
    {
     "n": "10.1",
     "t": "Funciones",
     "m": "6 min",
     "b": [
      "Una función guarda en la base de datos un cálculo reutilizable que devuelve un valor y se puede usar dentro de cualquier consulta. Se crea con CREATE FUNCTION indicando los parámetros, el tipo que devuelve y el lenguaje: sql para funciones sencillas de una consulta y plpgsql cuando se necesitan variables, condiciones o bucles.",
      "El cuerpo va entre $$ … $$. CREATE OR REPLACE permite modificarla después. En MySQL la sintaxis cambia ligeramente (DELIMITER y BEGIN … END)."
     ],
     "k": [
      "CREATE OR REPLACE FUNCTION nombre(param tipo) RETURNS tipo AS $$ … $$ LANGUAGE sql;",
      "plpgsql para IF, variables y bucles.",
      "Se usa como cualquier función: SELECT con_iva(precio) FROM …",
      "DROP FUNCTION nombre; para borrarla."
     ],
     "c": "CREATE OR REPLACE FUNCTION con_iva(precio NUMERIC)\nRETURNS NUMERIC AS $$\n  SELECT ROUND(precio * 1.21, 2);\n$$ LANGUAGE sql;\n\nCREATE OR REPLACE FUNCTION categoria(total NUMERIC)\nRETURNS TEXT AS $$\nBEGIN\n  IF total >= 750 THEN\n    RETURN 'Oro';\n  ELSIF total >= 600 THEN\n    RETURN 'Plata';\n  ELSE\n    RETURN 'Bronce';\n  END IF;\nEND;\n$$ LANGUAGE plpgsql;\n\nSELECT vendedor, SUM(importe) AS total,\n       con_iva(SUM(importe)) AS con_iva,\n       categoria(SUM(importe)) AS categoria\nFROM ventas\nGROUP BY vendedor\nORDER BY total DESC, vendedor;",
     "o": " vendedor | total  | con_iva | categoria \n----------+--------+---------+-----------\n Sara     | 800.00 |  968.00 | Oro\n Ana      | 750.00 |  907.50 | Oro\n Javi     | 700.00 |  847.00 | Plata\n Luis     | 700.00 |  847.00 | Plata\n(4 rows)",
     "tip": "las funciones evitan repetir la misma fórmula en muchas consultas."
    },
    {
     "n": "10.2",
     "t": "Procedimientos almacenados",
     "m": "5 min",
     "b": [
      "Un procedimiento (CREATE PROCEDURE) agrupa varias operaciones que se ejecutan juntas con CALL. A diferencia de una función, no se usa dentro de un SELECT y puede gestionar transacciones. Es útil para encapsular operaciones de negocio, como registrar una venta con sus validaciones.",
      "RAISE EXCEPTION lanza un error con un mensaje propio y detiene la operación; % dentro del mensaje se sustituye por los valores indicados. RAISE NOTICE muestra un aviso sin detener nada."
     ],
     "k": [
      "CREATE PROCEDURE … LANGUAGE plpgsql AS $$ BEGIN … END; $$;",
      "Se ejecuta con CALL nombre(…).",
      "RAISE EXCEPTION detiene con un error propio.",
      "Funciones para calcular; procedimientos para hacer."
     ],
     "c": "CREATE OR REPLACE PROCEDURE registrar_venta(\n  p_vendedor TEXT, p_ciudad TEXT, p_mes INT, p_importe NUMERIC)\nLANGUAGE plpgsql AS $$\nBEGIN\n  IF p_importe <= 0 THEN\n    RAISE EXCEPTION 'El importe debe ser positivo (recibido: %)', p_importe;\n  END IF;\n  INSERT INTO ventas (vendedor, ciudad, mes, importe)\n  VALUES (p_vendedor, p_ciudad, p_mes, p_importe);\nEND;\n$$;\n\nCALL registrar_venta('Ana', 'Madrid', 3, 120);\nCALL registrar_venta('Ana', 'Madrid', 3, -5);\nSELECT COUNT(*) AS ventas FROM ventas;",
     "o": "ERROR:  El importe debe ser positivo (recibido: -5)\n ventas \n--------\n      9\n(1 row)",
     "a": [
      [
       "Se usa en",
       "Función: SELECT · Procedimiento: CALL."
      ],
      [
       "Devuelve",
       "Función: un valor o tabla · Procedimiento: nada (o parámetros OUT)."
      ],
      [
       "Transacciones",
       "Función: no · Procedimiento: sí (COMMIT dentro)."
      ],
      [
       "Uso típico",
       "Función: cálculos · Procedimiento: operaciones de negocio."
      ]
     ],
     "at": "Función frente a procedimiento",
     "ah": [
      "Aspecto",
      "Comparación"
     ],
     "tip": "la segunda llamada falla por la validación, así que el recuento queda en 9 (8 + 1)."
    },
    {
     "n": "10.3",
     "t": "Triggers",
     "m": "6 min",
     "b": [
      "Un trigger (disparador) ejecuta automáticamente una función cuando ocurre un evento en una tabla: INSERT, UPDATE o DELETE, antes (BEFORE) o después (AFTER) de la operación, y para cada fila (FOR EACH ROW). Dentro de la función, OLD contiene la fila antes del cambio y NEW la fila nueva.",
      "Se usan para auditoría (guardar quién cambió qué), mantener campos calculados, validar datos complejos o actualizar el stock. Hay que usarlos con moderación: la lógica escondida en triggers es difícil de depurar."
     ],
     "k": [
      "CREATE TRIGGER … AFTER UPDATE ON tabla FOR EACH ROW EXECUTE FUNCTION f();",
      "La función devuelve TRIGGER.",
      "OLD = fila anterior; NEW = fila nueva.",
      "BEFORE permite modificar NEW antes de guardar."
     ],
     "c": "CREATE TABLE auditoria (\n  id         SERIAL PRIMARY KEY,\n  venta_id   INT,\n  antes      NUMERIC(8,2),\n  despues    NUMERIC(8,2),\n  usuario    TEXT DEFAULT current_user,\n  momento    TIMESTAMP DEFAULT now()\n);\n\nCREATE OR REPLACE FUNCTION registrar_cambio()\nRETURNS TRIGGER AS $$\nBEGIN\n  IF NEW.importe <> OLD.importe THEN\n    INSERT INTO auditoria (venta_id, antes, despues)\n    VALUES (OLD.id, OLD.importe, NEW.importe);\n  END IF;\n  RETURN NEW;\nEND;\n$$ LANGUAGE plpgsql;\n\nCREATE TRIGGER tr_auditar_importe\nAFTER UPDATE ON ventas\nFOR EACH ROW EXECUTE FUNCTION registrar_cambio();\n\nUPDATE ventas SET importe = 350 WHERE id = 1;\nUPDATE ventas SET ciudad = 'Madrid' WHERE id = 2;\nSELECT venta_id, antes, despues FROM auditoria;",
     "o": " venta_id | antes  | despues \n----------+--------+---------\n        1 | 300.00 |  350.00\n(1 row)",
     "a": [
      [
       "BEFORE",
       "Antes de la operación: puede cambiar o cancelar la fila."
      ],
      [
       "AFTER",
       "Después: auditoría, actualizar otras tablas."
      ],
      [
       "FOR EACH ROW",
       "Una vez por fila afectada."
      ],
      [
       "FOR EACH STATEMENT",
       "Una vez por sentencia."
      ],
      [
       "OLD / NEW",
       "Fila antes / después del cambio."
      ]
     ],
     "at": "Opciones de un trigger",
     "ah": [
      "Opción",
      "Significado"
     ],
     "tip": "solo el primer UPDATE cambia el importe, así que solo se audita ese."
    },
    {
     "n": "10.4",
     "t": "JSONB en PostgreSQL",
     "m": "5 min",
     "b": [
      "PostgreSQL puede guardar documentos JSON en columnas de tipo JSONB y consultarlos: -> devuelve un campo como JSON, ->> lo devuelve como texto y @> comprueba si el documento contiene otro. Se pueden crear índices GIN sobre ellos para buscar rápido.",
      "Es útil para datos con estructura variable (configuraciones, respuestas de APIs, atributos que cambian según el producto), pero no sustituye a un buen diseño relacional: los datos principales deben ir en columnas normales."
     ],
     "k": [
      "datos->>'campo' → texto.",
      "datos->'lista' → JSON.",
      "datos @> '{\"pagado\": true}' → contiene.",
      "Conversión: (datos->>'total')::NUMERIC."
     ],
     "c": "CREATE TABLE pedidos_web (\n  id    SERIAL PRIMARY KEY,\n  datos JSONB NOT NULL\n);\nINSERT INTO pedidos_web (datos) VALUES\n  ('{\"cliente\": \"Ana\", \"total\": 78, \"pagado\": true, \"entradas\": [\"dia\", \"dia\"]}'),\n  ('{\"cliente\": \"Luis\", \"total\": 89, \"pagado\": false, \"entradas\": [\"abono\"]}');\n\nSELECT datos->>'cliente' AS cliente,\n       (datos->>'total')::NUMERIC AS total,\n       jsonb_array_length(datos->'entradas') AS num_entradas\nFROM pedidos_web\nWHERE datos @> '{\"pagado\": true}';",
     "o": " cliente | total | num_entradas \n---------+-------+--------------\n Ana     |    78 |            2\n(1 row)",
     "tip": "MySQL tiene un tipo JSON parecido, con funciones como JSON_EXTRACT."
    },
    {
     "n": "10.5",
     "t": "Copias de seguridad y psql",
     "m": "4 min",
     "b": [
      "pg_dump exporta una base de datos completa (estructura y datos) a un archivo SQL, y psql permite restaurarla ejecutando ese archivo. En MySQL las herramientas equivalentes son mysqldump y mysql. Hacer copias periódicas y probar que se pueden restaurar es parte del trabajo con bases de datos.",
      "psql es el cliente de terminal de PostgreSQL: tiene comandos propios que empiezan por barra invertida para listar bases de datos, tablas o la estructura de una tabla."
     ],
     "k": [
      "pg_dump -U usuario base > copia.sql",
      "psql -U usuario base < copia.sql",
      "\\l bases de datos · \\dt tablas · \\d tabla estructura.",
      "Prueba a restaurar tus copias."
     ],
     "c": "# Exportar la base de datos completa\npg_dump -U postgres -d pedidos_db > pedidos_2026-11-06.sql\n\n# Solo la estructura (sin datos)\npg_dump -U postgres -d pedidos_db --schema-only > estructura.sql\n\n# Restaurar en una base de datos nueva\ncreatedb -U postgres pedidos_copia\npsql -U postgres -d pedidos_copia -f pedidos_2026-11-06.sql\n\n# Dentro de psql\n\\l              -- listar bases de datos\n\\c pedidos_db   -- conectarse a una\n\\dt             -- listar tablas\n\\d clientes     -- estructura de la tabla clientes\n\\q              -- salir",
     "v": 0,
     "a": [
      [
       "\\l",
       "Listar bases de datos."
      ],
      [
       "\\c nombre",
       "Conectarse a una base de datos."
      ],
      [
       "\\dt",
       "Listar tablas."
      ],
      [
       "\\d tabla",
       "Ver columnas, tipos e índices."
      ],
      [
       "\\du",
       "Listar usuarios y roles."
      ],
      [
       "\\i archivo.sql",
       "Ejecutar un archivo SQL."
      ],
      [
       "\\x",
       "Activar vista expandida (filas en vertical)."
      ],
      [
       "\\q",
       "Salir."
      ]
     ],
     "at": "Comandos de psql",
     "ah": [
      "Comando",
      "Qué hace"
     ],
     "tip": "para la entrega del proyecto de pedidos, incluid un .sql generado con pg_dump."
    }
   ]
  }
 ],
 "chuleta": [
  [
   "SELECT col1, col2 FROM tabla",
   "Leer columnas de una tabla. * trae todas, pero en código real conviene listarlas.",
   "SELECT nombre, nota FROM alumnos;",
   "Consultar"
  ],
  [
   "WHERE",
   "Filtrar filas con =, <>, <, >, AND, OR y NOT.",
   "WHERE curso = 'DAW1' AND nota >= 5",
   "Consultar"
  ],
  [
   "LIKE / IN / BETWEEN / IS NULL",
   "Patrones (% cualquier texto), listas, rangos y valores vacíos.",
   "WHERE nombre LIKE 'A%' AND email IS NOT NULL",
   "Consultar"
  ],
  [
   "ORDER BY … DESC",
   "Ordenar ascendente (por defecto) o descendente.",
   "ORDER BY nota DESC, nombre",
   "Consultar"
  ],
  [
   "LIMIT / OFFSET",
   "Limitar resultados y paginar.",
   "LIMIT 10 OFFSET 20",
   "Consultar"
  ],
  [
   "DISTINCT",
   "Quitar filas repetidas.",
   "SELECT DISTINCT curso FROM alumnos;",
   "Consultar"
  ],
  [
   "AS",
   "Alias para columnas calculadas o tablas.",
   "SELECT precio * 1.21 AS con_iva FROM productos p;",
   "Consultar"
  ],
  [
   "CASE WHEN … THEN … END",
   "Condicional dentro de la consulta.",
   "CASE WHEN nota >= 5 THEN 'Apto' ELSE 'No apto' END",
   "Consultar"
  ],
  [
   "COALESCE",
   "Primer valor no nulo: valores por defecto.",
   "COALESCE(telefono, 'Sin teléfono')",
   "Consultar"
  ],
  [
   "INNER JOIN … ON",
   "Filas con pareja en las dos tablas.",
   "FROM pedidos p JOIN clientes c ON c.id = p.cliente_id",
   "Combinar tablas"
  ],
  [
   "LEFT JOIN",
   "Todas las filas de la izquierda; NULL si no hay pareja.",
   "FROM clientes c LEFT JOIN pedidos p ON p.cliente_id = c.id",
   "Combinar tablas"
  ],
  [
   "LEFT JOIN … WHERE … IS NULL",
   "Encontrar filas sin relación (clientes sin pedidos).",
   "WHERE p.id IS NULL",
   "Combinar tablas"
  ],
  [
   "UNION / INTERSECT / EXCEPT",
   "Unir, intersecar o restar resultados con las mismas columnas.",
   "SELECT email FROM alumnos UNION SELECT email FROM profesores;",
   "Combinar tablas"
  ],
  [
   "COUNT / SUM / AVG / MIN / MAX",
   "Funciones de agregado.",
   "SELECT COUNT(*), ROUND(AVG(nota), 2) FROM alumnos;",
   "Agrupar"
  ],
  [
   "GROUP BY",
   "Un resultado por grupo. Las columnas no agregadas van en el GROUP BY.",
   "SELECT curso, COUNT(*) FROM alumnos GROUP BY curso;",
   "Agrupar"
  ],
  [
   "HAVING",
   "Filtrar grupos (después de agrupar).",
   "GROUP BY curso HAVING AVG(nota) > 7",
   "Agrupar"
  ],
  [
   "Subconsulta en WHERE",
   "Comparar con un valor calculado o una lista.",
   "WHERE nota > (SELECT AVG(nota) FROM alumnos)",
   "Subconsultas y ventanas"
  ],
  [
   "EXISTS",
   "¿La subconsulta devuelve alguna fila?",
   "WHERE EXISTS (SELECT 1 FROM pedidos p WHERE p.cliente_id = c.id)",
   "Subconsultas y ventanas"
  ],
  [
   "WITH nombre AS (…)",
   "CTE: consulta con nombre para hacer las consultas legibles.",
   "WITH ventas AS (SELECT …) SELECT * FROM ventas;",
   "Subconsultas y ventanas"
  ],
  [
   "OVER (PARTITION BY …)",
   "Función de ventana: calcula sobre un grupo sin reducir filas.",
   "SUM(importe) OVER (PARTITION BY ciudad)",
   "Subconsultas y ventanas"
  ],
  [
   "ROW_NUMBER / RANK / DENSE_RANK",
   "Numerar o clasificar filas.",
   "RANK() OVER (ORDER BY total DESC)",
   "Subconsultas y ventanas"
  ],
  [
   "LAG / LEAD",
   "Valor de la fila anterior o siguiente.",
   "importe - LAG(importe) OVER (ORDER BY mes)",
   "Subconsultas y ventanas"
  ],
  [
   "INSERT INTO … VALUES",
   "Añadir filas. Indica siempre las columnas.",
   "INSERT INTO clientes (nombre, email) VALUES ('Ana', 'ana@mail.com');",
   "Modificar datos"
  ],
  [
   "UPDATE … SET … WHERE",
   "Modificar filas. ¡Nunca sin WHERE!",
   "UPDATE productos SET precio = precio * 1.05 WHERE id = 7;",
   "Modificar datos"
  ],
  [
   "DELETE FROM … WHERE",
   "Borrar filas. ¡Nunca sin WHERE!",
   "DELETE FROM pedidos WHERE estado = 'cancelado';",
   "Modificar datos"
  ],
  [
   "RETURNING",
   "Devuelve los datos insertados o modificados (PostgreSQL).",
   "INSERT INTO … RETURNING id;",
   "Modificar datos"
  ],
  [
   "BEGIN / COMMIT / ROLLBACK",
   "Transacción: todo o nada.",
   "BEGIN; UPDATE …; INSERT …; COMMIT;",
   "Modificar datos"
  ],
  [
   "CREATE TABLE",
   "Crear una tabla con columnas, tipos y restricciones.",
   "CREATE TABLE clientes (id SERIAL PRIMARY KEY, nombre VARCHAR(100) NOT NULL);",
   "Estructura (DDL)"
  ],
  [
   "PRIMARY KEY / FOREIGN KEY",
   "Clave primaria / clave foránea que referencia otra tabla.",
   "FOREIGN KEY (cliente_id) REFERENCES clientes(id) ON DELETE CASCADE",
   "Estructura (DDL)"
  ],
  [
   "UNIQUE / NOT NULL / CHECK / DEFAULT",
   "Restricciones de calidad de datos.",
   "precio NUMERIC(10,2) CHECK (precio >= 0)",
   "Estructura (DDL)"
  ],
  [
   "ALTER TABLE … ADD COLUMN",
   "Añadir una columna a una tabla existente.",
   "ALTER TABLE clientes ADD COLUMN telefono VARCHAR(20);",
   "Estructura (DDL)"
  ],
  [
   "ALTER TABLE … DROP COLUMN",
   "Eliminar una columna y sus datos.",
   "ALTER TABLE clientes DROP COLUMN fax;",
   "Estructura (DDL)"
  ],
  [
   "ALTER TABLE … RENAME COLUMN",
   "Renombrar una columna.",
   "ALTER TABLE clientes RENAME COLUMN nombre TO nombre_completo;",
   "Estructura (DDL)"
  ],
  [
   "ALTER TABLE … ALTER COLUMN … TYPE",
   "Cambiar el tipo (en MySQL: MODIFY COLUMN).",
   "ALTER TABLE pedidos ALTER COLUMN total TYPE NUMERIC(12,2);",
   "Estructura (DDL)"
  ],
  [
   "ALTER TABLE … ADD CONSTRAINT",
   "Añadir una restricción con nombre.",
   "ALTER TABLE clientes ADD CONSTRAINT uq_email UNIQUE (email);",
   "Estructura (DDL)"
  ],
  [
   "DROP TABLE / TRUNCATE",
   "Borrar la tabla entera / vaciar sus datos.",
   "TRUNCATE pedidos RESTART IDENTITY;",
   "Estructura (DDL)"
  ],
  [
   "CREATE INDEX",
   "Acelerar búsquedas por una columna.",
   "CREATE INDEX idx_pedidos_cliente ON pedidos (cliente_id);",
   "Rendimiento y administración"
  ],
  [
   "EXPLAIN",
   "Muestra cómo ejecuta una consulta (si usa índices).",
   "EXPLAIN SELECT * FROM pedidos WHERE cliente_id = 3;",
   "Rendimiento y administración"
  ],
  [
   "CREATE VIEW",
   "Guardar una consulta como si fuera una tabla.",
   "CREATE VIEW resumen AS SELECT …;",
   "Rendimiento y administración"
  ],
  [
   "CREATE FUNCTION / PROCEDURE",
   "Lógica guardada en la base de datos.",
   "CREATE FUNCTION con_iva(p NUMERIC) RETURNS NUMERIC AS $$ SELECT p * 1.21 $$ LANGUAGE sql;",
   "Rendimiento y administración"
  ],
  [
   "CREATE TRIGGER",
   "Ejecutar una función automáticamente al insertar, modificar o borrar.",
   "CREATE TRIGGER t AFTER UPDATE ON ventas FOR EACH ROW EXECUTE FUNCTION f();",
   "Rendimiento y administración"
  ],
  [
   "GRANT / REVOKE",
   "Dar o quitar permisos a un usuario.",
   "GRANT SELECT, INSERT ON pedidos TO app_pedidos;",
   "Rendimiento y administración"
  ],
  [
   "pg_dump / psql",
   "Copia de seguridad y restauración.",
   "pg_dump -U postgres -d mi_bd > copia.sql",
   "Rendimiento y administración"
  ]
 ],
 "retos": [
  {
   "t": "¿Qué cláusula filtra grupos después de un GROUP BY?",
   "o": [
    "WHERE",
    "HAVING",
    "ORDER BY",
    "LIMIT"
   ],
   "ok": 1,
   "why": "HAVING se aplica después de agrupar y admite funciones de agregado."
  },
  {
   "t": "¿Cómo eliminas la columna fax de la tabla clientes?",
   "o": [
    "DELETE fax FROM clientes",
    "ALTER TABLE clientes DROP COLUMN fax;",
    "DROP fax",
    "UPDATE clientes REMOVE fax"
   ],
   "ok": 1,
   "why": "DROP COLUMN dentro de ALTER TABLE elimina la columna y sus datos."
  },
  {
   "t": "¿Qué diferencia hay entre TRUNCATE y DROP TABLE?",
   "o": [
    "Ninguna",
    "TRUNCATE vacía los datos; DROP elimina la tabla entera",
    "DROP solo borra datos",
    "TRUNCATE borra la base de datos"
   ],
   "ok": 1,
   "why": "TRUNCATE conserva la estructura; DROP la elimina."
  },
  {
   "t": "¿Qué función de ventana devuelve el valor de la fila anterior?",
   "o": [
    "LEAD",
    "LAG",
    "PREV",
    "FIRST"
   ],
   "ok": 1,
   "why": "LAG mira hacia atrás; LEAD hacia delante."
  },
  {
   "t": "¿Qué tipo es el adecuado para guardar precios?",
   "o": [
    "FLOAT",
    "NUMERIC(10,2)",
    "TEXT",
    "INT"
   ],
   "ok": 1,
   "why": "NUMERIC guarda decimales exactos; FLOAT puede perder precisión."
  },
  {
   "t": "¿Qué hace ON DELETE CASCADE en una clave foránea?",
   "o": [
    "Impide borrar el padre",
    "Borra los hijos al borrar el padre",
    "Pone los hijos a NULL",
    "Nada"
   ],
   "ok": 1,
   "why": "CASCADE propaga el borrado a las filas que dependen de la borrada."
  },
  {
   "t": "¿Por qué no puedes escribir WHERE ROW_NUMBER() OVER (…) = 1?",
   "o": [
    "Sí se puede",
    "Las funciones de ventana se calculan después del WHERE",
    "ROW_NUMBER no existe",
    "Solo funciona en MySQL"
   ],
   "ok": 1,
   "why": "Hay que calcularlo en una CTE o subconsulta y filtrar fuera."
  }
 ]
};
