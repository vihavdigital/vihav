import Link from "next/link";
import { ArrowUpRight, Maximize } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function ProjectCard({ project }) {
    return (
        <div className="group relative bg-card border border-border overflow-hidden transition-colors duration-300 h-full flex flex-col">
            {/* Image Container */}
            {/* Image Container */}
            <div className="block relative aspect-[4/3] overflow-hidden cursor-pointer">
                {/* Main Project Link (Background) */}
                <Link
                    href={project.link || `/projects/${project.slug}`}
                    target={project.link?.startsWith('http') ? '_blank' : undefined}
                    className="absolute inset-0 z-10"
                    aria-label={`View details for ${project.title}`}
                >
                    <div className="absolute inset-0 bg-secondary animate-pulse group-hover:animate-none transition-colors" />
                    <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 group-hover:brightness-[0.8] transition-all"
                        style={{ backgroundImage: `url(${project.heroImage || 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1000&auto=format&fit=crop'})` }}
                    />
                </Link>

                <div className="absolute top-4 right-4 z-20 pointer-events-none">
                    <Button size="icon" variant="outline" className="rounded-full bg-black/20 backdrop-blur-sm border-white/20 text-white group-hover:bg-gold-400 group-hover:border-gold-400 group-hover:text-black transition-colors">
                        <ArrowUpRight size={18} />
                    </Button>
                </div>

                {/* Status Tag */}
                {project.filterData?.possession && (
                    <Link
                        href={`/?category=${project.category || 'Residential'}&status=${encodeURIComponent(project.filterData.possession)}`}
                        scroll={false}
                        className="absolute top-4 left-4 z-30"
                        onClick={(e) => {
                            e.stopPropagation();
                            document.getElementById('project-collection')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                    >
                        <span className="inline-block px-3 py-1 bg-white/90 backdrop-blur-md text-luxury-black text-[10px] md:text-xs font-bold uppercase tracking-widest rounded-sm shadow-lg hover:bg-gold-400 transition-colors duration-300">
                            {project.filterData.possession}
                        </span>
                    </Link>
                )}
            </div>

            {/* Content */}
            <div className="p-5 md:p-8 flex flex-col flex-1 justify-between">
                <div>
                    <div className="flex justify-between items-start gap-4 mb-4">
                        <div>
                            <span className="text-amber-500 text-[10px] md:text-xs uppercase tracking-widest block mb-2 font-bold">{project.location}</span>
                            <h3 className="text-xl md:text-2xl font-serif text-foreground leading-tight">{project.title}</h3>
                            {project.carpetArea && (
                                <div className="inline-flex items-center gap-2 mt-4 px-3 py-1.5 bg-gold-400/10 border border-gold-400/20 rounded md:rounded-lg">
                                    <Maximize size={14} className="text-gold-500 flex-shrink-0" />
                                    <span className="text-[10px] md:text-xs font-bold text-foreground tracking-widest uppercase whitespace-nowrap">{project.carpetArea}</span>
                                </div>
                            )}
                        </div>
                        <span className="text-muted-foreground text-[10px] md:text-xs text-right hidden md:block">{project.type}</span>
                    </div>
                </div>

                <div>
                    <div className="h-px bg-border w-full my-4 opacity-50" />

                    <div className="flex flex-row justify-between items-center">
                        <div className="flex flex-col">
                            <span className="text-muted-foreground text-[10px] uppercase tracking-wider mb-1">Starting from</span>
                            <span className="text-foreground font-medium text-sm md:text-base">{project.price}</span>
                        </div>

                        <Link
                            href={project.link || `/projects/${project.slug}`}
                            target={project.link?.startsWith('http') ? '_blank' : undefined}
                            className="text-[10px] md:text-xs uppercase tracking-widest text-foreground hover:text-gold-400 transition-colors border-b border-transparent hover:border-gold-400 pb-0.5"
                        >
                            View Details
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
