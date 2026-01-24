"use client";
import React from "react";
import ProjectGallery from "@/components/projects/ProjectGallery";

export default function ConstructionGallery({ images, theme }) {
    if (!images || images.length === 0) return null;

    return (
        <div className="mt-8">
            <div className="mb-6 flex items-center justify-between">
                <h3 className={`font-serif text-2xl ${theme.text}`}>Project Status Gallery</h3>
            </div>

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
