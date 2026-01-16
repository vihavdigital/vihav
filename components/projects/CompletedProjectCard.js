"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, MapPin, Phone, Mail, ChevronLeft, ChevronRight } from "lucide-react";

export default function CompletedProjectCard({ project, index }) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Prepare images: Hero + Gallery
    const displayImages = [project.heroImage, ...(project.galleryImages || [])].filter(Boolean);

    const nextImage = (e) => {
        e?.preventDefault();
        setCurrentImageIndex((prev) => (prev + 1) % displayImages.length);
    };

    const prevImage = (e) => {
        e?.preventDefault();
        setCurrentImageIndex((prev) => (prev - 1 + displayImages.length) % displayImages.length);
    };

    return (
        <div className="py-20 lg:py-32 border-b border-neutral-100 dark:border-neutral-800 last:border-0">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                    {/* 1. TEXT SECTION (Left) */}
                    <div className="w-full lg:w-5/12">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            {/* Meta Tag */}
                            <span className="text-vihav-gold-500 font-medium tracking-[0.2em] text-xs uppercase mb-6 block">
                                {project.type || "Residence"} — {project.location?.split(',')[0]}
                            </span>

                            {/* Title */}
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-foreground leading-[1.1] mb-8">
                                {project.title}
                            </h2>

                            {/* Description */}
                            <div className="space-y-8">
                                <div className="border-l-2 border-vihav-gold-500 pl-6">
                                    <h4 className="font-medium text-foreground mb-2">The Vision</h4>
                                    <p className="text-muted-foreground text-sm leading-relaxed">
                                        {project.description}
                                    </p>
                                </div>

                                <div className="flex flex-wrap gap-8 pt-4">
                                    <div>
                                        <span className="block text-[10px] uppercase tracking-widest text-muted-foreground mb-1">Status</span>
                                        <p className="text-foreground font-medium">{project.status}</p>
                                    </div>
                                    <div>
                                        <span className="block text-[10px] uppercase tracking-widest text-muted-foreground mb-1">Possession</span>
                                        <p className="text-foreground font-medium">{project.filterData?.possession || "Ready"}</p>
                                    </div>
                                </div>

                                <Link
                                    href={`/projects/${project.category?.toLowerCase() || 'residential'}/${project.slug}`}
                                    className="inline-flex items-center gap-2 text-foreground font-medium uppercase tracking-widest hover:text-gold-500 transition-colors mt-4"
                                >
                                    View Project <ArrowUpRight size={18} />
                                </Link>
                            </div>
                        </motion.div>
                    </div>

                    {/* 2. FLOATING SLIDER CARD (Right) */}
                    <div className="w-full lg:w-7/12">
                        <div className="relative aspect-[4/3] md:aspect-[16/10] bg-neutral-100 dark:bg-neutral-900 rounded-3xl overflow-hidden shadow-2xl group">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={currentImageIndex}
                                    initial={{ opacity: 0, scale: 1.05 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.7 }}
                                    className="absolute inset-0 w-full h-full"
                                >
                                    <Image
                                        src={displayImages[currentImageIndex]}
                                        alt={project.title}
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 768px) 100vw, 60vw"
                                    />
                                    {/* Gradient Overlay for Text Visibility */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
                                </motion.div>
                            </AnimatePresence>

                            {/* Navigation Arrows (Floating) */}
                            <div className="absolute inset-0 flex items-center justify-between px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                                <button
                                    onClick={prevImage}
                                    className="w-12 h-12 rounded-full bg-black/30 backdrop-blur-md text-white flex items-center justify-center hover:bg-black/50 transition-all pointer-events-auto"
                                >
                                    <ChevronLeft size={20} />
                                </button>
                                <button
                                    onClick={nextImage}
                                    className="w-12 h-12 rounded-full bg-black/30 backdrop-blur-md text-white flex items-center justify-center hover:bg-black/50 transition-all pointer-events-auto"
                                >
                                    <ChevronRight size={20} />
                                </button>
                            </div>

                            {/* Bottom Dots & Counter */}
                            <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2 z-10">
                                {displayImages.map((_, i) => (
                                    <button
                                        key={i}
                                        onClick={() => setCurrentImageIndex(i)}
                                        className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${i === currentImageIndex ? 'bg-gold-500 w-6' : 'bg-white/50 hover:bg-white'}`}
                                    />
                                ))}
                            </div>

                            {/* Corner Badge */}
                            <div className="absolute top-6 right-6 w-8 h-8 rounded-full bg-white/10 backdrop-blur flex items-center justify-center text-white">
                                <ArrowUpRight size={14} />
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}