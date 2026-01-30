"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Maximize, MousePointer2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { usePathname, useRouter } from "next/navigation";
import dynamic from "next/dynamic";
import Image from "next/image";
import MagneticWrapper from "@/components/ui/MagneticWrapper";

const EnquiryModal = dynamic(() => import("@/components/ui/EnquiryModal"));

function StatusTag({ category, possession }) {
    const pathname = usePathname();
    // Default to Residential if category missing, just like before
    const cat = category || 'Residential';

    return (
        <div
            className="absolute top-4 left-4 cursor-default z-20 opacity-70"
            onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
            }}
        >
            <span className="inline-block px-3 py-1 bg-white/90 backdrop-blur-md text-luxury-black text-[10px] md:text-xs font-bold uppercase tracking-widest rounded-sm shadow-lg">
                {possession}
            </span>
        </div>
    );
}

export default function ProjectCard({ project, priority = false, overrideContext = {} }) {
    // ... (lines 35-164 unchanged)
    <EnquiryModal
        isOpen={isEnquireOpen}
        onClose={() => setIsEnquireOpen(false)}
        title={`Enquiry for ${project.title}`}
        contextData={{
            project_id: project.id,
            srd: project.srd,
            sub_source: "Homepage Project Card",
            ...overrideContext
        }}
        onSuccessAction={() => router.push(`/thank-you/${project.id}`)}
    />
    onSuccessAction = {() => router.push(`/thank-you/${project.id}`)
}
            />
        </>
    );
}
