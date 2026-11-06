window.LECCIONES = window.LECCIONES || {};
LECCIONES["despliegue"] = {
 "lang": "sh",
 "capitulos": [
  {
   "t": "Cómo funciona la web",
   "d": "Cliente y servidor, el protocolo HTTP, códigos de estado, cabeceras y caché.",
   "secciones": [
    {
     "n": "1.1",
     "t": "Cliente, servidor y despliegue",
     "m": "4 min",
     "b": [
      "Cuando visitas una web, tu navegador (el cliente) envía una petición a un servidor, un ordenador conectado permanentemente a internet que responde con HTML, CSS, JavaScript, imágenes o datos JSON. Desplegar es poner tu aplicación en ese servidor para que cualquiera pueda usarla.",
      "Una aplicación web suele tener varias piezas: el frontend (lo que se ve en el navegador), el backend o API (la lógica y los datos), la base de datos, y alrededor de todo ello un dominio, un certificado HTTPS y un servidor web que recibe las peticiones."
     ],
     "k": [
      "Cliente (navegador) ↔ servidor (siempre encendido).",
      "Desplegar = publicar la aplicación en un servidor.",
      "Piezas: frontend, backend, base de datos, dominio, HTTPS.",
      "Entornos: desarrollo (local) y producción (público)."
     ],
     "c": "  Navegador                     Internet                          Servidor\n ┌─────────┐   1. ¿IP de festivaldaw.es?   ┌─────┐\n │         │ ─────────────────────────────►│ DNS │  → 76.76.21.21\n │         │   2. GET / (HTTPS)            └─────┘    ┌──────────────────────┐\n │         │ ──────────────────────────────────────────►│ Nginx (puerto 443)    │\n │         │                                           │   ├─ archivos estáticos│\n │         │   3. 200 OK + HTML                         │   └─ API Node / PHP    │\n │         │ ◄──────────────────────────────────────────│        └─ PostgreSQL   │\n └─────────┘                                           └──────────────────────┘",
     "v": 0,
     "tip": "en este tema se recorre cada pieza del dibujo, de izquierda a derecha."
    },
    {
     "n": "1.2",
     "t": "El protocolo HTTP",
     "m": "5 min",
     "b": [
      "HTTP es el protocolo con el que se comunican cliente y servidor. Cada petición indica un método (GET, POST, PUT, PATCH, DELETE), una ruta, la versión del protocolo, unas cabeceras y, opcionalmente, un cuerpo. La respuesta incluye un código de estado, cabeceras y el cuerpo.",
      "HTTP no tiene estado: cada petición es independiente. Para «recordar» al usuario entre peticiones se usan cookies, sesiones o tokens. HTTP/2 y HTTP/3 son versiones más rápidas que permiten enviar muchos archivos por una misma conexión."
     ],
     "k": [
      "Petición: método, ruta, cabeceras, cuerpo.",
      "Respuesta: código, cabeceras, cuerpo.",
      "HTTP no tiene estado: cookies y tokens lo resuelven.",
      "curl -v muestra la conversación completa."
     ],
     "c": "$ curl -v https://festivaldaw.es/entradas\n\n> GET /entradas HTTP/2\n> Host: festivaldaw.es\n> User-Agent: curl/8.5.0\n> Accept: */*\n>\n< HTTP/2 200\n< content-type: text/html; charset=utf-8\n< cache-control: public, max-age=0, must-revalidate\n< content-length: 4210\n<\n<!DOCTYPE html><html lang=\"es\">…",
     "v": 0,
     "a": [
      [
       "1xx",
       "Información (poco habitual)."
      ],
      [
       "2xx",
       "Éxito: 200 OK, 201 Created, 204 No Content."
      ],
      [
       "3xx",
       "Redirección: 301 permanente, 302 temporal, 304 no modificado."
      ],
      [
       "4xx",
       "Error del cliente: 400, 401, 403, 404, 429."
      ],
      [
       "5xx",
       "Error del servidor: 500, 502 Bad Gateway, 503, 504."
      ]
     ],
     "at": "Familias de códigos de estado",
     "ah": [
      "Código",
      "Significado"
     ],
     "tip": "en DevTools → Network veis cada petición, su código y sus cabeceras."
    },
    {
     "n": "1.3",
     "t": "Cabeceras, cookies y caché",
     "m": "5 min",
     "b": [
      "Las cabeceras dan información extra sobre la petición o la respuesta: Content-Type indica el formato del cuerpo, Authorization lleva las credenciales, Set-Cookie guarda una cookie en el navegador, Location indica a dónde redirigir y Cache-Control cuánto tiempo puede guardarse una respuesta.",
      "La caché evita descargar una y otra vez lo mismo: los archivos que no cambian (imágenes, CSS y JS con un nombre que incluye su versión) se pueden guardar un año, mientras que el HTML se revalida en cada visita. Una CDN guarda copias en servidores de todo el mundo para servirlas desde el más cercano."
     ],
     "k": [
      "Content-Type: formato del cuerpo.",
      "Set-Cookie / Cookie: cookies.",
      "Cache-Control: max-age, no-cache, immutable.",
      "Una CDN acerca los archivos al usuario."
     ],
     "c": "# Respuesta de un archivo estático con versión en el nombre\nHTTP/2 200\ncontent-type: text/css\ncache-control: public, max-age=31536000, immutable     ← un año\n\n# Respuesta del HTML\nHTTP/2 200\ncontent-type: text/html; charset=utf-8\ncache-control: no-cache                                 ← revalidar siempre\n\n# Redirección\nHTTP/1.1 301 Moved Permanently\nlocation: https://festivaldaw.es/",
     "v": 0,
     "a": [
      [
       "Content-Type",
       "Tipo de contenido: text/html, application/json…"
      ],
      [
       "Authorization",
       "Credenciales: Bearer <token>."
      ],
      [
       "Set-Cookie",
       "El servidor guarda una cookie."
      ],
      [
       "Cache-Control",
       "Política de caché."
      ],
      [
       "Location",
       "URL de destino en una redirección."
      ],
      [
       "Access-Control-Allow-Origin",
       "CORS: orígenes permitidos."
      ],
      [
       "Strict-Transport-Security",
       "Obliga a usar HTTPS (HSTS)."
      ]
     ],
     "at": "Cabeceras importantes",
     "ah": [
      "Cabecera",
      "Uso"
     ],
     "tip": "si un cambio de CSS no se ve, suele ser la caché: probad con Ctrl+Shift+R."
    }
   ]
  },
  {
   "t": "DNS y dominios",
   "d": "Cómo se traduce un dominio a una IP, registros DNS y apuntar un dominio.",
   "secciones": [
    {
     "n": "2.1",
     "t": "¿Cómo funciona el DNS?",
     "m": "5 min",
     "b": [
      "Los ordenadores se comunican con direcciones IP (como 76.76.21.21), pero las personas usamos nombres (festivaldaw.es). El DNS (Domain Name System) es la «guía telefónica» de internet: traduce nombres de dominio a direcciones IP.",
      "Al escribir un dominio, el sistema pregunta a un servidor DNS (el de tu proveedor o uno público como 1.1.1.1 o 8.8.8.8), que consulta a los servidores raíz, después a los del dominio de primer nivel (.es) y finalmente a los servidores autoritativos del dominio, que dan la respuesta. El resultado se guarda en caché durante el tiempo indicado por el TTL."
     ],
     "k": [
      "DNS: nombre de dominio → dirección IP.",
      "Servidores raíz → TLD (.es) → autoritativos.",
      "TTL: cuánto tiempo se guarda la respuesta en caché.",
      "dig o nslookup consultan el DNS."
     ],
     "c": "$ dig festivaldaw.es +short\n76.76.21.21\n\n$ dig festivaldaw.es\n\n;; QUESTION SECTION:\n;festivaldaw.es.            IN  A\n\n;; ANSWER SECTION:\nfestivaldaw.es.      300    IN  A   76.76.21.21\n                     ↑TTL   ↑clase ↑tipo ↑IP",
     "v": 0,
     "tip": "los cambios de DNS pueden tardar hasta que caduca el TTL anterior: paciencia."
    },
    {
     "n": "2.2",
     "t": "Registros DNS",
     "m": "5 min",
     "b": [
      "Cada dominio tiene una zona DNS con registros de distintos tipos. El registro A apunta un nombre a una IPv4 y AAAA a una IPv6. CNAME hace que un nombre sea un alias de otro (www → festivaldaw.es). MX indica los servidores de correo y TXT guarda textos, que se usan para verificar la propiedad del dominio o configurar la seguridad del correo (SPF, DKIM).",
      "Los subdominios (api.festivaldaw.es, admin.festivaldaw.es) se crean añadiendo registros en la misma zona, sin comprar nada más."
     ],
     "k": [
      "A → IPv4 · AAAA → IPv6.",
      "CNAME → alias de otro nombre.",
      "MX → correo · TXT → verificaciones.",
      "Subdominios: nuevos registros en la zona."
     ],
     "c": "Tipo   Nombre      Valor                         TTL\nA      @           76.76.21.21                   300     ← festivaldaw.es\nCNAME  www         cname.vercel-dns.com.         300     ← www.festivaldaw.es\nA      api         203.0.113.10                  300     ← api.festivaldaw.es (VPS)\nMX     @           10 mx.correo.es.              3600\nTXT    @           \"v=spf1 include:_spf.correo.es ~all\"\nTXT    _vercel     \"vc-domain-verify=festivaldaw.es,abc123\"",
     "v": 0,
     "a": [
      [
       "A",
       "Nombre → dirección IPv4."
      ],
      [
       "AAAA",
       "Nombre → dirección IPv6."
      ],
      [
       "CNAME",
       "Alias de otro nombre."
      ],
      [
       "MX",
       "Servidor de correo del dominio."
      ],
      [
       "TXT",
       "Texto: verificaciones, SPF, DKIM."
      ],
      [
       "NS",
       "Servidores DNS que gestionan el dominio."
      ]
     ],
     "at": "Tipos de registro",
     "ah": [
      "Tipo",
      "Uso"
     ],
     "q": {
      "t": "¿Qué registro usarías para que www.festivaldaw.es sea un alias de festivaldaw.es?",
      "o": [
       "A",
       "CNAME",
       "MX",
       "TXT"
      ],
      "ok": 1,
      "why": "CNAME crea un alias que apunta a otro nombre."
     },
     "tip": "@ representa el propio dominio, sin subdominio."
    },
    {
     "n": "2.3",
     "t": "Comprar y apuntar un dominio",
     "m": "4 min",
     "b": [
      "Un dominio se registra en un registrador (Namecheap, Cloudflare, DonDominio, IONOS…) por un precio anual. Después se configuran sus registros DNS para que apunten al hosting: normalmente el propio hosting te indica qué registros A o CNAME debes crear, o te pide que cambies los servidores NS del dominio a los suyos.",
      "Para proyectos de clase no hace falta comprar nada: Vercel, Netlify o GitHub Pages dan un subdominio gratuito (tuproyecto.vercel.app) con HTTPS incluido."
     ],
     "k": [
      "Registrador: compra anual del dominio.",
      "El hosting indica los registros A/CNAME a crear.",
      "O se cambian los NS al proveedor del hosting.",
      "Gratis: subdominios de Vercel, Netlify o GitHub Pages."
     ],
     "c": "# Vercel: añadir un dominio propio al proyecto\n1. Project → Settings → Domains → Add \"festivaldaw.es\"\n2. En el registrador, crear los registros que indica Vercel:\n     A      @     76.76.21.21\n     CNAME  www   cname.vercel-dns.com.\n3. Esperar a la propagación (minutos u horas)\n4. Vercel emite automáticamente el certificado HTTPS",
     "v": 0,
     "tip": "DevPath está publicado en un subdominio gratuito: devpath-daw.vercel.app."
    }
   ]
  },
  {
   "t": "Servidores web",
   "d": "Apache y Nginx, hosts virtuales, .htaccess y proxy inverso.",
   "secciones": [
    {
     "n": "3.1",
     "t": "Apache y Nginx",
     "m": "5 min",
     "b": [
      "Un servidor web es el programa que recibe las peticiones HTTP y responde con archivos o pasándolas a una aplicación. Los dos más usados son Apache, veterano y muy flexible (permite configuración por carpeta con .htaccess y ejecuta PHP con mod_php o PHP-FPM), y Nginx, muy eficiente con muchas conexiones a la vez y el estándar como proxy inverso delante de aplicaciones Node, Python o Java.",
      "En Ubuntu se instalan con apt; su configuración está en /etc/apache2 o /etc/nginx, los sitios en /var/www y los logs en /var/log/apache2 o /var/log/nginx."
     ],
     "k": [
      "Apache: flexible, .htaccess, tradicional con PHP.",
      "Nginx: rápido, estándar como proxy inverso.",
      "Configuración en /etc/apache2 o /etc/nginx.",
      "Sitios en /var/www; logs en /var/log."
     ],
     "c": "$ sudo apt install nginx\n$ sudo systemctl enable --now nginx\n$ curl -I http://localhost\nHTTP/1.1 200 OK\nServer: nginx/1.24.0 (Ubuntu)\n\n/etc/nginx/\n├── nginx.conf               configuración general\n├── sites-available/         un archivo por sitio\n│   └── festival\n└── sites-enabled/           enlaces a los sitios activos\n    └── festival -> ../sites-available/festival",
     "v": 0,
     "a": [
      [
       "Rendimiento con muchas conexiones",
       "Nginx mejor."
      ],
      [
       "Configuración por carpeta (.htaccess)",
       "Solo Apache."
      ],
      [
       "PHP",
       "Apache (mod_php o FPM) · Nginx con PHP-FPM."
      ],
      [
       "Proxy inverso para Node/Java",
       "Nginx (lo más común)."
      ],
      [
       "Cuota de uso",
       "Ambos muy extendidos."
      ]
     ],
     "at": "Apache frente a Nginx",
     "ah": [
      "Aspecto",
      "Comparación"
     ],
     "tip": "XAMPP, que usáis en local para PHP, incluye Apache."
    },
    {
     "n": "3.2",
     "t": "Configurar un sitio en Nginx",
     "m": "6 min",
     "b": [
      "Cada sitio se define en un bloque server: listen indica el puerto, server_name los dominios, root la carpeta con los archivos e index el archivo por defecto. Los bloques location definen qué hacer según la ruta. try_files permite que una SPA (React, Vue) devuelva index.html para cualquier ruta.",
      "Después de crear el archivo en sites-available, se activa con un enlace en sites-enabled, se comprueba la sintaxis con nginx -t y se recarga con systemctl reload nginx."
     ],
     "k": [
      "server { listen; server_name; root; index; }",
      "location / { try_files $uri $uri/ /index.html; } para SPA.",
      "Activar: ln -s sites-available/x sites-enabled/.",
      "Siempre nginx -t antes de recargar."
     ],
     "c": "# /etc/nginx/sites-available/festival\nserver {\n    listen 80;\n    server_name festivaldaw.es www.festivaldaw.es;\n\n    root /var/www/festival/dist;\n    index index.html;\n\n    location / {\n        try_files $uri $uri/ /index.html;     # SPA: todas las rutas → index.html\n    }\n\n    location /assets/ {\n        expires 1y;                           # caché larga para archivos con versión\n        add_header Cache-Control \"public, immutable\";\n    }\n\n    error_page 404 /404.html;\n}\n\n$ sudo ln -s /etc/nginx/sites-available/festival /etc/nginx/sites-enabled/\n$ sudo nginx -t\nnginx: configuration file /etc/nginx/nginx.conf test is successful\n$ sudo systemctl reload nginx",
     "v": 0,
     "e": "recargar Nginx sin pasar antes nginx -t: un error de sintaxis puede tumbar todos los sitios del servidor.",
     "tip": "los errores 403 suelen ser permisos: el usuario www-data debe poder leer la carpeta."
    },
    {
     "n": "3.3",
     "t": "Apache: VirtualHost y .htaccess",
     "m": "5 min",
     "b": [
      "En Apache, cada sitio es un VirtualHost en /etc/apache2/sites-available, con ServerName, DocumentRoot y las directivas de cada carpeta. Se activa con a2ensite, los módulos con a2enmod y se recarga con systemctl reload apache2.",
      "El archivo .htaccess permite cambiar la configuración de una carpeta sin tocar la del servidor, algo muy habitual en hostings compartidos: redirecciones, URLs amigables con mod_rewrite, proteger carpetas o forzar HTTPS. Necesita AllowOverride All en el VirtualHost."
     ],
     "k": [
      "<VirtualHost *:80> con ServerName y DocumentRoot.",
      "a2ensite festival / a2enmod rewrite.",
      ".htaccess: configuración por carpeta.",
      "mod_rewrite para URLs amigables."
     ],
     "c": "# /etc/apache2/sites-available/festival.conf\n<VirtualHost *:80>\n    ServerName festivaldaw.es\n    DocumentRoot /var/www/festival/public\n\n    <Directory /var/www/festival/public>\n        AllowOverride All\n        Require all granted\n    </Directory>\n\n    ErrorLog ${APACHE_LOG_DIR}/festival-error.log\n</VirtualHost>\n\n# /var/www/festival/public/.htaccess  (enrutador de PHP: todo a index.php)\nRewriteEngine On\nRewriteCond %{REQUEST_FILENAME} !-f\nRewriteCond %{REQUEST_FILENAME} !-d\nRewriteRule ^ index.php [QSA,L]\n\n$ sudo a2enmod rewrite\n$ sudo a2ensite festival\n$ sudo apache2ctl configtest\n$ sudo systemctl reload apache2",
     "v": 0,
     "tip": "es el .htaccess que necesita el enrutador MVC del tema de PHP."
    },
    {
     "n": "3.4",
     "t": "Proxy inverso",
     "m": "5 min",
     "b": [
      "Una aplicación de Node, Java o Python escucha en un puerto interno (3000, 8080) y no se expone directamente a internet. Delante se pone Nginx como proxy inverso: recibe las peticiones en los puertos 80 y 443, gestiona el HTTPS y los archivos estáticos, y reenvía las peticiones de la API a la aplicación con proxy_pass.",
      "Así un mismo servidor puede alojar varias aplicaciones en distintos dominios o rutas. Si la aplicación de detrás está caída, Nginx responde 502 Bad Gateway."
     ],
     "k": [
      "proxy_pass http://localhost:3000;",
      "Nginx: HTTPS y estáticos; la app: la lógica.",
      "Cabeceras X-Forwarded-* con la IP real del cliente.",
      "502 Bad Gateway = la app de detrás no responde."
     ],
     "c": "server {\n    listen 80;\n    server_name festivaldaw.es;\n\n    # Frontend estático\n    root /var/www/festival/dist;\n    location / {\n        try_files $uri $uri/ /index.html;\n    }\n\n    # API en Node escuchando en el puerto 3000\n    location /api/ {\n        proxy_pass http://localhost:3000;\n        proxy_set_header Host $host;\n        proxy_set_header X-Real-IP $remote_addr;\n        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;\n        proxy_set_header X-Forwarded-Proto $scheme;\n    }\n}",
     "v": 0,
     "q": {
      "t": "Nginx devuelve 502 Bad Gateway en /api. ¿Qué es lo más probable?",
      "o": [
       "Falta el certificado",
       "La aplicación de detrás (Node) está caída",
       "El DNS está mal",
       "El navegador tiene caché"
      ],
      "ok": 1,
      "why": "502 significa que el proxy no obtiene respuesta del servidor de detrás."
     },
     "tip": "journalctl o pm2 logs de la aplicación os dirán por qué se ha caído."
    }
   ]
  },
  {
   "t": "HTTPS",
   "d": "Cifrado TLS, certificados, Let's Encrypt y forzar HTTPS.",
   "secciones": [
    {
     "n": "4.1",
     "t": "HTTPS y certificados",
     "m": "5 min",
     "b": [
      "HTTPS es HTTP cifrado con TLS: nadie entre el usuario y el servidor (la wifi de una cafetería, el proveedor de internet) puede leer ni modificar lo que se envía. Además, el certificado del servidor demuestra que el dominio es quien dice ser. Hoy es obligatorio: los navegadores marcan como «no seguro» las webs sin HTTPS y muchas funciones (geolocalización, service workers) solo funcionan con él.",
      "Un certificado lo emite una autoridad de certificación (CA) para un dominio concreto y caduca cada cierto tiempo. El navegador muestra el candado cuando el certificado es válido, corresponde al dominio y no ha caducado."
     ],
     "k": [
      "HTTPS = HTTP + cifrado TLS.",
      "El certificado prueba la identidad del dominio.",
      "Puerto 443 (HTTP usa el 80).",
      "Sin HTTPS: aviso «no seguro» y funciones bloqueadas."
     ],
     "c": "$ curl -vI https://festivaldaw.es 2>&1 | grep -E \"subject|issuer|expire|SSL connection\"\n* SSL connection using TLSv1.3 / TLS_AES_128_GCM_SHA256\n*  subject: CN=festivaldaw.es\n*  expire date: Feb  4 10:00:00 2027 GMT\n*  issuer: C=US; O=Let's Encrypt; CN=R11",
     "v": 0,
     "tip": "haced clic en el candado del navegador para ver quién emitió el certificado."
    },
    {
     "n": "4.2",
     "t": "Let's Encrypt y certbot",
     "m": "5 min",
     "b": [
      "Let's Encrypt es una autoridad de certificación gratuita y automatizada. En un servidor con Nginx o Apache, la herramienta certbot obtiene el certificado, modifica la configuración para usarlo y programa su renovación automática (los certificados duran 90 días).",
      "Las plataformas como Vercel, Netlify, Render o Cloudflare hacen todo esto solas: en cuanto conectas un dominio, emiten y renuevan el certificado sin que tengas que hacer nada."
     ],
     "k": [
      "sudo apt install certbot python3-certbot-nginx.",
      "sudo certbot --nginx -d dominio.",
      "Renovación automática (certbot renew).",
      "Vercel/Netlify/Render lo hacen solos."
     ],
     "c": "$ sudo apt install certbot python3-certbot-nginx\n$ sudo certbot --nginx -d festivaldaw.es -d www.festivaldaw.es\n\nSuccessfully received certificate.\nCertificate is saved at: /etc/letsencrypt/live/festivaldaw.es/fullchain.pem\nKey is saved at:         /etc/letsencrypt/live/festivaldaw.es/privkey.pem\nThis certificate expires on 2027-02-04.\nDeploying certificate to VirtualHost /etc/nginx/sites-enabled/festival\nCongratulations! You have successfully enabled HTTPS on https://festivaldaw.es\n\n$ sudo certbot renew --dry-run      # comprobar que la renovación funciona",
     "v": 0,
     "e": "intentar obtener el certificado antes de que el DNS apunte al servidor: Let's Encrypt no puede verificar el dominio.",
     "tip": "el puerto 80 debe estar abierto para que Let's Encrypt verifique el dominio."
    },
    {
     "n": "4.3",
     "t": "Forzar HTTPS y HSTS",
     "m": "4 min",
     "b": [
      "Una vez activado HTTPS, todas las peticiones por HTTP deben redirigirse a HTTPS con un 301. Certbot lo configura automáticamente; a mano, es un bloque server en el puerto 80 que hace return 301 https://….",
      "La cabecera Strict-Transport-Security (HSTS) indica al navegador que, durante un tiempo, use siempre HTTPS con ese dominio, incluso si el usuario escribe http://. Así se evita el ataque de rebajar la conexión a HTTP."
     ],
     "k": [
      "Puerto 80: return 301 https://$host$request_uri;",
      "listen 443 ssl con los certificados.",
      "HSTS: Strict-Transport-Security: max-age=…",
      "Activa HSTS solo cuando HTTPS funcione bien."
     ],
     "c": "server {\n    listen 80;\n    server_name festivaldaw.es www.festivaldaw.es;\n    return 301 https://festivaldaw.es$request_uri;\n}\n\nserver {\n    listen 443 ssl http2;\n    server_name festivaldaw.es;\n\n    ssl_certificate     /etc/letsencrypt/live/festivaldaw.es/fullchain.pem;\n    ssl_certificate_key /etc/letsencrypt/live/festivaldaw.es/privkey.pem;\n\n    add_header Strict-Transport-Security \"max-age=31536000; includeSubDomains\" always;\n\n    root /var/www/festival/dist;\n    location / { try_files $uri $uri/ /index.html; }\n}",
     "v": 0,
     "tip": "securityheaders.com analiza las cabeceras de seguridad de cualquier web."
    }
   ]
  },
  {
   "t": "Docker",
   "d": "Contenedores, imágenes, comandos básicos, Dockerfile, puertos y volúmenes.",
   "secciones": [
    {
     "n": "5.1",
     "t": "¿Qué es un contenedor?",
     "m": "5 min",
     "b": [
      "Un contenedor empaqueta una aplicación con todo lo que necesita para funcionar (el lenguaje, las librerías, la configuración) y la ejecuta aislada del resto del sistema. Así funciona igual en tu portátil, en el de tu compañero y en el servidor: se acabó el «en mi máquina funciona».",
      "A diferencia de una máquina virtual, un contenedor no incluye un sistema operativo completo: comparte el núcleo del anfitrión, por eso arranca en segundos y ocupa muy poco. Una imagen es la plantilla (de solo lectura) y un contenedor es una instancia en ejecución de esa imagen."
     ],
     "k": [
      "Contenedor = aplicación + dependencias, aislada.",
      "Imagen = plantilla; contenedor = instancia en ejecución.",
      "Más ligero que una máquina virtual.",
      "Docker Hub: repositorio de imágenes públicas."
     ],
     "c": "      Máquinas virtuales                     Contenedores\n ┌───────┐ ┌───────┐ ┌───────┐        ┌───────┐ ┌───────┐ ┌───────┐\n │ App A │ │ App B │ │ App C │        │ App A │ │ App B │ │ App C │\n │ libs  │ │ libs  │ │ libs  │        │ libs  │ │ libs  │ │ libs  │\n │  SO   │ │  SO   │ │  SO   │        └───────┘ └───────┘ └───────┘\n └───────┘ └───────┘ └───────┘        ┌─────────────────────────────┐\n ┌─────────────────────────────┐      │       Docker Engine          │\n │        Hipervisor            │      └─────────────────────────────┘\n └─────────────────────────────┘      ┌─────────────────────────────┐\n ┌─────────────────────────────┐      │   Sistema operativo anfitrión │\n │   Sistema operativo anfitrión │      └─────────────────────────────┘\n └─────────────────────────────┘",
     "v": 0,
     "a": [
      [
       "Arranque",
       "VM: minutos · Contenedor: segundos."
      ],
      [
       "Tamaño",
       "VM: gigas · Contenedor: megas."
      ],
      [
       "Sistema operativo",
       "VM: uno completo por máquina · Contenedor: comparte el núcleo."
      ],
      [
       "Aislamiento",
       "VM: total · Contenedor: suficiente para la mayoría de casos."
      ],
      [
       "Uso típico",
       "VM: sistemas distintos (como en Sistemas Informáticos) · Contenedor: aplicaciones."
      ]
     ],
     "at": "Máquina virtual frente a contenedor",
     "ah": [
      "Aspecto",
      "Comparación"
     ],
     "tip": "Docker Desktop instala Docker en Windows y macOS; en Linux, el paquete docker.io o Docker Engine."
    },
    {
     "n": "5.2",
     "t": "Comandos básicos",
     "m": "6 min",
     "b": [
      "docker run crea y arranca un contenedor a partir de una imagen (si no la tienes, la descarga de Docker Hub). Opciones clave: -d en segundo plano, -p puertoEquipo:puertoContenedor para publicar un puerto, --name para darle nombre, -e para variables de entorno y --rm para borrarlo al pararlo.",
      "docker ps lista los contenedores en marcha (-a todos), docker logs muestra su salida, docker exec -it ejecuta un comando dentro (por ejemplo, una terminal), docker stop lo para y docker rm lo borra. docker images lista las imágenes descargadas."
     ],
     "k": [
      "docker run -d -p 8080:80 --name web nginx.",
      "docker ps / docker logs / docker exec -it.",
      "docker stop y docker rm.",
      "docker images y docker pull."
     ],
     "c": "$ docker run -d -p 8080:80 --name web nginx:alpine\n$ docker ps\nCONTAINER ID   IMAGE          STATUS         PORTS                  NAMES\na1b2c3d4e5f6   nginx:alpine   Up 5 seconds   0.0.0.0:8080->80/tcp   web\n\n$ curl -I http://localhost:8080\nHTTP/1.1 200 OK\nServer: nginx\n\n$ docker run -d --name bd -e POSTGRES_PASSWORD=clave -p 5432:5432 postgres:17\n$ docker exec -it bd psql -U postgres      # terminal dentro del contenedor\n$ docker logs -f web\n$ docker stop web bd && docker rm web bd",
     "v": 0,
     "a": [
      [
       "docker run imagen",
       "Crear y arrancar un contenedor."
      ],
      [
       "-d",
       "En segundo plano."
      ],
      [
       "-p 8080:80",
       "Puerto del equipo : puerto del contenedor."
      ],
      [
       "-e CLAVE=valor",
       "Variable de entorno."
      ],
      [
       "-v origen:destino",
       "Volumen o carpeta compartida."
      ],
      [
       "docker ps -a",
       "Listar contenedores."
      ],
      [
       "docker logs -f c",
       "Ver la salida."
      ],
      [
       "docker exec -it c sh",
       "Abrir una terminal dentro."
      ],
      [
       "docker stop / rm c",
       "Parar / borrar."
      ],
      [
       "docker images / rmi",
       "Listar / borrar imágenes."
      ]
     ],
     "at": "Comandos de Docker",
     "ah": [
      "Comando",
      "Qué hace"
     ],
     "q": {
      "t": "Con -p 8080:80, ¿en qué dirección abres la web desde tu equipo?",
      "o": [
       "http://localhost:80",
       "http://localhost:8080",
       "http://contenedor:8080",
       "No se puede"
      ],
      "ok": 1,
      "why": "El primer número es el puerto de tu equipo; el segundo, el del contenedor."
     },
     "tip": "con un contenedor de PostgreSQL tenéis una base de datos lista en segundos, sin instalarla."
    },
    {
     "n": "5.3",
     "t": "Dockerfile: crear tu propia imagen",
     "m": "6 min",
     "b": [
      "Un Dockerfile es la receta para construir la imagen de tu aplicación. Parte de una imagen base (FROM node:22-alpine), fija la carpeta de trabajo (WORKDIR), copia los archivos (COPY), ejecuta comandos de preparación (RUN npm ci), indica el puerto (EXPOSE) y el comando de arranque (CMD).",
      "Cada instrucción crea una capa que Docker guarda en caché. Por eso se copia primero el package.json e instala las dependencias, y después el resto del código: así, si solo cambia el código, no se reinstalan las dependencias. El archivo .dockerignore excluye node_modules, .env y .git."
     ],
     "k": [
      "FROM imagen base · WORKDIR · COPY · RUN · CMD.",
      "Copia package*.json y npm ci antes del código (caché).",
      ".dockerignore para node_modules, .env y .git.",
      "docker build -t nombre . construye la imagen."
     ],
     "c": "# Dockerfile (API de Node)\nFROM node:22-alpine\nWORKDIR /app\n\nCOPY package*.json ./\nRUN npm ci --omit=dev\n\nCOPY src ./src\n\nENV NODE_ENV=production\nEXPOSE 3000\nUSER node\nCMD [\"node\", \"src/server.js\"]\n\n# .dockerignore\nnode_modules\n.env\n.git\n\n$ docker build -t festival-api .\n$ docker run -d -p 3000:3000 --env-file .env --name api festival-api",
     "v": 0,
     "a": [
      [
       "FROM",
       "Imagen base."
      ],
      [
       "WORKDIR",
       "Carpeta de trabajo dentro de la imagen."
      ],
      [
       "COPY",
       "Copiar archivos del proyecto."
      ],
      [
       "RUN",
       "Ejecutar un comando al construir."
      ],
      [
       "ENV",
       "Variable de entorno."
      ],
      [
       "EXPOSE",
       "Documenta el puerto que usa la app."
      ],
      [
       "USER",
       "Usuario con el que se ejecuta (mejor no root)."
      ],
      [
       "CMD",
       "Comando al arrancar el contenedor."
      ]
     ],
     "at": "Instrucciones del Dockerfile",
     "ah": [
      "Instrucción",
      "Qué hace"
     ],
     "e": "copiar el archivo .env dentro de la imagen: cualquiera que la descargue tendrá vuestros secretos.",
     "tip": "las imágenes alpine son mucho más pequeñas que las normales."
    },
    {
     "n": "5.4",
     "t": "Volúmenes y datos persistentes",
     "m": "4 min",
     "b": [
      "Todo lo que se escribe dentro de un contenedor desaparece al borrarlo. Para conservar datos (la base de datos, los archivos subidos) se usan volúmenes, gestionados por Docker, o se monta una carpeta del equipo dentro del contenedor (bind mount), muy útil en desarrollo para ver los cambios del código al instante.",
      "Con -v nombre:/ruta se usa un volumen con nombre y con -v ./carpeta:/ruta una carpeta del equipo. docker volume ls lista los volúmenes."
     ],
     "k": [
      "Los datos del contenedor se pierden al borrarlo.",
      "-v pgdata:/var/lib/postgresql/data → volumen con nombre.",
      "-v ./web:/usr/share/nginx/html → carpeta del equipo.",
      "docker volume ls / rm."
     ],
     "c": "# Base de datos con los datos en un volumen\n$ docker run -d --name bd -e POSTGRES_PASSWORD=clave \\\n    -v pgdata:/var/lib/postgresql/data -p 5432:5432 postgres:17\n\n$ docker rm -f bd                      # se borra el contenedor…\n$ docker run -d --name bd -e POSTGRES_PASSWORD=clave \\\n    -v pgdata:/var/lib/postgresql/data -p 5432:5432 postgres:17\n                                       # …pero los datos siguen en el volumen\n\n# Desarrollo: servir tu carpeta con Nginx\n$ docker run -d -p 8080:80 -v \"$PWD/web\":/usr/share/nginx/html:ro nginx:alpine",
     "v": 0,
     "tip": ":ro monta la carpeta en solo lectura."
    }
   ]
  },
  {
   "t": "Docker Compose",
   "d": "Definir varios servicios, aplicación con base de datos, variables y redes.",
   "secciones": [
    {
     "n": "6.1",
     "t": "Compose: varios contenedores a la vez",
     "m": "5 min",
     "b": [
      "Una aplicación real suele necesitar varios contenedores: la API, la base de datos, quizá Nginx o Redis. Docker Compose los define todos en un archivo compose.yaml (o docker-compose.yml) y los arranca juntos con docker compose up.",
      "Cada servicio indica su imagen o cómo construirla, sus puertos, variables, volúmenes y de qué otros depende. Los servicios se ven entre sí por su nombre: la API se conecta a la base de datos usando el host bd."
     ],
     "k": [
      "compose.yaml define los servicios.",
      "docker compose up -d arranca todo.",
      "docker compose down lo para y lo borra.",
      "Los servicios se comunican por su nombre."
     ],
     "c": "# compose.yaml\nservices:\n  web:\n    image: nginx:alpine\n    ports:\n      - \"8080:80\"\n    volumes:\n      - ./sitio:/usr/share/nginx/html:ro\n\n$ docker compose up -d\n[+] Running 2/2\n ✔ Network festival_default  Created\n ✔ Container festival-web-1  Started\n$ docker compose ps\n$ docker compose logs -f\n$ docker compose down",
     "v": 0,
     "a": [
      [
       "docker compose up -d",
       "Crear y arrancar todos los servicios."
      ],
      [
       "docker compose down",
       "Parar y borrar (-v borra también los volúmenes)."
      ],
      [
       "docker compose ps",
       "Estado de los servicios."
      ],
      [
       "docker compose logs -f s",
       "Logs de un servicio."
      ],
      [
       "docker compose exec s sh",
       "Terminal dentro de un servicio."
      ],
      [
       "docker compose build",
       "Reconstruir las imágenes."
      ],
      [
       "docker compose restart s",
       "Reiniciar un servicio."
      ]
     ],
     "at": "Comandos de Compose",
     "ah": [
      "Comando",
      "Qué hace"
     ],
     "tip": "en YAML la sangría importa y se hace con espacios, nunca con tabuladores."
    },
    {
     "n": "6.2",
     "t": "Aplicación con base de datos",
     "m": "7 min",
     "b": [
      "El caso típico: una API que se construye a partir de su Dockerfile y una base de datos PostgreSQL con un volumen para no perder los datos. La API recibe la URL de conexión por una variable de entorno, usando bd (el nombre del servicio) como host.",
      "depends_on con una comprobación de salud (healthcheck) hace que la API espere a que la base de datos esté lista. Un script SQL montado en /docker-entrypoint-initdb.d crea las tablas la primera vez que arranca la base de datos."
     ],
     "k": [
      "build: . construye la imagen con el Dockerfile.",
      "Host de la base de datos = nombre del servicio.",
      "Volumen con nombre para los datos.",
      "healthcheck + depends_on para esperar a la BD."
     ],
     "c": "# compose.yaml\nservices:\n  api:\n    build: .\n    ports:\n      - \"3000:3000\"\n    environment:\n      DATABASE_URL: postgres://festival:${DB_PASSWORD}@bd:5432/festival\n      JWT_SECRET: ${JWT_SECRET}\n    depends_on:\n      bd:\n        condition: service_healthy\n    restart: unless-stopped\n\n  bd:\n    image: postgres:17\n    environment:\n      POSTGRES_USER: festival\n      POSTGRES_PASSWORD: ${DB_PASSWORD}\n      POSTGRES_DB: festival\n    volumes:\n      - pgdata:/var/lib/postgresql/data\n      - ./sql/init.sql:/docker-entrypoint-initdb.d/init.sql:ro\n    healthcheck:\n      test: [\"CMD-SHELL\", \"pg_isready -U festival\"]\n      interval: 5s\n      retries: 10\n\nvolumes:\n  pgdata:",
     "v": 0,
     "e": "usar localhost como host de la base de datos dentro del contenedor de la API: localhost es el propio contenedor. Hay que usar el nombre del servicio (bd).",
     "tip": "con este archivo, cualquier compañero levanta el proyecto completo con un solo comando."
    },
    {
     "n": "6.3",
     "t": "Variables, perfiles y entornos",
     "m": "4 min",
     "b": [
      "Compose lee automáticamente un archivo .env de la misma carpeta y sustituye las variables ${NOMBRE} del compose.yaml, así los secretos no quedan escritos en el archivo que se sube a Git. También se puede pasar un archivo completo a un servicio con env_file.",
      "Para tener configuraciones distintas en desarrollo y producción, se usan varios archivos (compose.yaml y compose.prod.yaml) que se combinan con -f, o perfiles para activar servicios opcionales (como un panel de administración de la base de datos solo en desarrollo)."
     ],
     "k": [
      "${VARIABLE} se toma del archivo .env.",
      "env_file: .env pasa todas las variables a un servicio.",
      "docker compose -f compose.yaml -f compose.prod.yaml up -d.",
      "profiles para servicios opcionales."
     ],
     "c": "# .env (no se sube a Git)\nDB_PASSWORD=una-clave-segura\nJWT_SECRET=otra-clave-larga\n\n# compose.yaml (fragmento): Adminer solo en desarrollo\n  adminer:\n    image: adminer\n    ports:\n      - \"8081:8080\"\n    profiles: [\"dev\"]\n\n$ docker compose --profile dev up -d    # incluye adminer\n$ docker compose up -d                  # sin adminer",
     "v": 0,
     "tip": "Adminer es una interfaz web ligera para gestionar bases de datos."
    }
   ]
  },
  {
   "t": "Hosting",
   "d": "Tipos de hosting, sitios estáticos, desplegar en un VPS y bases de datos gestionadas.",
   "secciones": [
    {
     "n": "7.1",
     "t": "Tipos de hosting",
     "m": "5 min",
     "b": [
      "El hosting compartido (con cPanel, típico para WordPress) es barato y sencillo, pero limitado: suele permitir PHP y MySQL y poco más. Un VPS (servidor privado virtual) da un servidor Linux completo con acceso root: total libertad, pero tú lo administras todo (seguridad, actualizaciones, copias).",
      "Las plataformas como servicio (PaaS) como Vercel, Netlify, Render o Railway despliegan directamente desde GitHub y se encargan del servidor, el HTTPS y el escalado. La nube (AWS, Google Cloud, Azure) ofrece cientos de servicios para infraestructuras grandes."
     ],
     "k": [
      "Compartido: barato, sencillo, limitado (PHP/MySQL).",
      "VPS: servidor Linux completo; lo administras tú.",
      "PaaS: despliegue desde Git, sin administrar servidores.",
      "Nube (AWS, GCP, Azure): infraestructura a medida."
     ],
     "c": "Necesidad                               Opción recomendada\nWeb estática (HTML, CSS, JS, React)  →  Vercel · Netlify · GitHub Pages (gratis)\nWordPress o PHP sencillo             →  Hosting compartido\nAPI Node / Python / Java             →  Render · Railway · Fly.io\nVarias apps, Docker, control total   →  VPS (Hetzner, DigitalOcean, OVH)\nBase de datos PostgreSQL             →  Neon · Supabase · la del PaaS\nEmpresa con mucho tráfico            →  AWS · Google Cloud · Azure",
     "v": 0,
     "a": [
      [
       "Hosting compartido",
       "Fácil · barato · poco control."
      ],
      [
       "VPS",
       "Control total · tú lo mantienes."
      ],
      [
       "PaaS",
       "Muy cómodo · menos control · puede encarecerse."
      ],
      [
       "Serverless (funciones)",
       "Pagas por uso · sin servidor que mantener."
      ],
      [
       "Nube IaaS",
       "Máxima flexibilidad · compleja."
      ]
     ],
     "at": "Comparación",
     "ah": [
      "Tipo",
      "Ventajas e inconvenientes"
     ],
     "tip": "para el portfolio, Vercel o Netlify para el frontend y Render para la API son gratis."
    },
    {
     "n": "7.2",
     "t": "Sitios estáticos: Vercel, Netlify y GitHub Pages",
     "m": "5 min",
     "b": [
      "Una web estática (HTML, CSS y JavaScript, o el resultado de npm run build de React o Vue) se publica gratis en Vercel, Netlify o GitHub Pages. Se conecta el repositorio de GitHub y, en cada push, la plataforma construye y publica una versión nueva automáticamente, con HTTPS y CDN incluidos.",
      "Además, cada rama o pull request recibe una URL de vista previa para revisar los cambios antes de publicarlos. Las SPA necesitan una regla de reescritura para que todas las rutas carguen index.html."
     ],
     "k": [
      "Conectar el repositorio → despliegue en cada push.",
      "Build command (npm run build) y carpeta de salida (dist).",
      "URLs de vista previa por rama.",
      "SPA: reescribir todas las rutas a index.html."
     ],
     "c": "# Vercel: vercel.json (así está configurado DevPath)\n{\n  \"cleanUrls\": true,\n  \"rewrites\": [\n    { \"source\": \"/tema/:slug/:n\", \"destination\": \"/leccion\" },\n    { \"source\": \"/tema/:slug\", \"destination\": \"/tema\" }\n  ]\n}\n\n# SPA de React en Vercel\n{ \"rewrites\": [{ \"source\": \"/(.*)\", \"destination\": \"/index.html\" }] }\n\n# Netlify: public/_redirects\n/*    /index.html   200\n\n# GitHub Pages: Settings → Pages → Deploy from a branch → main / root",
     "v": 0,
     "tip": "DevPath se publica así: cada cambio en GitHub genera una versión nueva en Vercel."
    },
    {
     "n": "7.3",
     "t": "Desplegar en un VPS paso a paso",
     "m": "7 min",
     "b": [
      "En un VPS recién creado, los pasos habituales son: entrar por SSH, actualizar el sistema, crear un usuario con sudo y entrar con claves SSH, activar el cortafuegos, instalar lo necesario (Nginx, Node o PHP, Docker), subir el código con Git, arrancar la aplicación como servicio, configurar Nginx como proxy inverso y obtener el certificado HTTPS.",
      "Parece mucho, pero es siempre la misma receta, y pone en práctica todo lo visto en los temas de Linux y Despliegue."
     ],
     "k": [
      "SSH → actualizar → usuario → claves → cortafuegos.",
      "Instalar Nginx y el entorno de la app.",
      "git clone + arrancar como servicio (systemd, PM2 o Docker).",
      "Nginx como proxy + certbot para HTTPS."
     ],
     "c": "# 1. Entrar y preparar el servidor\n$ ssh root@203.0.113.10\n# apt update && apt upgrade -y\n# adduser ana && usermod -aG sudo ana\n# ufw allow OpenSSH && ufw allow 80,443/tcp && ufw enable\n\n# 2. Instalar lo necesario (como ana)\n$ sudo apt install -y nginx git docker.io docker-compose-v2\n$ sudo usermod -aG docker ana\n\n# 3. Descargar y arrancar la aplicación\n$ git clone https://github.com/ana/festival.git && cd festival\n$ cp .env.example .env && nano .env\n$ docker compose up -d\n\n# 4. Nginx como proxy inverso y HTTPS\n$ sudo nano /etc/nginx/sites-available/festival      # proxy_pass http://localhost:3000;\n$ sudo ln -s /etc/nginx/sites-available/festival /etc/nginx/sites-enabled/\n$ sudo nginx -t && sudo systemctl reload nginx\n$ sudo certbot --nginx -d festivaldaw.es",
     "v": 0,
     "tip": "para actualizar después: git pull && docker compose up -d --build."
    },
    {
     "n": "7.4",
     "t": "Bases de datos en producción",
     "m": "4 min",
     "b": [
      "En producción, la base de datos puede ir en el propio VPS (en Docker, con un volumen) o en un servicio gestionado como Neon, Supabase, Railway o Amazon RDS, que se encargan de las copias de seguridad, las actualizaciones y la disponibilidad. Se conecta con una URL que se guarda en una variable de entorno.",
      "Reglas básicas: la base de datos nunca debe estar abierta a internet sin protección, la aplicación debe usar un usuario con los permisos justos (no el administrador) y hay que tener copias de seguridad automáticas y comprobar que se pueden restaurar."
     ],
     "k": [
      "Gestionada (Neon, Supabase, RDS) o en el VPS con Docker.",
      "URL de conexión en una variable de entorno.",
      "Usuario con permisos mínimos para la app.",
      "Copias automáticas y probadas."
     ],
     "c": "# Variable de entorno con la base de datos gestionada (Neon)\nDATABASE_URL=postgres://festival_app:clave@ep-ejemplo.eu-central-1.aws.neon.tech/festival?sslmode=require\n\n# Copia diaria en el VPS (cron)\n0 3 * * * docker exec bd pg_dump -U festival festival | gzip > /home/ana/backups/festival_$(date +\\%F).sql.gz\n\n# Restaurar\n$ gunzip -c festival_2026-11-06.sql.gz | docker exec -i bd psql -U festival festival",
     "v": 0,
     "e": "usar en producción el mismo usuario postgres y una contraseña sencilla: si se filtra, el atacante tiene control total.",
     "tip": "repasad el capítulo de usuarios y permisos y el de copias de seguridad del tema de SQL."
    }
   ]
  },
  {
   "t": "CI/CD y producción",
   "d": "Integración y despliegue continuos, GitHub Actions, secretos y monitorización.",
   "secciones": [
    {
     "n": "8.1",
     "t": "¿Qué es CI/CD?",
     "m": "4 min",
     "b": [
      "La integración continua (CI) consiste en que, cada vez que alguien sube cambios, un sistema automático instala las dependencias, compila, pasa el linter y ejecuta los tests. Si algo falla, se detecta enseguida, antes de mezclarlo con la rama principal.",
      "El despliegue continuo (CD) va un paso más allá: si todo está en verde, la nueva versión se publica automáticamente. Así se despliega a menudo, con cambios pequeños y menos riesgo. Vercel o Netlify hacen CD por defecto; para más control se usan GitHub Actions, GitLab CI o Jenkins."
     ],
     "k": [
      "CI: en cada push → instalar, lint, tests.",
      "CD: si todo pasa → desplegar automáticamente.",
      "Cambios pequeños y frecuentes = menos riesgo.",
      "Herramientas: GitHub Actions, GitLab CI, Jenkins."
     ],
     "c": "  push / pull request\n          │\n          ▼\n  ┌──────────────┐   ┌──────────┐   ┌─────────┐   ┌──────────┐   ┌───────────┐\n  │ Descargar el │ → │ Instalar │ → │  Lint   │ → │  Tests   │ → │ Desplegar │\n  │    código    │   │  deps    │   │         │   │          │   │ (si main) │\n  └──────────────┘   └──────────┘   └─────────┘   └──────────┘   └───────────┘\n                                         ✗ si algo falla, se detiene y avisa",
     "v": 0,
     "tip": "un check verde en cada pull request da mucha confianza al revisar código en grupo."
    },
    {
     "n": "8.2",
     "t": "GitHub Actions",
     "m": "7 min",
     "b": [
      "GitHub Actions ejecuta flujos de trabajo (workflows) definidos en archivos YAML dentro de .github/workflows/. Cada workflow indica cuándo se ejecuta (on: push, pull_request), en qué máquina (runs-on: ubuntu-latest) y una lista de pasos: acciones ya hechas (uses: actions/checkout) o comandos (run: npm test).",
      "Se pueden levantar servicios como una base de datos para los tests y añadir un trabajo de despliegue que solo se ejecuta en la rama main y si los tests han pasado (needs). El resultado se ve en la pestaña Actions del repositorio y como check en cada pull request."
     ],
     "k": [
      ".github/workflows/ci.yml.",
      "on: push / pull_request.",
      "steps: uses (acciones) y run (comandos).",
      "needs: + if: para desplegar solo si pasan los tests en main."
     ],
     "c": "# .github/workflows/ci.yml\nname: CI\n\non:\n  push:\n    branches: [main]\n  pull_request:\n\njobs:\n  test:\n    runs-on: ubuntu-latest\n    services:\n      postgres:\n        image: postgres:17\n        env:\n          POSTGRES_PASSWORD: test\n        ports: [\"5432:5432\"]\n    steps:\n      - uses: actions/checkout@v4\n      - uses: actions/setup-node@v4\n        with:\n          node-version: 22\n          cache: npm\n      - run: npm ci\n      - run: npm run lint\n      - run: npm test\n        env:\n          DATABASE_URL: postgres://postgres:test@localhost:5432/postgres\n\n  deploy:\n    needs: test\n    if: github.ref == 'refs/heads/main'\n    runs-on: ubuntu-latest\n    steps:\n      - name: Desplegar en el VPS\n        uses: appleboy/ssh-action@v1\n        with:\n          host: ${{ secrets.VPS_HOST }}\n          username: ana\n          key: ${{ secrets.VPS_SSH_KEY }}\n          script: cd festival && git pull && docker compose up -d --build",
     "v": 0,
     "a": [
      [
       "on",
       "Cuándo se ejecuta: push, pull_request, schedule…"
      ],
      [
       "jobs",
       "Trabajos (en paralelo salvo needs)."
      ],
      [
       "runs-on",
       "Máquina: ubuntu-latest, windows-latest…"
      ],
      [
       "steps",
       "Pasos en orden."
      ],
      [
       "uses",
       "Usar una acción publicada."
      ],
      [
       "run",
       "Ejecutar un comando."
      ],
      [
       "needs",
       "Esperar a otro trabajo."
      ],
      [
       "secrets.NOMBRE",
       "Secreto guardado en el repositorio."
      ]
     ],
     "at": "Claves de un workflow",
     "ah": [
      "Clave",
      "Significado"
     ],
     "tip": "para proyectos Java, la acción setup-java y mvn test hacen lo mismo."
    },
    {
     "n": "8.3",
     "t": "Secretos y entornos",
     "m": "4 min",
     "b": [
      "Las contraseñas, claves de API o claves SSH que necesita el pipeline nunca se escriben en el código ni en el YAML: se guardan como secretos en Settings → Secrets and variables → Actions del repositorio y se usan con ${{ secrets.NOMBRE }}. GitHub los oculta en los logs.",
      "Lo habitual es tener al menos dos entornos: staging (pruebas, lo más parecido a producción) y producción. Cada uno con sus propias variables, su propia base de datos y, a veces, aprobación manual antes de desplegar a producción."
     ],
     "k": [
      "Secretos en Settings → Secrets → Actions.",
      "${{ secrets.NOMBRE }} en el workflow.",
      "Entornos: desarrollo, staging y producción.",
      "Cada entorno con su base de datos y variables."
     ],
     "c": "Entorno        Rama / origen      URL                              Base de datos\nDesarrollo     tu equipo          http://localhost:3000            Docker local\nVista previa   pull request       festival-git-pr-12.vercel.app    BD de pruebas\nStaging        rama develop       staging.festivaldaw.es           BD de staging\nProducción     rama main          festivaldaw.es                   BD de producción",
     "v": 0,
     "e": "hacer echo de un secreto en un paso del workflow para «comprobar que llega»: puede acabar visible en los logs.",
     "tip": "nunca uséis la base de datos de producción para hacer pruebas."
    },
    {
     "n": "8.4",
     "t": "Monitorización y mantenimiento",
     "m": "5 min",
     "b": [
      "Una aplicación publicada hay que vigilarla. La monitorización de disponibilidad (UptimeRobot, Better Stack) comprueba cada pocos minutos que la web responde y avisa si se cae. Los logs centralizados y herramientas como Sentry recogen los errores que ocurren en producción, con su traza, para poder arreglarlos.",
      "El mantenimiento incluye actualizar las dependencias y el sistema (los avisos de seguridad de Dependabot ayudan), revisar el espacio en disco, rotar los logs y comprobar periódicamente que las copias de seguridad se restauran."
     ],
     "k": [
      "Disponibilidad: UptimeRobot, Better Stack.",
      "Errores en producción: Sentry.",
      "Logs: journalctl, docker logs o un servicio centralizado.",
      "Actualizaciones, espacio en disco y copias probadas."
     ],
     "c": "# Endpoint de salud para los monitores\napp.get(\"/health\", async (req, res) => {\n  try {\n    await pool.query(\"SELECT 1\");\n    res.json({ ok: true, version: process.env.npm_package_version });\n  } catch {\n    res.status(503).json({ ok: false });\n  }\n});\n\n# Lista de comprobación de producción\n☐ HTTPS activo y renovación automática\n☐ Variables y secretos fuera del código\n☐ Cortafuegos: solo 22, 80 y 443\n☐ Copias de seguridad diarias y restauración probada\n☐ Monitor de disponibilidad con avisos\n☐ Errores registrados (Sentry o logs)\n☐ Dependencias y sistema actualizados",
     "v": 0,
     "tip": "un /health que compruebe también la base de datos detecta muchos más problemas."
    }
   ]
  }
 ],
 "chuleta": [
  [
   "Métodos HTTP",
   "GET leer · POST crear · PUT/PATCH modificar · DELETE borrar.",
   "curl -X POST https://api.ejemplo.com/entradas",
   "HTTP y DNS"
  ],
  [
   "Códigos de estado",
   "2xx éxito · 3xx redirección · 4xx error del cliente · 5xx error del servidor.",
   "200 · 201 · 301 · 404 · 500 · 502",
   "HTTP y DNS"
  ],
  [
   "curl -I / curl -v",
   "Ver cabeceras / toda la conversación HTTP.",
   "curl -I https://festivaldaw.es",
   "HTTP y DNS"
  ],
  [
   "Cache-Control",
   "Cuánto tiempo puede guardarse una respuesta.",
   "Cache-Control: public, max-age=31536000, immutable",
   "HTTP y DNS"
  ],
  [
   "dig dominio",
   "Consultar a qué IP apunta un dominio.",
   "dig festivaldaw.es +short",
   "HTTP y DNS"
  ],
  [
   "Registros A / CNAME / MX / TXT",
   "IPv4 · alias · correo · verificaciones.",
   "CNAME www cname.vercel-dns.com.",
   "HTTP y DNS"
  ],
  [
   "Nginx: server",
   "Bloque de un sitio: listen, server_name, root, index.",
   "server { listen 80; server_name festivaldaw.es; root /var/www/festival; }",
   "Servidores web"
  ],
  [
   "try_files … /index.html",
   "Hace que una SPA cargue index.html en cualquier ruta.",
   "location / { try_files $uri $uri/ /index.html; }",
   "Servidores web"
  ],
  [
   "proxy_pass",
   "Nginx como proxy inverso hacia una aplicación.",
   "location /api/ { proxy_pass http://localhost:3000; }",
   "Servidores web"
  ],
  [
   "nginx -t",
   "Comprobar la configuración antes de recargar.",
   "sudo nginx -t && sudo systemctl reload nginx",
   "Servidores web"
  ],
  [
   "sites-available / sites-enabled",
   "Sitios definidos / sitios activos (enlace simbólico).",
   "sudo ln -s /etc/nginx/sites-available/festival /etc/nginx/sites-enabled/",
   "Servidores web"
  ],
  [
   "Apache VirtualHost",
   "Sitio en Apache: ServerName y DocumentRoot.",
   "<VirtualHost *:80> ServerName festivaldaw.es </VirtualHost>",
   "Servidores web"
  ],
  [
   ".htaccess + mod_rewrite",
   "Configuración por carpeta y URLs amigables.",
   "RewriteRule ^ index.php [QSA,L]",
   "Servidores web"
  ],
  [
   "certbot --nginx",
   "Obtener e instalar un certificado de Let's Encrypt.",
   "sudo certbot --nginx -d festivaldaw.es",
   "HTTPS"
  ],
  [
   "return 301 https://",
   "Redirigir HTTP a HTTPS.",
   "return 301 https://$host$request_uri;",
   "HTTPS"
  ],
  [
   "Strict-Transport-Security",
   "HSTS: el navegador usará siempre HTTPS.",
   "add_header Strict-Transport-Security \"max-age=31536000\" always;",
   "HTTPS"
  ],
  [
   "docker run",
   "Crear y arrancar un contenedor: -d, -p, -e, -v, --name.",
   "docker run -d -p 8080:80 --name web nginx:alpine",
   "Docker"
  ],
  [
   "docker ps / logs / exec",
   "Listar, ver la salida y entrar en un contenedor.",
   "docker exec -it web sh",
   "Docker"
  ],
  [
   "docker stop / rm",
   "Parar y borrar contenedores.",
   "docker rm -f web",
   "Docker"
  ],
  [
   "Dockerfile",
   "Receta de una imagen: FROM, WORKDIR, COPY, RUN, CMD.",
   "FROM node:22-alpine\nWORKDIR /app\nCOPY . .\nCMD [\"node\", \"server.js\"]",
   "Docker"
  ],
  [
   "docker build -t",
   "Construir una imagen a partir del Dockerfile.",
   "docker build -t festival-api .",
   "Docker"
  ],
  [
   "-v volumen:/ruta",
   "Guardar datos fuera del contenedor.",
   "-v pgdata:/var/lib/postgresql/data",
   "Docker"
  ],
  [
   ".dockerignore",
   "Excluir node_modules, .env y .git de la imagen.",
   "node_modules\n.env",
   "Docker"
  ],
  [
   "compose.yaml",
   "Define varios servicios: image o build, ports, environment, volumes.",
   "services:\n  web:\n    image: nginx:alpine",
   "Docker Compose"
  ],
  [
   "docker compose up -d / down",
   "Arrancar / parar todos los servicios.",
   "docker compose up -d --build",
   "Docker Compose"
  ],
  [
   "depends_on + healthcheck",
   "Esperar a que otro servicio esté listo.",
   "depends_on: { bd: { condition: service_healthy } }",
   "Docker Compose"
  ],
  [
   "${VARIABLE}",
   "Sustituida desde el archivo .env.",
   "POSTGRES_PASSWORD: ${DB_PASSWORD}",
   "Docker Compose"
  ],
  [
   "Host = nombre del servicio",
   "Dentro de Compose, los servicios se llaman por su nombre.",
   "postgres://user:pass@bd:5432/festival",
   "Docker Compose"
  ],
  [
   "Vercel / Netlify / GitHub Pages",
   "Webs estáticas y SPA gratis desde GitHub.",
   "vercel.json → rewrites",
   "Hosting y CI/CD"
  ],
  [
   "Render / Railway / Fly.io",
   "Desplegar APIs desde GitHub.",
   "Start command: npm start",
   "Hosting y CI/CD"
  ],
  [
   "VPS",
   "Servidor Linux propio: SSH, Nginx, Docker, certbot.",
   "ssh ana@203.0.113.10",
   "Hosting y CI/CD"
  ],
  [
   ".github/workflows/*.yml",
   "Workflows de GitHub Actions.",
   "on: [push, pull_request]",
   "Hosting y CI/CD"
  ],
  [
   "uses / run",
   "Usar una acción publicada / ejecutar un comando.",
   "- uses: actions/checkout@v4\n- run: npm test",
   "Hosting y CI/CD"
  ],
  [
   "${{ secrets.NOMBRE }}",
   "Usar un secreto del repositorio en un workflow.",
   "key: ${{ secrets.VPS_SSH_KEY }}",
   "Hosting y CI/CD"
  ],
  [
   "/health",
   "Endpoint de salud para monitores.",
   "app.get(\"/health\", (req, res) => res.json({ ok: true }));",
   "Hosting y CI/CD"
  ]
 ],
 "retos": [
  {
   "t": "¿Qué hace el DNS?",
   "o": [
    "Cifra la conexión",
    "Traduce nombres de dominio a direcciones IP",
    "Sirve archivos estáticos",
    "Guarda la base de datos"
   ],
   "ok": 1,
   "why": "El DNS es la guía telefónica de internet."
  },
  {
   "t": "¿Qué indica un error 502 Bad Gateway?",
   "o": [
    "Página no encontrada",
    "El proxy no recibe respuesta de la aplicación de detrás",
    "Falta autenticación",
    "El DNS no existe"
   ],
   "ok": 1,
   "why": "El servidor web funciona, pero la aplicación a la que reenvía no responde."
  },
  {
   "t": "¿Qué comando comprueba la configuración de Nginx?",
   "o": [
    "nginx -check",
    "sudo nginx -t",
    "systemctl test nginx",
    "nginx --verify"
   ],
   "ok": 1,
   "why": "nginx -t valida la sintaxis antes de recargar."
  },
  {
   "t": "En docker run -p 8080:80, ¿qué es el 80?",
   "o": [
    "El puerto de tu equipo",
    "El puerto dentro del contenedor",
    "El número de contenedores",
    "La versión de Nginx"
   ],
   "ok": 1,
   "why": "Formato: puertoEquipo:puertoContenedor."
  },
  {
   "t": "¿Por qué se copia package.json antes que el resto del código en un Dockerfile?",
   "o": [
    "Es obligatorio",
    "Para aprovechar la caché de capas al instalar dependencias",
    "Para que pese menos",
    "Por seguridad"
   ],
   "ok": 1,
   "why": "Si solo cambia el código, la capa de dependencias se reutiliza."
  },
  {
   "t": "Dentro de Compose, ¿qué host usa la API para conectar con el servicio bd?",
   "o": [
    "localhost",
    "bd",
    "127.0.0.1",
    "host.docker.internal"
   ],
   "ok": 1,
   "why": "Los servicios se comunican por su nombre."
  },
  {
   "t": "¿Qué hace la integración continua (CI)?",
   "o": [
    "Escribe el código",
    "Ejecuta automáticamente build, lint y tests en cada cambio",
    "Compra el dominio",
    "Hace copias de seguridad"
   ],
   "ok": 1,
   "why": "Detecta los errores en cuanto se suben los cambios."
  }
 ]
};
