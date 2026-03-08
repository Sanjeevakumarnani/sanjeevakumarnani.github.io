import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Shield, Code, Brain, Cloud, Terminal, Database, Globe, Cpu } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const skillCategories = [
  {
    icon: Shield,
    title: 'Cybersecurity',
    skills: ['Phishing Detection', 'Kali Linux', 'Ethical Hacking', 'OSI Model', 'Vulnerability Assessment'],
    level: 85
  },
  {
    icon: Code,
    title: 'Web Development',
    skills: ['React', 'Flask', 'HTML5/CSS3', 'REST APIs', 'JavaScript'],
    level: 90
  },
  {
    icon: Brain,
    title: 'AI & Automation',
    skills: ['OpenAI API', 'AI Chatbots', 'Image Enhancement', 'Prompt Engineering'],
    level: 75
  },
  {
    icon: Cloud,
    title: 'Cloud & DevOps',
    skills: ['Git/GitHub', 'Docker', 'Cloudflare', 'GitHub Pages'],
    level: 70
  }
];

const additionalSkills = [
  { icon: Terminal, name: 'Python', category: 'Languages' },
  { icon: Cpu, name: 'C', category: 'Languages' },
  { icon: Code, name: 'JavaScript', category: 'Languages' },
  { icon: Database, name: 'MySQL', category: 'Database' },
  { icon: Globe, name: 'React', category: 'Frontend' },
  { icon: Terminal, name: 'Flask', category: 'Backend' },
];

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const additionalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo(titleRef.current,
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: titleRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      // Cards stagger with 3D flip effect
      const cards = cardsRef.current?.querySelectorAll('.skill-card');
      if (cards) {
        cards.forEach((card, index) => {
          gsap.fromTo(card,
            { opacity: 0, y: 50, rotateX: -15 },
            {
              opacity: 1,
              y: 0,
              rotateX: 0,
              duration: 0.7,
              delay: index * 0.1,
              ease: 'back.out(1.2)',
              scrollTrigger: {
                trigger: cardsRef.current,
                start: 'top 80%',
                toggleActions: 'play none none reverse'
              }
            }
          );
        });
      }

      // Animate skill bars with counting effect
      const skillBars = cardsRef.current?.querySelectorAll('.skill-progress');
      if (skillBars) {
        skillBars.forEach((bar) => {
          const width = bar.getAttribute('data-width');
          gsap.fromTo(bar,
            { width: '0%' },
            {
              width: `${width}%`,
              duration: 1.2,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: bar,
                start: 'top 85%',
                toggleActions: 'play none none reverse'
              }
            }
          );
        });
      }

      // Additional skills with bounce
      const addSkills = additionalRef.current?.querySelectorAll('.add-skill');
      if (addSkills) {
        gsap.fromTo(addSkills,
          { opacity: 0, scale: 0.5, y: 20 },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.4,
            stagger: 0.05,
            ease: 'back.out(2)',
            scrollTrigger: {
              trigger: additionalRef.current,
              start: 'top 90%',
              toggleActions: 'play none none reverse'
            }
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="skills" className="section">
      <div ref={titleRef} className="section-title opacity-0">
        <span className="section-number">02.</span>
        Skills
      </div>

      <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12" style={{ perspective: '1000px' }}>
        {skillCategories.map((category, index) => (
          <div 
            key={index}
            className="skill-card rounded-lg p-6 opacity-0 group hover:-translate-y-2 transition-all duration-300"
            style={{ 
              backgroundColor: '#112240',
              boxShadow: '0 10px 30px -15px rgba(2, 12, 27, 0.7)',
              transformStyle: 'preserve-3d'
            }}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 rounded-lg bg-accent/10 text-accent group-hover:bg-accent/20 
                            group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                <category.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-[#e6f1ff]">{category.title}</h3>
            </div>

            {/* Skill Bar with glow */}
            <div className="mb-4">
              <div className="flex justify-between text-sm mb-2">
                <span style={{ color: '#8892b0' }}>Proficiency</span>
                <span className="text-accent font-mono">{category.level}%</span>
              </div>
              <div className="h-2 rounded-full overflow-hidden" style={{ backgroundColor: '#233554' }}>
                <div 
                  className="skill-progress h-full rounded-full relative"
                  data-width={category.level}
                  style={{ 
                    width: '0%',
                    backgroundColor: '#64ffda',
                    boxShadow: '0 0 10px rgba(100, 255, 218, 0.5)'
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent 
                                animate-shimmer" />
                </div>
              </div>
            </div>

            {/* Skills List */}
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, i) => (
                <span 
                  key={i} 
                  className="tag hover:bg-accent/30 hover:scale-105 transition-all duration-300 cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div ref={additionalRef}>
        <h3 className="text-[#e6f1ff] font-medium mb-6 flex items-center gap-2">
          <span className="text-accent animate-pulse">~</span> Additional Technologies
        </h3>
        <div className="flex flex-wrap gap-3">
          {additionalSkills.map((skill, index) => (
            <div 
              key={index}
              className="add-skill flex items-center gap-2 px-4 py-2 rounded-lg opacity-0
                       hover:text-accent hover:bg-[#1d3a66] hover:scale-110
                       transition-all duration-300 cursor-default group"
              style={{ 
                backgroundColor: '#112240',
                color: '#8892b0'
              }}
            >
              <skill.icon className="w-4 h-4 group-hover:rotate-12 transition-transform" />
              <span className="font-mono text-sm">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
