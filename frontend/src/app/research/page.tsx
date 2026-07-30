import styles from "./page.module.css";

export default function Research() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <h1 className={styles.title}>Research Portfolio</h1>
        <p className={styles.subtitle}>
          Bridging mechanics, mathematics, and data-driven methods.
        </p>
      </header>

      <div className={styles.grid}>
        <article className="glass-panel" style={{ padding: 'var(--space-lg)' }}>
          <h3>Theme I: Interface Mechanics Across Scales</h3>
          <p>Focuses on nanoscale wear, fluid-mediated impact of soft solids, and data-driven dynamic friction models.</p>
        </article>
        <article className="glass-panel" style={{ padding: 'var(--space-lg)' }}>
          <h3>Theme II: Wave Propagation</h3>
          <p>Developing a physics-agnostic prediction framework using the group-theoretic structure of transfer matrices.</p>
        </article>
        <article className="glass-panel" style={{ padding: 'var(--space-lg)' }}>
          <h3>Theme III: Computational Methods</h3>
          <p>Developing physics-informed machine learning, GPU-bound optimization, and numerical strategies.</p>
        </article>
      </div>
    </div>
  );
}
