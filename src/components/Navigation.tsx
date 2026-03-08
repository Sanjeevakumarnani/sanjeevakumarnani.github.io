import { useEffect, useState } from 'react';
import { Menu, X, FileDown } from 'lucide-react';
import { useResumeDownload } from '../hooks/useResumeDownload';
import { ResumeHiddenContainer } from './ResumeDownload';

const navLinks = [
  { label: 'About', href: '#about', number: '01' },
  { label: 'Skills', href: '#skills', number: '02' },
  { label: 'Work', href: '#projects', number: '03' },
  { label: 'Experience', href: '#experience', number: '04' },
  { label: 'Contact', href: '#contact', number: '05' },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { resumeRef, downloadResume } = useResumeDownload();
  const [isGenerating, setIsGenerating] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleResumeDownload = async (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setIsGenerating(true);
    await downloadResume();
    setIsGenerating(false);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
          ${isScrolled 
            ? 'bg-[#0a192f]/90 backdrop-blur-md shadow-lg' 
            : 'bg-transparent'
          }
        `}
      >
        <div className="px-6 md:px-12 lg:px-12 py-4 md:py-6 flex items-center justify-between max-w-7xl mx-auto">
          {/* Logo */}
          <a 
            href="#hero" 
            onClick={(e) => handleLinkClick(e, '#hero')}
            className="font-mono text-2xl font-bold text-accent hover:text-[#e6f1ff] transition-colors"
          >
            SSK
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="nav-link flex items-center gap-1 group"
              >
                <span className="text-accent text-xs">{link.number}.</span>
                <span className="group-hover:text-accent transition-colors">{link.label}</span>
              </a>
            ))}
            
            <a 
              href="#"
              onClick={handleResumeDownload}
              className={`btn-small ml-4 flex items-center gap-2 ${isGenerating ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              {isGenerating ? 'Generating...' : (
                <>
                  Resume
                  <FileDown className="w-4 h-4" />
                </>
              )}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-accent hover:text-[#e6f1ff] transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div 
        className={`fixed inset-0 z-40 bg-[#0a192f] transition-all duration-300 md:hidden
          ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}
        `}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="text-2xl font-medium text-[#e6f1ff] hover:text-accent transition-colors flex items-center gap-3"
              style={{ 
                transitionDelay: isMobileMenuOpen ? `${index * 50}ms` : '0ms',
                opacity: isMobileMenuOpen ? 1 : 0,
                transform: isMobileMenuOpen ? 'translateY(0)' : 'translateY(20px)'
              }}
            >
              <span className="text-accent font-mono text-lg">{link.number}.</span>
              {link.label}
            </a>
          ))}
          
          <a 
            href="#"
            onClick={handleResumeDownload}
            className={`btn-primary mt-4 flex items-center gap-2 ${isGenerating ? 'opacity-50' : ''}`}
            style={{ 
              transitionDelay: isMobileMenuOpen ? '250ms' : '0ms',
              opacity: isMobileMenuOpen ? 1 : 0
            }}
          >
            {isGenerating ? 'Generating...' : (
              <>
                Resume
                <FileDown className="w-5 h-5" />
              </>
            )}
          </a>
        </div>
      </div>

      {/* Hidden Resume Component for PDF Rendering */}
      <ResumeHiddenContainer ref={resumeRef} />
    </>
  );
}
