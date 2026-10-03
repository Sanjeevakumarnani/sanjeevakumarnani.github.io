import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ArrowUpRight, Award, Bot, Cloud, Code2, Cpu, ShieldCheck, Trophy } from 'lucide-react';

type Post = {
  date: string;
  title: string;
  eyebrow: string;
  icon: typeof Code2;
  description: string;
  highlight?: string;
  tags: string[];
};

const posts: Post[] = [
  { date:'2 MO AGO', title:'Hack With Hyderabad', eyebrow:'HACKATHON', icon:Trophy, description:'Certificate of Participation from HackwithIndia, focused on problem-solving, collaboration and building under deadlines.', highlight:'Certificate earned', tags:['HackWithIndia','Hackathon'] },
  { date:'2 MO AGO', title:'The Quackathon', eyebrow:'ACHIEVEMENT', icon:Award, description:'Participated in The Quackathon and worked with the team through a competitive innovation challenge.', highlight:'Top 1,000 / 3,000 teams', tags:['Quackathon','Innovation'] },
  { date:'2 MO AGO', title:'AMD Slingshot Campus Days', eyebrow:'AI / IDEATHON', icon:Cpu, description:'Hyderabad experience covering agentic AI workflows, vibe coding, collaborative engineering and rapid problem-solving.', highlight:'AMD Slingshot 2026', tags:['AMD','Agentic AI','Ideathon'] },
  { date:'3 MO AGO', title:'SocioSports Industrial Training', eyebrow:'INDUSTRY', icon:Code2, description:'Completed first industrial training and contributed to the official SocioSports website with real-world development and teamwork.', highlight:'First industry experience', tags:['SocioSports','Web Development'] },
  { date:'4 MO AGO', title:'Election Process AI Assistant', eyebrow:'AI / BUILD', icon:Bot, description:'Built an AI-powered concept to make election processes, timelines, roles and procedures easier to understand.', highlight:'BuildWithAI / Prompt Wars', tags:['AI','Education','BuildWithAI'] },
  { date:'5 MO AGO', title:'Personal Portfolio Launch', eyebrow:'LAUNCH', icon:Code2, description:'Launched the portfolio around cybersecurity, full-stack development, projects and practical problem solving.', highlight:'Portfolio v1', tags:['Portfolio','Cybersecurity'] },
  { date:'6 MO AGO', title:'BRIG RADIO', eyebrow:'PROJECT / REPOST', icon:Cloud, description:'Reposted the team launch of the full-stack campus engagement platform built with Kotlin, Flask, AWS, Firebase and MySQL.', highlight:'Full-stack campus platform', tags:['Kotlin','Flask','AWS','MySQL'] },
  { date:'6 MO AGO', title:'LinkShield', eyebrow:'CYBERSECURITY / REPOST', icon:ShieldCheck, description:'Reposted the AntiPhishers Crew announcement for a cross-platform phishing and malicious-link protection project.', highlight:'Top 25 — HIDEATHON Phase 5', tags:['Cybersecurity','Phishing','LinkShield'] },
  { date:'7 MO AGO', title:'HIDEATHON College Feature', eyebrow:'RECOGNITION', icon:Award, description:'Shared the college website feature covering the HIDEATHON participation, learning and teamwork.', highlight:'College recognition', tags:['HIDEATHON','Teamwork'] }
];

export default function Posts() {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.post-card', { opacity:0, y:24 }, { opacity:1, y:0, duration:.5, stagger:.055, ease:'power3.out', scrollTrigger:{trigger:ref.current,start:'top 80%'} });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} id="posts" className="section section-depth">
      <div className="section-heading">
        <span>05 / LINKEDIN</span>
        <h2>Builds. Events. Milestones.</h2>
      </div>

      <div className="linkedin-head glass-panel">
        <div>
          <span className="linkedin-live"><i /> LINKEDIN ACTIVITY</span>
          <strong>Selected posts from my public activity.</strong>
        </div>
        <a href="https://www.linkedin.com/in/ssksanjeevakumar" target="_blank" rel="noreferrer">Open profile <ArrowUpRight size={16}/></a>
      </div>

      <div className="posts-grid">
        {posts.map(({date,title,eyebrow,icon:Icon,description,highlight,tags},index) => (
          <article className={`post-card glass-panel ${index===0 ? 'post-featured' : ''}`} key={title}>
            <div className="post-top"><span>{String(index+1).padStart(2,'0')}</span><span>{date}</span></div>
            <div className="post-visual">
              <div className="post-visual-ring" />
              <Icon size={27}/>
              <span>LINKEDIN</span>
            </div>
            <span className="post-type">{eyebrow}</span>
            <h3>{title}</h3>
            {highlight && <div className="post-highlight">{highlight}</div>}
            <p>{description}</p>
            <div className="post-tags">{tags.map(tag=><span key={tag}>{tag}</span>)}</div>
          </article>
        ))}
      </div>
    </section>
  );
}
