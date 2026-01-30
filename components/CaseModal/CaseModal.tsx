'use client'

import { useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import styles from './CaseModal.module.css'

export interface CaseStudy {
  id: string
  title: string
  description: string
  tags: string[]
  problem: string
  approach: string
  architecture: string
  outcome: string
}

interface CaseModalProps {
  caseStudy: CaseStudy | null
  onClose: () => void
}

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}

const modalVariants = {
  hidden: {
    opacity: 0,
    scale: 0.95,
    y: 20,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    y: 20,
    transition: {
      duration: 0.2,
    },
  },
}

export default function CaseModal({ caseStudy, onClose }: CaseModalProps) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    },
    [onClose]
  )

  useEffect(() => {
    if (caseStudy) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)
    }
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [caseStudy, handleKeyDown])

  return (
    <AnimatePresence>
      {caseStudy && (
        <div className={styles.wrapper}>
          <motion.div
            className={styles.overlay}
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            onClick={onClose}
          />
          <motion.div
            className={styles.modal}
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            <button
              className={styles.closeButton}
              onClick={onClose}
              aria-label="Close modal"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path
                  d="M15 5L5 15M5 5L15 15"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </button>

            <div className={styles.header}>
              <div className={styles.tags}>
                {caseStudy.tags.map((tag) => (
                  <span key={tag} className={styles.tag}>
                    {tag}
                  </span>
                ))}
              </div>
              <h2 id="modal-title" className={styles.title}>
                {caseStudy.title}
              </h2>
              <p className={styles.description}>{caseStudy.description}</p>
            </div>

            <div className={styles.body}>
              <div className={styles.block}>
                <h3 className={styles.blockTitle}>
                  <span className={styles.blockNumber}>01</span>
                  Problem
                </h3>
                <p className={styles.blockText}>{caseStudy.problem}</p>
              </div>

              <div className={styles.block}>
                <h3 className={styles.blockTitle}>
                  <span className={styles.blockNumber}>02</span>
                  Approach
                </h3>
                <p className={styles.blockText}>{caseStudy.approach}</p>
              </div>

              <div className={styles.block}>
                <h3 className={styles.blockTitle}>
                  <span className={styles.blockNumber}>03</span>
                  System / Architecture
                </h3>
                <div className={styles.diagram}>
                  <div className={styles.diagramBox}>
                    <span>Input</span>
                  </div>
                  <div className={styles.diagramArrow}>→</div>
                  <div className={styles.diagramBox}>
                    <span>Process</span>
                  </div>
                  <div className={styles.diagramArrow}>→</div>
                  <div className={styles.diagramBox}>
                    <span>Output</span>
                  </div>
                </div>
                <p className={styles.blockText}>{caseStudy.architecture}</p>
              </div>

              <div className={styles.block}>
                <h3 className={styles.blockTitle}>
                  <span className={styles.blockNumber}>04</span>
                  Outcome / Next Steps
                </h3>
                <p className={styles.blockText}>{caseStudy.outcome}</p>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
