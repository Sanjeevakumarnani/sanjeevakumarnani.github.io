import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ArrowDown, ArrowRight, Github, Linkedin, MapPin, Sparkles } from 'lucide-react';

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;

    const context = gsap.context(() => {
      const timeline = gsap.timeline({ defaults: { ease: 'power3.out' } });
      timeline
        .fromTo('.hero-kicker', { opacity: 0, y: 14 }, { opacity: 1, y: 0, duration: 0.5 })
        .fromTo('.hero-intro-line', { opacity: 0, y: 14 }, { opacity: 1, y: 0, duration: 0.45 }, '-=0.18')
        .fromTo('.hero-name-line', { opacity: 0, yPercent: 110 }, { opacity: 1, yPercent: 0, duration: 0.82, stagger: 0.12 }, '-=0.12')
        .fromTo('.hero-subtitle', { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.48 }, '-=0.28')
        .fromTo('.hero-description, .hero-meta, .hero-actions, .hero-socials', { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.5, stagger: 0.08 }, '-=0.18');

      if (visualRef.current) {
        gsap.fromTo(visualRef.current,
          { opacity: 0, x: -46, scale: 0.97 },
          { opacity: 1, x: 0, scale: 1, duration: 1.05, ease: 'power3.out', delay: 0.35 }
        );
      }
    }, sectionRef);

    return () => context.revert();
  }, []);

  return (
    <section ref={sectionRef} id="hero" className="hero-section">
      <div className="hero-content">
        <div className="hero-copy">
          <div className="hero-kicker">
            <span className="status-dot" />
            <span>COMPUTER SCIENCE / BUILDER MINDSET</span>
          </div>

          <p className="hero-intro-line">HELLO, I'M</p>
          <h1 className="hero-title" aria-label="Suguru Sanjeeva Kumar">
            <span className="hero-line-window"><span className="hero-name-line">SUGURU</span></span>
            <span className="hero-line-window"><span className="hero-name-line hero-name-highlight">SANJEEVA KUMAR<span className="hero-period">.</span></span></span>
          </h1>

          <div className="hero-subtitle">
            FULL-STACK DEVELOPER <span>·</span> AI BUILDER <span>·</span><br />
            CLOUD, MOBILE &amp; SECURITY
          </div>

          <p className="hero-description">
            I build practical software—from full-stack web applications and AI-enabled tools to mobile experiences, cloud-backed systems and security-focused products. I care about useful interfaces, readable code and systems that work beyond the demo.
          </p>

          <div className="hero-meta">
            <span><MapPin size={14} /> Greater Hyderabad Area</span>
            <span><Sparkles size={14} /> B.Tech CSE · Lateral Entry</span>
          </div>

          <div className="hero-actions">
            <a href="#projects" className="neo-button primary">Explore selected work <ArrowRight size={16} /></a>
            <a href="#contact" className="neo-button">Start a conversation</a>
          </div>

          <div className="hero-socials">
            <a href="https://github.com/Sanjeevakumarnani" target="_blank" rel="noreferrer"><Github /> GitHub</a>
            <a href="https://www.linkedin.com/in/sanjeevakumarnani/" target="_blank" rel="noreferrer"><Linkedin /> LinkedIn</a>
          </div>
        </div>

        <div className="hero-visual-wrap">
          <div ref={visualRef} className="portrait-stage">
            <div className="portrait-depth depth-a" />
            <div className="portrait-depth depth-b" />
            <div className="portrait-frame">
              <img
                src="/images/portrait-normal.jpg"
                alt="Portrait of Suguru Sanjeeva Kumar"
                width="410"
                height="540"
                fetchPriority="high"
                decoding="async"
              />
              <div className="portrait-scan" aria-hidden="true" />
              <div className="portrait-corner top-left" aria-hidden="true" />
              <div className="portrait-corner top-right" aria-hidden="true" />
              <div className="portrait-corner bottom-left" aria-hidden="true" />
              <div className="portrait-corner bottom-right" aria-hidden="true" />
            </div>
            <div className="portrait-label label-a">SSK / BUILT IN PUBLIC</div>
            <div className="portrait-label label-b">FULL STACK + AI</div>
            <div className="portrait-badge"><span /> Learning by building</div>
          </div>
        </div>
      </div>

      <a href="#about" className="hero-bottom" aria-label="Scroll to the about section">
        <span>SCROLL TO EXPLORE THE WORK</span>
        <ArrowDown size={16} />
      </a>
    </section>
  );
}
