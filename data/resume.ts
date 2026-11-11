import type { ContactInfo, SkillGroup, Experience, Project, Education, StatItem, ResumeData, Publication, Certification } from "@/types";

export const contact: ContactInfo = {
    name: "Seshathri",
    firstName: "Seshathri",
    title: "Full Stack Developer",
    email: "sesha3gl@gmail.com",
    phone: "+91 93605 44625",
    linkedin: "https://www.linkedin.com/in/seshathri-g-776986278/",
    github: "https://github.com/Seshathri-G2001/",
    lastName: "Gopala Krishnan",
    location: "India",
    openToRelocate: false,
};

export const summary =
    "Full Stack Developer with 3+ years of professional web development experience building production applications using PHP, Laravel, and React.js. Delivered 15+ live production websites and applications, spanning Laravel backend systems, React.js admin dashboards, and WordPress/WooCommerce platforms. Skilled in MVC architecture, RESTful integration, and writing clean, reusable, maintainable code across the full development lifecycle.";

export const stats: StatItem[] = [
    { value: "3+", label: "Years Experience" },
    { value: "15+", label: "Production Apps Built" },
];

export const skillGroups: SkillGroup[] = [
    {
        category: "Languages",
        skills: ["PHP", "JavaScript", "HTML5", "CSS3"],
    },
    {
        category: "Frameworks & Libraries",
        skills: ["Laravel", "React.js", "jQuery", "Blade"],
    },
    {
        category: "CMS / E-commerce",
        skills: ["WordPress", "WooCommerce", "Custom WordPress Theme Development"],
    },
    {
        category: "Database",
        skills: ["MySQL"],
    },
    {
        category: "API & Integration",
        skills: ["REST API Integration", "AJAX"],
    },
    {
        category: "Version Control",
        skills: ["Git", "GitHub", "Bitbucket"],
    },
    {
        category: "Development Practices",
        skills: ["Object-Oriented Programming (OOP)", "MVC Architecture", "CRUD Operations", "Responsive Web Development", "Laravel Best Practices", "Reusable Component Design"],
    },
];

export const experiences: Experience[] = [
    {
        id: "webtrendz-fullstack",
        role: "Full Stack Developer",
        company: "Webtrendz Technologies",
        companyFull: "Webtrendz Technologies India Private Limited",
        duration: "June 2023 – Present",
        type: "Full-time",
        highlights: [
            "Progressed from WordPress Developer to Full Stack Developer, expanding scope from CMS-based website development to end-to-end Laravel and React.js application development.",
            "Developed and maintained production web applications using PHP, Laravel, MySQL, and Blade templating, implementing MVC-based backend logic and CRUD functionality for client-facing systems.",
            "Built and integrated React.js admin dashboards with backend APIs to deliver data-driven, interactive frontend interfaces.",
            "Implemented AJAX-based interactions and jQuery-driven UI enhancements to improve frontend responsiveness without full page reloads.",
            "Designed and developed custom WordPress themes and WooCommerce e-commerce websites, handling end-to-end website customization for client requirements.",
            "Applied object-oriented programming principles and Laravel development best practices to produce reusable, maintainable, and scalable code.",
            "Contributed to and delivered 15+ live production websites and applications, covering feature development, bug fixing, and ongoing maintenance on real-world client systems.",
            "Managed source control and collaborative development workflows using Git, GitHub, and Bitbucket across multiple production projects.",
        ],
        tags: ["PHP", "Laravel", "React.js", "MySQL", "WordPress", "WooCommerce", "AJAX", "jQuery", "Git"],
        location: "India",
        tenure: "3+ years"
    },
];

export const additionalWork: string[] = [
    "Laravel web applications with MVC architecture, MySQL, Blade views, and CRUD operations.",
    "React.js admin dashboards integrated with backend REST APIs.",
    "Custom WordPress themes and WooCommerce e-commerce platforms.",
];

export const publications: Publication[] = [];
export const certifications: Certification[] = [];

// Described by project TYPE only — no client/company names are available, so none are invented here.
export const projects: Project[] = [
    {
        id: "laravel-web-applications",
        index: 1,
        title: "Laravel Web Applications",
        status: "Live",
        description: "Backend functionality for Laravel-based production applications, including MVC-structured business logic, MySQL database design, and Blade-driven views with CRUD operations.",
        techStack: ["Laravel", "PHP", "MySQL", "Blade"],
        highlights: [
            "Developed MVC-structured business logic for Laravel-based production applications.",
            "Designed MySQL database schemas and Blade-driven views with CRUD operations.",
        ],
        color: "#2563EB",
    },
    {
        id: "react-admin-dashboards",
        index: 2,
        title: "React.js Admin Dashboards",
        status: "Live",
        description: "React.js dashboards for internal and client-facing use, integrating with backend APIs to present dynamic, data-driven interfaces.",
        techStack: ["React.js", "JavaScript", "REST API"],
        highlights: [
            "Built React.js dashboards for internal and client-facing use.",
            "Integrated dashboards with backend APIs to present dynamic, data-driven interfaces.",
        ],
        color: "#16A34A",
    },
    {
        id: "wordpress-woocommerce-websites",
        index: 3,
        title: "WordPress & WooCommerce Websites",
        status: "Live",
        description: "Custom WordPress websites and WooCommerce e-commerce platforms, including custom theme development, plugin-based customization, and site maintenance.",
        techStack: ["WordPress", "WooCommerce", "PHP", "jQuery"],
        highlights: [
            "Delivered custom WordPress themes and WooCommerce e-commerce platforms.",
            "Handled plugin-based customization and ongoing site maintenance.",
        ],
        color: "#D97706",
    },
];

export const education: Education[] = [
    {
        id: "bsc-cs",
        degree: "B.Sc. Computer Science",
        institution: "Thiruvalluvar University",
        duration: "2019 – 2022",
        board: "",
        grade: ""
    },
];

export const resume: ResumeData = {
    contact,
    summary,
    stats,
    skillGroups,
    experiences,
    projects,
    education,
    additionalWork,
    publications,
    certifications
};
 