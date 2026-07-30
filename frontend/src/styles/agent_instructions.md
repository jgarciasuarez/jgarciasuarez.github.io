# Styles & Design System Agent Instructions

## Directives
1. **Design Concept**: Professional, slick, dark-themed academic portfolio. It must look premium and modern.
2. **CSS Variables**: All design tokens (colors, fonts, spacing) are defined in `src/app/globals.css`.
3. **No Tailwind**: Do NOT use TailwindCSS. Use CSS Modules exclusively.

## Current Design Tokens (defined in `globals.css`)

### Colors
| Variable | Value | Purpose |
|---|---|---|
| `--bg-primary` | `#0f1115` | Page background (near-black) |
| `--bg-secondary` | `#1a1d24` | Card/panel backgrounds |
| `--bg-tertiary` | `#242933` | Hover states, borders |
| `--text-primary` | `#f8f9fa` | Headings, primary text |
| `--text-secondary` | `#a0aabf` | Body text, descriptions |
| `--text-muted` | `#647087` | Captions, labels |
| `--accent-primary` | `#00e5ff` | Neon Cyan — links, badges, stat values |
| `--accent-secondary` | `#7e57c2` | Deep Purple — secondary accents, gradients |
| `--accent-glow` | `rgba(0,229,255,0.2)` | Glow backgrounds behind accent elements |

### Typography
- **Main font**: `Inter` loaded via `next/font/google`
- **Monospace**: `Fira Code` (for code blocks, future use)

### Spacing Scale
`--space-xs` (0.25rem) → `--space-sm` (0.5rem) → `--space-md` (1rem) → `--space-lg` (2rem) → `--space-xl` (4rem) → `--space-xxl` (8rem)

### Border Radius
`--radius-sm` (4px) → `--radius-md` (8px) → `--radius-lg` (16px) → `--radius-full` (9999px)

### Transitions
`--transition-fast` (0.15s) → `--transition-normal` (0.3s) → `--transition-slow` (0.5s)

## Global Utility Classes
- `.container` → centered, max-width 1200px, horizontal padding
- `.glass-panel` → glassmorphism panel (blurred, semi-transparent bg, subtle border)

## Design Patterns In Use
- **Particle Canvas**: The HeroSection uses a `<canvas>` element with 60 floating cyan particles that form connection lines when nearby (< 120px apart).
- **Gradient Text**: Name in hero uses `linear-gradient(135deg, --accent-primary, --accent-secondary)` clipped to text.
- **Card Accents**: Research preview cards pass a per-card `--card-accent` CSS custom property for unique glow colors on hover.
- **Custom Scrollbar**: Styled for WebKit browsers (dark track, tertiary thumb).

## State
- [x] Global CSS variables defined
- [x] Base element styles applied (a, h1-h6, p)
- [x] Utility classes defined (.container, .glass-panel)
- [x] Custom scrollbar styled
