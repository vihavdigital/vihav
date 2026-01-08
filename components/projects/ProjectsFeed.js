"use client";

import ProjectCard from "@/components/projects/ProjectCard";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FilterDropdown from "@/components/ui/FilterDropdown";
import { useProjectFilters, FILTER_TYPES, FILTER_POSSESSION, FILTER_COMMERCIAL_TYPES } from "@/hooks/useProjectFilters";
import { Filter, X } from "lucide-react";
import { PROJECTS } from "@/data/projects";

export default function ProjectsFeed() {
    const {
        activeCategory,
        setActiveCategory,
        activeType,
        setActiveType,
        activePossession,
        setActivePossession,
        filteredProjects
    } = useProjectFilters(PROJECTS, "All");

    const [showFilters, setShowFilters] = useState(false);

    return (
        <>
            {/* Sticky Filter Bar */}
            <div className="sticky top-[70px] z-40 bg-background/95 backdrop-blur-xl border-y border-border py-4 mb-12 transition-all duration-300">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">

                        {/* Mobile Top Row: Tabs (+ Toggle) */}
                        <div className="flex items-center justify-between gap-4 w-full md:w-auto">
                            {/* Category Tabs */}
                            <div className="flex bg-secondary p-1 rounded-full border border-border relative overflow-x-auto scrollbar-hide w-full md:w-auto">
                                {["All", "Residential", "Commercial"].map(type => (
                                    <button
                                        key={type}
                                        onClick={() => { setActiveCategory(type); setActiveType("All"); setActivePossession("All"); }}
                                        className="relative flex-1 md:flex-none px-4 md:px-6 py-2 rounded-full text-[10px] md:text-sm uppercase tracking-widest transition-all outline-none whitespace-nowrap min-w-fit"
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

                            {/* Mobile Filter Toggle Button */}
                            <button
                                onClick={() => setShowFilters(!showFilters)}
                                className={`md:hidden p-2.5 rounded-full border transition-colors ${showFilters ? 'bg-gold-400 border-gold-400 text-luxury-black' : 'bg-secondary border-border text-muted-foreground'}`}
                            >
                                {showFilters ? <X size={20} /> : <Filter size={20} />}
                            </button>
                        </div>

                        {/* Filters Container (Collapsible on Mobile) */}
                        <div className={`${showFilters ? 'flex' : 'hidden'} md:flex flex-row flex-wrap gap-2 w-full md:w-auto border-t md:border-0 border-border pt-4 md:pt-0`}>
                            {/* Type Dropdown */}
                            {(activeCategory === "Residential" || activeCategory === "All") && (
                                <FilterDropdown
                                    label="Unit Type"
                                    value={activeType}
                                    options={FILTER_TYPES}
                                    onChange={setActiveType}
                                    className="flex-1 min-w-[130px] md:min-w-[160px] md:w-auto"
                                />
                            )}
                            {activeCategory === "Commercial" && (
                                <FilterDropdown
                                    label="Usage"
                                    value={activeType}
                                    options={FILTER_COMMERCIAL_TYPES}
                                    onChange={setActiveType}
                                    className="flex-1 min-w-[130px] md:min-w-[160px] md:w-auto"
                                />
                            )}
                            <FilterDropdown
                                label="Possession"
                                value={activePossession}
                                options={FILTER_POSSESSION}
                                onChange={setActivePossession}
                                className="flex-1 min-w-[130px] md:min-w-[160px] md:w-auto"
                            />
                        </div>

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
        </>
    );
}
