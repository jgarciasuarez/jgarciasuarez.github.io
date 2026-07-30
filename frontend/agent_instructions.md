# Root Agent Instructions (Project Brain)

## Core Directives
1. **Framework**: Next.js (App Router).
2. **Language**: TypeScript.
3. **Styling**: Vanilla CSS / CSS Modules ONLY. Do NOT use TailwindCSS.
4. **Design Concept**: Professional, slick, dark-themed academic portfolio.
5. **Context**: See `../summaryContext.md` and `../ModernWebPage.md` in the parent directory for the user's background, research, and project rationale.

## Documentation Hierarchy
Agents MUST read the local `agent_instructions.md` when entering a subdirectory:
- `src/app/agent_instructions.md`: Routing, page layouts, metadata.
- `src/app/ddcf/agent_instructions.md`: Specifics for the interactive React Flow hub.
- `src/components/agent_instructions.md`: Rules for building UI components.
- `src/styles/agent_instructions.md`: Global design tokens, color palette, and spacing rules.

## Project State (Checklist)
- [x] Initialized Next.js with App Router.
- [x] Created agent documentation hierarchy.
- [ ] Define global design system in `src/styles`.
- [ ] Convert assets from `../context/` to web-optimized formats.
- [ ] Scaffold `/`, `/research`, `/teaching`, `/ddcf` pages.
- [ ] Implement UI.

**Always update this checklist as milestones are completed.**
