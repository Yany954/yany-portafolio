import { Mail, Phone } from "lucide-react";
import { SiteHeader } from "./components/SiteHeader";
import { Hero } from "./components/Hero";
import { Work } from "./components/Work";
import { Experience } from "./components/Experience";
import { About } from "./components/About";

const App = () => {
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
      <About />

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