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
        image: "/images/project-images/project-tiles/Select.jpg",
        link: "/projects/keystone-select"
    };

    return (
        <section ref={containerRef} className="relative min-h-[95vh] flex items-end justify-center overflow-hidden pt-24 pb-12 md:pb-20">

            {/* Background Image with Cinematic Parallax */}
            <div className="absolute inset-0 z-0">
                <motion.div style={{ y }} className="absolute inset-0 h-[120%] w-full -top-[10%]">
                    <img
                        src={featured.image}
                        alt="Keystone Select Background"
                        className="w-full h-full object-cover opacity-100"
                    />
                    {/* Cinematic Overlay - Vignette & Warmth */}
                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                    <div className="absolute inset-0 ring-1 ring-inset ring-white/5 pointer-events-none" />
                </motion.div>
            </div>

            <div className="container mx-auto px-6 relative z-10 h-full flex flex-col justify-end">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">

                    {/* Left Content - Glass Panel */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="lg:col-span-8 relative"
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
                            <h2 className="font-serif text-5xl md:text-7xl lg:text-9xl leading-[0.9] text-white mb-6 md:mb-8 tracking-tight drop-shadow-2xl">
                                {featured.title}
                            </h2>

                            {/* Tagline */}
                            <p className="text-xl md:text-4xl font-light text-white/95 mb-6 italic font-serif tracking-wide border-l-2 md:border-l-4 border-gold-400 pl-4 md:pl-6 leading-tight">
                                "{featured.tagline}"
                            </p>

                            {/* Simple Location */}
                            <p className="text-white/60 text-sm md:text-base uppercase tracking-widest mb-10 pl-1 font-medium flex items-center gap-2">
                                <MapPin size={16} />
                                {featured.location}
                            </p>

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

                    {/* Right Side - Empty for Image Visibility */}
                    <div className="lg:col-span-4" />

                </div>
            </div>
        </section>
    );
}
