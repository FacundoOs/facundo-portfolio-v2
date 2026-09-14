import Image from 'next/image'

const links = [
  { label: 'Get in touch', href: 'mailto:osores.facundo@gmail.com', primary: true },
  { label: 'Download CV', href: '/cv.pdf' },
]

export default function HomeHero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="grid-bg" aria-hidden />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 pt-28 pb-16 lg:grid-cols-[1fr_20rem] lg:gap-16 lg:pt-32 lg:pb-20">
        <div className="relative min-w-0">
          <div className="enter enter-1 mb-7 inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-3 py-1">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
            <span className="mono text-[11px] tracking-wide text-muted">
              Senior Fullstack Developer &middot; Stockholm
            </span>
          </div>

          {/* Name reads as a byline over the statement, not as a caption. */}
          <p className="display enter enter-2 mb-4 text-[1.75rem] text-muted sm:text-[2.25rem]">
            Facundo Osores
          </p>

          <h1 className="display display-hero enter enter-3 text-[3rem] text-text sm:text-[4rem] lg:text-[4.75rem]">
            From platform engineering
            <br />
            to <span className="text-accent">AI architecture</span>
          </h1>

          <p className="enter enter-4 mt-8 max-w-xl text-[1.0625rem] leading-relaxed text-muted">
            I build loan-comparison platforms for the Nordic markets — Next.js and TypeScript on
            the front, Node.js services on AWS behind them. Now working towards architecture for
            LLM and AI systems.
          </p>

          <div className="enter enter-5 mt-10 flex flex-wrap items-center gap-2.5">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className={
                  l.primary
                    ? 'rounded-lg bg-text px-5 py-2.5 text-sm font-medium text-bg transition-[transform,opacity] duration-[160ms] ease-[var(--ease-spring)] hover:opacity-90 active:scale-[0.98]'
                    : 'rounded-lg border border-[var(--border)] px-5 py-2.5 text-sm text-muted transition-colors duration-[160ms] ease-[var(--ease-spring)] hover:border-[var(--border-strong)] hover:text-text'
                }
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>

        {/* Desktop: full portrait in its own column. */}
        <div className="portrait-enter relative hidden lg:block lg:w-full">
          <div
            className="absolute -inset-12 -z-10 rounded-full opacity-40 blur-3xl"
            style={{ background: 'radial-gradient(circle, rgba(110,139,255,0.35), transparent 70%)' }}
            aria-hidden
          />
          <Image
            src="/images/facundo.jpeg"
            alt="Facundo Osores"
            width={768}
            height={1365}
            priority
            sizes="20rem"
            className="portrait-fade w-full"
          />
        </div>
      </div>
    </section>
  )
}
