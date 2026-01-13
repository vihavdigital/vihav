"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Play, MapPin, ArrowDown, ChevronLeft, ChevronRight, Pause } from "lucide-react";
import { Button } from "@/components/ui/Button";

// --- HELPERS ---
const SectionHeader = ({ title }) => (
    <div className="mb-8 px-6 container mx-auto pt-24 text-center md:text-left">
        <h3 className="text-xl md:text-2xl font-serif border-b border-neutral-200 pb-4 mb-8 text-luxury-black inline-block md:block">{title}</h3>
    </div>
);

// Helper for switching images/videos with error handling
const ResponsiveMedia = ({ desktopSrc, mobileSrc, alt, isVideo = false, className = "" }) => {
    return (
        <div className={`absolute inset-0 w-full h-full ${className} bg-neutral-100`}>
            {/* Desktop Media */}
            <div className="hidden md:block w-full h-full relative">
                {isVideo ? (
                    <video src={desktopSrc} autoPlay loop muted playsInline className="w-full h-full object-cover" />
                ) : (
                    <Image
                        src={desktopSrc}
                        alt={alt}
                        fill
                        className="object-cover"
                        priority
                        sizes="100vw"
                    />
                )}
            </div>
            {/* Mobile Media */}
            <div className="block md:hidden w-full h-full relative">
                {isVideo ? (
                    <video src={mobileSrc || desktopSrc} autoPlay loop muted playsInline className="w-full h-full object-cover" />
                ) : (
                    <Image
                        src={mobileSrc || desktopSrc}
                        alt={alt}
                        fill
                        className="object-cover"
                        priority
                        sizes="100vw"
                    />
                )}
            </div>
        </div>
    );
};


// --- 1. SPLIT BANNER HERO (REFINED) ---
const SplitHero = () => {
    return (
        <section className="relative min-h-[90vh] flex flex-col lg:flex-row bg-luxury-black overflow-hidden">
            {/* Content Left (Desktop) / Bottom (Mobile) */}
            <div className="w-full lg:w-[45%] flex flex-col justify-center px-6 md:px-16 py-16 md:py-20 z-10 bg-luxury-black order-2 lg:order-1 relative">
                <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
                    <div className="w-16 h-[2px] bg-gold-400 mb-6 md:mb-8" />
                    <span className="text-gold-400 uppercase tracking-[0.25em] text-xs font-bold mb-4 block">Commercial</span>
                    <h2 className="text-4xl md:text-5xl lg:text-7xl font-serif text-white mb-6 leading-[1.1] md:leading-[0.9]">Keystone <br /> BizHub</h2>
                    <p className="text-neutral-400 text-base md:text-lg mb-8 md:mb-10 leading-relaxed font-light max-w-md">Redefining the corporate landscape with intelligent design and premium amenities.</p>
                    <Button className="bg-transparent border border-white/20 text-white hover:bg-gold-400 hover:text-black hover:border-gold-400 uppercase tracking-widest px-8 py-4 md:py-6 w-full md:w-fit text-xs md:text-sm transition-all duration-300">View Features</Button>
                </motion.div>
            </div>
            {/* Image Right (Desktop) / Top (Mobile) */}
            {/* Ensuring mobile image has sufficient height */}
            <div className="w-full lg:w-[55%] relative h-[50vh] lg:h-auto overflow-hidden order-1 lg:order-2">
                <ResponsiveMedia
                    desktopSrc="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000"
                    mobileSrc="https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&w=1000&auto=format&fit=crop"
                    alt="Commercial Building"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-luxury-black via-transparent to-transparent lg:hidden opacity-80" />
            </div>
        </section>
    );
};


// --- 2. GLASS CARD OVERLAY (REFINED) ---
const GlassCardHero = () => {
    return (
        <section className="relative h-[95vh] md:h-screen w-full">
            <ResponsiveMedia
                desktopSrc="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2000"
                mobileSrc="https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1000&auto=format&fit=crop"
                alt="Interior"
            />
            {/* Gradient Overlay for Mobile Text Readability */}
            <div className="absolute inset-0 bg-black/30 md:bg-black/20" />

            <div className="relative h-full container mx-auto px-6">
                <div className="absolute bottom-8 md:bottom-24 left-4 right-4 md:left-auto md:right-24 md:w-auto max-w-lg">
                    <div className="bg-white/95 backdrop-blur-xl border border-white/40 p-6 md:p-12 shadow-2xl rounded-sm">
                        <span className="text-luxury-black/60 uppercase tracking-widest text-[10px] md:text-xs font-bold mb-3 md:mb-4 block">New Launch</span>
                        <h2 className="text-3xl md:text-5xl font-serif text-luxury-black mb-4 md:mb-6 leading-tight">Aurora Heights</h2>
                        <p className="text-luxury-black/80 mb-6 md:mb-8 font-light text-sm md:text-base leading-relaxed">Experience the dawn of a new era.</p>
                        <Button className="w-full bg-luxury-black text-white hover:bg-gold-500 hover:text-black border-none uppercase tracking-widest py-4 md:py-6 text-xs md:text-sm transition-all duration-300">
                            Register Interest
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};


// --- 3. INFO-BAR HERO (REFINED) ---
const InfoBarHero = () => {
    return (
        <section className="relative h-screen w-full">
            <ResponsiveMedia
                desktopSrc="https://images.unsplash.com/photo-1600607687644-c7171b42498f?q=80&w=2000"
                mobileSrc="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1000&auto=format&fit=crop"
                alt="Pinnacle"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent md:bg-gradient-to-r md:from-black/80 md:via-transparent md:to-transparent" />

            <div className="absolute inset-0 flex flex-col justify-end md:justify-center px-6 md:px-24 pb-48 md:pb-0">
                <div className="max-w-xl">
                    <span className="text-gold-400 uppercase tracking-widest text-xs font-bold mb-2 block">Exclusive</span>
                    <h1 className="text-5xl md:text-8xl font-serif text-white mb-4 leading-none">The <br /> Pinnacle</h1>
                    <p className="text-white/80 text-lg md:text-xl max-w-sm mb-0">Where aspirations meet reality. 5BHK Limited Edition.</p>
                </div>
            </div>

            {/* Floating Info Bar */}
            <div className="absolute bottom-0 left-0 right-0 bg-white text-luxury-black py-8 md:py-12 px-6 shadow-[0_-10px_40px_rgba(0,0,0,0.1)]">
                <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="grid grid-cols-3 gap-4 w-full md:w-auto text-center md:text-left divide-x divide-neutral-200 md:divide-none">
                        <div className="px-2 md:px-0">
                            <span className="block text-[10px] md:text-xs uppercase tracking-widest text-neutral-500 mb-1">Price</span>
                            <span className="text-lg md:text-2xl font-serif block">₹3.5 Cr+</span>
                        </div>
                        <div className="px-2 md:px-0 md:mr-12">
                            <span className="block text-[10px] md:text-xs uppercase tracking-widest text-neutral-500 mb-1">Status</span>
                            <span className="text-lg md:text-2xl font-serif block">Ready</span>
                        </div>
                        <div className="px-2 md:px-0 md:mr-12">
                            <span className="block text-[10px] md:text-xs uppercase tracking-widest text-neutral-500 mb-1">Config</span>
                            <span className="text-lg md:text-2xl font-serif block">5 BHK</span>
                        </div>
                    </div>
                    <Button className="w-full md:w-auto bg-luxury-black text-white px-12 py-4 md:py-6 uppercase tracking-widest text-xs hover:bg-gold-500 hover:text-black transition-all duration-300">
                        Book Viewing
                    </Button>
                </div>
            </div>
        </section>
    );
};


// --- 4. PARALLAX FRAME HERO (FIXED) ---
const ParallaxFrameHero = () => {
    return (
        <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
            <div className="absolute inset-0 w-full h-full -z-10">
                {/* Uses absolute to prevent fixed positioning bug, but keeps full cover */}
                <ResponsiveMedia
                    desktopSrc="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2000"
                    mobileSrc="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1000&auto=format&fit=crop"
                    alt="Parallax BG"
                />
                <div className="absolute inset-0 bg-black/30" />
            </div>

            <div className="relative z-10 container mx-auto px-6 text-center">
                <div className="inline-block border-y border-white/30 py-10 md:py-16 px-6 md:px-20 bg-black/20 backdrop-blur-md">
                    <span className="block text-gold-400 uppercase tracking-[0.4em] text-[10px] md:text-xs font-bold mb-6">The Signature Collection</span>
                    <h1 className="text-5xl md:text-8xl font-serif text-white mb-6">Serenity</h1>
                    <p className="text-white/90 max-w-lg mx-auto text-base md:text-lg font-light leading-relaxed">A home that speaks the language of silence and luxury.</p>
                </div>
            </div>
        </section>
    );
};


// --- 5. VIDEO COVER (REFINED) ---
const VideoCoverHero = () => {
    return (
        <section className="relative h-screen w-full bg-black">
            <ResponsiveMedia
                isVideo={true}
                desktopSrc="/videos/desktop-hero-placeholder.mp4"
                mobileSrc="/videos/mobile-hero-placeholder.mp4"
                className="brightness-[0.6]"
            />
            {/* Fallback Image */}
            <div className="absolute inset-0 -z-10">
                <ResponsiveMedia
                    desktopSrc="https://images.unsplash.com/photo-1600596542815-3ad19fb8dd99?q=80&w=2000"
                    mobileSrc="https://images.unsplash.com/photo-1600596542815-3ad19fb8dd99?q=80&w=1000&auto=format&fit=crop"
                    alt="Video Fallback"
                />
                <div className="absolute inset-0 bg-black/50" />
            </div>

            <div className="absolute bottom-20 md:bottom-16 left-6 md:left-12 z-20">
                <div className="flex flex-col md:flex-row md:items-end gap-6">
                    <h1 className="text-6xl md:text-9xl font-serif text-white leading-none tracking-tighter">
                        Move <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-300 to-white">Beyond.</span>
                    </h1>
                    <div className="pb-2 md:pb-4">
                        <p className="text-white/80 max-w-xs text-sm border-l-2 border-gold-400 pl-4 py-1 leading-relaxed">
                            Experience the future of living with our smart-home integrated villas.
                        </p>
                    </div>
                </div>
            </div>

            {/* Play Button */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 group cursor-pointer">
                <div className="w-16 h-16 md:w-24 md:h-24 rounded-full border border-white/30 flex items-center justify-center backdrop-blur-sm group-hover:scale-110 group-hover:bg-white/10 transition-all duration-500">
                    <Play className="text-white fill-white ml-1" size={24} />
                </div>
                <span className="block text-center text-white text-[10px] uppercase tracking-widest mt-4 opacity-0 group-hover:opacity-100 transition-opacity">Play Film</span>
            </div>
        </section>
    );
};


// --- 6. ASYMMETRIC GRID (REFINED) ---
const AsymmetricGridHero = () => {
    return (
        <section className="min-h-screen bg-white py-12 md:py-24 px-4 md:px-6">
            <div className="container mx-auto">
                <div className="flex flex-col md:grid md:grid-cols-12 gap-4 md:gap-8 h-auto md:h-[80vh]">
                    {/* Large Main Image */}
                    <div className="md:col-span-8 relative h-[50vh] md:h-full rounded-2xl overflow-hidden group">
                        <ResponsiveMedia
                            desktopSrc="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000"
                            mobileSrc="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop"
                            alt="Main Estate"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90 md:opacity-70" />
                        <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 text-white z-10">
                            <h2 className="text-3xl md:text-5xl font-serif mb-2">The Estate</h2>
                            <p className="text-sm md:text-base opacity-90 font-light">Starting @ 5 Cr • <span className="text-gold-400">Possession Soon</span></p>
                        </div>
                    </div>

                    {/* Side Column - Two stacked cards */}
                    <div className="md:col-span-4 flex flex-col gap-4 md:gap-8 min-h-[40vh] md:min-h-0">
                        {/* Featured Card */}
                        <div className="relative flex-1 rounded-2xl overflow-hidden bg-luxury-black text-white p-8 flex flex-col justify-center min-h-[200px]">
                            <span className="text-gold-400 text-[10px] uppercase tracking-widest mb-4 font-bold border border-gold-400/30 px-2 py-1 inline-block w-fit rounded">Featured</span>
                            <h3 className="text-2xl md:text-3xl font-serif mb-3">Penthouse <br />Collection</h3>
                            <p className="text-neutral-400 text-xs md:text-sm mb-6 leading-relaxed">Top floor exclusivities with private infinity pools and concierge.</p>
                            <div className="flex items-center gap-2 text-gold-400 text-xs font-bold md:cursor-pointer hover:underline tracking-widest">
                                VIEW PLANS <ArrowRight size={14} />
                            </div>
                        </div>
                        {/* Secondary Image Card */}
                        <div className="relative flex-1 rounded-2xl overflow-hidden group min-h-[200px]">
                            <ResponsiveMedia
                                desktopSrc="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1000"
                                mobileSrc="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1000&auto=format&fit=crop"
                                alt="Secondary View"
                            />
                            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
                            <div className="absolute bottom-4 right-4 md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 w-10 h-10 md:w-14 md:h-14 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center">
                                <ArrowRight className="text-white -rotate-45" size={20} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};


// --- 7. CLASSIC FADE SLIDER (REFINED) ---
const ClassicFadeSliderHero = () => {
    const slides = [
        { img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2000", mob: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1000&auto=format&fit=crop", title: "Elegant Living" },
        { img: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2000", mob: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1000&auto=format&fit=crop", title: "Natural Harmony" },
        { img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2000", mob: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1000&auto=format&fit=crop", title: "Urban Oasis" },
    ];
    const [current, setCurrent] = useState(0);
    const [paused, setPaused] = useState(false);

    useEffect(() => {
        if (paused) return;
        const timer = setInterval(() => setCurrent(c => (c + 1) % slides.length), 5000);
        return () => clearInterval(timer);
    }, [slides.length, paused]);

    return (
        <section className="relative h-screen w-full bg-black overflow-hidden">
            <AnimatePresence mode="popLayout">
                <motion.div
                    key={current}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.5 }}
                    className="absolute inset-0"
                >
                    <ResponsiveMedia desktopSrc={slides[current].img} mobileSrc={slides[current].mob} alt={slides[current].title} />
                    <div className="absolute inset-0 bg-black/30" />
                </motion.div>
            </AnimatePresence>

            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6">
                <motion.h1
                    key={current + "txt"}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-5xl md:text-8xl font-serif mb-8 drop-shadow-lg"
                >
                    {slides[current].title}
                </motion.h1>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <Button className="bg-white/90 backdrop-blur text-black px-10 py-4 uppercase tracking-[0.2em] text-xs hover:bg-gold-400 hover:text-black transition-all border-none">
                        View Project
                    </Button>
                </motion.div>
            </div>

            {/* Controls */}
            <div className="absolute bottom-12 left-0 right-0 flex justify-center items-center gap-6 z-20">
                <button onClick={() => setPaused(!paused)} className="text-white/70 hover:text-white transition-colors">
                    {paused ? <Play size={18} /> : <Pause size={18} />}
                </button>
                <div className="flex gap-3">
                    {slides.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setCurrent(i)}
                            className={`h-[2px] transition-all duration-300 ${current === i ? 'w-12 bg-white' : 'w-4 bg-white/40 hover:bg-white/80'}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};


export default function HeroVariations() {
    return (
        <div className="w-full bg-white">
            <SectionHeader title="1. Split Banner (Responsive)" />
            <SplitHero />

            <SectionHeader title="2. Glass Card Overlay (Responsive)" />
            <GlassCardHero />

            <SectionHeader title="3. Info-Bar Hero (Responsive)" />
            <InfoBarHero />

            <SectionHeader title="4. Parallax Frame" />
            <ParallaxFrameHero />

            <SectionHeader title="5. Video Cover (Responsive Media)" />
            <VideoCoverHero />

            <SectionHeader title="6. Asymmetric Grid (New)" />
            <AsymmetricGridHero />

            <SectionHeader title="7. Classic Fade Slider (Refined)" />
            <ClassicFadeSliderHero />
        </div>
    );
}
