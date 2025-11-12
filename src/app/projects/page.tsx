import type { Metadata } from 'next'
import Link from 'next/link'

import ProjectsSection from '@/components/projects-section'
import { ContactSection } from '@/components/contact-section'

const projectThemes = [
  {
    title: 'Financial Intelligence',
    summary:
      'Automating zero-based budgeting, debt simulations, and executive dashboards through BudgetPal and nmFinPro—built to keep decisions transparent and data-backed.',
    stack: ['Flutter', 'Next.js', 'Firebase', 'Three.js'],
  },
  {
    title: 'AI Discovery & Directories',
    summary:
      'Designing location-aware marketplaces for Wen, pairing Supabase, Flutter, and AI semantic search to connect communities with relevant businesses.',
    stack: ['Supabase', 'Flutter', 'OpenAI', 'Vector Search'],
  },
  {
    title: 'Immersive Storytelling',
    summary:
      'Inventing narrative-driven experiences like Nexus Chronicle and nMatrix with voice interfaces, AR-inspired motion, and expressive UI systems.',
    stack: ['Next.js', 'Framer Motion', 'LLM Workflows', 'Design Systems'],
  },
]

export const metadata: Metadata = {
  title: 'Projects | Noor Alden Mosa',
  description:
    'Browse featured projects delivered by Noor Alden Mosa—FinTech platforms, AI-enabled directories, and immersive storytelling experiences.',
}

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8">
        <section className="mx-auto max-w-3xl space-y-5 text-center">
          <span className="inline-flex items-center justify-center rounded-full border border-primary/40 bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
            Selected Work
          </span>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Software crafted for measurable impact.</h1>
          <p className="text-lg text-muted-foreground">
            Every launch pairs resilient engineering with sharp UX. Explore the FinTech, AI, and storytelling projects
            that showcase how I help teams ship ambitious ideas without compromising polish or maintainability.
          </p>
        </section>

        <section className="mt-16 grid gap-6 md:grid-cols-3">
          {projectThemes.map((theme) => (
            <div key={theme.title} className="rounded-2xl border bg-card/80 p-6 shadow-sm backdrop-blur">
              <h2 className="text-xl font-semibold">{theme.title}</h2>
              <p className="mt-3 text-sm text-muted-foreground">{theme.summary}</p>
              <div className="mt-4 flex flex-wrap gap-2 text-xs">
                {theme.stack.map((tech) => (
                  <span key={tech} className="rounded-full bg-primary/10 px-3 py-1 text-primary">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </section>

        <section className="mt-20">
          <ProjectsSection />
        </section>

        <section className="mt-20 rounded-3xl border bg-primary/5 p-10 text-center shadow-sm">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Need a partner for your next build?</h2>
          <p className="mt-3 text-muted-foreground">
            I collaborate with founders, product teams, and agencies to deliver reliable software across the full stack.
            Let’s talk about timelines, budgets, and the outcomes you need.
          </p>
          <div className="mt-6 inline-flex items-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow transition hover:-translate-y-0.5 hover:shadow-lg"
            >
              Book a discovery call
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

