"use client";
import React, { useEffect, useState, useMemo } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { PROJECTS } from "@/data/projects";
import { Plus, Minus, Plane, Train, ShoppingBag, Stethoscope, GraduationCap } from "lucide-react";
import { createRoot } from "react-dom/client"; // For rendering Lucide icons to HTML string

// --- 1. CONFIGURATION & DATA ---

// Expanded Landmarks Data
const LANDMARKS = [
    { name: "Vadodara Airport", coordinates: { lat: 22.3361, lng: 73.2263 }, type: "transport", icon: Plane },
    { name: "Railway Station", coordinates: { lat: 22.3129, lng: 73.1812 }, type: "transport", icon: Train },
    { name: "Laxmi Vilas Palace", coordinates: { lat: 22.2937, lng: 73.1919 }, type: "heritage", icon: null }, // Special handling or default
    { name: "Inorbit Mall", coordinates: { lat: 22.3213, lng: 73.1725 }, type: "shopping", icon: ShoppingBag },
    { name: "Reliance Mega Mall", coordinates: { lat: 22.2965, lng: 73.1555 }, type: "shopping", icon: ShoppingBag },
    { name: "Sterling Hospital", coordinates: { lat: 22.3160, lng: 73.1500 }, type: "medical", icon: Stethoscope }, // Approx location
    { name: "Bhailal Amin Hospital", coordinates: { lat: 22.3185, lng: 73.1605 }, type: "medical", icon: Stethoscope },
    { name: "Navrachana University", coordinates: { lat: 22.2950, lng: 73.1360 }, type: "education", icon: GraduationCap },
    { name: "DPS Vadodara", coordinates: { lat: 22.2580, lng: 73.1650 }, type: "education", icon: GraduationCap }, // Kalali/Transpek area (approx)
    { name: "Alkapuri", coordinates: { lat: 22.3100, lng: 73.1600 }, type: "area", icon: null },
];

// --- 2. CUSTOM MARKER FACTORIES ---

// Helper to render React Icon to HTML string
const renderIconToHtml = (IconComponent) => {
    if (!IconComponent) return "";
    // Simple SVG string generation for Lucide icons to avoid heavy React rendering inside Leaflet
    // We'll stick to basic HTML/SVG replacement or just use the icon class if manageable.
    // Actually, createRoot is overkill for a marker. Let's use simple SVG strings or just CSS.
    // For simplicity and performance, we'll use a generic mapped SVG string or class.
    return "";
};

// Premium Project Marker (Gold Pin)
const createVihavIcon = (title, isActive) => L.divIcon({
    className: "custom-leaflet-icon",
    html: `
        <div class="flex flex-col items-center justify-end w-[160px] pointer-events-none transition-all duration-500 ${isActive ? 'scale-110 z-50' : 'scale-90 opacity-90 hover:scale-100 hover:opacity-100'}">
            <div class="mb-2 px-3 py-1.5 bg-luxury-black/95 backdrop-blur-xl border ${isActive ? 'border-gold-400 video-glow' : 'border-gold-400/30'} rounded-sm shadow-[0_4px_20px_rgba(0,0,0,0.5)] transition-colors duration-300">
                <span class="text-[10px] md:text-xs font-bold ${isActive ? 'text-gold-400' : 'text-white'} whitespace-nowrap tracking-widest uppercase font-serif text-shadow-sm">${title}</span>
            </div>
            <div class="relative flex flex-col items-center justify-center">
                <div class="w-4 h-4 ${isActive ? 'bg-gold-400' : 'bg-luxury-black'} rounded-full shadow-[0_0_15px_rgba(0,0,0,0.6)] z-10 border-2 border-white/20"></div>
                ${isActive ? '<div class="absolute w-12 h-12 bg-gold-400/30 rounded-full animate-ping-slow"></div>' : ''}
                <div class="w-0.5 h-6 bg-black/80 -mt-2"></div>
            </div>
        </div>
    `,
    iconSize: [160, 100],
    iconAnchor: [80, 100], // Precise anchoring at bottom of stick
});

// Minimal Landmark Marker
const createLandmarkIcon = (name, type) => {
    // Simple color coding - using darker/richer tones for light map
    let colorClass = "text-gray-600";
    let bgClass = "bg-white/80";

    if (type === 'transport') colorClass = "text-blue-600";
    if (type === 'shopping') colorClass = "text-pink-600";
    if (type === 'medical') colorClass = "text-red-600";
    if (type === 'education') colorClass = "text-yellow-600";

    return L.divIcon({
        className: "custom-landmark-label",
        html: `
            <div class="flex items-center gap-2 pointer-events-none group">
                <div class="w-2 h-2 bg-black/80 rounded-full shadow-lg border border-white/50 group-hover:scale-150 transition-transform duration-300"></div>
                <!-- Tooltip style label -->
                <div class="opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-auto absolute left-3 top-1/2 -translate-y-1/2 z-50">
                    <span class="text-[10px] font-bold text-black uppercase tracking-wider bg-white px-2 py-1 rounded shadow-xl whitespace-nowrap border border-black/10">
                        ${name}
                    </span>
                </div>
            </div>
        `,
        iconSize: [20, 20],
        iconAnchor: [10, 10],
    });
};

// --- 3. CONTROLLERS ---

// Bounds Controller: fits map to all points on load
function FitBoundsController({ projects, landmarks }) {
    const map = useMap();

    useEffect(() => {
        if (!map) return;

        const points = [
            ...projects.map(p => p.coordinates),
            ...landmarks.map(l => l.coordinates)
        ].filter(Boolean);

        if (points.length > 0) {
            const bounds = L.latLngBounds(points);
            map.fitBounds(bounds, {
                padding: [50, 50],
                maxZoom: 15,
                animate: true,
                duration: 1.5
            });
        }
    }, [map, projects, landmarks]);

    return null;
}

// Active Project Controller: Fly to active project when selected
function ActiveProjectController({ activeProject }) {
    const map = useMap();
    useEffect(() => {
        if (activeProject?.coordinates) {
            map.flyTo(activeProject.coordinates, 16, {
                duration: 2,
                easeLinearity: 0.25
            });
        }
    }, [activeProject, map]);
    return null;
}

// Custom Zoom Control
function CustomControls() {
    const map = useMap();

    return (
        <div className="absolute top-6 right-6 z-[1000] flex flex-col gap-2">
            <button
                onClick={() => map.zoomIn()}
                className="w-10 h-10 bg-black/80 backdrop-blur-md border border-white/10 text-gold-400 flex items-center justify-center hover:bg-gold-400 hover:text-black transition-all rounded shadow-xl"
                aria-label="Zoom In"
            >
                <Plus size={18} />
            </button>
            <button
                onClick={() => map.zoomOut()}
                className="w-10 h-10 bg-black/80 backdrop-blur-md border border-white/10 text-gold-400 flex items-center justify-center hover:bg-gold-400 hover:text-black transition-all rounded shadow-xl"
                aria-label="Zoom Out"
            >
                <Minus size={18} />
            </button>
        </div>
    );
}

// --- 4. MAIN COMPONENT ---

function LuxuryMap({ activeProject }) {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
        // Fix for default marker icons (just in case standard markers are used)
        delete L.Icon.Default.prototype._getIconUrl;
        L.Icon.Default.mergeOptions({
            iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
            iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
            shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
        });
    }, []);

    if (!isClient) return null;

    // Center is dynamic based on fitBounds usually, but providing a fallback
    const defaultCenter = { lat: 22.3072, lng: 73.1812 };

    return (
        <div className="w-full h-full relative z-0 bg-neutral-100">
            <MapContainer
                center={defaultCenter}
                zoom={13}
                style={{ height: "100%", width: "100%", background: "#f5f5f5" }}
                zoomControl={false} // Disable default zoom
                scrollWheelZoom={false} // UX: prevent scroll hijacking
                attributionControl={false} // Remove Leaflet branding
            >
                {/* Esri World Street Map (High Detail, Premium topography) */}
                <TileLayer
                    url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}"
                />

                {/* Controllers */}
                <FitBoundsController projects={PROJECTS} landmarks={LANDMARKS} />
                <ActiveProjectController activeProject={activeProject} />
                <CustomControls />

                {/* Landmarks */}
                {LANDMARKS.map((mark, idx) => (
                    <Marker
                        key={`landmark-${idx}`}
                        position={mark.coordinates}
                        icon={createLandmarkIcon(mark.name, mark.type)}
                        zIndexOffset={50}
                        interactive={false}
                    />
                ))}

                {/* Vihav Projects */}
                {PROJECTS.map((project, idx) => {
                    const isActive = activeProject && project.id === activeProject.id;
                    // Fallback to center if coords missing (shouldn't happen with correct data)
                    const pos = project.coordinates || defaultCenter;

                    return (
                        <Marker
                            key={`project-${idx}`}
                            position={pos}
                            icon={createVihavIcon(project.title, isActive)}
                            zIndexOffset={isActive ? 1000 : 100}
                        >
                            <Popup minWidth={220} closeButton={false} className="custom-popup-glass">
                                <a
                                    href={project.link || `/projects/${project.slug}`}
                                    className="block group relative min-w-[200px] bg-black/90 backdrop-blur-xl border border-gold-400/30 rounded-sm p-0 overflow-hidden shadow-2xl hover:border-gold-400 transition-colors"
                                >
                                    {/* Image Banner in Popup */}
                                    <div className="h-24 w-full relative overflow-hidden">
                                        <div
                                            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                            style={{ backgroundImage: `url(${project.desktopHeroImage || project.heroImage})` }}
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                                        <div className="absolute top-2 right-2 px-2 py-0.5 bg-gold-400 text-black text-[9px] font-bold uppercase tracking-widest rounded-sm">
                                            {project.status === "Ready to Move" ? "Ready" : project.status}
                                        </div>
                                    </div>

                                    <div className="p-4">
                                        <h3 className="font-serif text-base font-bold text-white leading-tight mb-1">{project.title}</h3>
                                        <p className="text-[10px] uppercase text-gray-400 tracking-widest mb-3 flex items-center gap-1">
                                            {project.location}
                                        </p>
                                        <div className="flex items-center justify-between mt-2 pt-2 border-t border-white/10">
                                            <span className="text-[10px] text-gold-400 font-bold uppercase tracking-widest">Explore</span>
                                            <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-gold-400 group-hover:text-black transition-colors text-white">
                                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </Popup>
                        </Marker>
                    );
                })}
            </MapContainer>

            {/* Premium Legend / Label */}
            <div className="absolute bottom-6 left-6 z-[999] pointer-events-none">
                <div className="space-y-1">
                    <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-gold-400 animate-pulse"></span>
                        <span className="text-[10px] text-gold-400 font-bold uppercase tracking-[0.2em] text-shadow">Vihav Projects</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

// Optimization: Memoize to avoid unnecessary re-renders of the entire map
export default React.memo(LuxuryMap, (prev, next) => {
    return prev.activeProject?.id === next.activeProject?.id;
});
