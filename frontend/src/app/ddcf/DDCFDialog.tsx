"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ExternalLink, X } from "lucide-react";
import {
  ddcfItems,
  officialProjectUrl,
  projectFacts,
  sharedResources,
  type DDCFItemId,
} from "./ddcfData";
import styles from "./page.module.css";

type DDCFDialogProps = {
  itemId: DDCFItemId | null;
  onClose: () => void;
};

export default function DDCFDialog({
  itemId,
  onClose,
}: DDCFDialogProps) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const item = itemId ? ddcfItems[itemId] : null;

  useEffect(() => {
    if (!item) return;

    const previousFocus = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.setTimeout(() => dialogRef.current?.focus(), 0);

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
        return;
      }

      if (event.key !== "Tab" || !dialogRef.current) return;

      const focusable = dialogRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
      );
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last?.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first?.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
      window.setTimeout(() => previousFocus?.focus(), 0);
    };
  }, [item, onClose]);

  return (
    <AnimatePresence>
      {item && (
        <motion.div
          className={styles.dialogBackdrop}
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={reduceMotion ? { opacity: 0 } : { opacity: 0 }}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) onClose();
          }}
        >
          <motion.div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby={`dialog-title-${item.id}`}
            aria-describedby={`dialog-summary-${item.id}`}
            tabIndex={-1}
            className={`${styles.dialog} ${styles[`accent${item.accent}`]}`}
            initial={
              reduceMotion ? false : { opacity: 0, y: 24, scale: 0.985 }
            }
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={
              reduceMotion
                ? { opacity: 0 }
                : { opacity: 0, y: 16, scale: 0.99 }
            }
            transition={{ duration: reduceMotion ? 0 : 0.24 }}
          >
            <button
              type="button"
              className={styles.dialogClose}
              onClick={onClose}
              aria-label="Close project details"
            >
              <X size={20} aria-hidden="true" />
            </button>

            <div className={styles.dialogMedia}>
              <Image
                src={item.image}
                alt={item.imageAlt}
                fill
                sizes="(max-width: 760px) 100vw, 42vw"
                className={styles.dialogImage}
              />
              <div className={styles.dialogMediaOverlay} />
              <span className={styles.dialogEyebrow}>{item.label}</span>
            </div>

            <div
              className={styles.dialogContent}
              role="region"
              aria-label={`${item.title} details content`}
              tabIndex={0}
            >
              <p className={styles.dialogKicker}>
                {item.id === "ddcf" ? "Project overview" : "Research direction"}
              </p>
              <h2 id={`dialog-title-${item.id}`}>{item.title}</h2>
              <p
                id={`dialog-summary-${item.id}`}
                className={styles.dialogSummary}
              >
                {item.summary}
              </p>
              <p className={styles.dialogScope}>{item.scope}</p>

              {item.id === "ddcf" && (
                <dl className={styles.factGrid}>
                  {projectFacts.map(([term, value]) => (
                    <div key={term}>
                      <dt>{term}</dt>
                      <dd>{value}</dd>
                    </div>
                  ))}
                </dl>
              )}

              <div className={styles.conceptBlock}>
                <h3>Key concepts</h3>
                <ul className={styles.conceptList}>
                  {item.concepts.map((concept) => (
                    <li key={concept}>{concept}</li>
                  ))}
                </ul>
              </div>

              {item.id === "ddcf" ? (
                <div className={styles.resourceBlock}>
                  <h3>Project resources</h3>
                  <div className={styles.resourceLinks}>
                    {sharedResources.map((resource) => (
                      <a
                        key={resource.href}
                        href={resource.href}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {resource.label}
                        <ExternalLink size={15} aria-hidden="true" />
                      </a>
                    ))}
                  </div>
                </div>
              ) : (
                <a
                  className={styles.primaryLink}
                  href={officialProjectUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  View the official SNSF project
                  <ExternalLink size={16} aria-hidden="true" />
                </a>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
