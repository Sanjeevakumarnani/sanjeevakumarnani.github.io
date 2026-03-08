import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExternalLink, Award } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const experiences = [
  {
    id: 'varun',
    company: 'Varun Motors Pvt Ltd',
    title: 'Executive EDP',
    period: 'Jan 2022 - July 2023',
    duration: '1 year 7 months',
    location: 'Hyderabad, Telangana',
    description: [
      'Handled communication and documentation for the executive team',
      'Managed computer operations and reporting systems',
      'Coordinated with cross-functional teams for smooth operations',
      'Developed strong organizational and technical skills'
    ],
    skills: ['Communication', 'Documentation', 'Computer Operations', 'Team Coordination']
  },
  {
    id: 'diploma',
    company: 'Brilliant Grammar School',
    title: 'Diploma in Computer Science & Engineering',
    period: 'July 2023 - May 2026',
    duration: 'Ongoing',
    location: 'Hyderabad, Telangana',
    description: [
      'Currently pursuing diploma in CSE with focus on cybersecurity',
      'Learning programming fundamentals and software development',
      'Working on practical projects and security-focused applications',
      'Maintaining strong academic performance'
    ],
    skills: ['Programming', 'Cybersecurity', 'Web Development', 'Database Management']
  },
  {
    id: 'iti',
    company: 'Industrial Training Institute',
    title: 'ITI - Computer Operator & Programming Assistant (COPA)',
    period: 'Dec 2020 - July 2021',
    duration: '8 months',
    location: 'Kalwakurthy',
    description: [
      'Learned computer operations and programming fundamentals',
      'Gained expertise in office automation tools',
      'Developed practical skills in software applications',
      'Completed certification with excellent grades'
    ],
    skills: ['Computer Operations', 'Programming Basics', 'Office Automation']
  }
];

const achievements = [
  {
    title: 'Hideathon 2025 Finalist',
    description: 'LinkShield Project - Top 10 out of 4000+ ideas',
    event: 'IDEATHON - Cybersecurity Tool for Detecting Phishing Attacks'
  }
];

export default function Experience() {
  const [activeTab, setActiveTab] = useState('varun');
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const achievementsRef = useRef<HTMLDivElement>(null);

  const activeExperience = experiences.find(exp => exp.id === activeTab);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo(titleRef.current,
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: titleRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      // Content animation
      gsap.fromTo(contentRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: contentRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      // Achievements animation
      gsap.fromTo(achievementsRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: achievementsRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Animate content change
  useEffect(() => {
    const content = contentRef.current?.querySelector('.tab-content');
    if (content) {
      gsap.fromTo(content,
        { opacity: 0, x: 10 },
        { opacity: 1, x: 0, duration: 0.3, ease: 'power2.out' }
      );
    }
  }, [activeTab]);

  return (
    <section ref={sectionRef} id="experience" className="section">
      {/* Section Title */}
      <div ref={titleRef} className="section-title opacity-0">
        <span className="section-number">04.</span>
        Where I've Worked
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Tabs */}
        <div className="lg:col-span-1">
          <div className="flex lg:flex-col overflow-x-auto lg:overflow-visible gap-1 pb-2 lg:pb-0">
            {experiences.map((exp) => (
              <button
                key={exp.id}
                onClick={() => setActiveTab(exp.id)}
                className={`tab-btn whitespace-nowrap ${activeTab === exp.id ? 'active' : ''}`}
              >
                {exp.company}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div ref={contentRef} className="lg:col-span-2 opacity-0">
          {activeExperience && (
            <div className="tab-content">
              <h3 className="text-2xl font-semibold text-[#e6f1ff] mb-1">
                {activeExperience.title}
                <span className="text-accent"> @ </span>
                <a 
                  href="#" 
                  className="text-accent hover:underline inline-flex items-center gap-1"
                >
                  {activeExperience.company}
                  <ExternalLink className="w-4 h-4" />
                </a>
              </h3>
              
              <p className="font-mono text-sm text-[#8892b0] mb-4">
                {activeExperience.period} · {activeExperience.duration}
              </p>

              <ul className="space-y-3 mb-6">
                {activeExperience.description.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-[#8892b0]">
                    <span className="text-accent mt-1.5">▹</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {activeExperience.skills.map((skill, idx) => (
                  <span key={idx} className="tag">{skill}</span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Achievements */}
      <div ref={achievementsRef} className="mt-16 opacity-0">
        <h3 className="text-[#e6f1ff] font-medium mb-6 flex items-center gap-2">
          <Award className="w-5 h-5 text-accent" />
          Achievements
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {achievements.map((achievement, index) => (
            <div 
              key={index}
              className="card border-l-4 border-l-accent"
            >
              <div className="text-xs font-mono text-accent mb-2">{achievement.event}</div>
              <h4 className="text-lg font-semibold text-[#e6f1ff] mb-1">{achievement.title}</h4>
              <p className="text-sm text-[#8892b0]">{achievement.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
