"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Sparkles, Gift } from "lucide-react";

// Falling Marigold Petal Component
const FallingPetal = () => {
    const [style, setStyle] = useState(null);

    useEffect(() => {
        const size = 3 + Math.random() * 5; // 3px to 8px (Smaller for mobile)
        const colors = ['#f97316', '#eab308', '#ef4444', '#fbbf24']; // Orange, Yellow, Red, Amber

        setStyle({
            xStart: Math.random() * 100,
            xEnd: Math.random() * 100 + (Math.random() * 20 - 10), // Slight drift
            duration: 8 + Math.random() * 12, // Slow fall
            delay: -Math.random() * 20,
            size: size,
            color: colors[Math.floor(Math.random() * colors.length)],
            rotation: Math.random() * 360
        });
    }, []);

    if (!style) return null;

    return (
        <motion.div
            initial={{ y: "-10vh", x: `${style.xStart}vw`, rotate: style.rotation, opacity: 0 }}
            animate={{
                y: "110vh",
                x: `${style.xEnd}vw`,
                rotate: style.rotation + 360,
                opacity: [0, 0.8, 0.8, 0]
            }}
            transition={{
                duration: style.duration,
                repeat: Infinity,
                delay: style.delay,
                ease: "linear"
            }}
            className="fixed z-[40] pointer-events-none"
            style={{
                width: style.size,
                height: style.size,
                backgroundColor: style.color,
                borderRadius: '50% 0 50% 0', // Petal shape
                boxShadow: `0 0 5px rgba(0,0,0,0.1)`
            }}
        />
    );
};

export default function DealUtsavOverlay() {
    const [isVisible, setIsVisible] = useState(true);

    if (!isVisible) return null;

    return (
        <>
            {/* 1. Falling Marigold Petals (Smaller & Less Intrusive) */}
            <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
                {[...Array(24)].map((_, i) => (
                    <FallingPetal key={i} />
                ))}
            </div>

            {/* 2. Sticky Festive Corner Frame (Global - Shorter Arms) */}
            <div className="fixed inset-0 pointer-events-none z-[100]">
                {/* Top Left */}
                <svg className="absolute top-4 left-4 md:top-8 md:left-8 w-20 h-20 md:w-32 md:h-32 text-amber-300/40" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1">
                    <path d="M5,95 v-35 q0,-30 30,-30 h35" />
                    <path d="M15,95 v-25 q0,-20 20,-20 h25" opacity="0.6" />
                    <circle cx="5" cy="95" r="2" fill="currentColor" />
                    <circle cx="95" cy="5" r="2" fill="currentColor" />
                </svg>
                {/* Top Right */}
                <svg className="absolute top-4 right-4 md:top-8 md:right-8 w-20 h-20 md:w-32 md:h-32 text-amber-300/40 transform scale-x-[-1]" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1">
                    <path d="M5,95 v-35 q0,-30 30,-30 h35" />
                    <path d="M15,95 v-25 q0,-20 20,-20 h25" opacity="0.6" />
                    <circle cx="5" cy="95" r="2" fill="currentColor" />
                    <circle cx="95" cy="5" r="2" fill="currentColor" />
                </svg>
                {/* Bottom Left */}
                <svg className="absolute bottom-4 left-4 md:bottom-8 md:left-8 w-20 h-20 md:w-32 md:h-32 text-amber-300/40 transform scale-y-[-1]" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1">
                    <path d="M5,95 v-35 q0,-30 30,-30 h35" />
                    <path d="M15,95 v-25 q0,-20 20,-20 h25" opacity="0.6" />
                    <circle cx="5" cy="95" r="2" fill="currentColor" />
                    <circle cx="95" cy="5" r="2" fill="currentColor" />
                </svg>
                {/* Bottom Right */}
                <svg className="absolute bottom-4 right-4 md:bottom-8 md:right-8 w-20 h-20 md:w-32 md:h-32 text-amber-300/40 transform scale-[-1]" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1">
                    <path d="M5,95 v-35 q0,-30 30,-30 h35" />
                    <path d="M15,95 v-25 q0,-20 20,-20 h25" opacity="0.6" />
                    <circle cx="5" cy="95" r="2" fill="currentColor" />
                    <circle cx="95" cy="5" r="2" fill="currentColor" />
                </svg>
            </div>

            {/* 3. Magical Badge (Bottom Center - Scaled Down on Mobile) */}
            <motion.div
                initial={{ opacity: 0, y: 20, x: "-50%" }}
                animate={{ opacity: 1, y: 0, x: "-50%" }}
                transition={{ delay: 1 }}
                className="fixed bottom-6 md:bottom-10 left-1/2 z-[120] scale-90 md:scale-100 origin-bottom"
            >
                <div className="group cursor-pointer">
                    <div className="relative px-6 py-2.5 rounded-full bg-black/40 backdrop-blur-md border border-orange-500/30 hover:border-orange-400/60 transition-colors shadow-[0_0_15px_rgba(249,115,22,0.2)] overflow-hidden">
                        {/* Shimmer on Badge */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-400/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>

                        <div className="flex items-center gap-3 relative z-10">
                            <div className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse shadow-[0_0_8px_rgba(249,115,22,0.8)]"></div>
                            <span className="text-[11px] uppercase tracking-[0.25em] text-orange-100 font-medium">
                                Deal Utsav • Live
                            </span>
                        </div>
                    </div>
                </div>
            </motion.div>
        </>
    );
}
