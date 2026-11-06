window.LECCIONES = window.LECCIONES || {};
LECCIONES["javascript"] = {
 "lang": "js",
 "capitulos": [
  {
   "t": "Fundamentos",
   "d": "Dónde va el código, la consola, variables, tipos de datos y operadores.",
   "secciones": [
    {
     "n": "1.1",
     "t": "¿Qué es JavaScript y dónde se escribe?",
     "m": "4 min",
     "b": [
      "JavaScript es el lenguaje de programación de la web. Mientras HTML define el contenido y CSS el aspecto, JavaScript añade comportamiento: reaccionar a clics, validar formularios, pedir datos a un servidor o cambiar la página sin recargarla. También se usa fuera del navegador, en servidores, con Node.js.",
      "En una página se enlaza con <script src=\"js/app.js\" defer></script> en el head. defer hace que el archivo se descargue en paralelo y se ejecute cuando el HTML ya está listo, así el código puede encontrar los elementos de la página. console.log() muestra valores en la consola de las herramientas de desarrollo (F12): es la herramienta básica para entender qué hace tu código."
     ],
     "k": [
      "<script src=\"app.js\" defer></script> en el head.",
      "console.log() escribe en la consola (F12 → Console).",
      "Las instrucciones terminan en punto y coma (recomendado).",
      "Comentarios: // una línea y /* varias líneas */."
     ],
     "c": "// Esto es un comentario\nconsole.log(\"Hola, DAW\");\nconsole.log(2 + 3);\nconsole.log(\"La suma es\", 2 + 3);",
     "a": [
      [
       "console.log()",
       "Muestra valores normales."
      ],
      [
       "console.error()",
       "Muestra un error (en rojo)."
      ],
      [
       "console.warn()",
       "Muestra un aviso (en amarillo)."
      ],
      [
       "console.table()",
       "Muestra arrays u objetos en forma de tabla."
      ]
     ],
     "at": "Métodos de la consola",
     "ah": [
      "Método",
      "Para qué sirve"
     ],
     "tip": "cambiad los mensajes del ejemplo y pulsad «Ejecutar» (o Ctrl+Enter)."
    },
    {
     "n": "1.2",
     "t": "Variables: let y const",
     "m": "5 min",
     "b": [
      "Una variable es un nombre que guarda un valor. Con const se declara una variable que no se puede reasignar, y con let una que sí puede cambiar. La regla práctica: usa const por defecto y let solo cuando sepas que el valor va a cambiar (un contador, un total que se acumula).",
      "var es la forma antigua; tiene comportamientos confusos (no respeta los bloques) y ya no se usa. Los nombres de variables suelen escribirse en camelCase (precioTotal), no pueden empezar por un número y distinguen mayúsculas de minúsculas."
     ],
     "k": [
      "const por defecto; let si el valor cambia.",
      "No uses var.",
      "camelCase: precioConIva, nombreUsuario.",
      "Un objeto const sí puede cambiar por dentro; lo que no se puede es reasignarlo."
     ],
     "c": "const nombre = \"Ana\";\nlet entradas = 2;\nentradas = entradas + 1;\nconsole.log(nombre, \"tiene\", entradas, \"entradas\");\n\nconst precio = 39;\n// precio = 45;  // Error: no se puede reasignar una const",
     "e": "intentar reasignar una const. Da «TypeError: Assignment to constant variable».",
     "q": {
      "t": "¿Qué palabra usarías para un contador que va sumando?",
      "o": [
       "const",
       "let",
       "var",
       "static"
      ],
      "ok": 1,
      "why": "Un contador cambia su valor, así que necesita let."
     },
     "tip": "quitad las barras del comentario de la última línea y ejecutad para ver el error."
    },
    {
     "n": "1.3",
     "t": "Tipos de datos",
     "m": "5 min",
     "b": [
      "JavaScript tiene tipos primitivos: string (texto, entre comillas), number (enteros y decimales, el mismo tipo), boolean (true o false), undefined (variable sin valor), null (vacío a propósito), y bigint y symbol para casos especiales. Todo lo demás son objetos: arrays, funciones, fechas…",
      "El operador typeof devuelve el tipo de un valor. JavaScript es de tipado dinámico: una variable puede guardar un número y después un texto, y convierte tipos automáticamente en algunas operaciones, lo que puede dar resultados sorprendentes (\"5\" + 1 da \"51\")."
     ],
     "k": [
      "string, number, boolean, undefined, null.",
      "typeof valor devuelve el tipo como texto.",
      "Arrays y funciones son objetos.",
      "\"5\" + 1 = \"51\" (concatena); \"5\" - 1 = 4 (convierte)."
     ],
     "c": "console.log(typeof \"Hola\");     // string\nconsole.log(typeof 42);         // number\nconsole.log(typeof 3.14);       // number\nconsole.log(typeof true);       // boolean\nlet sinValor;\nconsole.log(typeof sinValor);   // undefined\nconsole.log(typeof [1, 2]);     // object\nconsole.log(\"5\" + 1, \"5\" - 1);",
     "a": [
      [
       "string",
       "Texto: \"Hola\", 'Hola' o `Hola`."
      ],
      [
       "number",
       "Números enteros o decimales: 7, 3.5, NaN."
      ],
      [
       "boolean",
       "true o false."
      ],
      [
       "undefined",
       "Declarada pero sin valor."
      ],
      [
       "null",
       "Valor vacío asignado a propósito."
      ],
      [
       "object",
       "Objetos, arrays, fechas…"
      ]
     ],
     "at": "Tipos de datos",
     "ah": [
      "Tipo",
      "Ejemplo"
     ],
     "tip": "typeof null devuelve \"object\": es un error histórico del lenguaje que se mantiene por compatibilidad."
    },
    {
     "n": "1.4",
     "t": "Operadores y comparación",
     "m": "5 min",
     "b": [
      "Los operadores aritméticos son + - * / % (resto de la división) y ** (potencia). Los de asignación combinada (+=, -=, ++) abrevian operaciones habituales. Los lógicos son && (y), || (o) y ! (no).",
      "Para comparar usa siempre === y !== (igualdad estricta), que comparan valor y tipo. == convierte los tipos antes de comparar y produce resultados raros, como 0 == \"\" (true). El operador ?? devuelve el valor de la derecha solo si el de la izquierda es null o undefined."
     ],
     "k": [
      "Usa === y !==, nunca == ni !=.",
      "% es el resto: 7 % 2 = 1 (impar).",
      "x += 5 equivale a x = x + 5.",
      "a ?? b → b solo si a es null o undefined."
     ],
     "c": "console.log(7 % 2);        // 1\nconsole.log(2 ** 3);       // 8\nlet total = 10;\ntotal += 5;\nconsole.log(total);        // 15\n\nconsole.log(5 === \"5\");    // false: distinto tipo\nconsole.log(5 == \"5\");     // true: convierte (evítalo)\nconsole.log(true && false, true || false, !true);\n\nconst apodo = null;\nconsole.log(apodo ?? \"Sin apodo\");",
     "a": [
      [
       "+ - * /",
       "Suma, resta, multiplicación, división."
      ],
      [
       "%",
       "Resto de la división."
      ],
      [
       "**",
       "Potencia."
      ],
      [
       "=== / !==",
       "Igual / distinto (valor y tipo)."
      ],
      [
       "> < >= <=",
       "Mayor, menor, mayor o igual, menor o igual."
      ],
      [
       "&& / || / !",
       "Y, o, no."
      ],
      [
       "??",
       "Valor por defecto si es null o undefined."
      ]
     ],
     "at": "Operadores",
     "ah": [
      "Operador",
      "Significado"
     ],
     "q": {
      "t": "¿Qué devuelve 10 % 3?",
      "o": [
       "3",
       "1",
       "3.33",
       "0"
      ],
      "ok": 1,
      "why": "% devuelve el resto: 10 entre 3 es 3 y sobra 1."
     },
     "tip": "el truco n % 2 === 0 comprueba si un número es par."
    }
   ]
  },
  {
   "t": "Control de flujo",
   "d": "Condiciones, switch, bucles y valores truthy y falsy.",
   "secciones": [
    {
     "n": "2.1",
     "t": "if, else y el operador ternario",
     "m": "4 min",
     "b": [
      "if ejecuta un bloque solo si se cumple una condición; else if encadena más condiciones y else recoge el resto. Las condiciones se evalúan de arriba abajo y solo se ejecuta el primer bloque que se cumpla.",
      "El operador ternario (condición ? valorSiSí : valorSiNo) es una forma corta de elegir entre dos valores en una sola expresión. Es útil para asignaciones sencillas, pero si la lógica es compleja, mejor un if."
     ],
     "k": [
      "if (condición) { … } else if (…) { … } else { … }",
      "Solo se ejecuta el primer bloque que se cumple.",
      "Ternario: cond ? a : b.",
      "Usa llaves siempre, aunque el bloque tenga una sola línea."
     ],
     "c": "const nota = 7.5;\n\nif (nota >= 9) {\n  console.log(\"Sobresaliente\");\n} else if (nota >= 7) {\n  console.log(\"Notable\");\n} else if (nota >= 5) {\n  console.log(\"Aprobado\");\n} else {\n  console.log(\"Suspenso\");\n}\n\nconst estado = nota >= 5 ? \"aprobado\" : \"suspenso\";\nconsole.log(`Estás ${estado}`);",
     "tip": "cambiad la nota y ejecutad para recorrer todas las ramas."
    },
    {
     "n": "2.2",
     "t": "Truthy, falsy y operadores lógicos",
     "m": "4 min",
     "b": [
      "En una condición, cualquier valor se convierte a booleano. Son falsy (cuentan como false): false, 0, \"\" (texto vacío), null, undefined y NaN. Todo lo demás es truthy, incluidos \"0\", [] y {}.",
      "Gracias a esto, || y && devuelven uno de sus operandos: a || b devuelve a si es truthy y b si no (útil para valores por defecto) y a && b devuelve b solo si a es truthy (útil para ejecutar algo condicionalmente). Para valores por defecto es más seguro ??, porque || también descarta 0 y \"\"."
     ],
     "k": [
      "Falsy: false, 0, \"\", null, undefined, NaN.",
      "Un array vacío [] es truthy.",
      "nombre || \"Anónimo\" → por defecto si nombre es falsy.",
      "cantidad ?? 1 → por defecto solo si es null/undefined."
     ],
     "c": "const nombre = \"\";\nconsole.log(nombre || \"Anónimo\");   // \"\" es falsy → Anónimo\n\nconst cantidad = 0;\nconsole.log(cantidad || 1);   // 1 (¡descarta el 0!)\nconsole.log(cantidad ?? 1);   // 0 (respeta el 0)\n\nif ([]) console.log(\"Un array vacío es truthy\");\n\nconst usuario = { nombre: \"Ana\" };\nusuario && console.log(\"Hay usuario:\", usuario.nombre);",
     "e": "usar || para un valor por defecto cuando 0 es un valor válido: 0 || 10 devuelve 10.",
     "tip": "Boolean(valor) os dice si un valor es truthy o falsy."
    },
    {
     "n": "2.3",
     "t": "switch",
     "m": "3 min",
     "b": [
      "switch compara un valor con varios casos usando igualdad estricta. Cada case termina con break; si se olvida, la ejecución «cae» al caso siguiente. default se ejecuta si ningún caso coincide.",
      "Es más legible que muchos else if cuando se compara la misma variable con valores concretos (un menú de opciones, un día de la semana)."
     ],
     "k": [
      "Cada case necesita break.",
      "Varios case seguidos comparten código.",
      "default = ningún caso coincide.",
      "Compara con === (estricto)."
     ],
     "c": "const opcion = \"abono\";\n\nswitch (opcion) {\n  case \"dia\":\n    console.log(\"Entrada de día: 39 €\");\n    break;\n  case \"abono\":\n  case \"abono-joven\":\n    console.log(\"Abono: 89 €\");\n    break;\n  default:\n    console.log(\"Opción no válida\");\n}",
     "e": "olvidar el break: se ejecutan también los casos siguientes.",
     "tip": "es la estructura ideal para el menú por consola de vuestros proyectos."
    },
    {
     "n": "2.4",
     "t": "Bucles for y while",
     "m": "5 min",
     "b": [
      "El bucle for repite un bloque un número conocido de veces: tiene inicialización, condición y actualización. while repite mientras se cumpla una condición, útil cuando no sabes cuántas vueltas habrá. do…while se ejecuta al menos una vez.",
      "break sale del bucle inmediatamente y continue salta a la siguiente vuelta. Un bucle cuya condición nunca deja de cumplirse es un bucle infinito y bloquea la página."
     ],
     "k": [
      "for (let i = 0; i < 5; i++) { … }",
      "while (condición) { … }",
      "break sale; continue salta a la siguiente vuelta.",
      "Asegúrate de que la condición acabe siendo falsa."
     ],
     "c": "for (let i = 1; i <= 5; i++) {\n  if (i === 3) continue;  // salta el 3\n  console.log(\"Vuelta\", i);\n}\n\nlet saldo = 100;\nlet meses = 0;\nwhile (saldo > 0) {\n  saldo -= 30;\n  meses++;\n}\nconsole.log(`El saldo se agota en ${meses} meses`);",
     "e": "un bucle infinito (por ejemplo, olvidar i++). La pestaña se queda colgada.",
     "q": {
      "t": "¿Cuántas veces se ejecuta for (let i = 0; i < 3; i++)?",
      "o": [
       "2",
       "3",
       "4",
       "Infinitas"
      ],
      "ok": 1,
      "why": "i toma los valores 0, 1 y 2."
     },
     "tip": "si un bucle se cuelga en vuestro proyecto, cerrad la pestaña y revisad la condición."
    },
    {
     "n": "2.5",
     "t": "for…of y for…in",
     "m": "4 min",
     "b": [
      "for…of recorre los valores de cualquier cosa iterable: arrays, strings, Map, Set. Es la forma más legible de recorrer un array cuando no necesitas el índice.",
      "for…in recorre las claves (nombres de propiedades) de un objeto. No conviene usarlo con arrays porque recorre los índices como texto y puede incluir propiedades heredadas."
     ],
     "k": [
      "for (const x of array) → valores.",
      "for (const clave in objeto) → claves.",
      "Para arrays: for…of o los métodos forEach, map…",
      "Con entries() obtienes índice y valor."
     ],
     "c": "const bandas = [\"Banda A\", \"Banda B\", \"Banda C\"];\nfor (const banda of bandas) {\n  console.log(banda);\n}\n\nfor (const [i, banda] of bandas.entries()) {\n  console.log(i + 1, banda);\n}\n\nconst entrada = { tipo: \"abono\", precio: 89, dias: 3 };\nfor (const clave in entrada) {\n  console.log(clave, \"→\", entrada[clave]);\n}",
     "tip": "para objetos también podéis usar Object.entries(obj) con for…of."
    }
   ]
  },
  {
   "t": "Funciones",
   "d": "Declaración, flecha, parámetros, return, ámbito y callbacks.",
   "secciones": [
    {
     "n": "3.1",
     "t": "Declarar y llamar funciones",
     "m": "5 min",
     "b": [
      "Una función agrupa código reutilizable con un nombre. Recibe datos a través de parámetros y puede devolver un resultado con return. Cuando se ejecuta return, la función termina inmediatamente. Si no hay return, la función devuelve undefined.",
      "Hay dos formas clásicas: la declaración (function sumar(a, b) { … }), que se puede usar antes de escribirla en el código (hoisting), y la expresión (const sumar = function (a, b) { … }), que solo existe a partir de esa línea."
     ],
     "k": [
      "function nombre(param) { return valor; }",
      "return devuelve el resultado y termina la función.",
      "Sin return devuelve undefined.",
      "Una función = una tarea, con un nombre que la describa (calcularTotal)."
     ],
     "c": "function calcularTotal(precio, cantidad) {\n  return precio * cantidad;\n}\n\nconst total = calcularTotal(39, 3);\nconsole.log(\"Total:\", total);\n\nfunction saludar(nombre) {\n  console.log(\"Hola, \" + nombre);\n}\nconst r = saludar(\"Ana\");\nconsole.log(r);  // undefined: saludar no tiene return",
     "a": [
      [
       "Parámetro",
       "Variable que recibe la función al declararla."
      ],
      [
       "Argumento",
       "Valor concreto que se pasa al llamarla."
      ],
      [
       "return",
       "Devuelve un valor y termina la función."
      ],
      [
       "Hoisting",
       "Las declaraciones se pueden llamar antes de escribirlas."
      ]
     ],
     "at": "Vocabulario",
     "ah": [
      "Término",
      "Significado"
     ],
     "tip": "nombrad las funciones con un verbo: calcular, validar, mostrar, obtener."
    },
    {
     "n": "3.2",
     "t": "Funciones flecha",
     "m": "4 min",
     "b": [
      "Las funciones flecha son una sintaxis más corta: (a, b) => a + b. Si el cuerpo es una sola expresión, se devuelve automáticamente sin escribir return ni llaves. Si tienen un solo parámetro, los paréntesis son opcionales.",
      "Se usan muchísimo como callbacks (map, filter, addEventListener). Una diferencia importante: no tienen su propio this, así que no conviene usarlas como métodos de un objeto que usen this."
     ],
     "k": [
      "(a, b) => a + b devuelve a + b automáticamente.",
      "Con llaves hay que escribir return.",
      "Un parámetro: x => x * 2.",
      "Para devolver un objeto: () => ({ a: 1 })."
     ],
     "c": "const doble = n => n * 2;\nconst sumar = (a, b) => a + b;\nconst conIva = (precio) => {\n  const iva = precio * 0.21;\n  return precio + iva;\n};\nconst crearEntrada = (tipo) => ({ tipo, precio: 39 });\n\nconsole.log(doble(4));\nconsole.log(sumar(2, 3));\nconsole.log(conIva(100));\nconsole.log(crearEntrada(\"dia\"));",
     "e": "poner llaves y olvidar el return: x => { x * 2 } devuelve undefined.",
     "q": {
      "t": "¿Qué devuelve (x => { x + 1 })(5)?",
      "o": [
       "6",
       "5",
       "undefined",
       "Error"
      ],
      "ok": 2,
      "why": "Con llaves hace falta return; sin él la función devuelve undefined."
     },
     "tip": "para devolver un objeto en una flecha, envolvedlo en paréntesis."
    },
    {
     "n": "3.3",
     "t": "Parámetros por defecto y rest",
     "m": "4 min",
     "b": [
      "Un parámetro puede tener un valor por defecto, que se usa si no se pasa ese argumento (o se pasa undefined): function precio(base, iva = 0.21).",
      "El parámetro rest (...nombres) recoge todos los argumentos restantes en un array, lo que permite funciones que aceptan cualquier número de valores. No confundir con el operador spread, que se escribe igual pero expande un array en lugar de agruparlo."
     ],
     "k": [
      "function f(a, b = 10) → b vale 10 si no se pasa.",
      "...rest agrupa los argumentos sobrantes en un array.",
      "El rest debe ser el último parámetro.",
      "Spread (...array) expande; rest agrupa."
     ],
     "c": "function precioFinal(base, iva = 0.21) {\n  return base * (1 + iva);\n}\nconsole.log(precioFinal(100));       // 121\nconsole.log(precioFinal(100, 0.1));  // 110\n\nfunction sumarTodo(...numeros) {\n  return numeros.reduce((acc, n) => acc + n, 0);\n}\nconsole.log(sumarTodo(1, 2, 3, 4));\n\nconst notas = [7, 9, 6];\nconsole.log(Math.max(...notas));     // spread",
     "tip": "Math.max(...array) es la forma rápida de sacar el máximo de un array."
    },
    {
     "n": "3.4",
     "t": "Ámbito y closures",
     "m": "6 min",
     "b": [
      "El ámbito (scope) indica desde dónde se puede usar una variable. Las variables declaradas con let y const dentro de un bloque { } solo existen dentro de él. Una función puede usar las variables de fuera, pero el código de fuera no puede usar las de dentro.",
      "Un closure aparece cuando una función recuerda las variables del lugar donde se creó, incluso después de que ese lugar haya terminado de ejecutarse. Así se pueden crear funciones con «memoria» privada, como un contador que nadie puede modificar desde fuera."
     ],
     "k": [
      "let y const tienen ámbito de bloque.",
      "Lo de dentro ve lo de fuera; al revés, no.",
      "Closure: la función recuerda sus variables de origen.",
      "Evita variables globales: cualquier parte del código podría cambiarlas."
     ],
     "c": "function crearContador() {\n  let cuenta = 0;          // privada\n  return () => {\n    cuenta++;\n    return cuenta;\n  };\n}\n\nconst siguiente = crearContador();\nconsole.log(siguiente());  // 1\nconsole.log(siguiente());  // 2\nconsole.log(siguiente());  // 3\n\nif (true) {\n  const dentro = \"solo existo aquí\";\n}\n// console.log(dentro);  // ReferenceError",
     "tip": "los closures aparecen en entrevistas de trabajo: practicad este ejemplo."
    },
    {
     "n": "3.5",
     "t": "Callbacks y funciones de orden superior",
     "m": "4 min",
     "b": [
      "En JavaScript las funciones son valores: se pueden guardar en variables, pasar como argumento y devolver desde otra función. Una función que se pasa a otra para que la llame más tarde se llama callback.",
      "Las funciones que reciben o devuelven funciones se llaman de orden superior. Muchos métodos de arrays (map, filter, forEach), los eventos y los temporizadores funcionan así."
     ],
     "k": [
      "Una función se pasa sin paréntesis: setTimeout(saludar, 1000).",
      "Con paréntesis la ejecutas en ese momento.",
      "Callback = función que otra función llamará después.",
      "map, filter y forEach reciben callbacks."
     ],
     "c": "function procesar(lista, accion) {\n  for (const item of lista) {\n    accion(item);\n  }\n}\n\nprocesar([\"Ana\", \"Luis\"], nombre => console.log(\"Hola\", nombre));\n\nconst aplicar = (n, fn) => fn(n);\nconsole.log(aplicar(5, x => x * x));\n\nsetTimeout(() => console.log(\"Esto aparece después de 1 segundo\"), 1000);\nconsole.log(\"Esto aparece primero\");",
     "e": "escribir setTimeout(saludar(), 1000): ejecuta saludar en el momento y pasa su resultado, no la función.",
     "tip": "fijaos en el orden de la salida: el setTimeout se ejecuta el último."
    }
   ]
  },
  {
   "t": "Arrays",
   "d": "Crear y modificar listas, recorrerlas y transformarlas con map, filter y reduce.",
   "secciones": [
    {
     "n": "4.1",
     "t": "Crear y modificar arrays",
     "m": "5 min",
     "b": [
      "Un array es una lista ordenada de valores, que empieza en el índice 0. length indica cuántos elementos tiene, así que el último está en array[array.length - 1] (o array.at(-1)).",
      "push y pop añaden y quitan al final; unshift y shift, al principio. splice permite quitar o insertar en cualquier posición (modifica el array original), mientras que slice devuelve una copia de un trozo sin modificarlo."
     ],
     "k": [
      "Los índices empiezan en 0.",
      "push/pop → final; unshift/shift → principio.",
      "slice copia; splice modifica.",
      "includes comprueba si existe; indexOf da la posición o -1."
     ],
     "c": "const bandas = [\"A\", \"B\", \"C\"];\nconsole.log(bandas[0], bandas.length, bandas.at(-1));\n\nbandas.push(\"D\");            // añade al final\nbandas.unshift(\"Z\");         // añade al principio\nconsole.log(bandas);\n\nconst ultima = bandas.pop(); // quita la última\nconsole.log(ultima, bandas);\n\nconsole.log(bandas.slice(1, 3));   // copia índices 1 y 2\nbandas.splice(1, 1);               // quita 1 elemento en el índice 1\nconsole.log(bandas);\nconsole.log(bandas.includes(\"C\"), bandas.indexOf(\"X\"));",
     "a": [
      [
       "push(x) / pop()",
       "Añade / quita al final."
      ],
      [
       "unshift(x) / shift()",
       "Añade / quita al principio."
      ],
      [
       "slice(i, f)",
       "Copia del índice i al f (sin incluir f)."
      ],
      [
       "splice(i, n, …nuevos)",
       "Quita n elementos en i e inserta nuevos. Modifica."
      ],
      [
       "includes(x)",
       "true si contiene x."
      ],
      [
       "indexOf(x)",
       "Posición de x o -1."
      ],
      [
       "join(\", \")",
       "Une los elementos en un texto."
      ],
      [
       "concat(otro)",
       "Une dos arrays en uno nuevo."
      ]
     ],
     "at": "Métodos básicos",
     "ah": [
      "Método",
      "Qué hace"
     ],
     "tip": "recordad: slice no toca el original; splice sí."
    },
    {
     "n": "4.2",
     "t": "map, filter y reduce",
     "m": "6 min",
     "b": [
      "Son los tres métodos más importantes de los arrays y no modifican el original. map transforma cada elemento y devuelve un array nuevo del mismo tamaño. filter devuelve un array nuevo solo con los elementos que cumplen una condición.",
      "reduce recorre el array acumulando un único resultado: una suma, un máximo o un objeto. Recibe una función (acumulador, elemento) y un valor inicial. Se pueden encadenar: primero filtrar, luego transformar, luego sumar."
     ],
     "k": [
      "map → transforma (mismo tamaño).",
      "filter → selecciona (igual o menos elementos).",
      "reduce → un solo valor final.",
      "No modifican el array original."
     ],
     "c": "const entradas = [\n  { tipo: \"dia\", precio: 39, vendida: true },\n  { tipo: \"abono\", precio: 89, vendida: true },\n  { tipo: \"vip\", precio: 150, vendida: false },\n];\n\nconst precios = entradas.map(e => e.precio);\nconsole.log(precios);\n\nconst vendidas = entradas.filter(e => e.vendida);\nconsole.log(vendidas.length, \"vendidas\");\n\nconst recaudado = entradas\n  .filter(e => e.vendida)\n  .reduce((total, e) => total + e.precio, 0);\nconsole.log(\"Recaudado:\", recaudado, \"€\");",
     "q": {
      "t": "¿Qué devuelve [1, 2, 3].map(n => n * 10)?",
      "o": [
       "60",
       "[10, 20, 30]",
       "[1, 2, 3]",
       "undefined"
      ],
      "ok": 1,
      "why": "map devuelve un array nuevo con cada elemento transformado."
     },
     "tip": "si dudáis: ¿quiero transformar, quedarme con algunos o calcular un total?"
    },
    {
     "n": "4.3",
     "t": "find, some, every, sort y forEach",
     "m": "5 min",
     "b": [
      "find devuelve el primer elemento que cumple la condición (o undefined) y findIndex su posición. some devuelve true si al menos uno cumple, y every si todos cumplen. forEach recorre el array para hacer algo con cada elemento, pero no devuelve nada.",
      "sort ordena el array modificándolo. Sin argumentos ordena como texto, así que [10, 9, 1] queda [1, 10, 9]. Para números hay que pasar una función de comparación: (a, b) => a - b para ascendente. toSorted hace lo mismo sin modificar el original."
     ],
     "k": [
      "find → el primero que cumple; filter → todos.",
      "some → alguno; every → todos.",
      "sort((a, b) => a - b) para números.",
      "sort modifica el array; toSorted no."
     ],
     "c": "const notas = [6, 9, 4, 8, 10];\n\nconsole.log(notas.find(n => n > 8));     // 9\nconsole.log(notas.findIndex(n => n < 5)); // 2\nconsole.log(notas.some(n => n < 5));     // true\nconsole.log(notas.every(n => n >= 5));   // false\n\nconsole.log([10, 9, 1].sort());          // ¡como texto!\nconsole.log(notas.toSorted((a, b) => a - b));\nconsole.log(notas.toSorted((a, b) => b - a));\n\nnotas.forEach((n, i) => console.log(`Alumno ${i + 1}: ${n}`));",
     "e": "usar sort() sin función con números: [10, 9, 1].sort() da [1, 10, 9].",
     "tip": "para ordenar textos con tildes correctamente: a.localeCompare(b, \"es\")."
    },
    {
     "n": "4.4",
     "t": "Desestructuración y spread",
     "m": "5 min",
     "b": [
      "La desestructuración saca valores de un array a variables en una línea: const [primero, segundo] = lista. Se pueden saltar posiciones con comas y recoger el resto con ...resto.",
      "El operador spread (...) expande un array: sirve para copiarlo ([...lista]), unir varios ([...a, ...b]) o añadir elementos sin modificar el original. Es la base de cómo React actualiza listas en el estado."
     ],
     "k": [
      "const [a, b] = [1, 2];",
      "const [primero, ...resto] = lista;",
      "[...lista] crea una copia.",
      "[...a, ...b] une arrays."
     ],
     "c": "const podio = [\"Ana\", \"Luis\", \"Sara\", \"Javi\"];\nconst [oro, plata, bronce, ...resto] = podio;\nconsole.log(oro, plata, bronce, resto);\n\nlet x = 1, y = 2;\n[x, y] = [y, x];          // intercambiar\nconsole.log(x, y);\n\nconst copia = [...podio];\ncopia.push(\"Marta\");\nconsole.log(podio.length, copia.length);\n\nconst todos = [...[\"A\", \"B\"], ...[\"C\"], \"D\"];\nconsole.log(todos);",
     "tip": "const copia = lista sin spread no copia: las dos variables apuntan al mismo array."
    }
   ]
  },
  {
   "t": "Objetos y JSON",
   "d": "Propiedades, métodos, this, recorrer objetos, desestructuración y JSON.",
   "secciones": [
    {
     "n": "5.1",
     "t": "Objetos literales",
     "m": "5 min",
     "b": [
      "Un objeto agrupa datos relacionados en pares clave: valor. Se accede a sus propiedades con punto (alumno.nombre) o con corchetes (alumno[\"nombre\"]); los corchetes permiten usar una variable como clave.",
      "Se pueden añadir, modificar y borrar propiedades en cualquier momento (delete elimina una). Si la variable tiene el mismo nombre que la propiedad, se puede abreviar: { nombre } equivale a { nombre: nombre }."
     ],
     "k": [
      "obj.clave o obj[\"clave\"].",
      "Corchetes para claves en variables: obj[campo].",
      "Abreviatura: { nombre, edad }.",
      "Acceder a una propiedad inexistente da undefined."
     ],
     "c": "const alumno = {\n  nombre: \"Ana\",\n  curso: \"DAW1\",\n  notas: [8, 9, 7],\n  direccion: { ciudad: \"Madrid\" },\n};\n\nconsole.log(alumno.nombre);\nconsole.log(alumno[\"curso\"]);\nconsole.log(alumno.direccion.ciudad);\n\nalumno.email = \"ana@mail.com\";   // añadir\nalumno.curso = \"DAW2\";           // modificar\ndelete alumno.notas;             // borrar\nconsole.log(alumno);\n\nconst campo = \"nombre\";\nconsole.log(alumno[campo]);",
     "tip": "los objetos son la forma de representar cualquier cosa de vuestro proyecto: un pedido, un producto, un usuario."
    },
    {
     "n": "5.2",
     "t": "Métodos y this",
     "m": "5 min",
     "b": [
      "Una propiedad cuyo valor es una función se llama método. Dentro de un método, this hace referencia al objeto que lo ha llamado, lo que permite usar sus otras propiedades.",
      "Las funciones flecha no tienen su propio this (usan el del lugar donde se escribieron), por eso para los métodos se usa la sintaxis corta metodo() { … }. this es una de las partes más confusas de JavaScript: depende de cómo se llama la función, no de dónde se escribe."
     ],
     "k": [
      "Método = función dentro de un objeto.",
      "Sintaxis corta: calcular() { … }.",
      "this = el objeto que llama al método.",
      "No uses flechas como métodos si necesitas this."
     ],
     "c": "const carrito = {\n  productos: [],\n  añadir(nombre, precio) {\n    this.productos.push({ nombre, precio });\n  },\n  total() {\n    return this.productos.reduce((t, p) => t + p.precio, 0);\n  },\n};\n\ncarrito.añadir(\"Entrada\", 39);\ncarrito.añadir(\"Parking\", 10);\nconsole.log(carrito.productos.length, \"productos\");\nconsole.log(\"Total:\", carrito.total());",
     "tip": "si this sale undefined, revisad si estáis usando una flecha o pasando el método como callback."
    },
    {
     "n": "5.3",
     "t": "Recorrer y copiar objetos",
     "m": "5 min",
     "b": [
      "Object.keys(obj) devuelve un array con las claves, Object.values sus valores y Object.entries pares [clave, valor]. Combinados con for…of o con los métodos de arrays permiten recorrer cualquier objeto.",
      "El spread también funciona con objetos: { ...obj } crea una copia y { ...obj, precio: 45 } crea una copia cambiando una propiedad. Es una copia superficial: los objetos anidados siguen siendo compartidos. structuredClone(obj) hace una copia profunda."
     ],
     "k": [
      "Object.keys / values / entries.",
      "{ ...obj } copia superficial.",
      "{ ...obj, campo: nuevo } copia y modifica.",
      "structuredClone(obj) copia profunda."
     ],
     "c": "const stock = { camisetas: 40, gorras: 15, pulseras: 120 };\n\nconsole.log(Object.keys(stock));\nconsole.log(Object.values(stock));\n\nfor (const [producto, cantidad] of Object.entries(stock)) {\n  console.log(`${producto}: ${cantidad}`);\n}\n\nconst total = Object.values(stock).reduce((a, b) => a + b, 0);\nconsole.log(\"Unidades:\", total);\n\nconst actualizado = { ...stock, gorras: 0 };\nconsole.log(stock.gorras, actualizado.gorras);",
     "tip": "Object.entries + map + Object.fromEntries permite transformar objetos enteros."
    },
    {
     "n": "5.4",
     "t": "Desestructuración y encadenamiento opcional",
     "m": "5 min",
     "b": [
      "La desestructuración de objetos extrae propiedades a variables por su nombre: const { nombre, curso } = alumno. Se puede renombrar (nombre: n), dar valores por defecto (curso = \"DAW1\") y usarla directamente en los parámetros de una función.",
      "El encadenamiento opcional ?. evita errores al acceder a propiedades de algo que puede no existir: usuario?.direccion?.ciudad devuelve undefined en lugar de lanzar un error si falta algún nivel. Combinado con ?? permite poner un valor por defecto."
     ],
     "k": [
      "const { a, b } = obj;",
      "Renombrar: const { nombre: n } = obj;",
      "En parámetros: function f({ nombre, edad }) { … }",
      "obj?.a?.b ?? \"por defecto\"."
     ],
     "c": "const pedido = { id: 7, cliente: { nombre: \"Luis\" }, total: 49 };\n\nconst { id, total, descuento = 0 } = pedido;\nconsole.log(id, total, descuento);\n\nfunction resumen({ id, cliente: { nombre } }) {\n  return `Pedido ${id} de ${nombre}`;\n}\nconsole.log(resumen(pedido));\n\nconst otro = { id: 8 };\nconsole.log(otro.cliente?.nombre);              // undefined\nconsole.log(otro.cliente?.nombre ?? \"Anónimo\");\n// console.log(otro.cliente.nombre);  // TypeError",
     "e": "acceder a una propiedad de undefined: «Cannot read properties of undefined». Usa ?. si el dato puede faltar.",
     "tip": "este error es el más común cuando se trabaja con datos de una API."
    },
    {
     "n": "5.5",
     "t": "JSON",
     "m": "4 min",
     "b": [
      "JSON (JavaScript Object Notation) es el formato de texto estándar para intercambiar datos entre programas, por ejemplo entre el servidor y el navegador. Se parece a un objeto de JavaScript, pero las claves van siempre entre comillas dobles y no admite funciones, undefined ni comentarios.",
      "JSON.stringify convierte un valor de JavaScript en texto JSON (para enviarlo o guardarlo) y JSON.parse convierte un texto JSON en un valor de JavaScript. JSON.parse lanza un error si el texto no es JSON válido."
     ],
     "k": [
      "JSON.stringify(obj) → texto.",
      "JSON.parse(texto) → objeto.",
      "Claves con comillas dobles; sin comas finales.",
      "stringify(obj, null, 2) lo formatea con sangría."
     ],
     "c": "const entrada = { tipo: \"abono\", precio: 89, dias: [\"V\", \"S\", \"D\"] };\n\nconst texto = JSON.stringify(entrada);\nconsole.log(texto);\nconsole.log(typeof texto);\n\nconsole.log(JSON.stringify(entrada, null, 2));\n\nconst deVuelta = JSON.parse('{\"nombre\":\"Ana\",\"edad\":20}');\nconsole.log(deVuelta.nombre, typeof deVuelta);\n\ntry {\n  JSON.parse(\"{nombre: 'Ana'}\");   // no es JSON válido\n} catch (e) {\n  console.error(\"JSON inválido:\", e.message);\n}",
     "tip": "JSON lo veréis en localStorage, en las APIs con fetch y en el tema de XML y JSON."
    }
   ]
  },
  {
   "t": "Textos, números y fechas",
   "d": "Template literals, métodos de string, Math, conversión de tipos y fechas.",
   "secciones": [
    {
     "n": "6.1",
     "t": "Strings y template literals",
     "m": "5 min",
     "b": [
      "Los textos se escriben entre comillas simples, dobles o comillas invertidas (backticks). Estas últimas crean template literals, que permiten insertar expresiones con ${ } y escribir en varias líneas. Son la forma más cómoda de construir textos con variables.",
      "Los strings son inmutables: los métodos no los modifican, devuelven uno nuevo. length da el número de caracteres y se puede acceder a cada uno con texto[0] o texto.at(-1)."
     ],
     "k": [
      "`Hola ${nombre}` inserta valores.",
      "Los template literals admiten varias líneas.",
      "Los métodos devuelven un string nuevo.",
      "texto.length = número de caracteres."
     ],
     "c": "const nombre = \"Ana\";\nconst entradas = 3;\nconst precio = 39;\n\nconsole.log(\"Hola \" + nombre + \", tienes \" + entradas + \" entradas\");\nconsole.log(`Hola ${nombre}, tienes ${entradas} entradas`);\nconsole.log(`Total: ${entradas * precio} €`);\n\nconst ticket = `\n  FESTIVAL DAW\n  Cliente: ${nombre}\n  Importe: ${(entradas * precio).toFixed(2)} €`;\nconsole.log(ticket);",
     "tip": "dentro de ${ } se puede poner cualquier expresión, incluso un ternario."
    },
    {
     "n": "6.2",
     "t": "Métodos de string",
     "m": "5 min",
     "b": [
      "Los métodos más útiles: toUpperCase y toLowerCase cambian mayúsculas; trim quita espacios al principio y al final (imprescindible con datos de formularios); includes, startsWith y endsWith buscan texto; replace y replaceAll sustituyen; split divide un texto en un array; slice extrae un trozo; padStart rellena por la izquierda.",
      "Para comparar sin importar mayúsculas, convierte los dos textos a minúsculas antes de comparar."
     ],
     "k": [
      "trim() antes de validar datos de formularios.",
      "split(\",\") convierte un texto en array; join(\",\") al revés.",
      "includes busca; replaceAll sustituye todas las apariciones.",
      "Para comparar sin mayúsculas: a.toLowerCase() === b.toLowerCase()."
     ],
     "c": "const email = \"  Ana.Garcia@Mail.com  \";\nconst limpio = email.trim().toLowerCase();\nconsole.log(limpio);\nconsole.log(limpio.includes(\"@\"), limpio.endsWith(\".com\"));\n\nconst csv = \"Ana,Luis,Sara\";\nconsole.log(csv.split(\",\"));\n\nconsole.log(\"2026-06-12\".replaceAll(\"-\", \"/\"));\nconsole.log(\"Festival\".slice(0, 4));\nconsole.log(\"7\".padStart(3, \"0\"));   // 007\nconsole.log(\"daw\".at(0).toUpperCase() + \"daw\".slice(1));",
     "a": [
      [
       "trim()",
       "Quita espacios de los extremos."
      ],
      [
       "toUpperCase() / toLowerCase()",
       "Mayúsculas / minúsculas."
      ],
      [
       "includes(t)",
       "¿Contiene t?"
      ],
      [
       "startsWith(t) / endsWith(t)",
       "¿Empieza / termina por t?"
      ],
      [
       "replace(a, b) / replaceAll(a, b)",
       "Sustituye la primera / todas."
      ],
      [
       "split(sep)",
       "Divide en un array."
      ],
      [
       "slice(i, f)",
       "Extrae del índice i al f."
      ],
      [
       "padStart(n, c)",
       "Rellena por la izquierda hasta n caracteres."
      ]
     ],
     "at": "Métodos de string",
     "ah": [
      "Método",
      "Qué hace"
     ],
     "tip": "para validar formatos complejos (DNI, teléfono) se usan expresiones regulares."
    },
    {
     "n": "6.3",
     "t": "Números, Math y conversiones",
     "m": "5 min",
     "b": [
      "Todos los números son del tipo number. toFixed(2) devuelve un texto con dos decimales (útil para precios). Math ofrece funciones: round, floor (hacia abajo), ceil (hacia arriba), max, min, abs y random, que da un decimal entre 0 y 1.",
      "Para convertir texto a número: Number(\"12.5\"), parseInt(\"12px\") (lee hasta donde puede) o parseFloat. Si la conversión falla, el resultado es NaN (Not a Number); compruébalo con Number.isNaN(). Ojo: 0.1 + 0.2 da 0.30000000000000004 por cómo se guardan los decimales."
     ],
     "k": [
      "toFixed(2) → texto con 2 decimales.",
      "Math.round / floor / ceil.",
      "Number(\"42\") convierte; si falla da NaN.",
      "Entero aleatorio de 1 a 6: Math.floor(Math.random() * 6) + 1."
     ],
     "c": "console.log((19.999).toFixed(2));\nconsole.log(Math.round(4.5), Math.floor(4.9), Math.ceil(4.1));\nconsole.log(Math.max(3, 9, 2), Math.min(3, 9, 2));\n\nconst dado = Math.floor(Math.random() * 6) + 1;\nconsole.log(\"Dado:\", dado);\n\nconsole.log(Number(\"12.5\"), parseInt(\"12px\"), Number(\"hola\"));\nconsole.log(Number.isNaN(Number(\"hola\")));\nconsole.log(0.1 + 0.2);",
     "e": "sumar valores de inputs sin convertirlos: \"5\" + \"3\" da \"53\". Los inputs siempre devuelven texto.",
     "tip": "para dinero, trabajad en céntimos (enteros) y dividid al mostrar."
    },
    {
     "n": "6.4",
     "t": "Fechas e Intl",
     "m": "5 min",
     "b": [
      "new Date() crea una fecha con el momento actual; new Date(\"2026-06-12\") una concreta. Los métodos getFullYear, getMonth (¡de 0 a 11!), getDate y getDay (0 = domingo) leen sus partes. Restar dos fechas da la diferencia en milisegundos.",
      "Para mostrar fechas y números en el formato de cada país, usa Intl o toLocaleString: el mismo número se muestra «1.234,5» en España y «1,234.5» en EE. UU., y las monedas llevan su símbolo correcto."
     ],
     "k": [
      "getMonth() empieza en 0 (enero = 0).",
      "Fecha1 - Fecha2 = milisegundos.",
      "toLocaleDateString(\"es-ES\") formatea la fecha.",
      "Intl.NumberFormat(\"es-ES\", { style: \"currency\", currency: \"EUR\" })."
     ],
     "c": "const hoy = new Date();\nconst festival = new Date(\"2026-06-12T17:00\");\nconsole.log(festival.getFullYear(), festival.getMonth() + 1, festival.getDate());\n\nconst dias = Math.ceil((festival - hoy) / (1000 * 60 * 60 * 24));\nconsole.log(dias > 0 ? `Faltan ${dias} días` : \"El festival ya pasó\");\n\nconsole.log(festival.toLocaleDateString(\"es-ES\", { weekday: \"long\", day: \"numeric\", month: \"long\" }));\n\nconst euros = new Intl.NumberFormat(\"es-ES\", { style: \"currency\", currency: \"EUR\" });\nconsole.log(euros.format(1234.5));",
     "tip": "una cuenta atrás para el festival es un mini proyecto perfecto para practicar fechas."
    }
   ]
  },
  {
   "t": "El DOM",
   "d": "Seleccionar elementos, cambiar su contenido, atributos y clases, y crear elementos.",
   "secciones": [
    {
     "n": "7.1",
     "t": "¿Qué es el DOM? Seleccionar elementos",
     "m": "5 min",
     "b": [
      "El DOM (Document Object Model) es la representación de la página como un árbol de objetos que JavaScript puede leer y modificar. Cada etiqueta HTML es un nodo; cambiar el DOM cambia lo que se ve, sin recargar.",
      "Para seleccionar elementos se usa document.querySelector(\"selector CSS\"), que devuelve el primero que coincide (o null), y querySelectorAll, que devuelve todos en una NodeList que se puede recorrer con forEach. getElementById es la forma clásica de buscar por id."
     ],
     "k": [
      "querySelector(\".clase\") → el primero o null.",
      "querySelectorAll(\"li\") → todos (NodeList).",
      "Se usan los mismos selectores que en CSS.",
      "Si da null, el elemento no existe o el script se ejecutó antes que el HTML (usa defer)."
     ],
     "c": "document.querySelector(\"#app\").innerHTML = `\n  <h1 class=\"titulo\">Festival</h1>\n  <ul><li>Banda A</li><li>Banda B</li><li>Banda C</li></ul>`;\n\nconst titulo = document.querySelector(\".titulo\");\nconsole.log(titulo.textContent);\n\nconst items = document.querySelectorAll(\"li\");\nconsole.log(\"Hay\", items.length, \"bandas\");\nitems.forEach(li => console.log(li.textContent));\n\nconsole.log(document.querySelector(\".no-existe\"));  // null",
     "dom": true,
     "a": [
      [
       "querySelector(sel)",
       "Primer elemento que coincide, o null."
      ],
      [
       "querySelectorAll(sel)",
       "Todos los que coinciden (NodeList)."
      ],
      [
       "getElementById(id)",
       "El elemento con ese id."
      ],
      [
       "closest(sel)",
       "El ancestro más cercano que coincide."
      ],
      [
       "matches(sel)",
       "true si el elemento cumple el selector."
      ]
     ],
     "at": "Métodos para seleccionar",
     "ah": [
      "Método",
      "Devuelve"
     ],
     "e": "«Cannot read properties of null»: el selector no encontró nada. Revisa el nombre y que el script tenga defer.",
     "tip": "en la consola del navegador, $0 es el elemento que tenéis seleccionado en la pestaña Elements."
    },
    {
     "n": "7.2",
     "t": "Cambiar contenido, atributos y estilos",
     "m": "5 min",
     "b": [
      "textContent cambia el texto de un elemento (de forma segura: no interpreta HTML). innerHTML cambia su HTML interno; es cómodo, pero nunca lo uses con datos que escriba el usuario, porque permitiría inyectar código malicioso (XSS).",
      "Los atributos se leen y cambian con getAttribute y setAttribute, o directamente como propiedades (img.src, input.value, a.href). Los estilos se pueden cambiar con element.style.propiedad, aunque es mejor añadir o quitar clases y dejar los estilos en el CSS."
     ],
     "k": [
      "textContent para texto; innerHTML solo con contenido de confianza.",
      "input.value lee lo que ha escrito el usuario.",
      "setAttribute(\"alt\", \"…\") cambia un atributo.",
      "style.backgroundColor: las propiedades van en camelCase."
     ],
     "c": "const app = document.querySelector(\"#app\");\napp.innerHTML = `<h2>Entrada</h2><p class=\"precio\">39 €</p><img alt=\"\">`;\n\nconst precio = app.querySelector(\".precio\");\nprecio.textContent = \"45 €\";\nprecio.style.color = \"crimson\";\nprecio.style.fontWeight = \"bold\";\n\nconst img = app.querySelector(\"img\");\nimg.src = \"https://placehold.co/120x60?text=Logo\";\nimg.setAttribute(\"alt\", \"Logo del festival\");\nconsole.log(img.getAttribute(\"alt\"));",
     "dom": true,
     "e": "usar innerHTML con texto que viene de un formulario: un usuario podría inyectar <script> o <img onerror>.",
     "tip": "cambiad textContent por innerHTML con \"<b>45 €</b>\" para ver la diferencia."
    },
    {
     "n": "7.3",
     "t": "Clases con classList",
     "m": "4 min",
     "b": [
      "classList es la forma correcta de cambiar el aspecto de un elemento desde JavaScript: add añade una clase, remove la quita, toggle la pone o la quita según esté o no, y contains comprueba si la tiene.",
      "Así el JavaScript solo decide el estado (activo, abierto, error) y el CSS decide cómo se ve cada estado. Es la técnica que usan los menús desplegables, las pestañas y los modos oscuros."
     ],
     "k": [
      "classList.add / remove / toggle / contains.",
      "toggle(\"clase\", condición) fuerza añadir o quitar.",
      "JS cambia el estado; CSS lo dibuja.",
      "className sustituye todas las clases a la vez."
     ],
     "c": "document.head.insertAdjacentHTML(\"beforeend\", `<style>\n  .activo { background: #4F46E5; color: white; }\n  .oculto { display: none; }\n</style>`);\ndocument.querySelector(\"#app\").innerHTML = `\n  <button class=\"btn\">Botón</button><p class=\"msg\">Mensaje</p>`;\n\nconst btn = document.querySelector(\".btn\");\nbtn.classList.add(\"activo\");\nconsole.log(btn.classList.contains(\"activo\"));\n\nconst msg = document.querySelector(\".msg\");\nmsg.classList.toggle(\"oculto\");   // lo oculta\nconsole.log(msg.classList.contains(\"oculto\"));",
     "dom": true,
     "tip": "el botón del modo oscuro suele ser un document.body.classList.toggle(\"oscuro\")."
    },
    {
     "n": "7.4",
     "t": "Crear, insertar y eliminar elementos",
     "m": "5 min",
     "b": [
      "document.createElement crea un elemento nuevo en memoria; después se rellena (textContent, clases, atributos) y se inserta en la página con append (al final), prepend (al principio), before o after. remove() elimina un elemento.",
      "Para pintar una lista de datos, lo habitual es recorrer el array y crear un elemento por cada dato, o construir el HTML con map y join cuando los datos son de confianza."
     ],
     "k": [
      "createElement(\"li\") crea; append(el) inserta.",
      "el.remove() elimina.",
      "Pintar listas: array.forEach + createElement.",
      "replaceChildren() vacía un elemento."
     ],
     "c": "const bandas = [\"Banda A\", \"Banda B\", \"Banda C\"];\nconst app = document.querySelector(\"#app\");\nconst ul = document.createElement(\"ul\");\n\nbandas.forEach(nombre => {\n  const li = document.createElement(\"li\");\n  li.textContent = nombre;\n  ul.append(li);\n});\napp.append(ul);\n\nconst nuevo = document.createElement(\"li\");\nnuevo.textContent = \"Cabeza de cartel\";\nnuevo.style.fontWeight = \"bold\";\nul.prepend(nuevo);\n\nul.lastElementChild.remove();\nconsole.log(ul.children.length, \"elementos\");",
     "dom": true,
     "tip": "este patrón (array → elementos en la página) es la base de cualquier aplicación web."
    },
    {
     "n": "7.5",
     "t": "Recorrer el árbol del DOM",
     "m": "3 min",
     "b": [
      "Desde un elemento se puede navegar a sus parientes: parentElement (padre), children (hijos), firstElementChild y lastElementChild, nextElementSibling y previousElementSibling (hermanos). closest(selector) sube por los ancestros hasta encontrar el que coincide.",
      "closest es especialmente útil en los eventos: cuando se hace clic dentro de una tarjeta, permite encontrar la tarjeta completa aunque el clic haya sido en un texto o una imagen de su interior."
     ],
     "k": [
      "parentElement, children, nextElementSibling…",
      "closest(\".tarjeta\") busca hacia arriba.",
      "children solo incluye elementos; childNodes también texto."
     ],
     "c": "document.querySelector(\"#app\").innerHTML = `\n  <article class=\"tarjeta\" data-id=\"7\">\n    <h3>Banda A</h3>\n    <p><button>Me gusta</button></p>\n  </article>`;\n\nconst boton = document.querySelector(\"button\");\nconst tarjeta = boton.closest(\".tarjeta\");\nconsole.log(\"Tarjeta con id\", tarjeta.dataset.id);\nconsole.log(boton.parentElement.tagName);\nconsole.log(tarjeta.children.length, \"hijos\");\nconsole.log(tarjeta.firstElementChild.textContent);",
     "dom": true,
     "tip": "dataset lee los atributos data-*: data-id se lee con dataset.id."
    }
   ]
  },
  {
   "t": "Eventos y formularios",
   "d": "addEventListener, el objeto evento, delegación y validación de formularios.",
   "secciones": [
    {
     "n": "8.1",
     "t": "addEventListener",
     "m": "5 min",
     "b": [
      "Los eventos son cosas que pasan en la página: un clic, una tecla, el envío de un formulario, el scroll. elemento.addEventListener(\"click\", función) ejecuta la función cada vez que ocurre ese evento en ese elemento.",
      "Es mejor que el atributo onclick del HTML porque separa el comportamiento del contenido y permite añadir varios manejadores al mismo evento. removeEventListener quita un manejador (necesita la misma función, no una flecha nueva)."
     ],
     "k": [
      "el.addEventListener(\"click\", fn).",
      "Pasa la función, no la llames: fn y no fn().",
      "Eventos comunes: click, input, change, submit, keydown.",
      "Evita onclick en el HTML."
     ],
     "c": "document.querySelector(\"#app\").innerHTML = `\n  <button id=\"sumar\">Añadir entrada</button>\n  <p>Entradas: <b id=\"contador\">0</b></p>`;\n\nlet entradas = 0;\nconst boton = document.querySelector(\"#sumar\");\nconst contador = document.querySelector(\"#contador\");\n\nboton.addEventListener(\"click\", () => {\n  entradas++;\n  contador.textContent = entradas;\n  console.log(\"Clic número\", entradas);\n});",
     "dom": true,
     "a": [
      [
       "click",
       "Clic o toque."
      ],
      [
       "input",
       "Cada cambio en un campo de texto."
      ],
      [
       "change",
       "Al confirmar un cambio (select, checkbox)."
      ],
      [
       "submit",
       "Envío de un formulario."
      ],
      [
       "keydown / keyup",
       "Pulsar / soltar una tecla."
      ],
      [
       "mouseenter / mouseleave",
       "El ratón entra / sale."
      ],
      [
       "DOMContentLoaded",
       "El HTML terminó de cargar."
      ],
      [
       "scroll / resize",
       "Desplazamiento / cambio de tamaño de ventana."
      ]
     ],
     "at": "Eventos más usados",
     "ah": [
      "Evento",
      "Cuándo ocurre"
     ],
     "tip": "ejecutad y haced clic en el botón que aparece en la página del ejemplo."
    },
    {
     "n": "8.2",
     "t": "El objeto evento",
     "m": "4 min",
     "b": [
      "La función manejadora recibe un objeto con información del evento. event.target es el elemento donde ocurrió; event.key la tecla pulsada; event.preventDefault() cancela el comportamiento por defecto del navegador (enviar un formulario, seguir un enlace).",
      "event.stopPropagation() impide que el evento siga subiendo a los elementos padre. Los eventos «burbujean»: un clic en un botón también llega a su div, a su section y al body."
     ],
     "k": [
      "e.target = elemento que originó el evento.",
      "e.preventDefault() cancela lo que haría el navegador.",
      "e.key = tecla pulsada en eventos de teclado.",
      "Los eventos suben por los padres (bubbling)."
     ],
     "c": "document.querySelector(\"#app\").innerHTML = `\n  <a href=\"https://google.com\" id=\"enlace\">Enlace bloqueado</a>\n  <input id=\"campo\" placeholder=\"Escribe y pulsa Enter\">`;\n\ndocument.querySelector(\"#enlace\").addEventListener(\"click\", (e) => {\n  e.preventDefault();\n  console.log(\"Navegación cancelada en\", e.target.tagName);\n});\n\ndocument.querySelector(\"#campo\").addEventListener(\"keydown\", (e) => {\n  if (e.key === \"Enter\") {\n    console.log(\"Has escrito:\", e.target.value);\n  }\n});",
     "dom": true,
     "tip": "pulsad el enlace y escribid en el campo del ejemplo."
    },
    {
     "n": "8.3",
     "t": "Delegación de eventos",
     "m": "5 min",
     "b": [
      "En lugar de añadir un manejador a cada elemento de una lista, se añade uno solo al contenedor y se comprueba con e.target.closest() sobre qué elemento se hizo clic. Esto se llama delegación de eventos.",
      "Tiene dos ventajas: menos manejadores (mejor rendimiento) y funciona también con los elementos que se añaden después, por ejemplo los que se crean al cargar datos de una API."
     ],
     "k": [
      "Un manejador en el padre en lugar de uno por hijo.",
      "e.target.closest(\".item\") encuentra el elemento pulsado.",
      "Funciona con elementos añadidos más tarde.",
      "Comprueba que closest no devuelva null."
     ],
     "c": "document.querySelector(\"#app\").innerHTML = `\n  <ul id=\"lista\">\n    <li data-id=\"1\">Banda A <button class=\"borrar\">✕</button></li>\n    <li data-id=\"2\">Banda B <button class=\"borrar\">✕</button></li>\n  </ul>`;\n\nconst lista = document.querySelector(\"#lista\");\nlista.addEventListener(\"click\", (e) => {\n  const boton = e.target.closest(\".borrar\");\n  if (!boton) return;\n  const li = boton.closest(\"li\");\n  console.log(\"Borrando la banda\", li.dataset.id);\n  li.remove();\n});\n\nlista.insertAdjacentHTML(\"beforeend\", '<li data-id=\"3\">Banda C <button class=\"borrar\">✕</button></li>');",
     "dom": true,
     "tip": "la Banda C se añadió después y su botón también funciona gracias a la delegación."
    },
    {
     "n": "8.4",
     "t": "Formularios",
     "m": "6 min",
     "b": [
      "El evento submit del formulario se dispara al pulsar el botón de enviar o Enter. Con e.preventDefault() se evita que la página se recargue y se pueden procesar los datos con JavaScript. new FormData(form) lee todos los campos a la vez por su name; Object.fromEntries los convierte en un objeto.",
      "La validación en el navegador combina los atributos de HTML (required, pattern…) con comprobaciones propias en JavaScript. Muestra los errores junto al campo, no con alert. Recuerda que el servidor debe volver a validar siempre."
     ],
     "k": [
      "form.addEventListener(\"submit\", e => { e.preventDefault(); … }).",
      "new FormData(form) lee todos los campos por su name.",
      "input.value es siempre texto: conviértelo si es número.",
      "form.reset() vacía el formulario."
     ],
     "c": "document.querySelector(\"#app\").innerHTML = `\n  <form id=\"f\">\n    <input name=\"nombre\" placeholder=\"Nombre\" required>\n    <input name=\"cantidad\" type=\"number\" value=\"1\" min=\"1\">\n    <button>Comprar</button>\n    <p id=\"error\" style=\"color:crimson\"></p>\n  </form>`;\n\nconst form = document.querySelector(\"#f\");\nform.addEventListener(\"submit\", (e) => {\n  e.preventDefault();\n  const datos = Object.fromEntries(new FormData(form));\n  const cantidad = Number(datos.cantidad);\n  if (cantidad > 6) {\n    form.querySelector(\"#error\").textContent = \"Máximo 6 entradas\";\n    return;\n  }\n  console.log(`${datos.nombre.trim()} compra ${cantidad} entradas: ${cantidad * 39} €`);\n  form.reset();\n});",
     "dom": true,
     "e": "olvidar e.preventDefault(): la página se recarga y no ves nada en la consola.",
     "tip": "rellenad el formulario del ejemplo y pulsad Comprar."
    }
   ]
  },
  {
   "t": "Asincronía",
   "d": "setTimeout, promesas, async/await, fetch y manejo de errores.",
   "secciones": [
    {
     "n": "9.1",
     "t": "Código asíncrono y el event loop",
     "m": "5 min",
     "b": [
      "JavaScript ejecuta una cosa cada vez (es monohilo). Las tareas lentas, como esperar a un servidor o un temporizador, no bloquean la página: se encargan al navegador y, cuando terminan, su función se pone en una cola para ejecutarse en cuanto el código actual acabe. Ese mecanismo es el event loop.",
      "setTimeout(fn, ms) ejecuta una función una vez pasado un tiempo y setInterval(fn, ms) la repite cada cierto tiempo hasta que se detiene con clearInterval. Incluso setTimeout(fn, 0) se ejecuta después de todo el código síncrono."
     ],
     "k": [
      "JS no se bloquea esperando: delega y sigue.",
      "setTimeout ejecuta una vez; setInterval repite.",
      "clearInterval(id) detiene el intervalo.",
      "Los callbacks asíncronos esperan a que termine el código actual."
     ],
     "c": "console.log(\"1. Inicio\");\n\nsetTimeout(() => console.log(\"3. Timeout de 0 ms\"), 0);\n\nconsole.log(\"2. Fin del código síncrono\");\n\nlet n = 3;\nconst id = setInterval(() => {\n  console.log(\"Cuenta atrás:\", n);\n  n--;\n  if (n === 0) {\n    clearInterval(id);\n    console.log(\"¡Despegue!\");\n  }\n}, 500);",
     "q": {
      "t": "¿Qué se imprime antes?",
      "o": [
       "El setTimeout de 0 ms",
       "El console.log que va después",
       "A la vez",
       "Depende del navegador"
      ],
      "ok": 1,
      "why": "El callback del setTimeout espera a que termine todo el código síncrono."
     },
     "tip": "es una pregunta clásica de entrevista: fijaos en el orden 1, 2, 3."
    },
    {
     "n": "9.2",
     "t": "Promesas",
     "m": "6 min",
     "b": [
      "Una promesa representa un valor que llegará en el futuro. Puede estar pendiente, cumplida (resolve, con un resultado) o rechazada (reject, con un error). Con .then() se indica qué hacer con el resultado, con .catch() qué hacer si falla y .finally() se ejecuta en ambos casos.",
      "Promise.all espera a que se cumplan varias promesas a la vez y devuelve todos los resultados; falla si cualquiera falla. Las promesas sustituyen a los callbacks anidados, que se volvían ilegibles («callback hell»)."
     ],
     "k": [
      "new Promise((resolve, reject) => { … }).",
      ".then(resultado) / .catch(error) / .finally().",
      "Promise.all([p1, p2]) espera a todas.",
      "fetch devuelve una promesa."
     ],
     "c": "function esperar(ms, valor) {\n  return new Promise((resolve, reject) => {\n    setTimeout(() => {\n      if (valor < 0) reject(new Error(\"Valor negativo\"));\n      else resolve(valor * 2);\n    }, ms);\n  });\n}\n\nesperar(300, 5)\n  .then(r => console.log(\"Resultado:\", r))\n  .catch(e => console.error(e.message))\n  .finally(() => console.log(\"Terminado\"));\n\nesperar(200, -1).catch(e => console.error(\"Falló:\", e.message));\n\nPromise.all([esperar(100, 1), esperar(200, 2)])\n  .then(rs => console.log(\"Todas:\", rs));",
     "tip": "casi nunca crearéis promesas a mano: las usaréis a través de fetch y otras APIs."
    },
    {
     "n": "9.3",
     "t": "async y await",
     "m": "5 min",
     "b": [
      "async/await permite escribir código asíncrono que se lee como si fuera secuencial. Una función marcada con async siempre devuelve una promesa, y dentro de ella await pausa la ejecución hasta que la promesa se cumple y devuelve su valor.",
      "Los errores se capturan con try/catch, igual que en el código normal. await solo se puede usar dentro de funciones async (o en el nivel superior de un módulo)."
     ],
     "k": [
      "async function f() { const r = await promesa; }",
      "await espera sin bloquear la página.",
      "Errores con try { … } catch (e) { … }.",
      "Una función async siempre devuelve una promesa."
     ],
     "c": "const esperar = (ms) => new Promise(r => setTimeout(r, ms));\n\nasync function comprarEntrada(nombre) {\n  console.log(\"Comprobando disponibilidad…\");\n  await esperar(400);\n  console.log(\"Procesando el pago…\");\n  await esperar(400);\n  if (!nombre) throw new Error(\"Falta el nombre\");\n  return `Entrada para ${nombre} confirmada`;\n}\n\nasync function main() {\n  try {\n    const mensaje = await comprarEntrada(\"Ana\");\n    console.log(mensaje);\n    await comprarEntrada(\"\");\n  } catch (e) {\n    console.error(\"Error:\", e.message);\n  }\n}\nmain();",
     "e": "olvidar el await: la variable guarda una promesa pendiente en lugar del resultado.",
     "tip": "si veis «Promise { <pending> }» en la consola, os falta un await."
    },
    {
     "n": "9.4",
     "t": "fetch: pedir datos a una API",
     "m": "6 min",
     "b": [
      "fetch(url) hace una petición HTTP y devuelve una promesa con la respuesta. response.ok indica si el código de estado es correcto (200-299) y response.json() lee el cuerpo y lo convierte en objeto (también devuelve una promesa, por eso lleva await).",
      "Para enviar datos se pasa un segundo argumento con method: \"POST\", las cabeceras y el cuerpo en JSON. fetch solo falla (rechaza) si no hay conexión; un error 404 o 500 no lanza excepción, por eso hay que comprobar response.ok."
     ],
     "k": [
      "const res = await fetch(url); const datos = await res.json();",
      "Comprueba res.ok: un 404 no lanza error.",
      "POST: method, headers Content-Type y body JSON.stringify.",
      "Muestra un estado de «cargando» mientras esperas."
     ],
     "c": "async function cargarUsuarios() {\n  try {\n    const res = await fetch(\"https://jsonplaceholder.typicode.com/users?_limit=3\");\n    if (!res.ok) throw new Error(\"HTTP \" + res.status);\n    const usuarios = await res.json();\n    usuarios.forEach(u => console.log(u.name, \"-\", u.email));\n  } catch (e) {\n    console.error(\"No se pudo cargar:\", e.message);\n  }\n}\ncargarUsuarios();\n\nasync function crearPost() {\n  const res = await fetch(\"https://jsonplaceholder.typicode.com/posts\", {\n    method: \"POST\",\n    headers: { \"Content-Type\": \"application/json\" },\n    body: JSON.stringify({ title: \"Festival\", body: \"¡Hola!\", userId: 1 }),\n  });\n  console.log(\"Creado con código\", res.status, await res.json());\n}\ncrearPost();",
     "a": [
      [
       "res.ok",
       "true si el estado está entre 200 y 299."
      ],
      [
       "res.status",
       "Código HTTP: 200, 201, 404, 500…"
      ],
      [
       "res.json()",
       "Lee el cuerpo como JSON (promesa)."
      ],
      [
       "res.text()",
       "Lee el cuerpo como texto (promesa)."
      ],
      [
       "method",
       "GET (por defecto), POST, PUT, PATCH, DELETE."
      ],
      [
       "headers",
       "Cabeceras, como Content-Type o Authorization."
      ],
      [
       "body",
       "Datos enviados (JSON.stringify)."
      ]
     ],
     "at": "Opciones y propiedades de fetch",
     "ah": [
      "Elemento",
      "Significado"
     ],
     "tip": "jsonplaceholder.typicode.com es una API de pruebas gratuita para practicar."
    }
   ]
  },
  {
   "t": "Clases, módulos y buenas prácticas",
   "d": "Clases y herencia, módulos, localStorage, errores y depuración.",
   "secciones": [
    {
     "n": "10.1",
     "t": "Clases",
     "m": "6 min",
     "b": [
      "Una clase es una plantilla para crear objetos con las mismas propiedades y métodos. El constructor se ejecuta al crear cada objeto con new y suele inicializar sus propiedades con this. Los métodos se escriben dentro de la clase y los comparten todos los objetos.",
      "extends crea una clase hija que hereda de otra; super() llama al constructor del padre. Los campos que empiezan por # son privados: solo se pueden usar dentro de la clase. static define métodos de la clase, no de cada objeto."
     ],
     "k": [
      "class Nombre { constructor() { … } metodo() { … } }",
      "new Nombre() crea un objeto.",
      "extends hereda; super() llama al padre.",
      "#campo es privado."
     ],
     "c": "class Entrada {\n  #codigo;\n  constructor(tipo, precio) {\n    this.tipo = tipo;\n    this.precio = precio;\n    this.#codigo = Math.random().toString(36).slice(2, 8).toUpperCase();\n  }\n  conIva() { return (this.precio * 1.21).toFixed(2); }\n  get codigo() { return this.#codigo; }\n}\n\nclass EntradaVip extends Entrada {\n  constructor(precio, zona) {\n    super(\"vip\", precio);\n    this.zona = zona;\n  }\n  conIva() { return super.conIva() + \" (incluye \" + this.zona + \")\"; }\n}\n\nconst e1 = new Entrada(\"dia\", 39);\nconst e2 = new EntradaVip(150, \"backstage\");\nconsole.log(e1.tipo, e1.conIva(), e1.codigo.length);\nconsole.log(e2.tipo, e2.conIva());\nconsole.log(e2 instanceof Entrada);",
     "tip": "es la misma idea que las clases de Java, con otra sintaxis."
    },
    {
     "n": "10.2",
     "t": "Módulos: import y export",
     "m": "4 min",
     "b": [
      "Los módulos permiten dividir el código en archivos, cada uno con su responsabilidad. Lo que un archivo exporta (export) lo pueden importar otros (import). Cada módulo tiene su propio ámbito: lo que no se exporta queda privado.",
      "En el navegador se cargan con <script type=\"module\" src=\"main.js\">, que además se comporta como defer. Puede haber varias exportaciones con nombre y una exportación por defecto. Las rutas de import deben incluir la extensión .js."
     ],
     "k": [
      "export function f() {} / export const x = 1;",
      "import { f, x } from \"./utils.js\";",
      "export default para lo principal del archivo.",
      "<script type=\"module\" src=\"main.js\">."
     ],
     "c": "// utils.js\nexport const IVA = 0.21;\nexport function conIva(precio) {\n  return precio * (1 + IVA);\n}\nexport default function formatear(n) {\n  return n.toFixed(2) + \" €\";\n}\n\n// main.js\nimport formatear, { conIva, IVA } from \"./utils.js\";\nconsole.log(formatear(conIva(100)));   // 121.00 €\n\n// index.html\n<script type=\"module\" src=\"main.js\"></script>",
     "v": 0,
     "e": "abrir el HTML con doble clic (file://): los módulos no funcionan. Usa un servidor local como Live Server.",
     "tip": "en VS Code, la extensión Live Server sirve vuestra web en localhost con un clic."
    },
    {
     "n": "10.3",
     "t": "localStorage",
     "m": "4 min",
     "b": [
      "localStorage guarda datos en el navegador del usuario que siguen ahí aunque cierre la pestaña. Solo guarda texto, así que los objetos y arrays se convierten con JSON.stringify al guardar y JSON.parse al leer. sessionStorage es igual, pero se borra al cerrar la pestaña.",
      "Es útil para preferencias (modo oscuro), un carrito o el progreso, como hace DevPath. No guardes ahí contraseñas ni datos sensibles: cualquier script de la página puede leerlo."
     ],
     "k": [
      "setItem(clave, texto) / getItem(clave) / removeItem.",
      "Objetos: JSON.stringify al guardar, JSON.parse al leer.",
      "getItem devuelve null si no existe.",
      "Nada de datos sensibles."
     ],
     "c": "const carrito = [{ tipo: \"abono\", precio: 89 }];\n\ntry {\n  localStorage.setItem(\"carrito\", JSON.stringify(carrito));\n  const guardado = JSON.parse(localStorage.getItem(\"carrito\") || \"[]\");\n  console.log(\"Leído:\", guardado);\n  console.log(localStorage.getItem(\"no-existe\"));   // null\n  localStorage.removeItem(\"carrito\");\n} catch (e) {\n  console.warn(\"localStorage no está disponible aquí:\", e.message);\n}",
     "tip": "en DevTools → Application → Local Storage podéis ver y borrar lo que guarda cada web."
    },
    {
     "n": "10.4",
     "t": "Errores y depuración",
     "m": "5 min",
     "b": [
      "Los errores más comunes son ReferenceError (variable que no existe), TypeError (usar un valor de forma incorrecta, como llamar a algo que no es una función o leer propiedades de undefined) y SyntaxError (código mal escrito). El mensaje y la línea de la consola dicen casi siempre dónde está el problema.",
      "throw lanza un error propio y try/catch lo captura. Para depurar, además de console.log, la palabra debugger o un punto de interrupción en la pestaña Sources pausan la ejecución y permiten ver el valor de cada variable paso a paso."
     ],
     "k": [
      "Lee el mensaje y la línea del error antes de nada.",
      "throw new Error(\"mensaje\") lanza un error.",
      "try { … } catch (e) { … } finally { … }.",
      "debugger o breakpoints en Sources para ir paso a paso."
     ],
     "c": "function dividir(a, b) {\n  if (b === 0) throw new Error(\"No se puede dividir entre 0\");\n  return a / b;\n}\n\ntry {\n  console.log(dividir(10, 2));\n  console.log(dividir(1, 0));\n} catch (e) {\n  console.error(e.name + \":\", e.message);\n} finally {\n  console.log(\"Esto se ejecuta siempre\");\n}\n\ntry { noExiste(); } catch (e) { console.error(e.name); }\ntry { null.nombre; } catch (e) { console.error(e.name); }",
     "a": [
      [
       "ReferenceError",
       "Usas una variable o función que no existe."
      ],
      [
       "TypeError",
       "Operación no válida para ese tipo (null.x, algo no es una función)."
      ],
      [
       "SyntaxError",
       "El código está mal escrito."
      ],
      [
       "RangeError",
       "Valor fuera de rango (recursión infinita)."
      ]
     ],
     "at": "Tipos de error",
     "ah": [
      "Error",
      "Causa habitual"
     ],
     "tip": "copiad el mensaje de error en un buscador: alguien ya tuvo ese problema."
    },
    {
     "n": "10.5",
     "t": "Buenas prácticas",
     "m": "4 min",
     "b": [
      "Código limpio: nombres descriptivos, funciones cortas que hagan una sola cosa, const por defecto, === siempre y nada de variables globales. Evita repetir código: si copias y pegas tres veces, crea una función.",
      "Herramientas que ayudan: ESLint detecta errores y malas prácticas mientras escribes, Prettier formatea el código automáticamente y npm gestiona las librerías. TypeScript añade tipos a JavaScript y detecta muchos errores antes de ejecutar."
     ],
     "k": [
      "Nombres que expliquen: calcularTotal, no ct.",
      "Funciones pequeñas con una responsabilidad.",
      "ESLint + Prettier en VS Code.",
      "Comenta el porqué, no el qué."
     ],
     "c": "// Mal\nfunction f(a) {\n  var t = 0;\n  for (var i = 0; i < a.length; i++) { if (a[i].v == true) t = t + a[i].p; }\n  return t;\n}\n\n// Bien\nfunction calcularRecaudacion(entradas) {\n  return entradas\n    .filter(entrada => entrada.vendida)\n    .reduce((total, entrada) => total + entrada.precio, 0);\n}\n\nconsole.log(calcularRecaudacion([\n  { precio: 39, vendida: true },\n  { precio: 89, vendida: false },\n]));",
     "tip": "instalad ESLint y Prettier en VS Code: os corregirán muchos errores sin pensar."
    }
   ]
  }
 ],
 "chuleta": [
  [
   "const / let",
   "const para valores que no se reasignan (por defecto); let si van a cambiar. No uses var.",
   "const IVA = 0.21;\nlet total = 0;",
   "Fundamentos"
  ],
  [
   "console.log()",
   "Muestra valores en la consola (F12). La herramienta básica para depurar.",
   "console.log(\"Total:\", total);",
   "Fundamentos"
  ],
  [
   "typeof",
   "Devuelve el tipo de un valor como texto.",
   "typeof 42  // \"number\"",
   "Fundamentos"
  ],
  [
   "=== / !==",
   "Igualdad estricta: compara valor y tipo. Usa siempre esta en lugar de ==.",
   "if (respuesta === \"si\") { … }",
   "Fundamentos"
  ],
  [
   "?? / ||",
   "Valor por defecto. ?? solo si es null o undefined; || si es cualquier valor falsy.",
   "const n = cantidad ?? 1;",
   "Fundamentos"
  ],
  [
   "`${}`",
   "Template literal: inserta variables y expresiones en un texto.",
   "`Hola ${nombre}, debes ${total} €`",
   "Fundamentos"
  ],
  [
   "if / else if / else",
   "Ejecuta un bloque según una condición.",
   "if (nota >= 5) { … } else { … }",
   "Control de flujo"
  ],
  [
   "cond ? a : b",
   "Operador ternario: elige entre dos valores.",
   "const estado = nota >= 5 ? \"apto\" : \"no apto\";",
   "Control de flujo"
  ],
  [
   "switch",
   "Compara un valor con varios casos. Cada case necesita break.",
   "switch (op) { case 1: …; break; default: … }",
   "Control de flujo"
  ],
  [
   "for",
   "Repite un número conocido de veces.",
   "for (let i = 0; i < 5; i++) { … }",
   "Control de flujo"
  ],
  [
   "for…of / for…in",
   "for…of recorre valores de un array; for…in claves de un objeto.",
   "for (const banda of bandas) { … }",
   "Control de flujo"
  ],
  [
   "function f(a, b) {}",
   "Declaración de función. return devuelve el resultado.",
   "function sumar(a, b) { return a + b; }",
   "Funciones"
  ],
  [
   "(a, b) => a + b",
   "Función flecha. Con una sola expresión devuelve el resultado sin return.",
   "const doble = n => n * 2;",
   "Funciones"
  ],
  [
   "Parámetros por defecto y rest",
   "Valor si no se pasa el argumento / agrupa los argumentos sobrantes en un array.",
   "function f(base, iva = 0.21, ...extras) { … }",
   "Funciones"
  ],
  [
   "setTimeout / setInterval",
   "Ejecuta una función tras un tiempo / cada cierto tiempo.",
   "const id = setInterval(tick, 1000);\nclearInterval(id);",
   "Funciones"
  ],
  [
   "push / pop / shift / unshift",
   "Añadir y quitar al final (push/pop) o al principio (unshift/shift).",
   "lista.push(\"nuevo\");",
   "Arrays"
  ],
  [
   "map",
   "Devuelve un array nuevo con cada elemento transformado.",
   "const precios = entradas.map(e => e.precio);",
   "Arrays"
  ],
  [
   "filter",
   "Devuelve un array nuevo con los que cumplen la condición.",
   "const caros = productos.filter(p => p.precio > 50);",
   "Arrays"
  ],
  [
   "reduce",
   "Acumula un único resultado (suma, máximo, objeto…).",
   "const total = precios.reduce((a, p) => a + p, 0);",
   "Arrays"
  ],
  [
   "find / findIndex",
   "El primer elemento que cumple / su posición (-1 si no hay).",
   "const ana = alumnos.find(a => a.nombre === \"Ana\");",
   "Arrays"
  ],
  [
   "some / every",
   "¿Alguno cumple? / ¿Todos cumplen?",
   "notas.every(n => n >= 5)",
   "Arrays"
  ],
  [
   "sort((a, b) => a - b)",
   "Ordena números ascendentemente. Sin función ordena como texto. Modifica el array.",
   "notas.toSorted((a, b) => b - a)",
   "Arrays"
  ],
  [
   "includes / indexOf",
   "¿Contiene el valor? / ¿En qué posición está?",
   "roles.includes(\"admin\")",
   "Arrays"
  ],
  [
   "slice / splice",
   "slice copia un trozo sin tocar el original; splice quita o inserta modificándolo.",
   "lista.slice(0, 3)",
   "Arrays"
  ],
  [
   "[...a, ...b]",
   "Spread: copia o une arrays.",
   "const todos = [...dia1, ...dia2];",
   "Arrays"
  ],
  [
   "const [a, b] = lista",
   "Desestructuración de arrays.",
   "const [primero, ...resto] = podio;",
   "Arrays"
  ],
  [
   "obj.clave / obj[\"clave\"]",
   "Acceso a propiedades. Los corchetes permiten usar una variable.",
   "alumno[campo]",
   "Objetos y JSON"
  ],
  [
   "const { a, b } = obj",
   "Desestructuración de objetos, también en parámetros.",
   "function f({ nombre, edad }) { … }",
   "Objetos y JSON"
  ],
  [
   "{ ...obj, clave: valor }",
   "Copia un objeto cambiando o añadiendo propiedades.",
   "const actualizado = { ...user, edad: 21 };",
   "Objetos y JSON"
  ],
  [
   "Object.keys / values / entries",
   "Claves, valores o pares [clave, valor] de un objeto.",
   "for (const [k, v] of Object.entries(obj)) { … }",
   "Objetos y JSON"
  ],
  [
   "obj?.prop",
   "Encadenamiento opcional: undefined en lugar de error si falta algo.",
   "usuario?.direccion?.ciudad",
   "Objetos y JSON"
  ],
  [
   "JSON.stringify / JSON.parse",
   "Objeto a texto JSON / texto JSON a objeto.",
   "const obj = JSON.parse(texto);",
   "Objetos y JSON"
  ],
  [
   "trim / toLowerCase / toUpperCase",
   "Limpiar espacios y cambiar mayúsculas. Imprescindible con datos de formularios.",
   "email.trim().toLowerCase()",
   "Textos y números"
  ],
  [
   "split / join",
   "Texto a array / array a texto.",
   "\"a,b,c\".split(\",\")",
   "Textos y números"
  ],
  [
   "includes / startsWith / replaceAll",
   "Buscar y sustituir texto.",
   "fecha.replaceAll(\"-\", \"/\")",
   "Textos y números"
  ],
  [
   "Number() / parseInt()",
   "Convierte texto a número. Si falla, NaN.",
   "const cantidad = Number(input.value);",
   "Textos y números"
  ],
  [
   "toFixed(2)",
   "Texto con 2 decimales.",
   "precio.toFixed(2) + \" €\"",
   "Textos y números"
  ],
  [
   "Math.round / floor / ceil / random",
   "Redondear y números aleatorios.",
   "Math.floor(Math.random() * 6) + 1",
   "Textos y números"
  ],
  [
   "new Date() / toLocaleDateString",
   "Fechas. getMonth() empieza en 0.",
   "fecha.toLocaleDateString(\"es-ES\")",
   "Textos y números"
  ],
  [
   "document.querySelector()",
   "Primer elemento que coincide con un selector CSS (o null).",
   "const btn = document.querySelector(\".btn\");",
   "DOM"
  ],
  [
   "querySelectorAll()",
   "Todos los elementos que coinciden. Se recorre con forEach.",
   "document.querySelectorAll(\"li\").forEach(li => …);",
   "DOM"
  ],
  [
   "textContent / innerHTML",
   "Cambiar el texto (seguro) o el HTML (solo contenido de confianza).",
   "titulo.textContent = \"Hola\";",
   "DOM"
  ],
  [
   "classList.add / remove / toggle",
   "Cambiar clases: JS controla el estado y CSS el aspecto.",
   "menu.classList.toggle(\"abierto\");",
   "DOM"
  ],
  [
   "createElement / append / remove",
   "Crear, insertar y borrar elementos.",
   "const li = document.createElement(\"li\");\nlista.append(li);",
   "DOM"
  ],
  [
   "dataset",
   "Lee los atributos data-* de un elemento.",
   "<li data-id=\"7\"> → li.dataset.id",
   "DOM"
  ],
  [
   "closest()",
   "Busca el ancestro más cercano que coincide.",
   "e.target.closest(\".tarjeta\")",
   "DOM"
  ],
  [
   "addEventListener",
   "Ejecuta una función cuando ocurre un evento.",
   "btn.addEventListener(\"click\", () => { … });",
   "Eventos"
  ],
  [
   "e.preventDefault()",
   "Cancela la acción por defecto (enviar formulario, seguir enlace).",
   "form.addEventListener(\"submit\", e => { e.preventDefault(); });",
   "Eventos"
  ],
  [
   "e.target",
   "Elemento en el que ocurrió el evento.",
   "console.log(e.target.value);",
   "Eventos"
  ],
  [
   "new FormData(form)",
   "Lee todos los campos de un formulario por su name.",
   "const datos = Object.fromEntries(new FormData(form));",
   "Eventos"
  ],
  [
   "Delegación",
   "Un solo manejador en el padre para todos los hijos (también los futuros).",
   "lista.addEventListener(\"click\", e => { const b = e.target.closest(\"button\"); … });",
   "Eventos"
  ],
  [
   "async / await",
   "Espera una promesa como si fuera código secuencial.",
   "const res = await fetch(url);",
   "Asincronía y más"
  ],
  [
   "fetch()",
   "Petición HTTP. Comprueba res.ok y lee con res.json().",
   "const datos = await (await fetch(url)).json();",
   "Asincronía y más"
  ],
  [
   "try / catch",
   "Captura errores para que el programa no se detenga.",
   "try { … } catch (e) { console.error(e.message); }",
   "Asincronía y más"
  ],
  [
   "Promise.all",
   "Espera varias promesas a la vez.",
   "const [a, b] = await Promise.all([p1, p2]);",
   "Asincronía y más"
  ],
  [
   "localStorage",
   "Guarda texto en el navegador. Objetos con JSON.",
   "localStorage.setItem(\"tema\", \"oscuro\");",
   "Asincronía y más"
  ],
  [
   "class / extends",
   "Plantillas de objetos y herencia.",
   "class Vip extends Entrada { constructor() { super(); } }",
   "Asincronía y más"
  ],
  [
   "import / export",
   "Dividir el código en módulos. Requiere type=\"module\".",
   "import { conIva } from \"./utils.js\";",
   "Asincronía y más"
  ]
 ],
 "retos": [
  {
   "t": "¿Qué muestra console.log(\"5\" + 2)?",
   "o": [
    "7",
    "\"52\"",
    "NaN",
    "Error"
   ],
   "ok": 1,
   "why": "Con un texto, + concatena: \"5\" + 2 da \"52\"."
  },
  {
   "t": "¿Qué método devuelve un array nuevo solo con los elementos que cumplen una condición?",
   "o": [
    "map",
    "filter",
    "forEach",
    "reduce"
   ],
   "ok": 1,
   "why": "filter selecciona; map transforma; reduce acumula."
  },
  {
   "t": "¿Qué valor NO es falsy?",
   "o": [
    "0",
    "\"\"",
    "[]",
    "null"
   ],
   "ok": 2,
   "why": "Un array vacío es truthy; 0, \"\" y null son falsy."
  },
  {
   "t": "¿Qué hace e.preventDefault() en un submit?",
   "o": [
    "Borra el formulario",
    "Evita que la página se recargue al enviar",
    "Valida los campos",
    "Detiene JavaScript"
   ],
   "ok": 1,
   "why": "Cancela el comportamiento por defecto del navegador: enviar y recargar."
  },
  {
   "t": "¿Por qué [10, 9, 1].sort() devuelve [1, 10, 9]?",
   "o": [
    "Es un error del navegador",
    "sort ordena como texto por defecto",
    "sort ordena de mayor a menor",
    "Porque 10 es par"
   ],
   "ok": 1,
   "why": "Sin función de comparación, sort convierte a texto: \"10\" va antes que \"9\"."
  },
  {
   "t": "¿Qué devuelve una función async?",
   "o": [
    "Siempre undefined",
    "Una promesa",
    "Un string",
    "Nada"
   ],
   "ok": 1,
   "why": "Una función async siempre devuelve una promesa."
  },
  {
   "t": "fetch devuelve un 404. ¿Entra en el catch?",
   "o": [
    "Sí, siempre",
    "No: hay que comprobar res.ok",
    "Solo en Chrome",
    "Solo con await"
   ],
   "ok": 1,
   "why": "fetch solo rechaza si falla la red; los errores HTTP se detectan con res.ok."
  },
  {
   "t": "¿Qué es más seguro para poner texto escrito por un usuario?",
   "o": [
    "innerHTML",
    "textContent",
    "outerHTML",
    "document.write"
   ],
   "ok": 1,
   "why": "textContent no interpreta HTML, así que no permite inyectar código."
  }
 ]
};
