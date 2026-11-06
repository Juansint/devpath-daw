window.LECCIONES = window.LECCIONES || {};
LECCIONES["react"] = {
 "lang": "jsx",
 "capitulos": [
  {
   "t": "Introducción a React",
   "d": "Qué es React, cómo se crea un proyecto y las reglas de JSX.",
   "secciones": [
    {
     "n": "1.1",
     "t": "¿Qué es React?",
     "m": "4 min",
     "b": [
      "React es una librería de JavaScript para construir interfaces a base de componentes: piezas reutilizables (un botón, una tarjeta, un menú) que combinan su HTML, su lógica y su estado. En lugar de modificar el DOM a mano, describes cómo debe verse la interfaz para cada estado y React se encarga de actualizar la página cuando los datos cambian.",
      "Se usa sobre todo para crear SPA (Single Page Applications): aplicaciones en las que la página no se recarga al navegar, como Gmail o Instagram web. Es la librería de interfaces más demandada en ofertas de trabajo de frontend."
     ],
     "k": [
      "Interfaz = árbol de componentes.",
      "Declarativo: describes el resultado, React actualiza el DOM.",
      "Cuando cambian los datos (estado), React vuelve a pintar.",
      "Los ejemplos de estas lecciones se ejecutan en vivo: edítalos y pulsa Ejecutar."
     ],
     "c": "function App() {\n  return (\n    <div>\n      <h1>Hola, DAW</h1>\n      <p>Este componente lo pinta React.</p>\n    </div>\n  );\n}\n\nReactDOM.createRoot(document.getElementById(\"app\")).render(<App />);",
     "tip": "los ejemplos de React cargan la librería desde internet; si no se ven, comprobad la conexión."
    },
    {
     "n": "1.2",
     "t": "Crear un proyecto con Vite",
     "m": "4 min",
     "b": [
      "Para un proyecto real se usa una herramienta que prepara todo: Vite es la opción recomendada hoy (Create React App está obsoleto). Con npm create vite@latest eliges React y JavaScript o TypeScript, instalas dependencias con npm install y arrancas el servidor de desarrollo con npm run dev, que recarga la página al guardar.",
      "La estructura básica tiene index.html, src/main.jsx (monta la aplicación en el elemento #root) y src/App.jsx (el componente principal). npm run build genera la versión optimizada en la carpeta dist para publicarla."
     ],
     "k": [
      "npm create vite@latest mi-app -- --template react",
      "npm install y npm run dev.",
      "src/main.jsx monta <App /> en #root.",
      "npm run build → carpeta dist lista para publicar."
     ],
     "c": "# Terminal\nnpm create vite@latest festival -- --template react\ncd festival\nnpm install\nnpm run dev        # http://localhost:5173\n\n# src/main.jsx\nimport { createRoot } from \"react-dom/client\";\nimport App from \"./App.jsx\";\ncreateRoot(document.getElementById(\"root\")).render(<App />);",
     "v": 0,
     "a": [
      [
       "index.html",
       "Página única con el div#root."
      ],
      [
       "src/main.jsx",
       "Punto de entrada: monta la app."
      ],
      [
       "src/App.jsx",
       "Componente principal."
      ],
      [
       "package.json",
       "Dependencias y scripts (dev, build)."
      ],
      [
       "dist/",
       "Resultado de npm run build."
      ]
     ],
     "at": "Archivos de un proyecto Vite",
     "ah": [
      "Archivo",
      "Función"
     ],
     "tip": "necesitáis Node.js instalado; comprobadlo con node -v."
    },
    {
     "n": "1.3",
     "t": "JSX y sus reglas",
     "m": "5 min",
     "b": [
      "JSX es una sintaxis que permite escribir algo parecido a HTML dentro de JavaScript. No es HTML: se transforma en llamadas a funciones de React. Por eso tiene algunas reglas propias.",
      "Un componente debe devolver un único elemento raíz (si no quieres un div extra, usa un fragmento <>…</>). Todas las etiquetas deben cerrarse (<img />, <br />). Los atributos van en camelCase: class se escribe className, for se escribe htmlFor y onclick se escribe onClick."
     ],
     "k": [
      "Un solo elemento raíz o un fragmento <>…</>.",
      "Cierra todas las etiquetas: <input />.",
      "className en lugar de class; htmlFor en lugar de for.",
      "Atributos y eventos en camelCase: onClick, tabIndex."
     ],
     "c": "function App() {\n  return (\n    <>\n      <h2 className=\"titulo\">Inscripción</h2>\n      <label htmlFor=\"nombre\">Nombre</label>\n      <input id=\"nombre\" placeholder=\"Tu nombre\" />\n      <br />\n      <img src=\"https://placehold.co/120x50?text=Logo\" alt=\"Logo\" />\n    </>\n  );\n}\n\nReactDOM.createRoot(document.getElementById(\"app\")).render(<App />);",
     "a": [
      [
       "class",
       "className"
      ],
      [
       "for",
       "htmlFor"
      ],
      [
       "onclick",
       "onClick"
      ],
      [
       "<br>",
       "<br />"
      ],
      [
       "style=\"color: red\"",
       "style={{ color: \"red\" }}"
      ],
      [
       "tabindex",
       "tabIndex"
      ]
     ],
     "at": "HTML frente a JSX",
     "ah": [
      "HTML",
      "JSX"
     ],
     "e": "escribir class en lugar de className: funciona a medias y la consola muestra un aviso.",
     "tip": "quitad el fragmento <> del ejemplo y veréis el error de «adjacent JSX elements»."
    },
    {
     "n": "1.4",
     "t": "Expresiones en JSX",
     "m": "4 min",
     "b": [
      "Entre llaves { } se puede poner cualquier expresión de JavaScript: variables, operaciones, llamadas a funciones o un ternario. Lo que devuelve la expresión se pinta en ese lugar.",
      "No se pueden poner sentencias como if o for directamente dentro del JSX; para eso se usan el ternario, el operador && o el método map, que veréis en los próximos capítulos. Los valores null, undefined y false no pintan nada."
     ],
     "k": [
      "{variable} pinta su valor.",
      "Dentro de { } solo expresiones, no if ni for.",
      "Atributos dinámicos: src={url}.",
      "null, undefined y false no se pintan; el 0 sí."
     ],
     "c": "function App() {\n  const nombre = \"Ana\";\n  const entradas = 3;\n  const precio = 39;\n  const logo = \"https://placehold.co/100x40?text=DAW\";\n\n  return (\n    <div>\n      <img src={logo} alt=\"Logo\" />\n      <h2>Hola, {nombre.toUpperCase()}</h2>\n      <p>Entradas: {entradas} · Total: {entradas * precio} €</p>\n      <p>{entradas > 2 ? \"Tienes descuento de grupo\" : \"Sin descuento\"}</p>\n    </div>\n  );\n}\n\nReactDOM.createRoot(document.getElementById(\"app\")).render(<App />);",
     "tip": "cambiad el número de entradas y pulsad Ejecutar."
    }
   ]
  },
  {
   "t": "Componentes y props",
   "d": "Crear componentes, pasarles datos con props, children y composición.",
   "secciones": [
    {
     "n": "2.1",
     "t": "Componentes",
     "m": "4 min",
     "b": [
      "Un componente es una función que devuelve JSX. Su nombre debe empezar por mayúscula (así React lo distingue de una etiqueta HTML) y se usa como si fuera una etiqueta: <Cabecera />.",
      "La idea es dividir la interfaz en piezas pequeñas, cada una con una responsabilidad, y componerlas. En un proyecto real cada componente suele ir en su propio archivo y se exporta para usarlo desde otros."
     ],
     "k": [
      "function Nombre() { return <… />; }",
      "Nombre en PascalCase: TarjetaArtista.",
      "Se usa como etiqueta: <TarjetaArtista />.",
      "Un archivo por componente: export default function …"
     ],
     "c": "function Cabecera() {\n  return <header><h1>Festival DAW</h1></header>;\n}\n\nfunction Pie() {\n  return <footer><small>© 2026</small></footer>;\n}\n\nfunction App() {\n  return (\n    <div>\n      <Cabecera />\n      <main><p>Contenido principal</p></main>\n      <Pie />\n    </div>\n  );\n}\n\nReactDOM.createRoot(document.getElementById(\"app\")).render(<App />);",
     "e": "nombrar un componente en minúscula (cabecera): React lo trata como una etiqueta HTML desconocida.",
     "tip": "pensad la web como un árbol: App → Cabecera, Cartel → Tarjeta…"
    },
    {
     "n": "2.2",
     "t": "Props",
     "m": "5 min",
     "b": [
      "Las props son los datos que un componente padre pasa a un hijo, escritos como atributos: <Tarjeta nombre=\"Banda A\" dia=\"Viernes\" />. El hijo las recibe como un objeto, normalmente desestructurado en los parámetros: function Tarjeta({ nombre, dia }).",
      "Las props son de solo lectura: un componente nunca debe modificarlas. Pueden ser cualquier valor (textos, números entre llaves, arrays, objetos o funciones) y se les puede dar un valor por defecto en la desestructuración."
     ],
     "k": [
      "<Hijo dato=\"texto\" numero={3} lista={[…]} />",
      "function Hijo({ dato, numero = 1 }) { … }",
      "Las props no se modifican dentro del hijo.",
      "Los números y expresiones van entre llaves."
     ],
     "c": "function Tarjeta({ nombre, dia, hora = \"Por confirmar\", destacado }) {\n  return (\n    <article style={{ border: \"1px solid #ddd\", borderRadius: 12, padding: 12, marginBottom: 8,\n                      background: destacado ? \"#EEF0FF\" : \"white\" }}>\n      <h3>{nombre}</h3>\n      <p>{dia} · {hora}</p>\n    </article>\n  );\n}\n\nfunction App() {\n  return (\n    <div>\n      <Tarjeta nombre=\"Banda A\" dia=\"Viernes\" hora=\"21:00\" destacado />\n      <Tarjeta nombre=\"Banda B\" dia=\"Sábado\" />\n    </div>\n  );\n}\n\nReactDOM.createRoot(document.getElementById(\"app\")).render(<App />);",
     "q": {
      "t": "¿Puede un componente hijo cambiar el valor de una prop que recibe?",
      "o": [
       "Sí, cuando quiera",
       "No, las props son de solo lectura",
       "Solo si es un número",
       "Solo con useEffect"
      ],
      "ok": 1,
      "why": "Para datos que cambian se usa estado, normalmente en el padre."
     },
     "tip": "una prop sin valor (destacado) equivale a destacado={true}."
    },
    {
     "n": "2.3",
     "t": "children y composición",
     "m": "4 min",
     "b": [
      "children es una prop especial que contiene lo que se escribe entre la etiqueta de apertura y la de cierre de un componente. Permite crear componentes contenedor, como una tarjeta, un modal o un diseño de página, que envuelven cualquier contenido.",
      "Componer componentes así es más flexible que crear un componente gigante con muchas props: cada pieza se reutiliza en contextos distintos."
     ],
     "k": [
      "<Caja>contenido</Caja> → children = contenido.",
      "Ideal para tarjetas, modales y layouts.",
      "Composición mejor que componentes gigantes."
     ],
     "c": "function Caja({ titulo, children }) {\n  return (\n    <section style={{ border: \"2px solid #4F46E5\", borderRadius: 12, padding: 12, marginBottom: 10 }}>\n      <h3 style={{ marginTop: 0 }}>{titulo}</h3>\n      {children}\n    </section>\n  );\n}\n\nfunction App() {\n  return (\n    <div>\n      <Caja titulo=\"Horarios\">\n        <p>Puertas: 17:00</p>\n        <p>Cierre: 03:00</p>\n      </Caja>\n      <Caja titulo=\"Contacto\">\n        <a href=\"#\">info@festivaldaw.es</a>\n      </Caja>\n    </div>\n  );\n}\n\nReactDOM.createRoot(document.getElementById(\"app\")).render(<App />);",
     "tip": "así se construyen las librerías de componentes: un Modal o un Layout con children."
    },
    {
     "n": "2.4",
     "t": "Pasar funciones como props",
     "m": "4 min",
     "b": [
      "Los datos bajan del padre al hijo con props. Para que un hijo avise al padre de que algo ha pasado (un clic, un valor nuevo), el padre le pasa una función como prop y el hijo la llama. Por convención estas props empiezan por on: onComprar, onBorrar.",
      "Este flujo de datos en una sola dirección (los datos bajan, los eventos suben) hace que las aplicaciones React sean predecibles."
     ],
     "k": [
      "Datos hacia abajo (props), eventos hacia arriba (funciones).",
      "Nombres de prop con on: onSeleccionar.",
      "El hijo llama a la función; el padre decide qué hacer."
     ],
     "c": "function BotonEntrada({ tipo, precio, onComprar }) {\n  return <button onClick={() => onComprar(tipo, precio)}>{tipo} · {precio} €</button>;\n}\n\nfunction App() {\n  function comprar(tipo, precio) {\n    console.log(`Has elegido ${tipo} por ${precio} €`);\n  }\n  return (\n    <div style={{ display: \"flex\", gap: 8 }}>\n      <BotonEntrada tipo=\"Día\" precio={39} onComprar={comprar} />\n      <BotonEntrada tipo=\"Abono\" precio={89} onComprar={comprar} />\n    </div>\n  );\n}\n\nReactDOM.createRoot(document.getElementById(\"app\")).render(<App />);",
     "tip": "pulsad los botones del resultado y mirad la consola."
    }
   ]
  },
  {
   "t": "Renderizado",
   "d": "Renderizado condicional, listas con key y estilos.",
   "secciones": [
    {
     "n": "3.1",
     "t": "Renderizado condicional",
     "m": "5 min",
     "b": [
      "Para mostrar una cosa u otra según una condición se usan las herramientas de JavaScript: el ternario (cond ? <A /> : <B />) para elegir entre dos opciones y && (cond && <A />) para mostrar algo solo si se cumple.",
      "Para lógica más compleja se puede usar un if antes del return, o devolver null cuando un componente no debe pintar nada. Cuidado con && y números: {cantidad && <p>…</p>} pinta un 0 si cantidad vale 0."
     ],
     "k": [
      "cond ? <A /> : <B /> elige entre dos.",
      "cond && <A /> muestra solo si se cumple.",
      "return null → no pinta nada.",
      "Con números usa cantidad > 0 && …"
     ],
     "c": "function Estado({ entradas }) {\n  if (entradas === 0) return <p style={{ color: \"crimson\" }}>Agotado</p>;\n  return (\n    <div>\n      <p>Quedan {entradas} entradas</p>\n      {entradas < 10 && <p style={{ color: \"orange\" }}>¡Últimas unidades!</p>}\n      {entradas > 100 ? <p>Disponibilidad alta</p> : <p>Date prisa</p>}\n    </div>\n  );\n}\n\nfunction App() {\n  return (\n    <div>\n      <Estado entradas={250} />\n      <hr />\n      <Estado entradas={5} />\n      <hr />\n      <Estado entradas={0} />\n    </div>\n  );\n}\n\nReactDOM.createRoot(document.getElementById(\"app\")).render(<App />);",
     "e": "{lista.length && <Lista />} con una lista vacía pinta un 0 en pantalla.",
     "tip": "usad lista.length > 0 && … para evitar el 0 suelto."
    },
    {
     "n": "3.2",
     "t": "Listas y key",
     "m": "5 min",
     "b": [
      "Para pintar una lista se transforma el array de datos en un array de elementos con map. Cada elemento necesita una prop key única y estable entre sus hermanos, normalmente el id del dato. React la usa para saber qué elemento ha cambiado, se ha añadido o se ha borrado.",
      "No uses el índice del array como key si la lista puede reordenarse o borrar elementos: React confundiría los elementos y los estados de los inputs se mezclarían."
     ],
     "k": [
      "lista.map(item => <li key={item.id}>…</li>)",
      "key única entre hermanos y estable.",
      "Usa el id del dato, no el índice.",
      "La key va en el elemento que devuelve map."
     ],
     "c": "const cartel = [\n  { id: 1, nombre: \"Banda A\", dia: \"Viernes\" },\n  { id: 2, nombre: \"Banda B\", dia: \"Viernes\" },\n  { id: 3, nombre: \"Banda C\", dia: \"Sábado\" },\n];\n\nfunction App() {\n  const viernes = cartel.filter(b => b.dia === \"Viernes\");\n  return (\n    <div>\n      <h3>Todo el cartel</h3>\n      <ul>\n        {cartel.map(banda => (\n          <li key={banda.id}>{banda.nombre} — {banda.dia}</li>\n        ))}\n      </ul>\n      <p>El viernes tocan {viernes.length} bandas.</p>\n    </div>\n  );\n}\n\nReactDOM.createRoot(document.getElementById(\"app\")).render(<App />);",
     "e": "olvidar la key: la consola muestra «Each child in a list should have a unique key prop».",
     "tip": "filter + map es la combinación más habitual para listas filtradas."
    },
    {
     "n": "3.3",
     "t": "Estilos en React",
     "m": "4 min",
     "b": [
      "La forma más común es usar clases con className y un archivo CSS importado (import \"./App.css\"). Las clases se pueden calcular: className={activo ? \"btn activo\" : \"btn\"}.",
      "El atributo style recibe un objeto con las propiedades en camelCase y los valores como texto o números (un número se interpreta como píxeles). Otras opciones son los CSS Modules (estilos con ámbito de componente) o Tailwind."
     ],
     "k": [
      "className con un CSS importado: lo más habitual.",
      "Clases dinámicas con template literals o ternarios.",
      "style={{ backgroundColor: \"red\", padding: 10 }}",
      "CSS Modules: import s from \"./Card.module.css\" → className={s.card}."
     ],
     "c": "function Etiqueta({ texto, tipo }) {\n  const colores = { ok: \"#DCFCE7\", aviso: \"#FEF3C7\", error: \"#FEE2E2\" };\n  return (\n    <span style={{ background: colores[tipo], padding: \"4px 10px\", borderRadius: 999, marginRight: 6 }}>\n      {texto}\n    </span>\n  );\n}\n\nfunction App() {\n  const activo = true;\n  return (\n    <div>\n      <style>{`.btn { padding: 8px 14px; border-radius: 8px; } .activo { background: #4F46E5; color: white; }`}</style>\n      <button className={`btn ${activo ? \"activo\" : \"\"}`}>Botón</button>\n      <p>\n        <Etiqueta texto=\"Disponible\" tipo=\"ok\" />\n        <Etiqueta texto=\"Pocas\" tipo=\"aviso\" />\n        <Etiqueta texto=\"Agotado\" tipo=\"error\" />\n      </p>\n    </div>\n  );\n}\n\nReactDOM.createRoot(document.getElementById(\"app\")).render(<App />);",
     "tip": "en proyectos reales poned los estilos en archivos .css: el style en línea es para valores dinámicos."
    }
   ]
  },
  {
   "t": "Estado y eventos",
   "d": "useState, eventos, actualizar objetos y arrays, y levantar el estado.",
   "secciones": [
    {
     "n": "4.1",
     "t": "useState",
     "m": "6 min",
     "b": [
      "El estado son los datos de un componente que cambian con el tiempo (un contador, si un menú está abierto, el texto de un input). useState(valorInicial) devuelve un array con el valor actual y una función para cambiarlo: const [cuenta, setCuenta] = useState(0).",
      "Cuando llamas a la función set, React guarda el nuevo valor y vuelve a ejecutar el componente para pintarlo con ese valor. Cambiar la variable directamente (cuenta = 5) no hace nada. Cada componente tiene su propio estado, aunque haya varios iguales."
     ],
     "k": [
      "const [valor, setValor] = useState(inicial);",
      "Solo set… provoca que se vuelva a pintar.",
      "Cada instancia del componente tiene su estado.",
      "Los hooks se llaman siempre arriba del componente, nunca dentro de if o bucles."
     ],
     "c": "const { useState } = React;\n\nfunction Contador({ etiqueta }) {\n  const [cuenta, setCuenta] = useState(0);\n  return (\n    <p>\n      {etiqueta}: <b>{cuenta}</b>{\" \"}\n      <button onClick={() => setCuenta(cuenta + 1)}>+1</button>{\" \"}\n      <button onClick={() => setCuenta(0)}>Reiniciar</button>\n    </p>\n  );\n}\n\nfunction App() {\n  return (\n    <div>\n      <Contador etiqueta=\"Entradas de día\" />\n      <Contador etiqueta=\"Abonos\" />\n    </div>\n  );\n}\n\nReactDOM.createRoot(document.getElementById(\"app\")).render(<App />);",
     "a": [
      [
       "useState(0)",
       "Crea un estado con valor inicial 0."
      ],
      [
       "cuenta",
       "Valor actual (solo lectura)."
      ],
      [
       "setCuenta(5)",
       "Cambia el valor y vuelve a pintar."
      ],
      [
       "setCuenta(c => c + 1)",
       "Actualiza a partir del valor anterior."
      ]
     ],
     "at": "Partes de useState",
     "ah": [
      "Código",
      "Significado"
     ],
     "e": "modificar el estado directamente (cuenta++): el valor cambia en memoria pero la pantalla no se actualiza.",
     "q": {
      "t": "¿Qué hace que React vuelva a pintar un componente?",
      "o": [
       "Cambiar una variable normal",
       "Llamar a la función set del estado",
       "Un console.log",
       "Recargar la página"
      ],
      "ok": 1,
      "why": "Las funciones set de useState avisan a React de que hay que volver a pintar."
     },
     "tip": "fijaos en que los dos contadores son independientes."
    },
    {
     "n": "4.2",
     "t": "Eventos",
     "m": "4 min",
     "b": [
      "Los eventos se escriben en camelCase y reciben una función: onClick={manejar}. Pasa la función, no el resultado de llamarla: onClick={manejar()} la ejecutaría al pintar. Si necesitas pasar argumentos, envuélvela en una flecha: onClick={() => borrar(id)}.",
      "La función recibe un objeto evento, igual que en JavaScript: e.target.value en un input o e.preventDefault() en un formulario. Los más usados son onClick, onChange, onSubmit, onKeyDown y onMouseEnter."
     ],
     "k": [
      "onClick={fn}, no onClick={fn()}.",
      "Con argumentos: onClick={() => fn(id)}.",
      "e.target.value lee el valor de un input.",
      "Nombra los manejadores con handle o manejar: handleClick."
     ],
     "c": "const { useState } = React;\n\nfunction App() {\n  const [mensaje, setMensaje] = useState(\"Pasa el ratón o pulsa una tecla\");\n\n  function handleClick(tipo) {\n    setMensaje(`Has elegido: ${tipo}`);\n  }\n\n  return (\n    <div>\n      <button onClick={() => handleClick(\"Día\")}>Día</button>{\" \"}\n      <button onClick={() => handleClick(\"Abono\")}>Abono</button>\n      <p onMouseEnter={() => setMensaje(\"¡Ratón encima!\")}>Pasa por aquí</p>\n      <input onKeyDown={(e) => setMensaje(`Tecla: ${e.key}`)} placeholder=\"Escribe\" />\n      <p><b>{mensaje}</b></p>\n    </div>\n  );\n}\n\nReactDOM.createRoot(document.getElementById(\"app\")).render(<App />);",
     "e": "onClick={borrar(id)}: se ejecuta al pintar el componente, no al hacer clic.",
     "tip": "probad todos los eventos del resultado."
    },
    {
     "n": "4.3",
     "t": "Actualizar objetos y arrays",
     "m": "6 min",
     "b": [
      "En React el estado se trata como inmutable: nunca se modifica el objeto o el array existente, se crea uno nuevo con los cambios y se pasa a la función set. Si modificas el original (push, o asignar una propiedad), React no detecta el cambio porque la referencia es la misma.",
      "Para arrays: añadir con [...lista, nuevo], borrar con filter y modificar con map. Para objetos: { ...obj, campo: nuevoValor }. Cuando el nuevo valor depende del anterior, usa la forma con función: setLista(prev => [...prev, nuevo])."
     ],
     "k": [
      "Añadir: setLista([...lista, nuevo]).",
      "Borrar: setLista(lista.filter(x => x.id !== id)).",
      "Modificar: setLista(lista.map(x => x.id === id ? { ...x, hecho: true } : x)).",
      "Objeto: setForm({ ...form, nombre: \"Ana\" })."
     ],
     "c": "const { useState } = React;\n\nfunction App() {\n  const [tareas, setTareas] = useState([\n    { id: 1, texto: \"Comprar entradas\", hecha: false },\n    { id: 2, texto: \"Reservar hotel\", hecha: true },\n  ]);\n\n  const añadir = () => setTareas(prev => [...prev, { id: Date.now(), texto: \"Nueva tarea\", hecha: false }]);\n  const alternar = (id) => setTareas(tareas.map(t => t.id === id ? { ...t, hecha: !t.hecha } : t));\n  const borrar = (id) => setTareas(tareas.filter(t => t.id !== id));\n\n  return (\n    <div>\n      <ul>\n        {tareas.map(t => (\n          <li key={t.id}>\n            <span onClick={() => alternar(t.id)} style={{ cursor: \"pointer\", textDecoration: t.hecha ? \"line-through\" : \"none\" }}>\n              {t.texto}\n            </span>{\" \"}\n            <button onClick={() => borrar(t.id)}>✕</button>\n          </li>\n        ))}\n      </ul>\n      <button onClick={añadir}>Añadir</button>\n    </div>\n  );\n}\n\nReactDOM.createRoot(document.getElementById(\"app\")).render(<App />);",
     "e": "lista.push(nuevo); setLista(lista); → la pantalla no cambia porque es el mismo array.",
     "tip": "este ejemplo es ya una lista de tareas completa: ampliadla como práctica."
    },
    {
     "n": "4.4",
     "t": "Levantar el estado",
     "m": "5 min",
     "b": [
      "Cuando dos componentes hermanos necesitan compartir un dato, el estado se «levanta» al padre común más cercano. El padre guarda el estado y lo pasa como prop a los dos hijos, junto con las funciones para cambiarlo.",
      "Así hay una única fuente de verdad: el dato vive en un solo sitio y todos los componentes que lo usan están siempre sincronizados."
     ],
     "k": [
      "Estado compartido → en el padre común.",
      "El padre pasa el valor y la función set como props.",
      "Una única fuente de verdad para cada dato."
     ],
     "c": "const { useState } = React;\n\nfunction Selector({ cantidad, onCambiar }) {\n  return (\n    <p>\n      Entradas:{\" \"}\n      <button onClick={() => onCambiar(Math.max(1, cantidad - 1))}>−</button>{\" \"}\n      <b>{cantidad}</b>{\" \"}\n      <button onClick={() => onCambiar(Math.min(6, cantidad + 1))}>+</button>\n    </p>\n  );\n}\n\nfunction Resumen({ cantidad }) {\n  return <p>Total: <b>{cantidad * 39} €</b></p>;\n}\n\nfunction App() {\n  const [cantidad, setCantidad] = useState(1);\n  return (\n    <div>\n      <Selector cantidad={cantidad} onCambiar={setCantidad} />\n      <Resumen cantidad={cantidad} />\n    </div>\n  );\n}\n\nReactDOM.createRoot(document.getElementById(\"app\")).render(<App />);",
     "tip": "Selector y Resumen no se hablan entre ellos: los coordina App."
    }
   ]
  },
  {
   "t": "Formularios",
   "d": "Inputs controlados, varios campos y validación.",
   "secciones": [
    {
     "n": "5.1",
     "t": "Inputs controlados",
     "m": "5 min",
     "b": [
      "En React un input es «controlado» cuando su valor viene del estado (value={nombre}) y cada cambio actualiza ese estado (onChange={e => setNombre(e.target.value)}). Así el estado siempre refleja lo que hay escrito y puedes usarlo para validar, filtrar o mostrar en otro sitio en tiempo real.",
      "En checkbox se usa checked y e.target.checked en lugar de value. En select y textarea funciona igual que en un input de texto."
     ],
     "k": [
      "value={estado} + onChange={e => setEstado(e.target.value)}.",
      "checkbox: checked y e.target.checked.",
      "El estado es la única fuente de verdad del campo.",
      "Un value sin onChange deja el campo bloqueado."
     ],
     "c": "const { useState } = React;\nconst bandas = [\"Arcade Fire\", \"Bad Bunny\", \"Bon Iver\", \"Rosalía\", \"Vetusta Morla\"];\n\nfunction App() {\n  const [busqueda, setBusqueda] = useState(\"\");\n  const [soloEsp, setSoloEsp] = useState(false);\n  const filtradas = bandas.filter(b => b.toLowerCase().includes(busqueda.toLowerCase()));\n\n  return (\n    <div>\n      <input value={busqueda} onChange={e => setBusqueda(e.target.value)} placeholder=\"Buscar artista\" />\n      <label style={{ marginLeft: 8 }}>\n        <input type=\"checkbox\" checked={soloEsp} onChange={e => setSoloEsp(e.target.checked)} /> Solo nacionales\n      </label>\n      <p>Escribiste: «{busqueda}» · Checkbox: {String(soloEsp)}</p>\n      <ul>{filtradas.map(b => <li key={b}>{b}</li>)}</ul>\n    </div>\n  );\n}\n\nReactDOM.createRoot(document.getElementById(\"app\")).render(<App />);",
     "e": "poner value sin onChange: el campo no deja escribir y React muestra un aviso.",
     "tip": "un buscador en vivo es el ejemplo perfecto de input controlado."
    },
    {
     "n": "5.2",
     "t": "Formularios con varios campos",
     "m": "6 min",
     "b": [
      "Con muchos campos, en lugar de un useState por cada uno se usa un único objeto en el estado y un solo manejador que usa el name del input: setForm({ ...form, [e.target.name]: e.target.value }). Los corchetes permiten usar el name como clave.",
      "El envío se gestiona en el onSubmit del form con e.preventDefault(), igual que en JavaScript, y después se envían los datos a una API o se procesan."
     ],
     "k": [
      "Un objeto de estado para todo el formulario.",
      "Un manejador: [e.target.name]: e.target.value.",
      "onSubmit en el form, con e.preventDefault().",
      "Reinicia con setForm(valoresIniciales)."
     ],
     "c": "const { useState } = React;\nconst inicial = { nombre: \"\", email: \"\", tipo: \"dia\" };\n\nfunction App() {\n  const [form, setForm] = useState(inicial);\n\n  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });\n\n  const handleSubmit = (e) => {\n    e.preventDefault();\n    console.log(\"Enviando:\", form);\n    setForm(inicial);\n  };\n\n  return (\n    <form onSubmit={handleSubmit} style={{ display: \"grid\", gap: 8, maxWidth: 260 }}>\n      <input name=\"nombre\" value={form.nombre} onChange={handleChange} placeholder=\"Nombre\" />\n      <input name=\"email\" type=\"email\" value={form.email} onChange={handleChange} placeholder=\"Correo\" />\n      <select name=\"tipo\" value={form.tipo} onChange={handleChange}>\n        <option value=\"dia\">Día</option>\n        <option value=\"abono\">Abono</option>\n      </select>\n      <button>Comprar</button>\n      <small>{JSON.stringify(form)}</small>\n    </form>\n  );\n}\n\nReactDOM.createRoot(document.getElementById(\"app\")).render(<App />);",
     "h": 240,
     "tip": "este patrón de handleChange os sirve para cualquier formulario."
    },
    {
     "n": "5.3",
     "t": "Validación",
     "m": "5 min",
     "b": [
      "La validación en React consiste en calcular los errores a partir del estado y mostrarlos junto a cada campo. Se puede validar al enviar, mientras se escribe o al salir del campo (onBlur). El botón de enviar puede desactivarse mientras haya errores.",
      "Los atributos de HTML como required o type=\"email\" siguen funcionando. Para formularios grandes existen librerías como React Hook Form, y para definir reglas, Zod o Yup. La validación del servidor sigue siendo obligatoria."
     ],
     "k": [
      "Errores calculados a partir del estado.",
      "Muestra cada error junto a su campo.",
      "disabled={hayErrores} en el botón.",
      "Librerías: React Hook Form + Zod."
     ],
     "c": "const { useState } = React;\n\nfunction App() {\n  const [email, setEmail] = useState(\"\");\n  const [edad, setEdad] = useState(\"\");\n\n  const errores = {};\n  if (email && !email.includes(\"@\")) errores.email = \"El correo no es válido\";\n  if (edad && Number(edad) < 16) errores.edad = \"Debes tener al menos 16 años\";\n  const valido = email && edad && Object.keys(errores).length === 0;\n\n  return (\n    <form onSubmit={e => { e.preventDefault(); console.log(\"Registro correcto\"); }} style={{ display: \"grid\", gap: 6, maxWidth: 260 }}>\n      <input value={email} onChange={e => setEmail(e.target.value)} placeholder=\"Correo\" />\n      {errores.email && <small style={{ color: \"crimson\" }}>{errores.email}</small>}\n      <input type=\"number\" value={edad} onChange={e => setEdad(e.target.value)} placeholder=\"Edad\" />\n      {errores.edad && <small style={{ color: \"crimson\" }}>{errores.edad}</small>}\n      <button disabled={!valido}>Registrarme</button>\n    </form>\n  );\n}\n\nReactDOM.createRoot(document.getElementById(\"app\")).render(<App />);",
     "tip": "escribid un correo sin @ y una edad de 14 en el resultado."
    }
   ]
  },
  {
   "t": "Efectos y datos",
   "d": "useEffect, dependencias, cargar datos de una API y limpieza.",
   "secciones": [
    {
     "n": "6.1",
     "t": "useEffect",
     "m": "6 min",
     "b": [
      "useEffect ejecuta código después de que el componente se pinte. Sirve para sincronizar con cosas externas a React: pedir datos a una API, suscribirse a eventos, usar temporizadores o cambiar el título de la pestaña.",
      "El segundo argumento, el array de dependencias, decide cuándo se ejecuta: sin array, después de cada render; con [] vacío, solo una vez al montar; con [valor], al montar y cada vez que cambie valor. Si el efecto usa un valor del componente, debe estar en las dependencias."
     ],
     "k": [
      "useEffect(() => { … }, []) → solo al montar.",
      "useEffect(() => { … }, [x]) → al montar y cuando cambie x.",
      "Sin array → después de cada render (rara vez lo quieres).",
      "No lo uses para calcular datos derivados: calcula directamente."
     ],
     "c": "const { useState, useEffect } = React;\n\nfunction App() {\n  const [cuenta, setCuenta] = useState(0);\n  const [otro, setOtro] = useState(0);\n\n  useEffect(() => {\n    console.log(\"Montado (solo una vez)\");\n  }, []);\n\n  useEffect(() => {\n    console.log(\"cuenta cambió a\", cuenta);\n    document.title = `Cuenta: ${cuenta}`;\n  }, [cuenta]);\n\n  return (\n    <div>\n      <button onClick={() => setCuenta(cuenta + 1)}>cuenta: {cuenta}</button>{\" \"}\n      <button onClick={() => setOtro(otro + 1)}>otro: {otro}</button>\n      <p>El segundo botón no dispara el efecto de cuenta.</p>\n    </div>\n  );\n}\n\nReactDOM.createRoot(document.getElementById(\"app\")).render(<App />);",
     "e": "un efecto que cambia un estado que está en sus propias dependencias: bucle infinito de renders.",
     "tip": "pulsad los dos botones y mirad qué mensajes salen en la consola."
    },
    {
     "n": "6.2",
     "t": "Cargar datos de una API",
     "m": "6 min",
     "b": [
      "El patrón clásico para cargar datos: tres estados (datos, cargando y error) y un useEffect que hace el fetch al montar. Mientras carga se muestra un indicador; si falla, un mensaje; y cuando llegan los datos, la lista.",
      "useEffect no puede recibir directamente una función async, así que se define una función async dentro del efecto y se llama. En proyectos grandes se usan librerías como TanStack Query, que gestionan caché, reintentos y estados de carga."
     ],
     "k": [
      "Estados: datos, cargando y error.",
      "Función async dentro del efecto y llamarla.",
      "Comprueba res.ok antes de leer el JSON.",
      "TanStack Query para proyectos grandes."
     ],
     "c": "const { useState, useEffect } = React;\n\nfunction App() {\n  const [usuarios, setUsuarios] = useState([]);\n  const [cargando, setCargando] = useState(true);\n  const [error, setError] = useState(null);\n\n  useEffect(() => {\n    async function cargar() {\n      try {\n        const res = await fetch(\"https://jsonplaceholder.typicode.com/users?_limit=4\");\n        if (!res.ok) throw new Error(\"HTTP \" + res.status);\n        setUsuarios(await res.json());\n      } catch (e) {\n        setError(e.message);\n      } finally {\n        setCargando(false);\n      }\n    }\n    cargar();\n  }, []);\n\n  if (cargando) return <p>Cargando…</p>;\n  if (error) return <p style={{ color: \"crimson\" }}>Error: {error}</p>;\n  return <ul>{usuarios.map(u => <li key={u.id}>{u.name} — {u.email}</li>)}</ul>;\n}\n\nReactDOM.createRoot(document.getElementById(\"app\")).render(<App />);",
     "e": "escribir useEffect(async () => { … }): el efecto devuelve una promesa y React avisa con un error.",
     "tip": "cambiad la URL por una que no exista para ver el estado de error."
    },
    {
     "n": "6.3",
     "t": "Limpieza de efectos",
     "m": "5 min",
     "b": [
      "Un efecto puede devolver una función de limpieza, que React ejecuta cuando el componente desaparece o antes de volver a ejecutar el efecto. Sirve para parar temporizadores, quitar event listeners o cancelar peticiones, y evitar fugas de memoria.",
      "En desarrollo, React (en modo estricto) monta, desmonta y vuelve a montar cada componente una vez para ayudarte a detectar efectos sin limpieza; por eso a veces ves los mensajes dos veces."
     ],
     "k": [
      "return () => { … } dentro del efecto = limpieza.",
      "Limpia intervalos, listeners y suscripciones.",
      "En desarrollo los efectos se ejecutan dos veces (StrictMode)."
     ],
     "c": "const { useState, useEffect } = React;\n\nfunction Reloj() {\n  const [hora, setHora] = useState(new Date().toLocaleTimeString());\n  useEffect(() => {\n    const id = setInterval(() => setHora(new Date().toLocaleTimeString()), 1000);\n    console.log(\"Reloj iniciado\");\n    return () => {\n      clearInterval(id);\n      console.log(\"Reloj detenido (limpieza)\");\n    };\n  }, []);\n  return <p style={{ fontSize: 24 }}>{hora}</p>;\n}\n\nfunction App() {\n  const [visible, setVisible] = useState(true);\n  return (\n    <div>\n      <button onClick={() => setVisible(!visible)}>{visible ? \"Ocultar\" : \"Mostrar\"} reloj</button>\n      {visible && <Reloj />}\n    </div>\n  );\n}\n\nReactDOM.createRoot(document.getElementById(\"app\")).render(<App />);",
     "tip": "ocultad el reloj y veréis en la consola cómo se ejecuta la limpieza."
    }
   ]
  },
  {
   "t": "Hooks avanzados",
   "d": "useRef, useMemo, useCallback, useReducer y hooks propios.",
   "secciones": [
    {
     "n": "7.1",
     "t": "useRef",
     "m": "5 min",
     "b": [
      "useRef crea una referencia que se mantiene entre renders y cuyo cambio no vuelve a pintar el componente. Tiene dos usos: acceder a un elemento del DOM (ref={inputRef} y luego inputRef.current.focus()) y guardar un valor que no debe mostrarse, como el id de un temporizador.",
      "Si un valor se muestra en pantalla, debe ir en el estado; si solo lo necesita la lógica, puede ir en una ref."
     ],
     "k": [
      "const ref = useRef(null); <input ref={ref} />",
      "ref.current es el elemento del DOM.",
      "Cambiar ref.current no vuelve a pintar.",
      "Úsalo para foco, scroll, medir elementos o guardar ids."
     ],
     "c": "const { useRef, useState } = React;\n\nfunction App() {\n  const inputRef = useRef(null);\n  const clics = useRef(0);\n  const [, forzar] = useState(0);\n\n  return (\n    <div>\n      <input ref={inputRef} placeholder=\"Pulsa el botón para enfocarme\" />{\" \"}\n      <button onClick={() => inputRef.current.focus()}>Enfocar</button>\n      <p>\n        <button onClick={() => { clics.current++; console.log(\"clics:\", clics.current); }}>Contar en una ref</button>{\" \"}\n        <button onClick={() => forzar(n => n + 1)}>Volver a pintar</button>\n      </p>\n      <p>Valor de la ref en pantalla: {clics.current}</p>\n    </div>\n  );\n}\n\nReactDOM.createRoot(document.getElementById(\"app\")).render(<App />);",
     "tip": "contad varias veces: la pantalla no cambia hasta que pulsáis «Volver a pintar»."
    },
    {
     "n": "7.2",
     "t": "useMemo y useCallback",
     "m": "5 min",
     "b": [
      "Cada vez que un componente se pinta, se vuelve a ejecutar todo su código. useMemo guarda el resultado de un cálculo costoso y solo lo recalcula cuando cambian sus dependencias. useCallback hace lo mismo con una función, para que no se cree una nueva en cada render.",
      "Son optimizaciones: no las uses por defecto. Tienen sentido con cálculos realmente pesados (filtrar miles de elementos) o al pasar funciones a componentes optimizados con React.memo."
     ],
     "k": [
      "useMemo(() => calculo, [deps]) guarda un valor.",
      "useCallback(fn, [deps]) guarda una función.",
      "Solo cuando haya un problema de rendimiento real.",
      "React.memo(Componente) evita renders si las props no cambian."
     ],
     "c": "const { useState, useMemo } = React;\nconst numeros = Array.from({ length: 20000 }, (_, i) => i);\n\nfunction App() {\n  const [minimo, setMinimo] = useState(0);\n  const [tema, setTema] = useState(false);\n\n  const filtrados = useMemo(() => {\n    console.log(\"Recalculando…\");\n    return numeros.filter(n => n >= minimo && n % 7 === 0);\n  }, [minimo]);\n\n  return (\n    <div style={{ background: tema ? \"#111827\" : \"white\", color: tema ? \"white\" : \"black\", padding: 10 }}>\n      <input type=\"number\" value={minimo} onChange={e => setMinimo(Number(e.target.value))} />\n      <button onClick={() => setTema(!tema)}>Cambiar tema</button>\n      <p>{filtrados.length} múltiplos de 7 desde {minimo}</p>\n    </div>\n  );\n}\n\nReactDOM.createRoot(document.getElementById(\"app\")).render(<App />);",
     "tip": "cambiar el tema no imprime «Recalculando…»: useMemo reutiliza el resultado."
    },
    {
     "n": "7.3",
     "t": "useReducer",
     "m": "6 min",
     "b": [
      "useReducer es una alternativa a useState para estados complejos con muchas formas de cambiar. Toda la lógica de actualización se concentra en una función reducer(estado, acción) que devuelve el nuevo estado, y los componentes solo envían acciones con dispatch({ type: \"añadir\", … }).",
      "Es la misma idea que Redux. Hace el código más predecible y fácil de probar, porque el reducer es una función pura: con el mismo estado y la misma acción, siempre devuelve lo mismo."
     ],
     "k": [
      "const [estado, dispatch] = useReducer(reducer, inicial);",
      "reducer(estado, accion) → nuevo estado.",
      "dispatch({ type: \"…\", payload }) envía acciones.",
      "El reducer nunca modifica el estado: devuelve uno nuevo."
     ],
     "c": "const { useReducer } = React;\n\nfunction carritoReducer(estado, accion) {\n  switch (accion.type) {\n    case \"añadir\":\n      return [...estado, accion.producto];\n    case \"quitar\":\n      return estado.filter((_, i) => i !== accion.indice);\n    case \"vaciar\":\n      return [];\n    default:\n      return estado;\n  }\n}\n\nfunction App() {\n  const [carrito, dispatch] = useReducer(carritoReducer, []);\n  const total = carrito.reduce((t, p) => t + p.precio, 0);\n  return (\n    <div>\n      <button onClick={() => dispatch({ type: \"añadir\", producto: { nombre: \"Día\", precio: 39 } })}>+ Día</button>{\" \"}\n      <button onClick={() => dispatch({ type: \"añadir\", producto: { nombre: \"Abono\", precio: 89 } })}>+ Abono</button>{\" \"}\n      <button onClick={() => dispatch({ type: \"vaciar\" })}>Vaciar</button>\n      <ul>{carrito.map((p, i) => <li key={i}>{p.nombre} <button onClick={() => dispatch({ type: \"quitar\", indice: i })}>✕</button></li>)}</ul>\n      <p>Total: {total} €</p>\n    </div>\n  );\n}\n\nReactDOM.createRoot(document.getElementById(\"app\")).render(<App />);",
     "h": 220,
     "tip": "la lógica del carrito queda en una función que podríais probar sin React."
    },
    {
     "n": "7.4",
     "t": "Hooks personalizados",
     "m": "5 min",
     "b": [
      "Un hook personalizado es una función que empieza por use y usa otros hooks dentro. Sirve para reutilizar lógica con estado entre componentes: cargar datos, guardar en localStorage, detectar el tamaño de la ventana…",
      "Cada componente que usa el hook tiene su propio estado; lo que se comparte es la lógica, no los datos. Es la forma más limpia de sacar código repetido de los componentes."
     ],
     "k": [
      "Una función useAlgo() que usa hooks dentro.",
      "Debe empezar por use.",
      "Comparte lógica, no estado.",
      "Ejemplos: useFetch, useLocalStorage, useToggle."
     ],
     "c": "const { useState } = React;\n\nfunction useToggle(inicial = false) {\n  const [valor, setValor] = useState(inicial);\n  const alternar = () => setValor(v => !v);\n  return [valor, alternar];\n}\n\nfunction useContador(inicial = 0, paso = 1) {\n  const [n, setN] = useState(inicial);\n  return { n, sumar: () => setN(n + paso), restar: () => setN(n - paso) };\n}\n\nfunction App() {\n  const [abierto, alternar] = useToggle();\n  const entradas = useContador(1, 1);\n  return (\n    <div>\n      <button onClick={alternar}>{abierto ? \"Cerrar\" : \"Abrir\"} detalles</button>\n      {abierto && <p>Puertas a las 17:00 · Edad mínima 16 años</p>}\n      <p><button onClick={entradas.restar}>−</button> {entradas.n} <button onClick={entradas.sumar}>+</button></p>\n    </div>\n  );\n}\n\nReactDOM.createRoot(document.getElementById(\"app\")).render(<App />);",
     "tip": "un useLocalStorage que guarde el estado en el navegador es un gran ejercicio."
    }
   ]
  },
  {
   "t": "Context y estado global",
   "d": "Compartir datos sin pasar props por todos los niveles.",
   "secciones": [
    {
     "n": "8.1",
     "t": "El problema del prop drilling",
     "m": "3 min",
     "b": [
      "Cuando un dato (el usuario conectado, el tema, el idioma, el carrito) lo necesitan componentes muy alejados en el árbol, pasarlo prop a prop por todos los niveles intermedios se vuelve pesado: componentes que no usan el dato tienen que recibirlo solo para pasarlo hacia abajo. A eso se le llama prop drilling.",
      "Context permite que un componente proporcione un valor y que cualquier descendiente lo lea directamente, sin pasar por los intermedios."
     ],
     "k": [
      "Prop drilling: pasar props por niveles que no las usan.",
      "Context comparte un valor con todo un subárbol.",
      "Úsalo para datos globales: usuario, tema, idioma, carrito."
     ],
     "c": "function App() {\n  const usuario = \"Ana\";\n  return <Pagina usuario={usuario} />;\n}\nfunction Pagina({ usuario }) {\n  return <Cabecera usuario={usuario} />;     // no lo usa, solo lo pasa\n}\nfunction Cabecera({ usuario }) {\n  return <Avatar usuario={usuario} />;       // tampoco lo usa\n}\nfunction Avatar({ usuario }) {\n  return <p>Conectada como <b>{usuario}</b></p>;\n}\n\nReactDOM.createRoot(document.getElementById(\"app\")).render(<App />);",
     "tip": "en el siguiente ejemplo veréis el mismo caso resuelto con Context."
    },
    {
     "n": "8.2",
     "t": "createContext y useContext",
     "m": "6 min",
     "b": [
      "Se crea un contexto con createContext, un componente lo proporciona envolviendo a sus hijos con <MiContexto.Provider value={…}> (en React 19 basta con <MiContexto value={…}>) y cualquier descendiente lo lee con useContext(MiContexto).",
      "Cuando el value cambia, todos los componentes que lo leen se vuelven a pintar. Lo habitual es poner en el value tanto el dato como las funciones para cambiarlo, y crear un componente Provider propio que encapsule el estado."
     ],
     "k": [
      "const Ctx = createContext(valorPorDefecto);",
      "<Ctx.Provider value={…}>hijos</Ctx.Provider>",
      "const valor = useContext(Ctx);",
      "Incluye en value el dato y las funciones para cambiarlo."
     ],
     "c": "const { createContext, useContext, useState } = React;\nconst TemaContext = createContext(null);\n\nfunction TemaProvider({ children }) {\n  const [oscuro, setOscuro] = useState(false);\n  const alternar = () => setOscuro(o => !o);\n  return <TemaContext.Provider value={{ oscuro, alternar }}>{children}</TemaContext.Provider>;\n}\n\nfunction BotonTema() {\n  const { oscuro, alternar } = useContext(TemaContext);\n  return <button onClick={alternar}>Modo {oscuro ? \"claro\" : \"oscuro\"}</button>;\n}\n\nfunction Tarjeta() {\n  const { oscuro } = useContext(TemaContext);\n  return (\n    <div style={{ background: oscuro ? \"#111827\" : \"#EEF0FF\", color: oscuro ? \"white\" : \"black\", padding: 14, borderRadius: 12, marginTop: 8 }}>\n      Esta tarjeta lee el tema sin recibir props.\n    </div>\n  );\n}\n\nfunction App() {\n  return (\n    <TemaProvider>\n      <BotonTema />\n      <Tarjeta />\n    </TemaProvider>\n  );\n}\n\nReactDOM.createRoot(document.getElementById(\"app\")).render(<App />);",
     "tip": "BotonTema y Tarjeta no reciben ninguna prop: leen el contexto."
    },
    {
     "n": "8.3",
     "t": "¿Context o una librería?",
     "m": "3 min",
     "b": [
      "Context es suficiente para datos que cambian poco (tema, usuario, idioma). Para estados globales grandes que cambian a menudo, como un carrito complejo o datos de muchas pantallas, se suelen usar librerías: Zustand es la más sencilla, Redux Toolkit la más extendida en empresas grandes, y TanStack Query se encarga específicamente de los datos que vienen del servidor.",
      "Antes de añadir una librería, prueba con estado local, levantar el estado y Context: muchas aplicaciones no necesitan más."
     ],
     "k": [
      "Estado local → levantar estado → Context → librería.",
      "Zustand: sencilla y ligera.",
      "Redux Toolkit: estándar en proyectos grandes.",
      "TanStack Query: datos del servidor (caché, recarga)."
     ],
     "c": "// Zustand: store global en pocas líneas\nimport { create } from \"zustand\";\n\nconst useCarrito = create((set) => ({\n  items: [],\n  añadir: (item) => set((s) => ({ items: [...s.items, item] })),\n  vaciar: () => set({ items: [] }),\n}));\n\nfunction Contador() {\n  const total = useCarrito((s) => s.items.length);\n  return <span>🛒 {total}</span>;\n}",
     "v": 0,
     "a": [
      [
       "Context",
       "Datos globales que cambian poco."
      ],
      [
       "Zustand",
       "Estado global sencillo, sin providers."
      ],
      [
       "Redux Toolkit",
       "Estado complejo, equipos grandes, herramientas de depuración."
      ],
      [
       "TanStack Query",
       "Datos de APIs: caché, carga, reintentos."
      ]
     ],
     "at": "Opciones de estado global",
     "ah": [
      "Opción",
      "Cuándo usarla"
     ],
     "tip": "para un proyecto de clase, Context suele ser más que suficiente."
    }
   ]
  },
  {
   "t": "Rutas, estructura y despliegue",
   "d": "React Router, organización del proyecto, variables de entorno, testing y publicar.",
   "secciones": [
    {
     "n": "9.1",
     "t": "React Router",
     "m": "6 min",
     "b": [
      "En una SPA, la navegación entre «páginas» la gestiona React sin recargar. React Router asocia cada URL con un componente: <Route path=\"/cartel\" element={<Cartel />} />. Los enlaces se hacen con <Link to=\"/cartel\"> (no con <a>, que recargaría la página) y NavLink añade una clase a la ruta activa.",
      "Las rutas pueden tener parámetros (/artista/:id) que se leen con useParams, y useNavigate permite navegar desde el código, por ejemplo tras enviar un formulario. Una ruta con path=\"*\" muestra la página 404."
     ],
     "k": [
      "<BrowserRouter> envuelve la app.",
      "<Routes> con varias <Route path element>.",
      "<Link to=\"…\"> en lugar de <a href>.",
      "useParams() lee /ruta/:id; useNavigate() navega desde código."
     ],
     "c": "// npm install react-router-dom\nimport { BrowserRouter, Routes, Route, Link, useParams, useNavigate } from \"react-router-dom\";\n\nfunction Artista() {\n  const { id } = useParams();\n  const navigate = useNavigate();\n  return (\n    <div>\n      <h2>Artista {id}</h2>\n      <button onClick={() => navigate(\"/\")}>Volver</button>\n    </div>\n  );\n}\n\nexport default function App() {\n  return (\n    <BrowserRouter>\n      <nav>\n        <Link to=\"/\">Inicio</Link> · <Link to=\"/artista/7\">Artista 7</Link>\n      </nav>\n      <Routes>\n        <Route path=\"/\" element={<h1>Inicio</h1>} />\n        <Route path=\"/artista/:id\" element={<Artista />} />\n        <Route path=\"*\" element={<p>Página no encontrada</p>} />\n      </Routes>\n    </BrowserRouter>\n  );\n}",
     "v": 0,
     "e": "usar <a href> para navegar dentro de la app: recarga la página y se pierde todo el estado.",
     "tip": "en Vercel, una SPA necesita una regla de rewrite para que todas las rutas carguen index.html."
    },
    {
     "n": "9.2",
     "t": "Estructura de un proyecto",
     "m": "4 min",
     "b": [
      "No hay una estructura obligatoria, pero una organización habitual separa components (piezas reutilizables), pages (una por ruta), hooks (hooks propios), services o api (llamadas al servidor), context y assets. Cada componente puede tener su archivo .jsx y su .css al lado.",
      "Mantén los componentes pequeños: si un archivo pasa de 150-200 líneas o hace varias cosas, probablemente conviene dividirlo."
     ],
     "k": [
      "components/, pages/, hooks/, services/, context/.",
      "Un componente por archivo, con su CSS al lado.",
      "Componentes pequeños con una responsabilidad.",
      "La lógica de la API, fuera de los componentes."
     ],
     "c": "src/\n├── main.jsx\n├── App.jsx\n├── components/\n│   ├── Cabecera.jsx\n│   ├── TarjetaArtista.jsx\n│   └── TarjetaArtista.css\n├── pages/\n│   ├── Inicio.jsx\n│   └── Cartel.jsx\n├── hooks/\n│   └── useFetch.js\n├── services/\n│   └── api.js\n└── context/\n    └── CarritoContext.jsx",
     "v": 0,
     "tip": "acordad la estructura con vuestro grupo antes de empezar a programar."
    },
    {
     "n": "9.3",
     "t": "Variables de entorno, build y despliegue",
     "m": "4 min",
     "b": [
      "En Vite, las variables de entorno se definen en un archivo .env y deben empezar por VITE_ para estar disponibles en el código con import.meta.env.VITE_API_URL. Así la URL de la API puede ser distinta en desarrollo y en producción.",
      "npm run build genera la carpeta dist con los archivos optimizados. Se puede publicar gratis en Vercel o Netlify conectando el repositorio de GitHub: cada push despliega una versión nueva automáticamente."
     ],
     "k": [
      ".env → VITE_API_URL=https://api.ejemplo.com",
      "En el código: import.meta.env.VITE_API_URL.",
      "Nunca pongas secretos en el frontend: cualquiera puede verlos.",
      "npm run build → dist → Vercel o Netlify."
     ],
     "c": "# .env\nVITE_API_URL=http://localhost:3000/api\n\n# .env.production\nVITE_API_URL=https://api.festivaldaw.es\n\n// services/api.js\nconst API = import.meta.env.VITE_API_URL;\nexport async function obtenerCartel() {\n  const res = await fetch(`${API}/cartel`);\n  if (!res.ok) throw new Error(\"No se pudo cargar el cartel\");\n  return res.json();\n}",
     "v": 0,
     "e": "poner una clave secreta de una API en una variable VITE_: acaba dentro del JavaScript público.",
     "tip": "añadid .env al .gitignore y subid un .env.example sin valores reales."
    },
    {
     "n": "9.4",
     "t": "Testing de componentes",
     "m": "4 min",
     "b": [
      "Los tests automáticos comprueban que los componentes funcionan y evitan romper algo al hacer cambios. Con Vitest como ejecutor y React Testing Library se renderiza un componente, se buscan elementos como lo haría el usuario (por su texto o rol) y se simulan interacciones.",
      "La filosofía de Testing Library es probar lo que ve y hace el usuario, no los detalles internos del componente."
     ],
     "k": [
      "Vitest + React Testing Library.",
      "render(<Componente />) y screen.getByRole / getByText.",
      "userEvent.click() simula interacciones.",
      "Prueba comportamiento, no implementación."
     ],
     "c": "// Contador.test.jsx\nimport { render, screen } from \"@testing-library/react\";\nimport userEvent from \"@testing-library/user-event\";\nimport { expect, test } from \"vitest\";\nimport Contador from \"./Contador\";\n\ntest(\"suma uno al pulsar el botón\", async () => {\n  render(<Contador />);\n  await userEvent.click(screen.getByRole(\"button\", { name: \"+1\" }));\n  expect(screen.getByText(\"1\")).toBeInTheDocument();\n});",
     "v": 0,
     "tip": "empezad probando los componentes con más lógica: formularios y carritos."
    }
   ]
  }
 ],
 "chuleta": [
  [
   "return ( <>…</> )",
   "Un componente devuelve un único elemento raíz; el fragmento <>…</> evita un div extra.",
   "return (<>\n  <h1>Hola</h1>\n  <p>Texto</p>\n</>);",
   "JSX"
  ],
  [
   "{expresión}",
   "Inserta cualquier expresión de JavaScript en el JSX.",
   "<p>Total: {cantidad * precio} €</p>",
   "JSX"
  ],
  [
   "className / htmlFor",
   "En JSX, class se escribe className y for se escribe htmlFor.",
   "<label htmlFor=\"email\" className=\"campo\">",
   "JSX"
  ],
  [
   "style={{ }}",
   "Estilos en línea con un objeto; propiedades en camelCase.",
   "<div style={{ backgroundColor: \"#EEF0FF\", padding: 12 }}>",
   "JSX"
  ],
  [
   "function Componente() {}",
   "Función que devuelve JSX. Nombre en PascalCase.",
   "function Tarjeta() { return <article>…</article>; }",
   "Componentes y props"
  ],
  [
   "<Hijo prop={valor} />",
   "Pasar datos a un componente hijo.",
   "<Tarjeta nombre=\"Banda A\" precio={39} />",
   "Componentes y props"
  ],
  [
   "function Hijo({ a, b = 1 })",
   "Recibir props desestructuradas, con valor por defecto.",
   "function Tarjeta({ nombre, precio = 0 }) { … }",
   "Componentes y props"
  ],
  [
   "children",
   "Contenido entre las etiquetas del componente.",
   "function Caja({ children }) { return <div>{children}</div>; }",
   "Componentes y props"
  ],
  [
   "onAlgo={funcion}",
   "Pasar una función para que el hijo avise al padre.",
   "<Boton onComprar={comprar} />",
   "Componentes y props"
  ],
  [
   "cond ? <A /> : <B />",
   "Mostrar una cosa u otra.",
   "{logueado ? <Perfil /> : <Login />}",
   "Renderizado"
  ],
  [
   "cond && <A />",
   "Mostrar solo si se cumple. Cuidado con el 0.",
   "{errores.length > 0 && <Errores />}",
   "Renderizado"
  ],
  [
   "lista.map(x => <li key={x.id}>)",
   "Pintar listas. Cada elemento necesita una key única y estable.",
   "{bandas.map(b => <li key={b.id}>{b.nombre}</li>)}",
   "Renderizado"
  ],
  [
   "useState",
   "Estado local. Llamar a set vuelve a pintar el componente.",
   "const [cuenta, setCuenta] = useState(0);",
   "Estado y eventos"
  ],
  [
   "setX(prev => …)",
   "Actualizar a partir del valor anterior.",
   "setCuenta(c => c + 1);",
   "Estado y eventos"
  ],
  [
   "[...lista, nuevo]",
   "Añadir a un array del estado sin modificarlo.",
   "setTareas([...tareas, nueva]);",
   "Estado y eventos"
  ],
  [
   "lista.filter / lista.map",
   "Borrar o modificar elementos del estado de forma inmutable.",
   "setTareas(tareas.filter(t => t.id !== id));",
   "Estado y eventos"
  ],
  [
   "{ ...obj, campo }",
   "Actualizar un objeto del estado.",
   "setForm({ ...form, [e.target.name]: e.target.value });",
   "Estado y eventos"
  ],
  [
   "onClick={() => fn(id)}",
   "Manejar eventos. Pasa la función, no la llames.",
   "<button onClick={() => borrar(t.id)}>✕</button>",
   "Estado y eventos"
  ],
  [
   "value + onChange",
   "Input controlado: el valor viene del estado.",
   "<input value={nombre} onChange={e => setNombre(e.target.value)} />",
   "Estado y eventos"
  ],
  [
   "onSubmit + preventDefault",
   "Gestionar el envío de un formulario.",
   "<form onSubmit={e => { e.preventDefault(); enviar(); }}>",
   "Estado y eventos"
  ],
  [
   "useEffect(fn, [])",
   "Ejecutar código al montar (y cuando cambien las dependencias).",
   "useEffect(() => { cargarDatos(); }, []);",
   "Hooks"
  ],
  [
   "return () => {}",
   "Limpieza del efecto: parar temporizadores o listeners.",
   "useEffect(() => { const id = setInterval(f, 1000); return () => clearInterval(id); }, []);",
   "Hooks"
  ],
  [
   "useRef",
   "Referencia a un elemento del DOM o valor que no provoca renders.",
   "const ref = useRef(null);\n<input ref={ref} />",
   "Hooks"
  ],
  [
   "useMemo / useCallback",
   "Memorizar un cálculo o una función costosa.",
   "const filtrados = useMemo(() => filtrar(lista), [lista]);",
   "Hooks"
  ],
  [
   "useReducer",
   "Estado complejo con acciones.",
   "const [estado, dispatch] = useReducer(reducer, inicial);",
   "Hooks"
  ],
  [
   "createContext / useContext",
   "Compartir datos sin prop drilling.",
   "const Tema = createContext();\nconst valor = useContext(Tema);",
   "Hooks"
  ],
  [
   "useAlgo()",
   "Hook personalizado: reutilizar lógica con estado.",
   "function useToggle() { const [v, s] = useState(false); return [v, () => s(!v)]; }",
   "Hooks"
  ],
  [
   "npm create vite@latest",
   "Crear un proyecto React con Vite.",
   "npm create vite@latest mi-app -- --template react",
   "Proyecto"
  ],
  [
   "npm run dev / build",
   "Servidor de desarrollo / versión para producción en dist.",
   "npm run build",
   "Proyecto"
  ],
  [
   "<Route path element>",
   "Asociar una URL a un componente (React Router).",
   "<Route path=\"/artista/:id\" element={<Artista />} />",
   "Proyecto"
  ],
  [
   "<Link to>",
   "Enlace interno sin recargar la página.",
   "<Link to=\"/cartel\">Cartel</Link>",
   "Proyecto"
  ],
  [
   "useParams / useNavigate",
   "Leer parámetros de la URL / navegar desde el código.",
   "const { id } = useParams();",
   "Proyecto"
  ],
  [
   "import.meta.env.VITE_",
   "Variables de entorno en Vite.",
   "const API = import.meta.env.VITE_API_URL;",
   "Proyecto"
  ]
 ],
 "retos": [
  {
   "t": "¿Qué atributo se usa en JSX en lugar de class?",
   "o": [
    "class",
    "className",
    "cssClass",
    "styleClass"
   ],
   "ok": 1,
   "why": "class es una palabra reservada de JavaScript; en JSX se usa className."
  },
  {
   "t": "¿Qué pasa si haces lista.push(x) y luego setLista(lista)?",
   "o": [
    "Funciona igual",
    "React no vuelve a pintar porque es el mismo array",
    "Se borra la lista",
    "Da error"
   ],
   "ok": 1,
   "why": "React compara referencias: hay que crear un array nuevo, por ejemplo con [...lista, x]."
  },
  {
   "t": "¿Cuándo se ejecuta useEffect(() => {...}, [])?",
   "o": [
    "En cada render",
    "Solo al montar el componente",
    "Nunca",
    "Al desmontar"
   ],
   "ok": 1,
   "why": "Con el array vacío se ejecuta una sola vez, después del primer render."
  },
  {
   "t": "¿Para qué sirve la prop key en una lista?",
   "o": [
    "Para dar estilos",
    "Para que React identifique cada elemento",
    "Para ordenar la lista",
    "Para el SEO"
   ],
   "ok": 1,
   "why": "La key permite a React saber qué elemento ha cambiado, se ha añadido o se ha borrado."
  },
  {
   "t": "¿Qué escribirías para que un botón llame a borrar(5) al hacer clic?",
   "o": [
    "onClick={borrar(5)}",
    "onClick={() => borrar(5)}",
    "onclick=\"borrar(5)\"",
    "onClick=borrar(5)"
   ],
   "ok": 1,
   "why": "Hay que pasar una función; borrar(5) se ejecutaría al pintar."
  },
  {
   "t": "¿Qué hook evita pasar props por muchos niveles?",
   "o": [
    "useRef",
    "useContext",
    "useMemo",
    "useState"
   ],
   "ok": 1,
   "why": "Con Context cualquier descendiente lee el valor directamente."
  },
  {
   "t": "En React Router, ¿cómo enlazas a otra ruta sin recargar?",
   "o": [
    "<a href=\"/x\">",
    "<Link to=\"/x\">",
    "window.location = \"/x\"",
    "<Route to=\"/x\">"
   ],
   "ok": 1,
   "why": "Link cambia la URL sin recargar la página y conserva el estado."
  },
  {
   "t": "¿Cambiar ref.current vuelve a pintar el componente?",
   "o": [
    "Sí",
    "No",
    "Solo con números",
    "Solo dentro de useEffect"
   ],
   "ok": 1,
   "why": "Las refs guardan valores entre renders sin provocar uno nuevo."
  }
 ]
};
