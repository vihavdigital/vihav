"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ProjectCard from "@/components/projects/ProjectCard";
import { useState } from "react";
import { Button } from "@/components/ui/Button";

import { PROJECTS } from "@/data/projects";

import { motion, AnimatePresence } from "framer-motion";
import FilterDropdown from "@/components/ui/FilterDropdown";
import { useProjectFilters, FILTER_TYPES, FILTER_POSSESSION, FILTER_COMMERCIAL_TYPES } from "@/hooks/useProjectFilters";

export default function ProjectsPage() {
    const {
        activeCategory,
        setActiveCategory,
        activeType,
        setActiveType,
        activePossession,
        setActivePossession,
        filteredProjects,
        FILTER_TYPES,
        FILTER_POSSESSION
    } = useProjectFilters(PROJECTS, "All");

    return (
        <main className="min-h-screen bg-background text-foreground selection:bg-gold-500 selection:text-black transition-colors duration-500">
            <Header />

            {/* Header Spacer */}
            <div className="h-24 bg-background" />

            {/* Mobile: Compact Title Section */}
            <section className="pt-10 pb-6 px-6 container mx-auto md:py-20">
                <div className="flex flex-col md:flex-row justify-between items-end">
                    <div className="mb-6 md:mb-0">
                        <span className="text-gold-400 text-xs md:text-sm uppercase tracking-widest block mb-2">Our Portfolio</span>
                        <h1 className="font-serif text-4xl md:text-6xl text-foreground leading-tight">Exclusive <br /> Collections</h1>
                    </div>
                </div>
            </section>

            {/* Sticky Filter Bar */}
            <div className="sticky top-[50px] md:top-[64px] z-40 bg-background/90 backdrop-blur-xl border-y border-border py-4 mb-8 transition-all duration-300">
                <div className="container mx-auto px-6 flex flex-col-reverse md:flex-row items-center gap-4 justify-between">

                    {/* Filters (Left on Desktop) */}
                    <div className="flex flex-wrap gap-4 w-full md:w-auto">
                        {/* Type Dropdown */}
                        {(activeCategory === "Residential" || activeCategory === "All") && (
                            <FilterDropdown
                                label="Unit Type"
                                value={activeType}
                                options={FILTER_TYPES}
                                onChange={setActiveType}
                                className="min-w-[180px]"
                            />
                        )}
                        {activeCategory === "Commercial" && (
                            <FilterDropdown
                                label="Usage"
                                value={activeType}
                                options={FILTER_COMMERCIAL_TYPES}
                                onChange={setActiveType}
                                className="min-w-[180px]"
                            />
                        )}
                        <FilterDropdown
                            label="Possession"
                            value={activePossession}
                            options={FILTER_POSSESSION}
                            onChange={setActivePossession}
                            className="min-w-[180px]"
                        />
                    </div>

                    {/* Category Tabs (Right on Desktop) */}
                    <div className="flex bg-secondary p-1 rounded-full border border-border relative overflow-x-auto max-w-full">
                        {["All", "Residential", "Commercial"].map(type => (
                            <button
                                key={type}
                                onClick={() => { setActiveCategory(type); setActiveType("All"); setActivePossession("All"); }}
                                className="relative px-6 py-2 rounded-full text-xs md:text-sm uppercase tracking-widest transition-all outline-none whitespace-nowrap"
                            >
                                {activeCategory === type && (
                                    <motion.div
                                        layoutId="activeCategoryProjects"
                                        className="absolute inset-0 bg-gold-400 rounded-full shadow-lg"
                                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                    />
                                )}
                                <span className={`relative z-10 transition-colors duration-200 ${activeCategory === type ? "text-luxury-black font-bold" : "text-muted-foreground hover:text-foreground"
                                    }`}>
                                    {type}
                                </span>
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            <section className="pb-20 px-6 container mx-auto min-h-screen">
                <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.length > 0 ? (
                            filteredProjects.map((project) => (
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
                            ))
                        ) : (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="col-span-full py-20 text-center border rounded-2xl border-border bg-secondary"
                            >
                                <h3 className="text-2xl text-foreground font-serif mb-2">No Projects Match</h3>
                                <p className="text-muted-foreground">Try adjusting your filters.</p>
                                <button
                                    onClick={() => { setActiveCategory("All"); setActiveType("All"); setActivePossession("All"); }}
                                    className="mt-6 text-gold-400 hover:text-foreground underline underline-offset-4"
                                >
                                    Clear All Filters
                                </button>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>
            </section>

            <Footer />
        </main>
    );
}
