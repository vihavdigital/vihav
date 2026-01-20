import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export default function LegacyProjectCard({ project }) {
    return (
        <Link href={`/projects/${project.slug}`} className="block group">
            <div className="relative overflow-hidden mb-6 aspect-[4/5] object-cover bg-gray-100">
                {/* Image Scale Effect */}
                <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105">
                    <Image
                        src={project.heroImage}
                        alt={project.title}
                        fill
                        className="object-cover transition-all duration-700 grayscale group-hover:grayscale-0"
                        sizes="(max-width: 768px) 100vw, 50vw"
                    />
                </div>

                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* View Project Button */}
                <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                    <div className="h-12 w-12 rounded-full bg-white flex items-center justify-center">
                        <ArrowUpRight className="text-black" size={20} />
                    </div>
                </div>
            </div>

            {/* Minimal Info */}
            <div className="flex justify-between items-baseline border-b border-gray-200 pb-4 group-hover:border-gold-400 transition-colors duration-500">
                <div>
                    <h3 className="text-2xl font-serif text-luxury-black mb-1">{project.title}</h3>
                    <p className="text-sm text-gray-500 uppercase tracking-widest">{project.location}</p>
                </div>
                <span className="text-lg font-serif text-gold-400">{project.launchYear || "2023"}</span>
            </div>
        </Link>
    );
}
