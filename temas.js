/* Temas añadidos para cubrir los módulos del ciclo DAW. Se insertan antes de Git. */
(function () {
  const nuevos = [
    {
      slug: 'xml', name: 'XML y JSON', badge: '</>', area: 'Datos', bg: '#FCE7F3', fg: '#9D174D',
      site: 'MDN', url: 'https://developer.mozilla.org/es/docs/Web/XML/XML_introduction', practice: 'code', practiceTag: 'Predice la salida', practiceTitle: 'Predice el resultado', file: 'consulta.xpath',
      keys: 'xml json dtd xsd xpath xslt lenguajes de marcas datos',
      desc: 'Lenguajes de marcas para datos: XML bien formado, DTD y XSD, XPath, XSLT y JSON.',
      code: '<!-- alumnos.xml -->\n<alumnos>\n  <alumno curso="DAW1"><nombre>Ana</nombre><nota>8</nota></alumno>\n  <alumno curso="DAW2"><nombre>Luis</nombre><nota>6</nota></alumno>\n  <alumno curso="DAW1"><nombre>Sara</nombre><nota>9</nota></alumno>\n</alumnos>\n\nXPath: //alumno[@curso="DAW1"]/nombre/text()',
      output: 'Ana\nSara', why: 'La expresión busca todos los alumno cuyo atributo curso es DAW1 y devuelve el texto de su nombre.',
      steps: [['XML', 'Reglas y estructura.'], ['Validación', 'DTD y XSD.'], ['XPath y XSLT', 'Consultar y transformar.'], ['JSON', 'Datos para APIs.']],
      cheats: [], quiz: []
    },
    {
      slug: 'linux', name: 'Linux y terminal', badge: '>_', area: 'Sistemas', bg: '#E2E8F0', fg: '#1E293B',
      site: 'Ubuntu', url: 'https://ubuntu.com/tutorials/command-line-for-beginners', practice: 'code', practiceTag: 'Predice la salida', practiceTitle: 'Predice qué muestra la terminal', file: 'terminal',
      keys: 'linux terminal bash comandos permisos usuarios procesos ssh ubuntu sistemas',
      desc: 'Terminal, archivos, permisos, usuarios, procesos, redes, SSH y scripts en Bash.',
      code: '$ mkdir proyecto && cd proyecto\n$ touch index.html styles.css\n$ ls\n$ pwd',
      output: 'index.html  styles.css\n/home/ana/proyecto', why: 'mkdir crea la carpeta, cd entra en ella, touch crea dos archivos vacíos, ls los lista y pwd muestra la ruta actual.',
      steps: [['Terminal', 'Moverse y archivos.'], ['Permisos', 'Usuarios y chmod.'], ['Procesos y redes', 'ps, systemctl, ssh.'], ['Bash', 'Scripts.']],
      cheats: [], quiz: []
    },
    {
      slug: 'entornos', name: 'Entornos de desarrollo', badge: 'IDE', area: 'Herramientas', bg: '#ECFCCB', fg: '#3F6212',
      site: 'JUnit', url: 'https://junit.org/junit5/docs/current/user-guide/', practice: 'code', practiceTag: 'Predice el test', practiceTitle: '¿Pasa o falla el test?', file: 'CalculadoraTest.java',
      keys: 'ide depuracion debugger pruebas testing junit uml diagramas refactorizacion documentacion entornos',
      desc: 'IDE, depuración, pruebas con JUnit, refactorización, documentación y diagramas UML.',
      code: 'int dividir(int a, int b) { return a / b; }\n\n@Test\nvoid divideEntreCero() {\n    assertThrows(ArithmeticException.class,\n        () -> dividir(10, 0));\n}',
      output: '✔ divideEntreCero() — PASA', why: 'Dividir un int entre 0 lanza ArithmeticException, que es justo lo que el test espera con assertThrows.',
      steps: [['IDE', 'Compilar y ejecutar.'], ['Depuración', 'Breakpoints.'], ['Pruebas', 'JUnit.'], ['UML', 'Clases y casos de uso.']],
      cheats: [], quiz: []
    },
    {
      slug: 'node', name: 'Node.js y APIs REST', badge: 'node', area: 'Backend', bg: '#DCFCE7', fg: '#14532D',
      site: 'Node.js', url: 'https://nodejs.org/es/learn', practice: 'code', practiceTag: 'Predice la respuesta', practiceTitle: 'Predice la respuesta de la API', file: 'server.js',
      keys: 'node nodejs npm express api rest http json backend javascript servidor',
      desc: 'JavaScript en el servidor: npm, módulos, Express, rutas, middleware y APIs REST con base de datos.',
      code: 'app.get("/api/alumnos/:id", (req, res) => {\n  const a = alumnos.find(x => x.id == req.params.id);\n  if (!a) return res.status(404).json({ error: "No existe" });\n  res.json(a);\n});\n\n// GET /api/alumnos/99',
      output: 'HTTP 404\n{ "error": "No existe" }', why: 'No hay alumno con id 99, así que la ruta responde con el código 404 y un JSON de error.',
      steps: [['Node y npm', 'Módulos y paquetes.'], ['Express', 'Rutas y middleware.'], ['APIs REST', 'Verbos y códigos.'], ['Datos', 'Base de datos y auth.']],
      cheats: [], quiz: []
    },
    {
      slug: 'despliegue', name: 'Despliegue y servidores', badge: '☁', area: 'Sistemas', bg: '#E0F2FE', fg: '#075985',
      site: 'Docker', url: 'https://docs.docker.com/get-started/', practice: 'code', practiceTag: 'Predice la salida', practiceTitle: 'Predice qué pasa', file: 'docker-compose.yml',
      keys: 'despliegue http https dns apache nginx docker compose servidor hosting vercel ci cd',
      desc: 'HTTP y DNS, servidores web Apache y Nginx, HTTPS, Docker, Compose, hosting y CI/CD.',
      code: 'services:\n  web:\n    image: nginx:alpine\n    ports:\n      - "8080:80"\n    volumes:\n      - ./sitio:/usr/share/nginx/html\n\n$ docker compose up -d\n$ curl -I http://localhost:8080',
      output: 'HTTP/1.1 200 OK\nServer: nginx', why: 'Compose arranca Nginx con tu carpeta sitio como raíz web; el puerto 8080 del equipo se conecta con el 80 del contenedor.',
      steps: [['HTTP y DNS', 'Cómo viaja una petición.'], ['Servidores web', 'Apache y Nginx.'], ['Docker', 'Contenedores.'], ['Despliegue', 'Hosting y CI/CD.']],
      cheats: [], quiz: []
    }
  ];
  const gi = TOPICS.findIndex((t) => t.slug === 'git');
  TOPICS.splice(gi, 0, ...nuevos);
  RESOURCES.push(['Linux', 'ubuntu.com/tutorials', 'https://ubuntu.com/tutorials/command-line-for-beginners'], ['Docker', 'docs.docker.com', 'https://docs.docker.com/get-started/'], ['Node.js', 'nodejs.org/learn', 'https://nodejs.org/es/learn']);
})();
