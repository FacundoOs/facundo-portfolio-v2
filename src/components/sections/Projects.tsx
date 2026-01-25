export default function Projects() {
  const projects = [
    {
      title: "Interactive AI Portfolio",
      description: "AI that talks about me and my projects. RAG + Next.js 15.",
      tech: ["Next.js 15", "OpenAI API", "TypeScript"],
      image: "/images/project1.jpg",
      link: "#",
      gradient: "from-cyan-500 to-blue-500"
    },
    {
      title: "Sambla - New Stack",
      description: "Complete Next.js migration + modern architecture (internal).",
      tech: ["Next.js", "TypeScript", "Vercel", "Tailwind"],
      image: "/images/project2.jpg",
      link: "#",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Personal AI Assistant", 
      description: "AI assistant for fitness/finance with LangChain.",
      tech: ["React", "LangChain", "Supabase", "Vercel"],
      image: "/images/project3.jpg",
      link: "#",
      gradient: "from-emerald-500 to-teal-500"
    }
  ]

  return (
    <section id="projects" className="py-32 bg-gradient-to-t from-black/30 to-transparent">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <h2 className="text-5xl lg:text-7xl font-black bg-gradient-to-r from-white via-cyan-100 to-purple-200 bg-clip-text text-transparent mb-6">
            Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <div 
              key={i} 
              className="group relative overflow-hidden rounded-3xl bg-black/40 backdrop-blur-xl border border-white/10 hover:border-white/30 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-cyan-500/20"
            >
              {/* Card background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
              
              {/* Image overlay */}
              <div className="relative h-64 bg-gradient-to-br from-gray-900/50 to-transparent group-hover:h-72 transition-all duration-700">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/50 to-transparent" />
                <div className="absolute inset-0 bg-[url('/images/project-placeholder.jpg')] bg-cover bg-center opacity-80 group-hover:opacity-100 transition-opacity" />
              </div>
              
              {/* Content */}
              <div className="relative p-8 pb-12">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-xs font-medium text-white">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-300 mb-6 leading-relaxed line-clamp-3">
                  {project.description}
                </p>
                
                <a 
                  href={project.link}
                  className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-medium group-hover:translate-x-1 transition-all duration-300"
                >
                  Ver proyecto
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
