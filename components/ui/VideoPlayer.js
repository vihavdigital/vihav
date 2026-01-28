
"use client";

import { useEffect, useRef } from "react";

export default function VideoPlayer({ src, poster, className = "w-full h-full object-cover" }) {
    const videoRef = useRef(null);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.muted = true;
            videoRef.current.defaultMuted = true;
            videoRef.current.playsInline = true;

            const playPromise = videoRef.current.play();
            if (playPromise !== undefined) {
                playPromise.catch((error) => {
                    console.log("Autoplay prevented:", error);
                    // interaction required
                });
            }
        }
    }, [src]);

    return (
        <video
            ref={videoRef}
            src={src}
            autoPlay
            loop
            muted
            playsInline
            className={className}
            poster={poster}
        />
    );
}
