import SectionHeading from '@/components/layout/SectionHeading'
import { stackGroups } from '@/data/stack'

/**
 * Some brand marks are black or near-black (Next.js, Vercel, Express) and are
 * invisible on this background. Anything below the luminance floor renders in
 * the foreground colour instead.
 */
function markColour(hex?: string) {
  if (!hex) return 'var(--text)'
  const [r, g, b] = [0, 2, 4].map((i) => parseInt(hex.slice(i, i + 2), 16) / 255)
  const lum = 0.2126 * r + 0.7152 * g + 0.0722 * b
  return lum < 0.28 ? 'var(--text)' : `#${hex}`
}

export default function Stack() {
  return (
    <section id="stack" className="mx-auto max-w-6xl px-6 py-12">
      <SectionHeading label="Stack" title="What I reach for" />

      <div className="reveal grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
        {stackGroups.map((group) => (
          <div key={group.title}>
            <h3 className="eyebrow mb-5 border-t border-[var(--border)] pt-4">{group.title}</h3>

            <ul className="space-y-1">
              {group.tech.map((t) => (
                <li key={t.name}>
                  <span className="group flex items-center gap-2.5 rounded-lg px-2 py-1.5 -mx-2 transition-colors duration-[160ms] hover:bg-[var(--surface-hover)]">
                    {t.d ? (
                      <svg
                        viewBox="0 0 24 24"
                        className="h-[15px] w-[15px] shrink-0 opacity-70 transition-opacity duration-[160ms] group-hover:opacity-100"
                        style={{ color: markColour(t.hex) }}
                        fill="currentColor"
                        aria-hidden
                      >
                        <path d={t.d} />
                      </svg>
                    ) : (
                      <span className="mono flex h-[15px] w-[15px] shrink-0 items-center justify-center rounded-[3px] border border-[var(--border-strong)] text-[7px] text-faint">
                        {t.name.slice(0, 3).toLowerCase()}
                      </span>
                    )}
                    <span className="text-sm text-muted transition-colors duration-[160ms] group-hover:text-text">
                      {t.name}
                    </span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
