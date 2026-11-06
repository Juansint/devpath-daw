window.LECCIONES = window.LECCIONES || {};
LECCIONES["php"] = {
 "lang": "php",
 "capitulos": [
  {
   "t": "Fundamentos",
   "d": "Qué es PHP, cómo se ejecuta, sintaxis, variables, tipos y operadores.",
   "secciones": [
    {
     "n": "1.1",
     "t": "¿Qué es PHP y cómo se ejecuta?",
     "m": "5 min",
     "b": [
      "PHP es un lenguaje de programación del lado del servidor. Cuando el navegador pide una página .php, el servidor ejecuta el código PHP y envía al navegador solo el HTML resultante: el usuario nunca ve el código. Sirve para procesar formularios, gestionar sesiones de usuario, trabajar con bases de datos y crear APIs. WordPress, Laravel o Wikipedia están hechos con PHP.",
      "Para trabajar en local puedes instalar XAMPP (Apache + MySQL + PHP) y poner los archivos en htdocs, o usar el servidor integrado: php -S localhost:8000 en la carpeta del proyecto. El código PHP va entre <?php y ?>, y se puede mezclar con HTML."
     ],
     "k": [
      "PHP se ejecuta en el servidor; el navegador recibe HTML.",
      "Servidor de pruebas: php -S localhost:8000",
      "Código entre <?php … ?>; las instrucciones acaban en ;",
      "Si el archivo es solo PHP, no cierres con ?>."
     ],
     "c": "<!-- index.php -->\n<!DOCTYPE html>\n<html lang=\"es\">\n<body>\n  <h1>Festival DAW</h1>\n  <p>Hoy es <?php echo date(\"d/m/Y\"); ?></p>\n  <?php\n    $plazas = 120;\n    echo \"<p>Quedan $plazas plazas</p>\";\n  ?>\n</body>\n</html>",
     "o": "<h1>Festival DAW</h1>\n<p>Hoy es 06/11/2026</p>\n<p>Quedan 120 plazas</p>",
     "a": [
      [
       "php -S localhost:8000",
       "Servidor integrado para desarrollo."
      ],
      [
       "XAMPP / Laragon",
       "Paquetes con Apache, MySQL y PHP."
      ],
      [
       "php archivo.php",
       "Ejecuta un script desde la terminal."
      ],
      [
       "php -v",
       "Muestra la versión instalada."
      ]
     ],
     "at": "Formas de ejecutar PHP",
     "ah": [
      "Herramienta",
      "Uso"
     ],
     "e": "abrir el archivo .php con doble clic: el navegador muestra el código en lugar de ejecutarlo. Hay que pasar por un servidor.",
     "tip": "haced clic derecho → Ver código fuente en el navegador: veréis solo HTML."
    },
    {
     "n": "1.2",
     "t": "echo, comentarios y variables",
     "m": "5 min",
     "b": [
      "echo muestra texto (print hace lo mismo). Las variables empiezan siempre por $, no se declaran con tipo y distinguen mayúsculas. Las constantes se definen con const o define() y no llevan $.",
      "Con comillas dobles, PHP sustituye las variables dentro del texto (\"Hola $nombre\"); con comillas simples no (\"Hola $nombre\" se mostraría literal). Para concatenar se usa el punto (.), no el +."
     ],
     "k": [
      "$nombre = \"Ana\"; todas las variables con $.",
      "\"Hola $nombre\" interpola; 'Hola $nombre' no.",
      "Concatenar con punto: \"Hola \" . $nombre",
      "const IVA = 0.21; constantes sin $."
     ],
     "c": "<?php\n// Comentario de una línea\n# También vale\n/* Varias líneas */\n$nombre = \"Ana\";\n$entradas = 3;\nconst PRECIO = 39;\n\necho \"Hola $nombre\\n\";\necho 'Hola $nombre' . \"\\n\";\necho \"Tienes \" . $entradas . \" entradas: \" . $entradas * PRECIO . \" €\\n\";\necho \"Total: {$entradas} × \" . PRECIO . \"\\n\";",
     "o": "Hola Ana\nHola $nombre\nTienes 3 entradas: 117 €\nTotal: 3 × 39",
     "e": "usar + para unir textos como en JavaScript: PHP intenta sumarlos como números.",
     "tip": "las llaves {$variable} evitan ambigüedades: \"{$n}º puesto\"."
    },
    {
     "n": "1.3",
     "t": "Tipos de datos",
     "m": "5 min",
     "b": [
      "PHP tiene tipos escalares (int, float, string, bool), compuestos (array, object) y especiales (null). Es de tipado dinámico: una variable puede cambiar de tipo, y PHP convierte valores automáticamente en algunas operaciones.",
      "var_dump($x) muestra el tipo y el valor (imprescindible para depurar), gettype() devuelve el tipo y las funciones is_int, is_string, is_array… lo comprueban. Con declare(strict_types=1) al principio del archivo, PHP deja de convertir tipos en las llamadas a funciones con tipos declarados."
     ],
     "k": [
      "int, float, string, bool, array, object, null.",
      "var_dump($x) para depurar.",
      "is_numeric(\"12\") comprueba si un texto es numérico.",
      "declare(strict_types=1); para tipos estrictos."
     ],
     "c": "<?php\n$edad = 20;\n$precio = 39.5;\n$nombre = \"Ana\";\n$vip = false;\n$bandas = [\"A\", \"B\"];\n$nada = null;\n\nvar_dump($edad);\nvar_dump($precio);\nvar_dump($vip);\necho gettype($bandas), \"\\n\";\nvar_dump(is_numeric(\"12.5\"), is_null($nada));\necho (int) \"42abc\", \"\\n\";",
     "o": "int(20)\nfloat(39.5)\nbool(false)\narray\nbool(true)\nbool(true)\n42",
     "tip": "var_dump es vuestro mejor amigo cuando algo no funciona."
    },
    {
     "n": "1.4",
     "t": "Operadores",
     "m": "5 min",
     "b": [
      "Los aritméticos son + - * / % y ** (potencia). La división / devuelve decimales; intdiv() da la división entera. Los de comparación incluyen == (igual tras convertir tipos) y === (igual valor y tipo); usa siempre === para evitar sorpresas.",
      "Operadores útiles: ?? devuelve el valor de la derecha si el de la izquierda no existe o es null (perfecto para $_GET), <=> (nave espacial) compara y devuelve -1, 0 o 1, y .= concatena y asigna."
     ],
     "k": [
      "Usa === y !==.",
      "$x ?? \"defecto\" → si no existe o es null.",
      ".= añade texto: $html .= \"<li>…</li>\";",
      "intdiv(7, 2) = 3; 7 / 2 = 3.5."
     ],
     "c": "<?php\necho 7 / 2, \"\\n\";\necho intdiv(7, 2), \"\\n\";\necho 7 % 2, \"\\n\";\necho 2 ** 3, \"\\n\";\nvar_dump(5 == \"5\", 5 === \"5\");\n$pagina = $_GET[\"pagina\"] ?? 1;\necho \"Página: $pagina\\n\";\necho 3 <=> 5, \"\\n\";\n$lista = \"<ul>\";\n$lista .= \"<li>Banda A</li>\";\n$lista .= \"</ul>\";\necho $lista;",
     "o": "3.5\n3\n1\n8\nbool(true)\nbool(false)\nPágina: 1\n-1\n<ul><li>Banda A</li></ul>",
     "q": {
      "t": "¿Qué devuelve $_GET[\"id\"] ?? 0 si la URL no tiene parámetro id?",
      "o": [
       "null",
       "0",
       "Un error",
       "\"\""
      ],
      "ok": 1,
      "why": "?? devuelve el valor de la derecha cuando la clave no existe."
     },
     "tip": "?? evita los avisos de «Undefined array key» al leer formularios."
    }
   ]
  },
  {
   "t": "Control de flujo y funciones",
   "d": "if, match, bucles, funciones con tipos e incluir archivos.",
   "secciones": [
    {
     "n": "2.1",
     "t": "if, switch y match",
     "m": "5 min",
     "b": [
      "if, elseif y else funcionan como en otros lenguajes. Al mezclar PHP con HTML existe una sintaxis alternativa con dos puntos (if (…): … endif;) que se lee mejor en las plantillas.",
      "match (PHP 8) es una versión moderna de switch: compara con === (estricto), devuelve un valor, no necesita break y lanza un error si ningún caso coincide y no hay default."
     ],
     "k": [
      "if / elseif / else.",
      "En plantillas: if (…): … elseif: … else: … endif;",
      "match: estricto, devuelve valor, sin break.",
      "switch compara con == y necesita break."
     ],
     "c": "<?php\n$nota = 7.5;\nif ($nota >= 9) {\n    echo \"Sobresaliente\\n\";\n} elseif ($nota >= 5) {\n    echo \"Aprobado\\n\";\n} else {\n    echo \"Suspenso\\n\";\n}\n\n$tipo = \"abono\";\n$precio = match ($tipo) {\n    \"dia\" => 39,\n    \"abono\", \"abono-joven\" => 89,\n    \"vip\" => 150,\n    default => 0,\n};\necho \"Precio: $precio €\\n\";\n?>\n<?php if ($precio > 50): ?>\n  <p>Incluye acceso a todos los días.</p>\n<?php endif; ?>",
     "o": "Aprobado\nPrecio: 89 €\n  <p>Incluye acceso a todos los días.</p>",
     "tip": "match es más seguro que switch porque compara también el tipo."
    },
    {
     "n": "2.2",
     "t": "Bucles",
     "m": "5 min",
     "b": [
      "for repite un número de veces conocido, while mientras se cumpla una condición y do-while al menos una vez. foreach es el más usado: recorre arrays, con la forma foreach ($array as $valor) o foreach ($array as $clave => $valor) para tener también la clave.",
      "break sale del bucle y continue salta a la siguiente vuelta. En plantillas HTML también existe la sintaxis alternativa foreach (…): … endforeach;."
     ],
     "k": [
      "foreach ($lista as $item) { … }",
      "foreach ($mapa as $clave => $valor) { … }",
      "En plantillas: foreach (…): … endforeach;",
      "count($array) da el número de elementos."
     ],
     "c": "<?php\nfor ($i = 1; $i <= 3; $i++) {\n    echo \"Vuelta $i\\n\";\n}\n\n$cartel = [\"Viernes\" => \"Banda A\", \"Sábado\" => \"Banda B\", \"Domingo\" => \"Banda C\"];\nforeach ($cartel as $dia => $banda) {\n    echo \"$dia: $banda\\n\";\n}\n?>\n<ul>\n<?php foreach ($cartel as $banda): ?>\n  <li><?= $banda ?></li>\n<?php endforeach; ?>\n</ul>",
     "o": "Vuelta 1\nVuelta 2\nVuelta 3\nViernes: Banda A\nSábado: Banda B\nDomingo: Banda C\n<ul>\n  <li>Banda A</li>\n  <li>Banda B</li>\n  <li>Banda C</li>\n</ul>",
     "tip": "<?= $x ?> es la forma corta de <?php echo $x; ?>."
    },
    {
     "n": "2.3",
     "t": "Funciones",
     "m": "6 min",
     "b": [
      "Las funciones se declaran con function, pueden recibir parámetros con valores por defecto y devolver un valor con return. Desde PHP 7 se pueden declarar los tipos de los parámetros y del retorno (function total(int $n, float $p): float), y con ? un tipo admite null (?string).",
      "Los argumentos con nombre (PHP 8) permiten pasar los parámetros en cualquier orden indicando su nombre. Las funciones flecha (fn($x) => $x * 2) son cómodas para funciones cortas, por ejemplo con array_map."
     ],
     "k": [
      "function nombre(tipo $param = defecto): tipo { return …; }",
      "?string → puede ser string o null.",
      "Argumentos con nombre: precio(base: 100, iva: 0.1).",
      "Funciones flecha: fn($x) => $x * 2."
     ],
     "c": "<?php\ndeclare(strict_types=1);\n\nfunction precioFinal(float $base, float $iva = 0.21, float $descuento = 0): float {\n    return round($base * (1 + $iva) * (1 - $descuento), 2);\n}\n\nfunction saludo(?string $nombre): string {\n    return \"Hola, \" . ($nombre ?? \"invitado\");\n}\n\necho precioFinal(100), \"\\n\";\necho precioFinal(100, descuento: 0.1), \"\\n\";\necho saludo(null), \"\\n\";\n\n$dobles = array_map(fn($n) => $n * 2, [1, 2, 3]);\necho implode(\", \", $dobles), \"\\n\";",
     "o": "121\n108.9\nHola, invitado\n2, 4, 6",
     "tip": "declarad tipos siempre: los errores aparecen antes y el código se entiende mejor."
    },
    {
     "n": "2.4",
     "t": "include y require",
     "m": "4 min",
     "b": [
      "include y require insertan el contenido de otro archivo PHP en ese punto. Se usan para no repetir código: la cabecera y el pie de todas las páginas, la conexión a la base de datos o las funciones comunes.",
      "La diferencia: si el archivo no existe, require detiene la ejecución con un error fatal, mientras que include solo muestra un aviso y continúa. require_once e include_once evitan cargar el mismo archivo dos veces. __DIR__ da la ruta de la carpeta del archivo actual y evita problemas con rutas relativas."
     ],
     "k": [
      "require para archivos imprescindibles (conexión, funciones).",
      "require_once evita cargarlo dos veces.",
      "__DIR__ . \"/archivo.php\" → ruta segura.",
      "Plantillas: header.php y footer.php incluidos en cada página."
     ],
     "c": "<?php\n// includes/header.php\n// <!DOCTYPE html><html lang=\"es\"><head><title><?= $titulo ?></title></head><body><nav>…</nav>\n\n// includes/footer.php\n// <footer>© 2026 Festival DAW</footer></body></html>\n\n// entradas.php\n$titulo = \"Entradas\";\nrequire __DIR__ . \"/includes/header.php\";\n?>\n<main>\n  <h1>Compra tus entradas</h1>\n</main>\n<?php require __DIR__ . \"/includes/footer.php\"; ?>",
     "v": 0,
     "tip": "con esta técnica cambiar el menú de todas las páginas es editar un solo archivo."
    }
   ]
  },
  {
   "t": "Arrays, textos y fechas",
   "d": "Arrays indexados y asociativos, funciones de arrays, strings y fechas.",
   "secciones": [
    {
     "n": "3.1",
     "t": "Arrays indexados y asociativos",
     "m": "5 min",
     "b": [
      "Un array indexado usa posiciones numéricas desde 0: $bandas = [\"A\", \"B\"]. Un array asociativo usa claves de texto: $alumno = [\"nombre\" => \"Ana\", \"curso\" => \"DAW1\"]. Pueden anidarse para formar estructuras complejas, como una lista de productos donde cada uno es un array asociativo.",
      "Se añade al final con $array[] = valor, se lee con $array[\"clave\"], se borra con unset() y se comprueba si existe una clave con isset() o array_key_exists(). print_r() muestra el contenido de forma legible."
     ],
     "k": [
      "$lista = [\"a\", \"b\"]; $lista[] = \"c\";",
      "$mapa = [\"clave\" => \"valor\"];",
      "isset($a[\"x\"]) comprueba que exista y no sea null.",
      "print_r($array) para ver su contenido."
     ],
     "c": "<?php\n$bandas = [\"Banda A\", \"Banda B\"];\n$bandas[] = \"Banda C\";\necho $bandas[0], \" - \", count($bandas), \" bandas\\n\";\n\n$entrada = [\"tipo\" => \"abono\", \"precio\" => 89, \"dias\" => [\"V\", \"S\", \"D\"]];\necho $entrada[\"tipo\"], \": \", $entrada[\"precio\"], \" €\\n\";\necho \"Días: \", implode(\", \", $entrada[\"dias\"]), \"\\n\";\n\n$productos = [\n    [\"nombre\" => \"Camiseta\", \"precio\" => 20],\n    [\"nombre\" => \"Gorra\", \"precio\" => 12],\n];\nforeach ($productos as $p) echo \"- {$p['nombre']}: {$p['precio']} €\\n\";\nvar_dump(isset($entrada[\"vip\"]));\nunset($bandas[1]);\nprint_r($bandas);",
     "o": "Banda A - 3 bandas\nabono: 89 €\nDías: V, S, D\n- Camiseta: 20 €\n- Gorra: 12 €\nbool(false)\nArray\n(\n    [0] => Banda A\n    [2] => Banda C\n)",
     "tip": "los resultados de una consulta a la base de datos llegan como arrays asociativos."
    },
    {
     "n": "3.2",
     "t": "Funciones de arrays",
     "m": "6 min",
     "b": [
      "PHP tiene muchísimas funciones para arrays. Las más usadas: count, in_array (¿existe un valor?), array_search (su clave), array_keys y array_values, array_merge, array_slice, sort/rsort (ordenar valores), asort/ksort (ordenar arrays asociativos por valor o por clave) y usort con una función propia.",
      "Para transformar y filtrar, array_map aplica una función a cada elemento, array_filter se queda con los que cumplen una condición y array_sum suma. array_column extrae una columna de un array de arrays, muy útil con resultados de la base de datos."
     ],
     "k": [
      "in_array($x, $a) comprueba si existe.",
      "array_map / array_filter / array_sum.",
      "array_column($filas, \"precio\") extrae una columna.",
      "sort modifica el array original."
     ],
     "c": "<?php\n$entradas = [\n    [\"tipo\" => \"dia\", \"precio\" => 39, \"vendida\" => true],\n    [\"tipo\" => \"abono\", \"precio\" => 89, \"vendida\" => true],\n    [\"tipo\" => \"vip\", \"precio\" => 150, \"vendida\" => false],\n];\n\n$precios = array_column($entradas, \"precio\");\necho implode(\", \", $precios), \"\\n\";\n\n$vendidas = array_filter($entradas, fn($e) => $e[\"vendida\"]);\necho count($vendidas), \" vendidas\\n\";\necho \"Recaudado: \", array_sum(array_column($vendidas, \"precio\")), \" €\\n\";\n\n$tipos = array_map(fn($e) => strtoupper($e[\"tipo\"]), $entradas);\necho implode(\" | \", $tipos), \"\\n\";\n\nusort($entradas, fn($a, $b) => $b[\"precio\"] <=> $a[\"precio\"]);\necho \"Más cara: \", $entradas[0][\"tipo\"], \"\\n\";\nvar_dump(in_array(\"vip\", array_column($entradas, \"tipo\")));",
     "o": "39, 89, 150\n2 vendidas\nRecaudado: 128 €\nDIA | ABONO | VIP\nMás cara: vip\nbool(true)",
     "a": [
      [
       "count($a)",
       "Número de elementos."
      ],
      [
       "in_array($v, $a)",
       "¿Contiene el valor?"
      ],
      [
       "array_key_exists($k, $a)",
       "¿Existe la clave?"
      ],
      [
       "array_merge($a, $b)",
       "Une arrays."
      ],
      [
       "array_map($fn, $a)",
       "Transforma cada elemento."
      ],
      [
       "array_filter($a, $fn)",
       "Se queda con los que cumplen."
      ],
      [
       "array_column($a, \"col\")",
       "Extrae una columna."
      ],
      [
       "sort / rsort / ksort / usort",
       "Ordenar."
      ],
      [
       "implode(\", \", $a) / explode(\",\", $s)",
       "Array a texto / texto a array."
      ]
     ],
     "at": "Funciones de arrays más usadas",
     "ah": [
      "Función",
      "Qué hace"
     ],
     "tip": "php.net/manual/es/ref.array.php tiene la lista completa con ejemplos."
    },
    {
     "n": "3.3",
     "t": "Funciones de texto",
     "m": "5 min",
     "b": [
      "strlen da la longitud (en bytes; para textos con tildes usa mb_strlen), strtoupper y strtolower cambian mayúsculas (mb_strtoupper con tildes), trim quita espacios, str_contains, str_starts_with y str_ends_with buscan (PHP 8), str_replace sustituye y substr extrae.",
      "explode divide un texto en un array e implode hace lo contrario. sprintf y number_format dan formato a números: number_format(1234.5, 2, \",\", \".\") muestra 1.234,50, el formato español."
     ],
     "k": [
      "mb_strlen y mb_strtoupper para textos con tildes y ñ.",
      "trim() con todo dato de formulario.",
      "number_format($n, 2, \",\", \".\") → formato español.",
      "sprintf(\"%05d\", 42) → 00042."
     ],
     "c": "<?php\n$email = \"  Ana.Garcia@Mail.com \";\n$limpio = strtolower(trim($email));\necho $limpio, \"\\n\";\nvar_dump(str_contains($limpio, \"@\"));\necho substr($limpio, 0, strpos($limpio, \"@\")), \"\\n\";\n\necho mb_strtoupper(\"ñandú\"), \" \", mb_strlen(\"ñandú\"), \" \", strlen(\"ñandú\"), \"\\n\";\nprint_r(explode(\";\", \"Ana;DAW1;8.5\"));\necho str_replace(\"-\", \"/\", \"2026-06-12\"), \"\\n\";\necho number_format(1234.5, 2, \",\", \".\"), \" €\\n\";\necho sprintf(\"Pedido nº %05d\", 42), \"\\n\";",
     "o": "ana.garcia@mail.com\nbool(true)\nana.garcia\nÑANDÚ 5 7\nArray\n(\n    [0] => Ana\n    [1] => DAW1\n    [2] => 8.5\n)\n2026/06/12\n1.234,50 €\nPedido nº 00042",
     "tip": "strlen(\"ñandú\") da 7 porque ñ y ú ocupan 2 bytes cada una en UTF-8."
    },
    {
     "n": "3.4",
     "t": "Fechas",
     "m": "4 min",
     "b": [
      "date(formato) devuelve la fecha actual con el formato indicado: d (día), m (mes), Y (año con 4 cifras), H:i (hora y minutos). Conviene fijar la zona horaria con date_default_timezone_set(\"Europe/Madrid\") o en php.ini.",
      "La clase DateTime es más completa: permite crear fechas, sumar intervalos con modify(\"+7 days\"), comparar fechas y calcular diferencias con diff(), que devuelve un DateInterval."
     ],
     "k": [
      "date(\"d/m/Y H:i\") → 06/11/2026 13:30.",
      "date_default_timezone_set(\"Europe/Madrid\");",
      "new DateTime(\"2026-06-12\") y ->modify(\"+3 days\").",
      "$a->diff($b)->days = días de diferencia."
     ],
     "c": "<?php\ndate_default_timezone_set(\"Europe/Madrid\");\n$inicio = new DateTime(\"2026-06-12 17:00\");\necho $inicio->format(\"d/m/Y H:i\"), \"\\n\";\n\n$fin = (clone $inicio)->modify(\"+2 days\");\necho \"Termina: \", $fin->format(\"l d/m\"), \"\\n\";\n\n$hoy = new DateTime(\"2026-05-01\");\n$faltan = $hoy->diff($inicio)->days;\necho \"Faltan $faltan días\\n\";\nvar_dump($inicio < $fin);",
     "o": "12/06/2026 17:00\nTermina: Sunday 14/06\nFaltan 42 días\nbool(true)",
     "tip": "para nombres de días en español se usa IntlDateFormatter o un array propio."
    }
   ]
  },
  {
   "t": "Formularios",
   "d": "GET y POST, validar y sanear datos, mostrar errores y subir archivos.",
   "secciones": [
    {
     "n": "4.1",
     "t": "Recibir datos: $_GET y $_POST",
     "m": "6 min",
     "b": [
      "Cuando se envía un formulario, PHP recibe los datos en arrays superglobales: $_GET si el método es get (los datos van en la URL) y $_POST si es post. La clave de cada dato es el atributo name del campo HTML. $_SERVER[\"REQUEST_METHOD\"] indica con qué método se ha pedido la página.",
      "Es habitual que el mismo archivo muestre el formulario y lo procese: si la petición es POST, se procesan los datos; si no, solo se muestra el formulario. Los datos siempre llegan como texto y pueden faltar, por eso se leen con ??."
     ],
     "k": [
      "$_POST[\"email\"] ↔ <input name=\"email\">.",
      "if ($_SERVER[\"REQUEST_METHOD\"] === \"POST\") { … }",
      "Los datos llegan como string: conviértelos.",
      "Usa ?? por si el campo no llega."
     ],
     "c": "<?php\n$mensaje = \"\";\nif ($_SERVER[\"REQUEST_METHOD\"] === \"POST\") {\n    $nombre = trim($_POST[\"nombre\"] ?? \"\");\n    $cantidad = (int) ($_POST[\"cantidad\"] ?? 0);\n    $mensaje = \"$nombre ha reservado $cantidad entradas\";\n}\n?>\n<form method=\"post\">\n  <input name=\"nombre\" placeholder=\"Nombre\" required>\n  <input name=\"cantidad\" type=\"number\" min=\"1\" max=\"6\" value=\"1\">\n  <button>Reservar</button>\n</form>\n<p><?= htmlspecialchars($mensaje) ?></p>",
     "v": 0,
     "a": [
      [
       "$_GET",
       "Datos de la URL (?id=7&pagina=2)."
      ],
      [
       "$_POST",
       "Datos enviados por un formulario post."
      ],
      [
       "$_FILES",
       "Archivos subidos."
      ],
      [
       "$_SERVER",
       "Información de la petición y el servidor."
      ],
      [
       "$_SESSION",
       "Datos de la sesión del usuario."
      ],
      [
       "$_COOKIE",
       "Cookies del navegador."
      ]
     ],
     "at": "Arrays superglobales",
     "ah": [
      "Superglobal",
      "Contenido"
     ],
     "tip": "var_dump($_POST) al principio os enseña exactamente qué está llegando."
    },
    {
     "n": "4.2",
     "t": "Validar y sanear",
     "m": "6 min",
     "b": [
      "Nunca te fíes de los datos que llegan del usuario: pueden faltar, venir mal o ser maliciosos. Validar es comprobar que cumplen las reglas (obligatorio, longitud, formato de correo, número en rango); sanear es limpiarlos (trim, convertir a número).",
      "filter_var con FILTER_VALIDATE_EMAIL o FILTER_VALIDATE_INT valida formatos de forma fiable. Lo habitual es acumular los errores en un array y, si está vacío, procesar; si no, volver a mostrar el formulario con los errores y los valores que ya había escrito el usuario."
     ],
     "k": [
      "trim() y conversiones antes de validar.",
      "filter_var($email, FILTER_VALIDATE_EMAIL).",
      "Errores en un array asociativo por campo.",
      "Repite los valores en el formulario para no hacer escribir todo otra vez."
     ],
     "c": "<?php\n$datos = [\"nombre\" => \"  A \", \"email\" => \"ana@mail\", \"edad\" => \"15\"];\n\n$errores = [];\n$nombre = trim($datos[\"nombre\"]);\n$email = trim($datos[\"email\"]);\n$edad = filter_var($datos[\"edad\"], FILTER_VALIDATE_INT);\n\nif (mb_strlen($nombre) < 2) $errores[\"nombre\"] = \"El nombre debe tener al menos 2 letras\";\nif (!filter_var($email, FILTER_VALIDATE_EMAIL)) $errores[\"email\"] = \"El correo no es válido\";\nif ($edad === false || $edad < 16) $errores[\"edad\"] = \"Debes tener 16 años o más\";\n\nif ($errores) {\n    foreach ($errores as $campo => $error) echo \"$campo: $error\\n\";\n} else {\n    echo \"Todo correcto\\n\";\n}",
     "o": "nombre: El nombre debe tener al menos 2 letras\nemail: El correo no es válido\nedad: Debes tener 16 años o más",
     "e": "confiar en required o type=\"email\" del HTML: se pueden saltar fácilmente. PHP debe validar siempre.",
     "tip": "mostrad cada error debajo de su campo con <?= $errores[\"email\"] ?? \"\" ?>."
    },
    {
     "n": "4.3",
     "t": "Escapar la salida: htmlspecialchars",
     "m": "5 min",
     "b": [
      "Si muestras en la página un texto que escribió un usuario sin escaparlo, podría contener HTML o JavaScript que se ejecutaría en el navegador de otros usuarios. Ese ataque se llama XSS (Cross-Site Scripting).",
      "htmlspecialchars convierte los caracteres especiales (<, >, comillas, &) en entidades HTML, de forma que se ven como texto y no se ejecutan. La regla: escapa todo dato al mostrarlo en HTML, no al guardarlo. Es útil crear una función corta como e()."
     ],
     "k": [
      "Escapa al mostrar: <?= htmlspecialchars($x) ?>.",
      "Convierte < > \" ' & en entidades.",
      "Función corta: function e($s) { return htmlspecialchars($s, ENT_QUOTES, \"UTF-8\"); }",
      "También en atributos: value=\"<?= e($nombre) ?>\"."
     ],
     "c": "<?php\nfunction e(string $s): string {\n    return htmlspecialchars($s, ENT_QUOTES, \"UTF-8\");\n}\n\n$comentario = '<script>alert(\"hackeado\")</script> ¡Gran festival!';\n\necho \"Sin escapar: \" . $comentario . \"\\n\";\necho \"Escapado:    \" . e($comentario) . \"\\n\";",
     "o": "Sin escapar: <script>alert(\"hackeado\")</script> ¡Gran festival!\nEscapado:    &lt;script&gt;alert(&quot;hackeado&quot;)&lt;/script&gt; ¡Gran festival!",
     "q": {
      "t": "¿Cuándo hay que usar htmlspecialchars?",
      "o": [
       "Al guardar en la base de datos",
       "Al mostrar datos del usuario en HTML",
       "Solo con contraseñas",
       "Nunca, PHP lo hace solo"
      ],
      "ok": 1,
      "why": "Se escapa en la salida, justo antes de pintar el dato en la página."
     },
     "tip": "los motores de plantillas como Twig o Blade escapan automáticamente."
    },
    {
     "n": "4.4",
     "t": "Subir archivos",
     "m": "6 min",
     "b": [
      "Para subir archivos, el formulario necesita method=\"post\" y enctype=\"multipart/form-data\". En PHP, el archivo llega en $_FILES[\"campo\"] con su nombre original, tipo, tamaño, ruta temporal y un código de error.",
      "Antes de guardarlo hay que comprobar que no hubo error, el tamaño y el tipo real del archivo (con finfo, no con la extensión ni el type que envía el navegador), y generar un nombre nuevo para evitar sobrescrituras y nombres peligrosos. move_uploaded_file lo mueve a su carpeta definitiva."
     ],
     "k": [
      "enctype=\"multipart/form-data\" en el form.",
      "$_FILES[\"foto\"][\"error\"] === UPLOAD_ERR_OK.",
      "Comprueba tamaño y tipo real con finfo.",
      "Genera un nombre nuevo: bin2hex(random_bytes(8))."
     ],
     "c": "<?php\nif ($_SERVER[\"REQUEST_METHOD\"] === \"POST\" && isset($_FILES[\"foto\"])) {\n    $f = $_FILES[\"foto\"];\n    $permitidos = [\"image/jpeg\" => \"jpg\", \"image/png\" => \"png\", \"image/webp\" => \"webp\"];\n\n    if ($f[\"error\"] !== UPLOAD_ERR_OK) {\n        $error = \"Error al subir el archivo\";\n    } elseif ($f[\"size\"] > 2 * 1024 * 1024) {\n        $error = \"Máximo 2 MB\";\n    } else {\n        $tipo = (new finfo(FILEINFO_MIME_TYPE))->file($f[\"tmp_name\"]);\n        if (!isset($permitidos[$tipo])) {\n            $error = \"Solo JPG, PNG o WEBP\";\n        } else {\n            $nombre = bin2hex(random_bytes(8)) . \".\" . $permitidos[$tipo];\n            move_uploaded_file($f[\"tmp_name\"], __DIR__ . \"/uploads/\" . $nombre);\n            $ok = \"Foto guardada como $nombre\";\n        }\n    }\n}\n?>\n<form method=\"post\" enctype=\"multipart/form-data\">\n  <input type=\"file\" name=\"foto\" accept=\"image/*\" required>\n  <button>Subir</button>\n</form>",
     "v": 0,
     "e": "guardar el archivo con su nombre original: alguien podría subir «shell.php» y ejecutarlo en tu servidor.",
     "tip": "la carpeta uploads no debería permitir ejecutar PHP."
    }
   ]
  },
  {
   "t": "Sesiones, cookies y login",
   "d": "Sesiones, cookies, contraseñas seguras y un login completo.",
   "secciones": [
    {
     "n": "5.1",
     "t": "Sesiones",
     "m": "5 min",
     "b": [
      "HTTP no recuerda nada entre una petición y la siguiente. Las sesiones permiten guardar datos del usuario en el servidor mientras navega: session_start() inicia o reanuda la sesión (envía al navegador una cookie con un identificador) y $_SESSION es un array donde guardar y leer datos.",
      "session_start() debe llamarse al principio de cada página que use la sesión, antes de enviar cualquier HTML. Para cerrar la sesión se vacía $_SESSION y se llama a session_destroy()."
     ],
     "k": [
      "session_start() al principio, antes de cualquier salida.",
      "$_SESSION[\"usuario\"] = \"ana\"; guarda un dato.",
      "Los datos se guardan en el servidor; el navegador solo tiene el id.",
      "Cerrar sesión: $_SESSION = []; session_destroy();"
     ],
     "c": "<?php\n// carrito.php\nsession_start();\n\n$_SESSION[\"carrito\"] ??= [];\n\nif (isset($_GET[\"añadir\"])) {\n    $_SESSION[\"carrito\"][] = $_GET[\"añadir\"];\n}\n\n$total = count($_SESSION[\"carrito\"]);\necho \"Tienes $total productos en el carrito: \";\necho implode(\", \", $_SESSION[\"carrito\"]);\n// carrito.php?añadir=abono → se acumula entre peticiones",
     "v": 0,
     "e": "«headers already sent»: has enviado HTML o un espacio antes de session_start() o de header().",
     "tip": "en DevTools → Application → Cookies veréis la cookie PHPSESSID."
    },
    {
     "n": "5.2",
     "t": "Contraseñas: password_hash y password_verify",
     "m": "5 min",
     "b": [
      "Las contraseñas nunca se guardan en texto plano ni con md5 o sha1, que se descifran fácilmente. password_hash() genera un hash seguro (bcrypt o argon2) que incluye una sal aleatoria, así que la misma contraseña produce un hash distinto cada vez.",
      "Para comprobar el login, password_verify(contraseñaEscrita, hashGuardado) devuelve true si coincide. La columna de la base de datos para el hash debe ser de al menos 255 caracteres."
     ],
     "k": [
      "$hash = password_hash($pass, PASSWORD_DEFAULT);",
      "password_verify($pass, $hash) → true o false.",
      "Nunca md5 ni sha1 para contraseñas.",
      "Columna VARCHAR(255) para el hash."
     ],
     "c": "<?php\n$hash = password_hash(\"Secreta123\", PASSWORD_DEFAULT);\necho strlen($hash) . \" caracteres, empieza por \" . substr($hash, 0, 4) . \"\\n\";\n\nvar_dump(password_verify(\"Secreta123\", $hash));\nvar_dump(password_verify(\"secreta123\", $hash));\n\n$otro = password_hash(\"Secreta123\", PASSWORD_DEFAULT);\nvar_dump($hash === $otro);",
     "o": "60 caracteres, empieza por $2y$\nbool(true)\nbool(false)\nbool(false)",
     "tip": "el último false demuestra la sal: mismo texto, hash distinto."
    },
    {
     "n": "5.3",
     "t": "Un login completo",
     "m": "7 min",
     "b": [
      "El flujo de un login: el usuario envía correo y contraseña; se busca el usuario por correo con una consulta preparada; si existe y password_verify es correcto, se regenera el id de sesión (session_regenerate_id, para evitar el robo de sesión) y se guarda su id en $_SESSION; si no, se muestra un mensaje genérico.",
      "Las páginas privadas comprueban al principio si existe $_SESSION[\"usuario_id\"] y, si no, redirigen al login con header(\"Location: login.php\") seguido de exit."
     ],
     "k": [
      "Mensaje genérico: «correo o contraseña incorrectos».",
      "session_regenerate_id(true) tras el login.",
      "Páginas privadas: si no hay sesión, header(\"Location: …\"); exit;",
      "Logout: vaciar la sesión y destruirla."
     ],
     "c": "<?php\n// login.php\nsession_start();\nrequire __DIR__ . \"/db.php\";              // crea $pdo\n\n$error = \"\";\nif ($_SERVER[\"REQUEST_METHOD\"] === \"POST\") {\n    $stmt = $pdo->prepare(\"SELECT id, nombre, password FROM usuarios WHERE email = ?\");\n    $stmt->execute([trim($_POST[\"email\"] ?? \"\")]);\n    $usuario = $stmt->fetch();\n\n    if ($usuario && password_verify($_POST[\"password\"] ?? \"\", $usuario[\"password\"])) {\n        session_regenerate_id(true);\n        $_SESSION[\"usuario_id\"] = $usuario[\"id\"];\n        $_SESSION[\"nombre\"] = $usuario[\"nombre\"];\n        header(\"Location: panel.php\");\n        exit;\n    }\n    $error = \"Correo o contraseña incorrectos\";\n}\n\n// panel.php\nsession_start();\nif (!isset($_SESSION[\"usuario_id\"])) {\n    header(\"Location: login.php\");\n    exit;\n}\necho \"Bienvenida, \" . htmlspecialchars($_SESSION[\"nombre\"]);",
     "v": 0,
     "e": "olvidar el exit después de header(\"Location: …\"): el resto de la página se sigue ejecutando.",
     "tip": "nunca digáis si lo que falla es el correo o la contraseña: ayuda a los atacantes."
    },
    {
     "n": "5.4",
     "t": "Cookies",
     "m": "4 min",
     "b": [
      "Una cookie es un pequeño dato que el servidor guarda en el navegador del usuario y que este envía en cada petición. setcookie(nombre, valor, opciones) la crea, con una fecha de caducidad, y $_COOKIE la lee en las peticiones siguientes.",
      "Se usan para preferencias (idioma, tema) o recordar al usuario. Como el usuario puede verlas y modificarlas, nunca guardes datos sensibles en ellas. Las opciones httponly (JavaScript no puede leerla), secure (solo HTTPS) y samesite mejoran la seguridad."
     ],
     "k": [
      "setcookie(\"tema\", \"oscuro\", [\"expires\" => time() + 86400 * 30]);",
      "$_COOKIE[\"tema\"] ?? \"claro\" la lee.",
      "Se envía antes de cualquier HTML.",
      "httponly, secure y samesite para cookies importantes."
     ],
     "c": "<?php\nif (isset($_GET[\"tema\"])) {\n    setcookie(\"tema\", $_GET[\"tema\"], [\n        \"expires\" => time() + 60 * 60 * 24 * 30,   // 30 días\n        \"path\" => \"/\",\n        \"httponly\" => true,\n        \"samesite\" => \"Lax\",\n    ]);\n    header(\"Location: \" . strtok($_SERVER[\"REQUEST_URI\"], \"?\"));\n    exit;\n}\n$tema = $_COOKIE[\"tema\"] ?? \"claro\";\n?>\n<body class=\"<?= htmlspecialchars($tema) ?>\">\n  <a href=\"?tema=claro\">Claro</a> · <a href=\"?tema=oscuro\">Oscuro</a>\n</body>",
     "v": 0,
     "a": [
      [
       "Sesión",
       "Se guarda en el servidor; el navegador solo tiene un id."
      ],
      [
       "Cookie",
       "Se guarda en el navegador; el usuario puede verla y cambiarla."
      ],
      [
       "Duración sesión",
       "Hasta cerrar el navegador o caducar."
      ],
      [
       "Duración cookie",
       "Hasta la fecha de expires."
      ],
      [
       "Datos sensibles",
       "Sesión sí; cookie nunca."
      ]
     ],
     "at": "Sesiones frente a cookies",
     "ah": [
      "Aspecto",
      "Diferencia"
     ],
     "tip": "en Europa, las cookies que no son técnicas necesitan el consentimiento del usuario."
    }
   ]
  },
  {
   "t": "Bases de datos con PDO",
   "d": "Conectar, consultas preparadas, CRUD completo y transacciones.",
   "secciones": [
    {
     "n": "6.1",
     "t": "Conectar con PDO",
     "m": "5 min",
     "b": [
      "PDO (PHP Data Objects) es la forma recomendada de conectar PHP con bases de datos: funciona con MySQL, PostgreSQL, SQLite y otras con el mismo código. Se crea un objeto PDO con un DSN (tipo de base de datos, host y nombre), el usuario y la contraseña.",
      "Conviene activar dos opciones: ERRMODE_EXCEPTION para que los errores lancen excepciones y FETCH_ASSOC para recibir las filas como arrays asociativos. Lo habitual es poner la conexión en un archivo db.php e incluirlo donde haga falta."
     ],
     "k": [
      "DSN MySQL: mysql:host=localhost;dbname=festival;charset=utf8mb4",
      "DSN PostgreSQL: pgsql:host=localhost;dbname=festival",
      "PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION",
      "Credenciales fuera del código (variables de entorno)."
     ],
     "c": "<?php\n// db.php\n$dsn = \"mysql:host=localhost;dbname=festival;charset=utf8mb4\";\n$usuario = getenv(\"DB_USER\") ?: \"root\";\n$clave = getenv(\"DB_PASS\") ?: \"\";\n\ntry {\n    $pdo = new PDO($dsn, $usuario, $clave, [\n        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,\n        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,\n    ]);\n} catch (PDOException $e) {\n    error_log($e->getMessage());\n    exit(\"No se pudo conectar con la base de datos\");\n}",
     "v": 0,
     "e": "mostrar $e->getMessage() al usuario en producción: puede revelar el usuario, el host o la estructura de la base de datos.",
     "tip": "usad charset=utf8mb4 en MySQL para que funcionen tildes y emojis."
    },
    {
     "n": "6.2",
     "t": "Consultas preparadas",
     "m": "6 min",
     "b": [
      "Una consulta preparada separa el SQL de los datos: el SQL lleva marcadores (? o :nombre) y los valores se pasan aparte en execute(). Así es imposible la inyección SQL, porque los datos nunca se interpretan como código.",
      "Para leer: fetch() devuelve una fila (o false) y fetchAll() todas. Para consultas sin datos del usuario se puede usar $pdo->query(), pero en cuanto entra un dato externo, siempre prepare + execute."
     ],
     "k": [
      "$stmt = $pdo->prepare(\"SELECT … WHERE id = ?\"); $stmt->execute([$id]);",
      "Marcadores con nombre: :email y execute([\"email\" => $email]).",
      "fetch() una fila; fetchAll() todas.",
      "Nunca metas variables directamente en el SQL."
     ],
     "c": "<?php\n$pdo = new PDO(\"sqlite::memory:\", options: [PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC]);\n$pdo->exec(\"CREATE TABLE juegos (id INTEGER PRIMARY KEY, titulo TEXT, precio REAL, stock INT)\");\n$pdo->exec(\"INSERT INTO juegos (titulo, precio, stock) VALUES ('Zelda', 59.99, 3), ('Mario', 49.99, 0), ('Tetris', 9.99, 10)\");\n\n$maximo = 50;\n$stmt = $pdo->prepare(\"SELECT titulo, precio FROM juegos WHERE precio < :max AND stock > 0 ORDER BY precio\");\n$stmt->execute([\"max\" => $maximo]);\nforeach ($stmt->fetchAll() as $j) {\n    echo \"{$j['titulo']}: {$j['precio']} €\\n\";\n}\n\n$stmt = $pdo->prepare(\"SELECT * FROM juegos WHERE id = ?\");\n$stmt->execute([1]);\n$juego = $stmt->fetch();\necho $juego ? \"Encontrado: {$juego['titulo']}\\n\" : \"No existe\\n\";",
     "o": "Tetris: 9.99 €\nEncontrado: Zelda",
     "e": "escribir \"SELECT * FROM usuarios WHERE email = '$email'\": con un email como ' OR '1'='1 se saltan el login.",
     "tip": "este ejemplo usa SQLite en memoria, así que lo podéis ejecutar sin instalar nada."
    },
    {
     "n": "6.3",
     "t": "CRUD completo",
     "m": "6 min",
     "b": [
      "CRUD son las cuatro operaciones básicas: Create (INSERT), Read (SELECT), Update (UPDATE) y Delete (DELETE). Las de escritura se ejecutan igual que una consulta preparada; rowCount() indica cuántas filas se han modificado y lastInsertId() el id de la última fila insertada.",
      "En una aplicación web, cada operación suele ser una acción: listar en index.php, crear desde un formulario, editar con ?id=… y borrar mediante un formulario POST (nunca con un enlace GET, para que no se pueda borrar por accidente o con un enlace malicioso)."
     ],
     "k": [
      "INSERT → lastInsertId() para el id nuevo.",
      "UPDATE/DELETE → rowCount() filas afectadas.",
      "Borrar siempre por POST, nunca con un enlace GET.",
      "Redirige tras un POST correcto (patrón PRG)."
     ],
     "c": "<?php\n$pdo = new PDO(\"sqlite::memory:\", options: [PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC]);\n$pdo->exec(\"CREATE TABLE clientes (id INTEGER PRIMARY KEY, nombre TEXT, email TEXT)\");\n\n// Create\n$ins = $pdo->prepare(\"INSERT INTO clientes (nombre, email) VALUES (?, ?)\");\n$ins->execute([\"Ana\", \"ana@mail.com\"]);\n$ins->execute([\"Luis\", \"luis@mail.com\"]);\necho \"Nuevo id: \", $pdo->lastInsertId(), \"\\n\";\n\n// Update\n$upd = $pdo->prepare(\"UPDATE clientes SET email = ? WHERE id = ?\");\n$upd->execute([\"ana.garcia@mail.com\", 1]);\necho \"Actualizadas: \", $upd->rowCount(), \"\\n\";\n\n// Delete\n$del = $pdo->prepare(\"DELETE FROM clientes WHERE id = ?\");\n$del->execute([2]);\n\n// Read\nforeach ($pdo->query(\"SELECT * FROM clientes\") as $c) {\n    echo \"{$c['id']} - {$c['nombre']} ({$c['email']})\\n\";\n}",
     "o": "Nuevo id: 2\nActualizadas: 1\n1 - Ana (ana.garcia@mail.com)",
     "tip": "el patrón PRG (Post/Redirect/Get) evita que al recargar se reenvíe el formulario."
    },
    {
     "n": "6.4",
     "t": "Transacciones",
     "m": "4 min",
     "b": [
      "Cuando varias operaciones deben aplicarse todas o ninguna, se agrupan en una transacción: beginTransaction() la inicia, commit() la confirma y rollBack() deshace todo si algo falla. Con ERRMODE_EXCEPTION, cualquier error salta al catch, donde se hace el rollBack.",
      "El ejemplo típico es una compra: descontar stock y crear el pedido. Si se descuenta el stock pero falla el pedido, sin transacción la base de datos quedaría inconsistente."
     ],
     "k": [
      "beginTransaction() → operaciones → commit().",
      "En el catch: rollBack().",
      "Imprescindible en compras, pagos y transferencias."
     ],
     "c": "<?php\n$pdo = new PDO(\"sqlite::memory:\", options: [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION]);\n$pdo->exec(\"CREATE TABLE productos (id INT, stock INT); INSERT INTO productos VALUES (1, 2)\");\n$pdo->exec(\"CREATE TABLE pedidos (producto_id INT, cantidad INT)\");\n\nfunction comprar(PDO $pdo, int $id, int $cantidad): string {\n    try {\n        $pdo->beginTransaction();\n        $s = $pdo->prepare(\"UPDATE productos SET stock = stock - ? WHERE id = ? AND stock >= ?\");\n        $s->execute([$cantidad, $id, $cantidad]);\n        if ($s->rowCount() === 0) throw new Exception(\"Stock insuficiente\");\n        $pdo->prepare(\"INSERT INTO pedidos VALUES (?, ?)\")->execute([$id, $cantidad]);\n        $pdo->commit();\n        return \"Compra de $cantidad confirmada\";\n    } catch (Exception $e) {\n        $pdo->rollBack();\n        return \"Cancelada: \" . $e->getMessage();\n    }\n}\necho comprar($pdo, 1, 2), \"\\n\";\necho comprar($pdo, 1, 1), \"\\n\";\necho \"Pedidos: \", $pdo->query(\"SELECT COUNT(*) FROM pedidos\")->fetchColumn(), \"\\n\";",
     "o": "Compra de 2 confirmada\nCancelada: Stock insuficiente\nPedidos: 1",
     "tip": "es la misma idea que BEGIN/COMMIT/ROLLBACK que visteis en SQL."
    }
   ]
  },
  {
   "t": "Programación orientada a objetos",
   "d": "Clases, constructores, herencia, interfaces, namespaces y autoload.",
   "secciones": [
    {
     "n": "7.1",
     "t": "Clases y objetos",
     "m": "6 min",
     "b": [
      "Una clase define atributos (propiedades) y métodos; con new se crean objetos. Dentro de la clase, $this se refiere al objeto actual y -> accede a sus propiedades y métodos. Las propiedades pueden tener tipo y visibilidad: public, protected o private.",
      "PHP 8 permite la promoción de propiedades en el constructor: declarar la visibilidad en los parámetros crea y asigna la propiedad automáticamente. readonly impide modificarla después de crear el objeto."
     ],
     "k": [
      "class Entrada { … } y $e = new Entrada(…);",
      "$this->precio dentro de la clase; $e->precio fuera.",
      "Promoción: public function __construct(private float $precio) {}",
      "readonly: no se puede cambiar tras crearla."
     ],
     "c": "<?php\nclass Entrada {\n    public function __construct(\n        public readonly string $tipo,\n        private float $precio,\n        private int $cantidad = 1,\n    ) {}\n\n    public function total(): float {\n        return $this->precio * $this->cantidad;\n    }\n\n    public function setCantidad(int $n): void {\n        if ($n < 1 || $n > 6) throw new InvalidArgumentException(\"Entre 1 y 6 entradas\");\n        $this->cantidad = $n;\n    }\n}\n\n$e = new Entrada(\"abono\", 89);\n$e->setCantidad(2);\necho \"{$e->tipo}: {$e->total()} €\\n\";\ntry {\n    $e->setCantidad(10);\n} catch (InvalidArgumentException $ex) {\n    echo \"Error: \", $ex->getMessage(), \"\\n\";\n}",
     "o": "abono: 178 €\nError: Entre 1 y 6 entradas",
     "tip": "es la misma idea que en Java, con -> en lugar de punto."
    },
    {
     "n": "7.2",
     "t": "Herencia, interfaces y clases abstractas",
     "m": "6 min",
     "b": [
      "extends hereda de una clase (solo de una), parent::__construct() llama al constructor del padre y los métodos se pueden sobrescribir. Una clase abstract no se puede instanciar y puede obligar a sus hijas a implementar métodos abstractos.",
      "Una interface define métodos que las clases deben implementar con implements; una clase puede implementar varias. Los traits permiten reutilizar métodos en clases que no están relacionadas por herencia."
     ],
     "k": [
      "class Vip extends Entrada { … }",
      "parent::__construct(…) y parent::metodo().",
      "interface Pagable { public function importe(): float; }",
      "trait Registrable { … } y use Registrable; dentro de la clase."
     ],
     "c": "<?php\ninterface Pagable {\n    public function importe(): float;\n}\n\nabstract class Producto implements Pagable {\n    public function __construct(protected string $nombre) {}\n    abstract public function importe(): float;\n    public function linea(): string {\n        return sprintf(\"%-10s %6.2f €\", $this->nombre, $this->importe());\n    }\n}\n\nclass Entrada extends Producto {\n    public function __construct(private float $precio) { parent::__construct(\"Entrada\"); }\n    public function importe(): float { return $this->precio; }\n}\n\nclass Parking extends Producto {\n    public function __construct(private int $horas) { parent::__construct(\"Parking\"); }\n    public function importe(): float { return $this->horas * 2.5; }\n}\n\n$carrito = [new Entrada(39), new Parking(6)];\nforeach ($carrito as $p) echo $p->linea(), \"\\n\";\necho \"Total: \", array_sum(array_map(fn(Pagable $p) => $p->importe(), $carrito)), \" €\\n\";",
     "o": "Entrada     39.00 €\nParking     15.00 €\nTotal: 54 €",
     "tip": "tipar los parámetros con la interfaz (Pagable $p) permite aceptar cualquier clase que la implemente."
    },
    {
     "n": "7.3",
     "t": "static, constantes y métodos mágicos",
     "m": "4 min",
     "b": [
      "Las propiedades y métodos static pertenecen a la clase y se usan con ::, por ejemplo Contador::incrementar(). Dentro de la clase se accede con self::. Las constantes de clase se declaran con const y se leen con Clase::NOMBRE.",
      "Los métodos mágicos empiezan por dos guiones bajos y PHP los llama automáticamente: __construct al crear el objeto, __toString al convertirlo en texto, __get y __set al acceder a propiedades inexistentes."
     ],
     "k": [
      "Clase::metodo() y self::$contador.",
      "const IVA = 0.21; → Clase::IVA.",
      "__toString() define cómo se imprime el objeto.",
      "static es útil para utilidades y contadores."
     ],
     "c": "<?php\nclass Pedido {\n    public const IVA = 0.21;\n    private static int $total = 0;\n    private int $numero;\n\n    public function __construct(private float $importe) {\n        $this->numero = ++self::$total;\n    }\n\n    public static function creados(): int { return self::$total; }\n\n    public function __toString(): string {\n        return sprintf(\"Pedido #%03d: %.2f € con IVA\", $this->numero, $this->importe * (1 + self::IVA));\n    }\n}\n\n$a = new Pedido(100);\n$b = new Pedido(50);\necho $b, \"\\n\";\necho \"Pedidos: \", Pedido::creados(), \" · IVA: \", Pedido::IVA, \"\\n\";",
     "o": "Pedido #002: 60.50 € con IVA\nPedidos: 2 · IVA: 0.21",
     "tip": "__toString es el equivalente a toString de Java."
    },
    {
     "n": "7.4",
     "t": "Namespaces y autoload",
     "m": "5 min",
     "b": [
      "Los namespaces organizan las clases en «carpetas lógicas» y evitan choques de nombres: App\\Modelos\\Usuario y App\\Controladores\\Usuario pueden convivir. Se declaran con namespace al principio del archivo y se importan con use.",
      "El autoload carga automáticamente el archivo de una clase la primera vez que se usa, sin escribir require para cada una. Lo habitual es dejar que Composer lo genere siguiendo el estándar PSR-4: el namespace App\\ corresponde a la carpeta src/."
     ],
     "k": [
      "namespace App\\Modelos; al principio del archivo.",
      "use App\\Modelos\\Usuario; para importar.",
      "PSR-4: App\\Modelos\\Usuario → src/Modelos/Usuario.php.",
      "Composer genera vendor/autoload.php."
     ],
     "c": "<?php\n// src/Modelos/Juego.php\nnamespace App\\Modelos;\n\nclass Juego {\n    public function __construct(public string $titulo, public float $precio) {}\n}\n\n// public/index.php\nrequire __DIR__ . \"/../vendor/autoload.php\";\n\nuse App\\Modelos\\Juego;\n\n$j = new Juego(\"Zelda\", 59.99);\necho $j->titulo;\n\n// composer.json\n// { \"autoload\": { \"psr-4\": { \"App\\\\\": \"src/\" } } }\n// Después: composer dump-autoload",
     "v": 0,
     "tip": "con autoload, añadir una clase nueva es crear el archivo en su carpeta, nada más."
    }
   ]
  },
  {
   "t": "Composer y estructura MVC",
   "d": "Gestionar dependencias, estructura MVC, enrutador y plantillas.",
   "secciones": [
    {
     "n": "8.1",
     "t": "Composer",
     "m": "5 min",
     "b": [
      "Composer es el gestor de dependencias de PHP, como npm en JavaScript o Maven en Java. composer require paquete descarga una librería en la carpeta vendor y la apunta en composer.json; composer install instala todas las dependencias de un proyecto clonado.",
      "Las librerías se buscan en packagist.org. Ejemplos útiles: vlucas/phpdotenv (variables de entorno), phpmailer/phpmailer (enviar correos), monolog/monolog (registros) o phpunit/phpunit (pruebas). La carpeta vendor no se sube a Git."
     ],
     "k": [
      "composer init crea composer.json.",
      "composer require paquete añade una dependencia.",
      "composer install en un proyecto clonado.",
      "vendor/ en el .gitignore."
     ],
     "c": "# Terminal\ncomposer init\ncomposer require vlucas/phpdotenv\ncomposer require --dev phpunit/phpunit\n\n// index.php\nrequire __DIR__ . \"/vendor/autoload.php\";\n\n$dotenv = Dotenv\\Dotenv::createImmutable(__DIR__);\n$dotenv->load();\necho $_ENV[\"DB_NAME\"];\n\n# .env (no se sube a Git)\nDB_NAME=festival\nDB_USER=root",
     "v": 0,
     "a": [
      [
       "composer.json",
       "Lista de dependencias y autoload."
      ],
      [
       "composer.lock",
       "Versiones exactas instaladas."
      ],
      [
       "vendor/",
       "Código de las librerías (no se sube a Git)."
      ],
      [
       "vendor/autoload.php",
       "Carga automática de clases."
      ],
      [
       "packagist.org",
       "Repositorio de paquetes."
      ]
     ],
     "at": "Archivos de Composer",
     "ah": [
      "Archivo",
      "Función"
     ],
     "tip": "sí se suben composer.json y composer.lock; vendor no."
    },
    {
     "n": "8.2",
     "t": "Patrón MVC",
     "m": "6 min",
     "b": [
      "MVC (Modelo-Vista-Controlador) separa la aplicación en tres partes. El Modelo gestiona los datos y la lógica de negocio (consultas a la base de datos). La Vista se encarga de mostrar la información (plantillas HTML). El Controlador recibe la petición, pide los datos al modelo y elige qué vista mostrar.",
      "Esta separación hace el código más ordenado, fácil de mantener y de probar. Es la estructura que usan frameworks como Laravel o Symfony."
     ],
     "k": [
      "Modelo: datos y base de datos.",
      "Vista: HTML, sin lógica de negocio.",
      "Controlador: coordina modelo y vista.",
      "Una carpeta public/ con index.php como única entrada."
     ],
     "c": "proyecto/\n├── public/\n│   ├── index.php          ← única entrada (enrutador)\n│   └── css/\n├── src/\n│   ├── Controladores/\n│   │   └── JuegoControlador.php\n│   ├── Modelos/\n│   │   └── JuegoModelo.php\n│   └── Vistas/\n│       ├── layout.php\n│       └── juegos/lista.php\n├── vendor/\n├── .env\n└── composer.json",
     "v": 0,
     "tip": "configurad el servidor para que la raíz web sea public/: así src/ y .env no son accesibles."
    },
    {
     "n": "8.3",
     "t": "Un enrutador sencillo",
     "m": "6 min",
     "b": [
      "En una aplicación MVC todas las peticiones pasan por public/index.php, que mira la URL y el método y llama al controlador correspondiente. Ese archivo es el enrutador (router).",
      "Con php -S localhost:8000 -t public todas las rutas que no son archivos llegan a index.php. En Apache se consigue con un .htaccess. Los frameworks traen enrutadores completos con parámetros (/juegos/{id}) y middleware."
     ],
     "k": [
      "parse_url($_SERVER[\"REQUEST_URI\"], PHP_URL_PATH) da la ruta.",
      "Un array de rutas → controlador y método.",
      "Si no existe, http_response_code(404).",
      "php -S localhost:8000 -t public."
     ],
     "c": "<?php\n// public/index.php\nrequire __DIR__ . \"/../vendor/autoload.php\";\n\nuse App\\Controladores\\JuegoControlador;\n\n$ruta = parse_url($_SERVER[\"REQUEST_URI\"], PHP_URL_PATH);\n$metodo = $_SERVER[\"REQUEST_METHOD\"];\n\n$rutas = [\n    \"GET /\" => [JuegoControlador::class, \"inicio\"],\n    \"GET /juegos\" => [JuegoControlador::class, \"listar\"],\n    \"POST /juegos\" => [JuegoControlador::class, \"crear\"],\n];\n\n$clave = \"$metodo $ruta\";\nif (isset($rutas[$clave])) {\n    [$clase, $accion] = $rutas[$clave];\n    (new $clase())->$accion();\n} else {\n    http_response_code(404);\n    echo \"Página no encontrada\";\n}",
     "v": 0,
     "tip": "así funciona por dentro cualquier framework: entender esto os ayudará con Laravel."
    },
    {
     "n": "8.4",
     "t": "Controlador, modelo y vista",
     "m": "6 min",
     "b": [
      "El controlador pide los datos al modelo y se los pasa a la vista. Una forma sencilla de pintar una vista es una función render que extrae un array de variables y hace require de la plantilla.",
      "La vista solo muestra datos (con htmlspecialchars) y usa la sintaxis alternativa de PHP para bucles y condiciones. Nada de consultas SQL en las vistas."
     ],
     "k": [
      "Controlador: $juegos = $modelo->todos(); render(\"lista\", compact(\"juegos\"));",
      "extract() convierte las claves del array en variables.",
      "La vista no contiene SQL.",
      "Escapa todo en la vista."
     ],
     "c": "<?php\n// src/Modelos/JuegoModelo.php\nclass JuegoModelo {\n    public function __construct(private PDO $pdo) {}\n    public function todos(): array {\n        return $this->pdo->query(\"SELECT * FROM juegos ORDER BY titulo\")->fetchAll();\n    }\n}\n\n// src/Controladores/JuegoControlador.php\nclass JuegoControlador {\n    public function listar(): void {\n        $juegos = (new JuegoModelo(conexion()))->todos();\n        render(\"juegos/lista\", [\"juegos\" => $juegos, \"titulo\" => \"Catálogo\"]);\n    }\n}\n\n// helpers.php\nfunction render(string $vista, array $datos = []): void {\n    extract($datos);\n    require __DIR__ . \"/Vistas/$vista.php\";\n}\n\n// src/Vistas/juegos/lista.php\n// <h1><?= htmlspecialchars($titulo) ?></h1>\n// <?php foreach ($juegos as $j): ?>\n//   <p><?= htmlspecialchars($j[\"titulo\"]) ?> — <?= $j[\"precio\"] ?> €</p>\n// <?php endforeach; ?>",
     "v": 0,
     "tip": "Laravel hace todo esto por vosotros, pero entenderlo os hará mejores programadores."
    }
   ]
  },
  {
   "t": "APIs REST con PHP",
   "d": "Responder JSON, endpoints REST, códigos HTTP y consumir APIs.",
   "secciones": [
    {
     "n": "9.1",
     "t": "Responder JSON",
     "m": "5 min",
     "b": [
      "Una API devuelve datos en lugar de páginas HTML, normalmente en formato JSON, para que los consuma una aplicación JavaScript, una app móvil u otro servidor. En PHP basta con enviar la cabecera Content-Type: application/json y hacer echo de json_encode($datos).",
      "json_encode convierte arrays y objetos en JSON (JSON_UNESCAPED_UNICODE mantiene las tildes legibles y JSON_PRETTY_PRINT lo formatea). Para leer un JSON que llega en el cuerpo de la petición se usa json_decode(file_get_contents(\"php://input\"), true)."
     ],
     "k": [
      "header(\"Content-Type: application/json\");",
      "echo json_encode($datos, JSON_UNESCAPED_UNICODE);",
      "json_decode($texto, true) → array asociativo.",
      "Cuerpo de la petición: file_get_contents(\"php://input\")."
     ],
     "c": "<?php\n$juegos = [\n    [\"id\" => 1, \"titulo\" => \"Zelda\", \"precio\" => 59.99],\n    [\"id\" => 2, \"titulo\" => \"Mario Kart\", \"precio\" => 49.99],\n];\n// header(\"Content-Type: application/json; charset=utf-8\");\necho json_encode([\"total\" => count($juegos), \"datos\" => $juegos], JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT), \"\\n\";\n\n$entrada = '{\"titulo\": \"Tetris\", \"precio\": 9.99}';\n$nuevo = json_decode($entrada, true);\necho \"Recibido: {$nuevo['titulo']}\\n\";",
     "o": "{\n    \"total\": 2,\n    \"datos\": [\n        {\n            \"id\": 1,\n            \"titulo\": \"Zelda\",\n            \"precio\": 59.99\n        },\n        {\n            \"id\": 2,\n            \"titulo\": \"Mario Kart\",\n            \"precio\": 49.99\n        }\n    ]\n}\nRecibido: Tetris",
     "tip": "probad las APIs con la extensión Thunder Client de VS Code o con Postman."
    },
    {
     "n": "9.2",
     "t": "Endpoints REST y códigos HTTP",
     "m": "7 min",
     "b": [
      "En una API REST cada recurso tiene una URL (/api/juegos) y el método HTTP indica la acción: GET para leer, POST para crear, PUT o PATCH para modificar y DELETE para borrar. La respuesta incluye un código de estado que indica el resultado.",
      "http_response_code() fija el código: 200 (OK), 201 (creado), 204 (sin contenido), 400 (petición incorrecta), 401 (no autenticado), 403 (prohibido), 404 (no encontrado), 422 (datos no válidos) y 500 (error del servidor)."
     ],
     "k": [
      "GET leer · POST crear · PUT/PATCH modificar · DELETE borrar.",
      "http_response_code(201) tras crear.",
      "404 si el recurso no existe; 422 si los datos no son válidos.",
      "Devuelve siempre JSON, también en los errores."
     ],
     "c": "<?php\n// public/api/juegos.php\nheader(\"Content-Type: application/json; charset=utf-8\");\nrequire __DIR__ . \"/../../db.php\";\n\nfunction responder(int $codigo, mixed $datos): never {\n    http_response_code($codigo);\n    echo json_encode($datos, JSON_UNESCAPED_UNICODE);\n    exit;\n}\n\n$metodo = $_SERVER[\"REQUEST_METHOD\"];\n$id = isset($_GET[\"id\"]) ? (int) $_GET[\"id\"] : null;\n\nif ($metodo === \"GET\" && $id) {\n    $s = $pdo->prepare(\"SELECT * FROM juegos WHERE id = ?\");\n    $s->execute([$id]);\n    $juego = $s->fetch() ?: responder(404, [\"error\" => \"No existe\"]);\n    responder(200, $juego);\n}\nif ($metodo === \"GET\") responder(200, $pdo->query(\"SELECT * FROM juegos\")->fetchAll());\n\nif ($metodo === \"POST\") {\n    $d = json_decode(file_get_contents(\"php://input\"), true) ?? [];\n    if (empty($d[\"titulo\"]) || !is_numeric($d[\"precio\"] ?? null)) responder(422, [\"error\" => \"Datos no válidos\"]);\n    $pdo->prepare(\"INSERT INTO juegos (titulo, precio) VALUES (?, ?)\")->execute([$d[\"titulo\"], $d[\"precio\"]]);\n    responder(201, [\"id\" => (int) $pdo->lastInsertId()]);\n}\nresponder(405, [\"error\" => \"Método no permitido\"]);",
     "v": 0,
     "a": [
      [
       "200 OK",
       "Petición correcta."
      ],
      [
       "201 Created",
       "Recurso creado (tras POST)."
      ],
      [
       "204 No Content",
       "Correcto, sin cuerpo (tras DELETE)."
      ],
      [
       "400 Bad Request",
       "Petición mal formada."
      ],
      [
       "401 Unauthorized",
       "Falta autenticación."
      ],
      [
       "403 Forbidden",
       "Autenticado, pero sin permiso."
      ],
      [
       "404 Not Found",
       "El recurso no existe."
      ],
      [
       "422 Unprocessable",
       "Datos no válidos."
      ],
      [
       "500 Internal Server Error",
       "Error del servidor."
      ]
     ],
     "at": "Códigos de estado HTTP",
     "ah": [
      "Código",
      "Significado"
     ],
     "tip": "con fetch desde JavaScript podéis consumir esta API desde vuestro frontend."
    },
    {
     "n": "9.3",
     "t": "Consumir APIs externas y CORS",
     "m": "5 min",
     "b": [
      "PHP también puede pedir datos a otras APIs: file_get_contents(url) es lo más sencillo para peticiones GET, y cURL permite controlar el método, las cabeceras y el cuerpo. Las librerías como Guzzle simplifican mucho el trabajo.",
      "Si tu API la consume JavaScript desde otro dominio, el navegador aplica la política CORS: la API debe enviar la cabecera Access-Control-Allow-Origin con los dominios permitidos, o el navegador bloqueará la respuesta."
     ],
     "k": [
      "file_get_contents($url) para GET sencillos.",
      "cURL o Guzzle para peticiones completas.",
      "CORS: header(\"Access-Control-Allow-Origin: https://mi-front.com\");",
      "Responde a OPTIONS en peticiones con cabeceras propias."
     ],
     "c": "<?php\n// Consumir una API externa\n$json = file_get_contents(\"https://jsonplaceholder.typicode.com/users/1\");\n$usuario = json_decode($json, true);\necho $usuario[\"name\"];\n\n// Con cURL\n$ch = curl_init(\"https://jsonplaceholder.typicode.com/posts\");\ncurl_setopt_array($ch, [\n    CURLOPT_RETURNTRANSFER => true,\n    CURLOPT_POST => true,\n    CURLOPT_HTTPHEADER => [\"Content-Type: application/json\"],\n    CURLOPT_POSTFIELDS => json_encode([\"title\" => \"Hola\"]),\n]);\n$respuesta = json_decode(curl_exec($ch), true);\ncurl_close($ch);\n\n// Permitir CORS en tu API\nheader(\"Access-Control-Allow-Origin: https://festival-daw.vercel.app\");\nheader(\"Access-Control-Allow-Methods: GET, POST, PUT, DELETE\");\nheader(\"Access-Control-Allow-Headers: Content-Type, Authorization\");",
     "v": 0,
     "e": "poner Access-Control-Allow-Origin: * en una API con datos privados y cookies.",
     "tip": "los errores de CORS aparecen en la consola del navegador, no en PHP."
    }
   ]
  },
  {
   "t": "Seguridad y buenas prácticas",
   "d": "XSS, inyección SQL, CSRF, configuración, errores y estilo de código.",
   "secciones": [
    {
     "n": "10.1",
     "t": "Las vulnerabilidades más comunes",
     "m": "6 min",
     "b": [
      "Las tres vulnerabilidades que más se repiten en aplicaciones PHP son: la inyección SQL (se evita con consultas preparadas), el XSS o inyección de código en la página (se evita escapando con htmlspecialchars) y el CSRF, en el que otra web hace que el navegador del usuario envíe un formulario a tu aplicación sin que lo sepa.",
      "El CSRF se evita con un token aleatorio guardado en la sesión e incluido como campo oculto en cada formulario; al recibirlo, se comprueba que coincide. Las cookies con samesite=Lax también ayudan."
     ],
     "k": [
      "Inyección SQL → consultas preparadas.",
      "XSS → htmlspecialchars al mostrar.",
      "CSRF → token en sesión + campo oculto.",
      "Contraseñas → password_hash."
     ],
     "c": "<?php\nsession_start();\n\n// Generar el token una vez por sesión\n$_SESSION[\"csrf\"] ??= bin2hex(random_bytes(32));\n\n// En el formulario\n// <input type=\"hidden\" name=\"csrf\" value=\"<?= $_SESSION[\"csrf\"] ?>\">\n\n// Al procesar\nif ($_SERVER[\"REQUEST_METHOD\"] === \"POST\") {\n    if (!hash_equals($_SESSION[\"csrf\"], $_POST[\"csrf\"] ?? \"\")) {\n        http_response_code(403);\n        exit(\"Petición no válida\");\n    }\n    // … procesar el formulario con seguridad\n}",
     "v": 0,
     "a": [
      [
       "Inyección SQL",
       "Consultas preparadas con PDO."
      ],
      [
       "XSS",
       "htmlspecialchars en toda salida."
      ],
      [
       "CSRF",
       "Token en sesión y en cada formulario."
      ],
      [
       "Contraseñas robadas",
       "password_hash / password_verify."
      ],
      [
       "Robo de sesión",
       "session_regenerate_id tras login, cookies httponly y secure."
      ],
      [
       "Subidas maliciosas",
       "Validar tipo real, renombrar, carpeta sin ejecución."
      ]
     ],
     "at": "Ataque y defensa",
     "ah": [
      "Ataque",
      "Defensa"
     ],
     "tip": "la lista OWASP Top 10 resume los riesgos de seguridad web más importantes."
    },
    {
     "n": "10.2",
     "t": "Errores, logs y configuración",
     "m": "5 min",
     "b": [
      "En desarrollo conviene ver todos los errores (display_errors = On, error_reporting = E_ALL). En producción, en cambio, nunca deben mostrarse al usuario: display_errors = Off y se registran en un archivo con log_errors y error_log().",
      "Las credenciales y la configuración que cambia entre entornos (base de datos, claves de APIs) van en variables de entorno o en un archivo .env que no se sube al repositorio. La carpeta pública del servidor debe ser solo public/."
     ],
     "k": [
      "Desarrollo: mostrar errores. Producción: ocultarlos y registrarlos.",
      "error_log(\"mensaje\") escribe en el log.",
      "Secretos en .env, nunca en el código ni en Git.",
      "Raíz web = public/."
     ],
     "c": "<?php\n// config.php\n$entorno = getenv(\"APP_ENV\") ?: \"desarrollo\";\n\nif ($entorno === \"desarrollo\") {\n    ini_set(\"display_errors\", \"1\");\n    error_reporting(E_ALL);\n} else {\n    ini_set(\"display_errors\", \"0\");\n    ini_set(\"log_errors\", \"1\");\n    ini_set(\"error_log\", __DIR__ . \"/logs/php-error.log\");\n}\n\nset_exception_handler(function (Throwable $e) {\n    error_log($e);\n    http_response_code(500);\n    echo \"Ha ocurrido un error. Inténtalo más tarde.\";\n});",
     "v": 0,
     "tip": "añadid .env, vendor/ y logs/ al .gitignore desde el primer commit."
    },
    {
     "n": "10.3",
     "t": "Buenas prácticas y estilo",
     "m": "4 min",
     "b": [
      "El estándar PSR-12 define el estilo de código PHP: cuatro espacios de sangría, llaves de clases y métodos en línea nueva, clases en PascalCase, métodos y variables en camelCase. Herramientas como PHP-CS-Fixer lo aplican automáticamente y PHPStan detecta errores sin ejecutar el código.",
      "Más prácticas: declare(strict_types=1) y tipos en todas las funciones, funciones pequeñas, nada de lógica en las vistas, pruebas con PHPUnit para la lógica importante y aprender un framework como Laravel una vez dominados los fundamentos."
     ],
     "k": [
      "PSR-12: estilo estándar.",
      "PHP-CS-Fixer formatea; PHPStan analiza.",
      "Tipos y strict_types en todo el código.",
      "Siguiente paso: Laravel o Symfony."
     ],
     "c": "<?php\ndeclare(strict_types=1);\n\nnamespace App\\Servicios;\n\nfinal class CalculadoraPrecios\n{\n    private const IVA = 0.21;\n\n    public function total(float $base, int $cantidad, float $descuento = 0.0): float\n    {\n        if ($cantidad < 1) {\n            throw new \\InvalidArgumentException('La cantidad debe ser al menos 1');\n        }\n\n        return round($base * $cantidad * (1 - $descuento) * (1 + self::IVA), 2);\n    }\n}",
     "v": 0,
     "tip": "Laravel es el framework PHP más demandado en las ofertas de empleo en España."
    }
   ]
  }
 ],
 "chuleta": [
  [
   "<?php … ?>",
   "Delimita el código PHP. Si el archivo es solo PHP, no hace falta cerrar.",
   "<?php echo \"Hola\"; ?>",
   "Fundamentos"
  ],
  [
   "echo / <?= ?>",
   "Muestra texto. <?= $x ?> es la forma corta de <?php echo $x; ?>.",
   "<p><?= $nombre ?></p>",
   "Fundamentos"
  ],
  [
   "$variable",
   "Todas las variables empiezan por $. No se declara el tipo.",
   "$precio = 39.5;",
   "Fundamentos"
  ],
  [
   "\"Hola $nombre\" / 'literal'",
   "Las comillas dobles sustituyen variables; las simples no.",
   "echo \"Total: {$total} €\";",
   "Fundamentos"
  ],
  [
   ". (punto)",
   "Concatenar textos. .= añade al final.",
   "$html .= \"<li>\" . $item . \"</li>\";",
   "Fundamentos"
  ],
  [
   "=== / ??",
   "Comparación estricta / valor por defecto si no existe o es null.",
   "$pagina = $_GET[\"p\"] ?? 1;",
   "Fundamentos"
  ],
  [
   "var_dump / print_r",
   "Mostrar tipo y valor para depurar.",
   "var_dump($_POST);",
   "Fundamentos"
  ],
  [
   "php -S localhost:8000",
   "Servidor integrado de desarrollo.",
   "php -S localhost:8000 -t public",
   "Fundamentos"
  ],
  [
   "if / elseif / else",
   "Condiciones. En plantillas: if (…): … endif;",
   "<?php if ($ok): ?> … <?php endif; ?>",
   "Control y funciones"
  ],
  [
   "match",
   "Como switch pero estricto, devuelve un valor y no necesita break.",
   "$p = match ($tipo) { \"dia\" => 39, default => 0 };",
   "Control y funciones"
  ],
  [
   "foreach",
   "Recorrer arrays, con o sin clave.",
   "foreach ($mapa as $clave => $valor) { … }",
   "Control y funciones"
  ],
  [
   "function f(tipo $x): tipo",
   "Funciones con tipos de parámetro y de retorno.",
   "function total(int $n, float $p = 39): float { return $n * $p; }",
   "Control y funciones"
  ],
  [
   "fn($x) => …",
   "Función flecha para funciones cortas.",
   "array_map(fn($n) => $n * 2, $nums);",
   "Control y funciones"
  ],
  [
   "require / include",
   "Incluir otro archivo. require detiene si falta; _once evita duplicados.",
   "require __DIR__ . \"/db.php\";",
   "Control y funciones"
  ],
  [
   "[ ] / [ \"clave\" => valor ]",
   "Arrays indexados y asociativos.",
   "$a = [\"nombre\" => \"Ana\", \"curso\" => \"DAW1\"];",
   "Arrays y textos"
  ],
  [
   "$array[] = valor",
   "Añadir al final.",
   "$carrito[] = \"abono\";",
   "Arrays y textos"
  ],
  [
   "count / in_array / isset",
   "Tamaño / ¿contiene el valor? / ¿existe la clave?",
   "if (isset($datos[\"email\"])) { … }",
   "Arrays y textos"
  ],
  [
   "array_map / array_filter / array_sum",
   "Transformar, filtrar y sumar.",
   "array_sum(array_column($filas, \"precio\"))",
   "Arrays y textos"
  ],
  [
   "array_column",
   "Extraer una columna de un array de arrays.",
   "array_column($juegos, \"titulo\")",
   "Arrays y textos"
  ],
  [
   "sort / usort",
   "Ordenar. usort con una función de comparación.",
   "usort($a, fn($x, $y) => $x[\"precio\"] <=> $y[\"precio\"]);",
   "Arrays y textos"
  ],
  [
   "explode / implode",
   "Texto a array / array a texto.",
   "explode(\";\", \"Ana;DAW1\")",
   "Arrays y textos"
  ],
  [
   "trim / strtolower / mb_strtoupper",
   "Limpiar y cambiar mayúsculas (mb_ para tildes y ñ).",
   "strtolower(trim($email))",
   "Arrays y textos"
  ],
  [
   "str_contains / str_replace / substr",
   "Buscar, sustituir y extraer texto.",
   "str_replace(\"-\", \"/\", $fecha)",
   "Arrays y textos"
  ],
  [
   "number_format",
   "Formato de número español.",
   "number_format(1234.5, 2, \",\", \".\")  // 1.234,50",
   "Arrays y textos"
  ],
  [
   "date / DateTime",
   "Fechas. Fija la zona horaria Europe/Madrid.",
   "date(\"d/m/Y H:i\")",
   "Arrays y textos"
  ],
  [
   "$_GET / $_POST",
   "Datos de la URL / del formulario. La clave es el name del campo.",
   "$email = trim($_POST[\"email\"] ?? \"\");",
   "Formularios"
  ],
  [
   "$_SERVER[\"REQUEST_METHOD\"]",
   "Saber si la petición es GET o POST.",
   "if ($_SERVER[\"REQUEST_METHOD\"] === \"POST\") { … }",
   "Formularios"
  ],
  [
   "filter_var",
   "Validar formatos de forma fiable.",
   "filter_var($email, FILTER_VALIDATE_EMAIL)",
   "Formularios"
  ],
  [
   "htmlspecialchars",
   "Escapar al mostrar para evitar XSS.",
   "<?= htmlspecialchars($comentario) ?>",
   "Formularios"
  ],
  [
   "$_FILES + move_uploaded_file",
   "Subir archivos. Valida tipo real y renombra.",
   "move_uploaded_file($f[\"tmp_name\"], \"uploads/$nombre\");",
   "Formularios"
  ],
  [
   "header(\"Location: …\"); exit;",
   "Redirigir a otra página. Siempre con exit después.",
   "header(\"Location: gracias.php\"); exit;",
   "Formularios"
  ],
  [
   "session_start / $_SESSION",
   "Guardar datos del usuario entre peticiones.",
   "session_start();\n$_SESSION[\"usuario_id\"] = 7;",
   "Sesiones y seguridad"
  ],
  [
   "session_destroy",
   "Cerrar la sesión.",
   "$_SESSION = []; session_destroy();",
   "Sesiones y seguridad"
  ],
  [
   "password_hash / password_verify",
   "Guardar y comprobar contraseñas de forma segura.",
   "password_verify($pass, $fila[\"password\"])",
   "Sesiones y seguridad"
  ],
  [
   "setcookie / $_COOKIE",
   "Crear y leer cookies (antes de cualquier HTML).",
   "setcookie(\"tema\", \"oscuro\", [\"expires\" => time() + 86400]);",
   "Sesiones y seguridad"
  ],
  [
   "Token CSRF",
   "Campo oculto con un token de la sesión en cada formulario.",
   "$_SESSION[\"csrf\"] ??= bin2hex(random_bytes(32));",
   "Sesiones y seguridad"
  ],
  [
   "new PDO($dsn, $user, $pass)",
   "Conectar. Activa ERRMODE_EXCEPTION y FETCH_ASSOC.",
   "new PDO(\"mysql:host=localhost;dbname=festival;charset=utf8mb4\", $u, $p);",
   "Bases de datos (PDO)"
  ],
  [
   "prepare + execute",
   "Consulta preparada: evita la inyección SQL.",
   "$s = $pdo->prepare(\"SELECT * FROM t WHERE id = ?\");\n$s->execute([$id]);",
   "Bases de datos (PDO)"
  ],
  [
   "fetch / fetchAll / fetchColumn",
   "Una fila / todas / un solo valor.",
   "$fila = $s->fetch();",
   "Bases de datos (PDO)"
  ],
  [
   "lastInsertId / rowCount",
   "Id de la fila insertada / filas afectadas.",
   "$id = $pdo->lastInsertId();",
   "Bases de datos (PDO)"
  ],
  [
   "beginTransaction / commit / rollBack",
   "Agrupar operaciones en una transacción.",
   "$pdo->beginTransaction(); … $pdo->commit();",
   "Bases de datos (PDO)"
  ],
  [
   "class / new / ->",
   "Clases, objetos y acceso a propiedades y métodos.",
   "$e = new Entrada(\"abono\", 89);\n$e->total();",
   "POO y proyecto"
  ],
  [
   "__construct con promoción",
   "Declarar y asignar propiedades en el constructor.",
   "public function __construct(private float $precio) {}",
   "POO y proyecto"
  ],
  [
   "extends / implements / abstract",
   "Herencia, interfaces y clases abstractas.",
   "class Vip extends Entrada implements Pagable { … }",
   "POO y proyecto"
  ],
  [
   "static / self:: / Clase::",
   "Miembros de clase y constantes.",
   "Pedido::IVA",
   "POO y proyecto"
  ],
  [
   "namespace / use",
   "Organizar clases e importarlas.",
   "use App\\\\Modelos\\\\Juego;",
   "POO y proyecto"
  ],
  [
   "composer require",
   "Instalar una librería con Composer.",
   "composer require vlucas/phpdotenv",
   "POO y proyecto"
  ],
  [
   "json_encode / json_decode",
   "Responder y leer JSON en una API.",
   "echo json_encode($datos, JSON_UNESCAPED_UNICODE);",
   "POO y proyecto"
  ],
  [
   "http_response_code",
   "Código de estado HTTP de la respuesta.",
   "http_response_code(404);",
   "POO y proyecto"
  ]
 ],
 "retos": [
  {
   "t": "¿Qué diferencia hay entre \"Hola $n\" y 'Hola $n'?",
   "o": [
    "Ninguna",
    "Las dobles sustituyen la variable; las simples no",
    "Las simples son más seguras",
    "Las dobles dan error"
   ],
   "ok": 1,
   "why": "Solo las comillas dobles interpolan variables."
  },
  {
   "t": "¿Con qué operador se concatenan textos en PHP?",
   "o": [
    "+",
    ".",
    "&",
    ","
   ],
   "ok": 1,
   "why": "En PHP se concatena con el punto."
  },
  {
   "t": "¿Qué función evita el XSS al mostrar datos del usuario?",
   "o": [
    "addslashes",
    "htmlspecialchars",
    "trim",
    "md5"
   ],
   "ok": 1,
   "why": "htmlspecialchars convierte los caracteres especiales en entidades HTML."
  },
  {
   "t": "¿Cuál es la forma segura de consultar con datos del usuario?",
   "o": [
    "query con concatenación",
    "prepare + execute",
    "mysql_query",
    "exec"
   ],
   "ok": 1,
   "why": "Las consultas preparadas separan los datos del SQL."
  },
  {
   "t": "¿Qué hay que llamar antes de usar $_SESSION?",
   "o": [
    "session_open()",
    "session_start()",
    "start()",
    "cookie()"
   ],
   "ok": 1,
   "why": "session_start() inicia o reanuda la sesión."
  },
  {
   "t": "¿Cómo se guardan las contraseñas correctamente?",
   "o": [
    "md5($pass)",
    "password_hash($pass, PASSWORD_DEFAULT)",
    "base64_encode($pass)",
    "En texto plano"
   ],
   "ok": 1,
   "why": "password_hash usa un algoritmo lento con sal aleatoria."
  },
  {
   "t": "¿Qué código HTTP devuelves tras crear un recurso con POST?",
   "o": [
    "200",
    "201",
    "204",
    "302"
   ],
   "ok": 1,
   "why": "201 Created indica que se ha creado el recurso."
  },
  {
   "t": "¿Qué hace match si ningún caso coincide y no hay default?",
   "o": [
    "Devuelve null",
    "Lanza un error",
    "Devuelve false",
    "Ejecuta el primero"
   ],
   "ok": 1,
   "why": "match lanza UnhandledMatchError, a diferencia de switch."
  }
 ]
};
