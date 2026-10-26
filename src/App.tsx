import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './App.css';

gsap.registerPlugin(ScrollTrigger);

type Project = { number: string; name: string; category: string; description: string; stack: string[]; repo: string; demo?: string };
const projects: Project[] = [
  { number: '01', name: 'OmniRep', category: 'WEB3 / DIGITAL IDENTITY', description: 'A portable, explainable reputation passport that brings activity from multiple testnet wallets into one transparent profile.', stack: ['React', 'TypeScript', 'Blockchain'], repo: 'https://github.com/Sanjeevakumarnani/OmniRep-PS64-INNOBLOCK', demo: 'https://omni-rep-ps-64-innoblock-ly8xronci-sanjeevakumarnanis-projects.vercel.app/' },
  { number: '02', name: 'CrisisOps', category: 'CIVIC TECH / DISASTER RESPONSE', description: 'An operational memory engine for disaster teams coordinating people, needs, resources and transport constraints.', stack: ['React', 'Data Systems', 'AI'], repo: 'https://github.com/Sanjeevakumarnani/CrisisOps' },
  { number: '03', name: 'EngramOps', category: 'HUMANITARIAN TECHNOLOGY', description: 'A response workflow concept focused on preserving field context and making operational information easier to retrieve.', stack: ['TypeScript', 'Web App', 'Data'], repo: 'https://github.com/Sanjeevakumarnani/EngramOps' },
  { number: '04', name: 'MediKiosk+', category: 'HEALTH TECH / PATIENT INTAKE', description: 'A clinical intake experience with token generation, estimated waiting times, a doctor console and OPD queue prioritisation.', stack: ['React', 'PostgreSQL', 'Prisma'], repo: 'https://github.com/Sanjeevakumarnani' },
  { number: '05', name: 'SocioSports', category: 'COMMUNITY / SPORTS', description: 'A community-first sports platform designed around discovery, participation and a smoother digital experience for players.', stack: ['React', 'TypeScript', 'Tailwind'], repo: 'https://github.com/Sanjeevakumarnani/sociosportsv2' },
  { number: '06', name: 'CampusWave', category: 'CAMPUS / MOBILE + BACKEND', description: 'A campus radio and student platform with a Flask backend, MySQL persistence and a Kotlin Android client.', stack: ['Flask', 'MySQL', 'Kotlin'], repo: 'https://github.com/Sanjeevakumarnani/Campus_Wave__Backend' },
  { number: '07', name: 'LinkShield', category: 'SECURITY / ANTIPHISHING', description: 'A security concept designed to help people recognise suspicious links and reduce exposure to phishing attacks.', stack: ['React Native', 'FastAPI', 'Supabase'], repo: 'https://github.com/Sanjeevakumarnani' },
  { number: '08', name: 'NutriSense AI', category: 'AI / WELLNESS', description: 'An AI-focused exploration of nutrition insights and accessible digital wellness support.', stack: ['AI', 'Web App', 'Data'], repo: 'https://github.com/Sanjeevakumarnani/nutrisense-ai' },
];
const skillGroups = [
  { title: 'Frontend engineering', items: 'React · TypeScript · Vite · Tailwind CSS · HTML · CSS' },
  { title: 'Backend & data', items: 'Python · Flask · FastAPI · SQL · PostgreSQL · MySQL · Prisma' },
  { title: 'AI & intelligent systems', items: 'LLM API integration · AI product workflows · prompt design' },
  { title: 'Platforms & delivery', items: 'Git · GitHub · Vercel · Render · Supabase · Android' },
];
const journey = [
  { year: 'NOW', title: 'B.Tech · Computer Science & Engineering', note: 'Lateral-entry student at Geethanjali College of Engineering and Technology. Learning by building.' },
  { year: '2026', title: 'OmniRep · INNOBLOCK PS64', note: 'Built and deployed a cross-wallet reputation passport concept for a digital identity problem statement.' },
  { year: '2026', title: 'CrisisOps / EngramOps', note: 'Explored persistent operational memory for disaster response and field coordination.' },
  { year: '2025—26', title: 'Hackathons & product builds', note: 'Turning problem statements into prototypes across health, safety, security, campus life and community technology.' },
];

export default function App() {
  const root = useRef<HTMLDivElement>(null);
  const hero = useRef<HTMLElement>(null);
  const beam = useRef<HTMLDivElement>(null);
  const [contactOpen, setContactOpen] = useState(false);
  const [lightOn, setLightOn] = useState(true);
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.nav-inner', { y: -22, opacity: 0, duration: 0.8, ease: 'power3.out' });
      gsap.from('.hero-kicker, .hero-title-line, .hero-deck, .hero-actions', {
        y: 28, opacity: 0, duration: 0.85, stagger: 0.12, ease: 'power3.out', delay: 0.15,
      });
      gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach((el) => {
        gsap.fromTo(el, { y: 38, opacity: 0 }, {
          y: 0, opacity: 1, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 86%', once: true },
        });
      });
      gsap.utils.toArray<HTMLElement>('.project-row').forEach((el, i) => {
        gsap.fromTo(el, { y: 32, opacity: 0 }, {
          y: 0, opacity: 1, duration: 0.65, delay: (i % 2) * 0.08,
          scrollTrigger: { trigger: el, start: 'top 88%', once: true },
        });
      });
      gsap.fromTo('.collab-hand', { x: -24, y: 18, rotation: -5, opacity: 0 }, {
        x: 0, y: 0, rotation: 0, opacity: 1, duration: 1,
        scrollTrigger: { trigger: '.collab-section', start: 'top 76%', once: true },
      });
      gsap.fromTo('.string-path', { strokeDashoffset: 240 }, {
        strokeDashoffset: 0, duration: 1.1, stagger: 0.12, ease: 'power2.out',
        scrollTrigger: { trigger: '.collab-section', start: 'top 70%', once: true },
      });
    }, root);
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') { setContactOpen(false); setActiveProject(null); setMenuOpen(false); }
    };
    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, []);

  useEffect(() => {
    const section = hero.current;
    const light = beam.current;
    if (!section || !light) return;
    let frame = 0;
    let x = window.innerWidth * 0.68;
    let y = window.innerHeight * 0.36;
    const move = (event: PointerEvent) => {
      x = event.clientX; y = event.clientY;
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        section.style.setProperty('--beam-x', x + 'px');
        section.style.setProperty('--beam-y', y + 'px');
        frame = 0;
      });
    };
    section.addEventListener('pointermove', move, { passive: true });
    return () => { section.removeEventListener('pointermove', move); if (frame) cancelAnimationFrame(frame); };
  }, []);

  return <div className="portfolio" ref={root}>
    <div className="film-grain" aria-hidden="true" />
    <header className="site-nav">
      <div className="nav-inner">
        <a className="wordmark" href="#top" aria-label="SSK home">SSK<span>®</span></a>
        <nav className={menuOpen ? 'nav-links nav-links-open' : 'nav-links'} aria-label="Main navigation">
          <a href="#about" onClick={() => setMenuOpen(false)}>01 / About</a>
          <a href="#work" onClick={() => setMenuOpen(false)}>02 / Work</a>
          <a href="#skills" onClick={() => setMenuOpen(false)}>03 / Toolkit</a>
          <a href="#journey" onClick={() => setMenuOpen(false)}>04 / Journey</a>
        </nav>
        <div className="nav-end"><span className="availability"><i /> BUILDING IN HYDERABAD</span><button className="nav-contact" onClick={() => setContactOpen(true)}>LET'S TALK ↗</button><button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label="Toggle navigation">{menuOpen ? 'CLOSE' : 'MENU'}</button></div>
      </div>
    </header>

    <main id="top">
      <section className="hero" ref={hero}>
        <div className="hero-underlay" aria-hidden="true"><span>SANJEEVA</span><span>KUMAR</span><div className="underlay-caption">A WORK IN PROGRESS / 2026</div></div>
        <div className="hero-overlay" aria-hidden="true" />
        <div className="hero-content">
          <p className="hero-kicker"><span className="red-square" /> INDEPENDENT DEVELOPER · PORTFOLIO 2026</p>
          <h1><span className="hero-title-line">SUGURU</span><span className="hero-title-line hero-title-second">SANJEEVA <em>KUMAR.</em></span></h1>
          <div className="hero-divider"><span>CS ENGINEERING STUDENT</span><span>17°23' N / 78°29' E</span></div>
          <p className="hero-deck">I turn real-world problems into <strong>useful digital products.</strong><br />Full-stack systems, AI-enabled tools and ideas built to work.</p>
          <div className="hero-actions"><a className="button-primary" href="#work">EXPLORE THE WORK <span>↘</span></a><button className="button-text" onClick={() => setLightOn(!lightOn)}>{lightOn ? 'DISABLE' : 'ENABLE'} FLASHLIGHT <span>◉</span></button></div>
        </div>
        <div className="hero-portrait-wrap">
          <div className="portrait-yellow-block" />
          <div className="portrait-label portrait-label-top">FIG. 01 — THE BUILDER</div>
          <img className="hero-portrait" src={import.meta.env.BASE_URL + 'images/portrait-mask.png'} alt="Portrait of Suguru Sanjeeva Kumar" />
          <div className="portrait-label portrait-label-bottom">S. SANJEEVA KUMAR <span>·</span> CSE</div>
        </div>
        <div ref={beam} className={lightOn ? 'flashlight-layer' : 'flashlight-layer flashlight-disabled'} aria-hidden="true"><div className="flashlight-content">IDEAS INTO SYSTEMS <span>BUILD / TEST / REFINE</span></div></div>
        <div className="hero-foot"><span>SCROLL TO EXPLORE ↓</span><span>DESIGNED AROUND REAL WORK</span><span>01 — INTRODUCTION</span></div>
      </section>

      <section className="intro section-pad" id="about" data-reveal>
        <div className="section-index"><span>01</span><span>THE PERSON BEHIND THE BUILDS</span></div>
        <div className="intro-layout"><h2>Curious by nature.<br /><span>Builder by choice.</span></h2><div className="intro-copy"><p>I'm a Computer Science student who learns by building. My work spans full-stack applications, AI-enabled products, security concepts, campus tools and civic-tech ideas.</p><p>I enjoy taking a problem from an early sketch to a working prototype: shaping the experience, connecting the backend, testing the flow and improving the rough edges.</p><a className="inline-link" href="https://github.com/Sanjeevakumarnani" target="_blank" rel="noreferrer">EXPLORE MY GITHUB ↗</a></div></div>
        <div className="principles"><div><span>01 / APPROACH</span><strong>Start with the problem.</strong></div><div><span>02 / PRACTICE</span><strong>Make the system useful.</strong></div><div><span>03 / MINDSET</span><strong>Keep learning in public.</strong></div></div>
      </section>

      <section className="work-section section-pad" id="work">
        <div className="section-heading" data-reveal><div><p className="eyebrow">02 / SELECTED PROJECTS</p><h2>Proof of <span>practice.</span></h2></div><p>Different problems. Different tools.<br />One consistent habit: make something real.</p></div>
        <div className="project-list">{projects.map((project, index) => <article className={'project-row project-row-' + project.number} key={project.number} data-reveal>
          <button className={'project-visual visual-' + project.number} onClick={() => setActiveProject(project)} aria-label={'Open ' + project.name + ' project details'}><span className="visual-index">SSK ORIGINAL / {project.number}</span><span className="visual-glyph">{['◈','⌁','⟡','✚','◎','∿','⌑','✳'][index]}</span><span className="visual-name">{project.name}</span><span className="visual-category">{project.category}</span><span className="visual-open">↗</span></button>
          <div className="project-info"><p className="project-meta">{project.number} — {project.category}</p><button className="project-title-button" onClick={() => setActiveProject(project)}><h3>{project.name}</h3><span>↗</span></button><p className="project-description">{project.description}</p><div className="stack-list">{project.stack.map(item => <span key={item}>{item}</span>)}</div><div className="project-links"><a href={project.repo} target="_blank" rel="noreferrer">SOURCE CODE ↗</a>{project.demo && <a href={project.demo} target="_blank" rel="noreferrer">LIVE DEMO ↗</a>}<button onClick={() => setActiveProject(project)}>CASE NOTES +</button></div></div>
        </article>)}</div>
      </section>

      <section className="skills-section section-pad" id="skills">
        <div className="section-heading" data-reveal><div><p className="eyebrow">03 / THE TOOLKIT</p><h2>Tools with <span>purpose.</span></h2></div><p>Technologies are a means to an end.<br />These are the tools I use to explore and build.</p></div>
        <div className="skills-grid">{skillGroups.map((group, i) => <article className="skill-item" data-reveal key={group.title}><span>0{i + 1} / CATEGORY</span><h3>{group.title}</h3><p>{group.items}</p><div className="skill-rule"><i /></div></article>)}</div>
      </section>

      <section className="journey-section section-pad" id="journey">
        <div className="section-heading" data-reveal><div><p className="eyebrow">04 / THE TIMELINE</p><h2>Still in the <span>making.</span></h2></div><p>Every build is a chapter.<br />Every challenge leaves a lesson.</p></div>
        <div className="journey-list">{journey.map((item, i) => <article className="journey-row" data-reveal key={item.title}><span className="journey-year">{item.year}</span><span className="journey-dot" /><div><span className="journey-chapter">CHAPTER 0{i + 1}</span><h3>{item.title}</h3><p>{item.note}</p></div><span className="journey-arrow">↗</span></article>)}</div>
      </section>

      <section className="collab-section" id="contact">
        <div className="collab-top"><span>05 / OPEN INVITATION</span><span>GOOD WORK STARTS WITH A CONVERSATION</span></div>
        <div className="collab-layout"><div className="collab-copy"><p className="eyebrow">HAVE A PROBLEM WORTH SOLVING?</p><h2>LET'S MAKE<br /><em>SOMETHING</em><br />MATTER.</h2><p>For thoughtful collaborations, engineering opportunities and ideas worth building.</p><button className="collab-button" onClick={() => setContactOpen(true)}>LET'S COLLABORATE <span>↗</span></button></div>
          <div className="hand-scene" aria-hidden="true"><svg className="collab-strings" viewBox="0 0 480 390" fill="none"><path className="string-path" d="M30 24 C130 70 130 150 246 172 S350 190 405 145" /><path className="string-path" d="M12 65 C100 100 170 165 260 190 S360 218 422 175" /><path className="string-path" d="M48 105 C120 140 170 205 255 220 S350 248 440 204" /><path className="string-path" d="M40 145 C120 180 155 240 242 252 S340 278 454 238" /></svg><svg className="collab-hand" viewBox="0 0 300 320" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M70 290 C53 269 38 245 30 224 L9 175 C3 161 9 149 20 146 C30 143 38 150 45 164 L68 205 L42 114 C37 98 43 88 54 86 C66 84 72 94 77 108 L100 177 L83 76 C81 61 88 51 100 51 C113 51 118 62 120 77 L137 165 L137 42 C137 26 145 17 158 18 C171 19 176 30 176 44 L177 157 L190 83 C193 67 203 61 214 65 C226 69 229 80 226 95 L207 190 C203 214 213 228 230 237 C248 247 261 265 266 289 L70 290 Z" fill="#EAE8E2" stroke="#11110F" strokeWidth="4" strokeLinejoin="round"/><path d="M68 205 L91 235 M100 177 L118 211 M137 165 L147 204 M177 157 L177 197 M207 190 L193 219" stroke="#11110F" strokeWidth="3" strokeLinecap="round"/><path d="M71 290 L266 289" stroke="#11110F" strokeWidth="4"/></svg><span className="hand-note">PULLING IDEAS<br />INTO REALITY ↗</span></div></div>
        <footer className="site-footer"><a className="wordmark" href="#top">SSK<span>®</span></a><span>© 2026 SUGURU SANJEEVA KUMAR</span><div><a href="https://github.com/Sanjeevakumarnani" target="_blank" rel="noreferrer">GITHUB ↗</a><a href="https://www.linkedin.com/in/sanjeevakumarnani/" target="_blank" rel="noreferrer">LINKEDIN ↗</a><button onClick={() => setContactOpen(true)}>EMAIL ↗</button></div></footer>
      </section>
    </main>

    {activeProject && <div className="modal-backdrop" role="presentation" onMouseDown={event => { if (event.target === event.currentTarget) setActiveProject(null); }}><section className="project-modal" role="dialog" aria-modal="true" aria-labelledby="modal-title"><button className="modal-close" onClick={() => setActiveProject(null)} aria-label="Close project details">×</button><p className="eyebrow">{activeProject.number} / {activeProject.category}</p><h2 id="modal-title">{activeProject.name}</h2><p>{activeProject.description}</p><div className="stack-list">{activeProject.stack.map(item => <span key={item}>{item}</span>)}</div><div className="modal-links"><a href={activeProject.repo} target="_blank" rel="noreferrer">OPEN REPOSITORY ↗</a>{activeProject.demo && <a href={activeProject.demo} target="_blank" rel="noreferrer">OPEN LIVE DEMO ↗</a>}</div></section></div>}
    {contactOpen && <div className="modal-backdrop" role="presentation" onMouseDown={event => { if (event.target === event.currentTarget) setContactOpen(false); }}><section className="contact-modal" role="dialog" aria-modal="true" aria-labelledby="contact-title"><button className="modal-close" onClick={() => setContactOpen(false)} aria-label="Close contact panel">×</button><p className="eyebrow">OPEN INVITATION / 2026</p><h2 id="contact-title">Let's make it<br /><em>happen.</em></h2><p>For engineering opportunities, collaboration and project conversations.</p><a href="mailto:ssksanjeevakumar198@gmail.com">ssksanjeevakumar198@gmail.com ↗</a><a href="https://www.linkedin.com/in/sanjeevakumarnani/" target="_blank" rel="noreferrer">LinkedIn ↗</a><a href="https://github.com/Sanjeevakumarnani" target="_blank" rel="noreferrer">GitHub ↗</a></section></div>}
  </div>;
}
