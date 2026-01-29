"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Pause, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import Image from "next/image";
import TextReveal from "@/components/ui/TextReveal";

const TESTIMONIALS = [
    {
        id: 1,
        name: "Rajesh & Priya Desai",
        designation: "Home Owners",
        project: "Keystone Select",
        video: "/videos/niwa.mp4", // Placeholder
        thumbnail: "/images/project-images/other-images/select-featured.webp",
        quote: "Living at Keystone Select feels like a perpetual vacation. The amenities are world-class."
    },
    {
        id: 2,
        name: "Meera Patel",
        designation: "Business Partner",
        project: "Vihav Supremus",
        video: "/videos/sup-wt.webm", // Placeholder
        thumbnail: "/images/project-images/commercial/supremus/hero.jpg",
        quote: "Vihav Supremus gave our business the premium address it deserved. Clients are always impressed."
    },
    {
        id: 3,
        name: "Dr. Amit Shah",
        designation: "Resident",
        project: "Keystone 51",
        video: "/videos/niwa.mp4", // Placeholder reuse
        thumbnail: "/images/project-images/residential/keystone-51/hero.webp",
        quote: "The privacy and community at Keystone 51 is unmatched. It's truly a sanctuary."
    }
];

export default function TestimonialSection() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const videoRef = useRef(null);

    const currentTestimonial = TESTIMONIALS[currentIndex];

    // Reset video state when slide changes
    useEffect(() => {
        setIsPlaying(false);
        if (videoRef.current) {
            videoRef.current.pause();
            videoRef.current.currentTime = 0;
        }
    }, [currentIndex]);

    const togglePlay = () => {
        if (!videoRef.current) return;

        if (isPlaying) {
            videoRef.current.pause();
        } else {
            videoRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
    };

    return (
        <section className="py-24 bg-white relative overflow-hidden border-t border-border">
            {/* Background Atmosphere - Light Theme */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-[0.4]" />
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold-400/10 blur-[100px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">

                {/* Left: Text Content & Controls */}
                <div className="order-2 lg:order-1">
                    <span className="text-gold-400 uppercase tracking-[0.25em] text-xs font-bold mb-6 block">
                        Real Stories
                    </span>
                    <TextReveal
                        as="h2"
                        text="Experience The Vihav Lifestyle"
                        className="font-serif text-3xl md:text-5xl text-luxury-black mb-8 leading-tight"
                    />

                    <div className="relative min-h-[160px] mb-8">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentTestimonial.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.5 }}
                            >
                                <Quote size={40} className="text-gold-400/40 mb-4" />
                                {/* Text Color Changed to Dark Gray */}
                                <p className="text-xl md:text-2xl font-light text-gray-600 italic mb-6 leading-relaxed">
                                    "{currentTestimonial.quote}"
                                </p>

                                <div>
                                    <h4 className="text-lg font-bold text-luxury-black uppercase tracking-wider">
                                        {currentTestimonial.name}
                                    </h4>
                                    <p className="text-gold-400 text-sm font-medium">
                                        {currentTestimonial.designation} • {currentTestimonial.project}
                                    </p>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Navigation Buttons - Light Theme Styles */}
                    <div className="flex gap-4">
                        <button
                            onClick={handlePrev}
                            // Changed border to gray-200 and text to dark
                            className="w-14 h-14 rounded-full border border-gray-200 flex items-center justify-center text-luxury-black hover:bg-gold-400 hover:text-black hover:border-gold-400 transition-all duration-300 group"
                        >
                            <ChevronLeft size={24} className="group-hover:-translate-x-1 transition-transform" />
                        </button>
                        <button
                            onClick={handleNext}
                            className="w-14 h-14 rounded-full border border-gray-200 flex items-center justify-center text-luxury-black hover:bg-gold-400 hover:text-black hover:border-gold-400 transition-all duration-300 group"
                        >
                            <ChevronRight size={24} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                </div>

                {/* Right: Video Player Card */}
                <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
                    <div className="relative w-full max-w-lg aspect-[4/5] md:aspect-square lg:aspect-[4/5] bg-gray-100 rounded-2xl overflow-hidden shadow-2xl shadow-black/10 border border-gray-200 group">

                        {/* Video Layer */}
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentTestimonial.id}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.8 }}
                                className="absolute inset-0 w-full h-full"
                            >
                                <video
                                    ref={videoRef}
                                    src={currentTestimonial.video}
                                    poster={currentTestimonial.thumbnail}
                                    className="w-full h-full object-cover opacity-90"
                                    playsInline
                                    loop
                                // onClick={togglePlay} // Allow clicking video to play
                                />
                                <div className="absolute inset-0 bg-black/10 pointer-events-none" />
                            </motion.div>
                        </AnimatePresence>

                        {/* Play Button Overlay */}
                        <div
                            className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${isPlaying ? 'opacity-0 hover:opacity-100' : 'opacity-100'}`}
                        >
                            <button
                                onClick={togglePlay}
                                className="w-20 h-20 md:w-24 md:h-24 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/50 hover:scale-110 hover:bg-gold-400 hover:text-black hover:border-gold-400 transition-all duration-300 shadow-xl"
                            >
                                {isPlaying ? <Pause size={32} fill="currentColor" /> : <Play size={32} fill="currentColor" className="ml-2" />}
                            </button>
                        </div>

                        {/* Corner Accent */}
                        <div className="absolute top-6 right-6 px-4 py-2 bg-white/90 backdrop-blur-md text-black text-[10px] font-bold uppercase tracking-widest rounded-sm">
                            Watch Story
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
}
