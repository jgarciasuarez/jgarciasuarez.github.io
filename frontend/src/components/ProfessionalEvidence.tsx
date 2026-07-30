import {
  Award,
  Code2,
  Cpu,
  ExternalLink,
  Presentation,
  Users,
} from "lucide-react";
import styles from "./ProfessionalEvidence.module.css";

const capabilities = [
  "Continuum mechanics",
  "PDEs & numerical analysis",
  "Applied mathematics",
  "High-performance computing",
  "GPU workflows",
  "Inverse design",
  "Python",
  "C++",
  "Wolfram Mathematica",
];

const softwareLinks = [
  {
    label: "Research software",
    title: "soft-contact",
    detail: "Compact tools for soft-contact and lubrication research.",
    href: "https://github.com/jgarciasuarez/soft-contact",
  },
  {
    label: "Companion dataset",
    title: "DDCF research data",
    detail: "A citable dataset supporting data-driven friction work.",
    href: "https://zenodo.org/records/13341474",
  },
];

export default function ProfessionalEvidence() {
  return (
    <section className={styles.section} aria-labelledby="evidence-heading">
      <div className={styles.header}>
        <span className={styles.kicker}>Methods / evidence</span>
        <h2 id="evidence-heading">Built to move between theory and computation</h2>
        <p>
          The portfolio combines analytical mechanics with numerical
          implementation, high-performance workflows, and research outputs that
          can be inspected and reused.
        </p>
      </div>

      <div className={styles.grid}>
        <article className={styles.capabilities}>
          <div className={styles.cardHeading}>
            <span className={styles.icon}>
              <Cpu size={20} aria-hidden="true" />
            </span>
            <div>
              <span>Technical capabilities</span>
              <h3>Mechanics, mathematics & code</h3>
            </div>
          </div>
          <ul>
            {capabilities.map((capability) => (
              <li key={capability}>{capability}</li>
            ))}
          </ul>
          <div className={styles.software}>
            {softwareLinks.map((item) => (
              <a
                key={item.title}
                href={item.href}
                target="_blank"
                rel="noreferrer"
              >
                <span>{item.label}</span>
                <strong>{item.title}</strong>
                <small>{item.detail}</small>
                <ExternalLink size={15} aria-hidden="true" />
              </a>
            ))}
          </div>
        </article>

        <article className={styles.recognition}>
          <div className={styles.cardHeading}>
            <span className={styles.icon}>
              <Award size={20} aria-hidden="true" />
            </span>
            <div>
              <span>Recognition & leadership</span>
              <h3>Selected signals of trust</h3>
            </div>
          </div>
          <div className={styles.signal}>
            <Award size={18} aria-hidden="true" />
            <div>
              <strong>Demetriades–Tsafka–Kokkalis Prize</strong>
              <span>Seismo-engineering, prediction, and protection · 2019–2020</span>
            </div>
          </div>
          <div className={styles.signal}>
            <Presentation size={18} aria-hidden="true" />
            <div>
              <strong>12 invited talks</strong>
              <span>
                Recent invitations include IMDEA Materials, ETH Zürich, and the
                University of Florida.
              </span>
            </div>
          </div>
          <div className={styles.signal}>
            <Users size={18} aria-hidden="true" />
            <div>
              <strong>Scientific programme leadership</strong>
              <span>
                Thematic-session and symposium co-organization at CNM 2026 and
                ICACC 2025.
              </span>
            </div>
          </div>
          <a
            className={styles.githubLink}
            href="https://github.com/jgarciasuarez"
            target="_blank"
            rel="noreferrer"
          >
            <Code2 size={16} aria-hidden="true" />
            Explore the full GitHub profile
            <ExternalLink size={14} aria-hidden="true" />
          </a>
        </article>
      </div>
    </section>
  );
}
