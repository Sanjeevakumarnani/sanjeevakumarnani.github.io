import React from 'react';

const ResumeTemplate = React.forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div
      ref={ref}
      className="w-[800px] min-h-[1130px] bg-white flex"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      {/* Left Column */}
      <div className="w-[35%] bg-[#1a1a1a] text-white p-8 flex flex-col gap-10">
        {/* Profile Image */}
        <div className="w-full aspect-square bg-[#333] rounded-sm overflow-hidden border-4 border-[#333]">
          <img 
            src="/images/portrait-normal.jpg" 
            alt="Sanjeeva Kumar" 
            className="w-full h-full object-cover"
          />
        </div>

        {/* About Me */}
        <section>
          <h3 className="text-xl font-bold tracking-widest uppercase border-b border-[#333] pb-2 mb-4">
            About Me
          </h3>
          <p className="text-sm leading-relaxed text-gray-400">
            Diploma Computer Engineering student and ITI COPA graduate with a passion for
            cybersecurity, ethical hacking, and full-stack development. Experienced in computer
            operations and office automation.
          </p>
        </section>

        {/* Skills */}
        <section>
          <h3 className="text-xl font-bold tracking-widest uppercase border-b border-[#333] pb-2 mb-4">
            Skills
          </h3>
          <div className="space-y-4">
            {[
              { name: 'Cybersecurity', level: 85 },
              { name: 'Web Develop:', level: 90 },
              { name: 'Python/Flask:', level: 80 },
              { name: 'Ethical Hack:', level: 75 },
              { name: 'Database Management:', level: 85 },
            ].map((skill, i) => (
              <div key={i} className="space-y-1">
                <div className="flex justify-between text-xs font-medium">
                  <span>{skill.name}</span>
                </div>
                <div className="h-1.5 bg-[#333] rounded-full overflow-hidden">
                  <div
                    className="h-full bg-yellow-400"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact info for mobile/print consistency */}
        <section className="mt-auto pt-8 border-t border-[#333]">
          <div className="text-xs text-gray-500 space-y-1">
            <p>Hyderabad, Telangana</p>
            <p>+91 9542080501</p>
            <p>sanjeevakumarssk@gmail.com</p>
          </div>
        </section>
      </div>

      {/* Right Column */}
      <div className="w-[65%] bg-white p-12 flex flex-col gap-10">
        {/* Header */}
        <header className="relative mb-6">
          <h1 className="text-6xl font-black text-gray-800 uppercase tracking-tighter leading-none z-10 relative">
            Sanjeeva<br />Kumar
          </h1>
          <div className="absolute bottom-1 left-0 w-full h-[25px] bg-yellow-400 -z-0 opacity-80" />
          <div className="mt-6 text-sm text-gray-500 font-medium tracking-widest uppercase">
            Computer Engineering Student • ITI COPA
          </div>
        </header>

        {/* Contact Info Row */}
        <div className="flex gap-6 text-sm text-gray-500 border-b border-gray-100 pb-6 -mt-4">
          <span>Hyderabad, IN</span>
          <span>+91 9542080501</span>
          <span>sanjeevakumarssk@gmail.com</span>
        </div>

        {/* Experience */}
        <section>
          <h3 className="text-2xl font-black tracking-widest uppercase text-gray-800 mb-6 border-b-2 border-gray-100 pb-2">
            Experience
          </h3>
          <div className="space-y-8">
            <div className="relative pl-4 border-l-2 border-yellow-400">
              <h4 className="font-bold text-lg text-gray-800 uppercase">
                Executive EDP (2022 - 2023)
              </h4>
              <div className="text-xs font-bold text-gray-400 mb-2 uppercase tracking-wider">
                Varun Motors Pvt Ltd
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                Handled communication and documentation for the executive team. Managed computer
                operations and reporting systems. Coordinated with cross-functional teams for
                smooth operations.
              </p>
            </div>

            <div className="relative pl-4 border-l-2 border-gray-200">
              <h4 className="font-bold text-lg text-gray-800 uppercase">
                ITI COPA (2020 - 2021)
              </h4>
              <div className="text-xs font-bold text-gray-400 mb-2 uppercase tracking-wider">
                Industrial Training Institute
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                Learned computer operations and programming fundamentals. Developed practical
                skills in office automation tools and software applications.
              </p>
            </div>
          </div>
        </section>

        {/* Education */}
        <section>
          <h3 className="text-2xl font-black tracking-widest uppercase text-gray-800 mb-6 border-b-2 border-gray-100 pb-2">
            Education
          </h3>
          <div className="space-y-8">
            <div className="relative pl-4 border-l-2 border-yellow-400">
              <h4 className="font-bold text-lg text-gray-800 uppercase">
                Diploma in CSE (2023 - 2026)
              </h4>
              <div className="text-xs font-bold text-gray-400 mb-2 uppercase tracking-wider">
                Brilliant Grammar School
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                Focus on cybersecurity and software development. Actively working on link
                protection and phishing detection tools.
              </p>
            </div>
          </div>
        </section>

        {/* Achievements */}
        <section className="mt-auto">
           <h3 className="text-xl font-black tracking-widest uppercase text-gray-800 mb-4">
            Achievements
          </h3>
          <div className="p-4 bg-gray-50 rounded border-l-4 border-yellow-400">
            <p className="text-sm font-bold text-gray-800">Hideathon 2025 Finalist</p>
            <p className="text-xs text-gray-500">LinkShield Project - Top 10 out of 4000+ ideas</p>
          </div>
        </section>
      </div>
    </div>
  );
});

ResumeTemplate.displayName = 'ResumeTemplate';

export default ResumeTemplate;
