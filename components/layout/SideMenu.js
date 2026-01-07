"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { X, ChevronRight, ArrowRight, ChevronLeft } from "lucide-react";
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
        id: "onevihav",
        label: "ONE VIHAV",
        href: "/onevihav",
        image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2000&auto=format&fit=crop",
        desc: "Exclusive privilege program for our family."
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
    const [view, setView] = useState('main');

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
                                <AnimatePresence>
                                    {view === 'projects' && (
                                        <motion.button
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: 20 }}
                                            onClick={() => setView('main')}
                                            className="flex items-center gap-2 text-xs font-bold tracking-[0.2em] hover:text-gold-400 transition-colors text-foreground uppercase"
                                        >
                                            <ChevronLeft size={16} />
                                            <span className="hidden md:block">BACK</span>
                                        </motion.button>
                                    )}
                                </AnimatePresence>
                                <button onClick={onClose} className="flex items-center gap-3 text-xs font-bold tracking-[0.2em] hover:text-gold-400 transition-colors text-foreground">
                                    <div className="p-2 border border-border rounded-full hover:border-gold-400 transition-colors">
                                        <X size={14} />
                                    </div>
                                    <span className="hidden md:block">CLOSE</span>
                                </button>
                            </div>
                        </div>

                        {/* Nav List - Mobile & Desktop */}
                        <div className="flex-1 px-8 md:px-24 flex flex-col justify-center relative overflow-hidden">
                            <AnimatePresence mode="wait">
                                {view === 'main' ? (
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
                                        className="flex flex-col space-y-6 md:space-y-8"
                                    >
                                        {MENU_ITEMS.map((item) => (
                                            <motion.div
                                                key={item.id}
                                                variants={{
                                                    hidden: { opacity: 0, x: -100 },
                                                    show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
                                                }}
                                                onMouseEnter={() => setHoveredItem(item)}
                                                className="block text-right"
                                            >
                                                {item.id === "projects" ? (
                                                    <button
                                                        onClick={() => setView('projects')}
                                                        className={`group block text-4xl md:text-6xl font-serif tracking-tight transition-all duration-500 ease-out text-right w-full ${hoveredItem.id === item.id ? "text-gold-400 -translate-x-4 md:-translate-x-10" : "text-muted-foreground hover:text-foreground"}`}
                                                    >
                                                        <span className="flex items-center justify-end w-full gap-4 md:gap-6">
                                                            <ChevronRight size={32} className={`text-gold-400 transition-transform duration-500`} />
                                                            <span className="flex items-center gap-4">
                                                                {item.label}
                                                            </span>
                                                        </span>
                                                    </button>
                                                ) : (
                                                    <Link
                                                        href={item.href}
                                                        onClick={onClose}
                                                        className={`group block text-4xl md:text-6xl font-serif tracking-tight transition-all duration-500 ease-out text-right w-full ${hoveredItem.id === item.id ? "text-gold-400 -translate-x-4 md:-translate-x-10" : "text-muted-foreground hover:text-foreground"}`}
                                                    >
                                                        <span className="flex items-center justify-end gap-4">
                                                            {item.label}
                                                            <span className={`opacity-0 translate-x-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-0`}>
                                                                <ArrowRight size={24} className="-rotate-45" />
                                                            </span>
                                                        </span>
                                                    </Link>
                                                )}
                                            </motion.div>
                                        ))}
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="projects-menu"
                                        initial="hidden"
                                        animate="show"
                                        exit="hidden"
                                        variants={{
                                            hidden: { opacity: 0, x: -50 },
                                            show: {
                                                opacity: 1,
                                                x: 0,
                                                transition: {
                                                    staggerChildren: 0.15,
                                                    delayChildren: 0.2,
                                                    ease: "circOut"
                                                }
                                            }
                                        }}
                                        className="flex flex-col h-full justify-center overflow-hidden"
                                    >
                                        <div className="flex flex-col gap-4 w-full h-full flex-1 min-h-0 pb-20 md:pb-0 pt-4">
                                            {[
                                                { label: "UPCOMING PROJECTS", status: "Upcoming", img: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1000&auto=format&fit=crop", desc: "Future landmarks" },
                                                { label: "ONGOING PROJECTS", status: "Ongoing", img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1000&auto=format&fit=crop", desc: "Taking shape" },
                                                { label: "COMPLETED PROJECTS", status: "Completed", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop", desc: "Delivered excellence" },
                                            ].map((sub, idx) => (
                                                <Link
                                                    key={sub.label}
                                                    href={`/projects?status=${sub.status}`}
                                                    onClick={onClose}
                                                    className="w-full flex-1 min-h-0 block"
                                                >
                                                    <motion.div
                                                        variants={{
                                                            hidden: { opacity: 0, x: -100 },
                                                            show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
                                                        }}
                                                        whileHover={{ scale: 1.02 }}
                                                        whileTap={{ scale: 0.98 }}
                                                        className="group relative w-full h-full overflow-hidden transition-all duration-500 bg-black/20 rounded-lg"
                                                    >
                                                        <img src={sub.img} alt={sub.label} className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 brightness-[0.7] group-hover:brightness-90" />

                                                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-500" />

                                                        <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end items-end">
                                                            <div className="flex flex-col items-end gap-1 md:gap-2">
                                                                <span className="text-[10px] md:text-xs text-gold-400/80 uppercase tracking-widest">{sub.desc}</span>
                                                                <h3 className="text-xl md:text-3xl font-sans tracking-[0.1em] text-white group-hover:text-gold-400 transition-colors uppercase font-light text-right">
                                                                    {sub.label}
                                                                </h3>
                                                            </div>
                                                        </div>
                                                    </motion.div>
                                                </Link>
                                            ))}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
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
