import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ArrowRight, ChevronDown } from 'lucide-react';
import SpotlightImage from '../components/SpotlightImage';
import TextScramble from '../components/TextScramble';

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const greetingRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.5 });
      
      // Staggered entrance animations
      tl.fromTo(greetingRef.current, 
        { opacity: 0, y: 30 }, 
        { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }
      )
      .fromTo(nameRef.current, 
        { opacity: 0, y: 40, filter: 'blur(10px)' }, 
        { opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.8, ease: 'power2.out' }, 
        '-=0.3'
      )
      .fromTo(titleRef.current, 
        { opacity: 0, y: 40, filter: 'blur(10px)' }, 
        { opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.8, ease: 'power2.out' }, 
        '-=0.5'
      )
      .fromTo(descRef.current, 
        { opacity: 0, y: 30 }, 
        { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }, 
        '-=0.4'
      )
      .fromTo(ctaRef.current, 
        { opacity: 0, y: 20 }, 
        { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }, 
        '-=0.3'
      )
      .fromTo(scrollIndicatorRef.current,
        { opacity: 0, y: -10 },
        { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' },
        '-=0.2'
      );

      // Floating animation for scroll indicator
      gsap.to(scrollIndicatorRef.current, {
        y: 10,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut'
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      ref={sectionRef}
      id="hero" 
      className="min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-24 py-20 relative"
    >
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        
        {/* Left Content */}
        <div className="order-2 lg:order-1">
          {/* Greeting with scramble effect */}
          <div ref={greetingRef} className="mb-4 opacity-0">
            <span className="label-mono">
              <TextScramble text="Hi, my name is" delay={0.3} />
            </span>
          </div>
          
          {/* Name with glow effect */}
          <h1 
            ref={nameRef}
            className="heading-xl mb-4 opacity-0"
            style={{ 
              color: '#e6f1ff',
              textShadow: '0 0 40px rgba(100, 255, 218, 0.1)'
            }}
          >
            SSK Sanjeeva Kumar.
          </h1>
          
          {/* Title */}
          <h2 
            ref={titleRef}
            className="heading-lg mb-6 opacity-0"
            style={{ color: '#8892b0' }}
          >
            I build{' '}
            <span className="relative inline-block">
              <span className="text-accent">secure</span>
              <svg className="absolute -bottom-1 left-0 w-full" height="4" viewBox="0 0 100 4" preserveAspectRatio="none">
                <path d="M0 2 Q 25 0, 50 2 T 100 2" stroke="#64ffda" strokeWidth="2" fill="none" />
              </svg>
            </span>{' '}
            digital experiences.
          </h2>
          
          {/* Description */}
          <p 
            ref={descRef}
            className="text-lg max-w-xl mb-10 leading-relaxed opacity-0"
            style={{ color: '#8892b0' }}
          >
            I'm a <span className="text-[#e6f1ff] font-medium">Cybersecurity Engineer</span> and{' '}
            <span className="text-[#e6f1ff] font-medium">Full-Stack Developer</span> specializing in 
            building secure, scalable applications. Currently focused on creating 
            security-first solutions and exploring the world of ethical hacking.
          </p>
          
          {/* CTA Buttons with hover effects */}
          <div ref={ctaRef} className="flex flex-wrap gap-4 opacity-0">
            <button 
              onClick={() => scrollToSection('projects')}
              className="group relative px-8 py-4 border border-accent text-accent font-mono text-sm 
                       rounded overflow-hidden transition-all duration-300 hover:text-[#0a192f]"
            >
              <span className="relative z-10 flex items-center gap-2">
                Check out my work
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </span>
              <span className="absolute inset-0 bg-accent transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
            </button>
            
            <button 
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 border border-[#233554] text-[#8892b0] font-mono text-sm 
                       rounded hover:border-accent hover:text-accent transition-all duration-300"
            >
              Get In Touch
            </button>
          </div>
        </div>
        
        {/* Right - Spotlight Image */}
        <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
          <SpotlightImage 
            normalImage="/images/portrait-normal.jpg"
            maskImage="/images/portrait-mask.png"
            alt="SSK Sanjeeva Kumar"
            className="w-[300px] h-[380px] md:w-[380px] md:h-[480px]"
          />
        </div>
      </div>

      {/* Scroll Indicator */}
      <div 
        ref={scrollIndicatorRef}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-0"
      >
        <span className="text-xs font-mono text-[#8892b0]">Scroll</span>
        <ChevronDown className="w-5 h-5 text-accent" />
      </div>
    </section>
  );
}
