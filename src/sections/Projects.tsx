import {
  ArrowUpRight,
  BrainCircuit,
  ExternalLink,
  Fingerprint,
  Github,
  RadioTower,
  Users,
  type LucideIcon,
} from 'lucide-react';

type Project = {
  number: string;
  title: string;
  type: string;
  summary: string;
  buildFocus: string;
  tags: string[];
  icon: LucideIcon;
  visual: string;
  repo: string;
  live?: string;
  featured?: boolean;
};

const projects: Project[] = [
  {
    number: '01',
    title: 'OmniRep',
    type: 'BLOCKCHAIN / DIGITAL IDENTITY',
    summary: 'A portable, explainable reputation passport that combines evidence from multiple wallets and testnet chains instead of making a user start over with every address.',
    buildFocus: 'Multi-wallet linking, cross-chain evidence, deterministic scoring, proof verification and on-chain attestations.',
    tags: ['React + Vite', 'Python / Flask', 'Solidity', 'EIP-712', 'Sepolia + Base Sepolia'],
    icon: Fingerprint,
    visual: 'identity',
    repo: 'https://github.com/Sanjeevakumarnani/OmniRep-PS64-INNOBLOCK',
    live: 'https://omni-rep-ps-64-innoblock-ly8xronci-sanjeevakumarnanis-projects.vercel.app/',
    featured: true,
  },
  {
    number: '02',
    title: 'CrisisOps',
    type: 'CIVIC TECH / DISASTER RESPONSE',
    summary: 'A disaster-response memory engine that preserves field reports, resources, route constraints and outcomes, then recalls relevant history to support human decisions.',
    buildFocus: 'Provenance-aware operational data, live public signals, CSV import and memory-backed response-plan review.',
    tags: ['Python', 'FastAPI', 'SQLite', 'Hindsight', 'Public data feeds'],
    icon: RadioTower,
    visual: 'crisis',
    repo: 'https://github.com/Sanjeevakumarnani/CrisisOps',
    live: 'https://crisisops-9541.onrender.com',
  },
  {
    number: '03',
    title: 'EngramOps',
    type: 'ENGINEERING MEMORY / AI',
    summary: 'A persistent engineering memory layer that connects incidents, fixes, root causes and lessons with future technical decisions.',
    buildFocus: 'Structured incident records, CSV import, historical recall and human-reviewed change-risk analysis.',
    tags: ['Python', 'FastAPI', 'SQLite', 'Hindsight', 'REST API'],
    icon: BrainCircuit,
    visual: 'memory',
    repo: 'https://github.com/Sanjeevakumarnani/EngramOps',
  },
  {
    number: '04',
    title: 'SocioSports',
    type: 'FULL-STACK / SPORTS COMMUNITY',
    summary: 'A sports community platform designed for discovering activities, connecting with players and managing sports-related interactions.',
    buildFocus: 'Typed React components, responsive interfaces, database-backed state and role-aware application flows.',
    tags: ['React', 'TypeScript', 'Vite', 'Prisma', 'SQLite'],
    icon: Users,
    visual: 'sports',
    repo: 'https://github.com/Sanjeevakumarnani/SocioSports',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section section-depth">
      <div className="section-heading">
        <span>02 / SELECTED WORK</span>
        <h2>Built to solve real problems.</h2>
      </div>

      <div className="projects-grid">
        {projects.map((project) => {
          const Icon = project.icon;
          return (
            <article
              className={'project-3d-card' + (project.featured ? ' featured-project' : '')}
              key={project.title}
            >
              <div className="project-main">
                <div className="project-top">
                  <span>{project.number} / SELECTED BUILD</span>
                  <span className="project-icon"><Icon size={21} /></span>
                </div>
                <span className="project-type">{project.type}</span>
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
                <div className="project-detail">
                  <strong>BUILD FOCUS</strong>
                  <span>{project.buildFocus}</span>
                </div>
                <div className="skill-tags">
                  {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
                </div>
                <div className="project-links">
                  <a href={project.repo} target="_blank" rel="noreferrer" aria-label={'Open ' + project.title + ' repository'}>
                    <Github size={14} /> SOURCE CODE <ArrowUpRight size={13} />
                  </a>
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noreferrer" aria-label={'Open ' + project.title + ' live demo'}>
                      <ExternalLink size={14} /> LIVE DEMO <ArrowUpRight size={13} />
                    </a>
                  )}
                </div>
              </div>
              <div className={'project-visual project-visual-' + project.visual} aria-hidden="true">
                <div className="project-visual-mark"><Icon /></div>
                <div className="project-visual-copy">
                  <strong>{project.title}</strong>
                  <span>{project.type}</span>
                  <div className="project-visual-lines"><i /><i /><i /></div>
                </div>
                <span className="project-visual-label">SSK / WORKSPACE {project.number}</span>
              </div>
            </article>
          );
        })}
      </div>

      <div className="center-action">
        <a href="https://github.com/Sanjeevakumarnani" target="_blank" rel="noreferrer" className="neo-button">
          Explore all repositories <Github size={15} /> <ArrowUpRight size={14} />
        </a>
      </div>
    </section>
  );
}
