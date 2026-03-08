import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExternalLink, Github, Folder, Star, ArrowUpRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: 1,
    title: 'LinkShield',
    subtitle: 'Phishing Detection System',
    description: 'A privacy-first phishing detection system that analyzes SMS, WhatsApp messages, and URLs in real-time. Built during Hideathon 2025 as a finalist project (Top 10 out of 4000+ ideas).',
    tags: ['Python', 'Flask', 'React', 'Machine Learning'],
    features: ['Android App', 'Chrome Extension', 'Real-time Detection'],
    icon: Folder,
    featured: true,
    demoLink: '#',
    sourceLink: '#'
  },
  {
    id: 2,
    title: 'SSKtheAI',
    subtitle: 'AI Chatbot Platform',
    description: 'Built AI chatbot platforms using OpenAI APIs with separate frontend and backend architecture. Focus on clean UI and beginner-friendly backend logic.',
    tags: ['React', 'OpenAI API', 'Node.js', 'Express'],
    features: ['Clean UI', 'AI Workflows', 'REST API'],
    icon: Folder,
    featured: false,
    demoLink: '#',
    sourceLink: '#'
  },
  {
    id: 3,
    title: 'SocioSports',
    subtitle: 'Sports Web Platform',
    description: 'A sports-focused web platform with premium branding and presentation assets. Features OSI-compliant architecture concepts.',
    tags: ['React', 'Figma', 'Node.js', 'TestSprite AI'],
    features: ['UI/UX Design', 'Backend Testing', 'Premium Branding'],
    icon: Folder,
    featured: false,
    demoLink: '#',
    sourceLink: '#'
  },
  {
    id: 4,
    title: 'Squid Game: SSK',
    subtitle: '2D Web Game',
    description: 'A full MVP 2D web game with login system, player dashboard, and bot-based AI gameplay. Framework ready for multiplayer and advanced AI.',
    tags: ['JavaScript', 'HTML5 Canvas', 'CSS3', 'WebSocket'],
    features: ['Login System', 'Bot AI', 'Game Selection'],
    icon: Folder,
    featured: false,
    demoLink: '#',
    sourceLink: '#'
  }
];

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

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

      // Projects stagger with lift effect
      const projectCards = projectsRef.current?.querySelectorAll('.project-card');
      if (projectCards) {
        projectCards.forEach((card, index) => {
          gsap.fromTo(card,
            { opacity: 0, y: 60, scale: 0.95 },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.7,
              delay: index * 0.1,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: projectsRef.current,
                start: 'top 80%',
                toggleActions: 'play none none reverse'
              }
            }
          );
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="projects" className="section">
      <div ref={titleRef} className="section-title opacity-0">
        <span className="section-number">03.</span>
        Some Things I've Built
      </div>

      <div ref={projectsRef} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div 
            key={project.id}
            className={`project-card rounded-lg p-6 opacity-0 group relative overflow-hidden
              hover:-translate-y-2 transition-all duration-500
              ${project.featured ? 'md:col-span-2' : ''}`}
            style={{ 
              backgroundColor: '#112240',
              boxShadow: '0 10px 30px -15px rgba(2, 12, 27, 0.7)'
            }}
          >
            {/* Hover glow effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                 style={{ 
                   background: 'radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(100, 255, 218, 0.1) 0%, transparent 50%)'
                 }} 
            />

            {/* Featured Badge */}
            {project.featured && (
              <div className="absolute top-4 right-4 flex items-center gap-1 text-accent animate-pulse">
                <Star className="w-4 h-4 fill-accent" />
                <span className="text-xs font-mono">Featured</span>
              </div>
            )}

            {/* Header */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-accent/10 text-accent group-hover:bg-accent/20 
                              group-hover:scale-110 transition-all duration-300">
                  <project.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#e6f1ff] group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm" style={{ color: '#8892b0' }}>{project.subtitle}</p>
                </div>
              </div>
              <div className="flex gap-2">
                <a 
                  href={project.demoLink}
                  className="p-2 rounded-lg hover:bg-accent/10 transition-all duration-300 group/link"
                  style={{ color: '#8892b0' }}
                  title="View Demo"
                >
                  <ExternalLink className="w-5 h-5 group-hover/link:text-accent group-hover/link:scale-110 transition-all" />
                </a>
                <a 
                  href={project.sourceLink}
                  className="p-2 rounded-lg hover:bg-accent/10 transition-all duration-300 group/link"
                  style={{ color: '#8892b0' }}
                  title="Source Code"
                >
                  <Github className="w-5 h-5 group-hover/link:text-accent group-hover/link:scale-110 transition-all" />
                </a>
              </div>
            </div>

            {/* Description */}
            <p className="mb-4 leading-relaxed group-hover:text-[#a8b2d1] transition-colors" style={{ color: '#8892b0' }}>
              {project.description}
            </p>

            {/* Features */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.features.map((feature, idx) => (
                <span 
                  key={idx}
                  className="text-xs font-mono px-2 py-1 rounded"
                  style={{ color: '#a8b2d1', backgroundColor: '#0a192f' }}
                >
                  {feature}
                </span>
              ))}
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, idx) => (
                <span 
                  key={idx} 
                  className="tag hover:bg-accent/30 hover:scale-105 transition-all duration-300 cursor-default"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* View More */}
      <div className="text-center mt-12">
        <a 
          href="https://github.com/ssksanjeevakumar"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 px-8 py-4 border border-accent text-accent 
                   font-mono text-sm rounded overflow-hidden relative hover:text-[#0a192f] transition-colors duration-300"
        >
          <span className="relative z-10 flex items-center gap-2">
            View More on GitHub
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </span>
          <span className="absolute inset-0 bg-accent transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
        </a>
      </div>
    </section>
  );
}
