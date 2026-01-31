import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { PROJECTS } from "@/data/projects";
import Link from "next/link";
import Image from "next/image";
import { MapPin, ArrowRight } from "lucide-react";
import { notFound } from "next/navigation";

// Helper to normalize area strings for comparison
const normalize = (str) => str.toLowerCase().replace(/-/g, " ");

export async function generateMetadata({ params }) {
    const { area } = await params;
    const formattedArea = normalize(area).replace(/\b\w/g, l => l.toUpperCase());

    return {
        title: `Luxury Properties in ${formattedArea}, Vadodara | Vihav Group`,
        description: `Explore premium residential and commercial projects in ${formattedArea}, Vadodara. Find your dream home or office space with Vihav Group.`,
        keywords: `Real Estate ${formattedArea}, Flats in ${formattedArea}, Commercial Property ${formattedArea}, Vadodara Real Estate`,
    };
}

export default async function NeighborhoodPage({ params }) {
    const { area } = await params;
    const normalizedArea = normalize(area);
    const formattedArea = normalizedArea.replace(/\b\w/g, l => l.toUpperCase());

    // Filter projects that match the area in location, address, or highlights
    const areaProjects = PROJECTS.filter(p => {
        const searchSpace = [
            p.location,
            p.address,
            ...(p.locationHighlights || [])
        ].join(" ").toLowerCase();
        return searchSpace.includes(normalizedArea) && p.link;
    });

    if (areaProjects.length === 0) {
        // Option: Return 404 or show a "No projects found in this specific area, but check out these..."
        // For SEO, it's better to 404 if truly no content, but we want to capture traffic.
        // Let's return notFound for now to avoid empty indexed pages.
        return notFound();
    }

    return (
        <main className="min-h-screen bg-background text-foreground">
            <Header />

            {/* Hero Section */}
            <div className="relative h-[60vh] flex items-center justify-center">
                <div className="absolute inset-0">
                    {/* Fallback pattern or generic city image if no specific area image available */}
                    <div className="w-full h-full bg-luxury-black/90 relative">
                        {/* Abstract Pattern */}
                        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "url('/pattern.svg')" }}></div>
                    </div>
                </div>
                <div className="relative z-10 container mx-auto px-6 text-center">
                    <span className="text-gold-400 uppercase tracking-widest text-xs font-bold mb-4 block">Vadodara Real Estate</span>
                    <h1 className="text-4xl md:text-6xl font-serif text-white mb-6">
                        Properties in <span className="text-gold-400">{formattedArea}</span>
                    </h1>
                    <p className="text-gray-300 max-w-2xl mx-auto text-lg leading-relaxed">
                        Discover exclusive homes and commercial spaces in one of Vadodara&apos;s most sought-after neighborhoods.
                    </p>
                </div>
            </div>

            {/* Projects Grid */}
            <section className="py-20 container mx-auto px-6 md:px-12">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                    <div>
                        <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">Available Projects</h2>
                        <div className="w-24 h-1 bg-gold-400/30 rounded-full" />
                    </div>
                    <div className="text-muted-foreground mt-4 md:mt-0">
                        Showing {areaProjects.length} Premium Properties
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {areaProjects.map((project) => (
                        <Link href={project.link || "#"} key={project.id} className="group block bg-card border border-border rounded-xl overflow-hidden hover:shadow-2xl hover:shadow-gold-400/10 transition-all duration-500">
                            <div className="relative h-64 overflow-hidden">
                                <Image
                                    src={project.heroImage}
                                    alt={project.title}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />
                                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 text-xs font-bold uppercase tracking-widest rounded-full text-luxury-black">
                                    {project.status}
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="font-serif text-xl space-x-2 text-foreground mb-2 group-hover:text-gold-400 transition-colors">{project.title}</h3>
                                <div className="flex items-center gap-2 text-muted-foreground text-sm mb-4">
                                    <MapPin size={14} className="text-gold-400" />
                                    {project.location}
                                </div>
                                <div className="flex justify-between items-center pt-4 border-t border-border">
                                    <div className="text-xs uppercase tracking-wider text-muted-foreground">
                                        Starting From <br />
                                        <span className="text-foreground font-bold text-sm">{project.price}</span>
                                    </div>
                                    <div className="w-8 h-8 rounded-full border border-border flex items-center justify-center group-hover:bg-gold-400 group-hover:text-white group-hover:border-gold-400 transition-all">
                                        <ArrowRight size={14} className="-rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>

            {/* SEO Text Content */}
            <section className="py-20 bg-secondary/30 border-t border-border">
                <div className="container mx-auto px-6 md:px-12 max-w-4xl">
                    <h2 className="font-serif text-2xl md:text-3xl mb-6">Why Invest in {formattedArea}?</h2>
                    <div className="prose prose-stone dark:prose-invert max-w-none text-muted-foreground leading-relaxed">
                        <p>
                            {formattedArea} has emerged as a prime real estate destination in Vadodara, offering a perfect blend of modern infrastructure and peaceful living. Known for its strategic connectivity and proximity to key landmarks, it is the preferred choice for homebuyers and investors alike.
                        </p>
                        <p className="mt-4">
                            Vihav Group brings you a curated selection of residential and commercial projects in {formattedArea}, designed to elevate your lifestyle and business potential. Whether you are looking for luxurious 3BHK/4BHK flats, premium penthouses, or high-visibility commercial showrooms, our developments in {formattedArea} promise unmatched quality and value.
                        </p>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
