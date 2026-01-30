'use client'

import { motion } from 'framer-motion'
import CascadingWords from '../CascadingWords/CascadingWords'
import styles from './Hero.module.css'

const chips = ['AI Systems', 'Product Discovery', 'TypeScript / React Native']

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
}

export default function Hero() {
  const handleViewWork = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const element = document.querySelector('#work')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className={styles.hero} id="hero">
      <div className={styles.container}>
        <motion.div
          className={styles.content}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className={styles.statusPill} variants={itemVariants}>
            <span className={styles.statusDot} aria-hidden="true" />
            <span>Based in Virginia • Open to SF APM roles</span>
          </motion.div>

          <motion.h1 className={styles.headline} variants={itemVariants}>
            Product + AI Builder
          </motion.h1>

          <motion.p className={styles.subheadline} variants={itemVariants}>
            I build AI-enabled products, ship MVPs, and obsess over systems, workflows, and adoption.
          </motion.p>

          <motion.div className={styles.chips} variants={itemVariants}>
            {chips.map((chip) => (
              <span key={chip} className={styles.chip}>
                {chip}
              </span>
            ))}
          </motion.div>

          <motion.div className={styles.cta} variants={itemVariants}>
            <a href="#work" className={styles.ctaButton} onClick={handleViewWork}>
              View Work
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
            </a>
            <a href="/resume.pdf" className={styles.secondaryLink}>
              Resume (PDF)
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className={styles.cascading}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <CascadingWords />
        </motion.div>
      </div>
    </section>
  )
}
