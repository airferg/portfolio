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
        <p className={styles.contact}>
          <a href="https://www.wesmccoy.com/" target="_blank" rel="noopener noreferrer">wesmccoy.com</a>
          {' · '}
          <a href="https://www.linkedin.com/in/mccoyferguson" target="_blank" rel="noopener noreferrer">LinkedIn</a>
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
            B.S. in Commerce (Information Technology and Finance), Track in AI / Data Analytics, Engineering Business Minor
          </p>
          <p className={styles.coursework}>
            Relevant Coursework: Product & Project Management, Data Structures & Algorithms, New Product Development, Topics in Business Analytics — ML/AI with Python, Full-Stack Software Engineering
          </p>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Professional Experience</h2>

        <div className={styles.block}>
          <div className={styles.blockHead}>
            <span className={styles.org}>Hydra — Agentic Operating System for Early-Stage Founders</span>
            <span className={styles.date}>November 2025 – Present</span>
          </div>
          <p className={styles.role}>Product Engineer</p>
          <p className={styles.detail}>
            Built early MVP integrating 18 external services using React, TypeScript, Supabase, and Python to prototype an agentic operating system. Ran discovery and usability testing with 17 founders and product leaders, translating feedback into system architecture and feature roadmap. Led full stack development and product execution from prototype through MVP, coordinating architecture, testing, and iteration cycles.
          </p>
        </div>

        <div className={styles.block}>
          <div className={styles.blockHead}>
            <span className={styles.org}>City of Charlottesville x UVA McIntire — Affordable Housing Digital Library</span>
            <span className={styles.date}>January 2026 – Present</span>
          </div>
          <p className={styles.role}>Product Manager (Student)</p>
          <p className={styles.detail}>
            Conducted 20 interviews across 3 housing segments to define product requirements, producing 3 personas and 1 PRD that guided system design for city housing planners. Built full stack MVP using Next.js and Supabase, designing database schema, tagging, and manual search indexing to structure citywide housing blueprint library. Translated user research into product architecture adopted by the City of Charlottesville to support future affordable housing development.
          </p>
        </div>

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
            <span className={styles.org}>CarMax Skye+ — UVA McIntire Semester Project</span>
            <span className={styles.date}>October 2025 – December 2025</span>
          </div>
          <p className={styles.role}>Product Lead (Student)</p>
          <p className={styles.detail}>
            Led product strategy for AI financing platform with 5 person team, defining MVP and prioritizing 4 core features targeting Gen Z buyers. Built KPI and financial impact model projecting $70M NPV and 692% IRR to evaluate product viability. Designed go to market and experimentation plan forecasting 1306% ROI and presented product roadmap to executive stakeholders.
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
            Built comprehensive financial models adopted by management forecasting over $26M in annual revenue for a high growth startup, including 3-statement projections and ROI sensitivity analyses.
          </p>
          <p className={styles.detail}>
            Evaluated and presented strategic entry into the U.S. and South African markets to guide expansion and investor positioning.
          </p>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Skills</h2>
        <p className={styles.detail}>
          <strong>Product & Strategy:</strong> Product Discovery, Dual Track Agile, Roadmapping, Feature Prioritization, MVP Definition, User Research, Stakeholder Management, Product Lifecycle Management
        </p>
        <p className={styles.detail}>
          <strong>Technical Skills:</strong> JavaScript (React / TypeScript), Python (ML/AI), SQL, Data Modeling
        </p>
        <p className={styles.detail}>
          <strong>Personal interests:</strong> Sociology, Artificial Intelligence, Surfing, Snowboarding, Running, Travel, Pickleball
        </p>
      </section>

    </main>
  )
}
