import Link from 'next/link'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getWritingBySlug, getAllWritingSlugs } from '@/app/data/writing'
import styles from './page.module.css'

type Props = { params: Promise<{ slug: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const writing = getWritingBySlug(slug)
  if (!writing) return { title: 'Not Found' }
  return { title: `${writing.title} — McCoy Ferguson` }
}

export async function generateStaticParams() {
  return getAllWritingSlugs().map((slug) => ({ slug }))
}

function EssayBody({ body }: { body: string }) {
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

export default async function WritingPage({ params }: Props) {
  const { slug } = await params
  const writing = getWritingBySlug(slug)
  if (!writing) notFound()

  return (
    <main className={styles.main}>
      <p className={styles.back}>
        <Link href="/">← Back</Link>
      </p>
      <article className={styles.article}>
        <h1 className={styles.title}>{writing.title}</h1>
        <EssayBody body={writing.body} />
      </article>
    </main>
  )
}
