export interface ContactInfo {
    name: string;
    firstName: string;
    lastName: string;
    title: string;
    email: string;
    phone: string;
    linkedin: string;
    github?: string;
    location: string;
    openToRelocate: boolean;
}

export interface StatItem {
    value: string;
    label: string;
}

export interface SkillGroup {
    category: string;
    skills: string[];
}

export interface Experience {
    id: string;
    role: string;
    company: string;
    companyFull: string;
    location: string;
    duration: string;
    tenure: string;
    type: string;
    highlights: string[];
    tags: string[];
}

export interface ProjectLink {
    label: string;
    url: string;
    platform: "web" | "playstore" | "appstore";
}

export interface Project {
    id: string;
    index: number;
    title: string;
    status: "Live" | "Archived" | "In Progress";
    description: string;
    detailedDescription?: string;
    techStack: string[];
    highlights: string[];
    color: string;
    links?: ProjectLink[];
}

export interface Education {
    id: string;
    degree: string;
    institution: string;
    board: string;
    duration: string;
    grade: string;
}

export interface Publication {
    title: string;
    publisher: string;
    date: string;
    description: string;
    link: string;
}

export interface Certification {
    name: string;
    issuer: string;
    date: string;
    grade: string;
    link?: string;
}

export interface ResumeData {
    contact: ContactInfo;
    summary: string;
    stats: StatItem[];
    skillGroups: SkillGroup[];
    experiences: Experience[];
    projects: Project[];
    additionalWork: string[];
    education: Education[];
    publications?: Publication[];
    certifications?: Certification[];
}

export type NavLink = { label: string; href: string };
