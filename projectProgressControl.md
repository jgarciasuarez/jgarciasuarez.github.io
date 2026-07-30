# Project Progress Control

This document is the source of truth for the development of Joaquin Garcia-Suarez's academic portfolio website.
It records the verified state of the application, the prioritized backlog, validation results, and every material
change made during development.

## Documentation Protocol

1. Update this file whenever code, content, dependencies, assets, configuration, or deployment state changes.
2. Add every newly discovered task to the prioritized backlog before or while implementing it.
3. Mark a task complete only after the relevant validation has passed.
4. Record the validation command and result in the change log.
5. Use the files in `context-in-text/` as the content source of truth:
   - `CV_May_2026-1.md` for biographical facts, dates, metrics, publications, teaching, and mentoring.
   - `research_statement_4_Carlson.md` for the research narrative.
   - `teaching_statement_4_Carlson.md` for the teaching narrative.
   - `goal.md` for product and design requirements.

Task states:

- `[ ]` Pending
- `[~]` In progress
- `[x]` Completed and verified
- `[!]` Blocked or awaiting user-provided information

## Current Verified State

- **Branch:** `agentic_web_design`
- **Remote tracking:** based on `origin/agentic_web_design`; current P0 changes are local and uncommitted
- **Framework:** Next.js 16.2.12, React 19, TypeScript, App Router, CSS Modules
- **Implemented routes:** `/`, `/research`, `/teaching`, `/ddcf`
- **Production build:** passing
- **TypeScript:** passing through `next build`
- **Local route check:** all four routes respond successfully; `/ddcf` returns HTTP 200 after the current implementation
- **Lint:** passing
- **Automated tests:** not implemented
- **CI/CD:** not configured
- **DDCF status:** interactive React Flow hub implemented, production-built, and locally reachable

## Prioritized Backlog

### P0 — Content Integrity and Clean Quality Baseline

- [x] Correct all ESLint errors in Research and Teaching.
- [x] Reconcile every visible metric, date, role, publication status, and social link with the May 2026 CV.
  - Correct the SNSF grant from `~1M CHF` to CHF 830,128 / CHF 830k.
  - Correct EPFL teaching role, course code, semester, and dates.
  - Correct Caltech teaching dates and award wording.
  - Correct graduate supervision and semester-project counts.
  - Correct publication years/statuses in Research.
  - Correct the X profile URL to `@jgs_research`.
  - Make the stated research scale consistently span twelve orders of magnitude.
- [x] Run ESLint and a production build after the corrections.

### P0 — DDCF Interactive Hub

- [x] Approve implementation copy for the central project node and all four peripheral nodes.
- [x] Document source provenance, external resources, and candidate asset mapping in
  `context-in-text/ddcf_content_specification.md`.
- [x] Replace the `/ddcf` placeholder with an interactive React Flow canvas.
- [x] Create a central DDCF node with the full title “Data-Driven Computational Friction”.
- [x] Add the SNSF logo and official project link: `https://data.snf.ch/grants/grant/216341`.
- [x] Add connected nodes for:
  - Data-driven constitutive modeling
  - Learning neural operators
  - GPU acceleration
  - Automatic differentiation
- [x] Add accessible detail dialogs for the central and peripheral nodes.
- [x] Integrate the relevant DDCF figures already available in `public/images/`.
- [x] Add subtle motion with `framer-motion` and support reduced-motion preferences.
- [x] Obtain or confirm the final descriptive content for each DDCF subproject.
- [!] Confirm which public grant amount should be displayed: the CV records CHF 830,128 while the SNSF Data Portal
  records CHF 842,376.

### P1 — Responsive Navigation and Layout

- [ ] Redesign the navigation for mobile widths; the DDCF link is currently clipped at 390 px.
- [ ] Validate `/`, `/research`, `/teaching`, and `/ddcf` at mobile, tablet, laptop, and desktop widths.
- [ ] Verify image legibility and typography at each breakpoint.
- [ ] Confirm sticky and full-height sections behave correctly on short screens.

### P1 — Portfolio Content and Relevant Links

- [ ] Expand Bio with a concise employment and industry-experience summary.
- [ ] Add the requested Seville wording/wink from `goal.md`.
- [ ] Add contact links for email, ORCID, academic website, GitHub, X, and downloadable CV.
- [ ] Add DOI or official publication links to Research.
- [ ] Add relevant teaching resources and student-project links.
- [ ] Decide whether Teaching should remain text-only, as requested in `goal.md`, or retain its current image.

### P1 — Accessibility and SEO

- [ ] Add a semantic `<main>` landmark and a skip link.
- [ ] Add visible keyboard focus styles and identify the active navigation item.
- [ ] Mark decorative canvas content appropriately for assistive technologies.
- [x] Respect `prefers-reduced-motion` for the DDCF canvas and dialogs.
- [x] Add route-specific metadata for DDCF.
- [ ] Add canonical URLs, Open Graph metadata, sitemap, robots, and structured data.

### P2 — Testing and Continuous Integration

- [ ] Add component and route smoke tests.
- [ ] Add responsive end-to-end checks for the four primary routes.
- [ ] Add accessibility checks.
- [ ] Add CI that runs lint, tests, and production build.

### P2 — Documentation, Dependencies, and Assets

- [ ] Reconcile stale route checklists in `frontend/src/app/agent_instructions.md`.
- [ ] Remove references to missing `summaryContext.md` and `ModernWebPage.md`.
- [ ] Replace the generic Next.js README with project-specific setup and architecture documentation.
- [ ] Review unused MDX, Lucide, React Flow, and Framer Motion dependencies after DDCF implementation.
- [ ] Review unused images and remove or integrate them.
- [ ] Optimize large raster assets and verify production delivery sizes.
- [ ] Add a responsive `sizes` value to the filled `model_hw.png` image.
- [ ] Review eager loading for the above-the-fold `contact_across_scales.png` LCP image.
- [ ] Remove unused starter SVGs and unused `src/app/page.module.css`.

### P2 — Deployment Readiness

- [ ] Select and document the hosting target.
- [ ] Make font delivery deterministic or document the Google Fonts network requirement.
- [ ] Configure production environment and deployment checks.
- [ ] Perform a final content, browser, performance, and link audit.
- [!] Publish the validated project through a private production deployment; awaiting explicit authorization to
  copy the repository to the hosting provider's private source repository.

## Completed Work

### Foundation and Architecture

- [x] Initialized Next.js with App Router, TypeScript, ESLint, and CSS Modules.
- [x] Created reusable Navigation, Hero, Stats, Research Preview, Education Timeline, and Footer components.
- [x] Defined a shared dark design system in `frontend/src/app/globals.css`.
- [x] Added and processed source PDFs, extracted figures, and web-ready images.

### Implemented Pages

- [x] Home/Bio visual foundation.
- [x] Research page with three research themes and selected publications.
- [x] Teaching page with philosophy, methods, experience, proposed courses, and mentoring summary.
- [x] DDCF route scaffold.

### Verified on 2026-07-30

- [x] Production build completed successfully with Next.js 16.2.12.
- [x] TypeScript validation completed successfully during the production build.
- [x] `/`, `/research`, `/teaching`, and `/ddcf` rendered without browser console errors.
- [x] Git branch confirmed clean and synchronized before the current work.

## Change Log

### 2026-07-30 — Repository Audit and Process Baseline

- Replaced the original partial checklist with this verified project-control document.
- Added the documentation protocol and task-state definitions.
- Recorded the current branch, framework, build, lint, route, test, and DDCF status.
- Added the prioritized backlog produced by the full repository, content, browser, and responsive audit.
- Started P0 “Content Integrity and Clean Quality Baseline”.

### 2026-07-30 — P0 Content Integrity and Clean Quality Baseline

- Corrected the seven `react/no-unescaped-entities` ESLint errors in Research and Teaching.
- Corrected the displayed SNSF Ambizione amount from `~1M CHF` to `CHF 830k`, matching the CV amount of CHF 830,128.
- Standardized the interface-mechanics scale at twelve orders of magnitude.
- Corrected the X profile URL to `https://x.com/jgs_research`.
- Updated the component inventory so its Stats Ribbon description matches the corrected grant amount.
- Corrected Research publication data:
  - “On the lowest-frequency bandgap of 1D phononic crystals” → 2025.
  - “Phase-space iterative solvers” → published in *Computational Mechanics* in 2025.
- Corrected Teaching data:
  - EPFL Main Instructor → Spring 2024–2025.
  - EPFL Teaching Assistant, CIVIL-425 → Fall 2021–2022.
  - Caltech Teaching Assistant → Fall 2017–2019.
  - Award wording → Registrar’s Office Excellent TA Mention.
  - Graduate students supervised → 2.
  - Semester projects → 17 total: 7 master’s and 10 bachelor’s.
- Validation:
  - ESLint: passed with zero errors and zero warnings.
  - Next.js production build: passed.
  - TypeScript: passed during the production build.
  - Static generation: passed for `/`, `/research`, `/teaching`, and `/ddcf`.
  - Browser content verification: all corrected values rendered exactly once and produced no console errors.
- Completed P0 “Content Integrity and Clean Quality Baseline”.

### 2026-07-30 — DDCF Content Dependency Resolution

- Reviewed the local goal, DDCF collage, research statement, and May 2026 CV.
- Reviewed the official SNSF Data Portal record for grant 216341.
- Reviewed the primary DDCF publication and its open manuscript to distinguish demonstrated work from future
  research directions.
- Created `context-in-text/ddcf_content_specification.md` with approved implementation copy for:
  - The central DDCF project node and detail dialog.
  - Data-Driven Constitutive Modeling.
  - Learning Neural Operators.
  - GPU Acceleration.
  - Automatic Differentiation.
- Added project facts, external resources, key concepts, source provenance, editorial rules, and candidate visual
  asset mappings.
- Updated `frontend/src/app/ddcf/agent_instructions.md` to make the specification the required content source.
- Resolved the missing-description blocker for the four subprojects.
- Added a new blocked content decision: the CV and SNSF Data Portal expose different approved grant amounts, so the
  hub will omit the amount until the preferred public value is confirmed.

### 2026-07-30 — DDCF Interactive Hub Implementation Started

- Moved the remaining DDCF P0 implementation tasks to in-progress status.
- Confirmed the approved DDCF content specification as the single copy source for the interface.
- Confirmed the page architecture: a server-rendered route with an isolated client-side React Flow hub.
- Confirmed that the unresolved grant amount will not be exposed in the hub.

### 2026-07-30 — DDCF Interactive Hub Completed

- Replaced the `/ddcf` placeholder with an interactive React Flow research map.
- Added a central DDCF node and four draggable, connected research-direction nodes:
  - Data-Driven Constitutive Modeling.
  - Learning Neural Operators.
  - GPU Acceleration.
  - Automatic Differentiation.
- Added pan, zoom, fit-view controls, a mobile research-direction index, and descriptive canvas instructions.
- Added accessible detail dialogs for all five nodes with:
  - Escape-key and backdrop dismissal.
  - Keyboard focus trapping and focus restoration.
  - Semantic dialog labelling.
  - Project facts, key concepts, and verified external resources.
- Integrated the approved DDCF figures through `next/image`.
- Downloaded and integrated the unmodified official English SNSF logo for dark web backgrounds from the SNSF
  identity page, with the required funding acknowledgement and official grant link.
- Added route-specific metadata and preserved the route as a statically generated page.
- Added Framer Motion entrances and dialog transitions with `prefers-reduced-motion` support.
- Kept the disputed grant amount out of the interface pending confirmation.
- Validation:
  - ESLint: passed with zero errors and zero warnings.
  - Next.js production build: passed.
  - TypeScript: passed during the production build.
  - Static generation: passed for all seven generated pages, including `/ddcf`.
  - Local server route check: `/ddcf` returned HTTP 200.
  - Whitespace validation: `git diff --check` passed.
- Newly observed performance follow-ups:
  - `model_hw.png` needs a responsive `sizes` value.
  - The above-the-fold `contact_across_scales.png` image should be reviewed for eager loading.

### 2026-07-30 — DDCF Publication Preparation

- Created a project-specific DDCF social preview card using the established cyan, violet, and graphite visual system.
- Verified the generated card contains the required project title and funding context without a grant amount.
- Added the social card to the application and configured site-specific Open Graph and X metadata.
- Created the Sites project association and recorded only its non-secret project identifier in
  `frontend/.openai/hosting.json`.
- Prepared the private production-publication task.
- Publication is paused before source transfer because exporting the complete repository to the hosting provider
  requires explicit user authorization. No repository content has been sent to that host.
