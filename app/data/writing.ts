export const writingList = [
  { slug: 'ai-agents-guardrails', title: 'How I Think About AI Agents and Guardrails' },
  { slug: 'roadmap-data-models', title: 'System Design: Data Models for Roadmap Generation' },
  { slug: 'activation-retention', title: 'Metrics: Activation to Retention Loops' },
] as const

export type WritingItem = (typeof writingList)[number]

const contentBySlug: Record<string, { title: string; body: string }> = {
  'ai-agents-guardrails': {
    title: 'How I Think About AI Agents and Guardrails',
    body: `AI agents are powerful because they compress decision making. That also makes them dangerous if not designed carefully.

When I think about AI agents in a product context, I start by defining what decisions the system is allowed to influence, and just as importantly, what decisions it is not.

In early stage or high uncertainty environments, users don't want full automation. They want clarity, confidence, and speed. This means agents should act as decision support systems, not autonomous actors.

My baseline framework for agent design has three layers:

Context → Reasoning → Action

Context is where most products fail. If the agent doesn't understand user constraints, incentives, and environment, the output doesn't matter. I treat context as structured data, not just prompts.

Reasoning should be explainable. Even when using probabilistic or ML assisted logic, the system should be able to surface why it is making a recommendation. Trust is built through transparency, not accuracy alone.

Action should be constrained. In most consumer and enterprise products, agents should recommend actions rather than execute them. Full autonomy is reserved for low risk, reversible decisions.

Guardrails are not an afterthought. They are part of the product.

I think about guardrails across four dimensions:

Scope: what domains the agent can operate in

Confidence: how uncertainty is communicated

Escalation: when humans should intervene

Feedback: how the system learns from outcomes

The goal is not to limit intelligence. It's to align intelligence with user trust and real world consequences.`,
  },
  'roadmap-data-models': {
    title: 'System Design: Data Models for Roadmap Generation',
    body: `When people talk about roadmaps, they usually think about features. I think about decisions over time.

Any roadmap generation system, whether human or AI assisted, needs to answer three questions:

What are we optimizing for right now?

What constraints exist?

What signals tell us if we are wrong?

From a system design perspective, I think about roadmaps as a data problem before it's a UI problem.

At a high level, I model roadmap inputs as:

Goals (outcomes, not features)

Constraints (time, capital, skills, dependencies)

Signals (user feedback, metrics, external events)

These inputs feed into a prioritization layer that evaluates tradeoffs rather than ranks features. This is critical. Ranking assumes certainty. Tradeoffs acknowledge uncertainty.

The output of the system should not be a static roadmap. It should be a living hypothesis that updates as signals change.

I intentionally avoid over optimizing for prediction. Instead, I optimize for adaptability. A roadmap that updates quickly is more valuable than one that is perfectly planned.

The biggest design tradeoff is explainability versus sophistication. I bias toward explainability, especially in early stage products. If users don't understand why priorities shift, they stop trusting the system.

In practice, good roadmap systems don't remove human judgment. They augment it with structure.`,
  },
  'activation-retention': {
    title: 'Metrics: Activation to Retention Loops',
    body: `Most products don't fail because of bad ideas. They fail because users never reach value.

When I think about metrics, I don't start with dashboards. I start with behavior.

Activation is the moment a user experiences meaningful value. Retention is whether that value compounds over time. The gap between them is where products live or die.

I focus on identifying:

The smallest unit of value

The action that delivers it

The feedback loop that reinforces it

Metrics should follow the user journey, not the org chart.

For activation, I look for leading indicators. These are behaviors that strongly correlate with long term retention, even if they don't generate revenue yet.

For retention, I think in loops, not cohorts. What pulls the user back? What creates momentum? What decays if they leave?

I'm cautious about vanity metrics. High engagement without progression often signals confusion, not success.

The most useful metric frameworks answer:

Are users getting value?

Are they getting it faster?

Are they coming back for the same reason?

Good metrics create clarity. Great metrics change decisions.`,
  },
}

export function getWritingBySlug(slug: string): { title: string; body: string } | undefined {
  return contentBySlug[slug]
}

export function getAllWritingSlugs(): string[] {
  return writingList.map((item) => item.slug)
}
