import { projectsData } from '../data/projects';

export const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6 max-w-7xl mx-auto">
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent inline-block">
          &lt; Featured Projects /&gt;
        </h2>
        <p className="text-gray-400 mt-2 text-sm sm:text-base">
          Highlighting key projects across Mobile (iOS/Android), Web, and AI Solutions.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projectsData.map((project) => (
          <div
            key={project.id}
            className="group relative bg-[#0b0d17]/80 border border-gray-800 hover:border-purple-500/50 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-[0_0_25px_rgba(168,85,247,0.15)] flex flex-col justify-between"
          >
            <div>
              {/* Image Preview Container */}
              <div className="relative w-full h-52 bg-slate-900/60 overflow-hidden border-b border-gray-800/80">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-600 font-mono text-sm">
                    [ Project Preview Image ]
                  </div>
                )}
                {/* Badge */}
                <span className="absolute top-3 right-3 bg-purple-900/80 border border-purple-500/30 text-purple-200 text-xs px-3 py-1 rounded-full backdrop-blur-md font-mono">
                  {project.badge}
                </span>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <span className="text-cyan-400 text-xs font-mono tracking-wider uppercase">
                  {project.subtitle}
                </span>
                <h3 className="text-xl font-bold text-white mt-1 mb-3 group-hover:text-purple-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="bg-gray-800/60 text-purple-300 border border-purple-500/20 text-xs px-2.5 py-1 rounded-md font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Clickable Action Button */}
            <div className="p-6 pt-0">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 transition-all shadow-md hover:shadow-purple-500/25 active:scale-[0.98]"
              >
                <span>{project.linkText}</span>
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};