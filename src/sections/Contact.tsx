import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mail, Phone, Linkedin, Github, ArrowUpRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

type FormStatus = 'idle' | 'sent' | 'error';

export default function Contact() {
  const ref = useRef<HTMLElement>(null);
  const [status, setStatus] = useState<FormStatus>('idle');
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;
    const context = gsap.context(() => {
      gsap.fromTo('.contact-panel', { opacity: 0, y: 28 }, {
        opacity: 1, y: 0, duration: 0.65, ease: 'power3.out',
        scrollTrigger: { trigger: ref.current, start: 'top 78%' },
      });
    }, ref);
    return () => context.revert();
  }, []);

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    setBusy(true);
    setStatus('idle');

    try {
      const response = await fetch('https://formspree.io/f/mbdzlabj', {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: data,
      });
      if (!response.ok) throw new Error('Message submission failed');
      form.reset();
      setStatus('sent');
      window.setTimeout(() => setStatus('idle'), 5000);
    } catch {
      setStatus('error');
    } finally {
      setBusy(false);
    }
  }

  return (
    <section ref={ref} id="contact" className="section contact-section">
      <div className="contact-panel glass-panel">
        <div className="contact-copy">
          <span className="section-kicker">06 / CONTACT</span>
          <h2>Have a good<br /><span>problem.</span></h2>
          <p>
            Open to internships, collaborative builds and learning opportunities across software development, AI-enabled tools, cloud, mobile and security-focused engineering.
          </p>
          <div className="contact-links">
            <a href="mailto:ssksanjeevakumar198@gmail.com"><Mail size={17} /> ssksanjeevakumar198@gmail.com</a>
            <a href="tel:+919542080501"><Phone size={17} /> +91 9542080501</a>
            <a href="https://www.linkedin.com/in/sanjeevakumarnani/" target="_blank" rel="noreferrer"><Linkedin size={17} /> LinkedIn <ArrowUpRight size={14} /></a>
            <a href="https://github.com/Sanjeevakumarnani" target="_blank" rel="noreferrer"><Github size={17} /> GitHub <ArrowUpRight size={14} /></a>
          </div>
        </div>

        <form className="contact-form" onSubmit={submit}>
          <label>Name<input name="name" autoComplete="name" required placeholder="Your name" /></label>
          <label>Email<input name="email" type="email" autoComplete="email" required placeholder="you@example.com" /></label>
          <label>Message<textarea name="message" rows={5} required placeholder="What are you building?" /></label>
          {status === 'sent' && <p className="contact-status" aria-live="polite">Message sent. Thank you for reaching out.</p>}
          {status === 'error' && <p className="contact-status error" role="alert">The form could not submit. Use the email link on the left instead.</p>}
          <button type="submit" className="neo-button primary" disabled={busy}>
            {busy ? 'SENDING MESSAGE…' : status === 'sent' ? 'MESSAGE SENT' : 'SEND MESSAGE'}
          </button>
        </form>
      </div>
    </section>
  );
}
