import Image from 'next/image'
import SectionHeading from '@/components/layout/SectionHeading'
import GlowCard from '@/components/ui/GlowCard'
import { projects } from '@/data/projects'

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-12">
      <SectionHeading label="Projects" title="Things I've shipped" />

      <ul className="reveal grid gap-3 sm:grid-cols-2">
        {projects.map((project) => (
          <GlowCard as="li" key={project.title} className="flex flex-col overflow-hidden">
            {project.image && (
              <div className="relative h-36 border-b border-[var(--border)]">
                <Image
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  fill
                  sizes="(min-width: 640px) 22rem, 100vw"
                  className="object-cover opacity-55 transition-opacity duration-300 hover:opacity-80"
                />
              </div>
            )}

            <div className="flex flex-1 flex-col p-5">
              <h3 className="text-[0.9375rem] font-medium text-text">{project.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                {project.description}
              </p>
              <p className="mono mt-4 text-xs text-faint">{project.tech.join(' / ')}</p>

              <div className="mono mt-4 flex items-center gap-4 border-t border-[var(--border)] pt-4 text-xs">
                {project.repo && (
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-faint transition-colors duration-[160ms] hover:text-text"
                  >
                    Code &rarr;
                  </a>
                )}
              </div>
            </div>
          </GlowCard>
        ))}
      </ul>
    </section>
  )
}
