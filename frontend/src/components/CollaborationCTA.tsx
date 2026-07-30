import Link from "next/link";
import { Mail } from "lucide-react";
import styles from "./CollaborationCTA.module.css";

export default function CollaborationCTA() {
  return (
    <section className={styles.section} aria-labelledby="collaboration-heading">
      <span className={styles.kicker}>Collaborate</span>
      <h2 id="collaboration-heading">
        Build what mechanics says should be possible.
      </h2>
      <p>
        Open to research collaborations, invited seminars, and technically
        demanding work connecting mechanics, computation, and data-driven
        methods.
      </p>
      <div className={styles.actions}>
        <a href="mailto:joaquin.garciasuarez@epfl.ch">
          <Mail size={17} aria-hidden="true" />
          Start a conversation
        </a>
        <Link href="/research">Explore the research programme →</Link>
      </div>
    </section>
  );
}
