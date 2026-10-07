import { useEffect, useRef } from "react";
import createGlobe from "cobe";

// Shah Alam, Selangor
const HOME = [3.0733, 101.5185];

// Rotation that puts a [lat, lng] location facing the viewer.
const locationToAngles = ([lat, lng]) => [
  Math.PI - ((lng * Math.PI) / 180 - Math.PI / 2),
  (lat * Math.PI) / 180,
];

const themes = {
  light: {
    dark: 0,
    diffuse: 1.2,
    mapBrightness: 6,
    baseColor: [1, 1, 1],
    markerColor: [0.15, 0.39, 0.92],
    glowColor: [0.93, 0.95, 1],
  },
  dark: {
    dark: 1,
    diffuse: 2.5,
    mapBrightness: 6,
    baseColor: [0.3, 0.3, 0.35],
    markerColor: [0.23, 0.51, 0.96],
    glowColor: [0.12, 0.25, 0.5],
  },
};

const currentTheme = () =>
  document.documentElement.dataset.theme === "dark" ? "dark" : "light";

export const Globe = ({ className = "", showLabel = false }) => {
  const canvasRef = useRef(null);
  const labelRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const [startPhi, startTheta] = locationToAngles(HOME);

    let size = canvas.offsetWidth;
    let globe;
    try {
      globe = createGlobe(canvas, {
        devicePixelRatio: dpr,
        width: size * dpr,
        height: size * dpr,
        phi: startPhi,
        theta: startTheta,
        mapSamples: 16000,
        markers: [{ location: HOME, size: 0.05, id: "home" }],
        markerElevation: 0,
        ...themes[currentTheme()],
      });
    } catch {
      return; // No WebGL: just skip the globe.
    }

    // cobe appends a <style> listing which markers face the viewer, and a
    // 1px div per marker positioned over it. The label follows that div.
    const cobeStyle = document.head.lastElementChild;
    const label = labelRef.current;
    let anchor = null;
    const syncLabel = () => {
      anchor ??= canvas.parentElement.querySelector("div");
      if (!anchor || !label) return;
      label.style.left = anchor.style.left;
      label.style.top = anchor.style.top;
      label.dataset.visible = String(
        cobeStyle?.textContent.includes("--cobe-visible-home") ?? false
      );
    };

    // Spin slowly on its own, turn further as the page scrolls,
    // and lean toward where the mouse is.
    let autoPhi = 0;
    const mouse = { x: 0, y: 0 };
    const eased = { x: 0, y: 0, scroll: 0 };
    const onPointerMove = (e) => {
      mouse.x = e.clientX / window.innerWidth - 0.5;
      mouse.y = e.clientY / window.innerHeight - 0.5;
    };
    window.addEventListener("pointermove", onPointerMove);

    // Only animate while the globe is on screen and the tab is visible.
    let visible = true;
    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
    });
    io.observe(canvas);

    let frame;
    const render = () => {
      if (visible && !document.hidden) {
        if (!reduceMotion) autoPhi += 0.003;
        eased.x += (mouse.x - eased.x) * 0.05;
        eased.y += (mouse.y - eased.y) * 0.05;
        eased.scroll += (window.scrollY * 0.0015 - eased.scroll) * 0.08;
        globe.update({
          phi: startPhi + autoPhi + eased.scroll + eased.x * 1.5,
          theta: startTheta + eased.y * 0.6,
        });
        syncLabel();
      }
      frame = requestAnimationFrame(render);
    };
    render();
    canvas.style.opacity = "var(--globe-alpha, 1)";

    // Keep the canvas sharp when its size changes.
    const ro = new ResizeObserver(() => {
      size = canvas.offsetWidth;
      globe.update({ width: size * dpr, height: size * dpr });
    });
    ro.observe(canvas);

    // Recolor when the theme toggles.
    const mo = new MutationObserver(() =>
      globe.update(themes[currentTheme()])
    );
    mo.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", onPointerMove);
      io.disconnect();
      ro.disconnect();
      mo.disconnect();
      globe.destroy();
    };
  }, []);

  // cobe wraps the canvas in its own div, so size this outer wrapper instead.
  return (
    <div className={`relative ${className}`}>
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className="w-full aspect-square opacity-0 transition-opacity duration-1000"
      />
      <div
        ref={labelRef}
        aria-hidden="true"
        data-visible="false"
        className={`globe-label absolute pointer-events-none ${
          showLabel ? "" : "globe-label-hidden"
        }`}
      >
        <span className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-full border border-line bg-glass backdrop-blur-md px-3 py-1 text-xs font-medium text-fg shadow-[0_4px_14px_rgba(0,0,0,0.12)]">
          <span className="relative flex w-2 h-2">
            <span className="absolute inset-0 rounded-full bg-accent animate-ping opacity-70" />
            <span className="relative w-2 h-2 rounded-full bg-accent" />
          </span>
          I'm here
        </span>
      </div>
    </div>
  );
};
