import { SiteHeader } from "./components/SiteHeader";
import { Hero } from "./components/Hero";
import { Work } from "./components/Work";
import { Experience } from "./components/Experience";
import { About } from "./components/About";
import { Contact, SiteFooter } from "./components/Contact";

const App = () => {
  return (
    <>
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
