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
      heading: 'Where It Started',
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

const fypquiz: ProjectContent = {
  title: 'FYPquiz',
  subtitle: 'AI Study App (Founder & Developer)',
  sections: [
    {
      heading: 'Overview',
      body: 'FYPquiz turned study material into short, TikTok-style quizzes. Upload a document, and AI generates quiz questions with spoken commentary in a vertical, swipeable format built for how Gen Z students already consume content.\n\nI designed, built, and launched it solo in May and June 2025.',
    },
    {
      heading: 'Build',
      body: '• Next.js, TypeScript, and Tailwind on the front end\n• Supabase for auth, Postgres, and audio storage\n• OpenAI for quiz generation, plus AI voice for commentary\n• Saved study sets and instant answer feedback',
    },
    {
      heading: 'Traction',
      body: '100 users and 20K impressions in the first 30 days, driven entirely by organic short-form content.',
    },
    {
      heading: 'Why I Shut It Down',
      body: 'The product kept breaking. Chaining document parsing, generation, and voice through several third-party APIs made it fragile, and I was spending more time fixing failures than improving the experience. I shut it down rather than keep shipping something unreliable.',
    },
    {
      heading: 'What I Took From It',
      body: '• Reliability is a feature, especially for a product people open daily\n• Fewer, well-tested dependencies beat a longer feature list\n• Organic distribution can get you first users, but retention depends on the product working every time\n• These lessons shaped how I architected Wellhound: one AI interface, evaluation sets, and automated testing before launch',
    },
  ],
}

const contentBySlug: Record<string, ProjectContent> = {
  wellhound,
  vantage,
  fypquiz,
}

export function getProjectContent(slug: string): ProjectContent | undefined {
  return contentBySlug[slug]
}
