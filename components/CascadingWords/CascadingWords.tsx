'use client'

import { motion } from 'framer-motion'
import styles from './CascadingWords.module.css'

const cascadingLines = [
  'animatio.....',
  'animatio....',
  'animati....',
  '......',
  'por.....',
  'port.....',
  'portfo.....',
  'portfolio......',
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.5,
    },
  },
}

// Create line variants with different final opacities
const createLineVariants = (index: number, total: number) => ({
  hidden: {
    opacity: 0,
    y: 12,
    filter: 'blur(6px)',
  },
  visible: {
    opacity: index === total - 1 ? 1 : 0.25 + (index / total) * 0.5,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
})

export default function CascadingWords() {
  return (
    <motion.div
      className={styles.wrapper}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      aria-label="Portfolio"
    >
      {cascadingLines.map((line, index) => (
        <motion.span
          key={index}
          className={`${styles.line} ${index === cascadingLines.length - 1 ? styles.final : ''}`}
          variants={createLineVariants(index, cascadingLines.length)}
        >
          {line}
        </motion.span>
      ))}
    </motion.div>
  )
}
