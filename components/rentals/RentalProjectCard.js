"use client";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";

export default function RentalProjectCard({ project }) {
    return (
        <Link
            href={project.link || "#"}
            className="group block bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
        >
            <div className="relative h-64 overflow-hidden">
                <Image
                    src={project.heroImage}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />

                {/* Category Badge */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full border border-white/20">
                    <span className="text-xs font-bold tracking-wider uppercase text-gray-900">
                        {project.category}
                    </span>
                </div>
            </div>

            <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                    <div>
                        <h3 className="text-xl font-serif font-bold text-gray-900 mb-1 group-hover:text-gold-600 transition-colors">
                            {project.title}
                        </h3>
                        <div className="flex items-center text-gray-500 text-sm gap-1">
                            <MapPin size={14} />
                            <span>{project.location}</span>
                        </div>
                    </div>
                </div>

                <div className="space-y-3 mb-6">
                    <div className="flex justify-between text-sm py-2 border-b border-gray-50">
                        <span className="text-gray-500">Type</span>
                        <span className="font-medium text-gray-900">{project.type}</span>
                    </div>
                    <div className="flex justify-between text-sm py-2 border-b border-gray-50">
                        <span className="text-gray-500">Size</span>
                        <span className="font-medium text-gray-900">{project.carpetArea?.replace('CARPET - ', '')}</span>
                    </div>
                </div>

                <div className="flex items-center justify-between mt-auto">
                    <span className="text-xs font-bold uppercase tracking-widest text-gold-600">
                        View Details
                    </span>
                    <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-gold-500 group-hover:text-white transition-all duration-300">
                        <ArrowUpRight size={16} />
                    </div>
                </div>
            </div>
        </Link>
    );
}
