export default function Thinking() {
  const principles = [
    {
      title: "AI is a Tool, Not a Magic Wand",
      description: "AI solves problems, but only when you understand the user's core need. I focus on practical AI that delivers real value.",
      icon: "🪄"
    },
    {
      title: "Data-Driven Decisions",
      description: "Every feature I build is backed by user data and behavioral analytics. If it doesn't move metrics, it doesn't ship.",
      icon: "📊"
    },
    {
      title: "Iterate Fast, Fail Fast",
      description: "I ship MVPs in 7 days, gather feedback in 48 hours, and iterate continuously. Speed is a competitive advantage.",
      icon: "⚡"
    },
    {
      title: "User Experience First",
      description: "The best AI is invisible. I design workflows that feel natural, not robotic or overwhelming.",
      icon: "🎯"
    },
    {
      title: "Execution Over Perfection",
      description: "A working product beats a perfect design. I prioritize shipping, learning, and improving.",
      icon: "🏃"
    },
    {
      title: "Ethical AI by Default",
      description: "No dark patterns. No manipulative AI. Just honest systems that genuinely help users grow.",
      icon: "🛡️"
    }
  ]

  return (
    <section id="thinking" className="bg-black text-white py-24 px-6 border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        
        <div className="text-center mb-16">
          <span className="text-gray-400 text-sm uppercase tracking-wider">Product Philosophy</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-2">
            How I Think About <br />
            <span className="text-gray-400">Building AI Products</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            6 principles that guide every decision I make as an AI Product Owner
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {principles.map((principle, index) => (
            <div key={index} className="border border-white/10 rounded-2xl p-6 hover:border-white/30 transition group">
              <div className="text-5xl mb-4">{principle.icon}</div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-gray-300 transition">
                {principle.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {principle.description}
              </p>
            </div>
          ))}
        </div>

        {/* Quote block */}
        <div className="mt-16 bg-gradient-to-r from-gray-900 to-black border border-white/10 rounded-2xl p-8 text-center">
          <p className="text-xl md:text-2xl italic text-gray-300">
            "I don't just build AI products — I build systems that <br />
            change how people work, think, and grow."
          </p>
          <p className="text-gray-500 mt-4">— Shema Aimable, AI Product Owner</p>
        </div>
      </div>
    </section>
  )
}