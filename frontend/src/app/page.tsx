import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <h1 className={styles.title}>Joaquin Garcia-Suarez</h1>
        <p className={styles.subtitle}>
          SNSF Ambizione Fellow at EPFL | Applied Mathematics & Mechanics
        </p>
      </header>

      <section className={styles.bio}>
        <p>
          I am a researcher specializing in <strong>Interface Mechanics Across Scales</strong>, <strong>Wave Propagation in Heterogeneous Media</strong>, and <strong>Computational Methods</strong>.
        </p>
        <p>
          Currently, I lead the Data-Driven Computational Friction (DDCF) project at EPFL, exploring the intersection of solid mechanics, fluid dynamics, and physics-informed machine learning.
        </p>
      </section>
    </div>
  );
}
