import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { BriefcaseBusiness, GraduationCap, Award } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const timeline = [
  { date: 'DEC 2025 — JUN 2026', icon: BriefcaseBusiness, title: 'Web Development Intern / Full Stack Engineer', org: 'SocioSports (ViranAI Solutions Pvt. Ltd.)', place: 'Hyderabad', text: 'Contributed to the SocioSports website, built responsive web pages, worked with Flask, REST APIs and MySQL, and participated in debugging, version control and production workflows.' },
  { date: 'JAN 2022 — JUL 2023', icon: BriefcaseBusiness, title: 'Executive — EDP', org: 'Varun Motors Pvt Ltd', place: 'Hyderabad', text: 'Supported dealership operations, documentation and reporting, coordinated across teams, and built practical foundations in computer operations and office automation.' },
  { date: 'JUN 2026 — JUN 2029', icon: GraduationCap, title: 'Bachelor of Technology — Computer Science', org: 'Geethanjali College of Engineering and Technology', place: 'Hyderabad', text: 'Current B.Tech lateral-entry pathway after completing the Diploma in Computer Science and Engineering.' },
  { date: 'JUL 2023 — MAY 2026', icon: GraduationCap, title: 'Diploma — Computer Science & Engineering', org: "Brilliant Grammar School Educational Society's Group of Institutions", place: 'Hyderabad', text: 'Diploma-level computer science engineering education with applied development and technical project work.' },
  { date: 'DEC 2020 — JUL 2021', icon: GraduationCap, title: 'ITI — COPA', org: 'Industrial Training Institute, Kalwakurthy', place: 'Kalwakurthy', text: 'Computer Operator and Programming Assistant training.' },
  { date: 'JUL 2019 — JUL 2020', icon: GraduationCap, title: 'Secondary School Certificate', org: "ZPHS Boy's High School Kalwakurthy", place: 'Kalwakurthy', text: 'Secondary School Certificate, General Studies.' },
];

export default function Experience() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;
    const context = gsap.context(() => {
      gsap.fromTo('.timeline-row', { opacity: 0, x: -22 }, {
        opacity: 1, x: 0, duration: 0.5, stagger: 0.08, ease: 'power3.out',
        scrollTrigger: { trigger: ref.current, start: 'top 78%' },
      });
    }, ref);
    return () => context.revert();
  }, []);

  return (
    <section ref={ref} id="experience" className="section section-depth">
      <div className="section-heading">
        <span>04 / JOURNEY</span>
        <h2>Experience &amp; education.</h2>
      </div>
      <div className="timeline">
        {timeline.map(({ date, icon: Icon, title, org, place, text }) => (
          <article className="timeline-row" key={date + org}>
            <div className="timeline-node"><Icon size={15} aria-hidden="true" /></div>
            <div className="timeline-card glass-panel">
              <div className="timeline-date">{date}</div>
              <h3>{title}</h3>
              <h4>{org}</h4>
              <span className="timeline-place">{place}</span>
              <p>{text}</p>
            </div>
          </article>
        ))}
      </div>
      <div className="achievement-strip glass-panel">
        <Award size={21} aria-hidden="true" />
        <div><strong>LinkShield — HIDEATHON 2025</strong><span>Recognized among the Top 10 from 4,000+ ideas, as recorded in the existing portfolio profile.</span></div>
      </div>
    </section>
  );
}
