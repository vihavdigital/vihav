"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ProjectCard from "@/components/projects/ProjectCard";
import { useState } from "react";
import { Button } from "@/components/ui/Button";

import { PROJECTS } from "@/data/projects";

export default function ProjectsPage() {
    const [filter, setFilter] = useState("All");

    const filteredProjects = filter === "All"
        ? PROJECTS
        : PROJECTS.filter(p => p.category === filter); // Note: Project category is "Residential" or "Commercial". Filter buttons should match this.

    return (
        <main className="min-h-screen bg-luxury-black text-white">
            <Header />

            {/* Header Spacer */}
            <div className="h-24 bg-luxury-black" />

            <section className="py-20 px-6 container mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16">
                    <div>
                        <span className="text-gold-400 text-sm uppercase tracking-widest block mb-2">Our Portfolio</span>
                        <h1 className="font-serif text-5xl md:text-6xl text-white">Exclusive <br /> Collections</h1>
                    </div>

                    <div className="flex space-x-2 mt-8 md:mt-0 overflow-x-auto pb-2 md:pb-0">
                        {["All", "Residential", "Commercial"].map(type => (
                            <button
                                key={type}
                                onClick={() => setFilter(type)}
                                className={`px-6 py-2 rounded-full border text-sm uppercase tracking-wider transition-colors whitespace-nowrap cursor-pointer ${filter === type
                                    ? "bg-gold-400 border-gold-400 text-white"
                                    : "border-white/20 text-gray-400 hover:border-white hover:text-white"
                                    }`}
                            >
                                {type}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map((project, idx) => (
                        <ProjectCard key={idx} project={project} />
                    ))}
                </div>
            </section>

            <Footer />
        </main>
    );
}
