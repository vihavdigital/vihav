"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Maximize } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { usePathname } from "next/navigation";
import dynamic from "next/dynamic";
import MagneticWrapper from "@/components/ui/MagneticWrapper";

const EnquiryModal = dynamic(() => import("@/components/ui/EnquiryModal"));

function StatusTag({ category, possession }) {
    const pathname = usePathname();
    // Default to Residential if category missing, just like before
    const cat = category || 'Residential';

    return (
        <Link
            href={`${pathname}?category=${cat}&status=${encodeURIComponent(possession)}`}
            scroll={false}
            className="absolute top-4 left-4 z-30"
            onClick={(e) => {
                e.stopPropagation();
                // Check if we are on home or projects page to decide scroll target
                // If on home, 'project-collection' exists. If on projects, maybe scroll to top?
                // The existing code tried to scroll 'project-collection'.
                // We'll keep it safe.
                const targetId = pathname === '/' ? 'project-collection' : 'projects-feed';
                // Note: ProjectsFeed doesn't have an ID in the original code, but sectionRef handles it in ProjectsFeed component. 
                // The click here just updates URL, which triggers useProjectFilters. 
                // We can probably drop the manual scroll here as the page or feed component should handle reaction.
                // But let's keep the existing behaviour for Home.
                document.getElementById('project-collection')?.scrollIntoView({ behavior: 'smooth' });
            }}
        >
            <span className="inline-block px-3 py-1 bg-white/90 backdrop-blur-md text-luxury-black text-[10px] md:text-xs font-bold uppercase tracking-widest rounded-sm shadow-lg hover:bg-gold-400 transition-colors duration-300">
                {possession}
            </span>
        </Link>
    );
}

export default function ProjectCard({ project }) {
    const [isEnquireOpen, setIsEnquireOpen] = useState(false);

    return (
        <>
            <div className="group relative bg-card border border-border overflow-hidden transition-colors duration-300 h-full flex flex-col">
                {/* Global Card Link */}
                <Link
                    href={project.link || `/projects/${project.slug}`}
                    target={project.link?.startsWith('http') ? '_blank' : undefined}
                    className="absolute inset-0 z-10 outline-none focus:ring-2 focus:ring-gold-400 focus:ring-offset-2"
                    aria-label={`View details for ${project.title}`}
                />

                {/* Image Container */}
                <div className="block relative aspect-[4/3] overflow-hidden">
                    <div className="absolute inset-0 bg-secondary animate-pulse group-hover:animate-none transition-colors" />
                    <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 group-hover:brightness-[0.8] transition-all"
                        style={{ backgroundImage: `url(${project.heroImage || 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1000&auto=format&fit=crop'})` }}
                    />

                    <div className="absolute top-4 right-4 z-20 pointer-events-none">
                        <Button size="icon" variant="outline" className="rounded-full bg-black/20 backdrop-blur-sm border-white/20 text-white group-hover:bg-gold-400 group-hover:border-gold-400 group-hover:text-black transition-colors">
                            <ArrowUpRight size={18} />
                        </Button>
                    </div>

                    {/* Status Tag */}
                    {project.filterData?.possession && (
                        <StatusTag
                            category={project.category}
                            possession={project.filterData.possession}
                        />
                    )}


                </div>

                {/* Content */}
                <div className="p-6 md:p-7 flex flex-col flex-1 justify-between gap-6">
                    <div>
                        <div className="flex justify-between items-start gap-6 mb-4">
                            <div className="flex-1 min-w-0 pr-2">
                                <span className="text-amber-500 text-[10px] md:text-xs uppercase tracking-widest block mb-1 font-bold line-clamp-2">{project.location}</span>
                                <h3 className="text-lg md:text-2xl font-serif text-foreground leading-tight mb-2">{project.title}</h3>
                                {project.carpetArea && (
                                    <div className="inline-flex items-start gap-1.5 px-2.5 py-1.5 bg-gold-400/10 border border-gold-400/20 rounded md:rounded-lg">
                                        <Maximize size={12} className="text-gold-500 flex-shrink-0 mt-0.5" />
                                        <div className="flex flex-col">
                                            {project.carpetArea.split('|').map((line, idx) => (
                                                <span key={idx} className="text-[9px] md:text-[10px] font-bold text-foreground tracking-widest uppercase leading-tight">
                                                    {line.trim()}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                            {/* Right Column: Type & Badge */}
                            <div className="flex flex-col items-end shrink-0">
                                <span className="text-muted-foreground text-[10px] md:text-xs text-right block max-w-[100px] md:max-w-[120px] lg:max-w-[150px] leading-tight break-words">{project.type}</span>
                                {project.customBadge && (
                                    <div className="mt-3 flex flex-col items-center justify-center bg-gradient-to-br from-amber-400 to-amber-500 text-white rounded shadow-xl shadow-amber-500/40 aspect-square w-[60px] h-[60px] md:w-[70px] md:h-[70px] border border-white/30 ring-1 ring-amber-500/50 ring-offset-2 ring-offset-card transform -translate-y-1">
                                        <span className="text-[8px] uppercase font-medium tracking-[0.2em] leading-none text-white/90 mb-0.5">Only</span>
                                        <span className="text-2xl md:text-3xl font-serif leading-none mb-0.5">1</span>
                                        <span className="text-[6px] md:text-[7px] uppercase font-bold tracking-widest leading-none text-center text-white/90">Unit Left</span>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    <div className="pt-4 border-t border-border/50">
                        <div className="flex flex-row justify-between items-center gap-4">
                            <div className="flex flex-col">
                                <span className="text-muted-foreground text-[10px] uppercase tracking-wider mb-0.5">Starting from</span>
                                <span className="text-foreground font-medium text-sm md:text-base">{project.price}</span>
                            </div>

                            <MagneticWrapper className="w-fit z-20 relative">
                                <button
                                    onClick={(e) => {
                                        e.preventDefault();
                                        e.stopPropagation();
                                        setIsEnquireOpen(true);
                                    }}
                                    className="bg-gold-400 hover:bg-gold-500 text-black font-bold uppercase tracking-widest px-4 md:px-6 py-2 md:py-3 text-[10px] md:text-xs rounded transition-all duration-300 shadow-lg hover:shadow-gold-400/20 active:scale-95"
                                >
                                    Enquire Now
                                </button>
                            </MagneticWrapper>
                        </div>
                    </div>
                </div>
            </div>

            <EnquiryModal
                isOpen={isEnquireOpen}
                onClose={() => setIsEnquireOpen(false)}
                title={`Enquiry for ${project.title}`}
            />
        </>
    );
}
