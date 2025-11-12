import { type LucideProps } from 'lucide-react'
import dynamic from 'next/dynamic'

// Icons are dynamically imported to reduce initial bundle size
export const Icons = {
  logo: dynamic<LucideProps>(() =>
    import('lucide-react').then((mod) => mod.Code2)
  ),
  github: dynamic<LucideProps>(() =>
    import('lucide-react').then((mod) => mod.Github)
  ),
  linkedin: dynamic<LucideProps>(() =>
    import('lucide-react').then((mod) => mod.Linkedin)
  ),
  twitter: dynamic<LucideProps>(() =>
    import('lucide-react').then((mod) => mod.Twitter)
  ),
  instagram: dynamic<LucideProps>(() =>
    import('lucide-react').then((mod) => mod.Instagram)
  ),
  mail: dynamic<LucideProps>(() =>
    import('lucide-react').then((mod) => mod.Mail)
  ),
  menu: dynamic<LucideProps>(() =>
    import('lucide-react').then((mod) => mod.Menu)
  ),
  close: dynamic<LucideProps>(() =>
    import('lucide-react').then((mod) => mod.X)
  ),
  chevronRight: dynamic<LucideProps>(() =>
    import('lucide-react').then((mod) => mod.ChevronRight)
  ),
  chevronDown: dynamic<LucideProps>(() =>
    import('lucide-react').then((mod) => mod.ChevronDown)
  ),
  externalLink: dynamic<LucideProps>(() =>
    import('lucide-react').then((mod) => mod.ExternalLink)
  ),
  arrowRight: dynamic<LucideProps>(() =>
    import('lucide-react').then((mod) => mod.ArrowRight)
  ),
  sun: dynamic<LucideProps>(() =>
    import('lucide-react').then((mod) => mod.Sun)
  ),
  moon: dynamic<LucideProps>(() =>
    import('lucide-react').then((mod) => mod.Moon)
  ),
  laptop: dynamic<LucideProps>(() =>
    import('lucide-react').then((mod) => mod.Laptop)
  ),
  link: dynamic<LucideProps>(() =>
    import('lucide-react').then((mod) => mod.Link)
  ),
  code: dynamic<LucideProps>(() =>
    import('lucide-react').then((mod) => mod.Code)
  ),
  terminal: dynamic<LucideProps>(() =>
    import('lucide-react').then((mod) => mod.Terminal)
  ),
  briefcase: dynamic<LucideProps>(() =>
    import('lucide-react').then((mod) => mod.Briefcase)
  ),
  user: dynamic<LucideProps>(() =>
    import('lucide-react').then((mod) => mod.User)
  ),
  home: dynamic<LucideProps>(() =>
    import('lucide-react').then((mod) => mod.Home)
  ),
  fileText: dynamic<LucideProps>(() =>
    import('lucide-react').then((mod) => mod.FileText)
  ),
  mailOpen: dynamic<LucideProps>(() =>
    import('lucide-react').then((mod) => mod.MailOpen)
  ),
  phone: dynamic<LucideProps>(() =>
    import('lucide-react').then((mod) => mod.Phone)
  ),
  mapPin: dynamic<LucideProps>(() =>
    import('lucide-react').then((mod) => mod.MapPin)
  ),
  calendar: dynamic<LucideProps>(() =>
    import('lucide-react').then((mod) => mod.Calendar)
  ),
  check: dynamic<LucideProps>(() =>
    import('lucide-react').then((mod) => mod.Check)
  ),
  loader: dynamic<LucideProps>(() =>
    import('lucide-react').then((mod) => mod.Loader2)
  ),
  send: dynamic<LucideProps>(() =>
    import('lucide-react').then((mod) => mod.Send)
  ),
  arrowUpRight: dynamic<LucideProps>(() =>
    import('lucide-react').then((mod) => mod.ArrowUpRight)
  ),
  // Add more icons as needed
} as const

export type IconName = keyof typeof Icons
