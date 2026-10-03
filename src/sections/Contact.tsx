import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mail, Phone, Linkedin, Github, ArrowUpRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const ref = useRef<HTMLElement>(null);
  const [sent, setSent] = useState(false);
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.contact-panel', { opacity: 0, y: 40, scale: .98 }, {
        opacity: 1, y: 0, scale: 1, duration: .8, ease: 'power3.out',
        scrollTrigger: { trigger: ref.current, start: 'top 75%' }
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setBusy(true);
    const data = new FormData(e.currentTarget);
    try {
      const res = await fetch('https://formspree.io/f/mbdzlabj', {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: data,
      });
      if (!res.ok) throw new Error('Message submission failed');
      e.currentTarget.reset();
      setSent(true);
      window.setTimeout(() => setSent(false), 4500);
    } catch {
      setSent(false);
    } finally {
      setBusy(false);
    }
  }

  return (
    <section ref={ref} id="contact" className="section contact-section">
      <div className="contact-panel glass-panel">
        <div className="contact-copy">
          <span className="section-kicker">05 / CONTACT</span>
          <h2>Build something<br /><span>useful.</span></h2>
          <p>Open to internships, entry-level roles and learning opportunities across software development, cloud, mobile, cybersecurity and data/ML.</p>
          <div className="contact-links">
            <a href="mailto:ssksanjeevakumar198@gmail.com"><Mail size={17} /> ssksanjeevakumar198@gmail.com</a>
            <a href="tel:+919542080501"><Phone size={17} /> +91 9542080501</a>
            <a href="https://www.linkedin.com/in/ssksanjeevakumar" target="_blank" rel="noreferrer"><Linkedin size={17} /> LinkedIn <ArrowUpRight size={14} /></a>
            <a href="https://github.com/ssksanjeevakumar" target="_blank" rel="noreferrer"><Github size={17} /> GitHub <ArrowUpRight size={14} /></a>
          </div>
        </div>
        <form className="contact-form" onSubmit={submit}>
          <label>Name<input name="name" required placeholder="Your name" /></label>
          <label>Email<input name="email" type="email" required placeholder="you@example.com" /></label>
          <label>Message<textarea name="message" rows={5} required placeholder="What are you building?" /></label>
          <button className="neo-button primary" disabled={busy}>{busy ? 'TRANSMITTING...' : sent ? 'MESSAGE SENT' : 'SEND MESSAGE'}</button>
        </form>
      </div>
    </section>
  );
}
