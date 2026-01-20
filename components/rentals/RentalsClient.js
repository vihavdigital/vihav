"use client";
import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import dynamic from "next/dynamic";
import { ArrowRight, CheckCircle2, ChevronRight, Home, Key, ShieldCheck, Building2, Star, Search, CalendarCheck, FileText, BadgeCheck, Phone, Mail } from "lucide-react";
import RentalProjectCard from "./RentalProjectCard";
import { PROJECTS } from "@/data/projects";

// Lazy load Forms
const TenantForm = dynamic(() => import("./TenantForm"), {
    loading: () => <div className="h-[400px] w-full bg-gray-50/50 animate-pulse rounded-xl" />
});
const OwnerForm = dynamic(() => import("./OwnerForm"), {
    loading: () => <div className="h-[400px] w-full bg-gray-50/50 animate-pulse rounded-xl" />
});

export default function RentalsClient() {
    // State
    const [userType, setUserType] = useState("tenant"); // 'tenant' | 'owner'

    const [filterCategory, setFilterCategory] = useState("Commercial");

    // Filter verified projects for rentals (Featured section at bottom)
    // Expanded list to include potential residential matches if available in data, 
    // otherwise specific IDs are used.
    // Logic: 'RESI-COMM' appears in both.
    const featuredProjects = PROJECTS.filter(p => ['wealth-square', 'vtc', 'skyone'].includes(p.id));

    const filteredProjects = featuredProjects.filter(project => {
        if (project.category === "RESI-COMM") return true;
        return project.category === filterCategory;
    });

    return (
        <div className="min-h-screen bg-[#FDFBF7] selection:bg-gold-500/30 text-luxury-black font-sans">

            {/* --- TOP HEADER --- */}
            <div className="bg-luxury-black text-white pt-48 pb-32 relative overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <Image
                        src="/images/project-images/projects/cbd-res/gallery/vihav-cbd-gallery (1).webp"
                        alt="Background"
                        fill
                        className="object-cover grayscale"
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-luxury-black via-luxury-black/80 to-transparent" />

                <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        className="flex flex-col items-center"
                    >
                        <h1 className="text-4xl md:text-6xl font-serif mb-6 leading-tight">
                            Exclusive Platform for <br className="hidden md:block" /> Vihav Properties
                        </h1>
                        <p className="text-white/60 text-lg md:text-xl font-light max-w-2xl mx-auto">
                            The official concierge service for verified Vihav homeowners and discerning tenants.
                        </p>
                    </motion.div>
                </div>
            </div>

            <div className="container mx-auto px-6 md:px-12 -mt-8 relative z-20 pb-24">
                <div className="flex flex-col lg:flex-row gap-8 items-start">

                    {/* --- LEFT SIDEBAR (Navigation & Context) --- */}
                    <div className="w-full lg:w-1/3 lg:sticky lg:top-32 space-y-8">

                        {/* Selector Switch Cards */}
                        <div className="bg-white p-2 rounded-2xl shadow-xl shadow-black/5 border border-gray-100">
                            <button
                                onClick={() => setUserType("tenant")}
                                className={`w-full text-left p-4 rounded-xl transition-all duration-300 group ${userType === "tenant"
                                    ? "bg-luxury-black text-white px-6"
                                    : "hover:bg-gray-50 text-gray-400 hover:text-gray-900"
                                    }`}
                            >
                                <div className="flex justify-between items-center">
                                    <div>
                                        <h3 className={`font-serif text-xl ${userType === 'tenant' ? 'text-white' : 'text-gray-900'}`}>Property on Rent</h3>
                                        <p className={`text-xs mt-1 ${userType === 'tenant' ? 'text-gray-400' : 'text-gray-500'}`}>For Tenants</p>
                                    </div>
                                    <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${userType === 'tenant' ? 'bg-gold-500 text-black' : 'bg-gray-100 text-gray-400 opacity-0 group-hover:opacity-100'
                                        }`}>
                                        <CheckCircle2 size={16} />
                                    </div>
                                </div>
                            </button>

                            <div className="h-px bg-gray-100 my-1 mx-4" />

                            <button
                                onClick={() => setUserType("owner")}
                                className={`w-full text-left p-4 rounded-xl transition-all duration-300 group ${userType === "owner"
                                    ? "bg-luxury-black text-white px-6"
                                    : "hover:bg-gray-50 text-gray-400 hover:text-gray-900"
                                    }`}
                            >
                                <div className="flex justify-between items-center">
                                    <div>
                                        <h3 className={`font-serif text-xl ${userType === 'owner' ? 'text-white' : 'text-gray-900'}`}>Post property for rental</h3>
                                        <p className={`text-xs mt-1 ${userType === 'owner' ? 'text-gray-400' : 'text-gray-500'}`}>For Owners</p>
                                    </div>
                                    <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${userType === 'owner' ? 'bg-gold-500 text-black' : 'bg-gray-100 text-gray-400 opacity-0 group-hover:opacity-100'
                                        }`}>
                                        <CheckCircle2 size={16} />
                                    </div>
                                </div>
                            </button>
                        </div>

                        {/* Process / Why Us Section */}
                        <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hidden lg:block">
                            <h4 className="text-xs font-bold uppercase tracking-widest text-gold-600 mb-6">
                                {userType === 'tenant' ? 'The Vihav Experience' : 'Asset Management'}
                            </h4>

                            <div className="space-y-6">
                                <AnimatePresence mode="wait">
                                    {userType === 'tenant' ? (
                                        <motion.div
                                            key="tenant-features"
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: 10 }}
                                            className="space-y-6"
                                        >
                                            <FeatureRow icon={ShieldCheck} title="Verified Listings" desc="Direct from Vihav homeowners." />
                                            <FeatureRow icon={Key} title="Quick Move-in" desc="Seamless documentation support." />
                                            <FeatureRow icon={Star} title="Premium Lifecycle" desc="Access to lifestyle amenities." />
                                        </motion.div>
                                    ) : (
                                        <motion.div
                                            key="owner-features"
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: 10 }}
                                            className="space-y-6"
                                        >
                                            <FeatureRow icon={ShieldCheck} title="Verified Tenants" desc="Corporate & premium background checks." />
                                            <FeatureRow icon={Building2} title="Zero Hassle" desc="We handle viewings and queries." />
                                            <FeatureRow icon={Home} title="Asset Care" desc="Maintenance support for your unit." />
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </div>

                    </div>

                    {/* --- RIGHT CONTENT (Active Form) --- */}
                    <div className="w-full lg:w-2/3">
                        <motion.div
                            id="rental-inquiry-form"
                            key={userType}
                            initial={{ opacity: 0, scale: 0.98 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4 }}
                            className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl shadow-black/5 border border-gray-100 relative overflow-hidden"
                        >
                            {/* Decorative Elements */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-gold-400/10 rounded-bl-full -mr-16 -mt-16 pointer-events-none" />

                            <div className="relative z-10 mb-8">
                                <h2 className="font-serif text-3xl md:text-4xl text-gray-900 mb-2">
                                    {userType === 'tenant' ? 'Find Your Perfect Home' : 'Register Your Property'}
                                </h2>
                                <p className="text-gray-500 font-light text-lg">
                                    {userType === 'tenant'
                                        ? "Tell us what you're looking for, and we'll match you with exclusive listings."
                                        : "Join our exclusive rental pool. Fill in the details of your Vihav property below."
                                    }
                                </p>
                            </div>

                            <div className="relative z-10">
                                {userType === 'tenant'
                                    ? <TenantForm theme="minimal" />
                                    : <OwnerForm theme="minimal" />
                                }
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* --- FEATURED PROPERTIES (Discovery) --- */}
                {userType === 'tenant' && (
                    <div className="mt-32 border-t border-gray-200 pt-16">
                        <div className="flex justify-between items-end mb-12">
                            <div>
                                <span className="text-gold-600 font-bold tracking-widest text-xs uppercase block mb-3">Available Now</span>
                                <h2 className="text-4xl font-serif text-gray-900">Featured Premium Rentals</h2>
                            </div>
                            <button className="hidden md:flex items-center gap-2 text-sm font-bold uppercase tracking-widest hover:text-gold-600 transition-colors">
                                View Full Inventory <ArrowRight size={16} />
                            </button>
                        </div>

                        {/* Category Toggle */}
                        <div className="flex justify-center mb-12">
                            <div className="flex bg-white p-1 rounded-full border border-gray-200 shadow-sm">
                                <button
                                    onClick={() => setFilterCategory("Commercial")}
                                    className={`px-8 py-3 rounded-full text-sm font-bold uppercase tracking-wider transition-all duration-300 ${filterCategory === "Commercial"
                                        ? "bg-luxury-black text-white shadow-md"
                                        : "text-gray-500 hover:text-gray-900"
                                        }`}
                                >
                                    Commercial
                                </button>
                                <button
                                    onClick={() => setFilterCategory("Residential")}
                                    className={`px-8 py-3 rounded-full text-sm font-bold uppercase tracking-wider transition-all duration-300 ${filterCategory === "Residential"
                                        ? "bg-luxury-black text-white shadow-md"
                                        : "text-gray-500 hover:text-gray-900"
                                        }`}
                                >
                                    Residential
                                </button>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {filteredProjects.map((project) => (
                                <RentalProjectCard key={project.id} project={project} />
                            ))}
                        </div>
                    </div>
                )}

                {/* --- PROCESS SECTION --- */}
                <div className="mt-32 border-t border-gray-200 pt-16">
                    <div className="text-center mb-20 max-w-2xl mx-auto">
                        <span className="text-gold-600 font-bold tracking-[0.2em] text-xs uppercase block mb-4">Process</span>
                        <h2 className="text-5xl font-serif text-gray-900 mb-4">How It Works</h2>
                        <p className="text-gray-500">Your journey to a premium lifestyle in 4 simple steps.</p>
                    </div>

                    <div className="grid md:grid-cols-4 gap-8 relative max-w-6xl mx-auto">
                        {/* Connecting Line (Desktop) */}
                        <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-px bg-gold-100 -z-10" />

                        <ProcessStep
                            step="01"
                            title="Browse & Shortlist"
                            desc="Explore our curated list of verified premium properties."
                        />
                        <ProcessStep
                            step="02"
                            title="Schedule Visit"
                            desc="Book a private viewing at your convenience."
                        />
                        <ProcessStep
                            step="03"
                            title="Documentation"
                            desc="Hassle-free paperwork and agreement formalities."
                        />
                        <ProcessStep
                            step="04"
                            title="Move In"
                            desc="Receive keys and settle into your new luxury home."
                        />
                    </div>
                </div>

                {/* --- GUARANTEE SECTION --- */}
                <div className="mt-32 mb-16 bg-luxury-black rounded-3xl p-12 md:p-24 relative overflow-hidden text-center">
                    <div className="absolute inset-0 opacity-10">
                        <Image
                            src="/images/project-images/projects/cbd-res/gallery/vihav-cbd-gallery (1).webp"
                            alt="Background"
                            fill
                            className="object-cover grayscale"
                        />
                    </div>

                    <div className="relative z-10 max-w-4xl mx-auto">
                        <div className="w-16 h-16 bg-gold-500 rounded-full flex items-center justify-center mx-auto mb-8 text-black">
                            <BadgeCheck size={32} />
                        </div>

                        <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">The Vihav Guarantee</h2>
                        <p className="text-white/70 text-lg md:text-xl leading-relaxed mb-12">
                            We don't just list properties; we manage lifestyles. Every Vihav rental comes with the assurance of quality, transparency, and direct support from the developer.
                        </p>

                        <div className="grid md:grid-cols-3 gap-8 text-left">
                            <GuaranteeCard
                                icon={ShieldCheck}
                                title="100% Verified"
                                desc="Zero fake listings. Every property is owned and verified by Vihav Group."
                            />
                            <GuaranteeCard
                                icon={FileText}
                                title="Transparent Deals"
                                desc="No hidden charges. Clear contracts and direct negotiation."
                            />
                            <GuaranteeCard
                                icon={Home}
                                title="Property Care"
                                desc="Dedicated maintenance team for structural and amenity support."
                            />
                        </div>
                    </div>
                </div>

                {/* --- CTA SECTION --- */}
                <div className="text-center py-16">
                    <p className="text-gray-500 mb-6">Still have questions?</p>
                    <div className="flex justify-center gap-8">
                        <a href="tel:+917201854854" className="flex items-center gap-2 text-lg font-serif font-bold text-gray-900 hover:text-gold-600 transition-colors">
                            <Phone size={20} className="text-gold-500" /> +91 72018 54854
                        </a>
                        <a href="mailto:rentals@vihav.com" className="flex items-center gap-2 text-lg font-serif font-bold text-gray-900 hover:text-gold-600 transition-colors">
                            <Mail size={20} className="text-gold-500" /> rentals@vihav.com
                        </a>
                    </div>
                </div>

            </div>
        </div>
    );
}

// Helper Component for Sidebar Features
function FeatureRow({ icon: Icon, title, desc }) {
    return (
        <div className="flex gap-4 items-start">
            <div className="w-10 h-10 rounded-full bg-gold-50 text-gold-600 flex items-center justify-center flex-shrink-0 mt-1">
                <Icon size={18} />
            </div>
            <div>
                <h5 className="font-bold text-gray-900 text-sm">{title}</h5>
                <p className="text-gray-500 text-sm leading-relaxed mt-1">{desc}</p>
            </div>
        </div>
    )
}

function ProcessStep({ step, title, desc }) {
    return (
        <div className="relative z-10 text-center group px-4">
            <div className="w-24 h-24 mx-auto bg-white rounded-full shadow-lg border border-gray-100 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 relative">
                <span className="text-3xl text-gold-500 font-serif font-bold">
                    {step}
                </span>
            </div>

            <h3 className="text-xl font-serif font-bold text-gray-900 mb-3">{title}</h3>
            <p className="text-gray-500 text-sm leading-relaxed max-w-[200px] mx-auto">
                {desc}
            </p>
        </div>
    );
}

function GuaranteeCard({ icon: Icon, title, desc }) {
    return (
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors duration-300">
            <div className="mb-4 text-gold-400">
                <Icon size={24} />
            </div>
            <h4 className="text-white font-bold text-lg mb-2">{title}</h4>
            <p className="text-white/60 text-sm leading-relaxed">
                {desc}
            </p>
        </div>
    );
}
