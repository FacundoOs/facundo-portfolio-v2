import SectionHeading from '@/components/layout/SectionHeading'
import GlowCard from '@/components/ui/GlowCard'
import CodePanel from '@/components/ui/CodePanel'

const studying: { title: string; detail: string; href: string; secondary?: boolean }[] = [
  {
    title: 'LLM Engineering',
    detail: 'RAG, fine-tuning with LoRA, and building AI agents.',
    href: 'https://www.udemy.com/course/llm-engineering-master-ai-and-large-language-models/',
  },
  {
    title: 'AWS Solutions Architect — Associate',
    detail: 'Distributed systems and infrastructure design on AWS. SAA-C03.',
    href: 'https://www.udemy.com/course/aws-certified-solutions-architect-associate-saa-c03',
    secondary: true,
  },
]

export default function Direction() {
  return (
    <section id="direction" className="mx-auto max-w-6xl px-6 py-12">
      <SectionHeading label="Direction" title="Where I'm heading" />

      <p className="max-w-2xl text-[0.9375rem] leading-relaxed text-muted">
        I&apos;m working towards becoming an{' '}
        <span className="text-text">AI architect</span> — the person who decides how LLM
        systems get built: retrieval, agents, evaluation, guardrails, and what it costs to
        run them. The platform judgement I use now transfers; the applied AI half is what
        I&apos;m building.
      </p>

      <div className="reveal mt-12 grid items-start gap-10 lg:grid-cols-[1fr_1.15fr]">
        <div className="min-w-0">
          <p className="eyebrow mb-4">Currently studying</p>

          <ul className="grid gap-3">
        {studying.map((c) => (
          <GlowCard as="li" key={c.title}>
            <a
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-full flex-col p-5"
            >
              <span className="text-[0.9375rem] font-medium text-text">{c.title}</span>
              <span className="mt-2 flex-1 text-sm leading-relaxed text-muted">{c.detail}</span>
              <span className="mono mt-4 flex items-center gap-2 text-xs text-faint transition-colors duration-[160ms] group-hover:text-accent">
                {c.secondary ? 'Alongside' : 'Main focus'} &rarr;
              </span>
            </a>
          </GlowCard>
            ))}
          </ul>
        </div>

        <div className="min-w-0">
          <p className="eyebrow mb-4">Structured data on this page</p>
          <CodePanel />
          <p className="mono mt-3 text-[10.5px] text-faint">
            GEO is part of my current work — this page practises it.
          </p>
        </div>
      </div>
    </section>
  )
}
