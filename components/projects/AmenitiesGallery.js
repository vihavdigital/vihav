"use client";

import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Expand } from "lucide-react";

// Helper to format image name
const formatImageName = (path) => {
    if (!path) return "";
    const fileName = path.split('/').pop().split('.')[0];
    return fileName
        .replace(/[-_]/g, ' ') // Replace hyphens/underscores with spaces
        .replace(/[0-9]/g, '') // Remove numbers (optional, but requested "optimise it accordingly" often implies cleaning clutter)
        // actually, keep numbers if they are part of the name like "Wing A", but maybe remove "1", "2"?
        // Use simple clean up first.
        .trim();
};

// Helper for parallax cards
function GalleryCard({ img, idx, isLightMode, categoryLabel, itemLabel, onClick, onInView }) {
    // Extract formatted name
    const displayName = formatImageName(img);

    return (
        <motion.div
            onViewportEnter={() => onInView(idx)}
            viewport={{ margin: "-40% 0px -40% 0px" }} // Trigger when card is mostly in view
            className={`relative flex-none w-[85vw] md:w-[600px] aspect-video md:aspect-[16/10] rounded-lg overflow-hidden snap-center md:snap-start group cursor-pointer border ${isLightMode ? 'border-black/5 bg-white shadow-xl' : 'border-white/5 bg-neutral-900 shadow-2xl'}`}
            onClick={onClick}
        >
            <div className="absolute inset-0 overflow-hidden">
                <Image
                    src={img}
                    alt={displayName}
                    fill
                    className="object-cover transition-transform duration-[1.5s] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105 opacity-100"
                    sizes="(max-width: 768px) 85vw, 600px"
                    draggable={false}
                />
            </div>

            {/* Cinematic Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

            {/* Zoom Icon */}
            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-white/20 backdrop-blur-md p-2 rounded-full text-white border border-white/30">
                    <Expand size={20} />
                </div>
            </div>

            {/* Content overlay */}
            <div className="absolute bottom-0 left-0 p-6 md:p-8 w-full transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <div className="overflow-hidden mb-1">
                    <span className="text-gold-400 text-[10px] md:text-xs uppercase tracking-[0.3em] font-bold block">
                        {categoryLabel}
                    </span>
                </div>
                <div className="overflow-hidden">
                    <h3 className="text-xl md:text-2xl font-serif text-white group-hover:text-gold-400 transition-colors duration-300 capitalize">
                        {displayName || `${itemLabel} ${idx + 1}`}
                    </h3>
                </div>
            </div>
        </motion.div>
    );
}

// Lightbox Component (unchanged)
// ...

export default function AmenitiesGallery({ images, isLightMode = false, categoryLabel = "Lifestyle", itemLabel = "Amenity", onIndexChange }) {
    const scrollRef = useRef(null);
    const [selectedImage, setSelectedImage] = useState(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
    // Internal state can be removed if we trust parent, but lifting strictly is better?
    // Let's just use the callback.

    // Track actual movement to distinguish click vs drag
    const hasMoved = useRef(false);

    const { scrollXProgress } = useScroll({ container: scrollRef });

    if (!images || images.length === 0) return null;

    // Drag to Scroll Logic
    const handleMouseDown = (e) => {
        setIsDragging(true);
        hasMoved.current = false;
        setStartX(e.pageX - scrollRef.current.offsetLeft);
        setScrollLeft(scrollRef.current.scrollLeft);
    };

    const handleMouseLeave = () => {
        setIsDragging(false);
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - scrollRef.current.offsetLeft;
        const walk = (x - startX) * 2.5; // Tuned sensitivity
        scrollRef.current.scrollLeft = scrollLeft - walk;
        if (Math.abs(x - startX) > 5) {
            hasMoved.current = true;
        }
    };

    return (
        <div className="relative group py-2">
            {/* Header Removed as requested to reduce space */}

            {/* Slider Track - Updated for Drag & Landscape */}
            <div
                ref={scrollRef}
                className="flex gap-4 md:gap-8 overflow-x-auto pb-4 cursor-grab active:cursor-grabbing -mx-4 px-4 md:mx-0 md:px-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] select-none snap-x snap-proximity"
                style={{ scrollBehavior: isDragging ? 'auto' : 'smooth' }}
                onMouseDown={handleMouseDown}
                onMouseLeave={handleMouseLeave}
                onMouseUp={handleMouseUp}
                onMouseMove={handleMouseMove}
                onDragStart={(e) => e.preventDefault()}
            >
                {images.map((img, idx) => (
                    <GalleryCard
                        key={idx}
                        img={img}
                        idx={idx}
                        isLightMode={isLightMode}
                        categoryLabel={categoryLabel}
                        itemLabel={itemLabel}
                        onInView={(idx) => {
                            // Call parent if exists
                            if (onIndexChange) onIndexChange(idx);
                        }}
                        onClick={() => {
                            if (!hasMoved.current) setSelectedImage(img);
                        }}
                    />
                ))}

                <div className="flex-none w-[5vw]" />
            </div>

            <AnimatePresence>
                {selectedImage && (
                    <Lightbox selectedImage={selectedImage} setSelectedImage={setSelectedImage} images={images} />
                )}
            </AnimatePresence>
        </div>
    );
}

// Lightbox Component
function Lightbox({ selectedImage, setSelectedImage, images }) {
    const [scale, setScale] = useState(1);

    // Zoom toggle
    const handleZoomToggle = (e) => {
        e.stopPropagation();
        setScale(prev => prev > 1 ? 1 : 2.5);
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-black/95 backdrop-blur-xl flex items-center justify-center p-0 md:p-12"
            onClick={() => setSelectedImage(null)}
        >
            <button className="absolute top-6 right-6 text-white hover:text-gold-400 z-50 p-2 bg-white/10 rounded-full" onClick={() => setSelectedImage(null)}>
                <X size={24} />
            </button>

            <div className="relative w-full h-full flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
                {scale === 1 && (
                    <>
                        <button
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white z-50 p-4 hover:bg-white/10 rounded-full transition-all"
                            onClick={() => {
                                const idx = images.indexOf(selectedImage);
                                setSelectedImage((images[(idx - 1 + images.length) % images.length]));
                            }}
                        >
                            <ChevronLeft size={32} />
                        </button>
                        <button
                            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white z-50 p-4 hover:bg-white/10 rounded-full transition-all"
                            onClick={() => {
                                const idx = images.indexOf(selectedImage);
                                setSelectedImage(images[(idx + 1) % images.length]);
                            }}
                        >
                            <ChevronRight size={32} />
                        </button>
                    </>
                )}

                <div className="relative w-full h-full overflow-hidden flex items-center justify-center" onDoubleClick={handleZoomToggle}>
                    <motion.div
                        animate={{ scale }}
                        transition={{ type: "spring", stiffness: 200, damping: 30 }}
                        className="relative w-full h-full"
                        style={{ cursor: scale > 1 ? 'zoom-out' : 'zoom-in' }}
                    >
                        <Image
                            src={selectedImage}
                            alt="Fullscreen"
                            fill
                            className="object-contain"
                            priority
                            draggable={false}
                        />
                    </motion.div>
                </div>
            </div>
        </motion.div>
    )
}
