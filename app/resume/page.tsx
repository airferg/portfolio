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
    org: 'Wellhound (at-home preventive dog health platform, UVA Darden Accelerator)',
    date: 'Jun 2026 – Present',
    role: 'Founder & Product Lead',
    location: 'Charlottesville, VA',
    bullets: [
      'Founded and lead a 4-person team building at-home preventive blood screening for dogs; secured a $5K UVA Darden grant, recruited veterinary advisors, and sourced a licensed lab partner for at-home draws.',
      'Interviewed 30 dog owners and 10 veterinarians; translated customer feedback into a pivot from mail-in urine kits to in-home blood testing.',
      'Wrote PRDs and acceptance criteria, designed the PostgreSQL data model, and shipped signup, Stripe payments, blood draw booking, vet-reviewed lab results, and an AI care assistant, reviewing every Claude Code pull request against spec before merge (100+ PRs).',
      'Built a model-routed AI assistant: Claude Haiku for routine queries, Sonnet for tool-using workflows; ~75% of requests route to Haiku, cutting estimated inference cost ~50%.',
      'Built AI persona agents that ran signup and checkout end to end, catching 96 pre-launch defects, including 3 critical billing errors (out-of-area overcharges, vet payouts on refunded consults).',
      'Built a 60-month cohort model to set pricing; found add-ons losing up to $55 per sale and repriced them to breakeven.',
      'Launched a landing-page hero A/B test (PostHog) and a live Stripe deposit flow to measure signup and deposit conversion for the Charlottesville beta.',
    ],
  },
  {
    org: 'Vantage Financial Technologies (consumer fintech, UVA Darden Accelerator)',
    date: 'Dec 2025 – May 2026',
    role: 'Co-Founder & Head of Product',
    location: 'Charlottesville, VA',
    bullets: [
      'Built a Plaid-connected fintech prototype analyzing linked bank transactions to surface missed rewards and savings opportunities for each user.',
      'Interviewed 40 potential users and analyzed 122 loyalty and savings programs; found the product could save a typical user only $9–$11 per month against a $25 target.',
      'Recommended discontinuing the product after financial validation showed insufficient customer value.',
    ],
  },
  {
    org: 'Affordable Housing Digital Library (UVA client project for the City of Charlottesville)',
    date: 'Jan 2026 – Mar 2026',
    role: 'Product Engineer',
    location: 'Charlottesville, VA',
    bullets: [
      'Led 20 user interviews, authored the PRD, and developed a full-stack MVP delivered to the City of Charlottesville.',
    ],
  },
  {
    org: 'Vester (crypto analytics startup)',
    date: 'Oct 2025 – Nov 2025',
    role: 'Product Strategy Intern',
    location: 'Remote',
    bullets: [
      'Analyzed 9 competing crypto analytics platforms to identify an underserved segment that informed product positioning.',
    ],
  },
]

const projects: Job[] = [
  {
    org: 'Rumil (personal AI memory app for macOS, creator)',
    date: 'Nov 2026 – Present',
    role: '',
    bullets: [
      'Eliminated re-explaining personal context to each AI by shipping a local-first macOS app that gives Claude, ChatGPT, and Perplexity one reference-linked knowledge base over MCP.',
      'Cut each assistant\'s per-session memory overhead ~70% (1,900 to 600 tokens) by designing a retrieval router that resolves names on-device and returns only the relevant lines.',
      'Closed a credential-leak risk found in testing by adding secret redaction and limiting internet access to memory tools only.',
    ],
  },
  {
    org: 'FYPquiz (AI study app, founder & developer)',
    date: 'May 2025 – Jun 2025',
    role: '',
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
      {job.role && <p className={styles.role}>{job.role}</p>}
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
        <p className={styles.headline}>Product Builder</p>
        <p className={styles.contact}>
          Charlottesville, VA · Open to relocating after May 2027 graduation · (804) 380-9149 · <a href="mailto:wesmccoy23@gmail.com">wesmccoy23@gmail.com</a>
        </p>
        <p className={styles.contact}>
          <a href="https://www.linkedin.com/in/mccoyferguson" target="_blank" rel="noopener noreferrer">linkedin.com/in/mccoyferguson</a>
          {' · '}
          <a href="https://github.com/airferg" target="_blank" rel="noopener noreferrer">github.com/airferg</a>
          {' · '}
          <a href="https://www.wesmccoy.com/" target="_blank" rel="noopener noreferrer">wesmccoy.com</a>
        </p>
      </header>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Education</h2>
        <div className={styles.block}>
          <div className={styles.blockHead}>
            <span className={styles.org}>University of Virginia, McIntire School of Commerce, Charlottesville, VA</span>
            <span className={styles.date}>May 2027</span>
          </div>
          <p className={styles.detail}>
            B.S. Commerce, IT &amp; Finance Concentrations
          </p>
          <p className={styles.coursework}>
            Relevant Coursework: AI Product Management, New Product Development, Data Management for Decision Making (SQL, data modeling), Intermediate Investments
          </p>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Experience</h2>
        {experience.map((job) => <Entry key={job.org} job={job} />)}
        <p className={styles.additional}>
          <strong>Additional experience:</strong> Financial Sales Intern, Davenport &amp; Company, Richmond, VA (2025); Venture Capital Analyst Intern, Fifty Knots, Cape Town, South Africa (2024)
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Projects</h2>
        {projects.map((job) => <Entry key={job.org} job={job} />)}
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Skills</h2>
        <p className={styles.detail}>
          <strong>AI:</strong> Claude Code, Claude API, MCP servers, model routing, retrieval, AI agent testing
        </p>
        <p className={styles.detail}>
          <strong>Engineering &amp; Data:</strong> TypeScript, Python, Next.js, SQL, PostgreSQL (Supabase, row-level security), data modeling (ERD), REST APIs and webhooks (Stripe, Plaid), Swift/SwiftUI, Power BI, PostHog, Figma
        </p>
        <p className={styles.detail}>
          <strong>Product:</strong> PRDs, customer discovery, roadmap prioritization, A/B testing, go-to-market, pricing, unit economics, financial modeling
        </p>
      </section>
    </main>
  )
}
