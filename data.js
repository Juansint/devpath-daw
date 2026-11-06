/* Contenido de los temas. Para añadir un tema nuevo, copia un objeto y cambia sus datos. */
const TOPICS = [
  {
    slug: 'html', name: 'HTML', badge: '</>', area: 'Frontend', bg: '#FFF1E8', fg: '#9A3412',
    site: 'W3Schools', url: 'https://www.w3schools.com/html/', practice: 'html', practiceTag: 'Editor en vivo', practiceTitle: 'Escribe HTML y míralo en vivo',
    keys: 'html etiquetas web estructura formularios semántica',
    desc: 'La estructura de toda web: etiquetas, enlaces, imágenes, formularios y semántica.',
    steps: [['Estructura básica', 'DOCTYPE, html, head y body.'], ['Texto y enlaces', 'Títulos, párrafos, listas, a e img.'], ['Formularios', 'form, input, label y button.'], ['Semántica', 'header, main, section y accesibilidad.']],
    cheats: [['<!DOCTYPE html>', 'Indica al navegador que es HTML5.'], ['<a href="url">', 'Crea un enlace.'], ['<img src alt>', 'Inserta una imagen; alt la describe.'], ['<ul><li>', 'Lista sin orden.'], ['<form>', 'Agrupa campos que se envían juntos.'], ['<label for="id">', 'Etiqueta asociada a un campo.'], ['<input type="email">', 'Campo con validación de correo.'], ['<main> <section>', 'Etiquetas semánticas para estructurar.']],
    quiz: [{ t: '¿Qué atributo de <img> describe la imagen para lectores de pantalla?', o: ['src', 'title', 'alt', 'id'], ok: 2, why: 'alt da un texto alternativo; es clave para la accesibilidad.' }, { t: '¿Qué etiqueta crea un enlace?', o: ['<link>', '<a>', '<href>', '<nav>'], ok: 1, why: '<a href="..."> es el enlace; <link> se usa en el head para CSS.' }]
  },
  {
    slug: 'css', name: 'CSS', badge: '{ }', area: 'Frontend', bg: '#EEF0FF', fg: '#3730A3',
    site: 'Codecademy', url: 'https://www.codecademy.com/learn/learn-css', practice: 'flex', practiceTag: 'Playground Flexbox', practiceTitle: 'Playground de Flexbox',
    keys: 'css estilos flexbox grid diseño responsive',
    desc: 'Colores, tipografía, modelo de caja y maquetación con Flexbox y Grid.',
    steps: [['Selectores y colores', 'Clases, ids, colores y fuentes.'], ['Modelo de caja', 'margin, border, padding y content.'], ['Flexbox', 'Alinear elementos en una dimensión.'], ['Grid y responsive', 'Rejillas y @media para móvil.']],
    cheats: [['display: flex;', 'Convierte un contenedor en flexible.'], ['justify-content', 'Alinea en el eje principal.'], ['align-items', 'Alinea en el eje cruzado.'], ['gap: 16px;', 'Espacio entre elementos.'], ['grid-template-columns', 'Define las columnas de una rejilla.'], ['margin / padding', 'Espacio exterior / interior.'], ['@media (max-width: 600px)', 'Estilos solo para pantallas pequeñas.'], [':hover', 'Estilo al pasar el ratón.']],
    quiz: [{ t: 'En Flexbox, ¿qué propiedad alinea en el eje principal?', o: ['align-items', 'justify-content', 'flex-wrap', 'gap'], ok: 1, why: 'justify-content reparte en el eje principal; align-items en el cruzado.' }, { t: '¿Qué capa del modelo de caja queda entre el borde y el contenido?', o: ['margin', 'outline', 'padding', 'gap'], ok: 2, why: 'padding es el relleno interior, entre el contenido y el borde.' }]
  },
  {
    slug: 'javascript', name: 'JavaScript', badge: 'JS', area: 'Frontend', bg: '#FEF9C3', fg: '#854D0E',
    site: 'freeCodeCamp', url: 'https://www.freecodecamp.org/espanol/', practice: 'code', practiceTag: 'Predice la salida', practiceTitle: 'Predice la salida', file: 'script.js',
    keys: 'javascript js dom eventos funciones arrays',
    desc: 'Dale vida a la web: variables, funciones, arrays, eventos y el DOM.',
    code: 'const notas = [6, 8, 9];\nconst dobles = notas.map(n => n * 2);\nconsole.log(dobles);', output: '[12, 16, 18]', why: 'map recorre el array y devuelve uno nuevo con cada valor transformado.',
    steps: [['Variables y tipos', 'let, const, strings, números y booleanos.'], ['Funciones', 'Declaración, flecha y parámetros.'], ['DOM y eventos', 'querySelector y addEventListener.'], ['Async', 'fetch, promesas y async/await.']],
    cheats: [['let / const', 'Variable reasignable / constante.'], ['() => {}', 'Función flecha.'], ['document.querySelector()', 'Selecciona un elemento del DOM.'], ['el.addEventListener("click", fn)', 'Escucha un evento.'], ['array.map(fn)', 'Transforma cada elemento.'], ['array.filter(fn)', 'Se queda con los que cumplen.'], ['await fetch(url)', 'Pide datos a una API.'], ['console.log()', 'Muestra valores en la consola.']],
    quiz: [{ t: '¿Qué diferencia hay entre let y const?', o: ['Ninguna', 'const no se puede reasignar', 'let es más rápido', 'const solo guarda números'], ok: 1, why: 'Una variable const no se puede reasignar (aunque un objeto const sí puede cambiar por dentro).' }, { t: '¿Qué método selecciona el primer elemento que coincide con un selector CSS?', o: ['getElement()', 'querySelector()', 'select()', 'find()'], ok: 1, why: 'document.querySelector(".clase") devuelve el primer elemento que coincide.' }]
  },
  {
    slug: 'react', name: 'React', badge: '⚛', area: 'Frontend', bg: '#E0F7FA', fg: '#155E75',
    site: 'react.dev', url: 'https://es.react.dev/learn', practice: 'code', practiceTag: 'Predice la salida', practiceTitle: 'Predice qué se pinta', file: 'App.jsx',
    keys: 'react componentes hooks estado jsx props',
    desc: 'Interfaces con componentes, props, estado y hooks.',
    code: 'function Saludo({ nombre }) {\n  return <h1>Hola, {nombre}</h1>;\n}\n\n<Saludo nombre="DAW" />', output: 'Hola, DAW', why: 'El componente recibe la prop nombre y la pinta dentro del JSX con llaves.',
    steps: [['JSX y componentes', 'Funciones que devuelven interfaz.'], ['Props', 'Pasar datos de padre a hijo.'], ['Estado', 'useState para datos que cambian.'], ['Efectos y datos', 'useEffect y llamadas a APIs.']],
    cheats: [['function App() {}', 'Un componente es una función.'], ['<Card titulo="x" />', 'Pasar props a un componente.'], ['const [n, setN] = useState(0)', 'Estado local.'], ['useEffect(() => {}, [])', 'Ejecutar código al montar.'], ['lista.map(i => <li key={i.id}>)', 'Pintar listas con key.'], ['onClick={fn}', 'Manejar eventos.'], ['npm create vite@latest', 'Crear un proyecto React.']],
    quiz: [{ t: '¿Qué hook guarda un valor que cambia y vuelve a pintar el componente?', o: ['useEffect', 'useState', 'useRef', 'useMemo'], ok: 1, why: 'useState devuelve el valor y la función para cambiarlo; al cambiarlo, React vuelve a pintar.' }, { t: 'Las props de un componente…', o: ['Se pueden modificar dentro del hijo', 'Son de solo lectura', 'Solo pueden ser texto', 'Se guardan en localStorage'], ok: 1, why: 'Un componente no debe modificar sus props; para datos cambiantes se usa estado.' }]
  },
  {
    slug: 'java', name: 'Java', badge: 'Jv', area: 'Backend', bg: '#FEE2E2', fg: '#991B1B',
    site: 'SoloLearn', url: 'https://www.sololearn.com', practice: 'code', practiceTag: 'Predice la salida', practiceTitle: 'Predice la salida', file: 'Main.java',
    keys: 'java poo clases objetos herencia programación joptionpane',
    desc: 'Programación orientada a objetos: clases, herencia, colecciones y excepciones.',
    code: 'int suma = 0;\nfor (int i = 1; i <= 5; i++) {\n    suma += i;\n}\nSystem.out.println("Suma: " + suma);', output: 'Suma: 15', why: 'El bucle suma 1 + 2 + 3 + 4 + 5 = 15.',
    steps: [['Sintaxis y tipos', 'main, variables, if y bucles.'], ['Clases y objetos', 'Atributos, métodos y constructores.'], ['Herencia', 'extends, interfaces y polimorfismo.'], ['Colecciones', 'ArrayList, HashMap y excepciones.']],
    cheats: [['public static void main(String[] args)', 'Punto de entrada del programa.'], ['Scanner sc = new Scanner(System.in)', 'Leer datos del teclado.'], ['class Coche { }', 'Definir una clase.'], ['new Coche()', 'Crear un objeto.'], ['extends / implements', 'Heredar / implementar interfaz.'], ['ArrayList<String>', 'Lista que crece sola.'], ['try { } catch (Exception e) { }', 'Capturar errores.'], ['JOptionPane.showInputDialog()', 'Pedir datos con una ventana.']],
    quiz: [{ t: '¿Qué palabra se usa para heredar de una clase?', o: ['implements', 'extends', 'inherits', 'super'], ok: 1, why: 'class Perro extends Animal: Perro hereda de Animal.' }, { t: '¿Qué estructura usarías para una lista que crece dinámicamente?', o: ['int[]', 'ArrayList', 'String', 'final'], ok: 1, why: 'Un array tiene tamaño fijo; ArrayList crece según añades elementos.' }]
  },
  {
    slug: 'php', name: 'PHP', badge: 'php', area: 'Backend', bg: '#EDE9FE', fg: '#5B21B6',
    site: 'php.net', url: 'https://www.php.net/manual/es/', practice: 'code', practiceTag: 'Predice la salida', practiceTitle: 'Predice la salida', file: 'index.php',
    keys: 'php servidor backend formularios sesiones pdo',
    desc: 'Lado servidor: formularios, sesiones y conexión con bases de datos.',
    code: '<?php\n$nombres = ["Ana", "Luis"];\nforeach ($nombres as $n) {\n    echo "Hola $n\\n";\n}', output: 'Hola Ana\nHola Luis', why: 'foreach recorre el array y las comillas dobles sustituyen $n por su valor.',
    steps: [['Sintaxis', 'Variables, arrays y echo.'], ['Formularios', 'Recibir datos con $_POST.'], ['Sesiones', 'session_start y $_SESSION.'], ['Bases de datos', 'PDO y consultas preparadas.']],
    cheats: [['<?php echo "Hola"; ?>', 'Imprimir texto.'], ['$variable', 'Todas las variables empiezan por $.'], ['$_POST["campo"]', 'Leer un campo de formulario.'], ['session_start()', 'Iniciar o reanudar la sesión.'], ['require "db.php";', 'Incluir otro archivo.'], ['new PDO($dsn, $u, $p)', 'Conectar a la base de datos.'], ['password_hash()', 'Guardar contraseñas de forma segura.'], ['foreach ($a as $x)', 'Recorrer un array.']],
    quiz: [{ t: '¿Con qué símbolo empiezan las variables en PHP?', o: ['@', '#', '$', '&'], ok: 2, why: 'En PHP todas las variables empiezan por $, por ejemplo $nombre.' }, { t: '¿Qué función hay que llamar antes de usar $_SESSION?', o: ['session_open()', 'start()', 'session_start()', 'cookie()'], ok: 2, why: 'session_start() inicia o reanuda la sesión del usuario.' }]
  },
  {
    slug: 'sql', name: 'SQL', badge: 'SQL', area: 'Datos', bg: '#DCFCE7', fg: '#166534',
    site: 'SQLBolt', url: 'https://sqlbolt.com', practice: 'sql', practiceTag: 'Consultas en vivo', practiceTitle: 'Consultas en vivo',
    keys: 'sql bases de datos consultas select join postgres mysql',
    desc: 'Consultas, filtros, JOIN, agrupaciones y diseño de bases de datos.',
    steps: [['SELECT y WHERE', 'Leer columnas y filtrar filas.'], ['ORDER BY y LIMIT', 'Ordenar y limitar resultados.'], ['JOIN', 'Combinar varias tablas.'], ['GROUP BY', 'Agrupar con COUNT, AVG y SUM.']],
    cheats: [['SELECT col FROM tabla', 'Leer columnas.'], ['WHERE nota >= 5', 'Filtrar filas.'], ['ORDER BY nota DESC', 'Ordenar de mayor a menor.'], ['JOIN cursos ON …', 'Combinar tablas por una clave.'], ['GROUP BY curso', 'Agrupar filas.'], ['COUNT(*) / AVG(col)', 'Contar / media.'], ['INSERT INTO t VALUES (…)', 'Añadir una fila.'], ['UPDATE t SET col = … WHERE …', 'Modificar filas.']],
    quiz: [{ t: '¿Qué cláusula filtra las filas que devuelve una consulta?', o: ['ORDER BY', 'WHERE', 'GROUP BY', 'FROM'], ok: 1, why: 'WHERE filtra filas antes de agrupar u ordenar.' }, { t: '¿Qué usas para combinar datos de dos tablas relacionadas?', o: ['UNION', 'JOIN', 'MERGE', 'LINK'], ok: 1, why: 'JOIN … ON une filas de dos tablas que comparten una clave.' }]
  },
  {
    slug: 'git', href: '/git', name: 'Git y GitHub', badge: 'git', area: 'Herramientas', bg: '#FFEDD5', fg: '#9A3412',
    site: 'Pro Git', practiceTag: 'Simulador de ramas', keys: 'git github ramas commits versiones pull request',
    desc: 'Control de versiones, ramas y trabajo en equipo con pull requests.'
  }
];

const RESOURCES = [
  ['HTML', 'w3schools.com', 'https://www.w3schools.com'], ['CSS', 'codecademy.com', 'https://www.codecademy.com'],
  ['JavaScript', 'freecodecamp.org', 'https://www.freecodecamp.org'], ['React', 'react.dev', 'https://react.dev'],
  ['Python', 'learnpython.org', 'https://www.learnpython.org'], ['Java', 'sololearn.com', 'https://www.sololearn.com'],
  ['PHP', 'php.net', 'https://www.php.net'], ['Ciberseguridad', 'tryhackme.com', 'https://tryhackme.com'],
  ['C', 'learn-c.org', 'https://www.learn-c.org'], ['C++', 'learncpp.com', 'https://www.learncpp.com'],
  ['AWS', 'skillbuilder.aws', 'https://skillbuilder.aws'], ['IA / ML', 'coursera.org', 'https://www.coursera.org'],
  ['Git', 'learngitbranching.js.org', 'https://learngitbranching.js.org'], ['SQL', 'sqlbolt.com', 'https://sqlbolt.com']
];
