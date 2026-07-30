import styles from "./page.module.css";

export default function DDCF() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <h1 className={styles.title}>DDCF Interactive Hub</h1>
        <p className={styles.subtitle}>
          Data-Driven Computational Friction Project (SNSF Ambizione)
        </p>
      </header>
      
      <div className={styles.hubContainer}>
        <div className={styles.placeholder}>
          <p>Interactive React Flow Canvas will be mounted here.</p>
          <small>Connecting Constitutive Modeling, Neural Operators, GPU-acceleration, and Automatic Differentiation.</small>
        </div>
      </div>
    </div>
  );
}
