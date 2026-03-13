/**
 * API client for the Python FastAPI backend.
 *
 * When NEXT_PUBLIC_API_URL is set the frontend will fetch live data from the
 * backend. If the variable is absent (e.g. static GitHub Pages deployment) the
 * functions fall back to the bundled static data so the site always works.
 */

import {
  personalInfo,
  projects as staticProjects,
  skills as staticSkills,
  experience as staticExperience,
  education as staticEducation,
} from '@/data/portfolio';

const API_URL = process.env.NEXT_PUBLIC_API_URL ?? '';

async function apiFetch<T>(path: string, fallback: T): Promise<T> {
  if (!API_URL) return fallback;
  try {
    const res = await fetch(`${API_URL}${path}`, {
      next: { revalidate: 3600 },
    });
    if (!res.ok) return fallback;
    return (await res.json()) as T;
  } catch {
    return fallback;
  }
}

export async function getProfile() {
  return apiFetch('/api/profile', personalInfo);
}

export async function getProjects() {
  return apiFetch('/api/projects', staticProjects);
}

export async function getSkills() {
  return apiFetch('/api/skills', staticSkills);
}

export async function getExperience() {
  return apiFetch('/api/experience', staticExperience);
}

export async function getAcademics() {
  return apiFetch('/api/academics', staticEducation);
}
