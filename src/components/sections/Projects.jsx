import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* PROJECT: eStaffPortal */}
            <div className="p-6 rounded-xl border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2">🌐 eStaffPortal (ESP)</h3>
              <p className="text-gray-400 mb-4">
                A comprehensive web-based HR system designed to streamline
                administrative processes within an organization. Includes
                multi-role user management, staff profile tracking, and a
                dynamic leave application system with multi-level approval.
              </p>

              <ul className="text-gray-400 mb-4 list-disc list-inside space-y-1 text-sm">
                <li>Role-based access: Admin, HR, HOD, Employee</li>
                <li>Staff profiles with position, department & hierarchy</li>
                <li>
                  Leave system with status tracking (Pending, Approved,
                  Rejected)
                </li>
                <li>Auto-assign approval officers & maintain leave history</li>
              </ul>

              <div className="flex flex-wrap gap-2 mb-4">
                {["Laravel", "FilamentPHP", "PHP", "MySQL"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 mr-1 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* <div className="flex justify-between items-center">
                <a
                  href="/projects/esp"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project
                </a>
              </div> */}
            </div>

            {/* PROJECT 2 Borang Online */}
            <div className="p-6 rounded-xl border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2">🌐 Borang Online (BO) </h3>
              <p className="text-gray-400 mb-4">
                A digital form system developed for Perbadanan Wakaf Selangor to
                manage wakaf submissions and public donation requests. Includes
                user roles, dynamic form modules, and auto-notifications.
              </p>

              <ul className="text-gray-400 mb-4 list-disc list-inside space-y-1 text-sm">
                <li>Public form submission without login</li>
                <li>Admin roles: Super Admin (SA) and Admin User (AU)</li>
                <li>Secure login & dashboard for Admin Users</li>
                <li>Auto email notification upon successful form submission</li>
                <li>Supports form attachments stored in the database</li>
                <li>Admin dashboard with full CRUD for submitted forms</li>
                <li>
                  Form modules include Wakaf Tunai & Fisabilillah donations
                </li>
              </ul>

              <div className="flex flex-wrap gap-2 mb-4">
                {["HTML", "Tailwind", "Laravel", "FilamentPHP", "PHP", "MySQL"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 mr-1 rounded-full text-sm hover:bg-blue-500/20
                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* PROJECT 3 WakafSelangor App */}
            <div className="p-6 rounded-xl border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2">
                📱 WakafSelangor Mobile App
              </h3>
              <p className="text-gray-400 mb-4">
                A mobile application developed for Perbadanan Wakaf Selangor
                (PWS) to centralize wakaf-related information, services, and
                online access for the public.
              </p>

              <ul className="text-gray-400 mb-4 list-disc list-inside space-y-1 text-sm">
                <li>
                  Provides information about wakaf products and initiatives
                </li>
                <li>Downloadable official forms and guidelines</li>
                <li>Integrated Wakaf Selangor Online payment gateway</li>
                <li>Daily prayer times across Malaysia</li>
                <li>
                  Built-in Al-Quran and Hadith references related to wakaf
                </li>
                <li>
                  Centralized access to services and external links offered by
                  PWS
                </li>
              </ul>

              <div className="flex flex-wrap gap-2 mb-4">
                {["Ionic", "Firebase", "WordPress API", "Angular"].map(
                  (tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 mr-1 rounded-full text-sm hover:bg-blue-500/20
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                    "
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
            </div>

            {/* PROJECT 4 FinanceKeeper */}
            <div className="p-6 rounded-xl border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2">📱 FinanceKeeper</h3>
              <p className="text-gray-400 mb-4">
                A personal finance management system designed to help users
                track their income, expenses, and savings. Provides clear visual
                summaries and detailed records on a monthly basis. This is an
                on-going project with planned future enhancements.
              </p>

              <ul className="text-gray-400 mb-4 list-disc list-inside space-y-1 text-sm">
                <li>
                  <strong>Dashboard:</strong> Displays overall financial
                  activity by month
                </li>
                <li>
                  <strong>Finance Record:</strong> Allows user to input income,
                  purchases, and savings per month
                </li>
                <li>
                  <strong>Overall Record:</strong> Auto-calculates totals from
                  user entries
                </li>
                <li>
                  Built with scalability in mind for future module additions
                </li>
              </ul>

              <div className="flex flex-wrap gap-2 mb-4">
                {["Ionic", "Firebase", "Angular"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 mr-1 rounded-full text-sm hover:bg-blue-500/20
                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
