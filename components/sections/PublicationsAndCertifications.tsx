"use client";
import React from "react";
import { useReveal } from "@/hooks/useScrollAnimation";
import { publications, certifications } from "@/data/resume";
import { cn } from "@/lib/utils";
import { BookOpen, Award, ExternalLink } from "lucide-react";

export function PublicationsAndCertifications() {
    const { ref: rH, visible: vH } = useReveal();
    const { ref: rC, visible: vC } = useReveal({ threshold: 0.08 });

    return (
        <section id="publications-certifications" className="section-y bg-bg">
            <div className="wrap">
                <div ref={rH} className={cn("reveal mb-10", vH && "in")}>
                    <div className="flex items-center gap-3 mb-4">
                        <span className="t-label text-accent">06</span>
                        <div className="h-px w-10 bg-accent" />
                        <span className="t-label text-fg-3">Credentials & Research</span>
                    </div>
                    <h2 className="t-h1 text-fg">Publications & Certifications</h2>
                </div>

                <div ref={rC} className={cn("reveal grid lg:grid-cols-[1.2fr_1fr] gap-8 lg:gap-12", vC && "in")}>
                    {/* Publications */}
                    <div className="space-y-6">
                        <h3 className="t-label text-fg-3 mb-4 flex items-center gap-2">
                            <BookOpen className="w-4 h-4 text-accent" />
                            Academic Publications
                        </h3>
                        {publications && publications.map((pub, i) => (
                            <div
                                key={i}
                                className="p-6 rounded-2xl border border-border bg-bg-card hover:border-border-2 hover:shadow-md transition-all duration-300 group"
                                style={{ boxShadow: "var(--shadow-1)" }}
                            >
                                <span className="text-xs text-fg-3 font-semibold block mb-2">
                                    {pub.publisher} · {pub.date}
                                </span>
                                <h4 className="font-bold text-lg text-fg group-hover:text-accent transition-colors duration-200 leading-snug mb-3">
                                    {pub.title}
                                </h4>
                                <p className="text-sm text-fg-2 leading-relaxed mb-5">
                                    {pub.description}
                                </p>
                                <a
                                    href={pub.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1.5 text-xs font-bold text-accent hover:text-accent-2 transition-colors duration-200"
                                >
                                    View publication <ExternalLink className="w-3.5 h-3.5" />
                                </a>
                            </div>
                        ))}
                    </div>

                    {/* Certifications */}
                    <div className="space-y-6">
                        <h3 className="t-label text-fg-3 mb-4 flex items-center gap-2">
                            <Award className="w-4 h-4 text-accent" />
                            Professional Certifications
                        </h3>
                        <div className="space-y-4">
                            {certifications && certifications.map((cert, i) => {
                                const CardContent = (
                                    <>
                                        <div className="w-10 h-10 rounded-xl bg-accent-t flex items-center justify-center shrink-0">
                                            <Award className="w-5 h-5 text-accent" />
                                        </div>
                                        <div className="min-w-0 flex-1">
                                            <h4 className="font-bold text-sm text-fg leading-tight truncate group-hover:text-accent transition-colors duration-200">
                                                {cert.name}
                                            </h4>
                                            <p className="text-xs text-fg-2 mt-0.5 truncate">
                                                {cert.issuer}
                                            </p>
                                        </div>
                                        <div className="shrink-0 text-xs font-extrabold px-2.5 py-1 bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-100 dark:border-emerald-900 text-emerald-600 dark:text-emerald-400 rounded-lg whitespace-nowrap">
                                            {cert.grade}
                                        </div>
                                    </>
                                );

                                if (cert.link) {
                                    return (
                                        <a
                                            key={i}
                                            href={cert.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-4 p-4 rounded-xl border border-border bg-bg-card hover:border-accent/40 transition-all duration-300 hover:shadow-sm group cursor-pointer"
                                        >
                                            {CardContent}
                                        </a>
                                    );
                                }

                                return (
                                    <div
                                        key={i}
                                        className="flex items-center gap-4 p-4 rounded-xl border border-border bg-bg-card"
                                    >
                                        {CardContent}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
