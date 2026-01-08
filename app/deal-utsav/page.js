"use client";

import { motion } from "framer-motion";
import { Suspense } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import DealUtsavHero from "@/components/home/DealUtsavHero"; // Specialized Hero
import DealUtsavOverlay from "@/components/ui/DealUtsavOverlay"; // Specialized Overlay
import ProjectSection from "@/components/home/ProjectSection";
import TextReveal from "@/components/ui/TextReveal";
import { PROJECTS } from "@/data/projects";

export default function DealUtsavPage() {
    const allResidential = PROJECTS.filter(p => p.category === "Residential");
    // Custom Sort: Select -> Niwa -> 51 -> Rest
    const prioritySlugs = ['keystone-select', 'keystone-niwa', 'keystone-51'];
    const residentialProjects = [
        ...allResidential.filter(p => prioritySlugs.includes(p.slug)).sort((a, b) => {
            return prioritySlugs.indexOf(a.slug) - prioritySlugs.indexOf(b.slug);
        }),
        ...allResidential.filter(p => !prioritySlugs.includes(p.slug))
    ];

    const commercialProjects = PROJECTS.filter(p => p.category === "Commercial");

    return (
        <main className="min-h-screen bg-[#0a0a0a] text-white selection:bg-yellow-500 selection:text-black">
            {/* 1. Festive Overlay Active Only Here */}
            <DealUtsavOverlay />

            <Header />

            {/* 2. Custom Hero */}
            <div className="relative z-10">
                <DealUtsavHero />
            </div>

            {/* Intro Statement - Festive Edition */}
            <section className="relative z-10 py-32 md:py-48 container mx-auto px-6 text-center">
                <div className="max-w-4xl mx-auto">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                        className="text-yellow-500 uppercase tracking-[0.3em] text-xs font-bold mb-8 block"
                    >
                        The Season of Giving
                    </motion.span>

                    <div className="mb-10 min-h-[120px]">
                        {/* Using standard Font for clarity but styled luxuriously */}
                        <h2 className="justify-center font-serif text-4xl md:text-6xl lg:text-7xl leading-tight text-white/90">
                            Invest in a legacy. <br /> <span className="italic text-yellow-400">Celebrate for a lifetime.</span>
                        </h2>
                    </div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 1 }}
                        className="text-gray-400 text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto"
                    >
                        Vihav Deal Utsav is more than just an event; it's our way of welcoming you into the family.
                        For a limited time, enjoy unprecedented benefits on our signature properties.
                        This festival, bring home the luxury you deserve.
                    </motion.p>
                </div>
            </section>

            {/* Residential Projects - Real Data */}
            <div className="relative z-10">
                <Suspense fallback={<div className="h-screen flex items-center justify-center text-gold-400">Loading...</div>}>
                    <ProjectSection
                        title="Participating Residences"
                        subtitle="Festival Collections"
                        align="left"
                        projects={residentialProjects.map(p => ({
                            title: p.title,
                            location: p.location,
                            type: p.type,
                            price: "Special Festival Pricing", // Overriding price for curiosity
                            slug: p.slug,
                            image: p.heroImage
                        }))}
                    />

                    {/* Commercial Projects - Real Data */}
                    <ProjectSection
                        title="Commercial Opportunities"
                        subtitle="Business Growth Festival"
                        align="right"
                        projects={commercialProjects.map(p => ({
                            title: p.title,
                            location: p.location,
                            type: p.type,
                            price: "Festival Benefits Apply", // Overriding price
                            slug: p.slug,
                            image: p.heroImage
                        }))}
                    />
                </Suspense>
            </div>

            {/* Immersive Deal Highlight Section */}
            <section className="relative z-10 py-32 bg-[#1a0505]">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                        {/* Sticky Left Content */}
                        <div className="lg:sticky lg:top-32 h-fit">
                            <span className="text-yellow-500 uppercase tracking-[0.25em] text-xs font-bold mb-6 block">Why Buy Now?</span>
                            <h3 className="font-serif text-5xl md:text-7xl text-white mb-12 leading-none">
                                Fortune Favors <br /> <span className="text-yellow-400 italic">The Bold.</span>
                            </h3>
                            <div className="space-y-12">
                                <div>
                                    <h4 className="text-white text-xl font-serif mb-4 flex items-center gap-4">
                                        <span className="w-8 h-px bg-yellow-500"></span> Assured Gold Coin
                                    </h4>
                                    <p className="text-gray-400 pl-12 font-light leading-relaxed">
                                        With every booking during Deal Utsav, take home a symbol of prosperity. A pure gold coin to mark your new beginning.
                                    </p>
                                </div>
                                <div>
                                    <h4 className="text-white text-xl font-serif mb-4 flex items-center gap-4">
                                        <span className="w-8 h-px bg-yellow-500"></span> Flexible Payment Plans
                                    </h4>
                                    <p className="text-gray-400 pl-12 font-light leading-relaxed">
                                        We've curated special payment schedules that make owning a Vihav luxury home smoother than ever before.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Right Image Grid */}
                        <div className="grid gap-8">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className="aspect-[4/5] bg-neutral-900 relative overflow-hidden border border-yellow-900/30"
                            >
                                <img
                                    src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1000&auto=format&fit=crop"
                                    className="w-full h-full object-cover opacity-80"
                                    alt="Philosophy"
                                />
                                <div className="absolute bottom-8 left-8 text-white">
                                    <p className="uppercase tracking-[0.2em] text-xs text-yellow-500">Exclusive</p>
                                </div>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="aspect-square bg-neutral-800 relative overflow-hidden border border-yellow-900/30"
                            >
                                <img
                                    src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1000&auto=format&fit=crop" // Hotel/Luxury vibe
                                    className="w-full h-full object-cover opacity-80"
                                    alt="Detail"
                                />
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="relative z-10">
                <Footer />
            </div>
        </main>
    );
}
