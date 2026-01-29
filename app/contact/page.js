"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import EnquiryForm from "@/components/ui/EnquiryForm";
import LuxuryMapWrapper from "@/components/projects/LuxuryMapWrapper";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Building2, Globe, ArrowRight, Instagram, Facebook, Twitter, Linkedin, Youtube, ExternalLink } from "lucide-react";
import Link from "next/link";

import { useRouter } from "next/navigation";
import { PROJECTS } from "@/data/projects";

// Group projects for display
const residentialProjects = PROJECTS.filter(p => p.category === "Residential");
const commercialProjects = PROJECTS.filter(p => p.category === "Commercial");


export default function ContactPage() {
    const router = useRouter();
    return (
        <main className="min-h-screen bg-background text-foreground font-sans selection:bg-gold-400 selection:text-black">
            <Header />

            {/* Hero Section */}
            <section className="pt-48 pb-24 px-6 container mx-auto text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-6xl md:text-8xl font-serif text-foreground mb-8">Contact Us</h1>
                    <p className="text-muted-foreground max-w-2xl mx-auto text-lg md:text-xl font-light leading-relaxed">
                        Connect with our dedicated teams for each project or visit our corporate offices to begin your journey with Vihav Group.
                    </p>
                </motion.div>
            </section>

            {/* Main Content Grid */}
            <section className="pb-32 px-6 container mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

                    {/* Left Column: Office & General (4 cols) - Sticky */}
                    <div className="lg:col-span-4 space-y-16 lg:sticky lg:top-32 lg:h-fit order-last lg:order-first">

                        {/* Email */}
                        <div className="group bg-card/50 hover:bg-card p-6 rounded-xl border border-border hover:border-gold-400/30 transition-all duration-300">
                            <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-gold-400 mb-6 flex items-center gap-3">
                                Email Us
                            </h2>
                            <a href="mailto:info@vihav.com" className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center group-hover:bg-gold-400 group-hover:text-black transition-colors">
                                    <Mail size={18} />
                                </div>
                                <div>
                                    <span className="font-medium text-lg text-foreground group-hover:text-gold-400 transition-colors">info@vihav.com</span>
                                </div>
                            </a>
                        </div>

                        {/* Social Media */}
                        <div className="group bg-card/50 hover:bg-card p-6 rounded-xl border border-border hover:border-gold-400/30 transition-all duration-300">
                            <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-gold-400 mb-6 flex items-center gap-3">
                                Follow Us
                            </h2>
                            <div className="flex flex-wrap gap-4">
                                <a href="https://instagram.com/vihavgroup" target="_blank" className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-gold-400 hover:text-black hover:border-gold-400 transition-all duration-300">
                                    <Instagram size={20} />
                                </a>
                                <a href="https://facebook.com/vihavgroup" target="_blank" className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-gold-400 hover:text-black hover:border-gold-400 transition-all duration-300">
                                    <Facebook size={20} />
                                </a>
                                <a href="https://linkedin.com/company/vihav-group" target="_blank" className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-gold-400 hover:text-black hover:border-gold-400 transition-all duration-300">
                                    <Linkedin size={20} />
                                </a>
                                <a href="https://youtube.com/@vihavgroup" target="_blank" className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-gold-400 hover:text-black hover:border-gold-400 transition-all duration-300">
                                    <Youtube size={20} />
                                </a>
                            </div>
                        </div>

                    </div>

                    {/* Right Column: Project Contacts (8 cols) */}
                    <div className="lg:col-span-8">
                        <div className="bg-secondary/20 p-8 md:p-12 rounded-3xl border border-white/5 mb-16">
                            <div className="max-w-xl mb-10">
                                <h3 className="text-2xl font-serif mb-4">Send us a Message</h3>
                                <p className="text-muted-foreground">Fill out the form below and our team will get back to you shortly.</p>
                            </div>
                            <EnquiryForm onSuccess={() => router.push('/thank-you/general')} />
                        </div>

                        <div>
                            <div className="mb-16">
                                <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-gold-400 mb-8 flex items-center gap-3">
                                    Residential Projects
                                </h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {residentialProjects.map((item, idx) => (
                                        <ProjectCard key={idx} item={item} />
                                    ))}
                                </div>
                            </div>

                            <div>
                                <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-gold-400 mb-8 flex items-center gap-3">
                                    Commercial Projects
                                </h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {commercialProjects.map((item, idx) => (
                                        <ProjectCard key={idx} item={item} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            {/* Map Section - Custom Luxury Map */}
            <section className="h-[60vh] md:h-[80vh] w-full relative border-t border-white/10">
                <div className="absolute inset-0 z-0">
                    <LuxuryMapWrapper />
                </div>

            </section>

            <Footer />
        </main>
    );
}

function ProjectCard({ item }) {
    const router = useRouter();

    const handleCardClick = () => {
        router.push(`/projects/${item.slug}`);
    };

    return (
        <div
            onClick={handleCardClick}
            className="block h-full cursor-pointer"
        >
            <div className="p-6 rounded-xl bg-card border border-border/50 hover:border-gold-400/50 hover:bg-secondary/40 transition-all group relative overflow-hidden h-full">
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                    <Building2 size={64} />
                </div>

                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ExternalLink size={16} className="text-gold-400" />
                </div>

                <div className="relative z-10 flex flex-col h-full">
                    <div className="mb-4">
                        <h4 className="font-serif font-bold text-lg text-foreground group-hover:text-gold-400 transition-colors line-clamp-1">{item.title}</h4>
                        <p className="text-xs uppercase tracking-widest text-muted-foreground mt-1 line-clamp-1">{item.location}</p>
                    </div>

                    <div className="space-y-3 mt-auto">
                        {item.phone && (
                            <div className="flex items-center gap-3 text-sm text-muted-foreground group-hover:text-foreground transition-colors" onClick={(e) => e.stopPropagation()}>
                                <div className="w-6 h-6 rounded-full bg-gold-400/10 flex items-center justify-center shrink-0">
                                    <Phone size={12} className="text-gold-400" />
                                </div>
                                <a href={`tel:${item.phone}`} className="truncate hover:underline">{item.phone}</a>
                            </div>
                        )}
                        {item.email && (
                            <div className="flex items-center gap-3 text-sm text-muted-foreground group-hover:text-foreground transition-colors break-all" onClick={(e) => e.stopPropagation()}>
                                <div className="w-6 h-6 rounded-full bg-gold-400/10 flex items-center justify-center shrink-0">
                                    <Mail size={12} className="text-gold-400" />
                                </div>
                                <a href={`mailto:${item.email}`} className="truncate hover:underline">{item.email}</a>
                            </div>
                        )}
                    </div>
                </div>

                {/* Bottom Accent Line */}
                <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-gold-400 group-hover:w-full transition-all duration-700 ease-out" />
            </div>
        </div>
    );
}
