"use client";

import Footer from "@/components/layout/Footer";
import { Sparkles } from "lucide-react";

export default function ElementsPage() {
    return (
        <div className="min-h-screen bg-background pt-32 pb-20 px-6 md:px-12 max-w-[1400px] mx-auto font-sans">

            <header className="mb-20">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-600 text-[10px] font-bold uppercase tracking-widest mb-6">
                    <Sparkles size={12} /> SEO Staging Area
                </div>
                <h1 className="text-4xl md:text-6xl font-serif text-foreground mb-6">
                    SEO Data & Strategy
                </h1>
                <p className="text-xl text-muted-foreground max-w-3xl">
                    This page serves as a repository for scraped SEO data from the legacy site (vihav.com) and a strategic guide for implementing organic SEO for Vadodara real estate.
                </p>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                {/* 1. Scraped Data */}
                <section>
                    <h2 className="text-2xl font-serif mb-8 flex items-center gap-3">
                        <span className="w-8 h-[1px] bg-gold-400"></span> Scraped Metadata (Existing)
                    </h2>

                    <div className="bg-card border border-border rounded-xl overflow-hidden">
                        <div className="p-6 border-b border-border bg-secondary/30">
                            <h3 className="font-bold text-lg">Home Page (vihav.com)</h3>
                        </div>
                        <div className="p-6 space-y-6">
                            <div>
                                <label className="block text-xs font-bold text-muted-foreground uppercase tracking-widest mb-2">Page Title</label>
                                <div className="p-3 bg-secondary/50 rounded-lg text-sm font-medium">
                                    Vihav Group - New Residential & Commercial Projects in Vadodara
                                </div>
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-muted-foreground uppercase tracking-widest mb-2">Meta Description (OG)</label>
                                <div className="p-3 bg-secondary/50 rounded-lg text-sm text-muted-foreground leading-relaxed">
                                    Experience luxury and innovation with Vihav Group's new residential and commercial projects in Vadodara. Visit us today for inquiry.
                                </div>
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-muted-foreground uppercase tracking-widest mb-2">Identified Keywords</label>
                                <div className="flex flex-wrap gap-2">
                                    {[
                                        "New Residential Projects",
                                        "Commercial Projects",
                                        "Vadodara",
                                        "Luxury Real Estate",
                                        "Vihav Group",
                                        "Real Estate Builders",
                                        "Excellence in Lifestyle",
                                        "New Alkapuri",
                                        "Gotri",
                                        "Bhayli",
                                        "Sevasi"
                                    ].map((k, i) => (
                                        <span key={i} className="px-2 py-1 bg-white border border-border rounded-md text-xs text-muted-foreground">
                                            {k}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 2. Strategy Guide */}
                <section>
                    <h2 className="text-2xl font-serif mb-8 flex items-center gap-3">
                        <span className="w-8 h-[1px] bg-gold-400"></span> Organic SEO Strategy
                    </h2>

                    <div className="space-y-8">
                        <article className="prose prose-stone dark:prose-invert">
                            <h3 className="text-xl font-bold mb-4">How to Target "Vadodara Real Estate" Keywords</h3>

                            <div className="space-y-6">
                                <div className="p-6 border border-border rounded-xl hover:border-gold-400/50 transition-colors">
                                    <h4 className="font-serif text-lg mb-2 text-primary">1. Localized Meta Titles & Descriptions</h4>
                                    <p className="text-sm text-muted-foreground mb-3">
                                        Don't just use "Project Name". Use <strong>"Project Name - Luxury 4BHK Flats in Bhayli, Vadodara"</strong>.
                                    </p>
                                    <p className="text-sm text-muted-foreground">
                                        Ensure every page title includes <strong>"Vadodara"</strong> and the specific layout type (e.g., "Commercial Office Space", "3BHK Penthouse").
                                    </p>
                                </div>

                                <div className="p-6 border border-border rounded-xl hover:border-gold-400/50 transition-colors">
                                    <h4 className="font-serif text-lg mb-2 text-primary">2. Structured Data (Schema Markup)</h4>
                                    <p className="text-sm text-muted-foreground mb-3">
                                        Implement <code>RealEstateListing</code> and <code>Residence</code> structured data JSON-LD on every project page.
                                    </p>
                                    <p className="text-sm text-muted-foreground">
                                        This explicitly tells Google: <em>"This is a building located at [Coords] in Vadodara with price range [X]."</em>
                                    </p>
                                </div>

                                <div className="p-6 border border-border rounded-xl hover:border-gold-400/50 transition-colors">
                                    <h4 className="font-serif text-lg mb-2 text-primary">3. Hyper-Local Content Sections</h4>
                                    <p className="text-sm text-muted-foreground mb-3">
                                        Add a "Location Advantage" section to every project page that mentions nearby landmarks in Vadodara (e.g., "Near Navrachana University", "5 min from Alkapuri").
                                    </p>
                                    <p className="text-sm text-muted-foreground">
                                        Google ranks pages higher for local queries when they contain known local entities.
                                    </p>
                                </div>

                                <div className="p-6 border border-border rounded-xl hover:border-gold-400/50 transition-colors">
                                    <h4 className="font-serif text-lg mb-2 text-primary">4. Dedicated "Neighborhood" Pages</h4>
                                    <p className="text-sm text-muted-foreground">
                                        Create landing pages for <strong>"Flats in Gotri"</strong> or <strong>"Commercial Property in Alkapuri"</strong>. These specific pages compete much easier than a generic home page.
                                    </p>
                                </div>
                            </div>
                        </article>
                    </div>
                </section>
            </div>

            <Footer />
        </div>
    );
}
