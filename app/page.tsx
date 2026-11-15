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
        <p><strong>About:</strong> I&apos;m the founder of <a href="https://www.wellhound.app" target="_blank" rel="noopener noreferrer">Wellhound</a>, an at-home preventive health company for dogs, and a fourth-year at UVA&apos;s McIntire School of Commerce (IT &amp; Finance concentrations), graduating May 2027.</p>
      </section>
      <section className={styles.section}>
        <p>I&apos;ve been starting businesses since I was 16. Wellhound is my 17th attempt and the first with funding, advisors, a team, and a lab partner. I write the specs, design the data, ship the code, and run the go-to-market myself, using AI as a working brain for all of it.</p>
      </section>
      <section className={styles.section}>
        <p>Looking for product roles starting in 2027 where I can build, test, and ship with real users.</p>
      </section>
      <section className={styles.section}>
        <p>Surfing. BJJ. Muay Thai. Snowboarding. Live music. Film.</p>
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
        <p><strong>Case studies & theses:</strong></p>
        {writingList.map((item) => (
          <p key={item.slug} className={styles.workItem}>
            <Link href={`/writing/${item.slug}`}>{item.title}</Link>
          </p>
        ))}
      </section>

      <section className={styles.section}>
        <p><strong>Connect:</strong> <a href="mailto:wesmccoy23@gmail.com">Email</a>, <a href="https://www.linkedin.com/in/mccoyferguson" target="_blank" rel="noopener noreferrer">LinkedIn</a>, <a href="https://github.com/airferg" target="_blank" rel="noopener noreferrer">GitHub</a>, <Link href="/resume">Resume</Link></p>
      </section>

      <footer className={styles.footer}>
        © {new Date().getFullYear()} Wesley McCoy Ferguson
      </footer>
    </main>
  )
}
