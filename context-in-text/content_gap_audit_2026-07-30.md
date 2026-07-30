# Website Content Gap Audit

Date: 2026-07-30  
Scope: comparison of the project context documents with the public content implemented on `/`, `/research`,
`/teaching`, and `/ddcf`.

## Sources Reviewed

Primary content sources:

- `CV_May_2026-1.md`
- `goal.md`
- `research_statement_4_Carlson.md`
- `teaching_statement_4_Carlson.md`
- `ddcf_content_specification.md`
- `list_semester_projects_names_links.md`
- The visual-collage descriptions and figure notes under `context-in-text/`

The two `references.md` files are identical bibliography libraries. They support the source documents but are not
treated as public-facing copy.

## Executive Assessment

The current website already communicates the main scientific identity effectively:

- Academic and industrial trajectory
- The three research themes
- Teaching philosophy, experience, and mentoring volume
- The full DDCF concept and its four research directions
- Core contact, CV, publication, project, and dataset links

The remaining content gap is not primarily a lack of scientific explanation. The largest missed opportunity is the
evidence layer: recent output, software capability, recognition, leadership, teaching outcomes, and a visible
forward research programme. Those signals are especially important for the stated goal of positioning Joaquin as
both an associate-professor-level researcher and a credible technical leader for industry.

## Coverage Matrix

| Area | Current coverage | Gap | Importance | Recommendation |
| --- | --- | --- | --- | --- |
| Identity and trajectory | Strong | EPFL, Caltech, Seville, industry, education, CV, contact, ORCID, GitHub, and X are represented. | — | Keep the current concise structure. |
| Explicit social requirement | Partial | `goal.md` requests GitHub and X links in Bio. GitHub is in Bio; X is only in the Footer. | Medium | Add X to the Bio professional-link group. |
| Research vision | Strong | The three themes and their relationship are clear. | — | Preserve the three-pillar structure. |
| Current research programme | Partial | The site explains established themes but largely omits the five-year “now/next” programme: rough-surface scaling, shape-controlled contact, 4×4 beam transfer matrices, viscoelastic/inclined waves, absorber design, and expanded EHL models. | High | Add a concise “Current direction / Next” line to each research theme. |
| Latest research output | Weak | Research shows 7 selected papers out of 24 peer-reviewed articles and omits the newest 2026 paper, “A matter of shape”. | High | Feature the 2026 paper, retain a curated list, and add a clear “View all publications” action through ORCID and the CV. |
| Seismic and geotechnical foundations | Underrepresented | The site mentions seismic applications, but the substantial body of work on site response, retaining walls, J-integrals, and Trona Pinnacles is not visible as a coherent track. | Medium–High | Add a compact “Earlier foundations in earthquake engineering” block or one selected subtopic/publication group. |
| Research software and reproducibility | Partial | The DDCF dataset and GitHub profile are exposed. The documented `soft-contact` URL was added, then removed after the pre-deployment audit confirmed that it now returns 404. | High | Restore a direct software card only when a public repository URL is confirmed; retain the verified dataset and profile links meanwhile. |
| Technical capabilities | Missing | C++, Python, Wolfram Mathematica, PDEs, numerical analysis, group theory, continuum mechanics, HPC, and GPU work are not summarized as personal capabilities. | High | Add a compact capabilities strip to Bio. This directly supports the industry-hiring objective. |
| Research recognition | Partial | Ambizione is prominent, but the Demetriades-Tsafka-Kokkalis Prize, Tyson Fellowship, Talentia Fellowship, and invited-talk record are absent. | Medium–High | Add a selective “Recognition & leadership” block; avoid reproducing the full CV. |
| Invited talks and external visibility | Missing | None of the 12 invited talks is shown. | Medium | Show the total and at most three recent representative venues. |
| Academic and professional service | Missing | Conference session organization, symposium organization, doctoral jury work, and seminar coordination are absent. | Medium | Include two or three recent leadership examples in the recognition block. |
| Teaching philosophy and methods | Strong | The main narrative and both proposed graduate courses are represented. | — | Keep. |
| Teaching evidence | Partial | Roles, award, project counts, and links are present, but the strong student-evaluation quotes in the CV are absent. | High | Add two short anonymized testimonials, clearly labelled as student feedback. |
| Mentoring outcomes | Partial | Quantities and selected project links are present, but the fact that student projects led to publications is not surfaced. | Medium–High | Mark the two documented publication-linked projects or add one sentence about research outcomes. |
| Full student roster | Intentionally omitted | The CV contains names for all supervised and mentored students. | Low | Do not add the full roster; it would add maintenance and privacy cost. Keep selected official project records. |
| DDCF content | Strong | Central description, four directions, facts, grant, resources, dialogs, and funding acknowledgement are implemented. | — | Preserve. |
| SNSF logo in central DDCF node | Partial | The logo appears in the funding strip and collage, but the interactive central node itself uses a generic icon, while `goal.md` explicitly asks for the SNSF logo in that node. | Medium–High | Integrate a compact official SNSF mark into the central node without reducing legibility. |
| Collaboration/contact conversion | Partial | Email is available, but there is no explicit invitation for research collaboration, speaking, consulting, or technical leadership conversations. | Medium | Add a restrained contact CTA after the content priorities are approved. Its wording requires user approval. |
| Submitted HyperMech proposal | Omitted | The CV records a submitted 2026 MSCA Staff Exchanges proposal. Its status may change. | Low / time-sensitive | Keep it out until its outcome is known or explicitly approve a “submitted” label. |
| Peer review, societies, and languages | Omitted | These CV sections are not represented. | Low | Keep them in the downloadable CV unless a specific audience requires them. |

## Content Integrity Issues Discovered

### Embedded publication years in visible images

The current Research and DDCF images contain publication-year labels that conflict with the May 2026 CV:

- `contact_across_scales.png` and `portfolio_contact.png` display `JMPS (2022)` for the nanoscale-wear result, while
  the CV records “Breakdown of Reye’s theory in nanoscale wear” in 2023.
- The same images display `Bilotto et al., JFM (2025)`, while the CV records “Fluid-mediated impact of soft solids”
  in 2024.
- `DDCF_collage.png` also displays `Bilotto et al., JFM (2025)`.

These labels are visible content and should be corrected before adding new sections.

### Source-document conflicts already resolved by the website

- The teaching statement and the CV disagree on an EPFL course code/semester and on the number of semester projects.
  The website correctly follows the May 2026 CV, the documented source of truth.
- The research statement describes “A matter of shape” as submitted and “Phase-space iterative solvers” as
  submitted. The May 2026 CV records both as published, in 2026 and 2025 respectively. Future web updates should
  follow the CV.

## Recommended Pre-P2 Content Block

### Must include

1. Correct the embedded publication years in the Research and DDCF imagery.
2. Add the 2026 “A matter of shape” paper and a route to the complete publication record.
3. Add a compact technical-capabilities and research-software block.
4. Add two short teaching-feedback quotations and surface publication-linked mentoring outcomes.
5. Add the official SNSF mark to the central DDCF node.
6. Add the X link directly to Bio.

### Strongly recommended

1. Add concise “current direction / next” copy to each research theme.
2. Represent the seismic/geotechnical research foundation without creating a fourth research pillar.
3. Add a compact recognition and leadership block with selected awards, invited talks, and service.

### Keep out for now

- The submitted HyperMech proposal, until its outcome or preferred public status is confirmed.
- Full peer-review and scientific-society lists.
- The full student roster.
- Every invited talk and every publication as an uninterrupted page-length list.
- Languages, unless a later industry-focused version of the site needs them.

## Proposed Sequence

1. Content-integrity fixes to visible images.
2. Latest publications, software, and capabilities.
3. Teaching evidence and mentoring outcomes.
4. Research roadmap and seismic/geotechnical foundation.
5. Recognition, leadership, and the final collaboration CTA.
6. Resume P2 automated testing and CI after the approved content surface is stable.
