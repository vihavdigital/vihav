"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import MagneticWrapper from "@/components/ui/MagneticWrapper";
import { ArrowUpRight, MapPin } from "lucide-react";

export default function FeaturedProject() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

    // Data for Featured Project (Keystone Select)
    const featured = {
        title: "Keystone Select",
        type: "4B2HK & 5B2HK APARTMENT",
        location: "Nr Navrachana University, Bhayli",
        carpetArea: "SBA : 5772 Sq.Ft Onwards",
        image: "/images/project-images/other-images/select-featured.webp",
        link: "/projects/keystone-select",
        status: "Upcoming"
    };

    return (
        <section ref={containerRef} className="relative h-[80vh] md:h-[90vh] flex items-center justify-center overflow-hidden w-full">
            {/* Parallax Background */}
            <motion.div
                style={{ y }}
                className="absolute inset-0 z-0 h-[120%] -top-[10%]"
            >
                <Image
                    src={featured.image}
                    alt="Keystone Select"
                    fill
                    className="object-cover"
                    sizes="100vw"
                />
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
            </motion.div>

            <div className="container mx-auto px-6 relative z-10 h-full flex flex-col justify-end pb-12 md:pb-24">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="max-w-5xl"
                >
                    {/* Status - Moved to Top */}
                    <div className="mb-6">
                        <div className="inline-block px-3 py-1 bg-white/90 backdrop-blur-md text-luxury-black text-[10px] md:text-xs font-bold uppercase tracking-widest rounded-sm shadow-lg">
                            {featured.status}
                        </div>
                    </div>

                    {/* Main Title */}
                    <h2 className="font-serif text-4xl sm:text-6xl md:text-8xl lg:text-9xl text-white mb-4 leading-[0.9] tracking-tight drop-shadow-lg">
                        {featured.title}
                    </h2>

                    {/* Type - Cleaner Typography */}
                    <p className="text-white/90 text-sm md:text-xl font-light tracking-[0.2em] mb-8 uppercase border-l-2 border-gold-400 pl-4">
                        {featured.type}
                    </p>

                    {/* Details Container - Clean Row with better mobile wrapping */}
                    <div className="flex flex-wrap items-center gap-3 md:gap-6 mb-10">
                        {/* Carpet Area */}
                        <div className="inline-flex items-center px-4 py-2 bg-black/40 backdrop-blur-md border border-white/20 hover:bg-white/10 transition-colors">
                            <span className="text-white text-[10px] md:text-xs font-bold uppercase tracking-widest">
                                {featured.carpetArea}
                            </span>
                        </div>

                        {/* Location */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-black/40 backdrop-blur-md border border-white/20 hover:bg-white/10 transition-colors">
                            <MapPin size={14} className="text-gold-400" />
                            <span className="text-white text-[10px] md:text-xs font-bold uppercase tracking-widest">{featured.location}</span>
                        </div>
                    </div>

                    {/* CTA Button */}
                    <Link href={featured.link}>
                        <MagneticWrapper>
                            <button className="group flex items-center gap-4 px-6 py-3 md:px-8 md:py-4 bg-white text-black hover:bg-gold-400 transition-all duration-300 shadow-lg hover:shadow-gold-400/50">
                                <span className="text-xs md:text-sm uppercase tracking-[0.2em] font-bold">
                                    Enquire Now
                                </span>
                                <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" size={18} />
                            </button>
                        </MagneticWrapper>
                    </Link>
                </motion.div>
            </div>

            {/* Decorative Side text */}
            <div className="absolute right-6 top-1/2 -translate-y-1/2 hidden md:block writing-vertical-rl rotate-180 mix-blend-overlay opacity-50">
                <span className="text-[10vh] font-bold text-white/10 whitespace-nowrap uppercase tracking-widest">
                    Signature Collection
                </span>
            </div>
        </section>
    );
}
