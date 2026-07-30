# Routing & Pages Agent Instructions

## Directives
1. **App Router**: This project uses Next.js 13+ App Router. All pages must be defined in `page.tsx` files within their respective route directories.
2. **Layouts**: Use `layout.tsx` for shared UI (like the main navigation bar, footer).
3. **SEO**: Every page must use the Next.js Metadata API to inject proper title and description tags relevant to the researcher's work.
4. **Structure**: 
   - `/` -> Bio/Home page.
   - `/research` -> Research Portfolio.
   - `/teaching` -> Teaching Portfolio.
   - `/ddcf` -> Data-Driven Computational Friction interactive hub.
5. **Data/Content**: Extract text from `../../summaryContext.md` for page content.

## State
- Route scaffolding is pending.
