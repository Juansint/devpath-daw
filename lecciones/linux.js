window.LECCIONES = window.LECCIONES || {};
LECCIONES["linux"] = {
 "lang": "sh",
 "capitulos": [
  {
   "t": "Introducción a Linux",
   "d": "Qué es Linux, la terminal, el sistema de archivos y cómo pedir ayuda.",
   "secciones": [
    {
     "n": "1.1",
     "t": "¿Qué es Linux?",
     "m": "4 min",
     "b": [
      "Linux es un sistema operativo libre y de código abierto. Técnicamente, Linux es el núcleo (kernel), y una distribución lo combina con herramientas y programas: Ubuntu, Debian, Fedora, Linux Mint o Arch. La gran mayoría de los servidores web, la nube, Android y los contenedores Docker funcionan con Linux.",
      "Para un desarrollador web es imprescindible manejar la terminal de Linux: vas a desplegar aplicaciones en servidores Linux, usar Docker y trabajar con Git. En Windows puedes practicar con WSL (Windows Subsystem for Linux), que instala un Ubuntu completo."
     ],
     "k": [
      "Kernel Linux + herramientas = distribución.",
      "Ubuntu y Debian son las más usadas en servidores.",
      "En Windows: WSL (wsl --install).",
      "Casi todos los servidores web usan Linux."
     ],
     "c": "# Windows: instalar Ubuntu con WSL (PowerShell como administrador)\nwsl --install\n\n# Comprobar qué sistema y versión tienes\n$ uname -s\n$ cat /etc/os-release | head -2",
     "v": 0,
     "o": "Linux\nPRETTY_NAME=\"Ubuntu 24.04 LTS\"\nNAME=\"Ubuntu\"",
     "a": [
      [
       "Ubuntu",
       "La más popular; versiones LTS con 5 años de soporte."
      ],
      [
       "Debian",
       "Muy estable; base de Ubuntu. Habitual en servidores."
      ],
      [
       "Fedora / RHEL",
       "Ecosistema Red Hat, empresas."
      ],
      [
       "Alpine",
       "Mínima; muy usada en imágenes Docker."
      ],
      [
       "Linux Mint",
       "Escritorio amigable para empezar."
      ]
     ],
     "at": "Distribuciones más conocidas",
     "ah": [
      "Distribución",
      "Característica"
     ],
     "tip": "las versiones LTS (Long Term Support) son las recomendadas para servidores."
    },
    {
     "n": "1.2",
     "t": "La terminal y el prompt",
     "m": "4 min",
     "b": [
      "La terminal es un programa que permite dar órdenes al sistema escribiendo comandos. El programa que interpreta esos comandos se llama shell; el más común es Bash (también Zsh). El prompt es el texto que aparece antes del cursor, por ejemplo ana@portatil:~/proyecto$, que indica el usuario, el equipo, la carpeta actual y si eres usuario normal ($) o administrador (#).",
      "Un comando tiene un nombre, opciones (que empiezan por guion: -l o --all) y argumentos (sobre qué actúa). La tecla Tab autocompleta nombres, las flechas recorren el historial y Ctrl+C cancela el comando en curso."
     ],
     "k": [
      "comando -opciones argumentos.",
      "Tab autocompleta; ↑ y ↓ recorren el historial.",
      "Ctrl+C cancela; Ctrl+L limpia la pantalla.",
      "$ usuario normal · # administrador (root)."
     ],
     "c": "$ whoami\n$ echo \"Hola desde la terminal\"\n$ echo $HOME\n$ date +%Y",
     "o": "$ whoami\nana\n$ echo \"Hola desde la terminal\"\nHola desde la terminal\n$ echo $HOME\n/home/ana\n$ date +%Y\n2026",
     "a": [
      [
       "Tab",
       "Autocompletar comandos y rutas."
      ],
      [
       "↑ / ↓",
       "Comandos anteriores / siguientes."
      ],
      [
       "Ctrl + C",
       "Cancelar el comando en curso."
      ],
      [
       "Ctrl + L o clear",
       "Limpiar la pantalla."
      ],
      [
       "Ctrl + R",
       "Buscar en el historial."
      ],
      [
       "history",
       "Ver el historial de comandos."
      ]
     ],
     "at": "Atajos imprescindibles",
     "ah": [
      "Atajo",
      "Qué hace"
     ],
     "tip": "usad Tab constantemente: evita errores al escribir rutas largas."
    },
    {
     "n": "1.3",
     "t": "El sistema de archivos",
     "m": "5 min",
     "b": [
      "En Linux todo cuelga de un único directorio raíz, /. No hay letras de unidad como C:. Las carpetas principales siguen un estándar: /home contiene las carpetas personales de los usuarios, /etc la configuración, /var datos que cambian (logs, webs en /var/www), /usr los programas, /tmp archivos temporales y /root la carpeta del administrador.",
      "Los nombres distinguen mayúsculas (Foto.jpg y foto.jpg son archivos distintos) y los archivos que empiezan por punto (.bashrc, .git) están ocultos."
     ],
     "k": [
      "Todo empieza en / (la raíz).",
      "~ es tu carpeta personal (/home/usuario).",
      "Distingue mayúsculas y minúsculas.",
      "Archivos ocultos: empiezan por punto."
     ],
     "c": "/\n├── home/        carpetas personales  (/home/ana)\n├── etc/         configuración del sistema\n├── var/         logs (/var/log) y webs (/var/www)\n├── usr/         programas y librerías\n├── tmp/         temporales (se borran al reiniciar)\n├── root/        carpeta del administrador\n├── bin/ sbin/   comandos básicos\n└── dev/ proc/   dispositivos y procesos (virtuales)",
     "v": 0,
     "a": [
      [
       "/",
       "Raíz del sistema."
      ],
      [
       "~",
       "Carpeta personal del usuario."
      ],
      [
       ".",
       "Carpeta actual."
      ],
      [
       "..",
       "Carpeta padre."
      ],
      [
       "/etc",
       "Configuración (nginx, ssh…)."
      ],
      [
       "/var/log",
       "Archivos de registro."
      ],
      [
       "/var/www",
       "Sitios web en servidores."
      ]
     ],
     "at": "Rutas clave",
     "ah": [
      "Ruta",
      "Significado"
     ],
     "tip": "la configuración de Nginx está en /etc/nginx y sus logs en /var/log/nginx."
    },
    {
     "n": "1.4",
     "t": "Rutas y ayuda",
     "m": "4 min",
     "b": [
      "Una ruta absoluta empieza en la raíz (/home/ana/proyecto) y funciona desde cualquier sitio. Una ruta relativa se calcula desde la carpeta actual (proyecto/css) y usa . para la carpeta actual y .. para la carpeta padre.",
      "Para saber cómo funciona un comando: man comando abre su manual (se sale con q), comando --help muestra un resumen y tldr comando (si está instalado) da ejemplos prácticos."
     ],
     "k": [
      "Absoluta: /home/ana/proyecto.",
      "Relativa: proyecto/css o ../otro.",
      "man ls → manual (q para salir).",
      "ls --help → resumen rápido."
     ],
     "c": "$ pwd\n$ cd proyecto/css\n$ pwd\n$ cd ../..\n$ pwd\n$ cd /home/ana/proyecto/js\n$ pwd",
     "o": "$ pwd\n/home/ana\n$ cd proyecto/css\n$ pwd\n/home/ana/proyecto/css\n$ cd ../..\n$ pwd\n/home/ana\n$ cd /home/ana/proyecto/js\n$ pwd\n/home/ana/proyecto/js",
     "q": {
      "t": "Estás en /home/ana/proyecto/css. ¿Dónde acabas con cd ../js?",
      "o": [
       "/home/ana/js",
       "/home/ana/proyecto/js",
       "/js",
       "/home/ana/proyecto/css/js"
      ],
      "ok": 1,
      "why": ".. sube a proyecto y después se entra en js."
     },
     "tip": "cd sin nada te lleva a tu carpeta personal; cd - vuelve a la carpeta anterior."
    }
   ]
  },
  {
   "t": "Archivos y carpetas",
   "d": "Moverse, listar, crear, copiar, mover, borrar, ver contenido y buscar.",
   "secciones": [
    {
     "n": "2.1",
     "t": "Moverse y listar: pwd, cd, ls",
     "m": "5 min",
     "b": [
      "pwd muestra la carpeta actual, cd cambia de carpeta y ls lista su contenido. ls tiene opciones muy útiles: -l muestra los detalles (permisos, propietario, tamaño, fecha), -a incluye los archivos ocultos, -h muestra los tamaños en KB o MB y -R recorre las subcarpetas.",
      "Las opciones se pueden combinar: ls -lah es de los comandos más escritos en cualquier servidor. tree (si está instalado) dibuja el árbol de carpetas."
     ],
     "k": [
      "ls -l detalles · -a ocultos · -h tamaños legibles.",
      "ls -lah combina las tres.",
      "cd ~ o cd sin argumentos → carpeta personal.",
      "cd - → carpeta anterior."
     ],
     "c": "$ ls\n$ ls proyecto\n$ ls -a proyecto\n$ ls -R proyecto",
     "o": "$ ls\nnotas.txt\nproyecto\n$ ls proyecto\ncss\nimg\nindex.html\njs\n$ ls -a proyecto\n.\n..\ncss\nimg\nindex.html\njs\n$ ls -R proyecto\nproyecto:\ncss\nimg\nindex.html\njs\n\nproyecto/css:\nstyles.css\n\nproyecto/img:\nlogo.png\n\nproyecto/js:\napp.js",
     "a": [
      [
       "ls -l",
       "Formato largo con detalles."
      ],
      [
       "ls -a",
       "Incluye ocultos (los que empiezan por punto)."
      ],
      [
       "ls -h",
       "Tamaños legibles (con -l)."
      ],
      [
       "ls -t",
       "Ordenado por fecha."
      ],
      [
       "ls -R",
       "Recursivo (subcarpetas)."
      ],
      [
       "ls *.html",
       "Solo los que acaban en .html."
      ]
     ],
     "at": "Opciones de ls",
     "ah": [
      "Comando",
      "Resultado"
     ],
     "tip": "alias ll=\"ls -lah\" en vuestro ~/.bashrc os ahorrará escribir."
    },
    {
     "n": "2.2",
     "t": "Crear, copiar, mover y borrar",
     "m": "6 min",
     "b": [
      "mkdir crea carpetas (-p crea también las intermedias), touch crea un archivo vacío, cp copia (-r para carpetas enteras), mv mueve o renombra, rm borra archivos (-r para carpetas) y rmdir borra carpetas vacías.",
      "En la terminal no hay papelera: lo que borras con rm desaparece. rm -rf borra todo sin preguntar y es el comando más peligroso que existe; revísalo dos veces antes de pulsar Enter, sobre todo si lleva un asterisco o una ruta absoluta."
     ],
     "k": [
      "mkdir -p a/b/c crea todo el camino.",
      "cp -r origen destino para carpetas.",
      "mv viejo.txt nuevo.txt renombra.",
      "rm no tiene papelera: cuidado con rm -rf."
     ],
     "c": "$ mkdir -p web/assets/img\n$ touch web/index.html web/contacto.html\n$ cp web/index.html web/copia.html\n$ mv web/contacto.html web/contactar.html\n$ rm web/copia.html\n$ cp -r web web-backup\n$ ls web web-backup",
     "o": "$ mkdir -p web/assets/img\n$ touch web/index.html web/contacto.html\n$ cp web/index.html web/copia.html\n$ mv web/contacto.html web/contactar.html\n$ rm web/copia.html\n$ cp -r web web-backup\n$ ls web web-backup\nweb:\nassets\ncontactar.html\nindex.html\n\nweb-backup:\nassets\ncontactar.html\nindex.html",
     "a": [
      [
       "mkdir -p ruta",
       "Crear carpetas (y las intermedias)."
      ],
      [
       "touch archivo",
       "Crear archivo vacío o actualizar su fecha."
      ],
      [
       "cp origen destino",
       "Copiar archivo."
      ],
      [
       "cp -r carpeta destino",
       "Copiar carpeta entera."
      ],
      [
       "mv origen destino",
       "Mover o renombrar."
      ],
      [
       "rm archivo",
       "Borrar archivo."
      ],
      [
       "rm -r carpeta",
       "Borrar carpeta y su contenido."
      ],
      [
       "rm -i",
       "Pedir confirmación antes de borrar."
      ]
     ],
     "at": "Gestión de archivos",
     "ah": [
      "Comando",
      "Qué hace"
     ],
     "e": "ejecutar rm -rf / carpeta (con un espacio de más): borraría todo el sistema empezando por la raíz.",
     "tip": "usad rm -i mientras aprendéis: pregunta antes de borrar cada archivo."
    },
    {
     "n": "2.3",
     "t": "Ver el contenido: cat, less, head, tail",
     "m": "5 min",
     "b": [
      "cat muestra un archivo entero de golpe (útil para archivos cortos), less lo muestra página a página (flechas para moverse, / para buscar, q para salir), head las primeras líneas y tail las últimas.",
      "tail -f sigue mostrando las líneas nuevas que se añaden al archivo en tiempo real: es la forma de vigilar los logs de un servidor mientras pruebas tu aplicación. Se detiene con Ctrl+C."
     ],
     "k": [
      "cat archivo → todo el contenido.",
      "less archivo → paginado (q para salir).",
      "head -n 3 / tail -n 3 → primeras / últimas líneas.",
      "tail -f log → seguir el log en directo."
     ],
     "c": "$ head -n 3 accesos.log\n$ tail -n 2 accesos.log\n$ cat -n alumnos.csv",
     "o": "$ head -n 3 accesos.log\n2026-11-06 10:01 200 GET /index.html\n2026-11-06 10:02 404 GET /entradas.php\n2026-11-06 10:05 200 GET /css/styles.css\n$ tail -n 2 accesos.log\n2026-11-06 10:12 404 GET /favicon.ico\n2026-11-06 10:15 200 GET /index.html\n$ cat -n alumnos.csv\n     1\tnombre;curso;nota\n     2\tAna;DAW1;8.5\n     3\tLuis;DAW2;6\n     4\tMarta;DAW2;9.2\n     5\tJavi;DAW1;4.8\n     6\tSara;DAW1;7.1",
     "tip": "sudo tail -f /var/log/nginx/error.log es lo primero que se mira cuando una web falla."
    },
    {
     "n": "2.4",
     "t": "Comodines y buscar archivos",
     "m": "5 min",
     "b": [
      "Los comodines permiten referirse a varios archivos a la vez: * representa cualquier texto, ? un solo carácter y [abc] uno de los caracteres indicados. Así, *.html son todos los HTML y foto?.jpg encaja con foto1.jpg o fotoA.jpg.",
      "find busca archivos recorriendo carpetas según su nombre (-name), tipo (-type f archivos, -type d carpetas), tamaño (-size) o fecha (-mtime). which indica dónde está instalado un programa."
     ],
     "k": [
      "* cualquier texto · ? un carácter · [0-9] un dígito.",
      "find . -name \"*.css\" busca por nombre.",
      "find . -type d → solo carpetas.",
      "which node → ruta del programa."
     ],
     "c": "$ ls proyecto/*/*\n$ find proyecto -name \"*.js\"\n$ find . -type d | sort\n$ find . -name \"*.html\" -o -name \"*.css\"",
     "o": "$ ls proyecto/*/*\nproyecto/css/styles.css\nproyecto/img/logo.png\nproyecto/js/app.js\n$ find proyecto -name \"*.js\"\nproyecto/js/app.js\n$ find . -type d | sort\n.\n./proyecto\n./proyecto/css\n./proyecto/img\n./proyecto/js\n$ find . -name \"*.html\" -o -name \"*.css\"\n./proyecto/index.html\n./proyecto/css/styles.css",
     "a": [
      [
       "find . -name \"*.log\"",
       "Por nombre (con comodines entre comillas)."
      ],
      [
       "find . -iname \"*.JPG\"",
       "Por nombre sin distinguir mayúsculas."
      ],
      [
       "find . -type f / -type d",
       "Solo archivos / solo carpetas."
      ],
      [
       "find . -size +10M",
       "Mayores de 10 MB."
      ],
      [
       "find . -mtime -1",
       "Modificados en el último día."
      ],
      [
       "find . -name \"*.tmp\" -delete",
       "Buscar y borrar."
      ]
     ],
     "at": "Ejemplos de find",
     "ah": [
      "Comando",
      "Busca"
     ],
     "tip": "poned siempre el patrón de -name entre comillas para que no lo expanda la shell."
    }
   ]
  },
  {
   "t": "Texto, redirecciones y tuberías",
   "d": "grep, redirigir la salida, encadenar comandos y editores de texto.",
   "secciones": [
    {
     "n": "3.1",
     "t": "Buscar texto con grep",
     "m": "5 min",
     "b": [
      "grep busca las líneas de un archivo que contienen un texto o patrón. Opciones habituales: -i ignora mayúsculas, -n muestra el número de línea, -c cuenta las coincidencias, -v muestra las que NO coinciden, -r busca en todas las subcarpetas y -E permite expresiones regulares extendidas.",
      "Es imprescindible para buscar errores en logs o encontrar en qué archivo de un proyecto se usa una función."
     ],
     "k": [
      "grep \"texto\" archivo → líneas que lo contienen.",
      "-i sin mayúsculas · -n número de línea · -c contar.",
      "-v invierte · -r recursivo en carpetas.",
      "grep -rn \"función\" src/ → buscar en el código."
     ],
     "c": "$ grep \"404\" accesos.log\n$ grep -c \"200\" accesos.log\n$ grep -n \"POST\" accesos.log\n$ grep -v \"GET\" accesos.log\n$ grep -E \" (404|500) \" accesos.log",
     "o": "$ grep \"404\" accesos.log\n2026-11-06 10:02 404 GET /entradas.php\n2026-11-06 10:12 404 GET /favicon.ico\n$ grep -c \"200\" accesos.log\n4\n$ grep -n \"POST\" accesos.log\n4:2026-11-06 10:07 500 POST /comprar.php\n$ grep -v \"GET\" accesos.log\n2026-11-06 10:07 500 POST /comprar.php\n$ grep -E \" (404|500) \" accesos.log\n2026-11-06 10:02 404 GET /entradas.php\n2026-11-06 10:07 500 POST /comprar.php\n2026-11-06 10:12 404 GET /favicon.ico",
     "q": {
      "t": "¿Qué opción de grep muestra las líneas que NO contienen el texto?",
      "o": [
       "-n",
       "-v",
       "-c",
       "-i"
      ],
      "ok": 1,
      "why": "-v invierte la búsqueda."
     },
     "tip": "grep -rn \"TODO\" . encuentra todas las tareas pendientes de vuestro proyecto."
    },
    {
     "n": "3.2",
     "t": "Redirecciones",
     "m": "5 min",
     "b": [
      "Por defecto, los comandos escriben en la pantalla (salida estándar). Con > se redirige la salida a un archivo, sustituyendo su contenido; con >> se añade al final. < hace que un comando lea de un archivo. Los errores van por otro canal (salida de error) y se redirigen con 2>.",
      "2>&1 envía los errores al mismo sitio que la salida normal, y /dev/null es un «agujero negro» donde se descarta lo que no interesa."
     ],
     "k": [
      "> sobrescribe · >> añade al final.",
      "2> redirige los errores.",
      "&> o > archivo 2>&1 → todo al archivo.",
      "> /dev/null descarta la salida."
     ],
     "c": "$ echo \"Primera línea\" > notas.txt\n$ echo \"Segunda línea\" >> notas.txt\n$ cat notas.txt\n$ echo \"Borrado y nueva\" > notas.txt\n$ cat notas.txt\n$ ls no-existe 2> errores.txt\n$ cat errores.txt",
     "o": "$ echo \"Primera línea\" > notas.txt\n$ echo \"Segunda línea\" >> notas.txt\n$ cat notas.txt\nPrimera línea\nSegunda línea\n$ echo \"Borrado y nueva\" > notas.txt\n$ cat notas.txt\nBorrado y nueva\n$ ls no-existe 2> errores.txt\n$ cat errores.txt\nls: cannot access 'no-existe': No such file or directory",
     "e": "usar > en lugar de >> y sobrescribir sin querer un archivo importante.",
     "tip": "> archivo vacía un archivo sin borrarlo (útil con logs enormes)."
    },
    {
     "n": "3.3",
     "t": "Tuberías y procesar texto",
     "m": "6 min",
     "b": [
      "La tubería | envía la salida de un comando como entrada del siguiente, lo que permite encadenar herramientas pequeñas para resolver tareas complejas. Es una de las ideas más potentes de Linux.",
      "Herramientas que se combinan constantemente: sort ordena, uniq quita repetidos consecutivos (-c los cuenta), wc -l cuenta líneas, cut extrae columnas (-d separador, -f campo), head/tail limitan y tr sustituye caracteres."
     ],
     "k": [
      "cmd1 | cmd2 → la salida de cmd1 entra en cmd2.",
      "sort | uniq -c | sort -nr → ranking de repeticiones.",
      "cut -d\";\" -f2 → segunda columna de un CSV.",
      "wc -l → número de líneas."
     ],
     "c": "$ cut -d\" \" -f3 accesos.log | sort | uniq -c\n$ cut -d\" \" -f5 accesos.log | sort | uniq -c | sort -nr | head -n 1\n$ tail -n +2 alumnos.csv | cut -d\";\" -f2 | sort -u\n$ grep \"DAW1\" alumnos.csv | wc -l",
     "o": "$ cut -d\" \" -f3 accesos.log | sort | uniq -c\n      4 200\n      2 404\n      1 500\n$ cut -d\" \" -f5 accesos.log | sort | uniq -c | sort -nr | head -n 1\n      3 /index.html\n$ tail -n +2 alumnos.csv | cut -d\";\" -f2 | sort -u\nDAW1\nDAW2\n$ grep \"DAW1\" alumnos.csv | wc -l\n3",
     "a": [
      [
       "sort",
       "Ordenar (-n numérico, -r inverso, -u sin repetidos)."
      ],
      [
       "uniq -c",
       "Contar repetidos consecutivos (ordenar antes)."
      ],
      [
       "wc -l",
       "Contar líneas (-w palabras, -c bytes)."
      ],
      [
       "cut -d\";\" -f2",
       "Extraer la columna 2 separada por ;."
      ],
      [
       "tr \"a-z\" \"A-Z\"",
       "Sustituir caracteres."
      ],
      [
       "head / tail",
       "Primeras / últimas líneas."
      ],
      [
       "tail -n +2",
       "Desde la línea 2 (sin cabecera)."
      ]
     ],
     "at": "Herramientas de texto",
     "ah": [
      "Comando",
      "Qué hace"
     ],
     "tip": "la segunda línea calcula la página más visitada del log en una sola orden."
    },
    {
     "n": "3.4",
     "t": "Editores en la terminal: nano y vim",
     "m": "5 min",
     "b": [
      "En un servidor no hay editor gráfico, así que hay que editar archivos desde la terminal. nano es el más sencillo: se abre con nano archivo, se escribe directamente y los atajos aparecen abajo (Ctrl+O guarda, Ctrl+X sale, Ctrl+W busca).",
      "vim es más potente pero tiene modos: se abre en modo normal; i entra en modo inserción para escribir; Esc vuelve al modo normal; :w guarda, :q sale, :wq guarda y sale y :q! sale sin guardar. Saber salir de vim es casi un rito de iniciación."
     ],
     "k": [
      "nano archivo → Ctrl+O guarda, Ctrl+X sale.",
      "vim: i para escribir, Esc para salir del modo inserción.",
      "vim: :wq guardar y salir · :q! salir sin guardar.",
      "sudo nano /etc/… para archivos de sistema."
     ],
     "c": "# nano\n$ nano /etc/hosts\n#   Ctrl + O  → guardar\n#   Ctrl + X  → salir\n#   Ctrl + W  → buscar\n\n# vim\n$ vim index.html\n#   i      → modo inserción (escribir)\n#   Esc    → volver al modo normal\n#   :w     → guardar\n#   :wq    → guardar y salir\n#   :q!    → salir sin guardar\n#   /texto → buscar",
     "v": 0,
     "tip": "si os quedáis atrapados en vim: Esc, luego :q! y Enter."
    }
   ]
  },
  {
   "t": "Usuarios y permisos",
   "d": "Usuarios, grupos y sudo; permisos rwx, chmod y chown.",
   "secciones": [
    {
     "n": "4.1",
     "t": "Usuarios, grupos y sudo",
     "m": "5 min",
     "b": [
      "Linux es multiusuario: cada usuario tiene su carpeta en /home y pertenece a uno o varios grupos. El usuario root es el administrador y puede hacer cualquier cosa. Trabajar siempre como root es peligroso; lo correcto es usar un usuario normal y anteponer sudo a los comandos que necesitan permisos de administrador.",
      "whoami muestra tu usuario, id tus grupos, adduser crea un usuario, usermod -aG grupo usuario lo añade a un grupo y passwd cambia la contraseña."
     ],
     "k": [
      "root = administrador; evita trabajar como root.",
      "sudo comando → ejecutar como administrador.",
      "id → usuario y grupos.",
      "sudo usermod -aG docker ana → añadir a un grupo."
     ],
     "c": "$ whoami\n$ id\n$ sudo adduser profe\n$ sudo usermod -aG www-data profe\n$ groups profe\n$ sudo passwd profe",
     "v": 0,
     "o": "ana\nuid=1000(ana) gid=1000(ana) groups=1000(ana),27(sudo)\n…\nprofe : profe www-data",
     "a": [
      [
       "whoami",
       "Usuario actual."
      ],
      [
       "id",
       "Identificadores y grupos."
      ],
      [
       "sudo comando",
       "Ejecutar como administrador."
      ],
      [
       "sudo -i",
       "Abrir una sesión de root (con cuidado)."
      ],
      [
       "adduser nombre",
       "Crear usuario (Debian/Ubuntu)."
      ],
      [
       "usermod -aG grupo usuario",
       "Añadir a un grupo."
      ],
      [
       "passwd",
       "Cambiar contraseña."
      ],
      [
       "su usuario",
       "Cambiar de usuario."
      ]
     ],
     "at": "Gestión de usuarios",
     "ah": [
      "Comando",
      "Qué hace"
     ],
     "tip": "para usar Docker sin sudo, se añade el usuario al grupo docker."
    },
    {
     "n": "4.2",
     "t": "Leer los permisos",
     "m": "6 min",
     "b": [
      "Cada archivo tiene un propietario, un grupo y tres conjuntos de permisos: para el propietario (u), para el grupo (g) y para el resto (o). Cada conjunto puede tener r (leer), w (escribir) y x (ejecutar; en carpetas, entrar en ellas).",
      "ls -l los muestra al principio de cada línea: -rwxr-xr-- significa archivo normal (-), propietario rwx, grupo r-x y otros r--. El primer carácter es d para carpetas y l para enlaces."
     ],
     "k": [
      "r leer · w escribir · x ejecutar (o entrar en carpeta).",
      "Tres grupos: propietario, grupo, otros.",
      "Primer carácter: - archivo, d carpeta, l enlace.",
      "ls -l muestra permisos, propietario y grupo."
     ],
     "c": "$ ls -l\n-rw-r--r-- 1 ana ana     19 nov  6 10:15 index.html\n-rwxr-xr-x 1 ana ana    120 nov  6 10:16 desplegar.sh\ndrwxr-x--- 2 ana www  4096 nov  6 10:17 privado\n\n# -rw-r--r--  →  archivo · propietario rw- · grupo r-- · otros r--\n# drwxr-x---  →  carpeta · propietario rwx · grupo r-x · otros ---",
     "v": 0,
     "a": [
      [
       "r (4)",
       "Leer el archivo / listar la carpeta."
      ],
      [
       "w (2)",
       "Modificar el archivo / crear y borrar dentro de la carpeta."
      ],
      [
       "x (1)",
       "Ejecutar el archivo / entrar en la carpeta."
      ],
      [
       "u",
       "Propietario (user)."
      ],
      [
       "g",
       "Grupo (group)."
      ],
      [
       "o",
       "Resto de usuarios (others)."
      ]
     ],
     "at": "Significado de los permisos",
     "ah": [
      "Letra",
      "Significado"
     ],
     "q": {
      "t": "¿Qué puede hacer el grupo con un archivo -rw-r-----?",
      "o": [
       "Leer y escribir",
       "Solo leer",
       "Nada",
       "Ejecutar"
      ],
      "ok": 1,
      "why": "Los permisos del grupo son r--: solo lectura."
     },
     "tip": "el servidor web (www-data) necesita permiso de lectura sobre los archivos de la web."
    },
    {
     "n": "4.3",
     "t": "chmod: cambiar permisos",
     "m": "6 min",
     "b": [
      "chmod cambia los permisos. En modo simbólico se indica a quién (u, g, o, a para todos), si se añade (+), quita (-) o fija (=) y qué permiso: chmod u+x script.sh da permiso de ejecución al propietario.",
      "En modo numérico, cada permiso vale un número (r=4, w=2, x=1) y se suman para cada grupo: 7 = rwx, 6 = rw-, 5 = r-x, 4 = r--. Así, chmod 755 da rwx al propietario y r-x al resto (típico de scripts y carpetas), y chmod 644 da rw- al propietario y r-- al resto (típico de archivos web)."
     ],
     "k": [
      "chmod u+x script.sh → ejecutable para el propietario.",
      "chmod 755 → rwxr-xr-x (scripts, carpetas).",
      "chmod 644 → rw-r--r-- (archivos normales).",
      "chmod 600 → rw------- (claves privadas)."
     ],
     "c": "$ touch script.sh clave.pem web.html\n$ chmod 755 script.sh\n$ chmod 600 clave.pem\n$ chmod 644 web.html\n$ chmod g+w web.html\n$ stat -c \"%A %a %n\" script.sh clave.pem web.html",
     "o": "$ touch script.sh clave.pem web.html\n$ chmod 755 script.sh\n$ chmod 600 clave.pem\n$ chmod 644 web.html\n$ chmod g+w web.html\n$ stat -c \"%A %a %n\" script.sh clave.pem web.html\n-rwxr-xr-x 755 script.sh\n-rw------- 600 clave.pem\n-rw-rw-r-- 664 web.html",
     "a": [
      [
       "777",
       "rwxrwxrwx · todos pueden todo (¡evítalo!)."
      ],
      [
       "755",
       "rwxr-xr-x · scripts y carpetas."
      ],
      [
       "700",
       "rwx------ · solo el propietario."
      ],
      [
       "644",
       "rw-r--r-- · archivos web y de texto."
      ],
      [
       "600",
       "rw------- · claves y archivos privados."
      ],
      [
       "400",
       "r-------- · solo lectura del propietario."
      ]
     ],
     "at": "Permisos numéricos habituales",
     "ah": [
      "Número",
      "Permisos y uso"
     ],
     "e": "«arreglar» un problema de permisos con chmod 777: cualquiera puede modificar o ejecutar los archivos.",
     "tip": "SSH rechaza las claves privadas que no tengan permisos 600."
    },
    {
     "n": "4.4",
     "t": "chown: cambiar el propietario",
     "m": "4 min",
     "b": [
      "chown cambia el propietario y el grupo de un archivo o carpeta: chown usuario:grupo archivo. Con -R se aplica a todo el contenido de una carpeta. Normalmente requiere sudo.",
      "Es habitual al publicar una web: los archivos deben pertenecer al usuario con el que trabaja el servidor web (www-data en Ubuntu con Apache o Nginx) para que pueda leerlos o, en carpetas de subidas, escribir en ellas."
     ],
     "k": [
      "sudo chown ana:ana archivo.",
      "sudo chown -R www-data:www-data /var/www/festival",
      "chgrp cambia solo el grupo.",
      "-R aplica a toda la carpeta."
     ],
     "c": "$ sudo chown -R www-data:www-data /var/www/festival\n$ sudo chown ana:www-data /var/www/festival/config.php\n$ ls -l /var/www/festival",
     "v": 0,
     "o": "total 12\n-rw-r----- 1 ana      www-data  512 nov  6 11:00 config.php\n-rw-r--r-- 1 www-data www-data 2048 nov  6 11:00 index.php\ndrwxrwxr-x 2 www-data www-data 4096 nov  6 11:00 uploads",
     "tip": "combinación típica: propietario tú, grupo www-data, permisos 640 en archivos sensibles."
    }
   ]
  },
  {
   "t": "Procesos, servicios y logs",
   "d": "Ver y terminar procesos, primer y segundo plano, systemctl y journalctl.",
   "secciones": [
    {
     "n": "5.1",
     "t": "Procesos: ps, top y htop",
     "m": "5 min",
     "b": [
      "Un proceso es un programa en ejecución, identificado por un número llamado PID. ps aux lista todos los procesos con su usuario, PID, uso de CPU y memoria. top (o htop, más visual) los muestra en tiempo real ordenados por consumo; se sale con q.",
      "Combinado con grep, ps permite encontrar un proceso concreto: ps aux | grep node. pgrep nombre devuelve directamente su PID."
     ],
     "k": [
      "ps aux → todos los procesos.",
      "top / htop → monitor en tiempo real (q para salir).",
      "ps aux | grep nginx → buscar un proceso.",
      "pgrep -l node → PID por nombre."
     ],
     "c": "$ ps aux | head -n 4\n$ ps aux | grep nginx\n$ pgrep -l node\n$ top",
     "v": 0,
     "o": "USER   PID %CPU %MEM    VSZ   RSS TTY  STAT START   TIME COMMAND\nroot     1  0.0  0.1 167948 11836 ?    Ss   09:00   0:02 /sbin/init\nroot   812  0.0  0.0  55220  1640 ?    Ss   09:00   0:00 nginx: master process\nwww-data 813 0.0 0.1 55888  5320 ?    S    09:00   0:00 nginx: worker process\n2481 node",
     "tip": "htop se instala con sudo apt install htop y es mucho más cómodo que top."
    },
    {
     "n": "5.2",
     "t": "Terminar procesos y segundo plano",
     "m": "5 min",
     "b": [
      "kill PID envía una señal a un proceso para que termine de forma ordenada (SIGTERM). Si no responde, kill -9 PID lo fuerza (SIGKILL), sin darle opción a guardar nada. pkill nombre y killall nombre terminan procesos por su nombre.",
      "Un comando seguido de & se ejecuta en segundo plano y deja libre la terminal. jobs lista los trabajos, fg trae uno al primer plano y Ctrl+Z pausa el actual. Para que un proceso siga vivo al cerrar la terminal se usa nohup, o mejor, un servicio de systemd."
     ],
     "k": [
      "kill PID → terminar ordenadamente.",
      "kill -9 PID → forzar (último recurso).",
      "comando & → en segundo plano.",
      "jobs, fg, bg y Ctrl+Z gestionan los trabajos."
     ],
     "c": "$ sleep 300 &\n$ jobs\n$ kill %1\n$ jobs",
     "o": "$ sleep 300 &\n[1] 2481\n$ jobs\n[1]+  Running                 sleep 300 &\n$ kill %1\n$ jobs\n[1]+  Terminated              sleep 300",
     "a": [
      [
       "kill PID",
       "Señal SIGTERM: terminar ordenadamente."
      ],
      [
       "kill -9 PID",
       "SIGKILL: forzar el cierre."
      ],
      [
       "pkill nombre",
       "Terminar por nombre."
      ],
      [
       "comando &",
       "Ejecutar en segundo plano."
      ],
      [
       "jobs",
       "Ver trabajos de la terminal."
      ],
      [
       "fg %1 / bg %1",
       "Traer al primer plano / continuar en segundo."
      ],
      [
       "Ctrl + Z",
       "Pausar el proceso actual."
      ]
     ],
     "at": "Control de procesos",
     "ah": [
      "Comando",
      "Qué hace"
     ],
     "tip": "si un puerto está «ocupado» al arrancar vuestro servidor, es que otro proceso lo usa: encontradlo y terminadlo."
    },
    {
     "n": "5.3",
     "t": "Servicios con systemctl",
     "m": "5 min",
     "b": [
      "Los servicios (o demonios) son programas que se ejecutan en segundo plano de forma continua: el servidor web, la base de datos, SSH. En casi todas las distribuciones modernas los gestiona systemd con el comando systemctl.",
      "systemctl status muestra si un servicio está activo y sus últimos mensajes; start, stop y restart lo arrancan, paran o reinician; reload recarga la configuración sin cortar conexiones; enable hace que arranque automáticamente al encender el equipo."
     ],
     "k": [
      "sudo systemctl status nginx.",
      "start / stop / restart / reload.",
      "enable → arranca al iniciar el sistema.",
      "Tras cambiar la configuración: reload o restart."
     ],
     "c": "$ sudo systemctl status nginx\n$ sudo systemctl restart nginx\n$ sudo systemctl reload nginx\n$ sudo systemctl enable postgresql\n$ systemctl list-units --type=service --state=running",
     "v": 0,
     "o": "● nginx.service - A high performance web server and a reverse proxy server\n     Loaded: loaded (/lib/systemd/system/nginx.service; enabled)\n     Active: active (running) since Fri 2026-11-06 09:00:12 CET; 2h ago\n   Main PID: 812 (nginx)",
     "a": [
      [
       "systemctl status s",
       "Estado y últimos mensajes."
      ],
      [
       "systemctl start s",
       "Arrancar."
      ],
      [
       "systemctl stop s",
       "Parar."
      ],
      [
       "systemctl restart s",
       "Reiniciar."
      ],
      [
       "systemctl reload s",
       "Recargar configuración."
      ],
      [
       "systemctl enable s",
       "Arrancar al iniciar el sistema."
      ],
      [
       "systemctl disable s",
       "No arrancar al iniciar."
      ]
     ],
     "at": "systemctl",
     "ah": [
      "Comando",
      "Qué hace"
     ],
     "tip": "nginx -t comprueba la configuración antes de recargar: evita tumbar el servidor."
    },
    {
     "n": "5.4",
     "t": "Logs: journalctl y /var/log",
     "m": "4 min",
     "b": [
      "Los registros (logs) cuentan lo que ha pasado en el sistema y en cada servicio: errores, accesos, arranques. Muchos programas escriben en /var/log (por ejemplo /var/log/nginx/access.log y error.log), y systemd guarda los de todos sus servicios, que se consultan con journalctl.",
      "journalctl -u nginx muestra los mensajes de un servicio, -f los sigue en tiempo real, -n 50 limita a los últimos y --since \"1 hour ago\" filtra por fecha."
     ],
     "k": [
      "journalctl -u servicio → logs de un servicio.",
      "journalctl -f → seguir en directo.",
      "tail -f /var/log/nginx/error.log.",
      "Lee los logs antes de buscar el error en internet."
     ],
     "c": "$ sudo journalctl -u nginx -n 20\n$ sudo journalctl -u mi-api -f\n$ sudo journalctl --since \"1 hour ago\" -p err\n$ sudo tail -f /var/log/nginx/access.log",
     "v": 0,
     "tip": "un 502 Bad Gateway en Nginx casi siempre significa que la aplicación de detrás está caída: mirad su journalctl."
    }
   ]
  },
  {
   "t": "Paquetes, disco y entorno",
   "d": "apt, espacio en disco y memoria, comprimir archivos y variables de entorno.",
   "secciones": [
    {
     "n": "6.1",
     "t": "Instalar programas con apt",
     "m": "5 min",
     "b": [
      "En Debian y Ubuntu los programas se instalan desde repositorios con apt. Primero se actualiza la lista de paquetes disponibles con sudo apt update, después se instalan con sudo apt install paquete y se actualiza todo el sistema con sudo apt upgrade.",
      "apt remove desinstala, apt search busca y apt show muestra información. Otras distribuciones usan otros gestores: dnf en Fedora, pacman en Arch y apk en Alpine."
     ],
     "k": [
      "sudo apt update → actualizar la lista de paquetes.",
      "sudo apt install nginx git curl.",
      "sudo apt upgrade → actualizar el sistema.",
      "apt search nombre → buscar paquetes."
     ],
     "c": "$ sudo apt update\n$ sudo apt install -y nginx git curl htop\n$ sudo apt upgrade -y\n$ apt search php8.3\n$ sudo apt remove --purge apache2\n$ sudo apt autoremove",
     "v": 0,
     "a": [
      [
       "apt update",
       "Actualiza la lista de paquetes."
      ],
      [
       "apt upgrade",
       "Actualiza los paquetes instalados."
      ],
      [
       "apt install p",
       "Instala un paquete."
      ],
      [
       "apt remove p",
       "Desinstala (--purge borra la configuración)."
      ],
      [
       "apt search texto",
       "Busca paquetes."
      ],
      [
       "apt show p",
       "Información de un paquete."
      ],
      [
       "apt autoremove",
       "Borra dependencias que ya no se usan."
      ]
     ],
     "at": "Comandos de apt",
     "ah": [
      "Comando",
      "Qué hace"
     ],
     "tip": "-y responde «sí» automáticamente: útil en scripts y Dockerfiles."
    },
    {
     "n": "6.2",
     "t": "Disco y memoria: df, du, free",
     "m": "4 min",
     "b": [
      "df -h muestra el espacio libre y ocupado de cada disco, du -sh carpeta lo que ocupa una carpeta y du -sh * lo que ocupa cada elemento de la carpeta actual. free -h muestra la memoria RAM y la swap usadas.",
      "Un servidor sin espacio en disco deja de funcionar de formas extrañas (la base de datos no escribe, los logs fallan), así que conviene vigilarlo."
     ],
     "k": [
      "df -h → espacio por disco.",
      "du -sh carpeta → tamaño de una carpeta.",
      "du -sh * | sort -h → qué ocupa más.",
      "free -h → memoria RAM."
     ],
     "c": "$ du -sh proyecto\n$ du -sh proyecto/* | sort -h",
     "o": "$ du -sh proyecto\n324K\tproyecto\n$ du -sh proyecto/* | sort -h\n4.0K\tproyecto/index.html\n8.0K\tproyecto/css\n8.0K\tproyecto/js\n300K\tproyecto/img",
     "tip": "los logs y las imágenes Docker antiguas son los culpables habituales de llenar el disco."
    },
    {
     "n": "6.3",
     "t": "Comprimir: tar y zip",
     "m": "5 min",
     "b": [
      "tar agrupa archivos en uno solo y, con la opción z, lo comprime con gzip (.tar.gz). Las opciones más usadas: c crear, x extraer, t listar, v mostrar el progreso y f indicar el nombre del archivo. Es el formato estándar para copias de seguridad en Linux.",
      "zip y unzip trabajan con archivos .zip, más cómodos para compartir con usuarios de Windows."
     ],
     "k": [
      "tar -czf copia.tar.gz carpeta → comprimir.",
      "tar -xzf copia.tar.gz → extraer.",
      "tar -tzf copia.tar.gz → ver el contenido.",
      "zip -r web.zip web/ y unzip web.zip."
     ],
     "c": "$ tar -czf proyecto.tar.gz proyecto\n$ tar -tzf proyecto.tar.gz | sort\n$ rm -r proyecto\n$ tar -xzf proyecto.tar.gz\n$ ls proyecto",
     "o": "$ tar -czf proyecto.tar.gz proyecto\n$ tar -tzf proyecto.tar.gz | sort\nproyecto/\nproyecto/css/\nproyecto/css/styles.css\nproyecto/img/\nproyecto/img/logo.png\nproyecto/index.html\nproyecto/js/\nproyecto/js/app.js\n$ rm -r proyecto\n$ tar -xzf proyecto.tar.gz\n$ ls proyecto\ncss\nimg\nindex.html\njs",
     "a": [
      [
       "c",
       "Crear un archivo."
      ],
      [
       "x",
       "Extraer."
      ],
      [
       "t",
       "Listar el contenido."
      ],
      [
       "z",
       "Comprimir / descomprimir con gzip."
      ],
      [
       "v",
       "Mostrar los archivos procesados."
      ],
      [
       "f",
       "Indicar el nombre del archivo (va al final)."
      ]
     ],
     "at": "Opciones de tar",
     "ah": [
      "Letra",
      "Significado"
     ],
     "tip": "para recordarlo: «czf = crear zip file», «xzf = extraer zip file»."
    },
    {
     "n": "6.4",
     "t": "Variables de entorno y PATH",
     "m": "5 min",
     "b": [
      "Las variables de entorno guardan configuración que leen los programas: HOME (tu carpeta), USER, PATH… Se consultan con echo $NOMBRE y se crean con export NOMBRE=valor, que solo dura mientras la terminal esté abierta. Para que sean permanentes se añaden al archivo ~/.bashrc.",
      "PATH es la lista de carpetas, separadas por dos puntos, donde la shell busca los programas. Si instalas una herramienta y aparece «command not found», probablemente su carpeta no está en el PATH."
     ],
     "k": [
      "echo $PATH → dónde se buscan los programas.",
      "export DB_USER=ana → variable para esta sesión.",
      "Permanente: añádela a ~/.bashrc y ejecuta source ~/.bashrc.",
      "env → lista todas las variables."
     ],
     "c": "$ export FESTIVAL_ENV=desarrollo\n$ echo \"Entorno: $FESTIVAL_ENV\"\n$ echo $PATH | tr \":\" \"\\n\" | head -n 2\n$ bash -c 'echo \"Un proceso hijo ve: $FESTIVAL_ENV\"'\n$ unset FESTIVAL_ENV\n$ echo \"Tras unset: [$FESTIVAL_ENV]\"",
     "o": "$ export FESTIVAL_ENV=desarrollo\n$ echo \"Entorno: $FESTIVAL_ENV\"\nEntorno: desarrollo\n$ echo $PATH | tr \":\" \"\\n\" | head -n 2\n/.nix-profile/bin\n/nix/var/nix/profiles/default/bin\n$ bash -c 'echo \"Un proceso hijo ve: $FESTIVAL_ENV\"'\nUn proceso hijo ve: desarrollo\n$ unset FESTIVAL_ENV\n$ echo \"Tras unset: [$FESTIVAL_ENV]\"\nTras unset: []",
     "tip": "así se pasan contraseñas y URLs de base de datos a las aplicaciones sin escribirlas en el código."
    }
   ]
  },
  {
   "t": "Redes y SSH",
   "d": "Configuración de red, peticiones HTTP con curl, SSH, claves y puertos.",
   "secciones": [
    {
     "n": "7.1",
     "t": "Red: ip, ping y DNS",
     "m": "4 min",
     "b": [
      "ip a muestra las interfaces de red y sus direcciones IP; ping comprueba si un equipo responde (Ctrl+C para parar, -c 4 para enviar solo cuatro paquetes); hostname -I muestra la IP local y dig o nslookup consultan el DNS para ver a qué IP apunta un dominio.",
      "Cuando una web no carga, el orden de diagnóstico es: ¿tengo red? (ping a una IP), ¿funciona el DNS? (dig dominio), ¿responde el servidor? (curl)."
     ],
     "k": [
      "ip a → direcciones IP.",
      "ping -c 4 dominio → ¿responde?",
      "dig dominio +short → IP del dominio.",
      "traceroute → camino hasta el servidor."
     ],
     "c": "$ ip -brief a\n$ ping -c 2 8.8.8.8\n$ dig festivaldaw.es +short",
     "v": 0,
     "o": "lo               UNKNOWN        127.0.0.1/8\neth0             UP             192.168.1.40/24\nPING 8.8.8.8 (8.8.8.8) 56(84) bytes of data.\n64 bytes from 8.8.8.8: icmp_seq=1 ttl=117 time=12.4 ms\n64 bytes from 8.8.8.8: icmp_seq=2 ttl=117 time=12.1 ms\n76.76.21.21",
     "tip": "127.0.0.1 (localhost) es siempre tu propio equipo."
    },
    {
     "n": "7.2",
     "t": "Peticiones HTTP con curl",
     "m": "5 min",
     "b": [
      "curl hace peticiones HTTP desde la terminal: es la forma más rápida de probar una API o comprobar si una web responde. -I muestra solo las cabeceras, -X indica el método, -H añade cabeceras, -d envía datos y -o guarda la respuesta en un archivo. wget está pensado sobre todo para descargar archivos.",
      "Con -s (silencioso) y una tubería a jq, se pueden leer y filtrar respuestas JSON cómodamente."
     ],
     "k": [
      "curl URL → muestra la respuesta.",
      "curl -I URL → solo cabeceras (código de estado).",
      "curl -X POST -H \"Content-Type: application/json\" -d '{…}' URL.",
      "curl -s URL | jq . → JSON formateado."
     ],
     "c": "$ curl -I https://festivaldaw.es\n$ curl -s https://jsonplaceholder.typicode.com/users/1 | jq .name\n$ curl -X POST http://localhost:3000/api/entradas \\\n       -H \"Content-Type: application/json\" \\\n       -d '{\"tipo\": \"abono\", \"cantidad\": 2}'\n$ wget https://ejemplo.com/backup.tar.gz",
     "v": 0,
     "o": "HTTP/2 200\ncontent-type: text/html; charset=utf-8\nserver: Vercel\n\"Leanne Graham\"\n{\"id\":7,\"tipo\":\"abono\",\"cantidad\":2}",
     "a": [
      [
       "-I",
       "Solo cabeceras de la respuesta."
      ],
      [
       "-X MÉTODO",
       "GET, POST, PUT, DELETE…"
      ],
      [
       "-H \"Cabecera: valor\"",
       "Añadir una cabecera."
      ],
      [
       "-d 'datos'",
       "Enviar cuerpo (POST)."
      ],
      [
       "-o archivo",
       "Guardar la respuesta."
      ],
      [
       "-L",
       "Seguir redirecciones."
      ],
      [
       "-s",
       "Modo silencioso."
      ],
      [
       "-v",
       "Ver la petición completa (depurar)."
      ]
     ],
     "at": "Opciones de curl",
     "ah": [
      "Opción",
      "Qué hace"
     ],
     "tip": "curl -v muestra toda la conversación HTTP: perfecto para entender qué falla en una API."
    },
    {
     "n": "7.3",
     "t": "SSH: conectarse a un servidor",
     "m": "6 min",
     "b": [
      "SSH (Secure Shell) permite abrir una terminal en un equipo remoto de forma cifrada: ssh usuario@servidor. Es la forma de administrar cualquier servidor o VPS. scp copia archivos entre tu equipo y el servidor, y rsync sincroniza carpetas copiando solo lo que ha cambiado.",
      "En lugar de contraseña, lo seguro es usar claves: ssh-keygen genera una pareja (privada, que nunca sale de tu equipo, y pública), ssh-copy-id instala la pública en el servidor y a partir de ahí entras sin contraseña. GitHub usa el mismo sistema."
     ],
     "k": [
      "ssh usuario@IP → terminal remota.",
      "ssh-keygen -t ed25519 → crear claves.",
      "ssh-copy-id usuario@IP → instalar la clave pública.",
      "scp y rsync copian archivos al servidor."
     ],
     "c": "# Crear la pareja de claves (una vez)\n$ ssh-keygen -t ed25519 -C \"ana@daw\"\n\n# Copiar la clave pública al servidor y entrar\n$ ssh-copy-id ana@203.0.113.10\n$ ssh ana@203.0.113.10\n\n# Copiar archivos\n$ scp proyecto.tar.gz ana@203.0.113.10:/home/ana/\n$ rsync -avz --delete web/ ana@203.0.113.10:/var/www/festival/\n\n# Atajo en ~/.ssh/config\nHost festival\n    HostName 203.0.113.10\n    User ana\n# Después basta con: ssh festival",
     "v": 0,
     "e": "compartir o subir a GitHub la clave privada (id_ed25519): da acceso a todos tus servidores.",
     "tip": "la misma clave pública sirve para GitHub: pegadla en Settings → SSH and GPG keys."
    },
    {
     "n": "7.4",
     "t": "Puertos y cortafuegos",
     "m": "5 min",
     "b": [
      "Cada servicio de red escucha en un puerto: 22 SSH, 80 HTTP, 443 HTTPS, 5432 PostgreSQL, 3306 MySQL, 3000 o 8080 para aplicaciones en desarrollo. ss -tulpn muestra qué puertos están abiertos y qué programa los usa.",
      "El cortafuegos controla qué puertos son accesibles desde fuera. En Ubuntu, ufw lo hace sencillo: se permite SSH, HTTP y HTTPS, y se activa. La base de datos no debería estar abierta a internet."
     ],
     "k": [
      "ss -tulpn → puertos en escucha.",
      "sudo ufw allow OpenSSH → antes de activar el cortafuegos.",
      "sudo ufw allow 80,443/tcp → web.",
      "Nunca expongas la base de datos a internet."
     ],
     "c": "$ sudo ss -tulpn\n$ sudo ufw allow OpenSSH\n$ sudo ufw allow 80,443/tcp\n$ sudo ufw enable\n$ sudo ufw status",
     "v": 0,
     "o": "Netid State  Local Address:Port  Process\ntcp   LISTEN 0.0.0.0:22          users:((\"sshd\",pid=700))\ntcp   LISTEN 0.0.0.0:80          users:((\"nginx\",pid=812))\ntcp   LISTEN 127.0.0.1:5432      users:((\"postgres\",pid=900))\nStatus: active\nTo                         Action      From\n--                         ------      ----\nOpenSSH                    ALLOW       Anywhere\n80,443/tcp                 ALLOW       Anywhere",
     "a": [
      [
       "22",
       "SSH."
      ],
      [
       "80",
       "HTTP."
      ],
      [
       "443",
       "HTTPS."
      ],
      [
       "3306",
       "MySQL / MariaDB."
      ],
      [
       "5432",
       "PostgreSQL."
      ],
      [
       "6379",
       "Redis."
      ],
      [
       "3000 / 5173 / 8080",
       "Aplicaciones en desarrollo."
      ]
     ],
     "at": "Puertos habituales",
     "ah": [
      "Puerto",
      "Servicio"
     ],
     "e": "activar ufw sin permitir antes SSH: te quedas fuera de tu propio servidor.",
     "tip": "fijaos en que PostgreSQL escucha en 127.0.0.1: solo es accesible desde el propio servidor."
    }
   ]
  },
  {
   "t": "Scripts en Bash",
   "d": "Crear scripts, variables, condiciones, bucles y tareas programadas con cron.",
   "secciones": [
    {
     "n": "8.1",
     "t": "Tu primer script",
     "m": "5 min",
     "b": [
      "Un script de Bash es un archivo de texto con comandos que se ejecutan en orden. La primera línea, el shebang #!/bin/bash, indica qué intérprete debe usarse. Para ejecutarlo hay que darle permiso de ejecución (chmod +x) y llamarlo con su ruta: ./script.sh.",
      "Los scripts automatizan tareas repetitivas: copias de seguridad, despliegues, preparar un entorno. set -e hace que el script se detenga en cuanto un comando falle, lo que evita desastres."
     ],
     "k": [
      "Primera línea: #!/bin/bash.",
      "chmod +x script.sh y ./script.sh.",
      "set -e → detenerse si algo falla.",
      "Comentarios con #."
     ],
     "c": "$ cat > hola.sh <<'EOF'\n#!/bin/bash\nset -e\necho \"Hola, $USER\"\necho \"Hoy hay $(ls | wc -l) elementos en esta carpeta\"\nEOF\n$ chmod +x hola.sh\n$ ./hola.sh",
     "o": "$ cat > hola.sh <<'EOF'\n$ chmod +x hola.sh\n$ ./hola.sh\nHola, ana\nHoy hay 3 elementos en esta carpeta",
     "tip": "$( comando ) sustituye la salida de un comando dentro de otro."
    },
    {
     "n": "8.2",
     "t": "Variables, argumentos y read",
     "m": "5 min",
     "b": [
      "Las variables se crean sin espacios alrededor del igual (nombre=\"Ana\") y se leen con $nombre o ${nombre}. Los argumentos que recibe el script están en $1, $2…; $# es cuántos hay y $@ todos juntos. read pide un dato al usuario.",
      "Pon las variables entre comillas dobles (\"$archivo\") para que funcionen aunque contengan espacios. $? guarda el código de salida del último comando: 0 si fue bien y otro número si falló."
     ],
     "k": [
      "nombre=\"Ana\" (sin espacios junto al =).",
      "$1, $2 argumentos · $# cuántos · $@ todos.",
      "read -p \"Pregunta: \" variable.",
      "Comillas dobles: \"$variable\"."
     ],
     "c": "$ cat > saludo.sh <<'EOF'\n#!/bin/bash\ncurso=\"DAW\"\necho \"Has pasado $# argumentos\"\necho \"Hola, $1. Bienvenida a $curso\"\necho \"Todos: $@\"\nEOF\n$ chmod +x saludo.sh\n$ ./saludo.sh Ana Luis Sara",
     "o": "$ cat > saludo.sh <<'EOF'\n$ chmod +x saludo.sh\n$ ./saludo.sh Ana Luis Sara\nHas pasado 3 argumentos\nHola, Ana. Bienvenida a DAW\nTodos: Ana Luis Sara",
     "e": "escribir nombre = \"Ana\" con espacios: Bash intenta ejecutar un comando llamado «nombre».",
     "tip": "read -s oculta lo que se escribe, útil para pedir contraseñas."
    },
    {
     "n": "8.3",
     "t": "Condiciones",
     "m": "5 min",
     "b": [
      "if [ condición ]; then … elif …; else … fi evalúa condiciones. Dentro de los corchetes se usan operadores propios: -eq, -ne, -lt, -gt para comparar números; = y != para textos; -f para comprobar si existe un archivo, -d una carpeta y -z si un texto está vacío. Los espacios dentro de los corchetes son obligatorios.",
      "[[ … ]] es una versión mejorada de Bash que admite && y || dentro y comparaciones de patrones."
     ],
     "k": [
      "if [ \"$a\" -gt 5 ]; then … fi",
      "Números: -eq -ne -lt -le -gt -ge.",
      "Archivos: -f existe archivo · -d existe carpeta.",
      "Espacios obligatorios: [ \"$x\" = \"si\" ]."
     ],
     "c": "$ cat > comprobar.sh <<'EOF'\n#!/bin/bash\narchivo=\"$1\"\nif [ -z \"$archivo\" ]; then\n  echo \"Uso: ./comprobar.sh archivo\"\n  exit 1\nelif [ -f \"$archivo\" ]; then\n  lineas=$(wc -l < \"$archivo\")\n  echo \"$archivo existe y tiene $lineas líneas\"\n  if [ \"$lineas\" -gt 5 ]; then echo \"Es un archivo largo\"; fi\nelse\n  echo \"$archivo no existe\"\nfi\nEOF\n$ chmod +x comprobar.sh\n$ ./comprobar.sh\n$ ./comprobar.sh alumnos.csv\n$ ./comprobar.sh nada.txt",
     "o": "$ cat > comprobar.sh <<'EOF'\n$ chmod +x comprobar.sh\n$ ./comprobar.sh\nUso: ./comprobar.sh archivo\n$ ./comprobar.sh alumnos.csv\nalumnos.csv existe y tiene 6 líneas\nEs un archivo largo\n$ ./comprobar.sh nada.txt\nnada.txt no existe",
     "a": [
      [
       "-eq / -ne",
       "Igual / distinto (números)."
      ],
      [
       "-lt / -le / -gt / -ge",
       "Menor, menor o igual, mayor, mayor o igual."
      ],
      [
       "= / !=",
       "Igual / distinto (textos)."
      ],
      [
       "-z / -n",
       "Texto vacío / no vacío."
      ],
      [
       "-f / -d / -e",
       "Existe archivo / carpeta / cualquiera."
      ],
      [
       "-r / -w / -x",
       "Se puede leer / escribir / ejecutar."
      ]
     ],
     "at": "Operadores de test",
     "ah": [
      "Operador",
      "Comprueba"
     ],
     "tip": "exit 1 termina el script indicando que ha habido un error."
    },
    {
     "n": "8.4",
     "t": "Bucles",
     "m": "5 min",
     "b": [
      "for recorre una lista de elementos: palabras, archivos que encajan con un comodín (for f in *.jpg) o una secuencia de números ({1..5}). while repite mientras se cumpla una condición, y while read linea permite procesar un archivo línea a línea.",
      "Son la base de las tareas por lotes: renombrar cientos de fotos, convertir archivos o hacer una acción sobre cada servidor de una lista."
     ],
     "k": [
      "for f in *.html; do … done",
      "for i in {1..5}; do … done",
      "while read linea; do … done < archivo",
      "$(( )) para operaciones aritméticas."
     ],
     "c": "$ for i in {1..3}; do echo \"Vuelta $i\"; done\n$ for f in proyecto/*/*; do echo \"$(basename \"$f\") → $(dirname \"$f\")\"; done\n$ total=0\n$ while IFS=\";\" read -r nombre curso nota; do echo \"$nombre ($curso)\"; total=$((total + 1)); done < <(tail -n +2 alumnos.csv)\n$ echo \"Total: $total alumnos\"",
     "o": "$ for i in {1..3}; do echo \"Vuelta $i\"; done\nVuelta 1\nVuelta 2\nVuelta 3\n$ for f in proyecto/*/*; do echo \"$(basename \"$f\") → $(dirname \"$f\")\"; done\nstyles.css → proyecto/css\nlogo.png → proyecto/img\napp.js → proyecto/js\n$ total=0\n$ while IFS=\";\" read -r nombre curso nota; do echo \"$nombre ($curso)\"; total=$((total + 1)); done < <(tail -n +2 alumnos.csv)\nAna (DAW1)\nLuis (DAW2)\nMarta (DAW2)\nJavi (DAW1)\nSara (DAW1)\n$ echo \"Total: $total alumnos\"\nTotal: 5 alumnos",
     "tip": "IFS=\";\" indica a read que separe los campos por punto y coma."
    },
    {
     "n": "8.5",
     "t": "Tareas programadas con cron",
     "m": "5 min",
     "b": [
      "cron ejecuta comandos o scripts automáticamente según un horario. Las tareas se editan con crontab -e y cada línea tiene cinco campos de tiempo (minuto, hora, día del mes, mes y día de la semana) seguidos del comando. Un asterisco significa «todos».",
      "Por ejemplo, 0 3 * * * ejecuta algo todos los días a las 3:00, y */15 * * * * cada 15 minutos. Se usa para copias de seguridad, limpieza de archivos o renovar certificados. crontab.guru ayuda a escribir los horarios."
     ],
     "k": [
      "crontab -e → editar tareas; crontab -l → listarlas.",
      "minuto hora día mes día-semana comando.",
      "* = todos · */15 = cada 15 · 1-5 = de lunes a viernes.",
      "Usa rutas absolutas en los scripts de cron."
     ],
     "c": "$ crontab -e\n\n# m   h   dom mon dow   comando\n  0   3   *   *   *     /home/ana/scripts/backup.sh >> /home/ana/backup.log 2>&1\n  */15 *  *   *   *     /usr/bin/curl -s https://festivaldaw.es/health > /dev/null\n  30  8   *   *   1-5   /home/ana/scripts/informe.sh\n  0   0   1   *   *     find /var/log/app -name \"*.log\" -mtime +30 -delete\n\n# Script de copia de seguridad: backup.sh\n#!/bin/bash\nset -e\nfecha=$(date +%F)\npg_dump festival_db > /home/ana/backups/festival_$fecha.sql\ntar -czf /home/ana/backups/web_$fecha.tar.gz /var/www/festival\nfind /home/ana/backups -mtime +7 -delete",
     "v": 0,
     "a": [
      [
       "0 3 * * *",
       "Todos los días a las 3:00."
      ],
      [
       "*/15 * * * *",
       "Cada 15 minutos."
      ],
      [
       "30 8 * * 1-5",
       "De lunes a viernes a las 8:30."
      ],
      [
       "0 0 1 * *",
       "El día 1 de cada mes a medianoche."
      ],
      [
       "@reboot",
       "Al arrancar el equipo."
      ]
     ],
     "at": "Ejemplos de horario",
     "ah": [
      "Expresión",
      "Cuándo se ejecuta"
     ],
     "tip": "crontab.guru traduce a palabras cualquier horario de cron."
    }
   ]
  }
 ],
 "chuleta": [
  [
   "pwd",
   "Muestra la carpeta en la que estás.",
   "pwd  # /home/ana/proyecto",
   "Moverse y listar"
  ],
  [
   "cd ruta",
   "Cambiar de carpeta. cd .. sube un nivel, cd ~ va a tu carpeta personal, cd - vuelve a la anterior.",
   "cd /var/www/festival",
   "Moverse y listar"
  ],
  [
   "ls -lah",
   "Listar con detalles (-l), ocultos (-a) y tamaños legibles (-h).",
   "ls -lah",
   "Moverse y listar"
  ],
  [
   "tree",
   "Árbol de carpetas (sudo apt install tree).",
   "tree -L 2",
   "Moverse y listar"
  ],
  [
   "mkdir -p ruta",
   "Crear carpetas, incluidas las intermedias.",
   "mkdir -p web/css web/js",
   "Archivos y carpetas"
  ],
  [
   "touch archivo",
   "Crear un archivo vacío.",
   "touch index.html",
   "Archivos y carpetas"
  ],
  [
   "cp / cp -r",
   "Copiar archivos / carpetas enteras.",
   "cp -r web web-backup",
   "Archivos y carpetas"
  ],
  [
   "mv origen destino",
   "Mover o renombrar.",
   "mv viejo.html nuevo.html",
   "Archivos y carpetas"
  ],
  [
   "rm / rm -r",
   "Borrar archivos / carpetas. No hay papelera.",
   "rm -r carpeta-antigua",
   "Archivos y carpetas"
  ],
  [
   "cat / less",
   "Ver un archivo entero / paginado (q para salir).",
   "less /etc/nginx/nginx.conf",
   "Archivos y carpetas"
  ],
  [
   "head / tail -f",
   "Primeras o últimas líneas; -f sigue el archivo en directo.",
   "tail -f /var/log/nginx/error.log",
   "Archivos y carpetas"
  ],
  [
   "find",
   "Buscar archivos por nombre, tipo, tamaño o fecha.",
   "find . -name \"*.php\" -type f",
   "Archivos y carpetas"
  ],
  [
   "* ? [ ]",
   "Comodines: cualquier texto, un carácter, uno de una lista.",
   "ls *.html",
   "Archivos y carpetas"
  ],
  [
   "grep",
   "Buscar líneas que contienen un texto. -i -n -c -v -r.",
   "grep -rn \"conexion\" src/",
   "Texto y tuberías"
  ],
  [
   "cmd > archivo / >>",
   "Redirigir la salida a un archivo (sobrescribir / añadir).",
   "ls > lista.txt",
   "Texto y tuberías"
  ],
  [
   "2> / 2>&1",
   "Redirigir los errores / errores y salida juntos.",
   "comando > salida.log 2>&1",
   "Texto y tuberías"
  ],
  [
   "cmd1 | cmd2",
   "Tubería: la salida de uno entra en el siguiente.",
   "cat log | grep 404 | wc -l",
   "Texto y tuberías"
  ],
  [
   "sort / uniq -c",
   "Ordenar / contar repetidos (ordenar antes).",
   "sort lista.txt | uniq -c | sort -nr",
   "Texto y tuberías"
  ],
  [
   "cut -d -f",
   "Extraer columnas de un texto con separador.",
   "cut -d\";\" -f1 alumnos.csv",
   "Texto y tuberías"
  ],
  [
   "wc -l",
   "Contar líneas.",
   "wc -l alumnos.csv",
   "Texto y tuberías"
  ],
  [
   "nano / vim",
   "Editores de terminal. nano: Ctrl+O guarda, Ctrl+X sale. vim: i, Esc, :wq.",
   "sudo nano /etc/hosts",
   "Texto y tuberías"
  ],
  [
   "sudo",
   "Ejecutar un comando como administrador.",
   "sudo apt update",
   "Usuarios y permisos"
  ],
  [
   "whoami / id",
   "Usuario actual / sus grupos.",
   "id",
   "Usuarios y permisos"
  ],
  [
   "chmod 755 / 644 / 600",
   "Permisos numéricos: scripts y carpetas / archivos / claves privadas.",
   "chmod 600 ~/.ssh/id_ed25519",
   "Usuarios y permisos"
  ],
  [
   "chmod u+x",
   "Permisos en modo simbólico.",
   "chmod +x desplegar.sh",
   "Usuarios y permisos"
  ],
  [
   "chown usuario:grupo",
   "Cambiar propietario y grupo (-R recursivo).",
   "sudo chown -R www-data:www-data /var/www/festival",
   "Usuarios y permisos"
  ],
  [
   "usermod -aG grupo usuario",
   "Añadir un usuario a un grupo.",
   "sudo usermod -aG docker ana",
   "Usuarios y permisos"
  ],
  [
   "ps aux / htop",
   "Listar procesos / monitor en tiempo real.",
   "ps aux | grep node",
   "Procesos y servicios"
  ],
  [
   "kill / kill -9",
   "Terminar un proceso por su PID (forzado con -9).",
   "kill 2481",
   "Procesos y servicios"
  ],
  [
   "comando &",
   "Ejecutar en segundo plano. jobs, fg y bg lo gestionan.",
   "npm run dev &",
   "Procesos y servicios"
  ],
  [
   "systemctl",
   "Gestionar servicios: status, start, stop, restart, reload, enable.",
   "sudo systemctl restart nginx",
   "Procesos y servicios"
  ],
  [
   "journalctl -u",
   "Logs de un servicio (-f para seguir).",
   "sudo journalctl -u nginx -f",
   "Procesos y servicios"
  ],
  [
   "apt update / install",
   "Actualizar la lista de paquetes e instalar programas.",
   "sudo apt update && sudo apt install -y git",
   "Sistema"
  ],
  [
   "df -h / du -sh / free -h",
   "Espacio en disco / tamaño de carpeta / memoria.",
   "du -sh /var/log/*",
   "Sistema"
  ],
  [
   "tar -czf / -xzf",
   "Comprimir / extraer .tar.gz.",
   "tar -czf backup.tar.gz /var/www/festival",
   "Sistema"
  ],
  [
   "export / echo $VAR",
   "Crear y leer variables de entorno.",
   "export NODE_ENV=production",
   "Sistema"
  ],
  [
   "$PATH",
   "Carpetas donde se buscan los programas.",
   "echo $PATH",
   "Sistema"
  ],
  [
   "ip a / ping / dig",
   "Ver IPs / comprobar conexión / consultar DNS.",
   "dig festivaldaw.es +short",
   "Redes"
  ],
  [
   "curl",
   "Peticiones HTTP: -I cabeceras, -X método, -H cabecera, -d datos.",
   "curl -I https://festivaldaw.es",
   "Redes"
  ],
  [
   "ssh usuario@servidor",
   "Conectarse a un servidor remoto.",
   "ssh ana@203.0.113.10",
   "Redes"
  ],
  [
   "ssh-keygen / ssh-copy-id",
   "Crear claves SSH e instalarlas en un servidor.",
   "ssh-keygen -t ed25519",
   "Redes"
  ],
  [
   "scp / rsync",
   "Copiar archivos al servidor / sincronizar carpetas.",
   "rsync -avz web/ ana@servidor:/var/www/festival/",
   "Redes"
  ],
  [
   "ss -tulpn",
   "Puertos abiertos y qué programa los usa.",
   "sudo ss -tulpn",
   "Redes"
  ],
  [
   "ufw",
   "Cortafuegos de Ubuntu.",
   "sudo ufw allow 80,443/tcp",
   "Redes"
  ],
  [
   "#!/bin/bash",
   "Shebang: primera línea de un script.",
   "#!/bin/bash\nset -e",
   "Bash"
  ],
  [
   "$1 $2 $# $@",
   "Argumentos del script.",
   "echo \"Hola, $1\"",
   "Bash"
  ],
  [
   "if [ … ]; then … fi",
   "Condiciones con -eq, -gt, =, -f, -d, -z…",
   "if [ -f \"$archivo\" ]; then echo \"Existe\"; fi",
   "Bash"
  ],
  [
   "for … in … ; do … done",
   "Bucle sobre una lista o archivos.",
   "for f in *.jpg; do echo \"$f\"; done",
   "Bash"
  ],
  [
   "$( comando )",
   "Usar la salida de un comando dentro de otro.",
   "fecha=$(date +%F)",
   "Bash"
  ],
  [
   "crontab -e",
   "Programar tareas: minuto hora día mes día-semana comando.",
   "0 3 * * * /home/ana/backup.sh",
   "Bash"
  ]
 ],
 "retos": [
  {
   "t": "¿Qué comando muestra la carpeta en la que estás?",
   "o": [
    "ls",
    "pwd",
    "cd",
    "whoami"
   ],
   "ok": 1,
   "why": "pwd = print working directory."
  },
  {
   "t": "¿Qué hace >> en echo \"texto\" >> notas.txt?",
   "o": [
    "Sobrescribe el archivo",
    "Añade el texto al final",
    "Borra el archivo",
    "Lee el archivo"
   ],
   "ok": 1,
   "why": "> sobrescribe; >> añade al final."
  },
  {
   "t": "¿Qué permisos da chmod 644?",
   "o": [
    "rwxr-xr-x",
    "rw-r--r--",
    "rw-------",
    "rwxrwxrwx"
   ],
   "ok": 1,
   "why": "6 = rw- para el propietario y 4 = r-- para grupo y otros."
  },
  {
   "t": "¿Cómo reinicias el servicio nginx?",
   "o": [
    "nginx restart",
    "sudo systemctl restart nginx",
    "sudo apt restart nginx",
    "kill nginx"
   ],
   "ok": 1,
   "why": "systemctl gestiona los servicios de systemd."
  },
  {
   "t": "¿Qué hace la tubería en cat log | grep 404?",
   "o": [
    "Guarda en un archivo",
    "Envía la salida de cat a grep",
    "Ejecuta los dos a la vez sin relación",
    "Borra el log"
   ],
   "ok": 1,
   "why": "La salida del primer comando es la entrada del segundo."
  },
  {
   "t": "¿Qué archivo nunca debes compartir?",
   "o": [
    "id_ed25519.pub",
    "id_ed25519",
    "known_hosts",
    ".bashrc"
   ],
   "ok": 1,
   "why": "id_ed25519 es la clave privada; la .pub es la pública y sí se comparte."
  },
  {
   "t": "En cron, ¿qué significa 0 3 * * *?",
   "o": [
    "Cada 3 minutos",
    "Todos los días a las 3:00",
    "El día 3 de cada mes",
    "Cada 3 horas"
   ],
   "ok": 1,
   "why": "Minuto 0, hora 3, cualquier día, mes y día de la semana."
  }
 ]
};
