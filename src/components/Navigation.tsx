import { useEffect, useState } from 'react';
import { FileDown, Menu, X, ArrowUpRight } from 'lucide-react';
import { useResumeDownload } from '../hooks/useResumeDownload';
import { ResumeHiddenContainer } from './ResumeDownload';

const navLinks = [
  { label: 'About', href: '#about', number: '01' },
  { label: 'Work', href: '#projects', number: '02' },
  { label: 'Skills', href: '#skills', number: '03' },
  { label: 'Journey', href: '#experience', number: '04' },
  { label: 'Updates', href: '#posts', number: '05' },
  { label: 'Contact', href: '#contact', number: '06' },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const { resumeRef, downloadResume } = useResumeDownload();

  useEffect(() => {
    let frame = 0;
    const handleScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        setIsScrolled(window.scrollY > 24);
        frame = 0;
      });
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsMobileMenuOpen(false);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('keydown', handleKeyDown);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  const handleLinkClick = (event: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    event.preventDefault();
    setIsMobileMenuOpen(false);
    const target = document.querySelector<HTMLElement>(href);
    if (!target) return;
    window.history.replaceState(null, '', href);
    target.scrollIntoView({
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
      block: 'start',
    });
  };

  const handleResumeDownload = async (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    if (isGenerating) return;
    setIsGenerating(true);
    setIsMobileMenuOpen(false);
    try {
      await downloadResume();
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <>
      <nav className={'site-nav' + (isScrolled ? ' is-scrolled' : '')} aria-label="Main navigation">
        <div className="site-nav-inner">
          <a href="#hero" onClick={(event) => handleLinkClick(event, '#hero')} className="nav-brand" aria-label="SSK home">
            SSK<span>.</span>
          </a>

          <div className="nav-links">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={(event) => handleLinkClick(event, link.href)} className="nav-link">
                <span>{link.number}</span>{link.label}
              </a>
            ))}
          </div>

          <div className="nav-actions">
            <a href="#resume" onClick={handleResumeDownload} className="nav-resume" aria-busy={isGenerating}>
              {isGenerating ? 'Preparing' : 'Resume'} <FileDown size={15} />
            </a>
            <button
              type="button"
              className="nav-menu-toggle"
              aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-navigation"
              onClick={() => setIsMobileMenuOpen((open) => !open)}
            >
              {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
        {isMobileMenuOpen && (
          <div id="mobile-navigation" className="mobile-nav-panel">
            <div className="mobile-nav-kicker">NAVIGATE / SSK</div>
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={(event) => handleLinkClick(event, link.href)} className="mobile-nav-link">
                <span>{link.number}</span>{link.label}<ArrowUpRight size={16} />
              </a>
            ))}
            <a href="#resume" onClick={handleResumeDownload} className="mobile-nav-resume">
              {isGenerating ? 'Preparing resume…' : 'Download resume'} <FileDown size={16} />
            </a>
          </div>
        )}
      </nav>
      <ResumeHiddenContainer ref={resumeRef} />
    </>
  );
}
