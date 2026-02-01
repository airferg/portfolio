import Link from 'next/link'
import type { Metadata } from 'next'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Resume — McCoy Ferguson',
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
          Richmond, VA · (804) 380-9149 · <a href="mailto:wesmccoy23@gmail.com">wesmccoy23@gmail.com</a>
        </p>
      </header>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Education</h2>
        <div className={styles.block}>
          <div className={styles.blockHead}>
            <span className={styles.org}>University of Virginia — McIntire School of Commerce</span>
            <span className={styles.date}>May 2027 (Expected)</span>
          </div>
          <p className={styles.location}>Charlottesville, Virginia</p>
          <p className={styles.detail}>
            B.S. in Commerce, Double Concentration in Information Technology and Finance, Tracks in AI/Data Analytics and Tech Entrepreneurship · 
          </p>
          <p className={styles.coursework}>
            Relevant Coursework: Product & Project Management, Data Structures & Algorithms, Strategy and Systems Design, Quantitative & Financial Modeling, Management Decision Making, Product Innovation, AI and Data Analytics Applications
          </p>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Product and Technical Experience</h2>

        <div className={styles.block}>
          <div className={styles.blockHead}>
            <span className={styles.org}>Hydra — Agentic Operating System for Early-Stage Founders</span>
            <span className={styles.date}>November 2025 – Present</span>
          </div>
          <p className={styles.role}>Co-founder & Product Lead</p>
          <p className={styles.detail}>
            Owned product management and development for an AI-native, agentic operating system; defined product requirements, MVP scope, and roadmap using NLP, data structures, and ML-assisted decision logic. Designed system architecture and data models; prioritized features through user research, experimentation, and stakeholder feedback, shipping TypeScript-based integrations to improve onboarding and activation.
          </p>
        </div>

        <div className={styles.block}>
          <div className={styles.blockHead}>
            <span className={styles.org}>City of Charlottesville x UVA McIntire — Affordable Housing Digital Library</span>
            <span className={styles.date}>January 2026 – Present</span>
          </div>
          <p className={styles.role}>Product Manager</p>
          <p className={styles.detail}>
            Leading product discovery and MVP definition for a digital library enabling city planners and developers to access complex architectural schematics; coordinating stakeholder requirements across city officials, architects, developers, and residents, and translating user research into information architecture, workflows, and launch requirements.
          </p>
        </div>

        <div className={styles.block}>
          <div className={styles.blockHead}>
            <span className={styles.org}>CarMax Skye+ — UVA McIntire Semester Project</span>
            <span className={styles.date}>October 2025 – December 2025</span>
          </div>
          <p className={styles.role}>Product Lead</p>
          <p className={styles.detail}>
            Led dual-track agile product strategy, translating empathy research into product requirements, personas, empathy maps, and MVP priorities for an AI-driven financing system, defining metrics and tradeoffs with CarMax executive board and stakeholders.
          </p>
        </div>

        <div className={styles.block}>
          <div className={styles.blockHead}>
            <span className={styles.org}>CHZL — Mobile Productivity App</span>
            <span className={styles.date}>July 2025 – October 2025</span>
          </div>
          <p className={styles.role}>Product Lead and Developer</p>
          <p className={styles.detail}>
            Built and launched a React Native MVP, owning end-to-end product lifecycle from user research and feature prioritization to implementation, onboarding, and early GTM experiments; applied data structures and usage metrics to iterate on engagement and monetization.
          </p>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Professional Experience</h2>

        <div className={styles.block}>
          <div className={styles.blockHead}>
            <span className={styles.org}>Blockchain @ UVA Investment Fund</span>
            <span className={styles.date}>October 2025 – Present</span>
          </div>
          <p className={styles.location}>Charlottesville, Virginia</p>
          <p className={styles.role}>Investment Associate</p>
          <p className={styles.detail}>
            Conduct technical and product analysis of Web3 protocols and crypto startups, evaluating on-chain data, token economics, protocol architecture, and incentive mechanisms to inform real-money investment decisions across a $300K portfolio.
          </p>
        </div>

        <div className={styles.block}>
          <div className={styles.blockHead}>
            <span className={styles.org}>Vesterai</span>
            <span className={styles.date}>September 2025 – November 2025</span>
          </div>
          <p className={styles.location}>Boston, Massachusetts</p>
          <p className={styles.role}>Product Strategy Intern</p>
          <p className={styles.detail}>
            Supported product and go-to-market strategy for an AI-driven fintech platform by building financial and unit economics models, analyzing competitive products, and evaluating pricing, onboarding, and distribution tradeoffs used in investor and roadmap discussions with founders.
          </p>
        </div>

        <div className={styles.block}>
          <div className={styles.blockHead}>
            <span className={styles.org}>Fifty Knots Venture Capital</span>
            <span className={styles.date}>May 2024 – July 2024</span>
          </div>
          <p className={styles.location}>Cape Town, South Africa</p>
          <p className={styles.role}>Venture Capital Analyst Intern</p>
          <p className={styles.detail}>
            Built comprehensive financial models adopted by management forecasting over $26M in annual revenue for a high growth startup, including 3-statement projections and ROI sensitivity analyses; evaluated and presented strategic entry into the U.S. and South African markets to guide expansion and investor positioning.
          </p>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Skills</h2>
        <p className={styles.detail}>
          <strong>Product & Strategy:</strong> Product Discovery, Dual Track Agile, Roadmapping, Feature Prioritization, MVP Definition, User Research, Stakeholder Management, Product Lifecycle Management
        </p>
        <p className={styles.detail}>
          <strong>Technical:</strong> JavaScript, Python, SQL, Data Modeling, System Design Fundamentals, Machine Learning
        </p>
        <p className={styles.detail}>
          <strong>Personal interests:</strong> Product, Startups, Sociology, Artificial Intelligence, Surfing, Snowboarding, Running
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Certifications</h2>
        <ul className={styles.list}>
          <li>AI For Everyone, DeepLearning — November 2024</li>
          <li>Full Stack Software Engineer, Codecademy — April 2024</li>
          <li>CS50x, Harvard — November 2023</li>
        </ul>
      </section>
    </main>
  )
}
