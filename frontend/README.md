# Joaquin Garcia-Suarez — Academic Portfolio

Static academic portfolio for Joaquin Garcia-Suarez, SNSF Ambizione Fellow at EPFL. The site presents his
biography, research programme, teaching record, and the interactive Data-Driven Computational Friction (DDCF)
project hub.

## Application

- Next.js 16 App Router, React 19, and TypeScript.
- CSS Modules and a shared design system in `src/app/globals.css`.
- Static export generated in `out/`.
- Self-hosted Inter variable font; production builds do not require Google Fonts.
- Four public routes: `/`, `/research`, `/teaching`, and `/ddcf`.

The factual source of truth lives in the repository-level `context-in-text/` directory. Development state,
decisions, validation results, and pending work are recorded in `../projectProgressControl.md`.

## Requirements

- Node.js 22, matching GitHub Actions.
- npm and the committed `package-lock.json`.

Install dependencies:

```bash
npm ci
```

## Local development

```bash
npm run dev
```

The development server is normally available at `http://127.0.0.1:3000`.

Build and serve the production export:

```bash
npm run build
npm run validate:export
npm start
```

`npm start` serves `out/` at `http://127.0.0.1:4173`. Use `STATIC_PORT` or `STATIC_HOST` to override those values.

## Quality checks

```bash
npm run lint
npm run test:component
npm run build
npm run validate:export
npm run test:e2e
npm run test:ci
```

Playwright exercises the production-like static export, so run `build` and `validate:export` before an isolated
`test:e2e` command. `test:ci` runs the complete sequence in the correct order. The export validator checks required
routes and files, canonical URLs, sitemap and robots content, the bundled font, absence of retired assets and
symlinks, and a 12 MiB artifact budget.

## Content and architecture

- `src/app/`: route components, metadata, sitemap, robots, and route styles.
- `src/components/`: reusable portfolio sections and navigation.
- `src/app/ddcf/`: React Flow canvas, nodes, dialogs, and approved DDCF copy.
- `public/`: only files delivered directly to visitors.
- `tests/`: Vitest component tests and Playwright browser checks.
- `scripts/`: local static server and export validation.

When changing factual content, reconcile it with:

- `../context-in-text/CV_May_2026-1.md`
- `../context-in-text/research_statement_4_Carlson.md`
- `../context-in-text/teaching_statement_4_Carlson.md`
- `../context-in-text/goal.md`

## Configuration

`NEXT_PUBLIC_SITE_URL` controls canonical, Open Graph, sitemap, robots, and structured-data origins. It defaults to
`https://jgarciasuarez.github.io`; `.env.example` documents the production value.

The build uses `output: "export"` and `trailingSlash: true`. Features that require a Next.js server, including
Server Actions, request-time cookies, dynamic route handlers, and the default image optimizer, must not be added
without changing the hosting architecture.

## GitHub delivery

`.github/workflows/quality.yml` runs the complete quality gate. In
`jgarciasuarez/jgarciasuarez.github.io`, a successful push to `agentic_web_design` also builds a GitHub Pages
artifact and attempts deployment.

The deployment source is currently paused: a repository administrator must change **Settings → Pages → Source**
from legacy `master` publishing to **GitHub Actions**. The workflow and artifact build are already validated; no
local machine is required once that setting is available.
