"use client";

import { useState, useMemo } from "react";

export const FILTER_TYPES = ["All", "3BHK", "4BHK", "5BHK", "Bunglows", "Penthouse"];
export const FILTER_COMMERCIAL_TYPES = ["All", "Invest", "End Use", "Pre-lease"];
export const FILTER_POSSESSION = ["All", "Completed", "Ongoing", "Upcoming"];

import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

export function useProjectFilters(projects, initialCategory = "Residential") {
    const searchParams = useSearchParams();
    const [activeCategory, setActiveCategory] = useState(initialCategory);
    const [activeType, setActiveType] = useState("All");
    const [activePossession, setActivePossession] = useState("All");

    // Initialize from URL params
    useEffect(() => {
        const categoryParam = searchParams.get("category");
        const statusParam = searchParams.get("status");

        if (categoryParam && ["Residential", "Commercial"].includes(categoryParam)) {
            setActiveCategory(categoryParam);
        }

        if (statusParam && FILTER_POSSESSION.includes(statusParam)) {
            setActivePossession(statusParam);
        }
    }, [searchParams]);

    const filteredProjects = useMemo(() => {
        return projects.filter(project => {
            // If project is missing filterData, filter it based on simple category if available or include if loose, 
            // but strict check is safer. Assuming all have filterData now.
            if (!project.filterData) return false;

            // 1. Category Filter
            if (activeCategory !== "All" && project.filterData.category !== activeCategory) return false;

            // 2. Type Filter (Only if not All)
            // Note: We typically hide Type filter for Commercial, but if user sets it, we enforce it.
            // Logic: If activeType is set and Project has types, check overlap.
            if (activeType !== "All") {
                // Commercial might have empty types, so this safely handles it by excluding them if they don't match.
                // If Residential, we check includes.
                if (!project.filterData.type || !Array.isArray(project.filterData.type) || !project.filterData.type.includes(activeType)) return false;
            }

            // 3. Possession Filter
            if (activePossession !== "All") {
                if (project.filterData.possession !== activePossession) return false;
            }

            return true;
        });
    }, [projects, activeCategory, activeType, activePossession]);

    return {
        activeCategory,
        setActiveCategory,
        activeType,
        setActiveType,
        activePossession,
        setActivePossession,
        filteredProjects,
        FILTER_TYPES,
        FILTER_COMMERCIAL_TYPES,
        FILTER_POSSESSION
    };
}
