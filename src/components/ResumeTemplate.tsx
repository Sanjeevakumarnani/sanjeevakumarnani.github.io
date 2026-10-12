import React from 'react';

const ResumeTemplate = React.forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div
      ref={ref}
      className="w-[800px] min-h-[1130px] bg-white flex text-black"
      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
    >
      <aside className="w-[31%] bg-[#111111] text-white p-7 flex flex-col gap-7">
        <div>
          <div className="text-xs tracking-[0.24em] text-[#ff646a] font-bold mb-3">DEVELOPER PROFILE</div>
          <h2 className="text-4xl font-bold leading-none tracking-tight">SSK<span className="text-[#ff3038]">.</span></h2>
          <p className="text-xs text-gray-300 mt-3 leading-relaxed">Full-stack development · AI-enabled systems · Cloud · Mobile · Security</p>
        </div>

        <section>
          <h3 className="text-xs font-bold tracking-[0.18em] uppercase border-b border-white/20 pb-2 mb-3">Contact</h3>
          <div className="text-[11px] text-gray-300 space-y-2 leading-relaxed">
            <p>Hyderabad, Telangana</p>
            <p>+91 9542080501</p>
            <p>ssksanjeevakumar198@gmail.com</p>
            <p>github.com/Sanjeevakumarnani</p>
            <p>linkedin.com/in/sanjeevakumarnani</p>
          </div>
        </section>

        <section>
          <h3 className="text-xs font-bold tracking-[0.18em] uppercase border-b border-white/20 pb-2 mb-3">Technical stack</h3>
          <p className="text-[11px] text-gray-300 leading-[1.9]">
            Python · Flask · FastAPI · React · TypeScript · JavaScript · Kotlin · Jetpack Compose · MySQL · PostgreSQL · SQLite · Prisma · SQLAlchemy · AWS · Firebase · Git · GitHub · Solidity · EIP-712
          </p>
        </section>

        <section>
          <h3 className="text-xs font-bold tracking-[0.18em] uppercase border-b border-white/20 pb-2 mb-3">Focus areas</h3>
          <ul className="text-[11px] text-gray-300 space-y-2 list-disc pl-4 leading-relaxed">
            <li>Full-stack web products</li>
            <li>AI-enabled workflows</li>
            <li>Cloud and API integration</li>
            <li>Security-oriented software</li>
            <li>Technical documentation</li>
          </ul>
        </section>

        <div className="mt-auto pt-4 border-t border-white/15 text-[10px] text-gray-500">
          Portfolio: sanjeevakumarnani.github.io
        </div>
      </aside>

      <main className="w-[69%] p-8 flex flex-col gap-6">
        <header className="pb-5 border-b-2 border-[#ff3038]">
          <p className="text-xs font-bold tracking-[0.2em] text-[#ff3038] mb-3">PORTFOLIO / CV</p>
          <h1 className="text-[37px] font-bold leading-[0.95] tracking-[-0.06em] text-[#111111]">SUGURU<br />SANJEEVA KUMAR</h1>
          <p className="text-[11px] font-medium tracking-[0.12em] uppercase text-gray-500 mt-4">B.Tech CSE · Lateral Entry</p>
          <p className="text-[11px] text-gray-600 leading-relaxed mt-3">
            Computer Science Engineering student building practical software products across full-stack development, AI-enabled workflows, cloud, mobile and security-focused engineering.
          </p>
        </header>

        <section>
          <h3 className="text-sm font-bold tracking-[0.15em] uppercase text-[#111111] mb-3">Experience</h3>
          <div className="space-y-4">
            <div className="pl-3 border-l-2 border-[#ff3038]">
              <div className="flex justify-between gap-3 items-baseline">
                <h4 className="text-[12px] font-bold">Web Development Intern / Full Stack Engineer</h4>
                <span className="text-[9px] text-gray-500 whitespace-nowrap">2025–2026</span>
              </div>
              <p className="text-[10px] text-gray-500 mb-1">SocioSports · ViranAI Solutions Pvt. Ltd.</p>
              <p className="text-[10px] text-gray-600 leading-relaxed">Built responsive pages and contributed to Flask APIs, MySQL-backed workflows, debugging and version-control practices.</p>
            </div>
            <div className="pl-3 border-l-2 border-gray-200">
              <div className="flex justify-between gap-3 items-baseline">
                <h4 className="text-[12px] font-bold">Executive — EDP</h4>
                <span className="text-[9px] text-gray-500 whitespace-nowrap">2022–2023</span>
              </div>
              <p className="text-[10px] text-gray-500 mb-1">Varun Motors Pvt Ltd</p>
              <p className="text-[10px] text-gray-600 leading-relaxed">Handled computer operations, documentation and reporting and coordinated with cross-functional teams.</p>
            </div>
          </div>
        </section>

        <section>
          <h3 className="text-sm font-bold tracking-[0.15em] uppercase text-[#111111] mb-3">Selected projects</h3>
          <div className="space-y-3">
            <div>
              <h4 className="text-[12px] font-bold">OmniRep — Omnichain Reputation Passport</h4>
              <p className="text-[10px] text-gray-600 leading-relaxed">Portable, explainable reputation from multiple wallets and testnet chains, with verifiable proofs and attestations.</p>
            </div>
            <div>
              <h4 className="text-[12px] font-bold">CrisisOps — Disaster Response Memory Engine</h4>
              <p className="text-[10px] text-gray-600 leading-relaxed">Provenance-aware field reports, public signals and memory-backed decision support for emergency response teams.</p>
            </div>
            <div>
              <h4 className="text-[12px] font-bold">EngramOps — Engineering Memory</h4>
              <p className="text-[10px] text-gray-600 leading-relaxed">Connects incidents, fixes and lessons to future change-risk analysis.</p>
            </div>
            <div>
              <h4 className="text-[12px] font-bold">SocioSports — Sports Community Platform</h4>
              <p className="text-[10px] text-gray-600 leading-relaxed">Responsive full-stack platform for sports activities, player connections and application workflows.</p>
            </div>
          </div>
        </section>

        <section>
          <h3 className="text-sm font-bold tracking-[0.15em] uppercase text-[#111111] mb-3">Education</h3>
          <div className="space-y-3">
            <div>
              <div className="flex justify-between gap-3 items-baseline"><h4 className="text-[11px] font-bold">B.Tech — Computer Science &amp; Engineering</h4><span className="text-[9px] text-gray-500">2026–2029</span></div>
              <p className="text-[10px] text-gray-500">Geethanjali College of Engineering and Technology · Hyderabad</p>
            </div>
            <div>
              <div className="flex justify-between gap-3 items-baseline"><h4 className="text-[11px] font-bold">Diploma — Computer Science &amp; Engineering</h4><span className="text-[9px] text-gray-500">2023–2026</span></div>
              <p className="text-[10px] text-gray-500">Brilliant Grammar School Educational Society's Group of Institutions · Hyderabad</p>
            </div>
            <div>
              <div className="flex justify-between gap-3 items-baseline"><h4 className="text-[11px] font-bold">ITI — COPA</h4><span className="text-[9px] text-gray-500">2020–2021</span></div>
              <p className="text-[10px] text-gray-500">Industrial Training Institute · Kalwakurthy</p>
            </div>
          </div>
        </section>

        <section className="mt-auto p-4 bg-[#fff7f7] border-l-4 border-[#ff3038]">
          <h3 className="text-[11px] font-bold text-[#111111]">Achievement</h3>
          <p className="text-[10px] text-gray-600 mt-1">LinkShield — HIDEATHON 2025: recognized among the Top 10 from 4,000+ ideas.</p>
        </section>
      </main>
    </div>
  );
});

ResumeTemplate.displayName = 'ResumeTemplate';

export default ResumeTemplate;
