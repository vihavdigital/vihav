"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ChevronLeft } from "lucide-react";

const SLIDES = [
    {
        id: 1,
        type: "video",
        src: "/vihav-hero-video.webm", // Luxury Interior
        title: "",
        subtitle: ""
    },
    {
        id: 2,
        type: "video",
        src: "https://assets.mixkit.co/videos/preview/mixkit-modern-architecture-building-with-glass-windows-4700-large.mp4", // Architecture
        title: "Curated <br/> <span class='text-white/80 italic font-light'>Collections</span>",
        subtitle: "Experience a life of uncompromising luxury in our handpicked residential sanctuaries."
    },
    {
        id: 3,
        type: "video",
        src: "https://videos.pexels.com/video-files/7578552/7578552-uhd_2560_1440_30fps.mp4", // Lifestyle/Aerial
        title: "Corporate <br/> <span class='text-white/80 italic font-light'>Excellence</span>",
        subtitle: "State-of-the-art panoramic workspaces designed to inspire ambition and success."
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

    // Auto-advance removed as per request

    return (
        <section className="relative h-screen w-full overflow-hidden bg-luxury-black text-white">
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
                        <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-full object-cover brightness-50 transform scale-105"
                        >
                            <source src={SLIDES[currentSlide].src} type={SLIDES[currentSlide].src.endsWith('.webm') ? "video/webm" : "video/mp4"} />
                        </video>
                    ) : (
                        <div
                            className="w-full h-full bg-cover bg-center brightness-50 transform scale-105"
                            style={{ backgroundImage: `url(${SLIDES[currentSlide].src})` }}
                        />
                    )}

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-luxury-black via-transparent to-black/30" />
                </motion.div>
            </AnimatePresence>

            {/* Content Layer */}
            <div className="relative z-10 h-full container mx-auto px-6 flex flex-col justify-center items-center text-center">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentSlide}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -30 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="max-w-4xl"
                    >
                        <h1
                            className="font-serif text-6xl md:text-8xl lg:text-9xl font-medium text-white mb-8 leading-none tracking-tight"
                            dangerouslySetInnerHTML={{ __html: SLIDES[currentSlide].title }}
                        />
                        <p className="max-w-xl mx-auto text-gray-200 text-lg md:text-xl font-light mb-12 leading-relaxed tracking-wide">
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
                    <button onClick={prevSlide} className="p-2 border border-white/20 hover:bg-white hover:text-black transition-all rounded-full">
                        <ChevronLeft size={24} />
                    </button>
                    <button onClick={nextSlide} className="p-2 border border-white/20 hover:bg-white hover:text-black transition-all rounded-full">
                        <ChevronRight size={24} />
                    </button>
                </div>
            </div>
        </section>
    );
}
