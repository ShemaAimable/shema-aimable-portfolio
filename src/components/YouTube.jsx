export default function YouTube() {
  const videos = [
    {
      title: "What is an AI Product Owner?",
      description: "Breaking down the role and why it matters ",
      thumbnail: "https://www.youtube.com/@TheDisciplineMachineAI",
      link: "https://www.youtube.com/@TheDisciplineMachineAI"
    },
    {
      title: "How I Build AI Products in 30 Days",
      description: "My complete workflow from idea to launch",
      thumbnail: "https://www.youtube.com/@TheDisciplineMachineAI",
      link: "https://www.youtube.com/@TheDisciplineMachineAI"
    },
    {
      title: "AI Product Owner Mindset",
      description: "Thinking like a founder, not just an engineer",
      thumbnail: "https://www.youtube.com/@TheDisciplineMachineAI",
      link: "https://www.youtube.com/@TheDisciplineMachineAI"
    }
  ]

  return (
    <section id="youtube" className="bg-black text-white py-24 px-6 border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        
        <div className="text-center mb-16">
          <span className="text-gray-400 text-sm uppercase tracking-wider">Content Creation</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-2">
            AI Product Owner <br />
            <span className="text-gray-400">YouTube Channel</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Teaching AI product development, sharing insights, and building in public
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video, index) => (
            <a 
              key={index}
              href={video.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group cursor-pointer"
            >
              <div className="border border-white/10 rounded-2xl overflow-hidden hover:border-white/30 transition">
                <div className="bg-gradient-to-br from-red-900/20 to-black h-40 flex items-center justify-center">
                  <div className="text-6xl">🎥</div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold mb-1 group-hover:text-gray-300">
                    {video.title}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    {video.description}
                  </p>
                  <div className="text-red-500 text-sm mt-2 flex items-center gap-1">
                    <span>▶️</span> Watch on YouTube
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* YouTube Channel Link */}
        <div className="text-center mt-12">
          <a 
            href="https://www.youtube.com/@TheDisciplineMachineAI" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white rounded-full px-6 py-3 transition"
          >
            <span>▶️</span>
            Subscribe on YouTube
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  )
}