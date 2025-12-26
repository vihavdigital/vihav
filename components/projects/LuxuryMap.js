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
            <div class="relative flex items-center justify-center">
                <div class="w-3 h-3 ${isActive ? 'bg-emerald-400' : 'bg-white'} rounded-full shadow-[0_0_10px_rgba(0,0,0,0.5)] z-10"></div>
                ${isActive ? '<div class="absolute w-8 h-8 bg-emerald-500/30 rounded-full animate-ping"></div>' : ''}
                <div class="w-0.5 h-4 bg-white/30"></div>
            </div>
        </div>
    `,
    iconSize: [150, 80],
    iconAnchor: [75, 80], // Center X (75), Bottom Y (80) points to lat/lng
});

// Custom Icon for Landmarks (Airport, Station)
const landmarkIcon = new L.Icon({
    iconUrl: "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-grey.png",
    shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
    iconSize: [20, 32], // Smaller
    iconAnchor: [10, 32],
    popupAnchor: [0, -28],
    shadowSize: [32, 32]
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
        { name: "Alkapuri", coordinates: { lat: 22.3100, lng: 73.1600 } }
    ];

    return (
        <div className="w-full h-full relative z-0">
            <MapContainer
                center={center}
                zoom={14}
                style={{ height: "100%", width: "100%", background: "#111" }}
                zoomControl={false}
                attributionControl={false}
            >
                {/* CartoDB Dark Matter Tiles for Luxury/Dark Mode Look */}
                <TileLayer
                    url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
                    attribution='&copy; CARTO'
                />

                <MapController center={center} />
                <ScrollHandler />

                {/* Landmarks */}
                {landmarks.map((mark, idx) => (
                    <Marker key={idx} position={mark.coordinates} icon={landmarkIcon} opacity={0.6}>
                        <Popup>
                            <span className="font-sans text-gray-800 font-bold">{mark.name}</span>
                        </Popup>
                    </Marker>
                ))}

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
                            <Popup>
                                <div className="p-2 min-w-[200px]">
                                    <h3 className="font-serif text-lg font-bold mb-1 border-b pb-1 text-emerald-900">{project.title}</h3>
                                    <p className="text-xs uppercase text-gray-500 tracking-widest">{project.location}</p>
                                </div>
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
