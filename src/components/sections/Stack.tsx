export default function Stack() {
  const categories = [
    {
      title: "Frontend",
      tech: ["Next.js 15", "React 18", "TypeScript", "Tailwind CSS"],
      gradient: "from-cyan-500 to-blue-500",
      icon: "⚛️"
    },
    {
      title: "Backend & Data",
      tech: ["Node.js", "Strapi v5", "Redis", "Docker"],
      gradient: "from-emerald-500 to-teal-500",
      icon: "🔧"
    },
    {
      title: "Cloud & DevOps",
      tech: ["Vercel", "Netlify", "AWS", "CI/CD"],
      gradient: "from-purple-500 to-pink-500",
      icon: "☁️"
    },
    {
      title: "AI & Modern",
      tech: ["OpenAI API", "LangChain", "RAG", "Vector DB"],
      gradient: "from-orange-500 to-red-500",
      icon: "🤖"
    }
  ]

  return (
    <section id="stack" className="py-32 bg-gradient-to-b from-transparent to-black/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <h2 className="text-5xl lg:text-7xl font-black bg-gradient-to-r from-white via-cyan-100 to-purple-200 bg-clip-text text-transparent mb-6">
            Tech Stack
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Technologies I use daily to build scalable products
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full mt-6" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, i) => (
            <div 
              key={i}
              className="group relative overflow-hidden rounded-3xl bg-black/30 backdrop-blur-xl border border-white/10 hover:border-white/30 p-10 hover:bg-white/5 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[0_0_50px_rgba(0,194,255,0.3)]"
            >
              {/* Gradient background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-20 transition-all duration-700`} />
              
              {/* Icon */}
              <div className="relative z-10 text-4xl mb-6 group-hover:scale-110 transition-transform duration-500">
                {category.icon}
              </div>
              
              {/* Category title */}
              <h3 className="text-2xl font-bold text-white mb-8 relative z-10 group-hover:text-cyan-300 transition-colors">
                {category.title}
              </h3>
              
              {/* Tech badges */}
              <div className="space-y-3">
                {category.tech.map((tech, j) => (
                  <div 
                    key={j}
                    className="group/tech flex items-center gap-3 p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:translate-x-2 hover:shadow-lg"
                  >
                    <div className="w-10 h-10 bg-gradient-to-r from-white/20 to-transparent rounded-lg flex items-center justify-center backdrop-blur-sm" />
                    <span className="font-medium text-gray-200 group-hover/tech:text-white transition-colors">
                      {tech}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
