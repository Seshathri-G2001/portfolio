"use client";
import React, { useEffect, useRef } from "react";
import { notFound, useRouter } from "next/navigation";
import { projects } from "@/data/resume";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { Footer } from "@/components/layout/Footer";
import { ArrowLeft, CheckCircle2, Cpu, Code2, ShieldAlert, Layers, Calendar, ExternalLink, Apple, Play, Globe } from "lucide-react";
import gsap from "gsap";

// Detailed architectural and challenge data to display on the project detail subpages
const PROJECT_DETAILS: Record<string, {
    year: string;
    client: string;
    role: string;
    architecture: string;
    challenge: string;
    solution: string;
}> = {
    "laravel-web-applications": {
        year: "June 2023 - Present",
        client: "Webtrendz Technologies India Private Limited",
        role: "Full Stack Developer",
        architecture: "Laravel and PHP backend applications using MVC architecture, MySQL databases, Blade views, and CRUD functionality.",
        challenge: "Delivering maintainable client-facing systems with reliable backend logic and responsive interfaces.",
        solution: "Built reusable Laravel features and RESTful integrations while maintaining production applications through feature development, bug fixing, and ongoing support.",
    },
    "react-admin-dashboards": {
        year: "June 2023 - Present",
        client: "Webtrendz Technologies India Private Limited",
        role: "Full Stack Developer",
        architecture: "React.js admin dashboards integrated with backend REST APIs for dynamic, data-driven interfaces.",
        challenge: "Presenting application data clearly while keeping dashboard interactions responsive.",
        solution: "Developed interactive dashboard interfaces and connected them to backend APIs using reusable frontend components and AJAX-based interactions.",
    },
    "wordpress-woocommerce-websites": {
        year: "June 2023 - Present",
        client: "Webtrendz Technologies India Private Limited",
        role: "Full Stack Developer",
        architecture: "Custom WordPress themes and WooCommerce platforms supported by PHP, jQuery, and plugin-based customization.",
        challenge: "Meeting varied client requirements across content-driven and e-commerce websites.",
        solution: "Delivered end-to-end website customization, theme development, feature updates, bug fixes, and ongoing maintenance.",
    },
};

export default function ProjectDetailPage({ params }: { params: { id: string } }) {
    const router = useRouter();
    const project = projects.find((p) => p.id === params.id);
    const details = PROJECT_DETAILS[params.id] || {
        year: "2025",
        client: "Webtrendz Technologies Private Limited",
        role: "Full Stack Developer",
        architecture: "Microservices API model using Laravel combined with a React.js client dashboard, featuring state management and secure REST endpoints.",
        challenge: "Handling real-time state sync and heavy API payloads under high concurrency.",
        solution: "Optimized SQL queries, cached common metadata endpoints, and implemented optimistic UI updates."
    };

    const backBtnRef = useRef<HTMLButtonElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const cardsRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!project) return;

        // GSAP entry animations
        const ctx = gsap.context(() => {
            gsap.fromTo(
                ".animate-fade-in",
                { opacity: 0, y: 30 },
                { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: "power3.out" }
            );

            gsap.fromTo(
                ".animate-stagger-item",
                { opacity: 0, scale: 0.95 },
                { opacity: 1, scale: 1, duration: 0.6, stagger: 0.08, ease: "back.out(1.2)" }
            );

            // Parallax mouse move on background glow
            const handleMouseMove = (e: MouseEvent) => {
                const { clientX, clientY } = e;
                const xPercent = (clientX / window.innerWidth - 0.5) * 40;
                const yPercent = (clientY / window.innerHeight - 0.5) * 40;

                gsap.to(".parallax-glow", {
                    x: xPercent,
                    y: yPercent,
                    duration: 0.8,
                    ease: "power2.out"
                });
            };

            window.addEventListener("mousemove", handleMouseMove);
            return () => window.removeEventListener("mousemove", handleMouseMove);
        });

        return () => ctx.revert();
    }, [project]);

    if (!project) {
        notFound();
    }

    const handleBack = () => {
        gsap.to(".animate-fade-in, .animate-stagger-item", {
            opacity: 0,
            y: -20,
            duration: 0.3,
            stagger: 0.05,
            onComplete: () => {
                router.push("/#projects");
            }
        });
    };

    return (
        <div className="min-h-screen flex flex-col bg-bg text-fg selection:bg-accent selection:text-white transition-colors duration-300">
            {/* Background Parallax Glow */}
            <div
                aria-hidden
                className="pointer-events-none absolute top-0 right-0 w-[min(700px,100vw)] h-[500px] parallax-glow"
                style={{
                    background: `radial-gradient(ellipse at top right, ${project.color}15 0%, transparent 65%)`,
                }}
            />

            {/* Nav Header */}
            <header className="sticky top-0 z-30 bg-bg/80 backdrop-blur-md border-b border-border py-4">
                <div className="wrap flex items-center justify-between">
                    <button
                        ref={backBtnRef}
                        onClick={handleBack}
                        className="group inline-flex items-center gap-2 text-sm font-semibold text-fg-2 hover:text-accent transition-colors duration-200"
                    >
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-200" />
                        Back to Home
                    </button>
                    <span className="font-bold text-sm tracking-tight hidden sm:block">
                        Project Deep Dive
                    </span>
                    <div className="flex items-center gap-4">
                        <ThemeToggle />
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="flex-grow section-y">
                <div className="wrap">
                    {/* Hero Header Area */}
                    <div className="mb-10 animate-fade-in">
                        <div className="flex items-center gap-3 mb-4">
                            <span className="t-label" style={{ color: project.color }}>
                                Project {String(project.index).padStart(2, "0")}
                            </span>
                            <div className="h-px w-8" style={{ background: project.color }} />
                            <span className="t-label text-fg-3">Selected Case Study</span>
                        </div>

                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                            <h1 ref={titleRef} className="t-h1 text-fg tracking-tight">
                                {project.title}
                            </h1>
                            <span
                                className="inline-flex items-center gap-1.5 t-label px-3 py-1 rounded-full border self-start md:self-center"
                                style={{
                                    color: project.color,
                                    borderColor: `${project.color}33`,
                                    background: `${project.color}08`,
                                }}
                            >
                                <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: project.color }} />
                                {project.status}
                            </span>
                        </div>

                        <p className="mt-5 text-lg text-fg-2 leading-relaxed max-w-3xl">
                            {project.description}
                        </p>
                    </div>

                    {/* Quick Stats Grid */}
                    <div ref={cardsRef} className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
                        {[
                            { label: "Year", value: details.year, icon: Calendar },
                            { label: "Role", value: details.role, icon: Cpu },
                            { label: "Client/Context", value: details.client, icon: Layers },
                            { label: "Core Tech", value: project.techStack[0], icon: Code2 }
                        ].map((stat, i) => (
                            <div
                                key={stat.label}
                                className="p-5 rounded-2xl border border-border bg-bg-card hover:shadow-md hover:border-border-2 transition-all duration-300 animate-stagger-item"
                                style={{ boxShadow: "var(--shadow-1)" }}
                            >
                                <div className="flex items-center gap-2 text-fg-3 mb-2">
                                    <stat.icon className="w-4 h-4" style={{ color: project.color }} />
                                    <span className="t-label text-xs">{stat.label}</span>
                                </div>
                                <p className="font-bold text-sm text-fg leading-tight truncate">
                                    {stat.value}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Detail Grid */}
                    <div ref={contentRef} className="grid lg:grid-cols-[2fr_1fr] gap-8 lg:gap-12 items-start">
                        {/* Left Column: Deep Dive */}
                        <div className="space-y-8 min-w-0">
                            {/* Detailed Description */}
                            <section className="bg-bg-card border border-border rounded-2xl p-6 sm:p-8 hover:shadow-md transition-shadow duration-300 animate-fade-in" style={{ boxShadow: "var(--shadow-1)" }}>
                                <h2 className="t-h2 text-fg mb-4 flex items-center gap-2">
                                    <Code2 className="w-5 h-5" style={{ color: project.color }} />
                                    Technical Overview
                                </h2>
                                <p className="text-fg-2 text-[15px] leading-relaxed whitespace-pre-line">
                                    {project.detailedDescription}
                                </p>
                            </section>

                            {/* Achievements & Highlights */}
                            <section className="bg-bg-card border border-border rounded-2xl p-6 sm:p-8 hover:shadow-md transition-shadow duration-300 animate-fade-in" style={{ boxShadow: "var(--shadow-1)" }}>
                                <h2 className="t-h2 text-fg mb-5 flex items-center gap-2">
                                    <CheckCircle2 className="w-5 h-5" style={{ color: project.color }} />
                                    Key Accomplishments
                                </h2>
                                <ul className="space-y-4">
                                    {project.highlights.map((highlight, index) => (
                                        <li key={index} className="flex items-start gap-3.5 group min-w-0">
                                            <div
                                                className="mt-1 shrink-0 flex items-center justify-center w-5 h-5 rounded-full text-[10px] font-bold transition-all duration-300"
                                                style={{
                                                    background: `${project.color}15`,
                                                    color: project.color
                                                }}
                                            >
                                                {index + 1}
                                            </div>
                                            <p className="text-fg-2 text-sm leading-relaxed flex-1 min-w-0">
                                                {highlight}
                                            </p>
                                        </li>
                                    ))}
                                </ul>
                            </section>

                            {/* Core Architecture */}
                            <section className="bg-bg-card border border-border rounded-2xl p-6 sm:p-8 hover:shadow-md transition-shadow duration-300 animate-fade-in" style={{ boxShadow: "var(--shadow-1)" }}>
                                <h2 className="t-h2 text-fg mb-4 flex items-center gap-2">
                                    <Cpu className="w-5 h-5" style={{ color: project.color }} />
                                    System Architecture
                                </h2>
                                <p className="text-fg-2 text-[15px] leading-relaxed">
                                    {details.architecture}
                                </p>
                            </section>
                        </div>

                        {/* Right Column: Sidebar info */}
                        <div className="space-y-8">
                            {/* Project Links */}
                            {project.links && project.links.length > 0 && (
                                <section className="bg-bg-card border border-border rounded-2xl p-6 hover:shadow-md transition-shadow duration-300 animate-fade-in" style={{ boxShadow: "var(--shadow-1)" }}>
                                    <h3 className="t-label text-fg-3 mb-4">Live Links</h3>
                                    <div className="flex flex-col gap-2.5">
                                        {project.links.map((link) => {
                                            const Icon = link.platform === "appstore" ? Apple : link.platform === "playstore" ? Play : Globe;
                                            return (
                                                <a
                                                    key={link.url}
                                                    href={link.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center justify-between gap-3 px-4 py-3 rounded-xl border border-border bg-bg hover:border-accent/30 hover:text-accent transition-all duration-200 group/link"
                                                >
                                                    <div className="flex items-center gap-2.5 min-w-0">
                                                        <Icon className="w-5 h-5 shrink-0" style={{ color: project.color }} />
                                                        <span className="text-sm font-semibold text-fg group-hover/link:text-accent transition-colors duration-200 truncate">
                                                            {link.label}
                                                        </span>
                                                    </div>
                                                    <ExternalLink className="w-4 h-4 text-fg-3 group-hover/link:text-accent transition-colors duration-200 shrink-0" />
                                                </a>
                                            );
                                        })}
                                    </div>
                                </section>
                            )}

                            {/* Tech Stack */}
                            <section className="bg-bg-card border border-border rounded-2xl p-6 hover:shadow-md transition-shadow duration-300 animate-fade-in" style={{ boxShadow: "var(--shadow-1)" }}>
                                <h3 className="t-label text-fg-3 mb-4">Technologies & Stack</h3>
                                <div className="flex flex-wrap gap-2">
                                    {project.techStack.map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-3 py-1.5 text-xs font-semibold rounded-xl border border-border bg-bg text-fg-2 cursor-default hover:border-accent hover:text-accent transition-colors duration-200"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </section>

                            {/* Engineering Challenges & Solutions */}
                            <section className="bg-bg-card border border-border rounded-2xl p-6 hover:shadow-md transition-shadow duration-300 animate-fade-in" style={{ boxShadow: "var(--shadow-1)" }}>
                                <h3 className="t-label text-fg-3 mb-4 flex items-center gap-2">
                                    <ShieldAlert className="w-4 h-4 text-amber-500" />
                                    Engineering Challenge
                                </h3>
                                <p className="text-sm text-fg-2 leading-relaxed mb-6">
                                    {details.challenge}
                                </p>

                                <div className="h-px bg-border mb-5" />

                                <h3 className="t-label text-fg-3 mb-4 flex items-center gap-2">
                                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                                    Applied Solution
                                </h3>
                                <p className="text-sm text-fg-2 leading-relaxed">
                                    {details.solution}
                                </p>
                            </section>
                        </div>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <Footer />
        </div>
    );
}
