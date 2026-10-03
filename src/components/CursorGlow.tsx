import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const glow = glowRef.current;
    const cursor = cursorRef.current;
    if (!glow || !cursor || window.matchMedia('(pointer: coarse)').matches) return;

    const moveCursor = gsap.quickTo(cursor, 'x', { duration: 0.12, ease: 'power2.out' });
    const moveCursorY = gsap.quickTo(cursor, 'y', { duration: 0.12, ease: 'power2.out' });
    const moveGlow = gsap.quickTo(glow, 'x', { duration: 0.42, ease: 'power3.out' });
    const moveGlowY = gsap.quickTo(glow, 'y', { duration: 0.42, ease: 'power3.out' });

    const handleMouseMove = (e: MouseEvent) => {
      moveCursor(e.clientX);
      moveCursorY(e.clientY);
      moveGlow(e.clientX);
      moveGlowY(e.clientY);
    };

    const handleMouseEnter = () => gsap.to([glow, cursor], { opacity: 1, duration: 0.25, overwrite: true });
    const handleMouseLeave = () => gsap.to([glow, cursor], { opacity: 0, duration: 0.25, overwrite: true });

    document.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      moveCursor.tween.kill();
      moveCursorY.tween.kill();
      moveGlow.tween.kill();
      moveGlowY.tween.kill();
    };
  }, []);

  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) return null;

  return (
    <>
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
