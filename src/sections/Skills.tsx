import { useEffect, useRef, useState } from 'react';
import { 
  Code2, 
  Globe, 
  Database, 
  Shield, 
  Brain, 
  Server,
  Terminal,
  Lock,
  Cpu,
  GitBranch
} from 'lucide-react';

const skillCategories = [
  {
    title: 'Programming',
    icon: Code2,
    skills: ['Python', 'C', 'JavaScript', 'Assembly (8051)'],
    color: '#c9a86c',
  },
  {
    title: 'Web Development',
    icon: Globe,
    skills: ['HTML5/CSS3', 'React', 'Flask', 'REST APIs'],
    color: '#64b5f6',
  },
  {
    title: 'Databases',
    icon: Database,
    skills: ['MySQL', 'Database Design', 'CRUD Operations'],
    color: '#81c784',
  },
  {
    title: 'Cybersecurity',
    icon: Shield,
    skills: ['Phishing Detection', 'Kali Linux', 'Ethical Hacking', 'OSI Model'],
    color: '#e57373',
  },
  {
    title: 'AI & Automation',
    icon: Brain,
    skills: ['OpenAI API', 'AI Chatbots', 'Image Enhancement'],
    color: '#ba68c8',
  },
  {
    title: 'DevOps',
    icon: Server,
    skills: ['Git/GitHub', 'Docker', 'Cloudflare', 'GitHub Pages'],
    color: '#ffb74d',
  },
];

const additionalSkills = [
  { name: 'Git', icon: GitBranch },
  { name: 'Terminal', icon: Terminal },
  { name: 'Security', icon: Lock },
  { name: 'Systems', icon: Cpu },
];

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="skills"
      className="relative min-h-screen w-full overflow-hidden bg-dark py-20 lg:py-32"
    >
      {/* Background Grid */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(201, 168, 108, 0.5) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <div 
            className={`mb-4 flex items-center justify-center gap-4 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}
          >
            <div className="h-px w-12 bg-gold" />
            <span className="font-mono text-xs uppercase tracking-widest text-gold">
              What I Know
            </span>
            <div className="h-px w-12 bg-gold" />
          </div>
          <h2 
            className={`font-display text-5xl uppercase text-offwhite lg:text-7xl ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}
            style={{ animationDelay: '0.1s' }}
          >
            Technical Arsenal
          </h2>
        </div>

        {/* Skills Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-xl border border-dark-lighter bg-dark-light/50 p-6 transition-all duration-500 hover:border-gold/50 hover:shadow-glow ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
              onMouseEnter={() => setHoveredSkill(category.title)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              {/* Animated Background */}
              <div 
                className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{
                  background: `radial-gradient(circle at 50% 0%, ${category.color}15 0%, transparent 70%)`
                }}
              />

              {/* Header */}
              <div className="relative mb-6 flex items-center gap-4">
                <div 
                  className="flex h-12 w-12 items-center justify-center rounded-lg transition-all duration-300 group-hover:scale-110"
                  style={{ backgroundColor: `${category.color}20` }}
                >
                  <category.icon className="h-6 w-6" style={{ color: category.color }} />
                </div>
                <h3 className="font-display text-2xl uppercase text-offwhite">
                  {category.title}
                </h3>
              </div>

              {/* Skills List */}
              <div className="relative space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex}
                    className="flex items-center gap-3"
                  >
                    <div 
                      className="h-1.5 w-1.5 rounded-full"
                      style={{ backgroundColor: category.color }}
                    />
                    <span className="font-mono text-sm text-graytext transition-colors group-hover:text-offwhite">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>

              {/* Connection Lines (Visual Effect) */}
              {hoveredSkill === category.title && (
                <div className="absolute -right-2 top-1/2 h-px w-4 bg-gold/50" />
              )}
            </div>
          ))}
        </div>

        {/* Additional Skills Row */}
        <div 
          className={`mt-12 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}
          style={{ animationDelay: '0.8s' }}
        >
          <div className="mb-6 text-center">
            <span className="font-mono text-xs uppercase tracking-widest text-graytext">
              Additional Tools & Technologies
            </span>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {additionalSkills.map((skill, index) => (
              <div
                key={index}
                className="group flex items-center gap-3 rounded-full border border-dark-lighter bg-dark-light/50 px-6 py-3 transition-all hover:border-gold/50 hover:bg-gold/10"
              >
                <skill.icon className="h-4 w-4 text-gold" />
                <span className="font-mono text-sm text-offwhite">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Skill Level Indicator */}
        <div 
          className={`mt-16 grid gap-8 lg:grid-cols-3 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}
          style={{ animationDelay: '1s' }}
        >
          {[
            { label: 'Frontend Development', level: 85 },
            { label: 'Backend Development', level: 75 },
            { label: 'Cybersecurity', level: 80 },
          ].map((item, index) => (
            <div key={index} className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs uppercase tracking-wider text-graytext">
                  {item.label}
                </span>
                <span className="font-mono text-xs text-gold">{item.level}%</span>
              </div>
              <div className="h-2 w-full overflow-hidden rounded-full bg-dark-lighter">
                <div 
                  className="h-full rounded-full bg-gradient-to-r from-gold-dark to-gold transition-all duration-1000"
                  style={{ 
                    width: isVisible ? `${item.level}%` : '0%',
                    transitionDelay: `${1.2 + index * 0.2}s`
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
