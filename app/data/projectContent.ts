export type ProjectSection = { heading: string; body: string }

export type ProjectContent = {
  title: string
  subtitle?: string
  link?: { url: string; label?: string }
  sections: ProjectSection[]
}

const wellhound: ProjectContent = {
  title: 'Wellhound',
  subtitle: 'At-Home Preventive Dog Health (UVA Darden i.Lab)',
  link: { url: 'https://www.wellhound.app', label: 'wellhound.app' },
  sections: [
    {
      heading: 'Overview',
      body: 'Wellhound brings preventive blood work to a dog\'s home. A licensed technician draws blood at the owner\'s door, a partner reference lab runs the panel, a veterinarian reviews the results, and the owner gets a care plan plus an AI assistant that knows their dog\'s history.\n\nI\'m the founder and product lead. I wrote the PRD, ERD, and data flows, designed the database, and built most of the app myself across 100+ pull requests.',
    },
    {
      heading: 'Problem',
      body: 'Dogs hide illness. Owners read early signs as aging, and most disease gets caught late, at the point where it is expensive or untreatable. Annual vet visits are a snapshot, and nobody wants to go to the vet more often.\n\nWhat owners told me they want: keeping their dog healthy for longer, at home, at a price that makes sense, with a verified opinion and no extra hassle.',
    },
    {
      heading: 'Discovery & Pivot',
      body: 'I interviewed 30 dog owners (senior-dog owners, at-risk breeds, new owners, and owners who had lost a dog to something found late) and 10 veterinarians.\n\nThe first version was a quarterly mail-in urine and fecal kit. Vets were consistent: blood is where the diagnostic value is. That feedback drove the pivot from mail-in kits to in-home blood testing, with testing panels designed alongside a practicing veterinarian.',
    },
    {
      heading: 'Product',
      body: '• Signup, membership payments, and at-home blood draw booking\n• Results stored against each dog\'s own baseline, with plain-language explanations of every biomarker\n• Vet-reviewed care plans (AI drafts, the vet has the final say)\n• An AI care assistant grounded in the dog\'s record\n• Owners can invite their own vet to receive results and updates',
    },
    {
      heading: 'AI Systems',
      body: '• Model routing: Claude Haiku handles routine queries and Sonnet handles complex, tool-using workflows. About 75% of requests route to Haiku, cutting estimated inference cost by about 50%\n• Guardrails: the assistant is scoped away from giving veterinary advice and routes clinical questions to a vet\n• Synthetic customer testing: AI testing agents grounded in real dog-owner reviews found 96 pre-launch defects and raised simulated checkout completion by 20 percentage points\n• A reference-linked knowledge base that consolidates Slack, Notion, advisor feedback, and product docs into structured Markdown context for AI-assisted development',
    },
    {
      heading: 'Stack',
      body: 'Next.js (App Router, TypeScript), Supabase, Stripe, Resend, PostHog, Vercel, Claude API.',
    },
    {
      heading: 'Status',
      body: 'Won a $5K UVA Darden i.Lab grant. Recruited veterinary advisors, built a reference lab partnership, and led a 4-person team preparing a paid November 2026 beta in Charlottesville, Virginia.',
    },
    {
      heading: 'What I\'m Learning',
      body: '• Regulation shapes the product: who can draw blood, who can interpret it, and how a vet relationship is established decide the architecture before any feature does\n• Operations should be automated unless they literally can\'t be\n• The hardest open question is willingness to pay, which is exactly what the beta is built to test',
    },
  ],
}

const vantage: ProjectContent = {
  title: 'Vantage',
  subtitle: 'Consumer Fintech (UVA Darden i.Lab), formerly Hydra',
  sections: [
    {
      heading: 'Overview',
      body: 'Vantage started as Hydra, an agentic operating system for early-stage founders, and pivoted into consumer fintech: a Plaid-connected autopilot that analyzed linked bank transactions to find missed rewards, savings opportunities, and personalized recommendations.\n\nI was co-founder and head of product.',
    },
    {
      heading: 'Origin: Hydra',
      body: 'Hydra was built to help founders turn ambiguous goals into executable workflows. I ran discovery with 17 founders and product leaders and built an MVP integrating 18 external services in React, TypeScript, Supabase, and Python.\n\nThe key insight was that founders didn\'t want another dashboard. They wanted decision support they could trust. That lesson carried into Vantage.',
    },
    {
      heading: 'Discovery',
      body: 'I interviewed 40 potential users and analyzed 122 loyalty and savings programs. Interviews consistently showed avoidance and guilt as the dominant money emotions, low willingness to pay, and rejection of dashboard-style tools.',
    },
    {
      heading: 'What We Built',
      body: '• A Plaid-connected prototype analyzing real transaction data\n• Detection of missed rewards and savings opportunities\n• Personalized financial recommendations\n• A five-layer financial model for i.Lab demo night',
    },
    {
      heading: 'The Decision',
      body: 'Financial validation showed the product could save a typical user only $9 to $11 a month against a $25 target. I recommended discontinuing the consumer product rather than keep investing in an offering without enough customer value.',
    },
    {
      heading: 'Learnings',
      body: '• Validate the value equation before scaling the build\n• Killing a product on evidence is a product decision, not a failure\n• The company, incorporation, and accelerator groundwork carried forward into Wellhound',
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
      body: 'This project was a collaboration between the City of Charlottesville, UVA Architecture, and a product management class (January to March 2026). The goal was to build a digital library for ADU (Accessory Dwelling Unit) designs that supports city planners, developers, and residents.\n\nI led 20 user interviews, wrote the PRD, and built the full-stack MVP (Next.js and Supabase), which was delivered to the City of Charlottesville.',
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
      body: 'The MVP is a digital library that:\n\n• Centralizes ADU schematics and metadata\n• Supports different user views depending on role\n• Balances flexibility with regulatory constraints\n\nRather than building a complex platform, the emphasis was on usability, governance, and long term maintainability.',
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
  wellhound,
  vantage,
  carmax,
  cville,
}

export function getProjectContent(slug: string): ProjectContent | undefined {
  return contentBySlug[slug]
}
