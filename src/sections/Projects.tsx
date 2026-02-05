import { useEffect, useRef, useState } from 'react';
import { ExternalLink, Github, Shield, Bot, Trophy, Gamepad2 } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'LinkShield',
    subtitle: 'Phishing Detection System',
    description: 'A privacy-first phishing detection system that analyzes SMS, WhatsApp messages, and URLs in real-time. Built during Hideathon 2025 as a finalist project.',
    features: ['Android App', 'Chrome Extension', 'Backend Dashboard', 'Real-time Threat Detection'],
    tech: ['Python', 'Flask', 'React', 'Machine Learning'],
    icon: Shield,
    color: '#e57373',
    achievement: 'Hideathon 2025 Finalist',
    links: { demo: '#', github: '#' },
  },
  {
    id: 2,
    title: 'SSKtheAI',
    subtitle: 'AI Chatbot Platform',
    description: 'Built AI chatbot platforms using OpenAI APIs with separate frontend and backend architecture. Focus on clean UI and beginner-friendly backend logic.',
    features: ['Clean UI', 'Expandable AI Workflows', 'OpenAI Integration', 'REST API'],
    tech: ['React', 'OpenAI API', 'Node.js', 'Express'],
    icon: Bot,
    color: '#ba68c8',
    achievement: 'AI Application',
    links: { demo: '#', github: '#' },
  },
  {
    id: 3,
    title: 'SocioSports',
    subtitle: 'Sports Web Platform',
    description: 'A sports-focused web platform with premium branding and presentation assets. Features OSI-compliant architecture concepts.',
    features: ['UI/UX Design', 'Backend Testing', 'Premium Branding', 'OSI Architecture'],
    tech: ['React', 'TestSprite AI', 'Figma', 'Node.js'],
    icon: Trophy,
    color: '#64b5f6',
    achievement: 'Full-Stack Project',
    links: { demo: '#', github: '#' },
  },
  {
    id: 4,
    title: 'Squid Game: SSK',
    subtitle: '2D Web Game',
    description: 'A full MVP 2D web game with login system, player dashboard, and bot-based AI gameplay. Framework ready for multiplayer and advanced AI.',
    features: ['Login System', 'Player Dashboard', 'Bot AI Gameplay', 'Game Selection'],
    tech: ['JavaScript', 'HTML5 Canvas', 'CSS3', 'WebSocket'],
    icon: Gamepad2,
    color: '#81c784',
    achievement: 'Game Development',
    links: { demo: '#', github: '#' },
  },
];

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeProject, setActiveProject] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

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

  const scrollToProject = (index: number) => {
    setActiveProject(index);
    if (scrollContainerRef.current) {
      const cardWidth = scrollContainerRef.current.offsetWidth;
      scrollContainerRef.current.scrollTo({
        left: index * cardWidth,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section 
      ref={sectionRef}
      id="projects"
      className="relative min-h-screen w-full overflow-hidden bg-dark py-20 lg:py-32"
    >
      {/* Background Accent */}
      <div 
        className="absolute right-0 top-0 h-full w-1/3 opacity-10"
        style={{
          background: `linear-gradient(135deg, transparent 0%, ${projects[activeProject]?.color || '#c9a86c'}40 100%)`
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
        {/* Section Header */}
        <div className="mb-12 flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <div 
              className={`mb-4 flex items-center gap-4 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}
            >
              <div className="h-px w-12 bg-gold" />
              <span className="font-mono text-xs uppercase tracking-widest text-gold">
                My Work
              </span>
            </div>
            <h2 
              className={`font-display text-5xl uppercase text-offwhite lg:text-7xl ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}
              style={{ animationDelay: '0.1s' }}
            >
              Featured Works
            </h2>
          </div>

          {/* Project Navigation */}
          <div 
            className={`flex gap-2 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}
            style={{ animationDelay: '0.2s' }}
          >
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToProject(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  activeProject === index 
                    ? 'w-8 bg-gold' 
                    : 'w-2 bg-dark-lighter hover:bg-gold/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Projects Scroll Container */}
        <div 
          ref={scrollContainerRef}
          className="horizontal-scroll -mx-6 gap-6 px-6 lg:mx-0 lg:px-0"
          onScroll={(e) => {
            const scrollLeft = e.currentTarget.scrollLeft;
            const cardWidth = e.currentTarget.offsetWidth;
            const newIndex = Math.round(scrollLeft / cardWidth);
            if (newIndex !== activeProject) {
              setActiveProject(newIndex);
            }
          }}
        >
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`w-[85vw] flex-shrink-0 snap-start lg:w-full ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}
              style={{ animationDelay: `${0.3 + index * 0.1}s` }}
            >
              <div className="group relative overflow-hidden rounded-2xl border border-dark-lighter bg-dark-light/50 transition-all duration-500 hover:border-gold/50 hover:shadow-glow">
                {/* Project Header */}
                <div className="relative p-6 lg:p-8">
                  {/* Background Glow */}
                  <div 
                    className="absolute -right-20 -top-20 h-64 w-64 rounded-full opacity-20 blur-3xl transition-all duration-500 group-hover:opacity-40"
                    style={{ backgroundColor: project.color }}
                  />

                  <div className="relative">
                    {/* Achievement Badge */}
                    <div 
                      className="mb-4 inline-flex items-center gap-2 rounded-full px-3 py-1 font-mono text-[10px] uppercase tracking-wider"
                      style={{ 
                        backgroundColor: `${project.color}20`,
                        color: project.color 
                      }}
                    >
                      <Trophy className="h-3 w-3" />
                      {project.achievement}
                    </div>

                    {/* Title */}
                    <div className="mb-4 flex items-start justify-between">
                      <div>
                        <h3 className="mb-1 font-display text-3xl uppercase text-offwhite lg:text-4xl">
                          {project.title}
                        </h3>
                        <p className="font-mono text-sm text-graytext">
                          {project.subtitle}
                        </p>
                      </div>
                      <div 
                        className="flex h-14 w-14 items-center justify-center rounded-xl"
                        style={{ backgroundColor: `${project.color}20` }}
                      >
                        <project.icon className="h-7 w-7" style={{ color: project.color }} />
                      </div>
                    </div>

                    {/* Description */}
                    <p className="mb-6 leading-relaxed text-graytext">
                      {project.description}
                    </p>

                    {/* Features */}
                    <div className="mb-6 grid grid-cols-2 gap-3">
                      {project.features.map((feature, fIndex) => (
                        <div 
                          key={fIndex}
                          className="flex items-center gap-2"
                        >
                          <div 
                            className="h-1.5 w-1.5 rounded-full"
                            style={{ backgroundColor: project.color }}
                          />
                          <span className="font-mono text-xs text-offwhite">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tech Stack */}
                    <div className="mb-6 flex flex-wrap gap-2">
                      {project.tech.map((tech, tIndex) => (
                        <span 
                          key={tIndex}
                          className="rounded-full border border-dark-lighter bg-dark px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-graytext"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex gap-4">
                      <button className="group/btn flex items-center gap-2 rounded-lg border border-gold/50 bg-gold/10 px-4 py-2 font-mono text-xs uppercase tracking-wider text-gold transition-all hover:bg-gold hover:text-dark">
                        <span>View Demo</span>
                        <ExternalLink className="h-3 w-3 transition-transform group-hover/btn:translate-x-0.5" />
                      </button>
                      <button className="flex items-center gap-2 rounded-lg border border-dark-lighter px-4 py-2 font-mono text-xs uppercase tracking-wider text-graytext transition-all hover:border-gold/50 hover:text-offwhite">
                        <Github className="h-3 w-3" />
                        <span>Source</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Counter */}
        <div 
          className={`mt-8 flex items-center justify-center gap-4 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}
          style={{ animationDelay: '0.7s' }}
        >
          <span className="font-display text-4xl text-gold">
            {String(activeProject + 1).padStart(2, '0')}
          </span>
          <div className="h-px w-12 bg-dark-lighter" />
          <span className="font-display text-2xl text-graytext">
            {String(projects.length).padStart(2, '0')}
          </span>
        </div>
      </div>
    </section>
  );
};

export default Projects;
