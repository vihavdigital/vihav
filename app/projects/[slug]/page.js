import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { ArrowLeft, MapPin, Check, FileText, Phone, Mail, ExternalLink, Shield, Trees, Dumbbell, Users, Gamepad2, Car, Waves, Coffee, ArrowUpFromLine, Video, HardHat, CircleCheck } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProjectBySlug } from "@/data/projects";
import ProjectDetailsClient from "@/components/projects/ProjectDetailsClient"; // New Client Component
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

    return (
        <main className={`min-h-screen bg-background text-foreground transition-colors duration-500 ${theme.selection} selection:text-black`}>
            <Header />

            {/* Hero Section */}
            <div className="relative h-[80vh]">
                <div className="absolute inset-0">
                    <img src={project.heroImage} className="w-full h-full object-cover brightness-90" alt={project.title} />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/20" />
                </div>
                <div className="relative z-10 h-full container mx-auto px-6 flex flex-col justify-end pb-8 md:pb-12">
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

            {/* Final CTA */}
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
