'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import styles from './Section.module.css'

interface SectionProps {
  id: string
  label?: string
  title?: string
  children: React.ReactNode
  className?: string
}

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
}

export default function Section({ id, label, title, children, className = '' }: SectionProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <motion.section
      ref={ref}
      id={id}
      className={`${styles.section} ${className}`}
      variants={sectionVariants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
    >
      <div className={styles.container}>
        {(label || title) && (
          <div className={styles.header}>
            {label && <span className={`${styles.label} mono`}>{label}</span>}
            {title && <h2 className={styles.title}>{title}</h2>}
          </div>
        )}
        <div className={styles.content}>{children}</div>
      </div>
    </motion.section>
  )
}
