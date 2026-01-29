"use client";

import ProjectCard from "@/components/projects/ProjectCard";
import { useState, useRef, useEffect, Suspense } from "react";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import FilterDropdown from "@/components/ui/FilterDropdown";
import { useProjectFilters } from "@/hooks/useProjectFilters";
import { Filter, X } from "lucide-react";
import { PROJECTS } from "@/data/projects";
import { Button } from "@/components/ui/Button";

export default function ProjectsFeed() {
    const sectionRef = useRef(null);
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
        FILTER_TRANSACTION_OPTIONS,
        clearFilters,
        resetAll,
        applyFilters
    } = useProjectFilters(PROJECTS, "All");

    const [showFilters, setShowFilters] = useState(false);

    // Mobile & Desktop Floating Toast Logic
    const { scrollY } = useScroll();
    const [isInCardsView, setIsInCardsView] = useState(false);
    const cardsRef = useRef(null);

    useEffect(() => {
        return scrollY.on("change", () => {
            // Check if we are in the cards section
            if (cardsRef.current) {
                const rect = cardsRef.current.getBoundingClientRect();
                const windowHeight = window.innerHeight;
                // Visible if top is entering view or bottom hasn't left view completely
                const isVisible = rect.top < windowHeight - 100 && rect.bottom > 100;
                setIsInCardsView(isVisible);
            }
        });
    }, [scrollY]);

    // Scroll to top of grid on filter apply (optional)
    const handleApplyFilters = () => {
        setShowFilters(false);
        if (sectionRef.current) {
            const y = sectionRef.current.getBoundingClientRect().top + window.scrollY - 100;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    };

    return (
        <section ref={sectionRef} className="pb-20 min-h-screen">
            {/* Sticky Filter Bar */}
            <div className={`sticky top-[58px] md:top-[72px] z-40 transition-all duration-300 w-full mb-12 ${showFilters ? 'bg-background shadow-xl pb-4' : 'bg-background/95 backdrop-blur-xl py-4 border-y border-border'}`}>
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">

                        {/* Top Row: Tabs + Mobile Toggle */}
                        <div className="flex items-center justify-between gap-4 w-full md:w-auto">
                            {/* Category Tabs */}
                            <div className="flex bg-secondary p-1 rounded-full border border-border relative overflow-x-auto scrollbar-hide max-w-[calc(100%-50px)] md:max-w-none">
                                {["All", "Residential", "Commercial"].map(type => (
                                    <button
                                        key={type}
                                        onClick={() => applyFilters({ activeCategory: type, activeType: 'All', activePossession: 'All' })}
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
                                className={`md:hidden flex items-center justify-center w-10 h-10 rounded-full border transition-colors ${showFilters ? 'bg-luxury-black text-gold-400 border-luxury-black' : 'bg-secondary border-border text-muted-foreground'}`}
                            >
                                {showFilters ? <X size={18} /> : <Filter size={18} />}
                            </button>
                        </div>

                        {/* Desktop Filters (Hidden on Mobile) */}
                        <div className="hidden md:flex md:flex-row md:gap-4 w-full md:w-auto">
                            {/* Transaction Type Filter (Commercial Only) */}
                            {activeCategory === "Commercial" && (
                                <FilterDropdown
                                    label="Transaction"
                                    value={activeTransaction}
                                    options={FILTER_TRANSACTION_OPTIONS}
                                    onChange={setActiveTransaction}
                                    className="w-full md:w-40"
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
                                className="flex-1 min-w-[130px] md:min-w-[160px] md:w-auto"
                            />
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

            {/* Floating Clear Filter Toast (Desktop & Mobile) */}
            <AnimatePresence>
                {!showFilters && isInCardsView && (activeType !== "All" || activePossession !== "All" || (activeCategory === "Commercial" && activeTransaction !== "Buy")) && (
                    <motion.div
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 100, opacity: 0 }}
                        className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50"
                    >
                        <button
                            onClick={clearFilters}
                            className="flex items-center gap-2 px-5 py-3 bg-luxury-black text-gold-400 rounded-full shadow-[0_10px_40px_-10px_rgba(0,0,0,0.8)] border border-gold-400/30 backdrop-blur-md hover:bg-luxury-black/90 transition-colors"
                        >
                            <span className="text-xs font-bold uppercase tracking-widest">Clear Filters</span>
                            <div className="w-px h-3 bg-gold-400/30 mx-1" />
                            <X size={14} />
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Mobile Filter Popup (Modal) */}
            <AnimatePresence>
                {showFilters && (
                    <div className="fixed inset-0 z-[100] md:hidden">
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 bg-black/60 backdrop-blur-md"
                            onClick={() => setShowFilters(false)}
                        />

                        {/* Slide-up Sheet */}
                        <motion.div
                            initial={{ y: "100%" }}
                            animate={{ y: 0 }}
                            exit={{ y: "100%" }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            className="absolute bottom-0 left-0 right-0 max-h-[85vh] bg-background rounded-t-3xl shadow-[0_-10px_40px_rgba(0,0,0,0.3)] flex flex-col border-t border-white/10"
                        >
                            {/* Header */}
                            <div className="flex items-center justify-between px-6 py-5 border-b border-border bg-background/50 backdrop-blur-md rounded-t-3xl sticky top-0 z-10">
                                <h3 className="text-xl font-serif text-foreground">Refine</h3>
                                <div className="flex items-center gap-4">
                                    <button
                                        onClick={clearFilters}
                                        className="text-[10px] uppercase tracking-widest text-muted-foreground hover:text-gold-400 font-medium transition-colors"
                                    >
                                        Clear All
                                    </button>
                                    <button
                                        onClick={() => setShowFilters(false)}
                                        className="p-2 -mr-2 rounded-full hover:bg-secondary text-foreground transition-colors"
                                    >
                                        <X size={20} />
                                    </button>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="flex-1 px-6 py-8 flex flex-col gap-10 overflow-y-auto">
                                {activeCategory === "Commercial" && (
                                    <div className="space-y-4">
                                        <div className="flex items-center justify-between">
                                            <span className="text-xs uppercase tracking-[0.2em] text-gold-400 font-bold">Transaction</span>
                                        </div>
                                        <div className="flex flex-wrap gap-3">
                                            {FILTER_TRANSACTION_OPTIONS.map(opt => (
                                                <button
                                                    key={opt}
                                                    onClick={() => setActiveTransaction(opt)}
                                                    className={`py-3 px-6 rounded-lg text-sm font-medium transition-all duration-300 border ${activeTransaction === opt ? 'bg-luxury-black text-gold-400 border-gold-400/50 shadow-lg shadow-black/20' : 'bg-secondary/50 text-muted-foreground border-transparent hover:bg-secondary hover:text-foreground'}`}
                                                >
                                                    {opt}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                <div className="space-y-4">
                                    <span className="text-xs uppercase tracking-[0.2em] text-gold-400 font-bold block">Property Type</span>
                                    <div className="grid grid-cols-2 gap-3">
                                        {(activeCategory === "Residential" ? FILTER_RESIDENTIAL_TYPES : activeCategory === "Commercial" ? FILTER_COMMERCIAL_TYPES : FILTER_ALL_TYPES).map(opt => (
                                            <button
                                                key={opt}
                                                onClick={() => setActiveType(opt)}
                                                className={`py-3.5 px-3 rounded-lg text-sm font-medium text-center transition-all duration-300 border ${activeType === opt ? 'bg-luxury-black text-gold-400 border-gold-400/50 shadow-md' : 'bg-secondary/50 text-muted-foreground border-transparent hover:bg-secondary hover:text-foreground'}`}
                                            >
                                                {opt}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <span className="text-xs uppercase tracking-[0.2em] text-gold-400 font-bold block">Possession Status</span>
                                    <div className="flex flex-wrap gap-3">
                                        {FILTER_POSSESSION.map(opt => (
                                            <button
                                                key={opt}
                                                onClick={() => setActivePossession(opt)}
                                                className={`py-3 px-6 rounded-lg text-sm font-medium transition-all duration-300 border ${activePossession === opt ? 'bg-luxury-black text-gold-400 border-gold-400/50 shadow-md' : 'bg-secondary/50 text-muted-foreground border-transparent hover:bg-secondary hover:text-foreground'}`}
                                            >
                                                {opt}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Footer */}
                            <div className="p-6 border-t border-border bg-background pb-8 grid gap-4">
                                <Button onClick={handleApplyFilters} className="w-full bg-gold-400 text-luxury-black hover:bg-gold-500 py-4 text-sm uppercase tracking-[0.2em] font-bold shadow-lg shadow-gold-400/10">
                                    Show {filteredProjects.length} Projects
                                </Button>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

            <div className="px-6 container mx-auto" ref={cardsRef} id="projects-feed">
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
                                    onClick={resetAll}
                                    className="mt-6 text-gold-400 hover:text-foreground underline underline-offset-4"
                                >
                                    Clear All Filters
                                </button>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
}
