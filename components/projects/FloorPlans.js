"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, Maximize2, X, ZoomIn, FileText } from "lucide-react";
import Image from "next/image";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

export default function FloorPlans({ plans, onEnquire }) {
    const [activeTab, setActiveTab] = useState(0);
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);

    if (!plans || plans.length === 0) return null;

    const activePlan = plans[activeTab];

    return (
        <div className="w-full">
            <div className="container mx-auto px-6 md:px-12">
                <div className="flex flex-col lg:flex-row gap-4 lg:gap-12 items-start">
                    {/* Left: Navigation Tabs */}
                    <div className="w-full lg:w-1/3 space-y-4">
                        <div className="bg-secondary p-4 md:p-8 rounded-2xl border border-border">
                            <h3 className="text-xl font-serif text-luxury-black mb-4 md:mb-6">Select Unit Type</h3>

                            {/* Mobile: Grid Layout (All Buttons Visible) */}
                            <div className="grid grid-cols-2 gap-3 lg:hidden pb-4">
                                {plans.map((plan, index) => (
                                    <button
                                        key={plan.id}
                                        onClick={() => setActiveTab(index)}
                                        className={`flex flex-col items-center p-3 rounded-xl transition-all duration-200 border-2 relative justify-between ${plans.length % 2 !== 0 && index === plans.length - 1 ? 'col-span-2' : ''} ${activeTab === index
                                            ? "bg-gold-400 text-white border-gold-400 border-b-gold-600 border-b-4 translate-y-[1px]"
                                            : "bg-white text-foreground/80 border-border border-b-4 border-b-gray-200 hover:border-gold-400 hover:border-b-gold-400 active:border-b-0 active:translate-y-1"
                                            }`}
                                    >
                                        <div className="w-full text-center px-2">
                                            <span className={`text-[10px] uppercase tracking-wider mb-1 block font-bold ${activeTab === index ? "text-white" : "text-muted-foreground"}`}>
                                                {plan.type}
                                            </span>
                                            <span className="font-serif text-sm leading-tight text-center line-clamp-2 block">{plan.title}</span>
                                        </div>
                                        {activeTab === index && (
                                            <motion.div
                                                layoutId="activeTabIndicator"
                                                className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-white"
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
                                        className={`w-full text-left p-4 rounded-xl transition-all duration-200 flex justify-between items-center group border-2 ${activeTab === index
                                            ? "bg-gold-400 text-white border-gold-400 border-b-gold-600 border-b-4 shadow-lg translate-y-[1px]"
                                            : "bg-white hover:bg-white/90 text-foreground/70 hover:text-luxury-black border-border border-b-4 border-b-gray-200 hover:border-gold-400 hover:border-b-gold-400 active:border-b-0 active:translate-y-1"
                                            }`}
                                    >
                                        <div>
                                            <span className={`block text-xs uppercase tracking-wider mb-1 font-bold ${activeTab === index ? "text-white/90" : "text-muted-foreground/80 group-hover:text-gold-600"}`}>
                                                {plan.type}
                                            </span>
                                            <span className={`font-serif text-lg ${activeTab === index ? "font-medium" : ""}`}>{plan.title}</span>
                                        </div>
                                        {activeTab === index && (
                                            <motion.div layoutId="active-dot" className="w-2 h-2 bg-white rounded-full" />
                                        )}
                                    </button>
                                ))}
                            </div>



                            <button
                                className="w-full mt-3 hidden lg:flex items-center justify-center gap-2 px-6 py-4 bg-white border-2 border-luxury-black text-luxury-black text-xs uppercase tracking-widest rounded-xl hover:bg-luxury-black hover:text-white transition-all duration-300 shadow-sm hover:shadow-xl group font-bold"
                                onClick={onEnquire}
                            >
                                <FileText size={16} />
                                Download Brochure
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
                            className="bg-white border border-border p-2 md:p-6 rounded-2xl relative group cursor-zoom-in shadow-lg hover:shadow-2xl transition-all duration-500"
                            onClick={() => setIsLightboxOpen(true)}
                        >
                            <div className="relative aspect-[4/3] md:aspect-video w-full bg-neutral-50 rounded-lg overflow-hidden border border-border/30">
                                <Image
                                    src={activePlan.image}
                                    alt={activePlan.title}
                                    fill
                                    className="object-contain p-4 group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300 flex items-center justify-center">
                                    <div className="bg-white/90 backdrop-blur-sm p-4 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 shadow-xl border border-white/50">
                                        <Maximize2 className="text-gold-500 w-6 h-6" />
                                    </div>
                                </div>
                            </div>
                            <p className="text-center text-xs text-muted-foreground uppercase tracking-widest mt-6 font-medium group-hover:text-gold-500 transition-colors">Click to Expand</p>
                        </motion.div>

                        {/* Mobile Download Button */}


                        <button
                            className="w-full mt-3 flex lg:hidden items-center justify-center gap-2 px-6 py-4 bg-white border-2 border-luxury-black text-luxury-black text-xs uppercase tracking-widest rounded-xl hover:bg-luxury-black hover:text-white transition-all duration-300 shadow-sm group font-bold"
                            onClick={onEnquire}
                        >
                            <FileText size={16} />
                            Download Brochure
                        </button>
                    </div>
                </div>
            </div>


            {/* Lightbox Overlay */}
            <AnimatePresence>
                {isLightboxOpen && (
                    <LightboxOverlay
                        activePlan={activePlan}
                        onClose={() => setIsLightboxOpen(false)}
                    />
                )}
            </AnimatePresence>
        </div>
    );
}

// Separated Lightbox Component for Floor Plans to manage state better
function LightboxOverlay({ activePlan, onClose }) {
    const [isZoomed, setIsZoomed] = useState(false);

    // PREVENT BACKGROUND SCROLL
    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "auto";
        };
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-0 md:p-12 overflow-hidden"
            onClick={onClose}
        >
            {/* Close Button */}
            <button
                className="fixed top-6 right-6 text-white/50 hover:text-white transition-colors z-[120] p-2 bg-black/20 rounded-full backdrop-blur-md"
                onClick={(e) => { e.stopPropagation(); onClose(); }}
            >
                <X size={24} />
            </button>

            {/* Hint */}
            <div className="absolute bottom-4 left-0 right-0 text-center pointer-events-none z-50">
                <span className="text-white/30 text-[10px] uppercase tracking-widest">
                    {isZoomed ? "Double tap to exit zoom" : "Swipe down to close • Pinch to zoom"}
                </span>
            </div>

            <div className="w-full h-full flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
                <motion.div
                    className="w-full h-full flex items-center justify-center"
                    drag="y"
                    dragEnabled={!isZoomed}
                    dragConstraints={{ top: 0, bottom: 0 }}
                    dragElastic={0.7}
                    onDragEnd={(e, { offset, velocity }) => {
                        if (isZoomed) return;
                        if (offset.y > 100 || velocity.y > 200) {
                            onClose();
                        }
                    }}
                >
                    <TransformWrapper
                        initialScale={1}
                        minScale={1}
                        maxScale={4}
                        centerOnInit={true}
                        doubleClick={{ disabled: false, mode: "zoomIn" }}
                        panning={{ disabled: !isZoomed, velocityDisabled: false }}
                        onTransformed={(e) => {
                            const newZoom = e.state.scale > 1.01;
                            if (newZoom !== isZoomed) setIsZoomed(newZoom);
                        }}
                        alignmentAnimation={{ sizeX: 0, sizeY: 0 }}
                    >
                        {({ zoomIn, zoomOut, resetTransform }) => (
                            <TransformComponent
                                wrapperStyle={{ width: "100%", height: "100%" }}
                                contentStyle={{ width: "100%", height: "100%" }}
                            >
                                <div
                                    className="relative w-full h-full"
                                    onDoubleClick={() => isZoomed && setIsZoomed(false)}
                                >
                                    <Image
                                        src={activePlan.image}
                                        alt={activePlan.title}
                                        fill
                                        className="object-contain pointer-events-auto select-none"
                                        sizes="(max-width: 768px) 100vw, 66vw"
                                        priority
                                    />
                                </div>
                            </TransformComponent>
                        )}
                    </TransformWrapper>
                </motion.div>
            </div>
        </motion.div>
    );
}
