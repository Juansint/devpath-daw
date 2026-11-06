window.LECCIONES = window.LECCIONES || {};
LECCIONES["xml"] = {
 "lang": "xml",
 "capitulos": [
  {
   "t": "Lenguajes de marcas y XML",
   "d": "Qué es un lenguaje de marcas, sintaxis de XML y documentos bien formados.",
   "secciones": [
    {
     "n": "1.1",
     "t": "¿Qué es XML?",
     "m": "4 min",
     "b": [
      "Un lenguaje de marcas añade etiquetas a un texto para describir su estructura o significado. HTML es uno, pensado para mostrar páginas web con un conjunto fijo de etiquetas. XML (eXtensible Markup Language) es un lenguaje de marcas para almacenar e intercambiar datos, en el que tú inventas las etiquetas que necesites: <artista>, <pedido>, <precio>.",
      "XML se usa en archivos de configuración (pom.xml de Maven, AndroidManifest.xml), documentos de oficina (.docx es un ZIP con XML dentro), feeds RSS, SVG, sitemaps para buscadores e intercambio de datos entre sistemas (facturas electrónicas, servicios web SOAP). Es la base del módulo de Lenguajes de marcas de DAW."
     ],
     "k": [
      "XML describe datos; HTML los muestra.",
      "En XML las etiquetas las defines tú.",
      "Es texto plano: lo leen personas y programas.",
      "Usos: configuración, intercambio de datos, RSS, SVG, .docx."
     ],
     "c": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<festival edicion=\"2026\">\n  <artista id=\"a1\" dia=\"viernes\">\n    <nombre>Banda A</nombre>\n    <genero>rock</genero>\n    <cache>3000</cache>\n  </artista>\n  <artista id=\"a2\" dia=\"viernes\">\n    <nombre>Banda B</nombre>\n    <genero>pop</genero>\n    <cache>4500</cache>\n  </artista>\n  <artista id=\"a3\" dia=\"sabado\">\n    <nombre>Banda C</nombre>\n    <genero>rock</genero>\n    <cache>6000</cache>\n  </artista>\n</festival>",
     "a": [
      [
       "Propósito",
       "HTML: mostrar contenido · XML: describir y transportar datos."
      ],
      [
       "Etiquetas",
       "HTML: predefinidas · XML: las defines tú."
      ],
      [
       "Errores",
       "HTML: el navegador los tolera · XML: un error invalida el documento."
      ],
      [
       "Mayúsculas",
       "HTML: indiferente · XML: distingue mayúsculas."
      ],
      [
       "Cierre",
       "HTML: algunas etiquetas no se cierran · XML: todas se cierran."
      ]
     ],
     "at": "HTML frente a XML",
     "ah": [
      "Aspecto",
      "Diferencia"
     ],
     "tip": "este documento del festival se usa como ejemplo en todo el tema."
    },
    {
     "n": "1.2",
     "t": "Sintaxis: prólogo, elementos y atributos",
     "m": "5 min",
     "b": [
      "Un documento XML suele empezar con el prólogo <?xml version=\"1.0\" encoding=\"UTF-8\"?>, que indica la versión y la codificación. Después hay un único elemento raíz que contiene a todos los demás.",
      "Un elemento tiene etiqueta de apertura, contenido y etiqueta de cierre; si está vacío se puede escribir abreviado: <foto src=\"a.jpg\"/>. Los atributos dan información adicional dentro de la etiqueta de apertura, siempre con su valor entre comillas. Los nombres pueden contener letras, números, guiones y puntos, pero no pueden empezar por un número ni contener espacios."
     ],
     "k": [
      "Prólogo: <?xml version=\"1.0\" encoding=\"UTF-8\"?>",
      "Un único elemento raíz.",
      "Elemento vacío: <entrada tipo=\"vip\"/>.",
      "Valores de atributo siempre entre comillas."
     ],
     "c": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<!-- Comentario: el elemento raíz es pedido -->\n<pedido numero=\"1024\" fecha=\"2026-06-01\">\n  <cliente>Ana García</cliente>\n  <entrada tipo=\"abono\" cantidad=\"2\"/>\n  <total moneda=\"EUR\">178.00</total>\n</pedido>",
     "a": [
      [
       "Prólogo",
       "Declaración inicial con versión y codificación."
      ],
      [
       "Elemento raíz",
       "El que contiene a todos los demás (solo uno)."
      ],
      [
       "Elemento",
       "<nombre>contenido</nombre>."
      ],
      [
       "Elemento vacío",
       "<nombre atributo=\"v\"/>."
      ],
      [
       "Atributo",
       "Par nombre=\"valor\" en la etiqueta de apertura."
      ],
      [
       "Comentario",
       "<!-- texto -->."
      ]
     ],
     "at": "Partes de un documento",
     "ah": [
      "Parte",
      "Qué es"
     ],
     "tip": "en VS Code, la extensión XML de Red Hat marca los errores al momento."
    },
    {
     "n": "1.3",
     "t": "Documentos bien formados",
     "m": "5 min",
     "b": [
      "Un documento XML está bien formado si cumple las reglas de sintaxis: un único elemento raíz, todas las etiquetas cerradas, anidamiento correcto (lo que se abre dentro se cierra dentro), mayúsculas y minúsculas coincidentes en apertura y cierre, valores de atributo entre comillas y sin atributos repetidos en un mismo elemento.",
      "A diferencia de HTML, un procesador XML no intenta arreglar los errores: si el documento no está bien formado, lo rechaza entero. Este ejemplo tiene tres errores; el analizador se detiene en el primero."
     ],
     "k": [
      "Una raíz, todo cerrado, bien anidado.",
      "<Artista> y </artista> no coinciden: distingue mayúsculas.",
      "Atributos siempre entre comillas.",
      "Un solo error invalida todo el documento."
     ],
     "c": "<festival>\n  <Artista>Banda A</artista>\n  <artista><nombre>Banda B</artista></nombre>\n  <artista dia=viernes>Banda C</artista>\n</festival>",
     "o": "Error: Opening and ending tag mismatch: Artista line 2 and artista",
     "e": "cerrar las etiquetas en distinto orden del que se abrieron: <a><b></a></b> no es XML válido.",
     "q": {
      "t": "¿Cuál de estos fragmentos está bien formado?",
      "o": [
       "<a><b></a></b>",
       "<a><b/></a>",
       "<A></a>",
       "<a x=1></a>"
      ],
      "ok": 1,
      "why": "<b/> es un elemento vacío correctamente anidado dentro de <a>."
     },
     "tip": "el error indica la línea: corregid los errores de uno en uno, de arriba abajo."
    },
    {
     "n": "1.4",
     "t": "Entidades, CDATA y caracteres especiales",
     "m": "4 min",
     "b": [
      "Los caracteres < y & no pueden aparecer tal cual en el texto, porque XML los interpreta como inicio de etiqueta o de entidad. Se escriben con las entidades predefinidas: &lt; (<), &gt; (>), &amp; (&), &quot; (\") y &apos; (').",
      "Si un texto contiene muchos caracteres especiales (código, por ejemplo), se puede envolver en una sección CDATA: <![CDATA[ … ]]>. Todo lo que hay dentro se trata como texto literal y no se analiza."
     ],
     "k": [
      "&lt; &gt; &amp; &quot; &apos; son las entidades predefinidas.",
      "<![CDATA[ … ]]> → texto literal sin analizar.",
      "Útil para incluir código o HTML dentro de XML."
     ],
     "c": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<nota>\n  <texto>Precio &lt; 50 € &amp; envío gratis</texto>\n  <codigo><![CDATA[\n    if (precio < 50 && envio == \"gratis\") { aplicarDescuento(); }\n  ]]></codigo>\n</nota>",
     "o": "Precio < 50 € & envío gratis",
     "tip": "el texto que obtiene un programa ya tiene las entidades sustituidas, como muestra la salida."
    }
   ]
  },
  {
   "t": "Estructura y espacios de nombres",
   "d": "El árbol XML, elementos frente a atributos, namespaces y XML en el mundo real.",
   "secciones": [
    {
     "n": "2.1",
     "t": "El árbol XML",
     "m": "4 min",
     "b": [
      "Un documento XML forma un árbol: el elemento raíz es el tronco y cada elemento puede tener hijos, que a su vez tienen sus propios hijos. Los elementos que comparten padre son hermanos. Los atributos y el texto también son nodos del árbol.",
      "Esta forma de árbol es la que recorren las herramientas de XML (XPath, XSLT, DOM en JavaScript o Java) y es exactamente la misma idea que el DOM de una página HTML."
     ],
     "k": [
      "Raíz → hijos → nietos: un árbol de nodos.",
      "Tipos de nodo: elemento, atributo, texto, comentario.",
      "Padre, hijo, hermano, ancestro, descendiente."
     ],
     "c": "festival  (edicion=\"2026\")\n├── artista  (id=\"a1\", dia=\"viernes\")\n│   ├── nombre → \"Banda A\"\n│   ├── genero → \"rock\"\n│   └── cache  → \"3000\"\n├── artista  (id=\"a2\", dia=\"viernes\")\n│   ├── nombre → \"Banda B\"\n│   └── …\n└── artista  (id=\"a3\", dia=\"sabado\")\n    └── …",
     "v": 0,
     "tip": "dibujad el árbol de vuestros documentos antes de escribir XPath o XSLT."
    },
    {
     "n": "2.2",
     "t": "¿Elemento o atributo?",
     "m": "4 min",
     "b": [
      "La misma información se puede guardar como elemento hijo o como atributo. Como norma: los atributos son para metadatos breves (identificadores, tipos, unidades, fechas) y los elementos para los datos principales, sobre todo si pueden repetirse, tener estructura interna o ser largos.",
      "Los atributos no pueden repetirse en un mismo elemento ni contener otros elementos, y su orden no importa. Los elementos sí pueden repetirse, anidarse y su orden se conserva."
     ],
     "k": [
      "Atributos: ids, tipos, unidades, metadatos.",
      "Elementos: datos principales y estructuras.",
      "Un atributo no se repite ni tiene hijos.",
      "Sé coherente en todo el documento."
     ],
     "c": "<!-- Con atributos: compacto, para datos simples -->\n<entrada id=\"e1\" tipo=\"abono\" precio=\"89\" moneda=\"EUR\"/>\n\n<!-- Con elementos: ampliable y con estructura -->\n<entrada id=\"e1\">\n  <tipo>abono</tipo>\n  <precio moneda=\"EUR\">89</precio>\n  <dias>\n    <dia>viernes</dia>\n    <dia>sabado</dia>\n  </dias>\n</entrada>",
     "v": 0,
     "tip": "fijaos en que moneda queda como atributo: es un metadato del precio."
    },
    {
     "n": "2.3",
     "t": "Espacios de nombres (namespaces)",
     "m": "5 min",
     "b": [
      "Cuando se combinan documentos de distintos orígenes, dos elementos pueden llamarse igual con significados distintos (un <nombre> de cliente y un <nombre> de producto). Los espacios de nombres lo resuelven asociando los elementos a una URI única con xmlns.",
      "xmlns=\"URI\" define el espacio de nombres por defecto para el elemento y sus descendientes; xmlns:prefijo=\"URI\" define un prefijo que se antepone a los nombres (cli:nombre). La URI es solo un identificador: no hace falta que exista una página en esa dirección."
     ],
     "k": [
      "xmlns=\"URI\" → espacio de nombres por defecto.",
      "xmlns:cli=\"URI\" → prefijo cli:.",
      "La URI identifica; no tiene por qué existir.",
      "XSD, XSLT y SVG usan sus propios namespaces."
     ],
     "c": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<pedido xmlns=\"https://festivaldaw.es/pedidos\"\n        xmlns:cli=\"https://festivaldaw.es/clientes\">\n  <cli:cliente>\n    <cli:nombre>Ana</cli:nombre>\n  </cli:cliente>\n  <producto>\n    <nombre>Abono</nombre>\n  </producto>\n</pedido>",
     "o": "{https://festivaldaw.es/clientes}nombre → Ana\n{https://festivaldaw.es/pedidos}nombre → Abono",
     "tip": "la salida muestra el nombre completo de cada elemento, con su namespace entre llaves."
    },
    {
     "n": "2.4",
     "t": "XML en el mundo real",
     "m": "4 min",
     "b": [
      "Muchos formatos que usas a diario son XML. Los archivos SVG son dibujos vectoriales en XML; los sitemaps (sitemap.xml) indican a los buscadores las páginas de una web; los feeds RSS publican noticias; Maven describe los proyectos Java en pom.xml; Android define sus interfaces en XML; y los documentos de Office son ZIPs llenos de XML.",
      "En la administración española, la factura electrónica (Facturae) es un XML firmado digitalmente. Conocer XML te permite leer y generar todos estos formatos."
     ],
     "k": [
      "SVG, RSS, sitemap.xml, pom.xml, Facturae, .docx.",
      "Un sitemap ayuda al SEO de tu web.",
      "Muchos servicios web antiguos (SOAP) intercambian XML."
     ],
     "c": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<urlset xmlns=\"http://www.sitemaps.org/schemas/sitemap/0.9\">\n  <url>\n    <loc>https://festivaldaw.es/</loc>\n    <lastmod>2026-11-06</lastmod>\n    <priority>1.0</priority>\n  </url>\n  <url>\n    <loc>https://festivaldaw.es/entradas</loc>\n    <lastmod>2026-11-01</lastmod>\n    <priority>0.8</priority>\n  </url>\n</urlset>",
     "v": 0,
     "tip": "cambiad la extensión de un .docx a .zip y abridlo: veréis el XML de dentro."
    }
   ]
  },
  {
   "t": "Validación con DTD",
   "d": "Documentos válidos, declarar elementos y atributos, DTD interna y externa.",
   "secciones": [
    {
     "n": "3.1",
     "t": "Bien formado frente a válido",
     "m": "4 min",
     "b": [
      "Bien formado significa que el documento respeta la sintaxis de XML. Válido significa, además, que cumple una gramática concreta que define qué elementos y atributos puede haber, en qué orden y con qué valores. Esa gramática se escribe en una DTD o en un esquema XSD.",
      "Validar es imprescindible cuando dos sistemas intercambian datos: ambos acuerdan una gramática y cualquier documento que no la cumpla se rechaza antes de procesarlo."
     ],
     "k": [
      "Bien formado = sintaxis correcta.",
      "Válido = bien formado + cumple una DTD o XSD.",
      "Todo documento válido está bien formado (al revés no).",
      "DTD es más simple; XSD más potente."
     ],
     "c": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<!DOCTYPE festival [\n  <!ELEMENT festival (artista+)>\n  <!ELEMENT artista (nombre, genero, cache?)>\n  <!ELEMENT nombre (#PCDATA)>\n  <!ELEMENT genero (#PCDATA)>\n  <!ELEMENT cache (#PCDATA)>\n  <!ATTLIST artista\n      id  ID #REQUIRED\n      dia (viernes | sabado | domingo) #REQUIRED>\n]>\n<festival>\n  <artista id=\"a1\" dia=\"viernes\">\n    <nombre>Banda A</nombre>\n    <genero>rock</genero>\n  </artista>\n</festival>",
     "o": "Documento válido",
     "tip": "la DTD de este ejemplo está dentro del propio documento (DTD interna)."
    },
    {
     "n": "3.2",
     "t": "Declarar elementos",
     "m": "6 min",
     "b": [
      "<!ELEMENT nombre contenido> declara un elemento y qué puede contener: #PCDATA para texto, EMPTY si está vacío, ANY para cualquier cosa, o un modelo con los hijos permitidos. En el modelo, la coma indica secuencia (en ese orden) y la barra | indica alternativa (uno u otro).",
      "Los indicadores de cardinalidad dicen cuántas veces aparece un hijo: sin indicador exactamente una vez, ? cero o una (opcional), + una o más, * cero o más."
     ],
     "k": [
      "<!ELEMENT nombre (#PCDATA)> → texto.",
      "(a, b, c) → secuencia en ese orden.",
      "(a | b) → uno u otro.",
      "? opcional · + una o más · * cero o más."
     ],
     "c": "<!ELEMENT festival (artista+)>\n<!ELEMENT artista (nombre, genero, cache?)>\n<!ELEMENT nombre (#PCDATA)>\n<!ELEMENT genero (#PCDATA)>\n<!ELEMENT cache (#PCDATA)>\n<!ELEMENT foto EMPTY>\n<!ELEMENT contacto (email | telefono)+>",
     "v": 0,
     "a": [
      [
       "(sin indicador)",
       "Exactamente una vez."
      ],
      [
       "?",
       "Cero o una vez (opcional)."
      ],
      [
       "+",
       "Una o más veces."
      ],
      [
       "*",
       "Cero o más veces."
      ],
      [
       ",",
       "Secuencia: en ese orden."
      ],
      [
       "|",
       "Alternativa: uno u otro."
      ],
      [
       "#PCDATA",
       "Texto."
      ],
      [
       "EMPTY",
       "Elemento vacío."
      ]
     ],
     "at": "Símbolos de la DTD",
     "ah": [
      "Símbolo",
      "Significado"
     ],
     "q": {
      "t": "¿Qué significa (nombre, email*)?",
      "o": [
       "Nombre opcional y un email",
       "Un nombre seguido de cero o más emails",
       "Nombre o email",
       "Uno o más nombres"
      ],
      "ok": 1,
      "why": "La coma marca secuencia y * cero o más repeticiones."
     },
     "tip": "leed el modelo en voz alta: «un nombre, un género y opcionalmente un caché»."
    },
    {
     "n": "3.3",
     "t": "Declarar atributos",
     "m": "6 min",
     "b": [
      "<!ATTLIST elemento atributo tipo valorPorDefecto> declara los atributos de un elemento. Los tipos más usados son CDATA (texto), ID (identificador único en todo el documento), IDREF (referencia a un ID existente) y una lista de valores permitidos entre paréntesis.",
      "El valor por defecto indica si el atributo es obligatorio (#REQUIRED), opcional (#IMPLIED), fijo (#FIXED \"valor\") o tiene un valor por defecto (\"valor\"). En este ejemplo, el día «lunes» no está en la lista permitida."
     ],
     "k": [
      "<!ATTLIST artista id ID #REQUIRED>",
      "Lista de valores: dia (viernes | sabado | domingo).",
      "#REQUIRED obligatorio · #IMPLIED opcional.",
      "ID: único en el documento; no puede empezar por número."
     ],
     "c": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<!DOCTYPE festival [\n  <!ELEMENT festival (artista+)>\n  <!ELEMENT artista (nombre, genero, cache?)>\n  <!ELEMENT nombre (#PCDATA)>\n  <!ELEMENT genero (#PCDATA)>\n  <!ELEMENT cache (#PCDATA)>\n  <!ATTLIST artista\n      id  ID #REQUIRED\n      dia (viernes | sabado | domingo) #REQUIRED>\n]>\n<festival>\n  <artista id=\"a1\" dia=\"lunes\">\n    <nombre>Banda A</nombre>\n    <genero>rock</genero>\n  </artista>\n</festival>",
     "o": "No válido: Value \"lunes\" for attribute dia of artista is not among the enumerated set",
     "a": [
      [
       "CDATA",
       "Texto cualquiera."
      ],
      [
       "ID",
       "Identificador único en el documento."
      ],
      [
       "IDREF / IDREFS",
       "Referencia a uno o varios ID."
      ],
      [
       "(a",
       "b | c) | Uno de los valores de la lista."
      ],
      [
       "#REQUIRED",
       "Obligatorio."
      ],
      [
       "#IMPLIED",
       "Opcional."
      ],
      [
       "#FIXED \"v\"",
       "Siempre ese valor."
      ],
      [
       "\"v\"",
       "Valor por defecto si no se indica."
      ]
     ],
     "at": "Tipos y valores de atributos",
     "ah": [
      "Tipo / valor",
      "Significado"
     ],
     "tip": "cambiad «lunes» por «sabado» y el documento vuelve a ser válido."
    },
    {
     "n": "3.4",
     "t": "DTD externa",
     "m": "4 min",
     "b": [
      "La DTD puede estar dentro del documento (interna, entre corchetes en el DOCTYPE) o en un archivo .dtd aparte (externa), que se enlaza con SYSTEM y una ruta. La externa permite que muchos documentos compartan la misma gramática.",
      "Las DTD tienen limitaciones: no tienen tipos de datos (no pueden exigir que cache sea un número), no entienden bien los namespaces y no usan sintaxis XML. Por eso para validaciones serias se usa XSD."
     ],
     "k": [
      "<!DOCTYPE festival SYSTEM \"festival.dtd\">",
      "Externa: una DTD para muchos documentos.",
      "Limitación: no hay tipos de datos.",
      "XSD supera estas limitaciones."
     ],
     "c": "<!-- festival.xml -->\n<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<!DOCTYPE festival SYSTEM \"festival.dtd\">\n<festival>\n  <artista id=\"a1\" dia=\"viernes\">\n    <nombre>Banda A</nombre>\n    <genero>rock</genero>\n  </artista>\n</festival>\n\n<!-- Validar desde la terminal -->\nxmllint --noout --valid festival.xml",
     "v": 0,
     "tip": "xmllint viene con libxml2; en VS Code la extensión XML también valida."
    }
   ]
  },
  {
   "t": "Validación con XSD",
   "d": "Esquemas XML: tipos simples, restricciones, tipos complejos y atributos.",
   "secciones": [
    {
     "n": "4.1",
     "t": "Estructura de un esquema XSD",
     "m": "6 min",
     "b": [
      "XML Schema (XSD) es la forma moderna de definir la gramática de un documento. Está escrito en XML y, a diferencia de la DTD, tiene tipos de datos (xs:string, xs:integer, xs:date, xs:decimal…), restricciones y soporte completo de namespaces.",
      "Un esquema empieza con xs:schema y declara el elemento raíz con xs:element. Si un elemento tiene hijos o atributos, su tipo es complejo (xs:complexType) y dentro se indica el orden de los hijos con xs:sequence. Este esquema valida el documento del festival y detecta un caché negativo."
     ],
     "k": [
      "<xs:schema xmlns:xs=\"http://www.w3.org/2001/XMLSchema\">",
      "xs:element declara un elemento con su type.",
      "xs:complexType para elementos con hijos o atributos.",
      "xs:sequence: hijos en ese orden."
     ],
     "c": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<xs:schema xmlns:xs=\"http://www.w3.org/2001/XMLSchema\">\n  <xs:element name=\"festival\">\n    <xs:complexType>\n      <xs:sequence>\n        <xs:element name=\"artista\" maxOccurs=\"unbounded\">\n          <xs:complexType>\n            <xs:sequence>\n              <xs:element name=\"nombre\" type=\"xs:string\"/>\n              <xs:element name=\"genero\" type=\"xs:string\"/>\n              <xs:element name=\"cache\" type=\"xs:positiveInteger\" minOccurs=\"0\"/>\n            </xs:sequence>\n            <xs:attribute name=\"id\" type=\"xs:ID\" use=\"required\"/>\n            <xs:attribute name=\"dia\" use=\"required\">\n              <xs:simpleType>\n                <xs:restriction base=\"xs:string\">\n                  <xs:enumeration value=\"viernes\"/>\n                  <xs:enumeration value=\"sabado\"/>\n                  <xs:enumeration value=\"domingo\"/>\n                </xs:restriction>\n              </xs:simpleType>\n            </xs:attribute>\n          </xs:complexType>\n        </xs:element>\n      </xs:sequence>\n      <xs:attribute name=\"edicion\" type=\"xs:gYear\"/>\n    </xs:complexType>\n  </xs:element>\n</xs:schema>",
     "o": "festival.xml original → Documento válido\nCon <cache>-50</cache> → No válido: Element 'cache': '-50' is not a valid value of the atomic type 'xs:positiveInteger'.",
     "tip": "xs:positiveInteger rechaza el -50: una DTD nunca podría detectarlo."
    },
    {
     "n": "4.2",
     "t": "Tipos simples y restricciones",
     "m": "6 min",
     "b": [
      "XSD trae muchos tipos predefinidos: xs:string, xs:integer, xs:decimal, xs:boolean, xs:date (formato AAAA-MM-DD), xs:time, xs:anyURI… A partir de ellos se crean tipos propios con xs:simpleType y xs:restriction, añadiendo facetas.",
      "Las facetas más usadas son minInclusive/maxInclusive (rango numérico), minLength/maxLength (longitud), pattern (expresión regular), enumeration (lista de valores) y fractionDigits (decimales). En el ejemplo, el DNI no cumple el patrón de 8 cifras y una letra."
     ],
     "k": [
      "xs:restriction base=\"xs:decimal\" con facetas.",
      "pattern: expresión regular.",
      "enumeration: lista de valores permitidos.",
      "Un tipo con nombre se reutiliza en varios elementos."
     ],
     "c": "<xs:schema xmlns:xs=\"http://www.w3.org/2001/XMLSchema\">\n  <xs:simpleType name=\"tipoDni\">\n    <xs:restriction base=\"xs:string\">\n      <xs:pattern value=\"[0-9]{8}[A-Z]\"/>\n    </xs:restriction>\n  </xs:simpleType>\n  <xs:simpleType name=\"tipoNota\">\n    <xs:restriction base=\"xs:decimal\">\n      <xs:minInclusive value=\"0\"/>\n      <xs:maxInclusive value=\"10\"/>\n      <xs:fractionDigits value=\"2\"/>\n    </xs:restriction>\n  </xs:simpleType>\n  <xs:element name=\"alumno\">\n    <xs:complexType>\n      <xs:sequence>\n        <xs:element name=\"dni\" type=\"tipoDni\"/>\n        <xs:element name=\"nota\" type=\"tipoNota\"/>\n      </xs:sequence>\n    </xs:complexType>\n  </xs:element>\n</xs:schema>",
     "o": "<alumno><dni>12345678Z</dni><nota>8.5</nota></alumno> → Documento válido\n<alumno><dni>1234Z</dni><nota>8.5</nota></alumno> → No válido: Element 'dni': [facet 'pattern'] The value '1234Z' is not accepted by the pattern '[0-9]{8}[A-Z]'.",
     "a": [
      [
       "minInclusive / maxInclusive",
       "Valor mínimo / máximo incluido."
      ],
      [
       "minExclusive / maxExclusive",
       "Mínimo / máximo excluido."
      ],
      [
       "minLength / maxLength / length",
       "Longitud del texto."
      ],
      [
       "pattern",
       "Expresión regular."
      ],
      [
       "enumeration",
       "Valores permitidos (uno por faceta)."
      ],
      [
       "totalDigits / fractionDigits",
       "Cifras totales / decimales."
      ]
     ],
     "at": "Facetas de restricción",
     "ah": [
      "Faceta",
      "Qué limita"
     ],
     "tip": "los patrones de XSD son expresiones regulares como las de JavaScript, sin ^ ni $."
    },
    {
     "n": "4.3",
     "t": "Tipos complejos y ocurrencias",
     "m": "5 min",
     "b": [
      "Dentro de un xs:complexType, los hijos se agrupan con xs:sequence (todos, en ese orden), xs:choice (solo uno de ellos) o xs:all (todos, en cualquier orden). Cada xs:element admite minOccurs y maxOccurs para indicar cuántas veces aparece: por defecto, exactamente una; maxOccurs=\"unbounded\" significa sin límite.",
      "Los tipos complejos también pueden tener nombre y reutilizarse, o extender otros tipos con xs:extension, de forma parecida a la herencia."
     ],
     "k": [
      "xs:sequence en orden · xs:choice uno de ellos · xs:all cualquier orden.",
      "minOccurs=\"0\" → opcional.",
      "maxOccurs=\"unbounded\" → sin límite.",
      "Tipos con nombre para reutilizar."
     ],
     "c": "<xs:complexType name=\"tipoContacto\">\n  <xs:choice>\n    <xs:element name=\"email\" type=\"xs:string\"/>\n    <xs:element name=\"telefono\" type=\"xs:string\"/>\n  </xs:choice>\n</xs:complexType>\n\n<xs:element name=\"cliente\">\n  <xs:complexType>\n    <xs:sequence>\n      <xs:element name=\"nombre\" type=\"xs:string\"/>\n      <xs:element name=\"contacto\" type=\"tipoContacto\" maxOccurs=\"3\"/>\n      <xs:element name=\"notas\" type=\"xs:string\" minOccurs=\"0\"/>\n    </xs:sequence>\n  </xs:complexType>\n</xs:element>",
     "v": 0,
     "a": [
      [
       "minOccurs=\"0\"",
       "Opcional."
      ],
      [
       "minOccurs=\"1\" (defecto)",
       "Obligatorio."
      ],
      [
       "maxOccurs=\"1\" (defecto)",
       "Como mucho una vez."
      ],
      [
       "maxOccurs=\"unbounded\"",
       "Ilimitado."
      ],
      [
       "xs:sequence",
       "Hijos en orden."
      ],
      [
       "xs:choice",
       "Uno de los hijos."
      ],
      [
       "xs:all",
       "Todos, en cualquier orden."
      ]
     ],
     "at": "Ocurrencias y agrupaciones",
     "ah": [
      "Elemento",
      "Significado"
     ],
     "tip": "equivalencias con la DTD: ? = minOccurs 0 · + = maxOccurs unbounded · * = ambos."
    },
    {
     "n": "4.4",
     "t": "Atributos y enlazar el esquema",
     "m": "4 min",
     "b": [
      "Los atributos se declaran con xs:attribute dentro del complexType, después de la secuencia de hijos, con su tipo y use=\"required\" si son obligatorios (por defecto son opcionales). También admiten default y fixed.",
      "Para indicar en un documento qué esquema usa, se añade al elemento raíz el namespace xsi y el atributo xsi:noNamespaceSchemaLocation con la ruta del .xsd (o xsi:schemaLocation si el documento tiene namespace)."
     ],
     "k": [
      "<xs:attribute name=\"id\" type=\"xs:ID\" use=\"required\"/>",
      "Los atributos van después de la secuencia.",
      "xsi:noNamespaceSchemaLocation=\"festival.xsd\" en la raíz.",
      "xmllint --schema festival.xsd festival.xml valida."
     ],
     "c": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<festival edicion=\"2026\"\n          xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"\n          xsi:noNamespaceSchemaLocation=\"festival.xsd\">\n  <artista id=\"a1\" dia=\"viernes\">\n    <nombre>Banda A</nombre>\n    <genero>rock</genero>\n  </artista>\n</festival>\n\n# Terminal\nxmllint --noout --schema festival.xsd festival.xml",
     "v": 0,
     "tip": "los editores usan el xsi:noNamespaceSchemaLocation para autocompletar etiquetas."
    }
   ]
  },
  {
   "t": "XPath",
   "d": "Consultar documentos XML: rutas, predicados, funciones y ejes.",
   "secciones": [
    {
     "n": "5.1",
     "t": "Rutas",
     "m": "5 min",
     "b": [
      "XPath es un lenguaje para seleccionar partes de un documento XML, como las rutas de carpetas de un sistema de archivos. / empieza desde la raíz y separa niveles; // busca a cualquier profundidad; @ selecciona atributos; text() el texto de un elemento; * cualquier elemento y .. el padre.",
      "Se usa en XSLT, en XQuery, en Java y JavaScript para leer XML, en herramientas de testing y para extraer datos de páginas web. Los resultados de abajo están calculados sobre el documento del festival del capítulo 1."
     ],
     "k": [
      "/festival/artista → hijos artista de la raíz.",
      "//nombre → todos los nombre, estén donde estén.",
      "@dia → atributo dia.",
      "text() → el texto del elemento."
     ],
     "c": "/festival/artista/nombre/text()\n//genero/text()\n/festival/@edicion\n//artista/@id\ncount(//artista)",
     "o": "/festival/artista/nombre/text()\n→ Banda A, Banda B, Banda C\n//genero/text()\n→ rock, pop, rock\n/festival/@edicion\n→ 2026\n//artista/@id\n→ a1, a2, a3\ncount(//artista)\n→ 3",
     "a": [
      [
       "/",
       "Desde la raíz / hijo directo."
      ],
      [
       "//",
       "Descendiente a cualquier nivel."
      ],
      [
       ".",
       "Nodo actual."
      ],
      [
       "..",
       "Nodo padre."
      ],
      [
       "@atributo",
       "Un atributo."
      ],
      [
       "*",
       "Cualquier elemento."
      ],
      [
       "text()",
       "Texto del elemento."
      ]
     ],
     "at": "Sintaxis básica de XPath",
     "ah": [
      "Expresión",
      "Selecciona"
     ],
     "tip": "en el navegador, $x(\"//h2\") en la consola ejecuta XPath sobre la página."
    },
    {
     "n": "5.2",
     "t": "Predicados",
     "m": "5 min",
     "b": [
      "Los predicados filtran nodos con una condición entre corchetes: //artista[@dia=\"viernes\"] selecciona los artistas del viernes y //artista[cache > 4000] los que cobran más de 4000. Pueden combinarse con and y or, y un número entre corchetes selecciona por posición (empezando en 1).",
      "last() es el último y position() la posición actual: //artista[last()] o //artista[position() <= 2]."
     ],
     "k": [
      "[@atributo=\"valor\"] filtra por atributo.",
      "[hijo > 4000] filtra por un hijo.",
      "[1] primero · [last()] último.",
      "Combinar: [@dia=\"viernes\" and genero=\"rock\"]."
     ],
     "c": "//artista[@dia=\"viernes\"]/nombre/text()\n//artista[cache > 4000]/nombre/text()\n//artista[1]/nombre/text()\n//artista[last()]/nombre/text()\n//artista[genero=\"rock\" and @dia=\"sabado\"]/@id",
     "o": "//artista[@dia=\"viernes\"]/nombre/text()\n→ Banda A, Banda B\n//artista[cache > 4000]/nombre/text()\n→ Banda B, Banda C\n//artista[1]/nombre/text()\n→ Banda A\n//artista[last()]/nombre/text()\n→ Banda C\n//artista[genero=\"rock\" and @dia=\"sabado\"]/@id\n→ a3",
     "q": {
      "t": "¿Qué selecciona //artista[2]/nombre?",
      "o": [
       "El segundo nombre de cada artista",
       "El nombre del segundo artista",
       "Dos nombres",
       "Ningún nodo"
      ],
      "ok": 1,
      "why": "El predicado [2] elige el segundo artista y después se baja a su nombre."
     },
     "tip": "en XPath la primera posición es 1, no 0."
    },
    {
     "n": "5.3",
     "t": "Funciones",
     "m": "5 min",
     "b": [
      "XPath incluye funciones para contar y calcular (count, sum, round), para texto (contains, starts-with, string-length, concat, normalize-space, translate) y lógicas (not). Se pueden usar en los predicados o como expresión completa que devuelve un número o un texto.",
      "Estos ejemplos usan XPath 1.0, que es la versión que implementan los navegadores y la mayoría de herramientas. XPath 2.0 y 3.1 añaden muchas más funciones (fechas, expresiones regulares, mayúsculas…)."
     ],
     "k": [
      "count(//artista) → número de artistas.",
      "sum(//cache) → suma de cachés.",
      "contains(nombre, \"B\") → ¿contiene?",
      "not(@dia=\"viernes\") → negación."
     ],
     "c": "count(//artista[genero=\"rock\"])\nsum(//cache)\nsum(//cache) div count(//cache)\n//artista[contains(nombre, \"C\")]/nombre/text()\n//artista[not(@dia=\"viernes\")]/@id\nstring-length(//artista[1]/nombre)",
     "o": "count(//artista[genero=\"rock\"])\n→ 2\nsum(//cache)\n→ 13500\nsum(//cache) div count(//cache)\n→ 4500\n//artista[contains(nombre, \"C\")]/nombre/text()\n→ Banda C\n//artista[not(@dia=\"viernes\")]/@id\n→ a3\nstring-length(//artista[1]/nombre)\n→ 7",
     "a": [
      [
       "count(nodos)",
       "Número de nodos."
      ],
      [
       "sum(nodos)",
       "Suma de valores."
      ],
      [
       "round(n) / floor(n) / ceiling(n)",
       "Redondeo."
      ],
      [
       "contains(a, b)",
       "¿a contiene b?"
      ],
      [
       "starts-with(a, b)",
       "¿a empieza por b?"
      ],
      [
       "string-length(s)",
       "Longitud del texto."
      ],
      [
       "concat(a, b, …)",
       "Une textos."
      ],
      [
       "normalize-space(s)",
       "Quita espacios sobrantes."
      ],
      [
       "not(cond)",
       "Niega una condición."
      ]
     ],
     "at": "Funciones de XPath 1.0",
     "ah": [
      "Función",
      "Resultado"
     ],
     "tip": "en XPath la división se escribe div, porque / se usa para las rutas."
    },
    {
     "n": "5.4",
     "t": "Ejes",
     "m": "4 min",
     "b": [
      "Los ejes permiten moverse por el árbol en cualquier dirección desde el nodo actual: child:: (hijos, el eje por defecto), parent:: (padre), ancestor:: (ancestros), descendant:: (descendientes), following-sibling:: (hermanos posteriores), preceding-sibling:: (hermanos anteriores) y attribute:: (atributos, que se abrevia con @).",
      "Son útiles cuando hay que seleccionar algo en función de lo que tiene alrededor, por ejemplo el artista que va justo después de otro."
     ],
     "k": [
      "eje::nodo → child::nombre equivale a nombre.",
      "following-sibling:: → hermanos de después.",
      "parent:: equivale a ..",
      "ancestor:: sube hasta la raíz."
     ],
     "c": "//artista[@id=\"a1\"]/following-sibling::artista/nombre/text()\n//artista[@id=\"a3\"]/preceding-sibling::artista[1]/nombre/text()\n//cache[. = 6000]/parent::artista/@dia\nname(//genero[1]/ancestor::*[last()])",
     "o": "//artista[@id=\"a1\"]/following-sibling::artista/nombre/text()\n→ Banda B, Banda C\n//artista[@id=\"a3\"]/preceding-sibling::artista[1]/nombre/text()\n→ Banda B\n//cache[. = 6000]/parent::artista/@dia\n→ sabado\nname(//genero[1]/ancestor::*[last()])\n→ festival",
     "tip": "preceding-sibling::artista[1] es el hermano inmediatamente anterior: los ejes hacia atrás cuentan desde el más cercano."
    }
   ]
  },
  {
   "t": "XSLT",
   "d": "Transformar XML en HTML o texto con plantillas, bucles, ordenación y condiciones.",
   "secciones": [
    {
     "n": "6.1",
     "t": "¿Qué es XSLT?",
     "m": "4 min",
     "b": [
      "XSLT (eXtensible Stylesheet Language Transformations) transforma un documento XML en otro documento: una página HTML, otro XML con distinta estructura o un texto plano. Una hoja XSLT es a su vez un documento XML con plantillas que indican qué generar para cada parte del original, usando XPath para seleccionar los datos.",
      "Se usa para generar informes, convertir formatos entre sistemas o mostrar XML de forma legible. Los navegadores aplican XSLT 1.0 si el XML incluye <?xml-stylesheet type=\"text/xsl\" href=\"hoja.xsl\"?>."
     ],
     "k": [
      "XML + hoja XSLT → HTML, XML o texto.",
      "Las plantillas (xsl:template) usan XPath.",
      "xsl:output method=\"html | xml | text\".",
      "xsltproc o un navegador aplican la transformación."
     ],
     "c": "<?xml-stylesheet type=\"text/xsl\" href=\"festival.xsl\"?>\n<!-- Al abrir festival.xml en el navegador se aplica la hoja -->\n\n# Terminal\nxsltproc festival.xsl festival.xml > festival.html",
     "v": 0,
     "tip": "en Firefox podéis abrir directamente un XML con su hoja XSLT enlazada."
    },
    {
     "n": "6.2",
     "t": "Plantillas y value-of",
     "m": "6 min",
     "b": [
      "xsl:template match=\"/\" define qué se genera al procesar la raíz del documento. Dentro se escribe el HTML de salida tal cual, y xsl:value-of select=\"ruta\" inserta el valor de un nodo. xsl:for-each recorre un conjunto de nodos y genera algo para cada uno.",
      "La salida de abajo es el resultado real de aplicar esta hoja al documento del festival."
     ],
     "k": [
      "xsl:template match=\"/\" → plantilla principal.",
      "xsl:value-of select=\"nombre\" inserta texto.",
      "xsl:for-each select=\"festival/artista\" recorre.",
      "Las rutas dentro del for-each son relativas al nodo actual."
     ],
     "c": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<xsl:stylesheet version=\"1.0\" xmlns:xsl=\"http://www.w3.org/1999/XSL/Transform\">\n  <xsl:output method=\"html\" indent=\"yes\"/>\n  <xsl:template match=\"/\">\n    <html>\n      <body>\n        <h1>Festival <xsl:value-of select=\"festival/@edicion\"/></h1>\n        <ul>\n          <xsl:for-each select=\"festival/artista\">\n            <li><xsl:value-of select=\"nombre\"/> (<xsl:value-of select=\"@dia\"/>)</li>\n          </xsl:for-each>\n        </ul>\n      </body>\n    </html>\n  </xsl:template>\n</xsl:stylesheet>",
     "o": "<html><body>\n<h1>Festival 2026</h1>\n<ul>\n<li>Banda A (viernes)</li>\n<li>Banda B (viernes)</li>\n<li>Banda C (sabado)</li>\n</ul>\n</body></html>",
     "tip": "dentro del for-each, nombre y @dia se refieren al artista actual."
    },
    {
     "n": "6.3",
     "t": "Ordenar y elegir: sort y choose",
     "m": "6 min",
     "b": [
      "xsl:sort, colocado justo al principio de un xsl:for-each, ordena los nodos: select indica por qué campo, data-type=\"number\" para ordenar numéricamente y order=\"descending\" para invertir.",
      "xsl:if test=\"condición\" genera algo solo si se cumple la condición. Para varias alternativas se usa xsl:choose con xsl:when y xsl:otherwise, como un switch. En las condiciones, los signos < y > se escriben &lt; y &gt;, porque la hoja es XML."
     ],
     "k": [
      "xsl:sort select=\"cache\" data-type=\"number\" order=\"descending\".",
      "xsl:if test=\"…\" → condición simple.",
      "xsl:choose / xsl:when / xsl:otherwise → varias opciones.",
      "En test: &lt; y &gt; en lugar de < y >."
     ],
     "c": "<xsl:stylesheet version=\"1.0\" xmlns:xsl=\"http://www.w3.org/1999/XSL/Transform\">\n  <xsl:output method=\"html\" indent=\"yes\"/>\n  <xsl:template match=\"/festival\">\n    <table>\n      <tr><th>Artista</th><th>Caché</th><th>Nivel</th></tr>\n      <xsl:for-each select=\"artista\">\n        <xsl:sort select=\"cache\" data-type=\"number\" order=\"descending\"/>\n        <tr>\n          <td><xsl:value-of select=\"nombre\"/></td>\n          <td><xsl:value-of select=\"cache\"/> €</td>\n          <td>\n            <xsl:choose>\n              <xsl:when test=\"cache &gt;= 5000\">Cabeza de cartel</xsl:when>\n              <xsl:when test=\"cache &gt;= 4000\">Destacado</xsl:when>\n              <xsl:otherwise>Telonero</xsl:otherwise>\n            </xsl:choose>\n          </td>\n        </tr>\n      </xsl:for-each>\n    </table>\n  </xsl:template>\n</xsl:stylesheet>",
     "o": "<table>\n<tr>\n<th>Artista</th>\n<th>Caché</th>\n<th>Nivel</th>\n</tr>\n<tr>\n<td>Banda C</td>\n<td>6000 €</td>\n<td>Cabeza de cartel</td>\n</tr>\n<tr>\n<td>Banda B</td>\n<td>4500 €</td>\n<td>Destacado</td>\n</tr>\n<tr>\n<td>Banda A</td>\n<td>3000 €</td>\n<td>Telonero</td>\n</tr>\n</table>",
     "e": "olvidar data-type=\"number\": se ordena como texto y «10000» quedaría antes que «3000».",
     "tip": "es la forma típica de generar una tabla HTML a partir de datos XML."
    },
    {
     "n": "6.4",
     "t": "apply-templates y salida de texto",
     "m": "5 min",
     "b": [
      "En lugar de un único for-each, XSLT permite definir una plantilla para cada tipo de elemento y llamarlas con xsl:apply-templates. Es más modular: cada plantilla sabe cómo transformar su elemento, igual que una función.",
      "Con xsl:output method=\"text\" la salida es texto plano; xsl:text controla exactamente el texto y los saltos de línea (&#10;). Este ejemplo lista los artistas de rock y suma su caché con la función sum()."
     ],
     "k": [
      "xsl:apply-templates select=\"…\" llama a la plantilla que encaje.",
      "Una plantilla por tipo de elemento.",
      "method=\"text\" para generar texto o CSV.",
      "xsl:text y &#10; para saltos de línea."
     ],
     "c": "<xsl:stylesheet version=\"1.0\" xmlns:xsl=\"http://www.w3.org/1999/XSL/Transform\">\n  <xsl:output method=\"text\"/>\n  <xsl:template match=\"/festival\">\n    <xsl:apply-templates select=\"artista[genero='rock']\"/>\n    <xsl:text>Total caché rock: </xsl:text>\n    <xsl:value-of select=\"sum(artista[genero='rock']/cache)\"/>\n  </xsl:template>\n  <xsl:template match=\"artista\">\n    <xsl:value-of select=\"nombre\"/>\n    <xsl:if test=\"@dia = 'sabado'\"> [sábado]</xsl:if>\n    <xsl:text>&#10;</xsl:text>\n  </xsl:template>\n</xsl:stylesheet>",
     "o": "Banda A\nBanda C [sábado]\nTotal caché rock: 9000",
     "tip": "con method=\"text\" podéis convertir un XML en un CSV para Excel."
    }
   ]
  },
  {
   "t": "JSON",
   "d": "Sintaxis de JSON, tipos, comparación con XML y JSON Schema.",
   "secciones": [
    {
     "n": "7.1",
     "t": "Sintaxis de JSON",
     "m": "5 min",
     "b": [
      "JSON (JavaScript Object Notation) es el formato de intercambio de datos más usado hoy, sobre todo en las APIs web. Se basa en dos estructuras: objetos (pares \"clave\": valor entre llaves) y arrays (listas de valores entre corchetes), que se pueden anidar.",
      "Sus reglas son estrictas: las claves van siempre entre comillas dobles, los textos también (nunca comillas simples), no se permiten comas al final, ni comentarios, ni undefined ni funciones."
     ],
     "k": [
      "Objeto: { \"clave\": valor }; array: [ v1, v2 ].",
      "Claves y textos con comillas dobles.",
      "Sin comas finales ni comentarios.",
      "Extensión .json; tipo MIME application/json."
     ],
     "c": "{\n  \"festival\": \"Festival DAW\",\n  \"edicion\": 2026,\n  \"activo\": true,\n  \"web\": null,\n  \"artistas\": [\n    { \"id\": \"a1\", \"nombre\": \"Banda A\", \"dia\": \"viernes\", \"cache\": 3000 },\n    { \"id\": \"a2\", \"nombre\": \"Banda B\", \"dia\": \"viernes\", \"cache\": 4500 },\n    { \"id\": \"a3\", \"nombre\": \"Banda C\", \"dia\": \"sabado\", \"cache\": 6000 }\n  ]\n}",
     "o": "Total de caché: 13500",
     "e": "usar comillas simples o dejar una coma tras el último elemento: el JSON deja de ser válido.",
     "tip": "jsonlint.com o el formateador de VS Code (Shift+Alt+F) detectan los errores."
    },
    {
     "n": "7.2",
     "t": "Tipos de datos",
     "m": "4 min",
     "b": [
      "JSON tiene seis tipos: string (texto entre comillas dobles), number (entero o decimal, sin comillas), boolean (true o false), null, object y array. No hay tipo fecha: las fechas se guardan como texto, normalmente en formato ISO 8601 (\"2026-06-12T17:00:00Z\").",
      "Los caracteres especiales dentro de un texto se escapan con barra invertida: \\\" para comillas, \\\\ para la barra, \\n para salto de línea."
     ],
     "k": [
      "string, number, boolean, null, object, array.",
      "Fechas como texto ISO 8601.",
      "Escapar: \\\" \\\\ \\n.",
      "Los números no llevan comillas: 39, no \"39\"."
     ],
     "c": "{\n  \"texto\": \"Festival \\\"DAW\\\" 2026\",\n  \"entero\": 120,\n  \"decimal\": 39.95,\n  \"booleano\": false,\n  \"nulo\": null,\n  \"fecha\": \"2026-06-12T17:00:00+02:00\",\n  \"lista\": [1, \"dos\", true, null],\n  \"objeto\": { \"anidado\": { \"nivel\": 3 } }\n}",
     "o": "Festival \"DAW\" 2026",
     "a": [
      [
       "string",
       "\"texto\""
      ],
      [
       "number",
       "42 · 3.14 · -1 · 2e3"
      ],
      [
       "boolean",
       "true · false"
      ],
      [
       "null",
       "null"
      ],
      [
       "object",
       "{ \"clave\": valor }"
      ],
      [
       "array",
       "[ valor, valor ]"
      ]
     ],
     "at": "Tipos de JSON",
     "ah": [
      "Tipo",
      "Ejemplo"
     ],
     "tip": "un \"39\" entre comillas es texto: al sumarlo en JavaScript se concatenaría."
    },
    {
     "n": "7.3",
     "t": "JSON frente a XML",
     "m": "4 min",
     "b": [
      "JSON es más compacto, más fácil de leer y se convierte directamente en objetos de JavaScript, por eso domina en las APIs web y en las aplicaciones móviles. XML es más verboso, pero tiene atributos, namespaces, comentarios, validación muy madura (XSD) y transformaciones (XSLT), por eso sigue presente en documentos, configuraciones y sistemas empresariales.",
      "La misma información se puede representar en los dos formatos. Elegir uno u otro depende de con quién intercambias los datos."
     ],
     "k": [
      "JSON: APIs web, apps, configuración moderna.",
      "XML: documentos, facturas, SOAP, configuración Java/Android.",
      "JSON se convierte directamente en objetos JS.",
      "XML tiene validación y transformación más potentes."
     ],
     "c": "<!-- XML: 150 caracteres -->\n<artista id=\"a1\" dia=\"viernes\">\n  <nombre>Banda A</nombre>\n  <generos><genero>rock</genero><genero>indie</genero></generos>\n</artista>\n\n// JSON: 80 caracteres\n{ \"id\": \"a1\", \"dia\": \"viernes\", \"nombre\": \"Banda A\", \"generos\": [\"rock\", \"indie\"] }",
     "v": 0,
     "a": [
      [
       "Tamaño",
       "JSON más compacto."
      ],
      [
       "Legibilidad",
       "JSON más simple."
      ],
      [
       "Atributos y namespaces",
       "Solo XML."
      ],
      [
       "Comentarios",
       "Solo XML."
      ],
      [
       "Validación",
       "XML (XSD) más madura; JSON tiene JSON Schema."
      ],
      [
       "Transformación",
       "XML con XSLT."
      ],
      [
       "Uso en APIs web",
       "JSON domina."
      ]
     ],
     "at": "Comparación",
     "ah": [
      "Aspecto",
      "Resultado"
     ],
     "tip": "en una entrevista os pueden preguntar cuándo elegiríais cada uno."
    },
    {
     "n": "7.4",
     "t": "JSON Schema",
     "m": "5 min",
     "b": [
      "Igual que XSD valida XML, JSON Schema valida documentos JSON: define el tipo de cada campo, cuáles son obligatorios (required), rangos de números, longitudes, patrones y valores permitidos (enum). Está escrito en JSON.",
      "Se usa para validar los datos que llegan a una API, generar documentación y formularios automáticamente, y en editores para autocompletar archivos de configuración (VS Code lo usa con package.json y muchos otros)."
     ],
     "k": [
      "\"type\": \"object\" con \"properties\" y \"required\".",
      "\"minimum\", \"maxLength\", \"pattern\", \"enum\".",
      "\"items\" define el tipo de los elementos de un array.",
      "Librerías: Ajv (JavaScript), Zod genera esquemas."
     ],
     "c": "{\n  \"$schema\": \"https://json-schema.org/draft/2020-12/schema\",\n  \"type\": \"object\",\n  \"required\": [\"id\", \"nombre\", \"dia\"],\n  \"properties\": {\n    \"id\":     { \"type\": \"string\", \"pattern\": \"^a[0-9]+$\" },\n    \"nombre\": { \"type\": \"string\", \"minLength\": 1 },\n    \"dia\":    { \"enum\": [\"viernes\", \"sabado\", \"domingo\"] },\n    \"cache\":  { \"type\": \"integer\", \"minimum\": 0 },\n    \"generos\": { \"type\": \"array\", \"items\": { \"type\": \"string\" } }\n  },\n  \"additionalProperties\": false\n}",
     "v": 0,
     "tip": "el campo $schema en vuestros JSON permite que VS Code los valide mientras escribís."
    }
   ]
  },
  {
   "t": "Trabajar con XML y JSON",
   "d": "Leer y generar datos desde JavaScript, Java y PHP, y otros formatos.",
   "secciones": [
    {
     "n": "8.1",
     "t": "JSON en JavaScript",
     "m": "4 min",
     "b": [
      "JavaScript trabaja con JSON de forma nativa: JSON.parse convierte un texto JSON en objetos y arrays, y JSON.stringify convierte objetos en texto JSON. fetch con response.json() hace el parse automáticamente al recibir datos de una API.",
      "Es la forma en la que se comunican casi todas las aplicaciones web modernas: el servidor responde JSON y el frontend lo pinta."
     ],
     "k": [
      "JSON.parse(texto) → objeto.",
      "JSON.stringify(obj, null, 2) → texto formateado.",
      "await (await fetch(url)).json() lee una API."
     ],
     "c": "const texto = '{\"artistas\":[{\"nombre\":\"Banda A\",\"cache\":3000},{\"nombre\":\"Banda C\",\"cache\":6000}]}';\nconst datos = JSON.parse(texto);\n\nconst caros = datos.artistas.filter(a => a.cache > 4000).map(a => a.nombre);\nconsole.log(caros);\n\ndatos.artistas.push({ nombre: \"Banda D\", cache: 2000 });\nconsole.log(JSON.stringify(datos, null, 2));",
     "v": 0,
     "o": "[ 'Banda C' ]\n{\n  \"artistas\": [\n    {\n      \"nombre\": \"Banda A\",\n      \"cache\": 3000\n    },\n    {\n      \"nombre\": \"Banda C\",\n      \"cache\": 6000\n    },\n    {\n      \"nombre\": \"Banda D\",\n      \"cache\": 2000\n    }\n  ]\n}",
     "tip": "repasad el capítulo de Objetos y JSON del tema de JavaScript."
    },
    {
     "n": "8.2",
     "t": "XML en JavaScript y otros lenguajes",
     "m": "5 min",
     "b": [
      "En el navegador, DOMParser convierte un texto XML en un documento DOM que se recorre con querySelector, igual que una página HTML, y document.evaluate ejecuta expresiones XPath. XMLSerializer hace el proceso inverso.",
      "En Java se usan las APIs DOM, SAX o StAX (y JAXB para convertir XML en objetos); en PHP, SimpleXML lo hace muy sencillo: simplexml_load_file(\"festival.xml\") permite acceder a los elementos como propiedades ($xml->artista[0]->nombre)."
     ],
     "k": [
      "new DOMParser().parseFromString(texto, \"application/xml\").",
      "doc.querySelectorAll(\"artista\") recorre elementos.",
      "PHP: simplexml_load_string / simplexml_load_file.",
      "Java: DocumentBuilder (DOM) o JAXB."
     ],
     "c": "// JavaScript (navegador)\nconst xml = `<festival><artista dia=\"viernes\"><nombre>Banda A</nombre></artista>\n             <artista dia=\"sabado\"><nombre>Banda C</nombre></artista></festival>`;\nconst doc = new DOMParser().parseFromString(xml, \"application/xml\");\ndoc.querySelectorAll(\"artista\").forEach(a =>\n  console.log(a.querySelector(\"nombre\").textContent, \"-\", a.getAttribute(\"dia\")));\n\n// PHP\n$xml = simplexml_load_string($texto);\nforeach ($xml->artista as $a) {\n    echo $a->nombre . \" - \" . $a[\"dia\"] . \"\\n\";\n}",
     "v": 0,
     "o": "Banda A - viernes\nBanda C - sabado",
     "tip": "SimpleXML de PHP es la forma más rápida de leer un XML en vuestros proyectos de servidor."
    },
    {
     "n": "8.3",
     "t": "Otros formatos: YAML, CSV y Markdown",
     "m": "4 min",
     "b": [
      "YAML es un formato de datos pensado para ser muy legible, basado en la sangría en lugar de llaves: se usa en archivos de configuración como docker-compose.yml o los workflows de GitHub Actions. CSV es una tabla en texto plano (valores separados por comas o punto y coma), el formato más simple para exportar datos a Excel.",
      "Markdown es un lenguaje de marcas ligero para escribir documentos con formato usando símbolos simples (# para títulos, ** para negrita, - para listas). Es el formato de los README de GitHub y de muchas webs de documentación."
     ],
     "k": [
      "YAML: sangría con espacios, sin llaves (docker-compose.yml).",
      "CSV: tabla en texto plano.",
      "Markdown: # títulos, **negrita**, - listas.",
      "Todos son lenguajes de marcas o formatos de datos en texto."
     ],
     "c": "# YAML (docker-compose.yml)\nfestival: Festival DAW\nedicion: 2026\nartistas:\n  - nombre: Banda A\n    dia: viernes\n  - nombre: Banda C\n    dia: sabado\n\n# CSV\nnombre;dia;cache\nBanda A;viernes;3000\nBanda C;sabado;6000\n\n# Markdown (README.md)\n# Festival DAW\nWeb del **festival** de la clase.\n- Cartel\n- Entradas",
     "v": 0,
     "a": [
      [
       "XML",
       "Documentos y datos con validación estricta."
      ],
      [
       "JSON",
       "APIs y datos para JavaScript."
      ],
      [
       "YAML",
       "Configuración legible por personas."
      ],
      [
       "CSV",
       "Tablas para hojas de cálculo."
      ],
      [
       "Markdown",
       "Documentación y textos con formato."
      ]
     ],
     "at": "Cuándo usar cada formato",
     "ah": [
      "Formato",
      "Uso principal"
     ],
     "tip": "en YAML la sangría importa y solo se usan espacios, nunca tabuladores."
    }
   ]
  }
 ],
 "chuleta": [
  [
   "<?xml version=\"1.0\" encoding=\"UTF-8\"?>",
   "Prólogo: declara la versión y la codificación. Va en la primera línea.",
   "<?xml version=\"1.0\" encoding=\"UTF-8\"?>",
   "XML básico"
  ],
  [
   "Elemento raíz",
   "Un único elemento que contiene a todos los demás.",
   "<festival> … </festival>",
   "XML básico"
  ],
  [
   "<elemento atributo=\"valor\">",
   "Elementos con atributos. Valores siempre entre comillas.",
   "<artista id=\"a1\" dia=\"viernes\">Banda A</artista>",
   "XML básico"
  ],
  [
   "<vacio/>",
   "Elemento vacío abreviado.",
   "<foto src=\"banda.jpg\"/>",
   "XML básico"
  ],
  [
   "<!-- comentario -->",
   "Comentario. No se procesa.",
   "<!-- Lista de artistas -->",
   "XML básico"
  ],
  [
   "&lt; &gt; &amp; &quot; &apos;",
   "Entidades para los caracteres especiales.",
   "<texto>Precio &lt; 50 &amp; envío</texto>",
   "XML básico"
  ],
  [
   "<![CDATA[ … ]]>",
   "Texto literal que no se analiza: código, HTML…",
   "<codigo><![CDATA[ if (a < b && c) ]]></codigo>",
   "XML básico"
  ],
  [
   "xmlns / xmlns:prefijo",
   "Espacio de nombres por defecto o con prefijo.",
   "<pedido xmlns:cli=\"https://ejemplo.es/clientes\">",
   "XML básico"
  ],
  [
   "<!DOCTYPE raiz [ … ]>",
   "DTD interna dentro del documento.",
   "<!DOCTYPE festival [ <!ELEMENT festival (artista+)> ]>",
   "DTD"
  ],
  [
   "<!DOCTYPE raiz SYSTEM \"archivo.dtd\">",
   "DTD externa en un archivo aparte.",
   "<!DOCTYPE festival SYSTEM \"festival.dtd\">",
   "DTD"
  ],
  [
   "<!ELEMENT nombre (#PCDATA)>",
   "Elemento con texto. EMPTY vacío, ANY cualquier contenido.",
   "<!ELEMENT foto EMPTY>",
   "DTD"
  ],
  [
   "(a, b) / (a | b)",
   "Secuencia ordenada / alternativa.",
   "<!ELEMENT contacto (email | telefono)>",
   "DTD"
  ],
  [
   "? + *",
   "Opcional / una o más / cero o más.",
   "<!ELEMENT artista (nombre, genero+, cache?)>",
   "DTD"
  ],
  [
   "<!ATTLIST elem attr tipo defecto>",
   "Declarar atributos: CDATA, ID, IDREF o lista; #REQUIRED o #IMPLIED.",
   "<!ATTLIST artista dia (viernes | sabado) #REQUIRED>",
   "DTD"
  ],
  [
   "xs:schema",
   "Raíz de un esquema XSD, con el namespace xs.",
   "<xs:schema xmlns:xs=\"http://www.w3.org/2001/XMLSchema\">",
   "XSD"
  ],
  [
   "xs:element name type",
   "Declara un elemento con su tipo.",
   "<xs:element name=\"nombre\" type=\"xs:string\"/>",
   "XSD"
  ],
  [
   "xs:complexType + xs:sequence",
   "Elemento con hijos en orden (o xs:choice / xs:all).",
   "<xs:complexType><xs:sequence>…</xs:sequence></xs:complexType>",
   "XSD"
  ],
  [
   "minOccurs / maxOccurs",
   "Cuántas veces aparece. unbounded = sin límite.",
   "<xs:element name=\"artista\" maxOccurs=\"unbounded\"/>",
   "XSD"
  ],
  [
   "xs:attribute use=\"required\"",
   "Atributo obligatorio con tipo.",
   "<xs:attribute name=\"id\" type=\"xs:ID\" use=\"required\"/>",
   "XSD"
  ],
  [
   "xs:restriction + facetas",
   "Tipo propio con límites: minInclusive, pattern, enumeration…",
   "<xs:restriction base=\"xs:decimal\"><xs:maxInclusive value=\"10\"/></xs:restriction>",
   "XSD"
  ],
  [
   "xsi:noNamespaceSchemaLocation",
   "Enlaza un XML con su esquema.",
   "<festival xsi:noNamespaceSchemaLocation=\"festival.xsd\">",
   "XSD"
  ],
  [
   "/ y //",
   "Desde la raíz / a cualquier profundidad.",
   "//artista/nombre",
   "XPath"
  ],
  [
   "@atributo",
   "Seleccionar un atributo.",
   "//artista/@dia",
   "XPath"
  ],
  [
   "[condición]",
   "Predicado para filtrar.",
   "//artista[@dia=\"viernes\" and cache > 4000]",
   "XPath"
  ],
  [
   "[n] / [last()]",
   "Por posición (empieza en 1) / el último.",
   "//artista[last()]/nombre",
   "XPath"
  ],
  [
   "text()",
   "El texto de un elemento.",
   "//nombre/text()",
   "XPath"
  ],
  [
   "count() / sum() / contains()",
   "Funciones de XPath.",
   "count(//artista[genero=\"rock\"])",
   "XPath"
  ],
  [
   "following-sibling:: / parent::",
   "Ejes para moverse por el árbol.",
   "//artista[1]/following-sibling::artista",
   "XPath"
  ],
  [
   "xsl:template match",
   "Plantilla para un nodo. match=\"/\" para la raíz.",
   "<xsl:template match=\"/\"> … </xsl:template>",
   "XSLT"
  ],
  [
   "xsl:value-of select",
   "Insertar el valor de un nodo.",
   "<xsl:value-of select=\"nombre\"/>",
   "XSLT"
  ],
  [
   "xsl:for-each select",
   "Recorrer un conjunto de nodos.",
   "<xsl:for-each select=\"festival/artista\"> … </xsl:for-each>",
   "XSLT"
  ],
  [
   "xsl:sort",
   "Ordenar dentro de un for-each.",
   "<xsl:sort select=\"cache\" data-type=\"number\" order=\"descending\"/>",
   "XSLT"
  ],
  [
   "xsl:if / xsl:choose",
   "Condiciones simples o múltiples (when, otherwise).",
   "<xsl:if test=\"@dia = 'sabado'\"> … </xsl:if>",
   "XSLT"
  ],
  [
   "xsl:apply-templates",
   "Llamar a las plantillas de los nodos seleccionados.",
   "<xsl:apply-templates select=\"artista\"/>",
   "XSLT"
  ],
  [
   "xsltproc",
   "Aplicar una hoja XSLT desde la terminal.",
   "xsltproc hoja.xsl datos.xml > salida.html",
   "XSLT"
  ],
  [
   "{ \"clave\": valor }",
   "Objeto JSON. Claves con comillas dobles.",
   "{ \"nombre\": \"Ana\", \"edad\": 20 }",
   "JSON"
  ],
  [
   "[ v1, v2 ]",
   "Array JSON.",
   "\"generos\": [\"rock\", \"indie\"]",
   "JSON"
  ],
  [
   "Tipos JSON",
   "string, number, boolean, null, object y array.",
   "{ \"activo\": true, \"web\": null }",
   "JSON"
  ],
  [
   "Sin comas finales ni comentarios",
   "Errores más comunes al escribir JSON.",
   "{ \"a\": 1, \"b\": 2 }",
   "JSON"
  ],
  [
   "JSON.parse / JSON.stringify",
   "Convertir entre texto JSON y objetos en JavaScript.",
   "const obj = JSON.parse(texto);",
   "JSON"
  ],
  [
   "JSON Schema",
   "Validar documentos JSON: type, properties, required, enum…",
   "{ \"type\": \"object\", \"required\": [\"id\"] }",
   "JSON"
  ]
 ],
 "retos": [
  {
   "t": "¿Qué diferencia hay entre un XML bien formado y uno válido?",
   "o": [
    "Ninguna",
    "Válido = bien formado + cumple una DTD o XSD",
    "Bien formado = cumple una DTD",
    "Válido = tiene prólogo"
   ],
   "ok": 1,
   "why": "La validez exige además cumplir una gramática."
  },
  {
   "t": "En una DTD, ¿qué significa genero+?",
   "o": [
    "Opcional",
    "Una o más veces",
    "Cero o más veces",
    "Exactamente una vez"
   ],
   "ok": 1,
   "why": "+ indica una o más apariciones."
  },
  {
   "t": "¿Qué expresión XPath selecciona el atributo dia de todos los artistas?",
   "o": [
    "//artista/dia",
    "//artista/@dia",
    "//@artista/dia",
    "/artista[dia]"
   ],
   "ok": 1,
   "why": "Los atributos se seleccionan con @."
  },
  {
   "t": "¿Qué hace xsl:value-of?",
   "o": [
    "Recorre nodos",
    "Inserta el valor de un nodo en la salida",
    "Ordena",
    "Valida el XML"
   ],
   "ok": 1,
   "why": "value-of escribe el texto del nodo seleccionado."
  },
  {
   "t": "¿Qué es inválido en JSON?",
   "o": [
    "{\"a\": 1}",
    "{'a': 1}",
    "{\"a\": [1, 2]}",
    "{\"a\": null}"
   ],
   "ok": 1,
   "why": "JSON solo admite comillas dobles."
  },
  {
   "t": "¿Qué ventaja tiene XSD sobre DTD?",
   "o": [
    "Es más corto",
    "Tiene tipos de datos y restricciones",
    "No necesita namespaces",
    "Lo entienden los navegadores"
   ],
   "ok": 1,
   "why": "XSD puede exigir que un valor sea un entero positivo, una fecha o cumpla un patrón."
  },
  {
   "t": "¿Cómo se escribe el carácter < dentro del texto de un XML?",
   "o": [
    "<",
    "&lt;",
    "\\<",
    "&less;"
   ],
   "ok": 1,
   "why": "&lt; es la entidad predefinida para el signo menor que."
  }
 ]
};
