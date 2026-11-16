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

const rumil: ProjectContent = {
  title: 'Rumil',
  subtitle: 'Personal AI Memory for macOS (Creator)',
  link: { url: 'https://github.com/airferg/rumil', label: 'github.com/airferg/rumil' },
  sections: [
    {
      heading: 'Overview',
      body: 'Rumil is a Mac app that gives every AI assistant I use the same memory. It keeps my context as linked Markdown files on my own computer and serves it to Claude, ChatGPT, and Perplexity over MCP (Model Context Protocol).\n\nI designed it and built it with Claude Code in November 2026: I made the product and architecture decisions, and AI wrote most of the code.',
    },
    {
      heading: 'Problem',
      body: 'Every assistant starts from zero. Claude remembers what I tell Claude, ChatGPT remembers what I tell ChatGPT, and none of them see my email, texts, calendar, notes, or the meetings where most of my context actually lives. I was re-explaining myself in every chat.',
    },
    {
      heading: 'What It Does',
      body: '• Pulls context in automatically: Gmail and Calendar, iMessage, Apple Notes, Obsidian, calendar links (Canvas, Outlook), news feeds, iPhone locations, voice memos, and meeting recordings transcribed on-device\n• Copies my full ChatGPT, Claude, and Perplexity history through a Chrome extension, including chats from my phone\n• Adds relevant context to prompts in the browser, only when the prompt is about me\n• Shows everything as a rotatable globe of linked notes, people, and projects\n• Runs a local model (Ollama) for anything too private to send to a cloud AI',
    },
    {
      heading: 'Key Decisions',
      body: '• Token cost over completeness: the first version made assistants search several times per question and spent about 15K tokens on one answer. I redesigned it around a router that resolves names and returns only the relevant lines, cutting per-session overhead from about 1,900 to 600 tokens\n• Security after a real finding: a test showed API keys from one of my notes coming back in a search. I added secret redaction across search and reads, a key-rotation flow, and locked the internet tunnel to the memory tools only\n• Local first: notes stay as files on my Mac, private folders can be hidden from every assistant, and a local model handles private summaries',
    },
    {
      heading: 'Stack',
      body: 'Electron, Node.js, MCP SDK, MiniSearch, SQLite (iMessage), whisper.cpp, Ollama, Chrome extension (Manifest V3), ngrok. Nearly 300 automated tests.',
    },
    {
      heading: 'What I\'m Learning',
      body: '• Memory is a retrieval problem, not a storage problem: having everything is worthless if the assistant has to dig\n• Every tool an AI can call costs tokens before it is ever used, so fewer, smarter tools win\n• The assistant decides when to look things up, so the rules for when to check memory matter as much as the memory itself',
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
  rumil,
  fypquiz,
}

export function getProjectContent(slug: string): ProjectContent | undefined {
  return contentBySlug[slug]
}
