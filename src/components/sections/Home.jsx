import {
  FaDownload,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
} from "react-icons/fa";

// Staggered entrance: each hero element slides in shortly after the previous one.
const enter = (step) => ({ animationDelay: `${200 + step * 120}ms` });

const socials = [
  {
    href: "https://www.linkedin.com/in/ahmad-naquib-52493b207/",
    label: "My LinkedIn Profile",
    Icon: FaLinkedin,
  },
  {
    href: "https://github.com/naquib99",
    label: "My GitHub Profile",
    Icon: FaGithub,
  },
];

export const Home = () => {
  return (
    <section id="home" className="min-h-screen flex items-center relative">
      {/* Mobile/tablet: text sits over the globe, so fade the globe behind it.
          Desktop uses two columns (globe on the right) and doesn't need this. */}
      <div
        aria-hidden="true"
        className="lg:hidden absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_45%_35%_at_center,var(--page)_0%,transparent_100%)] opacity-80"
      />

      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 grid lg:grid-cols-2 items-center">
        <div className="text-center lg:text-left">
          <h1
            style={enter(0)}
            className="animate-enter-up text-5xl md:text-7xl lg:text-6xl xl:text-7xl font-bold bg-gradient-to-r from-grad-a to-grad-b bg-clip-text text-transparent heading-halo leading-tight mb-4"
          >
            Hello, I'm Naquib
          </h1>

          <p
            style={enter(1)}
            className="animate-enter-up text-fg text-xl font-semibold mb-2 text-halo"
          >
            Full-Stack Software Developer
          </p>
          <p
            style={enter(2)}
            className="animate-enter-up text-body text-lg mb-3 max-w-md mx-auto lg:mx-0 text-halo"
          >
            I build web and mobile apps end-to-end, from API to UI.
          </p>

          <p
            style={enter(3)}
            className="animate-enter-up inline-flex items-center gap-2 text-body text-sm mb-5 text-halo"
          >
            <FaMapMarkerAlt className="w-4 h-4 text-accent" />
            Based in Shah Alam, Malaysia
          </p>

          <div
            style={enter(4)}
            className="animate-enter-up flex justify-center lg:justify-start mb-6 gap-5"
          >
            {socials.map(({ href, label, ...social }) => {
              const { Icon } = social;
              return (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  title={label}
                  className="text-fg hover:text-accent transition-all duration-300 hover:scale-110 hover:-translate-y-0.5"
                >
                  <Icon className="w-7 h-7 md:w-9 md:h-9" />
                </a>
              );
            })}
          </div>

          <div
            style={enter(5)}
            className="animate-enter-up flex flex-wrap justify-center lg:justify-start gap-4"
          >
            {/* Primary action */}
            <a
              href="#projects"
              className="bg-blue-500 text-white py-3 px-7 rounded font-semibold transition relative overflow-hidden
              hover:-translate-y-0.5 hover:shadow-[0_0_18px_rgba(59,130,246,0.45)]"
            >
              View Projects
            </a>
            {/* Secondary action */}
            <a
              href={`${import.meta.env.BASE_URL}Ahmad_Naquib_Resume.pdf`}
              download="Ahmad_Naquib_Resume.pdf"
              className="group inline-flex items-center gap-2 border border-blue-500/50 text-fg py-3 px-6 rounded font-medium transition-all duration-200
              hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-blue-500/10"
            >
              <FaDownload className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-0.5" />
              Resume
            </a>
          </div>
        </div>

        {/* Right column is left empty on desktop: the fixed globe sits here */}
        <div aria-hidden="true" className="hidden lg:block" />
      </div>
    </section>
  );
};
