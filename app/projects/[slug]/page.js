import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { ArrowLeft, MapPin, Check, FileText, Phone, Mail, ExternalLink } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProjectBySlug } from "@/data/projects";
import ProjectGallery from "@/components/projects/ProjectGallery";

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const project = getProjectBySlug(slug);

    if (!project) return { title: 'Project Not Found' };

    return {
        title: `${project.title} | Vihav Group`,
        description: project.description,
    }
}

export default async function ProjectPage({ params }) {
    const { slug } = await params;
    const project = getProjectBySlug(slug);

    if (!project) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-luxury-black text-white selection:bg-gold-400 selection:text-black">
            <Header />

            {/* Hero Section (Reverted to Selling Fast style) */}
            <div className="relative h-[80vh]">
                <div className="absolute inset-0">
                    <img src={project.heroImage} className="w-full h-full object-cover brightness-75" alt={project.title} />
                    <div className="absolute inset-0 bg-gradient-to-t from-luxury-black via-transparent to-black/30" />
                </div>
                <div className="relative z-10 h-full container mx-auto px-6 flex flex-col justify-end pb-20">
                    <span className="bg-gold-400 text-luxury-black px-4 py-1 text-xs font-bold uppercase tracking-widest w-fit mb-6">Selling Fast</span>
                    <h1 className="text-5xl md:text-7xl font-serif text-white mb-6">{project.title}</h1>
                    <div className="flex flex-col md:flex-row gap-8 text-sm uppercase tracking-widest text-gray-300">
                        <div className="flex items-center gap-2">
                            <MapPin size={18} className="text-gold-400" />
                            {project.location}
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-gold-400">Starting from</span>
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
                        <span className="text-gold-400 uppercase tracking-[0.25em] text-xs font-bold mb-6 block">The Vision</span>
                        <h2 className="font-serif text-4xl md:text-5xl text-white mb-8 leading-tight">
                            {project.title.includes(" ") ? `Redefining ${project.title.split(" ").slice(-1)[0]}` : "A New Benchmark"}
                        </h2>
                        <p className="text-gray-300 text-lg leading-relaxed mb-8 font-light">
                            {project.vision || project.description}
                        </p>

                        <div className="aspect-video bg-neutral-900 overflow-hidden shadow-2xl mb-12">
                            <img src={project.galleryImages?.[0] || project.heroImage} className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000" alt="Vision" />
                        </div>

                        <h3 className="font-serif text-2xl mb-6">Key Features</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
                            {project.features && project.features.map((feature, i) => (
                                <div key={i} className="flex items-center p-4 border border-white/10 rounded-lg hover:border-gold-400/50 transition-colors">
                                    <div className="w-8 h-8 rounded-full bg-gold-400/10 flex items-center justify-center text-gold-400 mr-4">
                                        <Check size={16} />
                                    </div>
                                    <span className="text-gray-300">{feature}</span>
                                </div>
                            ))}
                        </div>
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
                                        <span className="block text-gold-400 font-mono">{project.reraId || "PR/GJ/VADODARA/RAA00000/000000"}</span>
                                    </div>
                                    <div>
                                        <span className="block text-gray-500 uppercase tracking-widest text-xs mb-1">RERA Website</span>
                                        <a href={project.reraLink || "#"} target="_blank" className="flex items-center text-white hover:text-gold-400 transition-colors">
                                            Gujarat RERA <ExternalLink size={12} className="ml-2" />
                                        </a>
                                    </div>

                                    <div className="pt-6">
                                        <Button className="w-full bg-gold-600 hover:bg-gold-500 text-black font-bold uppercase tracking-widest py-6">
                                            Enquire Now
                                        </Button>
                                    </div>

                                    <div className="pt-4 flex flex-col gap-3">
                                        <a href={`tel:${project.phone}`} className="flex items-center text-gray-400 hover:text-white transition-colors">
                                            <Phone size={16} className="mr-3 text-gold-400" /> {project.phone || "+91 88663 41272"}
                                        </a>
                                        <a href={`mailto:${project.email}`} className="flex items-center text-gray-400 hover:text-white transition-colors">
                                            <Mail size={16} className="mr-3 text-gold-400" /> {project.email || "sales@vihav.com"}
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Horizontal Gallery Slider */}
            <ProjectGallery images={project.galleryImages} />

            {/* 4. Location & Connectivity */}
            <section className="py-24 container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    <div className="lg:col-span-1">
                        <span className="text-gold-400 uppercase tracking-[0.25em] text-xs font-bold mb-6 block">Location</span>
                        <h2 className="font-serif text-4xl text-white mb-8">Connected <br /> to Everything</h2>
                        <p className="text-gray-400 mb-10 leading-relaxed">
                            Strategically located at <strong>{project.location}</strong>. {project.address}
                        </p>

                        <div className="space-y-6">
                            {project.connectivity && project.connectivity.map((item, idx) => (
                                <div key={idx} className="flex justify-between items-center border-b border-white/10 pb-4 group hover:border-gold-400/30 transition-colors">
                                    <span className="text-white group-hover:text-gold-400 transition-colors">{item.label}</span>
                                    <span className="text-gray-500 font-bold">{item.time}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="lg:col-span-2 bg-neutral-800 min-h-[400px] relative overflow-hidden group">
                        {/* Map Placeholder */}
                        <div className="absolute inset-0 bg-neutral-900 border border-white/10 flex items-center justify-center">
                            <img
                                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1000&auto=format&fit=crop"
                                className="w-full h-full object-cover opacity-30 grayscale group-hover:grayscale-0 transition-all duration-1000"
                                alt="Map Location"
                            />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="text-center bg-black/80 backdrop-blur-md p-6 border border-white/10 rounded-sm">
                                    <MapPin size={32} className="text-gold-400 mx-auto mb-4" />
                                    <span className="uppercase tracking-widest text-xs text-white">View on Google Maps</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. Final CTA */}
            <section className="py-32 bg-gold-600 text-luxury-black text-center relative overflow-hidden">
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
