import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function ProjectCard({ project }) {
    return (
        <div className="group relative bg-neutral-900 border border-white/5 overflow-hidden">
            {/* Image Container */}
            {/* Image Container */}
            <Link href={`/projects/${project.slug}`} className="block relative aspect-[4/3] overflow-hidden cursor-pointer">
                <div className="absolute inset-0 bg-neutral-800 animate-pulse group-hover:animate-none transition-colors" />
                {/* Real implementation would use Next/Image */}
                <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url(${project.heroImage || 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1000&auto=format&fit=crop'})` }}
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />

                <div className="absolute top-4 right-4">
                    <Button size="icon" variant="outline" className="rounded-full bg-black/20 backdrop-blur-sm border-white/20 hover:bg-gold-400 hover:border-gold-400">
                        <ArrowUpRight size={18} />
                    </Button>
                </div>
            </Link>

            {/* Content */}
            <div className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row justify-between items-start mb-6 md:mb-4 gap-4 md:gap-0">
                    <div>
                        <span className="text-gold-400 text-xs uppercase tracking-widest block mb-1.5">{project.location}</span>
                        <h3 className="text-2xl md:text-xl font-serif text-white leading-tight">{project.title}</h3>
                    </div>
                    <span className="text-white/40 text-sm bg-white/5 md:bg-transparent px-3 py-1 md:p-0 rounded-full md:rounded-none">{project.type}</span>
                </div>

                <div className="h-px bg-white/10 w-full my-6 md:my-4" />

                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 md:gap-0">
                    <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-2">
                        <span className="text-gray-400 text-xs uppercase tracking-wider">Starting from</span>
                        <span className="text-white font-medium text-lg md:text-base">{project.price}</span>
                    </div>

                    <Link href={`/projects/${project.slug}`} className="w-full md:w-auto text-center border border-white/20 md:border-0 rounded md:rounded-none py-3 md:py-0 text-xs uppercase tracking-widest text-white hover:text-gold-400 transition-colors">
                        View Details
                    </Link>
                </div>
            </div>
        </div>
    );
}
