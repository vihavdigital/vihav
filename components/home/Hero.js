"use client";

import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section className="relative h-[100svh] w-full overflow-hidden bg-luxury-black text-white">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="absolute inset-0"
            >
                {/* Media Layer */}
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                    className="w-full h-full object-cover transform scale-105"
                >
                    <source src="/videos/sup-wt.webm" type="video/webm" />
                    <track kind="captions" src="/captions/en.vtt" srcLang="en" label="English" />
                </video>

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            </motion.div>

            {/* Content Layer */}
            <div className="relative z-10 h-full container mx-auto px-6 flex flex-col justify-end items-end text-right pb-24 md:pb-32">
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="max-w-4xl"
                >
                    <h1
                        className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-8xl font-medium text-white mb-4 md:mb-8 leading-none tracking-tight"
                        dangerouslySetInnerHTML={{ __html: "Designing the <br/> <span class='text-white/80 italic font-light'>Skyline</span>" }}
                    />
                    <p className="max-w-xl ml-auto text-gray-200 text-sm md:text-xl font-light mb-8 md:mb-12 leading-relaxed tracking-wide">
                        Experience a life of uncompromising luxury and corporate excellence.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
