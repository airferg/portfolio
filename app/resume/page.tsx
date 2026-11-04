import Link from 'next/link'
import type { Metadata } from 'next'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Resume | McCoy Ferguson',
}

type Job = {
  org: string
  date: string
  role: string
  location?: string
  bullets: string[]
}

const experience: Job[] = [
  {
    org: 'Wellhound (at-home preventive dog health, UVA Darden i.Lab)',
    date: 'June 2026 – Present',
    role: 'Founder & Product Lead',
    location: 'Charlottesville, Virginia',
    bullets: [
      'Owned product specs, database design, and full-stack development of signup, payments, blood draw booking, vet-reviewed lab results, and an AI care assistant across 100+ pull requests.',
      'Interviewed 30 dog owners and 10 veterinarians; translated customer feedback into a pivot from mail-in urine kits to in-home blood testing.',
      'Architected a model-routed AI assistant using Claude Haiku for routine queries and Sonnet for complex, tool-using workflows; ~75% of requests route to Haiku, reducing estimated inference costs ~50%.',
      'Developed AI customer-testing agents grounded in real dog-owner reviews to identify 96 pre-launch defects and improve simulated checkout completion by 20 percentage points.',
      'Engineered a reference-linked knowledge base consolidating Slack, Notion, advisor feedback, and product documentation into structured Markdown context for AI development workflows.',
      'Led a 4-person team preparing a paid November 2026 Charlottesville beta; secured a $5K UVA Darden grant and recruited veterinary advisors to develop testing panels.',
    ],
  },
  {
    org: 'Vantage Financial Technologies (consumer fintech, UVA Darden i.Lab)',
    date: 'December 2025 – May 2026',
    role: 'Co-Founder & Head of Product',
    location: 'Charlottesville, Virginia',
    bullets: [
      'Built a Plaid-connected fintech prototype analyzing linked bank transactions to identify missed rewards, savings opportunities, and personalized financial recommendations.',
      'Interviewed 40 potential users and analyzed 122 loyalty and savings programs; found the product could save a typical user only $9–$11 per month against a $25 target.',
      'Recommended discontinuing the consumer product after financial validation revealed insufficient customer value, avoiding further investment in an unviable offering.',
    ],
  },
  {
    org: 'Vester (crypto analytics startup)',
    date: 'October 2025 – November 2025',
    role: 'Product Strategy Intern',
    location: 'Remote',
    bullets: [
      'Analyzed 9 competing crypto analytics platforms across product features, identifying an underserved market opportunity that informed product positioning.',
    ],
  },
  {
    org: 'Davenport & Company (wealth management)',
    date: 'June 2025 – August 2025',
    role: 'Financial Sales Intern',
    location: 'Richmond, Virginia',
    bullets: [
      'Supported a $500M+ AUM wealth management practice serving 80 high-net-worth clients by digitizing client records and gaining exposure to financial services operations.',
    ],
  },
  {
    org: 'Fifty Knots (pre-seed and seed venture capital)',
    date: 'May 2024 – July 2024',
    role: 'Venture Capital Analyst Intern',
    location: 'Cape Town, South Africa',
    bullets: [
      'Developed subscription pricing for a portfolio company selling to retailers, modeling per-store monthly fees and volume-based discounts.',
    ],
  },
]

const projects: Job[] = [
  {
    org: 'Affordable Housing Digital Library (UVA & City of Charlottesville)',
    date: 'January 2026 – March 2026',
    role: 'Product Engineer',
    bullets: [
      'Led 20 user interviews, authored the PRD, and developed a full-stack MVP delivered to the City of Charlottesville.',
    ],
  },
  {
    org: 'FYPquiz (AI study app)',
    date: 'May 2025 – June 2025',
    role: 'Founder & Developer',
    bullets: [
      'Built and launched an AI study app using Next.js, OpenAI, and Supabase; acquired 100 users and generated 20K impressions in 30 days.',
    ],
  },
]

function Entry({ job }: { job: Job }) {
  return (
    <div className={styles.block}>
      <div className={styles.blockHead}>
        <span className={styles.org}>{job.org}</span>
        <span className={styles.date}>{job.date}</span>
      </div>
      {job.location && <p className={styles.location}>{job.location}</p>}
      <p className={styles.role}>{job.role}</p>
      {job.bullets.map((b, i) => (
        <p key={i} className={styles.detail}>{b}</p>
      ))}
    </div>
  )
}

export default function ResumePage() {
  return (
    <main className={styles.main}>
      <p className={styles.back}>
        <Link href="/">← Back</Link>
      </p>

      <header className={styles.header}>
        <h1 className={styles.name}>Wesley McCoy Ferguson</h1>
        <p className={styles.contact}>
          Charlottesville, VA · (804) 380-9149 · <a href="mailto:wesmccoy23@gmail.com">wesmccoy23@gmail.com</a>
        </p>
        <p className={styles.contact}>
          <a href="https://www.wesmccoy.com/" target="_blank" rel="noopener noreferrer">wesmccoy.com</a>
          {' · '}
          <a href="https://www.linkedin.com/in/mccoyferguson" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          {' · '}
          <a href="https://github.com/airferg" target="_blank" rel="noopener noreferrer">GitHub</a>
        </p>
      </header>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Education</h2>
        <div className={styles.block}>
          <div className={styles.blockHead}>
            <span className={styles.org}>University of Virginia, McIntire School of Commerce</span>
            <span className={styles.date}>May 2027 (Expected)</span>
          </div>
          <p className={styles.location}>Charlottesville, Virginia</p>
          <p className={styles.detail}>
            B.S. Commerce, IT &amp; Finance and AI &amp; Data Analytics Concentrations, Engineering Business Minor
          </p>
          <p className={styles.coursework}>
            Relevant Coursework: AI Product Management, Data Management for Decision Making (SQL), Intermediate Investments, New Product Development
          </p>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Experience</h2>
        {experience.map((job) => <Entry key={job.org} job={job} />)}
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Projects</h2>
        {projects.map((job) => <Entry key={job.org} job={job} />)}
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Skills</h2>
        <p className={styles.detail}>
          <strong>AI:</strong> Multi-agent workflows, context engineering, LLM evaluation, model routing, synthetic user testing, Claude API
        </p>
        <p className={styles.detail}>
          <strong>Engineering &amp; Data:</strong> TypeScript, Python, SQL (SQL Server, MySQL), R, Power BI, Next.js, Swift/SwiftUI, Supabase, Stripe, Plaid API, PostHog, Figma
        </p>
        <p className={styles.detail}>
          <strong>Product:</strong> PRDs, customer discovery, roadmap prioritization, experimentation, pricing, unit economics, financial modeling
        </p>
        <p className={styles.detail}>
          <strong>Interests:</strong> Surfing, BJJ, Muay Thai, Snowboarding, Live Music, Film
        </p>
      </section>
    </main>
  )
}
