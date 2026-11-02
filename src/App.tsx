import { useEffect, useRef, useState, type FormEvent } from 'react';
import {
  ArrowDown, ArrowLeft, ArrowRight, ArrowUpRight, BrainCircuit, Check,
  Code2, Cpu, Database, Github, Linkedin, Mail, Menu, Monitor, Smartphone, X, ShieldCheck,
} from 'lucide-react';
import './App.css';

type Project = {
  number: string;
  title: string;
  type: string;
  description: string;
  stack: string[];
  repo: string;
  demo?: string;
};

const projects: Project[] = [
  {
    number: '01',
    title: 'OmniRep',
    type: 'Digital identity · Web3',
    description: 'A portable, explainable on-chain reputation passport that combines activity from multiple testnet wallets into one transparent profile. The central idea: your Web3 history should not reset when your wallet changes.',
    stack: ['React', 'TypeScript', 'EVM', 'Wallet signatures', 'Reputation scoring'],
    repo: 'https://github.com/Sanjeevakumarnani/OmniRep-PS64-INNOBLOCK',
    demo: 'https://omni-rep-ps-64-innoblock-ly8xronci-sanjeevakumarnanis-projects.vercel.app/',
  },
  {
    number: '02',
    title: 'CrisisOps',
    type: 'Civic technology · Disaster response',
    description: 'A disaster-response memory engine designed to preserve field context: affected people, urgent needs, available resources, responders and local constraints. It helps response teams make better decisions with the information already collected.',
    stack: ['React', 'TypeScript', 'Operational data', 'AI workflows'],
    repo: 'https://github.com/Sanjeevakumarnani/CrisisOps',
  },
  {
    number: '03',
    title: 'MediKiosk+',
    type: 'Health technology · Patient intake',
    description: 'A patient-facing clinical intake kiosk with token generation, estimated consultation time, doctor console, OPD queue prioritisation and an administrative workflow.',
    stack: ['React', 'PostgreSQL', 'Prisma', 'Groq API'],
    repo: 'https://github.com/Sanjeevakumarnani',
  },
  {
    number: '04',
    title: 'SocioSports',
    type: 'Community · Sports platform',
    description: 'A community-first sports platform for discovering activities and making participation easier through a responsive web experience and connected application workflows.',
    stack: ['React', 'TypeScript', 'Tailwind CSS', 'GSAP'],
    repo: 'https://github.com/Sanjeevakumarnani/sociosportsv2',
  },
  {
    number: '05',
    title: 'CampusWave',
    type: 'Campus technology · Mobile',
    description: 'A campus radio and student experience platform connecting a Flask and MySQL backend with an Android application built using Kotlin and Jetpack Compose.',
    stack: ['Flask', 'Python', 'MySQL', 'Kotlin', 'Jetpack Compose'],
    repo: 'https://github.com/Sanjeevakumarnani/Campus_Wave__Backend',
  },
  {
    number: '06',
    title: 'LinkShield',
    type: 'Cybersecurity · Anti-phishing',
    description: 'An anti-phishing concept built to help people identify suspicious links and reduce exposure to online fraud. The idea was shortlisted in the Top 10 from more than 4,000 submissions at HiDeathon 2025.',
    stack: ['React Native', 'Capacitor', 'Supabase', 'FastAPI'],
    repo: 'https://github.com/Sanjeevakumarnani',
  },
];

const doors = [
  {
    number: '01',
    title: 'Web development',
    subtitle: 'Thoughtful interfaces. Solid foundations.',
    description: 'I build responsive web experiences and connect them to the systems behind the screen: APIs, databases, authentication and deployment.',
    tags: ['React', 'TypeScript', 'Vite', 'Tailwind', 'GSAP'],
    icon: Monitor,
    theme: 'door-web',
    work: 'OmniRep · MediKiosk+ · SocioSports',
  },
  {
    number: '02',
    title: 'App development',
    subtitle: 'Useful experiences beyond the browser.',
    description: 'I work on mobile application flows, Android interfaces and the backend services that make them useful in everyday settings.',
    tags: ['Kotlin', 'Jetpack Compose', 'React Native', 'REST APIs'],
    icon: Smartphone,
    theme: 'door-app',
    work: 'CampusWave · LinkShield',
  },
  {
    number: '03',
    title: 'AI systems',
    subtitle: 'Intelligence with a practical purpose.',
    description: 'I explore AI-enabled products, LLM integrations and structured workflows that turn complex information into clearer actions.',
    tags: ['LLM APIs', 'Groq', 'Python', 'FastAPI', 'Data workflows'],
    icon: BrainCircuit,
    theme: 'door-ai',
    work: 'MediKiosk+ · CrisisOps',
  },
  {
    number: '04',
    title: 'Digital identity',
    subtitle: 'Trust, reputation and connected systems.',
    description: 'I am interested in how identity and reputation can move across platforms without losing context, transparency or user control.',
    tags: ['Blockchain', 'EVM', 'Wallets', 'Verification'],
    icon: ShieldCheck,
    theme: 'door-identity',
    work: 'OmniRep',
  },
  {
    number: '05',
    title: 'Prototyping',
    subtitle: 'From a real-world problem to a working build.',
    description: 'Hackathons and hardware projects help me test ideas quickly, work across disciplines and learn the constraints of real environments.',
    tags: ['ESP32', 'Sensors', 'IoT', 'Rapid prototyping'],
    icon: Cpu,
    theme: 'door-lab',
    work: 'Worker safety monitoring · TechSprint',
  },
];

const timeline = [
  {
    date: 'JUL 2026 — NOW',
    title: 'B.Tech · Computer Science & Engineering',
    place: 'Geethanjali College of Engineering and Technology · Hyderabad',
    description: 'Joined through TG ECET lateral entry. Continuing my computer science engineering journey while building practical software products and exploring applied AI.',
    mark: '01',
  },
  {
    date: '2026',
    title: 'Product builds & hackathons',
    place: 'OmniRep · TechSprint · CrisisOps',
    description: 'Built OmniRep, a cross-wallet reputation passport, and worked on problem-led prototypes across digital identity, disaster response and rural infrastructure reliability.',
    mark: '02',
  },
  {
    date: '2025',
    title: 'LinkShield · HiDeathon',
    place: 'AntiPhishers Crew',
    description: 'Worked on an anti-phishing solution shortlisted in the Top 10 from more than 4,000 ideas. The project explored accessible link-risk awareness and safer browsing.',
    mark: '03',
  },
  {
    date: '2023 — 2026',
    title: 'Diploma · Computer Science & Engineering',
    place: 'Brilliant Group of Technical Institutes · Hyderabad',
    description: 'Built the fundamentals of programming, databases, computer networks and software development through diploma coursework and hands-on projects.',
    mark: '04',
  },
  {
    date: '2021',
    title: 'COPA · Computer Operator and Programming Assistant',
    place: 'Industrial Training Institute · Kalwakurthy',
    description: 'Developed practical foundations in computer operations, office tools and programming before progressing into computer science engineering.',
    mark: '05',
  },
];

const capabilities = [
  ['Web & interfaces', 'React · TypeScript · JavaScript · Vite · Tailwind CSS · GSAP'],
  ['Backend & APIs', 'Python · Flask · FastAPI · Node.js · REST APIs'],
  ['Databases', 'PostgreSQL · MySQL · SQLite · Prisma · SQLAlchemy'],
  ['AI & intelligent products', 'LLM API integration · Groq · retrieval workflows · explainable systems'],
  ['Mobile & hardware', 'Kotlin · Jetpack Compose · React Native · ESP32 · IoT sensors'],
  ['Tools & deployment', 'Git · GitHub · Vercel · Render · Supabase · AWS'],
];

const portfolioLinks = {
  github: 'https://github.com/Sanjeevakumarnani',
  linkedin: 'https://www.linkedin.com/in/sanjeevakumarnani/',
  email: 'ssksanjeevakumar198@gmail.com',
};

function ProjectDialog({ project, onClose }: { project: Project; onClose: () => void }) {
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    document.body.classList.add('dialog-open');
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.classList.remove('dialog-open');
    };
  }, [onClose]);

  return (
    <div className="modal-backdrop" onMouseDown={(event) => {
      if (event.target === event.currentTarget) onClose();
    }}>
      <article className="project-dialog" role="dialog" aria-modal="true" aria-labelledby="dialog-title">
        <button className="icon-button dialog-close" onClick={onClose} aria-label="Close project details"><X size={19} /></button>
        <div className="dialog-art">
          <span>SELECTED WORK / {project.number}</span>
          <strong>{project.title}</strong>
          <div className="dialog-orbit dialog-orbit-one" />
          <div className="dialog-orbit dialog-orbit-two" />
        </div>
        <div className="dialog-content">
          <p className="eyebrow">{project.type}</p>
          <h2 id="dialog-title">{project.title}</h2>
          <p className="dialog-description">{project.description}</p>
          <div className="tag-list">{project.stack.map((tag) => <span key={tag}>{tag}</span>)}</div>
          <div className="dialog-actions">
            <a className="text-link" href={project.repo} target="_blank" rel="noreferrer">View source code <ArrowUpRight size={15} /></a>
            {project.demo && <a className="text-link" href={project.demo} target="_blank" rel="noreferrer">Open live project <ArrowUpRight size={15} /></a>}
          </div>
        </div>
      </article>
    </div>
  );
}

export default function App() {
  const [entered, setEntered] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [abilityOpen, setAbilityOpen] = useState(false);
  const [abilityFlipped, setAbilityFlipped] = useState(false);
  const [activeDoor, setActiveDoor] = useState(0);
  const [activeChapter, setActiveChapter] = useState(0);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [localTime, setLocalTime] = useState('--:--');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const doorTrack = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateTime = () => setLocalTime(new Intl.DateTimeFormat('en-IN', {
      timeZone: 'Asia/Kolkata',
      hour: 'numeric',
      minute: '2-digit',
      hour12: true,
    }).format(new Date()));
    updateTime();
    const timer = window.setInterval(updateTime, 30000);
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('intro-open', !entered);
    return () => document.body.classList.remove('intro-open');
  }, [entered]);

  useEffect(() => {
    const nodes = document.querySelectorAll<HTMLElement>('[data-reveal]');
    if (!('IntersectionObserver' in window)) {
      nodes.forEach((node) => node.classList.add('is-visible'));
      return;
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, [entered]);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenuOpen(false);
        setAbilityOpen(false);
      }
    };
    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, []);

  const moveDoors = (direction: -1 | 1) => {
    doorTrack.current?.scrollBy({ left: direction * 350, behavior: 'smooth' });
  };

  const selectDoor = (index: number) => {
    setActiveDoor(index);
    if (doorTrack.current) {
      const card = doorTrack.current.children[index] as HTMLElement | undefined;
      card?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }
  };

  const submitInquiry = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get('name') || '').trim();
    const email = String(data.get('email') || '').trim();
    const message = String(data.get('message') || '').trim();
    const subject = encodeURIComponent('Portfolio enquiry from ' + name);
    const body = encodeURIComponent('Name: ' + name + '\nEmail: ' + email + '\n\n' + message);
    window.location.href = 'mailto:' + portfolioLinks.email + '?subject=' + subject + '&body=' + body;
    setFormSubmitted(true);
  };

  const selectedDoor = doors[activeDoor];
  const SelectedIcon = selectedDoor.icon;

  return (
    <div className="portfolio-root">
      {!entered && (
        <div className="entry-screen">
          <div className="entry-topline">
            <a className="wordmark" href="#home" aria-label="SSK home">ssk<span>.</span></a>
            <span>PERSONAL PORTFOLIO · INDIA</span>
          </div>
          <div className="entry-center">
            <p className="eyebrow"><span className="live-dot" /> INDEPENDENT DEVELOPER / PRODUCT BUILDER</p>
            <h1>Ideas into<br /><em>experiences.</em></h1>
            <p className="entry-name">SUGURU SANJEEVA KUMAR</p>
            <p className="entry-description">A portfolio of things I build, problems I explore and lessons I carry forward.</p>
            <button className="enter-button" onClick={() => setEntered(true)}>
              <span>Click to enter</span><ArrowUpRight size={17} />
            </button>
          </div>
          <div className="entry-footer">
            <span>WEB · APPS · AI · PRODUCT ENGINEERING</span>
            <span>HYDERABAD, INDIA · {localTime}</span>
          </div>
          <div className="entry-index">SSK / 2026</div>
        </div>
      )}

      <div className="site-wrap" id="home">
        <header className="site-header">
          <div className="header-top">
            <a className="wordmark" href="#home" aria-label="SSK home">ssk<span>.</span></a>
            <div className="header-specialties" aria-label="Specialties">
              <span>Web development</span><i />
              <span>App development</span><i />
              <span>AI systems</span><i />
              <span>Product engineering</span>
            </div>
            <div className="header-time"><span>LOCAL TIME</span><strong>{localTime}</strong></div>
            <button className="ability-button" onClick={() => { setAbilityFlipped(false); setAbilityOpen(true); }}>
              My ability card <ArrowUpRight size={14} />
            </button>
            <button className="menu-button" onClick={() => setMenuOpen((open) => !open)} aria-label={menuOpen ? 'Close menu' : 'Open menu'}>
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
          <div className="header-bottom">
            <span>PORTFOLIO / SUGURU SANJEEVA KUMAR</span>
            <nav className={menuOpen ? 'main-nav nav-open' : 'main-nav'}>
              <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
              <a href="#skills" onClick={() => setMenuOpen(false)}>What I do</a>
              <a href="#work" onClick={() => setMenuOpen(false)}>Selected work</a>
              <a href="#story" onClick={() => setMenuOpen(false)}>My story</a>
              <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
            </nav>
            <span className="header-status"><i /> OPEN TO OPPORTUNITIES</span>
          </div>
          {menuOpen && <button className="menu-scrim" aria-label="Close navigation" onClick={() => setMenuOpen(false)} />}
        </header>

        <main>
          <section className="hero-section">
            <div className="hero-index">01 <span>/ INTRODUCTION</span></div>
            <div className="hero-grid">
              <div className="hero-copy">
                <p className="eyebrow"><span className="live-dot" /> COMPUTER SCIENCE · HYDERABAD, INDIA</p>
                <p className="hero-greeting">Independent developer &amp; product builder</p>
                <h1>Hi, I’m<br /><span>Sanjeeva.</span></h1>
                <p className="hero-statement">I turn <em>complex problems</em> into useful digital experiences.</p>
                <p className="hero-description">I’m a Computer Science student who enjoys building across web, mobile, AI and connected systems. I care about the experience people use and the engineering that makes it work.</p>
                <div className="hero-actions">
                  <a className="button button-dark" href="#contact">Start a project <ArrowUpRight size={15} /></a>
                  <a className="button button-line" href="#work">See my work <ArrowDown size={14} /></a>
                </div>
                <div className="hero-availability"><span><i /> AVAILABLE FOR COLLABORATIONS</span><span>REMOTE-FIRST · WORLDWIDE</span></div>
              </div>
              <div className="hero-visual">
                <div className="portrait-frame">
                  <img src={import.meta.env.BASE_URL + 'images/portrait-normal.jpg'} alt="Portrait of Suguru Sanjeeva Kumar" />
                  <div className="portrait-shade" />
                  <span className="portrait-corner corner-tl" />
                  <span className="portrait-corner corner-br" />
                  <span className="portrait-side-label">SSK / BUILDER MODE</span>
                </div>
                <div className="portrait-note"><span>BASED IN</span><strong>HYDERABAD, IN</strong></div>
                <div className="portrait-stamp"><span>BUILD</span><b>WITH<br />PURPOSE</b><span>REPEAT</span></div>
                <div className="portrait-coordinate">17°23' N / 78°29' E</div>
              </div>
            </div>
            <div className="hero-bottom"><span>SCROLL TO EXPLORE</span><span className="scroll-line" /><span>01 — 05</span></div>
          </section>

          <section className="skills-section section-shell" id="skills">
            <div className="section-topline" data-reveal>
              <span className="eyebrow">02 / WHAT I DO</span>
              <span className="section-aside">A FEW WAYS I LIKE TO SOLVE PROBLEMS</span>
            </div>
            <div className="section-intro" data-reveal>
              <h2>My work, <em>one door</em><br />per skill.</h2>
              <p>Different tools, different challenges. The common thread is making technology useful, understandable and reliable.</p>
            </div>
            <div className="door-heading">
              <div><span className="door-count">0{activeDoor + 1} / 05</span><strong>{selectedDoor.title}</strong></div>
              <div className="door-controls">
                <button className="round-control" onClick={() => moveDoors(-1)} aria-label="Previous skills"><ArrowLeft size={17} /></button>
                <button className="round-control" onClick={() => moveDoors(1)} aria-label="Next skills"><ArrowRight size={17} /></button>
              </div>
            </div>
            <div className="doors-track" ref={doorTrack}>
              {doors.map((door, index) => {
                const Icon = door.icon;
                return (
                  <button className={'door-card ' + door.theme + (activeDoor === index ? ' door-active' : '')} key={door.number} onClick={() => setActiveDoor(index)} aria-pressed={activeDoor === index}>
                    <div className="door-art">
                      <div className="door-grid" />
                      <div className="door-arch"><span /><span /><span /></div>
                      <div className="door-art-icon"><Icon size={34} strokeWidth={1.3} /></div>
                      <span className="door-art-index">{door.number} / SKILL</span>
                      <span className="door-art-open">OPEN DOOR <ArrowUpRight size={13} /></span>
                    </div>
                    <div className="door-copy">
                      <span>{door.number} / CAPABILITY</span>
                      <h3>{door.title}</h3>
                      <p>{door.subtitle}</p>
                    </div>
                  </button>
                );
              })}
            </div>
            <div className="door-detail" data-reveal>
              <div className="door-detail-icon"><SelectedIcon size={23} /></div>
              <div className="door-detail-copy">
                <span>INSIDE THIS DOOR</span>
                <p>{selectedDoor.description}</p>
                <div className="tag-list">{selectedDoor.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
              </div>
              <div className="door-detail-work"><span>RELATED WORK</span><strong>{selectedDoor.work}</strong></div>
            </div>
          </section>

          <section className="story-section section-shell" id="story">
            <div className="section-topline" data-reveal>
              <span className="eyebrow">03 / MY STORY</span>
              <span className="section-aside">A WORK IN PROGRESS, BY DESIGN</span>
            </div>
            <div className="story-heading" data-reveal>
              <h2>Let’s go<br /><em>back in time.</em></h2>
              <p>Each chapter has added a new tool, a new perspective or a better question to ask.</p>
            </div>
            <div className="timeline-layout" data-reveal>
              <div className="timeline-list">
                {timeline.map((item, index) => (
                  <button key={item.mark} className={'timeline-tab' + (activeChapter === index ? ' timeline-tab-active' : '')} onClick={() => setActiveChapter(index)} aria-pressed={activeChapter === index}>
                    <span className="timeline-tab-number">{item.mark}</span>
                    <span className="timeline-tab-main"><small>{item.date}</small><strong>{item.title}</strong></span>
                    <ArrowUpRight size={16} />
                  </button>
                ))}
              </div>
              <article className="timeline-detail">
                <div className="timeline-detail-top"><span>CHAPTER {timeline[activeChapter].mark}</span><span>{timeline[activeChapter].date}</span></div>
                <div className="timeline-detail-number">{timeline[activeChapter].mark}</div>
                <p className="eyebrow">THE STORY SO FAR</p>
                <h3>{timeline[activeChapter].title}</h3>
                <h4>{timeline[activeChapter].place}</h4>
                <p className="timeline-description">{timeline[activeChapter].description}</p>
                <div className="timeline-progress">{timeline.map((item, index) => <button key={item.mark} onClick={() => setActiveChapter(index)} className={index <= activeChapter ? 'progress-on' : ''} aria-label={'Show chapter ' + item.mark} />)}</div>
              </article>
            </div>
          </section>

          <section className="work-section section-shell" id="work">
            <div className="section-topline" data-reveal>
              <span className="eyebrow">04 / SELECTED WORK</span>
              <a className="text-link" href={portfolioLinks.github} target="_blank" rel="noreferrer">ALL REPOSITORIES <ArrowUpRight size={14} /></a>
            </div>
            <div className="section-intro work-intro" data-reveal>
              <h2>Built with intent.<br /><em>Made to matter.</em></h2>
              <p>A selection of experiments and products shaped around real problems. Open a project to see the idea, tools and source.</p>
            </div>
            <div className="project-grid">
              {projects.map((project, index) => (
                <button className={'work-card work-card-' + (index + 1)} key={project.number} onClick={() => setSelectedProject(project)}>
                  <div className="work-card-art">
                    <span className="work-art-index">{project.number} / SSK WORK</span>
                    <div className="work-art-shape"><span>{project.title.slice(0, 1)}</span></div>
                    <span className="work-art-caption">{project.type}</span>
                    <span className="work-card-arrow"><ArrowUpRight size={18} /></span>
                  </div>
                  <div className="work-card-info">
                    <span>{project.type}</span>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div className="work-card-bottom"><span>{project.stack.slice(0, 3).join(' · ')}</span><span>VIEW PROJECT +</span></div>
                  </div>
                </button>
              ))}
            </div>
          </section>

          <section className="capabilities-section section-shell">
            <div className="section-topline" data-reveal>
              <span className="eyebrow">05 / THE TOOLKIT</span>
              <span className="section-aside">TECHNOLOGY IS A MEANS, NOT THE OUTCOME</span>
            </div>
            <div className="section-intro" data-reveal>
              <h2>Tools I reach<br /><em>for the work.</em></h2>
              <p>I keep learning new tools as projects demand them. These are the areas I currently work with most.</p>
            </div>
            <div className="capability-grid" data-reveal>
              {capabilities.map(([title, detail], index) => (
                <article className="capability-row" key={title}>
                  <span>0{index + 1}</span>
                  <h3>{title}</h3>
                  <p>{detail}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="contact-section" id="contact">
            <div className="contact-inner">
              <div className="contact-copy" data-reveal>
                <p className="eyebrow">06 / START A PROJECT</p>
                <h2>Got a project?<br /><em>Let’s build it.</em></h2>
                <p>Have a meaningful problem, an idea to test or a team that needs another builder? Send a note with a little context. I’ll get back to you by email.</p>
                <div className="contact-socials">
                  <a href={portfolioLinks.github} target="_blank" rel="noreferrer"><Github size={16} /> GitHub <ArrowUpRight size={13} /></a>
                  <a href={portfolioLinks.linkedin} target="_blank" rel="noreferrer"><Linkedin size={16} /> LinkedIn <ArrowUpRight size={13} /></a>
                  <a href={'mailto:' + portfolioLinks.email}><Mail size={16} /> Email <ArrowUpRight size={13} /></a>
                </div>
              </div>
              <form className="contact-form" onSubmit={submitInquiry} data-reveal>
                <label>Your name<input name="name" autoComplete="name" placeholder="Name" required /></label>
                <label>Your email<input name="email" type="email" autoComplete="email" placeholder="you@example.com" required /></label>
                <label>Tell me about it<textarea name="message" rows={4} placeholder="A little about the project, the challenge or the opportunity..." required /></label>
                <button className="send-button" type="submit">Write the email <ArrowUpRight size={16} /></button>
                {formSubmitted && <p className="form-note" role="status"><Check size={14} /> Your email app should open with the message ready to review and send.</p>}
              </form>
            </div>
            <div className="contact-bottom"><span>AVAILABLE FOR COLLABORATIONS</span><span>REMOTE-FIRST · WORLDWIDE</span></div>
          </section>
        </main>

        <footer className="site-footer">
          <div className="footer-top">
            <a className="wordmark" href="#home">ssk<span>.</span></a>
            <p>Building useful things,<br />one problem at a time.</p>
            <a className="back-top" href="#home">BACK TO TOP <ArrowUpRight size={14} /></a>
          </div>
          <div className="footer-bottom">
            <span>© {new Date().getFullYear()} SUGURU SANJEEVA KUMAR</span>
            <span>DESIGNED WITH INTENT · BUILT IN INDIA</span>
            <div><a href={portfolioLinks.github} target="_blank" rel="noreferrer">GITHUB</a><a href={portfolioLinks.linkedin} target="_blank" rel="noreferrer">LINKEDIN</a><a href={'mailto:' + portfolioLinks.email}>EMAIL</a></div>
          </div>
        </footer>
      </div>

      {abilityOpen && (
        <div className="modal-backdrop ability-backdrop" onMouseDown={(event) => {
          if (event.target === event.currentTarget) setAbilityOpen(false);
        }}>
          <div className="ability-modal">
            <button className="icon-button ability-close" onClick={() => setAbilityOpen(false)} aria-label="Close ability card"><X size={19} /></button>
            <div className={'ability-card' + (abilityFlipped ? ' ability-flipped' : '')} onClick={() => setAbilityFlipped((value) => !value)} role="button" tabIndex={0} onKeyDown={(event) => {
              if (event.key === 'Enter' || event.key === ' ') setAbilityFlipped((value) => !value);
            }} aria-label="Flip ability card">
              <div className="ability-face ability-front">
                <span className="ability-card-top">SSK / DIGITAL BUILDER</span>
                <div className="ability-card-center"><span>THE</span><strong>ABILITY<br />CARD</strong><i>01 — 26</i></div>
                <div className="ability-card-bottom"><span>SUGURU SANJEEVA KUMAR</span><span>FLIP TO EXPLORE ↗</span></div>
              </div>
              <div className="ability-face ability-back">
                <span className="ability-card-top">CURRENT TOOLKIT / 2026</span>
                <div className="ability-back-title">Areas I work across</div>
                <div className="ability-back-list">
                  <span><Code2 size={16} /> Web &amp; frontend engineering</span>
                  <span><Database size={16} /> APIs, backend &amp; databases</span>
                  <span><BrainCircuit size={16} /> AI-enabled product workflows</span>
                  <span><Smartphone size={16} /> Mobile &amp; connected devices</span>
                </div>
                <div className="ability-card-bottom"><span>LEARN BY BUILDING</span><span>FLIP BACK ↗</span></div>
              </div>
            </div>
            <p className="ability-hint">TAP, CLICK OR PRESS ENTER TO FLIP THE CARD</p>
          </div>
        </div>
      )}

      {selectedProject && <ProjectDialog project={selectedProject} onClose={() => setSelectedProject(null)} />}
    </div>
  );
}
