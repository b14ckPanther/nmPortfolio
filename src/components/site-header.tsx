'use client'

import * as React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import type { Variants } from 'framer-motion'
import { X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Icons } from '@/components/icons'
import { ThemeToggle } from '@/components/theme-toggle'

// Navigation item type
type NavItem = {
  title: string
  href: string
  disabled?: boolean
  sectionId?: string
}

// Main navigation items
const mainNavItems: NavItem[] = [
  {
    title: 'Home',
    href: '/',
  },
  {
    title: 'About',
    href: '/#about',
    sectionId: 'about',
  },
  {
    title: 'Projects',
    href: '/#projects',
    sectionId: 'projects',
  },
  {
    title: 'Experience',
    href: '/experience',
  },
  {
    title: 'Skills',
    href: '/#skills',
    sectionId: 'skills',
  },
  {
    title: 'Contact',
    href: '/#contact',
    sectionId: 'contact',
  },
]

// Social media links
const socialLinks = [
  {
    name: 'GitHub',
    href: 'https://github.com/b14ckPanther',
    icon: 'github',
    color: 'hover:text-gray-800 dark:hover:text-gray-200',
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/nmprofessor/',
    icon: 'linkedin',
    color: 'hover:text-blue-600 dark:hover:text-blue-400',
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/noormosa.97/',
    icon: 'instagram',
    color: 'hover:text-pink-600 dark:hover:text-pink-400',
  },
]

// Animation variants for Framer Motion
const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
}

const item: Variants = {
  hidden: { y: -20, opacity: 0 },
  show: { 
    y: 0, 
    opacity: 1, 
    transition: { 
      type: 'spring' as const, 
      stiffness: 300, 
      damping: 24 
    } 
  },
}

const menuItemVariants: Variants = {
  closed: { 
    opacity: 0, 
    y: 20,
    transition: { duration: 0.2 }
  },
  open: { 
    opacity: 1, 
    y: 0,
    transition: { 
      type: 'spring',
      stiffness: 300,
      damping: 30
    }
  }
}

const menuContainerVariants: Variants = {
  closed: {
    opacity: 0,
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
      delayChildren: 0
    }
  },
  open: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1
    }
  }
}

export function SiteHeader() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = React.useState(false)
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  const toggleMenu = React.useCallback(() => {
    setIsMenuOpen((prev) => {
      const newState = !prev
      // Update body overflow immediately
      document.body.style.overflow = newState ? 'hidden' : 'unset'
      return newState
    })
  }, [])

  const closeMenu = React.useCallback(() => {
    setIsMenuOpen(false)
    document.body.style.overflow = 'unset'
  }, [])

  const handleNavClick = React.useCallback(
    (event: React.MouseEvent<HTMLAnchorElement>, navItem: NavItem) => {
      // Always close menu immediately
      setIsMenuOpen(false)
      document.body.style.overflow = 'unset'
      
      if (navItem.sectionId) {
        event.preventDefault()
        // Wait for menu to start closing, then scroll
        requestAnimationFrame(() => {
          setTimeout(() => {
            const element = document.getElementById(navItem.sectionId!)
            if (element) {
              element.scrollIntoView({ behavior: 'smooth', block: 'start' })
            }
          }, 100)
        })
      }
      // For non-section links, the default navigation will happen
    },
    []
  )

  // Handle scroll effect
  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Prevent scrolling when menu is open
  React.useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      // Ensure scroll is restored when menu closes
      document.body.style.overflow = 'unset'
    }
    return () => {
      // Cleanup: always restore scroll on unmount
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  // Close menu on route change (but not on initial mount)
  React.useEffect(() => {
    // Only close if menu is open and pathname actually changed
    if (isMenuOpen) {
      closeMenu()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])

  // Close menu on Escape key
  React.useEffect(() => {
    if (!isMenuOpen) return
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeMenu()
      }
    }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [isMenuOpen, closeMenu])

  return (
    <motion.header 
      className={cn(
        'fixed top-0 z-50 w-full transition-all duration-300',
        scrolled ? 'bg-background/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-6">
        {/* Logo */}
        <motion.div 
          className="flex items-center"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <Link href="/" className="group flex items-center space-x-2 rounded-lg p-1.5 transition hover:bg-primary/5">
            <Icons.logo className="h-8 w-8 text-primary" />
            <span className="text-xl font-heading text-primary">
              NM Portfolio
            </span>
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden items-center space-x-1 md:flex">
          <motion.ul 
            className="flex items-center space-x-1"
            variants={container}
            initial="hidden"
            animate="show"
          >
            {mainNavItems.map((navItem) => {
              const isActive = navItem.sectionId
                ? pathname === '/' && navItem.href === '/#about'
                : pathname === navItem.href || pathname.startsWith(`${navItem.href}/`)
              return (
                <motion.li key={navItem.href} variants={item}>
                  <Link
                    href={navItem.href}
                    prefetch={navItem.sectionId ? false : undefined}
                    className="relative px-4 py-2 text-sm font-medium text-foreground transition-colors"
                    onClick={(event) => handleNavClick(event, navItem)}
                  >
                    {navItem.title}
                    <span 
                      className="absolute bottom-0 left-0 h-0.5 w-full bg-gradient-to-r from-primary to-accent opacity-70"
                    />
                  </Link>
                </motion.li>
              )
            })}
          </motion.ul>
        </nav>

        {/* Desktop Social Links & Theme Toggle */}
        <div className="hidden items-center space-x-2 md:flex">
          <motion.div 
            className="flex items-center space-x-2"
            variants={container}
            initial="hidden"
            animate="show"
          >
            {socialLinks.map((social) => (
              <motion.div key={social.name} variants={item}>
                <Link
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    'flex h-10 w-10 items-center justify-center rounded-full transition-colors',
                    'text-muted-foreground hover:text-foreground',
                    social.color
                  )}
                  aria-label={social.name}
                >
                  {React.createElement(Icons[social.icon as keyof typeof Icons], {
                    className: 'h-5 w-5',
                  })}
                </Link>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div variants={item}>
            <ThemeToggle />
          </motion.div>
        </div>

        {/* Mobile Menu Button - Elegant Morphing Icon */}
        <button
          type="button"
          className="group relative z-[60] flex h-12 w-12 cursor-pointer items-center justify-center md:hidden"
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
          style={{ pointerEvents: 'auto' }}
        >
          <div className="relative flex h-5 w-6 flex-col items-center justify-center pointer-events-none">
            {/* Top line */}
            <motion.span
              className="absolute h-[2px] w-6 origin-center rounded-full bg-gradient-to-r from-primary to-accent"
              animate={{
                rotate: isMenuOpen ? 45 : 0,
                y: isMenuOpen ? 0 : -6,
                opacity: 1,
              }}
              transition={{
                type: 'spring',
                stiffness: 400,
                damping: 30,
              }}
            />
            {/* Middle line */}
            <motion.span
              className="absolute h-[2px] w-6 origin-center rounded-full bg-gradient-to-r from-primary to-accent"
              animate={{
                opacity: isMenuOpen ? 0 : 1,
                scale: isMenuOpen ? 0 : 1,
              }}
              transition={{
                type: 'spring',
                stiffness: 400,
                damping: 30,
              }}
            />
            {/* Bottom line */}
            <motion.span
              className="absolute h-[2px] w-6 origin-center rounded-full bg-gradient-to-r from-primary to-accent"
              animate={{
                rotate: isMenuOpen ? -45 : 0,
                y: isMenuOpen ? 0 : 6,
                opacity: 1,
              }}
              transition={{
                type: 'spring',
                stiffness: 400,
                damping: 30,
              }}
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen ? (
          <>
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.2 } }}
              className="fixed inset-0 z-40 bg-background/95 backdrop-blur-md"
              onClick={closeMenu}
            />
            <motion.div
              key="menu-content"
              variants={menuContainerVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="fixed inset-0 z-50 flex flex-col items-center justify-center pointer-events-none"
              onClick={(e) => e.stopPropagation()}
            >
              <nav 
                className="flex flex-col items-center space-y-8 pointer-events-auto"
                onClick={(e) => e.stopPropagation()}
              >
                {mainNavItems.map((navItem) => {
                  const isActive = navItem.sectionId
                    ? pathname === '/' && navItem.href === '/#about'
                    : pathname === navItem.href || pathname.startsWith(`${navItem.href}/`)
                  
                  return (
                    <motion.div 
                      key={navItem.href} 
                      variants={menuItemVariants}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Link
                        href={navItem.href}
                        prefetch={navItem.sectionId ? false : undefined}
                        onClick={(event) => {
                          event.stopPropagation()
                          handleNavClick(event, navItem)
                        }}
                        className={cn(
                          'relative text-4xl font-light tracking-wide transition-colors',
                          'text-foreground/80 hover:text-foreground',
                          isActive && 'text-foreground'
                        )}
                      >
                        <span className="font-heading text-5xl">{navItem.title}</span>
                        {isActive && (
                          <motion.span
                            layoutId="mobileActiveIndicator"
                            className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-accent"
                            initial={false}
                          />
                        )}
                      </Link>
                    </motion.div>
                  )
                })}
              </nav>

              {/* Social Links */}
              <motion.div
                variants={menuItemVariants}
                className="mt-16 flex items-center space-x-6 pointer-events-auto"
                onClick={(e) => e.stopPropagation()}
              >
                {socialLinks.map((social) => (
                  <Link
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className={cn(
                      'flex h-12 w-12 items-center justify-center rounded-full transition-colors',
                      'text-muted-foreground hover:text-foreground',
                      social.color
                    )}
                    aria-label={social.name}
                  >
                    {React.createElement(Icons[social.icon as keyof typeof Icons], {
                      className: 'h-6 w-6',
                    })}
                  </Link>
                ))}
                <div 
                  onClick={(e) => e.stopPropagation()}
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-white dark:bg-gray-900"
                >
                  <ThemeToggle dropdownClassName="bg-white dark:bg-gray-900" />
                </div>
              </motion.div>
            </motion.div>
          </>
        ) : null}
      </AnimatePresence>
    </motion.header>
  )
}
