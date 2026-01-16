"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";

export default function RealPicturesGallery({ images }) {
    const [selectedImage, setSelectedImage] = useState(null);

    if (!images || images.length === 0) return null;

    return (
        <div className="w-full">
            {/* Mosaic Grid: A premium, varying layout using CSS Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[250px] md:auto-rows-[300px]">
                {images.map((img, idx) => {
                    // Pattern: Large item every 3rd or 4th image for visual variety
                    const isLarge = idx % 5 === 0 || idx === 1;
                    const spanClass = isLarge ? "md:col-span-2 md:row-span-2" : "md:col-span-1 md:row-span-1";

                    return (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: idx * 0.05, ease: "easeOut" }}
                            className={`relative group cursor-pointer overflow-hidden rounded-sm ${spanClass}`}
                            onClick={() => setSelectedImage(img)}
                        >
                            <Image
                                src={img}
                                alt={`Real Site Image ${idx + 1}`}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                                sizes={isLarge ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 768px) 100vw, 25vw"}
                            />

                            {/* Refined Overlay - Minimalist */}
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="bg-white/10 backdrop-blur-md p-3 rounded-full text-white border border-white/30 transform scale-90 group-hover:scale-100 transition-transform">
                                    <Maximize2 size={24} strokeWidth={1.5} />
                                </div>
                            </div>
                        </motion.div>
                    );
                })}
            </div>

            {/* Lightbox */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[200] bg-black/95 backdrop-blur-2xl flex items-center justify-center p-4 backdrop-grayscale"
                        onClick={() => setSelectedImage(null)}
                    >
                        {/* Controls */}
                        <button
                            className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors z-50 p-2"
                            onClick={() => setSelectedImage(null)}
                        >
                            <X size={32} strokeWidth={1} />
                        </button>

                        <button
                            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white/50 hover:text-white p-4 transition-all z-50 hover:scale-110"
                            onClick={(e) => {
                                e.stopPropagation();
                                const idx = images.indexOf(selectedImage);
                                const prev = (idx - 1 + images.length) % images.length;
                                setSelectedImage(images[prev]);
                            }}
                        >
                            <ChevronLeft size={48} strokeWidth={1} />
                        </button>

                        <button
                            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white/50 hover:text-white p-4 transition-all z-50 hover:scale-110"
                            onClick={(e) => {
                                e.stopPropagation();
                                const idx = images.indexOf(selectedImage);
                                const next = (idx + 1) % images.length;
                                setSelectedImage(images[next]);
                            }}
                        >
                            <ChevronRight size={48} strokeWidth={1} />
                        </button>

                        {/* Image */}
                        <motion.div
                            key={selectedImage}
                            initial={{ opacity: 0, scale: 0.98 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.98 }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            className="relative w-full h-full max-w-7xl max-h-[90vh] flex items-center justify-center"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <Image
                                src={selectedImage}
                                alt="Real Site Fullscreen"
                                fill
                                className="object-contain drop-shadow-2xl"
                                priority
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
