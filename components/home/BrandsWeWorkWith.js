"use client";

import { useRef } from "react";
import Image from "next/image";
import TextReveal from "@/components/ui/TextReveal";
import {
    motion,
    useScroll,
    useSpring,
    useTransform,
    useMotionValue,
    useVelocity,
    useAnimationFrame,
    wrap
} from "framer-motion";

const BRANDS = [
    { name: "McDonald's", logo: "/images/project-images/other-images/pre-leased/macdonald-logo.png" },
    { name: "Blinkit", logo: "/images/project-images/other-images/pre-leased/blinkit-logo.png" },
    { name: "Ola", logo: "/images/project-images/other-images/pre-leased/ola-cabs-logo.png" },
    { name: "Gujco Mart", logo: "/images/project-images/other-images/pre-leased/gujcomart-logo.png" },
    { name: "Swiggy Instamart", logo: "/images/project-images/other-images/pre-leased/swiggy-instamart-logo.png" },
    { name: "Connplex Cinemas", logo: "/images/project-images/other-images/pre-leased/connplex-cinemas.avif" },
];

function ParallaxStats({ baseVelocity = 100 }) {
    const baseX = useMotionValue(0);
    const { scrollY } = useScroll();
    const scrollVelocity = useVelocity(scrollY);

    // Smoother physics config for "ultra smooth" feel
    const smoothVelocity = useSpring(scrollVelocity, {
        damping: 100, // Higher damping = less oscillation
        stiffness: 300 // Lower stiffness = softer response
    });

    // Map scroll velocity to an acceleration factor
    // Updated to 15 for "much faster" response
    const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 15], {
        clamp: false
    });

    /**
     * Wrapping Logic:
     * We have 4 sets of brands. 
     * Total width is 100% of the container (implied).
     * We want to wrap seamlessly. 
     * If we display 4 sets, each set is 25% of the total rendered width.
     * We should wrap everyday 25%.
     */
    const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

    const directionFactor = useRef(1);
    useAnimationFrame((t, delta) => {
        // Slower base movement
        let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

        /**
         * Direction switching based on scroll
         */
        if (velocityFactor.get() < 0) {
            directionFactor.current = -1;
        } else if (velocityFactor.get() > 0) {
            directionFactor.current = 1;
        }

        moveBy += directionFactor.current * moveBy * velocityFactor.get();

        baseX.set(baseX.get() + moveBy);
    });

    const DISPLAY_BRANDS = [...BRANDS, ...BRANDS, ...BRANDS, ...BRANDS];

    return (
        <div className="overflow-hidden whitespace-nowrap flex flex-nowrap w-full">
            <motion.div className="flex gap-16 md:gap-32 flex-nowrap items-center will-change-transform" style={{ x }}>
                {DISPLAY_BRANDS.map((brand, index) => (
                    <div
                        key={index}
                        // REMOVED grayscale classes. Keep slight opacity for elegance, full on hover.
                        className="relative w-32 h-16 md:w-48 md:h-24 opacity-80 hover:opacity-100 transition-all duration-700 ease-out cursor-pointer shrink-0"
                    >
                        <Image
                            src={brand.logo}
                            alt={brand.name}
                            fill
                            className="object-contain"
                        />
                    </div>
                ))}
            </motion.div>
        </div>
    );
}

export default function BrandsWeWorkWith() {
    return (
        <section className="py-24 bg-white border-t border-gray-100 overflow-hidden">
            <div className="container mx-auto px-6 mb-16 text-left">
                <span className="text-gold-400 uppercase tracking-[0.25em] text-xs font-bold mb-4 block">
                    Our Partners
                </span>
                <TextReveal
                    as="h2"
                    text="Brands We Work With"
                    className="font-serif text-3xl md:text-5xl text-luxury-black justify-start"
                />
            </div>

            {/* Seamless Rolling Marquee */}
            <div className="relative w-full py-10">
                {/* Stronger Gradient Fade Masks for smoothness at edges */}
                <div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

                {/* Slower Velocity: -0.8 */}
                <ParallaxStats baseVelocity={-0.8} />
            </div>
        </section>
    );
}
