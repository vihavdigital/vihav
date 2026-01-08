'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader() {
    const [isLoading, setIsLoading] = useState(true);
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        // Check session storage - DISABLED FOR TESTING/VISIBILITY
        // const hasSeen = sessionStorage.getItem("hasSeenPreloader");
        // if (hasSeen) {
        //     setIsLoading(false);
        //     return;
        // }

        // Prevent scrolling
        document.body.style.overflow = 'hidden';

        // Counter Animation
        let current = 0;
        const interval = setInterval(() => {
            current += Math.floor(Math.random() * 3) + 1; // Smooth increment
            if (current > 100) current = 100;
            setCounter(current);

            if (current === 100) {
                clearInterval(interval);
                setTimeout(() => {
                    setIsLoading(false);
                    sessionStorage.setItem("hasSeenPreloader", "true");
                    document.body.style.overflow = 'unset';
                }, 800);
            }
        }, 40); // Slower counter (40ms) for longer animation display

        return () => {
            clearInterval(interval);
            document.body.style.overflow = 'unset';
        };
    }, []);

    // Split background into 5 columns for the shutter effect
    const columns = [0, 1, 2, 3, 4];

    return (
        <AnimatePresence mode="wait">
            {isLoading && (
                <div className="fixed inset-0 z-[9999] flex items-center justify-center">
                    {/* 1. Shutter Columns (Background) - White Theme */}
                    <div className="absolute inset-0 flex pointer-events-none">
                        {columns.map((col) => (
                            <motion.div
                                key={col}
                                initial={{ y: 0 }}
                                exit={{
                                    y: "-100%",
                                    transition: {
                                        duration: 1.2,
                                        ease: [0.83, 0, 0.17, 1], // Even smoother custom bezier
                                        delay: col * 0.08
                                    }
                                }}
                                className="h-full w-full bg-[#ffffff] relative border-r border-black/5 last:border-none"
                            />
                        ))}
                    </div>

                    {/* Skyline Animation - "Slow Vertical Build" */}
                    <div className="absolute bottom-0 left-0 w-full h-[40vh] md:h-[50vh] flex items-end justify-center pointer-events-none overflow-hidden z-0">
                        <motion.img
                            src="/images/new_white_skyline.png"
                            alt="Skyline"
                            className="w-full h-full object-contain object-bottom opacity-40 invert"
                            initial={{ clipPath: "inset(100% 0 0 0)" }}
                            animate={{
                                clipPath: "inset(0% 0 0 0)",
                                transition: {
                                    duration: 3.5,
                                    ease: [0.22, 1, 0.36, 1],
                                    delay: 0.2
                                }
                            }}
                            exit={{ opacity: 0, scale: 1.05, transition: { duration: 0.8 } }}
                        />
                    </div>

                    {/* 2. Content Overlay */}
                    <motion.div
                        className="relative z-10 flex flex-col items-center justify-center pointer-events-none"
                        exit={{
                            opacity: 0,
                            scale: 0.95,
                            transition: { duration: 0.8, ease: "easeInOut", delay: 0.1 }
                        }}
                    >
                        {/* Logo Animation */}
                        <div className="relative mb-12">
                            <motion.img
                                src="/images/project-images/project-logos/vihav-group-logo.svg"
                                alt="Vihav Group"
                                className="w-48 md:w-64 h-auto object-contain"
                                animate={{
                                    scale: [0.98, 1.02, 0.98]
                                }}
                                transition={{
                                    duration: 4, // Slower breathing
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                            />
                            {/* Gold Glow behind logo (Subtle on white) */}
                            <div className="absolute inset-0 bg-gold-400/10 blur-[60px] rounded-full -z-10" />
                        </div>

                        {/* Progress Bar Container */}
                        <div className="w-64 h-[2px] bg-black/5 rounded-full overflow-hidden relative">
                            <motion.div
                                className="absolute left-0 top-0 h-full bg-gradient-to-r from-gold-600 via-gold-300 to-gold-600"
                                initial={{ width: "0%" }}
                                animate={{ width: `${counter}%` }}
                                transition={{ ease: "linear", duration: 0.1 }}
                            />
                        </div>

                        {/* Tagline */}
                        <motion.p
                            className="mt-8 text-black/40 uppercase tracking-[0.5em] text-[10px]"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                        >
                            Defining Luxury
                        </motion.p>
                    </motion.div>

                    {/* 3. Percentage Indicator (Bottom Right) */}
                    <motion.div
                        className="fixed bottom-8 right-8 z-20 pointer-events-none"
                        exit={{ opacity: 0, x: 50, transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
                    >
                        <span className="text-8xl md:text-[10rem] font-serif font-bold text-black/5 tracking-tighter tabular-nums leading-none block">
                            {counter}%
                        </span>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
