import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { ArrowLeft, MapPin, Check, FileText, Phone, Mail, ExternalLink, Shield, Trees, Dumbbell, Users, Gamepad2, Car, Waves, Coffee, ArrowUpFromLine, Video, HardHat, CircleCheck } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { PROJECTS, getProjectBySlug } from "@/data/projects";
import ProjectDetailsClient from "@/components/projects/ProjectDetailsClient"; // New Client Component
import VideoPlayer from "@/components/ui/VideoPlayer";

// Removed unused imports (ProjectGallery, ConstructionGallery, etc as they are moved to Client)
import { motion } from "framer-motion";
import LuxuryMapWrapper from "@/components/projects/LuxuryMapWrapper";
import CollapsibleSection from "@/components/ui/CollapsibleSection";

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

};

export async function generateStaticParams() {
    return PROJECTS.map((project) => ({
        slug: project.slug,
    }));
}

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const project = getProjectBySlug(slug);

    if (!project) {
        return {
            title: 'Project Not Found | Vihav Group',
            description: 'The requested project could not be found.',
        };
    }

    return {
        title: `${project.title} - ${project.category} in ${project.location} | Vihav Group`,
        description: project.description,
        openGraph: {
            title: project.title,
            description: project.description,
            images: [project.heroImage, ...(project.galleryImages || [])],
        },
    };
}

export default async function ProjectPage({ params }) {
    const { slug } = await params;
    const project = getProjectBySlug(slug);

    if (!project) {
        notFound();
    }

    const theme = THEME.standard;

    // Status Logic
    const progress = project.progress || 50;

    return (
        <main className={`min-h-screen bg-background text-foreground transition-colors duration-500 ${theme.selection} selection:text-black`}>
            <Header />

            {/* Hero Section */}
            <div className="relative h-[100svh]">
                <div className="absolute inset-0">
                    {/* Mobile Banner (Priority on Mobile) */}
                    {project.mobileHeroImage && (
                        <div className="relative w-full h-full md:hidden block">
                            <Image
                                src={project.mobileHeroImage}
                                alt={project.title}
                                fill
                                priority
                                className="object-cover brightness-90"
                                sizes="(max-width: 768px) 100vw, 1px"
                            />
                        </div>
                    )}

                    {/* Desktop Media (Video or Image) */}
                    <div className={`relative w-full h-full ${project.mobileHeroImage ? 'hidden md:block' : 'block'}`}>
                        {project.heroVideo ? (
                            <VideoPlayer
                                src={project.heroVideo}
                                poster={project.desktopHeroImage || project.heroImage}
                                className="w-full h-full object-cover brightness-90"
                            />
                        ) : (
                            <Image
                                src={project.desktopHeroImage || project.heroImage}
                                alt={project.title}
                                fill
                                priority
                                className="object-cover brightness-90"
                                sizes="(max-width: 768px) 1px, 100vw"
                            />
                        )}
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/20" />
                </div>
                <div className="relative z-10 h-full container mx-auto px-6 md:px-12 flex flex-col justify-end pb-8 md:pb-12">
                    <span className={`px-4 py-1 text-[10px] md:text-xs font-bold uppercase tracking-widest w-fit mb-3 ${project.slug === 'keystone-select' ? 'bg-white text-black border border-white' : `${theme.bgLight} text-luxury-black shadow-lg ${theme.shadow}`}`}>
                        {project.slug === 'keystone-select' ? 'The Signature Collection' : 'Selling Fast'}
                    </span>

                    <h1 className="text-4xl md:text-7xl font-serif text-white mb-3 md:mb-6 drop-shadow-2xl leading-none">{project.title}</h1>
                    <div className="flex flex-col md:flex-row gap-4 md:gap-8 text-xs md:text-sm uppercase tracking-widest text-gray-300">
                        <div className="flex items-center gap-2">
                            <MapPin size={16} className={theme.text} />
                            {project.location}
                        </div>
                        <div className="flex items-center gap-2">
                            <span className={theme.text}>Starting from</span>
                            <span className="text-white font-bold">{project.price}</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Client Interactions (Sticky Nav, Tabs, Animations) */}
            <ProjectDetailsClient project={project} theme={theme} />

            {/* Final CTA Removed as per request */}


            <Footer />
        </main>
    );
}
