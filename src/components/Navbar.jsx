export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-md z-50 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        
        <div className="text-white font-bold text-xl">
  SHEMA AIMABLE
</div>

        <div className="hidden md:flex space-x-8 text-gray-300">
  <a href="#projects" className="hover:text-white transition">Work</a>
  <a href="#github" className="hover:text-white transition">GitHub</a>
  <a href="#youtube" className="hover:text-white transition">YouTube</a>
  <a href="#thinking" className="hover:text-white transition">Thinking</a>
  <a href="#contact" className="hover:text-white transition">Contact</a>
</div>
        <a href="#contact">
  <button className="border border-white/30 px-4 py-2 rounded-full text-sm text-white hover:bg-white hover:text-black transition">
    Book a Call
  </button>
</a>
      </div>
    </nav>
  )
}