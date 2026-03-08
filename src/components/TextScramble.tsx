import { useEffect, useRef, useState } from 'react';

interface TextScrambleProps {
  text: string;
  className?: string;
  delay?: number;
}

const chars = '!<>-_\\/[]{}—=+*^?#________';

export default function TextScramble({ text, className = '', delay = 0 }: TextScrambleProps) {
  const elementRef = useRef<HTMLSpanElement>(null);
  const [displayText, setDisplayText] = useState('');
  const queueRef = useRef<{ from: string; to: string; start: number; end: number; char?: string }[]>([]);
  const frameRequestRef = useRef<number | null>(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDisplayText('');
      
      const length = text.length;
      queueRef.current = [];
      
      for (let i = 0; i < length; i++) {
        const from = '';
        const to = text[i];
        const start = Math.floor(Math.random() * 20);
        const end = start + Math.floor(Math.random() * 20);
        queueRef.current.push({ from, to, start, end });
      }

      let frame = 0;
      
      const update = () => {
        let output = '';
        let complete = 0;

        for (let i = 0; i < queueRef.current.length; i++) {
          const { from, to, start, end } = queueRef.current[i];
          let char = queueRef.current[i].char;

          if (frame >= end) {
            complete++;
            output += to;
          } else if (frame >= start) {
            if (!char || Math.random() < 0.28) {
              char = chars[Math.floor(Math.random() * chars.length)];
              queueRef.current[i].char = char;
            }
            output += char;
          } else {
            output += from;
          }
        }

        setDisplayText(output);

        if (complete === queueRef.current.length) {
          return;
        }

        frame++;
        frameRequestRef.current = requestAnimationFrame(update);
      };

      update();
    }, delay * 1000);

    return () => {
      clearTimeout(timeout);
      if (frameRequestRef.current) {
        cancelAnimationFrame(frameRequestRef.current);
      }
    };
  }, [text, delay]);

  return (
    <span ref={elementRef} className={className}>
      {displayText || '\u00A0'}
    </span>
  );
}
