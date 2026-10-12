import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mail, Phone, Linkedin, Github, ArrowUpRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

type FormStatus = 'idle' | 'draft';

export default function Contact() {
  const ref = useRef<HTMLElement>(null);
  const [status, setStatus] = useState<FormStatus>('idle');

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

  function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get('name') ?? '').trim();
    const email = String(data.get('email') ?? '').trim();
    const message = String(data.get('message') ?? '').trim();
    const subject = encodeURIComponent('Portfolio enquiry from ' + name);
    const body = encodeURIComponent('Name: ' + name + '\nEmail: ' + email + '\n\n' + message);
    window.location.href = 'mailto:ssksanjeevakumar198@gmail.com?subject=' + subject + '&body=' + body;
    setStatus('draft');
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
          {status === 'draft' && <p className="contact-status" aria-live="polite">Your email app should open with this message filled in. Review it and press Send there.</p>}
          <button type="submit" className="neo-button primary">
            OPEN EMAIL APP <ArrowUpRight size={15} />
          </button>
        </form>
      </div>
    </section>
  );
}
