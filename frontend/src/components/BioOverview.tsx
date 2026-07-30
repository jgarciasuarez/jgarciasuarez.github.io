import {
  AtSign,
  BookOpen,
  BriefcaseBusiness,
  Code2,
  Download,
  ExternalLink,
  GraduationCap,
  Mail,
  MapPin,
} from "lucide-react";
import styles from "./BioOverview.module.css";

const profileLinks = [
  {
    label: "Email",
    detail: "joaquin.garciasuarez@epfl.ch",
    href: "mailto:joaquin.garciasuarez@epfl.ch",
    icon: Mail,
  },
  {
    label: "Academic website",
    detail: "jgarciasuarez.github.io",
    href: "https://jgarciasuarez.github.io/",
    icon: ExternalLink,
  },
  {
    label: "ORCID",
    detail: "0000-0001-8830-4348",
    href: "https://orcid.org/0000-0001-8830-4348",
    icon: BookOpen,
  },
  {
    label: "GitHub",
    detail: "@jgarciasuarez",
    href: "https://github.com/jgarciasuarez",
    icon: Code2,
  },
  {
    label: "X",
    detail: "@jgs_research",
    href: "https://x.com/jgs_research",
    icon: AtSign,
  },
] as const;

export default function BioOverview() {
  return (
    <section className={styles.section} aria-labelledby="bio-heading">
      <div className={styles.headingRow}>
        <div>
          <span className={styles.kicker}>Profile / trajectory</span>
          <h2 id="bio-heading">Mechanics with practical reach</h2>
        </div>
        <a
          className={styles.cvLink}
          href="/Joaquin_Garcia-Suarez_CV_May_2026.pdf"
          download
        >
          <Download size={17} aria-hidden="true" />
          Download CV
        </a>
      </div>

      <div className={styles.profileGrid}>
        <div className={styles.narrative}>
          <p className={styles.lead}>
            I am a mechanician with industry experience who combines theory,
            high-performance computing, and data-driven methods to build
            predictive tools for interface mechanics, wave propagation, and
            numerical modeling.
          </p>
          <p>
            I currently lead the SNSF Ambizione project on Data-Driven
            Computational Friction at EPFL. Earlier appointments at EPFL and
            Caltech connect my present research to solid mechanics, earthquake
            engineering, applied mathematics, and computation.
          </p>
          <p className={styles.seville}>
            <MapPin size={18} aria-hidden="true" />
            A native of Seville, Spain — the most beautiful city in the world,
            naturally — now based in Lausanne, Switzerland.
          </p>
        </div>

        <div className={styles.trajectory} aria-label="Selected experience">
          <article>
            <span className={styles.trajectoryIcon}>
              <BriefcaseBusiness size={19} aria-hidden="true" />
            </span>
            <div>
              <span className={styles.trajectoryMeta}>2024—present · EPFL</span>
              <h3>SNSF Ambizione Fellow</h3>
              <p>
                Leading DDCF at the Laboratory for Computational Solid
                Mechanics.
              </p>
            </div>
          </article>
          <article>
            <span className={styles.trajectoryIcon}>
              <GraduationCap size={19} aria-hidden="true" />
            </span>
            <div>
              <span className={styles.trajectoryMeta}>Caltech · 2015—2021</span>
              <h3>Ph.D., M.S. & postdoctoral research</h3>
              <p>
                Aeronautics, space engineering, applied mathematics, and
                earthquake mechanics.
              </p>
            </div>
          </article>
          <article>
            <span className={styles.trajectoryIcon}>
              <BriefcaseBusiness size={19} aria-hidden="true" />
            </span>
            <div>
              <span className={styles.trajectoryMeta}>
                2013—2015 · NextForce Engineering
              </span>
              <h3>Structural Engineer</h3>
              <p>
                Design and finite-element analysis of concentrated solar-power
                structures.
              </p>
            </div>
          </article>
        </div>
      </div>

      <div className={styles.links} aria-label="Professional links">
        {profileLinks.map(({ label, detail, href, icon: Icon }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel={href.startsWith("http") ? "noreferrer" : undefined}
          >
            <Icon size={18} aria-hidden="true" />
            <span>
              <strong>{label}</strong>
              <small>{detail}</small>
            </span>
            {href.startsWith("http") && (
              <ExternalLink
                className={styles.externalIcon}
                size={14}
                aria-hidden="true"
              />
            )}
          </a>
        ))}
      </div>
    </section>
  );
}
