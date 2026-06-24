import type { Experience, Project } from "../types/profile";

export const profile = {
    name: "Gisela Benitez",
    role: "Frontend-focused Full Stack Engineer",
    location: "Valencia, Spain",
};

export const links = {
    github: "https://github.com/giselabenitez",
    linkedin: "https://linkedin.com/in/gisela-benitez",
    email: "mailto:gisela.m.benitez@gmail.com"
};

export const experiences: Experience[] = [
    {
        company: "iBOOD",
        role: "Full Stack Developer (Frontend Focus)",
        startDate: "2022-06",
        endDate: "2025-12",
        highlights: [
            "Developed and maintained frontend features for a large-scale e-commerce platform using React and TypeScript",
            "Worked in continuous delivery environment with automated CI/CD pipelines",
            "Integrated frontend with backend and ERP systems (Java, Python, Odoo)",
            "Ensured code quality using SonarQube and automated testing pipelines"
        ]
    },
    {
        company: "LeArSoft (Contractor for Equifax)",
        role: "Front End Developer",
        startDate: "2020-02",
        endDate: "2022-03",
        highlights: [
            "Re-engineered enterprise system for Equifax using Angular (8–11)",
            "Implemented unit testing with Jasmine and Karma",
            "Integrated APIs with Spring Boot and WebFlux backend",
            "Participated in code reviews and technical standards discussions"
        ]
    },
    {
        company: "LeArSoft (Contractor for Buquebus)",
        role: "Full Stack Developer",
        startDate: "2017-04",
        endDate: "2020-02",
        highlights: [
            "Built ticketing system features using JavaScript, jQuery and Java",
            "Worked with legacy systems and large SQL migrations",
            "Participated in migration from SVN to GitHub"
        ]
    }
];

export const skills = {
    frontend: ["React", "TypeScript", "Angular", "JavaScript", "HTML", "CSS"],
    backend: ["Node.js", "Java", "Spring Boot"],
    testing: ["Jest", "Jasmine", "Karma"],
    tools: ["Git", "GitHub", "CI/CD"],
};

export const projects: Project[] = [
    {
        title: "Personal Dashboard",
        type: "personal",
        description: "Interactive portfolio built with React and TypeScript.",
        stack: ["React", "TypeScript", "Sass"],
        highlights: [
            "Component-based architecture",
            "Responsive layout",
            "CSS Modules"
        ],
    },
    {
        title: "Domain Model Editor (Technical Case Study)",
        type: "case-study",
        description:
            "Web-based tool for designing and editing domain models with dynamic UI interactions.",
        stack: ["React", "TypeScript"],
        highlights: [
            "Complex state management",
            "Interactive UI design",
            "Architecture decisions"
        ],
    },
    {
        title: "Landing Page Practice",
        type: "personal",
        description: "Simple responsive landing page to practice UI design.",
        stack: ["React", "CSS"],
        highlights: [
            "Responsive design",
            "Layout system",
            "UI composition"
        ],
    },
];