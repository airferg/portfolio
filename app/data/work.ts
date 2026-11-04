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
    company: 'Consumer fintech (formerly Hydra)',
    content: 'Plaid-connected rewards and savings autopilot. Validated, then killed when the numbers showed too little customer value.',
  },
  {
    id: 'carmax',
    title: 'CarMax Skye+',
    company: 'AI agent concept',
    content: 'Proposed an AI agent concept combining structured workflows with conversational flexibility. Designed flows for trade-in estimation, scheduling, and financing with human handoff triggers.',
  },
  {
    id: 'cville',
    title: 'City of Charlottesville x UVA ADU Design Library',
    company: 'Civic digital library',
    content: 'Led 20 user interviews, wrote the PRD, and built a full-stack MVP delivered to the City of Charlottesville.',
  },
] as const

export type WorkItem = (typeof work)[number]

export function getWorkBySlug(slug: string): WorkItem | undefined {
  return work.find((item) => item.id === slug)
}

export function getAllWorkSlugs(): string[] {
  return work.map((item) => item.id)
}
