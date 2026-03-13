"""
Portfolio data – mirrors src/data/portfolio.ts.
Edit this file to update the content served by the API.
"""

PROFILE = {
    "name": "Soham",
    "github": "soham10i",
    "location": "Amberg, Bavaria, Germany",
    "email": "soham@email.com",
    "linkedin": "https://linkedin.com/in/soham",
    "title": "M.Sc. AI Student & Software Engineer",
    "bio": (
        "M.Sc. AI student at OTH Amberg-Weiden with 2+ years of professional software "
        "engineering experience. Passionate about AI, machine learning, data engineering, "
        "and building intelligent systems."
    ),
}

PROJECTS = [
    {
        "name": "Smart Factory Digital Twin",
        "featured": True,
        "github": "https://github.com/soham10i/stf-hw",
        "period": "2025 – present",
        "stack": [
            "Python",
            "FastAPI",
            "SQLAlchemy",
            "pandas",
            "Streamlit",
            "Docker",
            "GitHub Actions",
        ],
        "bullets": [
            "End-to-end data pipelines for 18 hardware components",
            "12-table relational database with time-series analytics",
            "Interactive dashboards with WebSocket real-time updates",
            "ML models for predictive motor health modeling",
            "5-stage CI/CD pipeline with automated testing",
        ],
    },
    {
        "name": "Medical QA System",
        "featured": False,
        "github": "https://github.com/soham10i/nlp",
        "period": "2024 – 2025",
        "stack": [
            "Python",
            "Transformers",
            "FAISS",
            "scikit-learn",
            "spaCy",
            "pandas",
        ],
        "bullets": [
            "Retrieval-augmented QA with Sentence Transformers",
            "Domain-specific Named Entity Recognition (NER)",
        ],
    },
    {
        "name": "Real-Time Scene Understanding",
        "featured": False,
        "github": "https://github.com/soham10i/Real-Time-Scene-Understanding",
        "period": "2024 – 2025",
        "stack": ["Python", "PyTorch", "YOLOv8", "BLIP", "NumPy"],
        "bullets": [
            "Real-time computer vision pipeline",
            "Multi-cloud deployment (Fly.io, Railway, Render)",
        ],
    },
    {
        "name": "Smart Home Platform",
        "featured": False,
        "github": "https://github.com/soham10i/oth_ai_sem_01_mdne",
        "period": "2024",
        "stack": ["Python", "FastAPI", "Docker", "SQLite", "Railway"],
        "bullets": [
            "IoT backend for sensor data collection and management",
        ],
    },
    {
        "name": "CO2 Tracking System",
        "featured": False,
        "github": "https://github.com/soham10i/CO2-racking-System",
        "period": "2023",
        "stack": ["Java", "HTML", "CSS", "JavaScript"],
        "bullets": [
            "Team project with 4 developers using Git workflow",
        ],
    },
]

SKILLS = {
    "Programming": [
        "Python",
        "pandas",
        "NumPy",
        "scikit-learn",
        "PyTorch",
        "FastAPI",
        "SQL",
        "Java",
        "JavaScript",
        "Bash",
        "C (basics)",
    ],
    "ML & AI": [
        "scikit-learn",
        "PyTorch",
        "YOLOv8",
        "HuggingFace Transformers",
        "FAISS",
        "spaCy",
        "OpenCV",
    ],
    "Data & Cloud": [
        "ETL Pipelines",
        "SQLAlchemy",
        "Docker",
        "GitHub Actions",
        "Azure",
        "Snowflake",
        "Railway",
        "Fly.io",
    ],
    "Visualization": ["Streamlit", "Plotly", "pandas visualization"],
    "Tools": ["Git", "GitHub Actions", "pytest", "flake8", "Docker", "Linux", "MQTT"],
}

EXPERIENCE = [
    {
        "title": "Software Engineer",
        "company": "Altera Digital Health (formerly Allscripts)",
        "location": "India",
        "period": "2 years",
        "bullets": [
            "Data-driven software development for clinical enterprise platform",
            "Python and SQL for data extraction, validation, and transformation",
            "Built analytics dashboards and reports for clinical data insights",
            "Maintained CI/CD pipelines, automated testing, and Git workflows",
            "Authored technical documentation for engineering and QA teams",
        ],
    },
]

ACADEMICS = [
    {
        "degree": "M.Sc. Artificial Intelligence for Industrial Applications",
        "institution": "OTH Amberg-Weiden",
        "location": "Bavaria, Germany",
        "period": "Oct 2024 – present",
        "grade": "2.1 (German scale)",
        "courses": [
            {"name": "Autonomous Systems", "grade": 1.0, "label": "excellent"},
            {"name": "Digital Twin Systems", "grade": 1.3, "label": "very good"},
            {"name": "Embedded Intelligence I", "grade": 1.3, "label": "very good"},
            {"name": "Advanced Deep Learning", "grade": 1.7, "label": "very good"},
            {"name": "Embedded Intelligence II", "grade": 1.7, "label": "very good"},
            {"name": "AI Conference", "grade": 1.0, "label": "excellent"},
            {"name": "Modern Databases & NoSQL", "grade": 2.3, "label": "good"},
            {"name": "Machine Learning", "grade": None, "label": "passed"},
        ],
    },
    {
        "degree": "M.Sc. Information Technology",
        "institution": "Sardar Patel University (SPU)",
        "location": "Gujarat, India",
        "period": "Completed",
        "grade": "9.7 / 10.0 (top of class)",
        "courses": [],
    },
]
