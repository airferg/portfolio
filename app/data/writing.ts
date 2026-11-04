export const writingList = [
  { slug: 'killing-vantage', title: 'Case Study: Killing Vantage at $10 a Month' },
  { slug: 'mail-in-to-blood', title: 'Case Study: Why Wellhound Moved From Mail-In Kits to Blood' },
  { slug: 'model-routing', title: 'System Design: Routing Models to Cut AI Cost in Half' },
  { slug: 'synthetic-customers', title: 'Testing a Checkout With Synthetic Customers' },
  { slug: 'regulation-is-architecture', title: 'Regulation Is the Architecture' },
  { slug: 'ai-capex-thesis', title: 'Thesis: The AI Buildout Has a Capital Structure Problem' },
] as const

export type WritingItem = (typeof writingList)[number]

const contentBySlug: Record<string, { title: string; body: string }> = {
  'killing-vantage': {
    title: 'Case Study: Killing Vantage at $10 a Month',
    body: `Vantage was a consumer fintech product my co-founder and I built through the UVA Darden i.Lab accelerator in 2026. The idea: connect your bank account with Plaid, and an AI autopilot finds the loyalty programs and rewards you qualify for but are not using, then enrolls you.

The whole business rested on one number. How many dollars a month is a typical Gen Z user leaving on the table? We set a target of $25. Below that, nobody pays, and nobody stays.

So instead of building more product, we built a way to measure that number honestly.

The research stack

• 40 customer interviews, distilled into 14 structured personas with spending behavior, enrolled programs, and pain points
• A database of 122 loyalty programs and 26 credit cards, each with an earn rate and a value per $100 spent
• A Python savings calculator that runs every persona against every program they shop at but are not enrolled in
• A written attribution model defining exactly what counts as a missed dollar, so the answer could not drift toward what we wanted to hear

Confidence tiers mattered more than the model

Most of our spend data came from interviews ("I eat out once or twice a week"), not transactions. So every estimate got a confidence tier. Transaction screenshots were high confidence. Behavioral anchors from interviews were low. Only high and medium tiers counted toward the headline.

We also audited the database itself. The program rates had been aggregated from several AI research tools, so I verified about 20 high-impact programs against official terms and T&Cs. One major retailer's rewards rate was inflated 2.5x in our data. Rebrands, discontinued tiers, and duplicate programs all had to be resolved before the simulation meant anything.

The answer

Across all tiers, including estimates, the typical user was missing about $9 to $11 a month. Counting only hard data, the floor was closer to a few dollars. Either way, it was well under $25.

The interviews pointed the same direction. The dominant money emotions were avoidance and guilt, willingness to pay was low, and people rejected dashboard-style tools.

The decision

I recommended discontinuing the consumer product. Not because the build failed, but because the value equation failed. A product that saves someone $10 a month has to cost almost nothing and require almost no attention, and that is a very hard business to build.

What I took from it

• Find the one number the business depends on, and measure it before scaling the build
• Make the methodology strict enough that it can tell you no
• Killing a product on evidence is a product decision, not a failure
• The company, accelerator relationships, and research habits carried straight into Wellhound`,
  },
  'mail-in-to-blood': {
    title: 'Case Study: Why Wellhound Moved From Mail-In Kits to Blood',
    body: `Wellhound started with a simple thesis: dogs hide illness, owners read early signs as aging, and disease gets caught late. Screen more often, catch it earlier.

The story behind it is personal. My family's black Lab, Scout, whined, ate grass, and bit his paws in his last years. We read it as getting old. He was never diagnosed, and after he was put down, the vet mentioned those were signs of a stomach issue.

Version one: quarterly mail-in kits

The first product was a quarterly at-home urine and fecal kit. It was cheap to ship, easy to scale, and fit the "screen more often" idea.

Then I did discovery. I interviewed 30 dog owners (people who had euthanized a dog, owners of genetically at-risk breeds, new owners, and senior-dog owners) and 10 veterinarians.

The vets were consistent: blood is where the diagnostic value is. A mail-in kit can tell you something, but a blood panel is what a vet actually acts on.

Version two: blood first

Wellhound became an in-home blood draw. A licensed technician comes to the owner's home, a reference lab runs a panel designed with a practicing veterinarian, a vet reviews the results, and the owner gets a care plan and an app that tracks every result against the dog's own baseline.

The tension I had to accept

Vets also told me that drawing blood more than once a year for young dogs (or twice a year for seniors) is bad practice and hard on the dog. That broke part of my original thesis. An annual draw can miss fast-developing disease.

So the product became blood as the core, plus add-ons designed to collapse the time between draws: quarterly at-home urine and fecal tests, behavior monitoring, device data, and an AI assistant that knows the dog's history.

What owners actually want

The most useful thing I heard, over and over: nobody wants to go to the vet. They want a verified, correct opinion without a visit, at home, at a price that makes sense, so their dog lives longer.

That reframed the brand too. Wellhound should feel like a consumer product the owner controls, not another clinic.

What I took from it

• Customer discovery should be allowed to kill your favorite version of the product
• Talk to the experts who will have to stand behind the result, not just the buyer
• When a constraint breaks your thesis, design around the gap instead of ignoring it`,
  },
  'model-routing': {
    title: 'System Design: Routing Models to Cut AI Cost in Half',
    body: `Wellhound's app includes an AI care assistant that answers questions about a dog's results, explains biomarkers in plain language, and helps owners act on a vet's care plan. Margins on a preventive health membership are thin, so AI cost had to be designed, not discovered on the invoice.

The goal

Keep AI spend under about $1 per member per month without making the assistant worse.

One interface, many models

Every AI call in the app goes through a single internal LLM interface. The model for each task is set by configuration, not hard-coded. That one decision makes everything else possible: you can swap, test, and downgrade models per task without touching product code.

Routing by task

• Routine questions (what does this value mean, when is my next draw) go to Claude Haiku
• Complex, tool-using workflows (multi-step actions, reasoning across a dog's full record) go to Claude Sonnet
• Templated feedback that does not need a model at all, does not use one
• Care plan drafts, which a vet signs off on, stay on the strongest model

About 75% of requests route to Haiku, which cut estimated inference cost by about 50%.

Guardrails before cost

A cheaper model is only acceptable if it passes the same bar. Every task has a golden set (expected good answers) and a red-team set (things the assistant must refuse or route to a vet). A model is promoted to a task only after it passes both. The same process lets open-weight models be evaluated over time.

The assistant is also scoped. It explains, summarizes, and helps owners act, but it does not give veterinary advice. Clinical questions route to a vet, and care plans drafted by AI always carry the vet's final say.

What I took from it

• Put a seam between your product and your model provider on day one
• Route by task difficulty, not by habit
• Evaluation sets are what make cost-cutting safe
• In health, the guardrails are part of the product, not a layer on top`,
  },
  'synthetic-customers': {
    title: 'Testing a Checkout With Synthetic Customers',
    body: `Before Wellhound's paid beta, I had a problem every solo founder has: not enough real users to test with, and not enough time to wait for them.

So I built AI customer-testing agents.

Grounded in real people

The agents were not generic "act like a user" prompts. Each one was grounded in real dog-owner reviews and interview patterns: the anxious senior-dog owner, the price-sensitive new owner, the skeptic who has never trusted an at-home test. Each had a goal (sign up, book a draw, understand a result) and the patience level and objections of the person it was based on.

What they did

The agents walked the real product end to end: landing page, signup, dog profile, plan selection, checkout, booking, and results. They logged every point of confusion, every dead end, and every place they would have quit.

Results

• 96 pre-launch defects found, from broken states to unclear copy to missing edge cases
• Simulated checkout completion improved by 20 percentage points after fixes

Where it fits

Synthetic testing does not replace talking to customers. It replaces the part of QA where you, the founder, click through your own product and cannot see it anymore. It finds friction. It cannot tell you whether someone will pay. That is what the real beta is for.

What I took from it

• Ground test agents in real customer language, or they will just confirm your assumptions
• Use AI to find friction cheaply, so real users spend their attention on whether the product is worth it`,
  },
  'regulation-is-architecture': {
    title: 'Regulation Is the Architecture',
    body: `When I started Wellhound, I thought the hard part would be the app. It was not. The hard part was figuring out who is legally allowed to do each step.

In veterinary care, a vet generally cannot interpret results or recommend treatment without a veterinarian-client-patient relationship (VCPR). Rules on how that relationship is established, who can draw blood, and who can be the vet of record vary by state.

Those rules decided the product before any feature did.

How it shaped Wellhound

• Launch state: Virginia is one of the few states that allows a VCPR to be established over real-time video, which made it the right place to start
• Roles: a licensed technician draws blood at home, a partner reference lab runs the panel, and a veterinarian establishes the relationship by video and reviews results
• Wellhound's job: Wellhound does no veterinary care itself. It owns the logistics, the longitudinal record, and the experience that ties it together
• Owners can also invite their own vet to receive results, so Wellhound adds to the existing relationship instead of replacing it

I confirmed the model with the state veterinary board and lab industry contacts before building on it.

Clinically boring on purpose

There is a version of health tech that tries to be exciting everywhere. I think the right version is a modern software company on top of clinically conservative rails, similar to how neobanks built a better experience on top of regulated banking.

That means the parts that touch medicine stay boring: licensed professionals, accurate labs, vet-signed results, no predictive claims until a vet signs off. The innovation lives in everything around them: the record, the AI explanations, automated operations, and making the whole thing happen at home.

What I took from it

• In regulated markets, map who can legally do each step before designing screens
• The regulatory map often tells you where to launch
• Be innovative in the experience and conservative in the clinical claims`,
  },
  'ai-capex-thesis': {
    title: 'Thesis: The AI Buildout Has a Capital Structure Problem',
    body: `I build with AI every day, and I think it is the most important technology wave of my lifetime. I also think the way the buildout is being financed carries real risk. Both can be true.

This is a personal macro thesis I have been developing and stress-testing. Some arguments survived scrutiny. Some did not, and I think it is worth being clear about which is which.

What survived

1. Circular vendor financing. Some of the demand for AI infrastructure is funded by the suppliers of that infrastructure: chipmakers and cloud providers investing in AI companies that then spend that money back on their chips and compute. That makes revenue look stronger than end-customer demand alone would justify, and it ties the health of suppliers and customers together.

2. The capex surge is increasingly debt-funded. Early data center spending came mostly from the cash flows of the largest tech companies. More of it now runs through debt, private credit, and off-balance-sheet structures. Equity-funded overbuilding hurts shareholders. Debt-funded overbuilding can spread to lenders and the wider financial system.

3. Open-weight models compress pricing. If capable open-weight models keep closing the gap with frontier models, the price of a unit of intelligence keeps falling. That is great for builders like me. It is a problem for anyone whose return assumptions depend on premium pricing for model access holding up long enough to pay back the infrastructure.

What I corrected

I originally leaned on market concentration figures and simple investment-versus-revenue ratios. When I checked them carefully, some of the numbers I had were wrong or framed in a misleading way. Comparing today's capex to today's AI revenue ignores that infrastructure is built ahead of demand. I dropped those arguments rather than keep the ones that sounded best.

How I hold it

This is not a call that AI is a bubble that pops tomorrow. It is a view that the technology can be transformative while the capital structure financing it is fragile, and that the risk sits in the financing, not the technology.

As a builder, my takeaway is practical: assume intelligence keeps getting cheaper, design products whose value does not depend on any one model provider, and keep AI cost per customer low enough that falling prices are a tailwind.`,
  },
}

export function getWritingBySlug(slug: string): { title: string; body: string } | undefined {
  return contentBySlug[slug]
}

export function getAllWritingSlugs(): string[] {
  return writingList.map((item) => item.slug)
}
