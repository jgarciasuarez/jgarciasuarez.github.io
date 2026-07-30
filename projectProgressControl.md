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
- **Remote tracking:** based on `origin/agentic_web_design`; current work includes local commits not yet pushed
- **Framework:** Next.js 16.2.12, React 19, TypeScript, App Router, CSS Modules
- **Implemented routes:** `/`, `/research`, `/teaching`, `/ddcf`
- **Production build:** passing
- **TypeScript:** passing through `next build`
- **Local route check:** all four routes respond successfully; `/ddcf` returns HTTP 200 after the current implementation
- **Lint:** passing
- **Automated tests:** 4 component tests and 25 Playwright route, responsive, navigation, and accessibility tests
  passing
- **CI/CD:** GitHub Actions quality workflow configured for lint, component tests, Playwright tests, production
  build, and gated GitHub Pages deployment; remote deployment validation is in progress
- **DDCF status:** interactive React Flow hub implemented, production-built, and locally reachable
- **Content coverage audit:** completed; prioritized editorial gaps are documented in
  `context-in-text/content_gap_audit_2026-07-30.md`

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
- [x] Use CHF 830,128 as the approved public grant amount, following the user's decision to select the lower of the
  CV and SNSF Data Portal values.

### P1 — Responsive Navigation and Layout

- [x] Redesign the navigation for mobile widths; the DDCF link no longer clips at 390 px.
- [x] Validate `/`, `/research`, `/teaching`, and `/ddcf` at mobile, tablet, laptop, and desktop widths.
- [x] Verify image delivery, text containment, and absence of horizontal overflow at each breakpoint.
- [x] Confirm sticky navigation and route layout behavior on short screens.

### P1 — Portfolio Content and Relevant Links

- [x] Expand Bio with a concise employment and industry-experience summary.
- [x] Add the requested Seville wording/wink from `goal.md`.
- [x] Add contact links for email, ORCID, academic website, GitHub, X, and downloadable CV.
- [x] Add DOI or official publication links to Research.
- [x] Add relevant teaching resources and student-project links.
- [x] Make Teaching text-only, following the explicit requirement in `goal.md`.

### P1 — Accessibility and SEO

- [x] Add a semantic `<main>` landmark and a skip link.
- [x] Add visible keyboard focus styles and identify the active navigation item.
- [x] Mark decorative canvas content appropriately for assistive technologies.
- [x] Respect `prefers-reduced-motion` for the DDCF canvas and dialogs.
- [x] Add route-specific metadata for DDCF.
- [x] Add canonical URLs, Open Graph metadata, sitemap, robots, and structured data.
- [x] Set `metadataBase` with the verified academic website as a configurable fallback until the final production
  domain is confirmed.

### P1 — Content Coverage Decision Gate Before P2

- [x] Compare the complete context documentation with the content implemented on all four primary routes.
- [x] Document coverage, omissions, source conflicts, relevance, and inclusion recommendations in
  `context-in-text/content_gap_audit_2026-07-30.md`.
- [x] Correct stale embedded publication years in the Research and DDCF imagery.
- [x] Add the 2026 “A matter of shape” publication and a clear route to the complete publication record.
- [x] Add a compact technical-capabilities and verified research-software block.
- [x] Add teaching testimonials and surface publication-linked mentoring outcomes.
- [x] Place the official SNSF mark in the interactive central DDCF node, as required by `goal.md`.
- [x] Add the X profile directly to the Bio professional links.
- [x] Implement the approved research roadmap, seismic/geotechnical foundation, selective recognition and
  leadership, and collaboration CTA before starting P2.
- [!] Keep the submitted HyperMech proposal unpublished until its outcome or preferred public wording is confirmed.

### P2 — Testing and Continuous Integration

- [x] Add component and route smoke tests.
- [x] Add responsive end-to-end checks for the four primary routes.
- [x] Add accessibility checks.
- [x] Add CI that runs lint, tests, and production build.

### P2 — Documentation, Dependencies, and Assets

- [ ] Reconcile stale route checklists in `frontend/src/app/agent_instructions.md`.
- [ ] Remove references to missing `summaryContext.md` and `ModernWebPage.md`.
- [ ] Replace the generic Next.js README with project-specific setup and architecture documentation.
- [ ] Review unused MDX, Lucide, React Flow, and Framer Motion dependencies after DDCF implementation.
- [!] Resolve the three high-severity production advisories reported by `npm audit --omit=dev` for transitive
  `postcss` and `sharp` versions. npm currently proposes an unsafe breaking downgrade to Next.js 9, so do not run
  `npm audit fix --force`; re-evaluate against a compatible Next.js/sharp update.
- [ ] Review unused images and remove or integrate them.
- [~] Optimize large raster assets and verify production delivery sizes.
- [x] Serve WebP variants of the four heaviest referenced scientific figures, reducing their combined transfer
  size from 4,362,574 bytes to 772,102 bytes (82.3%) while preserving the corrected PNG sources.
- [x] Add a responsive `sizes` value to the filled `model_hw.png` image.
- [x] Eager-load the above-the-fold `contact_across_scales.png` LCP image and provide responsive sizes.
- [ ] Remove unused starter SVGs and unused `src/app/page.module.css`.

### P2 — Deployment Readiness

- [x] Select GitHub Pages as the low-cost hosting target, with GitHub Actions as the only deployment controller.
- [x] Make font delivery deterministic by self-hosting the official Inter variable font and its license.
- [x] Configure Next.js to generate a trailing-slash static export in `frontend/out`.
- [~] Add and remotely validate the GitHub Pages deployment workflow.
- [ ] Mirror `agentic_web_design` into `jgarciasuarez/jgarciasuarez.github.io` without modifying its legacy
  `master` branch.
- [ ] Switch the existing GitHub Pages publishing source from legacy `master` to GitHub Actions.
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

### 2026-07-30 — GitHub Pages Automation Steps 3–4 Started

- Extended the existing quality workflow with a gated static-site packaging and GitHub Pages deployment stage.
- Kept publication conditional on the repository being `jgarciasuarez/jgarciasuarez.github.io`, preventing the
  source repository `jgarciasuarez/web` from accidentally publishing at the incompatible `/web` base path.
- Preserved the existing personal-site `master` branch as the rollback source; the new application will be
  introduced on `agentic_web_design`.
- Added manual workflow dispatch support for controlled deployment and recovery.
- Local workflow YAML parsing and whitespace validation passed. Remote branch mirroring, Pages source migration,
  and the first hosted workflow run remain in progress.

### 2026-07-30 — GitHub Pages Preparation Steps 1–2 Completed

- Configured Next.js with `output: "export"`, trailing-slash routes, and unoptimized static image delivery so
  `npm run build` now produces a GitHub Pages-compatible site in `frontend/out`.
- Declared the generated `robots.txt` and `sitemap.xml` routes as static, as required by Next.js 16 for static
  export mode.
- Removed the production-build dependency on Google Fonts by adding the official Inter 4.66 variable WOFF2 file,
  retaining its SIL Open Font License, and loading it through `next/font/local`.
- Added visually verified WebP variants for the four largest referenced scientific figures and updated Home,
  Research, and DDCF to serve them. Their combined browser payload fell from 4,362,574 bytes to 772,102 bytes,
  an 82.3% reduction; corrected PNG sources remain available for future asset curation.
- Validation completed:
  - ESLint passed.
  - Vitest passed: 2 files, 4 tests.
  - Playwright passed: 25 route, responsive, and accessibility tests.
  - Next.js 16.2.12 generated all application routes, `robots.txt`, `sitemap.xml`, and the Open Graph image as
    static content without fetching Google Fonts.
  - A standalone static HTTP server returned HTTP 200 for `/`, `/research/`, `/teaching/`, `/ddcf/`,
    `/robots.txt`, and `/sitemap.xml`; the exported HTML referenced the bundled Inter font and WebP figures.
- GitHub repository migration, Pages configuration, and the deployment workflow remain deliberately pending for
  the next steps.

### 2026-07-30 — P2 Automated Quality Gate Completed

- Added Vitest, React Testing Library, Playwright, and axe-core as development dependencies while preserving the
  npm lockfile.
- Added four component tests covering:
  - Verified publication and grant metrics.
  - Verified software, dataset, and recognition links.
  - Active-route semantics in the primary navigation.
  - Mobile-menu open, Escape dismissal, and focus restoration.
- Added 25 Chromium E2E tests covering:
  - HTTP rendering and primary content for `/`, `/research`, `/teaching`, and `/ddcf`.
  - Horizontal-overflow protection for all four routes at 390, 768, 1280, and 1536 px widths.
  - Visibility of all primary navigation routes in the mobile menu.
  - Automated WCAG 2 A/AA and WCAG 2.1 A/AA scans on all four routes.
- The first accessibility run exposed insufficient contrast in muted copy and the secondary violet. Raised the
  shared muted color, introduced an accessible violet, corrected remaining local muted colors, and increased the
  visibility of Research theme numbers. The complete accessibility suite then passed with zero automatically
  detectable violations.
- Added eager loading to the first Research theme image after the browser suite identified it as an LCP candidate.
- Added `.github/workflows/quality.yml` to run dependency installation, Chromium setup, lint, component tests,
  route/responsive/accessibility tests, and the production build on pull requests and pushes to
  `agentic_web_design`. Failed runs retain the Playwright report for seven days.
- Added local scripts for component watch mode, E2E execution/reporting, the complete test suite, and the CI quality
  gate.
- Final validation:
  - ESLint passed.
  - Vitest passed: 2 files, 4 tests.
  - Playwright passed: 25 tests.
  - Next.js 16.2.12 production build and TypeScript validation passed; all four primary routes were generated.
  - GitHub Actions workflow YAML parsed successfully.
- `npm audit --omit=dev` reported three high-severity production advisories through the current Next.js transitive
  `postcss` and `sharp` versions. The proposed forced fix is a breaking downgrade to Next.js 9 and was deliberately
  not applied; a compatible framework/dependency update is now tracked separately.
- Deployment and the separate P2 documentation/dependency cleanup remain outside this testing iteration.

### 2026-07-30 — Pre-P2 Content Enrichment Completed

- Completed content-audit points 1–5; automated testing and CI remain explicitly reserved for the next iteration.
- Corrected the visible `JMPS (2022)` reference to `JMPS (2023)` and both visible `JFM (2025)` references to
  `JFM (2024)` in new, non-destructive image variants:
  - `frontend/public/images/contact_across_scales_corrected.png`
  - `frontend/public/images/DDCF_collage_corrected.png`
- Updated all visible Research, Home, and DDCF references to use the corrected figures while preserving the
  original assets.
- Added the 2026 Tribology Letters article “A matter of shape”, relabeled the curated records as selected
  publications, and added direct routes to the complete ORCID and CV records.
- Added a compact Home evidence block covering continuum mechanics, applied mathematics, numerical methods,
  Python, C++, Wolfram Mathematica, high-performance/GPU workflows, the verified `soft-contact` repository, and
  the DDCF Zenodo dataset.
- Added two anonymized student testimonials and explicitly identified the two supervised projects that developed
  into peer-reviewed publications.
- Added a concise “Current direction” roadmap to each research pillar and a separate seismic/geotechnical
  foundation block without introducing a fourth research pillar.
- Added selective recognition, invited-talk, and scientific-programme leadership evidence, followed by a
  collaboration and invited-seminar CTA.
- Added the two explicit `goal.md` gaps: X is now present in the Bio professional links, and the official SNSF mark
  is visible inside the central interactive DDCF node.
- Clarified the Home publication metric as “24 peer-reviewed articles”.
- Validation completed:
  - ESLint passed with no warnings or errors.
  - Next.js 16.2.12 production build and TypeScript validation passed.
  - `/`, `/research`, `/teaching`, and `/ddcf` were generated successfully as static routes.
  - The local development server remains active at `http://127.0.0.1:3000`.

### 2026-07-30 — Cross-Project Content Coverage Audit

- Compared the May 2026 CV, research statement, teaching statement, project goal, DDCF specification, supervised
  project records, figure notes, and supporting bibliography with all content implemented on `/`, `/research`,
  `/teaching`, and `/ddcf`.
- Created `context-in-text/content_gap_audit_2026-07-30.md` with a coverage matrix and prioritized recommendations.
- Confirmed strong coverage of the core identity, three research pillars, teaching narrative, and DDCF programme.
- Identified the highest-value missing signals:
  - Latest 2026 research output and a route to the complete publication record.
  - Technical capabilities and verified research software.
  - Teaching testimonials and publication-linked mentoring outcomes.
  - The forward research programme and the seismic/geotechnical foundation.
  - Selective recognition, invited talks, and leadership.
- Identified an explicit `goal.md` gap: the SNSF logo is on the DDCF page but not inside the central interactive node.
- Identified an explicit Bio gap: X is available in the Footer but not in the Bio links requested by `goal.md`.
- Identified stale publication years embedded in three visible images and added their correction ahead of new
  content work.
- Kept low-value or time-sensitive CV material out of the recommended public surface, including the full student
  roster, full service lists, society memberships, peer-review lists, and the unresolved submitted HyperMech
  proposal.
- No public website copy or layout was changed during this audit.

### 2026-07-30 — CV Download Button Visual Adjustment Completed

- Reduced the prominence of the Bio CV download button.
- Replaced its primary cyan treatment with the subdued violet used by the Seville accent.
- Preserved a clear hover state using the same violet family.
- Validation:
  - ESLint: passed with zero errors and zero warnings.
  - Next.js production build and TypeScript: passed.
  - Static generation: passed for all ten outputs.
  - Local development server: remains active and compiled the CSS change successfully.

### 2026-07-30 — Accessibility and SEO P1 Started

- Started the remaining accessibility and SEO work.
- Selected `https://jgarciasuarez.github.io` as the verified canonical fallback, with `NEXT_PUBLIC_SITE_URL` reserved
  for the final production origin.
- Included reduced-motion handling for the decorative home particle canvas in the accessibility scope.

### 2026-07-30 — Accessibility and SEO P1 Completed

- Added route-specific canonical URLs and Open Graph URLs for `/`, `/research`, `/teaching`, and `/ddcf`.
- Set `metadataBase` to the verified academic website by default and added `frontend/.env.example` so a final
  production origin can be supplied through `NEXT_PUBLIC_SITE_URL`.
- Added:
  - A generated `robots.txt` allowing public crawling.
  - A generated `sitemap.xml` covering all four primary routes.
  - JSON-LD structured data describing the portfolio website and Joaquin Garcia-Suarez as a person.
- Marked the home particle canvas, badge marker, and glow as decorative for assistive technologies.
- Stopped particle movement when `prefers-reduced-motion: reduce` is active while retaining a static visual.
- Validation:
  - ESLint: passed with zero errors and zero warnings.
  - Next.js production build and TypeScript: passed.
  - Static generation: passed for ten outputs, including `/robots.txt` and `/sitemap.xml`.
  - Generated HTML contains the expected absolute canonical and Open Graph URL on all four primary routes.
  - Generated `robots.txt` and `sitemap.xml` contain the configured canonical origin and all primary routes.
  - Local server: restarted successfully; `/` returns HTTP 200 and both crawler resources are reachable.
  - `git diff --check`: passed.
- Completed P1 “Accessibility and SEO”.

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

### 2026-07-30 — Grant Amount Decision and Responsive P1 Started

- Resolved the DDCF grant-amount decision: the approved public value is CHF 830,128, the lower of the two documented
  values.
- Started the responsive navigation and layout P1 across all four primary routes.
- Included active-route indication, keyboard focus, and mobile navigation behavior in the implementation scope.

### 2026-07-30 — Responsive Navigation and Layout P1 Completed

- Replaced the clipped single-row mobile navigation with an accessible menu below 720 px.
- Added:
  - A 44 × 44 px menu control with explicit expanded state.
  - Escape-key and backdrop dismissal.
  - Background-scroll locking while the menu is open.
  - Active-route styling and `aria-current="page"`.
  - Visible keyboard focus styles.
  - A sticky, translucent navigation bar with reduced-motion handling.
- Added a skip link and a semantic `main#main-content` landmark to every primary route.
- Reduced the global mobile page gutter from 2 rem to 1 rem.
- Applied the approved CHF 830,128 grant amount to the DDCF project facts and funding acknowledgement.
- Corrected responsive image-delivery warnings:
  - Added `sizes` to `model_hw.png`.
  - Added responsive `sizes` and eager loading to `contact_across_scales.png`.
  - Preserved the SNSF logo at its intrinsic aspect ratio.
- Responsive validation covered `/`, `/research`, `/teaching`, and `/ddcf` at:
  - Mobile: 390 × 844.
  - Tablet: 768 × 900.
  - Laptop: 1024 × 768.
  - Desktop: 1440 × 900.
- Validation results:
  - No horizontal overflow in any of the 16 route-and-size combinations.
  - All expected images loaded after viewport traversal.
  - Every route exposed `main#main-content`.
  - The mobile menu stayed inside the viewport and opened and closed with Escape on every route.
  - Sticky navigation, active DDCF route state, and a 1280 × 720 short viewport were verified.
  - ESLint: passed with zero errors and zero warnings.
  - Next.js production build and TypeScript: passed.
  - All application routes remained statically generated.
- Retained the known `metadataBase` build notice as a documented SEO follow-up because the canonical production URL
  is not yet confirmed.

### 2026-07-30 — Portfolio Content and Relevant Links P1 Started

- Started the Bio, Research, Teaching, and contact-resource content pass.
- Verified email, academic website, ORCID, employment, education, and industry history against the May 2026 CV.
- Verified the public EPFL profile, CIVIL-425 coursebook, LSMS student-project index, and selected Infoscience
  project records.
- Selected the existing May 2026 CV PDF as the downloadable website version after checking its first-page rendering
  and document metadata.
- Resolved the Teaching visual decision in favor of text-only presentation, as explicitly requested in `goal.md`.

### 2026-07-30 — Portfolio Content and Relevant Links P1 Completed

- Added the reusable `BioOverview` component with:
  - A profile summary based on the May 2026 CV.
  - Current SNSF Ambizione leadership at EPFL.
  - EPFL and Caltech academic trajectory.
  - NextForce Engineering structural-design and FEM experience.
  - The requested Seville wording: “the most beautiful city in the world, naturally”.
- Added verified Bio and footer links for:
  - `joaquin.garciasuarez@epfl.ch`.
  - `https://jgarciasuarez.github.io/`.
  - `https://orcid.org/0000-0001-8830-4348`.
  - `https://github.com/jgarciasuarez`.
  - `https://x.com/jgs_research`.
- Published the existing nine-page May 2026 CV as
  `frontend/public/Joaquin_Garcia-Suarez_CV_May_2026.pdf` and added download actions in Bio and Footer.
- Added DOI links to all seven selected Research publications.
- Made Teaching text-only by removing the solar-collector figure, following `goal.md`.
- Added Teaching links to:
  - The official EPFL CIVIL-425 coursebook.
  - Four selected supervised-project records in EPFL Infoscience.
  - The LSMS student-project index.
- Updated the component inventory for the responsive Navigation, new BioOverview, and expanded Footer.
- Validation:
  - PDF metadata: the copied CV remains optimized and contains all nine pages.
  - Teaching contains no image component.
  - ESLint: passed with zero errors and zero warnings.
  - Next.js production build and TypeScript: passed.
  - All application routes remained statically generated.
  - `git diff --check`: passed.
- Retained the known `metadataBase` notice as the only build notice; it remains tied to the unresolved canonical
  production URL.
