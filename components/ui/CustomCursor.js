"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
    const [isHovered, setIsHovered] = useState(false);
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    // Smooth spring animation for the outer ring
    const springConfig = { damping: 25, stiffness: 400 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    useEffect(() => {
        const moveCursor = (e) => {
            cursorX.set(e.clientX - 16);
            cursorY.set(e.clientY - 16);
        };

        const handleMouseOver = (e) => {
            if (
                e.target.tagName.toLowerCase() === "button" ||
                e.target.tagName.toLowerCase() === "a" ||
                e.target.closest("button") ||
                e.target.closest("a") ||
                e.target.getAttribute("role") === "button"
            ) {
                setIsHovered(true);
            } else {
                setIsHovered(false);
            }
        };

        const handleMouseDown = () => setIsHovered(true);
        const handleMouseUp = () => setIsHovered(false);

        window.addEventListener("mousemove", moveCursor);
        window.addEventListener("mouseover", handleMouseOver);
        window.addEventListener("mousedown", handleMouseDown);
        window.addEventListener("mouseup", handleMouseUp);

        return () => {
            window.removeEventListener("mousemove", moveCursor);
            window.removeEventListener("mouseover", handleMouseOver);
            window.removeEventListener("mousedown", handleMouseDown);
            window.removeEventListener("mouseup", handleMouseUp);
        };
    }, [cursorX, cursorY]);

    // Hide on touch devices
    const [isTouch, setIsTouch] = useState(false);
    useEffect(() => {
        if (typeof window !== "undefined") {
            setIsTouch("ontouchstart" in window || navigator.maxTouchPoints > 0);
        }
    }, []);

    if (isTouch) return null;

    return (
        <>
            {/* Main Dot */}
            <motion.div
                className="fixed top-0 left-0 w-4 h-4 bg-gold-500 rounded-full pointer-events-none z-[9999] mix-blend-difference"
                style={{
                    translateX: cursorXSpring,
                    translateY: cursorYSpring,
                    x: 8, // Center offset
                    y: 8, // Center offset
                    scale: isHovered ? 2.5 : 1,
                }}
            />

            {/* Outer Ring - Follows with slightly more lag if we wanted, but let's keep it simple and elegant */}
            <motion.div
                className="fixed top-0 left-0 w-8 h-8 border border-gold-500 rounded-full pointer-events-none z-[9998] mix-blend-difference"
                style={{
                    translateX: cursorXSpring,
                    translateY: cursorYSpring,
                    scale: isHovered ? 1.5 : 1,
                    opacity: isHovered ? 0.5 : 1,
                }}
                transition={{ type: "spring", stiffness: 500, damping: 28 }}
            />
        </>
    );
}
