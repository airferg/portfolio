export type ProjectSection = { heading: string; body: string }

export type ProjectContent = {
  title: string
  subtitle?: string
  link?: { url: string; label?: string }
  sections: ProjectSection[]
}

const hydra: ProjectContent = {
  title: 'HYDRA',
  subtitle: 'Agentic Operating System for Early Stage Founders',
  link: { url: 'https://hydra-ops.vercel.app/', label: 'View MVP' },
  sections: [
    {
      heading: 'Overview',
      body: 'Hydra is an AI native operating system designed to help early stage founders turn ambiguous goals, fragmented tools, and noisy advice into clear, executable startup workflows. The core problem I wanted to solve was not organization, but decision paralysis.\n\nI led product discovery, system design, and MVP development end to end.',
    },
    {
      heading: 'Problem',
      body: 'Early stage founders are overwhelmed by decisions rather than tasks. Most tools focus on organization or documentation, but founders struggle upstream: what should I do next, and why.\n\nThrough conversations with founders and PMs, I found three recurring pain points:\n\n• Too many tools with no decision logic connecting them\n• Advice is generic and not contextual to the founder\'s stage\n• Roadmaps break down when uncertainty is high and data is incomplete\n\nExisting solutions optimized for tracking, not thinking.',
    },
    {
      heading: 'Discovery & Insights',
      body: 'I conducted over 15 empathy interviews with founders and product managers across different stages. I focused on:\n\n• How decisions were made under uncertainty\n• What information founders trusted\n• Where momentum broke down\n\nKey insight: founders didn\'t want another dashboard. They wanted a thinking partner that could synthesize inputs and suggest direction while preserving human judgment.\n\nThis reframed Hydra from a productivity tool into an agentic decision system.',
    },
    {
      heading: 'Product Approach',
      body: 'I defined the MVP around three principles:\n\n• Context first: the system should understand the founder\'s skills, network, capital, and constraints\n• Decision support, not automation: recommendations over actions\n• Modular architecture: integrate with tools founders already use\n\nI translated these principles into product requirements, roadmap priorities, and success metrics focused on activation and clarity rather than raw usage.',
    },
    {
      heading: 'System & Architecture (High Level)',
      body: 'Hydra\'s system design centered around:\n\n• Structured user inputs mapped into internal data models\n• NLP based parsing of goals and constraints\n• Rule based and ML assisted logic to generate roadmap suggestions\n• A modular integration layer built in TypeScript to connect external tools\n\nI made explicit tradeoffs to keep the system explainable rather than over automated at this stage.',
    },
    {
      heading: 'Outcome & Learnings',
      body: 'I shipped a working MVP with core integrations and onboarding logic, validated through founder walkthroughs and feedback loops. Early signals showed improved clarity and faster initial momentum, though long term retention remains an open question.\n\nThe biggest learning was that decision products live or die by trust, not features. Transparency in logic mattered more than sophistication.',
    },
    {
      heading: "What I'd Do Next",
      body: '• Add feedback loops to measure recommendation quality\n• Introduce lightweight metrics to track decision confidence\n• Explore hybrid human in the loop workflows for higher stakes decisions',
    },
  ],
}

const carmax: ProjectContent = {
  title: 'CarMax Skye+',
  subtitle: 'Autonomous AI Agent Concept (ICE Capstone Project)',
  link: { url: 'https://drive.google.com/file/d/1FQchxPprIEfUBola5YQ87dS4wsq2nkki/view?usp=sharing', label: 'Project deck' },
  sections: [
    {
      heading: 'Overview',
      body: 'Skye+ was a cross functional capstone project with CarMax focused on improving the car buying and financing experience for younger, budget conscious customers. While the project spanned product, marketing, and finance, I led product strategy and discovery.',
    },
    {
      heading: 'Problem',
      body: 'Gen Z and younger buyers found the car buying process opaque, stressful, and financially intimidating. Interviews revealed confusion around:\n\n• Tradeoffs between financing options\n• Long term cost implications\n• Trust in recommendations\n\nCarMax wanted to explore whether an AI agent could guide customers through decisions without overwhelming them.',
    },
    {
      heading: 'Discovery & Research',
      body: 'I led user research through empathy interviews and synthesized insights into personas and journey maps. A key insight was that users didn\'t want more information. They wanted confidence.\n\nThis shifted the solution away from static tools toward an interactive agent that could adapt recommendations based on user priorities and constraints.',
    },
    {
      heading: 'Product Strategy',
      body: 'I applied dual track agile to separate discovery from delivery. My focus was on:\n\n• Defining MVP scope\n• Prioritizing features based on user value and feasibility\n• Establishing success metrics around clarity and decision completion\n\nI worked closely with teammates to align product decisions with marketing positioning and financial viability.',
    },
    {
      heading: 'Solution',
      body: 'Skye+ was designed as an autonomous AI agent that:\n\n• Collected user constraints and preferences\n• Modeled tradeoffs across price, financing, and ownership costs\n• Delivered explainable recommendations in plain language\n\nI created low fidelity prototypes and experience flows in Miro and Figma to test assumptions before finalizing the concept.',
    },
    {
      heading: 'Outcome & Learnings',
      body: 'The final concept was pitched to CarMax executives and received strong feedback around clarity and customer empathy. The biggest takeaway was how critical explainability is when AI intersects with financial decisions.',
    },
    {
      heading: "What I'd Do Next",
      body: '• Pilot the agent with a limited customer segment\n• Instrument decision points to measure drop off and confidence\n• Explore deeper personalization through historical behavior',
    },
  ],
}

const cville: ProjectContent = {
  title: 'Charlottesville ADU Digital Library',
  subtitle: 'Affordable Housing Infrastructure Project',
  sections: [
    {
      heading: 'Overview',
      body: 'This project is an ongoing collaboration between the City of Charlottesville, UVA Architecture, and a product management class. The goal is to build a digital library for ADU (Accessory Dwelling Unit) designs that supports city planners, developers, and residents.\n\nI am responsible for product framing, stakeholder analysis, and solution definition.',
    },
    {
      heading: 'Problem',
      body: 'Charlottesville faces an affordability crisis driven by rising housing costs and limited supply. The city identified ADUs as a potential solution, but the process to design, approve, and build them was fragmented and inaccessible.\n\nArchitectural designs existed, but there was no usable system to store, navigate, or apply them across stakeholders.',
    },
    {
      heading: 'Stakeholders & Constraints',
      body: 'This project involved complex stakeholder dynamics:\n\n• Lower income families and renters\n• Homeowners and landowners\n• Architects and builders\n• City planners and regulators\n\nEach group had different incentives, access levels, and technical literacy.',
    },
    {
      heading: 'Product Discovery',
      body: 'I focused on understanding:\n\n• How non technical users access housing information\n• Where friction occurred in approval and construction workflows\n• What information needed to be standardized versus flexible\n\nInterviews revealed that accessibility and clarity mattered more than feature richness.',
    },
    {
      heading: 'Solution Concept',
      body: 'The proposed solution is a digital library that:\n\n• Centralizes ADU schematics and metadata\n• Supports different user views depending on role\n• Balances flexibility with regulatory constraints\n\nRather than building a complex platform, the emphasis was on usability, governance, and long term maintainability.',
    },
    {
      heading: 'Learnings',
      body: 'This project reinforced how product management changes when:\n\n• Outcomes affect real people, not just users\n• Constraints are political and regulatory\n• Success depends on adoption across institutions',
    },
    {
      heading: "What I'd Do Next",
      body: '• Test early prototypes with city planners and residents\n• Define ownership and update workflows for long term viability\n• Explore integration with permitting systems',
    },
  ],
}

const contentBySlug: Record<string, ProjectContent> = {
  hydra,
  carmax,
  cville,
}

export function getProjectContent(slug: string): ProjectContent | undefined {
  return contentBySlug[slug]
}
