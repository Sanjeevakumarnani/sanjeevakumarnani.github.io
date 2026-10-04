import { useEffect } from 'react';

/** Keep browser-native scrolling. Custom wheel interpolation added latency. */
export default function SmoothScroll() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'auto';
    return () => { document.documentElement.style.scrollBehavior = 'auto'; };
  }, []);
  return null;
}
