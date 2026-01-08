"use client";
import React from "react";
import { motion } from "framer-motion";

const images = [
    {
        url: "/vdr.webp",
        caption: "Laxmi Vilas Palace"
    },
    {
        url: "/vdr-airport.webp",
        caption: "Vadodara International Airport"
    },
    {
        url: "/vdr-museum.webp",
        caption: "Baroda Museum"
    }
];

export default function VadodaraShowcase() {
    return (
        <section className="py-24 bg-background relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-12">
                    <span className="text-gold-400 uppercase tracking-widest text-xs font-bold mb-2 block">The Royal City</span>
                    <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-4">Vadodara Calling</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Rich in heritage, progressive in growth. Reconnect with the cultural capital of Gujarat.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {images.map((img, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.2 }}
                            className="group relative h-80 rounded-xl overflow-hidden border border-border shadow-sm hover:shadow-xl transition-all duration-500"
                        >
                            <img
                                src={img.url}
                                alt={img.caption}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90" />
                            <div className="absolute bottom-6 left-6">
                                <h3 className="text-white font-serif text-xl group-hover:text-gold-400 transition-colors">{img.caption}</h3>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
