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

// Disable scroll zoom initially
function ScrollHandler() {
    const map = useMap();
    useEffect(() => {
        map.scrollWheelZoom.disable();
        return () => map.scrollWheelZoom.enable();
    }, [map]);

    // Enable on click
    useMapEvent('click', () => {
        map.scrollWheelZoom.enable();
    });
    return null;
}

export default function LuxuryMap({ activeProject }) {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);

        // Custom CSS for marker z-indexing if needed
        const style = document.createElement('style');
        style.innerHTML = `
            .custom-leaflet-icon { background: transparent; border: none; }
            .leaflet-popup-content-wrapper, .leaflet-popup-tip { background: transparent !important; box-shadow: none !important; }
            .leaflet-popup-content-wrapper { padding: 0 !important; overflow: hidden; border-radius: 8px; }
            .leaflet-popup-content { margin: 0 !important; width: 180px !important; }
        `;
        document.head.appendChild(style);

        // Fix for default marker icons in Next.js
        delete L.Icon.Default.prototype._getIconUrl;
        L.Icon.Default.mergeOptions({
            iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
            iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
            shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
        });
    }, []);

    if (!isClient) return null;

    const center = activeProject?.coordinates || { lat: 22.3072, lng: 73.1812 };

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
                zoomControl={true}
                attributionControl={false}
            >
                {/* CartoDB Dark Matter Tiles for Luxury/Dark Mode Look */}
                <TileLayer
                    url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
                    attribution='&copy; CARTO'
                />

                <MapController center={center} />

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
