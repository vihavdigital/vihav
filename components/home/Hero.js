"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ChevronLeft } from "lucide-react";
import VideoPlayer from "@/components/ui/VideoPlayer";

const SLIDES = [
    {
        id: 1,
        type: "video",
        src: "/videos/niwa.mp4", // Keystone Niwa
        poster: "/images/project-images/hero-banner/desktop-banner/niwa.webp", // Priority Image
        title: "Curated <br/> <span class='text-white/80 italic font-light'>Collections</span>",
        subtitle: "Luxury Homes crafted for modern living."
    },
    {
        id: 2,
        type: "video",
        src: "/videos/sup-wt.webm", // Lifestyle/Aerial
        poster: "/images/project-images/hero-banner/desktop-banner/cbd-banner.webp", // Priority Image (Commercial context)
        title: "Corporate <br/> <span class='text-white/80 italic font-light'>Excellence</span>",
        subtitle: "Commercial Real Estate for Growing Businesses"
    }
];

export default function Hero() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
    };

    // Auto-advance slideshow
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
        }, 7000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section
            className="relative h-[100svh] w-full overflow-hidden bg-luxury-black text-white"
            suppressHydrationWarning
        >
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                    className="absolute inset-0"
                >
                    {/* Media Layer */}
                    {SLIDES[currentSlide].type === "video" ? (
                        <>
                            {/* Priority Background Image (Loads faster than video) */}
                            <Image
                                src={SLIDES[currentSlide].poster}
                                alt="Hero Background"
                                fill
                                priority
                                className="object-cover transform scale-105 -z-10"
                                sizes="100vw"
                            />
                            <VideoPlayer
                                src={SLIDES[currentSlide].src}
                                poster={SLIDES[currentSlide].poster}
                                className="w-full h-full object-cover absolute inset-0"
                            />
                        </>
                    ) : (
                        <Image
                            src={SLIDES[currentSlide].src}
                            alt="Hero Background"
                            fill
                            priority
                            className="object-cover transform scale-105"
                            sizes="100vw"
                        />
                    )}

                    {/* Gradient Overlay - Enhanced for Readability & Depth */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-0" />
                </motion.div>
            </AnimatePresence>

            {/* Content Layer */}
            <div className="relative z-10 h-full container mx-auto px-6 flex flex-col justify-end items-end text-right pb-24 md:pb-20">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentSlide}
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -30 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="max-w-4xl"
                    >
                        <h1
                            className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-8xl font-medium text-white mb-4 md:mb-8 leading-none tracking-tight"
                            dangerouslySetInnerHTML={{ __html: SLIDES[currentSlide].title }}
                        />
                        <p className="max-w-xl ml-auto text-gray-200 text-sm md:text-xl font-light mb-8 md:mb-12 leading-relaxed tracking-wide">
                            {SLIDES[currentSlide].subtitle}
                        </p>
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
                            className={`h-[2px] transition-all duration-300 ${currentSlide === idx ? "w-12 bg-gold-400" : "w-6 bg-white/30 hover:bg-white"}`}
                        />
                    ))}
                </div>

                {/* Arrows */}
                <div className="flex gap-4 text-white">
                    <button onClick={prevSlide} className="p-2 border border-white/20 hover:bg-white hover:text-black transition-all rounded-full" aria-label="Previous slide">
                        <ChevronLeft size={24} />
                    </button>
                    <button onClick={nextSlide} className="p-2 border border-white/20 hover:bg-white hover:text-black transition-all rounded-full" aria-label="Next slide">
                        <ChevronRight size={24} />
                    </button>
                </div>
            </div>
        </section>
    );
}


