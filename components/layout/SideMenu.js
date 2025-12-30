"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { X, ChevronRight, ArrowRight } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/Button";

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
        image: "https://www.vihav.com/wp-content/uploads/KS51-Elevation-1-e1761809057612.jpg", // Kept real image
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
        id: "career",
        label: "CAREERS",
        href: "#",
        image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000&auto=format&fit=crop",
        desc: "Join the team building the future."
    },
    {
        id: "contact",
        label: "CONTACT US",
        href: "#",
        image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&w=2000&auto=format&fit=crop",
        desc: "Get in touch with us."
    },
];

export default function SideMenu({ isOpen, onClose }) {
    const [hoveredItem, setHoveredItem] = useState(MENU_ITEMS[0]);

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
                            <button onClick={onClose} className="flex items-center gap-3 text-xs font-bold tracking-[0.2em] hover:text-gold-400 transition-colors text-foreground">
                                <div className="p-2 border border-border rounded-full hover:border-gold-400 transition-colors">
                                    <X size={14} />
                                </div>
                                <span className="hidden md:block">CLOSE</span>
                            </button>
                        </div>

                        {/* Nav List - Mobile & Desktop */}
                        <div className="flex-1 px-8 md:px-24 flex flex-col justify-center space-y-6 md:space-y-8">
                            <motion.div
                                initial="hidden"
                                animate="show"
                                exit="hidden"
                                variants={{
                                    hidden: { opacity: 0 },
                                    show: {
                                        opacity: 1,
                                        transition: {
                                            staggerChildren: 0.1,
                                            delayChildren: 0.1
                                        }
                                    }
                                }}
                            >
                                {MENU_ITEMS.map((item) => (
                                    <motion.div
                                        key={item.id}
                                        variants={{
                                            hidden: { opacity: 0, x: -20 },
                                            show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
                                        }}
                                        onMouseEnter={() => setHoveredItem(item)}
                                        className="mb-4 md:mb-6"
                                    >
                                        <Link
                                            href={item.href}
                                            onClick={onClose}
                                            className={`group block text-4xl md:text-6xl font-serif tracking-tight transition-all duration-500 ease-out ${hoveredItem.id === item.id ? "text-gold-400 translate-x-4 md:translate-x-6" : "text-muted-foreground hover:text-foreground"}`}
                                        >
                                            <span className="flex items-center gap-4">
                                                {item.label}
                                                <span className={`opacity-0 -translate-x-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-0`}>
                                                    <ArrowRight size={24} className="-rotate-45" />
                                                </span>
                                            </span>
                                        </Link>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </div>

                        {/* Footer */}
                        <div className="p-8 md:p-12 text-[10px] md:text-xs text-muted-foreground uppercase tracking-widest flex flex-wrap gap-6 md:gap-8">
                            <Link href="#" className="hover:text-foreground transition-colors">Legal</Link>
                            <Link href="#" className="hover:text-foreground transition-colors">Privacy</Link>
                            <Link href="#" className="hover:text-foreground transition-colors">Enquire Dealer</Link>
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
                        {/* Removing mode='wait' for crossfade overlap */}
                        <AnimatePresence>
                            <motion.div
                                key={hoveredItem.id}
                                initial={{ opacity: 0, scale: 1.1 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                className="absolute inset-0"
                            >
                                <img src={hoveredItem.image} alt={hoveredItem.label} className="w-full h-full object-cover brightness-[0.6]" />
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
