"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import MagneticWrapper from "@/components/ui/MagneticWrapper";
import { ArrowUpRight } from "lucide-react";

export default function FeaturedProject() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    // Stronger Parallax Effect
    // Height 150%, moves from -20% to +20% relative to its centered position (-25% top)
    const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

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
        <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden w-full bg-luxury-black">

            {/* Parallax Background */}
            <motion.div
                style={{ y }}
                className="absolute inset-0 z-0 h-[150%] -top-[25%]"
            >
                <Image
                    src={featured.image}
                    alt="Keystone Select"
                    fill
                    className="object-cover opacity-60"
                    sizes="100vw"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
            </motion.div>

            <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center h-full py-24">

                {/* Text Content */}
                <div className="flex flex-col gap-8 max-w-2xl">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <span className="w-12 h-[1px] bg-gold-400"></span>
                            <span className="text-gold-400 uppercase tracking-[0.25em] text-xs font-bold">Featured Project</span>
                        </div>

                        <div className="relative mb-8 md:mb-12">
                            <Image
                                src="/images/project-images/project-logos/keystone-select.png"
                                alt={featured.title}
                                width={400} // Increased for better resolution
                                height={140}
                                className="object-contain object-left w-[280px] md:w-[400px]"
                            />
                        </div>

                        <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif text-white leading-tight mb-6">
                            A Signature Address.<br />
                            <span className="text-white/50 italic">A Select Lifestyle.</span>
                        </h2>

                        <p className="text-gray-300 text-lg md:text-xl font-light leading-relaxed mb-8 border-l border-white/20 pl-6">
                            {featured.type} in {featured.location}. <br />
                            Experience {featured.carpetArea} of pure luxury.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <Link href={featured.link}>
                                <MagneticWrapper>
                                    <button className="flex items-center gap-3 px-8 py-4 bg-gold-400 text-black font-bold uppercase tracking-widest text-sm hover:bg-white transition-all duration-300">
                                        View Details
                                        <ArrowUpRight size={18} />
                                    </button>
                                </MagneticWrapper>
                            </Link>

                            <div className="px-8 py-4 border border-white/20 text-white font-bold uppercase tracking-widest text-sm backdrop-blur-sm">
                                Status: {featured.status}
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Right Side - Maybe a floating detail or just space for the image to shine?
                    Let's add a "glass card" with quick stats to make it feel premium.
                */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="hidden lg:flex justify-end"
                >
                    <div className="w-80 bg-black/30 backdrop-blur-xl border border-white/10 p-8 space-y-8">
                        <div>
                            <span className="block text-gold-400 text-xs uppercase tracking-widest mb-2 font-bold">Configuration</span>
                            <span className="block text-2xl text-white font-serif">4B2HK & 5B2HK</span>
                        </div>
                        <div className="w-full h-[1px] bg-white/10" />
                        <div>
                            <span className="block text-gold-400 text-xs uppercase tracking-widest mb-2 font-bold">Carpet Area</span>
                            <span className="block text-2xl text-white font-serif">5772 Sq.Ft+</span>
                        </div>
                        <div className="w-full h-[1px] bg-white/10" />
                        <div>
                            <span className="block text-gold-400 text-xs uppercase tracking-widest mb-2 font-bold">Location</span>
                            <span className="block text-xl text-white font-serif">Bhayli, Vadodara</span>
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
