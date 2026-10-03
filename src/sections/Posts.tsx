import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ArrowUpRight, Award, Bot, Cloud, Code2, ExternalLink, ShieldCheck, Trophy } from 'lucide-react';

type Post = {
  age: string;
  title: string;
  type: string;
  icon: typeof Code2;
  caption: string;
  stat?: string;
  tags: string[];
};

const posts: Post[] = [
  { age: '2 MO AGO', title: 'Hack With Hyderabad', type: 'HACKATHON', icon: Trophy, caption: 'Participated in Hack With Hyderabad and earned a Certificate of Participation.', tags: ['HackWithIndia', 'Hackathon'] },
  { age: '2 MO AGO', title: 'The Quackathon', type: 'ACHIEVEMENT', icon: Award, caption: 'Team secured a place among the Top 1,000 teams out of 3,000 participating teams.', stat: 'TOP 1,000 / 3,000', tags: ['Quackathon', 'Innovation'] },
  { age: '2 MO AGO', title: 'AMD Slingshot Campus Days', type: 'IDEATHON / AI', icon: Code2, caption: 'Hyderabad experience covering Agentic AI, vibe coding, collaborative engineering and real-world problem solving.', tags: ['AMD', 'Agentic AI', 'Ideathon 2026'] },
  { age: '3 MO AGO', title: 'SocioSports Industrial Training', type: 'INDUSTRIAL TRAINING', icon: Code2, caption: 'Completed first industrial training while contributing to the official SocioSports website and learning real-world web development.', tags: ['SocioSports', 'Web Development'] },
  { age: '4 MO AGO', title: 'Election Process AI Assistant', type: 'AI / BUILD', icon: Bot, caption: 'Built an AI-powered concept to explain election processes, timelines, roles and procedures interactively.', tags: ['BuildWithAI', 'AI', 'Education'] },
  { age: '5 MO AGO', title: 'Portfolio Website Launch', type: 'LAUNCH', icon: ExternalLink, caption: 'Launched a portfolio focused on cybersecurity, full-stack development, projects and practical problem solving.', tags: ['Portfolio', 'Cybersecurity', 'Full Stack'] },
  { age: '6 MO AGO', title: 'BRIG RADIO', type: 'FULL-STACK PROJECT', icon: Cloud, caption: 'Reposted the team build: live campus radio, notifications, college updates, placements and student services.', stat: 'KOTLIN · FLASK · AWS · MYSQL', tags: ['BRIG RADIO', 'AWS', 'Android'] },
  { age: '6 MO AGO', title: 'LinkShield', type: 'CYBERSECURITY', icon: ShieldCheck, caption: 'Reposted the AntiPhishers Crew project for phishing and malicious-link protection across SMS, WhatsApp, browsers and desktop.', stat: 'TOP 25 · HIDEATHON 2025', tags: ['LinkShield', 'Phishing', 'Cybersecurity'] },
  { age: '7 MO AGO', title: 'HIDEATHON College Recognition', type: 'RECOGNITION', icon: Award, caption: 'Shared the college website feature covering the HIDEATHON participation and team journey.', tags: ['HIDEATHON', 'Teamwork'] }
];

export default function Posts() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.post-card', { opacity: 0, y: 24 }, {
        opacity: 1, y: 0, duration: .5, stagger: .06, ease: 'power3.out',
        scrollTrigger: { trigger: ref.current, start: 'top 80%' }
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} id="posts" className="section section-depth">
      <div className="section-heading">
        <span>05 / LINKEDIN</span>
        <h2>Selected posts & milestones.</h2>
      </div>

      <div className="posts-intro glass-panel">
        <div>
          <strong>My build log, events and milestones.</strong>
          <p>Compact highlights from the public activity on my LinkedIn profile.</p>
        </div>
        <a href="https://www.linkedin.com/in/ssksanjeevakumar" target="_blank" rel="noreferrer">
          LinkedIn profile <ArrowUpRight size={16} />
        </a>
      </div>

      <div className="posts-grid">
        {posts.map(({ age, title, type, icon: Icon, caption, stat, tags }, index) => (
          <article className={`post-card glass-panel ${index === 0 ? 'post-featured' : ''}`} key={title}>
            <div className="post-media">
              <div className="post-media-grid" />
              <span className="post-media-label">LINKEDIN / {String(index + 1).padStart(2, '0')}</span>
              <Icon size={30} />
            </div>
            <div className="post-meta">
              <span>{type}</span>
              <span>{age}</span>
            </div>
            <h3>{title}</h3>
            <p className="post-summary">{caption}</p>
            {stat && <div className="post-stat">{stat}</div>}
            <div className="post-tags">{tags.map(tag => <span key={tag}>{tag}</span>)}</div>
          </article>
        ))}
      </div>
    </section>
  );
}
