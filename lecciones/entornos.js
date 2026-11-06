window.LECCIONES = window.LECCIONES || {};
LECCIONES["entornos"] = {
 "lang": "java",
 "capitulos": [
  {
   "t": "El entorno de desarrollo",
   "d": "Qué es un IDE, editores frente a IDE, compilar e interpretar, y atajos.",
   "secciones": [
    {
     "n": "1.1",
     "t": "¿Qué es un IDE?",
     "m": "4 min",
     "b": [
      "Un IDE (Integrated Development Environment, entorno de desarrollo integrado) reúne en un solo programa todo lo necesario para programar: editor con resaltado y autocompletado, compilador o intérprete, depurador, integración con Git, gestión de dependencias, refactorización y ejecución de pruebas.",
      "Un editor de código como VS Code es más ligero y se convierte en algo parecido a un IDE con extensiones. Para Java se usan sobre todo IntelliJ IDEA (Community es gratuita), Eclipse y NetBeans; para desarrollo web, VS Code o WebStorm."
     ],
     "k": [
      "IDE = editor + compilador + depurador + herramientas.",
      "IntelliJ IDEA, Eclipse, NetBeans para Java.",
      "VS Code: editor ligero que se amplía con extensiones.",
      "Elige uno y aprende sus atajos a fondo."
     ],
     "c": "Funciones de un IDE\n├── Editor: resaltado, autocompletado, errores en vivo\n├── Compilar y ejecutar con un clic\n├── Depurador: puntos de ruptura, paso a paso\n├── Refactorización: renombrar, extraer métodos\n├── Control de versiones (Git) integrado\n├── Gestión de dependencias (Maven, Gradle, npm)\n└── Ejecución de pruebas (JUnit) y cobertura",
     "v": 0,
     "a": [
      [
       "IntelliJ IDEA",
       "Java y Kotlin; el más usado en empresa (Community gratuito)."
      ],
      [
       "Eclipse",
       "Java; libre y muy extensible."
      ],
      [
       "NetBeans",
       "Java; sencillo, usado en formación."
      ],
      [
       "VS Code",
       "Editor ligero multilenguaje con extensiones."
      ],
      [
       "WebStorm / PhpStorm",
       "IDE de JetBrains para web y PHP."
      ],
      [
       "Android Studio",
       "Basado en IntelliJ, para Android."
      ]
     ],
     "at": "IDE y editores más usados",
     "ah": [
      "Herramienta",
      "Uso"
     ],
     "tip": "con el correo del centro podéis pedir la licencia educativa gratuita de JetBrains."
    },
    {
     "n": "1.2",
     "t": "Compilar, interpretar y la JVM",
     "m": "5 min",
     "b": [
      "Un lenguaje compilado traduce todo el código fuente a código máquina antes de ejecutarlo (C, C++, Go). Un lenguaje interpretado se ejecuta línea a línea a través de un intérprete (Python, PHP, JavaScript tradicionalmente). Java está en medio: se compila a bytecode, un código intermedio que la Máquina Virtual de Java (JVM) interpreta y optimiza mientras se ejecuta (compilación JIT).",
      "Esto es lo que hace que Java sea multiplataforma: el mismo .class funciona en cualquier sistema que tenga una JVM. JavaScript moderno también usa compilación JIT en los navegadores."
     ],
     "k": [
      "Compilado: a código máquina antes de ejecutar.",
      "Interpretado: se ejecuta mediante un intérprete.",
      "Java: compilado a bytecode + JVM (JIT).",
      "Errores de compilación frente a errores de ejecución."
     ],
     "c": "Código fuente      Compilador        Bytecode         JVM\n  Main.java   ──►    javac    ──►    Main.class  ──►  Windows / Linux / macOS\n                                                     (interpreta + JIT)\n\n# En la terminal\njavac Main.java     # compilar → Main.class\njava Main           # ejecutar en la JVM",
     "v": 0,
     "a": [
      [
       "Compilado",
       "Rápido; un ejecutable por plataforma. C, C++, Go, Rust."
      ],
      [
       "Interpretado",
       "Flexible; necesita el intérprete. Python, PHP."
      ],
      [
       "Bytecode + máquina virtual",
       "Multiplataforma. Java, Kotlin, C#."
      ],
      [
       "JIT",
       "Compila en ejecución las partes más usadas. JVM, V8 (JavaScript)."
      ]
     ],
     "at": "Formas de ejecutar código",
     "ah": [
      "Modelo",
      "Características"
     ],
     "tip": "saber explicar la diferencia entre JDK, JRE y JVM es una pregunta clásica de examen."
    },
    {
     "n": "1.3",
     "t": "Atajos y productividad",
     "m": "4 min",
     "b": [
      "Los atajos de teclado son la mayor diferencia de velocidad entre un programador novato y uno experimentado. Los imprescindibles: buscar cualquier archivo o clase, ir a la definición de un método, renombrar en todo el proyecto, formatear el código, comentar líneas, duplicar o mover líneas y generar código (constructores, getters, setters).",
      "Las plantillas de código (live templates en IntelliJ, snippets en VS Code) escriben bloques frecuentes con pocas letras: psvm genera el main y sout un System.out.println."
     ],
     "k": [
      "Busca archivos y clases sin usar el ratón.",
      "Renombrar con el IDE actualiza todas las referencias.",
      "Formatea el código antes de cada commit.",
      "psvm y sout en IntelliJ; ! en VS Code para HTML."
     ],
     "c": "                       IntelliJ IDEA            VS Code\nBuscar en todo         Shift Shift              Ctrl + P\nIr a la definición     Ctrl + B                 F12\nRenombrar              Shift + F6               F2\nFormatear código       Ctrl + Alt + L           Shift + Alt + F\nComentar línea         Ctrl + /                 Ctrl + /\nDuplicar línea         Ctrl + D                 Shift + Alt + ↓\nGenerar código         Alt + Insert             (extensiones)\nEjecutar               Shift + F10              F5 / Ctrl + F5\nAcciones rápidas       Alt + Enter              Ctrl + .",
     "v": 0,
     "tip": "Alt + Enter en IntelliJ resuelve casi cualquier error subrayado: probadlo siempre."
    }
   ]
  },
  {
   "t": "Depuración",
   "d": "Tipos de errores, puntos de ruptura, ejecución paso a paso e inspección de variables.",
   "secciones": [
    {
     "n": "2.1",
     "t": "Tipos de errores",
     "m": "5 min",
     "b": [
      "Los errores de compilación (o de sintaxis) impiden que el programa se compile: falta un punto y coma, un tipo no coincide, una variable no existe. El IDE los subraya en rojo mientras escribes. Los errores de ejecución aparecen al ejecutar: una división entre cero, un NullPointerException, un índice fuera de rango.",
      "Los errores lógicos son los más difíciles: el programa funciona sin fallar, pero hace algo distinto de lo esperado (calcula mal una media, ordena al revés). Para encontrarlos se usan el depurador y las pruebas."
     ],
     "k": [
      "Compilación: el código no se compila (el IDE lo marca).",
      "Ejecución: el programa se detiene con una excepción.",
      "Lógicos: funciona, pero el resultado es incorrecto.",
      "Los lógicos se detectan con depuración y pruebas."
     ],
     "c": "// Error de compilación: falta el punto y coma y el tipo no coincide\nint total = \"diez\"\n// Error de ejecución: ArithmeticException\nint media = suma / 0;\n// Error lógico: se compila y ejecuta, pero la media es incorrecta\ndouble media2 = nota1 + nota2 + nota3 / 3;   // falta el paréntesis",
     "v": 0,
     "q": {
      "t": "Un programa calcula mal el IVA pero no muestra ningún error. ¿Qué tipo de error es?",
      "o": [
       "De compilación",
       "De ejecución",
       "Lógico",
       "De sintaxis"
      ],
      "ok": 2,
      "why": "El programa se ejecuta sin fallar, pero el resultado no es el esperado."
     },
     "tip": "el último ejemplo divide solo nota3 entre 3: los paréntesis importan."
    },
    {
     "n": "2.2",
     "t": "Puntos de ruptura",
     "m": "5 min",
     "b": [
      "Un punto de ruptura (breakpoint) marca una línea en la que el programa se pausará cuando se ejecute en modo depuración. Se pone haciendo clic en el margen izquierdo, junto al número de línea. Al llegar ahí, el programa se detiene y puedes ver el valor de todas las variables en ese momento.",
      "Los breakpoints condicionales solo se detienen si se cumple una condición (por ejemplo, i == 500 dentro de un bucle de mil vueltas), y los de excepción se detienen cuando se lanza una excepción concreta."
     ],
     "k": [
      "Clic en el margen = breakpoint.",
      "Ejecutar en modo Debug (el icono del bicho).",
      "Condicional: clic derecho → Condition.",
      "Mucho más potente que llenar el código de println."
     ],
     "c": "public static double media(int[] notas) {\n    int suma = 0;\n    for (int i = 0; i <= notas.length; i++) {   // ● breakpoint aquí\n        suma += notas[i];\n    }\n    return suma / notas.length;\n}\n// Al depurar, en la última vuelta i vale 3 y notas.length es 3:\n// notas[3] no existe → ArrayIndexOutOfBoundsException\n// Además, suma / notas.length es una división entera",
     "v": 0,
     "tip": "este método tiene dos errores: encontradlos poniendo un breakpoint en el bucle."
    },
    {
     "n": "2.3",
     "t": "Ejecución paso a paso",
     "m": "5 min",
     "b": [
      "Una vez detenido el programa, se avanza con los controles del depurador. Step Over (F8 en IntelliJ, F10 en VS Code) ejecuta la línea actual y pasa a la siguiente sin entrar en los métodos que llama. Step Into (F7 / F11) entra dentro del método de la línea actual. Step Out (Shift+F8 / Shift+F11) termina el método actual y vuelve a quien lo llamó.",
      "Resume (F9 / F5) continúa hasta el siguiente breakpoint. La pila de llamadas (call stack) muestra por qué métodos ha pasado el programa hasta llegar ahí."
     ],
     "k": [
      "Step Over: siguiente línea.",
      "Step Into: entrar en el método.",
      "Step Out: salir del método.",
      "Resume: hasta el siguiente breakpoint."
     ],
     "c": "Control           IntelliJ     VS Code    Qué hace\nStep Over         F8           F10        Ejecuta la línea y pasa a la siguiente\nStep Into         F7           F11        Entra en el método llamado\nStep Out          Shift+F8     Shift+F11  Termina el método y vuelve\nResume            F9           F5         Continúa hasta el siguiente breakpoint\nStop              Ctrl+F2      Shift+F5   Detiene la depuración\nEvaluate          Alt+F8       (consola)  Evalúa una expresión en ese momento",
     "v": 0,
     "tip": "Step Into en un método vuestro; Step Over en los de la librería estándar."
    },
    {
     "n": "2.4",
     "t": "Inspeccionar variables y watches",
     "m": "4 min",
     "b": [
      "Mientras el programa está pausado, el panel de variables muestra el valor de cada variable local, los atributos de los objetos y el contenido de las colecciones. Se pueden añadir watches (expresiones vigiladas) que se recalculan a cada paso, como notas.length - i o total > 100.",
      "La ventana de evaluar expresiones permite ejecutar código en ese punto (por ejemplo, llamar a un método o calcular algo) sin modificar el programa. En el navegador, las DevTools de Chrome tienen un depurador equivalente para JavaScript en la pestaña Sources."
     ],
     "k": [
      "Panel de variables: valores en ese instante.",
      "Watches: expresiones que se recalculan a cada paso.",
      "Evaluate: ejecutar código en el punto de pausa.",
      "Navegador: DevTools → Sources para depurar JavaScript."
     ],
     "c": "// JavaScript: la palabra debugger pausa el código si las DevTools están abiertas\nfunction calcularTotal(carrito) {\n  let total = 0;\n  for (const item of carrito) {\n    debugger;                 // se detiene aquí en cada vuelta\n    total += item.precio * item.cantidad;\n  }\n  return total;\n}",
     "v": 0,
     "tip": "en VS Code también podéis depurar JavaScript y Node con breakpoints."
    },
    {
     "n": "2.5",
     "t": "Logs: registrar lo que pasa",
     "m": "4 min",
     "b": [
      "En producción no se puede usar un depurador, así que las aplicaciones registran lo que hacen en logs. En lugar de System.out.println, se usa una librería de logging (java.util.logging, SLF4J con Logback o Log4j2) que permite niveles: DEBUG para detalles, INFO para eventos normales, WARN para situaciones extrañas y ERROR para fallos.",
      "Así se puede elegir cuánto detalle se registra en cada entorno, enviar los errores a un archivo o a un servicio de monitorización y saber qué pasó cuando un usuario informa de un problema."
     ],
     "k": [
      "Niveles: DEBUG < INFO < WARN < ERROR.",
      "En producción, normalmente desde INFO.",
      "Registra contexto: ids, usuario, operación.",
      "Nunca registres contraseñas ni datos personales."
     ],
     "c": "import java.util.logging.Logger;\n\npublic class PedidoServicio {\n    private static final Logger log = Logger.getLogger(PedidoServicio.class.getName());\n\n    public void crear(int clienteId, double total) {\n        log.info(\"Creando pedido para el cliente \" + clienteId);\n        if (total > 1000) log.warning(\"Pedido de importe alto: \" + total);\n        try {\n            // … guardar en la base de datos\n        } catch (Exception e) {\n            log.severe(\"Error al guardar el pedido: \" + e.getMessage());\n        }\n    }\n}",
     "v": 0,
     "o": "nov 06, 2026 11:20:01 AM PedidoServicio crear\nINFO: Creando pedido para el cliente 7\nnov 06, 2026 11:20:01 AM PedidoServicio crear\nWARNING: Pedido de importe alto: 1250.0",
     "tip": "en JavaScript, console.info, console.warn y console.error cumplen la misma función."
    }
   ]
  },
  {
   "t": "Pruebas de software",
   "d": "Por qué probar, niveles de prueba, caja blanca y negra, y diseño de casos.",
   "secciones": [
    {
     "n": "3.1",
     "t": "¿Por qué probar?",
     "m": "4 min",
     "b": [
      "Las pruebas comprueban que el software hace lo que debe y detectan errores antes de que lleguen al usuario, cuando arreglarlos es mucho más caro. Las pruebas automáticas, además, permiten cambiar el código con confianza: si algo se rompe, un test falla inmediatamente.",
      "Se distinguen varios niveles: pruebas unitarias (una función o clase aislada), de integración (varias piezas juntas, por ejemplo con la base de datos), de sistema (la aplicación completa) y de aceptación (el cliente comprueba que cumple lo pedido). Las de regresión repiten las pruebas tras un cambio para comprobar que no se ha roto nada."
     ],
     "k": [
      "Unitarias: una pieza aislada; muchas y rápidas.",
      "Integración: varias piezas juntas.",
      "Sistema y aceptación: la aplicación completa.",
      "Regresión: volver a probar tras cada cambio."
     ],
     "c": "            Pirámide de pruebas\n                  /\\\n                 /  \\      Pocas: end-to-end / aceptación\n                /----\\         (lentas, costosas)\n               /      \\    Algunas: integración\n              /--------\\\n             /          \\  Muchas: unitarias\n            /____________\\     (rápidas, baratas)",
     "v": 0,
     "a": [
      [
       "Unitaria",
       "Un método o clase aislada (JUnit)."
      ],
      [
       "Integración",
       "Módulos juntos: servicio + base de datos."
      ],
      [
       "Sistema",
       "La aplicación completa en un entorno real."
      ],
      [
       "Aceptación",
       "El cliente valida los requisitos."
      ],
      [
       "Regresión",
       "Repetir pruebas tras un cambio."
      ],
      [
       "Rendimiento / carga",
       "Velocidad y comportamiento con muchos usuarios."
      ]
     ],
     "at": "Niveles y tipos de prueba",
     "ah": [
      "Prueba",
      "Qué comprueba"
     ],
     "tip": "un buen test unitario se ejecuta en milisegundos y no depende de nada externo."
    },
    {
     "n": "3.2",
     "t": "Caja negra y caja blanca",
     "m": "5 min",
     "b": [
      "En las pruebas de caja negra se prueba un componente solo a través de sus entradas y salidas, sin mirar el código: se comprueba que para unos datos se obtiene el resultado esperado según la especificación.",
      "En las de caja blanca se diseñan los casos mirando el código, para recorrer todos sus caminos: cada condición verdadera y falsa, cada bucle con cero, una y varias vueltas. La cobertura mide qué porcentaje del código se ejecuta durante las pruebas."
     ],
     "k": [
      "Caja negra: entradas y salidas, sin mirar el código.",
      "Caja blanca: casos diseñados a partir del código.",
      "Cobertura de sentencias, de decisiones y de caminos.",
      "Se complementan: conviene usar las dos."
     ],
     "c": "// Método a probar\nstatic String clasificar(double nota) {\n    if (nota < 0 || nota > 10) throw new IllegalArgumentException();\n    if (nota >= 9) return \"Sobresaliente\";\n    if (nota >= 5) return \"Aprobado\";\n    return \"Suspenso\";\n}\n\n// Caja blanca: un caso por cada camino\n// nota = -1   → excepción         (primera condición verdadera)\n// nota = 9.5  → \"Sobresaliente\"\n// nota = 6    → \"Aprobado\"\n// nota = 3    → \"Suspenso\"",
     "v": 0,
     "tip": "en IntelliJ, «Run with Coverage» colorea en verde las líneas que han ejecutado los tests."
    },
    {
     "n": "3.3",
     "t": "Particiones de equivalencia y valores límite",
     "m": "6 min",
     "b": [
      "Probar todos los valores posibles es imposible, así que se agrupan en particiones de equivalencia: conjuntos de valores que el programa debería tratar igual. Para una nota de 0 a 10 hay particiones válidas (suspenso, aprobado, sobresaliente) e inválidas (menor que 0, mayor que 10). Basta con un caso representativo de cada una.",
      "Los errores suelen esconderse en los bordes, por eso el análisis de valores límite añade casos justo en los límites de cada partición y a su alrededor: -0.01, 0, 4.99, 5, 8.99, 9, 10 y 10.01."
     ],
     "k": [
      "Partición: grupo de valores con el mismo comportamiento.",
      "Un caso por partición válida e inválida.",
      "Valores límite: justo en el borde y a cada lado.",
      "Los errores típicos son < en lugar de <=."
     ],
     "c": "Entrada: nota (0 a 10)\n\nParticiones                  Valor representativo   Resultado esperado\nnota < 0          (inválida) -3                     Excepción\n0 ≤ nota < 5      (válida)   2.5                    Suspenso\n5 ≤ nota < 9      (válida)   7                      Aprobado\n9 ≤ nota ≤ 10     (válida)   9.5                    Sobresaliente\nnota > 10         (inválida) 12                     Excepción\n\nValores límite: -0.01 · 0 · 4.99 · 5 · 8.99 · 9 · 10 · 10.01",
     "v": 0,
     "q": {
      "t": "Para «edad entre 18 y 65», ¿qué valores límite probarías?",
      "o": [
       "18 y 65",
       "17, 18, 65 y 66",
       "0 y 100",
       "Solo 40"
      ],
      "ok": 1,
      "why": "Se prueba en cada borde y justo fuera de él."
     },
     "tip": "en el examen os pedirán tablas como esta: practicad con cualquier enunciado."
    }
   ]
  },
  {
   "t": "Pruebas con JUnit 5",
   "d": "Escribir tests, aserciones, preparación, tests parametrizados y TDD.",
   "secciones": [
    {
     "n": "4.1",
     "t": "Tu primer test",
     "m": "6 min",
     "b": [
      "JUnit es la librería estándar de pruebas unitarias en Java. Un test es un método anotado con @Test que prepara unos datos, ejecuta el código a probar y comprueba el resultado con una aserción. Los tests se colocan en src/test/java, en una clase con el mismo nombre que la probada terminada en Test.",
      "La estructura recomendada es AAA: Arrange (preparar), Act (actuar) y Assert (comprobar). Desde el IDE se ejecutan con el icono verde junto a la clase o al método; verde significa que pasan y rojo que fallan."
     ],
     "k": [
      "@Test marca un método de prueba.",
      "Estructura AAA: preparar, actuar, comprobar.",
      "Clase CalculadoraTest en src/test/java.",
      "Un test debe comprobar una sola cosa."
     ],
     "c": "// src/main/java/Calculadora.java\npublic class Calculadora {\n    public double precioConIva(double base) {\n        if (base < 0) throw new IllegalArgumentException(\"Precio negativo\");\n        return Math.round(base * 1.21 * 100) / 100.0;\n    }\n}\n\n// src/test/java/CalculadoraTest.java\nimport org.junit.jupiter.api.Test;\nimport static org.junit.jupiter.api.Assertions.*;\n\nclass CalculadoraTest {\n    @Test\n    void calculaElIva() {\n        Calculadora c = new Calculadora();      // Arrange\n        double resultado = c.precioConIva(100); // Act\n        assertEquals(121.0, resultado);         // Assert\n    }\n\n    @Test\n    void rechazaPreciosNegativos() {\n        Calculadora c = new Calculadora();\n        assertThrows(IllegalArgumentException.class, () -> c.precioConIva(-5));\n    }\n}",
     "v": 0,
     "o": "CalculadoraTest\n  ✔ calculaElIva()\n  ✔ rechazaPreciosNegativos()\n\nTests passed: 2 of 2",
     "tip": "nombrad los tests como frases: calculaElIva, rechazaPreciosNegativos."
    },
    {
     "n": "4.2",
     "t": "Aserciones",
     "m": "5 min",
     "b": [
      "Las aserciones comprueban que el resultado es el esperado; si no lo es, el test falla con un mensaje que indica qué se esperaba y qué se obtuvo. Las más usadas: assertEquals (igualdad), assertTrue y assertFalse, assertNull y assertNotNull, assertThrows (se lanza una excepción) y assertAll (agrupa varias comprobaciones).",
      "Para decimales, assertEquals admite un margen de error: assertEquals(0.3, 0.1 + 0.2, 0.0001). Se puede añadir un mensaje como último argumento para que el fallo se entienda mejor."
     ],
     "k": [
      "assertEquals(esperado, real).",
      "assertThrows(Excepcion.class, () -> …).",
      "Decimales: assertEquals(e, r, delta).",
      "assertAll agrupa varias aserciones."
     ],
     "c": "@Test\nvoid carritoConVariosProductos() {\n    Carrito carrito = new Carrito();\n    carrito.añadir(new Producto(\"Entrada\", 39), 2);\n    carrito.añadir(new Producto(\"Parking\", 10), 1);\n\n    assertAll(\n        () -> assertEquals(3, carrito.unidades()),\n        () -> assertEquals(88.0, carrito.total(), 0.001),\n        () -> assertFalse(carrito.estaVacio()),\n        () -> assertNotNull(carrito.getFechaCreacion())\n    );\n}",
     "v": 0,
     "a": [
      [
       "assertEquals(e, r)",
       "e y r son iguales."
      ],
      [
       "assertNotEquals(a, b)",
       "Son distintos."
      ],
      [
       "assertTrue(c) / assertFalse(c)",
       "La condición es verdadera / falsa."
      ],
      [
       "assertNull(x) / assertNotNull(x)",
       "Es / no es null."
      ],
      [
       "assertThrows(Ex.class, código)",
       "El código lanza esa excepción."
      ],
      [
       "assertAll(…)",
       "Ejecuta todas y muestra todos los fallos."
      ],
      [
       "assertIterableEquals(a, b)",
       "Dos colecciones tienen los mismos elementos."
      ]
     ],
     "at": "Aserciones de JUnit 5",
     "ah": [
      "Aserción",
      "Comprueba"
     ],
     "e": "invertir el orden de assertEquals(real, esperado): el test funciona, pero el mensaje de error dice lo contrario de lo que pasa.",
     "tip": "assertAll es útil para no tener que arreglar los fallos de uno en uno."
    },
    {
     "n": "4.3",
     "t": "Preparar y limpiar: @BeforeEach",
     "m": "4 min",
     "b": [
      "Cuando varios tests necesitan los mismos datos iniciales, se preparan en un método con @BeforeEach, que se ejecuta antes de cada test. Así cada test empieza con un estado limpio y no depende de lo que hicieron los anteriores. @AfterEach se ejecuta después de cada test, para liberar recursos.",
      "@BeforeAll y @AfterAll (métodos static) se ejecutan una sola vez para toda la clase, por ejemplo para abrir una conexión. @DisplayName da un nombre legible y @Disabled desactiva temporalmente un test."
     ],
     "k": [
      "@BeforeEach: antes de cada test.",
      "@AfterEach: después de cada test.",
      "@BeforeAll / @AfterAll: una vez por clase (static).",
      "Los tests no deben depender unos de otros."
     ],
     "c": "class InventarioTest {\n    private Inventario inv;\n\n    @BeforeEach\n    void preparar() {\n        inv = new Inventario();\n        inv.añadir(\"camiseta\", 10);\n    }\n\n    @Test\n    @DisplayName(\"Vender descuenta el stock\")\n    void venderDescuenta() {\n        inv.vender(\"camiseta\", 3);\n        assertEquals(7, inv.stock(\"camiseta\"));\n    }\n\n    @Test\n    @DisplayName(\"No se puede vender más de lo que hay\")\n    void noVenderSinStock() {\n        assertThrows(StockInsuficienteException.class, () -> inv.vender(\"camiseta\", 20));\n        assertEquals(10, inv.stock(\"camiseta\"));\n    }\n}",
     "v": 0,
     "tip": "gracias a @BeforeEach, el segundo test empieza con 10 camisetas aunque el primero haya vendido 3."
    },
    {
     "n": "4.4",
     "t": "Tests parametrizados",
     "m": "4 min",
     "b": [
      "Un test parametrizado ejecuta el mismo test con distintos datos, ideal para probar todas las particiones y valores límite sin copiar el test una y otra vez. Se marca con @ParameterizedTest y los datos se indican, por ejemplo, con @CsvSource, donde cada línea es un caso.",
      "Cada caso aparece como una ejecución independiente en el informe, así que se ve exactamente qué combinación falla."
     ],
     "k": [
      "@ParameterizedTest en lugar de @Test.",
      "@CsvSource({\"entrada, esperado\", …}).",
      "@ValueSource para un solo parámetro.",
      "Perfecto para valores límite."
     ],
     "c": "@ParameterizedTest(name = \"nota {0} → {1}\")\n@CsvSource({\n    \"0,     Suspenso\",\n    \"4.99,  Suspenso\",\n    \"5,     Aprobado\",\n    \"8.99,  Aprobado\",\n    \"9,     Sobresaliente\",\n    \"10,    Sobresaliente\"\n})\nvoid clasificaNotas(double nota, String esperado) {\n    assertEquals(esperado, Notas.clasificar(nota));\n}\n\n@ParameterizedTest\n@ValueSource(doubles = { -0.01, 10.01, -5 })\nvoid rechazaNotasFueraDeRango(double nota) {\n    assertThrows(IllegalArgumentException.class, () -> Notas.clasificar(nota));\n}",
     "v": 0,
     "o": "clasificaNotas(double, String)\n  ✔ nota 0.0 → Suspenso\n  ✔ nota 4.99 → Suspenso\n  ✔ nota 5.0 → Aprobado\n  ✔ nota 8.99 → Aprobado\n  ✔ nota 9.0 → Sobresaliente\n  ✔ nota 10.0 → Sobresaliente\nrechazaNotasFueraDeRango(double)\n  ✔ [1] -0.01\n  ✔ [2] 10.01\n  ✔ [3] -5.0",
     "tip": "es la tabla de valores límite del capítulo anterior convertida en código."
    },
    {
     "n": "4.5",
     "t": "TDD: desarrollo guiado por pruebas",
     "m": "5 min",
     "b": [
      "TDD (Test-Driven Development) invierte el orden habitual: primero se escribe un test que falla (rojo), después el código mínimo para que pase (verde) y finalmente se mejora el código sin romper los tests (refactorizar). Se repite el ciclo para cada pequeña funcionalidad.",
      "Obliga a pensar qué debe hacer el código antes de escribirlo, produce código fácil de probar y deja una batería de tests completa. No siempre se aplica de forma estricta, pero el ciclo rojo-verde-refactor es muy útil para la lógica de negocio."
     ],
     "k": [
      "Rojo: test que falla.",
      "Verde: código mínimo para que pase.",
      "Refactor: mejorar sin romper los tests.",
      "Ciclos muy cortos, de minutos."
     ],
     "c": "1. ROJO      Escribe un test para algo que aún no existe\n              @Test void descuentoGrupo() { assertEquals(0.1, Precios.descuento(5)); }\n              → falla: el método no existe\n\n2. VERDE     Escribe lo mínimo para que pase\n              static double descuento(int n) { return n >= 5 ? 0.1 : 0; }\n              → pasa\n\n3. REFACTOR  Mejora el código (nombres, constantes) sin cambiar su comportamiento\n              private static final int MINIMO_GRUPO = 5;\n              → los tests siguen en verde\n\n   …y vuelta a empezar con el siguiente caso",
     "v": 0,
     "tip": "probad TDD con un ejercicio sencillo, como validar un DNI."
    }
   ]
  },
  {
   "t": "Calidad de código y refactorización",
   "d": "Code smells, refactorizaciones habituales, principios de diseño y análisis estático.",
   "secciones": [
    {
     "n": "5.1",
     "t": "Code smells",
     "m": "5 min",
     "b": [
      "Un code smell (mal olor) es una señal de que el código, aunque funcione, puede estar mal diseñado y será difícil de mantener. Los más comunes: métodos demasiado largos, clases que hacen de todo, código duplicado, nombres poco claros, listas de parámetros enormes, números mágicos sin explicar y comentarios que intentan justificar un código confuso.",
      "Detectarlos es el primer paso para refactorizar. Los IDE y herramientas como SonarLint señalan muchos de ellos automáticamente."
     ],
     "k": [
      "Métodos largos y clases gigantes.",
      "Código duplicado.",
      "Nombres poco claros y números mágicos.",
      "Muchos parámetros o if/switch enormes."
     ],
     "c": "// Varios smells en pocas líneas\npublic double calc(double a, int b, boolean c, boolean d, String e) {   // nombres y parámetros\n    double r = a * b;\n    if (c) r = r * 0.9;              // ¿qué es 0.9?\n    if (d) r = r * 1.21;             // ¿y 1.21?\n    if (e.equals(\"vip\")) r = r + 50; // número mágico\n    // calcula el total del pedido con descuentos e iva y vip\n    return r;\n}",
     "v": 0,
     "a": [
      [
       "Método largo",
       "Divide en métodos con nombre."
      ],
      [
       "Código duplicado",
       "Extrae un método común."
      ],
      [
       "Número mágico",
       "Usa constantes con nombre."
      ],
      [
       "Nombre poco claro",
       "Renombra con lo que hace."
      ],
      [
       "Muchos parámetros",
       "Agrupa en un objeto."
      ],
      [
       "Clase que hace de todo",
       "Separa responsabilidades."
      ]
     ],
     "at": "Smell y solución",
     "ah": [
      "Problema",
      "Solución"
     ],
     "tip": "si necesitáis un comentario para explicar qué hace un trozo de código, extraedlo a un método con ese nombre."
    },
    {
     "n": "5.2",
     "t": "Refactorizaciones habituales",
     "m": "5 min",
     "b": [
      "Refactorizar es mejorar la estructura del código sin cambiar su comportamiento. Las operaciones más comunes las hace el IDE de forma segura: renombrar (variables, métodos, clases), extraer método, extraer variable o constante, introducir parámetro, mover un método a otra clase y cambiar la firma de un método.",
      "Antes de refactorizar hay que tener tests: son la red de seguridad que garantiza que el comportamiento no ha cambiado. En IntelliJ están en el menú Refactor (Ctrl+Alt+Shift+T)."
     ],
     "k": [
      "Renombrar: Shift+F6 (IntelliJ), F2 (VS Code).",
      "Extraer método: Ctrl+Alt+M.",
      "Extraer constante: Ctrl+Alt+C.",
      "Tests primero, refactor después."
     ],
     "c": "// Después de refactorizar el ejemplo anterior\nprivate static final double DESCUENTO_SOCIO = 0.10;\nprivate static final double IVA = 0.21;\nprivate static final double SUPLEMENTO_VIP = 50;\n\npublic double calcularTotal(Pedido pedido) {\n    double total = pedido.getPrecio() * pedido.getCantidad();\n    if (pedido.esSocio()) total = aplicarDescuento(total, DESCUENTO_SOCIO);\n    if (pedido.incluyeIva()) total = total * (1 + IVA);\n    if (pedido.esVip()) total = total + SUPLEMENTO_VIP;\n    return total;\n}\n\nprivate double aplicarDescuento(double importe, double porcentaje) {\n    return importe * (1 - porcentaje);\n}",
     "v": 0,
     "tip": "hacedlo en pasos pequeños y ejecutad los tests después de cada uno."
    },
    {
     "n": "5.3",
     "t": "Principios de diseño",
     "m": "6 min",
     "b": [
      "Algunos principios guían el código de calidad. DRY (Don't Repeat Yourself): no repitas lógica. KISS (Keep It Simple): la solución más simple que funcione. YAGNI (You Aren't Gonna Need It): no programes lo que todavía no necesitas.",
      "SOLID son cinco principios de diseño orientado a objetos: una responsabilidad por clase (S), abierto a extensión y cerrado a modificación (O), las subclases deben poder sustituir a la clase padre (L), interfaces pequeñas y específicas (I) y depender de abstracciones, no de clases concretas (D)."
     ],
     "k": [
      "DRY: no repetir.",
      "KISS: simple.",
      "YAGNI: solo lo necesario.",
      "SOLID: cinco principios de diseño orientado a objetos."
     ],
     "c": "S  Single responsibility   Una clase, una razón para cambiar\n                            (Pedido no debería enviar correos)\nO  Open / closed            Añadir comportamiento sin modificar lo que funciona\n                            (nueva clase EntradaVip en lugar de otro if)\nL  Liskov substitution      Una subclase debe poder usarse donde se espera el padre\nI  Interface segregation    Varias interfaces pequeñas mejor que una enorme\nD  Dependency inversion     Depender de interfaces, no de implementaciones\n                            (PedidoServicio usa PedidoRepositorio, no PostgresPedidoDAO)",
     "v": 0,
     "tip": "SOLID aparece en casi todas las entrevistas para puestos de backend."
    },
    {
     "n": "5.4",
     "t": "Análisis estático y estilo",
     "m": "4 min",
     "b": [
      "Las herramientas de análisis estático revisan el código sin ejecutarlo y detectan errores probables, vulnerabilidades, código duplicado y malas prácticas. SonarLint funciona como extensión del IDE y avisa mientras escribes; SonarQube analiza proyectos completos; ESLint hace lo mismo para JavaScript y PHPStan para PHP.",
      "Los formateadores (el del IDE, Prettier, Checkstyle con la guía de estilo de Google) aplican un estilo uniforme, lo que evita discusiones y conflictos de Git por espacios o llaves."
     ],
     "k": [
      "SonarLint en el IDE: avisos en tiempo real.",
      "ESLint (JS), PHPStan (PHP), Checkstyle (Java).",
      "Formatear automáticamente al guardar.",
      "Estilo común acordado en el equipo."
     ],
     "c": "# Herramientas por lenguaje\nJava        SonarLint · Checkstyle · SpotBugs · formateador de IntelliJ\nJavaScript  ESLint · Prettier\nPHP         PHPStan · PHP-CS-Fixer\nProyecto    SonarQube / SonarCloud (informes y deuda técnica)",
     "v": 0,
     "tip": "instalad SonarLint hoy mismo: aprenderéis buenas prácticas con cada aviso."
    }
   ]
  },
  {
   "t": "Documentación",
   "d": "Javadoc, README en Markdown y comentarios útiles.",
   "secciones": [
    {
     "n": "6.1",
     "t": "Javadoc",
     "m": "5 min",
     "b": [
      "Javadoc es la forma estándar de documentar código Java: comentarios que empiezan por /** antes de clases y métodos, con etiquetas como @param (parámetros), @return (lo que devuelve), @throws (excepciones) y @author. El IDE los muestra al pasar el ratón sobre un método y la herramienta javadoc genera con ellos una web de documentación.",
      "En JavaScript existe el equivalente JSDoc, y en PHP, PHPDoc, con una sintaxis muy parecida."
     ],
     "k": [
      "/** … */ antes de clases y métodos públicos.",
      "@param, @return, @throws.",
      "javadoc -d docs src/*.java genera HTML.",
      "Documenta qué hace y para qué, no cómo."
     ],
     "c": "/**\n * Gestiona la venta de entradas del festival.\n *\n * @author Ana García\n * @version 1.2\n */\npublic class Taquilla {\n\n    /**\n     * Calcula el precio final de una compra aplicando descuentos de grupo.\n     *\n     * @param precioUnitario precio de una entrada, sin IVA\n     * @param cantidad número de entradas (de 1 a 10)\n     * @return precio total con IVA, redondeado a dos decimales\n     * @throws IllegalArgumentException si la cantidad está fuera de rango\n     */\n    public double precioFinal(double precioUnitario, int cantidad) {\n        // …\n    }\n}",
     "v": 0,
     "a": [
      [
       "@param nombre",
       "Describe un parámetro."
      ],
      [
       "@return",
       "Qué devuelve el método."
      ],
      [
       "@throws Excepcion",
       "Cuándo lanza esa excepción."
      ],
      [
       "@author",
       "Autor."
      ],
      [
       "@version",
       "Versión."
      ],
      [
       "@see",
       "Referencia a otra clase o método."
      ],
      [
       "@deprecated",
       "Indica que no debe usarse."
      ]
     ],
     "at": "Etiquetas de Javadoc",
     "ah": [
      "Etiqueta",
      "Uso"
     ],
     "tip": "en IntelliJ, escribid /** encima de un método y pulsad Enter: genera la plantilla."
    },
    {
     "n": "6.2",
     "t": "README y Markdown",
     "m": "5 min",
     "b": [
      "El README.md es la portada de un proyecto en GitHub: explica qué es, cómo instalarlo, cómo usarlo y quién lo ha hecho. Se escribe en Markdown, un formato de texto con símbolos sencillos: # para títulos, ** para negrita, - para listas, ` para código y [texto](url) para enlaces.",
      "Un buen README es lo primero que mira un reclutador o un profesor al abrir tu repositorio, así que merece dedicarle tiempo: capturas de pantalla, instrucciones claras y la tecnología usada."
     ],
     "k": [
      "# Título · ## Sección · **negrita** · *cursiva*.",
      "- elemento de lista · 1. lista numerada.",
      "`código` y bloques con tres comillas invertidas.",
      "[enlace](url) · ![imagen](ruta.png)."
     ],
     "c": "# Festival DAW 🎸\n\nWeb del festival de música creada en la clase de DAW.\n\n## Tecnologías\n- HTML, CSS y JavaScript\n- PHP 8 y PostgreSQL\n\n## Instalación\n1. Clona el repositorio\n2. Copia `.env.example` a `.env` y rellena tus datos\n3. Arranca el servidor: `php -S localhost:8000 -t public`\n\n## Capturas\n![Página principal](docs/captura.png)\n\n## Autores\n- Ana García — [GitHub](https://github.com/anagarcia)",
     "v": 0,
     "tip": "un README cuidado en cada proyecto convierte vuestro GitHub en un portfolio."
    },
    {
     "n": "6.3",
     "t": "Comentarios que ayudan",
     "m": "4 min",
     "b": [
      "El mejor código se explica solo con buenos nombres; los comentarios deben explicar el porqué de una decisión, no repetir lo que el código ya dice. Un comentario desactualizado es peor que ninguno, porque engaña.",
      "Son útiles para explicar decisiones no evidentes, advertir de efectos secundarios, enlazar con una incidencia o documentación externa, y marcar tareas pendientes con TODO (que los IDE listan automáticamente)."
     ],
     "k": [
      "Comenta el porqué, no el qué.",
      "Buenos nombres > comentarios.",
      "Borra el código comentado: para eso está Git.",
      "TODO y FIXME para pendientes."
     ],
     "c": "// Mal: repite lo que dice el código\ni++;  // incrementa i\n\n// Bien: explica una decisión\n// Redondeamos a céntimos antes de comparar porque los importes\n// vienen del TPV con más decimales de los que guarda la base de datos.\ndouble importe = Math.round(importeTpv * 100) / 100.0;\n\n// TODO: mover el cálculo del IVA al servicio de facturación (#42)",
     "v": 0,
     "tip": "si un bloque de código está comentado «por si acaso», borradlo: Git lo guarda."
    }
   ]
  },
  {
   "t": "Construcción y dependencias",
   "d": "Maven, Gradle y el ciclo de vida de un proyecto.",
   "secciones": [
    {
     "n": "7.1",
     "t": "Maven",
     "m": "6 min",
     "b": [
      "Maven es la herramienta de construcción más usada en Java. Define el proyecto en un archivo pom.xml (en XML) con sus datos, sus dependencias (librerías como JUnit o el driver de PostgreSQL) y cómo construirlo. Maven descarga automáticamente las dependencias desde el repositorio central.",
      "Impone una estructura de carpetas estándar: el código en src/main/java, los tests en src/test/java y los recursos en src/main/resources. Todos los IDE entienden un proyecto Maven al abrirlo."
     ],
     "k": [
      "pom.xml describe el proyecto y sus dependencias.",
      "Dependencias: groupId, artifactId y version.",
      "Estructura: src/main/java y src/test/java.",
      "Se buscan en mvnrepository.com."
     ],
     "c": "<project xmlns=\"http://maven.apache.org/POM/4.0.0\">\n  <modelVersion>4.0.0</modelVersion>\n  <groupId>es.daw</groupId>\n  <artifactId>festival</artifactId>\n  <version>1.0.0</version>\n\n  <properties>\n    <maven.compiler.release>21</maven.compiler.release>\n  </properties>\n\n  <dependencies>\n    <dependency>\n      <groupId>org.postgresql</groupId>\n      <artifactId>postgresql</artifactId>\n      <version>42.7.4</version>\n    </dependency>\n    <dependency>\n      <groupId>org.junit.jupiter</groupId>\n      <artifactId>junit-jupiter</artifactId>\n      <version>5.11.3</version>\n      <scope>test</scope>\n    </dependency>\n  </dependencies>\n</project>",
     "v": 0,
     "tip": "scope test hace que JUnit solo se use en los tests y no se incluya en la aplicación final."
    },
    {
     "n": "7.2",
     "t": "Ciclo de vida y comandos",
     "m": "5 min",
     "b": [
      "Maven construye el proyecto en fases ordenadas: validate, compile (compilar), test (ejecutar los tests), package (crear el .jar o .war), verify, install (copiarlo al repositorio local) y deploy. Al pedir una fase, se ejecutan también todas las anteriores: mvn package compila, prueba y empaqueta.",
      "Gradle es la alternativa moderna, con archivos de configuración en Groovy o Kotlin en lugar de XML; es el estándar en Android. En JavaScript, npm con package.json cumple el mismo papel."
     ],
     "k": [
      "mvn compile → compilar.",
      "mvn test → compilar y ejecutar tests.",
      "mvn package → genera el .jar en target/.",
      "mvn clean → borra target/."
     ],
     "c": "$ mvn clean           # borra la carpeta target\n$ mvn compile         # compila\n$ mvn test            # compila y ejecuta los tests\n$ mvn package         # compila, prueba y crea target/festival-1.0.0.jar\n$ java -jar target/festival-1.0.0.jar\n\n# Gradle (equivalentes)\n$ ./gradlew build\n$ ./gradlew test",
     "v": 0,
     "o": "[INFO] -------------------------------------------------------\n[INFO]  T E S T S\n[INFO] -------------------------------------------------------\n[INFO] Running CalculadoraTest\n[INFO] Tests run: 2, Failures: 0, Errors: 0, Skipped: 0\n[INFO] Building jar: /home/ana/festival/target/festival-1.0.0.jar\n[INFO] BUILD SUCCESS",
     "a": [
      [
       "Java + Maven",
       "pom.xml · mvn package"
      ],
      [
       "Java + Gradle",
       "build.gradle · ./gradlew build"
      ],
      [
       "JavaScript",
       "package.json · npm install / npm run build"
      ],
      [
       "PHP",
       "composer.json · composer install"
      ],
      [
       "Python",
       "requirements.txt o pyproject.toml · pip install"
      ]
     ],
     "at": "Herramientas equivalentes por lenguaje",
     "ah": [
      "Ecosistema",
      "Archivo y comando"
     ],
     "tip": "si mvn package falla por un test, el .jar no se genera: los tests protegen la entrega."
    }
   ]
  },
  {
   "t": "Diagramas UML",
   "d": "Qué es UML, diagramas de clases, relaciones, casos de uso, secuencia y actividad.",
   "secciones": [
    {
     "n": "8.1",
     "t": "¿Qué es UML?",
     "m": "4 min",
     "b": [
      "UML (Unified Modeling Language) es un lenguaje gráfico estándar para diseñar y documentar sistemas de software. Permite pensar la estructura de una aplicación antes de programarla y comunicarla a otras personas con una notación que todo el mundo entiende.",
      "Hay diagramas estructurales, que muestran cómo está organizado el sistema (de clases, de objetos, de componentes, de despliegue), y de comportamiento, que muestran cómo funciona (de casos de uso, de secuencia, de actividad, de estados)."
     ],
     "k": [
      "UML = notación estándar para modelar software.",
      "Estructurales: clases, componentes, despliegue.",
      "Comportamiento: casos de uso, secuencia, actividad.",
      "Herramientas: draw.io, PlantUML, StarUML, Mermaid."
     ],
     "c": "Diagramas UML más usados\n├── Estructurales\n│   ├── Clases           ← el más importante\n│   ├── Objetos\n│   ├── Componentes\n│   └── Despliegue\n└── Comportamiento\n    ├── Casos de uso\n    ├── Secuencia\n    ├── Actividad\n    └── Estados",
     "v": 0,
     "tip": "draw.io (app.diagrams.net) es gratuito y tiene todas las formas de UML."
    },
    {
     "n": "8.2",
     "t": "Diagrama de clases",
     "m": "6 min",
     "b": [
      "El diagrama de clases muestra las clases del sistema con sus atributos y métodos, y las relaciones entre ellas. Cada clase es una caja dividida en tres partes: nombre, atributos y métodos. La visibilidad se indica con un símbolo: + público, - privado, # protegido, ~ de paquete.",
      "Los atributos se escriben como nombre: Tipo y los métodos como nombre(parámetros): TipoRetorno. Las clases abstractas van en cursiva o con «abstract» y las interfaces con «interface»."
     ],
     "k": [
      "Caja: nombre / atributos / métodos.",
      "+ público · - privado · # protegido.",
      "atributo: Tipo · metodo(p: Tipo): Retorno.",
      "Subrayado = static."
     ],
     "c": "┌───────────────────────────┐\n│          Entrada          │\n├───────────────────────────┤\n│ - id: int                 │\n│ - tipo: String            │\n│ - precio: double          │\n│ - contador: int {static}  │\n├───────────────────────────┤\n│ + Entrada(tipo, precio)   │\n│ + getPrecio(): double     │\n│ + precioConIva(): double  │\n│ - validar(): boolean      │\n└───────────────────────────┘\n\n// PlantUML (texto que genera el diagrama)\nclass Entrada {\n  - id: int\n  - precio: double\n  + precioConIva(): double\n}",
     "v": 0,
     "a": [
      [
       "+",
       "public"
      ],
      [
       "-",
       "private"
      ],
      [
       "#",
       "protected"
      ],
      [
       "~",
       "package (sin modificador)"
      ],
      [
       "subrayado",
       "static"
      ],
      [
       "cursiva",
       "abstract"
      ]
     ],
     "at": "Notación de visibilidad",
     "ah": [
      "Símbolo",
      "Significado"
     ],
     "tip": "PlantUML y Mermaid generan diagramas a partir de texto, y se pueden guardar en Git."
    },
    {
     "n": "8.3",
     "t": "Relaciones entre clases",
     "m": "6 min",
     "b": [
      "La herencia (generalización) se dibuja con una flecha de punta triangular hueca hacia la clase padre. La implementación de una interfaz, igual pero con línea discontinua. La asociación es una línea simple que indica que una clase conoce a otra, con su multiplicidad en los extremos (1, 0..1, *, 1..*).",
      "La agregación (rombo hueco) indica una relación «tiene un» en la que las partes pueden existir solas (un equipo tiene jugadores). La composición (rombo relleno) es una relación más fuerte: las partes no existen sin el todo (un pedido tiene líneas de pedido; si se borra el pedido, se borran sus líneas). La dependencia (flecha discontinua) indica que una clase usa a otra temporalmente."
     ],
     "k": [
      "Herencia: ──▷ (triángulo hueco).",
      "Implementación: - - ▷.",
      "Agregación ◇: las partes existen solas.",
      "Composición ◆: las partes dependen del todo."
     ],
     "c": "Persona ◁──── Cliente                 Herencia: Cliente es una Persona\nPagable ◁- - - Factura                 Implementación de interfaz\nCliente 1 ──────── * Pedido            Asociación: un cliente, muchos pedidos\nPedido ◆──────── 1..* LineaPedido      Composición: sin pedido no hay líneas\nFestival ◇──────── * Artista           Agregación: el artista existe sin el festival\nTaquilla - - - -> Impresora            Dependencia: la usa puntualmente",
     "v": 0,
     "a": [
      [
       "1",
       "Exactamente uno."
      ],
      [
       "0..1",
       "Cero o uno."
      ],
      [
       "* o 0..*",
       "Cero o más."
      ],
      [
       "1..*",
       "Uno o más."
      ],
      [
       "2..5",
       "Entre dos y cinco."
      ]
     ],
     "at": "Multiplicidad",
     "ah": [
      "Notación",
      "Significado"
     ],
     "q": {
      "t": "Si al borrar un Pedido deben borrarse sus Líneas, ¿qué relación es?",
      "o": [
       "Asociación",
       "Agregación",
       "Composición",
       "Dependencia"
      ],
      "ok": 2,
      "why": "En la composición las partes no existen sin el todo."
     },
     "tip": "la multiplicidad del diagrama de clases se traduce directamente en las claves foráneas de la base de datos."
    },
    {
     "n": "8.4",
     "t": "Casos de uso",
     "m": "5 min",
     "b": [
      "El diagrama de casos de uso muestra qué puede hacer cada tipo de usuario con el sistema, desde su punto de vista. Los actores (monigotes) son los roles que interactúan con el sistema (cliente, administrador, pasarela de pago); los casos de uso (óvalos) son las funcionalidades; y un rectángulo delimita el sistema.",
      "Las relaciones «include» indican que un caso de uso siempre incluye a otro (comprar incluye pagar) y «extend» que lo amplía opcionalmente (aplicar cupón amplía comprar). Es el primer diagrama que se hace al analizar los requisitos."
     ],
     "k": [
      "Actor: rol que usa el sistema.",
      "Caso de uso: funcionalidad (verbo + objeto).",
      "«include»: siempre se ejecuta.",
      "«extend»: se ejecuta opcionalmente."
     ],
     "c": "                ┌────────────── Sistema: Taquilla del festival ──────────────┐\n                │                                                             │\n   Cliente ─────┼──── ( Consultar cartel )                                    │\n     웃  ───────┼──── ( Comprar entradas ) ── «include» ──► ( Pagar ) ────────┼──── Pasarela\n                │            ▲                                                │      de pago\n                │            └──── «extend» ──── ( Aplicar cupón )            │\n                │                                                             │\n Administrador ─┼──── ( Gestionar artistas )                                  │\n     웃  ───────┼──── ( Ver informe de ventas )                               │\n                └─────────────────────────────────────────────────────────────┘",
     "v": 0,
     "tip": "nombrad los casos de uso con un verbo en infinitivo: Comprar entradas, Ver informe."
    },
    {
     "n": "8.5",
     "t": "Diagramas de secuencia y de actividad",
     "m": "5 min",
     "b": [
      "El diagrama de secuencia muestra cómo colaboran los objetos a lo largo del tiempo para realizar una operación: cada participante tiene una línea de vida vertical y los mensajes (llamadas) se dibujan como flechas horizontales en el orden en que ocurren. Es muy útil para entender un flujo complejo, como un login o una compra.",
      "El diagrama de actividad es parecido a un diagrama de flujo: muestra los pasos de un proceso, las decisiones (rombos) y las actividades que ocurren en paralelo."
     ],
     "k": [
      "Secuencia: participantes, líneas de vida y mensajes en orden.",
      "Flechas continuas = llamadas; discontinuas = respuestas.",
      "Actividad: pasos, decisiones y paralelismo.",
      "Mermaid permite escribirlos en Markdown."
     ],
     "c": "Cliente      Web          API              BaseDatos\n   │  comprar()  │             │                   │\n   │────────────►│ POST /compra│                   │\n   │             │────────────►│ INSERT pedido     │\n   │             │             │──────────────────►│\n   │             │             │◄ - - - - id 1024 -│\n   │             │◄ - 201 - - -│                   │\n   │◄ - ticket - │             │                   │\n\n// Mermaid (se renderiza en GitHub)\nsequenceDiagram\n  Cliente->>Web: comprar()\n  Web->>API: POST /compra\n  API->>BaseDatos: INSERT pedido\n  BaseDatos-->>API: id 1024\n  API-->>Web: 201 Created\n  Web-->>Cliente: ticket",
     "v": 0,
     "tip": "GitHub muestra los diagramas Mermaid de los README como imágenes."
    }
   ]
  }
 ],
 "chuleta": [
  [
   "Breakpoint",
   "Pausa la ejecución en una línea al depurar. Clic en el margen.",
   "● línea 12 → Debug",
   "IDE y depuración"
  ],
  [
   "Step Over / Into / Out",
   "Siguiente línea / entrar en el método / salir del método.",
   "IntelliJ: F8 / F7 / Shift+F8 · VS Code: F10 / F11 / Shift+F11",
   "IDE y depuración"
  ],
  [
   "Resume",
   "Continuar hasta el siguiente breakpoint.",
   "IntelliJ F9 · VS Code F5",
   "IDE y depuración"
  ],
  [
   "Watch / Evaluate",
   "Vigilar una expresión o evaluarla en el punto de pausa.",
   "notas.length - i",
   "IDE y depuración"
  ],
  [
   "debugger",
   "Pausa el JavaScript si las DevTools están abiertas.",
   "debugger;",
   "IDE y depuración"
  ],
  [
   "Shift Shift / Ctrl+P",
   "Buscar cualquier archivo o clase.",
   "IntelliJ: Shift Shift · VS Code: Ctrl+P",
   "IDE y depuración"
  ],
  [
   "Alt+Enter / Ctrl+.",
   "Acciones rápidas para corregir errores.",
   "IntelliJ: Alt+Enter",
   "IDE y depuración"
  ],
  [
   "Renombrar",
   "Cambia un nombre en todo el proyecto de forma segura.",
   "IntelliJ: Shift+F6 · VS Code: F2",
   "IDE y depuración"
  ],
  [
   "Unitaria / integración / sistema / aceptación",
   "Niveles de prueba, de una pieza aislada al sistema completo.",
   "Pirámide: muchas unitarias, pocas end-to-end",
   "Pruebas"
  ],
  [
   "Caja negra / caja blanca",
   "Probar por entradas y salidas / diseñar casos mirando el código.",
   "Cobertura = % de código ejecutado por los tests",
   "Pruebas"
  ],
  [
   "Particiones de equivalencia",
   "Un caso por cada grupo de valores con el mismo comportamiento.",
   "nota < 0 · 0–4.99 · 5–8.99 · 9–10 · > 10",
   "Pruebas"
  ],
  [
   "Valores límite",
   "Probar en cada borde y justo fuera.",
   "4.99 · 5 · 8.99 · 9",
   "Pruebas"
  ],
  [
   "AAA",
   "Estructura de un test: Arrange, Act, Assert.",
   "preparar → ejecutar → comprobar",
   "Pruebas"
  ],
  [
   "@Test",
   "Marca un método de prueba.",
   "@Test void calculaElIva() { … }",
   "JUnit 5"
  ],
  [
   "assertEquals(esperado, real)",
   "Comprueba que dos valores son iguales (delta para decimales).",
   "assertEquals(121.0, c.precioConIva(100), 0.001);",
   "JUnit 5"
  ],
  [
   "assertThrows",
   "Comprueba que se lanza una excepción.",
   "assertThrows(IllegalArgumentException.class, () -> c.precio(-1));",
   "JUnit 5"
  ],
  [
   "assertTrue / assertFalse / assertNull",
   "Comprobar condiciones y nulos.",
   "assertTrue(lista.isEmpty());",
   "JUnit 5"
  ],
  [
   "assertAll",
   "Agrupa varias aserciones y muestra todos los fallos.",
   "assertAll(() -> assertEquals(…), () -> assertTrue(…));",
   "JUnit 5"
  ],
  [
   "@BeforeEach / @AfterEach",
   "Preparar y limpiar antes y después de cada test.",
   "@BeforeEach void preparar() { inv = new Inventario(); }",
   "JUnit 5"
  ],
  [
   "@ParameterizedTest + @CsvSource",
   "El mismo test con varios datos.",
   "@CsvSource({\"5, Aprobado\", \"9, Sobresaliente\"})",
   "JUnit 5"
  ],
  [
   "@DisplayName / @Disabled",
   "Nombre legible / desactivar un test.",
   "@DisplayName(\"Vender descuenta el stock\")",
   "JUnit 5"
  ],
  [
   "TDD",
   "Rojo (test que falla) → Verde (código mínimo) → Refactor.",
   "Ciclos de pocos minutos",
   "JUnit 5"
  ],
  [
   "Code smells",
   "Métodos largos, duplicados, números mágicos, malos nombres.",
   "0.9 → DESCUENTO_SOCIO",
   "Calidad y documentación"
  ],
  [
   "Extraer método / constante",
   "Refactorizaciones habituales del IDE.",
   "IntelliJ: Ctrl+Alt+M / Ctrl+Alt+C",
   "Calidad y documentación"
  ],
  [
   "DRY · KISS · YAGNI",
   "No repetir · mantenerlo simple · no programar lo que no hace falta.",
   "—",
   "Calidad y documentación"
  ],
  [
   "SOLID",
   "Responsabilidad única, abierto/cerrado, Liskov, segregación de interfaces, inversión de dependencias.",
   "—",
   "Calidad y documentación"
  ],
  [
   "SonarLint / ESLint",
   "Análisis estático en el editor.",
   "Extensión del IDE",
   "Calidad y documentación"
  ],
  [
   "/** Javadoc */",
   "Documentar clases y métodos con @param, @return, @throws.",
   "/** @param precio sin IVA @return total con IVA */",
   "Calidad y documentación"
  ],
  [
   "README.md",
   "Portada del proyecto en Markdown.",
   "# Proyecto\n## Instalación",
   "Calidad y documentación"
  ],
  [
   "pom.xml",
   "Proyecto Maven: datos, dependencias y plugins.",
   "<dependency><groupId>…</groupId></dependency>",
   "Construcción"
  ],
  [
   "mvn test / package",
   "Ejecutar tests / generar el .jar en target/.",
   "mvn clean package",
   "Construcción"
  ],
  [
   "./gradlew build",
   "Construir con Gradle.",
   "./gradlew test",
   "Construcción"
  ],
  [
   "Diagrama de clases",
   "Clases con atributos y métodos. + público, - privado, # protegido.",
   "- precio: double · + total(): double",
   "UML"
  ],
  [
   "Herencia ──▷ / Implementación - -▷",
   "Generalización y realización de interfaces.",
   "Cliente ──▷ Persona",
   "UML"
  ],
  [
   "Agregación ◇ / Composición ◆",
   "Partes independientes / partes que dependen del todo.",
   "Pedido ◆── LineaPedido",
   "UML"
  ],
  [
   "Multiplicidad",
   "1 · 0..1 · * · 1..*",
   "Cliente 1 ── * Pedido",
   "UML"
  ],
  [
   "Casos de uso",
   "Actores, funcionalidades, «include» y «extend».",
   "Cliente → (Comprar entradas)",
   "UML"
  ],
  [
   "Diagrama de secuencia",
   "Mensajes entre objetos en el tiempo.",
   "Cliente->>API: POST /compra",
   "UML"
  ]
 ],
 "retos": [
  {
   "t": "¿Qué control del depurador entra dentro del método de la línea actual?",
   "o": [
    "Step Over",
    "Step Into",
    "Step Out",
    "Resume"
   ],
   "ok": 1,
   "why": "Step Into entra en el método; Step Over lo ejecuta sin entrar."
  },
  {
   "t": "¿Qué tipo de prueba comprueba una clase aislada?",
   "o": [
    "De sistema",
    "Unitaria",
    "De aceptación",
    "De carga"
   ],
   "ok": 1,
   "why": "Las pruebas unitarias prueban una pieza por separado."
  },
  {
   "t": "¿Qué aserción comprueba que se lanza una excepción?",
   "o": [
    "assertEquals",
    "assertThrows",
    "assertNull",
    "assertAll"
   ],
   "ok": 1,
   "why": "assertThrows(Tipo.class, () -> código)."
  },
  {
   "t": "En TDD, ¿qué se escribe primero?",
   "o": [
    "El código",
    "Un test que falla",
    "La documentación",
    "El diagrama UML"
   ],
   "ok": 1,
   "why": "El ciclo es rojo → verde → refactor."
  },
  {
   "t": "En un diagrama de clases, ¿qué significa el símbolo -?",
   "o": [
    "public",
    "private",
    "protected",
    "static"
   ],
   "ok": 1,
   "why": "- private, + public, # protected."
  },
  {
   "t": "¿Qué relación UML usarías entre Pedido y LineaPedido?",
   "o": [
    "Herencia",
    "Composición",
    "Dependencia",
    "Implementación"
   ],
   "ok": 1,
   "why": "Las líneas no existen sin su pedido: composición."
  },
  {
   "t": "¿Qué comando de Maven compila, ejecuta los tests y genera el .jar?",
   "o": [
    "mvn compile",
    "mvn package",
    "mvn clean",
    "mvn run"
   ],
   "ok": 1,
   "why": "package ejecuta también las fases anteriores."
  }
 ]
};
