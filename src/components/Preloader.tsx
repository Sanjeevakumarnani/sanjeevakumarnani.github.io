import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

const INTRO_NAME = 'SUGURU SANJEEVA KUMAR';

export default function Preloader() {
  const [visible, setVisible] = useState(() =>
    typeof window !== 'undefined' &&
    !window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!visible || !rootRef.current) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setVisible(false);
      return;
    }

    let complete = false;
    let fallbackTimer = 0;
    let exitTimer = 0;

    const dismiss = () => {
      if (complete) return;
      complete = true;
      window.clearTimeout(fallbackTimer);
      window.clearTimeout(exitTimer);
      const root = rootRef.current;
      if (!root) {
        setVisible(false);
        return;
      }
      gsap.to(root, {
        autoAlpha: 0,
        duration: 0.55,
        ease: 'power2.inOut',
        onComplete: () => setVisible(false),
      });
    };

    const image = new Image();
    image.decoding = 'async';
    image.src = '/images/portrait-normal.jpg';
    fallbackTimer = window.setTimeout(dismiss, 2600);

    const settle = () => {
      if (!complete) exitTimer = window.setTimeout(dismiss, 1750);
    };

    if (image.complete) {
      settle();
    } else {
      image.onload = settle;
      image.onerror = settle;
    }

    return () => {
      window.clearTimeout(fallbackTimer);
      window.clearTimeout(exitTimer);
      image.onload = null;
      image.onerror = null;
    };
  }, [visible]);

  if (!visible) return null;

  return (
    <div ref={rootRef} className="preloader" role="status" aria-live="polite" aria-label="Loading portfolio">
      <div className="preloader-content">
        <div className="preloader-index"><span /> PERSONAL PORTFOLIO / 2026</div>
        <div className="preloader-name" aria-label={INTRO_NAME}>
          {INTRO_NAME.split('').map((letter, index) => (
            <span
              aria-hidden="true"
              key={index}
              className="preloader-letter"
              style={{ animationDelay: String(index * 38) + 'ms' }}
            >
              {letter === ' ' ? '\u00a0' : letter}
            </span>
          ))}
        </div>
        <p className="preloader-roles">FULL-STACK DEVELOPER <span>·</span> AI BUILDER <span>·</span> SOFTWARE ENGINEERING</p>
        <div className="preloader-progress" aria-hidden="true"><span /></div>
        <div className="preloader-foot"><span>INITIALIZING EXPERIENCE</span><span>SSK / 001</span></div>
      </div>
    </div>
  );
}
