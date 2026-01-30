export const work = [
  {
    id: 'hydra',
    title: 'Hydra',
    company: 'Agentic OS for founders',
    content: 'Designed a unified agent framework that breaks down high-level goals into executable subtasks. Built task orchestration that delegates to specialized agents while maintaining context across sessions.',
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
    content: 'Built a searchable document repository with metadata extraction and entity recognition. Indexed 2,400+ planning documents for the Architecture Review Board.',
  },
] as const

export type WorkItem = (typeof work)[number]

export function getWorkBySlug(slug: string): WorkItem | undefined {
  return work.find((item) => item.id === slug)
}

export function getAllWorkSlugs(): string[] {
  return work.map((item) => item.id)
}
