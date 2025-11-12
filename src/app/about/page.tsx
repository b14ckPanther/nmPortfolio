import type { Metadata } from 'next'
import Link from 'next/link'

import { AboutSection } from '@/components/about-section'
import SkillsSection from '@/components/skills-section'
import ProjectsSection from '@/components/projects-section'
import { ContactSection } from '@/components/contact-section'

const focusAreas = [
  {
    title: 'FinTech Automation',
    description:
      'I build cross-platform budgeting platforms that balance compliance, clarity, and delightful dashboards—BudgetPal and nmFinPro automate zero-based budgeting, debt payoff modelling, and executive analytics.',
    projects: ['BudgetPal', 'nmFinPro (BudgetPal Web)'],
  },
  {
    title: 'AI-Powered Discovery',
    description:
      "From Wen's multi-tenant marketplace to AI semantic search services, I mix Supabase, Firebase, Qdrant, and OpenAI tooling to deliver fast, context-aware results for users on the move.",
    projects: ['Wen Mobile', 'Wen Web'],
  },
  {
    title: 'Immersive Storytelling',
    description:
      'I experiment with motion design, LLM voice control, and realtime feedback loops to create futuristic experiences like Nexus Chronicle and the retro-futuristic nMatrix studio.',
    projects: ['Nexus Chronicle', 'nMatrix AI Studio'],
  },
]

const journey = [
  {
    year: '2025',
    title: 'nmFinPro (BudgetPal Web)',
    summary:
      'Launched a zero-based budgeting command center with debt payoff simulations, real-time aggregates, and Three.js-powered financial data visualization.',
    stack: ['Next.js', 'TypeScript', 'Firebase', 'Three.js'],
  },
  {
    year: '2024',
    title: 'Wen Ecosystem',
    summary:
      "Scaled Wen's Flutter mobile platform and Supabase-driven web admin to deliver AI-assisted search, multi-location curation, and owner onboarding workflows.",
    stack: ['Flutter', 'Supabase', 'Firebase', 'AI Search'],
  },
  {
    year: '2024',
    title: 'Nexus Chronicle',
    summary:
      'Invented a voice-driven sci-fi narrative engine with realtime audio visualisation, multilingual UI, and motion-intensive HUD elements.',
    stack: ['Next.js', 'TypeScript', 'Framer Motion', 'LLM Workflows'],
  },
  {
    year: '2023',
    title: 'BudgetPal',
    summary:
      'Shipped a cross-platform finance companion covering budgeting, analytics, localisation (EN/AR/HE), and an AI assistant for personal finance guidance.',
    stack: ['Flutter', 'Riverpod', 'Firebase', 'Localization'],
  },
  {
    year: '2022',
    title: 'Consulting Foundations',
    summary:
      'Delivered bespoke web products for early-stage founders—establishing a collaborative playbook grounded in research, rapid iteration, and dependable delivery.',
    stack: ['Java', 'React', 'UX Research'],
  },
]

export const metadata: Metadata = {
  title: 'About | Noor Alden Mosa',
  description:
    'Discover the story, principles, and journey behind Noor Alden Mosa—full stack & AI engineer shipping FinTech, AI-powered directories, and immersive experiences.',
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8">
        <section className="mx-auto max-w-3xl space-y-4 text-center">
          <span className="inline-flex items-center justify-center rounded-full border border-primary/40 bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
            Meet Noor
          </span>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Strategy-led engineering that ships.
          </h1>
          <p className="text-lg text-muted-foreground">
            I partner with founders, product teams, and studios to architect measurable software across FinTech,
            AI discovery, and immersive storytelling. Every engagement blends human-centered research with deep
            technical execution—resulting in reliable launches that users trust.
          </p>
        </section>

        <section className="mt-16 grid gap-6 md:grid-cols-3">
          {focusAreas.map((area) => (
            <div key={area.title} className="rounded-2xl border bg-card/80 p-6 shadow-sm backdrop-blur">
              <h2 className="text-xl font-semibold">{area.title}</h2>
              <p className="mt-3 text-sm text-muted-foreground">{area.description}</p>
              <div className="mt-4 flex flex-wrap gap-2 text-xs text-muted-foreground">
                {area.projects.map((project) => (
                  <span key={project} className="rounded-full bg-primary/10 px-3 py-1 text-primary">
                    {project}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </section>

        <section className="mt-20 space-y-16">
          <AboutSection />
          <SkillsSection />
        </section>

        <section className="mt-20">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Journey at a glance</h2>
          <p className="mt-3 max-w-3xl text-muted-foreground">
            Recent releases trace a path from early consulting to AI-infused products. Each milestone combines
            rigorous engineering, craft, and a clear line-of-sight to user and business value.
          </p>

          <div className="mt-10 border-l border-border/60 pl-6">
            {journey.map((entry, index) => (
              <div
                key={`${entry.year}-${entry.title}`}
                className="relative mb-10 last:mb-0"
              >
                <span className="absolute -left-[37px] flex h-10 w-10 items-center justify-center rounded-full border border-primary/50 bg-background text-sm font-semibold text-primary">
                  {entry.year}
                </span>
                <div className="rounded-2xl border bg-card/80 p-6 shadow-sm backdrop-blur">
                  <h3 className="text-xl font-semibold">{entry.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{entry.summary}</p>
                  <div className="mt-4 flex flex-wrap gap-2 text-xs">
                    {entry.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-primary/10 px-3 py-1 text-primary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                {index !== journey.length - 1 && (
                  <span className="absolute -left-px top-10 h-full w-px bg-gradient-to-b from-primary/40 to-transparent" />
                )}
              </div>
            ))}
          </div>
        </section>

        <section className="mt-20">
          <ProjectsSection />
        </section>

        <section className="mt-20 rounded-3xl border bg-primary/5 p-10 text-center shadow-sm">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Let’s build what’s next</h2>
          <p className="mt-3 text-muted-foreground">
            From rapid prototypes to production platforms, I’m ready to help you ship ambitious software with confidence.
          </p>
          <div className="mt-6 inline-flex items-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow transition hover:-translate-y-0.5 hover:shadow-lg"
            >
              Start a conversation
            </Link>
            <Link
              href="mailto:nmcryptoinvest@gmail.com?subject=Portfolio%20enquiry"
              className="text-sm font-medium text-primary underline-offset-4 hover:underline"
            >
              nmcryptoinvest@gmail.com
            </Link>
          </div>
        </section>

        <section className="mt-20">
          <ContactSection />
        </section>
      </main>
    </div>
  )
}

