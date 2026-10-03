import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Code2, Database, Smartphone, Shield, CloudCog, BrainCircuit } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const groups = [
  { icon: Code2, title: 'Backend & Web', items: ['Python', 'Flask', 'REST API Design', 'Node.js', 'Express.js', 'HTML / CSS / JavaScript'] },
  { icon: Smartphone, title: 'Mobile', items: ['Kotlin', 'Jetpack Compose', 'Android', 'Firebase Cloud Messaging'] },
  { icon: CloudCog, title: 'Cloud & Infrastructure', items: ['AWS EC2', 'AWS RDS', 'Firebase', 'GitHub', 'Production workflows'] },
  { icon: Shield, title: 'Cybersecurity', items: ['Phishing Detection', 'Kali Linux', 'Ethical Hacking Fundamentals', 'Security-first development'] },
  { icon: Database, title: 'Data', items: ['MySQL', 'Application data modelling', 'Reporting', 'Technical documentation'] },
  { icon: BrainCircuit, title: 'Expanding', items: ['Django', 'Core Machine Learning', 'Python + DSA', 'AI-assisted development'] },
];

export default function Skills() {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.skill-orb-card', { opacity: 0, y: 40, rotateY: -10 }, {
        opacity: 1, y: 0, rotateY: 0, duration: .65, stagger: .08, ease: 'power3.out',
        scrollTrigger: { trigger: ref.current, start: 'top 75%' }
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} id="skills" className="section section-depth">
      <div className="section-heading">
        <span>02 / CAPABILITIES</span>
        <h2>The current stack.</h2>
      </div>
      <div className="skills-matrix">
        {groups.map(({ icon: Icon, title, items }) => (
          <article className="skill-orb-card glass-panel" key={title}>
            <div className="skill-icon"><Icon size={23} /></div>
            <h3>{title}</h3>
            <div className="skill-tags">{items.map(x => <span key={x}>{x}</span>)}</div>
          </article>
        ))}
      </div>
    </section>
  );
}
