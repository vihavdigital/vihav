"use client";

import FloorPlans from "@/components/projects/FloorPlans";

import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence, useInView } from "framer-motion";

import { ArrowLeft, MapPin, Check, FileText, Phone, Mail, ExternalLink, Shield, Trees, Dumbbell, Users, Gamepad2, Car, Waves, Coffee, ArrowUpFromLine, Video, HardHat, CircleCheck, Play, Image as ImageIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import dynamic from "next/dynamic";
import CollapsibleSection from "@/components/ui/CollapsibleSection";
import EnquiryModal from "@/components/ui/EnquiryModal";

// New Gallery Imports
import ProjectGallery from "@/components/projects/ProjectGallery";
import RealPicturesGallery from "@/components/projects/RealPicturesGallery";
import AmenitiesGallery from "@/components/projects/AmenitiesGallery";


// Dynamic Imports for Performance
// ProjectGallery is now statically imported
const ConstructionGallery = dynamic(() => import("@/components/projects/ConstructionGallery"), {
    loading: () => <div className="h-[300px] bg-neutral-100 animate-pulse rounded-lg" />
});
const LuxuryMapWrapper = dynamic(() => import("@/components/projects/LuxuryMapWrapper"), {
    ssr: false,
    loading: () => <div className="h-[400px] bg-neutral-200 animate-pulse rounded-lg" />
});

// Icon Mapping
const ICON_MAP = {
    Shield, Trees, Dumbbell, Users, Gamepad2, Car, Waves, Coffee, ArrowUpFromLine, Video, HardHat, CircleCheck, MapPin
};

export default function ProjectDetailsClient({ project, theme }) {
    const [activeSection, setActiveSection] = useState("overview");
    // State for Gallery Counters (Amenities & Real Site)
    const [amenitiesIndex, setAmenitiesIndex] = useState(0);
    const [realSiteIndex, setRealSiteIndex] = useState(0);

    // Helper to render inline counter
    const renderCounter = (current, total) => (
        <div className="flex items-end baseline gap-2 font-serif">
            <span className="text-gold-400 text-xl leading-none">{String(current + 1).padStart(2, '0')}</span>
            <span className="text-muted-foreground/40 text-sm leading-none">/</span>
            <span className="text-muted-foreground/60 text-sm leading-none">{String(total).padStart(2, '0')}</span>
        </div>
    );
    const [galleryTab, setGalleryTab] = useState("images"); // 'images' | 'videos'
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalTitle, setModalTitle] = useState("Enquire Now");

    const openModal = (title) => {
        setModalTitle(title);
        setIsModalOpen(true);
    };

    // filter gallery media
    const allGalleryMedia = project.galleryImages || [];
    const imagesOnly = allGalleryMedia.filter(m => !m.endsWith('.mp4') && !m.endsWith('.webm'));
    const videosOnly = allGalleryMedia.filter(m => m.endsWith('.mp4') || m.endsWith('.webm'));

    // If no videos, but we want to show the tab feature, maybe we can assume some dummy or just hide tab?
    // User asked for "images and videos tab". Let's show tabs if we have videos, or just show "No videos" empty state if clicked.

    // Scroll Spy Logic
    // Scroll Spy Logic - Optimized
    useEffect(() => {
        let ticking = false;

        const handleScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    const sections = ["overview", "amenities", "floor-plans", "gallery", "location", "construction"];
                    // Only check if we are scrolling
                    for (const section of sections) {
                        const el = document.getElementById(section);
                        if (el) {
                            const rect = el.getBoundingClientRect();
                            // Expanded detection range for smoother switching
                            if (rect.top >= -100 && rect.top < 300) {
                                setActiveSection(section);
                                break;
                            }
                        }
                    }
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (id) => {
        const el = document.getElementById(id);
        if (el) {
            const offset = 100; // Header height
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = el.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
            setActiveSection(id);
        }
    };

    return (
        <div className="relative">
            {/* Sticky Navigation Bar */}
            <div className={`sticky top-[48px] md:top-[60px] z-40 bg-background/95 backdrop-blur-sm border-b border-border transition-all duration-300`}>
                <div className="container mx-auto px-4 md:px-12 overflow-x-auto scrollbar-hide flex items-center justify-between md:justify-center">
                    <div className="flex items-center gap-3 md:gap-8 w-full md:w-auto min-w-max md:min-w-0 h-16 px-1">
                        {[
                            { id: "overview", label: "Overview" },
                            { id: "amenities", label: "Amenities" }, // Shortened for mobile fit
                            ...(project.floorPlans?.length > 0 ? [{ id: "floor-plans", label: "Layouts" }] : []),
                            ...(project.amenitiesImages?.length > 0 ? [{ id: "amenities-gallery", label: "Visuals" }] : []),
                            ...(project.realPictureImages?.length > 0 ? [{ id: "real-site-gallery", label: "Real Site" }] : []),
                            { id: "gallery", label: "Gallery" },
                            { id: "location", label: "Location" },
                            { id: "construction", label: "Status" }
                        ].map((item) => (
                            <button
                                key={item.id}
                                onClick={() => scrollToSection(item.id)}
                                className={`text-[10px] md:text-sm uppercase tracking-widest py-2 border-b-2 transition-colors whitespace-nowrap ${activeSection === item.id
                                    ? `${theme.text} ${theme.border}`
                                    : "text-muted-foreground border-transparent hover:text-foreground"
                                    }`}
                            >
                                {item.label}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* 1. Overview Section */}
            <section id="overview" className="pt-8 pb-16 md:pb-24 container mx-auto px-6 md:px-12 scroll-mt-24">
                <div className="flex flex-col-reverse lg:flex-row gap-16">
                    {/* Main Content (Left) */}
                    <div className="lg:w-2/3">
                        <span className={`${theme.text} uppercase tracking-[0.25em] text-xs font-bold mb-6 block`}>The Vision</span>
                        <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-8 leading-tight">
                            {project.tagline || (project.title.includes(" ") ? `Redefining ${project.title.split(" ").slice(-1)[0]}` : "A New Benchmark")}
                        </h2>
                        <p className="text-muted-foreground text-lg leading-relaxed mb-8 font-light">
                            {project.vision || project.description}
                        </p>

                        {/* Highlights Grid (Moved inside Overview for flow) */}
                        {project.highlights && (
                            <div className="grid md:grid-cols-2 gap-6 mt-6 md:mt-12 mb-6 md:mb-12">
                                {project.highlights.slice(0, 4).map((h, i) => {
                                    const Icon = ICON_MAP[h.icon] || CircleCheck;
                                    return (
                                        <div key={i} className="flex gap-4 p-4 rounded-lg bg-secondary/50 border border-border">
                                            <div className={`${theme.text} mt-1`}><Icon size={24} /></div>
                                            <div>
                                                <h4 className="font-serif text-lg text-foreground mb-1">{h.title}</h4>
                                                <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">{h.label}</p>
                                                <p className="text-sm text-muted-foreground/80">{h.description}</p>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        )}

                    </div>

                    {/* Sidebar Enquire Section (Right) */}
                    <div className="lg:w-1/3 relative">
                        <div className="sticky top-32">
                            <div className="bg-card border border-border p-8 shadow-2xl rounded-sm">
                                {project.logo ? (
                                    <div className="flex justify-center mb-6">
                                        <div className="relative w-40 h-20">
                                            <Image
                                                src={project.logo}
                                                alt={project.title}
                                                fill
                                                className="object-contain"
                                            />
                                        </div>
                                    </div>
                                ) : (
                                    <h3 className="font-serif text-2xl text-foreground mb-6">Project Details</h3>
                                )}

                                <div className="space-y-6 text-sm">
                                    <div>
                                        <span className="block text-muted-foreground uppercase tracking-widest text-xs mb-1">Price</span>
                                        <span className="block text-xl text-foreground font-medium">{project.price}</span>
                                    </div>
                                    <div className="h-px bg-border" />
                                    <div>
                                        <span className="block text-muted-foreground uppercase tracking-widest text-xs mb-1">Configuration</span>
                                        <span className="block text-foreground">{project.type}</span>
                                    </div>
                                    <div className="h-px bg-border" />
                                    <div>
                                        <span className="block text-muted-foreground uppercase tracking-widest text-xs mb-1">RERA Number</span>
                                        <span className={`block ${theme.text} font-mono break-all text-sm md:text-base`}>{project.reraId || "PR/GJ/VADODARA/RAA00000/000000"}</span>
                                    </div>

                                    <div className="pt-6 flex flex-col gap-3">
                                        <div className="flex flex-col md:flex-row gap-3">
                                            <Button
                                                onClick={() => openModal("Enquire Now")}
                                                className={`w-full md:flex-1 ${theme.bg} ${theme.hoverBg} text-black font-bold uppercase tracking-widest py-6 border-none text-[10px] md:text-xs`}
                                            >
                                                Enquire Now
                                            </Button>
                                            <Button
                                                variant="outline"
                                                onClick={() => openModal("Download Brochure")}
                                                className={`w-full md:flex-1 bg-transparent border border-border text-foreground hover:bg-secondary font-bold uppercase tracking-widest py-6 text-[10px] md:text-xs`}
                                            >
                                                <FileText className="mr-2" size={14} /> Brochure
                                            </Button>
                                        </div>

                                        <div className="bg-secondary/30 rounded-lg p-4 space-y-3 mt-2 border border-border/50">
                                            <a href={`tel:${project.phone}`} className="flex items-center gap-4 group cursor-pointer">
                                                <div className={`w-10 h-10 rounded-full ${theme.bgLight} flex items-center justify-center text-luxury-black group-hover:scale-110 transition-transform`}>
                                                    <Phone size={16} />
                                                </div>
                                                <div>
                                                    <span className="block text-[10px] uppercase tracking-widest text-muted-foreground">Call Us</span>
                                                    <span className="font-serif text-foreground group-hover:underline decoration-gold-400 underline-offset-4">{project.phone}</span>
                                                </div>
                                            </a>
                                            <div className="h-px bg-border/50" />
                                            <a href={`mailto:${project.email}`} className="flex items-center gap-4 group cursor-pointer">
                                                <div className={`w-10 h-10 rounded-full bg-white border border-border flex items-center justify-center text-muted-foreground group-hover:border-gold-400 group-hover:text-gold-400 transition-colors`}>
                                                    <Mail size={16} />
                                                </div>
                                                <div>
                                                    <span className="block text-[10px] uppercase tracking-widest text-muted-foreground">Email Us</span>
                                                    <span className="font-serif text-foreground text-sm group-hover:underline decoration-gold-400 underline-offset-4">{project.email}</span>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. Amenities & Specs */}
            <section id="amenities" className="py-16 md:py-24 bg-background text-foreground scroll-mt-24 border-t border-border">
                <div className="container mx-auto px-6 md:px-12">
                    <span className={`${theme.text} uppercase tracking-[0.25em] text-[10px] md:text-xs font-bold mb-4 md:mb-6 block`}>Lifestyle</span>
                    <h2 className="font-serif text-3xl md:text-5xl text-foreground mb-6">Amenities & Specifications</h2>
                    <div className="w-24 h-1 bg-gold-400/30 rounded-full mb-8 md:mb-16" />

                    <div className="space-y-0">
                        {/* Amenities Grid - Collapsible */}
                        {project.amenitiesList && (
                            <CollapsibleSection title="Premium Amenities" defaultOpen={true}>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                                    {project.amenitiesList.map((amenity, idx) => {
                                        const Icon = ICON_MAP[amenity.icon] || CircleCheck;
                                        return (
                                            <div key={idx} className="flex flex-col items-start text-left p-4 md:p-8 border border-border bg-secondary/20 hover:bg-secondary hover:border-gold-400 transition-all duration-300 rounded-xl group min-h-[140px] md:min-h-[180px] justify-between">
                                                <div className={`mb-4 md:mb-6 ${theme.text} group-hover:scale-110 transition-transform duration-300`}>
                                                    <Icon size={32} strokeWidth={1} className="md:w-10 md:h-10" />
                                                </div>
                                                <div>
                                                    <span className="text-foreground font-medium text-sm md:text-lg tracking-wide block mb-1 group-hover:text-gold-400 transition-colors">{amenity.label}</span>
                                                    {amenity.note && <span className="text-[10px] md:text-xs text-muted-foreground uppercase tracking-wider">{amenity.note}</span>}
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </CollapsibleSection>
                        )}

                        {/* Specifications - Collapsible */}
                        {project.specifications && (
                            <CollapsibleSection title="Specifications" defaultOpen={false}>
                                <div className="grid md:grid-cols-2 gap-x-12 gap-y-12">
                                    {project.specifications.map((spec, idx) => (
                                        <div key={idx} className="group">
                                            <div className={`flex items-center gap-3 md:gap-4 mb-4 md:mb-6 pb-2 md:pb-4 border-b border-border group-hover:border-gold-400/50 transition-colors`}>
                                                <div className={`w-1 h-6 md:h-8 ${theme.bg}`}></div>
                                                <h4 className={`text-lg md:text-xl font-bold text-foreground`}>{spec.category}</h4>
                                            </div>
                                            <ul className="space-y-4 pl-5">
                                                {spec.items.map((item, i) => (
                                                    <li key={i} className="text-muted-foreground text-base font-light leading-relaxed flex items-start">
                                                        <span className={`w-1.5 h-1.5 rounded-full ${theme.bgLight} mt-2.5 mr-3 flex-shrink-0 opacity-50`}></span>
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            </CollapsibleSection>
                        )}

                    </div>
                </div>
            </section>

            {/* NEW: Floor Plans Section */}
            {project.floorPlans?.length > 0 && (
                <section id="floor-plans" className="pt-12 md:pt-24 pb-8 md:pb-12 bg-background scroll-mt-24">
                    <div className="container mx-auto px-6 md:px-12 mb-8 md:mb-12">
                        <span className={`${theme.text} uppercase tracking-[0.25em] text-[10px] md:text-xs font-bold mb-4 md:mb-6 block`}>Layouts</span>
                        <h2 className="font-serif text-3xl md:text-5xl text-foreground mb-6">Floor Plans</h2>
                        <div className="w-24 h-1 bg-gold-400/30 rounded-full" />
                    </div>
                    <FloorPlans plans={project.floorPlans} />
                </section>
            )}

            {/* NEW: Amenities Gallery Section */}
            {project.amenitiesImages && project.amenitiesImages.length > 0 && (
                <section id="amenities-gallery" className="py-12 md:py-24 bg-background border-t border-border scroll-mt-24">
                    <div className="container mx-auto px-6 md:px-12 mb-8 md:mb-12">
                        <div className="flex justify-between items-end">
                            <div>
                                <span className={`${theme.text} uppercase tracking-[0.25em] text-[10px] md:text-xs font-bold mb-4 md:mb-6 block`}>Visualization</span>
                                <h2 className="font-serif text-3xl md:text-5xl text-foreground mb-6">Amenities Gallery</h2>
                                <div className="w-24 h-1 bg-gold-400/30 rounded-full" />
                            </div>
                            {renderCounter(amenitiesIndex, project.amenitiesImages.length)}
                        </div>
                    </div>
                    <div className="">
                        <ProjectGallery
                            images={project.amenitiesImages}
                            onIndexChange={setAmenitiesIndex}
                            isLightMode={true}
                            showProgress={false}
                        />
                    </div>
                </section>
            )}

            {/* NEW: Real Site Pictures Section */}
            {project.realPictureImages && project.realPictureImages.length > 0 && (
                <section id="real-site-gallery" className="py-12 md:py-24 bg-background border-t border-border scroll-mt-24">
                    <div className="container mx-auto px-6 md:px-12 mb-8 md:mb-12">
                        <div className="flex justify-between items-end">
                            <div>
                                <span className={`${theme.text} uppercase tracking-[0.25em] text-[10px] md:text-xs font-bold mb-4 md:mb-6 block`}>On Site</span>
                                <h2 className="font-serif text-3xl md:text-5xl text-foreground mb-6">Real Site Pictures</h2>
                                <div className="w-24 h-1 bg-gold-400/30 rounded-full" />
                            </div>
                            {renderCounter(realSiteIndex, project.realPictureImages.length)}
                        </div>
                    </div>
                    <div className="">
                        <ProjectGallery
                            images={project.realPictureImages}
                            onIndexChange={setRealSiteIndex}
                            isLightMode={true}
                            showProgress={false}
                        />
                    </div>
                </section>
            )}

            {/* 3. Main Gallery (Visual Tour) */}
            <section id="gallery" className="py-16 md:py-24 bg-luxury-black text-white scroll-mt-24">
                <VisualTourSection images={imagesOnly} videos={videosOnly} theme={theme} />
            </section>



            {/* Amenities Gallery moved to above */}

            {/* 4. Location Section */}
            <section id="location" className="py-12 md:py-24 container mx-auto px-6 md:px-12 scroll-mt-24 border-t border-border">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    <div className="lg:col-span-1">
                        <span className={`${theme.text} uppercase tracking-[0.25em] text-xs font-bold mb-6 block`}>Location</span>
                        <h2 className="font-serif text-4xl text-foreground mb-8">Connected <br /> to Everything</h2>
                        <p className="text-muted-foreground mb-16 leading-relaxed">
                            Strategically located at <strong>{project.location}</strong>. {project.address}
                        </p>

                        <div className="space-y-8">
                            {project.connectivity && project.connectivity.map((item, idx) => (
                                <div key={idx} className={`flex justify-between items-center border-b border-border pb-4 group ${theme.hoverBorder} transition-colors border-transparent`}>
                                    <span className={`text-foreground ${theme.hoverText} transition-colors`}>{item.label}</span>
                                    <span className="text-muted-foreground font-bold">{item.time}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="lg:col-span-2 bg-secondary min-h-[400px] relative overflow-hidden group rounded-lg border border-border z-0">
                        {/* Custom Luxury Map */}
                        <LuxuryMapWrapper activeProject={project} />
                    </div>
                </div>
            </section>

            {/* 5. Construction Status (Animated) */}
            <section id="construction" className="py-12 md:py-24 bg-secondary relative border-t border-border scroll-mt-24">
                <ConstructionStatus project={project} theme={theme} />
            </section>

            <EnquiryModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                title={modalTitle}
            />
        </div>
    );
}

// Sub-component for Animated Construction Status
function ConstructionStatus({ project, theme }) {
    const progress = project.progress || 0;
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    // Count up animation
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (isInView) {
            let start = 0;
            const end = parseInt(progress);
            if (start === end) return;

            let timer = setInterval(() => {
                start += 1;
                setCount(start);
                if (start === end) clearInterval(timer);
            }, 20); // Speed of count
            return () => clearInterval(timer);
        }
    }, [isInView, progress]);

    return (
        <div ref={ref} className="container mx-auto px-6 md:px-12">
            <div className="flex flex-col md:flex-row justify-between items-end mb-8 md:mb-16">
                <div>
                    <span className={`${theme.text} uppercase tracking-[0.25em] text-xs font-bold mb-4 block`}>Real-Time Updates</span>
                    <h2 className="font-serif text-4xl text-foreground">Construction Status</h2>
                </div>
                <div className="text-right mt-8 md:mt-0">
                    <div className="text-muted-foreground text-sm uppercase tracking-widest mb-2">Completion Progress</div>
                    <div className="text-5xl font-serif text-foreground">{count}%</div>
                </div>
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-border h-2 rounded-full overflow-hidden mb-16">
                <motion.div
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${progress}%` } : { width: 0 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className={`h-full ${theme.bg}`}
                />
            </div>

            {/* Construction Gallery */}
            <div className="min-h-[100px]">
                <ConstructionGallery images={project.constructionImages} theme={theme} />
            </div>
        </div>
    );
}

// Helper for Visual Tour (Slider - Mixed Media)
function VisualTourSection({ title = "Visual Tour", heading = "Gallery & Walkthroughs", images, videos, theme }) {
    // Merge images and videos into one slider
    const allMedia = [...(images || []), ...(videos || [])];
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <>
            <div className="container mx-auto px-6 md:px-12 mb-8 md:mb-12">
                <div className="flex justify-between items-end">
                    <div>
                        <span className={`${theme.text} uppercase tracking-[0.25em] text-[10px] md:text-xs font-bold mb-4 block`}>{title}</span>
                        <h2 className="font-serif text-3xl md:text-5xl text-white">{heading}</h2>
                    </div>
                    {/* Integrated Counter */}
                    <div className="flex items-end baseline gap-2 font-serif">
                        <span className="text-gold-400 text-xl leading-none">{String(activeIndex + 1).padStart(2, '0')}</span>
                        <span className="text-white/40 text-sm leading-none">/</span>
                        <span className="text-white/60 text-sm leading-none">{String(allMedia.length).padStart(2, '0')}</span>
                    </div>
                </div>
            </div>

            <div className="">
                <ProjectGallery images={allMedia} onIndexChange={setActiveIndex} />
            </div>
        </>
    );
}
