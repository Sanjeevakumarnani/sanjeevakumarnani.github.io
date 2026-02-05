import { useEffect, useRef, useState } from 'react';
import { Briefcase, GraduationCap, Award, Calendar } from 'lucide-react';

const experiences = [
  {
    type: 'work',
    title: 'Executive EDP',
    organization: 'Varun Motors Pvt Ltd',
    period: 'Jan 2022 - July 2023',
    duration: '1 year 7 months',
    location: 'Hyderabad, Telangana',
    description: 'Handled communication, documentation, computer usage, reporting, and team coordination.',
    skills: ['Communication', 'Documentation', 'Computer Operations', 'Team Coordination'],
    icon: Briefcase,
  },
  {
    type: 'education',
    title: 'Diploma in Computer Science & Engineering',
    organization: 'Brilliant Grammar School Education Society',
    period: 'July 2023 - May 2026',
    duration: 'Ongoing',
    location: 'Hyderabad, Telangana',
    description: 'Currently pursuing diploma in CSE with focus on cybersecurity and software development.',
    skills: ['Programming', 'Cybersecurity', 'Web Development', 'Database Management'],
    icon: GraduationCap,
  },
  {
    type: 'education',
    title: 'ITI - Computer Operator & Programming Assistant (COPA)',
    organization: 'Industrial Training Institute, Kalwakurthy',
    period: 'Dec 2020 - July 2021',
    duration: '8 months',
    location: 'Kalwakurthy',
    description: 'Learned computer operations, programming fundamentals, and office automation.',
    skills: ['Computer Operations', 'Programming Basics', 'Office Automation'],
    icon: GraduationCap,
  },
  {
    type: 'education',
    title: 'Secondary School Certificate',
    organization: 'ZPHS Boys High School, Kalwakurthy',
    period: 'July 2019 - July 2020',
    duration: '1 year',
    location: 'Kalwakurthy',
    description: 'Completed secondary education with general studies.',
    skills: ['General Studies', 'Mathematics', 'Science'],
    icon: GraduationCap,
  },
];

const achievements = [
  {
    title: 'Hideathon 2025',
    description: 'Finalist - LinkShield Project (Top 10 out of 4000+ ideas)',
    icon: Award,
  },
  {
    title: 'IDEATHON',
    description: 'Cybersecurity Tool for Detecting Phishing Attacks',
    icon: Award,
  },
];

const Experience = () => {
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
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="experience"
      className="relative min-h-screen w-full overflow-hidden bg-dark py-20 lg:py-32"
    >
      {/* Background Line */}
      <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-gold/30 to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <div 
            className={`mb-4 flex items-center justify-center gap-4 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}
          >
            <div className="h-px w-12 bg-gold" />
            <span className="font-mono text-xs uppercase tracking-widest text-gold">
              My Journey
            </span>
            <div className="h-px w-12 bg-gold" />
          </div>
          <h2 
            className={`font-display text-5xl uppercase text-offwhite lg:text-7xl ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}
            style={{ animationDelay: '0.1s' }}
          >
            Experience & Education
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 top-0 h-full w-px bg-dark-lighter lg:left-1/2 lg:-translate-x-1/2" />

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative grid gap-8 lg:grid-cols-2 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}
                style={{ animationDelay: `${0.2 + index * 0.15}s` }}
              >
                {/* Timeline Node */}
                <div className="absolute left-4 top-0 z-10 -translate-x-1/2 lg:left-1/2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-gold bg-dark">
                    <exp.icon className="h-4 w-4 text-gold" />
                  </div>
                </div>

                {/* Content - Alternating sides on desktop */}
                <div className={`pl-12 lg:pl-0 ${index % 2 === 0 ? 'lg:pr-16 lg:text-right' : 'lg:col-start-2 lg:pl-16'}`}>
                  <div className="group relative overflow-hidden rounded-xl border border-dark-lighter bg-dark-light/50 p-6 transition-all duration-300 hover:border-gold/50 hover:shadow-glow">
                    {/* Glow Effect */}
                    <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gold/10 blur-3xl transition-all group-hover:bg-gold/20" />

                    <div className="relative">
                      {/* Type Badge */}
                      <div className={`mb-3 flex items-center gap-2 ${index % 2 === 0 ? 'lg:justify-end' : ''}`}>
                        <span className={`rounded-full px-3 py-1 font-mono text-[10px] uppercase tracking-wider ${
                          exp.type === 'work' 
                            ? 'bg-gold/20 text-gold' 
                            : 'bg-blue-500/20 text-blue-400'
                        }`}>
                          {exp.type === 'work' ? 'Work' : 'Education'}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="mb-1 font-display text-xl uppercase text-offwhite lg:text-2xl">
                        {exp.title}
                      </h3>

                      {/* Organization */}
                      <p className="mb-3 font-mono text-sm text-gold">
                        {exp.organization}
                      </p>

                      {/* Period */}
                      <div className={`mb-3 flex items-center gap-2 text-graytext ${index % 2 === 0 ? 'lg:justify-end' : ''}`}>
                        <Calendar className="h-3 w-3" />
                        <span className="font-mono text-xs">{exp.period}</span>
                        <span className="text-dark-lighter">•</span>
                        <span className="font-mono text-xs">{exp.duration}</span>
                      </div>

                      {/* Location */}
                      <p className="mb-3 font-mono text-xs text-graytext">
                        {exp.location}
                      </p>

                      {/* Description */}
                      <p className="mb-4 text-sm leading-relaxed text-graytext">
                        {exp.description}
                      </p>

                      {/* Skills */}
                      <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? 'lg:justify-end' : ''}`}>
                        {exp.skills.map((skill, sIndex) => (
                          <span 
                            key={sIndex}
                            className="rounded-full border border-dark-lighter bg-dark px-2 py-1 font-mono text-[10px] uppercase tracking-wider text-graytext"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements Section */}
        <div 
          className={`mt-20 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}
          style={{ animationDelay: '0.8s' }}
        >
          <div className="mb-8 text-center">
            <span className="font-mono text-xs uppercase tracking-widest text-gold">
              Achievements
            </span>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="group flex items-start gap-4 rounded-xl border border-dark-lighter bg-dark-light/50 p-6 transition-all duration-300 hover:border-gold/50 hover:shadow-glow"
              >
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-gold/20">
                  <achievement.icon className="h-6 w-6 text-gold" />
                </div>
                <div>
                  <h4 className="mb-1 font-display text-lg uppercase text-offwhite">
                    {achievement.title}
                  </h4>
                  <p className="text-sm text-graytext">
                    {achievement.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
