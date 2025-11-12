import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy | Noor Alden Mosa',
  description:
    'Learn how Noor Alden Mosa handles personal information submitted through the portfolio website—covering contact forms, analytics, and data rights.',
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto max-w-4xl px-4 py-24 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Privacy Policy</h1>
        <p className="mt-4 text-muted-foreground">
          Effective date: {new Date().getFullYear()}.
        </p>

        <section className="mt-10 space-y-6 text-sm leading-relaxed text-muted-foreground">
          <p>
            I value your privacy. This policy explains what information this site collects, how it is used, and the
            choices you can make about your data.
          </p>

          <div>
            <h2 className="text-lg font-semibold text-foreground">Information I Collect</h2>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>
                <strong>Contact Form:</strong> Name, email address, company, and project details that you voluntarily
                submit so I can follow up about collaborations.
              </li>
              <li>
                <strong>Analytics:</strong> Anonymous, aggregated metrics (page views, referrers, device types) that
                help me understand traffic trends. No personally identifiable information is stored.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-foreground">How Your Information Is Used</h2>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>Responding to enquiries and collaborating on potential projects.</li>
              <li>Improving the content, accessibility, and performance of this website.</li>
              <li>Maintaining basic business records for accounting and legal compliance.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-foreground">Third-Party Services</h2>
            <p className="mt-3">
              Email communications are processed through trusted providers (e.g., Gmail). Analytics may be powered by
              privacy-focused services that do not store personal data.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-foreground">Data Retention</h2>
            <p className="mt-3">
              Contact form submissions are retained only as long as necessary to respond to your enquiry or maintain
              project records. You can request deletion at any time.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-foreground">Your Rights</h2>
            <p className="mt-3">
              You can request access, updates, or deletion of your personal data by emailing{' '}
              <Link href="mailto:nmcryptoinvest@gmail.com?subject=Portfolio%20enquiry" className="text-primary underline-offset-4 hover:underline">
                nmcryptoinvest@gmail.com
              </Link>
              .
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-foreground">Updates</h2>
            <p className="mt-3">
              This policy may be updated to reflect new functionality or legal requirements. The latest version will
              always be available on this page.
            </p>
          </div>
        </section>

        <p className="mt-10 text-sm text-muted-foreground">
          Questions? Reach out at{' '}
          <Link href="mailto:nmcryptoinvest@gmail.com?subject=Portfolio%20enquiry" className="text-primary underline-offset-4 hover:underline">
            nmcryptoinvest@gmail.com
          </Link>
          .
        </p>
      </main>
    </div>
  )
}

