'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import styles from './Contact.module.css'

const email = 'wesley@example.com'

export default function Contact() {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  return (
    <div className={styles.wrapper}>
      <p className={styles.intro}>
        Interested in working together or just want to chat about AI systems and product?
      </p>

      <div className={styles.links}>
        <a href={`mailto:${email}`} className={styles.emailLink}>
          <span className={styles.emailIcon}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path
                d="M3 5L10 10L17 5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <rect
                x="2"
                y="4"
                width="16"
                height="12"
                rx="2"
                stroke="currentColor"
                strokeWidth="1.5"
              />
            </svg>
          </span>
          <span>{email}</span>
        </a>

        <a
          href="https://linkedin.com/in/wesleymccoyferguson"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.socialLink}
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path
              d="M4.5 7.5V13.5M4.5 4.5V4.51M7.5 13.5V10.5C7.5 9.67157 8.17157 9 9 9C9.82843 9 10.5 9.67157 10.5 10.5V13.5M7.5 13.5V7.5M10.5 13.5V7.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <rect
              x="1.5"
              y="1.5"
              width="15"
              height="15"
              rx="2"
              stroke="currentColor"
              strokeWidth="1.5"
            />
          </svg>
          <span>LinkedIn</span>
        </a>

        <button className={styles.copyButton} onClick={handleCopy}>
          <AnimatePresence mode="wait">
            {copied ? (
              <motion.span
                key="copied"
                className={styles.copySuccess}
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.15 }}
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M3 8L6.5 11.5L13 4.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Copied
              </motion.span>
            ) : (
              <motion.span
                key="copy"
                className={styles.copyDefault}
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.15 }}
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <rect
                    x="5"
                    y="5"
                    width="9"
                    height="9"
                    rx="1.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M11 5V3.5C11 2.67157 10.3284 2 9.5 2H3.5C2.67157 2 2 2.67157 2 3.5V9.5C2 10.3284 2.67157 11 3.5 11H5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
                Copy email
              </motion.span>
            )}
          </AnimatePresence>
        </button>
      </div>

      <div className={styles.footer}>
        <span className={`${styles.footerText} mono`}>
          © {new Date().getFullYear()} Wesley McCoy Ferguson
        </span>
      </div>
    </div>
  )
}
