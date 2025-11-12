'use client'

import { motion } from 'framer-motion';

const highlights = [
  {
    title: 'FinTech Systems',
    description:
      'Designing budgeting engines, debt payoff simulations, and executive dashboards for products like BudgetPal and nmFinPro.',
  },
  {
    title: 'AI-First Experiences',
    description:
      'Pairing LLMs, vector search, and motion design to craft immersive journeys such as Nexus Chronicle and the Wen directory.',
  },
  {
    title: 'Product Delivery',
    description:
      'Owning discovery, iteration, and launch—aligning stakeholders and transforming prototypes into polished releases.',
  },
];

const stats = [
  { label: 'Years Coding', value: '3+' },
  { label: 'Projects Delivered', value: '20+' },
  { label: 'Happy Clients', value: '20+' },
];

export function AboutSection() {
  return (
    <section id="about" className="py-20 sm:py-24 lg:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mx-auto max-w-3xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
            About Me
          </span>
          <h2 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl">
            Building human-centered systems with technical rigor
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            I’m a full stack engineer with a multidisciplinary background in FinTech, AI search, and immersive storytelling.
            Whether leading cross-platform launches or refining micro-interactions, I bridge strategy and execution to
            deliver products that feel effortless for users and scalable for teams.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-10 lg:grid-cols-[2fr_1fr]">
          <motion.div
            className="space-y-6 rounded-2xl border bg-card p-8 shadow-sm"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-xl font-semibold">What drives my work</h3>
            <p className="text-muted-foreground">
              My approach blends research, systems thinking, and hands-on craftsmanship. I thrive when partnering
              with founders, designers, and engineers to translate ambitious roadmaps into reliable, elegant software.
            </p>
            <div className="grid gap-6 sm:grid-cols-2">
              {highlights.map((item) => (
                <div key={item.title} className="rounded-xl border bg-background/60 p-5 shadow-sm">
                  <h4 className="text-base font-semibold">{item.title}</h4>
                  <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="grid gap-4 rounded-2xl border bg-card p-8 text-center shadow-sm"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-xl bg-primary/10 p-4">
                <div className="text-3xl font-bold text-primary">{stat.value}</div>
                <div className="text-sm font-medium text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

