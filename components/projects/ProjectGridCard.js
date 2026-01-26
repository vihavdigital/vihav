"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export default function ProjectGridCard({ project, index }) {
    // Generate slug if not present
    const projectSlug = project.slug || project.title.toLowerCase().replace(/\s+/g, '-');
    const href = `/projects/${project.category?.toLowerCase() || 'residential'}/${projectSlug}`;

    // Masonry Aspect Ratio Logic (Deterministic based on index)
    // Pattern: Square, Portrait, Landscape, Portrait, Square, Landscape
    const aspectRatios = [
        "aspect-square",      // 1:1
        "aspect-[3/4]",       // Portrait
        "aspect-[4/3]",       // Landscape
        "aspect-[3/4]",       // Portrait
        "aspect-square",      // 1:1
        "aspect-[16/9]"       // Wide
    ];
    const aspectClass = aspectRatios[index % aspectRatios.length];

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: (index % 3) * 0.1 }} // Stagger based on column position roughly
            className="group relative mb-8 break-inside-avoid"
        >
            <Link href={href} className="block w-full">
                {/* Image Container */}
                <div className={`relative w-full overflow-hidden rounded-md bg-neutral-100 dark:bg-neutral-800 ${aspectClass}`}>
                    <Image
                        src={project.heroImage || project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />

                    {/* Status Badge */}
                    <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 text-[10px] font-bold uppercase tracking-widest bg-white/90 text-neutral-900 rounded-sm shadow-sm backdrop-blur-sm">
                            {project.status === "Completed" ? "Completed" : "Ready to Move"}
                        </span>
                    </div>

                    {/* Arrow Icon */}
                    <div className="absolute top-4 right-4 w-10 h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                        <ArrowUpRight size={18} />
                    </div>
                </div>

                {/* Content */}
                <div className="mt-4">
                    <div className="flex justify-between items-start">
                        <div>
                            <span className="text-[10px] font-bold uppercase tracking-widest text-vihav-gold-500 mb-1 block">
                                {project.category}
                            </span>
                            <h3 className="text-xl font-serif text-neutral-900 dark:text-white group-hover:text-vihav-gold-500 transition-colors">
                                {project.title}
                            </h3>
                        </div>
                    </div>

                    <div className="mt-2 flex items-center text-neutral-500 dark:text-neutral-400 text-sm">
                        <MapPin size={14} className="mr-1" />
                        <span>{project.location}</span>
                    </div>
                </div>
            </Link>
        </motion.div>
    );
}
