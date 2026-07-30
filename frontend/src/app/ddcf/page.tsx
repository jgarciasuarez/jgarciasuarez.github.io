import type { Metadata } from "next";
import DDCFHub from "./DDCFHub";
import styles from "./page.module.css";
import "@xyflow/react/dist/style.css";

export const metadata: Metadata = {
  title: "DDCF | Data-Driven Computational Friction",
  description:
    "Explore the SNSF Ambizione project connecting data-driven constitutive modeling, neural operators, GPU acceleration, and automatic differentiation.",
  alternates: {
    canonical: "/ddcf",
  },
  openGraph: {
    title: "DDCF | Data-Driven Computational Friction",
    description:
      "Explore the SNSF Ambizione project connecting data-driven constitutive modeling, neural operators, GPU acceleration, and automatic differentiation.",
    url: "/ddcf",
  },
};

export default function DDCFPage() {
  return (
    <main id="main-content" className={styles.page}>
      <header className={styles.hero}>
        <div className={styles.heroMeta}>
          <span>EPFL · LSMS</span>
          <span className={styles.metaLine} aria-hidden="true" />
          <span>2024—2027</span>
        </div>
        <p className={styles.eyebrow}>SNSF Ambizione · Grant 216341</p>
        <h1 className={styles.title}>
          Data-Driven
          <span> Computational Friction</span>
        </h1>
        <p className={styles.subtitle}>
          From laboratory observations to predictive friction laws for
          multiscale simulation.
        </p>
        <p className={styles.intro}>
          DDCF brings data-driven mechanics and friction physics into one
          computational framework. Navigate the research system below, move its
          parts, and open each direction to examine the work in depth.
        </p>
      </header>

      <DDCFHub />
    </main>
  );
}
