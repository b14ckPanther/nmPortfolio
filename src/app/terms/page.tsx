import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Terms of Service | Noor Alden Mosa',
  description:
    'Understand the terms of use for Noor Alden Mosa’s portfolio website, including acceptable use, liability, and contact details.',
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto max-w-4xl px-4 py-24 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Terms of Service</h1>
        <p className="mt-4 text-muted-foreground">
          Effective date: {new Date().getFullYear()}.
        </p>

        <section className="mt-10 space-y-6 text-sm leading-relaxed text-muted-foreground">
          <p>
            These terms govern your use of this website. By accessing or using the site, you agree to the following
            conditions. If you do not agree, please discontinue use.
          </p>

          <div>
            <h2 className="text-lg font-semibold text-foreground">Purpose of the Site</h2>
            <p className="mt-3">
              The site showcases the professional work of Noor Alden Mosa and provides channels to initiate consulting or
              freelance engagements.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-foreground">Acceptable Use</h2>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>Do not misuse the contact form for solicitation, spam, or unlawful activities.</li>
              <li>Do not attempt to copy, reverse engineer, or exploit the site code without explicit permission.</li>
              <li>Do not introduce malware, malicious scripts, or perform actions that may disrupt the service.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-foreground">Intellectual Property</h2>
            <p className="mt-3">
              All branding, case studies, and original content remain the intellectual property of Noor Alden Mosa unless
              otherwise noted. You may reference portfolio work with attribution, but please request consent before using
              assets in promotional material.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-foreground">No Warranty</h2>
            <p className="mt-3">
              The site is provided “as is” without warranties of any kind. While I strive for accuracy, the content may
              include technical or typographical errors. Information is subject to change without notice.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-foreground">Limitation of Liability</h2>
            <p className="mt-3">
              I am not liable for any direct, indirect, incidental, or consequential damages arising from your use of the
              site or reliance on its content.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-foreground">Third-Party Links</h2>
            <p className="mt-3">
              External links (e.g., GitHub, LinkedIn, Vercel deployments) are provided for convenience. I am not
              responsible for the content or practices of those third-party sites.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-foreground">Changes to These Terms</h2>
            <p className="mt-3">
              Terms may be updated at any time. Continued use of the site after changes constitutes acceptance of the
              revised terms.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-foreground">Contact</h2>
            <p className="mt-3">
              For questions about these terms, email{' '}
              <Link href="mailto:nmcryptoinvest@gmail.com?subject=Portfolio%20enquiry" className="text-primary underline-offset-4 hover:underline">
                nmcryptoinvest@gmail.com
              </Link>
              .
            </p>
          </div>
        </section>
      </main>
    </div>
  )
}

