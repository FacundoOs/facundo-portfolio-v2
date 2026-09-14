const EMAIL = 'osores.facundo@gmail.com'

const socials = [
  { label: 'GitHub', href: 'https://github.com/FacundoOs' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/facundo-osores/' },
  { label: 'CV', href: '/cv.pdf' },
]

export default function Footer() {
  return (
    <footer id="contact" className="relative overflow-hidden border-t border-[var(--border)]">
      <div className="grid-bg" aria-hidden />

      <div className="relative mx-auto max-w-6xl px-6 py-12">
        <p className="eyebrow mb-3">Contact</p>
        <h2 className="display text-[2.5rem] text-text lg:text-[3.25rem]">
          Let&apos;s talk
        </h2>
        <p className="mt-3 max-w-md text-[0.9375rem] leading-relaxed text-muted">
          Open to conversations about platform work, architecture, and applied AI.
        </p>

        <a
          href={`mailto:${EMAIL}`}
          className="mt-8 inline-flex items-center gap-2 rounded-lg bg-text px-5 py-2.5 text-sm font-medium text-bg transition-[transform,opacity] duration-[160ms] ease-[var(--ease-spring)] hover:opacity-90 active:scale-[0.98]"
        >
          Send me an email
          <span aria-hidden>&rarr;</span>
        </a>

        <div className="mono mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-[var(--border)] pt-8 text-xs text-faint">
          <span>&copy; 2026 Juan Facundo Osores</span>
          <ul className="flex items-center gap-6">
            {socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target={s.href.startsWith('http') ? '_blank' : undefined}
                  rel={s.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="transition-colors duration-[160ms] hover:text-text"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}
