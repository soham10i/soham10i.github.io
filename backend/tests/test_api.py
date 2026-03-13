"""Tests for Portfolio FastAPI backend."""
import pytest
from fastapi.testclient import TestClient

import sys
import os

# Ensure the backend package root is on sys.path when running from repo root
sys.path.insert(0, os.path.dirname(os.path.dirname(__file__)))

from main import app  # noqa: E402

client = TestClient(app)


def test_health():
    resp = client.get("/health")
    assert resp.status_code == 200
    assert resp.json() == {"status": "ok"}


def test_get_profile():
    resp = client.get("/api/profile")
    assert resp.status_code == 200
    data = resp.json()
    assert "name" in data
    assert "github" in data
    assert data["github"] == "soham10i"


def test_get_projects():
    resp = client.get("/api/projects")
    assert resp.status_code == 200
    data = resp.json()
    assert isinstance(data, list)
    assert len(data) > 0
    # Featured project must exist
    featured = [p for p in data if p.get("featured")]
    assert len(featured) >= 1
    # Each project has required keys
    for project in data:
        assert "name" in project
        assert "stack" in project
        assert "bullets" in project


def test_get_skills():
    resp = client.get("/api/skills")
    assert resp.status_code == 200
    data = resp.json()
    assert isinstance(data, dict)
    assert "Programming" in data
    assert "ML & AI" in data


def test_get_experience():
    resp = client.get("/api/experience")
    assert resp.status_code == 200
    data = resp.json()
    assert isinstance(data, list)
    assert len(data) > 0
    entry = data[0]
    assert "title" in entry
    assert "company" in entry
    assert "bullets" in entry


def test_get_academics():
    resp = client.get("/api/academics")
    assert resp.status_code == 200
    data = resp.json()
    assert isinstance(data, list)
    assert len(data) > 0
    edu = data[0]
    assert "degree" in edu
    assert "institution" in edu
    assert "courses" in edu
