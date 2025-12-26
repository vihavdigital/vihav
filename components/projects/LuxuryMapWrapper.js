"use client";
import React from "react";
import dynamic from "next/dynamic";

const LuxuryMap = dynamic(() => import("./LuxuryMap"), {
    ssr: false,
    loading: () => <div className="w-full h-full bg-neutral-900 flex items-center justify-center text-white/20 text-xs tracking-widest uppercase">Loading Map...</div>
});

export default function LuxuryMapWrapper({ activeProject }) {
    return <LuxuryMap activeProject={activeProject} />;
}
