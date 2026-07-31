"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ExternalLink, Maximize2, X } from "lucide-react";
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
  const imageTriggerRef = useRef<HTMLButtonElement>(null);
  const imageCloseRef = useRef<HTMLButtonElement>(null);
  const imageExpandedRef = useRef(false);
  const [imageExpanded, setImageExpanded] = useState(false);
  const reduceMotion = useReducedMotion();
  const item = itemId ? ddcfItems[itemId] : null;

  const openImage = useCallback(() => {
    imageExpandedRef.current = true;
    setImageExpanded(true);
    window.setTimeout(() => imageCloseRef.current?.focus(), 0);
  }, []);

  const closeImage = useCallback(() => {
    imageExpandedRef.current = false;
    setImageExpanded(false);
    window.setTimeout(() => imageTriggerRef.current?.focus(), 0);
  }, []);

  const closeDialog = useCallback(() => {
    imageExpandedRef.current = false;
    setImageExpanded(false);
    onClose();
  }, [onClose]);

  useEffect(() => {
    if (!item) return;

    const previousFocus = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.setTimeout(() => dialogRef.current?.focus(), 0);

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        if (imageExpandedRef.current) {
          closeImage();
        } else {
          closeDialog();
        }
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
  }, [closeDialog, closeImage, item]);

  return (
    <AnimatePresence>
      {item && (
        <motion.div
          className={styles.dialogBackdrop}
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={reduceMotion ? { opacity: 0 } : { opacity: 0 }}
          onMouseDown={(event) => {
            if (event.target !== event.currentTarget) return;
            if (imageExpandedRef.current) {
              closeImage();
            } else {
              closeDialog();
            }
          }}
        >
          <motion.div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-label={imageExpanded ? `Full image: ${item.title}` : undefined}
            aria-labelledby={
              imageExpanded ? undefined : `dialog-title-${item.id}`
            }
            aria-describedby={
              imageExpanded
                ? `image-viewer-caption-${item.id}`
                : `dialog-summary-${item.id}`
            }
            tabIndex={-1}
            className={`${styles.dialog} ${
              imageExpanded ? styles.imageViewerDialog : ""
            } ${styles[`accent${item.accent}`]}`}
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
            {imageExpanded ? (
              <figure className={styles.imageViewer}>
                <button
                  ref={imageCloseRef}
                  type="button"
                  className={styles.dialogClose}
                  onClick={closeImage}
                  aria-label="Close full image"
                >
                  <X size={20} aria-hidden="true" />
                </button>
                <div className={styles.imageViewerStage}>
                  <Image
                    src={item.image}
                    alt={item.imageAlt}
                    fill
                    sizes="100vw"
                    className={styles.fullImage}
                  />
                </div>
                <figcaption
                  id={`image-viewer-caption-${item.id}`}
                  className={styles.imageViewerCaption}
                >
                  <span>Full image · {item.label}</span>
                  <p>{item.imageAlt}</p>
                </figcaption>
              </figure>
            ) : (
              <>
                <button
                  type="button"
                  className={styles.dialogClose}
                  onClick={closeDialog}
                  aria-label="Close project details"
                >
                  <X size={20} aria-hidden="true" />
                </button>

                <button
                  ref={imageTriggerRef}
                  type="button"
                  className={`${styles.dialogMedia} ${styles.dialogMediaButton}`}
                  onClick={openImage}
                  aria-label={`View full image: ${item.imageAlt}`}
                >
                  <Image
                    src={item.image}
                    alt=""
                    fill
                    sizes="(max-width: 760px) 100vw, 42vw"
                    className={styles.dialogImage}
                  />
                  <span className={styles.dialogMediaOverlay} />
                  <span className={styles.dialogEyebrow}>{item.label}</span>
                  <span className={styles.imageExpandCue} aria-hidden="true">
                    <Maximize2 size={15} />
                    View full image
                  </span>
                </button>

                <div
                  className={styles.dialogContent}
                  role="region"
                  aria-label={`${item.title} details content`}
                  tabIndex={0}
                >
                  <p className={styles.dialogKicker}>
                    {item.id === "ddcf"
                      ? "Project overview"
                      : "Research direction"}
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
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
