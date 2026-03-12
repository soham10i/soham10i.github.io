# soham10i.github.io — Personal Portfolio

[![Deploy to GitHub Pages](https://github.com/soham10i/soham10i.github.io/actions/workflows/deploy.yml/badge.svg)](https://github.com/soham10i/soham10i.github.io/actions/workflows/deploy.yml)
![Next.js](https://img.shields.io/badge/Next.js-14-black?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-38bdf8?logo=tailwindcss)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-11-ff69b4?logo=framer)

**Live site:** [https://soham10i.github.io](https://soham10i.github.io)

A modern, dark-themed personal portfolio for Soham — M.Sc. AI student at OTH Amberg-Weiden & Software Engineer.

## Tech Stack

- **Framework:** Next.js 14 (App Router, static export)
- **Language:** TypeScript
- **Styling:** Tailwind CSS + glassmorphism effects
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Font:** Inter (Google Fonts)
- **Deployment:** GitHub Pages via GitHub Actions

## Sections

Hero · About · Experience · Projects · Skills · Academics · GitHub Activity · Contact · Footer

## Local Development

```bash
# Clone and install dependencies
git clone https://github.com/soham10i/soham10i.github.io.git
cd soham10i.github.io
npm install

# Start dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build

```bash
npm run build
# Static output is generated in the ./out directory
```

## Deployment

The site auto-deploys to GitHub Pages on every push to `main` via the workflow at `.github/workflows/deploy.yml`. No manual steps required.
