import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Zap, Target, Shield, Rocket } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const highlights = [
  {
    icon: Zap,
    title: 'Problem Solver',
    description: 'Strong analytical mindset for complex challenges'
  },
  {
    icon: Target,
    title: 'Product Builder',
    description: 'Turning ideas into working products'
  },
  {
    icon: Shield,
    title: 'Security First',
    description: 'Security-aware development approach'
  },
  {
    icon: Rocket,
    title: 'Fast Learner',
    description: 'Zero-to-one project experience'
  }
];

const stats = [
  { value: '05+', label: 'Projects' },
  { value: '02', label: 'Hackathons' },
  { value: '03+', label: 'Years Exp' },
  { value: '10+', label: 'Technologies' }
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const highlightsRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation with slide
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

      // Content fade up
      gsap.fromTo(contentRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: contentRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      // Highlights stagger with scale
      const highlightItems = highlightsRef.current?.querySelectorAll('.highlight-card');
      if (highlightItems) {
        gsap.fromTo(highlightItems,
          { opacity: 0, y: 30, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.5,
            stagger: 0.1,
            ease: 'back.out(1.2)',
            scrollTrigger: {
              trigger: highlightsRef.current,
              start: 'top 85%',
              toggleActions: 'play none none reverse'
            }
          }
        );
      }

      // Stats counter animation
      const statItems = statsRef.current?.querySelectorAll('.stat-card');
      if (statItems) {
        statItems.forEach((item, index) => {
          gsap.fromTo(item,
            { opacity: 0, scale: 0.8, rotateY: -15 },
            {
              opacity: 1,
              scale: 1,
              rotateY: 0,
              duration: 0.6,
              delay: index * 0.1,
              ease: 'back.out(1.5)',
              scrollTrigger: {
                trigger: statsRef.current,
                start: 'top 85%',
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
    <section ref={sectionRef} id="about" className="section">
      {/* Section Title */}
      <div ref={titleRef} className="section-title opacity-0">
        <span className="section-number">01.</span>
        About Me
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Main Content */}
        <div ref={contentRef} className="lg:col-span-2 opacity-0">
          <div className="space-y-6 text-lg leading-relaxed" style={{ color: '#8892b0' }}>
            <p className="hover:text-[#a8b2d1] transition-colors duration-300">
              Hello! I'm Sanjeeva Kumar, a <span className="text-[#e6f1ff] font-medium">Diploma Computer Engineering</span> student 
              and <span className="text-[#e6f1ff] font-medium">ITI COPA</span> graduate with a strong passion for 
              <span className="text-accent"> cybersecurity</span>, <span className="text-accent">ethical hacking</span>, 
              and practical technology learning.
            </p>
            <p className="hover:text-[#a8b2d1] transition-colors duration-300">
              I have hands-on experience in computer operations, programming fundamentals, and office automation. 
              I actively work on security-focused projects like{' '}
              <a href="#projects" className="text-accent hover:underline relative group">
                LinkShield
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300" />
              </a>, 
              a phishing and malicious link detection tool that earned me a spot as a{' '}
              <span className="text-[#e6f1ff] font-medium">Hideathon 2025 Finalist</span>.
            </p>
            <p className="hover:text-[#a8b2d1] transition-colors duration-300">
              I'm passionate about learning how systems work, identifying vulnerabilities, and improving digital security. 
              Currently seeking <span className="text-[#e6f1ff] font-medium">internships</span>,{' '}
              <span className="text-[#e6f1ff] font-medium">entry-level roles</span>, and learning opportunities 
              in the IT and cybersecurity domain.
            </p>
          </div>

          {/* Highlights Grid */}
          <div ref={highlightsRef} className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10">
            {highlights.map((item, index) => (
              <div 
                key={index}
                className="highlight-card flex items-start gap-4 p-4 rounded-lg opacity-0
                         hover:bg-[#112240] transition-all duration-300 group cursor-default"
                style={{ backgroundColor: 'rgba(17, 34, 64, 0.5)' }}
              >
                <div className="p-2 rounded-lg bg-accent/10 text-accent group-hover:bg-accent/20 
                              group-hover:scale-110 transition-all duration-300">
                  <item.icon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-[#e6f1ff] font-medium mb-1 group-hover:text-accent transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-sm" style={{ color: '#8892b0' }}>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="col-span-1">
          <div ref={statsRef} className="grid grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="stat-card rounded-lg p-6 text-center opacity-0
                         hover:-translate-y-2 transition-all duration-300 group"
                style={{ 
                  backgroundColor: '#112240',
                  boxShadow: '0 10px 30px -15px rgba(2, 12, 27, 0.7)'
                }}
              >
                <div 
                  className="stat-value text-3xl md:text-4xl font-bold text-accent mb-2 
                           group-hover:scale-110 transition-transform duration-300"
                  style={{ textShadow: '0 0 20px rgba(100, 255, 218, 0.3)' }}
                >
                  {stat.value}
                </div>
                <div className="text-sm font-mono" style={{ color: '#8892b0' }}>{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Tech Tags */}
          <div className="mt-8">
            <h4 className="text-[#e6f1ff] font-medium mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              Technologies I work with:
            </h4>
            <div className="flex flex-wrap gap-2">
              {['Python', 'React', 'Flask', 'Kali Linux', 'OpenAI', 'MySQL', 'Git', 'Docker'].map((tech, i) => (
                <span 
                  key={i} 
                  className="tag hover:bg-accent/30 hover:scale-105 transition-all duration-300 cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
