'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import styles from './WritingSection.module.css'

interface WritingItem {
  id: string
  title: string
  content: string
}

const writingItems: WritingItem[] = [
  {
    id: 'ai-agents',
    title: 'How I think about AI agents + guardrails',
    content: `AI agents promise autonomy but require thoughtful constraints. My framework balances capability with safety:

**Scope boundaries**: Define what the agent can and cannot do upfront. An agent that drafts emails shouldn't have access to send them without confirmation.

**Confidence thresholds**: When the model is uncertain, it should surface that uncertainty rather than hallucinate confidence. I build in explicit "I don't know" paths.

**Human-in-the-loop triggers**: Certain actions—anything irreversible, anything touching money, anything public-facing—should require human approval. The key is making this friction feel helpful, not annoying.

**Observability**: Log everything. When agents fail, you need to understand why. I instrument for both success metrics and failure modes.

The goal isn't to limit AI—it's to make it trustworthy enough that users actually adopt it.`,
  },
  {
    id: 'data-models',
    title: 'System design: data models for roadmap generation',
    content: `Roadmap tools often fail because they model features, not problems. Here's how I think about the data architecture:

**Goals → Initiatives → Features**: Top-level goals (OKRs) decompose into initiatives (themes of work), which contain features (shippable units). Each layer has its own success metrics.

**Dependencies as first-class objects**: Rather than implicit ordering, I model dependencies explicitly. A feature can depend on another feature, an external event, or a team's availability.

**State machines over status fields**: Instead of a status dropdown, each entity moves through defined states with allowed transitions. This prevents invalid states and makes reporting accurate.

**Versioning for context**: When priorities change, you need to understand why. I version roadmap states so you can diff and see what shifted.

This structure supports both bottom-up (what can we ship?) and top-down (what should we prioritize?) planning.`,
  },
  {
    id: 'metrics',
    title: 'Metrics: activation → retention loops',
    content: `Most teams track vanity metrics. Here's the hierarchy I use:

**Activation**: Did the user experience the core value? This isn't just "signed up"—it's completed a meaningful action. For a notes app: created and saved a note. For a scheduling tool: booked a meeting.

**Engagement depth**: How intensely do retained users use the product? Daily active users is less interesting than actions per active user. Look for power users and understand what they do differently.

**Retention cohorts**: Week 1, Week 4, Week 12 retention tell different stories. Early churn = onboarding problem. Late churn = feature-market fit problem. Segment by acquisition channel.

**Resurrection**: Can you bring churned users back? This reveals whether your product improved or whether users just didn't form habits. Resurrection rate is underrated.

The loop: improve activation → watch engagement patterns → identify retention blockers → ship fixes → measure resurrection. Repeat.`,
  },
]

const itemVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.4,
      ease: [0.25, 0.1, 0.25, 1],
    },
  }),
}

const modalVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] },
  },
  exit: { opacity: 0, scale: 0.95, y: 20, transition: { duration: 0.2 } },
}

export default function WritingSection() {
  const [selectedItem, setSelectedItem] = useState<WritingItem | null>(null)

  const handleClose = () => setSelectedItem(null)

  return (
    <>
      <div className={styles.list}>
        {writingItems.map((item, i) => (
          <motion.button
            key={item.id}
            className={styles.item}
            custom={i}
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            onClick={() => setSelectedItem(item)}
          >
            <span className={styles.itemNumber}>{String(i + 1).padStart(2, '0')}</span>
            <span className={styles.itemTitle}>{item.title}</span>
            <span className={styles.itemArrow}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M6 4L10 8L6 12"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {selectedItem && (
          <div className={styles.modalWrapper}>
            <motion.div
              className={styles.modalOverlay}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleClose}
            />
            <motion.div
              className={styles.modal}
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              role="dialog"
              aria-modal="true"
            >
              <button
                className={styles.closeButton}
                onClick={handleClose}
                aria-label="Close"
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
              <h3 className={styles.modalTitle}>{selectedItem.title}</h3>
              <div className={styles.modalContent}>
                {selectedItem.content.split('\n\n').map((paragraph, i) => (
                  <p key={i} dangerouslySetInnerHTML={{
                    __html: paragraph
                      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                  }} />
                ))}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  )
}
