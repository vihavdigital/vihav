"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

export default function CategoryShowcase({ title, subtitle, description, image, align = "left", href = "#" }) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

    const isLeft = align === "left";

    return (
        <section ref={ref} className="relative min-h-[90vh] flex items-center overflow-hidden py-20">
            {/* Parallax Background Image */}
            <div className="absolute inset-0 z-0">
                <motion.div style={{ y }} className="w-full h-[120%] relative -top-[10%]">
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-cover brightness-[0.6]"
                        sizes="100vw"
                    />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-t from-luxury-black via-transparent to-black/20" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className={`flex flex-col ${isLeft ? "md:items-start text-left" : "md:items-end text-right"}`}>

                    {/* Text Content */}
                    <motion.div
                        style={{ opacity }}
                        className="max-w-2xl"
                    >
                        <span className="text-gold-400 uppercase tracking-[0.3em] text-xs font-bold mb-6 block">
                            {subtitle}
                        </span>
                        <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white mb-8 leading-none">
                            {title}
                        </h2>
                        <p className={`text-gray-300 text-lg md:text-xl font-light leading-relaxed mb-12 ${isLeft ? "mr-auto" : "ml-auto"}`}>
                            {description}
                        </p>

                        <Button variant="outline" className="group text-white border-white/30 hover:bg-white hover:text-black hover:border-white px-8 py-6 text-sm tracking-[0.2em]">
                            Explore Collection <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
                        </Button>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
