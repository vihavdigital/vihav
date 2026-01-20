"use client";
import React, { useState } from 'react';
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, MapPin, ChevronLeft, ChevronRight, Building2 } from "lucide-react";

export default function RentalProjectCard({ project }) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Use gallery images if available, otherwise just use heroImage
    const images = project.galleryImages && project.galleryImages.length > 0
        ? project.galleryImages
        : [project.heroImage];

    const nextImage = (e) => {
        e.stopPropagation();
        e.preventDefault();
        setCurrentImageIndex((prev) => (prev + 1) % images.length);
    };

    const prevImage = (e) => {
        e.stopPropagation();
        e.preventDefault();
        setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    return (
        <div className="group block bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="relative h-64 overflow-hidden bg-gray-100">
                <Image
                    src={images[currentImageIndex]}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors duration-300" />

                {/* Category Badge */}
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full border border-white/20 z-10 shadow-sm">
                    <span className="text-xs font-bold tracking-wider uppercase text-gray-900">
                        {project.category}
                    </span>
                </div>

                {/* Carousel Controls */}
                {images.length > 1 && (
                    <>
                        <button
                            onClick={prevImage}
                            className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/90 hover:bg-white text-gray-900 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 z-20 shadow-lg"
                        >
                            <ChevronLeft size={16} />
                        </button>
                        <button
                            onClick={nextImage}
                            className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/90 hover:bg-white text-gray-900 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 z-20 shadow-lg"
                        >
                            <ChevronRight size={16} />
                        </button>

                        {/* Dots */}
                        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-20">
                            {images.map((_, idx) => (
                                <div
                                    key={idx}
                                    className={`w-1.5 h-1.5 rounded-full transition-all shadow-sm ${idx === currentImageIndex ? 'bg-white w-4' : 'bg-white/60'
                                        }`}
                                />
                            ))}
                        </div>
                    </>
                )}
            </div>

            <div className="p-5">
                <div className="mb-5">
                    <div className="flex justify-between items-start mb-2 gap-2">
                        <h3 className="text-xl font-serif font-bold text-gray-900 group-hover:text-gold-600 transition-colors line-clamp-1">
                            {project.title}
                        </h3>
                        {project.rentalPrice && (
                            <div className="text-right shrink-0">
                                <span className="text-gold-600 font-bold text-lg block">{project.rentalPrice}</span>
                            </div>
                        )}
                    </div>

                    <div className="flex items-center text-gray-500 text-sm gap-1 mb-3">
                        <MapPin size={14} />
                        <span className="line-clamp-1">{project.location}</span>
                    </div>

                    {project.unitNumber && (
                        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-gray-50 rounded-md border border-gray-100 text-xs font-semibold text-gray-700 uppercase tracking-wide">
                            <Building2 size={12} className="text-gold-500" />
                            {project.unitNumber}
                        </div>
                    )}
                </div>

                <div className="space-y-2 mb-6 pt-4 border-t border-gray-50">
                    <div className="flex justify-between text-sm">
                        <span className="text-gray-500">Type</span>
                        <span className="font-medium text-gray-900">{project.type}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                        <span className="text-gray-500">Size</span>
                        <span className="font-medium text-gray-900">{project.carpetArea?.replace('CARPET - ', '')}</span>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                    <button
                        onClick={() => document.getElementById('rental-inquiry-form')?.scrollIntoView({ behavior: 'smooth' })}
                        className="flex items-center justify-center py-2.5 rounded-xl border border-gray-200 text-sm font-bold uppercase tracking-wider hover:border-black hover:bg-black hover:text-white transition-all duration-300"
                    >
                        Enquire
                    </button>
                    <Link
                        href={project.link || "#"}
                        className="flex items-center justify-center gap-2 py-2.5 rounded-xl bg-luxury-black text-white text-sm font-bold uppercase tracking-wider hover:bg-gold-500 hover:text-black transition-all duration-300"
                    >
                        Explore <ArrowUpRight size={16} />
                    </Link>
                </div>
            </div>
        </div>
    );
}
