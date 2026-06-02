export default function About() {
  return (
    <section className="bg-black text-white py-24 px-6 border-t border-white/10">
      <div className="max-w-4xl mx-auto">
        
        <div className="text-center mb-12">
          <span className="text-gray-400 text-sm uppercase tracking-wider">The Story</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            From Student to AI Product Owner
          </h2>
        </div>

        <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
          <p>
            I'm Shema Aimable — a software engineering student who realized something early: 
            <span className="text-white font-semibold"> execution &gt; theory</span>.
          </p>

          <p>
            While everyone was building todo apps, I started building <span className="text-white">AI-powered systems</span> 
            that actually change behavior. My flagship product? <span className="text-white">Discipline Machine AI</span> — 
            an AI coach that helps people build consistency, not just motivation.
          </p>

          <p>
            Today, I bridge the gap between engineering and product thinking. 
            I don't just write code — I <span className="text-white">own the product vision, the AI workflow, and the user outcomes.</span>
          </p>

          <div className="grid md:grid-cols-3 gap-4 mt-8 pt-4">
            <div className="border border-white/10 rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-white">3+</div>
              <div className="text-gray-400 text-sm">AI Products Built</div>
            </div>
            <div className="border border-white/10 rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-white">500+</div>
              <div className="text-gray-400 text-sm">Early Users</div>
            </div>
            <div className="border border-white/10 rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-white">100%</div>
              <div className="text-gray-400 text-sm">Execution Focus</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}