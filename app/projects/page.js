"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ProjectsFeed from "@/components/projects/ProjectsFeed";
import { Suspense } from "react";

export default function ProjectsPage() {

    return (
        <main className="min-h-screen bg-background text-foreground selection:bg-gold-500 selection:text-black transition-colors duration-500">
            <Header />

            {/* Header Spacer */}
            <div className="h-24 bg-background" />

            {/* Mobile: Compact Title Section */}
            <section className="pt-10 pb-6 px-6 container mx-auto md:py-20">
                <div className="flex flex-col md:flex-row justify-between items-end">
                    <div className="mb-6 md:mb-0">
                        <span className="text-gold-400 text-xs md:text-sm uppercase tracking-widest block mb-2">Our Portfolio</span>
                        <h1 className="font-serif text-4xl md:text-6xl text-foreground leading-tight">Exclusive <br /> Collections</h1>
                    </div>
                </div>
            </section>

            {/* Suspense Wrapper for Projects Feed (Filters + Grid) */}
            <Suspense fallback={<div className="h-screen flex items-center justify-center text-gold-400">Loading Collections...</div>}>
                <ProjectsFeed />
            </Suspense>

            <Footer />
        </main>
    );
}
