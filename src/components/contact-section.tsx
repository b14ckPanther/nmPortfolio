'use client'

import { motion } from 'framer-motion'
import { Mail, MapPin, Phone, Github, Linkedin, Instagram } from 'lucide-react'
import { ContactForm } from '@/components/contact-form'

const contactInfo = [
  {
    icon: <Mail className="h-6 w-6 text-primary" />,
    title: 'Email',
    description: 'nmcryptoinvest@gmail.com',
    href: 'mailto:nmcryptoinvest@gmail.com?subject=Portfolio%20enquiry',
  },
  {
    icon: <Phone className="h-6 w-6 text-primary" />,
    title: 'Phone',
    description: '+972 53-703-7440',
    href: 'tel:+972537037440',
  },
  {
    icon: <MapPin className="h-6 w-6 text-primary" />,
    title: 'Location',
    description: 'Haifa, Israel',
    href: 'https://maps.app.goo.gl/QZfx1kP8Dc6yV9m87',
  },
]

export function ContactSection() {
  return (
    <section id="contact" className="py-20 sm:py-24 lg:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Get In Touch
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Have a project in mind or want to chat? Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2">
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-semibold">Contact Information</h3>
              <p className="text-muted-foreground">
                I am always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>
              
              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <motion.a
                    key={index}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start space-x-4 group"
                    whileHover={{ x: 5 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                  >
                    <div className="flex-shrink-0 p-2 bg-muted rounded-lg">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-medium">{item.title}</h4>
                      <p className="text-muted-foreground group-hover:text-primary transition-colors">
                        {item.description}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="pt-8"
            >
              <h4 className="text-lg font-medium mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                {[
                  { name: 'GitHub', url: 'https://github.com/b14ckPanther', icon: <Github className="h-5 w-5" /> },
                  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/nmprofessor/', icon: <Linkedin className="h-5 w-5" /> },
                  { name: 'Instagram', url: 'https://www.instagram.com/noormosa.97/', icon: <Instagram className="h-5 w-5" /> },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-muted text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                    aria-label={social.name}
                  >
                    <span className="sr-only">{social.name}</span>
                    {social.icon}
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-card p-6 rounded-xl shadow-sm border"
          >
            <h3 className="text-2xl font-semibold mb-6">Send Me a Message</h3>
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
