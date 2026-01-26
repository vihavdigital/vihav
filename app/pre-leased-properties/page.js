"use client";

import { motion } from "framer-motion";
import { PROJECTS } from "@/data/projects";
import PreLeasedCard from "@/components/pre-leased/PreLeasedCard";
import BrandGrid from "@/components/pre-leased/BrandGrid";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { TrendingUp, ShieldCheck, Clock, BadgePercent } from "lucide-react";

// Investment Data Mapping for specific projects
const INVESTMENT_DATA = {
    "vs-monolith": {
        roi: "6.0%",
        tenant: "Banking & Finance Hub",
        status: "Pre-Leased",
        price: "Start ₹55 Lacs*"
    },
    "supremus": {
        roi: "5.5%",
        tenant: "Multinational IT Firms",
        status: "Immediate Income",
        price: "Start ₹45 Lacs*"
    },
    "vbs": {
        roi: "5.8%",
        tenant: "Healthcare & Corporate",
        status: "Ready Asset",
        price: "Start ₹60 Lacs*"
    }
};

const PRE_LEASED_IDS = ["vs-monolith", "supremus", "vbs"];

export default function PreLeasedProperties() {
    // Filter and enhance projects
    const investmentProjects = PROJECTS
        .filter(p => PRE_LEASED_IDS.includes(p.id))
        .map(p => ({
            ...p,
            ...INVESTMENT_DATA[p.id]
        }));

    return (
        <main className="min-h-screen bg-background text-foreground selection:bg-gold-400 selection:text-luxury-black">
            <Header />

            {/* 1. Investment Hero Section */}
            <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-luxury-black text-white">
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold-400/10 blur-[100px] rounded-full pointer-events-none" />

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-gold-400 uppercase tracking-[0.25em] text-xs font-bold mb-6 block">
                            Smart Investments
                        </span>
                        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl mb-6 leading-tight">
                            Pre-Leased <span className="text-gold-400">Properties</span>
                        </h1>
                        <p className="text-gray-400 text-lg md:text-xl font-light max-w-2xl mx-auto mb-12">
                            Secure your future with assets that generate immediate rental income.
                            Partner with Vihav Group for high-yield, stable commercial investments.
                        </p>
                    </motion.div>

                    {/* Key Highlights Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
                        {[
                            { icon: BadgePercent, label: "Assured ROI", value: "Up to 6.0%" },
                            { icon: Clock, label: "Rental Income", value: "Immediate" },
                            { icon: TrendingUp, label: "Appreciation", value: "High Potential" },
                            { icon: ShieldCheck, label: "Asset Type", value: "Low Risk" },
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 + (index * 0.1), duration: 0.6 }}
                                className="p-6 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-colors backdrop-blur-sm"
                            >
                                <item.icon className="w-8 h-8 text-gold-400 mx-auto mb-3" />
                                <div className="text-2xl font-bold text-white mb-1">{item.value}</div>
                                <div className="text-xs uppercase tracking-widest text-gray-400">{item.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 2. Pre-Leased Brands Grid */}
            <BrandGrid />

            {/* 3. Projects List Section */}
            <section className="py-24 bg-secondary/30">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col gap-8 max-w-5xl mx-auto">
                        <div className="flex items-center justify-between mb-8">
                            <h2 className="text-3xl font-serif text-foreground">Available Opportunities</h2>
                            <div className="hidden md:block text-sm text-muted-foreground">
                                Showing {investmentProjects.length} Premium Assets
                            </div>
                        </div>

                        {investmentProjects.map((project, index) => (
                            <PreLeasedCard key={project.id} project={project} index={index} />
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. CTA Section */}
            <section className="py-24 bg-white dark:bg-neutral-900 border-t border-border">
                <div className="container mx-auto px-6 text-center">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
                            Maximize Your Portfolio Returns
                        </h2>
                        <p className="text-muted-foreground text-lg mb-8 font-light">
                            Speak to our investment advisors to understand the lease terms, tenant profiles, and projected appreciation.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="/contact-us"
                                className="px-8 py-4 bg-gold-400 text-black font-bold uppercase tracking-widest hover:bg-gold-500 transition-colors shadow-lg shadow-gold-400/20"
                            >
                                Schedule Consultation
                            </a>
                            <a
                                href="tel:+917201950950"
                                className="px-8 py-4 bg-transparent border border-foreground text-foreground font-bold uppercase tracking-widest hover:bg-foreground hover:text-background transition-colors"
                            >
                                Call Advisor
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
