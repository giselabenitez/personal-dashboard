export type Experience = {
    company: string;
    role: string;
    period: string;
    highlights: string[];
};

export type SkillGroup = {
    title: string;
    skills: string[];
};

export type Project = {
    title: string;
    type: "personal" | "case-study";
    description: string;
    stack: string[];
    highlights: string[];
};