import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Menu, X } from 'lucide-react';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Magnetic effect for profile image
  useEffect(() => {
    const image = imageRef.current;
    if (!image) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = image.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const deltaX = (e.clientX - centerX) * 0.03;
      const deltaY = (e.clientY - centerY) * 0.03;
      image.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
    };

    const handleMouseLeave = () => {
      image.style.transform = 'translate(0, 0)';
    };

    window.addEventListener('mousemove', handleMouseMove);
    image.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      image.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false);
    }
  };

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative min-h-screen w-full overflow-hidden bg-dark"
    >
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 animate-gradient bg-gradient-to-br from-dark via-dark-light to-dark opacity-80" />

      {/* Grid Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(rgba(201, 168, 108, 0.3) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(201, 168, 108, 0.3) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />

      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 lg:px-12">
        <button
          onClick={() => scrollToSection('contact')}
          className={`liquid-btn group flex items-center gap-2 border border-gold/50 px-4 py-2 text-xs font-mono uppercase tracking-wider text-gold transition-all hover:border-gold hover:text-dark ${isLoaded ? 'animate-slide-in-right' : 'opacity-0'}`}
        >
          <span>Start a Project</span>
          <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
        </button>

        <div className={`font-mono text-xs uppercase tracking-widest text-graytext ${isLoaded ? 'animate-slide-up' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
          SSK Sanjeeva Kumar
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`flex h-10 w-10 items-center justify-center rounded-full border border-dark-lighter text-offwhite transition-colors hover:border-gold hover:text-gold ${isLoaded ? 'animate-scale-in' : 'opacity-0'}`}
          style={{ animationDelay: '0.3s' }}
        >
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-dark/95 backdrop-blur-lg">
          {['About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item, index) => (
            <button
              key={item}
              onClick={() => scrollToSection(item.toLowerCase())}
              className="py-4 font-display text-4xl uppercase text-offwhite transition-colors hover:text-gold"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {item}
            </button>
          ))}
        </div>
      )}

      {/* Main Content */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 pt-20">
        {/* Large Typography Background */}
        <div className="absolute inset-0 flex flex-col items-center justify-center overflow-hidden pointer-events-none">
          <h1
            className={`font-display text-[12vw] leading-none tracking-tight text-stroke text-gold/20 ${isLoaded ? 'animate-slide-up' : 'opacity-0'}`}
            style={{ animationDelay: '0.1s' }}
          >
            SSK SANJEEVA
          </h1>
          <h1
            className={`font-display text-[12vw] leading-none tracking-tight text-stroke text-gold/20 ${isLoaded ? 'animate-slide-up' : 'opacity-0'}`}
            style={{ animationDelay: '0.2s' }}
          >
            KUMAR
          </h1>
        </div>

        {/* Profile Image */}
        <div
          ref={imageRef}
          className={`relative z-20 mb-8 transition-all duration-500 ${isLoaded ? 'animate-scale-in' : 'opacity-0'}`}
          style={{ animationDelay: '0.4s', transition: 'transform 0.1s ease-out' }}
        >
          <div className="relative">
            {/* Glow Ring */}
            <div className="absolute -inset-4 rounded-full bg-gold/20 blur-2xl animate-pulse-glow" />

            {/* Image Container */}
            <div className="relative h-64 w-64 overflow-hidden rounded-full border-2 border-gold/30 lg:h-80 lg:w-80">
              <img
                src="/image(1).png"
                alt="SSK Sanjeeva Kumar"
                className="h-full w-full object-cover object-top"
              />
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-dark/50 to-transparent" />
            </div>

            {/* Badge */}
            <div className="absolute -bottom-2 -right-2 animate-float">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gold text-dark lg:h-24 lg:w-24">
                <div className="text-center">
                  <span className="block font-display text-3xl leading-none lg:text-5xl">SSK</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Title & Subtitle */}
        <div className="relative z-20 text-center">
          <h2
            className={`mb-2 font-display text-4xl uppercase tracking-wide text-offwhite lg:text-6xl ${isLoaded ? 'animate-slide-up' : 'opacity-0'}`}
            style={{ animationDelay: '0.5s' }}
          >
            Cybersecurity Engineer
          </h2>
          <p
            className={`font-mono text-sm uppercase tracking-widest text-gold lg:text-base ${isLoaded ? 'animate-slide-up' : 'opacity-0'}`}
            style={{ animationDelay: '0.6s' }}
          >
            & Full-Stack Developer
          </p>
        </div>

        {/* CTA Buttons */}
        <div
          className={`relative z-20 mt-8 flex flex-col gap-4 sm:flex-row ${isLoaded ? 'animate-slide-up' : 'opacity-0'}`}
          style={{ animationDelay: '0.7s' }}
        >
          <button
            onClick={() => scrollToSection('contact')}
            className="liquid-btn group flex items-center justify-center gap-3 border border-gold bg-transparent px-8 py-4 font-mono text-sm uppercase tracking-wider text-gold transition-all hover:text-dark"
          >
            <span>Let's Talk</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
          <button
            onClick={() => scrollToSection('projects')}
            className="flex items-center justify-center gap-3 border border-dark-lighter px-8 py-4 font-mono text-sm uppercase tracking-wider text-offwhite transition-all hover:border-gold hover:text-gold"
          >
            View My Work
          </button>
        </div>

        {/* Side Info */}
        <div
          className={`absolute bottom-32 left-6 hidden max-w-[200px] lg:block ${isLoaded ? 'animate-slide-in-right' : 'opacity-0'}`}
          style={{ animationDelay: '0.8s' }}
        >
          <p className="font-mono text-xs leading-relaxed text-graytext">
            As a developer, I focus on building secure, scalable, and impactful digital solutions.
          </p>
          <p className="mt-4 font-mono text-xs text-gold">
            SSK's security-first expertise delivered.
          </p>
        </div>

        <div
          className={`absolute bottom-32 right-6 hidden max-w-[200px] text-right lg:block ${isLoaded ? 'animate-slide-up' : 'opacity-0'}`}
          style={{ animationDelay: '0.9s' }}
        >
          <p className="font-mono text-xs leading-relaxed text-graytext">
            A cutting-edge approach to cybersecurity and web development designed to revolutionize digital safety.
          </p>
          <div className="mt-4 flex justify-end gap-2">
            <span className="rounded-full border border-gold/50 px-3 py-1 font-mono text-[10px] uppercase text-gold">
              Security
            </span>
            <span className="rounded-full border border-dark-lighter px-3 py-1 font-mono text-[10px] uppercase text-graytext">
              2025
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
