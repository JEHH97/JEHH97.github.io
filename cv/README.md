# CV build (ES / EN)

Generates the bilingual Full-Stack Developer résumé as A4 PDFs.

- Sources: `src/resume.es.html`, `src/resume.en.html` (self-contained, no external assets)
- Output: `../public/cv/JEHH_FullStack_ES.pdf` and `../public/cv/JEHH_FullStack_EN.pdf`

## Rebuild

```bash
cd cv
npm install   # first time only (downloads Puppeteer + Chromium)
npm run build
```

If Puppeteer cannot download Chrome (network or proxy restrictions), install it with `npx puppeteer browsers install chrome` or point the build at a local Chrome binary:

```bash
PUPPETEER_EXECUTABLE_PATH=/path/to/chrome npm run build
```

On minimal Linux containers, Chrome also needs its system libraries (for example `libnss3`, `libnspr4`, `libasound2`, `libgbm1`, `libpango-1.0-0`). Install them with your package manager, or use a full desktop image.

Edit the HTML sources, then run `npm run build` again. The PDF title metadata comes from each file's `<title>`.
