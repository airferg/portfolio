'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import CaseModal, { CaseStudy } from '../CaseModal/CaseModal'
import styles from './WorkGrid.module.css'

const caseStudies: CaseStudy[] = [
  {
    id: 'hydra',
    title: 'Hydra',
    description: 'Agentic OS for founders',
    tags: ['AI Agents', 'Product Strategy', 'TypeScript'],
    problem:
      'Early-stage founders juggle dozens of tasks across product, ops, and fundraising. Existing tools are siloed, forcing constant context-switching and manual coordination.',
    approach:
      'Designed a unified agent framework that breaks down high-level goals into executable subtasks. Built a task orchestration layer that delegates to specialized agents (research, drafting, scheduling) while maintaining context across sessions.',
    architecture:
      'Multi-agent system with a central planner agent coordinating specialized execution agents. Persistent memory layer stores context, user preferences, and task history. Integrations via API adapters for calendar, email, and document tools.',
    outcome:
      'Shipped MVP with 3 core agent capabilities. Testing with 5 pilot founders. Next: refining task decomposition accuracy and expanding integration coverage.',
  },
  {
    id: 'carmax-skye',
    title: 'CarMax Skye+',
    description: 'AI agent concept',
    tags: ['Concept Design', 'AI UX', 'Enterprise'],
    problem:
      'CarMax customer service handles high volume with repetitive queries. Existing chatbot felt scripted and failed to resolve complex trade-in scenarios efficiently.',
    approach:
      'Proposed an AI agent concept that combines structured workflows with conversational flexibility. Designed flows for trade-in estimation, appointment scheduling, and financing questions with appropriate human handoff triggers.',
    architecture:
      'Retrieval-augmented generation for accurate inventory and policy answers. State machine for conversation flow management. Confidence scoring to determine when to escalate to human agents.',
    outcome:
      'Concept presented to product team. Identified key UX patterns for enterprise AI assistants: transparency about AI limitations, clear escalation paths, and proactive information surfacing.',
  },
  {
    id: 'cville-aud',
    title: 'Charlottesville AUD Library',
    description: 'Civic digital library',
    tags: ['Civic Tech', 'Data Architecture', 'Python'],
    problem:
      'City planning documents scattered across legacy systems, PDFs, and email chains. Residents and researchers struggled to access historical records or understand ongoing development projects.',
    approach:
      'Built a searchable document repository with structured metadata extraction. Implemented entity recognition to link documents by location, project, and stakeholder. Created simple browsing interface for non-technical users.',
    architecture:
      'Document ingestion pipeline with OCR for scanned PDFs. PostgreSQL database with full-text search. Simple React frontend with faceted filtering. Python scripts for metadata extraction and deduplication.',
    outcome:
      'Indexed 2,400+ planning documents. Deployed prototype for Architecture Review Board. Exploring expansion to other city departments.',
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1],
    },
  }),
}

export default function WorkGrid() {
  const [selectedCase, setSelectedCase] = useState<CaseStudy | null>(null)

  return (
    <>
      <div className={styles.grid}>
        {caseStudies.map((study, i) => (
          <motion.button
            key={study.id}
            className={styles.card}
            custom={i}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            onClick={() => setSelectedCase(study)}
            aria-label={`View case study: ${study.title}`}
          >
            <div className={styles.cardContent}>
              <div className={styles.cardTags}>
                {study.tags.slice(0, 2).map((tag) => (
                  <span key={tag} className={styles.cardTag}>
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className={styles.cardTitle}>{study.title}</h3>
              <p className={styles.cardDescription}>{study.description}</p>
            </div>
            <div className={styles.cardArrow}>
              <span>Read</span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M3 8H13M13 8L8.5 3.5M13 8L8.5 12.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </motion.button>
        ))}
      </div>

      <CaseModal caseStudy={selectedCase} onClose={() => setSelectedCase(null)} />
    </>
  )
}
