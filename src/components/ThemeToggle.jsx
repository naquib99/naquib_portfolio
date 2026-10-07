import { useState } from "react";
import { flushSync } from "react-dom";

const getInitialTheme = () =>
  document.documentElement.dataset.theme === "dark" ? "dark" : "light";

const applyTheme = (theme) => {
  if (theme === "dark") {
    document.documentElement.dataset.theme = "dark";
  } else {
    delete document.documentElement.dataset.theme;
  }
  try {
    localStorage.setItem("theme", theme);
  } catch {
    // Storage unavailable (private mode); theme still applies for this visit.
  }
};

export const ThemeToggle = ({ className = "" }) => {
  const [theme, setTheme] = useState(getInitialTheme);
  const isDark = theme === "dark";

  const toggle = () => {
    const next = isDark ? "light" : "dark";
    const update = () => {
      flushSync(() => setTheme(next));
      applyTheme(next);
    };

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (!document.startViewTransition || reduceMotion) {
      update();
      return;
    }

    // Sweep the new theme in from the top-right corner to the bottom-left.
    const x = window.innerWidth;
    const y = 0;
    const radius = Math.hypot(window.innerWidth, window.innerHeight);

    document.startViewTransition(update).ready.then(() => {
      document.documentElement.animate(
        {
          clipPath: [
            `circle(0px at ${x}px ${y}px)`,
            `circle(${radius}px at ${x}px ${y}px)`,
          ],
        },
        {
          duration: 900,
          easing: "cubic-bezier(0.65, 0, 0.35, 1)",
          pseudoElement: "::view-transition-new(root)",
        }
      );
    });
  };

  const iconBase =
    "absolute inset-0 m-auto w-5 h-5 transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]";

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Light mode" : "Dark mode"}
      className={`group relative w-9 h-9 rounded-full border border-line text-fg overflow-hidden cursor-pointer transition-all duration-300 hover:border-accent hover:text-accent hover:shadow-[0_0_14px_rgba(59,130,246,0.45)] active:scale-90 ${className}`}
    >
      {/* Sun: shown in dark mode */}
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={`${iconBase} group-hover:rotate-45 ${
          isDark ? "opacity-100 scale-100 rotate-0" : "opacity-0 scale-0 -rotate-90"
        }`}
      >
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
      </svg>

      {/* Moon: shown in light mode */}
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={`${iconBase} group-hover:-rotate-12 ${
          isDark ? "opacity-0 scale-0 rotate-90" : "opacity-100 scale-100 rotate-0"
        }`}
      >
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
      </svg>
    </button>
  );
};
