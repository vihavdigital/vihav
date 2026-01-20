"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, ZoomIn } from "lucide-react";

export default function Gallery({ images }) {
    const [selectedImage, setSelectedImage] = useState(null);

    // Simple masonry-like grid logic: Just a grid for now, but styled to look premium
    // 1st image is large (span 2 cols), others are smaller.

    if (!images || images.length === 0) return null;

    return (
        <section className="py-24 bg-white text-black">
            <div className="container mx-auto px-6">
                <span className="text-gold-600 uppercase tracking-[0.25em] text-xs font-bold mb-8 block">Project Gallery</span>
                <h2 className="font-serif text-4xl mb-12">Immersive Views</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[300px]">
                    {images.map((img, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className={`relative group overflow-hidden cursor-pointer ${idx === 0 ? "md:col-span-2 md:row-span-2" : ""}`}
                            onClick={() => setSelectedImage(img)}
                        >
                            <Image
                                src={img}
                                alt={`Gallery ${idx}`}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                                sizes="(max-width: 768px) 100vw, 33vw"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                                <ZoomIn className="text-white opacity-0 group-hover:opacity-100 transition-opacity transform scale-75 group-hover:scale-100" size={32} />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Lightbox */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[200] bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm"
                        onClick={() => setSelectedImage(null)}
                    >
                        <button className="absolute top-8 right-8 text-white hover:text-gold-400">
                            <X size={32} />
                        </button>
                        <motion.img
                            layoutId={`img-${selectedImage}`}
                            src={selectedImage}
                            className="max-w-full max-h-[90vh] object-contain shadow-2xl"
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
