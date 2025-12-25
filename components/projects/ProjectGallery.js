"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { X, ArrowRight, Expand } from "lucide-react";

export default function ProjectGallery({ images }) {
    const scrollRef = useRef(null);
    const [selectedImage, setSelectedImage] = useState(null);

    // Horizontal Scroll Logic
    // We want a container that scrolls horizontally with mouse wheel or drag.
    // However, for simplicity and smoothness in this Next.js setup, we'll use a flex container 
    // with overflow-x-auto but styled heavily to hide scrollbars and allow drag.

    // Note: A true "ScrollTrigger" pin effect requires heavier libs like GSAP or extensive Framer Motion setup.
    // Here we will use a "Cinematic Reel" feel.

    if (!images || images.length === 0) return null;

    return (
        <section className="bg-luxury-black text-white py-24 border-t border-white/5 overflow-hidden">
            <div className="container mx-auto px-6 mb-12 flex justify-between items-end">
                <div>
                    <span className="text-gold-400 uppercase tracking-[0.25em] text-xs font-bold mb-4 block">Immersive Views</span>
                    <h2 className="font-serif text-4xl md:text-5xl">Visual Tour</h2>
                </div>
                <div className="hidden md:flex items-center gap-2 text-white/50 text-sm uppercase tracking-widest">
                    <ArrowRight size={16} className="animate-pulse" /> Scroll to explore
                </div>
            </div>

            {/* Horizontal Slider Container */}
            <div
                className="flex gap-8 px-6 md:px-[10vw] overflow-x-auto pb-12 scrollbar-none snap-x snap-mandatory"
                ref={scrollRef}
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
                {images.map((media, idx) => {
                    const isVideo = typeof media === 'string' && (media.endsWith('.mp4') || media.endsWith('.webm'));

                    return (
                        <motion.div
                            key={idx}
                            className="relative flex-none w-[85vw] md:w-[60vw] lg:w-[45vw] aspect-[16/9] md:aspect-[21/9] snap-center group cursor-pointer bg-neutral-900 overflow-hidden"
                            initial={{ opacity: 0, x: 100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: idx * 0.1 }}
                            onClick={() => setSelectedImage(media)}
                        >
                            {isVideo ? (
                                <video
                                    src={media}
                                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-1000"
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                />
                            ) : (
                                <img
                                    src={media}
                                    alt={`Gallery ${idx}`}
                                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                                />
                            )}

                            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />

                            <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center rounded-full text-white">
                                    <Expand size={20} />
                                </div>
                            </div>
                        </motion.div>
                    );
                })}

                {/* Spacer at end */}
                <div className="flex-none w-[10vw]" />
            </div>

            {/* Custom Scrollbar Indicator (Optional visual cue) */}
            <div className="container mx-auto px-6 mt-4">
                <div className="w-full h-px bg-white/10 relative">
                    <div className="absolute top-0 left-0 h-full w-1/4 bg-gold-400" />
                    {/* Static visual cue only since we can't easily track native scroll without more state */}
                </div>
            </div>

            {/* Lightbox */}
            {selectedImage && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[200] bg-black/95 backdrop-blur-xl flex items-center justify-center p-0 md:p-12"
                    onClick={() => setSelectedImage(null)}
                >
                    <button className="absolute top-8 right-8 text-white hover:text-gold-400 z-50">
                        <X size={32} />
                    </button>
                    <motion.div
                        layoutId={`img-${selectedImage}`}
                        className="relative w-full h-full flex items-center justify-center"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {selectedImage.endsWith('.mp4') || selectedImage.endsWith('.webm') ? (
                            <video
                                src={selectedImage}
                                className="max-w-full max-h-[90vh] object-contain shadow-2xl"
                                controls
                                autoPlay
                            />
                        ) : (
                            <img
                                src={selectedImage}
                                className="max-w-full max-h-[90vh] object-contain shadow-2xl"
                            />
                        )}
                        <p className="absolute bottom-4 left-0 w-full text-center text-white/50 text-xs tracking-[0.2em] uppercase">
                            Vihav Group &copy; Exclusive Imagery
                        </p>
                    </motion.div>
                </motion.div>
            )}
        </section>
    );
}
