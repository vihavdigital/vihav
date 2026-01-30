"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";

export default function CustomCursor() {
    const [isHovered, setIsHovered] = useState(false);
    const [isVisible, setIsVisible] = useState(false); // Default to false (hidden on touch/iPad)
    const [isClicked, setIsClicked] = useState(false); // Track click state
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    // Smooth spring animation for the outer ring
    const springConfig = { damping: 25, stiffness: 400 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    useEffect(() => {
        // Strict check: Only show if device supports hover (Mouse)
        // This effectively hides it on iPads, Tablets, and Mobile
        if (typeof window !== "undefined" && window.matchMedia("(hover: hover)").matches) {
            setIsVisible(true);
        }

        const moveCursor = (e) => {
            cursorX.set(e.clientX - 16);
            cursorY.set(e.clientY - 16);
            // Don't auto-enable on move alone, trust the hover check or initial state
            // But if mouse moves, it's likely a mouse.
            // We can keep it purely based on hover capability to be safe.
            // setIsVisible(true); 
        };

        const handleMouseOver = (e) => {
            setIsVisible(true); // Ensure visible on interaction
            if (
                e.target.tagName.toLowerCase() === "button" ||
                e.target.tagName.toLowerCase() === "a" ||
                e.target.closest("button") ||
                e.target.closest("a") ||
                e.target.getAttribute("role") === "button" ||
                e.target.closest(".cursor-hover") // Generic class support
            ) {
                setIsHovered(true);
            } else {
                setIsHovered(false);
            }
        };

        const handleMouseDown = () => setIsClicked(true);
        const handleMouseUp = () => setIsClicked(false);
        const handleMouseLeave = () => setIsVisible(false);
        const handleMouseEnter = () => setIsVisible(true);

        window.addEventListener("mousemove", moveCursor);
        window.addEventListener("mouseover", handleMouseOver);
        window.addEventListener("mousedown", handleMouseDown);
        window.addEventListener("mouseup", handleMouseUp);
        document.addEventListener("mouseleave", handleMouseLeave);
        document.addEventListener("mouseenter", handleMouseEnter);

        return () => {
            window.removeEventListener("mousemove", moveCursor);
            window.removeEventListener("mouseover", handleMouseOver);
            window.removeEventListener("mousedown", handleMouseDown);
            window.removeEventListener("mouseup", handleMouseUp);
            document.removeEventListener("mouseleave", handleMouseLeave);
            document.removeEventListener("mouseenter", handleMouseEnter);
        };
    }, [cursorX, cursorY, isVisible]);

    // Hide on touch devices strictly via JS check
    // Removed strict maxTouchPoints check as it hides cursor on hybrid laptops
    const [isTouch, setIsTouch] = useState(false);
    useEffect(() => {
        if (typeof window !== "undefined") {
            // Only disable if it's strictly a touch-only interaction (hard to detect 100% upfront)
            // Better to rely on mousemove setting visibility
            setIsTouch(false);
        }
    }, []);

    // if (isTouch) return null; // Removed blocking return

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    // Hidden on mobile/iPad (touch devices usually), visible on lg and up (Desktop) with hover check
                    className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden hidden lg:block"
                >
                    {/* Main Dot */}
                    <motion.div
                        className="fixed top-0 left-0 w-4 h-4 bg-gold-500 rounded-full mix-blend-difference will-change-transform"
                        style={{
                            translateX: cursorXSpring,
                            translateY: cursorYSpring,
                            x: 8, // Center offset
                            y: 8,
                            scale: isClicked ? 0.8 : (isHovered ? 2.5 : 1),
                        }}
                    />

                    {/* Outer Ring */}
                    <motion.div
                        className="fixed top-0 left-0 w-8 h-8 border border-gold-500 rounded-full mix-blend-difference will-change-transform"
                        style={{
                            translateX: cursorXSpring,
                            translateY: cursorYSpring,
                            scale: isClicked ? 1.2 : (isHovered ? 1.5 : 1),
                            opacity: isHovered ? 0.5 : 1,
                        }}
                        transition={{ type: "spring", stiffness: 500, damping: 28 }}
                    />
                </motion.div>
            )}
        </AnimatePresence>
    );
}
