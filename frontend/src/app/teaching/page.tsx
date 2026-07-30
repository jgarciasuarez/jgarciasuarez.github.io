import styles from "./page.module.css";

export default function Teaching() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <h1 className={styles.title}>Teaching Portfolio</h1>
        <p className={styles.subtitle}>
          Emphasizing "threshold concepts" to ensure foundational understanding.
        </p>
      </header>

      <section className="glass-panel" style={{ padding: 'var(--space-lg)' }}>
        <h2>Proposed Courses</h2>
        <ul>
          <li>Fluid-Solid Interactions at Low Reynolds Numbers</li>
          <li>Group Theory for Engineers</li>
        </ul>
      </section>
    </div>
  );
}
