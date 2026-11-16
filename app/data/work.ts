export const work = [
  {
    id: 'wellhound',
    title: 'Wellhound',
    company: 'At-home preventive dog health',
    content: 'Founder and product lead. In-home blood draws, vet-reviewed results, and an AI care assistant built on each dog\'s own baseline.',
  },
  {
    id: 'vantage',
    title: 'Vantage',
    company: 'Consumer fintech',
    content: 'Plaid-connected rewards and savings autopilot. Validated, then killed when the numbers showed too little customer value.',
  },
  {
    id: 'rumil',
    title: 'Rumil',
    company: 'Personal AI memory for macOS',
    content: 'One local memory shared by Claude, ChatGPT, and Perplexity, built from my email, messages, notes, calendar, and past AI chats.',
  },
  {
    id: 'fypquiz',
    title: 'FYPquiz',
    company: 'AI study app',
    content: 'TikTok-style AI quizzes from your study material. 100 users and 20K impressions in 30 days.',
  },
] as const

export type WorkItem = (typeof work)[number]

export function getWorkBySlug(slug: string): WorkItem | undefined {
  return work.find((item) => item.id === slug)
}

export function getAllWorkSlugs(): string[] {
  return work.map((item) => item.id)
}
