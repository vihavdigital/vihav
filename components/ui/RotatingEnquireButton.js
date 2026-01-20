'use client';

import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function RotatingEnquireButton({ onClick, theme = 'luxury', show = false }) {
    // Determine colors based on theme, default to luxury gold/black
    const isDark = theme.includes('black') || theme.includes('dark');

    // Animation variants
    const containerVariants = {
        hidden: { scale: 0, opacity: 0, rotate: -45 },
        visible: {
            scale: 1,
            opacity: 1,
            rotate: 0,
            transition: { type: "spring", stiffness: 200, damping: 20 }
        },
        exit: { scale: 0, opacity: 0, transition: { duration: 0.2 } }
    };

    return (
        <AnimatePresence>
            {show && (
                <motion.button
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    onClick={onClick}
                    className="fixed bottom-8 right-8 z-50 group cursor-pointer outline-none"
                    aria-label="Enquire Now"
                >
                    {/* Glassmorphic Background Circle - Dark for Contrast */}
                    <div className="absolute inset-0 rounded-full bg-neutral-900/0 group-hover:bg-neutral-900/90 group-hover:backdrop-blur-md border border-transparent group-hover:border-gold-400/30 shadow-none group-hover:shadow-xl scale-90 group-hover:scale-100 transition-all duration-500" />

                    {/* Rotating Text Ring */}
                    <div className="relative w-24 h-24 flex items-center justify-center">
                        <motion.div
                            className="absolute inset-0"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                        >
                            <svg viewBox="0 0 100 100" width="100%" height="100%" className="fill-current text-gold-400 group-hover:text-white transition-colors duration-300 drop-shadow-sm">
                                <path id="textPath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="transparent" />
                                <text fontSize="12.5" fontWeight="bold" letterSpacing="1.5px">
                                    <textPath href="#textPath" startOffset="0%">
                                        • ENQUIRE NOW • BOOK VISIT
                                    </textPath>
                                </text>
                            </svg>
                        </motion.div>

                        {/* Center Icon Circle */}
                        <div className="absolute inset-0 m-auto w-10 h-10 rounded-full bg-gold-400 text-black flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-white group-hover:text-gold-500 transition-all duration-300">
                            <ArrowUpRight size={20} className="group-hover:rotate-45 transition-transform duration-300" />
                        </div>
                    </div>
                </motion.button>
            )}
        </AnimatePresence>
    );
}
