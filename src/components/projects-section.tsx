'use client'

import { motion } from 'framer-motion'
import { Github, ExternalLink, Filter } from 'lucide-react'
import { useState } from 'react'
import Image from 'next/image'

// Sample project data - replace with your actual projects
type Project = {
  id: number
  title: string
  description: string
  image: string
  tags: string[]
  github?: string | null
  demo?: string | null
  type: 'web' | 'mobile'
  comingSoon?: boolean
}

const projects: Project[] = [
  {
    id: 1,
    title: 'BudgetPal',
    description: 'Cross-platform finance companion with budgeting dashboards, AI assistant, localization (EN/AR/HE), and Firebase-backed data syncing.',
    image: '/images/projects/budgetpal.jpg',
    tags: ['Flutter', 'Firebase', 'AI', 'Finance'],
    github: 'https://github.com/b14ckPanther/BudgetPal',
    demo: 'https://budgetpal-website.vercel.app',
    type: 'mobile'
  },
  {
    id: 2,
    title: 'Wen Mobile',
    description: 'A mobile-first discovery experience entering stealth mode—expect AI-guided journeys, live maps, and region-first storytelling.',
    image: '/images/projects/wen-mobile.jpg',
    tags: ['Flutter', 'Stealth Build', 'AI Signals'],
    github: null,
    demo: null,
    type: 'mobile',
    comingSoon: true,
  },
  {
    id: 3,
    title: 'Wen Web',
    description: 'The command deck powering Wen’s ecosystem. Feature flags are in place—full reveal drops soon.',
    image: '/images/projects/wen-web.svg',
    tags: ['Next.js', 'Supabase', 'Stealth Ops'],
    github: null,
    demo: null,
    type: 'web',
    comingSoon: true,
  },
  {
    id: 4,
    title: 'nMatrix AI Studio',
    description: 'Retro-futuristic AI showcase with AR concept modules, magnetic interactions, and motion-first storytelling for creative tech studios.',
    image: '/images/projects/nmatrix.jpg',
    tags: ['Next.js', 'React', 'Framer Motion', 'AI'],
    github: 'https://github.com/b14ckPanther/nMatrix',
    demo: 'https://nmatrix.vercel.app',
    type: 'web'
  },
  {
    id: 5,
    title: 'Nexus Chronicle',
    description: 'Voice-driven sci-fi narrative experience featuring real-time audio visualizers, multilingual UI, and a neon HUD powered by Next.js.',
    image: '/images/projects/nexus-chronicle.jpg',
    tags: ['Next.js', 'TypeScript', 'Framer Motion', 'AI'],
    github: 'https://github.com/b14ckPanther/nexus-chronicle',
    demo: 'https://nexus-chronicle.vercel.app',
    type: 'web'
  },
  {
    id: 6,
    title: 'nmFinPro (BudgetPal Web)',
    description: 'Zero-based budgeting control center with real-time debt payoff simulations, Firebase RBAC, and Three.js data visualizations for personal finance teams.',
    image: '/images/projects/nmfinpro.jpg',
    tags: ['Next.js', 'TypeScript', 'Firebase', 'Three.js'],
    github: 'https://github.com/b14ckPanther/nmFinPro',
    demo: 'https://nmfinpro.vercel.app',
    type: 'web'
  },
]

const allTags = [
  'All',
  'Web',
  'Mobile',
  'React',
  'Next.js',
  'Flutter',
  'TypeScript',
  'AI',
  'Firebase',
  'Supabase',
  'Three.js',
  'Stealth Build',
  'Stealth Ops',
  'AI Signals',
]

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <motion.div
      className="group relative overflow-hidden rounded-xl border bg-card shadow-sm transition-all hover:shadow-md"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative h-48 overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
        <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 transition-opacity group-hover:opacity-100">
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-primary/80 px-2 py-1 text-xs font-medium text-white"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-lg font-semibold">{project.title}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{project.description}</p>
          </div>
          <div className="flex items-center space-x-2">
            {project.comingSoon ? (
              <span className="rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase text-primary shadow-sm">
                Coming Soon
              </span>
            ) : (
              <>
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-muted text-foreground transition-colors hover:bg-muted/80"
                    aria-label="GitHub repository"
                  >
                    <Github className="h-4 w-4" />
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-muted text-foreground transition-colors hover:bg-muted/80"
                    aria-label="Live demo"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </a>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState('All')
  const [showFilters, setShowFilters] = useState(false)

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => 
        project.tags.includes(activeFilter) || 
        (activeFilter === 'Web' && project.type === 'web') ||
        (activeFilter === 'Mobile' && project.type === 'mobile')
      )

  return (
    <section id="projects" className="py-20 sm:py-24 lg:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            My Projects
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            A collection of my recent work and side projects
          </p>
        </motion.div>

        <div className="relative mt-12">
          {/* Mobile filter dropdown */}
          <div className="mb-6 block lg:hidden">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center space-x-2 rounded-lg border px-4 py-2 text-sm font-medium"
            >
              <Filter className="h-4 w-4" />
              <span>{activeFilter === 'All' ? 'Filter Projects' : activeFilter}</span>
            </button>
            {showFilters && (
              <div className="absolute left-0 right-0 z-10 mt-2 grid grid-cols-2 gap-2 rounded-lg border bg-background p-2 shadow-lg">
                {allTags.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => {
                      setActiveFilter(tag)
                      setShowFilters(false)
                    }}
                    className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                      activeFilter === tag
                        ? 'bg-primary text-primary-foreground'
                        : 'hover:bg-muted'
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Desktop filter */}
          <div className="mb-12 hidden flex-wrap justify-center gap-2 lg:flex">
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setActiveFilter(tag)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  activeFilter === tag
                    ? 'bg-primary text-primary-foreground'
                    : 'hover:bg-muted'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>

          {filteredProjects.length === 0 ? (
            <div className="py-12 text-center">
              <p className="text-muted-foreground">No projects found with the selected filter.</p>
            </div>
          ) : (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection
