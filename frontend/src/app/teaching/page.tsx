import type { Metadata } from 'next';
import { createSocialMetadata } from '@/lib/socialMetadata';
import styles from './page.module.css';

const pageTitle = 'Teaching Portfolio | Joaquin Garcia-Suarez';
const pageDescription = 'Teaching philosophy, mentoring experience, and proposed graduate classes.';

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: '/teaching',
  },
  ...createSocialMetadata({
    title: pageTitle,
    description: pageDescription,
    url: '/teaching',
  }),
};

export default function Teaching() {
  return (
    <main id="main-content" className={styles.page}>
      {/* Header */}
      <header className={styles.header}>
        <span className={styles.label}>Teaching Portfolio</span>
        <h1 className={styles.title}>Mentorship & Education</h1>
        <p className={styles.subtitle}>
          Weaving technological, physical, and mathematical strands to introduce problems in all their complexity.
        </p>
      </header>

      {/* Main Content Grid */}
      <div className={styles.grid}>
        
        {/* Left Column: Philosophy & Experience */}
        <div className={styles.mainCol}>
          
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Overview & Philosophy</h2>
            <div className={styles.textBlock}>
              <p>
                My teaching style resembles my research style: I weave the technological, physical and mathematical strands to introduce problems in all their complexity. I cherish science outreach, and, to me, the first place to do so is the classroom.
              </p>
              <p>
                Teaching and mentoring help deepen my understanding of concepts, and thus they foster my research. I can proudly say that a publication of mine grew from a question posed by an outstanding student: <em>“what does ‘resonance’ really mean?”</em>
              </p>
              <p>
                I encourage interactions grounded in mutual respect and a shared passion for science, supporting students from diverse backgrounds by ensuring their perspectives help shape how we approach the material.
              </p>
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Teaching Methods</h2>
            <div className={styles.textBlock}>
              <p>
                I lecture using the board and emphasizing <strong>threshold concepts</strong> openly, thus trying to ensure that the foundational concepts are assimilated before building upon. This strategy leads to a continuous expansion of students’ <strong>zone of proximal development</strong>; the goal is that they can continue delving in the subject as independent learners.
              </p>
              <p>
                I look for inspiration in my <strong>own experience</strong>. For example, a modular trough collector — a system I once designed in <strong>industry</strong> — known to display torsional vibrational modes when excited by wind, made for a perfect exam exercise in structural dynamics.
              </p>
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Student Feedback</h2>
            <div className={styles.feedbackGrid}>
              <blockquote>
                <p>
                  “I am very thankful for Joaquin to put so much effort into
                  guiding me through this course.”
                </p>
                <footer>Anonymous course feedback · EPFL</footer>
              </blockquote>
              <blockquote>
                <p>
                  “Joaquin is a natural teacher, with a deep understanding of the
                  material and a knack for elucidating complexity.”
                </p>
                <footer>Anonymous course feedback · Caltech</footer>
              </blockquote>
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Proposed Graduate Classes</h2>
            <div className={styles.coursesGrid}>
              
              <div className={styles.courseCard}>
                <div className={styles.courseIcon}>🌊</div>
                <h3 className={styles.courseTitle}>Fluid-Solid Interactions at Low Reynolds Numbers</h3>
                <p className={styles.courseDesc}>
                  Provides a broad introduction to problems in which solid deformation and thin fluid layers are strongly coupled. Covers continuum mechanics fundamentals together with selected applications like elastohydrodynamic lubrication and haptics.
                </p>
              </div>

              <div className={styles.courseCard}>
                <div className={styles.courseIcon}>📐</div>
                <h3 className={styles.courseTitle}>Group Theory for Engineers</h3>
                <p className={styles.courseDesc}>
                  Introduces basic notions of group theory (group axioms, isomorphisms, symmetries) while illustrating concepts with examples, such as 3D space rotations using SO(3) and transfer matrices for wave propagation as elements of SL₂(ℝ).
                </p>
              </div>

            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Teaching & Project Resources</h2>
            <p className={styles.resourceIntro}>
              Official course information and a selection of supervised projects
              connecting mechanics, computation, and student-led research.
            </p>
            <div className={styles.resourceList}>
              <a
                href="https://edu.epfl.ch/studyplan/en/master/mechanical-engineering/coursebook/continuum-mechanics-and-applications-CIVIL-425"
                target="_blank"
                rel="noreferrer"
              >
                <span className={styles.resourceType}>Coursebook</span>
                <strong>CIVIL-425 · Continuum Mechanics and Applications</strong>
                <span aria-hidden="true">↗</span>
              </a>
              <a
                href="https://infoscience.epfl.ch/handle/20.500.14299/194291"
                target="_blank"
                rel="noreferrer"
              >
                <span className={styles.resourceType}>Student project · 2022 · Publication-linked</span>
                <strong>Data-driven 1D site-response analysis</strong>
                <span aria-hidden="true">↗</span>
              </a>
              <a
                href="https://infoscience.epfl.ch/handle/20.500.14299/208527"
                target="_blank"
                rel="noreferrer"
              >
                <span className={styles.resourceType}>Student project · 2024 · Publication-linked</span>
                <strong>Convergence of phase-space iterative solvers</strong>
                <span aria-hidden="true">↗</span>
              </a>
              <a
                href="https://infoscience.epfl.ch/handle/20.500.14299/242739"
                target="_blank"
                rel="noreferrer"
              >
                <span className={styles.resourceType}>Student project · 2025</span>
                <strong>Physics-informed neural networks for friction</strong>
                <span aria-hidden="true">↗</span>
              </a>
              <a
                href="https://infoscience.epfl.ch/handle/20.500.14299/251312"
                target="_blank"
                rel="noreferrer"
              >
                <span className={styles.resourceType}>Student project · 2025</span>
                <strong>Neural networks and operators for friction</strong>
                <span aria-hidden="true">↗</span>
              </a>
              <a
                href="https://www.epfl.ch/labs/lsms/semester-and-master-projects/"
                target="_blank"
                rel="noreferrer"
              >
                <span className={styles.resourceType}>EPFL · LSMS</span>
                <strong>Current and former student projects</strong>
                <span aria-hidden="true">↗</span>
              </a>
            </div>
            <p className={styles.resourceOutcome}>
              Two supervised projects highlighted here developed into
              peer-reviewed publications, connecting mentoring directly with the
              research programme.
            </p>
          </section>

        </div>

        {/* Right Column: Experience Timeline & Stats */}
        <aside className={styles.sideCol}>
          
          <div className={styles.glassPanel}>
            <h3 className={styles.panelTitle}>Teaching Experience</h3>
            <div className={styles.timeline}>
              
              <div className={styles.timelineItem}>
                <div className={styles.timelineDot} />
                <div className={styles.timelineContent}>
                  <span className={styles.timelineDate}>Spring 2024–2025</span>
                  <h4 className={styles.timelineRole}>Main Instructor</h4>
                  <p className={styles.timelineCourse}>CIVIL-425: Continuum Mechanics and Applications</p>
                  <p className={styles.timelineLocation}>EPFL</p>
                </div>
              </div>

              <div className={styles.timelineItem}>
                <div className={styles.timelineDot} />
                <div className={styles.timelineContent}>
                  <span className={styles.timelineDate}>Fall 2021–2022</span>
                  <h4 className={styles.timelineRole}>Teaching Assistant</h4>
                  <p className={styles.timelineCourse}>CIVIL-425: Advanced Continuum Mechanics</p>
                  <p className={styles.timelineLocation}>EPFL</p>
                </div>
              </div>

              <div className={styles.timelineItem}>
                <div className={styles.timelineDot} />
                <div className={styles.timelineContent}>
                  <span className={styles.timelineDate}>Fall 2017–2019</span>
                  <h4 className={styles.timelineRole}>Teaching Assistant</h4>
                  <p className={styles.timelineCourse}>AM/CE 151a: Dynamics and Vibrations</p>
                  <p className={styles.timelineLocation}>Caltech</p>
                  <span className={styles.awardBadge}>🏆 Registrar’s Office Excellent TA Mention (Fall 2017)</span>
                </div>
              </div>

            </div>
          </div>

          <div className={styles.glassPanel}>
            <h3 className={styles.panelTitle}>Mentorship Summary</h3>
            <ul className={styles.mentorshipList}>
              <li>
                <span className={styles.mentorNumber}>2</span>
                <span className={styles.mentorLabel}>Graduate Students Supervised</span>
              </li>
              <li>
                <span className={styles.mentorNumber}>2</span>
                <span className={styles.mentorLabel}>Master Theses Supervised</span>
              </li>
              <li>
                <span className={styles.mentorNumber}>17</span>
                <span className={styles.mentorLabel}>Semester Projects (7 Master’s, 10 Bachelor’s)</span>
              </li>
            </ul>
          </div>

        </aside>

      </div>
    </main>
  );
}
