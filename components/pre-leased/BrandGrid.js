"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const BRANDS = [
    {
        id: 1,
        name: "McDonald's",
        location: "Atladara-Padra Road",
        logo: "/images/project-images/other-images/pre-leased/macdonald-logo.png",
        color: "#DA291C", // McDonald's Brand Color
        soldOut: true
    },
    {
        id: 2,
        name: "Blinkit",
        location: "Nr. Gurudwara, Tarsali",
        logo: "/images/project-images/other-images/pre-leased/blinkit-logo.png",
        color: "#F8CB46" // Blinkit Yellow
    },
    {
        id: 3,
        name: "Ola",
        location: "Sunpharma Road",
        subLocation: "100 Ft Main Road",
        logo: "/images/project-images/other-images/pre-leased/ola-cabs-logo.png",
        color: "#000000"
    },
    {
        id: 4,
        name: "Gujco Mart",
        location: "60 Ft Gotri Main Road",
        logo: "/images/project-images/other-images/pre-leased/gujcomart-logo.png",
        color: "#1B5E20" // Green
    },
    {
        id: 5,
        name: "Swiggy Instamart",
        location: "60 Ft Gotri Main Road",
        logo: "/images/project-images/other-images/pre-leased/swiggy-instamart-logo.png",
        color: "#FC8019" // Swiggy Orange
    },
    {
        id: 6,
        name: "Connplex Cinemas",
        location: "Available",
        logo: "/images/project-images/other-images/pre-leased/connplex-cinemas.avif",
        color: "#E50914" // Netflix-ish Red or Standard Cinema Color
    }
];

export default function BrandGrid() {
    return (
        <section className="py-24 bg-background border-t border-border">
            <div className="container mx-auto px-6">
                <div className="text-center mb-20">
                    <span className="text-gold-400 uppercase tracking-[0.25em] text-xs font-bold mb-6 block">Proven Track Record</span>
                    <h2 className="font-serif text-3xl md:text-5xl text-foreground">Trusted by Leading Brands</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-border">
                    {BRANDS.map((brand, index) => (
                        <motion.div
                            key={brand.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="relative flex flex-col items-center justify-center p-12 lg:p-16 border-r border-b border-border bg-background hover:bg-secondary/30 transition-all duration-500 group h-[300px]"
                        >
                            {/* Location Top Label */}
                            <div className="absolute top-8 text-center px-4 w-full flex flex-col items-center">
                                <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-muted-foreground/60 group-hover:text-gold-400 transition-colors">
                                    {brand.location}
                                </span>
                                {brand.subLocation && (
                                    <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-muted-foreground/60 group-hover:text-gold-400 transition-colors mt-1">
                                        {brand.subLocation}
                                    </span>
                                )}
                            </div>

                            {/* Logo / Brand Name */}
                            <div className="relative w-full h-full flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
                                {brand.logo ? (
                                    <div className="relative w-48 h-24 md:w-56 md:h-28">
                                        <Image
                                            src={brand.logo}
                                            alt={brand.name}
                                            fill
                                            className="object-contain transition-all duration-500"
                                            sizes="(max-width: 768px) 100vw, 33vw"
                                        />
                                    </div>
                                ) : (
                                    <h3
                                        className="text-3xl md:text-5xl font-black text-center tracking-tight"
                                        style={{ color: brand.color }}
                                    >
                                        {brand.name}
                                    </h3>
                                )}
                            </div>

                            {/* Sold Out Badge */}
                            {brand.soldOut && (
                                <div className="absolute inset-0 flex items-center justify-center bg-black/60 z-10 backdrop-blur-[1px]">
                                    <div className="border border-red-500/50 bg-red-500/20 text-red-500 px-4 py-2 uppercase tracking-[0.2em] text-sm font-bold transform -rotate-12 shadow-lg backdrop-blur-md">
                                        Sold Out
                                    </div>
                                </div>
                            )}
                        </motion.div>
                    ))}

                    {/* Empty Fillers to complete grid if needed */}
                    <div className="hidden lg:block border-r border-b border-border bg-secondary/5" />
                </div>
            </div>
        </section>
    );
}
