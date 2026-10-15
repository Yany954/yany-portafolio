import { useState } from "react";
import { Mail, Phone } from "lucide-react";
import { SiteHeader } from "./components/SiteHeader";
import { Hero } from "./components/Hero";
import { Work } from "./components/Work";
import { Experience } from "./components/Experience";
import { skills } from "./data/portafolioData";
import profileImage from "./assets/profile.png";

const App = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:bg-primary focus:px-4 focus:py-3 focus:text-primary-foreground"
      >
        Skip to content
      </a>
      <SiteHeader />
      <main id="main">
      <Hero />
      <Work />
      <Experience />

      {/* About Section */}
      <section
        id="about"
        className="py-20 px-6"
      >
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-slate-700 via-violet-700 to-slate-500 bg-clip-text text-transparent">
            About Me
          </h2>

          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 border border-slate-200 shadow-xl shadow-slate-200/80">
            <div className="grid items-center gap-8 md:grid-cols-[260px_1fr]">
              <div className="flex justify-center md:justify-start">
                <div className="relative w-56 h-56 md:w-72 md:h-72 rounded-full border-4 border-violet-200 shadow-[0_0_30px_rgba(139,92,246,0.18)] overflow-hidden bg-slate-100">
                  <img
                    src={profileImage}
                    alt="Yany Gonzalez Yepez"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>

              <div>
                <p className="text-lg text-slate-700 leading-relaxed mb-6">
                  I am a Software Engineer dedicated to bridging the gap between
                  advanced technology and human needs. With a technical core in
                  React, Flutter, and iOS/Android development, I integrate
                  <span className="text-violet-700 font-semibold">
                    {" "}AI and Google Cloud Platform to build intelligent, scalable
                    applications
                  </span>
                  .
                </p>
                <p className="text-lg text-slate-700 leading-relaxed mb-6">
                  With a strong foundation in mobile development, I create solutions
                  that aren't just functional—they're intuitive and delightful. From
                  building cross-platform mobile apps with Flutter to crafting
                  responsive web experiences with React, I bring both technical
                  excellence and user empathy to every project.
                </p>
                <p className="text-lg text-slate-700 leading-relaxed">
                  I am a proactive, bilingual (C1) collaborator committed to
                  excellence and adaptability across the full project lifecycle.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className="py-20 px-6"
      >
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-slate-700 via-violet-700 to-slate-500 bg-clip-text text-transparent">
            Skill Nebula
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className="bg-white/90 backdrop-blur-sm rounded-xl p-6 border border-slate-200 hover:border-violet-300 transition-all hover:shadow-lg hover:shadow-violet-100"
                onMouseEnter={() => setHoveredSkill(skill.name)}
                onMouseLeave={() => setHoveredSkill(null)}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex justify-between items-center mb-3">
                  <span className="text-xl font-semibold text-slate-800">{skill.name}</span>
                  <span className="text-sm text-slate-500">{skill.level}%</span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-3 mb-3 overflow-hidden">
                  <div
                    className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000`}
                    style={{
                      width:
                        hoveredSkill === skill.name ? `${skill.level}%` : "0%",
                    }}
                  />
                </div>
                {hoveredSkill === skill.name && (
                  <p className="text-sm text-slate-600 animate-fade-in">
                    {skill.description}
                  </p>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 bg-gradient-to-br from-violet-50 to-slate-100 rounded-2xl p-8 border border-violet-200">
            <h3 className="text-2xl font-bold mb-4 text-violet-700">
              AI & Logic
            </h3>
            <p className="text-slate-700 mb-4">
              I build scalable digital solutions with intelligent automation. I
              develop cross-platform mobile apps using Flutter and Kotlin
              Multiplatform, deploy to production via App Store, and architect
              AI-powered systems with Google Cloud Platform and Vertex AI. My
              work spans conversational agents, WhatsApp automation, and machine
              learning integration—combining technical excellence with customer
              empathy to create intuitive, high-performance applications.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-violet-100 rounded-full text-sm text-violet-700">
                Vertex AI
              </span>
              <span className="px-4 py-2 bg-slate-200 rounded-full text-sm text-slate-700">
                Google Cloud Platform
              </span>
              <span className="px-4 py-2 bg-cyan-100 rounded-full text-sm text-cyan-700">
                Typescript
              </span>
              <span className="px-4 py-2 bg-blue-100 rounded-full text-sm text-blue-700">
                Automation
              </span>
            </div>
          </div>
        </div>
      </section>


      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 px-6"
      >
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-slate-700 via-violet-700 to-slate-500 bg-clip-text text-transparent">
            Contact me
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <a
              href="mailto:yanygonzalezyepez@gmail.com"
              className="bg-white/90 backdrop-blur-sm rounded-xl p-8 border border-slate-200 hover:border-violet-300 transition-all hover:shadow-lg hover:shadow-violet-100 flex items-center gap-4"
            >
              <Mail className="text-violet-700" size={32} />
              <div>
                <div className="text-sm text-slate-500">Email</div>
                <div className="text-lg text-slate-800">yanygonzalezyepez@gmail.com</div>
              </div>
            </a>
            <a
              href="tel:+17866696004"
              className="bg-white/90 backdrop-blur-sm rounded-xl p-8 border border-slate-200 hover:border-violet-300 transition-all hover:shadow-lg hover:shadow-violet-100 flex items-center gap-4"
            >
              <Phone className="text-violet-700" size={32} />
              <div>
                <div className="text-sm text-slate-500">Phone</div>
                <div className="text-lg text-slate-800">+1 786 669 6004</div>
              </div>
            </a>
          </div>
        </div>
      </section>

      </main>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-slate-200">
        <div className="container mx-auto text-center text-slate-500">
          <p>
            &copy; 2026 Yany Gonzalez Yepez. Compiled with React & TypeScript.
          </p>
        </div>
      </footer>

    </>
  );
};

export default App;