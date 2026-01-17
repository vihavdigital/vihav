"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function CollapsibleSection({ title, children, defaultOpen = false, className = "", rightContent }) {
    const [isOpen, setIsOpen] = useState(defaultOpen);

    return (
        <div className={`border-b border-border/50 ${className}`}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex justify-between items-center py-6 group text-left outline-none"
            >
                <div className="flex items-center gap-4 flex-1">
                    <h3 className="font-serif text-2xl text-foreground group-hover:text-gold-400 transition-colors">
                        {title}
                    </h3>
                    {/* Render rightContent only when open, if requested, or always? 
                        User: "appear when opened and goes when closed" 
                    */}
                    <div onClick={(e) => e.stopPropagation()}>
                        <AnimatePresence>
                            {isOpen && rightContent && (
                                <motion.div
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -10 }}
                                    className="text-lg md:text-xl font-serif"
                                >
                                    {rightContent}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>

                <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-muted-foreground group-hover:text-gold-400 transition-colors"
                >
                    <ChevronDown size={24} />
                </motion.div>
            </button>

            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                        className="overflow-hidden"
                    >
                        <div className="pb-8 pt-0">
                            {children}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
