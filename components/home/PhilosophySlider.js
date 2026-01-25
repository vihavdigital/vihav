"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import VideoPlayer from "@/components/ui/VideoPlayer";

export default function PhilosophySlider({ slides }) {
    const [current, setCurrent] = useState(0);

    // Auto-advance
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length);
        }, 5000); // 5 seconds per slide
        return () => clearInterval(timer);
    }, [slides.length]);

    const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
    const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

    if (!slides || slides.length === 0) return null;

    const slide = slides[current];

    return (
        <div className="w-full aspect-[4/3] md:aspect-[16/10] relative overflow-hidden rounded-xl group bg-neutral-900 border border-white/20 shadow-2xl shadow-black/50 ring-1 ring-white/10">
            <AnimatePresence mode="wait">
                <motion.div
                    key={current}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8 }}
                    className="absolute inset-0 w-full h-full"
                >
                    <SlideContent slide={slide} />
                </motion.div>
            </AnimatePresence>

            {/* Overlay Gradient */}
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />

            {/* Controls */}
            <div className="absolute inset-0 flex items-center justify-between p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <button
                    onClick={(e) => { e.preventDefault(); e.stopPropagation(); prevSlide(); }}
                    className="p-2 bg-black/50 hover:bg-gold-400 text-white hover:text-black rounded-full backdrop-blur-sm transition-all pointer-events-auto"
                    aria-label="Previous slide"
                >
                    <ChevronLeft size={20} />
                </button>
                <button
                    onClick={(e) => { e.preventDefault(); e.stopPropagation(); nextSlide(); }}
                    className="p-2 bg-black/50 hover:bg-gold-400 text-white hover:text-black rounded-full backdrop-blur-sm transition-all pointer-events-auto"
                    aria-label="Next slide"
                >
                    <ChevronRight size={20} />
                </button>
            </div>

            {/* Dots */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                {slides.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={(e) => { e.preventDefault(); e.stopPropagation(); setCurrent(idx); }}
                        className={`h-1.5 rounded-full transition-all duration-300 ${current === idx ? "w-6 bg-gold-400" : "w-1.5 bg-white/50 hover:bg-white"}`}
                        aria-label={`Go to slide ${idx + 1}`}
                    />
                ))}
            </div>

            {/* Label - Absolute positioning to match previous design */}
            <div className="absolute bottom-6 left-6 z-20 pointer-events-none">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    key={`text-${current}`}
                >
                    <p className="uppercase tracking-[0.2em] text-[10px] font-bold text-white mb-1">
                        {slide.label || "Philosophy"}
                    </p>
                    {slide.title && (
                        <h4 className="text-xl font-serif text-white">{slide.title}</h4>
                    )}
                </motion.div>
            </div>

            {/* External Link Icon Hint */}
            {slide.link && (
                <div className="absolute top-4 right-4 z-20 p-2 bg-black/30 backdrop-blur-md rounded-full text-white/70 pointer-events-none">
                    <ExternalLink size={14} />
                </div>
            )}
        </div>
    );
}

function SlideContent({ slide }) {
    const Wrapper = ({ children }) => {
        const isExternal = slide.link && slide.link.startsWith('http');
        if (slide.link) {
            return (
                <Link
                    href={slide.link}
                    target={isExternal ? "_blank" : undefined}
                    className="block w-full h-full cursor-pointer relative"
                >
                    {children}
                </Link>
            );
        }
        return <div className="w-full h-full relative">{children}</div>;
    };

    return (
        <Wrapper>
            {slide.type === "video" ? (
                <VideoPlayer src={slide.src} />
            ) : (
                <Image
                    src={slide.src}
                    alt={slide.alt || "Philosophy Image"}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                />
            )}
        </Wrapper>
    );
}
