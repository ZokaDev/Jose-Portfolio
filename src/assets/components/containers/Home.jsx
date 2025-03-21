import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative">
      <RevealOnScroll>
      <div className="text-center z-10 px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text leading-right">Hi, I'm <span className="underline decoration-violet-500 md:decoration-wavy md:decoration-5 md:underline-offset-5">José</span> <span className="bg-gradient-to-r from-violet-700 to-indigo-400 bg-clip-text text-transparent">Baião</span> !</h1>

        <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
          I'm a frontend developer who loves crafting clean,web applications. My goal is to build solutions that offer both execeptional performance and a delightful user experience
        </p>
        <div className="flex justify-center space-x-4">
          <a href="#projects" className="bg-gradient-to-r from-violet-700 to-indigo-400 text-white py-3 px-6 rounded-xl font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(165, 55, 2254, 0.4)]">
            View Projects
          </a>
          <a href="#projects" className="border border-violet-500/50 text-violet-500 py-3 px-6 rounded-xl font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(165, 55, 2254, 0.4)] hover:bg-violet-500/10">
            Contac Me
          </a>
        </div>
      </div>
      </RevealOnScroll>
    </section>
  )
}