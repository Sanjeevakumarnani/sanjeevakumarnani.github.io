# SSK — Cinematic Developer Portfolio

Live site: https://sanjeevakumarnani.github.io

A responsive, editorial portfolio for SUGURU SANJEEVA KUMAR. The design uses a white, near-black and vivid-red palette, a letter-by-letter preloader, a GSAP hero reveal, restrained scroll transitions, a project showcase and keyboard-accessible navigation.

## Stack

- React + TypeScript + Vite
- Tailwind CSS
- GSAP + ScrollTrigger
- Lucide React
- GitHub Pages deployment through GitHub Actions

## Run locally

Install Node.js 20 or newer, then run:

    npm install
    npm run dev

Validate a production build:

    npm run build
    npm run lint

## Update portfolio content

- Hero and social links: src/sections/Hero.tsx
- Project titles, descriptions, technologies and destinations: src/sections/Projects.tsx
- About section: src/sections/About.tsx
- Skills: src/sections/Skills.tsx
- Education and experience: src/sections/Experience.tsx
- Contact links and form integration: src/sections/Contact.tsx
- Generated resume content: src/components/ResumeTemplate.tsx
- Global design tokens and responsive styling: src/index.css

## Hero video

The current hero video was prepared from the supplied 10-second 1280×720 clip. A portrait crop keeps the full body visible and is encoded without audio to reduce payload size. Add the supplied file at:

    public/videos/hero-walk-portfolio-portrait.mp4

The hero checks whether the video can play. Until that file is present or if playback fails, the existing portrait image remains visible. The video uses muted autoplay, playsInline, a poster image and a graceful image fallback. The clip itself has a white studio background and subtle movement; it does not contain a full left-edge-to-right-edge walk. The GSAP entrance animates the hero visual into place without mirroring the footage.

## Deployment

Pushing to main triggers .github/workflows/deploy.yml. GitHub Actions installs dependencies, runs the Vite production build and publishes dist to GitHub Pages.

## Verified project links

- OmniRep: https://github.com/Sanjeevakumarnani/OmniRep-PS64-INNOBLOCK
- CrisisOps: https://github.com/Sanjeevakumarnani/CrisisOps
- EngramOps: https://github.com/Sanjeevakumarnani/EngramOps
- SocioSports: https://github.com/Sanjeevakumarnani/SocioSports
