import SectionHeading from '@/components/layout/SectionHeading'
import { experience } from '@/data/experience'

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-6 py-12">
      <SectionHeading label="Experience" title="Where I've worked" />

      <ul className="reveal">
        {experience.map((job) => (
          <li
            key={`${job.company}-${job.role}`}
            className="group grid gap-x-8 gap-y-2 border-t border-[var(--border)] py-6 sm:grid-cols-[10rem_1fr]"
          >
            <span className="mono pt-0.5 text-xs text-faint">{job.period}</span>

            <div className="min-w-0">
              <h3 className="text-[0.9375rem] font-medium text-text">
                {job.role}{' '}
                <span className="text-muted transition-colors duration-[160ms] group-hover:text-accent">
                  · {job.company}
                </span>
              </h3>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted">
                {job.description}
              </p>
              <p className="mono mt-3 text-xs text-faint">{job.tech.join(' / ')}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
