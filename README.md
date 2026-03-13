# soham10i.github.io — Personal Portfolio

[![Deploy to GitHub Pages](https://github.com/soham10i/soham10i.github.io/actions/workflows/deploy.yml/badge.svg)](https://github.com/soham10i/soham10i.github.io/actions/workflows/deploy.yml)
[![Backend CI](https://github.com/soham10i/soham10i.github.io/actions/workflows/backend-ci.yml/badge.svg)](https://github.com/soham10i/soham10i.github.io/actions/workflows/backend-ci.yml)
![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38bdf8?logo=tailwindcss)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-ff69b4?logo=framer)
![FastAPI](https://img.shields.io/badge/FastAPI-0.111-009688?logo=fastapi)
![Python](https://img.shields.io/badge/Python-3.12-3776AB?logo=python)

**Live site:** [https://soham10i.github.io](https://soham10i.github.io)

A full-stack portfolio for Soham — M.Sc. AI student at OTH Amberg-Weiden & Software Engineer — with a **Next.js 16 frontend** (Framer Motion animations, Tailwind CSS glassmorphism) and an optional **FastAPI backend** that proxies GitHub data with caching.

---

## Architecture

```
┌──────────────────────────────────┐       ┌─────────────────────────────┐
│  Next.js 16 (TypeScript)         │       │  FastAPI (Python 3.12)      │
│  • Framer Motion animations      │──────▶│  • /api/profile             │
│  • Tailwind CSS v4               │       │  • /api/projects            │
│  • Static export → GitHub Pages  │       │  • /api/skills              │
│  • Falls back to bundled data    │       │  • /api/experience          │
│    when API is unavailable       │       │  • /api/academics           │
└──────────────────────────────────┘       │  • /api/github/{user}       │
                                           │    (cached GitHub proxy)    │
                                           └─────────────────────────────┘
```

The frontend works **with or without** the backend — if `NEXT_PUBLIC_API_URL` is not set, it uses bundled static data, which is perfect for the free GitHub Pages deployment.

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend framework | Next.js 16 (App Router, static export) |
| Language | TypeScript 5 |
| Styling | Tailwind CSS v4 + glassmorphism |
| Animations | **Framer Motion 12** (scroll-triggered, stagger, hover lift) |
| Icons | Lucide React |
| Backend | **FastAPI** (Python 3.12) |
| HTTP client | httpx (async, used in backend) |
| Containerisation | Docker + docker-compose |
| CI/CD | GitHub Actions |
| Deployment | GitHub Pages (frontend) + Render/Railway/Fly.io (backend) |

---

## Project Structure

```
soham10i.github.io/
├── src/
│   ├── app/              # Next.js App Router
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── globals.css
│   ├── components/
│   │   ├── Navbar.tsx
│   │   └── sections/
│   │       ├── Hero.tsx
│   │       ├── About.tsx
│   │       ├── Experience.tsx
│   │       ├── Projects.tsx
│   │       ├── Skills.tsx
│   │       ├── Academics.tsx
│   │       ├── GitHubActivity.tsx
│   │       ├── Contact.tsx
│   │       └── Footer.tsx
│   ├── data/
│   │   └── portfolio.ts  # Single source of truth (static fallback)
│   └── lib/
│       └── api.ts        # Backend API client with static fallback
├── backend/
│   ├── main.py           # FastAPI application
│   ├── data/
│   │   └── portfolio.py  # Python mirror of src/data/portfolio.ts
│   ├── tests/
│   │   └── test_api.py   # pytest test suite
│   ├── requirements.txt
│   ├── requirements-dev.txt
│   ├── Dockerfile
│   └── .env.example
├── .github/
│   └── workflows/
│       ├── deploy.yml       # GitHub Pages deploy (includes backend tests)
│       └── backend-ci.yml   # Backend-only CI (matrix: py 3.11 + 3.12)
├── Dockerfile.frontend
├── docker-compose.yml
├── .env.local.example
└── README.md
```

---

## Sections

Hero · About · Experience · Projects · Skills · Academics · GitHub Activity · Contact · Footer

---

## Quick Start — Frontend Only (No Backend Required)

```bash
git clone https://github.com/soham10i/soham10i.github.io.git
cd soham10i.github.io
npm install
npm run dev          # http://localhost:3000
```

---

## Quick Start — Full Stack with Docker Compose

```bash
git clone https://github.com/soham10i/soham10i.github.io.git
cd soham10i.github.io

# Copy and edit backend env vars
cp backend/.env.example backend/.env
# (optional) add your GitHub token for higher rate limits

# Build and start both services
docker compose up --build

# Frontend → http://localhost:3000
# Backend  → http://localhost:8000
# API docs → http://localhost:8000/docs
```

---

## Quick Start — Backend Only (Python)

```bash
cd backend
pip install -r requirements.txt
# (optional) cp .env.example .env and set GITHUB_TOKEN
uvicorn main:app --reload --port 8000

# Interactive API docs: http://localhost:8000/docs
```

### Backend API Endpoints

| Method | Path | Description |
|--------|------|-------------|
| `GET` | `/api/profile` | Personal info |
| `GET` | `/api/projects` | All projects |
| `GET` | `/api/skills` | Categorised skills |
| `GET` | `/api/experience` | Work experience |
| `GET` | `/api/academics` | Education & grades |
| `GET` | `/api/github/{username}` | GitHub profile (cached) |
| `GET` | `/api/github/{username}/repos` | GitHub repos (cached) |
| `GET` | `/health` | Health check |

---

## Environment Variables

### Frontend (`.env.local`)

| Variable | Default | Description |
|----------|---------|-------------|
| `NEXT_PUBLIC_API_URL` | _(empty)_ | Backend base URL. Leave empty for GitHub Pages mode. Example: `https://your-api.onrender.com` |

Copy `.env.local.example` → `.env.local` and fill in.

### Backend (`backend/.env`)

| Variable | Default | Description |
|----------|---------|-------------|
| `GITHUB_TOKEN` | _(empty)_ | GitHub PAT for 5 000 req/hr (vs 60 unauthenticated) |
| `ALLOWED_ORIGINS` | `http://localhost:3000,...` | Comma-separated CORS origins |
| `GITHUB_CACHE_TTL_SECONDS` | `3600` | Cache TTL for GitHub API responses |

Copy `backend/.env.example` → `backend/.env` and fill in.

---

## Deployment (Free Tier — GitHub Student Pack)

### Frontend → GitHub Pages (Free, Automatic)

The `.github/workflows/deploy.yml` workflow deploys on every push to `main`.

1. Go to **Settings → Pages → Source: GitHub Actions**
2. Push to `main` — done! Your site is live at `https://soham10i.github.io`

### Frontend → Vercel (Alternative, also Free)

1. Go to [vercel.com/new](https://vercel.com/new)
2. Import `soham10i/soham10i.github.io`
3. Framework: **Next.js** → Deploy
4. Add env var `NEXT_PUBLIC_API_URL` if you have a backend deployed

### Backend → Render (Free Tier)

1. Go to [render.com](https://render.com) → **New Web Service**
2. Connect `soham10i/soham10i.github.io` → **Root Directory: `backend`**
3. Runtime: **Python 3** | Build: `pip install -r requirements.txt` | Start: `uvicorn main:app --host 0.0.0.0 --port $PORT`
4. Add env vars from `backend/.env.example`
5. Copy the URL (e.g. `https://portfolio-api.onrender.com`) into Vercel/Pages as `NEXT_PUBLIC_API_URL`

### Backend → Railway (Alternative, Free Tier)

1. Go to [railway.app](https://railway.app) → **New Project → Deploy from GitHub**
2. Select this repo, set **Root Directory** to `backend`
3. Railway auto-detects Python — set `START_COMMAND` to `uvicorn main:app --host 0.0.0.0 --port $PORT`
4. Add env vars → copy the public URL to `NEXT_PUBLIC_API_URL`

### Backend → Fly.io (Free Tier)

```bash
cd backend
fly launch --name portfolio-api --region fra
# Edit fly.toml if needed, then:
fly secrets set GITHUB_TOKEN=your_token ALLOWED_ORIGINS=https://soham10i.github.io
fly deploy
```

---

## Customisation

All content lives in **two mirrored files**:

| File | Used by |
|------|---------|
| `src/data/portfolio.ts` | Next.js frontend (static fallback) |
| `backend/data/portfolio.py` | FastAPI backend |

Edit both files to update your portfolio. The TypeScript and Python structures are intentionally parallel so they're easy to keep in sync.

---

## Running Tests

### Backend

```bash
cd backend
pip install -r requirements.txt -r requirements-dev.txt
python -m pytest tests/ -v
```

### Frontend (lint)

```bash
npm run lint
```

---

## Codex / AI Regeneration Prompt

Use the prompt below to regenerate or extend this application with any AI coding assistant (Codex, GPT-4, Claude, etc.):

````
Build a full-stack personal portfolio web application for GitHub user "soham10i" with the following specifications:

## Stack
- Frontend: Next.js 16 with TypeScript, App Router, static export
- Styling: Tailwind CSS v4 with glassmorphism effects (bg-white/5, backdrop-blur)
- Animations: Framer Motion 12 — use scroll-triggered whileInView animations, hover lift (whileHover: {y: -4}), stagger delays, and animated background blobs
- Icons: Lucide React
- Backend: Python 3.12 FastAPI with uvicorn, httpx, python-dotenv
- Containerisation: Docker + docker-compose

## Frontend Sections (dark theme, bg #0a0a0f)
1. Navbar — sticky, frosted glass on scroll, mobile hamburger with AnimatePresence
2. Hero — full-screen, animated gradient name, floating blob background, CTA buttons, social links
3. About — two-column grid: bio text left, stats cards right (glass cards)
4. Experience — vertical timeline with animated line and dot, glass cards
5. Projects — featured project card (gradient border, Star badge) + 2-col grid
6. Skills — categorised badge grid with colour-coded glass cards per category
7. Academics — grade bar visualisation (German scale: 1.0=best, width=(4-grade)/3*100%)
8. GitHub Activity — embeds github-readme-stats and streak-stats images
9. Contact — contact info cards left, mailto form right
10. Footer — name, title, social icons, copyright

## Backend API Endpoints
- GET /api/profile — personal info (name, title, bio, location, github, linkedin, email)
- GET /api/projects — list of projects with name, featured, github, period, stack[], bullets[]
- GET /api/skills — object keyed by category with string[] values
- GET /api/experience — list with title, company, location, period, bullets[]
- GET /api/academics — list with degree, institution, location, period, grade, courses[]
- GET /api/github/{username} — proxied GitHub API user profile with in-memory TTL cache
- GET /api/github/{username}/repos — proxied GitHub repos with cache
- GET /health — health check

## Data (populate from soham10i's GitHub profile)
- Name: Soham | Location: Amberg, Bavaria, Germany
- M.Sc. AI for Industrial Applications at OTH Amberg-Weiden (Oct 2024–present)
- Prior M.Sc. IT from Sardar Patel University, Gujarat, India (9.7/10, top of class)
- Work: Software Engineer at Altera Digital Health (2 years, Python/SQL/CI-CD)
- Projects: stf-hw (Smart Factory Digital Twin), nlp (Medical QA), Real-Time-Scene-Understanding, oth_ai_sem_01_mdne (Smart Home), CO2-racking-System
- Skills: Python, pandas, PyTorch, FastAPI, YOLOv8, HuggingFace, FAISS, Docker, GitHub Actions, Azure, Snowflake, etc.
- Academic courses with grades (German scale 1.0–4.0)

## Infrastructure
- docker-compose.yml: backend (port 8000, health-check) + frontend (port 3000, depends on backend being healthy)
- Dockerfile.frontend: multi-stage Node 20 Alpine build
- backend/Dockerfile: Python 3.12-slim
- .env.local.example: NEXT_PUBLIC_API_URL
- backend/.env.example: GITHUB_TOKEN, ALLOWED_ORIGINS, GITHUB_CACHE_TTL_SECONDS

## CI/CD (GitHub Actions)
- .github/workflows/deploy.yml: run backend pytest → build Next.js → deploy to GitHub Pages
- .github/workflows/backend-ci.yml: matrix test on Python 3.11 and 3.12

## Requirements
- Frontend falls back to bundled static data when NEXT_PUBLIC_API_URL is not set
- CORS configured via ALLOWED_ORIGINS env var
- Accessibility: aria-labels on icon links, semantic HTML, focus styles
- No personal sensitive data beyond placeholder email/phone
- README with setup, deployment guide (GitHub Pages, Vercel, Render, Railway, Fly.io), env var table, and this Codex prompt
````

---

## License

MIT — feel free to fork and customise for your own portfolio.
