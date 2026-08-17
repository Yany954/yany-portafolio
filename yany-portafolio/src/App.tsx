import { useState, useEffect, useRef } from "react";
import { Download, Mail, Phone } from "lucide-react";
import { ParticleBackground } from "./components/ParticleBackground";
import { Header } from "./components/Header";
import { Projects } from "./components/Projects";
import { skills, timeline } from "./data/portafolioData";
import profileImage from "./assets/profile.png";

const App = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const sectionsRef = useRef<Record<string, HTMLElement | null>>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up");
          }
        });
      },
      { threshold: 0.1 }
    );

    Object.values(sectionsRef.current).forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const handleDownloadCV = () => {
    const btn = document.getElementById("download-btn");
    if (btn) {
      btn.classList.add("animate-pulse");
      setTimeout(() => {
        btn.classList.remove("animate-pulse");

        const link = document.createElement("a");
        link.href = "/assets/Yany_Gonzalez_Yepez_CV.pdf";
        link.download = "Yany_Gonzalez_Yepez_CV.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        const successMsg = document.createElement("div");
        successMsg.className =
          "fixed bottom-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 animate-fade-in";
        successMsg.textContent = "✓ CV Downloaded Successfully!";
        document.body.appendChild(successMsg);
        setTimeout(() => successMsg.remove(), 3000);
      }, 1000);
    }
  };

  return (
    <div className="bg-gray-950 text-gray-100 min-h-screen overflow-x-hidden">
      <ParticleBackground />
      <Header />

      {/* Hero Section */}
      <section
        id="home"
        ref={(el) => {
          sectionsRef.current["home"] = el;
        }}
        className="min-h-screen flex items-center justify-center px-6 pt-20"
        style={{ transform: "translateZ(0)" }}
      >
        <div
          className="text-center max-w-4xl mx-auto opacity-0"
          style={{ animation: "fadeInUp 1s ease-out forwards" }}
        >
          <div className="mb-8 font-mono text-sm md:text-base text-gray-400">
            <div className="mt-2">
              &gt; Skills: [iOS, Android, React, Flutter, AI, GCP]
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-violet-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Yany Gonzalez Yepez
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Software Engineer | Mobile & Web Developer | AI Enthusiast
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <button
              id="download-btn"
              onClick={handleDownloadCV}
              className="px-8 py-3 bg-gradient-to-r from-violet-600 to-purple-600 rounded-lg font-semibold hover:from-violet-500 hover:to-purple-500 transition-all flex items-center gap-2 shadow-lg shadow-violet-500/50"
            >
              <Download size={20} />
              Download CV.pdf
            </button>
            <a
              href="#contact"
              className="px-8 py-3 border-2 border-cyan-500 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all"
            >
              Contact Me
            </a>
          </div>

          <div className="flex justify-center gap-6 mt-8">
            {/* LinkedIn Button */}
            <a
              href="https://linkedin.com/in/yany-gonzalez-yepez-80594820b/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
              </svg>
            </a>

            {/* GitHub Button */}
            <a
              href="https://github.com/Yany954"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400 transition-colors"
              aria-label="GitHub Profile"
            >
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" />
              </svg>
            </a>

            {/* Mail Button */}
            <a
              href="mailto:yanygonzalezyepez@gmail.com"
              className="text-gray-400 hover:text-cyan-400 transition-colors"
              aria-label="Send Email"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        ref={(el) => {
          sectionsRef.current["about"] = el;
        }}
        className="py-20 px-6 opacity-0"
      >
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
            About Me
          </h2>

          <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-violet-500/20 shadow-xl shadow-violet-500/10">
            <div className="grid items-center gap-8 md:grid-cols-[260px_1fr]">
              <div className="flex justify-center md:justify-start">
                <div className="relative w-56 h-56 md:w-72 md:h-72 rounded-full border-4 border-violet-500/60 shadow-[0_0_35px_rgba(168,85,247,0.35)] overflow-hidden bg-gray-900">
                  <img
                    src={profileImage}
                    alt="Yany Gonzalez Yepez"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>

              <div>
                <p className="text-lg text-gray-300 leading-relaxed mb-6">
                  I am a Software Engineer dedicated to bridging the gap between
                  advanced technology and human needs. With a technical core in
                  React, Flutter, and iOS/Android development, I integrate AI and
                  Google Cloud Platform
                  <span className="text-violet-400 font-semibold">
                    {" "}AI and Google Cloud Platform to build intelligent, scalable
                    applications
                  </span>
                  .
                </p>
                <p className="text-lg text-gray-300 leading-relaxed mb-6">
                  With a strong foundation in mobile development, I create solutions
                  that aren't just functional—they're intuitive and delightful. From
                  building cross-platform mobile apps with Flutter to crafting
                  responsive web experiences with React, I bring both technical
                  excellence and user empathy to every project.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
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
        ref={(el) => {
          sectionsRef.current["skills"] = el;
        }}
        className="py-20 px-6 opacity-0"
      >
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
            Skill Nebula
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-violet-500/20 hover:border-violet-500/40 transition-all hover:shadow-lg hover:shadow-violet-500/20"
                onMouseEnter={() => setHoveredSkill(skill.name)}
                onMouseLeave={() => setHoveredSkill(null)}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex justify-between items-center mb-3">
                  <span className="text-xl font-semibold">{skill.name}</span>
                  <span className="text-sm text-gray-400">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-3 mb-3 overflow-hidden">
                  <div
                    className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000`}
                    style={{
                      width:
                        hoveredSkill === skill.name ? `${skill.level}%` : "0%",
                    }}
                  />
                </div>
                {hoveredSkill === skill.name && (
                  <p className="text-sm text-gray-400 animate-fade-in">
                    {skill.description}
                  </p>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 bg-gradient-to-br from-violet-900/30 to-purple-900/30 rounded-2xl p-8 border border-violet-500/30">
            <h3 className="text-2xl font-bold mb-4 text-violet-300">
              AI & Logic
            </h3>
            <p className="text-gray-300 mb-4">
              I build scalable digital solutions with intelligent automation. I
              develop cross-platform mobile apps using Flutter and Kotlin
              Multiplatform, deploy to production via App Store, and architect
              AI-powered systems with Google Cloud Platform and Vertex AI. My
              work spans conversational agents, WhatsApp automation, and machine
              learning integration—combining technical excellence with customer
              empathy to create intuitive, high-performance applications.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-violet-500/20 rounded-full text-sm">
                Vertex AI
              </span>
              <span className="px-4 py-2 bg-purple-500/20 rounded-full text-sm">
                Google Cloud Platform
              </span>
              <span className="px-4 py-2 bg-cyan-500/20 rounded-full text-sm">
                Typescript
              </span>
              <span className="px-4 py-2 bg-blue-500/20 rounded-full text-sm">
                Automation
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <div ref={(el) => { sectionsRef.current["projects"] = el; }}>
        <Projects />
      </div>

      {/* Experience Timeline Section */}
      <section
        id="experience"
        ref={(el) => {
          sectionsRef.current["experience"] = el;
        }}
        className="py-20 px-6 opacity-0"
      >
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
            My experience
          </h2>
          <div className="space-y-8">
            {timeline.map((item, index) => (
              <div
                key={index}
                className="relative pl-8 md:pl-16 border-l-2 border-violet-500/30 hover:border-violet-500 transition-all"
              >
                <div className="absolute left-0 top-0 w-4 h-4 bg-gradient-to-br from-violet-500 to-cyan-500 rounded-full -translate-x-[9px] animate-pulse" />
                <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-violet-500/20 hover:shadow-lg hover:shadow-violet-500/20 transition-all">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span className="text-sm text-gray-400 font-mono">
                      {item.year}
                    </span>
                    <span
                      className={`px-3 py-1 bg-gradient-to-r ${item.color} rounded-full text-xs font-semibold text-gray-900`}
                    >
                      {item.tag}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                  <div className="text-violet-400 mb-3">
                    {item.company} | {item.location}
                  </div>
                  <p className="text-gray-300">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        ref={(el) => {
          sectionsRef.current["contact"] = el;
        }}
        className="py-20 px-6 opacity-0"
      >
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
            Contact me
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <a
              href="mailto:yanygonzalezyepez@gmail.com"
              className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-violet-500/20 hover:border-violet-500/40 transition-all hover:shadow-lg hover:shadow-violet-500/20 flex items-center gap-4"
            >
              <Mail className="text-violet-400" size={32} />
              <div>
                <div className="text-sm text-gray-400">Email</div>
                <div className="text-lg">yanygonzalezyepez@gmail.com</div>
              </div>
            </a>
            <a
              href="tel:+17866696004"
              className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-violet-500/20 hover:border-violet-500/40 transition-all hover:shadow-lg hover:shadow-violet-500/20 flex items-center gap-4"
            >
              <Phone className="text-cyan-400" size={32} />
              <div>
                <div className="text-sm text-gray-400">Phone</div>
                <div className="text-lg">+1 786 669 6004</div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-violet-500/20">
        <div className="container mx-auto text-center text-gray-400">
          <p>
            &copy; 2026 Yany Gonzalez Yepez. Compiled with React & TypeScript.
          </p>
        </div>
      </footer>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .animate-fade-in {
          animation: fadeIn 0.3s ease-out forwards;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        html {
          scroll-behavior: smooth;
        }

        ::-webkit-scrollbar {
          width: 10px;
        }

        ::-webkit-scrollbar-track {
          background: #0a0f1e;
        }

        ::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #8b5cf6, #06b6d4);
          border-radius: 5px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #7c3aed, #0891b2);
        }
      `}</style>
    </div>
  );
};

export default App;