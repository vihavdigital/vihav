'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader() {
    const [isLoading, setIsLoading] = useState(true);
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        // Check session storage
        const hasSeen = sessionStorage.getItem("hasSeenPreloader");
        if (hasSeen) {
            setIsLoading(false);
            return;
        }

        // Prevent scrolling
        if (isLoading) document.body.style.overflow = 'hidden';

        // Counter Animation
        const interval = setInterval(() => {
            setCounter(prev => {
                const nav = prev + Math.floor(Math.random() * 10) + 2;
                return nav > 100 ? 100 : nav;
            });
        }, 30);

        // Exit Trigger
        const timer = setTimeout(() => {
            setIsLoading(false);
            sessionStorage.setItem("hasSeenPreloader", "true");
            document.body.style.overflow = 'unset';
            // Ensure counter hits 100 if it hasn't
            setCounter(100);
        }, 1500);

        return () => {
            clearInterval(interval);
            clearTimeout(timer);
            document.body.style.overflow = 'unset';
        };
    }, [isLoading]);

    // Split background into 5 columns
    const columns = [0, 1, 2, 3, 4];

    return (
        <AnimatePresence mode="wait">
            {isLoading && (
                <div className="fixed inset-0 z-[9999] pointer-events-none flex">
                    {/* 1. Shutter Columns (Background) */}
                    {columns.map((col) => (
                        <motion.div
                            key={col}
                            initial={{ y: 0 }}
                            exit={{
                                y: "-100%",
                                transition: {
                                    duration: 0.8,
                                    ease: [0.76, 0, 0.24, 1],
                                    delay: col * 0.1 // Staggered delay (0, 0.1, 0.2...)
                                }
                            }}
                            className="h-full w-full bg-[#050505] relative border-r border-white/5 last:border-none"
                        />
                    ))}

                    {/* 2. Content Overlay */}
                    <motion.div
                        className="absolute inset-0 z-10 flex flex-col items-center justify-center text-white"
                        exit={{
                            scale: 0.9,
                            opacity: 0,
                            transition: { duration: 0.8, ease: "easeInOut" }
                        }}
                    >
                        {/* Massive Typography - Filled on Load */}
                        <div className="relative overflow-hidden w-full flex justify-center items-center">
                            <motion.div
                                initial="hidden"
                                animate="visible"
                                variants={{
                                    visible: { transition: { staggerChildren: 0.05, delayChildren: 0.2 } }
                                }}
                                className="flex text-[8vw] md:text-[10vw] font-serif leading-none tracking-tighter"
                            >
                                {["V", "I", "H", "A", "V", "\u00A0"].map((char, i) => (
                                    <motion.span
                                        key={i}
                                        variants={{
                                            hidden: { y: 100, opacity: 0 },
                                            visible: { y: 0, opacity: 1, transition: { duration: 1, ease: [0.22, 1, 0.36, 1] } }
                                        }}
                                        style={{
                                            WebkitTextStroke: "1px rgba(255,255,255,0.2)",
                                            color: counter === 100 ? "white" : "transparent",
                                            transition: "color 0.5s ease"
                                        }}
                                    >
                                        {char}
                                    </motion.span>
                                ))}
                                <span className="w-[1vw] md:w-[2vw]"></span> {/* Spacer */}
                                {["G", "R", "O", "U", "P"].map((char, i) => (
                                    <motion.span
                                        key={`group-${i}`}
                                        variants={{
                                            hidden: { y: 100, opacity: 0 },
                                            visible: { y: 0, opacity: 1, transition: { duration: 1, ease: [0.22, 1, 0.36, 1] } }
                                        }}
                                        style={{
                                            WebkitTextStroke: "1px rgba(255,255,255,0.2)",
                                            color: counter === 100 ? "white" : "transparent",
                                            transition: "color 0.5s ease"
                                        }}
                                    >
                                        {char}
                                    </motion.span>
                                ))}
                            </motion.div>
                        </div>

                        {/* Secondary Text */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="absolute bottom-28 md:bottom-10 left-6 md:left-20 text-[10px] md:text-xs uppercase tracking-[0.3em] text-gold-400 text-center md:text-left w-full md:w-auto"
                        >
                            Redefining Luxury Real Estate
                        </motion.div>

                        {/* Giant Counter - Bottom Right */}
                        <motion.div
                            className="absolute bottom-6 right-6 md:bottom-10 md:right-20 text-[5rem] md:text-[12rem] font-serif leading-none opacity-20 tabular-nums"
                        >
                            {counter}%
                        </motion.div>

                        {/* Branding Top Center */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8 }}
                            className="absolute top-10 text-[10px] uppercase tracking-[0.5em] text-white/40"
                        >
                            Est. 2025
                        </motion.div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
