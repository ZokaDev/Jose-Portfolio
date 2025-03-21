import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  return (
  <RevealOnScroll>
    <section id="projects" className="min-h-screen flex items-center justify-center py-20">
      
      <div className="max-width-5xk mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-violet-700 to-indigo-400 bg-clip-text text-transparent text-center">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 hover:border-violet-500/30 hover:shadow-[0_2px_8px_rgba(165, 55, 2254,0.2)]">
            <h3 className="text-xl font-bold mb-2">Calculator</h3>
            <p className="text-gray-400 mb-4">Simple calculator</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {["HTML5", "CSS3", "JS"].map((tech, key) => (
                <span key={key} className="bg-violet-500/10 text-violet-500 py-1 px-3 rounded-full text-sm hover:bg-violet-500/20 hover:shadow-[0_2px_8px_rgba(165, 55, 2254,0.1)] trasition-all">{tech}</span>
              ))}
            </div>
            <div className="flex justify-between items-center">
              <a href="#" className="text-violet-400 hover:text-violet-300 transition-colors my-4"> View Project →</a>
            </div>
          </div>
          <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 hover:border-violet-500/30 hover:shadow-[0_2px_8px_rgba(165, 55, 2254,0.2)]">
            <h3 className="text-xl font-bold mb-2">Calculator</h3>
            <p className="text-gray-400 mb-4">Simple calculator</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {["HTML5", "CSS3", "JS"].map((tech, key) => (
                <span key={key} className="bg-violet-500/10 text-violet-500 py-1 px-3 rounded-full text-sm hover:bg-violet-500/20 hover:shadow-[0_2px_8px_rgba(165, 55, 2254,0.1)] trasition-all">{tech}</span>
              ))}
            </div>
            <div className="flex justify-between items-center">
              <a href="#" className="text-violet-400 hover:text-violet-300 transition-colors my-4"> View Project →</a>
            </div>
          </div>
          <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 hover:border-violet-500/30 hover:shadow-[0_2px_8px_rgba(165, 55, 2254,0.2)]">
            <h3 className="text-xl font-bold mb-2">Calculator</h3>
            <p className="text-gray-400 mb-4">Simple calculator</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {["HTML5", "CSS3", "JS"].map((tech, key) => (
                <span key={key} className="bg-violet-500/10 text-violet-500 py-1 px-3 rounded-full text-sm hover:bg-violet-500/20 hover:shadow-[0_2px_8px_rgba(165, 55, 2254,0.1)] trasition-all">{tech}</span>
              ))}
            </div>
            <div className="flex justify-between items-center">
              <a href="#" className="text-violet-400 hover:text-violet-300 transition-colors my-4"> View Project →</a>
            </div>
          </div>
          <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 hover:border-violet-500/30 hover:shadow-[0_2px_8px_rgba(165, 55, 2254,0.2)]">
            <h3 className="text-xl font-bold mb-2">Calculator</h3>
            <p className="text-gray-400 mb-4">Simple calculator</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {["HTML5", "CSS3", "JS"].map((tech, key) => (
                <span key={key} className="bg-violet-500/10 text-violet-500 py-1 px-3 rounded-full text-sm hover:bg-violet-500/20 hover:shadow-[0_2px_8px_rgba(165, 55, 2254,0.1)] trasition-all">{tech}</span>
              ))}
            </div>
            <div className="flex justify-between items-center">
              <a href="#" className="text-violet-400 hover:text-violet-300 transition-colors my-4"> View Project →</a>
            </div>
          </div>
        </div>
      </div>
    </section>
    </RevealOnScroll>
  )
}