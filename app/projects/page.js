"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ProjectCard from "@/components/projects/ProjectCard";
import { useState } from "react";
import { Button } from "@/components/ui/Button";

import { PROJECTS } from "@/data/projects";

import { motion, AnimatePresence } from "framer-motion";

export default function ProjectsPage() {
    const [filter, setFilter] = useState("All");

    const filteredProjects = filter === "All"
        ? PROJECTS
        : PROJECTS.filter(p => p.category === filter);

    return (
        <main className="min-h-screen bg-luxury-black text-white selection:bg-gold-500 selection:text-black">
            <Header />

            {/* Header Spacer */}
            <div className="h-24 bg-luxury-black" />

            {/* Mobile: Compact Title Section */}
            <section className="pt-10 pb-6 px-6 container mx-auto md:py-20">
                <div className="flex flex-col md:flex-row justify-between items-end">
                    <div className="mb-6 md:mb-0">
                        <span className="text-gold-400 text-xs md:text-sm uppercase tracking-widest block mb-2">Our Portfolio</span>
                        <h1 className="font-serif text-4xl md:text-6xl text-white leading-tight">Exclusive <br /> Collections</h1>
                    </div>
                </div>
            </section>

            {/* Sticky Filter Bar */}
            <div className="sticky top-[50px] md:top-[64px] z-40 bg-luxury-black/90 backdrop-blur-xl border-y border-white/5 py-4 mb-8 transition-all duration-300">
                <div className="w-full overflow-x-auto scrollbar-hide">
                    <div className="flex gap-2 px-6 md:justify-end md:px-0 min-w-max md:w-full md:max-w-7xl md:mx-auto">
                        {["All", "Residential", "Commercial"].map(type => (
                            <button
                                key={type}
                                onClick={() => setFilter(type)}
                                className={`px-6 py-3 rounded-full text-xs md:text-sm uppercase tracking-widest transition-all duration-300 whitespace-nowrap border ${filter === type
                                    ? "bg-gold-500 border-gold-500 text-black font-bold shadow-lg shadow-gold-500/20"
                                    : "border-white/10 text-gray-400 hover:border-white/30 hover:text-white bg-white/5"
                                    }`}
                            >
                                {type}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            <section className="pb-20 px-6 container mx-auto min-h-screen">
                <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project) => (
                            <motion.div
                                key={project.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                            >
                                <ProjectCard project={project} />
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </section>

            <Footer />
        </main>
    );
}
