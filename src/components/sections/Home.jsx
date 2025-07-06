import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <RevealOnScroll>
        <div className="text-center z-10 px-4">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent leading-right">
            Hello, I'm Naquib
          </h1>

          <p className="text-gray-400 text-lg mb-5 max-w-lg mx-auto justify-center">
            A Full Stack Developer
          </p>

          <div className="flex justify-center mt-4 mb-5 gap-5 md:gap-5">
            {/* ✅ LinkedIn Icon Link */}
            <a
              href="https://www.linkedin.com/in/ahmad-naquib-52493b207/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/assets/linkedin.png"
                alt="My Linkedin Profile"
                className="w-7 h-7 md:w-9 md:h-9 cursor-pointer transition-transform duration-300 hover:scale-110"
              />
            </a>

            {/* ✅ GitHub Icon Link */}
            <a
              href="https://github.com/naquib99"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/assets/github.png"
                alt="My Github Profile"
                className="w-7 h-7 md:w-9 md:h-9 cursor-pointer transition-transform duration-300 hover:scale-110"
              />
            </a>
          </div>

          <div className="flex justify-center space-x-4">
            <a
              href="#projects"
              className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden 
            hover:translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="border border-blue-500/50 py-3 px-6 rounded font-medium transition-all duration-200 
            hover:translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-blue-500/10"
            >
              Contact Me
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
