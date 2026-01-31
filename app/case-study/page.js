"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import Footer from "@/components/layout/Footer";
import { Sparkles, MapPin, Phone, ArrowRight, Check, Shield, Star, Play, ChevronRight, ChevronDown } from "lucide-react";
import MagneticWrapper from "@/components/ui/MagneticWrapper";
import TextReveal from "@/components/ui/TextReveal";
import RotatingEnquireButton from "@/components/ui/RotatingEnquireButton";
import CollapsibleSection from "@/components/ui/CollapsibleSection";
import VideoPlayer from "@/components/ui/VideoPlayer";
import Image from "next/image";

// Helper Components
const SectionHeader = ({ title }) => (
    <div className="flex items-center gap-4 mb-8">
        <span className="w-12 h-[1px] bg-gold-400"></span>
        <h2 className="text-2xl md:text-3xl font-serif text-foreground">{title}</h2>
    </div>
);

const ColorSwatch = ({ name, colorClass, hex }) => (
    <div className="flex flex-col gap-3 group">
        <div className={`h-24 w-full rounded-xl shadow-lg ${colorClass} flex items-center justify-center border border-black/5 dark:border-white/10 transition-transform group-hover:scale-105`}>
            {hex && (
                <span className="opacity-0 group-hover:opacity-100 transition-opacity text-[10px] font-mono bg-black/80 text-white px-2 py-1 rounded backdrop-blur-sm">
                    {hex}
                </span>
            )}
        </div>
        <div className="text-left px-1">
            <p className="font-bold text-sm text-foreground">{name}</p>
            <p className="text-xs text-muted-foreground font-mono">{colorClass.replace('bg-', '')}</p>
        </div>
    </div>
);

const TypographySample = ({ role, font, sample, size }) => (
    <div className="mb-8 border-b border-border pb-8 last:border-0">
        <div className="flex flex-col md:flex-row gap-4 md:items-baseline mb-4">
            <span className="text-xs font-bold font-mono text-gold-600 dark:text-gold-400 w-32 uppercase tracking-widest">{role}</span>
            <span className="text-[10px] font-mono bg-secondary px-2 py-1 rounded text-secondary-foreground uppercase">{font}</span>
            <span className="text-xs font-mono text-muted-foreground">{size}</span>
        </div>
        <p className={`${sample} text-foreground leading-tight`}>
            The quick brown fox jumps over the lazy dog.
        </p>
    </div>
);

export default function CaseStudyPage() {
    const [activeTab, setActiveTab] = useState("overview");

    return (
        <div className="min-h-screen bg-background text-foreground transition-colors duration-500 selection:bg-gold-400 selection:text-white">

            {/* Sticky Sub-Header for Navigation */}
            <div className="sticky top-0 z-40 bg-background/80 backdrop-blur-md border-b border-border py-4">
                <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
                    <span className="font-serif font-bold text-lg hidden md:block">Vihav Design System</span>
                    <nav className="flex gap-2 overflow-x-auto scrollbar-hide">
                        {['overview', 'colors', 'typography', 'components', 'media'].map((tab) => (
                            <button
                                key={tab}
                                onClick={() => {
                                    setActiveTab(tab);
                                    document.getElementById(tab)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                }}
                                className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all whitespace-nowrap ${activeTab === tab
                                        ? "bg-foreground text-background"
                                        : "text-muted-foreground hover:text-foreground"
                                    }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </nav>
                </div>
            </div>

            <div className="container mx-auto px-6 md:px-12 py-20 max-w-[1400px]">

                {/* Hero / Overview */}
                <section id="overview" className="mb-32 scroll-mt-32">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-400/10 border border-gold-400/20 text-gold-600 dark:text-gold-400 text-[10px] font-bold uppercase tracking-widest">
                            <Sparkles size={12} /> Version 1.0.0
                        </div>
                        <h1 className="text-6xl md:text-8xl font-serif text-foreground font-medium leading-none">
                            Digital <br /> <span className="text-muted-foreground italic">Experience</span>
                        </h1>
                        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl font-light leading-relaxed">
                            A comprehensive guide to the design tokens, components, and interactions that define the Vihav Group luxury digital presence.
                        </p>
                    </motion.div>
                </section>

                {/* 1. Colors */}
                <section id="colors" className="mb-32 scroll-mt-32">
                    <SectionHeader title="Color Palette" />

                    <div className="space-y-16">
                        {/* Gold Scale */}
                        <div>
                            <h3 className="text-xs font-bold font-mono text-muted-foreground mb-8 uppercase tracking-widest border-b border-border pb-2">Primary Brand Colors (Gold)</h3>
                            <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-10 gap-4">
                                <ColorSwatch name="Gold 50" colorClass="bg-gold-50" hex="#fbf8eb" />
                                <ColorSwatch name="Gold 100" colorClass="bg-gold-100" hex="#f5efcd" />
                                <ColorSwatch name="Gold 200" colorClass="bg-gold-200" hex="#ebdca0" />
                                <ColorSwatch name="Gold 300" colorClass="bg-gold-300" hex="#dfc26c" />
                                <ColorSwatch name="Gold 400" colorClass="bg-gold-400" hex="#d4af37" />
                                <ColorSwatch name="Gold 500" colorClass="bg-gold-500" hex="#b89228" />
                                <ColorSwatch name="Gold 600" colorClass="bg-gold-600" hex="#9b761e" />
                                <ColorSwatch name="Gold 700" colorClass="bg-gold-700" hex="#7d5b1b" />
                                <ColorSwatch name="Gold 800" colorClass="bg-gold-800" hex="#684a1d" />
                                <ColorSwatch name="Gold 900" colorClass="bg-gold-900" hex="#563d1e" />
                            </div>
                        </div>

                        {/* Semantic Colors */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                            <div>
                                <h3 className="text-xs font-bold font-mono text-muted-foreground mb-8 uppercase tracking-widest border-b border-border pb-2">Surface & Neutrals</h3>
                                <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                                    <ColorSwatch name="Background" colorClass="bg-background" />
                                    <ColorSwatch name="Foreground" colorClass="bg-foreground" />
                                    <ColorSwatch name="Muted" colorClass="bg-muted" />
                                    <ColorSwatch name="Card" colorClass="bg-card" />
                                    <ColorSwatch name="Border" colorClass="bg-border" />
                                </div>
                            </div>
                            <div>
                                <h3 className="text-xs font-bold font-mono text-muted-foreground mb-8 uppercase tracking-widest border-b border-border pb-2">Semantic & Action</h3>
                                <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                                    <ColorSwatch name="Primary" colorClass="bg-primary" />
                                    <ColorSwatch name="Secondary" colorClass="bg-secondary" />
                                    <ColorSwatch name="Destructive" colorClass="bg-destructive" />
                                    <ColorSwatch name="Accent" colorClass="bg-accent" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 2. Typography */}
                <section id="typography" className="mb-32 scroll-mt-32">
                    <SectionHeader title="Typography" />

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24">
                        <div>
                            <div className="mb-8">
                                <h3 className="text-4xl font-serif text-foreground mb-2">Playfair Display</h3>
                                <p className="text-sm font-mono text-muted-foreground">Primary Heading Font</p>
                            </div>
                            <TypographySample role="Display XL" font="Playfair Display" sample="text-6xl md:text-8xl font-serif" size="96px" />
                            <TypographySample role="Display L" font="Playfair Display" sample="text-5xl md:text-6xl font-serif" size="60px" />
                            <TypographySample role="Heading M" font="Playfair Display" sample="text-3xl md:text-4xl font-serif" size="36px" />
                            <TypographySample role="Heading S" font="Playfair Display" sample="text-2xl font-serif" size="24px" />
                        </div>

                        <div>
                            <div className="mb-8">
                                <h3 className="text-4xl font-sans text-foreground mb-2 font-light">Lato</h3>
                                <p className="text-sm font-mono text-muted-foreground">Primary Body Font</p>
                            </div>
                            <TypographySample role="Body L" font="Lato" sample="text-lg font-sans" size="18px" />
                            <TypographySample role="Body M" font="Lato" sample="text-base font-sans" size="16px" />
                            <TypographySample role="Body S" font="Lato" sample="text-sm font-sans" size="14px" />
                            <TypographySample role="Caption" font="Lato" sample="text-xs font-sans text-muted-foreground tracking-wide uppercase" size="12px" />

                            <div className="mt-12 p-8 bg-secondary/50 rounded-2xl border border-border">
                                <h4 className="font-serif text-2xl mb-4 text-primary">Text Usage Example</h4>
                                <TextReveal className="text-muted-foreground text-lg leading-relaxed">
                                    Experience the pinnacle of luxury living with Vihav Group. Our tailored residences offer a seamless blend of modern architecture and timeless elegance, curated for those who seek the extraordinary.
                                </TextReveal>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 3. Components */}
                <section id="components" className="mb-32 scroll-mt-32">
                    <SectionHeader title="Components & UI" />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                        {/* Button Suite */}
                        <div className="p-8 border border-border rounded-2xl bg-card space-y-8">
                            <h3 className="text-xs font-bold font-mono text-muted-foreground uppercase tracking-widest border-b border-border pb-4">Interactive Buttons</h3>
                            <div className="flex flex-col gap-4 items-start">
                                <MagneticWrapper>
                                    <Button>Primary Magnetic</Button>
                                </MagneticWrapper>
                                <Button variant="outline">Secondary Outline</Button>
                                <Button variant="ghost">Ghost Button</Button>
                                <div className="flex gap-2">
                                    <Button size="icon" className="rounded-full"><Sparkles size={18} /></Button>
                                    <Button size="icon" variant="outline" className="rounded-full"><ArrowRight size={18} /></Button>
                                </div>
                            </div>
                        </div>

                        {/* Interactive CTA */}
                        <div className="p-8 border border-border rounded-2xl bg-card flex flex-col items-center justify-center text-center space-y-8 min-h-[300px]">
                            <h3 className="text-xs font-bold font-mono text-muted-foreground uppercase tracking-widest w-full border-b border-border pb-4 text-left">Complex CTA</h3>

                            <div className="relative">
                                <RotatingEnquireButton />
                            </div>
                            <p className="text-xs text-muted-foreground">Rotating Text + Modal Trigger</p>
                        </div>

                        {/* Form Elements */}
                        <div className="p-8 border border-border rounded-2xl bg-card space-y-8">
                            <h3 className="text-xs font-bold font-mono text-muted-foreground uppercase tracking-widest border-b border-border pb-4">Input Fields</h3>
                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <label className="text-xs uppercase tracking-wider font-bold text-muted-foreground">Standard Input</label>
                                    <input
                                        type="text"
                                        placeholder="Enter your name..."
                                        className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm focus:border-gold-400 focus:ring-1 focus:ring-gold-400 outline-none transition-all placeholder:text-muted-foreground/50"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs uppercase tracking-wider font-bold text-muted-foreground">Select Option</label>
                                    <div className="relative">
                                        <select className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm appearance-none outline-none focus:border-gold-400">
                                            <option>Project Type</option>
                                            <option>Residential</option>
                                            <option>Commercial</option>
                                        </select>
                                        <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none" size={16} />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Collapsible Section */}
                        <div className="col-span-1 md:col-span-2 lg:col-span-3 p-8 border border-border rounded-2xl bg-card">
                            <h3 className="text-xs font-bold font-mono text-muted-foreground uppercase tracking-widest border-b border-border mb-6 pb-4">Accordion / Collapsible</h3>
                            <div className="grid md:grid-cols-2 gap-8">
                                <CollapsibleSection title="Amenities List" defaultOpen={true}>
                                    <div className="p-4 bg-secondary/30 rounded-lg text-sm text-muted-foreground leading-relaxed">
                                        This is an example of the CollapsibleSection component used for amenities lists and specifications. It supports default open states and smooth height animations.
                                    </div>
                                </CollapsibleSection>
                                <CollapsibleSection title="Project Specifications" defaultOpen={false}>
                                    <div className="p-4 bg-secondary/30 rounded-lg text-sm text-muted-foreground leading-relaxed">
                                        Hidden content reveals smoothly when toggled. Great for organizing dense technical information without cluttering the UI.
                                    </div>
                                </CollapsibleSection>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 4. Media & Icons */}
                <section id="media" className="mb-20 scroll-mt-32">
                    <SectionHeader title="Media & Iconography" />

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
                        {/* Video Player Demo */}
                        <div className="space-y-4">
                            <h3 className="text-xs font-bold font-mono text-muted-foreground uppercase tracking-widest">Optimized Video Player</h3>
                            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl border border-border bg-black">
                                <VideoPlayer
                                    src="/videos/niwa.mp4"
                                    poster="/images/project-images/hero-banner/desktop-banner/niwa.webp"
                                />
                                <div className="absolute top-4 left-4 bg-black/60 backdrop-blur px-3 py-1 rounded text-[10px] text-white font-mono uppercase border border-white/10">
                                    Autoplay • Muted • Loop
                                </div>
                            </div>
                        </div>

                        {/* Image Card Demo */}
                        <div className="space-y-4">
                            <h3 className="text-xs font-bold font-mono text-muted-foreground uppercase tracking-widest">Project Card Ratio</h3>
                            <div className="group relative aspect-[4/3] rounded-2xl overflow-hidden border border-border shadow-lg">
                                <Image
                                    src="/images/project-images/project-tiles/keystone-51.jpg"
                                    alt="Project Demo"
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                                <div className="absolute bottom-0 left-0 p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform">
                                    <p className="text-xs font-bold uppercase tracking-widest mb-2 text-gold-400">Residential</p>
                                    <h4 className="text-2xl font-serif">Keystone 51</h4>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Icon Grid */}
                    <div>
                        <h3 className="text-xs font-bold font-mono text-muted-foreground uppercase tracking-widest mb-6">Icon System</h3>
                        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4">
                            {[
                                { Icon: Sparkles, bg: 'bg-gold-400/10', text: 'text-gold-600' },
                                { Icon: MapPin, bg: 'bg-blue-500/10', text: 'text-blue-600' },
                                { Icon: Phone, bg: 'bg-green-500/10', text: 'text-green-600' },
                                { Icon: Shield, bg: 'bg-purple-500/10', text: 'text-purple-600' },
                                { Icon: Star, bg: 'bg-yellow-500/10', text: 'text-yellow-600' },
                                { Icon: Check, bg: 'bg-emerald-500/10', text: 'text-emerald-600' },
                                { Icon: ArrowRight, bg: 'bg-secondary', text: 'text-foreground' },
                                { Icon: Play, bg: 'bg-red-500/10', text: 'text-red-500' },
                            ].map(({ Icon, bg, text }, i) => (
                                <div key={i} className={`flex flex-col items-center justify-center gap-3 aspect-square rounded-xl border border-border ${bg} hover:border-gold-400/50 transition-all cursor-crosshair group`}>
                                    <Icon size={24} className={`${text} group-hover:scale-110 transition-transform`} />
                                    <span className="text-[10px] font-mono text-muted-foreground opacity-60">{Icon.displayName || Icon.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <Footer />
            </div>
        </div>
    );
}
