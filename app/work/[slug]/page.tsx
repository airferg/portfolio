import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getWorkBySlug, getAllWorkSlugs } from '@/app/data/work'
import { getProjectContent } from '@/app/data/projectContent'
import styles from './page.module.css'

type Props = { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return getAllWorkSlugs().map((slug) => ({ slug }))
}

function SectionBody({ body }: { body: string }) {
  const paragraphs = body.split('\n\n').filter(Boolean)
  return (
    <>
      {paragraphs.map((para, i) => (
        <p key={i} className={styles.bodyPara}>
          {para.split('\n').map((line, j) => (
            <span key={j}>
              {j > 0 && <br />}
              {line}
            </span>
          ))}
        </p>
      ))}
    </>
  )
}

export default async function WorkPage({ params }: Props) {
  const { slug } = await params
  const project = getWorkBySlug(slug)
  const content = getProjectContent(slug)
  if (!project || !content) notFound()

  return (
    <main className={styles.main}>
      <p className={styles.back}>
        <Link href="/">← Back</Link>
      </p>
      <article className={styles.article}>
        <h1 className={styles.title}>{content.title}</h1>
        {content.subtitle && (
          <p className={styles.subtitle}>{content.subtitle}</p>
        )}
        {content.link && (
          <p className={styles.linkWrap}>
            <a href={content.link.url} target="_blank" rel="noopener noreferrer" className={styles.projectLink}>
              {content.link.label ?? content.link.url}
            </a>
          </p>
        )}
        {content.sections.map((section, i) => (
          <section key={i} className={styles.section}>
            <h2 className={styles.sectionTitle}>{section.heading}</h2>
            <SectionBody body={section.body} />
          </section>
        ))}
      </article>
    </main>
  )
}
