import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function ProjectCard({ project }) {
    return (
        <div className="group relative bg-card border border-border overflow-hidden transition-colors duration-300">
            {/* Image Container */}
            <Link href={`/projects/${project.slug}`} className="block relative aspect-[4/3] overflow-hidden cursor-pointer">
                <div className="absolute inset-0 bg-secondary animate-pulse group-hover:animate-none transition-colors" />
                {/* Real implementation would use Next/Image */}
                <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 group-hover:brightness-[0.8] transition-all"
                    style={{ backgroundImage: `url(${project.heroImage || 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1000&auto=format&fit=crop'})` }}
                />

                <div className="absolute top-4 right-4">
                    <Button size="icon" variant="outline" className="rounded-full bg-black/20 backdrop-blur-sm border-white/20 text-white hover:bg-gold-400 hover:border-gold-400 hover:text-black">
                        <ArrowUpRight size={18} />
                    </Button>
                </div>
            </Link>

            {/* Content */}
            <div className="p-5 md:p-8 flex flex-col h-full justify-between">
                <div>
                    <div className="flex justify-between items-start gap-4 mb-4">
                        <div>
                            <span className="text-gold-400 text-[10px] md:text-xs uppercase tracking-widest block mb-2 font-bold">{project.location}</span>
                            <h3 className="text-xl md:text-2xl font-serif text-foreground leading-tight">{project.title}</h3>
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

                        <Link href={`/projects/${project.slug}`} className="text-[10px] md:text-xs uppercase tracking-widest text-foreground hover:text-gold-400 transition-colors border-b border-transparent hover:border-gold-400 pb-0.5">
                            View Details
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
