import Image from 'next/image'
import Link from 'next/link'
import { work } from '@/app/data/work'
import { writingList } from '@/app/data/writing'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <div className={styles.headerLeft}>
          <Image
            src="/AI-headshot.png"
            alt="McCoy Ferguson"
            width={48}
            height={48}
            className={styles.avatar}
            priority
          />
          <h1 className={styles.brand}>McCoy Ferguson</h1>
        </div>
        <a href="mailto:wesmccoy23@gmail.com" className={styles.headerLink}>Email</a>
      </header>

      <section className={styles.section}>
        <p><strong>About:</strong> I&apos;m a student at the University of Virginia, majoring in Commerce with concentrations in Finance and IT, tracks in AI/Data Analytics, and a minor in Computer Science. Searching for PM programs for Summer 2026.</p>
      </section>
      <section className={styles.section}>
        <p>Surfing. Muay Thai. BJJ. Film. AI. Currently building Hydra.</p>
      </section>

      <section className={styles.section}>
        <p><strong>Selected work:</strong></p>
        {work.map((item) => (
          <p key={item.id} className={styles.workItem}>
            <Link href={`/work/${item.id}`}>{item.title}</Link>
          </p>
        ))}
      </section>

      <section className={styles.section}>
        <p><strong>Systems & Thinking:</strong></p>
        {writingList.map((item) => (
          <p key={item.slug} className={styles.workItem}>
            <Link href={`/writing/${item.slug}`}>{item.title}</Link>
          </p>
        ))}
      </section>

      <section className={styles.section}>
        <p><strong>Connect:</strong> <a href="mailto:wesmccoy23@gmail.com">Email</a>, <a href="https://www.linkedin.com/in/mccoyferguson" target="_blank" rel="noopener noreferrer">LinkedIn</a>, <Link href="/resume">Resume</Link></p>
      </section>

      <footer className={styles.footer}>
        © {new Date().getFullYear()} Wesley McCoy Ferguson
      </footer>
    </main>
  )
}
