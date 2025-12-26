import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { ArrowLeft, MapPin, Check, FileText, Phone, Mail, ExternalLink, Shield, Trees, Dumbbell, Users, Gamepad2, Car, Waves, Coffee, ArrowUpFromLine, Video, HardHat, CircleCheck } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProjectBySlug } from "@/data/projects";
import ProjectGallery from "@/components/projects/ProjectGallery";
import ConstructionGallery from "@/components/projects/ConstructionGallery";
import { motion } from "framer-motion";
import LuxuryMapWrapper from "@/components/projects/LuxuryMapWrapper";

// Icon Mapping
const ICON_MAP = {
    Shield, Trees, Dumbbell, Users, Gamepad2, Car, Waves, Coffee, ArrowUpFromLine, Video, HardHat, CircleCheck
};

const THEME = {
    standard: {
        text: 'text-gold-400',
        bg: 'bg-gold-600',
        bgLight: 'bg-gold-400',
        selection: 'selection:bg-gold-400',
        border: 'border-gold-400',
        hoverText: 'hover:text-gold-400',
        hoverBg: 'hover:bg-gold-500',
        hoverBorder: 'hover:border-gold-400',
        shadow: 'shadow-gold-900/50'
    },
    niwa: {
        text: 'text-emerald-400',
        bg: 'bg-emerald-600',
        bgLight: 'bg-emerald-400',
        selection: 'selection:bg-emerald-400',
        border: 'border-emerald-400',
        hoverText: 'hover:text-emerald-400',
        hoverBg: 'hover:bg-emerald-500',
        hoverBorder: 'hover:border-emerald-400',
        shadow: 'shadow-emerald-900/50'
    }
};

export default function ProjectPage({ params }) {
    // Unwrap params for Next.js 15+ 
    // Note: params is a promise in newer versions, but if this is an older version it might be object.
    // The previous code had `const { slug } = await params;` suggesting async component.
    // Since I'm making this "use client" for Framer Motion (optional but good for Polish), I need to handle data fetching differently or keep it server component.
    // However, the user wants "hover transparency" and "text color" fixed.
    // Let's stick to Server Component as before to avoid refactoring data fetching if possible, 
    // BUT the previous file was `export default async function`.
    // If I switch to `use client`, I can't use `async/await` on params directly in the same way or access `fs`.
    // But `data/projects.js` seems to be static data, so `use client` is fine if I don't use `fs`.
    // Wait, let's keep it Server Component for SEO and simplicity, and just use standard CSS/Tailwind for hover.
    // I will NOT use "use client" unless I need state. I don't really need state status.
    // So I will revert "use client" and keep it async.

    return <ProjectPageContent params={params} />;
}

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const project = getProjectBySlug(slug);

    if (!project) return { title: 'Project Not Found' };

    return {
        title: `${project.title} | Vihav Group`,
        description: project.description,
    }
}

async function ProjectPageContent({ params }) {
    const { slug } = await params;
    const project = getProjectBySlug(slug);

    if (!project) {
        notFound();
    }

    const isNiwa = project.slug === 'keystone-niwa';
    const theme = isNiwa ? THEME.niwa : THEME.standard;

    // Status Logic
    const progress = project.progress || 50;
    const statusLabel = project.status || "Under Construction";

    return (
        <main className={`min-h-screen bg-luxury-black text-white ${theme.selection} selection:text-black`}>
            <Header />

            {/* Hero Section */}
            <div className="relative h-[80vh]">
                <div className="absolute inset-0">
                    <img src={project.heroImage} className="w-full h-full object-cover brightness-75" alt={project.title} />
                    <div className="absolute inset-0 bg-gradient-to-t from-luxury-black via-transparent to-black/30" />
                </div>
                <div className="relative z-10 h-full container mx-auto px-6 flex flex-col justify-end pb-20">
                    <span className={`px-4 py-1 text-xs font-bold uppercase tracking-widest w-fit mb-6 ${project.slug === 'keystone-select' ? 'bg-white text-black border border-white' : `${theme.bgLight} text-luxury-black shadow-lg ${theme.shadow}`}`}>
                        {project.slug === 'keystone-select' ? 'The Signature Collection' : 'Selling Fast'}
                    </span>
                    <h1 className="text-5xl md:text-7xl font-serif text-white mb-6 drop-shadow-2xl">{project.title}</h1>
                    <div className="flex flex-col md:flex-row gap-8 text-sm uppercase tracking-widest text-gray-300">
                        <div className="flex items-center gap-2">
                            <MapPin size={18} className={theme.text} />
                            {project.location}
                        </div>
                        <div className="flex items-center gap-2">
                            <span className={theme.text}>Starting from</span>
                            <span className="text-white font-bold">{project.price}</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* 1. Vision & Sidebar Enquire Section */}
            <section className="py-16 md:py-24 container mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-16">
                    {/* Main Content (Left) */}
                    <div className="lg:w-2/3">
                        <span className={`${theme.text} uppercase tracking-[0.25em] text-xs font-bold mb-6 block`}>The Vision</span>
                        <h2 className="font-serif text-4xl md:text-5xl text-white mb-8 leading-tight">
                            {project.title.includes(" ") ? `Redefining ${project.title.split(" ").slice(-1)[0]}` : "A New Benchmark"}
                        </h2>
                        <p className="text-gray-300 text-lg leading-relaxed mb-8 font-light">
                            {project.vision || project.description}
                        </p>

                        {/* Amenities Section */}
                        {project.amenitiesList && (
                            <div className="mb-16">
                                <h3 className="font-serif text-2xl mb-8 border-b border-white/10 pb-4">Premium Amenities</h3>
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                                    {project.amenitiesList.map((amenity, idx) => {
                                        const Icon = ICON_MAP[amenity.icon] || CircleCheck;
                                        return (
                                            <div key={idx} className="flex flex-col items-center text-center p-6 border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-colors rounded-lg group">
                                                <div className={`mb-4 ${theme.text} opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-transform`}>
                                                    <Icon size={32} strokeWidth={1} />
                                                </div>
                                                <span className="text-gray-300 text-sm tracking-wide group-hover:text-white transition-colors">{amenity.label}</span>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        )}

                        {/* Specifications Section */}
                        {project.specifications && (
                            <div className="mb-12">
                                <h3 className="font-serif text-2xl mb-8 border-b border-white/10 pb-4">Specifications</h3>
                                <div className="space-y-6">
                                    {project.specifications.map((spec, idx) => (
                                        <div key={idx} className={`bg-neutral-900/50 p-6 border-l-2 border-white/10 ${theme.hoverBorder} transition-colors group`}>
                                            <h4 className={`text-lg font-bold text-white mb-3 ${theme.text}`}>{spec.category}</h4>
                                            <ul className="space-y-2">
                                                {spec.items.map((item, i) => (
                                                    <li key={i} className="flex items-start text-gray-400 text-sm">
                                                        <span className={`mr-2 mt-1.5 w-1 h-1 rounded-full ${theme.bg}`}></span>
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Sidebar Enquire Section (Right) */}
                    <div className="lg:w-1/3 relative">
                        <div className="sticky top-24">
                            <div className="bg-neutral-900 border border-white/10 p-8 shadow-2xl">
                                <h3 className="font-serif text-2xl text-white mb-6">Project Details</h3>

                                <div className="space-y-6 text-sm">
                                    <div>
                                        <span className="block text-gray-500 uppercase tracking-widest text-xs mb-1">Price</span>
                                        <span className="block text-xl text-white font-medium">{project.price}</span>
                                    </div>
                                    <div className="h-px bg-white/10" />
                                    <div>
                                        <span className="block text-gray-500 uppercase tracking-widest text-xs mb-1">Configuration</span>
                                        <span className="block text-white">{project.type}</span>
                                    </div>
                                    <div className="h-px bg-white/10" />
                                    <div>
                                        <span className="block text-gray-500 uppercase tracking-widest text-xs mb-1">RERA Number</span>
                                        <span className={`block ${theme.text} font-mono break-all text-sm md:text-base`}>{project.reraId || "PR/GJ/VADODARA/RAA00000/000000"}</span>
                                    </div>
                                    <div>
                                        <span className="block text-gray-500 uppercase tracking-widest text-xs mb-1">RERA Website</span>
                                        <a href={project.reraLink || "#"} target="_blank" className={`flex items-center text-white ${theme.hoverText} transition-colors`}>
                                            Gujarat RERA <ExternalLink size={12} className="ml-2" />
                                        </a>
                                    </div>

                                    <div className="pt-6">
                                        <Button className={`w-full ${theme.bg} ${theme.hoverBg} text-black font-bold uppercase tracking-widest py-6 border-none`}>
                                            Enquire Now
                                        </Button>
                                    </div>

                                    <div className="pt-4 flex flex-col gap-3">
                                        <a href={`tel:${project.phone}`} className="flex items-center text-gray-400 hover:text-white transition-colors">
                                            <Phone size={16} className={`mr-3 ${theme.text}`} /> {project.phone || "+91 88663 41272"}
                                        </a>
                                        <a href={`mailto:${project.email}`} className="flex items-center text-gray-400 hover:text-white transition-colors">
                                            <Mail size={16} className={`mr-3 ${theme.text}`} /> {project.email || "sales@vihav.com"}
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Generic Highlights Section (The "Select" Standard for all) */}
            {!isNiwa && project.highlights && (
                <section className="py-24 bg-neutral-900 border-y border-white/5 relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
                    <div className="container mx-auto px-6 text-center relative z-10">
                        <span className={`${theme.text} uppercase tracking-[0.4em] text-xs font-bold block mb-4`}>The {project.title.split(" ")[0]} Standard</span>
                        <h2 className="font-serif text-4xl md:text-6xl text-white mb-8">Uncompromising Luxury</h2>
                        <p className="max-w-2xl mx-auto text-gray-400 font-light leading-relaxed mb-12">
                            A residence designed for the few who seek the extraordinary. {project.title} offers a living experience that transcends the ordinary.
                        </p>

                        <div className="grid md:grid-cols-3 gap-12 text-center">
                            {project.highlights.map((highlight, idx) => {
                                const Icon = ICON_MAP[highlight.icon] || CircleCheck;
                                return (
                                    <div key={idx} className="p-8 border border-white/5 bg-neutral-900/30 hover:bg-neutral-900/50 transition-colors group">
                                        <div className={`${theme.text} mb-6 flex justify-center opacity-80 group-hover:opacity-100 transition-opacity`}>
                                            <Icon size={40} strokeWidth={1} />
                                        </div>
                                        <h3 className="text-3xl font-serif text-white mb-4">{highlight.title}</h3>
                                        <p className={`text-sm uppercase tracking-widest ${theme.text} mb-4`}>{highlight.label}</p>
                                        <p className="text-gray-500 font-light text-sm">{highlight.description}</p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>
            )}

            {/* Garden Living Section for Keystone Niwa (Fallback) */}
            {project.slug === 'keystone-niwa' && (
                <section className="py-32 bg-neutral-900 border-y border-white/5 relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/nature.png')] opacity-10"></div>
                    <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-emerald-900/20 to-black/80 pointer-events-none"></div>

                    <div className="container mx-auto px-6 relative z-10">
                        <div className="text-center mb-24">
                            <span className="text-emerald-400 uppercase tracking-[0.4em] text-xs font-bold block mb-4">The Nurtured Edition</span>
                            <h2 className="font-serif text-4xl md:text-6xl text-white mb-8">Garden Living Redefined</h2>
                            <p className="max-w-2xl mx-auto text-gray-400 font-light leading-relaxed">
                                Where 35% of the land is nurtured, not built. A sanctuary that breathes, dedicated primarily to nature.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            <div className="p-8 border border-emerald-500/20 bg-emerald-950/10 hover:bg-emerald-900/20 transition-all group text-center">
                                <div className="text-emerald-400 mb-6 flex justify-center opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500">
                                    <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center">
                                        <span className="text-2xl">🌿</span>
                                    </div>
                                </div>
                                <h3 className="text-xl font-serif text-white mb-2">35% Open Greens</h3>
                                <p className="text-gray-500 text-sm">A landscape nurtured for tranquility.</p>
                            </div>
                            <div className="p-8 border border-emerald-500/20 bg-emerald-950/10 hover:bg-emerald-900/20 transition-all group text-center">
                                <div className="text-emerald-400 mb-6 flex justify-center opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500">
                                    <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center">
                                        <span className="text-2xl">🏢</span>
                                    </div>
                                </div>
                                <h3 className="text-xl font-serif text-white mb-2">One Floor One Unit</h3>
                                <p className="text-gray-500 text-sm">Absolute privacy with no shared walls.</p>
                            </div>
                            <div className="p-8 border border-emerald-500/20 bg-emerald-950/10 hover:bg-emerald-900/20 transition-all group text-center">
                                <div className="text-emerald-400 mb-6 flex justify-center opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500">
                                    <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center">
                                        <span className="text-2xl">🍳</span>
                                    </div>
                                </div>
                                <h3 className="text-xl font-serif text-white mb-2">Dual Kitchens</h3>
                                <p className="text-gray-500 text-sm">Gourmet & Utility kitchens for convenience.</p>
                            </div>
                            <div className="p-8 border border-emerald-500/20 bg-emerald-950/10 hover:bg-emerald-900/20 transition-all group text-center">
                                <div className="text-emerald-400 mb-6 flex justify-center opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500">
                                    <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center">
                                        <span className="text-2xl">🏊</span>
                                    </div>
                                </div>
                                <h3 className="text-xl font-serif text-white mb-2">Private Pools</h3>
                                <p className="text-gray-500 text-sm">Exclusive penthouses with personal pools.</p>
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {/* 3. Horizontal Gallery Slider */}
            <ProjectGallery images={project.galleryImages} />

            {/* 4. Location & Connectivity */}
            <section className="py-24 container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    <div className="lg:col-span-1">
                        <span className={`${theme.text} uppercase tracking-[0.25em] text-xs font-bold mb-6 block`}>Location</span>
                        <h2 className="font-serif text-4xl text-white mb-8">Connected <br /> to Everything</h2>
                        <p className="text-gray-400 mb-10 leading-relaxed">
                            Strategically located at <strong>{project.location}</strong>. {project.address}
                        </p>

                        <div className="space-y-6">
                            {project.connectivity && project.connectivity.map((item, idx) => (
                                <div key={idx} className={`flex justify-between items-center border-b border-white/10 pb-4 group ${theme.hoverBorder} transition-colors border-transparent`}>
                                    <span className={`text-white ${theme.hoverText} transition-colors`}>{item.label}</span>
                                    <span className="text-gray-500 font-bold">{item.time}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="lg:col-span-2 bg-neutral-800 min-h-[400px] relative overflow-hidden group rounded-lg border border-white/10 z-0">
                        {/* Custom Luxury Map */}
                        <LuxuryMapWrapper activeProject={project} />
                    </div>
                </div>
            </section>

            {/* 5. Construction Updates & Status (Moved to Bottom) */}
            <section className="py-24 bg-neutral-900 relative border-t border-white/5">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16">
                        <div>
                            <span className={`${theme.text} uppercase tracking-[0.25em] text-xs font-bold mb-4 block`}>Real-Time Updates</span>
                            <h2 className="font-serif text-4xl text-white">Construction Status</h2>
                        </div>
                        <div className="text-right mt-8 md:mt-0">
                            <div className="text-gray-400 text-sm uppercase tracking-widest mb-2">Completion Progress</div>
                            <div className="text-5xl font-serif text-white">{progress}%</div>
                        </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full bg-white/5 h-1 rounded-full overflow-hidden mb-16">
                        <div className={`h-full ${theme.bg} transition-all duration-1000`} style={{ width: `${progress}%` }}></div>
                    </div>

                    {/* Interactive Construction Gallery */}
                    <div className="min-h-[300px]">
                        <ConstructionGallery images={project.constructionImages} theme={theme} />
                    </div>
                </div>
            </section>

            {/* 6. Final CTA */}
            <section className={`py-32 ${theme.bg} text-luxury-black text-center relative overflow-hidden`}>
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                <div className="container mx-auto px-6 relative z-10">
                    <h2 className="font-serif text-4xl md:text-6xl mb-8">Begin Your Legacy</h2>
                    <p className="max-w-xl mx-auto text-black/80 text-lg mb-12 font-medium">
                        Secure your place at {project.title}. Providing an address that speaks for itself.
                    </p>
                    <Button className="bg-black text-white px-12 py-6 text-lg tracking-widest hover:bg-gray-900 border border-black hover:border-white/20 transition-all shadow-xl hover:shadow-2xl">
                        Enquire Interest
                    </Button>
                </div>
            </section>

            <Footer />
        </main>
    );
}
