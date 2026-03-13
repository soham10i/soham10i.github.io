"""
Portfolio FastAPI Backend
Serves portfolio data and proxies GitHub API requests with caching.
"""
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
import httpx
import os
import time
from typing import Any

from data.portfolio import (
    PROFILE,
    PROJECTS,
    SKILLS,
    EXPERIENCE,
    ACADEMICS,
)

app = FastAPI(
    title="Portfolio API",
    description="Backend API for Soham's portfolio website",
    version="1.0.0",
)

# ---------------------------------------------------------------------------
# CORS – allow frontend origins
# ---------------------------------------------------------------------------
ALLOWED_ORIGINS = os.getenv(
    "ALLOWED_ORIGINS",
    "http://localhost:3000,https://soham10i.github.io",
).split(",")

app.add_middleware(
    CORSMiddleware,
    allow_origins=[o.strip() for o in ALLOWED_ORIGINS],
    allow_credentials=True,
    allow_methods=["GET"],
    allow_headers=["*"],
)

# ---------------------------------------------------------------------------
# Simple in-memory cache for GitHub API responses
# ---------------------------------------------------------------------------
_github_cache: dict[str, tuple[Any, float]] = {}
CACHE_TTL = int(os.getenv("GITHUB_CACHE_TTL_SECONDS", "3600"))  # 1 hour default
GITHUB_TOKEN = os.getenv("GITHUB_TOKEN", "")


async def _fetch_github(url: str) -> Any:
    """Fetch a GitHub API URL, using the cache if the entry is still fresh."""
    now = time.monotonic()
    if url in _github_cache:
        data, ts = _github_cache[url]
        if now - ts < CACHE_TTL:
            return data

    headers: dict[str, str] = {
        "Accept": "application/vnd.github+json",
        "X-GitHub-Api-Version": "2022-11-28",
    }
    if GITHUB_TOKEN:
        headers["Authorization"] = f"Bearer {GITHUB_TOKEN}"

    async with httpx.AsyncClient(timeout=10) as client:
        resp = await client.get(url, headers=headers)
        if resp.status_code == 404:
            raise HTTPException(status_code=404, detail="GitHub resource not found")
        if resp.status_code != 200:
            raise HTTPException(
                status_code=502,
                detail=f"GitHub API returned {resp.status_code}",
            )
        data = resp.json()

    _github_cache[url] = (data, now)
    return data


# ---------------------------------------------------------------------------
# Portfolio endpoints
# ---------------------------------------------------------------------------


@app.get("/api/profile", summary="Personal profile information")
async def get_profile():
    return PROFILE


@app.get("/api/projects", summary="List of projects")
async def get_projects():
    return PROJECTS


@app.get("/api/skills", summary="Categorised skills")
async def get_skills():
    return SKILLS


@app.get("/api/experience", summary="Work experience")
async def get_experience():
    return EXPERIENCE


@app.get("/api/academics", summary="Academic achievements and grades")
async def get_academics():
    return ACADEMICS


# ---------------------------------------------------------------------------
# GitHub proxy endpoints
# ---------------------------------------------------------------------------


@app.get("/api/github/{username}", summary="GitHub user profile (proxied & cached)")
async def get_github_profile(username: str):
    return await _fetch_github(f"https://api.github.com/users/{username}")


@app.get(
    "/api/github/{username}/repos",
    summary="Public GitHub repos for a user (proxied & cached)",
)
async def get_github_repos(username: str, per_page: int = 30):
    per_page = min(max(per_page, 1), 100)
    return await _fetch_github(
        f"https://api.github.com/users/{username}/repos"
        f"?sort=updated&per_page={per_page}"
    )


# ---------------------------------------------------------------------------
# Health check
# ---------------------------------------------------------------------------


@app.get("/health", include_in_schema=False)
async def health():
    return {"status": "ok"}
