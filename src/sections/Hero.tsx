import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ArrowRight, ChevronDown, Github, Linkedin, MapPin, Sparkles } from 'lucide-react';
import TextScramble from '../components/TextScramble';

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.hero-reveal',
        { opacity: 0, y: 34, filter: 'blur(12px)' },
        { opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.8, stagger: 0.1, ease: 'power3.out', delay: 0.25 }
      );

      const visual = visualRef.current;
      if (!visual || window.matchMedia('(pointer: coarse)').matches) return;
      const rotateY = gsap.quickTo(visual, 'rotateY', { duration: 0.7, ease: 'power3.out' });
      const rotateX = gsap.quickTo(visual, 'rotateX', { duration: 0.7, ease: 'power3.out' });
      const moveX = gsap.quickTo(visual, 'x', { duration: 0.7, ease: 'power3.out' });
      const moveY = gsap.quickTo(visual, 'y', { duration: 0.7, ease: 'power3.out' });
      const move = (e: MouseEvent) => {
        const x = (e.clientX / window.innerWidth - 0.5) * 2;
        const y = (e.clientY / window.innerHeight - 0.5) * 2;
        rotateY(x * 8);
        rotateX(-y * 8);
        moveX(x * 8);
        moveY(y * 6);
      };
      window.addEventListener('mousemove', move, { passive: true });
      return () => {
        window.removeEventListener('mousemove', move);
        rotateY.tween.kill();
        rotateX.tween.kill();
        moveX.tween.kill();
        moveY.tween.kill();
      };
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="hero" className="hero-section">
      <div className="hero-orbit orbit-one" />
      <div className="hero-orbit orbit-two" />
      <div className="hero-content">
        <div className="hero-copy">
          <div className="hero-reveal hero-kicker">
            <span className="status-dot" />
            <TextScramble text="Computer Science Engineering Student" delay={0.2} />
          </div>

          <h1 className="hero-reveal hero-title">
            SUGURU<br />
            <span>SANJEEVA KUMAR</span>
          </h1>

          <div className="hero-reveal hero-subtitle">
            Full-Stack <span>/</span> Cloud <span>/</span> Cybersecurity
          </div>

          <p className="hero-reveal hero-description">
            I build complete systems across backend logic, cloud infrastructure,
            mobile interfaces and security layers. Currently studying B.Tech in
            Computer Science at Geethanjali College of Engineering and Technology.
          </p>

          <div className="hero-reveal hero-meta">
            <span><MapPin size={15} /> Greater Hyderabad Area</span>
            <span><Sparkles size={15} /> Open to learning & building</span>
          </div>

          <div className="hero-reveal hero-actions">
            <a href="#projects" className="neo-button primary">
              Explore work <ArrowRight size={17} />
            </a>
            <a href="#contact" className="neo-button">
              Contact me
            </a>
          </div>

          <div className="hero-reveal hero-socials">
            <a href="https://github.com/ssksanjeevakumar" target="_blank" rel="noreferrer"><Github size={18} /> GitHub</a>
            <a href="https://www.linkedin.com/in/ssksanjeevakumar" target="_blank" rel="noreferrer"><Linkedin size={18} /> LinkedIn</a>
          </div>
        </div>

        <div className="hero-visual-wrap">
          <div ref={visualRef} className="portrait-3d hero-reveal">
            <div className="portrait-backplate" />
            <div className="portrait-glow" />
            <div className="portrait-frame">
              <img src="/images/portrait-normal.jpg" alt="SUGURU SANJEEVA KUMAR" width="410" height="540" fetchPriority="high" decoding="async" />
              <div className="portrait-scan" />
              <div className="portrait-corner top-left" />
              <div className="portrait-corner top-right" />
              <div className="portrait-corner bottom-left" />
              <div className="portrait-corner bottom-right" />
            </div>
            <div className="portrait-label label-a">SSK / 2026</div>
            <div className="portrait-label label-b">FULL STACK + SECURITY</div>
            <div className="portrait-depth depth-a" />
            <div className="portrait-depth depth-b" />
          </div>
        </div>
      </div>

      <div className="hero-bottom">
        <span>SCROLL TO ENTER THE WORKSPACE</span>
        <ChevronDown size={18} />
      </div>
    </section>
  );
}
