import styles from './StatsRibbon.module.css';

interface StatItem {
  value: string;
  label: string;
}

const stats: StatItem[] = [
  { value: '24', label: 'Publications' },
  { value: 'CHF 830k', label: 'SNSF Ambizione Grant' },
  { value: 'Ph.D.', label: 'Caltech, 2020' },
  { value: '3', label: 'Research Themes' },
];

export default function StatsRibbon() {
  return (
    <section className={styles.ribbon}>
      {stats.map((stat, i) => (
        <div key={i} className={styles.stat}>
          <span className={styles.value}>{stat.value}</span>
          <span className={styles.label}>{stat.label}</span>
        </div>
      ))}
    </section>
  );
}
