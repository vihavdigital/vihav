"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

// Helper for parallax cards
function GalleryCard({ img, idx, scrollXProgress, totalCards, isLightMode }) {

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: idx * 0.1, ease: "easeOut" }}
            className={`relative flex-none w-[80vw] md:w-[400px] aspect-[4/5] md:aspect-[3/4] rounded-none overflow-hidden snap-center group border ${isLightMode ? 'border-black/5 bg-white shadow-xl' : 'border-white/5 bg-neutral-900 shadow-2xl'}`}
        >
            <div className="absolute inset-0 overflow-hidden">
                <Image
                    src={img}
                    alt={`Amenity ${idx + 1}`}
                    fill
                    className="object-cover transition-transform duration-[1.5s] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-110 opacity-100" // kept opacity 100 for light theme crispness
                    sizes="(max-width: 768px) 80vw, 400px"
                />
            </div>

            {/* Cinematic Gradient - Always dark gradient for text legibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80" />

            {/* Content overlay with slide-up effect */}
            <div className="absolute bottom-0 left-0 p-8 w-full transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <div className="overflow-hidden mb-2">
                    <span className="text-gold-400 text-[10px] uppercase tracking-[0.3em] font-bold block transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 delay-75">
                        Lifestyle
                    </span>
                </div>
                <div className="overflow-hidden">
                    <h3 className="text-2xl md:text-3xl font-serif text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 delay-100">
                        Amenity {idx + 1}
                    </h3>
                </div>
                <div className="w-12 h-[1px] bg-gold-400 mt-4 origin-left transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 delay-200" />
            </div>
        </motion.div>
    );
}

export default function AmenitiesGallery({ images, isLightMode = false }) {
    const scrollRef = useRef(null);
    const { scrollXProgress } = useScroll({ container: scrollRef });

    // Smooth progress bar
    const scaleX = useSpring(scrollXProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    if (!images || images.length === 0) return null;

    const scroll = (offset) => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: offset, behavior: 'smooth' });
        }
    };

    const textColor = isLightMode ? 'text-black/40' : 'text-white/40';
    const borderColor = isLightMode ? 'border-black/10' : 'border-white/10';
    const hoverColor = isLightMode ? 'hover:text-black hover:bg-black/5 hover:border-black/30' : 'hover:text-white hover:bg-white/10 hover:border-white/30';
    const progressBg = isLightMode ? 'bg-black/5' : 'bg-white/5';
    const btnTextColor = isLightMode ? 'text-black/70' : 'text-white/70';

    return (
        <div className="relative group py-8">
            {/* Header / Controls */}
            <div className="flex justify-between items-end px-6 container mx-auto mb-10">
                <div className="hidden md:block">
                    <span className={`${textColor} text-xs tracking-widest uppercase`}>Explore the Lifestyle</span>
                </div>
                <div className="flex gap-4">
                    <button
                        onClick={() => scroll(-400)}
                        className={`w-12 h-12 rounded-full border ${borderColor} flex items-center justify-center ${btnTextColor} ${hoverColor} transition-all active:scale-95`}
                    >
                        <ArrowLeft size={20} className="stroke-1" />
                    </button>
                    <button
                        onClick={() => scroll(400)}
                        className={`w-12 h-12 rounded-full border ${borderColor} flex items-center justify-center ${btnTextColor} ${hoverColor} transition-all active:scale-95`}
                    >
                        <ArrowRight size={20} className="stroke-1" />
                    </button>
                </div>
            </div>

            {/* Cinematic Slider Track */}
            <div
                ref={scrollRef}
                className="flex gap-6 md:gap-8 overflow-x-auto pb-12 px-6 md:px-[10vw] scrollbar-none snap-x snap-mandatory [&::-webkit-scrollbar]:hidden"
            >
                {images.map((img, idx) => (
                    <GalleryCard
                        key={idx}
                        img={img}
                        idx={idx}
                        scrollXProgress={scrollXProgress}
                        totalCards={images.length}
                        isLightMode={isLightMode}
                    />
                ))}

                {/* Trailing Spacer */}
                <div className="flex-none w-[10vw]" />
            </div>

            {/* Minimalist Progress Line */}
            <div className={`absolute bottom-0 left-0 w-full h-[1px] ${progressBg}`}>
                <motion.div
                    style={{ scaleX }}
                    className="absolute top-0 left-0 h-full w-full bg-gold-400 origin-left"
                />
            </div>
        </div>
    );
}
