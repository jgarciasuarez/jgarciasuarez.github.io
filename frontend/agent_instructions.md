# Root Agent Instructions (Project Brain)

## Core Directives
1. **Framework**: Next.js (App Router).
2. **Language**: TypeScript.
3. **Styling**: Vanilla CSS / CSS Modules ONLY. Do NOT use TailwindCSS.
4. **Design Concept**: Professional, slick, dark-themed academic portfolio.
5. **Context**: See `../../summaryContext.md` and `../../ModernWebPage.md` in the grandparent directory for the user's background, research, and project rationale.

## Documentation Hierarchy
Agents MUST read the local `agent_instructions.md` when entering a subdirectory:
- `src/app/agent_instructions.md`: Routing, page layouts, metadata, implementation status.
- `src/app/ddcf/agent_instructions.md`: Specifics for the interactive React Flow hub.
- `src/components/agent_instructions.md`: Component inventory with descriptions, design patterns, and status.
- `src/styles/agent_instructions.md`: Full design token reference (colors, spacing, typography, transitions).

## Images & Assets
- Extracted PNG images from PDF figures live in `../../context/figures/extracted/`.
- Web-ready images for the Next.js app are copied to `public/images/`.
- Current images in `public/images/`: `contact_across_scales.png`, `portfolio_waves.png`, `DDCF_collage.png`, `friction_scales.png`, `panel_DDCF_v2.png`, `waves_panels.png`.

## Project State (Checklist)
- [x] Initialized Next.js with App Router.
- [x] Created agent documentation hierarchy.
- [x] Define global design system in `src/app/globals.css`.
- [x] Convert assets from `../../context/` to web-optimized formats.
- [x] Home page fully implemented (Hero, Stats, Research Preview, Education Timeline, Footer).
- [x] Research page detailed implementation.
- [x] Teaching page detailed implementation.
- [ ] DDCF page React Flow interactive hub.

**Always update this checklist and the relevant subdirectory agent_instructions.md as milestones are completed.**
