export default function Contact() {
  return (
    <section id="contact" className="bg-black text-white py-24 px-6 border-t border-white/10">
      <div className="max-w-4xl mx-auto text-center">
        
        <div className="mb-12">
          <span className="text-gray-400 text-sm uppercase tracking-wider">Get In Touch</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-2">
            Let's Build Something <br />
            <span className="text-gray-400">Amazing Together</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-xl mx-auto">
            Looking for an AI Product Owner who ships fast and thinks like a founder? 
            Let's talk about your next project.
          </p>
        </div>

        {/* Contact options */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="border border-white/10 rounded-2xl p-6 hover:border-white/30 transition">
            <div className="text-3xl mb-3">📧</div>
            <h3 className="font-bold mb-2">Email</h3>
            <a href="mailto:shemaimable24@gmail.com" className="text-gray-400 text-sm hover:text-white transition">
              shemaimable24@gmail.com
            </a>
          </div>

          <div className="border border-white/10 rounded-2xl p-6 hover:border-white/30 transition">
            <div className="text-3xl mb-3">💼</div>
            <h3 className="font-bold mb-2">LinkedIn</h3>
            <a href="https://linkedin.com/in/ShemaAimable" target="_blank" rel="noopener noreferrer" className="text-gray-400 text-sm hover:text-white transition">
              Connect with me
            </a>
          </div>

          <div className="border border-white/10 rounded-2xl p-6 hover:border-white/30 transition">
            <div className="text-3xl mb-3">📅</div>
            <h3 className="font-bold mb-2">Book a Call</h3>
            <a href="mailto:shemaimable24@gmail.com?subject=Book%20a%20Call%20-%20AI%20Product%20Owner" className="text-gray-400 text-sm hover:text-white transition">
              Schedule a meeting
            </a>
          </div>
        </div>

        {/* CTA Button - Email */}
        <a href="mailto:shemaimable24@gmail.com?subject=Project%20Inquiry%20-%20AI%20Portfolio">
          <button className="bg-white text-black px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-200 transition">
            📧 Start a Project
          </button>
        </a>

        <p className="text-gray-500 text-sm mt-8">
          Available for freelance • Full-time • Consulting
        </p>
      </div>
    </section>
  )
}