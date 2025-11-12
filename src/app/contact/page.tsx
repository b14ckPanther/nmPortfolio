import type { Metadata } from 'next'

import { ContactSection } from '@/components/contact-section'

export const metadata: Metadata = {
  title: 'Contact | Noor Alden Mosa',
  description:
    'Start a project or schedule a strategy call with Noor Alden Mosa—full stack & AI engineer delivering FinTech, AI discovery, and immersive experiences.',
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto max-w-5xl px-4 py-24 sm:px-6 lg:px-8">
        <section className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center justify-center rounded-full border border-primary/40 bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
            Work with me
          </span>
          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">Let’s collaborate on your next release.</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Share your goals, timeline, and constraints. I routinely help founders and product teams move from vision to launch across FinTech, AI search, and immersive storytelling.
          </p>
        </section>

        <section className="mt-16">
          <ContactSection />
        </section>
      </main>
    </div>
  )
}

