import { useEffect, useRef, useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Send, ArrowUpRight } from 'lucide-react';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'sanjeevakumarssk@gmail.com',
    href: 'mailto:sanjeevakumarssk@gmail.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 9542080501',
    href: 'tel:+919542080501',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Hyderabad, Telangana, India',
    href: '#',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/ssksanjeevakumar',
    href: 'https://linkedin.com/in/ssksanjeevakumar',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/ssksanjeevakumar',
    href: 'https://github.com/ssksanjeevakumar',
  },
];

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    
    // Reset submitted state after 3 seconds
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section 
      ref={sectionRef}
      id="contact"
      className="relative min-h-screen w-full overflow-hidden bg-dark py-20 lg:py-32"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark-light/30 to-dark" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <div 
            className={`mb-4 flex items-center justify-center gap-4 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}
          >
            <div className="h-px w-12 bg-gold" />
            <span className="font-mono text-xs uppercase tracking-widest text-gold">
              Get In Touch
            </span>
            <div className="h-px w-12 bg-gold" />
          </div>
          <h2 
            className={`font-display text-5xl uppercase text-offwhite lg:text-7xl ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}
            style={{ animationDelay: '0.1s' }}
          >
            Let's Connect
          </h2>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Left Side - Contact Info */}
          <div 
            className={`space-y-8 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}
            style={{ animationDelay: '0.2s' }}
          >
            <div>
              <h3 className="mb-4 font-display text-2xl uppercase text-offwhite">
                Contact Information
              </h3>
              <p className="leading-relaxed text-graytext">
                I'm currently open to internships, entry-level roles, and learning opportunities in the IT and cybersecurity domain. Feel free to reach out!
              </p>
            </div>

            {/* Contact Links */}
            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="group flex items-center gap-4 rounded-xl border border-dark-lighter bg-dark-light/30 p-4 transition-all duration-300 hover:border-gold/50 hover:bg-gold/5"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gold/20 transition-all group-hover:bg-gold/30">
                    <item.icon className="h-5 w-5 text-gold" />
                  </div>
                  <div className="flex-1">
                    <p className="font-mono text-xs uppercase tracking-wider text-graytext">
                      {item.label}
                    </p>
                    <p className="text-sm text-offwhite transition-colors group-hover:text-gold">
                      {item.value}
                    </p>
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-graytext opacity-0 transition-all group-hover:translate-x-1 group-hover:text-gold group-hover:opacity-100" />
                </a>
              ))}
            </div>

            {/* Availability Badge */}
            <div className="inline-flex items-center gap-3 rounded-full border border-gold/30 bg-gold/10 px-6 py-3">
              <div className="relative flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500" />
              </div>
              <span className="font-mono text-sm text-gold">
                Available for opportunities
              </span>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div 
            className={`${isVisible ? 'animate-slide-up' : 'opacity-0'}`}
            style={{ animationDelay: '0.4s' }}
          >
            <div className="relative overflow-hidden rounded-2xl border border-dark-lighter bg-dark-light/50 p-6 lg:p-8">
              {/* Glassmorphism Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent" />

              <div className="relative">
                <h3 className="mb-6 font-display text-2xl uppercase text-offwhite">
                  Send a Message
                </h3>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Field */}
                  <div className="space-y-2">
                    <label className="font-mono text-xs uppercase tracking-wider text-graytext">
                      Your Name
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="form-input w-full rounded-lg border border-dark-lighter bg-dark px-4 py-3 text-offwhite placeholder-graytext/50 outline-none transition-all focus:border-gold"
                      placeholder="John Doe"
                    />
                  </div>

                  {/* Email Field */}
                  <div className="space-y-2">
                    <label className="font-mono text-xs uppercase tracking-wider text-graytext">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="form-input w-full rounded-lg border border-dark-lighter bg-dark px-4 py-3 text-offwhite placeholder-graytext/50 outline-none transition-all focus:border-gold"
                      placeholder="john@example.com"
                    />
                  </div>

                  {/* Message Field */}
                  <div className="space-y-2">
                    <label className="font-mono text-xs uppercase tracking-wider text-graytext">
                      Your Message
                    </label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      rows={4}
                      className="form-input w-full resize-none rounded-lg border border-dark-lighter bg-dark px-4 py-3 text-offwhite placeholder-graytext/50 outline-none transition-all focus:border-gold"
                      placeholder="Tell me about your project..."
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting || submitted}
                    className={`group flex w-full items-center justify-center gap-3 rounded-lg px-6 py-4 font-mono text-sm uppercase tracking-wider transition-all ${
                      submitted
                        ? 'bg-green-500 text-white'
                        : 'bg-gold text-dark hover:bg-gold-light'
                    }`}
                  >
                    {isSubmitting ? (
                      <div className="h-5 w-5 animate-spin rounded-full border-2 border-dark border-t-transparent" />
                    ) : submitted ? (
                      <>
                        <span>Message Sent!</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
