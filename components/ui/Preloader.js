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
        document.body.style.overflow = 'hidden';

        // Counter Animation with improved easing
        let current = 0;
        const interval = setInterval(() => {
            current += Math.floor(Math.random() * 8) + 1; // Slower, smoother increment
            if (current > 100) current = 100;
            setCounter(current);

            if (current === 100) {
                clearInterval(interval);
                // Exit trigger after completion
                setTimeout(() => {
                    setIsLoading(false);
                    sessionStorage.setItem("hasSeenPreloader", "true");
                    document.body.style.overflow = 'unset';
                }, 1000);
            }
        }, 40);

        return () => {
            clearInterval(interval);
            document.body.style.overflow = 'unset';
        };
    }, []);

    // Split background into 5 columns
    const columns = [0, 1, 2, 3, 4];

    return (
        <AnimatePresence mode="wait">
            {isLoading && (
                <div className="fixed inset-0 z-[9999] flex items-center justify-center">
                    {/* 1. Shutter Columns (Background) */}
                    <div className="absolute inset-0 flex pointer-events-none">
                        {columns.map((col) => (
                            <motion.div
                                key={col}
                                initial={{ y: 0 }}
                                exit={{
                                    y: "-100%",
                                    transition: {
                                        duration: 0.8,
                                        ease: [0.76, 0, 0.24, 1],
                                        delay: col * 0.1
                                    }
                                }}
                                className="h-full w-full bg-[#ffffff] relative border-r border-black/5 last:border-none"
                            />
                        ))}
                    </div>

                    {/* 2. Content Overlay */}
                    <motion.div
                        className="relative z-10 flex flex-col items-center justify-center pointer-events-none"
                        exit={{
                            opacity: 0,
                            scale: 0.95,
                            transition: { duration: 0.5, ease: "easeInOut", delay: 0.2 }
                        }}
                    >
                        {/* Logo Construction Effect */}
                        <div className="relative w-48 md:w-64 h-auto aspect-[3/2] flex items-center justify-center overflow-hidden">
                            {/* Base Faded Logo */}
                            <img
                                src="/vihav-logo-new.png"
                                alt="Vihav Group"
                                className="absolute inset-0 w-full h-full object-contain opacity-20 filter grayscale"
                            />

                            {/* Revealing Logo (Building Effect) */}
                            <motion.div
                                className="absolute inset-0 overflow-hidden"
                                initial={{ height: "0%" }}
                                animate={{ height: `${counter}%` }}
                                transition={{ type: "tween", ease: "linear", duration: 0.1 }} // Immediate response to counter
                            >
                                <img
                                    src="/vihav-logo-new.png"
                                    alt="Vihav Group"
                                    className="w-full h-full object-contain object-bottom absolute bottom-0"
                                />
                                {/* Shimmer Line */}
                                <div className="absolute top-0 left-0 w-full h-[2px] bg-gold-400 shadow-[0_0_15px_rgba(212,175,55,0.8)]"></div>
                            </motion.div>
                        </div>

                        {/* Text Below */}
                        <div className="mt-8 text-center space-y-2 overflow-hidden">
                            <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.2 }}
                                className="text-luxury-charcoal text-xs md:text-sm tracking-[0.4em] uppercase font-light"
                            >
                                Building Excellence
                            </motion.div>

                            {/* Progress Bar Line */}
                            <div className="w-32 h-[1px] bg-black/10 mx-auto mt-4 relative overflow-hidden">
                                <motion.div
                                    className="absolute left-0 top-0 h-full bg-gold-400"
                                    style={{ width: `${counter}%` }}
                                />
                            </div>
                        </div>

                        {/* Percentage */}
                        <motion.div
                            className="absolute -bottom-24 right-0 text-7xl md:text-9xl font-serif font-bold text-black/5 tabular-nums leading-none select-none"
                        >
                            {counter}%
                        </motion.div>

                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
