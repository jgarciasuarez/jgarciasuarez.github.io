import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Research Portfolio | Joaquin Garcia-Suarez',
  description: 'Three interconnected research themes spanning interface mechanics across scales, wave propagation in heterogeneous media, and computational methods development.',
};

/* ── Data ─────────────────────────────────────────── */

interface SubTopic {
  title: string;
  desc: string;
}

interface Publication {
  authors: string;
  title: string;
  journal: string;
  year: string;
}

interface Theme {
  id: string;
  number: string;
  label: string;
  title: string;
  subtitle: string;
  description: string;
  heroImage: string;
  accent: string;
  subTopics: SubTopic[];
  keyPubs: Publication[];
}

const themes: Theme[] = [
  {
    id: 'interface',
    number: 'I',
    label: 'Theme I',
    title: 'Interface Mechanics',
    subtitle: 'Across Scales',
    description:
      'Interfaces set durability, feel, and failure: microscale wear dictates machinery lifetime; thin-film lubrication controls whether soft bodies make or avoid contact; frictional weakening governs rupture of geophysical and mechanical interfaces. Our work spans twelve orders of magnitude in length scales — from nanoscale molecular dynamics to geological-scale friction.',
    heroImage: '/images/portfolio_contact.png',
    accent: '#00e5ff',
    subTopics: [
      {
        title: 'Nanoscale Wear',
        desc: 'Molecular dynamics simulations resolving two-asperity junction failure, yielding scaling laws relating debris volume to tangential work across plasticity and fracture regimes.',
      },
      {
        title: 'Soft Solid Impact & Haptics',
        desc: 'Elastohydrodynamic lubrication theory coupled to solid inertia — deriving a governing dimensionless group φ that classifies fluid-mediated impact regimes of compliant solids.',
      },
      {
        title: 'Data-Driven Friction',
        desc: 'Machine-learned constitutive models constrained by laboratory observations, blending recurrent neural networks with rate-and-state theory for geophysical fault rupture simulations.',
      },
    ],
    keyPubs: [
      { authors: 'Garcia-Suarez, Brink, Molinari', title: 'Breakdown of Reye\'s theory in nanoscale wear', journal: 'J. Mech. Phys. Solids', year: '2023' },
      { authors: 'Bilotto, Kolinski, Lecampion, et al.', title: 'Fluid-mediated impact of soft solids', journal: 'J. Fluid Mechanics', year: '2024' },
      { authors: 'Cortes, Garcia-Suarez', title: 'Data-driven dynamic friction models based on RNNs', journal: 'Appl. Comput. Geosci.', year: '2025' },
    ],
  },
  {
    id: 'waves',
    number: 'II',
    label: 'Theme II',
    title: 'Wave Propagation',
    subtitle: 'Heterogeneous Media',
    description:
      'Layered media underpin photonic, phononic and acoustic devices requiring robust bandgap placement and broadband transmission or absorption. We develop a physics-agnostic prediction framework exploiting the Lie-group structure of transfer matrices — one mathematical framework, many wave physics.',
    heroImage: '/images/portfolio_waves.png',
    accent: '#7e57c2',
    subTopics: [
      {
        title: 'Acoustics',
        desc: 'Broadband acoustic absorption in anechoic tiles for submarine coatings — designing materials where A = 1 − |R| − |T| ≈ 1.',
      },
      {
        title: 'Optics',
        desc: 'Light wavelength-selective transmission for color filters using layered dielectric structures with precisely placed transmission peaks.',
      },
      {
        title: 'Elasticity',
        desc: 'Low-frequency bandgaps in engineered soil barriers for seismic wave attenuation — protecting structures from earthquake ground motion.',
      },
    ],
    keyPubs: [
      { authors: 'Garcia-Suarez', title: 'Harmonic decomposition of the trace of 1D transfer matrices in layered media', journal: 'J. Mech. Phys. Solids', year: '2022' },
      { authors: 'González-Carbajal, Lemm, Garcia-Suarez', title: 'On the lowest-frequency bandgap of 1D phononic crystals', journal: 'Eur. J. Mech. A/Solids', year: '2024' },
    ],
  },
  {
    id: 'computational',
    number: 'III',
    label: 'Theme III',
    title: 'Computational Methods',
    subtitle: 'Enabling Themes I & II',
    description:
      'We develop computational tools as needed to address specific problems in interface mechanics and wave propagation — from physics-informed ML and GPU-bound optimization to mesh d-refinement strategies and phase-space iterative solvers.',
    heroImage: '/images/DDCF_collage.png',
    accent: '#ff6b6b',
    subTopics: [
      {
        title: 'Physics-Informed ML',
        desc: 'Neural operator architectures and recurrent networks constrained by physical laws for constitutive modeling and friction prediction.',
      },
      {
        title: 'GPU-Bound Optimization',
        desc: 'Exploiting the harmonic decomposition structure for second-order GPU-accelerated optimization of layered material designs.',
      },
      {
        title: 'Numerical Strategies',
        desc: 'Mesh d-refinement for complex material response, phase-space iterative solvers, and compact EHL simulation codes.',
      },
    ],
    keyPubs: [
      { authors: 'Wattel, Molinari, Ortiz, Garcia-Suarez', title: 'Mesh d-refinement: a data-based computational framework', journal: 'Mech. of Materials', year: '2023' },
      { authors: 'Cortes, Sangiorgio, Garcia-Suarez', title: 'Phase-space iterative solvers', journal: 'Submitted to Comput. Mech.', year: '2024' },
    ],
  },
];

/* ── Page ─────────────────────────────────────────── */

export default function Research() {
  return (
    <div className={styles.page}>
      {/* Header */}
      <header className={styles.header}>
        <span className={styles.label}>Research Portfolio</span>
        <h1 className={styles.title}>Three Pillars of Research</h1>
        <p className={styles.subtitle}>
          Bridging mechanics, mathematics, and data-driven methods — from nanoscale molecular dynamics to seismic wave propagation.
        </p>
      </header>

      {/* Scale bar */}
      <div className={styles.scaleBar}>
        <Image src="/images/contact_across_scales.png" alt="Research spanning 12 orders of magnitude in length scales" width={1200} height={200} className={styles.scaleImage} />
      </div>

      {/* Themes */}
      {themes.map((theme, idx) => (
        <section
          key={theme.id}
          id={theme.id}
          className={styles.themeSection}
          style={{ '--theme-accent': theme.accent } as React.CSSProperties}
        >
          {/* Theme header */}
          <div className={styles.themeHeader}>
            <span className={styles.themeNumber}>{theme.number}</span>
            <div>
              <span className={styles.themeLabel}>{theme.label}</span>
              <h2 className={styles.themeTitle}>{theme.title}</h2>
              <p className={styles.themeSubtitle}>{theme.subtitle}</p>
            </div>
          </div>

          {/* Two-column: image + description */}
          <div className={`${styles.themeBody} ${idx % 2 !== 0 ? styles.reversed : ''}`}>
            <div className={styles.themeImageWrap}>
              <Image
                src={theme.heroImage}
                alt={`${theme.title} research visual`}
                fill
                sizes="(max-width: 900px) 100vw, 50vw"
                style={{ objectFit: 'contain' }}
                className={styles.themeImage}
              />
            </div>
            <div className={styles.themeText}>
              <p className={styles.themeDesc}>{theme.description}</p>

              {/* Sub-topics */}
              <div className={styles.subTopics}>
                {theme.subTopics.map((st, j) => (
                  <div key={j} className={styles.subTopic}>
                    <div className={styles.subDot} />
                    <div>
                      <h4 className={styles.subTitle}>{st.title}</h4>
                      <p className={styles.subDesc}>{st.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Key publications */}
          <div className={styles.pubsSection}>
            <h3 className={styles.pubsHeading}>Key Publications</h3>
            <ul className={styles.pubsList}>
              {theme.keyPubs.map((pub, k) => (
                <li key={k} className={styles.pubItem}>
                  <span className={styles.pubAuthors}>{pub.authors}</span>
                  <span className={styles.pubTitle}>"{pub.title}"</span>
                  <span className={styles.pubJournal}>{pub.journal}, {pub.year}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Divider between themes */}
          {idx < themes.length - 1 && <div className={styles.divider} />}
        </section>
      ))}

      {/* DDCF CTA */}
      <section className={styles.ddcfCta}>
        <div className={styles.ddcfCtaInner}>
          <span className={styles.label}>Featured Project</span>
          <h2 className={styles.ddcfTitle}>Data-Driven Computational Friction</h2>
          <p className={styles.ddcfDesc}>
            Central to our current work — an SNSF Ambizione-funded project exploring constitutive modeling, neural operators, GPU-acceleration, and automatic differentiation for friction research.
          </p>
          <Link href="/ddcf" className={styles.ddcfBtn}>
            Explore the DDCF Hub →
          </Link>
        </div>
      </section>
    </div>
  );
}
