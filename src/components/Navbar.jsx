import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { ThemeToggle } from "./ThemeToggle";
import { navLinks } from "./navLinks";

export const Navbar = ({ menuOpen, setMenuOpen, activeSection }) => {
  const linkRefs = useRef({});
  const [indicator, setIndicator] = useState({ left: 0, width: 0 });

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  // Slide the highlight pill under the link of the section being viewed.
  useLayoutEffect(() => {
    const measure = () => {
      const el = linkRefs.current[activeSection];
      if (el) setIndicator({ left: el.offsetLeft, width: el.offsetWidth });
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [activeSection]);

  return (
    <nav className="fixed top-0 inset-x-0 z-40 px-3 pt-3">
      <div className="max-w-5xl mx-auto px-4 rounded-2xl border border-line bg-glass backdrop-blur-xl backdrop-saturate-150 shadow-[0_8px_32px_rgba(0,0,0,0.12)]">
        <div className="flex justify-between items-center h-14">
          {/* LOGO */}
          <a href="#home" className="font-mono text-xl font-bold text-fg">
            naquib <span className="text-accent">.dev</span>
          </a>

          <div className="flex items-center gap-3">
            <div className="hidden md:flex items-center relative">
              <span
                aria-hidden="true"
                className="absolute top-0 bottom-0 my-auto h-8 rounded-full bg-accent/15 border border-accent/30 transition-all duration-500 ease-[cubic-bezier(0.34,1.4,0.64,1)]"
                style={{ left: indicator.left, width: indicator.width }}
              />
              {navLinks.map(({ id, label }) => (
                <a
                  key={id}
                  ref={(el) => {
                    linkRefs.current[id] = el;
                  }}
                  href={`#${id}`}
                  aria-current={activeSection === id ? "page" : undefined}
                  className={`relative px-4 py-1.5 text-sm font-medium transition-colors duration-300 ${
                    activeSection === id
                      ? "text-accent"
                      : "text-body hover:text-fg"
                  }`}
                >
                  {label}
                </a>
              ))}
            </div>

            <ThemeToggle />

            <button
              type="button"
              className="md:hidden text-2xl text-fg cursor-pointer"
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label="Open Menu"
            >
              &#9776;
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
