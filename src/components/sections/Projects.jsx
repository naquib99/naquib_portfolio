import { useRef, useState } from "react";
import {
  FaApple,
  FaChevronLeft,
  FaChevronRight,
  FaExternalLinkAlt,
  FaGooglePlay,
} from "react-icons/fa";
import { RevealOnScroll } from "../RevealOnScroll";

const projects = [
  {
    icon: "📱",
    title: "Wakaf Selangor Mobile App",
    description:
      "Cross-platform donor app integrating WordPress and custom REST endpoints for real-time updates, digital receipts and secure donation processing. Contributed to a 20% increase in digital donations.",
    points: [
      "REST API layer to WordPress and internal transaction services",
      "Digital receipting and donation processing",
      "Wakaf products, initiatives, forms and guidelines",
      "Daily prayer times, Al-Quran and Hadith references",
    ],
    tech: ["Ionic", "Angular", "TypeScript", "WordPress REST API"],
    links: [
      {
        label: "App Store",
        href: "https://apps.apple.com/my/app/wakaf-selangor/id6755946157?l=ms",
        Icon: FaApple,
      },
      {
        label: "Google Play",
        href: "https://play.google.com/store/apps/details?id=my.gov.wakafselangor&hl=ms",
        Icon: FaGooglePlay,
      },
    ],
  },
  {
    icon: "💰",
    title: "FinanceKeeper",
    description:
      "A personal finance app built with Flutter to track income, expenses and savings, with clear monthly summaries. On-going, with more modules planned.",
    points: [
      "Dashboard showing financial activity by month",
      "Record income, purchases and savings per month",
      "Auto-calculated totals across entries",
      "Cloud-synced data with Firebase",
    ],
    tech: ["Flutter", "Dart", "Firebase"],
    links: [
      {
        label: "Try it live",
        href: "https://crud-bbc0a.web.app/",
        Icon: FaExternalLinkAlt,
      },
    ],
  },
  {
    icon: "🌐",
    title: "Borang Online",
    description:
      "Public-facing online application platform for Perbadanan Wakaf Selangor. End-to-end ownership from schema design to admin dashboard, handling thousands of live submissions with a 50% drop in processing time.",
    points: [
      "Public form submission without login",
      "Microsoft SSO login for admin users",
      "Automated email notifications on submission",
      "Admin dashboard with full CRUD and file attachments",
      "Form modules include Wakaf Tunai & Fisabilillah donations",
    ],
    tech: ["Laravel", "Filament", "Tailwind CSS", "MySQL", "Microsoft 365 API"],
  },
  {
    icon: "🌐",
    title: "eStafPWS",
    description:
      "Internal HR portal for Perbadanan Wakaf Selangor. Automates leave-approval workflows with real-time email notifications via Microsoft Graph, digitizing staff records and reducing manual HR paperwork by 20%.",
    points: [
      "Role-based access: Admin, HR, HOD, Employee",
      "Staff profiles with position, department & hierarchy",
      "Multi-level leave approval with status tracking and history",
      "Microsoft 365 email notifications and SSO login",
    ],
    tech: ["Laravel", "Filament", "PHP", "MySQL", "Microsoft 365 API"],
  },
];

const arrowClass =
  "absolute top-1/2 -translate-y-1/2 z-10 w-9 h-9 md:w-11 md:h-11 flex items-center justify-center rounded-full border border-line bg-glass text-fg backdrop-blur-xl shadow-[0_4px_16px_rgba(0,0,0,0.15)] cursor-pointer transition-all duration-300 hover:border-accent hover:text-accent hover:scale-110 active:scale-95";

export const Projects = () => {
  const scrollerRef = useRef(null);
  const [index, setIndex] = useState(0);

  const goTo = (i) => {
    const el = scrollerRef.current;
    const next = (i + projects.length) % projects.length;
    el.scrollTo({ left: next * el.clientWidth, behavior: "smooth" });
  };

  const handleScroll = () => {
    const el = scrollerRef.current;
    setIndex(Math.round(el.scrollLeft / el.clientWidth));
  };

  const handleKeyDown = (e) => {
    if (e.key === "ArrowRight") goTo(index + 1);
    if (e.key === "ArrowLeft") goTo(index - 1);
  };

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl w-screen mx-auto px-4">
          <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-grad-a to-grad-b bg-clip-text text-transparent heading-halo text-center">
            Featured Projects
          </h2>
          <p className="text-muted text-sm text-center mb-8 text-halo">
            Swipe or use the arrows to browse
          </p>

          <div className="relative">
            <div
              ref={scrollerRef}
              onScroll={handleScroll}
              onKeyDown={handleKeyDown}
              tabIndex={0}
              role="region"
              aria-roledescription="carousel"
              aria-label="Featured projects"
              className="flex overflow-x-auto snap-x snap-mandatory rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-accent [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
              {projects.map(
                ({ icon, title, description, points, tech, links }, i) => (
                  <div
                    key={title}
                    role="group"
                    aria-roledescription="slide"
                    aria-label={`${i + 1} of ${projects.length}: ${title}`}
                    className="w-full shrink-0 snap-center px-1"
                  >
                    <div
                      className={`h-full p-6 md:p-8 rounded-xl border border-line bg-card backdrop-blur-md transition-all duration-500 ${
                        i === index
                          ? "opacity-100 scale-100"
                          : "opacity-40 scale-95"
                      }`}
                    >
                      <div className="flex items-start justify-between gap-4 mb-2">
                        <h3 className="text-xl md:text-2xl font-bold">
                          {icon} {title}
                        </h3>
                        <span className="text-xs font-mono text-muted mt-2 shrink-0">
                          {String(i + 1).padStart(2, "0")} /{" "}
                          {String(projects.length).padStart(2, "0")}
                        </span>
                      </div>
                      <p className="text-muted mb-4">{description}</p>

                      <ul className="text-muted mb-4 list-disc list-inside space-y-1 text-sm">
                        {points.map((point) => (
                          <li key={point}>{point}</li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {tech.map((t) => (
                          <span
                            key={t}
                            className="bg-blue-500/10 text-accent py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 transition-all"
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                      {links && (
                        <div className="flex flex-wrap gap-3 pt-2">
                          {links.map(({ label, href, ...link }) => {
                            const { Icon } = link;
                            return (
                            <a
                              key={href}
                              href={href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 py-2 px-4 rounded-lg bg-fg text-page text-sm font-medium transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_4px_14px_rgba(59,130,246,0.35)]"
                            >
                              <Icon className="w-4 h-4" />
                              {label}
                            </a>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  </div>
                )
              )}
            </div>

            <button
              type="button"
              onClick={() => goTo(index - 1)}
              aria-label="Previous project"
              className={`${arrowClass} -left-3 md:-left-5 lg:-left-16`}
            >
              <FaChevronLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => goTo(index + 1)}
              aria-label="Next project"
              className={`${arrowClass} -right-3 md:-right-5 lg:-right-16`}
            >
              <FaChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="flex items-center justify-center gap-2 mt-6">
            {projects.map(({ title }, i) => (
              <button
                key={title}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`Go to ${title}`}
                aria-current={i === index ? "true" : undefined}
                className={`h-2.5 rounded-full cursor-pointer transition-all duration-500 ${
                  i === index
                    ? "w-8 bg-accent"
                    : "w-2.5 bg-muted/40 hover:bg-muted"
                }`}
              />
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
