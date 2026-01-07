"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import Footer from "@/components/layout/Footer";
import { Sparkles, MapPin, Phone, ArrowRight, Check, Shield, Star } from "lucide-react";

const ColorSwatch = ({ name, colorClass, hex }) => (
    <div className="flex flex-col gap-2">
        <div className={`h-24 w-full rounded-xl shadow-lg ${colorClass} flex items-center justify-center border border-white/10`}>
            {hex && <span className="text-xs font-mono bg-black/20 text-white px-2 py-1 rounded backdrop-blur-sm">{hex}</span>}
        </div>
        <div className="text-left">
            <p className="font-medium text-sm text-foreground">{name}</p>
            <p className="text-xs text-muted-foreground">{colorClass.replace('bg-', '')}</p>
        </div>
    </div>
);

const TypographySample = ({ role, font, sample, size }) => (
    <div className="mb-8 border-b border-border pb-8 last:border-0">
        <div className="flex flex-col md:flex-row gap-4 md:items-baseline mb-4">
            <span className="text-xs font-mono text-muted-foreground w-32 uppercase tracking-wide">{role}</span>
            <span className="text-xs font-mono bg-secondary px-2 py-1 rounded text-secondary-foreground">{font}</span>
            <span className="text-xs font-mono text-muted-foreground">{size}</span>
        </div>
        <p className={`${sample} text-foreground/90`}>
            The quick brown fox jumps over the lazy dog.
            <br />
            <span className="text-muted-foreground">0123456789 (!@#$%^&*)</span>
        </p>
    </div>
);

export default function CaseStudyPage() {
    return (
        <div className="min-h-screen bg-background pt-24 pb-20 px-6 md:px-12 max-w-[1400px] mx-auto">

            {/* Hero */}
            <div className="mb-20 space-y-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-400/10 border border-gold-400/20 text-gold-400 text-xs font-medium uppercase tracking-wider"
                >
                    <Sparkles size={12} /> Design System
                </motion.div>
                <h1 className="text-5xl md:text-7xl font-serif text-foreground font-medium">
                    Vihav Group <br /> <span className="text-muted-foreground">Case Study</span>
                </h1>
                <p className="text-lg text-muted-foreground max-w-2xl">
                    A comprehensive overview of the design tokens, assets, and components that craft the premium digital experience for Vihav Group.
                </p>
            </div>

            {/* 1. Colors */}
            <section className="mb-24">
                <h2 className="text-2xl font-serif mb-8 flex items-center gap-3">
                    <span className="w-8 h-[1px] bg-gold-400"></span> Color Palette
                </h2>

                {/* Gold Scale */}
                <div className="mb-12">
                    <h3 className="text-sm font-mono text-muted-foreground mb-6 uppercase tracking-wider">The Gold Spectrum</h3>
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

                {/* Theme Colors */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div>
                        <h3 className="text-sm font-mono text-muted-foreground mb-6 uppercase tracking-wider">Neutrals & Surface</h3>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                            <ColorSwatch name="Background" colorClass="bg-background" />
                            <ColorSwatch name="Foreground" colorClass="bg-foreground" />
                            <ColorSwatch name="Muted" colorClass="bg-muted" />
                            <ColorSwatch name="Card" colorClass="bg-card" />
                            <ColorSwatch name="Border" colorClass="bg-border" />
                        </div>
                    </div>
                    <div>
                        <h3 className="text-sm font-mono text-muted-foreground mb-6 uppercase tracking-wider">Semantic</h3>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                            <ColorSwatch name="Primary" colorClass="bg-primary" />
                            <ColorSwatch name="Secondary" colorClass="bg-secondary" />
                            <ColorSwatch name="Destructive" colorClass="bg-destructive" />
                            <ColorSwatch name="Accent" colorClass="bg-accent" />
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. Typography */}
            <section className="mb-24">
                <h2 className="text-2xl font-serif mb-8 flex items-center gap-3">
                    <span className="w-8 h-[1px] bg-gold-400"></span> Typography
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    <div>
                        <h3 className="text-sm font-mono text-muted-foreground mb-8 uppercase tracking-wider">Playfair Display (Serif)</h3>
                        <TypographySample role="Display XL" font="Playfair Display" sample="text-7xl font-serif" size="72px" />
                        <TypographySample role="Display L" font="Playfair Display" sample="text-5xl font-serif" size="48px" />
                        <TypographySample role="Heading M" font="Playfair Display" sample="text-3xl font-serif" size="30px" />
                        <TypographySample role="Heading S" font="Playfair Display" sample="text-2xl font-serif" size="24px" />
                    </div>

                    <div>
                        <h3 className="text-sm font-mono text-muted-foreground mb-8 uppercase tracking-wider">Lato (Sans-Serif)</h3>
                        <TypographySample role="Body L" font="Lato" sample="text-lg font-sans" size="18px" />
                        <TypographySample role="Body M" font="Lato" sample="text-base font-sans" size="16px" />
                        <TypographySample role="Body S" font="Lato" sample="text-sm font-sans" size="14px" />
                        <TypographySample role="Caption" font="Lato" sample="text-xs font-sans text-muted-foreground" size="12px" />

                        <div className="mt-8 p-6 bg-secondary rounded-xl border border-white/5">
                            <h4 className="font-serif text-xl mb-2">Paragraph Example</h4>
                            <p className="text-muted-foreground leading-relaxed">
                                Experience the pinnacle of luxury living with Vihav Group. Our tailored residences offer a seamless blend of modern architecture and timeless elegance, curated for those who seek the extraordinary.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Components */}
            <section className="mb-24">
                <h2 className="text-2xl font-serif mb-8 flex items-center gap-3">
                    <span className="w-8 h-[1px] bg-gold-400"></span> Components & UI
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {/* Buttons */}
                    <div className="p-6 border border-border rounded-xl bg-card">
                        <h3 className="text-sm font-mono text-muted-foreground mb-6 uppercase tracking-wider">Buttons</h3>
                        <div className="flex flex-col gap-4 items-start">
                            <Button>Primary Action</Button>
                            <Button variant="outline">Secondary Action</Button>
                            <Button variant="ghost">Ghost Button</Button>
                            <Button size="icon"><Sparkles size={18} /></Button>
                        </div>
                    </div>

                    {/* Form Elements */}
                    <div className="p-6 border border-border rounded-xl bg-card">
                        <h3 className="text-sm font-mono text-muted-foreground mb-6 uppercase tracking-wider">Inputs</h3>
                        <div className="space-y-4">
                            <input
                                type="text"
                                placeholder="Standard Input"
                                className="w-full bg-background border border-border rounded-md px-4 py-2 text-sm focus:border-gold-400 outline-none transition-colors"
                            />
                            <input
                                type="text"
                                disabled
                                placeholder="Disabled State"
                                className="w-full bg-muted border border-border rounded-md px-4 py-2 text-sm text-muted-foreground cursor-not-allowed"
                            />
                            <div className="flex items-center gap-2">
                                <input type="checkbox" className="w-4 h-4 rounded border-gold-400 accent-gold-400" defaultChecked />
                                <label className="text-sm">Checkbox Active</label>
                            </div>
                        </div>
                    </div>

                    {/* Cards */}
                    <div className="p-6 border border-border rounded-xl bg-card">
                        <h3 className="text-sm font-mono text-muted-foreground mb-6 uppercase tracking-wider">Card Style</h3>
                        <div className="group relative overflow-hidden rounded-lg bg-secondary aspect-video flex items-center justify-center border border-white/5">
                            <span className="text-muted-foreground text-sm">Image / Content Area</span>
                            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                                <p className="text-white font-serif">Project Title</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Assets & Icons */}
            <section>
                <h2 className="text-2xl font-serif mb-8 flex items-center gap-3">
                    <span className="w-8 h-[1px] bg-gold-400"></span> Iconography
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 Gap-4">
                    {[Sparkles, MapPin, Phone, ArrowRight, Check, Shield, Star].map((Icon, i) => (
                        <div key={i} className="flex flex-col items-center justify-center gap-3 p-6 border border-border rounded-xl bg-card hover:border-gold-400/50 transition-colors group">
                            <Icon size={24} className="text-muted-foreground group-hover:text-gold-400 transition-colors" />
                            <span className="text-xs font-mono text-muted-foreground">{Icon.displayName || Icon.name}</span>
                        </div>
                    ))}
                </div>
            </section>

        </div>
    );
}
