"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";

export default function NRIHero() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end start"] });
    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    return (
        <div ref={containerRef} className="relative h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image / Video */}
            <motion.div style={{ y }} className="absolute inset-0 z-0">
                <img
                    src="/vdr.webp"
                    alt="Laxmi Vilas Palace Vadodara"
                    className="w-full h-full object-cover"
                />
                {/* Maximum Contrast Overlay */}
                <div className="absolute inset-0 bg-black/60" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-background/50" />
            </motion.div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-6 text-center text-white drop-shadow-2xl">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                >
                    <span className="inline-block py-1 px-3 rounded-full border border-gold-500/50 bg-gold-950/30 backdrop-blur-md text-gold-400 text-xs tracking-[0.2em] uppercase mb-6">
                        Invest in Your Roots
                    </span>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif mb-8 leading-tight text-white">
                        Welcome Home <br />
                        <span className="italic text-white/80">to Vadodara.</span>
                    </h1>
                    <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
                        Experience the pride of ownership in your hometown.
                        Premium residences and commercial assets managed with global standards, designed for the global Indian.
                    </p>

                    <button className="bg-gold-500 hover:bg-gold-400 text-black px-8 py-4 rounded-full font-medium transition-all transform hover:scale-105 shadow-xl shadow-gold-900/20">
                        Explore Opportunities
                    </button>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div style={{ opacity }} className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 flex flex-col items-center gap-2">
                <span className="text-[10px] uppercase tracking-widest">Scroll</span>
                <ArrowDown size={16} className="animate-bounce" />
            </motion.div>
        </div>
    );
}
