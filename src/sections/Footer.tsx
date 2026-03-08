import { Github, Linkedin, Twitter } from 'lucide-react';

const socialLinks = [
  { icon: Github, href: 'https://github.com/ssksanjeevakumar' },
  { icon: Linkedin, href: 'https://linkedin.com/in/ssksanjeevakumar' },
  { icon: Twitter, href: '#' },
];

export default function Footer() {
  return (
    <footer className="py-8 px-6 md:px-12 lg:px-24 text-center">
      {/* Social Links - Mobile Only */}
      <div className="flex justify-center gap-6 md:hidden mb-6">
        {socialLinks.map((link, index) => (
          <a
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#8892b0] hover:text-accent transition-colors"
          >
            <link.icon className="w-5 h-5" />
          </a>
        ))}
      </div>

      {/* Credit */}
      <p className="text-sm text-[#8892b0] flex items-center justify-center gap-1 flex-wrap">
        Designed & Built by 
        <span className="text-accent">SSK Sanjeeva Kumar</span>
      </p>
      
      <p className="text-xs text-[#8892b0]/60 mt-2">
        &copy; {new Date().getFullYear()} All rights reserved.
      </p>
    </footer>
  );
}
