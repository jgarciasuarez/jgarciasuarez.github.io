# Routing & Pages Agent Instructions

## Directives
1. **App Router**: This project uses Next.js 13+ App Router. All pages must be defined in `page.tsx` files within their respective route directories.
2. **Layouts**: Use `layout.tsx` for shared UI. The root layout includes `<Navigation />` at the top and `<Footer />` at the bottom, wrapping all page content inside a `.container` div.
3. **SEO**: Every page must use the Next.js Metadata API to inject proper title and description tags relevant to the researcher's work.
4. **Structure**: 
   - `/` → Home/Bio page (assembled from `HeroSection`, `StatsRibbon`, `ResearchPreview`, `EducationTimeline`).
   - `/research` → Research Portfolio (scaffolded, pending detailed implementation).
   - `/teaching` → Teaching Portfolio (scaffolded, pending detailed implementation).
   - `/ddcf` → Data-Driven Computational Friction interactive hub (scaffolded, pending React Flow implementation).
5. **Data/Content**: Extract text from `../../summaryContext.md` for page content.

## Page Implementation Status
| Route | Status | Components Used |
|---|---|---|
| `/` (Home) | ✅ Complete | HeroSection, StatsRibbon, ResearchPreview, EducationTimeline |
| `/research` | ✅ Complete | Full research portfolio with three themes, sub-topics, key publications, and a DDCF CTA |
| `/teaching` | ✅ Complete | Teaching philosophy, methods, graduate classes, experience timeline, and mentorship stats |
| `/ddcf` | 🟡 Scaffolded | Placeholder for React Flow canvas |

## Root Layout Structure
```
<html>
  <body>
    <div className="container">
      <Navigation />
      {children}    ← page content injected here
      <Footer />
    </div>
  </body>
</html>
```

## State
- [x] Home page fully implemented with 4 component sections
- [ ] Research page needs detailed implementation
- [ ] Teaching page needs detailed implementation
- [ ] DDCF page needs React Flow integration
