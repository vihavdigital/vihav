"use client";
import React, { useState, useMemo } from "react";
import { PROJECTS } from "@/data/projects";
import ProjectGridCard from "./ProjectGridCard";
import { motion, AnimatePresence } from "framer-motion";

export default function CompletedProjectsGrid() {
    const [activeCategory, setActiveCategory] = useState("All");

    // Filter Logic
    const filteredProjects = useMemo(() => {
        // 1. Get all completed projects
        let projects = PROJECTS.filter(p =>
            p.status === "Completed" ||
            p.filterData?.possession === "Ready to Move"
        );

        // 2. Filter by Category
        if (activeCategory !== "All") {
            projects = projects.filter(p =>
                p.category?.toLowerCase() === activeCategory.toLowerCase()
            );
        }

        // 3. Custom Sort Order (Preserving the specific order requested earlier)
        const ORDER = [
            "Keystone 72",
            "Keystone Skyvillas",
            "Keystone Skymont",
            "Elite Square",
            "VTC",
            "VBS",
            "Skyone",
            "Supremus",
            "Wealth Square",
            "Excellus",
            "Ensign",
            "Keystone Mansion",
            "Keystone Mansion 2"
        ];

        return projects.sort((a, b) => {
            const indexA = ORDER.indexOf(a.title);
            const indexB = ORDER.indexOf(b.title);
            if (indexA !== -1 && indexB !== -1) return indexA - indexB;
            if (indexA !== -1) return -1;
            if (indexB !== -1) return 1;
            return 0;
        });
    }, [activeCategory]);

    const categories = ["All", "Residential", "Commercial"];

    return (
        <section className="bg-white dark:bg-neutral-950 pb-24 min-h-screen">
            <div className="container mx-auto px-6">

                {/* 1. Filter Bar */}
                <div className="flex justify-center mb-16">
                    <div className="inline-flex bg-neutral-100 dark:bg-neutral-900 p-1.5 rounded-full">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 ${activeCategory === cat
                                    ? "bg-white dark:bg-neutral-800 text-vihav-gold-500 shadow-md"
                                    : "text-neutral-500 hover:text-neutral-900 dark:hover:text-white"
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                {/* 2. Projects Grid - Masonry Layout */}
                <motion.div
                    layout
                    className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project, index) => (
                            <ProjectGridCard
                                key={project.id}
                                project={project}
                                index={index}
                            />
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* Empty State */}
                {filteredProjects.length === 0 && (
                    <div className="text-center py-20">
                        <p className="text-neutral-400 font-serif text-xl">
                            No projects found in this category.
                        </p>
                    </div>
                )}
            </div>
        </section>
    );
}
