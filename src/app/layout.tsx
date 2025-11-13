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

// Self-hosted Exo (Bold 700)
const exoBold = localFont({
  src: [
    {
      path: '../../public/fonts/Exo-Bold.woff2',
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
      url: 'https://nm97portfolio.vercel.app',
    },
  ],
  creator: 'Noor Alden Mosa',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://nm97portfolio.vercel.app',
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
  metadataBase: new URL('https://nm97portfolio.vercel.app'),
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon.ico', sizes: 'any' },
    ],
    shortcut: '/favicon.ico',
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
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
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes" />
        <meta name="theme-color" content="#0f172a" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="NM Portfolio" />
      </head>
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          openSans.variable,
          exoBold.variable
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
