import { RevealOnScroll } from "../RevealOnScroll";

const skillGroups = [
  {
    title: "Languages",
    skills: ["PHP", "Python", "JavaScript", "TypeScript", "SQL"],
  },
  {
    title: "Backend",
    skills: [
      "Laravel (MVC)",
      "Filament",
      "REST API Design",
      "Eloquent ORM",
      "Microsoft Graph / M365",
    ],
  },
  {
    title: "Frontend",
    skills: ["Angular", "React", "Ionic", "Tailwind CSS", "HTML/CSS"],
  },
  {
    title: "Database, Infra & Tooling",
    skills: [
      "MySQL",
      "Git & GitHub",
      "cPanel",
      "Plesk",
      "VS Code",
      "Claude Code",
    ],
  },
];

const experience = [
  {
    role: "IT Executive",
    company: "Perbadanan Wakaf Selangor (PWS)",
    period: "Sep 2023 – Present",
    points: [
      "Designed, developed and shipped two full-stack Laravel/Filament/MySQL apps end-to-end (eStafPWS and Borang Online), reducing internal processing time by 50%.",
      "Integrated Microsoft 365 (Microsoft Graph) for email notifications and Microsoft SSO login.",
      "Owned the REST API layer connecting the Wakaf Selangor mobile app to WordPress and internal transaction services: real-time updates, digital receipting and donation processing.",
      "Supported the rollout of an LHDNM-approved digital receipting system, digitizing thousands of donor records.",
      "Gathered requirements with stakeholders and handled production support across application, database and server layers (cPanel, Plesk, WordPress).",
    ],
  },
  {
    role: "Software Development Intern",
    company: "Majlis Agama Islam Selangor (MAIS)",
    period: "Mar 2023 – Aug 2023",
    points: [
      "Shipped a cross-platform mobile app (Ionic, Angular, TypeScript) from scratch, cutting development time by 40% versus native.",
      "Took part in code reviews and contributed backend logic that reduced manual data entry.",
    ],
  },
  {
    role: "Mobile Development Intern",
    company: "iCEPS UiTM",
    period: "Sep 2019 – Feb 2020",
    points: [
      "Built 15+ responsive UI components for an Android/iOS app (Ionic, Angular), migrating ~60% of internal workflows to mobile.",
    ],
  },
];

const chipClass =
  "bg-blue-500/10 text-accent py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition";

export const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-grad-a to-grad-b bg-clip-text text-transparent heading-halo text-center">
            About Me
          </h2>

          <div className="rounded-xl p-8 border-line border bg-card backdrop-blur-md hover:-translate-y-1 transition-all">
            <p className="text-body mb-6">
              I'm a Full-Stack Software Developer with 3+ years of professional
              experience owning features end-to-end, from backend API design to
              frontend UI delivery, in production systems used daily by real
              users. I pick up new frameworks, tools and integrations quickly
              with minimal supervision, use AI-assisted development (Claude
              Code) to ship efficiently, and follow disciplined Git/GitHub
              practices to keep codebases clean and reviewable.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {skillGroups.map(({ title, skills }) => (
                <div
                  key={title}
                  className="rounded-xl p-6 hover:-translate-y-1 transition-all"
                >
                  <h3 className="text-xl font-bold mb-4">{title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((tech) => (
                      <span key={tech} className={chipClass}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* WORK EXPERIENCE TIMELINE */}
          <div className="mt-8 p-6 md:p-8 rounded-xl border-line border bg-card backdrop-blur-md">
            <h3 className="text-xl font-bold mb-6"> 🧑🏻‍💼 Work Experience </h3>
            <ol className="relative border-l-2 border-line ml-2 space-y-8">
              {experience.map(({ role, company, period, points }, i) => (
                <li key={company} className="relative pl-6 group">
                  <span
                    aria-hidden="true"
                    className={`absolute -left-[9px] top-1.5 w-4 h-4 rounded-full border-2 border-accent transition-transform duration-300 group-hover:scale-125 ${
                      i === 0 ? "bg-accent" : "bg-page"
                    }`}
                  >
                    {i === 0 && (
                      <span className="absolute inset-0 rounded-full bg-accent animate-ping opacity-60" />
                    )}
                  </span>
                  <span className="inline-block text-xs font-mono text-accent bg-accent/10 border border-accent/20 rounded-full px-2.5 py-0.5 mb-2">
                    {period}
                  </span>
                  <h4 className="font-semibold text-fg text-lg leading-snug">
                    {role}
                  </h4>
                  <p className="text-body text-sm mb-2">{company}</p>
                  <ul className="list-disc ml-5 text-sm text-muted space-y-1">
                    {points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ol>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            {/* EDUCATION */}
            <div className="p-6 rounded-xl border-line border bg-card backdrop-blur-md hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 🎓 Education </h3>
              <ul className="list-disc list-inside text-body space-y-2">
                <li>
                  <strong>
                    Bachelor of Computer Science (Software Engineering), Hons.
                  </strong>{" "}
                  – Universiti Malaysia Pahang Al-Sultan Abdullah (Feb 2020 –
                  Aug 2023)
                  <ul className="list-disc ml-5 text-sm text-muted space-y-1">
                    <li>CGPA: 3.63</li>
                  </ul>
                </li>
                <li>
                  <strong>Diploma in Computer Science</strong> – Universiti
                  Malaysia Pahang Al-Sultan Abdullah (Jun 2017 – Feb 2020)
                  <ul className="list-disc ml-5 text-sm text-muted space-y-1">
                    <li>CGPA: 3.71</li>
                    <li>Dean's List</li>
                  </ul>
                </li>
              </ul>
            </div>

            {/* ACTIVITIES & LANGUAGES */}
            <div className="p-6 rounded-xl border-line border bg-card backdrop-blur-md hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 🏅 Activities & Languages </h3>
              <ul className="list-disc list-inside text-body space-y-2">
                <li>PIC, Technical Committee – SUKMA 2026 Swimming (Aug 2026)</li>
                <li>President, UMP Taekwon-Do Club (2018, 2023)</li>
                <li>
                  UMP Taekwon-Do Championship Representative – multiple medals
                </li>
                <li>Faculty Volleyball Representative</li>
                <li>English (proficient), Bahasa Melayu (native)</li>
              </ul>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
