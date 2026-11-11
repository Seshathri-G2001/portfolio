"use client";
import { useReveal } from "@/hooks/useScrollAnimation";
import { summary, additionalWork, contact } from "@/data/resume";
import { cn } from "@/lib/utils";

export function About() {
    const { ref: rH, visible: vH } = useReveal();
    const { ref: rQ, visible: vQ } = useReveal({ threshold: 0.1 });
    const { ref: rC, visible: vC } = useReveal({ threshold: 0.1 });

    return (
        <section id="about" className="section-y bg-bg-2">
            <div className="wrap">
                <div ref={rH} className={cn("reveal mb-10", vH && "in")}>
                    <div className="flex items-center gap-3 mb-4">
                        <span className="t-label text-accent">01</span>
                        <div className="h-px w-10 bg-accent" />
                        <span className="t-label text-fg-3">About Me</span>
                    </div>
                    <h2 className="t-h1 text-fg max-w-2xl text-balance">
                        Shipping production software,{" "}
                        <span className="text-fg-2 font-normal italic">
                            leading teams, owning outcomes.
                        </span>
                    </h2>
                </div>

                <div ref={rQ} className={cn("reveal mb-10", vQ && "in")}>
                    <blockquote
                        className="relative pl-5 py-1"
                        style={{ borderLeft: "3px solid var(--accent)" }}
                    >
                        <p className="text-base sm:text-lg font-medium text-fg leading-relaxed">
                            &ldquo;{summary}&rdquo;
                        </p>
                    </blockquote>
                </div>

                <div
                    ref={rC}
                    className={cn(
                        "reveal grid lg:grid-cols-[1fr_300px] gap-8 lg:gap-14",
                        vC && "in"
                    )}
                >
                    <div className="space-y-4 text-[15px] text-fg-2 leading-relaxed min-w-0">
                        <p>
                            Based in <strong className="text-fg font-semibold">{contact.location}</strong>, I build
                            production web applications with PHP, Laravel, MySQL, Blade, and React.js.
                        </p>
                        <p>
                            My work spans Laravel backend systems, React.js admin dashboards, and WordPress/WooCommerce
                            platforms. I focus on MVC architecture, RESTful integration, AJAX interactions, and clean,
                            reusable code across the full development lifecycle.
                        </p>
                        <p>
                            At Webtrendz Technologies, I progressed from WordPress Developer to Full Stack Developer
                            and contributed to 15+ live production websites and applications.
                        </p>

                        <div className="pt-5 border-t border-border">
                            <p className="t-label text-fg-3 mb-4">Also Contributed To</p>
                            <ul className="space-y-3">
                                {additionalWork.map((item, i) => (
                                    <li key={i} className="flex gap-3 text-sm min-w-0">
                                        <span className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-accent" />
                                        <span className="text-fg-2">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <aside className="min-w-0">
                        <div className="rounded-2xl border border-border bg-bg-card overflow-hidden" style={{ boxShadow: "var(--shadow-1)" }} >
                            <div className="px-5 py-4 border-b border-border bg-bg-2">
                                <p className="t-label text-fg-3">Quick Facts</p>
                            </div>
                            <ul className="divide-y divide-border">
                                {[
                                    { label: "Role", val: "Full Stack Developer" },
                                    { label: "Company", val: "Webtrendz Technologies India Private Limited" },
                                    { label: "Duration", val: "June 2023 – Present" },
                                    { label: "Tenure", val: "3+ years" },
                                    { label: "Focus", val: "PHP, Laravel, React.js" },
                                    { label: "Location", val: contact.location },
                                    { label: "Projects", val: "15+ delivered" },
                                ].map(({ label, val }) => (
                                    <li key={label} className="flex items-start gap-3 px-5 py-3 min-w-0">
                                        <span className="t-label text-fg-3 w-20 shrink-0 pt-0.5">{label}</span>
                                        <span className="text-sm font-semibold text-fg min-w-0 break-words">{val}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </aside>
                </div>
            </div>
        </section>
    );
}
