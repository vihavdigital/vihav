"use client";
import React, { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import NRIHero from "@/components/overseas/NRIHero";
import InvestmentStats from "@/components/overseas/InvestmentStats";
import ServiceCards from "@/components/overseas/ServiceCards";
import VadodaraShowcase from "@/components/overseas/VadodaraShowcase";
import LuxuryMapWrapper from "@/components/projects/LuxuryMapWrapper";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { PROJECTS } from "@/data/projects";
import { motion, AnimatePresence } from "framer-motion";
import EnquireModal from "@/components/ui/EnquireModal";

import ProjectCard from "@/components/projects/ProjectCard";
import FilterDropdown from "@/components/ui/FilterDropdown";
import { useProjectFilters, FILTER_TYPES, FILTER_POSSESSION, FILTER_COMMERCIAL_TYPES } from "@/hooks/useProjectFilters";

export default function OverseasPage() {
    const [isEnquireOpen, setIsEnquireOpen] = useState(false);

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
        <main className="bg-neutral-950 min-h-screen text-white selection:bg-gold-500 selection:text-white pb-20 md:pb-0">
            <Header />

            {/* 1. Emotional Hero */}
            <NRIHero />

            {/* 2. Why Vadodara? Stats */}
            <InvestmentStats />

            {/* 2.5 Vadodara Showcase - Visuals */}
            <VadodaraShowcase />

            {/* 3. The Vihav Map - Location Context */}
            <section className="py-24 bg-neutral-900 border-t border-white/5 relative z-0">
                <div className="container mx-auto px-6 mb-12 text-center">
                    <h2 className="text-3xl md:text-4xl font-serif mb-4">Strategic Locations</h2>
                    <p className="text-white/60 max-w-2xl mx-auto">
                        Our projects are situated in Vadodara's most rapidly appreciating corridors.
                    </p>
                </div>
                <div className="aspect-square md:aspect-auto md:h-[600px] w-full md:container md:mx-auto md:px-6 md:rounded-2xl overflow-hidden border-y md:border border-white/10 relative z-0">
                    <LuxuryMapWrapper />
                </div>
            </section>

            {/* 4. NRI Services */}
            <ServiceCards />

            {/* 5. Complete Portfolio with Filters */}
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

            <Footer />

            {/* Sticky Enquire Button (Mobile/Global) */}
            <div className="fixed bottom-0 left-0 right-0 p-3 bg-neutral-900/80 backdrop-blur-lg border-t border-white/10 z-50 flex justify-between items-center md:hidden">
                <div className="flex flex-col">
                    <span className="text-[10px] text-gold-400 uppercase tracking-widest">Interested?</span>
                    <span className="text-white font-serif text-lg">Contact Us</span>
                </div>
                <button
                    onClick={() => setIsEnquireOpen(true)}
                    className="bg-gold-500 text-black px-6 py-2 rounded-full font-bold text-sm uppercase tracking-widest shadow-lg flex items-center gap-2 hover:bg-gold-400 transition-colors"
                >
                    <Phone size={16} /> Enquire
                </button>
            </div>

            {/* Desktop Floating Button (Optional, usually Side Menu usage is preferred but user asked for sticky) */}
            <button
                onClick={() => setIsEnquireOpen(true)}
                className="hidden md:flex fixed bottom-10 right-10 bg-gold-500 text-black w-16 h-16 rounded-full items-center justify-center shadow-2xl hover:bg-gold-400 transition-all z-50 hover:scale-110 group"
            >
                <Phone size={24} className="group-hover:animate-pulse" />
            </button>

            <EnquireModal isOpen={isEnquireOpen} onClose={() => setIsEnquireOpen(false)} />
        </main>
    );
}
