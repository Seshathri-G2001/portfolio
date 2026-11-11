"use client";
import { useEffect, useRef } from "react";
import { contact, stats } from "@/data/resume";
import { cn } from "@/lib/utils";
import gsap from "gsap";

const STACK = [
    "PHP", "JavaScript", "HTML5", "CSS3", "Laravel", "React.js", "jQuery",
    "Blade", "WordPress", "WooCommerce", "MySQL", "REST API", "AJAX", "Git",
    "GitHub", "Bitbucket", "MVC", "CRUD", "Responsive Web Development"
];

function Marquee() {
    const doubled = [...STACK, ...STACK];
    return (
        <div className="mt-12 overflow-hidden bg-bg-2 border-y border-border py-3.5">
            <div className="marquee-track" aria-hidden>
                {doubled.map((s, i) => (
                    <span key={i} className="flex items-center gap-4 px-4">
                        <span className="whitespace-nowrap font-semibold text-sm text-fg-2">{s}</span>
                        <span className="text-accent text-xs shrink-0">◆</span>
                    </span>
                ))}
            </div>
        </div>
    );
}

export function Hero() {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // GSAP entry transitions
        const ctx = gsap.context(() => {
            gsap.fromTo(
                ".gsap-reveal",
                { opacity: 0, y: 24 },
                { opacity: 1, y: 0, duration: 0.8, stagger: 0.08, ease: "power3.out" }
            );

            gsap.fromTo(
                ".gsap-scale-reveal",
                { opacity: 0, scale: 0.95 },
                { opacity: 1, scale: 1, duration: 0.9, delay: 0.15, ease: "back.out(1.2)" }
            );

            // Parallax movement on background glow based on mouse movements
            const handleMouseMove = (e: MouseEvent) => {
                const { clientX, clientY } = e;
                const xVal = (clientX / window.innerWidth - 0.5) * 45;
                const yVal = (clientY / window.innerHeight - 0.5) * 45;

                gsap.to(".hero-glow-bg", {
                    x: xVal,
                    y: yVal,
                    duration: 1,
                    ease: "power2.out"
                });
            };

            window.addEventListener("mousemove", handleMouseMove);
            return () => window.removeEventListener("mousemove", handleMouseMove);
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            aria-label="Introduction"
            className="relative min-h-screen flex flex-col justify-center pb-0 overflow-x-hidden"
        >
            {/* Parallax background glow */}
            <div
                aria-hidden
                className="pointer-events-none absolute top-0 right-0 w-[min(700px,100vw)] h-[500px] hero-glow-bg"
                style={{
                    background:
                        "radial-gradient(ellipse at top right, rgba(79,70,229,0.08) 0%, transparent 65%)",
                }}
            />

            <div className="wrap pt-28 pb-0">
                <div className="grid lg:grid-cols-[1fr_400px] gap-10 lg:gap-16 items-center">
                    <div className="min-w-0">
                        <div
                            className="gsap-reveal inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-bg-card mb-7 shadow-sm max-w-full"
                        >
                            <span className="relative flex h-2 w-2 shrink-0">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                            </span>
                            <span className="t-label text-fg-2 truncate">Available for opportunities</span>
                        </div>

                        <h1 className="overflow-hidden gsap-reveal leading-none">
                            <span className="t-display block text-fg">{contact.firstName}</span>
                            <span className="t-display block" style={{ color: "var(--accent)" }}>
                                {contact.lastName}
                            </span>
                        </h1>

                        <p className="gsap-reveal mt-5 text-lg sm:text-xl font-bold text-fg-2 leading-snug">
                            {contact.title}
                            <span className="block text-sm font-normal text-fg-3 mt-1">
                                PHP · Laravel · React.js · 3+ Years
                            </span>
                        </p>

                        <p className="gsap-reveal mt-5 text-[15px] text-fg-2 leading-relaxed max-w-lg">
                            I build production web applications, admin dashboards, and e-commerce platforms with
                            PHP, Laravel, React.js, WordPress, and WooCommerce.
                        </p>

                        <div className="gsap-reveal mt-7 flex flex-wrap items-center gap-3">
                            <a
                                href="#projects"
                                onClick={e => {
                                    e.preventDefault();
                                    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
                                }}
                                className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent hover:bg-accent-2 text-white font-semibold text-sm rounded-xl transition-colors duration-200 shadow-sm"
                            >
                                See My Work <span aria-hidden>→</span>
                            </a>

                            <a
                                href="#contact"
                                onClick={e => {
                                    e.preventDefault();
                                    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                                }}
                                className="inline-flex items-center gap-2 px-5 py-2.5 border border-border hover:border-accent bg-bg-card text-fg-2 hover:text-accent font-semibold text-sm rounded-xl transition-all duration-200"
                            >
                                Get in Touch
                            </a>
                        </div>

                        <p className="gsap-reveal mt-5 text-xs text-fg-3 font-medium">
                            {contact.location} · {contact.phone}
                        </p>
                    </div>

                    <div className="w-full min-w-0 gsap-scale-reveal">
                        <div className="rounded-2xl border border-border bg-bg-card overflow-hidden w-full" style={{ boxShadow: "var(--shadow-4)" }} >
                            <div className="px-5 py-5" style={{ background: "var(--accent)" }}>
                                <div className="flex items-center justify-between mb-1 gap-2 flex-wrap">
                                    <span className="t-label text-indigo-200">Current Position</span>
                                    <span className="flex items-center gap-1.5 text-xs font-bold text-white bg-white/20 px-2 py-0.5 rounded-full shrink-0">
                                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                                        Active
                                    </span>
                                </div>
                                <p className="font-bold text-white text-base sm:text-lg leading-tight">
                                    {contact.title}
                                </p>
                                <p className="text-indigo-200 text-sm mt-0.5">
                                    Webtrendz Technologies · June 2023 - Present
                                </p>
                            </div>

                            <div className="grid grid-cols-2 divide-x divide-y divide-border">
                                {stats.map(({ value, label }) => (
                                    <div key={label} className="px-4 sm:px-5 py-4 sm:py-5 hover:bg-bg-2 transition-colors duration-200" >
                                        <p className="font-extrabold text-2xl sm:text-3xl text-accent leading-none">
                                            {value}
                                        </p>
                                        <p className="text-xs font-semibold text-fg-2 mt-1.5 leading-tight">{label}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="px-5 py-4 border-t border-border bg-bg-2">
                                <p className="t-label text-fg-3 mb-2.5">Primary Core Stack</p>
                                <div className="flex flex-wrap gap-1.5">
                                    {[ "PHP", "Laravel", "React.js", "WordPress" ].map(t => (
                                        <span
                                            key={t}
                                            className="px-2 py-0.5 text-xs font-semibold rounded-md bg-accent-t text-accent border border-accent/20"
                                        >
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Marquee />

            <div className="gsap-reveal flex justify-center mt-10 mb-4">
                <div className="flex flex-col items-center gap-1.5">
                    <div className="w-5 h-8 rounded-full border-2 border-border flex items-start justify-center p-1">
                        <div className="w-1 h-2 rounded-full bg-fg-3 animate-bounce" />
                    </div>
                </div>
            </div>
        </section>
    );
}
