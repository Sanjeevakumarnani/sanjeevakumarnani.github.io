import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const glow = glowRef.current;
    const cursor = cursorRef.current;
    if (!glow || !cursor) return;

    // Check if touch device
    const isTouchDevice = window.matchMedia('(pointer: coarse)').matches;
    if (isTouchDevice) return;

    const handleMouseMove = (e: MouseEvent) => {
      // Fast, responsive cursor
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.08,
        ease: 'power1.out',
      });

      // Slower, smoother glow
      gsap.to(glow, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.4,
        ease: 'power2.out',
      });
    };

    const handleMouseEnter = () => {
      gsap.to([glow, cursor], {
        opacity: 1,
        duration: 0.3,
      });
    };

    const handleMouseLeave = () => {
      gsap.to([glow, cursor], {
        opacity: 0,
        duration: 0.3,
      });
    };

    document.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  // Don't render on touch devices
  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
    return null;
  }

  return (
    <>
      {/* Large glow */}
      <div
        ref={glowRef}
        className="fixed pointer-events-none z-[9998] opacity-0"
        style={{
          width: '400px',
          height: '400px',
          transform: 'translate(-50%, -50%)',
          background: 'radial-gradient(circle, rgba(100, 255, 218, 0.08) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />
      
      {/* Small cursor dot */}
      <div
        ref={cursorRef}
        className="fixed pointer-events-none z-[9999] opacity-0"
        style={{
          width: '8px',
          height: '8px',
          transform: 'translate(-50%, -50%)',
          backgroundColor: '#64ffda',
          borderRadius: '50%',
          boxShadow: '0 0 20px rgba(100, 255, 218, 0.5)',
        }}
      />
    </>
  );
}
