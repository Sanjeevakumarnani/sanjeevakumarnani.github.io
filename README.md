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

## Hero portrait and optional walking video

The verified current hero image is public/images/portrait-normal.jpg. The application uses it as the hero visual and reduced-motion fallback. No walking video was present in the repository when this version was built.

When a full-body walking video is available, add it under public/videos/hero-walk.mp4 and update the media element in src/sections/Hero.tsx to use that path with playsInline, muted autoplay, a poster pointing to /images/portrait-normal.jpg, and a graceful image fallback. Keep the video unmirrored and preserve its intrinsic aspect ratio. The existing image-based entrance remains the reliable fallback.

## Deployment

Pushing to main triggers .github/workflows/deploy.yml. GitHub Actions installs dependencies, runs the Vite production build and publishes dist to GitHub Pages.

## Verified project links

- OmniRep: https://github.com/Sanjeevakumarnani/OmniRep-PS64-INNOBLOCK
- CrisisOps: https://github.com/Sanjeevakumarnani/CrisisOps
- EngramOps: https://github.com/Sanjeevakumarnani/EngramOps
- SocioSports: https://github.com/Sanjeevakumarnani/SocioSports
