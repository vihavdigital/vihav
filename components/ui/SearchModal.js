"use client";

import { useState, useEffect, useMemo, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Search, X, MapPin, Building, ArrowRight, CornerDownLeft } from "lucide-react";
import { PROJECTS } from "@/data/projects";
import { useRouter } from "next/navigation";

export default function SearchModal({ isOpen, onClose }) {
    const [query, setQuery] = useState("");
    const [selectedIndex, setSelectedIndex] = useState(0);
    const inputRef = useRef(null);
    const listRef = useRef(null);
    const router = useRouter();

    // Reset query when opened
    useEffect(() => {
        if (isOpen) {
            setQuery("");
            setSelectedIndex(0);
            // Focus input after animation
            setTimeout(() => inputRef.current?.focus(), 100);
            // Prevent body scroll
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    // Search Logic
    const filteredProjects = useMemo(() => {
        if (!query.trim()) return [];

        const lowerQuery = query.toLowerCase();
        return PROJECTS.filter(p => {
            if (!p.title) return false;
            return (
                p.title.toLowerCase().includes(lowerQuery) ||
                p.location?.toLowerCase().includes(lowerQuery) ||
                p.category?.toLowerCase().includes(lowerQuery) ||
                p.type?.toLowerCase().includes(lowerQuery)
            );
        }).slice(0, 5); // Limit to 5 results for cleaner UI
    }, [query]);

    // Keyboard Navigation
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (!isOpen) return;

            if (e.key === "Escape") {
                onClose();
            } else if (e.key === "ArrowDown") {
                e.preventDefault();
                setSelectedIndex(prev => (prev < filteredProjects.length - 1 ? prev + 1 : prev));
            } else if (e.key === "ArrowUp") {
                e.preventDefault();
                setSelectedIndex(prev => (prev > 0 ? prev - 1 : prev));
            } else if (e.key === "Enter") {
                e.preventDefault();
                if (filteredProjects.length > 0) {
                    const project = filteredProjects[selectedIndex];
                    handleSelectProject(project);
                }
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [isOpen, filteredProjects, selectedIndex]);

    const handleSelectProject = (project) => {
        router.push(project.link || `/projects/${project.slug}`);
        onClose();
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-start justify-center pt-[10vh] px-4">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                    />

                    {/* Modal Container */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: -20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: -20 }}
                        transition={{ type: "spring", duration: 0.5, bounce: 0.3 }}
                        className="relative w-full max-w-2xl bg-background rounded-2xl shadow-2xl overflow-hidden border border-border flex flex-col"
                    >
                        {/* Header / Input */}
                        <div className="flex items-center px-6 py-4 border-b border-white/10 gap-4">
                            <Search className="text-muted-foreground w-6 h-6" />
                            <input
                                ref={inputRef}
                                type="text"
                                placeholder="Search projects by name, location, or type..."
                                value={query}
                                onChange={(e) => {
                                    setQuery(e.target.value);
                                    setSelectedIndex(0);
                                }}
                                className="flex-1 bg-transparent border-none outline-none text-lg md:text-xl text-foreground placeholder:text-muted-foreground/50 h-10"
                            />
                            <button
                                onClick={onClose}
                                className="p-2 rounded-full hover:bg-secondary text-muted-foreground hover:text-foreground transition-colors"
                            >
                                <span className="sr-only">Close</span>
                                <div className="hidden md:flex items-center gap-1 text-[10px] uppercase font-bold tracking-widest bg-secondary/50 px-2 py-1 rounded">
                                    ESC
                                </div>
                                <X className="md:hidden w-5 h-5" />
                            </button>
                        </div>

                        {/* Results or Empty State */}
                        <div className="max-h-[60vh] overflow-y-auto p-2">
                            {query.trim() === "" ? (
                                <div className="py-12 px-6 text-center text-muted-foreground">
                                    <p className="text-sm">Type to start searching...</p>
                                    <div className="mt-8 flex flex-wrap justify-center gap-2">
                                        <span className="text-[10px] uppercase tracking-widest opacity-50 mb-2 w-full">Quick Searches</span>
                                        {["Residential", "Commercial", "Penthouse", "Bhayli"].map(tag => (
                                            <button
                                                key={tag}
                                                onClick={() => setQuery(tag)}
                                                className="px-3 py-1.5 rounded-full bg-secondary hover:bg-gold-400/10 hover:text-gold-400 text-xs transition-colors border border-border/50"
                                            >
                                                {tag}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            ) : filteredProjects.length > 0 ? (
                                <ul ref={listRef} className="space-y-1">
                                    {filteredProjects.map((project, index) => (
                                        <li key={project.id}>
                                            <button
                                                onClick={() => handleSelectProject(project)}
                                                onMouseEnter={() => setSelectedIndex(index)}
                                                className={`w-full text-left flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-200 group ${index === selectedIndex
                                                        ? "bg-gold-400/10 border border-gold-400/20 shadow-sm"
                                                        : "hover:bg-secondary border border-transparent"
                                                    }`}
                                            >
                                                <div className="flex items-center gap-4 overflow-hidden">
                                                    {/* Thumbnail (if available) or Icon */}
                                                    <div className={`w-12 h-12 rounded-lg flex-shrink-0 bg-cover bg-center ${index === selectedIndex ? 'ring-2 ring-gold-400/30' : ''}`}
                                                        style={{ backgroundImage: `url(${project.heroImage || project.galleryImages?.[0]})` }}
                                                    >
                                                        {!project.heroImage && !project.galleryImages?.[0] && (
                                                            <div className="w-full h-full bg-secondary flex items-center justify-center">
                                                                <Building className="w-5 h-5 text-muted-foreground" />
                                                            </div>
                                                        )}
                                                    </div>

                                                    <div className="min-w-0 flex-1">
                                                        <div className="flex items-center gap-2 mb-0.5">
                                                            <h4 className={`text-base font-medium truncate ${index === selectedIndex ? "text-gold-400" : "text-foreground"}`}>
                                                                {project.title}
                                                            </h4>
                                                            {project.status === "Ongoing" && (
                                                                <span className="text-[9px] bg-green-500/20 text-green-500 px-1.5 py-0.5 rounded uppercase font-bold tracking-wider">
                                                                    Active
                                                                </span>
                                                            )}
                                                        </div>
                                                        <div className="flex items-center gap-3 text-xs text-muted-foreground">
                                                            <span className="flex items-center gap-1">
                                                                <MapPin size={10} />
                                                                {project.location}
                                                            </span>
                                                            <span className="w-1 h-1 rounded-full bg-border" />
                                                            <span className="truncate max-w-[150px]">{project.category}</span>
                                                        </div>
                                                    </div>
                                                </div>

                                                <ArrowRight className={`w-4 h-4 transition-transform duration-300 ${index === selectedIndex ? "text-gold-400 -rotate-45" : "text-muted-foreground/30"}`} />
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                <div className="py-12 text-center text-muted-foreground">
                                    <Building className="w-12 h-12 mx-auto mb-4 opacity-20" />
                                    <p>No projects found for "<span className="text-foreground">{query}</span>"</p>
                                </div>
                            )}
                        </div>

                        {/* Footer (Desktop hints) */}
                        {filteredProjects.length > 0 && query.trim() !== "" && (
                            <div className="hidden md:flex border-t border-white/5 py-2 px-4 text-[10px] text-muted-foreground justify-end gap-4 uppercase tracking-widest">
                                <span className="flex items-center gap-1"><span className="bg-white/10 px-1.5 rounded text-foreground">↑↓</span> to navigate</span>
                                <span className="flex items-center gap-1"><span className="bg-white/10 px-1.5 rounded text-foreground">↵</span> to select</span>
                                <span className="flex items-center gap-1"><span className="bg-white/10 px-1.5 rounded text-foreground">ESC</span> to close</span>
                            </div>
                        )}
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
