import { ArrowUp, Heart } from 'lucide-react';

const marqueeItems = [
  'Cybersecurity',
  'Full-Stack Development',
  'AI Innovation',
  'Ethical Hacking',
  'Web Development',
  'Phishing Detection',
  'Python',
  'React',
  'JavaScript',
  'Kali Linux',
];

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative w-full overflow-hidden bg-dark">
      {/* Marquee */}
      <div className="relative border-y border-dark-lighter bg-dark-light/30 py-4">
        <div className="animate-marquee flex whitespace-nowrap">
          {[...marqueeItems, ...marqueeItems].map((item, index) => (
            <span key={index} className="mx-8 flex items-center gap-4">
              <span className="font-display text-2xl uppercase text-offwhite/80 lg:text-3xl">
                {item}
              </span>
              <span className="h-2 w-2 rotate-45 bg-gold" />
            </span>
          ))}
        </div>
      </div>

      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-12">
        <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">
          {/* Logo/Name */}
          <div className="text-center lg:text-left">
            <h3 className="font-display text-3xl uppercase text-offwhite">
              SSK Sanjeeva Kumar
            </h3>
            <p className="mt-2 font-mono text-xs uppercase tracking-wider text-graytext">
              Cybersecurity Engineer & Full-Stack Developer
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-6">
            {['About', 'Skills', 'Projects', 'Experience', 'Contact'].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="font-mono text-xs uppercase tracking-wider text-graytext transition-colors hover:text-gold"
              >
                {link}
              </a>
            ))}
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="group flex h-12 w-12 items-center justify-center rounded-full border border-dark-lighter transition-all hover:border-gold hover:bg-gold/10"
          >
            <ArrowUp className="h-5 w-5 text-graytext transition-all group-hover:-translate-y-1 group-hover:text-gold" />
          </button>
        </div>

        {/* Divider */}
        <div className="my-8 h-px w-full bg-dark-lighter" />

        {/* Copyright */}
        <div className="flex flex-col items-center justify-between gap-4 text-center lg:flex-row lg:text-left">
          <p className="font-mono text-xs text-graytext">
            © 2025 SSK Sanjeeva Kumar. All rights reserved.
          </p>
          <p className="flex items-center gap-2 font-mono text-xs text-graytext">
            Made with <Heart className="h-3 w-3 text-red-500" /> in Hyderabad
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
