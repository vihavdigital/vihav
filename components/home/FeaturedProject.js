"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import MagneticWrapper from "@/components/ui/MagneticWrapper";
import { ArrowUpRight, Maximize, MapPin, Check } from "lucide-react";

export default function FeaturedProject() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0]);

    // Data for Featured Project (Keystone Select)
    const featured = {
        title: "Keystone Select",
        tagline: "Contemporary Architecture with Timeless Appeal",
        location: "Bhayli, Vadodara",
        description: "A signature address that balances comfort, connectivity, and prestige. Every home is thoughtfully planned to offer generous proportions, seamless layouts, and abundant natural light.",
        image: "/images/project-images/project-tiles/Select.jpg",
        stats: [
            { label: "Configuration", value: "4B2HK & 5B2HK" },
            { label: "Carpet Area", value: "3120 - 5046 Sq. Ft." },
            { label: "Exclusivity", value: "Signature Community" }
        ],
        link: "/projects/keystone-select"
    };

    return (
        <section ref={containerRef} className="relative min-h-[95vh] flex items-center justify-center overflow-hidden py-24 md:py-32">

            {/* Background Image with Cinematic Parallax */}
            <div className="absolute inset-0 z-0">
                <motion.div style={{ y }} className="absolute inset-0 h-[120%] w-full -top-[10%]">
                    <img
                        src={featured.image}
                        alt="Keystone Select Background"
                        className="w-full h-full object-cover opacity-100"
                    />
                    {/* Cinematic Overlay - Vignette & Warmth */}
                    <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/60 to-black/30" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/40" />
                    <div className="absolute inset-0 ring-1 ring-inset ring-white/5 pointer-events-none" />
                </motion.div>
            </div>

            <div className="container mx-auto px-6 relative z-10 h-full flex flex-col justify-center">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

                    {/* Left Content - Glass Panel */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="lg:col-span-7 relative"
                    >
                        {/* Decorative Lines */}
                        <div className="absolute -left-8 top-0 bottom-0 w-[1px] bg-gradient-to-b from-gold-400/0 via-gold-400/50 to-gold-400/0 hidden md:block" />
                        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-gold-400/0 via-gold-400/50 to-gold-400/0 block md:hidden mb-8" />

                        <div className="relative z-10 py-6 md:py-0">
                            {/* Signature Label */}
                            <div className="inline-flex items-center gap-4 mb-6 md:mb-8">
                                <span className="w-8 md:w-16 h-[2px] bg-gold-400 shadow-[0_0_10px_rgba(250,204,21,0.5)]"></span>
                                <span className="text-gold-400 text-sm md:text-xs font-bold uppercase tracking-[0.3em] md:tracking-[0.4em] drop-shadow-sm">
                                    Signature Collection
                                </span>
                            </div>

                            {/* Title */}
                            <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[0.9] text-white mb-6 md:mb-8 tracking-tight drop-shadow-2xl">
                                {featured.title}
                            </h2>

                            {/* Tagline */}
                            <p className="text-xl md:text-3xl font-light text-white/95 mb-8 md:mb-10 italic font-serif tracking-wide border-l-2 md:border-l-4 border-gold-400 pl-4 md:pl-6 leading-tight">
                                "{featured.tagline}"
                            </p>

                            {/* Description */}
                            <p className="text-gray-200 leading-relaxed mb-10 text-base md:text-lg font-light max-w-2xl drop-shadow-md">
                                {featured.description}
                            </p>

                            {/* Specs Grid */}
                            <div className="flex flex-wrap gap-x-8 gap-y-6 md:gap-12 mb-10 md:mb-14 border-t border-white/10 pt-6 md:pt-8">
                                {featured.stats.map((stat, idx) => (
                                    <div key={idx} className="flex flex-col min-w-[45%] md:min-w-0">
                                        <span className="text-[10px] uppercase tracking-[0.2em] text-gold-400 mb-1 md:mb-2 font-medium">{stat.label}</span>
                                        <span className="text-xl md:text-2xl font-serif text-white">{stat.value}</span>
                                    </div>
                                ))}
                            </div>

                            {/* Buttons */}
                            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 md:gap-8">
                                <Link href={featured.link} className="w-full sm:w-auto">
                                    <MagneticWrapper>
                                        <button className="w-full sm:w-auto flex items-center justify-center gap-4 bg-gold-400/10 backdrop-blur-md border border-gold-400/50 text-gold-400 px-8 py-4 rounded-none uppercase tracking-[0.2em] text-xs font-bold hover:bg-gold-400 hover:text-black transition-all duration-500 group shadow-[0_0_20px_rgba(250,204,21,0.1)]">
                                            Discover
                                            <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                        </button>
                                    </MagneticWrapper>
                                </Link>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Side - Badge */}
                    <div className="lg:col-span-5 flex justify-start lg:justify-end items-end h-full">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3, duration: 1 }}
                            className="bg-black/60 backdrop-blur-xl border border-white/10 p-6 md:p-10 max-w-md w-full relative overflow-hidden group shadow-2xl rounded-sm"
                        >
                            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-gold-400/0 via-gold-400 to-gold-400/0 opacity-50" />

                            <div className="flex items-start justify-between mb-6">
                                <div className="text-gold-400 p-2 bg-gold-400/5 rounded-full">
                                    <MapPin size={24} strokeWidth={1.5} />
                                </div>
                                <span className="text-[10px] font-bold uppercase tracking-widest text-white/60 pt-2">Location</span>
                            </div>

                            <h3 className="text-2xl md:text-3xl font-serif text-white mb-2">{featured.location}</h3>
                            <p className="text-xs md:text-sm text-gray-400 font-light mb-6">Vadodara's Most Coveted Address</p>

                            <div className="w-full h-[1px] bg-white/10 mb-5" />

                            <div className="flex items-center justify-between">
                                <span className="text-[10px] uppercase tracking-widest text-gold-400 font-bold">Status</span>
                                <span className="text-xs md:text-sm font-medium text-white px-3 py-1 bg-white/10 border border-white/5 rounded-sm">Upcoming</span>
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
}
