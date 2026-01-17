"use client";
import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap, useMapEvent } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { PROJECTS } from "@/data/projects";

// Custom Icon for Vihav Projects (Dynamic Factory)
const createVihavIcon = (title, isActive) => L.divIcon({
    className: "custom-leaflet-icon",
    html: `
        <div class="flex flex-col items-center justify-end w-[150px] pointer-events-none">
            <div class="mt-1 px-3 py-1 bg-black/80 backdrop-blur-md border ${isActive ? 'border-emerald-400' : 'border-white/20'} rounded-sm shadow-xl mb-2 transition-all duration-300">
                <span class="text-[10px] font-bold ${isActive ? 'text-emerald-400' : 'text-white'} whitespace-nowrap tracking-widest uppercase font-serif">${title}</span>
            </div>
            <div class="relative flex flex-col items-center justify-center">
                <div class="w-3 h-3 ${isActive ? 'bg-emerald-400' : 'bg-white'} rounded-full shadow-[0_0_10px_rgba(0,0,0,0.5)] z-10"></div>
                ${isActive ? '<div class="absolute w-8 h-8 bg-emerald-500/30 rounded-full animate-ping"></div>' : ''}
                <div class="w-0.5 h-4 bg-white/30 -mt-1"></div>
            </div>
        </div>
    `,
    iconSize: [150, 80],
    iconAnchor: [75, 80], // Center X (75), Bottom Y (80) points to lat/lng
});

// Custom Icon for Landmarks (Text Label)
const createLandmarkIcon = (name) => L.divIcon({
    className: "custom-landmark-label",
    html: `
        <div class="flex flex-col items-center justify-center w-[120px] pointer-events-none">
            <div class="text-[10px] font-bold text-gray-400 uppercase tracking-widest bg-black/40 px-2 py-0.5 rounded backdrop-blur-sm border border-white/10 shadow-sm">
                ${name}
            </div>
            <div class="w-1 h-1 bg-gray-400 rounded-full mt-1 shadow-lg"></div>
        </div>
    `,
    iconSize: [120, 40],
    iconAnchor: [60, 30], // Center
});

// Component to handle map center updates
function MapController({ center }) {
    const map = useMap();
    useEffect(() => {
        if (center) {
            map.flyTo(center, 14, { duration: 1.5, easeLinearity: 0.25 });
        }
    }, [center, map]);
    return null;
}

// Handle Gesture (2-finger pan on mobile, 1-finger scroll page)
function GestureHandler() {
    const map = useMap();
    const [showOverlay, setShowOverlay] = useState(false);

    useEffect(() => {
        if (!map) return;

        // Safer disable
        try {
            map.scrollWheelZoom.disable();
        } catch (e) {
            console.warn("Could not disable scrollwheel", e);
        }

        const isMobile = L.Browser.mobile || window.innerWidth < 768;

        if (isMobile) {
            try {
                map.dragging.disable();
                if (map.tap) map.tap.disable();
            } catch (e) {
                console.warn("Could not disable dragging", e);
            }

            const container = map.getContainer();
            if (!container) return;

            const handleTouchStart = (e) => {
                if (e.touches.length > 1) {
                    map.dragging.enable();
                    setShowOverlay(false);
                } else {
                    map.dragging.disable();
                }
            };

            const handleTouchMove = (e) => {
                if (e.touches.length === 1) {
                    setShowOverlay(true);
                    setTimeout(() => setShowOverlay(false), 1500);
                }
            };

            container.addEventListener('touchstart', handleTouchStart, { passive: true });
            container.addEventListener('touchmove', handleTouchMove, { passive: true });

            return () => {
                if (container) {
                    container.removeEventListener('touchstart', handleTouchStart);
                    container.removeEventListener('touchmove', handleTouchMove);
                }
            };
        } else {
            map.dragging.enable();
        }
    }, [map]);

    return (
        <div className={`absolute inset-0 z-[1000] flex items-center justify-center bg-black/60 transition-opacity duration-300 pointer-events-none ${showOverlay ? 'opacity-100' : 'opacity-0'}`}>
            <span className="text-white font-serif text-lg tracking-widest px-6 py-3 border border-white/20 bg-black/40 backdrop-blur-md rounded-full">
                Use Two Fingers to Move
            </span>
        </div>
    );
}

function LuxuryMap({ activeProject }) {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
        // Fix for default marker icons in Next.js - idempotent check
        if (typeof window !== 'undefined' && !L.Icon.Default.prototype._getIconUrl_done) {
            // We can just rely on the CSS import for icons usually, or this patch.
            // But to be safe and simple:
            delete L.Icon.Default.prototype._getIconUrl;
            L.Icon.Default.mergeOptions({
                iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
                iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
                shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
            });
            L.Icon.Default.prototype._getIconUrl_done = true;
        }
    }, []);

    if (!isClient) return null;

    // Default center if none provided
    const center = activeProject?.coordinates || { lat: 22.3072, lng: 73.1812 };

    // Force a stable key that only changes when the project changes
    const mapKey = activeProject?.id ? `map-${activeProject.id}` : "default-map";

    const landmarks = [
        { name: "Airport", coordinates: { lat: 22.3361, lng: 73.2263 } },
        { name: "Railway Station", coordinates: { lat: 22.3129, lng: 73.1812 } },
        { name: "Laxmi Vilas", coordinates: { lat: 22.2937, lng: 73.1919 } },
        { name: "Alkapuri", coordinates: { lat: 22.3100, lng: 73.1600 } },
        { name: "Waves Club", coordinates: { lat: 22.2960, lng: 73.1360 } },
        { name: "D-Mart (Vna)", coordinates: { lat: 22.2890, lng: 73.1450 } }
    ];

    return (
        <div className="w-full h-full relative z-0">
            <MapContainer
                center={center}
                zoom={14}
                style={{ height: "100%", width: "100%", background: "#111" }}
            // Removing control props that might cause early DOM access issues
            >
                {/* CartoDB Dark Matter Tiles for Luxury/Dark Mode Look */}
                <TileLayer
                    url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
                    attribution='&copy; CARTO'
                />

                <MapController center={center} />
                <GestureHandler />

                {/* Landmarks */}
                {/* Landmarks - Now Visible Labels */}
                {landmarks.map((mark, idx) => (
                    <Marker
                        key={idx}
                        position={mark.coordinates}
                        icon={createLandmarkIcon(mark.name)}
                        zIndexOffset={50} // Below projects
                        interactive={false} // purely visual
                    />
                ))}

                {/* Vihav Projects */}
                {/* Vihav Projects */}
                {PROJECTS.map((project, idx) => {
                    const isActive = activeProject && project.id === activeProject.id;
                    const pos = project.coordinates || center; // Fallback

                    return (
                        <Marker
                            key={idx}
                            position={pos}
                            icon={createVihavIcon(project.title, isActive)}
                            zIndexOffset={isActive ? 1000 : 100}
                        >
                            <Popup minWidth={180} closeButton={false} className="custom-popup">
                                <a
                                    href={`/projects/${project.slug}`}
                                    className="block group relative min-w-[180px] bg-white/95 backdrop-blur-lg border border-black/10 rounded-lg p-4 shadow-xl hover:bg-white transition-colors"
                                >
                                    <div className="flex justify-between items-start gap-4">
                                        <div>
                                            <h3 className="font-serif text-sm font-bold text-black leading-tight mb-1 group-hover:text-black transition-colors">{project.title}</h3>
                                            <p className="text-[9px] uppercase text-gray-500 tracking-widest font-medium line-clamp-1">{project.location}</p>
                                        </div>
                                        <div className="text-black/40 group-hover:text-black group-hover:translate-x-1 transition-all mt-1">
                                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <path d="M5 12h14M12 5l7 7-7 7" />
                                            </svg>
                                        </div>
                                    </div>
                                </a>
                            </Popup>
                        </Marker>
                    );
                })}
            </MapContainer>

            <div className="absolute bottom-6 right-6 z-[999] bg-black/50 backdrop-blur text-[10px] text-white/50 px-2 py-1 rounded border border-white/5 pointer-events-none uppercase tracking-widest">
                Vihav Interactive Map
            </div>
        </div>
    );
}

// Memoize the map to prevent ANY re-renders from parent state changes (like scroll spy)
// Only re-render if the project ID actually changes.
export default React.memo(LuxuryMap, (prev, next) => {
    return prev.activeProject?.id === next.activeProject?.id;
});
