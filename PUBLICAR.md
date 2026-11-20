# Publicar el portafolio

El commit inicial local ya está preparado. Sigue estos pasos después de revisar y aprobar el sitio; el flujo de publicación permanece inactivo hasta que publiques el repositorio.

1. Instala dependencias y verifica el proyecto: `npm ci && npm run check`.
2. Genera y revisa el sitio: `npm run build && npx serve out`. Abre la dirección local indicada y revisa las versiones en español e inglés, enlaces, descargas y diseño móvil.
3. Confirma que el commit existente usa la identidad personal: `git log -1 --format='%an <%ae> | committer %cn <%ce>'`. La identidad global de esta máquina corresponde a una cuenta corporativa; no la uses para commits.
4. Revisa el árbol con `git status` y confirma que `specs/` y `.preview/` no aparezcan.
5. Cuando todos los repositorios estén revisados, ejecuta `../publish.sh` desde este directorio padre. El script publica los proyectos primero y `Portfolio_CV` al final, como `JEHH97.github.io`; solicita confirmación antes de cualquier publicación. No agregues remotos ni hagas push manualmente.

6. En Settings → Pages, selecciona **GitHub Actions** como origen.
7. Antes de publicar, confirma que el análisis de contenido pase, que los PDF estén revisados y que no aparezcan nombres de empresas fuera de la experiencia laboral indicada.

La primera publicación puede tardar unos minutos. El flujo de Pages construye y valida los archivos estáticos antes de subirlos.

## Repositorios de los proyectos open source

El portafolio enlaza a los repositorios de los proyectos open source y al repositorio de perfil de GitHub. Publica cada repositorio **antes o junto con** el portafolio para que los enlaces no devuelvan 404. Las carpetas locales de los seis proyectos están junto a `Portfolio_CV/` (en `~/dev/proyects/`):

| Proyecto | Carpeta local | Repositorio en GitHub |
| --- | --- | --- |
| Flowboard | `flowboard/` | `JEHH97/flowboard` |
| mcp-mx-economy | `mcp-mx-economy/` | `JEHH97/mcp-mx-economy` |
| DocScan API | `docscan-api/` | `JEHH97/docscan-api` |
| DocScan Mobile | `docscan-mobile/` | `JEHH97/docscan-mobile` |
| Checkout Service | `checkout-service/` | `JEHH97/checkout-service` |
| Go Shortener | `go-shortener/` | `JEHH97/go-shortener` |
| Repositorio de perfil (README de perfil) | `JEHH97/` | `JEHH97/JEHH97` |

Antes de publicar el portafolio, confirma que cada repositorio exista, sea público y tenga su rama principal con el contenido revisado. Verifica también que los enlaces `https://github.com/JEHH97/<repo>` abran correctamente. Los enlaces de demostración están vacíos y se ocultan automáticamente hasta que exista una URL pública.
