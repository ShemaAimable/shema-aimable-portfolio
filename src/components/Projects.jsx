export default function Projects() {
  return (
    <section id="projects" className="bg-black text-white py-24 px-6 border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        
        <div className="text-center mb-16">
          <span className="text-gray-400 text-sm uppercase tracking-wider">Flagship Product</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-2">
            Discipline Machine AI
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            An AI-powered system that helps people build consistency, not just motivation
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Left side - Product Info */}
          <div className="space-y-6">
            <div className="border-l-4 border-white pl-4">
              <h3 className="text-2xl font-bold">The Problem</h3>
              <p className="text-gray-300 mt-2">
                Most people rely on motivation — which fades. Discipline Machine AI uses 
                behavioral psychology + AI to create lasting habits.
              </p>
            </div>

            <div className="border-l-4 border-gray-600 pl-4">
              <h3 className="text-2xl font-bold">The Solution</h3>
              <p className="text-gray-300 mt-2">
                An AI accountability coach that checks in daily, adapts to your behavior, 
                and uses reinforcement loops to build unstoppable consistency.
              </p>
            </div>

            <div className="border-l-4 border-gray-600 pl-4">
              <h3 className="text-2xl font-bold">Key Metrics</h3>
              <div className="grid grid-cols-2 gap-4 mt-3">
                <div>
                  <div className="text-3xl font-bold text-white">87%</div>
                  <div className="text-gray-400 text-sm">User retention</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white">2,500+</div>
                  <div className="text-gray-400 text-sm">Habits tracked</div>
                </div>
              </div>
            </div>

            <a href="https://www.youtube.com/@TheDisciplineMachineAI" target="_blank" rel="noopener noreferrer">
  <button className="bg-white text-black px-6 py-3 rounded-full font-semibold mt-4 hover:bg-gray-200 transition">
    Watch Demo Video →
  </button>
</a>
          </div>

          {/* Right side - Visual representation */}
          <div className="bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-2xl p-8">
            <div className="text-center">
              <div className="text-6xl mb-4">⚙️</div>
              <h4 className="text-xl font-bold mb-3">AI Workflow</h4>
              <div className="space-y-3 text-gray-300 text-sm">
                <div className="flex justify-between border-b border-white/10 py-2">
                  <span>Daily Check-in</span>
                  <span>🤖 AI Analysis</span>
                </div>
                <div className="flex justify-between border-b border-white/10 py-2">
                  <span>Behavior Adaptation</span>
                  <span>📊 Progress Tracking</span>
                </div>
                <div className="flex justify-between py-2">
                  <span>Accountability Loop</span>
                  <span>🎯 Consistency Score</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}