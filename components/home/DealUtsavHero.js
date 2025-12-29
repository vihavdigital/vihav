"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ChevronLeft, Sparkles } from "lucide-react";

const SLIDES = [
    {
        id: 1,
        type: "video",
        src: "/vihav-hero-video.webm", // Keeping original video as base
        title: "The Festival <br/> <span class='text-yellow-400 italic font-serif'>of Homes</span>",
        subtitle: "Celebrate new beginnings with exclusive festive privileges on our most coveted luxury residences."
    },
    {
        id: 2,
        type: "video",
        src: "https://assets.mixkit.co/videos/preview/mixkit-modern-architecture-building-with-glass-windows-4700-large.mp4",
        title: "Limited <br/> <span class='text-yellow-400 italic font-serif'>Edition</span>",
        subtitle: "Unveiling special Deal Utsav pricing for Keystone Select and Niwa. A rare opportunity for the discerning few."
    },
    {
        id: 3,
        type: "video",
        src: "https://videos.pexels.com/video-files/7578552/7578552-uhd_2560_1440_30fps.mp4",
        title: "Vihav <br/> <span class='text-yellow-400 italic font-serif'>Deal Utsav</span>",
        subtitle: "Where luxury meets celebration. Step into a world of grand spaces and grander offers."
    }
];

export default function DealUtsavHero() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
    };

    return (
        <section className="relative h-screen w-full overflow-hidden bg-[#1a0505] text-white">
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                    className="absolute inset-0"
                >
                    {/* Media Layer - Cinematic Warmth */}
                    {SLIDES[currentSlide].type === "video" ? (
                        <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-full object-cover brightness-[0.55] transform scale-105"
                        >
                            <source src={SLIDES[currentSlide].src} type={SLIDES[currentSlide].src.endsWith('.webm') ? "video/webm" : "video/mp4"} />
                        </video>
                    ) : (
                        <div
                            className="w-full h-full bg-cover bg-center brightness-[0.55] transform scale-105"
                            style={{ backgroundImage: `url(${SLIDES[currentSlide].src})` }}
                        />
                    )}

                    {/* Cinematic Atmosphere */}
                    <div className="absolute inset-0 bg-amber-900/10 mix-blend-overlay" /> {/* Warm tint */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,rgba(0,0,0,0.8)_100%)]" /> {/* Vignette */}


                </motion.div>
            </AnimatePresence>

            {/* Inline Styles for Shimmer - Ideally in globals.css but here for component isolation */}
            <style jsx global>{`
                @keyframes shimmer {
                    0% { background-position: 200% center; }
                    100% { background-position: -200% center; }
                }
                .text-shimmer {
                    background: linear-gradient(to right, #fbbf24 20%, #fff 50%, #fbbf24 80%);
                    background-size: 200% auto;
                    -webkit-background-clip: text;
                    text-fill-color: transparent;
                    -webkit-text-fill-color: transparent;
                    animation: shimmer 4s linear infinite;
                }
            `}</style>

            {/* Content Layer */}
            <div className="relative z-10 h-full container mx-auto px-6 flex flex-col justify-center items-center text-center">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentSlide}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -30 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="max-w-5xl"
                    >
                        {/* Magical Floating Badge */}
                        <motion.span
                            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
                            className="inline-block text-amber-200/80 text-xs tracking-[0.4em] uppercase font-bold mb-8"
                        >
                            The Golden Season
                        </motion.span>

                        <h1
                            className="font-serif text-6xl md:text-8xl lg:text-9xl font-medium text-white mb-8 leading-none tracking-tight drop-shadow-2xl"
                            dangerouslySetInnerHTML={{
                                __html: SLIDES[currentSlide].title
                                    .replace("text-yellow-400", "text-shimmer")
                                    .replace("text-[#F7E7CE]", "text-shimmer")
                            }}
                        />
                        <p className="max-w-2xl mx-auto text-amber-50/80 text-lg md:text-2xl font-light mb-12 leading-relaxed tracking-wide font-serif">
                            {SLIDES[currentSlide].subtitle}
                        </p>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="relative overflow-hidden group border border-amber-400/30 text-amber-200 px-10 py-4 md:px-12 md:py-5 rounded-full text-sm md:text-base uppercase tracking-[0.2em] transition-all hover:border-amber-400 hover:text-white hover:bg-amber-900/20 backdrop-blur-sm"
                        >
                            <span className="relative z-10">Discover The Magic</span>
                            <div className="absolute inset-0 bg-amber-400/10 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
                        </motion.button>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Controls */}
            <div className="absolute bottom-12 left-0 w-full px-6 flex justify-between items-center z-20">
                {/* Dots */}
                <div className="flex gap-4">
                    {SLIDES.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => setCurrentSlide(idx)}
                            className={`h-[2px] transition-all duration-300 ${currentSlide === idx ? "w-12 bg-yellow-400" : "w-6 bg-white/30 hover:bg-white"}`}
                        />
                    ))}
                </div>

                {/* Arrows */}
                <div className="flex gap-4 text-white">
                    <button onClick={prevSlide} className="p-2 border border-white/20 hover:bg-yellow-400 hover:text-black hover:border-yellow-400 transition-all rounded-full">
                        <ChevronLeft size={24} />
                    </button>
                    <button onClick={nextSlide} className="p-2 border border-white/20 hover:bg-yellow-400 hover:text-black hover:border-yellow-400 transition-all rounded-full">
                        <ChevronRight size={24} />
                    </button>
                </div>
            </div>
        </section>
    );
}
