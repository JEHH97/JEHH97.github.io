# Jesús Hernández — developer portfolio

A bilingual, static portfolio for software engineering work, built with Next.js, React, TypeScript, and Tailwind CSS. The site is exported as static files for GitHub Pages and includes Spanish and English pages.

## Repository structure

```text
.
├── src/                  All application source
│   ├── app/              Next.js App Router: routes, layouts, metadata, global CSS
│   │   ├── (landing)/    Root landing page (redirects to a language)
│   │   ├── [locale]/     Localized pages (/es, /en) and project case studies
│   │   ├── robots.ts     robots.txt generation
│   │   └── sitemap.ts    sitemap.xml generation
│   ├── components/       React UI components (header, hero, project cards, diagrams, theme toggle)
│   ├── content/          Portfolio content: projects, experience, skills, route data
│   ├── i18n/             UI copy in Spanish (es.ts) and English (en.ts)
│   ├── config/           Site-wide settings: name, contact links, CV paths
│   └── test/             Vitest setup (Testing Library matchers)
├── scripts/              Repository tooling: container wrapper and forbidden-content scan
├── public/               Static files copied as-is into the site
│   └── cv/               Generated résumé PDFs (ES and EN)
├── cv/                   Résumé source (HTML) and the PDF build script
├── .github/workflows/    GitHub Actions deployment to GitHub Pages
├── next.config.ts        Next.js static export settings
├── vitest.config.ts      Unit/component test configuration
└── eslint.config.mjs     Lint configuration
```

Build output (`out/`, `.next/`) and dependencies (`node_modules/`) are generated and ignored by Git.

## Run locally

You can use the host Node.js 24 toolchain or the included Docker wrapper. Both give the same results.

Option A — Node.js 24 on the host:

```sh
npm ci
npm run dev
```

Option B — Docker, through `scripts/in-dev` (runs the same commands in a `node:24` container as your user, so generated files stay owned by you):

```sh
scripts/in-dev npm ci
scripts/in-dev npm run dev
```

Open the local address printed by Next.js. The root page selects a language from the browser preference; `/es/` and `/en/` are also available directly.

## Editing content

| What you want to change | Where |
| --- | --- |
| Name, email, GitHub, LinkedIn, site URL, location, CV paths | `src/config/site.ts` |
| LinkedIn link | `src/config/site.ts` — set `linkedin` to your profile URL (empty string hides the link) |
| Interface copy (headings, buttons, navigation, footer) | `src/i18n/es.ts` and `src/i18n/en.ts` (keep both files in the same shape) |
| Case studies (featured projects, bilingual text, stack, slugs) | `src/content/projects.ts` |
| Public open-source projects and other projects | `src/content/projects.ts` (`publicProjects`, `otherProjects`) |
| Work experience and education | `src/content/experience.ts` |
| Skill groups | `src/content/skills.ts` |
| Résumé content (PDF) | `cv/src/resume.es.html` and `cv/src/resume.en.html`, then rebuild (see below) |

After changing content, run the tests and the build (`npm test`, `npm run build`).

## Rebuilding the CV

The résumé PDFs in `public/cv/` are generated from the HTML sources in `cv/src/` with Puppeteer:

```sh
cd cv
npm install          # first time only; downloads Puppeteer and Chrome
npm run build        # writes public/cv/JEHH_FullStack_ES.pdf and JEHH_FullStack_EN.pdf
```

If Chrome cannot be downloaded, install it with `npx puppeteer browsers install chrome`, or point the build at an existing Chrome binary with `PUPPETEER_EXECUTABLE_PATH=/path/to/chrome npm run build`. See `cv/README.md` for details. Each PDF must stay one A4 page.

## Quality checks

```sh
npm run lint
npm run typecheck
npm test
npm run build
npm run scan
```

Or all at once with `npm run check`. (With Docker, prefix each command with `scripts/in-dev`.)

`npm run build` creates the static site in `out/`. Preview the export with `npm start`. The scan checks tracked source, the résumé PDFs, and internal links in the generated site.

## Stack

- Next.js App Router with static export
- React 19 and strict TypeScript
- Tailwind CSS v4 with a small custom design layer
- Vitest and Testing Library
- Geist Sans font assets bundled for offline rendering

Project descriptions are bilingual and intentionally omit private source links. The résumé documents are expected at the locale-specific download paths.
