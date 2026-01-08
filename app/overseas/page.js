"use client";
import React, { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import NRIHero from "@/components/overseas/NRIHero";
import InvestmentStats from "@/components/overseas/InvestmentStats";
import ServiceCards from "@/components/overseas/ServiceCards";
import VadodaraShowcase from "@/components/overseas/VadodaraShowcase";
import LuxuryMapWrapper from "@/components/projects/LuxuryMapWrapper";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import EnquireModal from "@/components/ui/EnquireModal";
import OverseasProjects from "@/components/overseas/OverseasProjects";
import { Suspense } from "react";

export default function OverseasPage() {
    const [isEnquireOpen, setIsEnquireOpen] = useState(false);

    return (
        <main className="bg-background min-h-screen text-foreground selection:bg-gold-400 selection:text-luxury-black pb-20 md:pb-0 transition-colors duration-500">
            <Header />

            {/* 1. Emotional Hero */}
            <NRIHero />

            {/* 2. Why Vadodara? Stats */}
            <InvestmentStats />

            {/* 3. Complete Portfolio with Filters (Moved Up) */}
            <Suspense fallback={<div className="py-24 text-center text-gold-400">Loading Projects...</div>}>
                <OverseasProjects />
            </Suspense>

            {/* 4. Vadodara Showcase - Visuals */}
            <VadodaraShowcase />

            {/* 5. The Vihav Map - Location Context */}
            <section className="py-24 bg-secondary/30 border-y border-border relative z-0">
                <div className="container mx-auto px-6 mb-12 text-center">
                    <h2 className="text-3xl md:text-4xl font-serif mb-4 text-foreground">Strategic Locations</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Our projects are situated in Vadodara's most rapidly appreciating corridors.
                    </p>
                </div>
                <div className="aspect-square md:aspect-auto md:h-[600px] w-full md:container md:mx-auto md:px-6 md:rounded-2xl overflow-hidden border-y md:border border-border relative z-0">
                    <LuxuryMapWrapper />
                </div>
            </section>

            {/* 6. NRI Services */}
            <ServiceCards />

            <Footer />

            {/* Sticky Enquire Button (Mobile/Global) */}
            <div className="fixed bottom-0 left-0 right-0 p-3 bg-background/90 backdrop-blur-lg border-t border-border z-50 flex justify-between items-center md:hidden">
                <div className="flex flex-col">
                    <span className="text-[10px] text-gold-400 uppercase tracking-widest">Interested?</span>
                    <span className="text-foreground font-serif text-lg">Contact Us</span>
                </div>
                <button
                    onClick={() => setIsEnquireOpen(true)}
                    className="bg-gold-500 text-luxury-black px-6 py-2 rounded-full font-bold text-sm uppercase tracking-widest shadow-lg flex items-center gap-2 hover:bg-gold-400 transition-colors"
                >
                    <Phone size={16} /> Enquire
                </button>
            </div>

            {/* Desktop Floating Button */}
            <button
                onClick={() => setIsEnquireOpen(true)}
                className="hidden md:flex fixed bottom-10 right-10 bg-gold-400 text-luxury-black w-16 h-16 rounded-full items-center justify-center shadow-2xl hover:bg-gold-500 transition-all z-50 hover:scale-110 group border border-gold-300"
            >
                <Phone size={24} className="group-hover:animate-pulse" />
            </button>

            <EnquireModal isOpen={isEnquireOpen} onClose={() => setIsEnquireOpen(false)} />
        </main>
    );
}
