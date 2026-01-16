"use client";

import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from "framer-motion";
import { X, ArrowRight, ArrowLeft, Expand, ChevronLeft, ChevronRight } from "lucide-react";

export default function ProjectGallery({ images, className = "" }) {
    const scrollRef = useRef(null);
    const [selectedImage, setSelectedImage] = useState(null);
    const { scrollXProgress } = useScroll({ container: scrollRef });
    const scaleX = useSpring(scrollXProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    // Keyboard Navigation for Lightbox
    useEffect(() => {
        if (!selectedImage) return;

        const handleKeyDown = (e) => {
            if (e.key === "Escape") {
                setSelectedImage(null);
            } else if (e.key === "ArrowLeft") {
                const currentIndex = images.indexOf(selectedImage);
                const prevIndex = (currentIndex - 1 + images.length) % images.length;
                setSelectedImage(images[prevIndex]);
            } else if (e.key === "ArrowRight") {
                const currentIndex = images.indexOf(selectedImage);
                const nextIndex = (currentIndex + 1) % images.length;
                setSelectedImage(images[nextIndex]);
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [selectedImage, images]);

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
                    className="flex gap-4 md:gap-8 px-4 md:px-[10vw] overflow-x-auto pb-6 md:pb-12 scrollbar-none snap-x snap-mandatory pt-6 md:pt-10"
                    ref={scrollRef}
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {images.map((media, idx) => {
                        const isVideo = typeof media === 'string' && (media.endsWith('.mp4') || media.endsWith('.webm'));

                        return (
                            <motion.div
                                key={idx}
                                className="relative flex-none w-[85vw] md:w-[60vw] lg:w-[45vw] aspect-[16/9] md:aspect-[21/9] snap-center group/card cursor-pointer bg-neutral-900 overflow-hidden rounded-lg shadow-lg"
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.05 }}
                                onClick={() => setSelectedImage(media)}
                            >
                                {isVideo ? (
                                    <video
                                        src={media}
                                        className="w-full h-full object-cover opacity-90 group-hover/card:opacity-100"
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
                                        className="object-cover transition-transform duration-700 group-hover/card:scale-105 opacity-90 group-hover/card:opacity-100"
                                        sizes="(max-width: 768px) 85vw, (max-width: 1024px) 60vw, 45vw"
                                    />
                                )}

                                <div className="absolute inset-0 bg-black/10 group-hover/card:bg-transparent transition-colors" />

                                <div className="absolute bottom-4 right-4 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300">
                                    <div className="bg-black/40 backdrop-blur-md p-2 rounded-full text-white border border-white/20">
                                        <Expand size={16} />
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}

                    {/* Spacer */}
                    <div className="flex-none w-[5vw]" />
                </div>
            </div>

            {/* Dynamic Scroll Progress Bar - Hidden on mobile to save space if needed, or kept minimal */}
            <div className="container mx-auto px-6 mt-4 relative h-0.5 md:h-1 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                    style={{ scaleX }}
                    className="absolute top-0 left-0 h-full w-full bg-gold-400 origin-left"
                />
            </div>

            {/* Lightbox */}
            <AnimatePresence>
                {selectedImage && (
                    <Lightbox
                        selectedImage={selectedImage}
                        setSelectedImage={setSelectedImage}
                        images={images}
                    />
                )}
            </AnimatePresence>
        </section>
    );
}

// Separated Lightbox Component for cleaner state management
function Lightbox({ selectedImage, setSelectedImage, images }) {
    const [scale, setScale] = useState(1);

    // Reset scale when image changes
    useEffect(() => {
        setScale(1);
    }, [selectedImage]);

    const handleZoomToggle = (e) => {
        e.stopPropagation();
        setScale(prev => prev > 1 ? 1 : 2.5);
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-black/95 backdrop-blur-xl flex items-center justify-center p-0 md:p-12 overflow-hidden"
            onClick={() => setSelectedImage(null)}
        >
            <button
                className="absolute top-4 right-4 md:top-8 md:right-8 text-white hover:text-gold-400 z-50 p-2 bg-black/20 rounded-full backdrop-blur-md"
                onClick={() => setSelectedImage(null)}
            >
                <X size={24} />
            </button>

            {/* Prev/Next Buttons - Hidden when zoomed */}
            {scale === 1 && (
                <>
                    <button
                        className="absolute left-2 md:left-8 top-1/2 -translate-y-1/2 text-white/50 hover:text-white p-2 z-50 transition-all hover:scale-110"
                        onClick={(e) => {
                            e.stopPropagation();
                            const idx = images.indexOf(selectedImage);
                            const prev = (idx - 1 + images.length) % images.length;
                            setSelectedImage(images[prev]);
                        }}
                    >
                        <ChevronLeft size={40} />
                    </button>
                    <button
                        className="absolute right-2 md:right-8 top-1/2 -translate-y-1/2 text-white/50 hover:text-white p-2 z-50 transition-all hover:scale-110"
                        onClick={(e) => {
                            e.stopPropagation();
                            const idx = images.indexOf(selectedImage);
                            const next = (idx + 1) % images.length;
                            setSelectedImage(images[next]);
                        }}
                    >
                        <ChevronRight size={40} />
                    </button>
                </>
            )}

            <motion.div
                key={selectedImage}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="relative w-full h-full flex items-center justify-center"
                // Drag logic only when not zoomed
                drag={scale === 1 ? "x" : false}
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={(e, { offset, velocity }) => {
                    if (scale > 1) return;
                    if (offset.x < -50) {
                        const idx = images.indexOf(selectedImage);
                        setSelectedImage(images[(idx + 1) % images.length]);
                    } else if (offset.x > 50) {
                        const idx = images.indexOf(selectedImage);
                        setSelectedImage(images[(idx - 1 + images.length) % images.length]);
                    }
                }}
                onClick={(e) => e.stopPropagation()}
            >
                {selectedImage.endsWith('.mp4') || selectedImage.endsWith('.webm') ? (
                    <video
                        src={selectedImage}
                        className="max-w-full max-h-[100vh] object-contain"
                        controls
                        autoPlay
                        playsInline
                    />
                ) : (
                    <div
                        className="relative w-full h-full flex items-center justify-center overflow-hidden"
                        onDoubleClick={handleZoomToggle}
                    >
                        <motion.div
                            animate={{ scale: scale }}
                            transition={{ type: "spring", stiffness: 200, damping: 30 }}
                            className="relative w-full h-full"
                            style={{ cursor: scale > 1 ? 'zoom-out' : 'zoom-in' }}
                        >
                            <Image
                                src={selectedImage}
                                alt="Fullscreen Preview"
                                fill
                                className="object-contain"
                                sizes="100vw"
                                draggable={false}
                                priority
                            />
                        </motion.div>
                    </div>
                )}
            </motion.div>
        </motion.div>
    );
}
