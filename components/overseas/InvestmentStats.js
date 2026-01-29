"use client";
import React from "react";
import { Scale, Building2, Plane } from "lucide-react";
import { motion } from "framer-motion";

const stats = [

    {
        icon: Scale,
        label: "Legal Transparency",
        value: "100% RERA",
        desc: "All Vihav projects are RERA compliant with clear titles."
    },
    {
        icon: Plane,
        label: "Connectivity",
        value: "Intl. Airport",
        desc: "Seamless connectivity to Mumbai, Delhi, and global hubs."
    },
    {
        icon: Building2,
        label: "Infrastructure",
        value: "Smart City",
        desc: "Rapidly developing infrastructure and high quality of life."
    }
];

export default function InvestmentStats() {
    return (
        <section className="py-24 bg-secondary border-y border-border relative">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-background border border-border p-8 rounded-2xl hover:shadow-lg transition-all group"
                        >
                            <div className="w-12 h-12 bg-gold-400/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-gold-400 group-hover:text-luxury-black transition-all text-gold-400">
                                <stat.icon size={24} />
                            </div>
                            <h3 className="text-3xl font-serif text-foreground mb-2">{stat.value}</h3>
                            <p className="text-muted-foreground font-medium mb-3 uppercase tracking-wider text-xs">{stat.label}</p>
                            <p className="text-muted-foreground/80 text-sm leading-relaxed">{stat.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
