"use client";

import { motion, AnimatePresence } from "framer-motion";
import ProjectCard from "@/components/projects/ProjectCard";
import FilterDropdown from "@/components/ui/FilterDropdown";
import { useProjectFilters, FILTER_TYPES, FILTER_POSSESSION, FILTER_COMMERCIAL_TYPES } from "@/hooks/useProjectFilters";
import { PROJECTS } from "@/data/projects";

export default function OverseasProjects() {
    const {
        activeCategory,
        setActiveCategory,
        activeType,
        setActiveType,
        activePossession,
        setActivePossession,
        filteredProjects
    } = useProjectFilters(PROJECTS, "All");

    return (
        <section className="py-24 container mx-auto px-6 min-h-screen">
            <div className="text-center mb-12">
                <span className="text-gold-400 uppercase tracking-widest text-xs font-bold mb-2 block">Our Collection</span>
                <h2 className="text-4xl md:text-5xl font-serif mb-8">A Home for Every Dream</h2>
            </div>

            {/* Sticky Filter Bar */}
            <div className="sticky top-[50px] md:top-[64px] z-40 bg-neutral-950/90 backdrop-blur-xl border-y border-white/5 py-4 mb-12 transition-all duration-300">
                <div className="container mx-auto px-6 flex flex-col-reverse md:flex-row items-center gap-4 justify-between">

                    {/* Filters (Left on Desktop) */}
                    <div className="flex gap-4 w-full md:w-auto overflow-x-auto scrollbar-hide pb-2 md:pb-0">
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
                    <div className="flex bg-white/5 p-1 rounded-full border border-white/10 overflow-x-auto max-w-full">
                        {["All", "Residential", "Commercial"].map(type => (
                            <button
                                key={type}
                                onClick={() => { setActiveCategory(type); setActiveType("All"); setActivePossession("All"); }}
                                className={`px-6 py-3 rounded-full text-xs md:text-sm uppercase tracking-widest transition-all duration-300 whitespace-nowrap border ${activeCategory === type
                                    ? "bg-gold-500 border-gold-500 text-black font-bold shadow-lg shadow-gold-900/40"
                                    : "border-transparent text-gray-400 hover:text-white"
                                    }`}
                            >
                                {type}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

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
                            className="col-span-full py-20 text-center border rounded-2xl border-white/10 bg-white/5"
                        >
                            <h3 className="text-2xl text-white font-serif mb-2">No Projects Match</h3>
                            <p className="text-gray-400">Try adjusting your filters.</p>
                            <button
                                onClick={() => { setActiveCategory("All"); setActiveType("All"); setActivePossession("All"); }}
                                className="mt-6 text-gold-400 hover:text-white underline underline-offset-4"
                            >
                                Clear All Filters
                            </button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        </section>
    );
}
