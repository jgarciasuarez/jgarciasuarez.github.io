'use client';

import Image from 'next/image';
import Link from 'next/link';
import styles from './ResearchPreview.module.css';

interface ThemeCard {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  href: string;
  accent: string;
}

const themes: ThemeCard[] = [
  {
    title: 'Interface Mechanics',
    subtitle: 'Across Scales',
    description: 'From nanoscale wear and molecular dynamics to geological-scale friction — bridging nine orders of magnitude.',
    image: '/images/contact_across_scales.png',
    href: '/research',
    accent: 'var(--accent-primary)',
  },
  {
    title: 'Wave Propagation',
    subtitle: 'Heterogeneous Media',
    description: 'Physics-agnostic prediction via Lie group structure of transfer matrices — acoustics, optics, and seismology.',
    image: '/images/portfolio_waves.png',
    href: '/research',
    accent: 'var(--accent-secondary)',
  },
  {
    title: 'Computational Methods',
    subtitle: 'ML · GPU · AD',
    description: 'Physics-informed machine learning, GPU-bound optimization, and automatic differentiation for frontier research.',
    image: '/images/DDCF_collage.png',
    href: '/ddcf',
    accent: '#ff6b6b',
  },
];

export default function ResearchPreview() {
  return (
    <section className={styles.section}>
      <div className={styles.sectionHeader}>
        <span className={styles.sectionLabel}>Research Themes</span>
        <h2 className={styles.sectionTitle}>Three Pillars of Research</h2>
        <p className={styles.sectionDesc}>
          My work spans three interconnected themes bridging mechanics, mathematics, and data-driven methods.
        </p>
      </div>
      <div className={styles.grid}>
        {themes.map((theme, i) => (
          <Link key={i} href={theme.href} className={styles.card} style={{ '--card-accent': theme.accent } as React.CSSProperties}>
            <div className={styles.imageWrap}>
              <Image
                src={theme.image}
                alt={theme.title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                style={{ objectFit: 'cover' }}
              />
              <div className={styles.imageOverlay} />
            </div>
            <div className={styles.cardContent}>
              <span className={styles.cardSubtitle}>{theme.subtitle}</span>
              <h3 className={styles.cardTitle}>{theme.title}</h3>
              <p className={styles.cardDesc}>{theme.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
