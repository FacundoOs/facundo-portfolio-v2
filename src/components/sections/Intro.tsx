import SectionHeading from '@/components/layout/SectionHeading'

export default function Intro() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-12">
      <SectionHeading label="About" title="What I actually do" />

      <div className="grid gap-x-14 gap-y-5 text-[0.9375rem] leading-relaxed text-muted sm:grid-cols-2">
        <p>
          I work across the whole stack rather than one end of it — interfaces, the services
          behind them, and the delivery pipeline that gets both into production.
        </p>
        <p>
          A lot of it is the less visible kind of engineering: migrating live products onto new
          foundations, auditing performance and security, and shipping releases across several
          markets without breaking them.
        </p>
        <p>
          I came to development from production and operations management, which is probably why
          I care more about how a system behaves in production than about how it looks in a
          diagram.
        </p>
        <p>
          Lately that has pulled me towards architecture — and towards the question of how LLM
          systems get built to be dependable rather than merely impressive.
        </p>
      </div>
    </section>
  )
}
