import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Code2, Cloud, ShieldCheck, Workflow } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const cards = [
  { n: '01', Icon: Code2, title: 'Full-stack systems', text: 'Python, Flask, REST APIs, MySQL, Node.js and modern web interfaces.' },
  { n: '02', Icon: Cloud, title: 'Cloud infrastructure', text: 'AWS EC2/RDS and Firebase Cloud Messaging with production-oriented workflows.' },
  { n: '03', Icon: ShieldCheck, title: 'Security layer', text: 'Phishing detection, Kali Linux and ethical-hacking fundamentals.' },
  { n: '04', Icon: Workflow, title: 'Cross-domain builder', text: 'Mobile, web, cloud and security work connected into complete products.' },
];

export default function About() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.about-item', { opacity: 0, y: 35, rotateX: -8 }, {
        opacity: 1, y: 0, rotateX: 0, duration: .65, stagger: .1, ease: 'power3.out',
        scrollTrigger: { trigger: ref.current, start: 'top 75%' }
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} id="about" className="section section-depth">
      <div className="section-heading">
        <span>01 / PROFILE</span>
        <h2>Built across the stack.</h2>
      </div>
      <div className="about-grid">
        <div className="about-lead">
          <p>
            I am a Computer Science Engineering student at Geethanjali College of
            Engineering and Technology, following a Diploma in Computer Science
            Engineering.
          </p>
          <p>
            My work spans backend and web development, mobile applications, cloud
            infrastructure and cybersecurity. I prefer understanding how the
            complete system works instead of staying inside one technology.
          </p>
          <p>
            Recent work includes BRIG RADIO, a full-stack campus platform with
            live streaming and push notifications, and LinkShield, a phishing
            and malicious-link detection project developed during Hideathon 2025.
          </p>
        </div>
        <div className="about-cards">
          {cards.map(({ n, Icon, title, text }) => (
            <article className="about-item glass-panel" key={n}>
              <div className="card-index">{n}</div>
              <Icon size={22} />
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
