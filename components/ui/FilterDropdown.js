"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const FilterDropdown = ({ label, value, options, onChange, className = "" }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={`relative ${className}`}>
            {label && <span className="text-[10px] uppercase tracking-widest text-muted-foreground mb-2 block">{label}</span>}
            <button
                onClick={() => setIsOpen(!isOpen)}
                onBlur={() => setTimeout(() => setIsOpen(false), 200)}
                className="w-full flex items-center justify-between px-4 py-3 bg-secondary border border-border rounded-lg text-sm text-foreground hover:border-gold-400 transition-colors"
            >
                <span className="truncate mr-2">{value}</span>
                <ChevronDown size={16} className={`text-gold-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        border="true"
                        className="absolute top-full left-0 right-0 mt-2 bg-neutral-900 border border-gold-400/30 rounded-lg shadow-2xl z-[60] overflow-hidden max-h-80 overflow-y-auto scrollbar-hide"
                    >
                        {options.map((option) => (
                            <button
                                key={option}
                                onClick={() => { onChange(option); setIsOpen(false); }}
                                className={`w-full text-left px-4 py-3 text-sm hover:bg-gold-400 hover:text-black transition-colors border-b border-white/5 last:border-0 ${value === option ? "text-gold-400 bg-white/5 font-bold" : "text-gray-300"
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
