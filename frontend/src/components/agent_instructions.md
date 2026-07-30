# Components Agent Instructions

## Directives
1. **Component-Driven Development**: Build small, reusable components (e.g., `<HeroSection />`, `<StatsRibbon />`, `<ResearchPreview />`).
2. **Styling**: Every component must have an accompanying `[ComponentName].module.css` file. Do NOT use inline styles or Tailwind.
3. **Props**: Strongly type all component props using TypeScript interfaces.
4. **Animations**: Use `framer-motion` for complex interactive hover states, micro-animations, or page transitions. Keep animations smooth and subtle (avoid janky or overly fast movements).
5. **Client Components**: Components that use React hooks (`useState`, `useEffect`, `useRef`) or browser APIs (e.g., `<canvas>`) MUST be marked with `'use client';` at the top of the file.

## Current Components Inventory
| Component | File | CSS Module | Client? | Description |
|---|---|---|---|---|
| Navigation | `Navigation.tsx` | `Navigation.module.css` | No | Top nav bar with logo and page links. DDCF Hub link is highlighted with accent glow. |
| HeroSection | `HeroSection.tsx` | `HeroSection.module.css` | Yes | Full-height hero with animated particle canvas background, gradient name, role badge, tagline, and CTA buttons. |
| StatsRibbon | `StatsRibbon.tsx` | `StatsRibbon.module.css` | No | 4-column grid showing key metrics (24 publications, CHF 830k SNSF grant, Ph.D. Caltech 2020, 3 research themes). |
| ResearchPreview | `ResearchPreview.tsx` | `ResearchPreview.module.css` | Yes | 3-card grid previewing the three research themes. Each card has an extracted image, overlay gradient, hover lift effect, and per-card accent color via CSS custom property. |
| EducationTimeline | `EducationTimeline.tsx` | `EducationTimeline.module.css` | No | Vertical timeline showing Ph.D. (Caltech 2020), M.S. (Caltech 2016), Ingeniero Industrial (Sevilla 2013). |
| Footer | `Footer.tsx` | `Footer.module.css` | No | Footer with Seville/Lausanne origin note, GitHub and X social links (inline SVG icons), copyright. |

## Design Patterns
- **Glassmorphism**: Use the global `.glass-panel` utility class or `backdrop-filter: blur(12px)` with semi-transparent backgrounds.
- **Section Headers**: Use a consistent pattern: small uppercase label → large bold title → muted description paragraph.
- **Card Hover**: Cards should `translateY(-6px)` on hover with a glowing box-shadow using the card's accent color.
- **Gradient Text**: Use `background: linear-gradient(...)` with `-webkit-background-clip: text` and `-webkit-text-fill-color: transparent`.

## State
- [x] Navigation created
- [x] HeroSection created (with particle canvas)
- [x] StatsRibbon created
- [x] ResearchPreview created (with extracted images)
- [x] EducationTimeline created
- [x] Footer created
