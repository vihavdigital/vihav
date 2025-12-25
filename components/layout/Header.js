"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Search, MapPin, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import SideMenu from "@/components/layout/SideMenu";

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <header
                className={cn(
                    "fixed top-0 left-0 right-0 z-50 transition-all duration-700 border-b border-white/5",
                    isScrolled
                        ? "bg-luxury-black/95 backdrop-blur-xl py-4 shadow-2xl"
                        : "bg-gradient-to-b from-black/60 to-transparent py-6"
                )}
            >
                <div className="container mx-auto px-6 flex items-center justify-between">

                    {/* Left Actions (Menu) */}
                    <div className="flex items-center space-x-8">
                        <button
                            onClick={() => setIsMenuOpen(true)}
                            className="flex items-center gap-4 text-white hover:text-gold-400 transition-all duration-500 group"
                        >
                            <div className="flex flex-col gap-1.5 items-start">
                                <div className="w-6 h-[2px] bg-white group-hover:bg-gold-400 transition-all duration-300 origin-left group-hover:scale-x-75" />
                                <div className="w-6 h-[2px] bg-white group-hover:bg-gold-400 transition-all duration-300 origin-left" />
                                <div className="w-6 h-[2px] bg-white group-hover:bg-gold-400 transition-all duration-300 origin-left group-hover:scale-x-75" />
                            </div>
                            <span className="text-[10px] font-bold tracking-[0.3em] hidden md:block opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 delay-75">MENU</span>
                        </button>
                    </div>

                    {/* Centered Logo */}
                    <Link href="/" className="group absolute left-1/2 -translate-x-1/2 z-50">
                        <div className="flex flex-col items-center">
                            {/* Logo with improved sizing for elegance */}
                            <img
                                src="/vihav-logo-final.png"
                                alt="Vihav Group"
                                className={cn(
                                    "w-auto object-contain transition-all duration-500",
                                    isScrolled ? "h-10 md:h-12" : "h-12 md:h-16"
                                )}
                            />
                        </div>
                    </Link>

                    {/* Right Actions (Enquire) */}
                    <div className="hidden md:flex items-center space-x-6 text-[10px] font-bold tracking-[0.3em] text-white">
                        <Link href={`/projects/keystone-skyvillas`} className="flex items-center gap-3 hover:text-gold-400 transition-colors group">
                            <span className="group-hover:mr-2 transition-all duration-300">ENQUIRE</span>
                            <div className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center group-hover:border-gold-400 group-hover:bg-gold-400 group-hover:text-black transition-all duration-300">
                                <ArrowRight size={12} className="-rotate-45 group-hover:rotate-0 transition-transform duration-500" />
                            </div>
                        </Link>
                    </div>
                </div>
            </header>

            <SideMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
        </>
    );
}
