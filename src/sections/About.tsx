import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Code2, Cloud, ShieldCheck, Workflow, type LucideIcon } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

type AboutCard = { n: string; Icon: LucideIcon; title: string; text: string };

const cards: AboutCard[] = [
  { n: '01', Icon: Code2, title: 'Full-stack systems', text: 'Python, Flask, FastAPI, REST APIs, modern web interfaces and relational data.' },
  { n: '02', Icon: Cloud, title: 'Cloud infrastructure', text: 'AWS EC2/RDS and deployment-oriented workflows for connected applications.' },
  { n: '03', Icon: ShieldCheck, title: 'Security-focused tools', text: 'Phishing protection concepts, wallet-proof verification and security-first thinking.' },
  { n: '04', Icon: Workflow, title: 'End-to-end products', text: 'Web, mobile, APIs, data and operational workflows designed as connected systems.' },
];

export default function About() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;
    const context = gsap.context(() => {
      gsap.fromTo('.about-item', { opacity: 0, y: 28 }, {
        opacity: 1, y: 0, duration: 0.55, stagger: 0.08, ease: 'power3.out',
        scrollTrigger: { trigger: ref.current, start: 'top 78%' },
      });
    }, ref);
    return () => context.revert();
  }, []);

  return (
    <section ref={ref} id="about" className="section section-depth">
      <div className="section-heading">
        <span>01 / ABOUT</span>
        <h2>Curiosity, made practical.</h2>
      </div>
      <div className="about-grid">
        <div className="about-lead">
          <p>
            I am a Computer Science Engineering student at Geethanjali College of Engineering and Technology, continuing after a Diploma in Computer Science Engineering.
          </p>
          <p>
            I work across backend and web development, mobile applications, AI-enabled workflows, cloud infrastructure and cybersecurity. I like understanding how the whole system works—not only the screen that people see.
          </p>
          <p>
            Recent work includes OmniRep, a portable on-chain reputation passport; CrisisOps, a disaster-response memory engine; and EngramOps, which brings engineering lessons back into future decisions.
          </p>
        </div>
        <div className="about-cards">
          {cards.map(({ n, Icon, title, text }) => (
            <article className="about-item glass-panel" key={n}>
              <div className="card-index">{n}</div>
              <Icon size={22} aria-hidden="true" />
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
