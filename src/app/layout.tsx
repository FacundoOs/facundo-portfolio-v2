import type { Metadata } from 'next'
import { Geist, Geist_Mono, Instrument_Serif } from 'next/font/google'
import './globals.css'
import { SITE_URL } from '@/data/person'

const sans = Geist({ subsets: ['latin'], variable: '--font-sans-stack' })
const mono = Geist_Mono({ subsets: ['latin'], variable: '--font-mono-stack' })
/* Display serif — the single biggest reason a dark dev-tool page reads as
   editorial rather than as a startup template. */
const display = Instrument_Serif({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-display-stack',
})

const title = 'Facundo Osores | Senior Fullstack Developer'
const description =
  'Senior fullstack developer in Stockholm. Next.js, React and TypeScript on loan-comparison platforms for the Nordic markets, working towards LLM and AI architecture.'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title,
  description,
  alternates: { canonical: '/' },
  openGraph: {
    type: 'profile',
    url: SITE_URL,
    siteName: 'Facundo Osores',
    title,
    description,
    locale: 'en_US',
  },
  twitter: { card: 'summary_large_image', title, description },
  robots: { index: true, follow: true },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable} ${display.variable}`}>
      <body>
        {children}
      </body>
    </html>
  )
}
