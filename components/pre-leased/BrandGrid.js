"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const BRANDS = [
    {
        id: 1,
        name: "McDonald's",
        location: "Atladara-Padra Road",
        logo: null, // Placeholder: Will use text if logo missing
        color: "#DA291C" // McDonald's Brand Color
    },
    {
        id: 2,
        name: "Blinkit",
        location: "Nr. Gurudwara, Tarsali",
        logo: null,
        color: "#F8CB46" // Blinkit Yellow
    },
    {
        id: 3,
        name: "Ola",
        location: "Sunpharma Road\n100 Ft Main Road",
        logo: null,
        color: "#000000"
    },
    {
        id: 4,
        name: "Gujco Mart",
        location: "60 Ft Gotri Main Road",
        logo: null,
        color: "#1B5E20" // Green
    },
    {
        id: 5,
        name: "Swiggy Instamart",
        location: "60 Ft Gotri Main Road",
        logo: null,
        color: "#FC8019" // Swiggy Orange
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
                            <span className="absolute top-8 text-[10px] md:text-xs font-bold uppercase tracking-widest text-muted-foreground/60 text-center px-4 group-hover:text-gold-400 transition-colors">
                                {brand.location}
                            </span>

                            {/* Logo / Brand Name */}
                            <div className="relative w-full h-full flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
                                {/* Using Stylized Text as Placeholder since we don't have actual SVG logos yet */}
                                <h3
                                    className="text-3xl md:text-5xl font-black text-center tracking-tight"
                                    style={{ color: brand.color }}
                                >
                                    {brand.name}
                                </h3>
                            </div>
                        </motion.div>
                    ))}

                    {/* Empty Fillers to complete grid if needed */}
                    <div className="hidden lg:block border-r border-b border-border bg-secondary/5" />
                </div>
            </div>
        </section>
    );
}
