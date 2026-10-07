import { navLinks } from "./navLinks";

export const MobileMenu = ({ menuOpen, setMenuOpen, activeSection }) => {
  return (
    <div
      className={`fixed top-0 left-0 w-full bg-glass backdrop-blur-2xl backdrop-saturate-150 z-50 flex flex-col
        items-center justify-center transition-all duration-300 ease-in-out
            ${
              menuOpen
                ? "h-screen opacity-100 pointer-events-auto"
                : "h-0 opacity-0 pointer-events-none"
            }
        `}
    >
      <button
        onClick={() => setMenuOpen(false)}
        className="absolute top-6 right-6 text-fg text-3xl focus:outline-none cursor-pointer"
        aria-label="Close Menu"
      >
        &times;
      </button>
      {navLinks.map(({ id, label }, i) => (
        <a
          key={id}
          href={`#${id}`}
          onClick={() => setMenuOpen(false)}
          aria-current={activeSection === id ? "page" : undefined}
          style={{ transitionDelay: menuOpen ? `${i * 60}ms` : "0ms" }}
          className={`text-2xl font-semibold my-4 px-6 py-2 rounded-full transform transition-all duration-300
            ${
              activeSection === id
                ? "text-accent bg-accent/15 border border-accent/30"
                : "text-fg border border-transparent"
            }
            ${
              menuOpen
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-5"
            }
            `}
        >
          {label}
        </a>
      ))}
    </div>
  );
};
