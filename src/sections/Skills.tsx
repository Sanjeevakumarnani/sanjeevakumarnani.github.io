import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Code2, Database, Smartphone, Shield, CloudCog, BrainCircuit } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const groups = [
  { icon: Code2, title: 'Backend & Web', items: ['Python', 'Flask', 'FastAPI', 'React', 'TypeScript', 'JavaScript', 'REST APIs'] },
  { icon: Smartphone, title: 'Mobile', items: ['Kotlin', 'Jetpack Compose', 'Android', 'Firebase Cloud Messaging'] },
  { icon: CloudCog, title: 'Cloud & Tooling', items: ['AWS EC2', 'AWS RDS', 'Firebase', 'Git', 'GitHub', 'Docker', 'Render'] },
  { icon: Shield, title: 'Security & Web3', items: ['Phishing detection', 'Wallet signatures', 'EIP-712', 'Proof verification', 'Security-first design'] },
  { icon: Database, title: 'Data', items: ['MySQL', 'PostgreSQL', 'SQLite', 'Prisma', 'SQLAlchemy', 'Data modelling'] },
  { icon: BrainCircuit, title: 'AI & Product Systems', items: ['AI API integration', 'Hindsight memory workflows', 'Explainable scoring', 'System architecture'] },
];

export default function Skills() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;
    const context = gsap.context(() => {
      gsap.fromTo('.skill-orb-card', { opacity: 0, y: 28 }, {
        opacity: 1, y: 0, duration: 0.55, stagger: 0.07, ease: 'power3.out',
        scrollTrigger: { trigger: ref.current, start: 'top 78%' },
      });
    }, ref);
    return () => context.revert();
  }, []);

  return (
    <section ref={ref} id="skills" className="section section-depth">
      <div className="section-heading">
        <span>03 / CAPABILITIES</span>
        <h2>The tools behind the work.</h2>
      </div>
      <div className="skills-matrix">
        {groups.map(({ icon: Icon, title, items }) => (
          <article className="skill-orb-card glass-panel" key={title}>
            <div className="skill-icon"><Icon size={22} aria-hidden="true" /></div>
            <h3>{title}</h3>
            <div className="skill-tags">{items.map((item) => <span key={item}>{item}</span>)}</div>
          </article>
        ))}
      </div>
    </section>
  );
}
