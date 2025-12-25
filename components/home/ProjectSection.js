"use client";

import { motion } from "framer-motion";
import ProjectCard from "@/components/projects/ProjectCard";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

export default function ProjectSection({ title, subtitle, projects, align = "left" }) {
    return (
        <section className="py-24 md:py-32 border-b border-white/5 bg-luxury-black">
            <div className="container mx-auto px-6">

                {/* Header */}
                <div className={`flex flex-col md:flex-row justify-between items-end mb-16 ${align === "right" ? "md:flex-row-reverse" : ""}`}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className={`text-${align === "right" ? "right" : "left"} mb-8 md:mb-0`}
                    >
                        <span className="text-gold-400 uppercase tracking-[0.25em] text-xs font-bold mb-4 block">{subtitle}</span>
                        <h2 className="font-serif text-4xl md:text-5xl text-white">{title}</h2>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: align === "right" ? -20 : 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <Button variant="outline" className="group text-white border-white/20 hover:bg-gold-400 hover:border-gold-400 hover:text-black transition-all">
                            View All <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </motion.div>
                </div>

                {/* Horizontal Scroll Layout */}
                <div className="flex overflow-x-auto gap-8 pb-12 -mx-6 px-6 md:px-0 md:mx-0 snap-x snap-mandatory scrollbar-hide">
                    {projects.map((project, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1, duration: 0.8, ease: "easeOut" }}
                            className="flex-shrink-0 w-[85vw] md:w-[40vw] lg:w-[30vw] snap-center"
                        >
                            <ProjectCard project={project} />
                        </motion.div>
                    ))}

                    {/* View All Card (End of List) */}
                    <div className="flex-shrink-0 w-[40vw] md:w-[20vw] flex items-center justify-center snap-center">
                        <div className="flex flex-col items-center justify-center text-center opacity-50 hover:opacity-100 transition-opacity cursor-pointer group">
                            <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center mb-4 group-hover:border-gold-400 group-hover:text-gold-400 transition-colors">
                                <ArrowRight size={24} />
                            </div>
                            <span className="uppercase tracking-widest text-xs">View All Collection</span>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
