'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue } from 'framer-motion';

export default function CustomCursor() {
    const [isVisible, setIsVisible] = useState(false);

    // Mouse position values - Direct mapping for zero latency (no spring)
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    useEffect(() => {
        const updateMousePosition = (e) => {
            // Using requestAnimationFrame for smoothest repaint
            requestAnimationFrame(() => {
                mouseX.set(e.clientX - 16); // Center the 32x32 cursor
                mouseY.set(e.clientY - 16);
            });
            if (!isVisible) setIsVisible(true);
        };

        const handleMouseEnter = () => setIsVisible(true);
        const handleMouseLeave = () => setIsVisible(false);

        window.addEventListener('mousemove', updateMousePosition, { passive: true });
        document.body.addEventListener('mouseenter', handleMouseEnter);
        document.body.addEventListener('mouseleave', handleMouseLeave);

        // Hide default cursor
        document.body.style.cursor = 'none';

        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
            document.body.removeEventListener('mouseenter', handleMouseEnter);
            document.body.removeEventListener('mouseleave', handleMouseLeave);
            document.body.style.cursor = 'auto';
        };
    }, [mouseX, mouseY, isVisible]);

    // Don't render on mobile/touch (basic check)
    if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
        return null;
    }

    return (
        <motion.div
            className="fixed top-0 left-0 w-8 h-8 z-[9999] pointer-events-none"
            style={{
                x: mouseX,
                y: mouseY,
                opacity: isVisible ? 1 : 0,
                // Hardware acceleration hint
                willChange: 'transform'
            }}
        >
            <img
                src="/images/project-images/other-images/cursor-icon.webp"
                alt="cursor"
                className="w-full h-full object-contain drop-shadow-md rotate-45"
            />
        </motion.div>
    );
}
