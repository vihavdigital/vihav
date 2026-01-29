"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { X, ChevronRight, ArrowRight, ChevronLeft, Instagram, Facebook, Linkedin, Twitter, Youtube } from "lucide-react";
import { useState } from "react";
import ThemeToggle from "@/components/theme/ThemeToggle";

const MENU_ITEMS = [
    {
        id: "home",
        label: "HOME",
        href: "/",
        image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2000&auto=format&fit=crop",
        desc: "Return to the beginning."
    },
    {
        id: "projects",
        label: "PROJECTS",
        href: "/projects",
        image: "https://www.vihav.com/wp-content/uploads/KS51-Elevation-1-e1761809057612.jpg",
        desc: "Explore our residential and commercial landmarks."
    },

    {
        id: "about",
        label: "ABOUT US",
        href: "/about",
        image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2000&auto=format&fit=crop",
        desc: "Our journey, leadership, and awards."
    },
    {
        id: "awards",
        label: "AWARDS",
        href: "/awards",
        image: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=2000&auto=format&fit=crop",
        desc: "Recognition of excellence."
    },
    {
        id: "onevihav",
        label: "ONE VIHAV",
        href: "/onevihav",
        image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2000&auto=format&fit=crop",
        desc: "Exclusive privilege program for our family."
    },
    {
        id: "contact",
        label: "CONTACT US",
        href: "/contact",
        image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&w=2000&auto=format&fit=crop",
        desc: "Get in touch with us."
    },
];

import { usePathname } from "next/navigation";

export default function SideMenu({ isOpen, onClose }) {
    const pathname = usePathname();

    const [hoveredItem, setHoveredItem] = useState(() => {
        const active = MENU_ITEMS.find(item =>
            item.href === '/'
                ? pathname === '/'
                : (item.href !== '#' && pathname?.startsWith(item.href))
        );
        return active || MENU_ITEMS[0];
    });

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[200] flex text-white overflow-hidden">
                    {/* Desktop: Left Pane (Navigation) */}
                    <motion.div
                        initial={{ x: "-100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "-100%" }}
                        transition={{ type: "tween", duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
                        className="w-full md:w-1/2 lg:w-[40%] h-full bg-background/95 backdrop-blur-3xl border-r border-border flex flex-col relative z-20 text-foreground"
                    >
                        {/* Header */}
                        <div className="flex justify-between items-center p-5 md:p-12">
                            <ThemeToggle />
                            <div className="flex items-center gap-6">
                                <button
                                    onClick={onClose}
                                    className="flex items-center gap-3 text-xs font-bold tracking-[0.2em] hover:text-gold-400 transition-colors text-foreground"
                                    aria-label="Close menu"
                                >
                                    <div className="p-2 border border-border rounded-full hover:border-gold-400 transition-colors">
                                        <X size={14} />
                                    </div>
                                    <span className="hidden md:block">CLOSE</span>
                                </button>
                            </div>
                        </div>

                        {/* Nav List - Dynamic Height Adaptive */}
                        <div className="flex-1 min-h-0 overflow-y-auto px-6 md:px-12 lg:px-16 xl:px-24 flex flex-col justify-center relative scrollbar-hide">
                            <motion.div
                                key="main-menu"
                                initial="hidden"
                                animate="show"
                                exit="hidden"
                                variants={{
                                    hidden: { opacity: 0, x: -50 },
                                    show: {
                                        opacity: 1,
                                        x: 0,
                                        transition: {
                                            staggerChildren: 0.1,
                                            delayChildren: 0.1,
                                            ease: "circOut"
                                        }
                                    }
                                }}
                                className="flex flex-col py-4 gap-[2vh]"
                            >
                                {MENU_ITEMS.map((item) => (
                                    <motion.div
                                        key={item.id}
                                        variants={{
                                            hidden: { opacity: 0, x: -100 },
                                            show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
                                        }}
                                        onMouseEnter={() => {
                                            // Only trigger hover effect on devices that support hover (mouse)
                                            // This prevents "double tap" issue on iPad/Mobile where first tap triggers hover
                                            if (typeof window !== 'undefined' && window.matchMedia('(hover: hover)').matches) {
                                                setHoveredItem(item);
                                            }
                                        }}
                                        className="block text-right"
                                    >
                                        <Link
                                            href={item.href}
                                            onClick={onClose}
                                            // Using vh units for font size ensures it never overflows vertically regardless of resolution
                                            className={`group flex items-center justify-end w-full gap-3 md:gap-4 text-[4vh] md:text-[5vh] font-serif tracking-tight transition-all duration-500 ease-out leading-none ${hoveredItem.id === item.id ? "text-gold-400 -translate-x-4 md:-translate-x-10" : "text-muted-foreground hover:text-foreground"}`}
                                        >
                                            <span className="relative">
                                                {item.label}
                                                <ArrowRight
                                                    size={24}
                                                    className={`absolute right-full mr-4 top-1/2 -translate-y-1/2 -rotate-45 transition-opacity duration-500 w-[3vh] h-[3vh] ${hoveredItem.id === item.id ? "opacity-100" : "opacity-0"}`}
                                                />
                                            </span>
                                        </Link>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </div>

                        {/* Footer & Socials */}
                        <div className="px-8 pb-8 md:px-12 md:pb-12 mt-auto">
                            <div className="flex flex-row justify-between items-end">
                                {/* Socials */}
                                <div className="flex gap-4">
                                    {[
                                        { icon: Instagram, href: "https://www.instagram.com/vihavgroup", label: "Instagram" },
                                        { icon: Facebook, href: "https://www.facebook.com/vihavgroup/", label: "Facebook" },
                                        { icon: Linkedin, href: "https://in.linkedin.com/company/vihav-group", label: "LinkedIn" },
                                        { icon: Twitter, href: "https://x.com/vihavgroup", label: "Twitter" },
                                        { icon: Youtube, href: "https://www.youtube.com/@vihavgroup", label: "YouTube" }
                                    ].map((social, idx) => (
                                        <a
                                            key={idx}
                                            href={social.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-muted-foreground hover:text-gold-400 transition-colors"
                                            aria-label={social.label}
                                        >
                                            <social.icon size={18} />
                                        </a>
                                    ))}
                                </div>

                                {/* Legal Links */}
                                <div className="flex gap-6 text-[10px] md:text-xs text-muted-foreground uppercase tracking-widest">
                                    <Link href="/privacy-policy" className="hover:text-foreground transition-colors">Privacy</Link>
                                    <Link href="/terms-and-conditions" className="hover:text-foreground transition-colors">Terms</Link>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Desktop: Right Pane (Preview Image) */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1 }}
                        className="hidden md:block flex-1 h-full relative z-10 bg-muted"
                    >
                        <AnimatePresence>
                            <motion.div
                                key={hoveredItem.id}
                                initial={{ opacity: 0, scale: 1.1 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                className="absolute inset-0"
                            >
                                <Image
                                    src={hoveredItem.image}
                                    alt={hoveredItem.label}
                                    fill
                                    className="object-cover brightness-[0.6]"
                                    sizes="50vw"
                                    priority
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-luxury-black/80 via-transparent to-transparent" />

                                {/* Label Overlay */}
                                <div className="absolute bottom-20 right-20 text-right max-w-md">
                                    <motion.h2
                                        initial={{ y: 20, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{ delay: 0.3 }}
                                        className="text-6xl font-serif text-white mb-4"
                                    >
                                        {hoveredItem.label}
                                    </motion.h2>
                                    <motion.p
                                        initial={{ y: 20, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{ delay: 0.4 }}
                                        className="text-gold-400/80 text-sm tracking-[0.2em] uppercase font-bold"
                                    >
                                        {hoveredItem.desc}
                                    </motion.p>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
