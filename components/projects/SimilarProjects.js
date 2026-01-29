"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MapPin } from "lucide-react";
import { PROJECTS } from "@/data/projects";

export default function SimilarProjects({ currentProjectId, category = "Residential" }) {
    // Filter out current project and only show same category (optional, but good for relevance)
    const otherProjects = PROJECTS.filter(
        (p) => p.id !== currentProjectId && (p.category === category || !category)
    );

    // Randomly select 3 projects
    // Using a simple shuffle for client-side randomness
    const selectedProjects = otherProjects
        .sort(() => 0.5 - Math.random())
        .slice(0, 3);

    if (selectedProjects.length === 0) return null;

    return (
        <section className="py-20 md:py-32 bg-secondary/30 border-t border-border">
            <div className="container mx-auto px-6 md:px-12">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 md:mb-16">
                    <div>
                        <span className="text-gold-400 uppercase tracking-[0.25em] text-xs font-bold mb-4 block">
                            Discover More
                        </span>
                        <h2 className="font-serif text-3xl md:text-5xl text-foreground">
                            You Might Also Like
                        </h2>
                    </div>
                    <Link
                        href="/projects"
                        className="group hidden md:flex items-center gap-2 text-foreground uppercase tracking-widest text-xs font-bold hover:text-gold-400 transition-colors mt-6 md:mt-0"
                    >
                        View All Projects
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {selectedProjects.map((project) => (
                        <Link
                            key={project.id}
                            href={`/projects/${project.slug}`}
                            className="group block relative overflow-hidden rounded-lg bg-background border border-border/50 hover:border-gold-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-gold-400/5"
                        >
                            {/* Image Container */}
                            <div className="relative aspect-[4/3] overflow-hidden">
                                <Image
                                    src={project.desktopHeroImage || project.heroImage || "/images/project-images/hero-banner/desktop-banner/default.webp"}
                                    alt={project.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500" />

                                {/* Status Badge */}
                                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-luxury-black">
                                    {project.status || "Ongoing"}
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6 md:p-8">
                                <h3 className="font-serif text-2xl text-foreground mb-2 group-hover:text-gold-400 transition-colors">
                                    {project.title}
                                </h3>
                                <div className="flex items-center gap-2 text-muted-foreground text-xs uppercase tracking-wider mb-4">
                                    <MapPin size={14} className="text-gold-400" />
                                    {project.location}
                                </div>

                                <div className="flex items-center justify-between mt-6 pt-6 border-t border-border/50">
                                    <div className="flex flex-col">
                                        <span className="text-[10px] uppercase tracking-widest text-muted-foreground mb-1">Type</span>
                                        <span className="text-sm font-medium text-foreground">{project.category}</span>
                                    </div>

                                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-border group-hover:bg-gold-400 group-hover:border-gold-400 group-hover:text-white transition-all duration-300">
                                        <ArrowRight size={16} className="-rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                                    </span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* Mobile View All Button */}
                <div className="mt-12 text-center md:hidden">
                    <Link
                        href="/projects"
                        className="inline-flex items-center gap-2 text-foreground uppercase tracking-widest text-xs font-bold hover:text-gold-400 transition-colors"
                    >
                        View All Projects
                        <ArrowRight size={16} />
                    </Link>
                </div>
            </div>
        </section>
    );
}
