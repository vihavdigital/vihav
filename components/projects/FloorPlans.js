"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, Maximize2, X, ZoomIn } from "lucide-react";
import Image from "next/image";

export default function FloorPlans({ plans }) {
    const [activeTab, setActiveTab] = useState(0);
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);

    if (!plans || plans.length === 0) return null;

    const activePlan = plans[activeTab];

    return (
        <section className="bg-white" id="floor-plans">
            <div className="container mx-auto px-6 md:px-12">
                <div className="flex flex-col lg:flex-row gap-4 lg:gap-12 items-start">
                    {/* Left: Navigation Tabs */}
                    <div className="w-full lg:w-1/3 space-y-4">
                        <div className="bg-secondary/30 p-4 md:p-8 rounded-2xl border border-border/50">
                            <h3 className="text-xl font-serif text-luxury-black mb-4 md:mb-6">Select Unit Type</h3>

                            {/* Mobile: Grid Layout (All Buttons Visible) */}
                            <div className="grid grid-cols-2 gap-3 lg:hidden pb-4">
                                {plans.map((plan, index) => (
                                    <button
                                        key={plan.id}
                                        onClick={() => setActiveTab(index)}
                                        className={`flex flex-col items-start p-4 rounded-xl transition-all duration-300 border relative ${activeTab === index
                                            ? "bg-luxury-black text-white border-luxury-black shadow-lg transform scale-[1.02]"
                                            : "bg-white text-muted-foreground border-border shadow-sm hover:border-gold-400/50"
                                            }`}
                                    >
                                        <span className={`text-[10px] uppercase tracking-wider mb-1 font-bold ${activeTab === index ? "text-gold-400" : "text-muted-foreground"}`}>
                                            {plan.type}
                                        </span>
                                        <span className="font-serif text-sm leading-tight text-left line-clamp-2">{plan.title}</span>
                                        {activeTab === index && (
                                            <motion.div
                                                layoutId="activeTabIndicator"
                                                className="absolute bottom-2 right-2 w-1.5 h-1.5 rounded-full bg-gold-400"
                                            />
                                        )}
                                    </button>
                                ))}
                            </div>

                            {/* Desktop: Vertical List */}
                            <div className="hidden lg:flex flex-col gap-3">
                                {plans.map((plan, index) => (
                                    <button
                                        key={plan.id}
                                        onClick={() => setActiveTab(index)}
                                        className={`w-full text-left p-4 rounded-xl transition-all duration-300 flex justify-between items-center group ${activeTab === index
                                            ? "bg-gold-400 text-white shadow-lg shadow-gold-400/20"
                                            : "bg-white hover:bg-white/80 text-muted-foreground hover:text-luxury-black border border-transparent hover:border-gold-400/30"
                                            }`}
                                    >
                                        <div>
                                            <span className={`block text-xs uppercase tracking-wider mb-1 ${activeTab === index ? "text-white/80" : "text-muted-foreground/70 group-hover:text-gold-400"}`}>
                                                {plan.type}
                                            </span>
                                            <span className="font-serif text-lg">{plan.title}</span>
                                        </div>
                                        {activeTab === index && (
                                            <motion.div layoutId="active-dot" className="w-2 h-2 bg-white rounded-full" />
                                        )}
                                    </button>
                                ))}
                            </div>

                            <button
                                className="w-full mt-6 hidden lg:flex items-center justify-center gap-2 px-6 py-4 bg-luxury-black text-white text-xs uppercase tracking-widest rounded-xl hover:bg-gold-400 hover:text-black transition-all duration-300 shadow-md hover:shadow-lg group"
                                onClick={() => window.open(activePlan.image, '_blank')}
                            >
                                <Download size={16} className="group-hover:animate-bounce" />
                                Download Layout
                            </button>
                        </div>

                    </div>

                    {/* Right: Plan Display */}
                    <div className="w-full lg:w-2/3">
                        <motion.div
                            key={activePlan.id}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            className="bg-white border border-border p-2 md:p-6 rounded-2xl relative group cursor-zoom-in shadow-sm hover:shadow-xl transition-shadow duration-500"
                            onClick={() => setIsLightboxOpen(true)}
                        >
                            <div className="relative aspect-[4/3] md:aspect-video w-full bg-secondary/10 rounded-lg overflow-hidden">
                                <Image
                                    src={activePlan.image}
                                    alt={activePlan.title}
                                    fill
                                    className="object-contain p-2 group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300 flex items-center justify-center">
                                    <div className="bg-white/90 backdrop-blur-sm p-4 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 shadow-lg">
                                        <Maximize2 className="text-luxury-black w-6 h-6" />
                                    </div>
                                </div>
                            </div>
                            <p className="text-center text-xs text-muted-foreground uppercase tracking-widest mt-6">Click to Expand</p>
                        </motion.div>

                        {/* Mobile Download Button */}
                        <button
                            className="w-full mt-4 flex lg:hidden items-center justify-center gap-2 px-6 py-4 bg-luxury-black text-white text-xs uppercase tracking-widest rounded-xl hover:bg-gold-400 hover:text-black transition-all duration-300 shadow-md group"
                            onClick={() => window.open(activePlan.image, '_blank')}
                        >
                            <Download size={16} className="group-hover:animate-bounce" />
                            Download Layout
                        </button>
                    </div>
                </div>
            </div>


            {/* Lightbox Overlay */}
            <AnimatePresence>
                {isLightboxOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-8"
                        onClick={() => setIsLightboxOpen(false)}
                    >
                        {/* Close Button - Fixed to Viewport */}
                        <button
                            className="fixed top-6 right-6 text-white/50 hover:text-white transition-colors z-[120] p-2 bg-black/20 rounded-full backdrop-blur-md"
                            onClick={(e) => { e.stopPropagation(); setIsLightboxOpen(false); }}
                        >
                            <X size={24} />
                        </button>

                        <motion.div
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.95, opacity: 0, y: 100 }}
                            drag="y"
                            dragConstraints={{ top: 0, bottom: 0 }}
                            dragElastic={0.7}
                            onDragEnd={(e, { offset, velocity }) => {
                                if (offset.y > 100 || velocity.y > 200) {
                                    setIsLightboxOpen(false);
                                }
                            }}
                            className="relative w-full h-full max-w-6xl max-h-[90vh] flex items-center justify-center"
                        >
                            <div className="relative w-full h-full flex items-center justify-center">
                                <Image
                                    src={activePlan.image}
                                    alt={activePlan.title}
                                    fill
                                    className="object-contain pointer-events-auto select-none"
                                    onClick={(e) => e.stopPropagation()}
                                    draggable={false}
                                />
                            </div>
                        </motion.div>

                        {/* Hints */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5, duration: 1 }}
                            className="fixed bottom-6 left-0 right-0 text-center pointer-events-none"
                        >
                            <span className="text-white/30 text-[10px] uppercase tracking-widest">Swipe down to close</span>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section >
    );
}
