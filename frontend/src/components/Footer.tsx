import {
  BookOpen,
  Code2,
  Download,
  ExternalLink,
  Mail,
} from "lucide-react";
import styles from "./Footer.module.css";

const footerLinks = [
  {
    label: "Email",
    href: "mailto:joaquin.garciasuarez@epfl.ch",
    icon: Mail,
  },
  {
    label: "Website",
    href: "https://jgarciasuarez.github.io/",
    icon: ExternalLink,
  },
  {
    label: "ORCID",
    href: "https://orcid.org/0000-0001-8830-4348",
    icon: BookOpen,
  },
  {
    label: "GitHub",
    href: "https://github.com/jgarciasuarez",
    icon: Code2,
  },
  {
    label: "X",
    href: "https://x.com/jgs_research",
    icon: ExternalLink,
  },
] as const;

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.left}>
          <p className={styles.origin}>
            From <span className={styles.highlight}>Seville, Spain</span> ·
            Based in Lausanne, Switzerland
          </p>
          <a
            className={styles.cvLink}
            href="/Joaquin_Garcia-Suarez_CV_May_2026.pdf"
            download
          >
            <Download size={15} aria-hidden="true" />
            Download CV
          </a>
        </div>
        <nav className={styles.socials} aria-label="Professional links">
          {footerLinks.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noreferrer" : undefined}
              className={styles.socialLink}
            >
              <Icon size={16} aria-hidden="true" />
              {label}
            </a>
          ))}
        </nav>
      </div>
      <div className={styles.copyright}>
        <p>
          © {new Date().getFullYear()} Joaquin Garcia-Suarez. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
