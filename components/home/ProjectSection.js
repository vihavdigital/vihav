"use client";

import { motion, AnimatePresence } from "framer-motion";
import ProjectCard from "@/components/projects/ProjectCard";
import { Button } from "@/components/ui/Button";
import { ArrowRight, ChevronLeft, ChevronRight, Filter, ChevronDown } from "lucide-react";
import Link from "next/link";
import { useRef, useState, useEffect, Suspense } from "react";
import FilterDropdown from "@/components/ui/FilterDropdown";
import { useProjectFilters, FILTER_COMMERCIAL_TYPES } from "@/hooks/useProjectFilters";

// Internal Component with Filter Logic
function ProjectSectionContent({ projects }) {
    const {
        activeCategory,
        setActiveCategory,
        activeType,
        setActiveType,
        activePossession,
        setActivePossession,
        filteredProjects,
        FILTER_ALL_TYPES,
        FILTER_RESIDENTIAL_TYPES,
        FILTER_COMMERCIAL_TYPES,
        FILTER_POSSESSION,
        activeTransaction,
        setActiveTransaction,
        FILTER_TRANSACTION_OPTIONS
    } = useProjectFilters(projects);

    // Show ALL projects as requested
    const visibleProjects = filteredProjects;

    return (
        <section className="py-24 md:py-32 border-b border-border bg-background min-h-[80vh] transition-colors duration-500">
            {/* 1. Header Title Block (Inside Container) */}
            <div className="container mx-auto px-6">
                <div className="flex flex-col items-center mb-10 relative z-40">
                    <div className="w-full text-center">
                        <span className="text-gold-400 uppercase tracking-[0.25em] text-xs font-bold mb-4 block">Discover</span>
                        <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-2">Our Projects</h2>
                    </div>
                </div>
            </div>

            {/* 2. Sticky Filter Bar (Full Width, Outside Container) */}
            <div className="sticky top-[75px] md:top-[72px] z-40 bg-background/60 backdrop-blur-3xl py-4 mb-16 transition-all duration-500 w-full">
                <div className="container mx-auto px-6">
                    <div className="w-full flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6">
                        {/* Left: Category Tabs (Pill Switcher) */}
                        <div className="flex bg-secondary p-1 rounded-full border border-border overflow-x-auto max-w-full">
                            {["All", "Residential", "Commercial"].map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => { setActiveCategory(cat); setActiveType("All"); setActivePossession("All"); }}
                                    className="relative px-4 sm:px-6 md:px-8 py-2 rounded-full text-xs md:text-sm uppercase tracking-widest transition-all outline-none whitespace-nowrap"
                                >
                                    {activeCategory === cat && (
                                        <motion.div
                                            layoutId="activeCategory"
                                            className="absolute inset-0 bg-gold-400 rounded-full shadow-lg"
                                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                        />
                                    )}
                                    <span className={`relative z-10 transition-colors duration-200 ${activeCategory === cat ? "text-luxury-black font-bold" : "text-muted-foreground hover:text-foreground"
                                        }`}>
                                        {cat}
                                    </span>
                                </button>
                            ))}
                        </div>

                        {/* Right: Dropdown Filters */}
                        <div className="flex flex-row flex-wrap justify-center md:justify-end gap-4 w-full md:w-auto">

                            {/* Transaction Type Filter (Commercial Only) */}
                            {activeCategory === "Commercial" && (
                                <FilterDropdown
                                    label="Transaction"
                                    value={activeTransaction}
                                    options={FILTER_TRANSACTION_OPTIONS}
                                    onChange={setActiveTransaction}
                                    className="flex-1 min-w-[140px] md:w-48 md:flex-none md:min-w-0"
                                />
                            )}

                            <FilterDropdown
                                label="Property Type"
                                value={activeType}
                                options={
                                    activeCategory === "Residential" ? FILTER_RESIDENTIAL_TYPES :
                                        activeCategory === "Commercial" ? FILTER_COMMERCIAL_TYPES :
                                            FILTER_ALL_TYPES
                                }
                                onChange={setActiveType}
                                className="flex-1 min-w-[140px] md:w-48 md:flex-none md:min-w-0"
                            />

                            <FilterDropdown
                                label="Possession Status"
                                value={activePossession}
                                options={FILTER_POSSESSION}
                                onChange={setActivePossession}
                                className="flex-1 min-w-[140px] md:w-48 md:flex-none md:min-w-0"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* 3. Projects Grid (Re-open Container) */}
            <div className="container mx-auto px-6">
                <div className="min-h-[400px]">
                    {visibleProjects.length > 0 ? (
                        <motion.div
                            layout
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                        >
                            <AnimatePresence mode="popLayout">
                                {visibleProjects.map((project) => (
                                    <motion.div
                                        key={project.id}
                                        layout
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.9 }}
                                        transition={{ duration: 0.3 }}
                                        className="h-full"
                                    >
                                        <ProjectCard project={project} />
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                        </motion.div>
                    ) : (
                        <div className="w-full h-[300px] flex flex-col items-center justify-center text-center border border-border rounded-2xl bg-secondary/20">
                            <Filter className="w-12 h-12 text-muted-foreground mb-4" />
                            <h3 className="text-xl text-foreground font-serif mb-2">No Projects Found</h3>
                            <p className="text-muted-foreground">Try adjusting your filters to see more results.</p>
                            <button
                                onClick={() => { setActiveType("All"); setActivePossession("All"); }}
                                className="mt-6 text-gold-400 hover:text-foreground underline underline-offset-4"
                            >
                                Clear Filters
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}

// Exported Suspense Wrapper
export default function ProjectSection(props) {
    return (
        <Suspense fallback={<div className="py-24 text-center text-gold-400">Loading Collections...</div>}>
            <ProjectSectionContent {...props} />
        </Suspense>
    );
}
