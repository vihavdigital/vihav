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
            <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                    <div>
                        <span className="text-gold-400 text-xs uppercase tracking-widest block mb-1">{project.location}</span>
                        <h3 className="text-xl font-serif text-white">{project.title}</h3>
                    </div>
                    <span className="text-white/40 text-sm">{project.type}</span>
                </div>

                <div className="h-px bg-white/10 w-full my-4" />

                <div className="flex justify-between items-center">
                    <span className="text-gray-400 text-sm">Starting from <span className="text-white font-medium">{project.price}</span></span>
                    <Link href={`/projects/${project.slug}`} className="text-xs uppercase tracking-widest text-white hover:text-gold-400 transition-colors">
                        View Details
                    </Link>
                </div>
            </div>
        </div>
    );
}
