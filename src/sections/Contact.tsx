import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mail, Github, Linkedin, Twitter, Send, ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const socialLinks = [
  { icon: Github, label: 'GitHub', href: 'https://github.com/ssksanjeevakumar' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com/in/ssksanjeevakumar' },
  { icon: Twitter, label: 'Twitter', href: '#' },
];

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(contentRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: contentRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      gsap.fromTo(formRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          delay: 0.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: formRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Replace 'YOUR_FORMSPREE_ID' with your actual Formspree ID
    // Example: https://formspree.io/f/xbldpogq
    const FORMSPREE_ID = 'mbdzlabj';
    const FORMSPREE_ENDPOINT = `https://formspree.io/f/${FORMSPREE_ID}`;

    if ((FORMSPREE_ID as string) === 'YOUR_FORMSPREE_ID') {
      alert('Please set your Formspree ID in src/sections/Contact.tsx to enable message sending.');
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        const data = await response.json();
        if (response.status === 404) {
          throw new Error('Form not found. Please verify your Formspree ID in src/sections/Contact.tsx.');
        }
        throw new Error(data.error || 'Oops! There was a problem submitting your form');
      }
    } catch (error) {
      console.error('Submission error:', error);
      alert(error instanceof Error ? error.message : 'Something went wrong. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section ref={sectionRef} id="contact" className="section py-32">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div ref={contentRef} className="text-center mb-12 opacity-0">
          <span className="label-mono block mb-4">05. What's Next?</span>
          <h2 className="heading-lg text-[#e6f1ff] mb-4">Get In Touch</h2>
          <p className="text-lg text-[#8892b0] max-w-xl mx-auto">
            I'm currently looking for <span className="text-[#e6f1ff]">internship</span> and{' '}
            <span className="text-[#e6f1ff]">entry-level opportunities</span> in cybersecurity 
            and full-stack development. Whether you have a question or just want to say hi, 
            I'll try my best to get back to you!
          </p>
        </div>

        {/* Contact Info */}
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          <a 
            href="mailto:sanjeevakumarssk@gmail.com"
            className="flex items-center gap-2 text-[#8892b0] hover:text-accent transition-colors"
          >
            <Mail className="w-5 h-5" />
            <span className="font-mono text-sm">sanjeevakumarssk@gmail.com</span>
          </a>
          <a 
            href="tel:+919542080501"
            className="flex items-center gap-2 text-[#8892b0] hover:text-accent transition-colors"
          >
            <span className="font-mono text-sm">+91 9542080501</span>
          </a>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-4 mb-16">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              title={link.label}
            >
              <link.icon className="w-6 h-6" />
            </a>
          ))}
        </div>

        {/* Form */}
        <form 
          ref={formRef}
          onSubmit={handleSubmit}
          className="card max-w-lg mx-auto opacity-0"
        >
          <h3 className="text-[#e6f1ff] font-semibold mb-6 text-center">Send a Message</h3>
          
          <div className="space-y-4">
            <div>
              <label className="block text-xs font-mono text-[#8892b0] mb-2">Name</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="w-full bg-[#0a192f] border border-[#233554] rounded px-4 py-3 text-[#e6f1ff]
                         focus:border-accent focus:outline-none transition-colors"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="block text-xs font-mono text-[#8892b0] mb-2">Email</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="w-full bg-[#0a192f] border border-[#233554] rounded px-4 py-3 text-[#e6f1ff]
                         focus:border-accent focus:outline-none transition-colors"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label className="block text-xs font-mono text-[#8892b0] mb-2">Message</label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                rows={4}
                className="w-full bg-[#0a192f] border border-[#233554] rounded px-4 py-3 text-[#e6f1ff]
                         focus:border-accent focus:outline-none transition-colors resize-none"
                placeholder="Your message..."
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting || submitted}
              className={`w-full btn-primary justify-center group mt-2
                ${submitted ? 'bg-accent/20' : ''}
                ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}
              `}
            >
              {isSubmitting ? (
                <>
                  <div className="w-4 h-4 border-2 border-accent border-t-transparent rounded-full animate-spin" />
                  Sending...
                </>
              ) : submitted ? (
                <>
                  Message Sent!
                  <Send className="w-4 h-4" />
                </>
              ) : (
                <>
                  Send Message
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
