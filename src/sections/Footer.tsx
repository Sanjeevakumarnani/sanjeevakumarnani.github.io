import { Github, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div>SSK / SUGURU SANJEEVA KUMAR</div>
      <div className="footer-links">
        <a href="https://github.com/ssksanjeevakumar" target="_blank" rel="noreferrer"><Github size={15} /></a>
        <a href="https://www.linkedin.com/in/ssksanjeevakumar" target="_blank" rel="noreferrer"><Linkedin size={15} /></a>
      </div>
      <span>© {new Date().getFullYear()} — Built with React, GSAP & WebGL.</span>
    </footer>
  );
}
