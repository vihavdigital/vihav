"use client";

import { motion } from "framer-motion";

export default function Template({ children }) {
    // Columns for the shutter effect
    const columns = 5;

    return (
        <>
            {/* Transition Overlay */}
            <div className="fixed inset-0 z-[100] pointer-events-none flex">
                {[...Array(columns)].map((_, i) => (
                    <motion.div
                        key={i}
                        initial={{ y: "0%" }}
                        animate={{ y: "-100%" }}
                        transition={{
                            duration: 1.2,
                            ease: [0.25, 1, 0.5, 1], // Soft start, very smooth deceleration
                            delay: i * 0.04 // Gentler stagger
                        }}
                        className="w-1/5 h-full bg-luxury-black border-r border-white/5 relative"
                    >
                        {/* Gold accent line at the bottom of the shutter */}
                        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gold-400" />
                    </motion.div>
                ))}
            </div>

            {/* Page Content */}
            {children}
        </>
    );
}
