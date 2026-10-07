import { useEffect, useRef, useState } from "react";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { MobileMenu } from "./components/MobileMenu";
import { Home } from "./components/sections/Home";
import { About } from "./components/sections/About";
import { Projects } from "./components/sections/Projects";
import "./index.css";
import { Contact } from "./components/sections/Contact";
import { sectionIds } from "./components/navLinks";
import { useActiveSection } from "./hooks/useActiveSection";
import { Globe } from "./components/Globe";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const activeSection = useActiveSection(sectionIds);
  const globeStageRef = useRef(null);

  // Hero scroll progress (0 at top, 1 after one screen) drives the globe
  // drifting from the right column to the center. Written as a CSS variable
  // so scrolling doesn't re-render React.
  useEffect(() => {
    let frame;
    const update = () => {
      frame = null;
      const p = Math.min(window.scrollY / window.innerHeight, 1);
      globeStageRef.current?.style.setProperty("--p", p.toFixed(3));
    };
    const onScroll = () => {
      frame ??= requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div className="min-h-screen bg-page text-fg">
      <Navbar
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        activeSection={activeSection}
      />
      <MobileMenu
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        activeSection={activeSection}
      />
      {/* Globe stays fixed behind the page: on the right of the hero on
          desktop, drifting to the center and softening as you scroll */}
      <div
        ref={globeStageRef}
        className={`globe-stage fixed inset-0 z-0 flex items-center justify-center pointer-events-none transition-[scale] duration-1000 ease-out ${
          activeSection === "home"
            ? "[--globe-alpha:var(--globe-opacity)] scale-100"
            : "[--globe-alpha:var(--globe-opacity-soft)] scale-110"
        }`}
      >
        <Globe
          className="w-[min(110vw,760px)] animate-globe-in"
          showLabel={activeSection === "home"}
        />
      </div>

      <main className="relative z-10">
        <Home />
        <About />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;
