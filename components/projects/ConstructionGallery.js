"use client";
import React from "react";
import ProjectGallery from "@/components/projects/ProjectGallery";

export default function ConstructionGallery({ images, theme }) {
    if (!images || images.length === 0) return null;

    return (
        <div className="mt-8">
            {/* Slider View */}
            <ProjectGallery
                images={images}
                // images={images}
                // Construction section has `bg-secondary` which is usually light grey.
                isLightMode={true}
                showCaptions={false}
                showProgress={true}
            />
        </div>
    );
}
