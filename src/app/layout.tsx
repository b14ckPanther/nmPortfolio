import type { Metadata } from "next";
import localFont from 'next/font/local';
import { ThemeProvider } from 'next-themes';
import { cn } from '@/lib/utils';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { TailwindIndicator } from '@/components/tailwind-indicator';
import { Toaster } from '@/components/ui/toaster';
import "./globals.min.css";

// Self-hosted Open Sans (Regular 400)
const openSans = localFont({
  src: [
    {
      path: '../../public/fonts/OpenSans-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--font-sans',
});

// Self-hosted Dancing Script (Bold 700)
const dancingScript = localFont({
  src: [
    {
      path: '../../public/fonts/DancingScript-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--font-heading',
});

export const metadata: Metadata = {
  title: 'NM Portfolio',
  description: 'Full stack & AI engineer delivering FinTech platforms, intelligent directories, and immersive storytelling products.',
  keywords: [
    'Noor Alden Mosa',
    'Full Stack Developer',
    'AI Engineer',
    'UI/UX Designer',
    'FinTech',
    'React',
    'Next.js',
    'TypeScript',
    'JavaScript',
    'Flutter',
    'Dart',
    'Java',
    'C',
    'Supabase',
    'AI/ML',
    'Portfolio',
  ],
  authors: [
    {
      name: 'Noor Alden Mosa',
      url: 'https://nooralden.com',
    },
  ],
  creator: 'Noor Alden Mosa',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://nooralden.com',
    title: 'nmPortfolio | Noor Alden Mosa',
    description: 'Full stack & AI engineer delivering FinTech platforms, intelligent directories, and immersive storytelling products.',
    siteName: 'Noor Alden Mosa',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Noor Alden Mosa - Full Stack & AI Engineer Portfolio',
      },
    ],
  },
  metadataBase: new URL('https://nooralden.com'),
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: '/logo-nm.png',
    shortcut: ['/favicon-16x16.png', '/logo-nm.png'],
    apple: '/logo-nm.png',
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          openSans.variable,
          dancingScript.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col">
            <SiteHeader />
            <main className="flex-1">{children}</main>
            <SiteFooter />
          </div>
          <TailwindIndicator />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
