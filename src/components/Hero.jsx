import profilePic from "../assets/profile.jpg"

export default function Hero() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-center bg-black text-white px-6 pt-16">
      
      {/* Profile Photo - MUCH LARGER NOW */}
      <div className="mb-8">
        <img 
          src={profilePic} 
          alt="Shema Aimable"
          className="w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full object-cover border-4 border-white/20 hover:border-white/40 transition mx-auto"
        />
      </div>

      <h1 className="text-4xl md:text-6xl font-bold mb-4">
        SHEMA AIMABLE
      </h1>

      <p className="text-xl md:text-2xl text-gray-300 mb-2">
        AI Product Builder
      </p>

      <p className="text-xl md:text-2xl text-gray-300 mb-2">
        Software Engineering Student
      </p>

      <p className="text-xl md:text-2xl text-gray-300 mb-6">
        Founder of Discipline Machine AI
      </p>

      <p className="max-w-xl text-gray-400 mb-8 text-lg">
        Building AI-powered systems that help people develop discipline,
        consistency, and execution.
      </p>

      <a href="#projects">
        <button className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition">
          View Projects
        </button>
      </a>
    </div>
  )
}