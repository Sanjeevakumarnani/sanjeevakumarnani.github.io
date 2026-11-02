import { useEffect, useState } from 'react';
import { ArrowLeft, ArrowRight, ArrowUpRight, ChevronUp, X, Menu, Github, ExternalLink } from 'lucide-react';
import './App.css';

const roles = ['App Developer', 'Web Developer', 'AI Developer', 'UI/UX Designer', 'Product Builder'];

const doors = [
  { id:'web', title:'Web Development', sub:'END TO END, FROM SKETCH TO LIVE SITE', color:'blue', desc:'Websites, landing pages and interactive tools, built end to end: from layout and interaction to responsive front-end, SEO and launch.', tags:['React','TypeScript','JavaScript','Vite','Tailwind CSS','GSAP'], work:'OmniRep · MediKiosk+ · SocioSports' },
  { id:'app', title:'App Development', sub:'FROM THE FIRST IDEA TO THE APP STORE', color:'wine', desc:'Mobile-first experiences, Android applications and connected product workflows designed around real user needs.', tags:['Kotlin','Jetpack Compose','React Native','Capacitor','REST APIs'], work:'CampusWave · LinkShield' },
  { id:'ui', title:'UI/UX Design', sub:'SIMPLE, CLEAR AND BUILT AROUND PEOPLE', color:'green', desc:'Interfaces that make complex workflows feel natural, with careful attention to hierarchy, accessibility and interaction details.', tags:['Figma','Wireframing','Prototyping','Design systems'], work:'MediKiosk+ · OmniRep' },
  { id:'graphic', title:'Graphic Design', sub:'VISUALS WITH A CLEAR PURPOSE', color:'orange', desc:'Visual communication for digital products, presentations and identity systems, balancing clarity with a distinctive visual language.', tags:['Visual design','Branding','Presentation design','Canva'], work:'Hackathon presentations · Product identity' },
  { id:'ai', title:'AI & Product Engineering', sub:'IDEAS INTO WORKING SYSTEMS', color:'brown', desc:'Applied AI, data-aware workflows and full-stack prototypes that solve concrete problems rather than adding technology for its own sake.', tags:['Python','FastAPI','Groq','PostgreSQL','Prisma','LLM APIs'], work:'CrisisOps · MediKiosk+ · OmniRep' },
];

const projects = [
  { n:'01', name:'OmniRep', category:'Digital Identity / Web3', description:'Your Web3 history should not reset when your wallet changes. A transparent, explainable and portable on-chain reputation passport built from activity across testnet wallets.', stack:'React · TypeScript · EVM · Wallets', repo:'https://github.com/Sanjeevakumarnani/OmniRep-PS64-INNOBLOCK', live:'https://omni-rep-ps-64-innoblock-ly8xronci-sanjeevakumarnanis-projects.vercel.app/', visual:'omni' },
  { n:'02', name:'CrisisOps', category:'Civic Technology / Disaster Response', description:'A persistent operational memory for emergency response teams, connecting affected people, needs, resources, responders and local constraints.', stack:'React · TypeScript · AI workflows', repo:'https://github.com/Sanjeevakumarnani/CrisisOps', visual:'crisis' },
  { n:'03', name:'MediKiosk+', category:'Health Technology / Patient Intake', description:'A patient-facing clinical intake kiosk with token generation, estimated consultation time, doctor console and OPD queue prioritisation.', stack:'React · PostgreSQL · Prisma · Groq API', repo:'https://github.com/Sanjeevakumarnani', visual:'medi' },
  { n:'04', name:'SocioSports', category:'Community / Sports Platform', description:'A community-first sports platform designed to make discovering activities and participating in local sport easier.', stack:'React · TypeScript · Tailwind CSS · GSAP', repo:'https://github.com/Sanjeevakumarnani', visual:'socio' },
  { n:'05', name:'CampusWave', category:'Campus Technology / Android', description:'A campus radio and student experience platform connecting a Flask and MySQL backend with an Android app built using Kotlin and Jetpack Compose.', stack:'Flask · Python · MySQL · Kotlin', repo:'https://github.com/Sanjeevakumarnani', visual:'campus' },
  { n:'06', name:'LinkShield', category:'Cybersecurity / Anti-phishing', description:'An anti-phishing concept to help people identify suspicious links and reduce exposure to online fraud. Shortlisted in the Top 10 from more than 4,000 ideas at HiDeathon 2025.', stack:'React Native · Capacitor · Supabase · FastAPI', repo:'https://github.com/Sanjeevakumarnani', visual:'link' },
];

const milestones = [
  { date:'OCT 2026 — NOW', title:'Independent developer', place:'Personal projects · Hackathons', desc:['Building web, apps, interfaces and brand experiences, carried from the first sketch to launch.','Working directly with clients, collaborators and student teams.'] },
  { date:'JUL 2026 — NOW', title:'B.Tech · Computer Science & Engineering', place:'Geethanjali College of Engineering and Technology · Hyderabad', desc:['Joined through TG ECET lateral entry.','Developing practical software products while continuing computer science engineering.'] },
  { date:'2025', title:'LinkShield · HiDeathon', place:'AntiPhishers Crew', desc:['Shortlisted in the Top 10 from more than 4,000 ideas.','Explored accessible link-risk awareness and safer browsing.'] },
  { date:'2023 — 2026', title:'Diploma · Computer Science & Engineering', place:'Brilliant Group of Technical Institutes · Hyderabad', desc:['Built foundations in programming, databases, networks and software development.'] },
  { date:'2021', title:'COPA · Computer Operator and Programming Assistant', place:'Industrial Training Institute · Kalwakurthy', desc:['Developed practical foundations in computer operations and programming.'] },
];

function Door({ door, active, onClick }:{door:typeof doors[number],active:boolean,onClick:()=>void}) {
  return <button className={`door-card ${door.color} ${active?'selected':''}`} onClick={onClick}>
    <span className="door-number">0{doors.indexOf(door)+1}</span>
    <span className="door"><span className="door-plaque">{door.title.split(' ')[0]}<br/>DEVELOPER</span><span className="door-knob"/></span>
    <span className="door-caption">{door.title}<ArrowUpRight size={15}/></span>
  </button>;
}

export default function App() {
  const [time,setTime] = useState('--:--');
  const [role,setRole] = useState(0);
  const [menu,setMenu] = useState(false);
  const [ability,setAbility] = useState(false);
  const [door,setDoor] = useState(0);
  const [doorDetail,setDoorDetail] = useState(false);
  const [activeProject,setActiveProject] = useState<number|null>(null);

  useEffect(()=>{ const tick=()=>setTime(new Intl.DateTimeFormat('en-IN',{timeZone:'Asia/Kolkata',hour:'numeric',minute:'2-digit',hour12:true}).format(new Date())); tick(); const t=window.setInterval(tick,30000); return ()=>window.clearInterval(t); },[]);
  useEffect(()=>{ const t=window.setInterval(()=>setRole(v=>(v+1)%roles.length),2600); return ()=>window.clearInterval(t); },[]);
  useEffect(()=>{ document.body.style.overflow=(menu||ability||activeProject!==null)?'hidden':''; return ()=>{document.body.style.overflow='';}; },[menu,ability,activeProject]);

  const scrollTo=(id:string)=>{setMenu(false);document.getElementById(id)?.scrollIntoView({behavior:'smooth'});};
  const selected=doors[door];

  return <main className="portfolio">
    <header className="topbar">
      <button className="menu-trigger" onClick={()=>setMenu(true)} aria-label="Open menu"><Menu size={17}/></button>
      <a className="tiny-brand" href="#home">SSK<span>.</span></a>
      <div className="local-time">Local time&nbsp; <b>{time}</b></div>
      <div className="hanging-bulb"><span/></div>
    </header>

    <section className="hero" id="home">
      <p className="hero-kicker"><i/> Independent Freelancer</p>
      <h1>Hi, I'm Sanjeeva.<br/><span>I am a</span></h1>
      <div className="role-notebook"><div className="spiral">{Array.from({length:14},(_,i)=><i key={i}/>)}</div><strong key={role}>{roles[role]}</strong></div>
      <div className="hero-buttons"><a href="#contact" className="pill-button dark">Start a project <span>↗</span></a><a href="#work" className="pill-button">See my work</a></div>
      <div className="hero-portrait"><img src="/images/portrait-normal.jpg" alt="Sanjeeva Kumar"/></div>
      <button className="ability-tab" onClick={()=>setAbility(true)}>My ability card</button>
      <div className="hero-bottom-note"><span>AVAILABLE FOR WORK</span><button onClick={()=>scrollTo('skills')}>SCROLL TO EXPLORE ↓</button></div>
    </section>

    <section className="doors-section" id="skills">
      {!doorDetail ? <>
        <h2>Magic happens<br/>behind the doors</h2>
        <div className="doors-heading"><div><b>{selected.title}</b><small>{selected.sub}</small></div><div className="door-dots">{doors.map((d,i)=><button key={d.id} className={door===i?'on':''} onClick={()=>setDoor(i)} aria-label={d.title}/>)}</div></div>
        <div className="doors-stage"><button className="door-arrow prev" onClick={()=>setDoor((door+doors.length-1)%doors.length)} aria-label="Previous"><ArrowLeft size={17}/></button><Door door={selected} active onClick={()=>setDoorDetail(true)}/><button className="door-arrow next" onClick={()=>setDoor((door+1)%doors.length)} aria-label="Next"><ArrowRight size={17}/></button></div>
        <p className="door-hint">SELECT A DOOR TO EXPLORE</p>
      </> : <div className="door-detail-page"><div className="detail-nav"><button onClick={()=>setDoorDetail(false)}><ArrowLeft size={15}/> Back to the doors</button><button onClick={()=>setMenu(true)}>☰ Menu</button></div><p className="eyebrow">WHAT I DO / 0{door+1}</p><h2>{selected.title}</h2><p className="detail-description">{selected.desc}</p><div className="detail-tags">{selected.tags.map(t=><span key={t}>{t}</span>)}</div><h3>Selected work</h3><p>{selected.work}</p><button className="pill-button dark" onClick={()=>scrollTo('work')}>View my work <ArrowUpRight size={14}/></button></div>}
    </section>

    <section className="work-section" id="work">
      <p className="eyebrow">SELECTED WORK / 06 PROJECTS</p><h2>Things I've<br/><span>worked on.</span></h2>
      <p className="section-lead">A selection of products, experiments and ideas built around real problems.</p>
      <div className="project-list">{projects.map((p)=><article className="project-card" key={p.n}>
        <button className={`project-visual ${p.visual}`} onClick={()=>setActiveProject(i)} aria-label={`View ${p.name}`}>
          <span className="browser-bar"><i/><i/><i/><small>{p.name.toLowerCase()}.app</small></span>
          <span className="mock-screen"><b>{p.name}</b><small>{p.category}</small><span className="mock-lines"/><span className="mock-action">Explore ↗</span></span>
        </button>
        <div className="project-meta"><span>{p.n} / {p.category}</span><button onClick={()=>setActiveProject(i)}><ArrowUpRight size={17}/></button></div>
        <h3>{p.name}</h3><p>{p.description}</p><div className="project-stack">{p.stack}</div>
        <a className="text-link" href={p.repo} target="_blank" rel="noreferrer">View project <ExternalLink size={13}/></a>
      </article>)}</div>
      <a className="github-link" href="https://github.com/Sanjeevakumarnani" target="_blank" rel="noreferrer"><Github size={16}/> More projects on GitHub <ArrowUpRight size={15}/></a>
    </section>

    <section className="story-section" id="story">
      <p className="eyebrow">MY STORY / THE JOURNEY SO FAR</p><h2>Let's go back in time.<br/><strong>2026</strong></h2><div className="timeline-count">JAN 2021 — NOW <span>01 / 05</span></div>
      <div className="timeline">{milestones.map((m,i)=><article className="timeline-item" key={m.title}><div className="timeline-dot"/><div className="timeline-date">{m.date}</div><h3>{m.title}</h3><p className="timeline-place">{m.place}</p><ul>{m.desc.map(d=><li key={d}>{d}</li>)}</ul></article>)}</div>
    </section>

    <section className="contact-section" id="contact"><p className="eyebrow"><i/> AVAILABLE FOR NEW WORK</p><h2>Got a project?<br/><span>Let's build it<br/>together.</span></h2><p>I'm taking on new freelance work — websites, apps, interfaces and visual content. Tell me what you're building and I'll get back to you within a day.</p><a className="pill-button light" href="mailto:ssksanjeevakumar198@gmail.com?subject=Project%20Enquiry">Start a project <span>↗</span></a><div className="footer-links"><div><b>WORK</b><a href="#work">Web Development</a><a href="#work">App Development</a><a href="#work">UI/UX Design</a></div><div><b>NAVIGATE</b><button onClick={()=>scrollTo('home')}>Home</button><button onClick={()=>scrollTo('story')}>My story</button><button onClick={()=>scrollTo('contact')}>Contact</button></div><div><b>CONNECT</b><a href="https://github.com/Sanjeevakumarnani" target="_blank" rel="noreferrer">GitHub</a><a href="https://www.linkedin.com/in/sanjeevakumarnani/" target="_blank" rel="noreferrer">LinkedIn</a><a href="mailto:ssksanjeevakumar198@gmail.com">Email</a></div></div><div className="copyright">© 2026 SUGURU SANJEEVA KUMAR <span>MADE IN HYDERABAD, INDIA</span></div></section>

    <button className="back-top" onClick={()=>scrollTo('home')} aria-label="Back to top"><ChevronUp size={19}/></button>

    {menu&&<div className="menu-overlay"><div className="menu-head"><span>✦ &nbsp; SSK</span><button onClick={()=>setMenu(false)}><X size={17}/> CLOSE</button></div><nav>{['Home','Web Development','App Development','UI/UX Design','Graphic Design','My story','Contact'].map((v,i)=><button key={v} onClick={()=>scrollTo(i===0?'home':i===5?'story':i===6?'contact': 'skills')}><small>0{i+1}</small>{v}</button>)}</nav><div className="menu-foot">LOCAL TIME — {time}<br/>START A PROJECT — <a href="mailto:ssksanjeevakumar198@gmail.com">EMAIL</a></div></div>}

    {ability&&<div className="ability-overlay"><button className="overlay-close" onClick={()=>setAbility(false)}><X size={15}/> CLOSE</button><p className="card-overline">SSK / PERSONAL ABILITY CARD</p><div className="ability-card"><div className="card-ornament">✦ &nbsp; ✦ &nbsp; ✦</div><div className="card-title">SUGURU<br/>SANJEEVA KUMAR</div><div className="card-subtitle">BUILDER · DEVELOPER · CREATOR</div><div className="card-avatar"><img src="/images/portrait-normal.jpg" alt="Sanjeeva"/></div><div className="card-stats">{[['Web Development','92'],['App Development','85'],['UI/UX Design','88'],['AI & Product','90']].map(([k,v])=><div key={k}><span>{k}</span><b>{v}</b><i><em style={{width:v+'%'}}/></i></div>)}</div><div className="card-footer">HYDERABAD, INDIA <span>SSK · 2026</span></div></div></div>}

    {activeProject!==null&&<div className="project-overlay" onClick={()=>setActiveProject(null)}><button className="overlay-close" onClick={()=>setActiveProject(null)}><X size={15}/> CLOSE</button><article className="project-modal" onClick={e=>e.stopPropagation()}><p className="eyebrow">PROJECT / {projects[activeProject].n}</p><h2>{projects[activeProject].name}</h2><p>{projects[activeProject].description}</p><small>{projects[activeProject].stack}</small><div><a href={projects[activeProject].repo} target="_blank" rel="noreferrer">View source <ArrowUpRight size={14}/></a>{projects[activeProject].live&&<a href={projects[activeProject].live} target="_blank" rel="noreferrer">Live project <ArrowUpRight size={14}/></a>}</div></article></div>}
  </main>;
}
