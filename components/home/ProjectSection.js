"use client";

import { motion, AnimatePresence } from "framer-motion";
import ProjectCard from "@/components/projects/ProjectCard";
import { Button } from "@/components/ui/Button";
import { ArrowRight, ChevronLeft, ChevronRight, Filter, ChevronDown } from "lucide-react";
import Link from "next/link";
import { useRef, useState, useEffect } from "react";
import FilterDropdown from "@/components/ui/FilterDropdown";
import { useProjectFilters, FILTER_COMMERCIAL_TYPES } from "@/hooks/useProjectFilters";

export default function ProjectSection({ projects }) {
    const sliderRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);
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
    } = useProjectFilters(projects);

    // Limit projects to 10
    const visibleProjects = filteredProjects.slice(0, 10);
    const showViewAll = filteredProjects.length > 10;
    const totalSlides = showViewAll ? visibleProjects.length + 1 : visibleProjects.length;

    // Reset currentIndex when filters change
    useEffect(() => {
        setCurrentIndex(0);
        if (sliderRef.current) {
            sliderRef.current.scrollTo({ left: 0, behavior: "smooth" });
        }
    }, [activeCategory, activeType, activePossession, filteredProjects.length]);


    // Scroll Handler for Pagination
    const handleScroll = () => {
        if (!sliderRef.current) return;
        const { scrollLeft, clientWidth } = sliderRef.current;
        // Get the width of the first child element, or fallback to clientWidth if no children
        // This assumes all children have roughly the same width and snap points are aligned.
        const itemWidth = sliderRef.current.children[0]?.getBoundingClientRect().width || clientWidth;

        // Calculate the current index based on scroll position and item width
        // Math.round is used because snap-x ensures we're usually close to a snap point
        const newIndex = Math.round(scrollLeft / itemWidth);
        setCurrentIndex(newIndex);
    };

    // Button Scroll Handlers
    const scroll = (direction) => {
        if (sliderRef.current) {
            const cardWidth = sliderRef.current.children[0]?.offsetWidth || 400;
            const gap = 32;
            const stride = cardWidth + gap;
            const scrollAmount = direction === "left" ? -stride : stride;
            sliderRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
        }
    };

    return (
        <section className="py-24 md:py-32 border-b border-white/5 bg-luxury-black min-h-[80vh]">
            <div className="container mx-auto px-6">

                {/* Header & Controls Container */}
                <div className="flex flex-col xl:flex-row justify-between items-end mb-12 gap-8 relative z-40">
                    {/* Left: Title */}
                    <div className="w-full xl:w-auto">
                        <span className="text-gold-400 uppercase tracking-[0.25em] text-xs font-bold mb-4 block">Discover</span>
                        <h2 className="font-serif text-4xl md:text-5xl text-white mb-2">Our Collections</h2>
                    </div>

                    {/* Right: Controls (Filters + Tabs) */}
                    <div className="flex flex-col-reverse md:flex-row items-end gap-4 w-full xl:w-auto">

                        {/* Dropdowns */}
                        <div className="flex gap-4">
                            {/* Type Dropdown (Residential Only) */}
                            {activeCategory === "Residential" && (
                                <FilterDropdown
                                    label="Unit Type"
                                    value={activeType}
                                    options={FILTER_TYPES}
                                    onChange={setActiveType}
                                />
                            )}
                            {activeCategory === "Commercial" && (
                                <FilterDropdown
                                    label="Usage"
                                    value={activeType}
                                    options={FILTER_COMMERCIAL_TYPES}
                                    onChange={setActiveType}
                                />
                            )}

                            {/* Possession Dropdown */}
                            <FilterDropdown
                                label="Possession Status"
                                value={activePossession}
                                options={FILTER_POSSESSION}
                                onChange={setActivePossession}
                            />
                        </div>

                        {/* Category Tabs - Wrapped with Label for Alignment */}
                        <div>
                            <span className="text-[10px] uppercase tracking-widest text-gray-500 mb-2 block">Category</span>
                            <div className="flex bg-white/5 p-1 rounded-full border border-white/10">
                                {["Residential", "Commercial"].map((cat) => (
                                    <button
                                        key={cat}
                                        onClick={() => { setActiveCategory(cat); setActiveType("All"); setActivePossession("All"); }}
                                        className={`px-8 py-3 rounded-full text-sm uppercase tracking-widest transition-all ${activeCategory === cat
                                            ? "bg-gold-400 text-black font-bold shadow-lg"
                                            : "text-gray-400 hover:text-white"
                                            }`}
                                    >
                                        {cat}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Wrapper for Slider + Controls */}
                <div className="relative">
                    {/* Controls */}
                    <div className="flex justify-end gap-2 mb-6">
                        <div className="text-gray-500 text-xs uppercase tracking-widest py-3 mr-auto flex items-center gap-4">
                            <span>Showing {filteredProjects.length} Projects</span>

                            {/* Pagination Indicators */}
                            <div className="hidden md:flex gap-2">
                                {Array.from({ length: Math.min(totalSlides, 10) }).map((_, idx) => ( // Cap dots if too many? No, slider logic usually shows all.
                                    <div
                                        key={idx}
                                        className={`h-1 rounded-full transition-all duration-300 ${idx === currentIndex ? "w-8 bg-gold-400" : "w-1 bg-white/20"
                                            }`}
                                    />
                                ))}
                            </div>
                            {/* Mobile Pagination Text */}
                            <span className="md:hidden text-gold-400 font-bold">
                                {currentIndex + 1} / {totalSlides}
                            </span>
                        </div>
                        <button
                            onClick={() => scroll("left")}
                            className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-gold-400 hover:text-black hover:border-gold-400 transition-all"
                        >
                            <ChevronLeft size={20} />
                        </button>
                        <button
                            onClick={() => scroll("right")}
                            className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-gold-400 hover:text-black hover:border-gold-400 transition-all"
                        >
                            <ChevronRight size={20} />
                        </button>
                    </div>

                    {/* Horizontal Scroll Layout */}
                    <div
                        ref={sliderRef}
                        onScroll={handleScroll}
                        className="flex overflow-x-auto gap-8 pb-12 -mx-6 px-6 md:px-0 md:mx-0 snap-x snap-mandatory scrollbar-hide min-h-[400px]"
                    >
                        <AnimatePresence mode="popLayout">
                            {visibleProjects.length > 0 ? (
                                <>
                                    {visibleProjects.map((project) => (
                                        <motion.div
                                            key={project.id}
                                            layout
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0, scale: 0.9 }}
                                            transition={{ duration: 0.4 }}
                                            className="flex-shrink-0 w-[85vw] md:w-[40vw] lg:w-[30vw] snap-center"
                                        >
                                            <ProjectCard project={project} />
                                        </motion.div>
                                    ))}

                                    {/* View All Card */}
                                    {showViewAll && (
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            className="flex-shrink-0 w-[85vw] md:w-[40vw] lg:w-[30vw] snap-center flex"
                                        >
                                            <Link href="/projects" className="w-full flex flex-col items-center justify-center bg-white/5 border border-white/10 rounded-xl hover:border-gold-400 group transition-all">
                                                <div className="w-20 h-20 rounded-full border border-gold-400/30 flex items-center justify-center mb-6 group-hover:bg-gold-400 group-hover:text-black transition-all">
                                                    <ArrowRight size={32} className="text-gold-400 group-hover:text-black" />
                                                </div>
                                                <h3 className="text-2xl font-serif text-white mb-2">View All Projects</h3>
                                                <p className="text-gray-400 text-sm uppercase tracking-widest">Explore our full portfolio</p>
                                            </Link>
                                        </motion.div>
                                    )}
                                </>
                            ) : (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="w-full h-[300px] flex flex-col items-center justify-center text-center border border-white/10 rounded-2xl bg-white/5"
                                >
                                    <Filter className="w-12 h-12 text-gray-600 mb-4" />
                                    <h3 className="text-xl text-white font-serif mb-2">No Projects Found</h3>
                                    <p className="text-gray-400">Try adjusting your filters to see more results.</p>
                                    <button
                                        onClick={() => { setActiveType("All"); setActivePossession("All"); }}
                                        className="mt-6 text-gold-400 hover:text-white underline underline-offset-4"
                                    >
                                        Clear Filters
                                    </button>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>

            </div>
        </section>
    );
}
