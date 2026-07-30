# Project Progress Control

This document tracks the progress of the academic portfolio website for Joaquin Garcia-Suarez. It serves as a central hub to summarize completed milestones and outline the remaining tasks (TO DO) to achieve the final, fully functional web application.

---

## TO DO (Next Steps)

- [ ] **DDCF Interactive Hub (`/ddcf`)**
  - Implement the React Flow instance for the Data-Driven Computational Friction project.
  - Define and style interactive nodes (e.g., Constitutive Modeling, Neural Operators, GPU-acceleration, Automatic Differentiation).
  - Integrate specific extracted figures/diagrams relevant to the DDCF project.
  - Add animations and transitions using `framer-motion`.
- [ ] **Mobile & Responsive Polish**
  - Conduct a final pass over all pages (`/`, `/research`, `/teaching`, `/ddcf`) to ensure perfect rendering on mobile and tablet devices.
- [ ] **Final QA & Content Review**
  - Verify all links, images, and text content against the original context files.
- [ ] **Version Control**
  - Commit all recent page implementations and push updates to the `agentic_web_design` branch on GitHub.

---

## Completed Work

### 1. Foundation & Architecture
- **Next.js Initialization:** Bootstrapped a modern Next.js 13+ app with the App Router, TypeScript, and standard CSS Modules (Turbopack enabled).
- **Agentic Brain Structure:** Created a distributed hierarchical documentation system (`agent_instructions.md`) across the root, `/app`, `/components`, and `/styles` directories to guide future AI agents.
- **Dependency Management:** Installed required libraries including `framer-motion`, `@xyflow/react` (React Flow), `@next/mdx`, and `lucide-react`.

### 2. Design System (Global Styles)
- **CSS Variables:** Defined a strict dark-theme color palette (near-black backgrounds with neon cyan and deep purple accents) in `src/app/globals.css`.
- **Typography & Spacing:** Configured Inter (sans-serif) as the primary font, set up a modular spacing scale, and established global border-radius and transition tokens.
- **Utility Classes:** Created reusable CSS classes like `.container` (for layout constraints) and `.glass-panel` (for glassmorphism effects).

### 3. Asset Processing
- **PDF Extraction:** Developed and executed a Python script (`extract_assets.py`) using `PyMuPDF` to programmatically extract 24 high-resolution figures from legacy PDF context documents.
- **Optimization:** Converted all extracted figures into web-optimized `.png` files and stored them in `context/figures/extracted/`, moving required assets into the Next.js `public/images/` directory.

### 4. Page Implementations

#### Home / Bio Page (`/`)
- **Hero Section:** Built a full-height landing section featuring an interactive, animated HTML5 canvas particle background, a gradient stylized name, and an "SNSF Ambizione Fellow" badge with a pulsing dot.
- **Stats Ribbon:** Created a 4-column metrics ribbon highlighting publications, grant funding, education, and research themes.
- **Research Preview:** Implemented glassmorphic cards previewing the three core research themes, featuring extracted image overlays and unique hover glow effects.
- **Education Timeline:** Designed a vertical timeline mapping the academic journey from Universidad de Sevilla to Caltech.
- **Global Layout:** Integrated a persistent top navigation bar and a bottom footer containing social links (GitHub, X).

#### Research Portfolio (`/research`)
- **Visual Scale Bar:** Integrated the "contact across scales" diagram spanning 12 orders of magnitude.
- **Theme Deep Dives:** Developed comprehensive sections for all three research themes (Interface Mechanics, Wave Propagation, Computational Methods).
- **Layout & Typography:** Utilized an alternating two-column layout coupling text with relevant extracted diagrams, complete with structured sub-topics and key publications lists.

#### Teaching Portfolio (`/teaching`)
- **Philosophy & Methods:** Created a dedicated layout detailing teaching methodologies, emphasizing threshold concepts.
- **Experience Timeline:** Built a chronological timeline tracking teaching roles (from TA at Caltech to Primary Instructor at EPFL).
- **Proposed Courses:** Designed stylized cards for proposed graduate classes ("Fluid-Solid Interactions at Low Reynolds Numbers" and "Group Theory for Engineers").
- **Visual Integration:** Embedded relevant diagrams (e.g., the solar collector torsional system) to illustrate real-world teaching applications.
