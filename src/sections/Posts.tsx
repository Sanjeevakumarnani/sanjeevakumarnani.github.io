import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ArrowUpRight, Award, Bot, Cloud, Code2, Cpu, ExternalLink, ShieldCheck, Trophy } from 'lucide-react';

type Post = {
  age: string;
  title: string;
  type: string;
  icon: typeof Code2;
  summary: string;
  details: string[];
  tags: string[];
  link?: string;
};

const posts: Post[] = [
  {
    age: '2 DAYS AGO',
    title: 'CrisisOps — Disaster Response Memory Engine',
    type: 'PROJECT / BUILD',
    icon: Code2,
    summary: 'A persistent operational-memory system for emergency-response teams, designed to turn experience from previous incidents into reusable response knowledge.',
    details: [
      'Capture → Retain → Recall → Reflect → Human Decision → Outcome → Future Memory',
      'Combines operator field reports, public hazard intelligence and persistent memory',
      'Example scenario: recalling a failed North Ward flood delivery route during a similar incident'
    ],
    tags: ['CrisisOps', 'Disaster Response', 'AI', 'Operational Memory']
  },
  {
    age: '1 WEEK AGO',
    title: 'AWS Future Builders Connect — Hyderabad',
    type: 'EVENT / CLOUD',
    icon: Cloud,
    summary: 'Attended AWS Builder Center: Future Builders Connect at HITEX Exhibition Centre on 17 September 2026.',
    details: [
      'Explored AWS and AI workshops, builder challenges, live trivia and interactive activities',
      'Completed the AWS Builder Passport and learned about AWS Student Rewards',
      'Connected with student builders and gained practical exposure beyond the classroom'
    ],
    tags: ['AWS', 'AI', 'Cloud Computing', 'Student Builders', 'Hyderabad']
  },
  {
    age: '2 MONTHS AGO',
    title: 'Hack With Hyderabad',
    type: 'HACKATHON',
    icon: Trophy,
    summary: 'Participated in Hack With Hyderabad, organized by HackwithIndia, and received a Certificate of Participation.',
    details: [
      'Focused on problem solving, collaboration and building under time constraints',
      'Used the experience to strengthen software-development and teamwork skills'
    ],
    tags: ['HackWithIndia', 'Hackathon', 'Problem Solving', 'Software Development']
  },
  {
    age: '2 MONTHS AGO',
    title: 'The Quackathon',
    type: 'HACKATHON / ACHIEVEMENT',
    icon: Award,
    summary: 'Received a Certificate of Participation after the team secured a place among the Top 1,000 teams out of 3,000 participating teams.',
    details: [
      'Worked through creative problem solving and collaboration under time constraints',
      'Highlighted the experience as part of continued growth in software development'
    ],
    tags: ['Quackathon', 'HackWithIndia', 'Top 1000', 'Innovation']
  },
  {
    age: '2 MONTHS AGO',
    title: 'AMD Slingshot Campus Days Ideathon 2026',
    type: 'IDEATHON / AI',
    icon: Cpu,
    summary: 'Participated in the Hyderabad edition and explored modern AI-assisted development practices.',
    details: [
      'Agentic AI workflows',
      'Vibe coding and modern development practices',
      'Collaborative engineering, innovation and real-world problem solving'
    ],
    tags: ['AMD', 'Agentic AI', 'Ideathon 2026', 'Software Development']
  },
  {
    age: '3 MONTHS AGO',
    title: 'SocioSports Industrial Training',
    type: 'INDUSTRIAL TRAINING',
    icon: Code2,
    summary: 'Completed the first industrial training experience at SocioSports, contributing to the official SocioSports website.',
    details: [
      'Gained real industry-level exposure to web development and teamwork',
      'Worked through technical challenges, debugging, creativity and professional workflows',
      'Acknowledged mentors, academic leadership and teammates who supported the training'
    ],
    tags: ['SocioSports', 'Web Development', 'Teamwork', 'Career Growth']
  },
  {
    age: '4 MONTHS AGO',
    title: 'AI Assistant for Election Process Education',
    type: 'AI / EDUCATION',
    icon: Bot,
    summary: 'Built an AI-powered assistant concept focused on explaining how election processes work in an accessible way.',
    details: [
      'Step-by-step election process guidance',
      'Important timelines and phases',
      'Roles, rules and procedures',
      'Interactive guidance aimed at first-time voters and students'
    ],
    tags: ['BuildWithAI', 'Prompt Wars', 'AI', 'Civic Education']
  },
  {
    age: '5 MONTHS AGO',
    title: 'Personal Portfolio Website',
    type: 'LAUNCH',
    icon: ExternalLink,
    summary: 'Launched the personal portfolio to bring together projects, skills and practical development work.',
    details: [
      'Positioned around cybersecurity and full-stack development',
      'Built to showcase practical problem solving and technical projects',
      'Published with an open-to-opportunities focus'
    ],
    tags: ['Portfolio', 'Web Development', 'Cybersecurity', 'Full Stack']
  },
  {
    age: '6 MONTHS AGO',
    title: 'BRIG RADIO',
    type: 'PROJECT / REPOST',
    icon: Code2,
    summary: 'Reposted the team announcement for BRIG RADIO, a full-stack campus engagement platform built and deployed by the team.',
    details: [
      'Live radio streaming and real-time notifications/subscriptions',
      'College updates, placements and internship board',
      'Help desk, student interaction and radio suggestions',
      'Kotlin / Jetpack Compose, Flask / Python, AWS EC2 + RDS, Firebase FCM and MySQL'
    ],
    tags: ['BRIG RADIO', 'Kotlin', 'Flask', 'AWS', 'MySQL']
  },
  {
    age: '6 MONTHS AGO',
    title: 'LinkShield — Real-Time Fraud & Scam Link Detector',
    type: 'CYBERSECURITY / REPOST',
    icon: ShieldCheck,
    summary: 'Reposted the AntiPhishers Crew announcement for LinkShield, a cross-platform phishing and malicious-link protection project.',
    details: [
      'Designed to help users identify phishing and malicious links',
      'Targets SMS, WhatsApp, browser and desktop use cases',
      'Team announcement recorded a Top 25 position in Phase 5 of HIDEATHON 2025'
    ],
    tags: ['LinkShield', 'Cybersecurity', 'Phishing', 'HIDEATHON 2025']
  },
  {
    age: '7 MONTHS AGO',
    title: 'HIDEATHON Featured by the College',
    type: 'RECOGNITION',
    icon: Award,
    summary: 'Shared the college website feature covering the HIDEATHON event participation.',
    details: [
      'Highlighted learning, teamwork and exposure from the event',
      'Featured alongside teammates Yuvraj B and Rohith Kumar'
    ],
    tags: ['HIDEATHON', 'College Recognition', 'Teamwork']
  }
];

export default function Posts() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.post-card', { opacity: 0, y: 30 }, {
        opacity: 1,
        y: 0,
        duration: .55,
        stagger: .07,
        ease: 'power3.out',
        scrollTrigger: { trigger: ref.current, start: 'top 78%' }
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} id="posts" className="section section-depth">
      <div className="section-heading">
        <span>05 / LINKEDIN ACTIVITY</span>
        <h2>What I’ve been building, learning & sharing.</h2>
      </div>

      <div className="posts-intro glass-panel">
        <div>
          <strong>LinkedIn activity, translated into project context.</strong>
          <p>
            Selected public activity from my LinkedIn profile is organized here as concise project,
            event, learning and achievement records instead of simply embedding a social feed.
          </p>
        </div>
        <a href="https://www.linkedin.com/in/ssksanjeevakumar" target="_blank" rel="noreferrer">
          Open LinkedIn <ArrowUpRight size={17} />
        </a>
      </div>

      <div className="posts-grid">
        {posts.map(({ age, title, type, icon: Icon, summary, details, tags, link }, index) => (
          <article className={`post-card glass-panel ${index === 0 ? 'post-featured' : ''}`} key={title}>
            <div className="post-top">
              <span className="card-index">{String(index + 1).padStart(2, '0')}</span>
              <span>{age}</span>
            </div>
            <div className="post-icon"><Icon size={20} /></div>
            <span className="post-type">{type}</span>
            <h3>{title}</h3>
            <p className="post-summary">{summary}</p>
            <ul>
              {details.map((detail) => <li key={detail}>{detail}</li>)}
            </ul>
            <div className="post-tags">
              {tags.map((tag) => <span key={tag}>{tag}</span>)}
            </div>
            {link && (
              <a href={link} target="_blank" rel="noreferrer" className="post-link">
                View source <ArrowUpRight size={15} />
              </a>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
