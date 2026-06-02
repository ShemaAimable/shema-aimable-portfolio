export default function Workflow() {
  const steps = [
    {
      number: "01",
      title: "Discovery & Problem Validation",
      description: "I interview users, analyze pain points, and validate if AI is the right solution before writing any code.",
      icon: "🔍"
    },
    {
      number: "02",
      title: "AI Architecture Design",
      description: "Map out the prompt chains, context windows, and decision trees that power the AI behavior.",
      icon: "🏗️"
    },
    {
      number: "03",
      title: "Rapid Prototyping",
      description: "Build functional MVP in 1-2 weeks using modern AI stack (OpenAI, LangChain, Vector DBs).",
      icon: "⚡"
    },
    {
      number: "04",
      title: "User Testing & Iteration",
      description: "Real users. Real feedback. Real improvements. I close the loop in 48 hours.",
      icon: "🔄"
    },
    {
      number: "05",
      title: "Launch & Monitor",
      description: "Deploy, track metrics, and continuously optimize based on user behavior data.",
      icon: "🚀"
    }
  ]

  return (
    <section className="bg-black text-white py-24 px-6 border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        
        <div className="text-center mb-16">
          <span className="text-gray-400 text-sm uppercase tracking-wider">My Process</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-2">
            AI Product Builder<br />
            <span className="text-gray-400 text-xl md:text-2xl mt-2 block">From Idea to Launch in 30 Days</span>
          </h2>
        </div>

        <div className="space-y-6">
          {steps.map((step, index) => (
            <div key={index} className="border border-white/10 rounded-2xl p-6 hover:border-white/30 transition group">
              <div className="flex flex-col md:flex-row md:items-center gap-6">
                <div className="flex items-center gap-4 md:w-1/4">
                  <span className="text-4xl">{step.icon}</span>
                  <span className="text-3xl font-bold text-gray-500">{step.number}</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-white transition">
                    {step.title}
                  </h3>
                  <p className="text-gray-400">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Workflow visualization */}
        <div className="mt-16 bg-gradient-to-r from-gray-900 to-black border border-white/10 rounded-2xl p-8 text-center">
          <div className="flex flex-wrap justify-center gap-8 items-center">
            <div className="text-center">
              <div className="text-2xl mb-2">💡</div>
              <div className="text-sm text-gray-400">Idea</div>
            </div>
            <div className="text-gray-600 text-2xl">→</div>
            <div className="text-center">
              <div className="text-2xl mb-2">🤖</div>
              <div className="text-sm text-gray-400">AI Prototype</div>
            </div>
            <div className="text-gray-600 text-2xl">→</div>
            <div className="text-center">
              <div className="text-2xl mb-2">🧪</div>
              <div className="text-sm text-gray-400">Test</div>
            </div>
            <div className="text-gray-600 text-2xl">→</div>
            <div className="text-center">
              <div className="text-2xl mb-2">📊</div>
              <div className="text-sm text-gray-400">Launch</div>
            </div>
            <div className="text-gray-600 text-2xl">→</div>
            <div className="text-center">
              <div className="text-2xl mb-2">📈</div>
              <div className="text-sm text-gray-400">Scale</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}