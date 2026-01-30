"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const FilterDropdown = ({ label, value, options, onChange, className = "", minimal = false, ...props }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={`relative ${className}`}>
            {/* Top Label (Desktop / Non-Minimal) */}
            {!minimal && label && <span className="text-[10px] uppercase tracking-widest text-muted-foreground mb-2 block">{label}</span>}

            <button
                onClick={() => setIsOpen(!isOpen)}
                onBlur={() => setTimeout(() => setIsOpen(false), 200)}
                className={`w-full flex items-center justify-between bg-background border border-gold-400/50 rounded-lg text-sm text-foreground hover:border-gold-400 transition-colors ${minimal ? 'px-3 py-2' : 'px-4 py-3'}`}
            >
                <span className="truncate mr-2 font-medium">
                    {/* Logic: If value is 'All', show Label. Else show Value. */}
                    {minimal ? (value === "All" ? label : value) : (
                        <span className="flex items-center">
                            {label && <span className="text-muted-foreground mr-1.5 font-normal">{label}:</span>}
                            <span>{value}</span>
                        </span>
                    )}
                </span>
                <ChevronDown size={14} className={`text-gold-400 opacity-70 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                        className="absolute top-full left-0 right-0 mt-1 bg-background border border-border rounded-lg shadow-xl z-[60] overflow-hidden max-h-60 overflow-y-auto scrollbar-hide"
                    >
                        {/* Dropdown Heading */}
                        {minimal && props.heading && (
                            <div className="px-4 py-2 text-[10px] uppercase tracking-widest text-muted-foreground bg-secondary/30 border-b border-border/50 sticky top-0 backdrop-blur-sm">
                                {props.heading}
                            </div>
                        )}

                        {options.map((option) => (
                            <button
                                key={option}
                                onClick={() => { onChange(option); setIsOpen(false); }}
                                className={`w-full text-left px-4 py-2.5 text-xs uppercase tracking-widest hover:bg-gold-400 hover:text-black transition-all border-b border-border/50 last:border-0 ${value === option ? "text-gold-400 bg-secondary/50 font-bold" : "text-muted-foreground"
                                    }`}
                            >
                                {option}
                            </button>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default FilterDropdown;
