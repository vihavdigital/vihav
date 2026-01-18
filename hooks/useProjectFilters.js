"use client";

import { useState, useMemo } from "react";

export const FILTER_RESIDENTIAL_TYPES = ["All", "Bunglow", "Apartments", "3bhk", "4bhk", "5bhk", "Penthouse"];
export const FILTER_COMMERCIAL_TYPES = ["All", "shops", "showrooms", "offices"];
export const FILTER_ALL_TYPES = ["All", "Bunglow", "Apartments", "3bhk", "4bhk", "penthouse", "shops", "showrooms", "offices"];
export const FILTER_POSSESSION = ["All", "Newly Launched", "Ready to Move", "Under construction"];
export const FILTER_TRANSACTION_OPTIONS = ["Buy", "Rent", "Lease"];

import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

export function useProjectFilters(projects, initialCategory = "Residential", residentialProjects = null, commercialProjects = null) {
    const searchParams = useSearchParams();
    const [activeCategory, setActiveCategory] = useState(initialCategory);
    const [activeType, setActiveType] = useState("All");
    const [activePossession, setActivePossession] = useState("All");
    const [activeTransaction, setActiveTransaction] = useState("Buy"); // Default to Buy

    // Initialize from URL params
    useEffect(() => {
        const categoryParam = searchParams.get("category");
        const statusParam = searchParams.get("status");

        if (categoryParam) {
            // Case insensitive check for category
            const match = ["Residential", "Commercial"].find(c => c.toLowerCase() === categoryParam.toLowerCase());
            if (match) setActiveCategory(match);
        }

        if (statusParam) {
            // Case insensitive check for possession status
            const match = FILTER_POSSESSION.find(p => p.toLowerCase() === statusParam.toLowerCase());
            if (match) {
                setActivePossession(match);
            }
        }
    }, [searchParams]);

    const filteredProjects = useMemo(() => {
        let sourceProjects = projects;
        if (activeCategory === "Residential" && residentialProjects) {
            sourceProjects = residentialProjects;
        } else if (activeCategory === "Commercial" && commercialProjects) {
            sourceProjects = commercialProjects;
        }

        return sourceProjects.filter(project => {
            // If project is missing filterData, filter it based on simple category if available or include if loose, 
            // but strict check is safer. Assuming all have filterData now.
            if (!project.filterData) return false;

            // 1. Category Filter
            if (activeCategory !== "All") {
                const pCat = project.filterData.category;
                if (Array.isArray(pCat)) {
                    if (!pCat.includes(activeCategory)) return false;
                } else {
                    if (pCat !== activeCategory) return false;
                }
            }

            // 2. Transaction Filter (Commercial Only) - NEW
            if (activeCategory === "Commercial") {
                // If data doesn't specify transactionType, assume it's "Buy"
                const pTransactions = project.filterData.transactionType || ["Buy"];
                const normalizedPTransactions = pTransactions.map(t => t.toLowerCase());
                if (!normalizedPTransactions.includes(activeTransaction.toLowerCase())) return false;
            }

            // 3. Type Filter (Only if not All)
            // Note: We typically hide Type filter for Commercial, but if user sets it, we enforce it.
            // Logic: If activeType is set and Project has types, check overlap.
            // 4. Type Filter (Only if not All)
            if (activeType !== "All") {
                if (!project.filterData.type || !Array.isArray(project.filterData.type)) return false;
                // Case-insensitive check
                const projectTypes = project.filterData.type.map(t => t.toLowerCase());
                if (!projectTypes.includes(activeType.toLowerCase())) return false;
            }

            // 5. Possession Filter
            if (activePossession !== "All") {
                if (!project.filterData.possession) return false;
                if (project.filterData.possession.toLowerCase() !== activePossession.toLowerCase()) return false;
            }

            return true;
        });
    }, [projects, activeCategory, activeType, activePossession, activeTransaction]);

    return {
        activeCategory,
        setActiveCategory,
        activeType,
        setActiveType,
        activePossession,
        setActivePossession,
        activeTransaction,
        setActiveTransaction,
        filteredProjects,
        FILTER_RESIDENTIAL_TYPES,
        FILTER_COMMERCIAL_TYPES,
        FILTER_ALL_TYPES,
        FILTER_POSSESSION,
        FILTER_TRANSACTION_OPTIONS
    };
}
