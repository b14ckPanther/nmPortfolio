'use client'

import Link from 'next/link'
import { Icons } from './icons'
import { ThemeToggle } from '@/components/theme-toggle'

const footerLinks = [
  {
    title: 'Quick Links',
    items: [
      { title: 'Home', href: '/' },
      { title: 'About', href: '/about' },
      { title: 'Projects', href: '/projects' },
      { title: 'Experience', href: '/experience' },
      { title: 'Contact', href: '/contact' },
    ],
  },
  {
    title: 'Connect',
    items: [
      { title: 'GitHub', href: 'https://github.com/b14ckPanther' },
      { title: 'LinkedIn', href: 'https://www.linkedin.com/in/nmprofessor/' },
      { title: 'Instagram', href: 'https://www.instagram.com/noormosa.97/' },
      { title: 'Email', href: 'mailto:nmcryptoinvest@gmail.com?subject=Portfolio%20enquiry' },
    ],
  },
  {
    title: 'Legal',
    items: [
      { title: 'Privacy Policy', href: '/privacy' },
      { title: 'Terms of Service', href: '/terms' },
    ],
  },
]

export function SiteFooter() {
  return (
    <footer className="border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Icons.logo className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold font-heading text-primary">NM Portfolio</span>
            </div>
            <p className="text-muted-foreground">
              Full stack & AI engineer crafting FinTech platforms, intelligent directories, and immersive storytelling experiences with polish and measurable impact.
            </p>
            <div className="flex items-center space-x-4">
              <ThemeToggle />
            </div>
          </div>
          
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.items.map((item) => (
                  <li key={item.title}>
                    <Link
                      href={item.href}
                      className="text-muted-foreground transition-colors hover:text-foreground"
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="mt-12 border-t pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-center text-sm text-muted-foreground md:text-left">
              &copy; {new Date().getFullYear()} Noor Alden Mosa. All rights reserved.
            </p>
            <div className="flex items-center space-x-6">
              <Link
                href="/privacy"
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
