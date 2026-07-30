import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Research Portfolio | Joaquin Garcia-Suarez',
  description: 'Three interconnected research themes spanning interface mechanics across scales, wave propagation in heterogeneous media, and computational methods development.',
  alternates: {
    canonical: '/research',
  },
  openGraph: {
    title: 'Research Portfolio | Joaquin Garcia-Suarez',
    description: 'Research spanning interface mechanics, wave propagation in heterogeneous media, and computational methods.',
    url: '/research',
  },
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
  href: string;
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
  next: string;
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
    heroImage: '/images/contact_across_scales_corrected.png',
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
    next:
      'Connect nanoscale wear laws to random rough-surface statistics, tune contact through shape, and extend compact lubrication models to viscoelastic and rough interfaces.',
    keyPubs: [
      { authors: 'Garcia-Suarez', title: 'A matter of shape: contact area optimization in soft lubrication', journal: 'Tribology Letters', year: '2026', href: 'https://doi.org/10.1007/s11249-026-02108-1' },
      { authors: 'Garcia-Suarez, Brink, Molinari', title: 'Breakdown of Reye\'s theory in nanoscale wear', journal: 'J. Mech. Phys. Solids', year: '2023', href: 'https://doi.org/10.1016/j.jmps.2023.105236' },
      { authors: 'Bilotto, Kolinski, Lecampion, et al.', title: 'Fluid-mediated impact of soft solids', journal: 'J. Fluid Mechanics', year: '2024', href: 'https://doi.org/10.1017/jfm.2024.820' },
      { authors: 'Cortes, Garcia-Suarez', title: 'Data-driven dynamic friction models based on RNNs', journal: 'Appl. Comput. Geosci.', year: '2025', href: 'https://doi.org/10.1016/j.acags.2025.100249' },
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
    accent: '#a983ff',
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
    next:
      'Extend the harmonic framework from 2×2 to 4×4 beam systems, then include viscoelastic layers, inclined waves, and fluid coupling for broadband absorbers.',
    keyPubs: [
      { authors: 'Garcia-Suarez', title: 'Harmonic decomposition of the trace of 1D transfer matrices in layered media', journal: 'J. Mech. Phys. Solids', year: '2022', href: 'https://doi.org/10.1016/j.jmps.2022.104830' },
      { authors: 'González-Carbajal, Lemm, Garcia-Suarez', title: 'On the lowest-frequency bandgap of 1D phononic crystals', journal: 'Eur. J. Mech. A/Solids', year: '2025', href: 'https://doi.org/10.1016/j.euromechsol.2024.105466' },
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
    heroImage: '/images/DDCF_collage_corrected.png',
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
    next:
      'Turn compact Python solvers and differentiable models into scalable GPU workflows for inverse design, calibration, and multiscale simulation.',
    keyPubs: [
      { authors: 'Wattel, Molinari, Ortiz, Garcia-Suarez', title: 'Mesh d-refinement: a data-based computational framework', journal: 'Mech. of Materials', year: '2023', href: 'https://doi.org/10.1016/j.mechmat.2023.104630' },
      { authors: 'Cortes, Sangiorgio, Garcia-Suarez', title: 'Phase-space iterative solvers', journal: 'Computational Mechanics', year: '2025', href: 'https://doi.org/10.1007/s00466-025-02735-w' },
    ],
  },
];

/* ── Page ─────────────────────────────────────────── */

export default function Research() {
  return (
    <main id="main-content" className={styles.page}>
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
        <Image
          src="/images/contact_across_scales_corrected.png"
          alt="Research spanning 12 orders of magnitude in length scales"
          width={1200}
          height={200}
          sizes="(max-width: 640px) calc(100vw - 2rem), (max-width: 1200px) calc(100vw - 4rem), 1200px"
          loading="eager"
          className={styles.scaleImage}
        />
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
                loading={idx === 0 ? 'eager' : 'lazy'}
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
              <div className={styles.nextDirection}>
                <span>Current direction</span>
                <p>{theme.next}</p>
              </div>
            </div>
          </div>

          {/* Key publications */}
          <div className={styles.pubsSection}>
            <h3 className={styles.pubsHeading}>Selected Publications</h3>
            <ul className={styles.pubsList}>
              {theme.keyPubs.map((pub, k) => (
                <li key={k} className={styles.pubItem}>
                  <span className={styles.pubAuthors}>{pub.authors}</span>
                  <a
                    className={styles.pubTitle}
                    href={pub.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${pub.title}, open DOI`}
                  >
                    “{pub.title}” <span aria-hidden="true">↗</span>
                  </a>
                  <span className={styles.pubJournal}>{pub.journal}, {pub.year}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Divider between themes */}
          {idx < themes.length - 1 && <div className={styles.divider} />}
        </section>
      ))}

      <section className={styles.publicationArchive} aria-labelledby="publication-record">
        <div>
          <span className={styles.label}>Complete record</span>
          <h2 id="publication-record">24 peer-reviewed articles</h2>
          <p>
            The thematic selection above highlights the work most closely connected
            to the current programme. The complete, continuously maintained record
            is available through ORCID and the downloadable CV.
          </p>
        </div>
        <div className={styles.archiveLinks}>
          <a
            href="https://orcid.org/0000-0001-8830-4348"
            target="_blank"
            rel="noreferrer"
          >
            View ORCID record ↗
          </a>
          <a href="/Joaquin_Garcia-Suarez_CV_May_2026.pdf" download>
            Download complete CV
          </a>
        </div>
      </section>

      <section className={styles.foundation} aria-labelledby="foundation-heading">
        <div className={styles.foundationIntro}>
          <span className={styles.label}>Research foundation</span>
          <h2 id="foundation-heading">Seismic & geotechnical mechanics</h2>
          <p>
            Earlier work in earthquake and geotechnical mechanics provides the
            large-scale end of the portfolio: site-response prediction, retaining
            structures, fracture integrals, and field-informed studies of
            geomorphological resonances. That foundation continues to shape how
            models are connected to observations.
          </p>
        </div>
        <div className={styles.foundationLinks}>
          <a href="https://doi.org/10.1002/nag.3596" target="_blank" rel="noreferrer">
            <span>2023 · Site response</span>
            <strong>Data-driven 1D wave propagation</strong>
            <span aria-hidden="true">↗</span>
          </a>
          <a href="https://doi.org/10.1016/j.jmps.2021.104353" target="_blank" rel="noreferrer">
            <span>2021 · Fracture mechanics</span>
            <strong>J-integrals in geotechnical dynamics</strong>
            <span aria-hidden="true">↗</span>
          </a>
          <a href="https://doi.org/10.1785/0120250073" target="_blank" rel="noreferrer">
            <span>2025 · Field mechanics</span>
            <strong>Resonance at the Trona Pinnacles</strong>
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>

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
    </main>
  );
}
