import type { Metadata } from 'next'
import Link from 'next/link'

const metrics = [
  { value: '3+ years', label: 'Professional experience' },
  { value: '20+', label: 'Products delivered' },
  { value: '20+', label: 'Partners & clients' },
]

const engagements = [
  {
    period: 'October 2025',
    title: 'Lead Engineer · nmFinPro (BudgetPal Web)',
    focus:
      'Rebuilt the BudgetPal web console into a zero-based budgeting command center with real-time debt payoff simulations and executive-grade analytics.',
    contributions: [
      'Modelled behavioural finance scenarios in deterministic TypeScript services backed by Firebase rules.',
      'Optimised live aggregation hooks so category envelopes reconcile thousands of transactions in milliseconds.',
      'Crafted a Three.js ambient data globe and modular design tokens to keep the interface premium yet performant.',
    ],
    stack: ['Next.js', 'TypeScript', 'Firebase', 'Three.js'],
  },
  {
    period: 'October 2025',
    title: 'Product Engineer · BudgetPal (Cross-platform)',
    focus:
      'Shipped the original cross-platform BudgetPal companion covering budgeting dashboards, AI assistant, localisation, and savings goals.',
    contributions: [
      'Modularised features via Riverpod domains so budgeting, assistant, and profile teams could iterate independently.',
      'Expanded localisation to English, Arabic, and Hebrew with `flutter gen-l10n`, bi-directional layouts, and tone-consistent copy.',
      'Designed reusable “glass” UI surfaces and analytics widgets that scale across iOS, Android, web, macOS, and Windows.',
    ],
    stack: ['Flutter', 'Riverpod', 'Firebase', 'Localization'],
  },
  {
    period: 'September 2025',
    title: 'Creative Technologist · Nexus Chronicle Voice Adventure',
    focus:
      'Invented a neon sci-fi narrative experience where players talk to an LLM game master with real-time audio visualisation and HUD telemetry.',
    contributions: [
      'Built the speech capture, streaming inference, and response loop with animated feedback and whisper-style waveform indicators.',
      'Engineered theme and language contexts so Arabic, Hebrew, and Latin scripts swap without breaking motion choreography.',
      'Optimised heavy Framer Motion scenes by capping React reflows, memoising hooks, and precomputing particle effects.',
    ],
    stack: ['Next.js', 'TypeScript', 'Framer Motion', 'LLM Workflows'],
  },
  {
    period: 'August 2025',
    title: 'Experience Designer · nMatrix AI Studio',
    focus:
      'Crafted the retro-futuristic AI exploration studio that blends AR-inspired hero sections, Bento feature grids, and magnetic interactions.',
    contributions: [
      'Directed the look and feel with neon typography, parallax backgrounds, and AR module placeholders for future machine-generated assets.',
      'Authored modular components (RetroFuturism, ARSpace, BentoBox) that showcase AI artistry, predictive analytics, and automation tooling.',
      'Optimised motion entry points with viewport-triggered Framer Motion sequences and responsive typography scales.',
    ],
    stack: ['Next.js', 'React', 'Framer Motion', 'Design Systems'],
  },
  {
    period: 'April 2025',
    title: 'Founding Mobile Engineer · Wen Directory (Flutter)',
    focus:
      'Building a multi-region marketplace that pairs mobile-first discovery with tasteful AI-led recommendations.',
    contributions: [
      'Architecting the foundation for secure owner onboarding, realtime locations, and staged AI features.',
      'Crafting an Arabic-first experience with motion cues that tease what is coming without revealing proprietary flows.',
      'Partnering with product to protect rollout details while ensuring performance keeps pace with ambition.',
    ],
    stack: ['Flutter', 'Firebase', 'Stealth Mode'],
  },
  {
    period: 'April 2025',
    title: 'Platform Engineer · Wen Directory (Web Control Center)',
    focus:
      'Designing the back-office experience that will orchestrate Wen’s directory expansions across regions.',
    contributions: [
      'Prototyping RTL-first curation tools without exposing roadmap-sensitive workflows.',
      'Standing up Supabase infrastructure with feature flags so future modules can ship iteratively.',
      'Blending motion and feedback to hint at the scale of what’s coming while keeping implementation private.',
    ],
    stack: ['Next.js', 'TypeScript', 'Supabase', 'Coming Soon'],
  },
]

export const metadata: Metadata = {
  title: 'Experience | Noor Alden Mosa',
  description:
    'Review the experience of Noor Alden Mosa—shipping FinTech automation, AI-powered directories, and immersive story-driven applications.',
}

export default function ExperiencePage() {
  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8">
        <section className="mx-auto max-w-3xl space-y-5 text-center">
          <span className="inline-flex items-center justify-center rounded-full border border-primary/40 bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
            Track record
          </span>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Real-world launches, measurable outcomes.
          </h1>
          <p className="text-lg text-muted-foreground">
            From cross-platform FinTech to AI discovery platforms, I take products from inception to live usage—owning
            architecture, implementation, and iteration with stakeholders.
          </p>
        </section>

        <section className="mt-16 grid gap-6 sm:grid-cols-3">
          {metrics.map((metric) => (
            <div
              key={metric.label}
              className="rounded-2xl border bg-card/80 p-6 text-center shadow-sm backdrop-blur"
            >
              <div className="text-3xl font-bold text-primary">{metric.value}</div>
              <div className="mt-2 text-sm font-medium text-muted-foreground">{metric.label}</div>
            </div>
          ))}
        </section>

        <section className="mt-20">
          <div className="border-l border-border/60 pl-12">
            {engagements.map((engagement, index) => (
              <article
                key={`${engagement.period}-${engagement.title}`}
                className="relative mb-12 last:mb-0"
              >
                <span className="absolute -left-[72px] flex h-16 w-16 items-center justify-center rounded-full border border-primary/50 bg-background text-primary">
                  <span className="flex flex-col items-center text-center text-xs font-semibold uppercase tracking-wide leading-tight">
                    {engagement.period.split(' ')[0]}
                    <span className="text-sm font-bold tracking-normal">
                      {engagement.period.split(' ')[1]}
                    </span>
                  </span>
                </span>
                <div className="ml-4 rounded-2xl border bg-card/80 p-6 shadow-sm backdrop-blur">
                  <h2 className="text-xl font-semibold">{engagement.title}</h2>
                  <p className="mt-2 text-sm text-muted-foreground">{engagement.focus}</p>
                  <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                    {engagement.contributions.map((bullet) => (
                      <li key={bullet} className="flex gap-2">
                        <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 flex flex-wrap gap-2 text-xs">
                    {engagement.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-primary/10 px-3 py-1 text-primary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                {index !== engagements.length - 1 && (
                  <span className="absolute -left-px top-10 h-full w-px bg-gradient-to-b from-primary/40 to-transparent" />
                )}
              </article>
            ))}
          </div>
        </section>

        <section className="mt-20 rounded-3xl border bg-primary/5 p-10 text-center shadow-sm">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Ready to unlock your next milestone?</h2>
          <p className="mt-3 text-muted-foreground">
            I partner with teams who value clarity, speed, and execution. Share your scope, and I will help architect a
            path to launch.
          </p>
          <div className="mt-6 inline-flex items-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow transition hover:-translate-y-0.5 hover:shadow-lg"
            >
              Schedule a call
            </Link>
            <Link
              href="mailto:nmcryptoinvest@gmail.com?subject=Portfolio%20enquiry"
              className="text-sm font-medium text-primary underline-offset-4 hover:underline"
            >
              nmcryptoinvest@gmail.com
            </Link>
          </div>
        </section>
      </main>
    </div>
  )
}

