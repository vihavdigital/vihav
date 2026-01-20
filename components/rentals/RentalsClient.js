"use client";
import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import TenantForm from "./TenantForm";
import OwnerForm from "./OwnerForm";
import RentalProjectCard from "./RentalProjectCard";
import { PROJECTS } from "@/data/projects";
import { ArrowDown, Building2, Key, Search, ShieldCheck, Star } from "lucide-react";

export default function RentalsClient() {
    const [activeTab, setActiveTab] = useState("rent"); // 'rent' | 'list'

    // Filter verified projects for rentals
    const featuredProjects = PROJECTS.filter(p => ['wealth-square', 'vtc', 'skyone'].includes(p.id));

    return (
        <div className="min-h-screen bg-white text-black selection:bg-gold-500/30 font-sans">
            {/* Hero Section with Split Background Concept */}
            <section className="relative min-h-[85vh] flex flex-col pt-32 pb-20 overflow-hidden">

                {/* Dynamic Background */}
                <div className="absolute inset-0 z-0">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, scale: 1.1 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 1.5, ease: "easeOut" }}
                            className="absolute inset-0"
                        >
                            <Image
                                src={activeTab === 'rent'
                                    ? "/images/project-images/projects/cbd-res/gallery/vihav-cbd-gallery (1).webp"
                                    : "/images/project-images/project-tiles/vihav-cbd.jpg"
                                }
                                alt="Luxury Real Estate"
                                fill
                                className="object-cover"
                            />
                            {/* Gradient Overlay for better text contrast - kept dark for Hero readability */}
                            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
                            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-transparent" />
                        </motion.div>
                    </AnimatePresence>
                </div>

                <div className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col items-start justify-center flex-grow">

                    {/* Toggle Switch */}
                    <div className="flex p-1 bg-white/20 backdrop-blur-md border border-white/30 rounded-full mb-12 self-start shadow-lg">
                        <button
                            onClick={() => setActiveTab("rent")}
                            className={`px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-500 ${activeTab === "rent" ? "bg-white text-black shadow-lg" : "text-white hover:bg-white/10"
                                }`}
                        >
                            Find a Home
                        </button>
                        <button
                            onClick={() => setActiveTab("list")}
                            className={`px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-500 ${activeTab === "list" ? "bg-gold-500 text-black shadow-lg" : "text-white hover:bg-white/10"
                                }`}
                        >
                            List Your Property
                        </button>
                    </div>

                    <div className="max-w-3xl space-y-8">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.5 }}
                            >
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="h-[1px] w-12 bg-gold-400" />
                                    <span className="text-gold-400 font-bold tracking-[0.3em] text-xs uppercase shadow-black/50 drop-shadow-md">
                                        {activeTab === 'rent' ? "Premium Residential Leasing" : "Asset Management Partner"}
                                    </span>
                                </div>

                                <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white leading-[1.1] mb-8 drop-shadow-lg">
                                    {activeTab === 'rent'
                                        ? <>Curated Living <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-200 to-gold-400">Experiences.</span></>
                                        : <>Maximize Your <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-200 to-gold-400">Investment.</span></>
                                    }
                                </h1>
                                <p className="text-lg md:text-xl text-white/90 max-w-xl leading-relaxed font-light border-l-2 border-gold-500/50 pl-6 drop-shadow-md">
                                    {activeTab === 'rent'
                                        ? "Access Vadodara's most exclusive rental portfolio. From high-rise penthouses to serene garden villas."
                                        : "Leverage Vihav Group's extensive network to find verified tenants for your premium property."
                                    }
                                </p>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </section>

            {/* Featured Listings Section - Added as requested */}
            {activeTab === 'rent' && (
                <section className="py-24 bg-gray-50 border-b border-gray-100">
                    <div className="container mx-auto px-6 md:px-12">
                        <div className="text-center max-w-3xl mx-auto mb-16">
                            <span className="text-gold-600 font-bold tracking-[0.2em] text-xs uppercase block mb-4">
                                Exclusive Opportunities
                            </span>
                            <h2 className="text-4xl md:text-5xl font-serif text-black mb-6">
                                Featured Commercial Spaces
                            </h2>
                            <p className="text-gray-500 text-lg font-light leading-relaxed">
                                Discover premium office and retail spaces available for immediate lease in Vadodara's prime business districts.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {featuredProjects.map((project) => (
                                <RentalProjectCard key={project.id} project={project} />
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Content Section - Light Theme */}
            <section className="py-24 bg-white relative">
                <div className="container mx-auto px-6 md:px-12 relative z-10">
                    <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">

                        {/* Left: Value Prop */}
                        <div className="lg:w-1/3 space-y-12 sticky top-32">
                            <div className="space-y-6">
                                <h3 className="text-3xl font-serif text-black">
                                    The Vihav {activeTab === 'rent' ? "Guarantee" : "Advantage"}
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    We don't just facilitate transactions; we build lasting relationships based on trust, transparency, and superior service.
                                </p>
                            </div>

                            <div className="space-y-6">
                                <Feature
                                    icon={ShieldCheck}
                                    title="Verified Listings"
                                    desc="Zero brokerage on direct developer listings. All properties are vetted for quality."
                                />
                                <Feature
                                    icon={Building2}
                                    title="Prime Locations"
                                    desc="Properties situated in the most coveted neighborhoods of Vadodara."
                                />
                                <Feature
                                    icon={Key}
                                    title="Seamless Move-in"
                                    desc="End-to-end support with documentation, agreements, and handover."
                                />
                            </div>

                            {/* Trust Indicator */}
                            <div className="p-6 bg-gray-50 border border-gray-100 rounded-xl mt-8 shadow-sm">
                                <div className="flex items-center gap-2 mb-2">
                                    <Star size={16} className="text-gold-500 fill-gold-500" />
                                    <Star size={16} className="text-gold-500 fill-gold-500" />
                                    <Star size={16} className="text-gold-500 fill-gold-500" />
                                    <Star size={16} className="text-gold-500 fill-gold-500" />
                                    <Star size={16} className="text-gold-500 fill-gold-500" />
                                </div>
                                <p className="text-sm text-gray-700 italic">"The most professional rental experience I've had in the city. Highly recommended."</p>
                                <p className="text-xs text-gold-600 mt-2 uppercase tracking-wider font-bold">- Recent Client</p>
                            </div>
                        </div>

                        {/* Right: The Form */}
                        <div className="lg:w-2/3 w-full">
                            <div className="bg-white border border-gray-200 p-8 md:p-12 rounded-3xl relative overflow-hidden shadow-xl">
                                {/* Decorative Blur - Lighter for white theme */}
                                <div className="absolute top-0 right-0 w-64 h-64 bg-gold-500/5 rounded-full blur-[80px] -mr-32 -mt-32 pointer-events-none" />

                                <div className="relative z-10">
                                    <h3 className="font-serif text-3xl mb-2 text-black">
                                        {activeTab === 'rent' ? "Tell Us What You Need" : "Register Your Property"}
                                    </h3>
                                    <p className="text-gray-500 mb-10">Fill out the details below and our team will get back to you within 24 hours.</p>

                                    {activeTab === 'rent' ? <TenantForm theme="light" /> : <OwnerForm theme="light" />}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

function Feature({ icon: Icon, title, desc }) {
    return (
        <div className="flex gap-5 group">
            <div className="w-14 h-14 rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center text-gold-500 flex-shrink-0 group-hover:bg-gold-500 group-hover:text-white transition-all duration-300 shadow-sm">
                <Icon size={24} strokeWidth={1.5} />
            </div>
            <div>
                <h4 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-gold-600 transition-colors">{title}</h4>
                <p className="text-gray-500 leading-relaxed text-sm">{desc}</p>
            </div>
        </div>
    )
}
