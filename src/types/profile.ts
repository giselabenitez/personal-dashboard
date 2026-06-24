export type Experience = {
    company: string;
    role: string;
    startDate: string; // "YYYY-MM"
    endDate: string; // "YYYY-MM" | "present"
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

export function formatDate(date: string) {
    const [year, month] = date.split("-");

    const months = [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];

    return `${months[Number(month) - 1]} ${year}`;
}