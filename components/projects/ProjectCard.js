"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Maximize, MousePointer2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { usePathname, useRouter } from "next/navigation";
import dynamic from "next/dynamic";
import Image from "next/image";
import MagneticWrapper from "@/components/ui/MagneticWrapper";

const EnquiryModal = dynamic(() => import("@/components/ui/EnquiryModal"));

function StatusTag({ category, possession }) {
    const pathname = usePathname();
    // Default to Residential if category missing, just like before
    const cat = category || 'Residential';

    return (
        <div
            className="absolute top-4 left-4 cursor-default z-20 opacity-70"
            onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
            }}
        >
            <span className="inline-block px-3 py-1 bg-white/90 backdrop-blur-md text-luxury-black text-[10px] md:text-xs font-bold uppercase tracking-widest rounded-sm shadow-lg">
                {possession}
            </span>
        </div>
    );
}

export default function ProjectCard({ project, priority = false }) {
    const router = useRouter();
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
                    <Link href={project.link || `/projects/${project.slug}`}>
                        <div className="absolute inset-0 bg-secondary animate-pulse group-hover:animate-none transition-colors" />
                        <div className="absolute inset-0">
                            <Image
                                src={project.heroImage || 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1000&auto=format&fit=crop'}
                                alt={project.title}
                                fill
                                priority={priority}
                                className="object-cover transition-transform duration-700 group-hover:scale-110 group-hover:brightness-[0.8]"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                        </div>
                    </Link>

                    <div className="absolute top-4 right-4 pointer-events-none">
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
                            <div className="flex-1 min-w-0 pr-2 flex flex-col gap-4">
                                {/* Title & Type Group */}
                                <div>
                                    <Link href={project.link || `/projects/${project.slug}`} className="block group-hover:text-gold-400 transition-colors">
                                        <h3 className="text-lg md:text-2xl font-serif text-foreground leading-tight">{project.title}</h3>
                                    </Link>
                                    <span className="text-muted-foreground text-xs md:text-sm block mt-1 leading-tight">{project.type}</span>
                                </div>

                                {project.carpetArea && (
                                    <div className="inline-flex flex-col gap-0.5 px-3 py-2 bg-gold-400/10 border border-gold-400/20 rounded md:rounded-lg w-fit">
                                        {project.carpetArea.split('|').map((line, idx) => (
                                            <span key={idx} className="text-[9px] md:text-[10px] font-bold text-foreground tracking-widest uppercase leading-tight">
                                                {line.trim()}
                                            </span>
                                        ))}
                                    </div>
                                )}

                                {/* Location */}
                                <span className="text-amber-500 text-[10px] md:text-xs uppercase tracking-widest font-bold leading-tight break-words">
                                    {project.location}
                                </span>
                            </div>

                            {/* Right Column: Badge Only */}
                            <div className="flex flex-col items-end shrink-0">
                                {project.customBadge && (
                                    <div className="flex flex-col items-center justify-center bg-gradient-to-br from-amber-400 to-amber-500 text-white rounded shadow-xl shadow-amber-500/40 aspect-square w-[60px] h-[60px] md:w-[70px] md:h-[70px] border border-white/30 ring-1 ring-amber-500/50 ring-offset-2 ring-offset-card transform -translate-y-1">
                                        <span className="text-[8px] uppercase font-medium tracking-[0.2em] leading-none text-white/90 mb-0.5">Only</span>
                                        <span className="text-2xl md:text-3xl font-serif leading-none mb-0.5">1</span>
                                        <span className="text-[6px] md:text-[7px] uppercase font-bold tracking-widest leading-none text-center text-white/90">Unit Left</span>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    <div className="pt-4 border-t border-border/50 relative z-20">
                        <div className="flex flex-row justify-between items-center gap-4">
                            <div
                                className={`flex flex-col flex-1 ${project.price === "Price on Request" ? "cursor-pointer group/price" : ""}`}
                                onClick={(e) => {
                                    if (project.price === "Price on Request") {
                                        e.preventDefault();
                                        e.stopPropagation();
                                        setIsEnquireOpen(true);
                                    }
                                }}
                            >
                                {project.price !== "Price on Request" && (
                                    <span className="text-muted-foreground text-[10px] uppercase tracking-wider mb-0.5">Starting from</span>
                                )}
                                <span className={`text-foreground transition-colors flex items-center gap-2 ${project.price === "Price on Request" ? "bg-secondary hover:bg-gold-400/20 px-4 md:px-6 py-2 md:py-3 rounded font-bold text-[10px] md:text-xs uppercase tracking-widest w-full justify-center text-center" : "font-medium text-sm md:text-base"}`}>
                                    {project.price}
                                </span>
                            </div>

                            <MagneticWrapper className="flex-1 relative">
                                <button
                                    onClick={(e) => {
                                        e.preventDefault();
                                        e.stopPropagation();
                                        setIsEnquireOpen(true);
                                    }}
                                    className="bg-gold-400 hover:bg-gold-500 text-black font-bold uppercase tracking-widest px-4 md:px-6 py-2 md:py-3 text-[10px] md:text-xs rounded transition-all duration-300 shadow-lg hover:shadow-gold-400/20 active:scale-95 w-full"
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
                contextData={{
                    project_id: project.id,
                    srd: project.srd,
                    sub_source: "Homepage Project Card"
                }}
                onSuccessAction={() => router.push(`/thank-you/${project.id}`)}
            />
        </>
    );
}
