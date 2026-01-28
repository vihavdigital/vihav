"use client";

import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from "framer-motion";
import { X, ArrowRight, ArrowLeft, Expand, ChevronLeft, ChevronRight } from "lucide-react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
};

// Helper to format image name
const formatImageName = (path) => {
    if (!path) return "";
    // Handle both local paths and URLs
    const fileName = path.split('/').pop().split('.')[0];
    return fileName
        .replace(/[-_]/g, ' ') // Replace hyphens/underscores with spaces
        .replace(/[0-9]/g, '') // Remove numbers (optional, creates cleaner look)
        .replace(/%20/g, ' ') // Handle URL encoding
        .trim();
};

export default function ProjectGallery({ images, className = "", onIndexChange, isLightMode = false, showProgress = true, showCaptions = true }) {
    // ... refs and state ...
    const scrollRef = useRef(null);
    const [selectedImage, setSelectedImage] = useState(null);
    const { scrollXProgress } = useScroll({ container: scrollRef });
    const scaleX = useSpring(scrollXProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    // Theme Helpers
    const baseTheme = isLightMode ? "text-luxury-black" : "bg-luxury-black text-white";
    const navBtnTheme = isLightMode
        ? "bg-white/50 border-black/10 text-black hover:bg-gold-400 hover:text-white"
        : "bg-black/50 border-white/10 text-white hover:bg-gold-400 hover:text-black";
    const cardBg = isLightMode ? "bg-neutral-100" : "bg-neutral-900";
    const trackColor = isLightMode ? "bg-black/10" : "bg-white/10";

    // Track active index
    const [activeIndex, setActiveIndex] = useState(0);

    // Report active index changes to parent
    useEffect(() => {
        if (onIndexChange) onIndexChange(activeIndex);
    }, [activeIndex, onIndexChange]);

    // Drag State
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [dragScrollLeft, setDragScrollLeft] = useState(0);
    const hasMoved = useRef(false);

    const handleMouseDown = (e) => {
        setIsDragging(true);
        hasMoved.current = false;
        setStartX(e.pageX - scrollRef.current.offsetLeft);
        setDragScrollLeft(scrollRef.current.scrollLeft);
    };

    const snapToNearest = () => {
        const container = scrollRef.current;
        if (!container) return;

        const items = container.querySelectorAll('[data-gallery-item]');
        if (items.length < 2) return;

        const item0 = items[0];
        const item1 = items[1];
        const stride = item1.offsetLeft - item0.offsetLeft;

        const currentScroll = container.scrollLeft;
        const targetIndex = Math.round(currentScroll / stride);
        const clampedIndex = Math.min(Math.max(targetIndex, 0), items.length - 1);

        container.scrollTo({
            left: clampedIndex * stride,
            behavior: 'smooth'
        });
    };

    const handleMouseUp = () => {
        setIsDragging(false);
        snapToNearest();
    };

    const handleMouseLeave = () => {
        if (isDragging) {
            setIsDragging(false);
            snapToNearest();
        }
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - scrollRef.current.offsetLeft;
        const walk = (x - startX) * 1.5;
        scrollRef.current.scrollLeft = dragScrollLeft - walk;
        if (Math.abs(x - startX) > 5) hasMoved.current = true;
    };

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
        return <div ref={scrollRef} className="hidden" />;
    }

    return (
        <section className={`relative group ${baseTheme} ${className}`}>
            {/* Horizontal Slider Container */}
            <div className="relative group/gallery">
                {/* Navigation Buttons (Desktop) */}
                <button
                    onClick={() => scrollRef.current.scrollBy({ left: -scrollRef.current.offsetWidth / 2, behavior: 'smooth' })}
                    className={`hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 z-30 w-14 h-14 rounded-full backdrop-blur-md border items-center justify-center transition-all duration-300 shadow-xl group-hover/gallery:scale-100 scale-90 ${navBtnTheme}`}
                    aria-label="Scroll Left"
                >
                    <ArrowLeft size={24} />
                </button>
                <button
                    onClick={() => scrollRef.current.scrollBy({ left: scrollRef.current.offsetWidth / 2, behavior: 'smooth' })}
                    className={`hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 z-30 w-14 h-14 rounded-full backdrop-blur-md border items-center justify-center transition-all duration-300 shadow-xl group-hover/gallery:scale-100 scale-90 ${navBtnTheme}`}
                    aria-label="Scroll Right"
                >
                    <ArrowRight size={24} />
                </button>

                <div
                    className="flex gap-4 md:gap-8 px-4 md:px-[10vw] overflow-x-auto pb-6 md:pb-12 scrollbar-none pt-6 md:pt-10 select-none cursor-grab active:cursor-grabbing snap-x snap-mandatory"
                    ref={scrollRef}
                    style={{
                        scrollbarWidth: 'none',
                        msOverflowStyle: 'none'
                    }}
                    onMouseDown={handleMouseDown}
                    onMouseLeave={handleMouseLeave}
                    onMouseUp={handleMouseUp}
                    onMouseMove={handleMouseMove}
                    onDragStart={(e) => e.preventDefault()}
                >
                    {images.map((media, idx) => {
                        const isVideo = typeof media === 'string' && (media.endsWith('.mp4') || media.endsWith('.webm'));
                        const displayName = formatImageName(media);

                        return (
                            <motion.div
                                key={idx}
                                data-gallery-item="true"
                                className={`relative flex-none w-[85vw] md:w-[60vw] lg:w-[28vw] aspect-[16/9] md:aspect-[3/2] group/card cursor-pointer ${cardBg} overflow-hidden rounded-lg snap-center`}
                                onViewportEnter={() => setActiveIndex(idx)}
                                viewport={{ margin: "0px -40% 0px -40%" }}
                                onClick={() => {
                                    if (!hasMoved.current) setSelectedImage(media);
                                }}
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

                                {/* Cinematic Gradient Overlay for Captions */}
                                {showCaptions && (
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover/card:opacity-80 transition-opacity" />
                                )}

                                {/* Caption Overlay */}
                                {showCaptions && (
                                    <div className="absolute bottom-0 left-0 p-6 w-full transform translate-y-2 group-hover/card:translate-y-0 transition-transform duration-500">
                                        <h3 className="text-xl font-serif text-white group-hover/card:text-gold-400 transition-colors duration-300 capitalize drop-shadow-md">
                                            {displayName || `View ${idx + 1}`}
                                        </h3>
                                    </div>
                                )}

                                <div className="absolute top-4 right-4 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300">
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

            {/* Dynamic Scroll Progress Bar */}
            {
                showProgress && (
                    <div className={`container mx-auto px-6 mt-4 relative h-0.5 md:h-1 rounded-full overflow-hidden ${trackColor}`}>
                        <motion.div
                            style={{ scaleX }}
                            className="absolute top-0 left-0 h-full w-full bg-gold-400 origin-left"
                        />
                    </div>
                )
            }

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
        </section >
    );
}

// Separated Lightbox Component
// Separated Lightbox Component
function Lightbox({ selectedImage, setSelectedImage, images }) {
    const [isZoomed, setIsZoomed] = useState(false);
    const [direction, setDirection] = useState(0);

    // Reset zoom state when image changes
    useEffect(() => {
        setIsZoomed(false);
    }, [selectedImage]);

    // PREVENT BACKGROUND SCROLL
    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "auto";
        };
    }, []);

    const paginate = (newDirection) => {
        // Only paginate if not zoomed
        if (isZoomed) return;
        setDirection(newDirection);
        const currentIndex = images.indexOf(selectedImage);
        const newIndex = (currentIndex + newDirection + images.length) % images.length;
        setSelectedImage(images[newIndex]);
    };

    const variants = {
        enter: (direction) => ({
            zIndex: 0,
            x: direction > 0 ? 1000 : -1000,
            opacity: 0
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1
        },
        exit: (direction) => ({
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0
        })
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[200] bg-black/95 backdrop-blur-xl flex items-center justify-center p-0 md:p-12 overflow-hidden"
            onClick={() => setSelectedImage(null)}
        >
            <button
                className="absolute top-4 right-4 md:top-8 md:right-8 text-white hover:text-gold-400 z-50 p-2 bg-black/20 rounded-full backdrop-blur-md"
                onClick={() => setSelectedImage(null)}
            >
                <X size={24} />
            </button>

            {/* Prev/Next Buttons - Only visible when not zoomed */}
            {!isZoomed && (
                <>
                    <button
                        className="absolute left-2 md:left-8 top-1/2 -translate-y-1/2 text-white/50 hover:text-white p-2 z-[60] transition-all hover:scale-110"
                        onClick={(e) => {
                            e.stopPropagation();
                            paginate(-1);
                        }}
                    >
                        <ChevronLeft size={40} />
                    </button>
                    <button
                        className="absolute right-2 md:right-8 top-1/2 -translate-y-1/2 text-white/50 hover:text-white p-2 z-[60] transition-all hover:scale-110"
                        onClick={(e) => {
                            e.stopPropagation();
                            paginate(1);
                        }}
                    >
                        <ChevronRight size={40} />
                    </button>
                </>
            )}

            {/* Hint */}
            <div className="absolute bottom-4 left-0 right-0 text-center pointer-events-none z-50">
                <span className="text-white/30 text-[10px] uppercase tracking-widest">
                    {isZoomed ? "Double tap to exit zoom" : "Swipe down to close • Pinch to zoom"}
                </span>
            </div>

            <div
                className="relative w-full h-full flex items-center justify-center p-4"
                onClick={(e) => e.stopPropagation()}
            >
                {selectedImage.endsWith('.mp4') || selectedImage.endsWith('.webm') ? (
                    <div className="relative w-full h-full max-w-7xl flex items-center justify-center">
                        <video
                            src={selectedImage}
                            className="max-w-full max-h-[100vh] object-contain shadow-2xl rounded-sm"
                            controls
                            autoPlay
                            playsInline
                        />
                    </div>
                ) : (
                    <div className="absolute w-full h-full flex items-center justify-center overflow-hidden">
                        <AnimatePresence initial={false} custom={direction} mode="popLayout">
                            <motion.div
                                key={selectedImage}
                                custom={direction}
                                variants={variants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{
                                    x: { type: "spring", stiffness: 300, damping: 30 },
                                    opacity: { duration: 0.2 }
                                }}
                                className="absolute w-full h-full flex items-center justify-center"
                                drag={!isZoomed} // Disable drag when zoomed to allow Panning
                                dragDirectionLock={true}
                                dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                                dragElastic={0.7}
                                onDragEnd={(e, { offset, velocity }) => {
                                    if (isZoomed) return; // Safety check
                                    const swipe = swipePower(offset.x, velocity.x);

                                    // Check dominance
                                    if (Math.abs(offset.x) > Math.abs(offset.y)) {
                                        // Horizontal -> Navigation
                                        if (swipe < -swipeConfidenceThreshold) {
                                            paginate(1);
                                        } else if (swipe > swipeConfidenceThreshold) {
                                            paginate(-1);
                                        }
                                    } else {
                                        // Vertical -> Close
                                        if (offset.y > 100 || velocity.y > 200) {
                                            setSelectedImage(null);
                                        }
                                    }
                                }}
                            >
                                <TransformWrapper
                                    initialScale={1}
                                    minScale={1}
                                    maxScale={4}
                                    centerOnInit={true}
                                    doubleClick={{ disabled: false, mode: "zoomIn" }}
                                    panning={{ disabled: !isZoomed, velocityDisabled: false }}
                                    onTransformed={(e) => {
                                        const newZoom = e.state.scale > 1.01;
                                        if (newZoom !== isZoomed) setIsZoomed(newZoom);
                                    }}
                                    alignmentAnimation={{ sizeX: 0, sizeY: 0 }}
                                >
                                    {({ zoomIn, zoomOut, resetTransform }) => (
                                        <TransformComponent
                                            wrapperStyle={{ width: "100%", height: "100%" }}
                                            contentStyle={{ width: "100%", height: "100%" }}
                                        >
                                            <div
                                                className="relative w-full h-full"
                                                onDoubleClick={() => isZoomed && setIsZoomed(false)}
                                            >
                                                <Image
                                                    src={selectedImage}
                                                    alt="Fullscreen Preview"
                                                    fill
                                                    className="object-contain pointer-events-auto select-none"
                                                    sizes="100vw"
                                                    draggable={false}
                                                    priority
                                                />
                                            </div>
                                        </TransformComponent>
                                    )}
                                </TransformWrapper>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                )}
            </div>
        </motion.div>
    );
}
