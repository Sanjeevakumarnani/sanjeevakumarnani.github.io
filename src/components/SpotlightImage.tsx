import { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';

interface SpotlightImageProps {
  normalImage: string;
  maskImage: string;
  alt: string;
  className?: string;
}

export default function SpotlightImage({ normalImage, maskImage, alt, className = '' }: SpotlightImageProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const maskRef = useRef<HTMLDivElement>(null);
  const spotlightRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const mousePos = useRef({ x: 0.5, y: 0.5 });
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    const mask = maskRef.current;
    const spotlight = spotlightRef.current;
    if (!container || !mask || !spotlight) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      mousePos.current = { x, y };
    };

    const handleMouseEnter = () => {
      setIsHovering(true);
      gsap.to(spotlight, {
        opacity: 1,
        duration: 0.3,
        ease: 'power2.out'
      });
    };

    const handleMouseLeave = () => {
      setIsHovering(false);
      gsap.to(spotlight, {
        opacity: 0,
        duration: 0.3,
        ease: 'power2.out'
      });
    };

    // Smooth animation loop
    const animate = () => {
      const { x, y } = mousePos.current;
      const xPercent = x * 100;
      const yPercent = y * 100;
      
      // Update mask position with smooth interpolation
      gsap.to(mask, {
        '--x': `${xPercent}%`,
        '--y': `${yPercent}%`,
        duration: 0.1,
        ease: 'power1.out'
      });

      // Update spotlight glow position
      gsap.to(spotlight, {
        left: `${xPercent}%`,
        top: `${yPercent}%`,
        duration: 0.1,
        ease: 'power1.out'
      });

      rafId.current = requestAnimationFrame(animate);
    };

    container.addEventListener('mousemove', handleMouseMove, { passive: true });
    container.addEventListener('mouseenter', handleMouseEnter);
    container.addEventListener('mouseleave', handleMouseLeave);
    rafId.current = requestAnimationFrame(animate);

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseenter', handleMouseEnter);
      container.removeEventListener('mouseleave', handleMouseLeave);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className={`relative overflow-hidden rounded-lg cursor-none ${className}`}
      style={{ boxShadow: '0 20px 60px -15px rgba(2, 12, 27, 0.9)' }}
    >
      {/* Base Image (Normal) */}
      <img 
        src={normalImage} 
        alt={alt}
        className="w-full h-full object-cover"
        style={{ filter: 'contrast(1.05) saturate(1.1)' }}
      />

      {/* Mask Layer with Spotlight Effect */}
      <div 
        ref={maskRef}
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `url(${maskImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          maskImage: `radial-gradient(circle 120px at var(--x, 50%) var(--y, 50%), black 0%, transparent 70%)`,
          WebkitMaskImage: `radial-gradient(circle 120px at var(--x, 50%) var(--y, 50%), black 0%, transparent 70%)`,
          opacity: isHovering ? 1 : 0,
          transition: 'opacity 0.3s ease',
          '--x': '50%',
          '--y': '50%',
        } as React.CSSProperties}
      />

      {/* Spotlight Glow Effect */}
      <div 
        ref={spotlightRef}
        className="absolute pointer-events-none opacity-0"
        style={{
          width: '240px',
          height: '240px',
          transform: 'translate(-50%, -50%)',
          background: 'radial-gradient(circle, rgba(100, 255, 218, 0.3) 0%, transparent 70%)',
          filter: 'blur(20px)',
          mixBlendMode: 'screen',
        }}
      />

      {/* Custom Cursor */}
      <div 
        className={`absolute pointer-events-none transition-opacity duration-300 ${isHovering ? 'opacity-100' : 'opacity-0'}`}
        style={{
          left: 'var(--x, 50%)',
          top: 'var(--y, 50%)',
          transform: 'translate(-50%, -50%)',
        }}
      >
        <div className="w-4 h-4 border-2 border-accent rounded-full" />
      </div>
    </div>
  );
}
