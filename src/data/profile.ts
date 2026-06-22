import type { Experience, Project } from "../types/profile";

export const profile = {
    name: "Gisela Benitez",
    role: "Frontend-focused Full Stack Engineer",
    location: "Valencia, Spain",
};

export const experiences: Experience[] = [
    {
        company: "iBOOD",
        role: "Full Stack Developer - Frontend Focus",
        period: "2022 - 2025",
        highlights: [
            "React & TypeScript",
            "E-commerce platform",
            "CI/CD",
        ],
    },
    {
        company: "LeArSoft",
        role: "Front End Developer",
        period: "2020 - 2022",
        highlights: [
            "Angular",
            "TypeScript",
            "Jasmine",
        ],
    },
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