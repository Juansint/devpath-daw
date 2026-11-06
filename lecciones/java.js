window.LECCIONES = window.LECCIONES || {};
LECCIONES["java"] = {
 "lang": "java",
 "capitulos": [
  {
   "t": "Fundamentos",
   "d": "JDK y JVM, estructura de un programa, variables, tipos y operadores.",
   "secciones": [
    {
     "n": "1.1",
     "t": "¿Qué es Java? JDK, JVM y compilación",
     "m": "5 min",
     "b": [
      "Java es un lenguaje orientado a objetos, de tipado estático y multiplataforma. El código fuente (.java) se compila con javac a bytecode (.class), y ese bytecode lo ejecuta la Máquina Virtual de Java (JVM) en cualquier sistema operativo: «escribe una vez, ejecuta en cualquier parte».",
      "Para programar necesitas el JDK (Java Development Kit), que incluye el compilador y la JVM. Los IDE más usados son IntelliJ IDEA, Eclipse, NetBeans y VS Code con la extensión de Java; compilan y ejecutan con un botón, pero conviene saber hacerlo desde la terminal."
     ],
     "k": [
      ".java → javac → .class (bytecode) → JVM.",
      "JDK = herramientas para programar; JRE/JVM = para ejecutar.",
      "java -version y javac -version comprueban la instalación.",
      "Tipado estático: cada variable tiene un tipo fijo."
     ],
     "c": "// Archivo: Hola.java (el nombre debe coincidir con la clase pública)\npublic class Hola {\n    public static void main(String[] args) {\n        System.out.println(\"Hola, DAW\");\n    }\n}\n\n// Terminal\n// javac Hola.java      → genera Hola.class\n// java Hola            → ejecuta el programa",
     "o": "Hola, DAW",
     "a": [
      [
       "JDK",
       "Kit de desarrollo: compilador javac, JVM y herramientas."
      ],
      [
       "JVM",
       "Máquina virtual que ejecuta el bytecode."
      ],
      [
       "javac",
       "Compila .java a .class."
      ],
      [
       "java",
       "Ejecuta una clase con main."
      ],
      [
       "Bytecode",
       "Código intermedio independiente del sistema operativo."
      ]
     ],
     "at": "Vocabulario",
     "ah": [
      "Término",
      "Qué es"
     ],
     "e": "que el nombre del archivo no coincida con la clase pública: «class Hola is public, should be declared in a file named Hola.java».",
     "tip": "usad un JDK LTS (21 o 25) para tener todas las novedades del lenguaje."
    },
    {
     "n": "1.2",
     "t": "Estructura de un programa",
     "m": "4 min",
     "b": [
      "Todo código Java vive dentro de una clase. El punto de entrada es el método public static void main(String[] args): la JVM empieza a ejecutar por ahí. Las instrucciones terminan en punto y coma y los bloques se delimitan con llaves.",
      "System.out.println escribe una línea en la consola y System.out.print escribe sin saltar de línea. Las clases se organizan en paquetes (package) y se usan clases de otros paquetes con import."
     ],
     "k": [
      "public static void main(String[] args) es el punto de entrada.",
      "Instrucciones con ; y bloques con { }.",
      "println salta de línea; print no.",
      "Java distingue mayúsculas: String no es string."
     ],
     "c": "package es.daw.festival;\n\nimport java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        System.out.print(\"Festival \");\n        System.out.println(\"DAW\");\n        System.out.println(\"Edición \" + 2026);\n        // Comentario de una línea\n        /* Comentario\n           de varias líneas */\n    }\n}",
     "o": "Festival DAW\nEdición 2026",
     "tip": "en IntelliJ, escribid psvm y pulsad Tab para generar el main; sout genera System.out.println."
    },
    {
     "n": "1.3",
     "t": "Variables y tipos primitivos",
     "m": "6 min",
     "b": [
      "En Java hay que declarar el tipo de cada variable. Los tipos primitivos guardan valores simples: int (enteros), double (decimales), boolean (true/false), char (un carácter entre comillas simples) y long, float, short y byte para casos concretos. String no es primitivo: es una clase, y sus valores van entre comillas dobles.",
      "final declara una constante, que por convención se escribe en MAYÚSCULAS. Desde Java 10, var permite que el compilador deduzca el tipo de una variable local a partir de su valor, pero el tipo sigue siendo fijo."
     ],
     "k": [
      "int edad = 20; double precio = 39.5; boolean vip = true;",
      "char letra = 'A'; String nombre = \"Ana\";",
      "final double IVA = 0.21; → constante.",
      "var total = 10; → el compilador deduce int."
     ],
     "c": "public class Tipos {\n    public static void main(String[] args) {\n        int entradas = 3;\n        double precio = 39.90;\n        boolean esVip = false;\n        char fila = 'B';\n        String nombre = \"Ana\";\n        final double IVA = 0.21;\n        var total = entradas * precio;\n\n        System.out.println(nombre + \" compra \" + entradas + \" entradas en la fila \" + fila);\n        System.out.println(\"Total con IVA: \" + total * (1 + IVA));\n        System.out.println(\"¿VIP? \" + esVip);\n    }\n}",
     "o": "Ana compra 3 entradas en la fila B\nTotal con IVA: 144.837\n¿VIP? false",
     "a": [
      [
       "int",
       "Entero de 32 bits (±2.147 millones)."
      ],
      [
       "long",
       "Entero de 64 bits. Literal con L: 3000000000L."
      ],
      [
       "double",
       "Decimal de doble precisión."
      ],
      [
       "float",
       "Decimal de precisión simple. Literal con f: 1.5f."
      ],
      [
       "boolean",
       "true o false."
      ],
      [
       "char",
       "Un carácter: 'A'."
      ],
      [
       "byte / short",
       "Enteros pequeños."
      ],
      [
       "String",
       "Texto (clase, no primitivo)."
      ]
     ],
     "at": "Tipos de datos",
     "ah": [
      "Tipo",
      "Qué guarda"
     ],
     "tip": "con double a veces salen decimales raros (0.1 + 0.2 = 0.30000000000000004); para mostrar precios usad printf(\"%.2f\")."
    },
    {
     "n": "1.4",
     "t": "Operadores y conversión de tipos",
     "m": "5 min",
     "b": [
      "Los operadores aritméticos son + - * / y % (resto). Ojo: dividir dos int da un int, sin decimales (7 / 2 es 3). Si al menos uno es double, el resultado es double (7 / 2.0 es 3.5). ++ y -- suman o restan uno.",
      "La conversión de un tipo pequeño a uno grande es automática (int a double). Al revés hay que hacer un casting explícito, (int) 3.99, que trunca los decimales. Para convertir texto a número se usa Integer.parseInt(\"42\") o Double.parseDouble(\"3.5\"), y String.valueOf para lo contrario."
     ],
     "k": [
      "7 / 2 = 3 (división entera); 7 / 2.0 = 3.5.",
      "(int) 3.99 = 3: el casting trunca.",
      "Integer.parseInt(\"42\") convierte texto a int.",
      "Para comparar Strings usa equals, nunca ==."
     ],
     "c": "public class Operadores {\n    public static void main(String[] args) {\n        System.out.println(7 / 2);\n        System.out.println(7 / 2.0);\n        System.out.println(7 % 2);\n        int n = 5;\n        n++;\n        n += 10;\n        System.out.println(n);\n        double media = 7.8;\n        int redondeo = (int) media;\n        System.out.println(redondeo);\n        int edad = Integer.parseInt(\"19\");\n        System.out.println(edad + 1);\n        System.out.println(edad >= 18 && edad < 65);\n    }\n}",
     "o": "3\n3.5\n1\n16\n7\n20\ntrue",
     "q": {
      "t": "¿Cuánto vale (double) 5 / 2?",
      "o": [
       "2",
       "2.5",
       "2.0",
       "Error"
      ],
      "ok": 1,
      "why": "El casting convierte 5 en 5.0 antes de dividir, así que la división es decimal."
     },
     "tip": "si una media os sale sin decimales, revisad si estáis dividiendo dos int."
    }
   ]
  },
  {
   "t": "Entrada, salida y control de flujo",
   "d": "Scanner, printf, condiciones, switch y bucles.",
   "secciones": [
    {
     "n": "2.1",
     "t": "Leer datos con Scanner",
     "m": "5 min",
     "b": [
      "La clase Scanner lee datos del teclado. Se crea con new Scanner(System.in) y tiene métodos para cada tipo: nextInt(), nextDouble(), nextLine() para una línea completa y next() para una sola palabra.",
      "Un problema clásico: nextInt() lee el número pero deja el salto de línea en el buffer, así que el siguiente nextLine() devuelve una cadena vacía. La solución es llamar a un nextLine() extra después de leer un número, o leer siempre con nextLine() y convertir."
     ],
     "k": [
      "Scanner sc = new Scanner(System.in);",
      "nextInt(), nextDouble(), nextLine().",
      "Tras nextInt(), un sc.nextLine() limpia el salto de línea.",
      "Cierra el Scanner al terminar: sc.close()."
     ],
     "c": "import java.util.Scanner;\n\npublic class Entrada {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.print(\"¿Cuántas entradas quieres? \");\n        int cantidad = sc.nextInt();\n        sc.nextLine();                       // limpia el salto de línea\n        System.out.print(\"¿A nombre de quién? \");\n        String nombre = sc.nextLine();\n        System.out.println(nombre + \": \" + cantidad + \" entradas = \" + cantidad * 39 + \" €\");\n        sc.close();\n    }\n}",
     "o": "¿Cuántas entradas quieres? 2\n¿A nombre de quién? Ana García\nAna García: 2 entradas = 78 €",
     "e": "leer un nextLine() justo después de un nextInt() sin limpiar: el nombre queda vacío.",
     "tip": "si el usuario escribe letras en un nextInt() salta InputMismatchException; lo veréis en excepciones."
    },
    {
     "n": "2.2",
     "t": "Salida con formato: printf",
     "m": "4 min",
     "b": [
      "System.out.printf permite dar formato a la salida con marcadores: %d para enteros, %f para decimales (%.2f con dos decimales), %s para textos y %n para el salto de línea. String.format hace lo mismo pero devuelve el texto en lugar de imprimirlo.",
      "También se puede indicar el ancho de cada columna (%-10s alinea a la izquierda en 10 caracteres, %8.2f a la derecha en 8), muy útil para mostrar tablas en la consola."
     ],
     "k": [
      "%d entero, %f decimal, %s texto, %n salto de línea.",
      "%.2f → dos decimales.",
      "%-10s → texto alineado a la izquierda en 10 huecos.",
      "String.format devuelve el texto formateado."
     ],
     "c": "public class Formato {\n    public static void main(String[] args) {\n        String nombre = \"Ana\";\n        int entradas = 3;\n        double total = 119.7;\n        System.out.printf(\"%s ha comprado %d entradas%n\", nombre, entradas);\n        System.out.printf(\"Total: %.2f €%n\", total);\n        System.out.printf(\"%-10s %8s%n\", \"Tipo\", \"Precio\");\n        System.out.printf(\"%-10s %8.2f%n\", \"Día\", 39.0);\n        System.out.printf(\"%-10s %8.2f%n\", \"Abono\", 89.5);\n        String linea = String.format(\"Pedido nº %05d\", 42);\n        System.out.println(linea);\n    }\n}",
     "o": "Ana ha comprado 3 entradas\nTotal: 119,70 €\nTipo         Precio\nDía           39,00\nAbono         89,50\nPedido nº 00042",
     "a": [
      [
       "%d",
       "Entero."
      ],
      [
       "%f / %.2f",
       "Decimal / con 2 decimales."
      ],
      [
       "%s",
       "Texto."
      ],
      [
       "%c",
       "Carácter."
      ],
      [
       "%b",
       "Booleano."
      ],
      [
       "%n",
       "Salto de línea."
      ],
      [
       "%05d",
       "Entero con ceros a la izquierda hasta 5 cifras."
      ],
      [
       "%-10s",
       "Texto alineado a la izquierda en 10 caracteres."
      ]
     ],
     "at": "Marcadores de formato",
     "ah": [
      "Marcador",
      "Significado"
     ],
     "tip": "con el idioma del sistema en español, printf usa coma decimal."
    },
    {
     "n": "2.3",
     "t": "if, else y switch",
     "m": "5 min",
     "b": [
      "if evalúa una condición booleana; else if encadena condiciones y else recoge el resto. Los operadores lógicos son && (y), || (o) y ! (no). Para comparar Strings se usa equals() o equalsIgnoreCase(), porque == compara si son el mismo objeto en memoria, no su contenido.",
      "switch compara una variable con valores concretos. Desde Java 14, la forma moderna con flechas (case \"a\" -> …) no necesita break, puede agrupar valores (case 6, 7 ->) y puede devolver un valor como expresión."
     ],
     "k": [
      "if (cond) { … } else if (…) { … } else { … }",
      "Strings: texto.equals(\"si\"), nunca ==.",
      "switch con flechas: sin break y puede devolver un valor.",
      "default recoge los casos no previstos."
     ],
     "c": "public class Condiciones {\n    public static void main(String[] args) {\n        double nota = 7.5;\n        if (nota >= 9) System.out.println(\"Sobresaliente\");\n        else if (nota >= 7) System.out.println(\"Notable\");\n        else if (nota >= 5) System.out.println(\"Aprobado\");\n        else System.out.println(\"Suspenso\");\n\n        String respuesta = \"SI\";\n        System.out.println(respuesta.equalsIgnoreCase(\"si\"));\n\n        int dia = 6;\n        String tipo = switch (dia) {\n            case 1, 2, 3, 4, 5 -> \"Laborable\";\n            case 6, 7 -> \"Fin de semana\";\n            default -> \"Día no válido\";\n        };\n        System.out.println(tipo);\n    }\n}",
     "o": "Notable\ntrue\nFin de semana",
     "e": "comparar Strings con ==: a veces funciona y a veces no, según cómo se crearon. Usa equals.",
     "q": {
      "t": "¿Cómo compruebas si el String opcion vale \"salir\"?",
      "o": [
       "opcion == \"salir\"",
       "opcion.equals(\"salir\")",
       "opcion = \"salir\"",
       "opcion.compare(\"salir\")"
      ],
      "ok": 1,
      "why": "equals compara el contenido del texto."
     },
     "tip": "el switch con flechas es perfecto para los menús de consola."
    },
    {
     "n": "2.4",
     "t": "Bucles",
     "m": "6 min",
     "b": [
      "for repite un número conocido de veces; while mientras se cumpla una condición; do-while se ejecuta al menos una vez y es el bucle típico de un menú de consola que se repite hasta que el usuario elige salir. El for-each (for (tipo x : coleccion)) recorre arrays y colecciones sin índice.",
      "break sale del bucle y continue salta a la siguiente iteración. Hay que asegurarse de que la condición acaba siendo falsa para no crear un bucle infinito."
     ],
     "k": [
      "for (int i = 0; i < n; i++) { … }",
      "while (cond) { … }",
      "do { … } while (cond); → al menos una vez.",
      "for (String s : lista) { … } → recorrer sin índice."
     ],
     "c": "import java.util.Scanner;\n\npublic class Menu {\n    public static void main(String[] args) {\n        int suma = 0;\n        for (int i = 1; i <= 5; i++) suma += i;\n        System.out.println(\"Suma 1..5 = \" + suma);\n\n        String[] bandas = {\"Banda A\", \"Banda B\"};\n        for (String b : bandas) System.out.println(\"- \" + b);\n\n        Scanner sc = new Scanner(System.in);\n        int opcion;\n        do {\n            System.out.println(\"1. Comprar  2. Ver cartel  0. Salir\");\n            opcion = sc.nextInt();\n            switch (opcion) {\n                case 1 -> System.out.println(\"Comprando…\");\n                case 2 -> System.out.println(\"Cartel: Banda A, Banda B\");\n                case 0 -> System.out.println(\"¡Hasta pronto!\");\n                default -> System.out.println(\"Opción no válida\");\n            }\n        } while (opcion != 0);\n    }\n}",
     "o": "Suma 1..5 = 15\n- Banda A\n- Banda B\n1. Comprar  2. Ver cartel  0. Salir\n2\nCartel: Banda A, Banda B\n1. Comprar  2. Ver cartel  0. Salir\n0\n¡Hasta pronto!",
     "tip": "este do-while con switch es el esqueleto de los proyectos de menú por consola."
    },
    {
     "n": "2.5",
     "t": "Ventanas con JOptionPane",
     "m": "4 min",
     "b": [
      "JOptionPane (de javax.swing) muestra cuadros de diálogo sencillos sin tener que crear una interfaz completa. showMessageDialog muestra un mensaje, showInputDialog pide un texto y showConfirmDialog hace una pregunta de sí o no.",
      "showInputDialog siempre devuelve un String (o null si se pulsa Cancelar), así que para números hay que convertirlo con Integer.parseInt. Es útil para prácticas rápidas, aunque las aplicaciones reales usan JavaFX, Swing completo o una interfaz web."
     ],
     "k": [
      "showInputDialog devuelve String o null.",
      "Convierte con Integer.parseInt o Double.parseDouble.",
      "showConfirmDialog devuelve JOptionPane.YES_OPTION si pulsa Sí.",
      "Comprueba null por si pulsa Cancelar."
     ],
     "c": "import javax.swing.JOptionPane;\n\npublic class Ventanas {\n    public static void main(String[] args) {\n        String nombre = JOptionPane.showInputDialog(\"¿Cómo te llamas?\");\n        if (nombre == null) return;               // pulsó Cancelar\n        String texto = JOptionPane.showInputDialog(\"¿Cuántas entradas?\");\n        int cantidad = Integer.parseInt(texto);\n        int r = JOptionPane.showConfirmDialog(null, \"¿Confirmas \" + cantidad + \" entradas?\");\n        if (r == JOptionPane.YES_OPTION) {\n            JOptionPane.showMessageDialog(null, \"Gracias, \" + nombre + \". Total: \" + cantidad * 39 + \" €\");\n        }\n    }\n}",
     "tip": "es lo que usasteis en el proyecto de la tienda de juegos."
    }
   ]
  },
  {
   "t": "Métodos, arrays y Strings",
   "d": "Métodos con parámetros y return, sobrecarga, arrays, matrices y Strings.",
   "secciones": [
    {
     "n": "3.1",
     "t": "Métodos",
     "m": "6 min",
     "b": [
      "Un método es un bloque de código con nombre que realiza una tarea. Se declara con un tipo de retorno (o void si no devuelve nada), un nombre en camelCase y una lista de parámetros con su tipo. return devuelve el valor y termina el método.",
      "Los métodos static pertenecen a la clase y se pueden llamar desde main sin crear objetos. En Java los parámetros se pasan por valor: el método recibe una copia, así que cambiar un parámetro primitivo no afecta a la variable original."
     ],
     "k": [
      "static double calcular(int a, double b) { return …; }",
      "void = no devuelve nada.",
      "Un método = una tarea; nombre con verbo.",
      "Los primitivos se pasan por copia."
     ],
     "c": "public class Metodos {\n    static double precioConIva(double base) {\n        return base * 1.21;\n    }\n\n    static void mostrarTicket(String nombre, int cantidad) {\n        double total = precioConIva(39) * cantidad;\n        System.out.printf(\"%s: %d entradas, %.2f €%n\", nombre, cantidad, total);\n    }\n\n    static boolean esMayorDeEdad(int edad) {\n        return edad >= 18;\n    }\n\n    public static void main(String[] args) {\n        mostrarTicket(\"Ana\", 2);\n        System.out.println(esMayorDeEdad(16));\n    }\n}",
     "o": "Ana: 2 entradas, 94,38 €\nfalse",
     "tip": "si un main pasa de 30 líneas, es momento de dividirlo en métodos."
    },
    {
     "n": "3.2",
     "t": "Sobrecarga y recursividad",
     "m": "4 min",
     "b": [
      "La sobrecarga permite tener varios métodos con el mismo nombre si sus parámetros son diferentes (en número o en tipo). Java elige cuál ejecutar según los argumentos. println es un ejemplo: existe para int, double, String…",
      "Un método recursivo se llama a sí mismo con un problema más pequeño hasta llegar a un caso base que se resuelve directamente. Sin caso base, la recursión no termina y se produce un StackOverflowError."
     ],
     "k": [
      "Mismo nombre, distintos parámetros = sobrecarga.",
      "El tipo de retorno solo no basta para sobrecargar.",
      "Recursividad: caso base + llamada con un problema menor."
     ],
     "c": "public class Sobrecarga {\n    static double area(double lado) { return lado * lado; }\n    static double area(double base, double altura) { return base * altura; }\n\n    static long factorial(int n) {\n        if (n <= 1) return 1;           // caso base\n        return n * factorial(n - 1);    // llamada recursiva\n    }\n\n    public static void main(String[] args) {\n        System.out.println(area(4));\n        System.out.println(area(4, 2.5));\n        System.out.println(factorial(5));\n    }\n}",
     "o": "16.0\n10.0\n120",
     "tip": "5! = 5 × 4 × 3 × 2 × 1: seguid las llamadas en papel para entender la recursión."
    },
    {
     "n": "3.3",
     "t": "Arrays",
     "m": "6 min",
     "b": [
      "Un array guarda un número fijo de elementos del mismo tipo. Se crea indicando el tamaño (new int[5]) o con sus valores ({8, 6, 9}). Los índices van de 0 a length - 1; acceder fuera de ese rango lanza ArrayIndexOutOfBoundsException.",
      "La clase Arrays tiene utilidades: toString para imprimirlo, sort para ordenarlo, fill para rellenarlo y copyOf para copiarlo con otro tamaño. Una matriz es un array de arrays: int[][] tabla = new int[3][4]."
     ],
     "k": [
      "int[] notas = {8, 6, 9}; o new int[5];",
      "notas.length es el tamaño (sin paréntesis).",
      "Índices de 0 a length - 1.",
      "Arrays.toString(array) para imprimirlo."
     ],
     "c": "import java.util.Arrays;\n\npublic class Arrays1 {\n    public static void main(String[] args) {\n        int[] notas = {7, 4, 9, 6, 8};\n        int suma = 0;\n        for (int n : notas) suma += n;\n        System.out.println(\"Media: \" + (double) suma / notas.length);\n\n        Arrays.sort(notas);\n        System.out.println(Arrays.toString(notas));\n        System.out.println(\"Mayor: \" + notas[notas.length - 1]);\n\n        int[][] aforo = { {100, 80}, {200, 150}, {50, 50} };\n        for (int i = 0; i < aforo.length; i++) {\n            System.out.println(\"Zona \" + i + \": \" + aforo[i][1] + \"/\" + aforo[i][0]);\n        }\n    }\n}",
     "o": "Media: 6.8\n[4, 6, 7, 8, 9]\nMayor: 9\nZona 0: 80/100\nZona 1: 150/200\nZona 2: 50/50",
     "a": [
      [
       "array.length",
       "Tamaño del array."
      ],
      [
       "Arrays.toString(a)",
       "Texto [1, 2, 3]."
      ],
      [
       "Arrays.sort(a)",
       "Ordena (modifica el array)."
      ],
      [
       "Arrays.fill(a, v)",
       "Rellena con un valor."
      ],
      [
       "Arrays.copyOf(a, n)",
       "Copia con un tamaño nuevo."
      ],
      [
       "Arrays.asList(…)",
       "Convierte a lista (tamaño fijo)."
      ]
     ],
     "at": "Utilidades de arrays",
     "ah": [
      "Código",
      "Qué hace"
     ],
     "e": "recorrer con i <= array.length: el último índice no existe y lanza ArrayIndexOutOfBoundsException.",
     "tip": "si necesitáis añadir o quitar elementos, usad un ArrayList en lugar de un array."
    },
    {
     "n": "3.4",
     "t": "Strings y StringBuilder",
     "m": "5 min",
     "b": [
      "String es inmutable: sus métodos devuelven un String nuevo. Los más usados son length(), charAt(i), toUpperCase(), toLowerCase(), trim(), contains(), indexOf(), substring(inicio, fin), replace(), split() y equals().",
      "Concatenar muchas veces con + dentro de un bucle crea un objeto nuevo en cada paso. StringBuilder es una cadena modificable: append añade texto y toString devuelve el resultado, y es mucho más eficiente para construir textos largos."
     ],
     "k": [
      "texto.length() lleva paréntesis (en arrays, no).",
      "substring(0, 3) → caracteres 0, 1 y 2.",
      "split(\",\") → array de partes.",
      "StringBuilder para concatenar en bucles."
     ],
     "c": "public class Textos {\n    public static void main(String[] args) {\n        String email = \"  Ana.Garcia@Mail.com \";\n        String limpio = email.trim().toLowerCase();\n        System.out.println(limpio);\n        System.out.println(limpio.length() + \" caracteres\");\n        System.out.println(limpio.contains(\"@\"));\n        System.out.println(limpio.substring(0, limpio.indexOf(\"@\")));\n        String[] partes = \"Ana;DAW1;8.5\".split(\";\");\n        System.out.println(partes[1]);\n\n        StringBuilder sb = new StringBuilder();\n        for (int i = 1; i <= 3; i++) sb.append(\"Fila \").append(i).append(\" | \");\n        System.out.println(sb.toString());\n        System.out.println(new StringBuilder(\"hola\").reverse());\n    }\n}",
     "o": "ana.garcia@mail.com\n19 caracteres\ntrue\nana.garcia\nDAW1\nFila 1 | Fila 2 | Fila 3 | \naloh",
     "tip": "split(\";\") es como se leen las líneas de un archivo CSV."
    }
   ]
  },
  {
   "t": "Clases y objetos",
   "d": "Clases, atributos, constructores, encapsulación, static y toString.",
   "secciones": [
    {
     "n": "4.1",
     "t": "Clases y objetos",
     "m": "6 min",
     "b": [
      "Una clase es una plantilla que define qué datos (atributos) y qué comportamientos (métodos) tienen sus objetos. Un objeto es una instancia concreta de esa clase, creada con new. Cada objeto tiene sus propios valores de atributos.",
      "El constructor es un método especial con el mismo nombre que la clase y sin tipo de retorno, que se ejecuta al crear el objeto para inicializar sus atributos. this hace referencia al objeto actual y sirve para distinguir el atributo del parámetro cuando se llaman igual."
     ],
     "k": [
      "Clase = plantilla; objeto = instancia (new).",
      "Constructor: mismo nombre que la clase, sin tipo de retorno.",
      "this.nombre = nombre; distingue atributo y parámetro.",
      "Si no escribes constructor, Java crea uno vacío."
     ],
     "c": "public class Entrada {\n    String tipo;\n    double precio;\n    int cantidad;\n\n    Entrada(String tipo, double precio, int cantidad) {\n        this.tipo = tipo;\n        this.precio = precio;\n        this.cantidad = cantidad;\n    }\n\n    double total() {\n        return precio * cantidad;\n    }\n\n    public static void main(String[] args) {\n        Entrada e1 = new Entrada(\"Día\", 39, 2);\n        Entrada e2 = new Entrada(\"Abono\", 89, 1);\n        System.out.println(e1.tipo + \": \" + e1.total() + \" €\");\n        System.out.println(e2.tipo + \": \" + e2.total() + \" €\");\n    }\n}",
     "o": "Día: 78.0 €\nAbono: 89.0 €",
     "q": {
      "t": "¿Qué palabra crea un objeto a partir de una clase?",
      "o": [
       "class",
       "new",
       "this",
       "static"
      ],
      "ok": 1,
      "why": "new reserva memoria y llama al constructor."
     },
     "tip": "una clase por archivo, con el nombre en PascalCase: Entrada.java."
    },
    {
     "n": "4.2",
     "t": "Encapsulación: private, getters y setters",
     "m": "6 min",
     "b": [
      "La encapsulación consiste en ocultar los datos internos de un objeto y permitir el acceso solo a través de métodos. Los atributos se declaran private y se crean métodos públicos get (para leer) y set (para modificar), que pueden validar los datos antes de aceptarlos.",
      "Así un objeto nunca queda en un estado incorrecto: por ejemplo, el setter del precio puede rechazar valores negativos. Los modificadores de acceso son public (todos), private (solo la clase), protected (la clase, sus hijas y el paquete) y el de por defecto (solo el paquete)."
     ],
     "k": [
      "Atributos private; métodos public.",
      "getPrecio() lee; setPrecio(v) modifica y valida.",
      "Para boolean, el getter suele ser isActivo().",
      "Los IDE generan getters y setters automáticamente."
     ],
     "c": "public class Producto {\n    private String nombre;\n    private double precio;\n\n    public Producto(String nombre, double precio) {\n        this.nombre = nombre;\n        setPrecio(precio);\n    }\n\n    public String getNombre() { return nombre; }\n    public double getPrecio() { return precio; }\n\n    public void setPrecio(double precio) {\n        if (precio < 0) throw new IllegalArgumentException(\"El precio no puede ser negativo\");\n        this.precio = precio;\n    }\n\n    public static void main(String[] args) {\n        Producto p = new Producto(\"Camiseta\", 20);\n        p.setPrecio(25);\n        System.out.println(p.getNombre() + \": \" + p.getPrecio());\n        p.setPrecio(-5);\n    }\n}",
     "o": "Camiseta: 25.0\nException in thread \"main\" java.lang.IllegalArgumentException: El precio no puede ser negativo",
     "a": [
      [
       "public",
       "Accesible desde cualquier clase."
      ],
      [
       "protected",
       "La clase, sus subclases y su paquete."
      ],
      [
       "(sin modificador)",
       "Solo las clases del mismo paquete."
      ],
      [
       "private",
       "Solo dentro de la propia clase."
      ]
     ],
     "at": "Modificadores de acceso",
     "ah": [
      "Modificador",
      "Quién puede acceder"
     ],
     "tip": "en IntelliJ, Alt+Insert → Getter and Setter los genera todos."
    },
    {
     "n": "4.3",
     "t": "static y final",
     "m": "5 min",
     "b": [
      "Un atributo static pertenece a la clase, no a cada objeto: todos los objetos lo comparten. Es útil para contadores (cuántos objetos se han creado) o constantes. Un método static se llama con el nombre de la clase (Math.sqrt(9)) y no puede usar this ni atributos no estáticos.",
      "final en un atributo impide cambiarlo después de asignarlo; static final define constantes de clase. En un método impide sobrescribirlo, y en una clase impide heredar de ella (como String)."
     ],
     "k": [
      "static = de la clase, compartido por todos los objetos.",
      "Se usa con el nombre de la clase: Entrada.contador.",
      "static final double IVA = 0.21; → constante.",
      "Un método static no puede usar this."
     ],
     "c": "public class Pedido {\n    private static int contador = 0;\n    public static final double IVA = 0.21;\n\n    private final int numero;\n    private double importe;\n\n    public Pedido(double importe) {\n        contador++;\n        this.numero = contador;\n        this.importe = importe;\n    }\n\n    public double totalConIva() { return importe * (1 + IVA); }\n    public static int getContador() { return contador; }\n\n    public static void main(String[] args) {\n        Pedido a = new Pedido(100);\n        Pedido b = new Pedido(50);\n        System.out.println(\"Pedido \" + b.numero + \": \" + b.totalConIva());\n        System.out.println(\"Pedidos creados: \" + Pedido.getContador());\n    }\n}",
     "o": "Pedido 2: 60.5\nPedidos creados: 2",
     "tip": "los métodos de utilidad (cálculos sin estado) suelen ser static, como Math.max."
    },
    {
     "n": "4.4",
     "t": "toString, equals y hashCode",
     "m": "5 min",
     "b": [
      "Todas las clases heredan de Object. Si imprimes un objeto sin más, se ve algo como Entrada@1b6d3586. Sobrescribiendo toString() decides cómo se muestra como texto.",
      "equals() compara si dos objetos son iguales por su contenido (por defecto compara si son el mismo objeto, como ==). Si sobrescribes equals debes sobrescribir también hashCode(), porque lo usan HashMap y HashSet. Los IDE generan los tres automáticamente."
     ],
     "k": [
      "@Override public String toString() { … }",
      "equals compara contenido; == compara referencias.",
      "Si sobrescribes equals, sobrescribe hashCode.",
      "Objects.equals y Objects.hash ayudan a escribirlos."
     ],
     "c": "import java.util.Objects;\n\npublic class Alumno {\n    private final String dni;\n    private final String nombre;\n\n    public Alumno(String dni, String nombre) { this.dni = dni; this.nombre = nombre; }\n\n    @Override\n    public String toString() { return nombre + \" (\" + dni + \")\"; }\n\n    @Override\n    public boolean equals(Object o) {\n        if (this == o) return true;\n        if (!(o instanceof Alumno otro)) return false;\n        return dni.equals(otro.dni);\n    }\n\n    @Override\n    public int hashCode() { return Objects.hash(dni); }\n\n    public static void main(String[] args) {\n        Alumno a = new Alumno(\"123A\", \"Ana\");\n        Alumno b = new Alumno(\"123A\", \"Ana García\");\n        System.out.println(a);\n        System.out.println(a == b);\n        System.out.println(a.equals(b));\n    }\n}",
     "o": "Ana (123A)\nfalse\ntrue",
     "tip": "siempre que creéis una clase de datos, generad toString para depurar más fácilmente."
    }
   ]
  },
  {
   "t": "Herencia y polimorfismo",
   "d": "extends, super, @Override, clases abstractas e interfaces.",
   "secciones": [
    {
     "n": "5.1",
     "t": "Herencia",
     "m": "6 min",
     "b": [
      "La herencia permite crear una clase (hija o subclase) a partir de otra (padre o superclase) con extends. La hija hereda los atributos y métodos no privados del padre y puede añadir los suyos. En Java solo se puede heredar de una clase.",
      "super(…) llama al constructor del padre y debe ser la primera línea del constructor de la hija. super.metodo() llama a la versión del padre de un método. Se usa herencia cuando hay una relación «es un»: un Empleado es una Persona."
     ],
     "k": [
      "class Hija extends Padre { … }",
      "super(…) primera línea del constructor.",
      "Solo se hereda de una clase.",
      "Relación «es un»: Perro es un Animal."
     ],
     "c": "class Persona {\n    protected String nombre;\n    Persona(String nombre) { this.nombre = nombre; }\n    String presentarse() { return \"Soy \" + nombre; }\n}\n\nclass Artista extends Persona {\n    private String genero;\n    Artista(String nombre, String genero) {\n        super(nombre);\n        this.genero = genero;\n    }\n    String actuar() { return nombre + \" toca \" + genero; }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Artista a = new Artista(\"Banda A\", \"rock\");\n        System.out.println(a.presentarse());\n        System.out.println(a.actuar());\n    }\n}",
     "o": "Soy Banda A\nBanda A toca rock",
     "tip": "protected permite que las clases hijas usen el atributo directamente."
    },
    {
     "n": "5.2",
     "t": "Sobrescritura y polimorfismo",
     "m": "6 min",
     "b": [
      "Una clase hija puede sobrescribir un método del padre para cambiar su comportamiento, marcándolo con @Override (el compilador comprueba que realmente existe en el padre).",
      "El polimorfismo permite tratar objetos de distintas clases hijas como si fueran del tipo padre: en una lista de Entrada puede haber EntradaVip y EntradaDia, y al llamar a precio() cada objeto ejecuta su propia versión. Así se puede añadir un tipo nuevo sin cambiar el código que recorre la lista."
     ],
     "k": [
      "@Override marca un método sobrescrito.",
      "Una variable del tipo padre puede guardar un objeto hijo.",
      "Se ejecuta el método del objeto real, no el del tipo de la variable.",
      "instanceof comprueba el tipo real."
     ],
     "c": "import java.util.List;\n\nclass Entrada {\n    double precio() { return 39; }\n    String descripcion() { return \"Entrada general\"; }\n}\n\nclass EntradaVip extends Entrada {\n    @Override double precio() { return super.precio() * 3; }\n    @Override String descripcion() { return \"VIP con backstage\"; }\n}\n\nclass EntradaJoven extends Entrada {\n    @Override double precio() { return super.precio() * 0.8; }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        List<Entrada> entradas = List.of(new Entrada(), new EntradaVip(), new EntradaJoven());\n        double total = 0;\n        for (Entrada e : entradas) {\n            System.out.println(e.descripcion() + \": \" + e.precio());\n            total += e.precio();\n        }\n        System.out.println(\"Total: \" + total);\n    }\n}",
     "o": "Entrada general: 39.0\nVIP con backstage: 117.0\nEntrada general: 31.200000000000003\nTotal: 187.2",
     "q": {
      "t": "Si Entrada e = new EntradaVip(); ¿qué precio() se ejecuta?",
      "o": [
       "El de Entrada",
       "El de EntradaVip",
       "Da error",
       "Ninguno"
      ],
      "ok": 1,
      "why": "Se ejecuta el método del objeto real: eso es el polimorfismo."
     },
     "tip": "el polimorfismo elimina cadenas de if (tipo == …): cada clase sabe comportarse."
    },
    {
     "n": "5.3",
     "t": "Clases abstractas",
     "m": "5 min",
     "b": [
      "Una clase abstracta (abstract class) no se puede instanciar: sirve como base común para sus hijas. Puede tener métodos normales con código y métodos abstractos, que solo declaran la firma y obligan a cada hija a implementarlos.",
      "Se usa cuando varias clases comparten código pero cada una debe definir parte del comportamiento por su cuenta, como Figura con area() o Empleado con calcularSueldo()."
     ],
     "k": [
      "abstract class: no se puede hacer new.",
      "abstract double area(); → sin cuerpo.",
      "Las hijas deben implementar los métodos abstractos.",
      "Puede tener atributos, constructores y métodos con código."
     ],
     "c": "abstract class Empleado {\n    protected String nombre;\n    Empleado(String nombre) { this.nombre = nombre; }\n    abstract double sueldo();\n    String nomina() { return nombre + \": \" + sueldo() + \" €\"; }\n}\n\nclass Fijo extends Empleado {\n    Fijo(String n) { super(n); }\n    @Override double sueldo() { return 1800; }\n}\n\nclass PorHoras extends Empleado {\n    private int horas;\n    PorHoras(String n, int horas) { super(n); this.horas = horas; }\n    @Override double sueldo() { return horas * 12.5; }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Empleado[] plantilla = { new Fijo(\"Ana\"), new PorHoras(\"Luis\", 80) };\n        for (Empleado e : plantilla) System.out.println(e.nomina());\n        // new Empleado(\"X\");  // Error: Empleado es abstracta\n    }\n}",
     "o": "Ana: 1800.0 €\nLuis: 1000.0 €",
     "tip": "si nunca tiene sentido crear un objeto de la clase padre, hacedla abstracta."
    },
    {
     "n": "5.4",
     "t": "Interfaces",
     "m": "6 min",
     "b": [
      "Una interfaz define un contrato: una lista de métodos que una clase se compromete a implementar con implements. Una clase puede implementar varias interfaces (aunque solo herede de una clase), lo que permite que clases sin relación compartan un comportamiento.",
      "Desde Java 8 las interfaces pueden tener métodos default con código y métodos static. Interfaces muy usadas de la librería estándar son Comparable, Comparator, Runnable o List."
     ],
     "k": [
      "interface Pagable { double importe(); }",
      "class Factura implements Pagable, Imprimible { … }",
      "Se pueden implementar varias interfaces.",
      "Relación «puede hacer»: Pagable, Comparable, Imprimible."
     ],
     "c": "interface Pagable {\n    double importe();\n    default String recibo() { return String.format(\"Importe: %.2f €\", importe()); }\n}\n\nclass Entrada implements Pagable {\n    public double importe() { return 39; }\n}\n\nclass Parking implements Pagable {\n    private int horas;\n    Parking(int horas) { this.horas = horas; }\n    public double importe() { return horas * 2.5; }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Pagable[] carrito = { new Entrada(), new Parking(6) };\n        double total = 0;\n        for (Pagable p : carrito) {\n            System.out.println(p.recibo());\n            total += p.importe();\n        }\n        System.out.println(\"Total: \" + total);\n    }\n}",
     "o": "Importe: 39,00 €\nImporte: 15,00 €\nTotal: 54.0",
     "a": [
      [
       "Instanciable",
       "Clase abstracta: no · Interfaz: no."
      ],
      [
       "Herencia múltiple",
       "Clase abstracta: no (solo una) · Interfaz: sí (varias)."
      ],
      [
       "Atributos",
       "Clase abstracta: sí · Interfaz: solo constantes."
      ],
      [
       "Constructores",
       "Clase abstracta: sí · Interfaz: no."
      ],
      [
       "Relación",
       "Clase abstracta: «es un» · Interfaz: «puede hacer»."
      ]
     ],
     "at": "Clase abstracta frente a interfaz",
     "ah": [
      "Aspecto",
      "Comparación"
     ],
     "tip": "programad contra interfaces: List<String> lista = new ArrayList<>();"
    }
   ]
  },
  {
   "t": "Colecciones",
   "d": "ArrayList, HashMap, HashSet, recorrer colecciones y ordenarlas.",
   "secciones": [
    {
     "n": "6.1",
     "t": "ArrayList",
     "m": "6 min",
     "b": [
      "ArrayList es una lista que crece y decrece según añades o quitas elementos. Solo guarda objetos, así que para números se usan las clases envoltorio (Integer, Double); Java convierte automáticamente entre int e Integer (autoboxing).",
      "Los métodos principales: add, get(i), set(i, v), remove(i o objeto), size(), contains(), indexOf() y clear(). Se declara indicando el tipo entre <>: List<String> nombres = new ArrayList<>()."
     ],
     "k": [
      "List<String> lista = new ArrayList<>();",
      "add, get, set, remove, size, contains.",
      "Con números: List<Integer>, no List<int>.",
      "size() en listas; length en arrays; length() en Strings."
     ],
     "c": "import java.util.ArrayList;\nimport java.util.List;\n\npublic class Listas {\n    public static void main(String[] args) {\n        List<String> cartel = new ArrayList<>();\n        cartel.add(\"Banda A\");\n        cartel.add(\"Banda B\");\n        cartel.add(0, \"Cabeza de cartel\");\n        System.out.println(cartel);\n        System.out.println(cartel.get(1));\n        System.out.println(cartel.size() + \" bandas\");\n        cartel.set(2, \"Banda B (acústico)\");\n        cartel.remove(\"Banda A\");\n        System.out.println(cartel.contains(\"Banda A\"));\n        for (String b : cartel) System.out.println(\"- \" + b);\n\n        List<Integer> notas = new ArrayList<>(List.of(7, 9, 5));\n        notas.add(8);\n        System.out.println(notas);\n    }\n}",
     "o": "[Cabeza de cartel, Banda A, Banda B]\nBanda A\n3 bandas\nfalse\n- Cabeza de cartel\n- Banda B (acústico)\n[7, 9, 5, 8]",
     "a": [
      [
       "add(x) / add(i, x)",
       "Añade al final / en la posición i."
      ],
      [
       "get(i)",
       "Elemento en la posición i."
      ],
      [
       "set(i, x)",
       "Sustituye el elemento i."
      ],
      [
       "remove(i) / remove(obj)",
       "Borra por posición / por valor."
      ],
      [
       "size()",
       "Número de elementos."
      ],
      [
       "contains(x)",
       "¿Contiene x?"
      ],
      [
       "indexOf(x)",
       "Posición o -1."
      ],
      [
       "clear() / isEmpty()",
       "Vaciar / ¿está vacía?"
      ]
     ],
     "at": "Métodos de List",
     "ah": [
      "Método",
      "Qué hace"
     ],
     "e": "borrar elementos de una lista mientras la recorres con for-each: ConcurrentModificationException. Usa removeIf o un Iterator.",
     "tip": "List.of(…) crea listas inmutables; envolvedla en new ArrayList<>(…) si necesitáis modificarla."
    },
    {
     "n": "6.2",
     "t": "HashMap",
     "m": "6 min",
     "b": [
      "Un Map guarda pares clave-valor, como un diccionario: cada clave es única y da acceso a su valor. HashMap es la implementación más usada. put añade o sustituye, get obtiene el valor de una clave (o null si no existe), containsKey comprueba si existe y remove la borra.",
      "getOrDefault devuelve un valor por defecto si la clave no existe, y merge es muy cómodo para contar. Se recorre con entrySet(), keySet() o values(). Un HashMap no mantiene el orden; LinkedHashMap mantiene el de inserción y TreeMap ordena por clave."
     ],
     "k": [
      "Map<String, Integer> stock = new HashMap<>();",
      "put(clave, valor), get(clave), containsKey, remove.",
      "getOrDefault(clave, 0).",
      "Recorrer: for (var e : mapa.entrySet()) e.getKey(), e.getValue()."
     ],
     "c": "import java.util.HashMap;\nimport java.util.Map;\n\npublic class Mapas {\n    public static void main(String[] args) {\n        Map<String, Integer> stock = new HashMap<>();\n        stock.put(\"camiseta\", 40);\n        stock.put(\"gorra\", 15);\n        stock.put(\"gorra\", 12);              // sustituye\n        System.out.println(stock.get(\"gorra\"));\n        System.out.println(stock.getOrDefault(\"taza\", 0));\n        System.out.println(stock.containsKey(\"camiseta\"));\n\n        String[] ventas = {\"camiseta\", \"gorra\", \"camiseta\", \"camiseta\"};\n        Map<String, Integer> contador = new HashMap<>();\n        for (String v : ventas) contador.merge(v, 1, Integer::sum);\n\n        for (Map.Entry<String, Integer> e : contador.entrySet()) {\n            System.out.println(e.getKey() + \" vendidas: \" + e.getValue());\n        }\n    }\n}",
     "o": "12\n0\ntrue\ngorra vendidas: 1\ncamiseta vendidas: 3\n(HashMap no garantiza el orden: puede variar)",
     "tip": "un Map<String, Alumno> por DNI es perfecto para buscar rápido en vuestros proyectos."
    },
    {
     "n": "6.3",
     "t": "HashSet y otras colecciones",
     "m": "4 min",
     "b": [
      "Un Set es una colección sin elementos repetidos: si añades uno que ya existe, se ignora. HashSet es el más rápido (sin orden), LinkedHashSet mantiene el orden de inserción y TreeSet los ordena. Es ideal para eliminar duplicados o comprobar pertenencia rápidamente.",
      "Otras colecciones útiles: LinkedList (inserciones rápidas al principio), ArrayDeque (pilas y colas) y PriorityQueue (cola con prioridad). Elegir bien la colección importa para el rendimiento."
     ],
     "k": [
      "Set no admite duplicados.",
      "HashSet: sin orden. TreeSet: ordenado.",
      "add devuelve false si ya existía.",
      "new HashSet<>(lista) elimina duplicados de una lista."
     ],
     "c": "import java.util.*;\n\npublic class Conjuntos {\n    public static void main(String[] args) {\n        List<String> asistentes = List.of(\"ana\", \"luis\", \"ana\", \"sara\", \"luis\");\n        Set<String> unicos = new TreeSet<>(asistentes);\n        System.out.println(unicos);\n        System.out.println(unicos.size() + \" personas distintas\");\n        System.out.println(unicos.add(\"ana\"));\n        System.out.println(unicos.contains(\"sara\"));\n\n        Deque<String> pila = new ArrayDeque<>();\n        pila.push(\"pantalla 1\");\n        pila.push(\"pantalla 2\");\n        System.out.println(\"Volver a: \" + pila.pop());\n    }\n}",
     "o": "[ana, luis, sara]\n3 personas distintas\nfalse\ntrue\nVolver a: pantalla 2",
     "a": [
      [
       "ArrayList",
       "Lista ordenada por posición; acceso rápido por índice."
      ],
      [
       "LinkedList",
       "Lista con inserción rápida en extremos."
      ],
      [
       "HashMap",
       "Clave-valor sin orden."
      ],
      [
       "TreeMap",
       "Clave-valor ordenado por clave."
      ],
      [
       "HashSet",
       "Sin duplicados, sin orden."
      ],
      [
       "TreeSet",
       "Sin duplicados, ordenado."
      ],
      [
       "ArrayDeque",
       "Pila (push/pop) o cola (offer/poll)."
      ]
     ],
     "at": "¿Qué colección elegir?",
     "ah": [
      "Colección",
      "Úsala para"
     ],
     "tip": "en caso de duda: ArrayList para listas y HashMap para buscar por clave."
    },
    {
     "n": "6.4",
     "t": "Ordenar: Comparable y Comparator",
     "m": "6 min",
     "b": [
      "Para ordenar objetos propios, Java necesita saber cómo compararlos. Implementando Comparable<T> y su método compareTo se define el orden natural de la clase. Collections.sort(lista) o lista.sort(null) usan ese orden.",
      "Comparator permite definir otros órdenes sin tocar la clase, normalmente con lambdas: Comparator.comparing(Alumno::getNota).reversed() ordena por nota de mayor a menor, y thenComparing añade un criterio de desempate."
     ],
     "k": [
      "Comparable: orden natural dentro de la clase (compareTo).",
      "Comparator: órdenes alternativos desde fuera.",
      "Comparator.comparing(Clase::getCampo).",
      "reversed() invierte; thenComparing desempata."
     ],
     "c": "import java.util.*;\n\nrecord Alumno(String nombre, double nota) implements Comparable<Alumno> {\n    public int compareTo(Alumno o) { return nombre.compareTo(o.nombre); }\n}\n\npublic class Ordenar {\n    public static void main(String[] args) {\n        List<Alumno> lista = new ArrayList<>(List.of(\n            new Alumno(\"Luis\", 6.5), new Alumno(\"Ana\", 9.0), new Alumno(\"Sara\", 9.0)));\n\n        Collections.sort(lista);\n        System.out.println(lista.stream().map(Alumno::nombre).toList());\n\n        lista.sort(Comparator.comparing(Alumno::nota).reversed()\n                             .thenComparing(Alumno::nombre));\n        lista.forEach(a -> System.out.println(a.nombre() + \" \" + a.nota()));\n    }\n}",
     "o": "[Ana, Luis, Sara]\nAna 9.0\nSara 9.0\nLuis 6.5",
     "tip": "compareTo devuelve negativo, cero o positivo según sea menor, igual o mayor."
    }
   ]
  },
  {
   "t": "Excepciones",
   "d": "try-catch-finally, tipos de excepciones, throw, throws y excepciones propias.",
   "secciones": [
    {
     "n": "7.1",
     "t": "try, catch y finally",
     "m": "6 min",
     "b": [
      "Una excepción es un error que ocurre durante la ejecución (dividir entre cero, leer un archivo que no existe, convertir \"abc\" a número). Si no se captura, el programa se detiene y muestra la traza del error.",
      "try envuelve el código que puede fallar; cada catch captura un tipo de excepción y decide qué hacer; finally se ejecuta siempre, haya error o no, y se usa para liberar recursos. Se pueden capturar varios tipos en un mismo catch con |."
     ],
     "k": [
      "try { riesgo } catch (TipoExcepcion e) { solución } finally { siempre }",
      "Captura primero las excepciones más específicas.",
      "e.getMessage() da la descripción del error.",
      "Varios tipos: catch (IOException | SQLException e)."
     ],
     "c": "import java.util.InputMismatchException;\nimport java.util.Scanner;\n\npublic class Errores {\n    public static void main(String[] args) {\n        try {\n            int[] aforo = {100, 200};\n            System.out.println(aforo[5]);\n        } catch (ArrayIndexOutOfBoundsException e) {\n            System.out.println(\"Esa zona no existe: \" + e.getMessage());\n        }\n\n        try {\n            int n = Integer.parseInt(\"doce\");\n        } catch (NumberFormatException e) {\n            System.out.println(\"Eso no es un número\");\n        } finally {\n            System.out.println(\"Fin de la validación\");\n        }\n    }\n}",
     "o": "Esa zona no existe: Index 5 out of bounds for length 2\nEso no es un número\nFin de la validación",
     "e": "un catch (Exception e) vacío que se traga todos los errores: el programa falla en silencio y es imposible depurarlo.",
     "tip": "leed la traza de abajo arriba hasta encontrar la primera línea de vuestro código."
    },
    {
     "n": "7.2",
     "t": "Checked y unchecked",
     "m": "5 min",
     "b": [
      "Las excepciones checked (comprobadas) heredan de Exception y el compilador obliga a tratarlas: o se capturan con try-catch o se declaran con throws. Son errores esperables y externos al programa, como IOException o SQLException.",
      "Las unchecked heredan de RuntimeException y no es obligatorio tratarlas: suelen indicar errores de programación, como NullPointerException, ArithmeticException o IllegalArgumentException. Lo correcto es evitarlas con validaciones, no capturarlas."
     ],
     "k": [
      "Checked: el compilador obliga a tratarlas (IOException, SQLException).",
      "Unchecked: RuntimeException y sus hijas (NullPointerException…).",
      "Las unchecked se evitan validando, no capturando.",
      "Error (OutOfMemoryError) no se debe capturar."
     ],
     "c": "Throwable\n├── Error                      (no capturar: OutOfMemoryError, StackOverflowError)\n└── Exception                  (checked: obligatorio tratarlas)\n    ├── IOException\n    │   └── FileNotFoundException\n    ├── SQLException\n    └── RuntimeException       (unchecked)\n        ├── NullPointerException\n        ├── ArithmeticException\n        ├── IllegalArgumentException\n        │   └── NumberFormatException\n        └── IndexOutOfBoundsException",
     "a": [
      [
       "NullPointerException",
       "Usar un objeto que es null."
      ],
      [
       "ArithmeticException",
       "Dividir un entero entre 0."
      ],
      [
       "NumberFormatException",
       "Convertir a número un texto que no lo es."
      ],
      [
       "ArrayIndexOutOfBoundsException",
       "Índice fuera del array."
      ],
      [
       "InputMismatchException",
       "El Scanner esperaba otro tipo."
      ],
      [
       "FileNotFoundException",
       "El archivo no existe."
      ],
      [
       "SQLException",
       "Error de base de datos."
      ]
     ],
     "at": "Excepciones frecuentes",
     "ah": [
      "Excepción",
      "Causa"
     ],
     "tip": "NullPointerException es la más común: comprobad si un objeto puede ser null antes de usarlo."
    },
    {
     "n": "7.3",
     "t": "throw, throws y excepciones propias",
     "m": "6 min",
     "b": [
      "throw lanza una excepción manualmente, por ejemplo cuando un dato no es válido. throws en la firma de un método avisa de que puede lanzar una excepción checked, y quien lo llame tendrá que tratarla.",
      "Se pueden crear excepciones propias heredando de Exception (checked) o de RuntimeException (unchecked). Así los errores tienen nombres del dominio de tu aplicación, como AforoCompletoException, y se pueden tratar de forma específica."
     ],
     "k": [
      "throw new IllegalArgumentException(\"mensaje\");",
      "void metodo() throws MiExcepcion { … }",
      "class MiExcepcion extends Exception { … }",
      "Mensajes claros que expliquen qué ha fallado."
     ],
     "c": "class AforoCompletoException extends Exception {\n    public AforoCompletoException(String mensaje) { super(mensaje); }\n}\n\nclass Zona {\n    private int libres;\n    Zona(int libres) { this.libres = libres; }\n\n    void reservar(int cantidad) throws AforoCompletoException {\n        if (cantidad <= 0) throw new IllegalArgumentException(\"Cantidad no válida\");\n        if (cantidad > libres) throw new AforoCompletoException(\"Solo quedan \" + libres + \" plazas\");\n        libres -= cantidad;\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Zona pista = new Zona(3);\n        try {\n            pista.reservar(2);\n            System.out.println(\"Reserva 1 correcta\");\n            pista.reservar(2);\n        } catch (AforoCompletoException e) {\n            System.out.println(\"No se pudo reservar: \" + e.getMessage());\n        }\n    }\n}",
     "o": "Reserva 1 correcta\nNo se pudo reservar: Solo quedan 1 plazas",
     "tip": "las excepciones propias hacen el código mucho más legible en proyectos grandes."
    }
   ]
  },
  {
   "t": "Java moderno",
   "d": "enum, record, var, lambdas, Streams y Optional.",
   "secciones": [
    {
     "n": "8.1",
     "t": "enum",
     "m": "4 min",
     "b": [
      "Un enum define un tipo con un conjunto cerrado de valores posibles: los días de la semana, los estados de un pedido, los tipos de entrada. Evita errores al usar textos o números sueltos y funciona perfectamente con switch.",
      "Los enum pueden tener atributos, constructor y métodos. values() devuelve todos los valores y valueOf(\"TEXTO\") convierte un texto en el valor correspondiente."
     ],
     "k": [
      "enum Estado { PENDIENTE, ENVIADO, ENTREGADO }",
      "Se usa como Estado.ENVIADO.",
      "values() recorre todos; valueOf convierte texto.",
      "Pueden tener atributos y métodos."
     ],
     "c": "enum TipoEntrada {\n    DIA(39), ABONO(89), VIP(150);\n\n    private final double precio;\n    TipoEntrada(double precio) { this.precio = precio; }\n    public double getPrecio() { return precio; }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        TipoEntrada t = TipoEntrada.valueOf(\"ABONO\");\n        System.out.println(t + \": \" + t.getPrecio() + \" €\");\n        for (TipoEntrada tipo : TipoEntrada.values()) {\n            String nota = switch (tipo) {\n                case DIA -> \"un día\";\n                case ABONO -> \"tres días\";\n                case VIP -> \"tres días + backstage\";\n            };\n            System.out.println(tipo.name() + \" → \" + nota);\n        }\n    }\n}",
     "o": "ABONO: 89.0 €\nDIA → un día\nABONO → tres días\nVIP → tres días + backstage",
     "tip": "siempre que una variable solo pueda tomar unos pocos valores fijos, usad un enum."
    },
    {
     "n": "8.2",
     "t": "record",
     "m": "4 min",
     "b": [
      "Un record (Java 16) es una forma muy corta de declarar una clase de datos inmutable. Con una línea, record Juego(String titulo, double precio) {}, Java genera el constructor, los métodos de acceso (titulo(), precio()), equals, hashCode y toString.",
      "Los campos son final: no hay setters. Se pueden añadir métodos propios y validar los datos en un constructor compacto. Son ideales para DTOs, resultados de consultas o claves de mapas."
     ],
     "k": [
      "record Punto(int x, int y) {}",
      "Accesores sin get: p.x(), p.y().",
      "equals, hashCode y toString generados.",
      "Inmutable: para cambiar un dato se crea otro record."
     ],
     "c": "record Juego(String titulo, double precio, int stock) {\n    Juego {\n        if (precio < 0) throw new IllegalArgumentException(\"Precio negativo\");\n    }\n    boolean disponible() { return stock > 0; }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Juego j = new Juego(\"Zelda\", 59.99, 3);\n        System.out.println(j);\n        System.out.println(j.titulo() + \" disponible: \" + j.disponible());\n        System.out.println(j.equals(new Juego(\"Zelda\", 59.99, 3)));\n        Juego rebajado = new Juego(j.titulo(), j.precio() * 0.8, j.stock());\n        System.out.printf(\"%.2f%n\", rebajado.precio());\n    }\n}",
     "o": "Juego[titulo=Zelda, precio=59.99, stock=3]\nZelda disponible: true\ntrue\n47,99",
     "tip": "en el proyecto de la tienda de juegos, Juego podría ser un record."
    },
    {
     "n": "8.3",
     "t": "Lambdas y referencias a métodos",
     "m": "5 min",
     "b": [
      "Una lambda es una función anónima: (parámetros) -> expresión. Se usa donde Java espera una interfaz funcional (una interfaz con un único método abstracto), como Comparator, Runnable, Predicate o Function.",
      "Una referencia a método (Clase::metodo) es una forma aún más corta cuando la lambda solo llama a un método existente: System.out::println equivale a x -> System.out.println(x)."
     ],
     "k": [
      "(a, b) -> a + b",
      "Una sola sentencia: sin llaves ni return.",
      "Clase::metodo → referencia a método.",
      "Interfaces funcionales: Predicate, Function, Consumer, Supplier."
     ],
     "c": "import java.util.*;\nimport java.util.function.*;\n\npublic class Lambdas {\n    public static void main(String[] args) {\n        List<String> bandas = new ArrayList<>(List.of(\"Vetusta\", \"Ana\", \"Bon Iver\"));\n        bandas.sort((a, b) -> a.length() - b.length());\n        System.out.println(bandas);\n\n        bandas.forEach(System.out::println);\n        bandas.removeIf(b -> b.startsWith(\"A\"));\n        System.out.println(bandas);\n\n        Predicate<Integer> esPar = n -> n % 2 == 0;\n        Function<Double, Double> conIva = p -> p * 1.21;\n        System.out.println(esPar.test(4) + \" \" + conIva.apply(100.0));\n    }\n}",
     "o": "[Ana, Vetusta, Bon Iver]\nAna\nVetusta\nBon Iver\n[Vetusta, Bon Iver]\ntrue 121.0",
     "a": [
      [
       "Predicate<T>",
       "Recibe T, devuelve boolean (filtros)."
      ],
      [
       "Function<T, R>",
       "Recibe T, devuelve R (transformaciones)."
      ],
      [
       "Consumer<T>",
       "Recibe T, no devuelve nada (forEach)."
      ],
      [
       "Supplier<T>",
       "No recibe nada, devuelve T."
      ],
      [
       "Comparator<T>",
       "Compara dos T (ordenar)."
      ]
     ],
     "at": "Interfaces funcionales",
     "ah": [
      "Interfaz",
      "Uso"
     ],
     "tip": "las lambdas son la misma idea que las funciones flecha de JavaScript."
    },
    {
     "n": "8.4",
     "t": "Streams",
     "m": "7 min",
     "b": [
      "La API de Streams procesa colecciones de forma declarativa encadenando operaciones: filter (filtrar), map (transformar), sorted (ordenar), limit, distinct… y una operación final que produce el resultado: toList, count, sum, average, collect, forEach.",
      "Collectors.groupingBy agrupa elementos por un criterio (como un GROUP BY de SQL) y joining une textos. Un stream no modifica la colección original y solo se puede recorrer una vez."
     ],
     "k": [
      "lista.stream().filter(…).map(…).toList()",
      "mapToDouble(…).sum() / average() para números.",
      "Collectors.groupingBy agrupa.",
      "No modifica la colección original."
     ],
     "c": "import java.util.*;\nimport java.util.stream.*;\n\nrecord Venta(String tipo, double importe, String dia) {}\n\npublic class Streams {\n    public static void main(String[] args) {\n        List<Venta> ventas = List.of(\n            new Venta(\"dia\", 39, \"V\"), new Venta(\"abono\", 89, \"V\"),\n            new Venta(\"dia\", 39, \"S\"), new Venta(\"vip\", 150, \"S\"));\n\n        double total = ventas.stream().mapToDouble(Venta::importe).sum();\n        System.out.println(\"Total: \" + total);\n\n        List<String> caras = ventas.stream()\n            .filter(v -> v.importe() > 50)\n            .map(v -> v.tipo().toUpperCase())\n            .toList();\n        System.out.println(caras);\n\n        Map<String, Long> porTipo = ventas.stream()\n            .collect(Collectors.groupingBy(Venta::tipo, TreeMap::new, Collectors.counting()));\n        System.out.println(porTipo);\n\n        System.out.println(ventas.stream().map(Venta::dia).distinct().collect(Collectors.joining(\", \")));\n    }\n}",
     "o": "Total: 317.0\n[ABONO, VIP]\n{abono=1, dia=2, vip=1}\nV, S",
     "q": {
      "t": "¿Qué operación de Stream se queda solo con algunos elementos?",
      "o": [
       "map",
       "filter",
       "sorted",
       "forEach"
      ],
      "ok": 1,
      "why": "filter deja pasar los elementos que cumplen la condición."
     },
     "tip": "filter, map y reduce funcionan igual que en JavaScript."
    },
    {
     "n": "8.5",
     "t": "Optional",
     "m": "4 min",
     "b": [
      "Optional<T> representa un valor que puede estar o no, y obliga a pensar en el caso vacío en lugar de devolver null y arriesgarse a un NullPointerException. Muchos métodos de Streams, como findFirst o max, devuelven un Optional.",
      "isPresent() comprueba si hay valor; orElse(valorPorDefecto) devuelve el valor o uno alternativo; ifPresent(acción) ejecuta algo solo si existe; orElseThrow lanza una excepción si está vacío."
     ],
     "k": [
      "Optional.of(x), Optional.empty(), Optional.ofNullable(x).",
      "orElse(defecto) / orElseThrow().",
      "ifPresent(x -> …).",
      "Úsalo como tipo de retorno, no en atributos."
     ],
     "c": "import java.util.*;\n\npublic class Opcional {\n    static Optional<String> buscarArtista(List<String> cartel, String letra) {\n        return cartel.stream().filter(a -> a.startsWith(letra)).findFirst();\n    }\n\n    public static void main(String[] args) {\n        List<String> cartel = List.of(\"Arde Bogotá\", \"Bad Bunny\", \"Rosalía\");\n        System.out.println(buscarArtista(cartel, \"B\").orElse(\"Ninguno\"));\n        System.out.println(buscarArtista(cartel, \"Z\").orElse(\"Ninguno\"));\n        buscarArtista(cartel, \"R\").ifPresent(a -> System.out.println(\"Encontrado: \" + a));\n        System.out.println(buscarArtista(cartel, \"Z\").isPresent());\n    }\n}",
     "o": "Bad Bunny\nNinguno\nEncontrado: Rosalía\nfalse",
     "tip": "en un DAO, buscarPorId suele devolver Optional<Entidad>."
    }
   ]
  },
  {
   "t": "Archivos",
   "d": "Leer y escribir archivos, try-with-resources y CSV.",
   "secciones": [
    {
     "n": "9.1",
     "t": "Leer y escribir con Files",
     "m": "5 min",
     "b": [
      "La clase Files (paquete java.nio.file) ofrece métodos sencillos para trabajar con archivos: readAllLines lee todas las líneas en una lista, readString lee el archivo entero, write y writeString escriben (sustituyendo o añadiendo con StandardOpenOption.APPEND), y exists comprueba si existe.",
      "Path.of(\"datos/alumnos.txt\") representa una ruta. Estas operaciones lanzan IOException (checked), así que hay que tratarla. Las rutas relativas se calculan desde la carpeta desde la que se ejecuta el programa."
     ],
     "k": [
      "Path ruta = Path.of(\"datos.txt\");",
      "Files.readAllLines(ruta) → List<String>.",
      "Files.writeString(ruta, texto).",
      "APPEND añade al final sin borrar."
     ],
     "c": "import java.io.IOException;\nimport java.nio.file.*;\nimport java.util.List;\n\npublic class Archivos {\n    public static void main(String[] args) {\n        Path ruta = Path.of(\"cartel.txt\");\n        try {\n            Files.write(ruta, List.of(\"Banda A\", \"Banda B\"));\n            Files.writeString(ruta, \"Banda C\\n\", StandardOpenOption.APPEND);\n            List<String> lineas = Files.readAllLines(ruta);\n            System.out.println(lineas.size() + \" bandas:\");\n            lineas.forEach(l -> System.out.println(\"- \" + l));\n            System.out.println(Files.exists(Path.of(\"no-existe.txt\")));\n        } catch (IOException e) {\n            System.out.println(\"Error con el archivo: \" + e.getMessage());\n        }\n    }\n}",
     "o": "3 bandas:\n- Banda A\n- Banda B\n- Banda C\nfalse",
     "a": [
      [
       "Files.readAllLines(p)",
       "Todas las líneas en una lista."
      ],
      [
       "Files.readString(p)",
       "Todo el archivo como texto."
      ],
      [
       "Files.write(p, lineas)",
       "Escribe una lista de líneas."
      ],
      [
       "Files.writeString(p, texto)",
       "Escribe un texto."
      ],
      [
       "Files.exists(p)",
       "¿Existe?"
      ],
      [
       "Files.createDirectories(p)",
       "Crea carpetas."
      ],
      [
       "Files.delete(p)",
       "Borra."
      ],
      [
       "Files.lines(p)",
       "Stream de líneas (archivos grandes)."
      ]
     ],
     "at": "Métodos de Files",
     "ah": [
      "Método",
      "Qué hace"
     ],
     "tip": "para archivos muy grandes, Files.lines devuelve un Stream que no carga todo en memoria."
    },
    {
     "n": "9.2",
     "t": "try-with-resources",
     "m": "5 min",
     "b": [
      "Los recursos como archivos, conexiones a bases de datos o Scanners deben cerrarse para liberar memoria y bloqueos. try-with-resources los cierra automáticamente al terminar el bloque, haya error o no: basta con declararlos entre paréntesis después de try.",
      "Funciona con cualquier clase que implemente AutoCloseable. Es la forma recomendada de trabajar con BufferedReader, BufferedWriter, Scanner o Connection."
     ],
     "k": [
      "try (Recurso r = …) { … } → se cierra solo.",
      "Se pueden declarar varios separados por ;.",
      "Sustituye al finally con close().",
      "Válido para cualquier AutoCloseable."
     ],
     "c": "import java.io.*;\n\npublic class Recursos {\n    public static void main(String[] args) {\n        try (BufferedWriter out = new BufferedWriter(new FileWriter(\"log.txt\"))) {\n            out.write(\"Compra: 2 entradas\");\n            out.newLine();\n            out.write(\"Compra: 1 abono\");\n        } catch (IOException e) {\n            System.out.println(e.getMessage());\n        }\n\n        try (BufferedReader in = new BufferedReader(new FileReader(\"log.txt\"))) {\n            String linea;\n            int n = 0;\n            while ((linea = in.readLine()) != null) {\n                System.out.println(++n + \": \" + linea);\n            }\n        } catch (IOException e) {\n            System.out.println(e.getMessage());\n        }\n    }\n}",
     "o": "1: Compra: 2 entradas\n2: Compra: 1 abono",
     "e": "olvidar cerrar los recursos: el archivo queda bloqueado o los datos no se terminan de escribir.",
     "tip": "usad siempre try-with-resources con archivos y conexiones JDBC."
    },
    {
     "n": "9.3",
     "t": "Leer y escribir CSV",
     "m": "5 min",
     "b": [
      "Un CSV es un archivo de texto en el que cada línea es un registro y los campos van separados por comas o punto y coma. Para leerlo, se lee cada línea, se divide con split y se convierte cada campo a su tipo para crear un objeto.",
      "Para escribirlo, se convierte cada objeto en una línea con String.join o String.format. Los CSV se abren con Excel o LibreOffice, así que son una forma sencilla de exportar datos de un programa."
     ],
     "k": [
      "Cada línea → split(\";\") → objeto.",
      "Salta la cabecera con skip(1).",
      "Convierte los campos: Double.parseDouble(…).",
      "Excel en España usa ; como separador."
     ],
     "c": "import java.io.IOException;\nimport java.nio.file.*;\nimport java.util.*;\n\nrecord Juego(String titulo, double precio, int stock) {}\n\npublic class Csv {\n    public static void main(String[] args) throws IOException {\n        Path ruta = Path.of(\"juegos.csv\");\n        Files.write(ruta, List.of(\"titulo;precio;stock\", \"Zelda;59.99;3\", \"Mario;49.99;0\"));\n\n        List<Juego> juegos = Files.lines(ruta)\n            .skip(1)\n            .map(l -> l.split(\";\"))\n            .map(p -> new Juego(p[0], Double.parseDouble(p[1]), Integer.parseInt(p[2])))\n            .toList();\n        juegos.forEach(System.out::println);\n\n        List<String> salida = new ArrayList<>(List.of(\"titulo;agotado\"));\n        for (Juego j : juegos) salida.add(j.titulo() + \";\" + (j.stock() == 0));\n        Files.write(Path.of(\"informe.csv\"), salida);\n        System.out.println(\"Informe generado\");\n    }\n}",
     "o": "Juego[titulo=Zelda, precio=59.99, stock=3]\nJuego[titulo=Mario, precio=49.99, stock=0]\nInforme generado",
     "tip": "guardar los datos en CSV es un buen paso intermedio antes de usar una base de datos."
    }
   ]
  },
  {
   "t": "Bases de datos con JDBC",
   "d": "Conectar, consultas preparadas, CRUD, patrón DAO y transacciones.",
   "secciones": [
    {
     "n": "10.1",
     "t": "Conectar con JDBC",
     "m": "6 min",
     "b": [
      "JDBC (Java Database Connectivity) es la API estándar para trabajar con bases de datos relacionales desde Java. Se necesita el driver de la base de datos (por ejemplo, el de PostgreSQL o MySQL, añadido con Maven o como .jar) y una URL de conexión con el host, el puerto y el nombre de la base de datos.",
      "DriverManager.getConnection(url, usuario, contraseña) abre la conexión. Hay que cerrarla siempre, así que se usa try-with-resources. No escribas las credenciales en el código: léelas de variables de entorno o de un archivo de configuración que no se suba a Git."
     ],
     "k": [
      "Driver en el proyecto (Maven: org.postgresql:postgresql).",
      "URL: jdbc:postgresql://localhost:5432/pedidos_db",
      "DriverManager.getConnection(url, user, pass).",
      "try-with-resources para cerrar la conexión."
     ],
     "c": "import java.sql.*;\n\npublic class Conexion {\n    private static final String URL = \"jdbc:postgresql://localhost:5432/pedidos_db\";\n    private static final String USER = System.getenv(\"DB_USER\");\n    private static final String PASS = System.getenv(\"DB_PASS\");\n\n    public static Connection obtener() throws SQLException {\n        return DriverManager.getConnection(URL, USER, PASS);\n    }\n\n    public static void main(String[] args) {\n        try (Connection con = obtener()) {\n            System.out.println(\"Conectado a \" + con.getMetaData().getDatabaseProductName());\n        } catch (SQLException e) {\n            System.out.println(\"No se pudo conectar: \" + e.getMessage());\n        }\n    }\n}",
     "o": "Conectado a PostgreSQL",
     "a": [
      [
       "PostgreSQL",
       "jdbc:postgresql://localhost:5432/nombre_bd"
      ],
      [
       "MySQL",
       "jdbc:mysql://localhost:3306/nombre_bd"
      ],
      [
       "SQLite",
       "jdbc:sqlite:archivo.db"
      ],
      [
       "Connection",
       "La conexión abierta."
      ],
      [
       "PreparedStatement",
       "Consulta con parámetros (?)."
      ],
      [
       "ResultSet",
       "Filas devueltas por un SELECT."
      ]
     ],
     "at": "URLs y clases de JDBC",
     "ah": [
      "Elemento",
      "Valor o uso"
     ],
     "tip": "con Maven, añadid el driver en el pom.xml y se descarga solo."
    },
    {
     "n": "10.2",
     "t": "Consultas con PreparedStatement",
     "m": "6 min",
     "b": [
      "PreparedStatement ejecuta consultas SQL con parámetros marcados con ?, que se rellenan con setString, setInt, setDouble… Protege contra la inyección SQL (porque los datos nunca se mezclan con el código SQL) y es más eficiente si la consulta se repite.",
      "executeQuery se usa con SELECT y devuelve un ResultSet, que se recorre con next() y del que se leen las columnas con getString(\"columna\"), getInt…; executeUpdate se usa con INSERT, UPDATE y DELETE y devuelve el número de filas afectadas."
     ],
     "k": [
      "Parámetros con ? y setString(1, valor) (empiezan en 1).",
      "SELECT → executeQuery → ResultSet.",
      "INSERT/UPDATE/DELETE → executeUpdate → filas afectadas.",
      "Nunca concatenes datos del usuario en el SQL."
     ],
     "c": "import java.sql.*;\n\npublic class Consultas {\n    public static void main(String[] args) {\n        String sql = \"SELECT id, nombre, email FROM clientes WHERE nombre ILIKE ? ORDER BY nombre\";\n        try (Connection con = Conexion.obtener();\n             PreparedStatement ps = con.prepareStatement(sql)) {\n            ps.setString(1, \"a%\");\n            try (ResultSet rs = ps.executeQuery()) {\n                while (rs.next()) {\n                    System.out.printf(\"%d - %s (%s)%n\",\n                        rs.getInt(\"id\"), rs.getString(\"nombre\"), rs.getString(\"email\"));\n                }\n            }\n        } catch (SQLException e) {\n            System.out.println(\"Error SQL: \" + e.getMessage());\n        }\n    }\n}",
     "o": "1 - Ana (ana@mail.com)\n4 - Andrés (andres@mail.com)",
     "e": "construir el SQL concatenando lo que escribe el usuario (\"… WHERE nombre = '\" + nombre + \"'\"): permite la inyección SQL.",
     "tip": "los índices de los parámetros ? empiezan en 1, no en 0."
    },
    {
     "n": "10.3",
     "t": "Patrón DAO",
     "m": "6 min",
     "b": [
      "El patrón DAO (Data Access Object) concentra todo el código SQL de una entidad en una clase propia, por ejemplo ClienteDAO, con métodos como insertar, buscarPorId, listar, actualizar y borrar. El resto del programa (el menú, la interfaz) solo llama a esos métodos, sin saber nada de SQL.",
      "Así, si cambias de base de datos o de tabla, solo modificas el DAO. Normalmente se combina con una clase o record para la entidad (Cliente) y una interfaz para el DAO."
     ],
     "k": [
      "Una clase DAO por tabla/entidad.",
      "Métodos CRUD: insertar, buscar, listar, actualizar, borrar.",
      "El menú no contiene SQL.",
      "Devuelve objetos (Cliente), no ResultSet."
     ],
     "c": "import java.sql.*;\nimport java.util.*;\n\nrecord Cliente(int id, String nombre, String email) {}\n\npublic class ClienteDAO {\n    public List<Cliente> listar() throws SQLException {\n        List<Cliente> lista = new ArrayList<>();\n        try (Connection con = Conexion.obtener();\n             PreparedStatement ps = con.prepareStatement(\"SELECT id, nombre, email FROM clientes ORDER BY id\");\n             ResultSet rs = ps.executeQuery()) {\n            while (rs.next()) lista.add(new Cliente(rs.getInt(\"id\"), rs.getString(\"nombre\"), rs.getString(\"email\")));\n        }\n        return lista;\n    }\n\n    public Optional<Cliente> buscarPorId(int id) throws SQLException {\n        try (Connection con = Conexion.obtener();\n             PreparedStatement ps = con.prepareStatement(\"SELECT id, nombre, email FROM clientes WHERE id = ?\")) {\n            ps.setInt(1, id);\n            try (ResultSet rs = ps.executeQuery()) {\n                if (rs.next()) return Optional.of(new Cliente(rs.getInt(1), rs.getString(2), rs.getString(3)));\n            }\n        }\n        return Optional.empty();\n    }\n\n    public int insertar(String nombre, String email) throws SQLException {\n        String sql = \"INSERT INTO clientes (nombre, email) VALUES (?, ?)\";\n        try (Connection con = Conexion.obtener(); PreparedStatement ps = con.prepareStatement(sql)) {\n            ps.setString(1, nombre);\n            ps.setString(2, email);\n            return ps.executeUpdate();\n        }\n    }\n}",
     "tip": "es exactamente la estructura que necesitáis para el proyecto de pedidos con menú en Java."
    },
    {
     "n": "10.4",
     "t": "Transacciones",
     "m": "5 min",
     "b": [
      "Por defecto, JDBC confirma cada sentencia automáticamente (auto-commit). Cuando varias operaciones deben aplicarse juntas o ninguna (descontar stock y crear el pedido), se desactiva con setAutoCommit(false), se ejecutan las sentencias y se confirma con commit(). Si algo falla, rollback() deshace todo.",
      "Es la misma idea que BEGIN, COMMIT y ROLLBACK en SQL, aplicada desde Java."
     ],
     "k": [
      "con.setAutoCommit(false) inicia la transacción.",
      "con.commit() confirma; con.rollback() deshace.",
      "Haz rollback en el catch.",
      "Vuelve a activar auto-commit si reutilizas la conexión."
     ],
     "c": "import java.sql.*;\n\npublic class Compra {\n    public static void comprar(int productoId, int clienteId, int cantidad) throws SQLException {\n        try (Connection con = Conexion.obtener()) {\n            con.setAutoCommit(false);\n            try (PreparedStatement stock = con.prepareStatement(\n                     \"UPDATE productos SET stock = stock - ? WHERE id = ? AND stock >= ?\");\n                 PreparedStatement pedido = con.prepareStatement(\n                     \"INSERT INTO pedidos (cliente_id, producto_id, cantidad) VALUES (?, ?, ?)\")) {\n                stock.setInt(1, cantidad); stock.setInt(2, productoId); stock.setInt(3, cantidad);\n                if (stock.executeUpdate() == 0) throw new SQLException(\"Stock insuficiente\");\n                pedido.setInt(1, clienteId); pedido.setInt(2, productoId); pedido.setInt(3, cantidad);\n                pedido.executeUpdate();\n                con.commit();\n                System.out.println(\"Compra confirmada\");\n            } catch (SQLException e) {\n                con.rollback();\n                System.out.println(\"Compra cancelada: \" + e.getMessage());\n            }\n        }\n    }\n}",
     "o": "Compra cancelada: Stock insuficiente",
     "tip": "probadlo pidiendo más unidades de las que hay: no debe quedar ningún pedido a medias."
    }
   ]
  }
 ],
 "chuleta": [
  [
   "public static void main(String[] args)",
   "Punto de entrada del programa: la JVM empieza a ejecutar aquí.",
   "public class Main {\n  public static void main(String[] args) { … }\n}",
   "Fundamentos"
  ],
  [
   "javac / java",
   "Compilar un archivo .java / ejecutar la clase compilada.",
   "javac Main.java\njava Main",
   "Fundamentos"
  ],
  [
   "int / double / boolean / char / String",
   "Tipos básicos. String es una clase y va entre comillas dobles; char entre simples.",
   "int edad = 20; double precio = 9.5; char c = 'A';",
   "Fundamentos"
  ],
  [
   "final",
   "Constante: no se puede reasignar. Por convención en MAYÚSCULAS.",
   "final double IVA = 0.21;",
   "Fundamentos"
  ],
  [
   "var",
   "El compilador deduce el tipo de una variable local.",
   "var lista = new ArrayList<String>();",
   "Fundamentos"
  ],
  [
   "(int) valor",
   "Casting: convierte a un tipo más pequeño (trunca decimales).",
   "int n = (int) 7.9;  // 7",
   "Fundamentos"
  ],
  [
   "Integer.parseInt / Double.parseDouble",
   "Convertir texto a número. Lanza NumberFormatException si no es válido.",
   "int edad = Integer.parseInt(\"19\");",
   "Fundamentos"
  ],
  [
   "System.out.println / print",
   "Escribir en consola con o sin salto de línea.",
   "System.out.println(\"Total: \" + total);",
   "Entrada y salida"
  ],
  [
   "System.out.printf",
   "Salida con formato: %d entero, %.2f decimales, %s texto, %n salto.",
   "System.out.printf(\"%s: %.2f €%n\", nombre, total);",
   "Entrada y salida"
  ],
  [
   "Scanner",
   "Leer del teclado. Tras nextInt(), un nextLine() limpia el buffer.",
   "Scanner sc = new Scanner(System.in);\nint n = sc.nextInt();",
   "Entrada y salida"
  ],
  [
   "JOptionPane",
   "Cuadros de diálogo: pedir datos y mostrar mensajes.",
   "String s = JOptionPane.showInputDialog(\"Nombre\");",
   "Entrada y salida"
  ],
  [
   "if / else if / else",
   "Condiciones. Para Strings usa equals, nunca ==.",
   "if (opcion.equals(\"s\")) { … }",
   "Control de flujo"
  ],
  [
   "switch con flechas",
   "Sin break y puede devolver un valor.",
   "String t = switch (dia) { case 6, 7 -> \"Finde\"; default -> \"Laborable\"; };",
   "Control de flujo"
  ],
  [
   "for / while / do-while",
   "Bucles. do-while se ejecuta al menos una vez (menús).",
   "do { … } while (opcion != 0);",
   "Control de flujo"
  ],
  [
   "for (T x : coleccion)",
   "For-each: recorre arrays y colecciones.",
   "for (String b : bandas) System.out.println(b);",
   "Control de flujo"
  ],
  [
   "static tipo metodo(params)",
   "Declarar un método. void si no devuelve nada.",
   "static double conIva(double p) { return p * 1.21; }",
   "Métodos y arrays"
  ],
  [
   "int[] a = {…}",
   "Array de tamaño fijo. length sin paréntesis.",
   "int[] notas = {7, 9, 6};\nnotas.length",
   "Métodos y arrays"
  ],
  [
   "Arrays.toString / sort",
   "Imprimir y ordenar arrays.",
   "Arrays.sort(notas);",
   "Métodos y arrays"
  ],
  [
   "String: length(), substring, split, equals",
   "Métodos de texto más usados.",
   "\"a;b\".split(\";\")",
   "Métodos y arrays"
  ],
  [
   "StringBuilder",
   "Construir textos en bucles de forma eficiente.",
   "StringBuilder sb = new StringBuilder();\nsb.append(\"x\");",
   "Métodos y arrays"
  ],
  [
   "class / new",
   "Definir una clase y crear objetos.",
   "Entrada e = new Entrada(\"Día\", 39);",
   "Clases y objetos"
  ],
  [
   "Constructor y this",
   "Inicializa el objeto; this distingue atributo y parámetro.",
   "Entrada(String tipo) { this.tipo = tipo; }",
   "Clases y objetos"
  ],
  [
   "private + getters y setters",
   "Encapsulación: atributos privados y acceso controlado.",
   "private double precio;\npublic double getPrecio() { return precio; }",
   "Clases y objetos"
  ],
  [
   "static",
   "Pertenece a la clase y lo comparten todos los objetos.",
   "private static int contador = 0;",
   "Clases y objetos"
  ],
  [
   "@Override toString / equals / hashCode",
   "Representación en texto e igualdad por contenido.",
   "@Override public String toString() { return nombre; }",
   "Clases y objetos"
  ],
  [
   "extends / super",
   "Heredar de una clase y llamar al constructor del padre.",
   "class Vip extends Entrada { Vip() { super(\"vip\", 150); } }",
   "Herencia e interfaces"
  ],
  [
   "@Override",
   "Sobrescribir un método del padre.",
   "@Override double precio() { return 117; }",
   "Herencia e interfaces"
  ],
  [
   "abstract class",
   "Clase base que no se puede instanciar y obliga a implementar métodos.",
   "abstract double sueldo();",
   "Herencia e interfaces"
  ],
  [
   "interface / implements",
   "Contrato de métodos. Una clase puede implementar varias.",
   "class Factura implements Pagable, Imprimible { … }",
   "Herencia e interfaces"
  ],
  [
   "instanceof",
   "Comprobar el tipo real de un objeto (con patrón desde Java 16).",
   "if (o instanceof Alumno a) { … }",
   "Herencia e interfaces"
  ],
  [
   "ArrayList",
   "Lista dinámica: add, get, set, remove, size, contains.",
   "List<String> l = new ArrayList<>();\nl.add(\"A\");",
   "Colecciones"
  ],
  [
   "HashMap",
   "Pares clave-valor: put, get, getOrDefault, containsKey, entrySet.",
   "Map<String, Integer> stock = new HashMap<>();",
   "Colecciones"
  ],
  [
   "HashSet / TreeSet",
   "Conjuntos sin duplicados (TreeSet ordenado).",
   "Set<String> unicos = new TreeSet<>(lista);",
   "Colecciones"
  ],
  [
   "Comparator.comparing",
   "Ordenar por un campo; reversed() y thenComparing().",
   "lista.sort(Comparator.comparing(Alumno::nota).reversed());",
   "Colecciones"
  ],
  [
   "removeIf",
   "Borrar los elementos que cumplen una condición.",
   "lista.removeIf(j -> j.stock() == 0);",
   "Colecciones"
  ],
  [
   "try / catch / finally",
   "Capturar errores; finally se ejecuta siempre.",
   "try { … } catch (NumberFormatException e) { … }",
   "Excepciones"
  ],
  [
   "throw / throws",
   "Lanzar una excepción / declarar que un método puede lanzarla.",
   "void reservar() throws AforoException { throw new AforoException(\"Lleno\"); }",
   "Excepciones"
  ],
  [
   "class X extends Exception",
   "Excepción propia (checked). RuntimeException para unchecked.",
   "class AforoException extends Exception { … }",
   "Excepciones"
  ],
  [
   "try-with-resources",
   "Cierra automáticamente archivos y conexiones.",
   "try (Connection con = obtener()) { … }",
   "Excepciones"
  ],
  [
   "enum",
   "Conjunto cerrado de valores, con atributos y métodos.",
   "enum Estado { PENDIENTE, ENVIADO }",
   "Java moderno"
  ],
  [
   "record",
   "Clase de datos inmutable en una línea.",
   "record Juego(String titulo, double precio) {}",
   "Java moderno"
  ],
  [
   "lambda",
   "Función anónima para interfaces funcionales.",
   "lista.forEach(x -> System.out.println(x));",
   "Java moderno"
  ],
  [
   "stream().filter().map().toList()",
   "Procesar colecciones de forma declarativa.",
   "lista.stream().filter(j -> j.precio() < 30).map(Juego::titulo).toList();",
   "Java moderno"
  ],
  [
   "Collectors.groupingBy",
   "Agrupar elementos, como GROUP BY.",
   "ventas.stream().collect(Collectors.groupingBy(Venta::tipo, Collectors.counting()));",
   "Java moderno"
  ],
  [
   "Optional",
   "Valor que puede no existir; orElse, ifPresent, orElseThrow.",
   "buscar(id).orElse(null)",
   "Java moderno"
  ],
  [
   "Files.readAllLines / write",
   "Leer y escribir archivos de texto.",
   "List<String> l = Files.readAllLines(Path.of(\"datos.txt\"));",
   "Archivos y JDBC"
  ],
  [
   "DriverManager.getConnection",
   "Abrir una conexión a la base de datos.",
   "Connection con = DriverManager.getConnection(url, user, pass);",
   "Archivos y JDBC"
  ],
  [
   "PreparedStatement",
   "Consulta con parámetros ?: segura frente a inyección SQL.",
   "ps = con.prepareStatement(\"SELECT * FROM t WHERE id = ?\");\nps.setInt(1, id);",
   "Archivos y JDBC"
  ],
  [
   "executeQuery / executeUpdate",
   "SELECT devuelve ResultSet; INSERT/UPDATE/DELETE devuelve filas afectadas.",
   "ResultSet rs = ps.executeQuery();",
   "Archivos y JDBC"
  ],
  [
   "ResultSet",
   "Recorrer filas con next() y leer columnas.",
   "while (rs.next()) rs.getString(\"nombre\");",
   "Archivos y JDBC"
  ],
  [
   "commit / rollback",
   "Confirmar o deshacer una transacción.",
   "con.setAutoCommit(false); … con.commit();",
   "Archivos y JDBC"
  ]
 ],
 "retos": [
  {
   "t": "¿Cuánto vale 7 / 2 en Java si los dos son int?",
   "o": [
    "3.5",
    "3",
    "4",
    "Error"
   ],
   "ok": 1,
   "why": "La división entre enteros descarta los decimales."
  },
  {
   "t": "¿Cómo se comparan correctamente dos String?",
   "o": [
    "a == b",
    "a.equals(b)",
    "a = b",
    "a.compareTo(b) == true"
   ],
   "ok": 1,
   "why": "== compara si son el mismo objeto; equals compara el contenido."
  },
  {
   "t": "¿Qué palabra permite a una clase cumplir el contrato de una interfaz?",
   "o": [
    "extends",
    "implements",
    "inherits",
    "uses"
   ],
   "ok": 1,
   "why": "class Factura implements Pagable."
  },
  {
   "t": "¿Qué colección no admite elementos repetidos?",
   "o": [
    "ArrayList",
    "HashSet",
    "LinkedList",
    "Array"
   ],
   "ok": 1,
   "why": "Los Set ignoran los elementos que ya contienen."
  },
  {
   "t": "¿Qué hace try-with-resources?",
   "o": [
    "Repite el bloque si falla",
    "Cierra automáticamente los recursos",
    "Ignora las excepciones",
    "Acelera el programa"
   ],
   "ok": 1,
   "why": "Los recursos declarados en el try se cierran solos al terminar."
  },
  {
   "t": "¿Por qué se usa PreparedStatement?",
   "o": [
    "Es más corto",
    "Protege contra inyección SQL",
    "No necesita conexión",
    "Solo sirve para SELECT"
   ],
   "ok": 1,
   "why": "Los parámetros ? separan los datos del código SQL."
  },
  {
   "t": "¿Qué método llama super(nombre) en un constructor?",
   "o": [
    "El método nombre del padre",
    "El constructor de la clase padre",
    "El constructor de la misma clase",
    "Un método estático"
   ],
   "ok": 1,
   "why": "super(…) invoca al constructor del padre y debe ir en la primera línea."
  },
  {
   "t": "¿Qué genera automáticamente un record?",
   "o": [
    "Solo el constructor",
    "Constructor, accesores, equals, hashCode y toString",
    "Setters",
    "Nada"
   ],
   "ok": 1,
   "why": "Por eso los records ahorran tanto código en clases de datos."
  }
 ]
};
