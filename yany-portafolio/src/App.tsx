import { SiteHeader } from "./components/SiteHeader";
import { Hero } from "./components/Hero";
import { Work } from "./components/Work";
import { Experience } from "./components/Experience";
import { About } from "./components/About";
import { Contact, SiteFooter } from "./components/Contact";

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
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
};

export default App;
