import { useEffect } from 'react';

export default function SmoothScroll() {
  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (!window.matchMedia('(pointer: fine)').matches) return;

    let target = window.scrollY;
    let current = target;
    let raf = 0;
    let active = false;

    const maxScroll = () => Math.max(0, document.documentElement.scrollHeight - window.innerHeight);

    const tick = () => {
      const distance = target - current;
      current += distance * 0.105;

      if (Math.abs(distance) < 0.35) {
        current = target;
        active = false;
        window.scrollTo(0, current);
        raf = 0;
        return;
      }

      window.scrollTo(0, current);
      raf = requestAnimationFrame(tick);
    };

    const start = () => {
      if (active) return;
      active = true;
      raf = requestAnimationFrame(tick);
    };

    const onWheel = (event: WheelEvent) => {
      if (event.ctrlKey || event.metaKey || event.shiftKey) return;

      let delta = event.deltaY;
      if (event.deltaMode === 1) delta *= 16;
      if (event.deltaMode === 2) delta *= window.innerHeight;

      if (!delta) return;

      event.preventDefault();
      target = Math.max(0, Math.min(maxScroll(), target + delta));
      start();
    };

    const sync = () => {
      if (!active) {
        current = window.scrollY;
        target = current;
      }
    };

    const onResize = () => {
      target = Math.max(0, Math.min(maxScroll(), target));
      if (!active) current = window.scrollY;
    };

    window.addEventListener('wheel', onWheel, { passive: false });
    window.addEventListener('scroll', sync, { passive: true });
    window.addEventListener('resize', onResize, { passive: true });

    return () => {
      window.removeEventListener('wheel', onWheel);
      window.removeEventListener('scroll', sync);
      window.removeEventListener('resize', onResize);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return null;
}
