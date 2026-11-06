# DevPath

Apuntes interactivos para la clase de **DAW**: HTML, CSS, JavaScript, React, Java, PHP, SQL y Git/GitHub.

Cada tema incluye una ruta de estudio, una chuleta con buscador, una práctica interactiva, retos de repaso y un recurso externo para ampliar.

🔗 **Web:** https://devpath-daw.vercel.app

## Estructura

```
index.html        Portada (hub de temas)
hub.js            Lógica de la portada
data.js           Contenido de todos los temas  ← aquí se añaden temas
tema.html/.js     Plantilla de tema (/tema/html, /tema/sql…)
git/              Sección de Git basada en el libro Pro Git
styles.css        Estilos compartidos
vercel.json       Rutas limpias (/tema/:slug)
```

Es HTML, CSS y JavaScript sin dependencias ni build.

## Probar en local

```bash
npx serve .
```

(Las rutas `/tema/...` funcionan en Vercel; en local abre `tema.html` desde el servidor o usa `npx vercel dev`).

## Cómo contribuir

1. Crea una rama: `git switch -c tema/python`
2. Añade o corrige contenido (normalmente en `data.js`).
3. Haz commit y push: `git push -u origin tema/python`
4. Abre una **Pull Request**. Vercel genera una vista previa automática.

## Créditos

- La sección de Git resume [Pro Git](https://git-scm.com/book/es/v2) de Scott Chacon y Ben Straub (licencia CC BY-NC-SA 3.0).
- Los recursos externos enlazados pertenecen a sus autores.
