export default function Experience() {
  const experiences = [
    {
      company: 'Sambla',
      role: 'Senior Full Stack Developer',
      period: '2023 - Present',
      description: 'Led Next.js migration + modern architecture. AI applied to product.',
      tech: ['Next.js', 'React', 'TypeScript', 'Vercel']
    },
    {
      company: 'Freelance Projects',
      role: 'Full Stack Developer', 
      period: '2021 - 2023',
      description: 'Applications with integrated AI and scalable architectures.',
      tech: ['React', 'Node.js', 'AI APIs', 'Docker']
    }
  ]

  return (
    <section id="experience" className="py-32 bg-gradient-to-b from-black/50 to-transparent">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <h2 className="text-5xl lg:text-7xl font-black bg-gradient-to-r from-white via-cyan-100 to-purple-200 bg-clip-text text-transparent mb-6">
            Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full" />
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 lg:left-1/2 w-px h-full bg-gradient-to-b from-cyan-400/30 to-purple-500/30 transform -translate-x-1/2 lg:translate-x-0" />
          
          <div className="space-y-12 lg:space-y-20">
            {experiences.map((exp, i) => (
              <div key={i} className="flex items-start lg:items-center gap-8 lg:gap-12 group">
                {/* Timeline dot */}
                <div className="w-6 h-6 lg:w-8 lg:h-8 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full shadow-lg flex-shrink-0 z-10 relative">
                  <div className="w-3 h-3 lg:w-4 lg:h-4 bg-white/20 rounded-full absolute inset-1/2 -translate-x-1/2 -translate-y-1/2" />
                </div>
                
                {/* Content */}
                <div className="flex-1 lg:ml-12">
                  <div className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl p-8 lg:p-10 hover:bg-white/5 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/10 group-hover:translate-y-[-8px]">
                    <div className="flex items-baseline justify-between mb-4">
                      <h3 className="text-2xl lg:text-3xl font-bold text-white">{exp.role}</h3>
                      <span className="text-sm text-gray-400">{exp.period}</span>
                    </div>
                    <h4 className="text-xl font-semibold bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text text-transparent mb-4">
                      {exp.company}
                    </h4>
                    <p className="text-gray-300 mb-6 leading-relaxed">{exp.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((t) => (
                        <span key={t} className="px-4 py-1.5 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-sm font-medium text-gray-200 hover:bg-white/10 transition-all">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
