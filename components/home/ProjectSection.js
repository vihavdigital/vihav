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

    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 50, scale: 0.95 },
        show: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                type: "spring",
                bounce: 0.3,
                duration: 0.8
            }
        }
    };

    return (
        <section className="py-24 md:py-32 border-b border-border bg-background min-h-[80vh] transition-colors duration-500 overflow-hidden">
            <div className="container mx-auto px-6">

                {/* Header & Controls Container */}
                <div className="flex flex-col items-center mb-12 gap-8 relative z-40">
                    {/* Centered Title */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="w-full text-center"
                    >
                        <span className="text-gold-400 uppercase tracking-[0.25em] text-xs font-bold mb-4 block">Discover</span>
                        <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-2">Our Collections</h2>
                    </motion.div>

                    {/* Filter Bar: Left=Tabs, Right=Dropdowns */}
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
                            {/* Type Dropdown (Show for All/Residential/Commercial appropriately) */}
                            {/* Logic: If All, maybe show generic Type? Or hide? Usually specifics depend on category.
                                If All is selected, we might hide Type filter or show Combined?
                                Let's keep existing logic: Only show Type dropdown if activeCategory is specific?
                                Or update Dropdowns to handle 'All'.
                                Current code only renders Type if Res or Com.
                                If I add "All", activeCategory will be "All", so neither Res nor Com block renders.
                                I'll wrap the logic to handle it or just leave it (so no Type filter on All).
                            */}
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

                            {/* Possession Dropdown (Always visible?) */}
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

                {/* Wrapper for Slider + Controls */}
                <div className="relative">
                    {/* Controls */}
                    <div className="flex justify-end gap-2 mb-6">
                        <div className="text-muted-foreground text-xs uppercase tracking-widest py-3 mr-auto flex items-center gap-4">
                            <span>Showing {filteredProjects.length} Projects</span>

                            {/* Pagination Indicators */}
                            <div className="hidden md:flex gap-2">
                                {Array.from({ length: Math.min(totalSlides, 10) }).map((_, idx) => (
                                    <div
                                        key={idx}
                                        className={`h-1 rounded-full transition-all duration-300 ${idx === currentIndex ? "w-8 bg-gold-400" : "w-1 bg-border"
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
                            className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-foreground hover:bg-gold-400 hover:text-luxury-black hover:border-gold-400 transition-all hover:scale-110 active:scale-95"
                        >
                            <ChevronLeft size={20} />
                        </button>
                        <button
                            onClick={() => scroll("right")}
                            className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-foreground hover:bg-gold-400 hover:text-luxury-black hover:border-gold-400 transition-all hover:scale-110 active:scale-95"
                        >
                            <ChevronRight size={20} />
                        </button>
                    </div>

                    {/* Horizontal Scroll Layout */}
                    <motion.div
                        ref={sliderRef}
                        onScroll={handleScroll}
                        className="flex overflow-x-auto gap-8 pb-12 -mx-6 px-6 md:px-0 md:mx-0 snap-x snap-mandatory scrollbar-hide min-h-[400px]"
                    >
                        {visibleProjects.length > 0 ? (
                            <>
                                {visibleProjects.map((project) => (
                                    <div
                                        key={project.id}
                                        className="flex-shrink-0 w-[85vw] md:w-[40vw] lg:w-[30vw] snap-center h-full"
                                    >
                                        <ProjectCard project={project} />
                                    </div>
                                ))}

                                {/* View All Card */}
                                {showViewAll && (
                                    <div
                                        className="flex-shrink-0 w-[85vw] md:w-[40vw] lg:w-[30vw] snap-center flex"
                                    >
                                        <Link href="/projects" className="w-full flex flex-col items-center justify-center bg-secondary border border-border rounded-xl hover:border-gold-400 group transition-all duration-300 hover:shadow-2xl hover:shadow-gold-400/10 hover:-translate-y-2 aspect-[4/3] md:aspect-auto md:h-full">
                                            <div className="w-20 h-20 rounded-full border border-gold-400/30 flex items-center justify-center mb-6 group-hover:bg-gold-400 group-hover:text-luxury-black transition-all duration-300 group-hover:scale-110">
                                                <ArrowRight size={32} className="text-gold-400 group-hover:text-luxury-black transition-colors" />
                                            </div>
                                            <h3 className="text-2xl font-serif text-foreground mb-2">View All Projects</h3>
                                            <p className="text-muted-foreground text-sm uppercase tracking-widest">Explore our full portfolio</p>
                                        </Link>
                                    </div>
                                )}
                            </>
                        ) : (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="w-full h-[300px] flex flex-col items-center justify-center text-center border border-border rounded-2xl bg-secondary/20"
                            >
                                <Filter className="w-12 h-12 text-muted-foreground mb-4" />
                                <h3 className="text-xl text-foreground font-serif mb-2">No Projects Found</h3>
                                <p className="text-muted-foreground">Try adjusting your filters to see more results.</p>
                                <button
                                    onClick={() => { setActiveType("All"); setActivePossession("All"); }}
                                    className="mt-6 text-gold-400 hover:text-foreground underline underline-offset-4"
                                >
                                    Clear Filters
                                </button>
                            </motion.div>
                        )}
                    </motion.div>
                </div>

            </div>
        </section>
    );
}
