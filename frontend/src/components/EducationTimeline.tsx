import styles from './EducationTimeline.module.css';

interface TimelineItem {
  year: string;
  degree: string;
  institution: string;
  location: string;
}

const timeline: TimelineItem[] = [
  { year: '2020', degree: 'Ph.D. in Aeronautics', institution: 'California Institute of Technology', location: 'Pasadena, CA' },
  { year: '2016', degree: 'M.S. in Space Engineering', institution: 'California Institute of Technology', location: 'Pasadena, CA' },
  { year: '2013', degree: 'Ingeniero Industrial', institution: 'Universidad de Sevilla', location: 'Seville, Spain' },
];

export default function EducationTimeline() {
  return (
    <section className={styles.section}>
      <div className={styles.sectionHeader}>
        <span className={styles.sectionLabel}>Background</span>
        <h2 className={styles.sectionTitle}>Education & Training</h2>
      </div>
      <div className={styles.timeline}>
        {timeline.map((item, i) => (
          <div key={i} className={styles.item}>
            <div className={styles.yearCol}>
              <span className={styles.year}>{item.year}</span>
              <span className={styles.line} />
            </div>
            <div className={styles.details}>
              <h3 className={styles.degree}>{item.degree}</h3>
              <p className={styles.institution}>{item.institution}</p>
              <p className={styles.location}>{item.location}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
