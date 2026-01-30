"use client";

import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";

export default function VideoPlayer({ src, poster, className = "w-full h-full object-cover" }) {
    const videoRef = useRef(null);
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { margin: "200px 0px" }); // Preload/keep playing slightly off-screen

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        // Default settings
        video.muted = true;
        video.defaultMuted = true;
        video.playsInline = true;

        if (isInView) {
            const playPromise = video.play();
            if (playPromise !== undefined) {
                playPromise.catch((error) => {
                    // Auto-play was prevented
                    // console.log("Autoplay prevented:", error);
                });
            }
        } else {
            video.pause();
        }
    }, [isInView, src]);

    return (
        <div ref={containerRef} className="w-full h-full">
            <video
                ref={videoRef}
                src={src}
                loop
                muted
                playsInline
                className={className}
                poster={poster}
            />
        </div>
    );
}
