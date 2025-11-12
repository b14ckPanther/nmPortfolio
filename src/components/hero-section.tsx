'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

const HeroSection = () => {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 pt-24 sm:px-6 lg:px-8">
      <div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <motion.h1 
            className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-4xl font-extrabold tracking-tight text-transparent sm:text-5xl md:text-6xl lg:text-7xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Noor Alden Mosa
          </motion.h1>
          
          <motion.p 
            className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Full stack & AI storyteller engineering FinTech consoles, intelligent directories, and cinematic interfaces that people love to use.
          </motion.p>
          
          <motion.div 
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Button size="lg" className="group" asChild>
              <Link href="/projects">
                View My Work
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button variant="secondary" size="lg" className="px-8 font-semibold uppercase tracking-wide" disabled>
              CV · Coming Soon
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/contact">
                Get In Touch
              </Link>
            </Button>
          </motion.div>

          <motion.div
            className="mt-12 flex flex-wrap items-center justify-center gap-3 text-sm font-medium text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
          >
            {[
              '3+ years shipping production code',
              '20+ projects delivered for global clients',
              '20+ partners trusting my delivery',
            ].map((item) => (
              <span
                key={item}
                className="rounded-full border border-border/60 bg-background/80 px-4 py-2 backdrop-blur"
              >
                {item}
              </span>
            ))}
          </motion.div>
          
          <motion.div 
            className="mt-10 flex justify-center space-x-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <a
              href="https://github.com/b14ckPanther"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-foreground"
              aria-label="GitHub"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/nmprofessor/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-foreground"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="mailto:nmcryptoinvest@gmail.com?subject=Portfolio%20enquiry"
              className="text-muted-foreground transition-colors hover:text-foreground"
              aria-label="Email"
            >
              <Mail className="h-6 w-6" />
            </a>
          </motion.div>
        </div>
      </div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -right-1/2 -top-1/2 h-[800px] w-[800px] rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 opacity-50 blur-3xl" />
        <div className="absolute -left-1/2 -bottom-1/2 h-[800px] w-[800px] rounded-full bg-gradient-to-r from-orange-500/20 to-pink-500/20 opacity-50 blur-3xl" />
      </div>
    </section>
  )
}

export default HeroSection
