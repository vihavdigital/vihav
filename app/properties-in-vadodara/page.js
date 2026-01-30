"use client";
import React, { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import NRIHero from "@/components/overseas/NRIHero";

import ServiceCards from "@/components/overseas/ServiceCards";
import VadodaraShowcase from "@/components/overseas/VadodaraShowcase";
import LuxuryMapWrapper from "@/components/projects/LuxuryMapWrapper";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import EnquiryModal from "@/components/ui/EnquiryModal";
import ProjectSection from "@/components/home/ProjectSection";
import { PROJECTS } from "@/data/projects";
import { Suspense } from "react";
import { useRouter } from "next/navigation";

export default function VadodaraPropertiesPage() {
    const router = useRouter();
    const [isEnquireOpen, setIsEnquireOpen] = useState(false);

    return (
        <main className="bg-background min-h-screen text-foreground selection:bg-gold-400 selection:text-luxury-black pb-20 md:pb-0 transition-colors duration-500">
            <Header />

            {/* 1. Emotional Hero */}
            <NRIHero />



            {/* 3. Vadodara: The Emerging Powerhouse (New Section) */}
            <section className="py-24 bg-background">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
                        <div className="md:w-1/2">
                            <span className="text-gold-400 uppercase tracking-widest text-xs font-bold mb-2 block">Growth Story</span>
                            <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-6">Vadodara: A Tier-2 City Rising</h2>
                            <div className="space-y-6 text-muted-foreground/80 leading-relaxed">
                                <p>
                                    Vadodara is rapidly emerging as one of India's top Tier-2 cities, driven by robust industrial growth, excellent infrastructure, and a high quality of life. The city is attracting significant investments in IT, manufacturing, and petrochemicals.
                                </p>
                                <p>
                                    As industries expand, the demand for premium residential and commercial spaces is soaring. Vadodara offers a perfect blend of peaceful living with modern amenities, making it an ideal destination for investors looking for high growth potential.
                                </p>
                                <ul className="space-y-3 mt-4">
                                    {['Emerging IT & Tech Hub', 'Strategic Industrial Corridor', 'Smart City Development', 'High Rental Yields'].map((item, i) => (
                                        <li key={i} className="flex items-center gap-3 text-foreground font-medium">
                                            <div className="w-2 h-2 rounded-full bg-gold-400" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="md:w-1/2 relative h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl">
                            <img
                                src="/images/project-images/project-tiles/cbd-commercial.webp"
                                alt="Vadodara Skyline"
                                className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/90 to-transparent">
                                <p className="text-white font-serif text-2xl">"The cultural capital is now the investment capital."</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Why Vihav? (New Section) */}
            <section className="py-24 bg-secondary/30 border-t border-border">
                <div className="container mx-auto px-6 text-center max-w-4xl">
                    <span className="text-gold-400 uppercase tracking-widest text-xs font-bold mb-2 block">Partner in Growth</span>
                    <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-12">Grow with Vihav</h2>
                    <p className="text-muted-foreground mb-16 text-lg">
                        We don't just build properties; we build wealth. With a legacy of trust and a portfolio of landmark projects, Vihav Group is your perfect partner for navigating the Vadodara real estate market.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { title: 'Prime Locations', desc: 'We identify and develop in the most promising growth corridors.' },
                            { title: 'Asset Management', desc: 'End-to-end support for leasing and property management.' },
                            { title: 'Appreciation', desc: 'Our projects have consistently delivered superior ROI.' }
                        ].map((item, i) => (
                            <div key={i} className="bg-background p-8 rounded-xl border border-border hover:border-gold-400 transition-colors shadow-sm cursor-default">
                                <h3 className="text-xl font-serif text-foreground mb-3">{item.title}</h3>
                                <p className="text-sm text-muted-foreground">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. Complete Portfolio with Filters (Homepage UI) */}
            <ProjectSection
                projects={PROJECTS}
                residentialProjects={PROJECTS.filter(p => p.category === "Residential")}
                commercialProjects={PROJECTS.filter(p => p.category === "Commercial")}
            />

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

            <EnquiryModal
                isOpen={isEnquireOpen}
                onClose={() => setIsEnquireOpen(false)}
                contextData={{
                    srd: "67b4277658f1e73887ed6281",
                    project_id: "properties-in-vadodara", // Updated ID context
                    sub_source: "Properties In Vadodara Page"
                }}
                onSuccessAction={() => router.push('/thank-you/general')}
            />
        </main>
    );
}
