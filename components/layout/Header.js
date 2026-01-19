"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Search, MapPin, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import SideMenu from "@/components/layout/SideMenu";
import MagneticWrapper from "@/components/ui/MagneticWrapper";
import dynamic from "next/dynamic";

const EnquiryModal = dynamic(() => import("@/components/ui/EnquiryModal"));
const SearchModal = dynamic(() => import("@/components/ui/SearchModal"));

import { usePathname } from "next/navigation";

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isEnquireModalOpen, setIsEnquireModalOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const pathname = usePathname();

    const isNiwa = pathname?.includes('keystone-niwa');
    const isCBD = pathname?.includes('cbd') || pathname?.includes('vihav-cbd');

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
                    "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                    isScrolled
                        ? "bg-background/80 backdrop-blur-md py-[14px] md:py-4 shadow-xl border-b border-white/10 support-[backdrop-filter]:bg-background/60"
                        : "bg-gradient-to-b from-black/60 to-transparent py-6 md:py-10"
                )}
            >
                <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">

                    {/* Left Actions (Menu) */}
                    <div className="flex items-center space-x-8">
                        <MagneticWrapper>
                            <button
                                aria-label="Toggle menu"
                                onClick={() => setIsMenuOpen(true)}
                                className={cn(
                                    "flex items-center gap-4 hover:text-gold-400 transition-all duration-500 group",
                                    isScrolled ? "text-foreground" : "text-white drop-shadow-md"
                                )}
                            >
                                <div className="flex flex-col gap-1.5 items-start">
                                    <div className="w-6 h-[2px] bg-current group-hover:bg-gold-400 transition-all duration-300 origin-left group-hover:scale-x-75" />
                                    <div className="w-6 h-[2px] bg-current group-hover:bg-gold-400 transition-all duration-300 origin-left" />
                                    <div className="w-6 h-[2px] bg-current group-hover:bg-gold-400 transition-all duration-300 origin-left group-hover:scale-x-75" />
                                </div>
                                <span className="text-[10px] font-bold tracking-[0.3em] hidden md:block opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 delay-75">MENU</span>
                            </button>
                        </MagneticWrapper>
                    </div>

                    {/* Centered Logo */}
                    <Link href="/" className="group absolute left-1/2 -translate-x-1/2 z-50">
                        <div className="flex flex-col items-center">
                            {/* Logo with improved sizing for elegance */}
                            <img
                                src={isNiwa ? "/images/project-images/project-logos/keystone-niwa-logo.svg" : isCBD ? "/images/project-images/project-logos/cbd-logo.svg" : "/images/project-images/project-logos/vihav-group-logo.svg"}
                                alt={isNiwa ? "Keystone Niwa" : isCBD ? "Vihav CBD" : "Vihav Group"}
                                className={cn(
                                    "w-auto object-contain transition-all duration-500 h-10 md:h-16"
                                )}
                            />
                        </div>
                    </Link>

                    {/* Right Actions (Search + Enquire) */}
                    <div className={cn(
                        "flex items-center space-x-6 text-[10px] font-bold tracking-[0.3em]",
                        isScrolled ? "text-foreground" : "text-white drop-shadow-md"
                    )}>
                        <MagneticWrapper>
                            <button
                                aria-label="Search"
                                onClick={() => setIsSearchOpen(true)}
                                className="p-2 hover:text-gold-400 transition-colors"
                            >
                                <Search size={20} />
                            </button>
                        </MagneticWrapper>

                        <MagneticWrapper>
                            <button
                                aria-label="Open enquiry form"
                                onClick={() => setIsEnquireModalOpen(true)}
                                className="flex items-center gap-3 hover:text-gold-400 transition-colors group"
                            >
                                <span className="hidden md:block group-hover:mr-2 transition-all duration-300">ENQUIRE</span>
                                <div className="w-8 h-8 rounded-full border border-current/30 flex items-center justify-center group-hover:border-gold-400 group-hover:bg-gold-400 group-hover:text-black transition-all duration-300">
                                    <ArrowRight size={12} className="-rotate-45 group-hover:rotate-0 transition-transform duration-500" />
                                </div>
                            </button>
                        </MagneticWrapper>
                    </div>
                </div>
            </header>

            <SideMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
            <EnquiryModal isOpen={isEnquireModalOpen} onClose={() => setIsEnquireModalOpen(false)} />
            <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
        </>
    );
}
