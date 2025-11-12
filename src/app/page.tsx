'use client'
import HeroSection from '@/components/hero-section'
import { AboutSection } from '@/components/about-section'
import SkillsSection from '@/components/skills-section'
import ProjectsSection from '@/components/projects-section'
import { ContactSection } from '@/components/contact-section'

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <main className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
    </div>
  );
}
