import { useEffect, useRef, useState } from 'react';
import { Shield, Code, Trophy, Briefcase } from 'lucide-react';

const stats = [
  { number: '05+', label: 'Projects Completed', icon: Code },
  { number: '02', label: 'Hackathons Finalist', icon: Trophy },
  { number: '03+', label: 'Years Experience', icon: Briefcase },
  { number: '10+', label: 'Technologies', icon: Shield },
];

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative min-h-screen w-full overflow-hidden bg-dark py-20 lg:py-32"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute left-0 top-1/4 h-px w-full bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
        <div className="absolute left-0 top-3/4 h-px w-full bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Vertical Title - Left Side */}
          <div className="lg:col-span-2">
            <div className="lg:sticky lg:top-32">
              <h2
                className={`font-display text-6xl uppercase text-offwhite lg:writing-mode-vertical lg:rotate-180 lg:text-8xl ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}
                style={{ writingMode: 'vertical-rl' }}
              >
                About
              </h2>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-6">
            {/* Section Label */}
            <div
              className={`mb-6 flex items-center gap-4 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}
              style={{ animationDelay: '0.1s' }}
            >
              <div className="h-px w-12 bg-gold" />
              <span className="font-mono text-xs uppercase tracking-widest text-gold">
                Who I Am
              </span>
            </div>

            {/* Bio Text */}
            <div
              className={`space-y-6 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}
              style={{ animationDelay: '0.2s' }}
            >
              <p className="text-lg leading-relaxed text-offwhite lg:text-xl">
                I am a <span className="text-gold">Diploma Computer Engineering</span> student and ITI COPA graduate with a strong interest in cybersecurity, ethical hacking, and practical technology learning.
              </p>
              <p className="leading-relaxed text-graytext">
                I have hands-on experience in computer operations, programming fundamentals, and office automation. I actively work on security-focused projects like <span className="text-gold">LinkShield</span>, a phishing and malicious link detection tool.
              </p>
              <p className="leading-relaxed text-graytext">
                I am passionate about learning how systems work, identifying vulnerabilities, and improving digital security. Currently seeking internships, entry-level roles, and learning opportunities in the IT and cybersecurity domain.
              </p>

              {/* Resume Download Button */}
              <div className="pt-4">
                <a
                  href="/resume.pdf"
                  download
                  className="inline-flex items-center gap-2 border border-gold px-6 py-3 font-mono text-xs uppercase tracking-widest text-gold transition-all hover:bg-gold hover:text-dark"
                >
                  <Briefcase className="h-4 w-4" />
                  Download Resume
                </a>
              </div>
            </div>

            {/* Key Strengths */}
            <div
              className={`mt-10 grid grid-cols-2 gap-4 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}
              style={{ animationDelay: '0.3s' }}
            >
              {[
                'Strong problem-solving mindset',
                'Turns ideas into working products',
                'Security-aware developer',
                'Zero-to-one project experience',
              ].map((strength, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 rounded-lg border border-dark-lighter bg-dark-light/50 p-4 transition-all hover:border-gold/50"
                >
                  <div className="h-2 w-2 rounded-full bg-gold" />
                  <span className="font-mono text-xs text-offwhite">{strength}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Stats Cards - Right Side */}
          <div className="lg:col-span-4">
            <div className="grid grid-cols-2 gap-4 lg:grid-cols-1">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className={`group relative overflow-hidden rounded-xl border border-dark-lighter bg-dark-light p-6 transition-all duration-300 hover:border-gold/50 hover:shadow-glow ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}
                  style={{ animationDelay: `${0.4 + index * 0.1}s` }}
                >
                  {/* Background Glow */}
                  <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gold/10 blur-3xl transition-all group-hover:bg-gold/20" />

                  {/* Icon */}
                  <stat.icon className="mb-4 h-6 w-6 text-gold" />

                  {/* Number */}
                  <div className="font-display text-4xl text-offwhite lg:text-5xl">
                    {stat.number}
                  </div>

                  {/* Label */}
                  <div className="mt-2 font-mono text-xs uppercase tracking-wider text-graytext">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
