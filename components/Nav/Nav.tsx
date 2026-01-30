'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import styles from './Nav.module.css'

const navItems = [
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export default function Nav() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <motion.nav
      className={`${styles.nav} ${isScrolled ? styles.scrolled : ''}`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className={styles.container}>
        <a href="#" className={styles.logo} aria-label="Wesley McCoy Ferguson - Home">
          Wesley McCoy Ferguson
        </a>

        <ul className={styles.links} role="list">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className={styles.link}
                onClick={(e) => handleNavClick(e, item.href)}
              >
                <span className={styles.linkText}>{item.label}</span>
                <span className={styles.linkUnderline} aria-hidden="true" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </motion.nav>
  )
}
