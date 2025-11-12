'use client'

import { motion } from 'framer-motion'
import { Code, Cpu, Database, Smartphone, Palette, Server } from 'lucide-react'

const skills = [
  {
    category: 'Core Languages',
    icon: Code,
    items: [
      { name: 'Java', level: 100 },
      { name: 'TypeScript', level: 95 },
      { name: 'C', level: 92 },
      { name: 'JavaScript', level: 95 },
      { name: 'Dart', level: 96 },
    ],
  },
  {
    category: 'Web Platforms',
    icon: Server,
    items: [
      { name: 'Next.js', level: 95 },
      { name: 'React', level: 92 },
      { name: 'Supabase', level: 82 },
      { name: 'Node.js', level: 85 },
      { name: 'Express', level: 80 },
    ],
  },
  {
    category: 'Mobile & Cross-Platform',
    icon: Smartphone,
    items: [
      { name: 'Flutter', level: 94 },
      { name: 'Firebase', level: 98 },
      { name: 'React Native', level: 82 },
      { name: 'Native iOS/Android', level: 92 },
    ],
  },
  {
    category: 'Data & Cloud',
    icon: Database,
    items: [
      { name: 'PostgreSQL', level: 83 },
      { name: 'MongoDB', level: 80 },
      { name: 'Qdrant', level: 82 },
      { name: 'RESTful APIs', level: 90 },
    ],
  },
  {
    category: 'AI & Motion',
    icon: Cpu,
    items: [
      { name: 'LLM Prompt Engineering', level: 100 },
      { name: 'Vector Search', level: 80 },
      { name: 'Framer Motion', level: 98 },
      { name: 'Three.js', level: 85 },
    ],
  },
  {
    category: 'Product & Experience',
    icon: Palette,
    items: [
      { name: 'Figma', level: 80 },
      { name: 'UX Research', level: 100 },
      { name: 'Prototyping', level: 98 },
      { name: 'Design Systems', level: 96 },
    ],
  },
]

const SkillsSection = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section id="skills" className="relative py-20 sm:py-24 lg:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Skills & Expertise
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Technologies and tools I have worked with and mastered throughout my journey.
          </p>
        </motion.div>

        <motion.div 
          className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {skills.map((category) => (
            <motion.div
              key={category.category}
              className="rounded-xl border bg-card p-6 shadow-sm transition-all hover:shadow-md"
              variants={item}
            >
              <div className="mb-4 flex items-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <category.icon className="h-6 w-6" />
                </div>
                <h3 className="ml-4 text-xl font-semibold">{category.category}</h3>
              </div>
              <div className="space-y-3">
                {category.items.map((skill) => (
                  <div key={skill.name} className="space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-xs text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-muted">
                      <motion.div
                        className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-blue-600"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default SkillsSection
