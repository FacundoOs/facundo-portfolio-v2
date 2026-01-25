'use client'
import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-[999] bg-[rgba(11,18,32,0.95)] backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2 group">
          <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center">
            <span className="text-xs font-bold text-white">FO</span>
          </div>
          <span className="font-bold text-xl bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent hidden md:block">
            Facundo Osores
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="#experience" className="nav-link">Experience</Link>
          <Link href="#projects" className="nav-link">Projects</Link>
          <Link href="#stack" className="nav-link">Stack</Link>
          <Link href="#blog" className="nav-link">Blog</Link>
          <a href="#contact" className="nav-link">Contact</a>
        </nav>

        {/* CTA Desktop */}
        <a 
          href="#contact" 
          className="hidden md:block bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white px-6 py-2 rounded-lg font-medium transition-all duration-200 shadow-lg hover:shadow-xl"
        >
          Get in touch
        </a>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 -mr-1 rounded-lg text-gray-300 hover:bg-white/10 transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${mobileOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <nav className="bg-[rgba(11,18,32,0.98)] backdrop-blur-xl border-t border-white/5 px-6 py-6 space-y-4">
          <Link href="#experience" className="mobile-nav-link block py-2">Experience</Link>
          <Link href="#projects" className="mobile-nav-link block py-2">Projects</Link>
          <Link href="#stack" className="mobile-nav-link block py-2">Stack</Link>
          <Link href="#blog" className="mobile-nav-link block py-2">Blog</Link>
          <a href="#contact" className="mobile-nav-link block py-2 font-medium">Contact</a>
        </nav>
      </div>
    </header>
  )
}
