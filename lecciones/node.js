window.LECCIONES = window.LECCIONES || {};
LECCIONES["node"] = {
 "lang": "node",
 "capitulos": [
  {
   "t": "Node.js y npm",
   "d": "Qué es Node, ejecutar scripts, módulos, npm y los módulos del sistema.",
   "secciones": [
    {
     "n": "1.1",
     "t": "¿Qué es Node.js?",
     "m": "4 min",
     "b": [
      "Node.js permite ejecutar JavaScript fuera del navegador, en un servidor o en tu ordenador. Usa el mismo motor que Chrome (V8) y añade acceso al sistema de archivos, a la red y a los procesos. Con él se crean APIs, servidores web, herramientas de línea de comandos y es la base de herramientas como Vite, npm o ESLint.",
      "Su gran ventaja es que permite usar un solo lenguaje, JavaScript, en el frontend y en el backend. Se instala desde nodejs.org (versión LTS) y se ejecuta un archivo con node archivo.js. process.argv contiene los argumentos que recibe el script."
     ],
     "k": [
      "JavaScript en el servidor con el motor V8.",
      "node archivo.js ejecuta un script.",
      "node sin argumentos abre la consola interactiva (REPL).",
      "Instala la versión LTS."
     ],
     "c": "// hola.js\nconst nombre = process.argv[2] ?? \"mundo\";\nconsole.log(`Hola, ${nombre}`);\nconsole.log(\"Node\", process.version.split(\".\")[0], \"en\", process.platform);",
     "o": "$ node hola.js Ana\nHola, Ana\nNode v22 en linux",
     "a": [
      [
       "node -v",
       "Versión instalada."
      ],
      [
       "node archivo.js",
       "Ejecuta un script."
      ],
      [
       "node",
       "Consola interactiva (salir con .exit)."
      ],
      [
       "node --watch app.js",
       "Reinicia al guardar cambios."
      ],
      [
       "npx herramienta",
       "Ejecuta una herramienta sin instalarla."
      ]
     ],
     "at": "Comandos básicos",
     "ah": [
      "Comando",
      "Qué hace"
     ],
     "tip": "node --watch evita tener que reiniciar el servidor cada vez que guardáis."
    },
    {
     "n": "1.2",
     "t": "npm y package.json",
     "m": "5 min",
     "b": [
      "npm es el gestor de paquetes de Node. npm init -y crea el package.json, que describe el proyecto: nombre, versión, scripts y dependencias. npm install paquete descarga una librería en la carpeta node_modules y la añade a dependencies; con -D (--save-dev) va a devDependencies, para herramientas que solo se usan en desarrollo.",
      "La sección scripts define atajos que se ejecutan con npm run nombre (npm start y npm test sin run). package-lock.json fija las versiones exactas instaladas. node_modules nunca se sube a Git: se regenera con npm install."
     ],
     "k": [
      "npm init -y → crea package.json.",
      "npm install express → dependencia.",
      "npm install -D nodemon → solo desarrollo.",
      "npm run dev → ejecuta un script."
     ],
     "c": "{\n  \"name\": \"festival-api\",\n  \"version\": \"1.0.0\",\n  \"type\": \"module\",\n  \"scripts\": {\n    \"dev\": \"node --watch src/server.js\",\n    \"start\": \"node src/server.js\",\n    \"test\": \"node --test\"\n  },\n  \"dependencies\": {\n    \"express\": \"^5.1.0\",\n    \"pg\": \"^8.13.0\"\n  },\n  \"devDependencies\": {\n    \"eslint\": \"^9.15.0\"\n  }\n}",
     "v": 0,
     "a": [
      [
       "npm init -y",
       "Crear package.json."
      ],
      [
       "npm install",
       "Instalar todas las dependencias."
      ],
      [
       "npm install p",
       "Añadir una dependencia."
      ],
      [
       "npm install -D p",
       "Añadir una dependencia de desarrollo."
      ],
      [
       "npm uninstall p",
       "Quitar una dependencia."
      ],
      [
       "npm run script",
       "Ejecutar un script."
      ],
      [
       "npm outdated",
       "Ver dependencias desactualizadas."
      ]
     ],
     "at": "Comandos de npm",
     "ah": [
      "Comando",
      "Qué hace"
     ],
     "e": "subir node_modules a GitHub: pesa cientos de megas. Añádelo al .gitignore.",
     "tip": "\"type\": \"module\" permite usar import y export en todo el proyecto."
    },
    {
     "n": "1.3",
     "t": "Módulos: import y export",
     "m": "5 min",
     "b": [
      "Node admite dos sistemas de módulos. Los módulos ES (import/export), el estándar moderno, se activan con \"type\": \"module\" en package.json o usando la extensión .mjs. El sistema clásico, CommonJS, usa require() y module.exports y sigue presente en muchos proyectos y tutoriales.",
      "Los módulos propios del sistema se importan con el prefijo node: (node:fs, node:path, node:http). En los módulos ES se puede usar await en el nivel superior, fuera de una función async."
     ],
     "k": [
      "import x from \"./archivo.js\" (con extensión).",
      "export / export default.",
      "Módulos del sistema: import fs from \"node:fs\".",
      "CommonJS: const x = require(\"x\"); module.exports = …"
     ],
     "c": "// utils.mjs\nexport const IVA = 0.21;\nexport function conIva(precio) {\n  return Math.round(precio * (1 + IVA) * 100) / 100;\n}\nexport default function formatear(n) {\n  return n.toFixed(2).replace(\".\", \",\") + \" €\";\n}\n\n// main.mjs\nimport formatear, { conIva } from \"./utils.mjs\";\nimport { readFile } from \"node:fs/promises\";\n\nconsole.log(formatear(conIva(39)));\nconst pkg = JSON.parse(await readFile(\"./package.json\", \"utf8\"));\nconsole.log(\"Proyecto:\", pkg.name);",
     "o": "47,19 €\nProyecto: festival-api",
     "a": [
      [
       "Módulos ES",
       "import / export · \"type\": \"module\" o .mjs · estándar actual."
      ],
      [
       "CommonJS",
       "require / module.exports · .js por defecto o .cjs · proyectos antiguos."
      ]
     ],
     "at": "Dos sistemas de módulos",
     "ah": [
      "Sistema",
      "Características"
     ],
     "tip": "en módulos ES las rutas relativas deben incluir la extensión del archivo."
    },
    {
     "n": "1.4",
     "t": "Módulos del sistema: fs y path",
     "m": "5 min",
     "b": [
      "node:fs/promises permite leer y escribir archivos con promesas (readFile, writeFile, appendFile, mkdir, readdir, rm). node:path construye rutas que funcionan en cualquier sistema operativo (join, resolve, basename, extname, dirname).",
      "Otros módulos muy usados: node:os (información del sistema), node:crypto (identificadores aleatorios y hashes), node:url y node:events."
     ],
     "k": [
      "readFile(ruta, \"utf8\") / writeFile(ruta, texto).",
      "path.join(\"datos\", \"a.txt\") en lugar de concatenar rutas.",
      "mkdir(ruta, { recursive: true }).",
      "crypto.randomUUID() genera ids únicos."
     ],
     "c": "import { writeFile, readFile, appendFile, readdir, mkdir } from \"node:fs/promises\";\nimport path from \"node:path\";\n\nawait mkdir(\"datos\", { recursive: true });\nconst ruta = path.join(\"datos\", \"ventas.txt\");\nawait writeFile(ruta, \"abono;89\\n\");\nawait appendFile(ruta, \"dia;39\\n\");\n\nconst texto = await readFile(ruta, \"utf8\");\nconst total = texto.trim().split(\"\\n\")\n  .map(linea => Number(linea.split(\";\")[1]))\n  .reduce((a, b) => a + b, 0);\nconsole.log(\"Total:\", total);\nconsole.log(await readdir(\"datos\"));\nconsole.log(path.extname(ruta), path.basename(ruta));",
     "o": "Total: 128\n[ 'ventas.txt' ]\n.txt ventas.txt",
     "tip": "path.join pone la barra correcta tanto en Windows como en Linux."
    }
   ]
  },
  {
   "t": "Asincronía en Node",
   "d": "El event loop, código no bloqueante y eventos.",
   "secciones": [
    {
     "n": "2.1",
     "t": "No bloqueante: el event loop",
     "m": "5 min",
     "b": [
      "Node atiende muchas peticiones a la vez con un solo hilo gracias a que las operaciones lentas (leer archivos, consultar una base de datos, llamar a otra API) no bloquean: se delegan al sistema y, cuando terminan, su callback o promesa se ejecuta en el event loop. Mientras tanto, Node sigue atendiendo otras cosas.",
      "Por eso en Node casi todo es asíncrono y se usa async/await. Una operación síncrona pesada (un cálculo enorme, o readFileSync en un servidor) bloquea a todos los usuarios a la vez."
     ],
     "k": [
      "Un hilo + operaciones de E/S no bloqueantes.",
      "Usa las versiones con promesas (fs/promises).",
      "Evita las funciones Sync en servidores.",
      "Los cálculos muy pesados bloquean el event loop."
     ],
     "c": "import { readFile } from \"node:fs/promises\";\n\nconsole.log(\"1. Empieza\");\nreadFile(\"package.json\", \"utf8\").then(() => console.log(\"3. Archivo leído\"));\nsetTimeout(() => console.log(\"4. Temporizador\"), 0);\nconsole.log(\"2. Sigue sin esperar\");",
     "o": "1. Empieza\n2. Sigue sin esperar\n4. Temporizador\n3. Archivo leído",
     "e": "usar readFileSync o un bucle muy costoso dentro de una ruta de Express: el servidor deja de responder a todos mientras tanto.",
     "tip": "fijaos en que el archivo se lee después del código síncrono, aunque se pidiera antes."
    },
    {
     "n": "2.2",
     "t": "Promesas y async/await en Node",
     "m": "4 min",
     "b": [
      "Todas las APIs modernas de Node devuelven promesas, así que se usan con async/await y try/catch, igual que fetch en el navegador. Promise.all ejecuta varias operaciones en paralelo y espera a que terminen todas, lo que es mucho más rápido que hacerlas una detrás de otra.",
      "Node incluye fetch de forma nativa (desde la versión 18), así que un servidor puede llamar a otras APIs sin instalar nada."
     ],
     "k": [
      "await en funciones async o en el nivel superior de un módulo.",
      "try/catch para los errores.",
      "Promise.all para operaciones en paralelo.",
      "fetch funciona en Node sin librerías."
     ],
     "c": "import { readFile } from \"node:fs/promises\";\n\nasync function cargarConfig() {\n  try {\n    const [pkg, datos] = await Promise.all([\n      readFile(\"package.json\", \"utf8\"),\n      fetch(\"https://jsonplaceholder.typicode.com/users/1\").then(r => r.json()),\n    ]);\n    console.log(JSON.parse(pkg).name, \"-\", datos.name);\n  } catch (e) {\n    console.error(\"Error al cargar:\", e.message);\n  }\n}\n\nawait cargarConfig();",
     "v": 0,
     "o": "festival-api - Leanne Graham",
     "tip": "repasad el capítulo de asincronía de JavaScript: en Node funciona exactamente igual."
    },
    {
     "n": "2.3",
     "t": "Eventos: EventEmitter",
     "m": "4 min",
     "b": [
      "Muchos objetos de Node emiten eventos a los que te puedes suscribir: un servidor emite «request», un stream «data» y «end», un proceso «exit». La clase EventEmitter permite crear tus propios objetos con eventos: on(nombre, función) escucha y emit(nombre, datos) lanza el evento.",
      "Es el mismo patrón que addEventListener en el navegador, y es útil para desacoplar partes de una aplicación: la taquilla emite «venta» y otras partes reaccionan sin que la taquilla sepa nada de ellas."
     ],
     "k": [
      "on(evento, fn) escucha.",
      "emit(evento, datos) lanza.",
      "once(evento, fn) escucha una sola vez.",
      "Patrón publicador-suscriptor."
     ],
     "c": "import { EventEmitter } from \"node:events\";\n\nclass Taquilla extends EventEmitter {\n  vender(cantidad) {\n    this.emit(\"venta\", cantidad);\n    if (cantidad > 4) this.emit(\"grupo\", cantidad);\n  }\n}\n\nconst t = new Taquilla();\nt.on(\"venta\", n => console.log(`Vendidas ${n} entradas`));\nt.on(\"grupo\", n => console.log(`Aplicar descuento de grupo a ${n}`));\nt.vender(2);\nt.vender(6);",
     "o": "Vendidas 2 entradas\nVendidas 6 entradas\nAplicar descuento de grupo a 6",
     "tip": "así funcionan por dentro los servidores HTTP y los streams de Node."
    }
   ]
  },
  {
   "t": "HTTP y servidor básico",
   "d": "Cómo funciona una petición HTTP y un servidor con el módulo http.",
   "secciones": [
    {
     "n": "3.1",
     "t": "Petición y respuesta HTTP",
     "m": "5 min",
     "b": [
      "Toda la web funciona con peticiones y respuestas HTTP. El cliente (navegador, app, curl) envía una petición con un método (GET, POST…), una ruta (/api/entradas), cabeceras (Content-Type, Authorization) y, a veces, un cuerpo con datos. El servidor responde con un código de estado (200, 404…), cabeceras y un cuerpo (HTML, JSON, una imagen).",
      "Un servidor en Node es un programa que escucha en un puerto y, por cada petición, decide qué responder según el método y la ruta. Las herramientas como curl, Postman o Thunder Client permiten enviar peticiones a mano para probarlo."
     ],
     "k": [
      "Petición: método + ruta + cabeceras + cuerpo.",
      "Respuesta: código + cabeceras + cuerpo.",
      "El servidor escucha en un puerto (3000, 8080…).",
      "Prueba con curl, Postman o Thunder Client."
     ],
     "c": "PETICIÓN                                  RESPUESTA\nPOST /api/entradas HTTP/1.1               HTTP/1.1 201 Created\nHost: localhost:3000                      Content-Type: application/json\nContent-Type: application/json\n                                          {\"id\":1024,\"tipo\":\"abono\",\"total\":178}\n{\"tipo\":\"abono\",\"cantidad\":2}",
     "v": 0,
     "a": [
      [
       "GET",
       "Leer un recurso."
      ],
      [
       "POST",
       "Crear un recurso."
      ],
      [
       "PUT",
       "Sustituir un recurso completo."
      ],
      [
       "PATCH",
       "Modificar parte de un recurso."
      ],
      [
       "DELETE",
       "Borrar un recurso."
      ]
     ],
     "at": "Métodos HTTP",
     "ah": [
      "Método",
      "Uso"
     ],
     "tip": "en el tema de Despliegue se profundiza en HTTP, DNS y HTTPS."
    },
    {
     "n": "3.2",
     "t": "Servidor con el módulo http",
     "m": "5 min",
     "b": [
      "El módulo node:http permite crear un servidor sin librerías: createServer recibe una función que se ejecuta con cada petición, con un objeto req (la petición: url, method, headers) y uno res (la respuesta: writeHead para el código y las cabeceras, end para el cuerpo). listen(puerto) lo pone a escuchar.",
      "Funciona, pero en cuanto hay varias rutas, parámetros o cuerpos JSON el código se complica. Por eso casi todos los proyectos usan un framework como Express."
     ],
     "k": [
      "createServer((req, res) => { … }).",
      "res.writeHead(200, cabeceras) y res.end(cuerpo).",
      "server.listen(3000).",
      "Para APIs reales, mejor Express."
     ],
     "c": "import { createServer } from \"node:http\";\n\nconst server = createServer((req, res) => {\n  if (req.url === \"/\") {\n    res.writeHead(200, { \"Content-Type\": \"text/html; charset=utf-8\" });\n    res.end(\"<h1>Festival DAW</h1>\");\n  } else if (req.url === \"/api/estado\") {\n    res.writeHead(200, { \"Content-Type\": \"application/json\" });\n    res.end(JSON.stringify({ ok: true, hora: \"12:00\" }));\n  } else {\n    res.writeHead(404, { \"Content-Type\": \"text/plain\" });\n    res.end(\"No encontrado\");\n  }\n});\n\nserver.listen(3000, () => console.log(\"Servidor en http://localhost:3000\"));",
     "o": "$ curl http://localhost:3000/\nHTTP 200 OK\n<h1>Festival DAW</h1>\n$ curl http://localhost:3000/api/estado\nHTTP 200 OK\n{\"ok\":true,\"hora\":\"12:00\"}\n$ curl http://localhost:3000/otra\nHTTP 404 Not Found\nNo encontrado",
     "tip": "la salida muestra las tres respuestas reales del servidor a las peticiones con curl."
    }
   ]
  },
  {
   "t": "Express",
   "d": "Rutas, parámetros, middleware, cuerpos JSON, archivos estáticos y errores.",
   "secciones": [
    {
     "n": "4.1",
     "t": "Primer servidor con Express",
     "m": "5 min",
     "b": [
      "Express es el framework web más usado en Node: simplifica crear rutas, leer parámetros, procesar JSON y organizar el código. Se instala con npm install express y se crea una aplicación con express(). Cada ruta se define con el método HTTP y la ruta: app.get(\"/ruta\", manejador).",
      "El manejador recibe req (la petición) y res (la respuesta). res.send() envía texto o HTML, res.json() envía JSON con las cabeceras correctas y res.status(código) fija el código de estado."
     ],
     "k": [
      "const app = express();",
      "app.get / post / put / delete (ruta, (req, res) => …).",
      "res.json(datos) · res.send(texto) · res.status(404).",
      "app.listen(3000)."
     ],
     "c": "import express from \"express\";\n\nconst app = express();\n\napp.get(\"/\", (req, res) => {\n  res.send(\"<h1>Festival DAW</h1>\");\n});\n\napp.get(\"/api/estado\", (req, res) => {\n  res.json({ ok: true, version: \"1.0\" });\n});\n\napp.listen(3000, () => console.log(\"API en http://localhost:3000\"));",
     "o": "$ curl http://localhost:3000/\nHTTP 200 OK\n<h1>Festival DAW</h1>\n$ curl http://localhost:3000/api/estado\nHTTP 200 OK\n{\"ok\":true,\"version\":\"1.0\"}",
     "tip": "con \"dev\": \"node --watch server.js\" el servidor se reinicia al guardar."
    },
    {
     "n": "4.2",
     "t": "Parámetros de ruta y de consulta",
     "m": "5 min",
     "b": [
      "Los parámetros de ruta forman parte de la URL y se declaran con dos puntos: /api/artistas/:id. Se leen en req.params.id (siempre como texto, por eso se convierte con Number). Los parámetros de consulta van detrás de ? (/api/artistas?dia=viernes) y se leen en req.query.",
      "Por convención, la ruta identifica el recurso (/artistas/2) y la consulta sirve para filtrar, ordenar o paginar una lista (?dia=viernes&orden=nombre&pagina=2)."
     ],
     "k": [
      "/ruta/:id → req.params.id.",
      "/ruta?dia=x → req.query.dia.",
      "Los parámetros llegan como texto: conviértelos.",
      "Si no existe, responde 404."
     ],
     "c": "import express from \"express\";\nconst app = express();\n\nconst artistas = [\n  { id: 1, nombre: \"Banda A\", dia: \"viernes\" },\n  { id: 2, nombre: \"Banda B\", dia: \"viernes\" },\n  { id: 3, nombre: \"Banda C\", dia: \"sabado\" },\n];\n\n// Parámetro de consulta: /api/artistas?dia=viernes\napp.get(\"/api/artistas\", (req, res) => {\n  const { dia } = req.query;\n  res.json(dia ? artistas.filter(a => a.dia === dia) : artistas);\n});\n\n// Parámetro de ruta: /api/artistas/2\napp.get(\"/api/artistas/:id\", (req, res) => {\n  const artista = artistas.find(a => a.id === Number(req.params.id));\n  if (!artista) return res.status(404).json({ error: \"No existe\" });\n  res.json(artista);\n});\n\napp.listen(3000);",
     "o": "$ curl http://localhost:3000/api/artistas?dia=sabado\nHTTP 200 OK\n[{\"id\":3,\"nombre\":\"Banda C\",\"dia\":\"sabado\"}]\n$ curl http://localhost:3000/api/artistas/2\nHTTP 200 OK\n{\"id\":2,\"nombre\":\"Banda B\",\"dia\":\"viernes\"}\n$ curl http://localhost:3000/api/artistas/99\nHTTP 404 Not Found\n{\"error\":\"No existe\"}",
     "q": {
      "t": "En /api/pedidos/15?estado=enviado, ¿dónde está el 15?",
      "o": [
       "req.query.id",
       "req.params.id",
       "req.body.id",
       "req.headers.id"
      ],
      "ok": 1,
      "why": "Los segmentos declarados con :id en la ruta se leen en req.params."
     },
     "tip": "filtrar con query y buscar por id con params es el patrón de casi todas las APIs."
    },
    {
     "n": "4.3",
     "t": "Middleware",
     "m": "6 min",
     "b": [
      "Un middleware es una función que se ejecuta entre la llegada de la petición y la respuesta. Recibe req, res y next: puede modificar la petición, responder directamente (y cortar la cadena) o llamar a next() para pasar al siguiente. Se registran con app.use() para todas las rutas, o se pasan en una ruta concreta.",
      "Express y las librerías se basan en middleware: express.json() lee el cuerpo JSON, cors() permite peticiones desde otros dominios, helmet() añade cabeceras de seguridad y morgan registra las peticiones. La autenticación también se implementa como middleware."
     ],
     "k": [
      "(req, res, next) => { …; next(); }",
      "app.use(middleware) → todas las rutas.",
      "app.get(\"/ruta\", middleware, manejador) → solo una.",
      "Responder sin llamar a next() corta la cadena."
     ],
     "c": "import express from \"express\";\nconst app = express();\n\n// Middleware propio: registra cada petición\napp.use((req, res, next) => {\n  console.log(`${req.method} ${req.url}`);\n  next();\n});\n\n// Middleware que protege una ruta con una clave sencilla\nfunction soloAdmin(req, res, next) {\n  if (req.headers[\"x-clave\"] !== \"secreta\") {\n    return res.status(401).json({ error: \"No autorizado\" });\n  }\n  next();\n}\n\napp.get(\"/api/publico\", (req, res) => res.json({ mensaje: \"Hola a todos\" }));\napp.get(\"/api/admin\", soloAdmin, (req, res) => res.json({ ventas: 128 }));\n\napp.listen(3000);",
     "o": "$ curl http://localhost:3000/api/publico\nHTTP 200 OK\n{\"mensaje\":\"Hola a todos\"}\n$ curl http://localhost:3000/api/admin\nHTTP 401 Unauthorized\n{\"error\":\"No autorizado\"}\n$ curl -H \"x-clave: secreta\" http://localhost:3000/api/admin\nHTTP 200 OK\n{\"ventas\":128}",
     "a": [
      [
       "express.json()",
       "Lee cuerpos JSON en req.body."
      ],
      [
       "express.static(\"public\")",
       "Sirve archivos estáticos."
      ],
      [
       "cors()",
       "Permite peticiones desde otros dominios."
      ],
      [
       "helmet()",
       "Cabeceras de seguridad."
      ],
      [
       "morgan(\"dev\")",
       "Registra cada petición."
      ],
      [
       "express-rate-limit",
       "Limita peticiones por IP."
      ]
     ],
     "at": "Middleware habituales",
     "ah": [
      "Middleware",
      "Función"
     ],
     "e": "olvidar llamar a next() en un middleware que no responde: la petición se queda colgada sin respuesta.",
     "tip": "el orden de app.use importa: se ejecutan en el orden en que se declaran."
    },
    {
     "n": "4.4",
     "t": "Recibir datos y validar",
     "m": "6 min",
     "b": [
      "Para leer el cuerpo JSON de un POST, PUT o PATCH hay que activar app.use(express.json()); después los datos están en req.body. Nunca te fíes de lo que llega: valida que existen los campos, que tienen el tipo y el rango correctos, y responde 400 o 422 con los errores si no es así.",
      "Para proyectos reales se usan librerías de validación como Zod, Joi o express-validator, que describen el esquema esperado y devuelven los errores automáticamente."
     ],
     "k": [
      "app.use(express.json()) → req.body.",
      "Valida tipos, obligatorios y rangos.",
      "422 con la lista de errores si no son válidos.",
      "201 Created al crear correctamente."
     ],
     "c": "import express from \"express\";\nconst app = express();\napp.use(express.json());   // lee el cuerpo JSON de las peticiones\n\napp.post(\"/api/entradas\", (req, res) => {\n  const { nombre, cantidad } = req.body;\n  const errores = [];\n  if (!nombre || nombre.trim().length < 2) errores.push(\"nombre obligatorio\");\n  if (!Number.isInteger(cantidad) || cantidad < 1 || cantidad > 6) errores.push(\"cantidad entre 1 y 6\");\n  if (errores.length) return res.status(422).json({ errores });\n\n  res.status(201).json({ id: 1024, nombre: nombre.trim(), cantidad, total: cantidad * 39 });\n});\n\napp.listen(3000);",
     "o": "$ curl -X POST http://localhost:3000/api/entradas -H \"Content-Type: application/json\" -d '{\"nombre\":\"Ana\",\"cantidad\":2}'\nHTTP 201 Created\n{\"id\":1024,\"nombre\":\"Ana\",\"cantidad\":2,\"total\":78}\n$ curl -X POST http://localhost:3000/api/entradas -H \"Content-Type: application/json\" -d '{\"nombre\":\"A\",\"cantidad\":10}'\nHTTP 422 Unprocessable Entity\n{\"errores\":[\"nombre obligatorio\",\"cantidad entre 1 y 6\"]}",
     "e": "olvidar app.use(express.json()): req.body llega undefined y el código falla al leer sus propiedades.",
     "tip": "la validación del frontend mejora la experiencia; la del servidor es la que protege."
    },
    {
     "n": "4.5",
     "t": "Archivos estáticos, 404 y errores",
     "m": "5 min",
     "b": [
      "express.static(\"public\") sirve los archivos de una carpeta (HTML, CSS, JavaScript, imágenes) tal cual, así el mismo servidor entrega el frontend y la API. Un middleware al final de todas las rutas responde 404 para las que no existen.",
      "Un middleware con cuatro parámetros (err, req, res, next) es el manejador de errores: recibe cualquier excepción lanzada en las rutas. Así se responde siempre con un JSON controlado y nunca se muestran detalles internos al usuario. En Express 5 también captura los errores de las funciones async."
     ],
     "k": [
      "app.use(express.static(\"public\")).",
      "Middleware final para el 404.",
      "(err, req, res, next) maneja los errores.",
      "No envíes el stack del error al cliente."
     ],
     "c": "import express from \"express\";\nconst app = express();\n\napp.use(express.static(\"public\"));   // sirve public/index.html, css, js…\n\napp.get(\"/api/error\", () => {\n  throw new Error(\"Algo se ha roto\");\n});\n\n// 404 para rutas que no existen\napp.use((req, res) => res.status(404).json({ error: \"Ruta no encontrada\" }));\n\n// Manejador de errores: 4 parámetros\napp.use((err, req, res, next) => {\n  console.error(err.message);\n  res.status(500).json({ error: \"Error interno del servidor\" });\n});\n\napp.listen(3000);",
     "o": "$ curl http://localhost:3000/api/no-existe\nHTTP 404 Not Found\n{\"error\":\"Ruta no encontrada\"}\n$ curl http://localhost:3000/api/error\nHTTP 500 Internal Server Error\n{\"error\":\"Error interno del servidor\"}",
     "tip": "el mensaje real del error queda en la consola del servidor, no en la respuesta."
    }
   ]
  },
  {
   "t": "Diseñar una API REST",
   "d": "Recursos y verbos, CRUD completo, códigos de estado y probar la API.",
   "secciones": [
    {
     "n": "5.1",
     "t": "Principios REST",
     "m": "5 min",
     "b": [
      "REST es un estilo para diseñar APIs sobre HTTP. Cada recurso (entradas, artistas, pedidos) tiene una URL con un sustantivo en plural, y el método HTTP indica la acción: GET /api/entradas lista, GET /api/entradas/7 obtiene una, POST /api/entradas crea, PUT o PATCH /api/entradas/7 modifica y DELETE /api/entradas/7 borra.",
      "Las respuestas usan los códigos de estado HTTP de forma coherente y JSON como formato. Las relaciones se expresan anidando rutas: /api/artistas/3/canciones. La API no guarda estado de sesión entre peticiones: cada una lleva todo lo necesario (por ejemplo, el token)."
     ],
     "k": [
      "Sustantivos en plural, no verbos: /api/entradas.",
      "El método indica la acción.",
      "Códigos de estado coherentes.",
      "Sin estado: cada petición lleva su autenticación."
     ],
     "c": "Método   Ruta                     Acción                 Respuesta\nGET      /api/entradas            Listar                 200 + array\nGET      /api/entradas/7          Obtener una            200 · 404\nPOST     /api/entradas            Crear                  201 + la nueva\nPUT      /api/entradas/7          Sustituir              200 · 404\nPATCH    /api/entradas/7          Modificar parcialmente 200 · 404\nDELETE   /api/entradas/7          Borrar                 204 · 404\n\nMal: GET /api/obtenerEntradas · POST /api/borrarEntrada?id=7",
     "v": 0,
     "tip": "si en la URL aparece un verbo (crear, borrar, obtener), probablemente no es REST."
    },
    {
     "n": "5.2",
     "t": "CRUD completo",
     "m": "7 min",
     "b": [
      "Este ejemplo implementa las cinco operaciones sobre un array en memoria. Es la estructura que después se conecta con una base de datos real: solo cambia de dónde se leen y dónde se guardan los datos.",
      "Fíjate en los detalles: el id lo asigna el servidor, el POST responde 201 con el recurso creado, el PUT mantiene el id original, el DELETE responde 204 sin cuerpo y todas las operaciones sobre un id inexistente responden 404."
     ],
     "k": [
      "GET lista y GET por id.",
      "POST → 201 con el recurso creado.",
      "PUT → sustituye manteniendo el id.",
      "DELETE → 204 sin cuerpo."
     ],
     "c": "import express from \"express\";\nconst app = express();\napp.use(express.json());\n\nlet entradas = [{ id: 1, tipo: \"dia\", precio: 39 }];\nlet siguienteId = 2;\n\napp.get(\"/api/entradas\", (req, res) => res.json(entradas));\n\napp.get(\"/api/entradas/:id\", (req, res) => {\n  const e = entradas.find(x => x.id === Number(req.params.id));\n  e ? res.json(e) : res.status(404).json({ error: \"No existe\" });\n});\n\napp.post(\"/api/entradas\", (req, res) => {\n  const nueva = { id: siguienteId++, ...req.body };\n  entradas.push(nueva);\n  res.status(201).json(nueva);\n});\n\napp.put(\"/api/entradas/:id\", (req, res) => {\n  const i = entradas.findIndex(x => x.id === Number(req.params.id));\n  if (i === -1) return res.status(404).json({ error: \"No existe\" });\n  entradas[i] = { id: entradas[i].id, ...req.body };\n  res.json(entradas[i]);\n});\n\napp.delete(\"/api/entradas/:id\", (req, res) => {\n  const antes = entradas.length;\n  entradas = entradas.filter(x => x.id !== Number(req.params.id));\n  entradas.length < antes ? res.status(204).end() : res.status(404).json({ error: \"No existe\" });\n});\n\napp.listen(3000);",
     "o": "$ curl -X POST http://localhost:3000/api/entradas -H \"Content-Type: application/json\" -d '{\"tipo\":\"abono\",\"precio\":89}'\nHTTP 201 Created\n{\"id\":2,\"tipo\":\"abono\",\"precio\":89}\n$ curl -X PUT http://localhost:3000/api/entradas/1 -H \"Content-Type: application/json\" -d '{\"tipo\":\"dia\",\"precio\":45}'\nHTTP 200 OK\n{\"id\":1,\"tipo\":\"dia\",\"precio\":45}\n$ curl -X DELETE http://localhost:3000/api/entradas/2\nHTTP 204 No Content\n$ curl http://localhost:3000/api/entradas\nHTTP 200 OK\n[{\"id\":1,\"tipo\":\"dia\",\"precio\":45}]\n$ curl http://localhost:3000/api/entradas/2\nHTTP 404 Not Found\n{\"error\":\"No existe\"}",
     "tip": "la salida es una sesión real contra este servidor: crear, modificar, borrar y comprobar."
    },
    {
     "n": "5.3",
     "t": "Códigos de estado y formato de errores",
     "m": "4 min",
     "b": [
      "Un cliente decide qué hacer según el código de estado, así que debe ser coherente: 2xx éxito, 4xx error del cliente (datos incorrectos, falta autenticación, no existe) y 5xx error del servidor. Los errores deben tener siempre el mismo formato JSON, por ejemplo { \"error\": \"mensaje\" } o una lista de errores por campo.",
      "Para listas grandes conviene paginar (?pagina=2&limite=20) y devolver también el total, para que el frontend pueda dibujar la paginación."
     ],
     "k": [
      "2xx éxito · 4xx error del cliente · 5xx error del servidor.",
      "Formato de error siempre igual.",
      "Paginación con ?pagina y ?limite.",
      "Devuelve el total para la paginación."
     ],
     "c": "// Respuesta paginada\nGET /api/artistas?pagina=2&limite=2\n200 OK\n{\n  \"datos\": [ { \"id\": 3, \"nombre\": \"Banda C\" }, { \"id\": 4, \"nombre\": \"Banda D\" } ],\n  \"pagina\": 2,\n  \"limite\": 2,\n  \"total\": 9\n}\n\n// Errores con formato homogéneo\n422 Unprocessable Content\n{ \"errores\": [ { \"campo\": \"email\", \"mensaje\": \"Formato no válido\" } ] }\n\n401 Unauthorized\n{ \"error\": \"Token no válido o caducado\" }",
     "v": 0,
     "a": [
      [
       "200 OK",
       "Lectura o modificación correcta."
      ],
      [
       "201 Created",
       "Recurso creado."
      ],
      [
       "204 No Content",
       "Borrado correcto, sin cuerpo."
      ],
      [
       "400 Bad Request",
       "JSON mal formado o petición incorrecta."
      ],
      [
       "401 Unauthorized",
       "Falta autenticación o el token no vale."
      ],
      [
       "403 Forbidden",
       "Autenticado pero sin permiso."
      ],
      [
       "404 Not Found",
       "El recurso no existe."
      ],
      [
       "409 Conflict",
       "Conflicto (email ya registrado)."
      ],
      [
       "422 Unprocessable Content",
       "Datos no válidos."
      ],
      [
       "500 Internal Server Error",
       "Error inesperado del servidor."
      ]
     ],
     "at": "Códigos de estado",
     "ah": [
      "Código",
      "Cuándo usarlo"
     ],
     "tip": "documentad vuestra API con un archivo de ejemplos o con Swagger/OpenAPI."
    },
    {
     "n": "5.4",
     "t": "Probar la API",
     "m": "4 min",
     "b": [
      "Para probar una API sin frontend se usan clientes HTTP: Thunder Client o REST Client (extensiones de VS Code), Postman, Bruno o curl en la terminal. Con REST Client basta un archivo .http con las peticiones, que además queda en el repositorio como documentación.",
      "Para tests automáticos se usa supertest junto con el ejecutor de tests de Node (node --test), Vitest o Jest: arrancan la aplicación en memoria, hacen peticiones y comprueban las respuestas."
     ],
     "k": [
      "Thunder Client, Postman, Bruno o curl.",
      "Archivos .http con REST Client.",
      "supertest + node --test para tests automáticos.",
      "Prueba también los casos de error."
     ],
     "c": "### api.http (extensión REST Client de VS Code)\nGET http://localhost:3000/api/entradas\n\n### Crear una entrada\nPOST http://localhost:3000/api/entradas\nContent-Type: application/json\n\n{ \"tipo\": \"abono\", \"precio\": 89 }\n\n### Test automático: entradas.test.js\nimport { test } from \"node:test\";\nimport assert from \"node:assert/strict\";\nimport request from \"supertest\";\nimport app from \"./app.js\";\n\ntest(\"POST /api/entradas crea una entrada\", async () => {\n  const res = await request(app).post(\"/api/entradas\").send({ tipo: \"dia\", precio: 39 });\n  assert.equal(res.status, 201);\n  assert.equal(res.body.tipo, \"dia\");\n});",
     "v": 0,
     "tip": "exportad app sin el listen en app.js y arrancad el servidor en server.js: así se puede testear."
    }
   ]
  },
  {
   "t": "Bases de datos",
   "d": "Conectar con PostgreSQL o MySQL, consultas parametrizadas y ORM.",
   "secciones": [
    {
     "n": "6.1",
     "t": "Conectar con PostgreSQL",
     "m": "5 min",
     "b": [
      "Para usar PostgreSQL desde Node se instala el paquete pg (para MySQL, mysql2). Lo habitual es crear un Pool de conexiones, que reutiliza conexiones abiertas en lugar de abrir una nueva por cada petición. Los datos de conexión se leen de variables de entorno.",
      "pool.query(sql, parámetros) ejecuta una consulta y devuelve un objeto cuyo campo rows contiene las filas como objetos JavaScript."
     ],
     "k": [
      "npm install pg (o mysql2 para MySQL).",
      "new Pool({ connectionString: process.env.DATABASE_URL }).",
      "const { rows } = await pool.query(sql, params).",
      "Un único pool para toda la aplicación."
     ],
     "c": "// db.js\nimport pg from \"pg\";\n\nexport const pool = new pg.Pool({\n  connectionString: process.env.DATABASE_URL,\n  // postgres://usuario:clave@localhost:5432/festival\n});\n\n// rutas/artistas.js\nimport { pool } from \"../db.js\";\n\napp.get(\"/api/artistas\", async (req, res) => {\n  const { rows } = await pool.query(\"SELECT id, nombre, dia FROM artistas ORDER BY nombre\");\n  res.json(rows);\n});",
     "v": 0,
     "tip": "servicios como Neon o Supabase ofrecen PostgreSQL gratis en la nube para practicar."
    },
    {
     "n": "6.2",
     "t": "Consultas parametrizadas",
     "m": "5 min",
     "b": [
      "Los datos que vienen de la petición nunca se concatenan en el SQL: se pasan como parámetros ($1, $2… en pg; ? en mysql2) en un array aparte. La librería los envía separados del código SQL y la inyección SQL se vuelve imposible.",
      "Para INSERT y UPDATE, RETURNING * (en PostgreSQL) devuelve la fila creada o modificada, que es justo lo que la API debe responder."
     ],
     "k": [
      "pg: $1, $2 · mysql2: ?.",
      "pool.query(sql, [valor1, valor2]).",
      "RETURNING * devuelve la fila creada.",
      "rowCount = filas afectadas."
     ],
     "c": "app.get(\"/api/artistas/:id\", async (req, res) => {\n  const { rows } = await pool.query(\"SELECT * FROM artistas WHERE id = $1\", [req.params.id]);\n  if (rows.length === 0) return res.status(404).json({ error: \"No existe\" });\n  res.json(rows[0]);\n});\n\napp.post(\"/api/artistas\", async (req, res) => {\n  const { nombre, dia } = req.body;\n  const { rows } = await pool.query(\n    \"INSERT INTO artistas (nombre, dia) VALUES ($1, $2) RETURNING *\",\n    [nombre, dia]\n  );\n  res.status(201).json(rows[0]);\n});\n\napp.delete(\"/api/artistas/:id\", async (req, res) => {\n  const { rowCount } = await pool.query(\"DELETE FROM artistas WHERE id = $1\", [req.params.id]);\n  rowCount ? res.status(204).end() : res.status(404).json({ error: \"No existe\" });\n});",
     "v": 0,
     "e": "escribir `SELECT * FROM artistas WHERE id = ${req.params.id}`: un id como «1 OR 1=1» devolvería toda la tabla.",
     "tip": "es la misma idea que PreparedStatement en Java y prepare en PHP."
    },
    {
     "n": "6.3",
     "t": "ORM: Prisma",
     "m": "5 min",
     "b": [
      "Un ORM (Object-Relational Mapping) permite trabajar con la base de datos usando objetos y métodos en lugar de escribir SQL. Prisma es el más popular en Node: se define el modelo de datos en un archivo schema.prisma, se generan las tablas con una migración y se consulta con un cliente con autocompletado.",
      "Ahorra mucho código repetitivo y evita errores, pero conviene saber SQL para entender qué hace por debajo y para las consultas complejas. Otras opciones son Drizzle, Sequelize y TypeORM."
     ],
     "k": [
      "schema.prisma define los modelos.",
      "npx prisma migrate dev crea las tablas.",
      "prisma.artista.findMany({ where: … }).",
      "Saber SQL sigue siendo imprescindible."
     ],
     "c": "// prisma/schema.prisma\nmodel Artista {\n  id        Int       @id @default(autoincrement())\n  nombre    String\n  dia       String\n  canciones Cancion[]\n}\n\nmodel Cancion {\n  id        Int     @id @default(autoincrement())\n  titulo    String\n  artista   Artista @relation(fields: [artistaId], references: [id])\n  artistaId Int\n}\n\n// Uso\nimport { PrismaClient } from \"@prisma/client\";\nconst prisma = new PrismaClient();\n\nconst viernes = await prisma.artista.findMany({\n  where: { dia: \"viernes\" },\n  include: { canciones: true },\n  orderBy: { nombre: \"asc\" },\n});\nconst nuevo = await prisma.artista.create({ data: { nombre: \"Banda D\", dia: \"sabado\" } });",
     "v": 0,
     "tip": "npx prisma studio abre una interfaz web para ver y editar los datos."
    }
   ]
  },
  {
   "t": "Autenticación y seguridad",
   "d": "Contraseñas con bcrypt, JWT, rutas protegidas, CORS y buenas prácticas.",
   "secciones": [
    {
     "n": "7.1",
     "t": "Contraseñas con bcrypt",
     "m": "4 min",
     "b": [
      "Las contraseñas se guardan cifradas con un algoritmo de hash lento y con sal, como bcrypt o argon2. bcrypt.hash(contraseña, 10) genera el hash (10 es el coste: cuanto mayor, más lento y más seguro) y bcrypt.compare(contraseña, hash) comprueba si una contraseña coincide.",
      "Nunca se guarda la contraseña original ni se usan algoritmos rápidos como md5 o sha256 sin más, que se rompen con fuerza bruta."
     ],
     "k": [
      "await bcrypt.hash(password, 10).",
      "await bcrypt.compare(password, hash).",
      "Columna de al menos 60 caracteres para el hash.",
      "Nunca devuelvas el hash en la API."
     ],
     "c": "import bcrypt from \"bcrypt\";\n\nconst hash = await bcrypt.hash(\"Secreta123\", 10);\nconsole.log(hash.slice(0, 7), hash.length);\nconsole.log(await bcrypt.compare(\"Secreta123\", hash));\nconsole.log(await bcrypt.compare(\"secreta123\", hash));",
     "o": "$2b$10$ 60\ntrue\nfalse",
     "tip": "es el equivalente a password_hash y password_verify de PHP."
    },
    {
     "n": "7.2",
     "t": "JWT: tokens de acceso",
     "m": "6 min",
     "b": [
      "En una API sin sesiones, el usuario se identifica con un token. Un JWT (JSON Web Token) es un texto firmado que contiene datos del usuario (su id, su email, su rol) y una fecha de caducidad. El servidor lo crea al hacer login con jwt.sign y lo comprueba en cada petición con jwt.verify usando una clave secreta.",
      "El cliente envía el token en la cabecera Authorization: Bearer <token>. Un middleware lo verifica y deja los datos del usuario en req.usuario para las rutas protegidas. El token está firmado, no cifrado: cualquiera puede leer su contenido, así que no se guardan datos sensibles en él."
     ],
     "k": [
      "Login correcto → jwt.sign(datos, SECRETO, { expiresIn }).",
      "Cliente: Authorization: Bearer <token>.",
      "Middleware: jwt.verify(token, SECRETO).",
      "El contenido del JWT es legible: nada sensible dentro."
     ],
     "c": "import express from \"express\";\nimport jwt from \"jsonwebtoken\";\nimport bcrypt from \"bcrypt\";\n\nconst app = express();\napp.use(express.json());\nconst SECRETO = process.env.JWT_SECRET;\n\n// Usuario de ejemplo con la contraseña \"Secreta123\" ya cifrada\nconst usuarios = [{ id: 1, email: \"ana@mail.com\", hash: await bcrypt.hash(\"Secreta123\", 10) }];\n\napp.post(\"/api/login\", async (req, res) => {\n  const { email, password } = req.body;\n  const u = usuarios.find(x => x.email === email);\n  if (!u || !(await bcrypt.compare(password, u.hash))) {\n    return res.status(401).json({ error: \"Credenciales incorrectas\" });\n  }\n  const token = jwt.sign({ sub: u.id, email: u.email }, SECRETO, { expiresIn: \"1h\" });\n  res.json({ token });\n});\n\nfunction autenticar(req, res, next) {\n  const token = req.headers.authorization?.replace(\"Bearer \", \"\");\n  try {\n    req.usuario = jwt.verify(token, SECRETO);\n    next();\n  } catch {\n    res.status(401).json({ error: \"Token no válido o caducado\" });\n  }\n}\n\napp.get(\"/api/perfil\", autenticar, (req, res) => res.json({ email: req.usuario.email }));\n\napp.listen(3000);",
     "o": "$ curl -X POST …/api/login -d '{\"email\":\"ana@mail.com\",\"password\":\"otra\"}'\n{\"error\":\"Credenciales incorrectas\"}\n$ curl -X POST …/api/login -d '{\"email\":\"ana@mail.com\",\"password\":\"Secreta123\"}'\n{\"token\":\"eyJhbGciOiJIUzI1NiIs…\"}\n$ curl …/api/perfil -H \"Authorization: Bearer eyJhbGciOiJIUzI1NiIs…\"\n{\"email\":\"ana@mail.com\"}\n$ curl …/api/perfil\n{\"error\":\"Token no válido o caducado\"}",
     "e": "poner el secreto del JWT en el código y subirlo a GitHub: cualquiera podría fabricar tokens válidos.",
     "tip": "la salida es una sesión real: login fallido, login correcto, ruta protegida con token y sin él."
    },
    {
     "n": "7.3",
     "t": "CORS y cabeceras de seguridad",
     "m": "5 min",
     "b": [
      "Por seguridad, el navegador bloquea las peticiones de JavaScript a una API de otro dominio salvo que la API lo permita expresamente: es la política CORS. Si tu frontend está en festival-daw.vercel.app y la API en otro dominio, la API debe enviar la cabecera Access-Control-Allow-Origin. El middleware cors() lo hace con una lista de orígenes permitidos.",
      "helmet() añade cabeceras de seguridad recomendadas y express-rate-limit limita el número de peticiones por IP para frenar ataques de fuerza bruta contra el login."
     ],
     "k": [
      "cors({ origin: [\"https://mi-front.com\"] }).",
      "Los errores de CORS se ven en la consola del navegador.",
      "helmet() → cabeceras de seguridad.",
      "rateLimit en el login."
     ],
     "c": "import express from \"express\";\nimport cors from \"cors\";\nimport helmet from \"helmet\";\nimport rateLimit from \"express-rate-limit\";\n\nconst app = express();\napp.use(helmet());\napp.use(cors({\n  origin: [\"http://localhost:5173\", \"https://festival-daw.vercel.app\"],\n}));\napp.use(express.json({ limit: \"100kb\" }));\n\napp.use(\"/api/login\", rateLimit({\n  windowMs: 15 * 60 * 1000,   // 15 minutos\n  limit: 10,                  // 10 intentos por IP\n}));",
     "v": 0,
     "e": "poner origin: \"*\" en una API que usa cookies o datos privados.",
     "tip": "en desarrollo, el proxy de Vite también evita los problemas de CORS."
    },
    {
     "n": "7.4",
     "t": "Variables de entorno y secretos",
     "m": "4 min",
     "b": [
      "La configuración que cambia entre entornos o es secreta (URL de la base de datos, secreto del JWT, claves de APIs) va en variables de entorno, nunca en el código. En desarrollo se guardan en un archivo .env, que Node lee con node --env-file=.env (o con el paquete dotenv), y que se añade al .gitignore.",
      "Se sube al repositorio un .env.example con los nombres de las variables y sin valores reales, para que otros sepan qué configurar. En producción, las variables se configuran en el panel del hosting."
     ],
     "k": [
      "process.env.NOMBRE lee una variable.",
      "node --env-file=.env server.js.",
      ".env en el .gitignore; .env.example en el repositorio.",
      "En producción, en el panel del hosting."
     ],
     "c": "# .env  (no se sube a Git)\nPORT=3000\nDATABASE_URL=postgres://ana:clave@localhost:5432/festival\nJWT_SECRET=una-cadena-larga-y-aleatoria\n\n# .env.example  (sí se sube)\nPORT=3000\nDATABASE_URL=\nJWT_SECRET=\n\n// package.json\n\"scripts\": { \"dev\": \"node --env-file=.env --watch src/server.js\" }\n\n// server.js\nconst PORT = process.env.PORT ?? 3000;\nif (!process.env.JWT_SECRET) throw new Error(\"Falta JWT_SECRET\");",
     "v": 0,
     "tip": "generad secretos aleatorios con: node -e \"console.log(crypto.randomUUID())\""
    }
   ]
  },
  {
   "t": "Estructura y despliegue",
   "d": "Organizar el proyecto, separar rutas y controladores, y publicar la API.",
   "secciones": [
    {
     "n": "8.1",
     "t": "Estructura del proyecto",
     "m": "5 min",
     "b": [
      "Cuando la API crece, todo en un archivo se vuelve inmanejable. Una estructura habitual separa las rutas (qué URL llama a qué función), los controladores (reciben la petición y devuelven la respuesta), los servicios o modelos (lógica de negocio y acceso a datos) y los middleware.",
      "express.Router() permite definir un grupo de rutas en su propio archivo y montarlo con un prefijo: app.use(\"/api/artistas\", rutasArtistas)."
     ],
     "k": [
      "routes/ → URLs y métodos.",
      "controllers/ → manejan la petición.",
      "services/ o models/ → lógica y base de datos.",
      "express.Router() para agrupar rutas."
     ],
     "c": "festival-api/\n├── src/\n│   ├── app.js              ← crea la app y registra middleware y rutas\n│   ├── server.js           ← app.listen()\n│   ├── db.js\n│   ├── routes/\n│   │   └── artistas.routes.js\n│   ├── controllers/\n│   │   └── artistas.controller.js\n│   ├── services/\n│   │   └── artistas.service.js\n│   └── middleware/\n│       └── autenticar.js\n├── tests/\n├── .env.example\n└── package.json\n\n// routes/artistas.routes.js\nimport { Router } from \"express\";\nimport * as ctrl from \"../controllers/artistas.controller.js\";\nimport { autenticar } from \"../middleware/autenticar.js\";\n\nconst router = Router();\nrouter.get(\"/\", ctrl.listar);\nrouter.get(\"/:id\", ctrl.obtener);\nrouter.post(\"/\", autenticar, ctrl.crear);\nexport default router;\n\n// app.js\napp.use(\"/api/artistas\", rutasArtistas);",
     "v": 0,
     "tip": "es la misma idea del patrón MVC que visteis en PHP."
    },
    {
     "n": "8.2",
     "t": "Publicar la API",
     "m": "5 min",
     "b": [
      "Una API de Node se puede publicar en plataformas como Render, Railway o Fly.io conectando el repositorio de GitHub: detectan el package.json, ejecutan npm install y npm start, y asignan una URL con HTTPS. Las variables de entorno se configuran en su panel. La base de datos puede ser un PostgreSQL gestionado (Neon, Supabase o el de la propia plataforma).",
      "En un VPS propio, la aplicación se mantiene viva con un gestor de procesos como PM2 o un servicio de systemd, detrás de Nginx como proxy inverso (lo veréis en el tema de Despliegue)."
     ],
     "k": [
      "Render / Railway / Fly.io desde GitHub.",
      "Script \"start\" en package.json.",
      "Escucha en process.env.PORT.",
      "VPS: PM2 o systemd + Nginx."
     ],
     "c": "# Render / Railway\nBuild command:  npm install\nStart command:  npm start\nVariables:      DATABASE_URL, JWT_SECRET, NODE_ENV=production\n\n// server.js: el puerto lo asigna la plataforma\nconst PORT = process.env.PORT ?? 3000;\napp.listen(PORT, () => console.log(`API en el puerto ${PORT}`));\n\n# VPS con PM2\n$ npm install -g pm2\n$ pm2 start src/server.js --name festival-api\n$ pm2 save && pm2 startup\n$ pm2 logs festival-api",
     "v": 0,
     "e": "escuchar siempre en el puerto 3000: las plataformas asignan el puerto en process.env.PORT y la app no responde.",
     "tip": "con NODE_ENV=production, Express activa optimizaciones y oculta detalles de los errores."
    },
    {
     "n": "8.3",
     "t": "Siguientes pasos",
     "m": "4 min",
     "b": [
      "Con Node y Express dominados, el siguiente paso suele ser TypeScript, que añade tipos a JavaScript y detecta errores antes de ejecutar; frameworks más estructurados como NestJS; o frameworks full stack como Next.js, que combinan React en el frontend con rutas de API en el mismo proyecto.",
      "También conviene aprender a documentar la API con OpenAPI (Swagger), a usar WebSockets (Socket.IO) para tiempo real y a añadir tests automáticos y un pipeline de CI que los ejecute en cada push."
     ],
     "k": [
      "TypeScript para tipar el backend.",
      "NestJS: framework estructurado al estilo Spring.",
      "Next.js: React + API en un solo proyecto.",
      "OpenAPI, WebSockets, tests y CI/CD."
     ],
     "c": "// TypeScript: el mismo endpoint con tipos\nimport express, { Request, Response } from \"express\";\n\ninterface Entrada {\n  id: number;\n  tipo: \"dia\" | \"abono\" | \"vip\";\n  precio: number;\n}\n\nconst entradas: Entrada[] = [];\n\napp.post(\"/api/entradas\", (req: Request<{}, {}, Omit<Entrada, \"id\">>, res: Response<Entrada>) => {\n  const nueva: Entrada = { id: entradas.length + 1, ...req.body };\n  entradas.push(nueva);\n  res.status(201).json(nueva);\n});",
     "v": 0,
     "tip": "una API propia desplegada y documentada es un proyecto excelente para el portfolio."
    }
   ]
  }
 ],
 "chuleta": [
  [
   "node archivo.js",
   "Ejecutar un script de Node. --watch lo reinicia al guardar.",
   "node --watch src/server.js",
   "Node y npm"
  ],
  [
   "npm init -y",
   "Crear el package.json del proyecto.",
   "npm init -y",
   "Node y npm"
  ],
  [
   "npm install / -D",
   "Instalar una dependencia / de desarrollo.",
   "npm install express\nnpm install -D eslint",
   "Node y npm"
  ],
  [
   "npm run script",
   "Ejecutar un script de package.json.",
   "npm run dev",
   "Node y npm"
  ],
  [
   "\"type\": \"module\"",
   "Activa import/export en el proyecto.",
   "{ \"type\": \"module\" }",
   "Node y npm"
  ],
  [
   "import / export",
   "Módulos ES. Las rutas relativas llevan extensión.",
   "import { conIva } from \"./utils.js\";",
   "Node y npm"
  ],
  [
   "process.argv / process.env",
   "Argumentos del script / variables de entorno.",
   "const puerto = process.env.PORT ?? 3000;",
   "Node y npm"
  ],
  [
   "fs/promises",
   "Leer y escribir archivos con promesas.",
   "const txt = await readFile(\"datos.json\", \"utf8\");",
   "Node y npm"
  ],
  [
   "path.join",
   "Construir rutas válidas en cualquier sistema.",
   "path.join(\"datos\", \"ventas.csv\")",
   "Node y npm"
  ],
  [
   "EventEmitter",
   "Crear y escuchar eventos propios.",
   "emisor.on(\"venta\", n => …); emisor.emit(\"venta\", 2);",
   "Node y npm"
  ],
  [
   "express()",
   "Crear la aplicación.",
   "const app = express();",
   "Express"
  ],
  [
   "app.get / post / put / patch / delete",
   "Definir rutas por método y URL.",
   "app.get(\"/api/artistas\", (req, res) => { … });",
   "Express"
  ],
  [
   "req.params / req.query / req.body",
   "Parámetros de ruta, de consulta y cuerpo JSON.",
   "/artistas/:id → req.params.id",
   "Express"
  ],
  [
   "res.json / res.status / res.send",
   "Responder JSON, fijar el código o enviar texto.",
   "res.status(201).json(nueva);",
   "Express"
  ],
  [
   "express.json()",
   "Middleware para leer cuerpos JSON en req.body.",
   "app.use(express.json());",
   "Express"
  ],
  [
   "express.static",
   "Servir archivos estáticos de una carpeta.",
   "app.use(express.static(\"public\"));",
   "Express"
  ],
  [
   "Middleware (req, res, next)",
   "Función intermedia: llama a next() o responde.",
   "app.use((req, res, next) => { console.log(req.url); next(); });",
   "Express"
  ],
  [
   "Manejador de errores (err, req, res, next)",
   "Captura las excepciones de las rutas.",
   "app.use((err, req, res, next) => res.status(500).json({ error: \"Error interno\" }));",
   "Express"
  ],
  [
   "express.Router()",
   "Agrupar rutas en un archivo y montarlas con un prefijo.",
   "app.use(\"/api/artistas\", router);",
   "Express"
  ],
  [
   "app.listen(puerto)",
   "Poner el servidor a escuchar.",
   "app.listen(process.env.PORT ?? 3000);",
   "Express"
  ],
  [
   "GET /recursos",
   "Listar. 200 con un array.",
   "GET /api/entradas",
   "API REST"
  ],
  [
   "GET /recursos/:id",
   "Obtener uno. 200 o 404.",
   "GET /api/entradas/7",
   "API REST"
  ],
  [
   "POST /recursos",
   "Crear. 201 con el recurso creado.",
   "POST /api/entradas",
   "API REST"
  ],
  [
   "PUT / PATCH /recursos/:id",
   "Sustituir / modificar parcialmente.",
   "PATCH /api/entradas/7",
   "API REST"
  ],
  [
   "DELETE /recursos/:id",
   "Borrar. 204 sin cuerpo.",
   "DELETE /api/entradas/7",
   "API REST"
  ],
  [
   "Códigos de estado",
   "200 OK · 201 creado · 204 sin contenido · 400 · 401 · 403 · 404 · 422 · 500.",
   "res.status(422).json({ errores })",
   "API REST"
  ],
  [
   "pg Pool",
   "Conexión con PostgreSQL reutilizando conexiones.",
   "const pool = new pg.Pool({ connectionString: process.env.DATABASE_URL });",
   "Datos y seguridad"
  ],
  [
   "pool.query(sql, [params])",
   "Consulta parametrizada ($1, $2…): sin inyección SQL.",
   "await pool.query(\"SELECT * FROM t WHERE id = $1\", [id]);",
   "Datos y seguridad"
  ],
  [
   "RETURNING *",
   "Devuelve la fila insertada o modificada (PostgreSQL).",
   "INSERT INTO t (…) VALUES ($1) RETURNING *",
   "Datos y seguridad"
  ],
  [
   "bcrypt.hash / compare",
   "Cifrar y comprobar contraseñas.",
   "await bcrypt.compare(password, usuario.hash)",
   "Datos y seguridad"
  ],
  [
   "jwt.sign / jwt.verify",
   "Crear y comprobar tokens de acceso.",
   "jwt.sign({ sub: id }, process.env.JWT_SECRET, { expiresIn: \"1h\" })",
   "Datos y seguridad"
  ],
  [
   "Authorization: Bearer",
   "Cabecera con el token en cada petición.",
   "fetch(url, { headers: { Authorization: `Bearer ${token}` } })",
   "Datos y seguridad"
  ],
  [
   "cors()",
   "Permitir peticiones desde otros dominios.",
   "app.use(cors({ origin: [\"https://mi-front.com\"] }));",
   "Datos y seguridad"
  ],
  [
   "helmet() / rateLimit",
   "Cabeceras de seguridad / limitar peticiones por IP.",
   "app.use(helmet());",
   "Datos y seguridad"
  ],
  [
   "node --env-file=.env",
   "Cargar variables de entorno desde un archivo.",
   "node --env-file=.env src/server.js",
   "Datos y seguridad"
  ],
  [
   "pm2",
   "Mantener la app viva en un servidor.",
   "pm2 start src/server.js --name api",
   "Datos y seguridad"
  ]
 ],
 "retos": [
  {
   "t": "¿Qué es Node.js?",
   "o": [
    "Un framework de CSS",
    "Un entorno para ejecutar JavaScript fuera del navegador",
    "Una base de datos",
    "Un navegador"
   ],
   "ok": 1,
   "why": "Node ejecuta JavaScript en el servidor con el motor V8."
  },
  {
   "t": "¿Dónde se lee el 7 en GET /api/entradas/7 con la ruta /api/entradas/:id?",
   "o": [
    "req.query.id",
    "req.params.id",
    "req.body.id",
    "req.id"
   ],
   "ok": 1,
   "why": "Los parámetros de ruta están en req.params."
  },
  {
   "t": "¿Qué middleware hace falta para leer req.body en JSON?",
   "o": [
    "express.static()",
    "express.json()",
    "cors()",
    "helmet()"
   ],
   "ok": 1,
   "why": "express.json() procesa los cuerpos JSON."
  },
  {
   "t": "¿Qué código devuelves tras crear un recurso con POST?",
   "o": [
    "200",
    "201",
    "204",
    "404"
   ],
   "ok": 1,
   "why": "201 Created."
  },
  {
   "t": "¿Qué pasa si un middleware no responde ni llama a next()?",
   "o": [
    "Express responde 200",
    "La petición se queda sin respuesta",
    "Se salta a la siguiente ruta",
    "Se reinicia el servidor"
   ],
   "ok": 1,
   "why": "Hay que llamar a next() o enviar una respuesta."
  },
  {
   "t": "¿Cómo se evita la inyección SQL con pg?",
   "o": [
    "Concatenando el valor",
    "Con parámetros $1, $2 y un array de valores",
    "Con JSON.stringify",
    "Con encodeURI"
   ],
   "ok": 1,
   "why": "Los parámetros separan los datos del SQL."
  },
  {
   "t": "¿Dónde envía el cliente el JWT?",
   "o": [
    "En la URL",
    "En la cabecera Authorization: Bearer",
    "En el cuerpo de cada GET",
    "En una cookie siempre"
   ],
   "ok": 1,
   "why": "Lo habitual es Authorization: Bearer <token>."
  },
  {
   "t": "¿Qué no debe subirse a GitHub?",
   "o": [
    "package.json",
    "El archivo .env",
    "README.md",
    "src/"
   ],
   "ok": 1,
   "why": ".env contiene secretos; se sube un .env.example sin valores."
  }
 ]
};
