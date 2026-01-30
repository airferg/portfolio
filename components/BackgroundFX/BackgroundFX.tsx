'use client'

import { useEffect, useState, useCallback } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import styles from './BackgroundFX.module.css'

export default function BackgroundFX() {
  const [isHovering, setIsHovering] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  // Smooth spring animation for the glow
  const springConfig = { damping: 25, stiffness: 150 }
  const glowX = useSpring(mouseX, springConfig)
  const glowY = useSpring(mouseY, springConfig)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const handleMouseMove = useCallback((e: MouseEvent) => {
    mouseX.set(e.clientX)
    mouseY.set(e.clientY)
  }, [mouseX, mouseY])

  useEffect(() => {
    if (typeof window === 'undefined') return

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [handleMouseMove])

  if (!isMounted) return null

  return (
    <div className={styles.wrapper} aria-hidden="true">
      {/* Ambient gradient background */}
      <div className={styles.ambientGradient} />

      {/* Mouse-following glow */}
      <motion.div
        className={`${styles.glow} ${isHovering ? styles.glowIntense : ''}`}
        style={{
          x: glowX,
          y: glowY,
        }}
      />

      {/* Hidden hotspots that intensify glow on hover */}
      <div
        className={styles.hotspot}
        style={{ top: '20%', left: '10%' }}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      />
      <div
        className={styles.hotspot}
        style={{ top: '60%', right: '15%' }}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      />
      <div
        className={styles.hotspot}
        style={{ bottom: '25%', left: '40%' }}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      />
    </div>
  )
}
