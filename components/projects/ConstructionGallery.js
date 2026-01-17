"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, HardHat, ZoomIn } from "lucide-react";

export default function ConstructionGallery({ images, theme }) {
    const [selectedImage, setSelectedImage] = useState(null);

    // Filter out invalid images
    const validImages = images && images.length > 0 ? images : null;

    if (!validImages) return null;

    const openLightbox = (index) => setSelectedImage(index);
    const closeLightbox = () => setSelectedImage(null);
    const nextImage = (e) => {
        e.stopPropagation();
        setSelectedImage((prev) => (prev + 1) % validImages.length);
    };
    const prevImage = (e) => {
        e.stopPropagation();
        setSelectedImage((prev) => (prev - 1 + validImages.length) % validImages.length);
    };

    return (
        <div className="mt-8">
            <div className="mb-6 flex items-center justify-between">
                <h3 className={`font-serif text-2xl ${theme.text}`}>Project Status Gallery</h3>
            </div>

            {/* Grid View (Uniform Size) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {validImages.map((img, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="relative group cursor-pointer overflow-hidden rounded-xl bg-neutral-900 border border-white/5 aspect-[4/3]"
                        onClick={() => openLightbox(idx)}
                    >
                        <img
                            src={img}
                            alt={`Construction Update ${idx + 1}`}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                            <ZoomIn className="text-white" size={32} />
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {selectedImage !== null && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4"
                        onClick={closeLightbox}
                    >
                        {/* Close Button */}
                        <button
                            onClick={closeLightbox}
                            className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors"
                        >
                            <X size={32} />
                        </button>

                        {/* Navigation */}
                        {validImages.length > 1 && (
                            <>
                                <button
                                    onClick={prevImage}
                                    className="absolute left-4 md:left-8 text-white/50 hover:text-white hover:scale-125 transition-all p-4"
                                >
                                    <ChevronLeft size={40} />
                                </button>
                                <button
                                    onClick={nextImage}
                                    className="absolute right-4 md:right-8 text-white/50 hover:text-white hover:scale-125 transition-all p-4"
                                >
                                    <ChevronRight size={40} />
                                </button>
                            </>
                        )}

                        {/* Image */}
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            key={selectedImage}
                            className="max-w-7xl max-h-[85vh] w-full relative"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="relative w-full h-full flex items-center justify-center">
                                <img
                                    src={validImages[selectedImage]}
                                    alt="Construction Full"
                                    className="max-w-full max-h-[80vh] object-contain rounded shadow-2xl"
                                />
                            </div>

                            <div className="mt-4 text-center">
                                <span className="text-white/50 text-sm tracking-widest uppercase font-serif">
                                    Image {selectedImage + 1} of {validImages.length}
                                </span>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
