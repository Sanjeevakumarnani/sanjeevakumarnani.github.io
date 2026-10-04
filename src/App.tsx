import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './App.css';

import Navigation from './components/Navigation';
import CursorGlow from './components/CursorGlow';
import ElementsCollection from './components/ElementsCollection';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import Posts from './sections/Posts';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    ScrollTrigger.refresh();
    return () => ScrollTrigger.getAll().forEach((st) => st.kill());
  }, []);

  return (
    <div className="portfolio-shell">
      <div className="tree-background" aria-hidden="true">
        <ElementsCollection
          variant="generative-tree"
          speed={1}
          size={0.65}
          particleAmount={0}
          hue={0}
          saturation={1}
          brightness={1}
          opacity={0.77}
        />
      </div>
      <div className="ambient-grid" aria-hidden="true" />
      <CursorGlow />
      <Navigation />
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Posts />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
