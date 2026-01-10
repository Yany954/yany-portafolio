import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Download, Github, Linkedin, Mail, Phone, ExternalLink } from 'lucide-react';
  import jsPDF from 'jspdf';
// Particle background component
const ParticleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: any[] = [];
    const particleCount = 100;

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;

      constructor() {
        this.x = Math.random() * (canvas?.width || window.innerWidth);
        this.y = Math.random() * (canvas?.height || window.innerHeight);
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.size = Math.random() * 2 + 1;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (canvas && (this.x < 0 || this.x > canvas.width)) this.vx *= -1;
        if (canvas && (this.y < 0 || this.y > canvas.height)) this.vy *= -1;
      }

      draw() {
        if (!ctx) return;
        ctx.fillStyle = 'rgba(139, 92, 246, 0.6)';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    const animate = () => {
      ctx.fillStyle = 'rgba(10, 15, 30, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle, i) => {
        particle.update();
        particle.draw();

        particles.slice(i + 1).forEach(p2 => {
          const dx = particle.x - p2.x;
          const dy = particle.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 100) {
            ctx.strokeStyle = `rgba(139, 92, 246, ${1 - dist / 100})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        });
      });

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full -z-10" />;
};

// Header component
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-gray-900/95 backdrop-blur-md shadow-lg shadow-violet-500/10' : 'bg-transparent'}`}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
            &lt;YG /&gt;
          </div>

          <div className="hidden md:flex space-x-8">
            {['home', 'about', 'skills', 'experience', 'contact'].map(item => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-gray-300 hover:text-violet-400 transition-colors capitalize"
              >
                {item}
              </button>
            ))}
          </div>

          <button
            className="md:hidden text-gray-300"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden mt-4 space-y-4 pb-4">
            {['home', 'about', 'skills', 'experience', 'contact'].map(item => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="block text-gray-300 hover:text-violet-400 transition-colors capitalize"
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

// Typing effect component
const TypingEffect = ({ texts }: { texts: string[] }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (charIndex < texts[currentIndex].length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + texts[currentIndex][charIndex]);
        setCharIndex(charIndex + 1);
      }, 50);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setDisplayText('');
        setCharIndex(0);
        setCurrentIndex((currentIndex + 1) % texts.length);
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [charIndex, currentIndex, texts]);

  return <span className="text-cyan-400">{displayText}<span className="animate-pulse">|</span></span>;
};

// Main App Component
const App = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const sectionsRef = useRef<Record<string, HTMLElement | null>>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    Object.values(sectionsRef.current).forEach(section => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const skills = [
    { name: 'React', level: 90, color: 'from-blue-400 to-cyan-400', description: 'Building modern web apps' },
    { name: 'Flutter', level: 85, color: 'from-blue-500 to-sky-400', description: 'Cross-platform mobile development' },
    { name: 'Java', level: 80, color: 'from-red-500 to-orange-400', description: 'Backend & Android development' },
    { name: 'Dart', level: 85, color: 'from-cyan-500 to-blue-400', description: 'Flutter development' },
    { name: 'JavaScript', level: 88, color: 'from-yellow-400 to-orange-400', description: 'Full-stack development' },
    { name: 'SQL', level: 75, color: 'from-indigo-400 to-purple-400', description: 'Database management' },
    { name: 'Python', level: 70, color: 'from-blue-400 to-yellow-400', description: 'AI & Automation' },
    { name: 'TypeScript', level: 70, color: 'from-blue-600 to-blue-400', description: 'Type-safe development' },
  ];

  const timeline = [
    {
      year: '2023 - 2025',
      title: 'Mobile/Web Developer',
      company: '38 Grados Lab',
      location: 'Remote',
      tag: 'Core Development',
      description: 'As a Software Engineer specialized in mobile development for iOS and Android, I leverage a robust technical stack including Flutter, Kotlin Multiplatform (KMP), and Capacitor to deliver high-performance applications. With a comprehensive grasp of the full project lifecycle—from initial architecture and maintaining cross-platform apps to successful App Store deployment—I integrate advanced Google Cloud Platform (GCP) services and Generative AI to create innovative solutions such as automated WhatsApp messaging systems and conversational agent builders. This technical expertise is further enhanced by my bilingual C1 English proficiency and a professional background in high-stakes customer service, allowing me to build scalable digital products that prioritize both engineering rigor and an intuitive user experience',
      color: 'from-violet-400 to-purple-400'
    },    
    {
      year: '2025 - Present',
      title: 'Front Desk Agent',
      company: 'La Quinta Inn & Suites',
      location: 'Rock Hill, NC',
      tag: 'Human Interface & UX',
      description: 'Mastering customer experience and understanding user needs through direct interaction. Exceptional service delivery and problem-solving.',
      color: 'from-green-400 to-emerald-400'
    },
    {
      year: '2020 - 2023',
      title: 'Secretary',
      company: 'Naya Sport',
      location: 'Bogotá, Colombia',
      tag: 'Customer Relations',
      description: 'Sales management, customer service excellence, and business operations in sportswear industry.',
      color: 'from-pink-400 to-rose-400'
    }
  ];



const handleDownloadCV = () => {
    const btn = document.getElementById('download-btn');
    if (btn) {
      btn.classList.add('animate-pulse');
      setTimeout(() => {
        btn.classList.remove('animate-pulse');
        
        const link = document.createElement('a');
        link.href = '/Yany_Gonzalez_Yepez_CV.pdf'; 
        link.download = 'Yany_Gonzalez_Yepez_CV.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        const successMsg = document.createElement('div');
        successMsg.className = 'fixed bottom-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 animate-fade-in';
        successMsg.textContent = '✓ CV Downloaded Successfully!';
        document.body.appendChild(successMsg);
        setTimeout(() => successMsg.remove(), 3000);
      }, 1000);
    }
  };

  return (
    <div className="bg-gray-950 text-gray-100 min-h-screen overflow-x-hidden">
      <ParticleBackground />
      <Header />

      {/* Hero Section - ADD PARALLAX HERE */}
      <section
        id="home"
        ref={el => { sectionsRef.current['home'] = el; }}
        className="min-h-screen flex items-center justify-center px-6 pt-20"
        style={{ transform: 'translateZ(0)' }}
      >
        <div className="text-center max-w-4xl mx-auto opacity-0" style={{ animation: 'fadeInUp 1s ease-out forwards' }}>
          <div className="mb-8 font-mono text-sm md:text-base text-gray-400">            
            <div className="mt-2">&gt; Skills: [iOS, Android, React, Flutter, AI, GCP]</div>
            
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
            <a href="https://linkedin.com/in/yany-gonzalez-yepez-80594820b/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="https://github.com/Yany954" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors">
              <Github size={24} />
            </a>
            <a href="mailto:yanygonzalezyepez@gmail.com" className="text-gray-400 hover:text-cyan-400 transition-colors">
              <Mail size={24} />
            </a>
          </div>
        </div>
      </section>

      {/* About Section - ADD SCROLL FADE-IN */}
      <section
        id="about"
        ref={el => { sectionsRef.current['about'] = el; }}
        className="py-20 px-6 opacity-0"
      >
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-violet-500/20 shadow-xl shadow-violet-500/10">
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              I'm a passionate Software Engineer who bridges the gap between technology and human experience. My journey in hospitality has taught me the most valuable lesson in tech: <span className="text-violet-400 font-semibold">understanding what users truly need</span>.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              With a strong foundation in mobile and web development, I create solutions that aren't just functional—they're intuitive and delightful. From building cross-platform mobile apps with Flutter to crafting responsive web experiences with React, I bring both technical excellence and user empathy to every project.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Currently expanding my expertise in Artificial Intelligence through Harvard's CS50 AI course, I'm excited to integrate cutting-edge AI capabilities into user-centered applications. My goal is to create technology that feels less like a tool and more like a helpful companion.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section - ADD STAGGER ANIMATION */}
      <section
        id="skills"
        ref={el => { sectionsRef.current['skills'] = el; }}
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
                    style={{ width: hoveredSkill === skill.name ? `${skill.level}%` : '0%' }}
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
            <h3 className="text-2xl font-bold mb-4 text-violet-300">AI & Logic</h3>
            <p className="text-gray-300 mb-4">
               I build scalable digital solutions with intelligent automation. I develop cross-platform mobile apps using Flutter and Kotlin Multiplatform, deploy to production via App Store, and architect AI-powered systems with Google Cloud Platform and Vertex AI. My work spans conversational agents, WhatsApp automation, and machine learning integration—combining technical excellence with customer empathy to create intuitive, high-performance applications.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-violet-500/20 rounded-full text-sm">Vertex AI</span>
              <span className="px-4 py-2 bg-purple-500/20 rounded-full text-sm">Google Cloud Platform</span>
              <span className="px-4 py-2 bg-cyan-500/20 rounded-full text-sm">Typescript</span>
              <span className="px-4 py-2 bg-blue-500/20 rounded-full text-sm">Automation</span>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Timeline - ADD PARALLAX SCROLL */}
      <section
        id="experience"
        ref={el => { sectionsRef.current['experience'] = el; }}
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
                    <span className="text-sm text-gray-400 font-mono">{item.year}</span>
                    <span className={`px-3 py-1 bg-gradient-to-r ${item.color} rounded-full text-xs font-semibold text-gray-900`}>
                      {item.tag}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                  <div className="text-violet-400 mb-3">{item.company} | {item.location}</div>
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
        ref={el => { sectionsRef.current['contact'] = el; }}
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
          <p>&copy; 2026 Yany Gonzalez Yepez. Compiled with React & TypeScript.</p>
          
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

        /* Smooth scrolling */
        html {
          scroll-behavior: smooth;
        }

        /* Custom scrollbar */
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