import { Github, Linkedin, ArrowUp } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div>SSK / SUGURU SANJEEVA KUMAR</div>
      <div className="footer-links">
        <a href="https://github.com/Sanjeevakumarnani" target="_blank" rel="noreferrer" aria-label="GitHub profile"><Github size={15} /></a>
        <a href="https://www.linkedin.com/in/sanjeevakumarnani/" target="_blank" rel="noreferrer" aria-label="LinkedIn profile"><Linkedin size={15} /></a>
        <a href="#hero" aria-label="Back to top"><ArrowUp size={15} /></a>
      </div>
      <span>© {new Date().getFullYear()} — React, TypeScript &amp; GSAP.</span>
    </footer>
  );
}
