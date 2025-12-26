"use client";
import React from "react";
import { TrendingUp, Scale, Building2, Plane } from "lucide-react";
import { motion } from "framer-motion";

const stats = [
    {
        icon: TrendingUp,
        label: "Capital Appreciation",
        value: "12% CAGR",
        desc: "Vadodara real estate has shown consistent double-digit growth."
    },
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
        <section className="py-24 bg-neutral-900 relative">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-neutral-800/50 border border-white/5 p-8 rounded-2xl hover:bg-neutral-800 transition-colors group"
                        >
                            <div className="w-12 h-12 bg-gold-900/30 rounded-xl flex items-center justify-center mb-6 group-hover:bg-gold-500 group-hover:text-black transition-all text-gold-500">
                                <stat.icon size={24} />
                            </div>
                            <h3 className="text-3xl font-serif text-white mb-2">{stat.value}</h3>
                            <p className="text-white/60 font-medium mb-3 uppercase tracking-wider text-xs">{stat.label}</p>
                            <p className="text-white/40 text-sm leading-relaxed">{stat.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
