import { PROJECTS } from "@/data/projects";
import Link from "next/link";
import { ArrowLeft, Download, CheckCircle, ArrowRight, Home, Building2, MapPin } from "lucide-react";
import Image from "next/image";
import { notFound } from "next/navigation";

export function generateStaticParams() {
    return PROJECTS.map((project) => ({
        projectId: project.id,
    }));
}

export default async function ThankYouPage({ params }) {
    const { projectId } = await params;
    const project = PROJECTS.find((p) => p.id === projectId);

    if (!project) {
        return notFound();
    }

    // Use hero image or fallback
    const bgImage = project.desktopHeroImage || project.heroImage || "/images/project-images/hero-banner/desktop-banner/default.webp";
    const mobileImage = project.mobileHeroImage || bgImage;

    const projectLogo = project.logo || "/images/project-images/project-logos/vihav-group-logo.svg";

    return (
        // Production Note: Using h-screen to enforce full viewport height and prevent unnecessary scrolling on desktop if content fits.
        // 'overflow-hidden' ensures no accidental scrollbars from animations or minor overflows.
        <div className="flex flex-col lg:flex-row h-screen w-full bg-white overflow-hidden">

            {/* 1. Left Column: Full Height Hero Image */}
            {/* Mobile: 30vh fixed height. Desktop: 45% width, Full Height. */}
            <div className="relative w-full h-[30vh] lg:w-[45%] lg:h-full shrink-0">
                <Image
                    src={bgImage}
                    alt={project.title}
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 1024px) 100vw, 45vw"
                />
                {/* Simple Dark Overlay */}
                <div className="absolute inset-0 bg-black/10" />

                {/* Mobile Only: Bottom Fade to Blend with Content */}
                <div className="lg:hidden absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white via-white/60 to-transparent" />

                {/* Project Title Overlay (Desktop only) */}
                <div className="absolute bottom-0 left-0 p-12 w-full text-white hidden lg:block bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                    <h2 className="text-4xl xl:text-5xl font-serif mb-3 tracking-wide">{project.title}</h2>
                    <div className="flex items-center gap-2 text-sm uppercase tracking-widest opacity-90">
                        <MapPin size={16} className="text-gold-400" />
                        <span>{project.location}</span>
                    </div>
                </div>
            </div>

            {/* 2. Right Column: Content */}
            {/* Flex container that GUARANTEES centering. */}
            {/* 'lg:w-[55%]' fills the rest. 'flex-col justify-center' aligns vertically. */}
            <div className="relative w-full flex-1 lg:w-[55%] flex flex-col justify-center items-center lg:items-start px-6 py-8 lg:p-24 h-full bg-white">

                {/* Inner Content Container */}
                {/* Using 'w-full max-w-xl' to constrain width on large screens but stay centered. */}
                <div className="w-full max-w-xl flex flex-col justify-center space-y-6 lg:space-y-10">

                    {/* Logo Section */}
                    {projectLogo && (
                        <div className="relative w-32 h-16 md:w-48 md:h-24 mx-auto lg:mx-0 drop-shadow-sm mb-4 lg:mb-2">
                            <Image
                                src={projectLogo}
                                alt={project.title}
                                fill
                                className="object-contain"
                                sizes="200px"
                            />
                        </div>
                    )}

                    {/* Success Section */}
                    <div className="space-y-4 text-center lg:text-left">
                        <div className="flex items-center justify-center lg:justify-start gap-3 text-green-600 mb-2">
                            <CheckCircle size={28} strokeWidth={2} className="md:w-8 md:h-8" />
                            <span className="text-xs md:text-sm font-bold uppercase tracking-[0.25em]">Enquiry Sent</span>
                        </div>

                        <h1 className="text-5xl md:text-6xl xl:text-7xl font-serif text-luxury-black leading-tight">Thank You!</h1>
                        <p className="text-base md:text-lg xl:text-xl text-foreground/70 leading-relaxed font-light mt-4">
                            We have received your details for <strong className="underline underline-offset-8 decoration-gold-400 decoration-2">{project.title}</strong>. Our relationship manager will handle your request personally.
                        </p>
                    </div>

                    {/* Actions */}
                    <div className="flex flex-col sm:flex-row gap-4 pt-6 lg:pt-8 border-t border-gray-100 lg:border-none">
                        {project.brochureLink && (
                            <a
                                href={project.brochureLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-3 bg-luxury-black hover:bg-gold-500 text-white hover:text-black px-8 py-4 rounded-full font-bold uppercase tracking-widest transition-all duration-300 shadow-lg hover:shadow-xl min-w-[200px] group whitespace-nowrap text-xs md:text-sm hover:-translate-y-1"
                            >
                                <Download size={18} className="group-hover:scale-110 transition-transform" />
                                <span>Brochure</span>
                            </a>
                        )}

                        <Link
                            href="/projects"
                            className="inline-flex items-center justify-center gap-3 bg-white border-2 border-gray-200 hover:border-black text-luxury-black hover:bg-black hover:text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest transition-all duration-300 min-w-[200px] whitespace-nowrap text-xs md:text-sm shadow-sm hover:shadow-md hover:-translate-y-1"
                        >
                            <Building2 size={18} />
                            <span>Explore Other Projects</span>
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    );
}
