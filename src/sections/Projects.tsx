import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight, Github, ShieldCheck, Radio, Bot, Gamepad2 } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  { title: 'BRIG RADIO', type: 'FULL-STACK CAMPUS PLATFORM', icon: Radio, description: 'A campus platform combining live streaming and push notifications, developed around a full-stack application workflow.', tags: ['Flask', 'MySQL', 'SQLAlchemy', 'Kotlin', 'Jetpack Compose'] },
  { title: 'LinkShield', type: 'CYBERSECURITY / HIDEATHON 2025', icon: ShieldCheck, description: 'A phishing and malicious-link detection project focused on identifying risky messages and URLs. Recognized among the Top 10 from 4000+ ideas.', tags: ['React Native', 'Capacitor', 'Supabase', 'FastAPI'] },
  { title: 'SSKtheAI', type: 'AI CHATBOT PLATFORM', icon: Bot, description: 'AI chatbot work using separated frontend/backend architecture and API-driven workflows, focused on clean interfaces and understandable backend logic.', tags: ['React', 'OpenAI API', 'Node.js', 'Express'] },
  { title: 'Squid Game: SSK', type: 'INTERACTIVE WEB GAME', icon: Gamepad2, description: 'A 2D web-game MVP with authentication, player dashboard and bot-based gameplay, designed as a foundation for richer multiplayer systems.', tags: ['JavaScript', 'Canvas', 'CSS', 'WebSocket'] },
];

export default function Projects() {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.project-3d-card', { opacity: 0, y: 55, rotateX: 8 }, {
        opacity: 1, y: 0, rotateX: 0, duration: .7, stagger: .12, ease: 'power3.out',
        scrollTrigger: { trigger: ref.current, start: 'top 72%' }
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} id="projects" className="section section-depth">
      <div className="section-heading">
        <span>03 / SELECTED WORK</span>
        <h2>Systems I have built.</h2>
      </div>
      <div className="projects-grid">
        {projects.map(({ title, type, icon: Icon, description, tags }, i) => (
          <article className={`project-3d-card glass-panel ${i === 0 ? 'featured-project' : ''}`} key={title}>
            <div className="project-top">
              <div className="project-icon"><Icon size={22} /></div>
              <span>0{i + 1}</span>
            </div>
            <div className="project-type">{type}</div>
            <h3>{title}</h3>
            <p>{description}</p>
            <div className="skill-tags">{tags.map(t => <span key={t}>{t}</span>)}</div>
          </article>
        ))}
      </div>
      <div className="center-action">
        <a href="https://github.com/ssksanjeevakumar" target="_blank" rel="noreferrer" className="neo-button">
          GitHub archive <Github size={16} /> <ArrowUpRight size={16} />
        </a>
      </div>
    </section>
  );
}
