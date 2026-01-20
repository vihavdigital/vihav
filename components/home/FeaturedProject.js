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
        tagline: "Contemporary Architecture with Timeless Appeal",
        description: "A signature address that balances comfort, connectivity, and prestige. Every home is thoughtfully planned to offer generous proportions.",
        location: "Bhayli, Vadodara",
        image: "/images/project-images/project-tiles/Select.jpg",
        link: "/projects/keystone-select"
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

            <div className="container mx-auto px-6 relative z-10 h-full flex flex-col justify-end pb-24 md:pb-32">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl"
                >
                    {/* Header Label */}
                    <div className="flex items-center gap-4 mb-6">
                        <div className="h-[1px] w-12 bg-gold-400" />
                        <span className="text-gold-400 text-xs md:text-sm font-bold uppercase tracking-[0.3em]">
                            Featured Project
                        </span>
                    </div>

                    {/* Main Title */}
                    <h2 className="font-serif text-6xl md:text-8xl lg:text-9xl text-white mb-6 leading-none tracking-tight">
                        {featured.title}
                    </h2>

                    {/* Tagline & Location */}
                    <div className="flex flex-col md:flex-row md:items-end gap-8 md:gap-16 mb-10">
                        <p className="text-xl md:text-3xl text-white/90 font-light font-serif italic max-w-2xl leading-relaxed">
                            "{featured.tagline}"
                        </p>

                        <div className="flex items-center gap-2 text-white/70">
                            <MapPin size={18} className="text-gold-400" />
                            <span className="uppercase tracking-widest text-xs font-medium">{featured.location}</span>
                        </div>
                    </div>

                    {/* CTA Button */}
                    <Link href={featured.link}>
                        <MagneticWrapper>
                            <button className="group flex items-center gap-4 px-8 py-4 border border-white/20 hover:border-gold-400 bg-white/5 hover:bg-gold-400/10 backdrop-blur-sm transition-all duration-300">
                                <span className="text-white group-hover:text-gold-400 text-sm uppercase tracking-[0.2em] font-bold transition-colors">
                                    Discover Residence
                                </span>
                                <ArrowUpRight className="text-white group-hover:text-gold-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" size={18} />
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
