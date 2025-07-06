import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const frontendSkills = [
    "HTML",
    "CSS",
    "Angular",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Tailwind CSS",
    "Ionic",
    "WordPress",
  ];

  const backendSkills = ["PHP", "Laravel", "SQL", "Node.js", "WordPress REST API"];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent text-center">
            About Me
          </h2>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
              I'm a software developer with hands-on experience in full-stack
              development and managing IT systems. I focus on building,
              maintaining, and improving web and mobile applications, as well as
              handling system troubleshooting and process documentation. I enjoy
              solving real problems and creating tools that help businesses run
              more smoothly.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            {/* EDUCATION */}
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 🎓 Education </h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong>
                    Bachelor of Computer Science (Software Engineering)
                  </strong>{" "}
                  – Universiti Malaysia Pahang Al-Sultan Abdullah (Feb 2020 –
                  Aug 2023)
                  <ul className="list-disc ml-5 text-sm text-gray-400 space-y-1">
                    <li>CGPA: 3.63</li>
                    <li>President, UMP Taekwon-Do Club (2023)</li>
                    <li>Dean’s List (Multiple Semesters)</li>
                  </ul>
                </li>
                <li>
                  <strong>Diploma in Computer Science</strong> – Universiti
                  Malaysia Pahang Al-Sultan Abdullah (Jun 2017 – Feb 2020)
                  <ul className="list-disc ml-5 text-sm text-gray-400 space-y-1">
                    <li>CGPA: 3.71</li>
                    <li>President, UMP Taekwon-Do Club (2018)</li>
                    <li>Dean’s List Graduate</li>
                  </ul>
                </li>
                <li>
                  <strong>Extracurricular Achievements</strong>
                  <ul className="list-disc ml-5 text-sm text-gray-400 space-y-1">
                    <li>Taekwon-Do Tournament Achievements</li>
                    <li>Vice Director, PETAKOM E-Started Carnival</li>
                  </ul>
                </li>
              </ul>
            </div>

            {/* WORK EXPERIENCE */}
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 🧑🏻‍💼 Work Experience </h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="font-semibold">
                    IT Executive at Perbadanan Wakaf Selangor (Sep 2023 –
                    Present)
                  </h4>
                  <ul className="list-disc ml-5 text-sm text-gray-400 space-y-1">
                    <li>
                      Developed and maintained internal systems and the
                      organization’s main website.
                    </li>
                    <li>
                      Provided technical support and troubleshooting for network
                      and systems.
                    </li>
                    <li>Assisted in IT procurement and documentation.</li>
                    <li>
                      Worked with departments to deliver tailored IT solutions.
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold">
                    Intern at Majlis Agama Islam Selangor (Mar 2023 – Aug 2023)
                  </h4>
                  <ul className="list-disc ml-5 text-sm text-gray-400 space-y-1">
                    <li>Developed a mobile app using Ionic and Angular.</li>
                    <li>Worked on front-end and back-end integration.</li>
                    <li>
                      Helped design project materials using Photoshop and Canva.
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold">
                    Intern at iCEPS UiTM (Sep 2019 – Feb 2020)
                  </h4>
                  <ul className="list-disc ml-5 text-sm text-gray-400 space-y-1">
                    <li>Developed a mobile app using Ionic and Angular.</li>
                    <li>Contributed to UI design and implementation.</li>
                    <li>Collaborated under senior programmer guidance.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
