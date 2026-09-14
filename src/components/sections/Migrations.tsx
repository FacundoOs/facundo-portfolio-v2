import SectionHeading from '@/components/layout/SectionHeading'
import GlowCard from '@/components/ui/GlowCard'
import { migrations } from '@/data/migrations'

export default function Migrations() {
  return (
    <section id="work" className="mx-auto max-w-6xl px-6 py-12">
      <SectionHeading
        label="Selected work"
        title="Migrations"
        subtitle="Moving live products onto new foundations without taking them down."
      />

      <ul className="reveal grid gap-3">
        {migrations.map((item) => (
          <GlowCard as="li" key={item.title} className="p-6">
            <div className="mono mb-4 flex items-center gap-2 text-xs">
              <span className="text-faint">{item.from}</span>
              <span className="text-faint/60">&rarr;</span>
              <span className="rounded border border-[var(--border)] bg-[var(--accent-dim)] px-2 py-0.5 text-accent">
                {item.to}
              </span>
            </div>

            <h3 className="text-base font-medium text-text">{item.title}</h3>
            <p className="mt-2.5 max-w-2xl text-sm leading-relaxed text-muted">
              {item.description}
            </p>
            <p className="mono mt-4 text-xs text-faint">{item.tech.join(' / ')}</p>
          </GlowCard>
        ))}
      </ul>
    </section>
  )
}
