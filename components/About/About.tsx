'use client'

import { motion } from 'framer-motion'
import styles from './About.module.css'

const tools = [
  { name: 'Next.js', icon: '▲' },
  { name: 'TypeScript', icon: 'TS' },
  { name: 'Python', icon: 'Py' },
  { name: 'SQL', icon: 'DB' },
  { name: 'Framer', icon: '◈' },
  { name: 'Figma', icon: '◉' },
  { name: 'JIRA', icon: '▣' },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
    },
  },
}

export default function About() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <p className={styles.bio}>
          I&apos;m a Commerce student at the University of Virginia, concentrating in IT and focused on AI applications. I build products that solve real problems—from agentic systems for founders to civic tech for local government.
        </p>
        <p className={styles.bio}>
          My approach: understand the system, define the metrics, ship fast, and iterate. I care about adoption as much as architecture—a product that nobody uses isn&apos;t a product.
        </p>
      </div>

      <div className={styles.toolbox}>
        <span className={`${styles.toolboxLabel} mono`}>Toolbox</span>
        <motion.div
          className={styles.tools}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {tools.map((tool) => (
            <motion.div key={tool.name} className={styles.tool} variants={itemVariants}>
              <span className={styles.toolIcon}>{tool.icon}</span>
              <span className={styles.toolName}>{tool.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
