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
            <div className="flex flex-col items-center mb-12 gap-8 relative z-40">
                <div className="text-center w-full">
                    <span className="text-gold-400 uppercase tracking-[0.25em] text-xs font-bold mb-4 block">Our Collection</span>
                    <h2 className="text-4xl md:text-5xl text-foreground font-serif mb-8">A Home for Every Dream</h2>
                </div>

                {/* Filter Bar: Matching ProjectSection Design */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="w-full flex flex-col md:flex-row justify-between items-center gap-6"
                >
                    {/* Left: Category Tabs (Pill Switcher) */}
                    <div className="flex bg-secondary p-1 rounded-full border border-border">
                        {["All", "Residential", "Commercial"].map((cat) => (
                            <button
                                key={cat}
                                onClick={() => { setActiveCategory(cat); setActiveType("All"); setActivePossession("All"); }}
                                className="relative px-6 md:px-8 py-2 rounded-full text-sm uppercase tracking-widest transition-all outline-none"
                            >
                                {activeCategory === cat && (
                                    <motion.div
                                        layoutId="activeCategoryOverseas"
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
                        {activeCategory === "Residential" && (
                            <FilterDropdown
                                label="Unit Type"
                                value={activeType}
                                options={FILTER_TYPES}
                                onChange={setActiveType}
                                className="flex-1 min-w-[140px] md:w-48 md:flex-none md:min-w-0"
                            />
                        )}
                        {activeCategory === "Commercial" && (
                            <FilterDropdown
                                label="Usage"
                                value={activeType}
                                options={FILTER_COMMERCIAL_TYPES}
                                onChange={setActiveType}
                                className="flex-1 min-w-[140px] md:w-48 md:flex-none md:min-w-0"
                            />
                        )}

                        <FilterDropdown
                            label="Possession Status"
                            value={activePossession}
                            options={FILTER_POSSESSION}
                            onChange={setActivePossession}
                            className="flex-1 min-w-[140px] md:w-48 md:flex-none md:min-w-0"
                        />
                    </div>
                </motion.div>
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
                            className="col-span-full py-20 text-center border rounded-2xl border-border bg-secondary/50"
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
    );
}
