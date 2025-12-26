"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, HardHat } from "lucide-react";

export default function ConstructionGallery({ images, theme }) {
    const [selectedImage, setSelectedImage] = useState(null);

    // Filter out invalid images if necessary, or just use as is
    const validImages = images && images.length > 0 ? images : null;

    if (!validImages) {
        // Fallback View
        return (
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {[1, 2, 3, 4].map((item) => (
                    <div key={item} className="aspect-square relative overflow-hidden rounded-lg bg-neutral-800 border border-white/5 flex items-center justify-center group">
                        <HardHat className="text-gray-600 group-hover:text-white transition-colors" size={32} />
                    </div>
                ))}
            </div>
        );
    }

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
        <>
            {/* Grid View */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {validImages.map((img, idx) => (
                    <motion.div
                        key={idx}
                        whileHover={{ scale: 1.02 }}
                        className="aspect-square relative overflow-hidden rounded-lg group cursor-pointer border border-white/5"
                        onClick={() => openLightbox(idx)}
                    >
                        <img
                            src={img}
                            alt={`Construction Update ${idx + 1}`}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                            <span className="text-white text-xs uppercase tracking-widest border border-white/30 px-4 py-2 rounded-full hover:bg-white hover:text-black transition-colors">
                                Expand
                            </span>
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
                            className="max-w-5xl max-h-[80vh] w-full relative"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="relative aspect-video w-full rounded-lg overflow-hidden border border-white/10 shadow-2xl">
                                <img
                                    src={validImages[selectedImage]}
                                    alt="Construction Full"
                                    className="w-full h-full object-contain bg-black"
                                />
                            </div>
                            <div className="mt-4 text-center">
                                <span className="text-white/50 text-sm tracking-widest uppercase">
                                    Update {selectedImage + 1} / {validImages.length}
                                </span>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
