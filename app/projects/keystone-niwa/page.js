"use client";
import React, { useRef, useState, useEffect } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { ArrowLeft, ArrowRight, MapPin, Phone, Mail, Droplets, Wind, Sun, Leaf, ChevronRight, ChevronLeft, Volume2, VolumeX, MousePointer2, Maximize, Palette } from "lucide-react";
import { motion, useScroll, useTransform, AnimatePresence, useSpring, useMotionValue } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { getProjectBySlug } from "@/data/projects";
import LuxuryMapWrapper from "@/components/projects/LuxuryMapWrapper";

// Fetch Niwa Data
const keystoneNiwa = getProjectBySlug("keystone-niwa");

// Real Content Images from Concept
// Real Content Images from Concept
const HERO_VIDEO = "/niwa-video.mp4"; // Placeholder Luxury Nature Video

const GALLERY_IMAGES = [
    { type: 'image', src: "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2600&auto=format&fit=crop", title: "Garden Balconies", desc: "25% of your home opens to nature" },
    { type: 'image', src: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?q=80&w=2600&auto=format&fit=crop", title: "5000 Sq. Ft. Carpet", desc: "Expansive single-floor residence" },
    { type: 'video', src: "https://cdn.pixabay.com/video/2020/05/25/40103-424930030_large.mp4", title: "Nurtured Ecosystem", desc: "Living in harmony with nature" }, // Video Example
    { type: 'image', src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2600&auto=format&fit=crop", title: "Dual Kitchens", desc: "Gourmet and utility culinary spaces" },
    { type: 'image', src: "https://images.unsplash.com/photo-1572331165267-854da2b00cc6?q=80&w=2600&auto=format&fit=crop", title: "Private Pools", desc: "Signature penthouses with gazebos" },
    { type: 'image', src: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2600&auto=format&fit=crop", title: "Resort Amenities", desc: "Staycation luxury every day" }
];

export default function KeystoneNiwaPage() {
    // Parallax & Scroll Hooks
    const { scrollY } = useScroll();
    const heroY = useTransform(scrollY, [0, 1000], [0, 400]);
    const opacityHero = useTransform(scrollY, [0, 600], [1, 0]);
    const textParallax = useTransform(scrollY, [500, 1500], [0, -100]);
    const imgParallax = useTransform(scrollY, [500, 1500], [0, 100]);

    // State
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const [isMuted, setIsMuted] = useState(true);
    const audioRef = useRef(null);

    // Custom Cursor
    // Custom Cursor State
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const [hasMoved, setHasMoved] = useState(false);

    // Snappy, responsive spring
    const cursorX = useSpring(mouseX, { stiffness: 1200, damping: 50 });
    const cursorY = useSpring(mouseY, { stiffness: 1200, damping: 50 });

    useEffect(() => {
        // Preloader
        const timer = setTimeout(() => setIsLoading(false), 2500);

        // Mouse Move
        const mouseMove = e => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
            if (!hasMoved) setHasMoved(true);
        };
        window.addEventListener("mousemove", mouseMove);

        // Audio Auto-play attempt
        if (audioRef.current) {
            audioRef.current.volume = 0.3;
        }

        return () => {
            clearTimeout(timer);
            window.removeEventListener("mousemove", mouseMove);
        };
    }, [hasMoved, mouseX, mouseY]);

    const toggleAudio = () => {
        if (audioRef.current) {
            if (isMuted) {
                audioRef.current.play().catch(e => console.log("Audio play failed", e));
            } else {
                audioRef.current.pause();
            }
            setIsMuted(!isMuted);
        }
    };

    const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % GALLERY_IMAGES.length);
    const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length);

    // Variants for Hover
    const [cursorVariant, setCursorVariant] = useState("default");

    const variants = {
        default: { height: 24, width: 24, backgroundColor: "#ffffff" },
        text: { height: 80, width: 80, backgroundColor: "#ffffff", mixBlendMode: "difference" },
        button: { height: 48, width: 48, backgroundColor: "#10b981" } // Emerald
    };

    const textEnter = () => setCursorVariant("text");
    const textLeave = () => setCursorVariant("default");
    const buttonEnter = () => setCursorVariant("button");

    return (
        <>
            {/* Custom Cursor - Optimized */}
            <motion.div
                variants={variants}
                animate={cursorVariant}
                style={{ x: cursorX, y: cursorY, translateX: '-50%', translateY: '-50%' }}
                className={`fixed top-0 left-0 rounded-full pointer-events-none z-[10000] shadow-sm hidden md:block ${!hasMoved ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300 will-change-transform mix-blend-difference`}
            />

            {/* ... Preloader ... */}
            <AnimatePresence>
                {isLoading && (
                    <motion.div
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0, y: -50 }}
                        transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
                        className="fixed inset-0 z-[60] bg-[#0a1811] flex items-center justify-center flex-col"
                    >
                        {/* ... Same content ... */}
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={{
                                visible: { transition: { staggerChildren: 0.05, delayChildren: 0.5 } }
                            }}
                            className="text-4xl md:text-6xl font-serif text-white tracking-widest flex gap-4"
                        >
                            <div className="flex">
                                {["K", "E", "Y", "S", "T", "O", "N", "E"].map((l, i) => (
                                    <motion.span
                                        key={i}
                                        variants={{
                                            hidden: { y: 20, opacity: 0 },
                                            visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } }
                                        }}
                                    >
                                        {l}
                                    </motion.span>
                                ))}
                            </div>
                            <div className="flex text-emerald-500 italic">
                                {["N", "I", "W", "A"].map((l, i) => (
                                    <motion.span
                                        key={i}
                                        variants={{
                                            hidden: { y: 20, opacity: 0 },
                                            visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } }
                                        }}
                                    >
                                        {l}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: 200 }}
                            transition={{ delay: 1, duration: 1.5 }}
                            className="h-[1px] bg-emerald-500 mt-8"
                        />
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.5 }}
                            className="text-emerald-500/50 mt-4 text-xs tracking-[0.5em] uppercase"
                        >
                            The Nurtured Edition
                        </motion.p>
                    </motion.div>
                )}
            </AnimatePresence>

            <main className="min-h-screen bg-[#0a1811] text-[#e8e6d9] selection:bg-emerald-500 selection:text-white overflow-hidden md:cursor-none">
                <div>
                    <Header />
                </div>

                {/* Audio Control */}
                <div className="fixed bottom-10 right-10 z-[50]">
                    <audio ref={audioRef} loop src="/niwa-audio.m4a" />
                    <button
                        onClick={toggleAudio}
                        onMouseEnter={buttonEnter}
                        onMouseLeave={textLeave}
                        className="w-12 h-12 bg-black/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/10 hover:bg-emerald-500 hover:text-black transition-all"
                    >
                        {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
                    </button>
                </div>

                {/* 1. HERO SECTION */}
                <section className="relative h-screen w-full overflow-hidden">
                    {/* ... Same Hero Content ... */}
                    <motion.div style={{ y: heroY, opacity: opacityHero }} className="absolute inset-0 z-0">
                        {/* Leaves Image - Dark Minimalist Fern (Verified) */}
                        {/* Hero Background: Video or Image */}
                        {HERO_VIDEO ? (
                            <video
                                src={HERO_VIDEO}
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="w-full h-full object-cover opacity-60 grayscale-[20%]"
                            />
                        ) : (
                            <img
                                src="https://images.pexels.com/photos/31067767/pexels-photo-31067767.jpeg"
                                className="w-full h-full object-cover opacity-50 grayscale-[20%]"
                                alt="Keystone Niwa Dark Leaf Theme"
                            />
                        )}
                        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-[#0a1811]"></div>
                    </motion.div>

                    <div
                        className="relative z-10 w-full h-full flex flex-col justify-center items-center text-center px-6"
                    >
                        {/* ... Title Content ... */}
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 2.8 }}
                            className="text-emerald-400 uppercase tracking-[0.4em] text-xs font-bold mb-6 border border-emerald-500/50 px-6 py-2 rounded-full backdrop-blur-sm"
                        >
                            New Alkapuri, Vadodara
                        </motion.span>
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={{
                                visible: { transition: { staggerChildren: 0.05, delayChildren: 3 } }
                            }}
                            className="text-6xl md:text-8xl lg:text-[10rem] font-serif leading-none text-white mix-blend-overlay flex flex-col items-center"
                        >
                            <div className="flex">
                                {["K", "E", "Y", "S", "T", "O", "N", "E"].map((l, i) => (
                                    <motion.span
                                        key={i}
                                        variants={{
                                            hidden: { y: 50, opacity: 0 },
                                            visible: { y: 0, opacity: 1, transition: { duration: 1, ease: "easeOut" } }
                                        }}
                                    >
                                        {l}
                                    </motion.span>
                                ))}
                            </div>
                            <div className="flex">
                                {["N", "I", "W", "A"].map((l, i) => (
                                    <motion.span
                                        key={i}
                                        variants={{
                                            hidden: { y: 50, opacity: 0 },
                                            visible: { y: 0, opacity: 1, transition: { duration: 1, ease: "easeOut" } }
                                        }}
                                    >
                                        {l}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 3.5 }}
                            className="text-xl md:text-3xl font-light text-gray-300 mt-8 font-serif italic"
                        >
                            "Not Built. Nurtured."
                        </motion.p>
                    </div>

                    <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 animate-bounce">
                        <span className="text-[10px] uppercase tracking-widest">Explore</span>
                        <div className="w-[1px] h-12 bg-white"></div>
                    </div>
                </section>

                {/* 2. PHILOSOPHY / HIGHLIGHTS SECTION */}
                <section className="py-20 md:py-32 relative bg-[#0a1811] overflow-hidden">
                    {/* Floating organic elements */}
                    <motion.div style={{ y: heroY }} className="absolute top-20 right-10 text-emerald-900/20 rotate-45 pointer-events-none">
                        <Leaf size={300} strokeWidth={0.5} />
                    </motion.div>

                    <div className="container mx-auto px-6 relative z-10">
                        {/* Huge Watermark Title */}
                        <div className="absolute top-0 left-0 w-full overflow-hidden pointer-events-none opacity-5 leading-none select-none">
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-10%" }}
                                variants={{
                                    visible: { transition: { staggerChildren: 0.1 } }
                                }}
                                className="flex text-[10rem] md:text-[20rem] font-serif whitespace-nowrap text-white"
                            >
                                {["S", "A", "N", "C", "T", "U", "A", "R", "Y"].map((letter, i) => (
                                    <motion.span
                                        key={i}
                                        variants={{
                                            hidden: { y: "100%" },
                                            visible: { y: "0%", transition: { duration: 1, ease: [0.22, 1, 0.36, 1] } }
                                        }}
                                    >
                                        {letter}
                                    </motion.span>
                                ))}
                            </motion.div>
                        </div>

                        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 pt-10 md:pt-20">
                            {/* Text Column (Left) with Parallax */}
                            <motion.div style={{ y: textParallax }} className="lg:w-1/2 space-y-8 md:space-y-12 relative z-10">
                                <h2 className="text-5xl md:text-8xl font-serif leading-[0.85]">
                                    Not Built. <br /> <span className="text-emerald-500 italic block pl-10 md:pl-20">Nurtured.</span>
                                </h2>
                                <div className="space-y-6 md:space-y-8 text-lg md:text-xl font-light text-gray-300 leading-relaxed font-serif pl-4 border-l border-emerald-500/30">
                                    <p>
                                        In a world obsessed with maximizing construction, we chose to maximize <strong className="text-white font-normal">life</strong>.
                                    </p>
                                    <p>
                                        At Keystone Niwa, over <span className="text-emerald-400 text-3xl italic">35%</span> of the land is dedicated purely to nature.
                                        We didn't just plant trees; we designed the architecture around them.
                                    </p>
                                </div>
                                <div className="grid grid-cols-2 gap-8 md:gap-12 pt-4 md:pt-8">
                                    <div className="group">
                                        <h4 className="text-5xl md:text-6xl text-white font-serif mb-2 group-hover:text-emerald-400 transition-colors">26</h4>
                                        <span className="text-xs uppercase tracking-[0.2em] text-gray-500">Exclusive Families</span>
                                    </div>
                                    <div className="group">
                                        <h4 className="text-5xl md:text-6xl text-white font-serif mb-2 group-hover:text-emerald-400 transition-colors">5k+</h4>
                                        <span className="text-xs uppercase tracking-[0.2em] text-gray-500">Sq. Ft. Living</span>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Image Column (Right) with Parallax */}
                            <motion.div style={{ y: imgParallax }} className="lg:w-1/2 relative w-full">
                                <div className="relative z-10 rounded-full overflow-hidden border border-white/10 aspect-[3/4] w-full md:w-[80%] mx-auto shadow-2xl shadow-emerald-900/30">
                                    <img
                                        src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1000&auto=format&fit=crop"
                                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-[2s]"
                                        alt="Nature Architecture"
                                    />
                                </div>
                                {/* Decorative "Stamp" */}
                                <div className="absolute -bottom-5 right-0 lg:-right-10 bg-emerald-500 text-[#0a1811] w-28 h-28 md:w-40 md:h-40 rounded-full flex items-center justify-center animate-spin-slow shadow-xl z-20">
                                    <div className="text-center">
                                        <span className="block text-xs uppercase font-bold tracking-widest">Est. 2025</span>
                                        <span className="block font-serif text-2xl italic">Niwa</span>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* 3. NEW GALLERY SLIDER SECTION */}
                <section className="py-20 md:py-32 bg-black overflow-hidden relative">
                    <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                    <div className="container mx-auto px-6 mb-10 md:mb-16 flex flex-col md:flex-row justify-between items-end gap-8">
                        <div>
                            <span className="text-emerald-500 uppercase tracking-widest text-xs mb-4 block">The Collection</span>
                            <h2 className="text-4xl md:text-7xl font-serif">Visual <span className="text-emerald-500 italic">Symphony</span></h2>
                        </div>
                        <div className="flex gap-4">
                            <button onClick={prevSlide} onMouseEnter={buttonEnter} onMouseLeave={textLeave} className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-full border border-white/20 hover:bg-white hover:text-black transition-all hover:scale-110">
                                <ChevronLeft size={24} />
                            </button>
                            <button onClick={nextSlide} onMouseEnter={buttonEnter} onMouseLeave={textLeave} className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-full border border-white/20 hover:bg-white hover:text-black transition-all hover:scale-110">
                                <ChevronRight size={24} />
                            </button>
                        </div>
                    </div>

                    {/* ... Gallery Content ... */}
                    <div className="relative h-[50vh] md:h-[80vh] w-full group">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentSlide}
                                initial={{ opacity: 0, scale: 1.1 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 1, ease: "easeOut" }}
                                className="absolute inset-0"
                            >
                                {GALLERY_IMAGES[currentSlide].type === 'video' ? (
                                    <video
                                        src={GALLERY_IMAGES[currentSlide].src}
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                        key={GALLERY_IMAGES[currentSlide].src} // Re-mount on change
                                        className="w-full h-full object-cover brightness-[0.7] group-hover:brightness-[0.8] transition-all duration-1000"
                                    />
                                ) : (
                                    <img
                                        src={GALLERY_IMAGES[currentSlide].src}
                                        className="w-full h-full object-cover brightness-[0.7] group-hover:brightness-[0.8] transition-all duration-1000"
                                        alt={GALLERY_IMAGES[currentSlide].title}
                                    />
                                )}
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent p-6 md:p-20 flex flex-col justify-end">
                                    <motion.div
                                        initial={{ y: 100, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{ delay: 0.3, duration: 0.8 }}
                                        className="container mx-auto border-l-2 border-emerald-500 pl-6 md:pl-8"
                                    >
                                        <h3 className="text-4xl md:text-8xl font-serif text-white mb-4">{GALLERY_IMAGES[currentSlide].title}</h3>
                                        <p className="text-xl md:text-2xl text-emerald-400 font-light tracking-wide">{GALLERY_IMAGES[currentSlide].desc}</p>
                                    </motion.div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </section>

                {/* 4. VISUAL USP: ONE FLOOR ONE UNIT */}
                <section className="py-20 md:py-40 bg-[#06120c] relative overflow-hidden">
                    <div className="container mx-auto px-6 text-center mb-16 md:mb-24">
                        {/* ... USP Title ... */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-4xl md:text-6xl font-serif mb-6">The Luxury of <span className="text-emerald-500 italic">Privacy</span></h2>
                            <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">Experience the rarest luxury in modern living: No shared walls. No neighbors on your floor. Just you and the horizon.</p>
                        </motion.div>
                    </div>

                    {/* Interactive-style Diagram */}
                    <div className="container mx-auto px-6">
                        <motion.div
                            whileHover={{ scale: 1.01 }}
                            className="relative max-w-6xl mx-auto bg-gradient-to-r from-emerald-950/20 to-[#0a1811] border border-emerald-900/30 rounded-[2rem] md:rounded-[3rem] p-8 md:p-20 overflow-hidden group shadow-2xl"
                        >
                            {/* ... Diagram Content ... */}
                            <div className="absolute top-0 right-0 p-40 bg-emerald-500/5 blur-[120px] rounded-full"></div>

                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 md:gap-16 items-center relative z-10">
                                {/* Left Feature */}
                                <div className="text-center md:text-left space-y-4">
                                    <div className="w-16 h-16 md:w-20 md:h-20 bg-emerald-900/30 rounded-full flex items-center justify-center mb-6 text-emerald-400 mx-auto md:mx-0 shadow-lg shadow-emerald-900/10 border border-white/5">
                                        <Wind size={32} strokeWidth={1.5} />
                                    </div>
                                    <h3 className="text-2xl md:text-3xl font-bold text-white font-serif">Dual Kitchens</h3>
                                    <p className="text-sm md:text-base text-gray-500 leading-relaxed font-light">Gourmet & Utility. Separate spaces for hosting and preparation.</p>
                                </div>

                                {/* Center Animation */}
                                <div className="relative h-[300px] lg:h-[400px] flex items-center justify-center">
                                    <motion.div
                                        animate={{ rotate: 360 }}
                                        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                                        className="absolute inset-0 border border-white/5 rounded-full border-dashed"
                                    ></motion.div>
                                    <motion.div
                                        animate={{ rotate: -360 }}
                                        transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
                                        className="absolute inset-4 border border-white/5 rounded-full opacity-50"
                                    ></motion.div>

                                    <div className="relative w-56 h-56 md:w-72 md:h-72 border border-emerald-500/30 rotate-45 flex items-center justify-center backdrop-blur-sm z-10 bg-[#0a1811]/80 shadow-2xl skew-x-6 hover:skew-x-0 transition-transform duration-700">
                                        <div className="text-center -rotate-45">
                                            <span className="block text-6xl md:text-7xl font-serif text-white mb-2">1</span>
                                            <span className="text-xs uppercase tracking-[0.3em] text-emerald-400 block">Unit Per Floor</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Right Feature */}
                                <div className="text-center md:text-right space-y-4">
                                    <div className="w-16 h-16 md:w-20 md:h-20 bg-emerald-900/30 rounded-full flex items-center justify-center mb-6 text-emerald-400 mx-auto md:ml-auto shadow-lg shadow-emerald-900/10 border border-white/5">
                                        <Leaf size={32} strokeWidth={1.5} />
                                    </div>
                                    <h3 className="text-2xl md:text-3xl font-bold text-white font-serif">45,000 Sq. Ft. Plot</h3>
                                    <p className="text-sm md:text-base text-gray-500 leading-relaxed font-light">An expansive ground for just 26 families, ensuring low density and high serenity.</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* 5. LOCATION & CONTACT: MOBILE OPTIMIZED */}
                <section className="py-16 md:py-32 bg-[#e8e6d9] text-[#0a1811]">
                    <div className="container mx-auto px-6">
                        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
                            <div className="flex flex-col justify-center order-2 lg:order-1">
                                <span className="text-[#0a1811]/60 uppercase tracking-widest text-sm mb-6 block">The Address</span>
                                <h2 className="text-4xl md:text-7xl font-serif mb-12 text-[#0a1811] leading-[0.9]">New Alkapuri's<br /> Greenest Corner</h2>
                                <div className="space-y-10 text-xl font-serif">
                                    <div className="flex items-start group cursor-pointer border-b border-[#0a1811]/10 pb-8">
                                        <MapPin className="mr-6 md:mr-8 mt-1 text-emerald-700 transition-transform group-hover:scale-125" size={28} />
                                        <div>
                                            <p className="font-bold mb-2 text-2xl">Keystone Niwa</p>
                                            <p className="text-[#0a1811]/70 leading-relaxed font-sans text-lg">Opp. Keystone Skyvillas, <br />New Alkapuri, Vadodara, Gujarat</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start group cursor-pointer border-b border-[#0a1811]/10 pb-8">
                                        <Phone className="mr-6 md:mr-8 mt-1 text-emerald-700 transition-transform group-hover:scale-125" size={28} />
                                        <div>
                                            <p className="font-bold mb-2 text-2xl">Private Concierge</p>
                                            <p className="text-[#0a1811]/70 font-sans text-lg">+91 7201 950 950</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-12 md:mt-16">
                                    <Button
                                        onMouseEnter={buttonEnter}
                                        onMouseLeave={textLeave}
                                        className="bg-[#0a1811] text-white hover:bg-emerald-800 px-8 py-6 md:px-12 md:py-8 rounded-full text-lg md:text-xl transition-all shadow-2xl hover:shadow-xl hover:-translate-y-1 w-full md:w-auto"
                                    >
                                        Schedule a Private Viewing
                                    </Button>
                                </div>
                            </div>

                            {/* Map Container - Mobile Height Fix */}
                            <div className="relative order-1 lg:order-2 h-[450px] lg:h-[800px] bg-emerald-900 rounded-[2rem] overflow-hidden flex items-center justify-center group shadow-2xl border border-emerald-500/20 z-0">
                                {/* Custom Luxury Map for Niwa */}
                                <LuxuryMapWrapper activeProject={keystoneNiwa} />

                                <div className="absolute bottom-6 left-6 right-6 md:right-auto md:left-10 pointer-events-none z-[400] md:min-w-[300px]">
                                    <div className="bg-[#0a1811]/90 backdrop-blur-md p-6 rounded-2xl border border-emerald-500/30 shadow-2xl">
                                        <MapPin className="text-emerald-500 mb-2" size={32} />
                                        <p className="text-white font-serif text-xl">Keystone Niwa</p>
                                        <p className="text-emerald-400/60 text-sm tracking-widest uppercase">Vadodara, Gujarat</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <div>
                    <Footer />
                </div>
            </main>
        </>
    );
}
