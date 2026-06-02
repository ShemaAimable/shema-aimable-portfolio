export default function GitHub() {
  const repos = [
    {
      name: "Discipline Machine AI",
      description: "AI-powered accountability coach that helps users build consistent habits",
      tech: "React, Node.js, OpenAI API",
      link: "https://github.com/ShemaAimable/discipline-machine-ai"
    },
    {
      name: "AI Product Toolkit",
      description: "Tools and templates for building AI products faster",
      tech: "Python, LangChain, FastAPI",
      link: "https://github.com/ShemaAimable/ai-product-toolkit"
    },
  ]

  return (
    <section id="github" className="bg-black text-white py-24 px-6 border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        
        <div className="text-center mb-16">
          <span className="text-gray-400 text-sm uppercase tracking-wider">Open Source</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-2">
            GitHub Projects
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Building in public — check out my latest AI projects
          </p>
        </div>

        {/* Changed from grid to flex with centered spacing */}
        <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto">
          {repos.map((repo, index) => (
            <a 
              key={index}
              href={repo.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block border border-white/10 rounded-2xl p-6 hover:border-white/30 transition group w-full md:w-[320px]"
            >
              <div className="text-3xl mb-3">📁</div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-gray-300">
                {repo.name}
              </h3>
              <p className="text-gray-400 text-sm mb-3">
                {repo.description}
              </p>
              <div className="text-xs text-gray-500">
                {repo.tech}
              </div>
            </a>
          ))}
        </div>

        {/* GitHub Profile Link */}
        <div className="text-center mt-12">
          <a 
            href="https://github.com/ShemaAimable" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-white/20 rounded-full px-6 py-3 hover:bg-white hover:text-black transition"
          >
            <span>🐙</span>
            View All Projects on GitHub
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  )
}