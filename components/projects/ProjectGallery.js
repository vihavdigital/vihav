"use client";

import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { X, ArrowRight, ArrowLeft, Expand } from "lucide-react";

export default function ProjectGallery({ images, className = "" }) {
    const scrollRef = useRef(null);
    const [selectedImage, setSelectedImage] = useState(null);
    const { scrollXProgress } = useScroll({ container: scrollRef });
    const scaleX = useSpring(scrollXProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    if (!images || images.length === 0) {
        // Return a hidden div with the ref to satisfy useScroll
        return <div ref={scrollRef} className="hidden" />;
    }

    return (
        <section className={`bg-luxury-black text-white relative group ${className}`}>

            {/* Horizontal Slider Container */}
            <div className="relative group/gallery">
                {/* Navigation Buttons (Desktop) */}
                <button
                    onClick={() => scrollRef.current.scrollBy({ left: -400, behavior: 'smooth' })}
                    className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-black/50 backdrop-blur-md border border-white/10 flex items-center justify-center text-white opacity-0 group-hover/gallery:opacity-100 transition-opacity disabled:opacity-0 hover:bg-black/80"
                    aria-label="Scroll Left"
                >
                    <ArrowLeft size={24} />
                </button>
                <button
                    onClick={() => scrollRef.current.scrollBy({ left: 400, behavior: 'smooth' })}
                    className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-black/50 backdrop-blur-md border border-white/10 flex items-center justify-center text-white opacity-0 group-hover/gallery:opacity-100 transition-opacity hover:bg-black/80"
                    aria-label="Scroll Right"
                >
                    <ArrowRight size={24} />
                </button>

                <div
                    className="flex gap-8 px-6 md:px-[10vw] overflow-x-auto pb-12 scrollbar-none snap-x snap-mandatory pt-10"
                    ref={scrollRef}
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {images.map((media, idx) => {
                        const isVideo = typeof media === 'string' && (media.endsWith('.mp4') || media.endsWith('.webm'));

                        return (
                            <motion.div
                                key={idx}
                                className="relative flex-none w-[85vw] md:w-[60vw] lg:w-[45vw] aspect-[16/9] md:aspect-[21/9] snap-center group/card cursor-pointer bg-neutral-900 overflow-hidden rounded-sm"
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: idx * 0.1 }}
                                onClick={() => setSelectedImage(media)}
                            >
                                {isVideo ? (
                                    <video
                                        src={media}
                                        className="w-full h-full object-cover opacity-80 group-hover/card:opacity-100 transition-opacity duration-1000"
                                        autoPlay
                                        muted
                                        loop
                                        playsInline
                                    />
                                ) : (
                                    <Image
                                        src={media}
                                        alt={`Gallery Image ${idx + 1}`}
                                        fill
                                        className="object-cover transition-transform duration-1000 group-hover/card:scale-105 opacity-80 group-hover/card:opacity-100"
                                        sizes="(max-width: 768px) 85vw, (max-width: 1024px) 60vw, 45vw"
                                    />
                                )}

                                <div className="absolute inset-0 bg-black/20 group-hover/card:bg-transparent transition-colors" />

                                <div className="absolute bottom-6 right-6 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300">
                                    <div className="w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center rounded-full text-white">
                                        <Expand size={20} />
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}

                    {/* Spacer at end for snap feel */}
                    <div className="flex-none w-[10vw]" />
                </div>
            </div>

            {/* Dynamic Scroll Progress Bar */}
            <div className="container mx-auto px-6 mt-4 relative h-1 bg-white/20 rounded-full overflow-hidden">
                <motion.div
                    style={{ scaleX }}
                    className="absolute top-0 left-0 h-full w-full bg-gold-400 origin-left"
                />
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
                    <button
                        className="absolute top-8 right-8 text-white hover:text-gold-400 z-50 p-2"
                        onClick={() => setSelectedImage(null)}
                        aria-label="Close Lightbox"
                    >
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
                            <div className="relative w-full h-full">
                                <Image
                                    src={selectedImage}
                                    alt="Gallery Preview"
                                    fill
                                    className="object-contain shadow-2xl"
                                    sizes="100vw"
                                />
                            </div>
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
