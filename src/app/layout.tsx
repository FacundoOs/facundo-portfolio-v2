import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import '@/components/sections/Home.module.css' // ← Import CSS modules global

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Juan Facundo Osores | Senior Full Stack Developer',
  description: 'IA aplicada a producto. React, Next.js, arquitectura moderna.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
