"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import Link from "next/link";
import TextReveal from "@/components/ui/TextReveal";

const variants = {
    enter: (direction) => {
        return {
            x: direction > 0 ? "100%" : "-100%",
            opacity: 1, // Keep opacity high for "physical" feel
        };
    },
    center: {
        zIndex: 1,
        x: 0,
        opacity: 1,
    },
    exit: (direction) => {
        return {
            zIndex: 0,
            x: direction < 0 ? "100%" : "-100%",
            opacity: 1, // Keep opacity high for "physical" feel
        };
    },
};

export default function PortfolioVideoShowcase({ projects }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);
    const videoRef = useRef(null);

    // Filter only projects with videos
    const videoProjects = projects.filter((p) => p.heroVideo);

    if (videoProjects.length === 0) return null;

    const currentProject = videoProjects[currentIndex];

    const paginate = (newDirection) => {
        setDirection(newDirection);
        // Standard loop logic
        if (newDirection === 1) {
            setCurrentIndex((prev) => (prev + 1) % videoProjects.length);
        } else {
            setCurrentIndex((prev) => (prev - 1 + videoProjects.length) % videoProjects.length);
        }
    };

    // Basic Swipe Logic
    const onDragEnd = (event, info) => {
        const swipeThreshold = 50;
        if (info.offset.x < -swipeThreshold) {
            paginate(1);
        } else if (info.offset.x > swipeThreshold) {
            paginate(-1);
        }
    };

    // Reset video on slide change
    useEffect(() => {
        // Small timeout to allow animation to start
        const timer = setTimeout(() => {
            if (videoRef.current) {
                videoRef.current.load();
                videoRef.current.play().catch((e) => console.log("Autoplay prevented:", e));
            }
        }, 100);
        return () => clearTimeout(timer);
    }, [currentIndex]);

    return (
        <section className="py-24 md:py-32 bg-background border-t border-border">
            <div className="container mx-auto px-6">

                {/* Section Header */}
                <div className="mb-8 md:mb-16">
                    <span className="text-gold-400 uppercase tracking-[0.25em] text-xs font-bold mb-4 block">
                        Cinematic Experience
                    </span>
                    <TextReveal
                        as="h2"
                        text="Our Finest Developments"
                        className="font-serif text-3xl md:text-5xl text-foreground"
                    />
                </div>

                {/* Carousel Container */}
                <div className="w-full relative">

                    {/* Aspect Ratio Container for Slider */}
                    <div className="relative w-full aspect-[4/3] md:aspect-[21/9] bg-black rounded-lg overflow-hidden group/slider shadow-2xl shadow-black/20">
                        <Link href={`/projects/${currentProject.slug}`} className="cursor-pointer block h-full w-full">
                            <AnimatePresence initial={false} custom={direction} mode="popLayout">
                                <motion.div
                                    key={currentIndex} // Key change triggers animation
                                    custom={direction}
                                    variants={variants}
                                    initial="enter"
                                    animate="center"
                                    exit="exit"
                                    transition={{
                                        x: { type: "spring", stiffness: 300, damping: 30 },
                                        opacity: { duration: 0.2 }
                                    }}
                                    drag="x"
                                    dragConstraints={{ left: 0, right: 0 }}
                                    dragElastic={1}
                                    onDragEnd={onDragEnd}
                                    className="absolute inset-0 w-full h-full"
                                >
                                    <video
                                        ref={videoRef}
                                        src={currentProject.heroVideo}
                                        poster={currentProject.desktopHeroImage}
                                        className="w-full h-full object-cover opacity-90"
                                        autoPlay
                                        muted
                                        loop
                                        playsInline
                                    />
                                    {/* Gradient Overlay */}
                                    <div className="absolute inset-0 bg-black/10 pointer-events-none" />

                                    {/* DESKTOP: Hover Reveal Overlay (Inside Slide) */}
                                    <div className="hidden md:flex absolute inset-0 z-10 bg-black/60 opacity-0 group-hover/slider:opacity-100 transition-opacity duration-500 flex-col items-center justify-center text-center p-8 backdrop-blur-[2px] pointer-events-none">
                                        <div className="translate-y-10 group-hover/slider:translate-y-0 transition-transform duration-500 ease-out">
                                            <h3 className="text-6xl font-serif text-white mb-8 tracking-wide">
                                                {currentProject.title}
                                            </h3>

                                            <span
                                                className="inline-flex items-center gap-3 px-8 py-3 bg-gold-400 text-luxury-black font-bold uppercase tracking-widest text-sm rounded-sm"
                                            >
                                                Explore Project
                                                <ArrowRight size={16} />
                                            </span>
                                        </div>
                                    </div>

                                </motion.div>
                            </AnimatePresence>
                        </Link>

                        {/* Navigation Arrows (Desktop) */}
                        <div
                            onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                paginate(-1); // Previous
                            }}
                            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 hidden md:flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md text-white border border-white/20 hover:bg-gold-400 hover:text-black hover:border-gold-400 transition-all duration-300 opacity-0 group-hover/slider:opacity-100 -translate-x-4 group-hover/slider:translate-x-0 cursor-pointer"
                        >
                            <ChevronLeft size={24} />
                        </div>

                        <div
                            onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                paginate(1); // Next
                            }}
                            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 hidden md:flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md text-white border border-white/20 hover:bg-gold-400 hover:text-black hover:border-gold-400 transition-all duration-300 opacity-0 group-hover/slider:opacity-100 translate-x-4 group-hover/slider:translate-x-0 cursor-pointer"
                        >
                            <ChevronRight size={24} />
                        </div>

                        {/* Desktop Only: Progress Dots (Inside) */}
                        <div className="hidden md:flex absolute bottom-6 left-1/2 -translate-x-1/2 z-20 gap-2 pointer-events-none">
                            {videoProjects.map((_, idx) => (
                                <div
                                    key={idx}
                                    className={`h-1 rounded-full transition-all duration-300 ${idx === currentIndex ? 'w-8 bg-gold-400' : 'w-2 bg-white/30'}`}
                                />
                            ))}
                        </div>
                    </div>

                    {/* MOBILE ONLY: Dots & Details Below Video */}
                    <div className="md:hidden mt-4 flex flex-col items-center text-center">
                        {/* 1. Dots Centered Just Below Video */}
                        <div className="flex gap-2 mb-6 pointer-events-auto">
                            {videoProjects.map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => {
                                        const dir = idx > currentIndex ? 1 : -1;
                                        setCurrentIndex(idx);
                                        setDirection(dir);
                                    }}
                                    className={`h-1 rounded-full transition-all duration-300 ${idx === currentIndex ? 'w-8 bg-gold-400' : 'w-2 bg-neutral-300 dark:bg-neutral-700'}`}
                                />
                            ))}
                        </div>

                        {/* 2. Project Details */}
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentProject.id}
                                initial={{ opacity: 0, y: 5 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -5 }}
                                transition={{ duration: 0.3 }}
                                className="flex flex-col items-center"
                            >
                                <h3 className="text-3xl font-serif text-foreground mb-4 tracking-wide leading-tight">
                                    {currentProject.title}
                                </h3>
                                <Link
                                    href={`/projects/${currentProject.slug}`}
                                    className="inline-flex items-center gap-2 text-gold-400 uppercase tracking-widest text-xs font-bold border-b border-gold-400 pb-1"
                                >
                                    Explore Project
                                    <ArrowRight size={14} />
                                </Link>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                </div>
            </div>
        </section>
    );
}
