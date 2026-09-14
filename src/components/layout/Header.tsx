'use client'
import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'

/* Order mirrors the order of the sections on the page. */
const nav = [
  { href: '/#about', label: 'About' },
  { href: '/#direction', label: 'Direction' },
  { href: '/#experience', label: 'Experience' },
  { href: '/#work', label: 'Work' },
  { href: '/#projects', label: 'Projects' },
  { href: '/blog', label: 'Writing' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  /* On the home page, href="/" is a same-URL navigation the router treats as a
     no-op, so nothing scrolls. Handle it here instead. */
  const onLogoClick = (e: React.MouseEvent) => {
    if (pathname !== '/') return
    e.preventDefault()
    setOpen(false)
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    window.scrollTo({ top: 0, behavior: reduced ? 'auto' : 'smooth' })
  }

  return (
    /* Backdrop blur belongs here — floating chrome over content, not on cards. */
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[var(--border)] bg-[rgba(8,9,10,0.72)] backdrop-blur-xl backdrop-saturate-150">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6">
        <Link
          href="/"
          onClick={onLogoClick}
          className="mono text-sm text-text transition-opacity hover:opacity-70"
        >
          facundo osores
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {nav.map((i) => (
            <Link key={i.href} href={i.href} className="nav-link">
              {i.label}
            </Link>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden rounded-lg border border-[var(--border)] px-3.5 py-1.5 text-sm text-muted transition-colors duration-[160ms] ease-[var(--ease-spring)] hover:border-[var(--border-strong)] hover:text-text md:block"
        >
          Contact
        </a>

        <button
          className="-mr-2 rounded-lg p-2 text-muted transition-colors hover:text-text md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-[var(--border)] px-6 py-4 md:hidden">
          <ul className="space-y-1">
            {[...nav, { href: '#contact', label: 'Contact' }].map((i) => (
              <li key={i.href}>
                <Link
                  href={i.href}
                  onClick={() => setOpen(false)}
                  className="mobile-nav-link block py-2"
                >
                  {i.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}
