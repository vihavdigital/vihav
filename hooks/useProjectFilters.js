import { useState, useMemo, useEffect } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";

export const FILTER_RESIDENTIAL_TYPES = ["All", "Bunglow", "Apartments", "3bhk", "4bhk", "5bhk", "Penthouse"];
export const FILTER_COMMERCIAL_TYPES = ["All", "shops", "showrooms", "offices"];
export const FILTER_ALL_TYPES = ["All", "Bunglow", "Apartments", "3bhk", "4bhk", "penthouse", "shops", "showrooms", "offices"];
export const FILTER_POSSESSION = ["All", "Newly Launched", "Ready to Move", "Under construction"];
export const FILTER_TRANSACTION_OPTIONS = ["Buy", "Rent", "Lease"];

export function useProjectFilters(projects, initialCategory = "Residential", residentialProjects = null, commercialProjects = null) {
    const searchParams = useSearchParams();
    const router = useRouter();
    const pathname = usePathname();

    // Helper to get initial value from URL or default
    const getInitialCategory = () => {
        const param = searchParams.get("category");
        if (param) {
            const match = ["Residential", "Commercial", "All"].find(c => c.toLowerCase() === param.toLowerCase());
            if (match) return match;
        }
        return initialCategory;
    };

    const getInitialType = () => {
        const param = searchParams.get("type");
        if (param) {
            // Check against all known types
            const match = FILTER_ALL_TYPES.find(t => t.toLowerCase() === param.toLowerCase());
            if (match) return match;
        }
        return "All";
    };

    const getInitialPossession = () => {
        const param = searchParams.get("status");
        if (param) {
            const match = FILTER_POSSESSION.find(p => p.toLowerCase() === param.toLowerCase());
            if (match) return match;
        }
        return "All";
    };

    const getInitialTransaction = () => {
        const param = searchParams.get("transaction");
        if (param) {
            const match = FILTER_TRANSACTION_OPTIONS.find(t => t.toLowerCase() === param.toLowerCase());
            if (match) return match;
        }
        return "Buy";
    };

    const [activeCategory, setActiveCategory] = useState(getInitialCategory);
    const [activeType, setActiveType] = useState(getInitialType);
    const [activePossession, setActivePossession] = useState(getInitialPossession);
    const [activeTransaction, setActiveTransaction] = useState(getInitialTransaction);

    // 1. Sync URL -> State (Handle Back/Forward navigation)
    useEffect(() => {
        const paramCategory = searchParams.get("category");
        if (paramCategory) {
            const match = ["Residential", "Commercial", "All"].find(c => c.toLowerCase() === paramCategory.toLowerCase());
            if (match && match !== activeCategory) setActiveCategory(match);
        } else {
            if (activeCategory !== initialCategory) setActiveCategory(initialCategory);
        }

        const paramType = searchParams.get("type");
        if (paramType) {
            const match = FILTER_ALL_TYPES.find(t => t.toLowerCase() === paramType.toLowerCase());
            if (match && match !== activeType) setActiveType(match);
        } else {
            if (activeType !== "All") setActiveType("All");
        }

        const paramStatus = searchParams.get("status");
        if (paramStatus) {
            const match = FILTER_POSSESSION.find(p => p.toLowerCase() === paramStatus.toLowerCase());
            if (match && match !== activePossession) setActivePossession(match);
        } else {
            if (activePossession !== "All") setActivePossession("All");
        }

        const paramTrans = searchParams.get("transaction");
        if (paramTrans) {
            const match = FILTER_TRANSACTION_OPTIONS.find(t => t.toLowerCase() === paramTrans.toLowerCase());
            if (match && match !== activeTransaction) setActiveTransaction(match);
        } else {
            if (activeTransaction !== "Buy") setActiveTransaction("Buy");
        }
    }, [searchParams, initialCategory]);

    // Helper to update URL
    const updateUrl = (updates) => {
        const params = new URLSearchParams(searchParams.toString());

        Object.entries(updates).forEach(([key, value]) => {
            if (value === null || value === undefined) {
                params.delete(key);
            } else {
                params.set(key, value);
            }
        });

        router.replace(`${pathname}?${params.toString()}`, { scroll: false });
    };

    // Wrappers for state updates + URL sync
    const setCategoryWrapper = (cat) => {
        setActiveCategory(cat);
        // Reset others when category changes? Usually yes for type/trans.
        // But keeping it simple: just update category in URL.
        const updates = {};

        if (cat !== initialCategory) updates.category = cat;
        else updates.category = null; // remove

        // If category changes, we often want to reset type/trans if incompatible, 
        // but current UI handles hiding incompatible options. 
        // Let's just update category.
        updateUrl(updates);
    };

    const setTypeWrapper = (type) => {
        setActiveType(type);
        const updates = {};
        if (type !== "All") updates.type = type;
        else updates.type = null;
        updateUrl(updates);
    };

    const setPossessionWrapper = (poss) => {
        setActivePossession(poss);
        const updates = {};
        if (poss !== "All") updates.status = poss;
        else updates.status = null;
        updateUrl(updates);
    };

    const setTransactionWrapper = (trans) => {
        setActiveTransaction(trans);
        const updates = {};
        if (trans !== "Buy") updates.transaction = trans;
        else updates.transaction = null;
        updateUrl(updates);
    };

    const clearFilters = () => {
        setActiveType("All");
        setActivePossession("All");
        setActiveTransaction("Buy");

        updateUrl({
            type: null,
            status: null,
            transaction: null
        });
    };

    // Clear ALL including category (for "Clear All" button)
    const resetAll = () => {
        setActiveCategory(initialCategory);
        setActiveType("All");
        setActivePossession("All");
        setActiveTransaction("Buy");

        updateUrl({
            category: null,
            type: null,
            status: null,
            transaction: null
        });
    };

    const applyFilters = (updatesObj) => {
        const urlUpdates = {};

        if (updatesObj.activeCategory !== undefined) {
            setActiveCategory(updatesObj.activeCategory);
            urlUpdates.category = updatesObj.activeCategory !== initialCategory ? updatesObj.activeCategory : null;
        }
        if (updatesObj.activeType !== undefined) {
            setActiveType(updatesObj.activeType);
            urlUpdates.type = updatesObj.activeType !== "All" ? updatesObj.activeType : null;
        }
        if (updatesObj.activePossession !== undefined) {
            setActivePossession(updatesObj.activePossession);
            urlUpdates.status = updatesObj.activePossession !== "All" ? updatesObj.activePossession : null;
        }
        if (updatesObj.activeTransaction !== undefined) {
            setActiveTransaction(updatesObj.activeTransaction);
            urlUpdates.transaction = updatesObj.activeTransaction !== "Buy" ? updatesObj.activeTransaction : null;
        }

        updateUrl(urlUpdates);
    };

    const filteredProjects = useMemo(() => {
        let sourceProjects = projects;
        if (activeCategory === "Residential" && residentialProjects) {
            sourceProjects = residentialProjects;
        } else if (activeCategory === "Commercial" && commercialProjects) {
            sourceProjects = commercialProjects;
        }

        return sourceProjects.filter(project => {
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

            // 2. Transaction Filter (Commercial Only)
            if (activeCategory === "Commercial") {
                const pTransactions = project.filterData.transactionType || ["Buy"];
                const normalizedPTransactions = pTransactions.map(t => t.toLowerCase());
                if (!normalizedPTransactions.includes(activeTransaction.toLowerCase())) return false;
            }

            // 3. Type Filter
            if (activeType !== "All") {
                if (!project.filterData.type || !Array.isArray(project.filterData.type)) return false;
                const projectTypes = project.filterData.type.map(t => t.toLowerCase());
                if (!projectTypes.includes(activeType.toLowerCase())) return false;
            }

            // 4. Possession Filter
            if (activePossession !== "All") {
                if (!project.filterData.possession) return false;
                if (project.filterData.possession.toLowerCase() !== activePossession.toLowerCase()) return false;
            }

            return true;
        });
    }, [projects, activeCategory, activeType, activePossession, activeTransaction, residentialProjects, commercialProjects]);

    return {
        activeCategory,
        setActiveCategory: setCategoryWrapper,
        activeType,
        setActiveType: setTypeWrapper,
        activePossession,
        setActivePossession: setPossessionWrapper,
        activeTransaction,
        setActiveTransaction: setTransactionWrapper,
        applyFilters, // New batched update function
        clearFilters,
        resetAll,
        filteredProjects,
        FILTER_RESIDENTIAL_TYPES,
        FILTER_COMMERCIAL_TYPES,
        FILTER_ALL_TYPES,
        FILTER_POSSESSION,
        FILTER_TRANSACTION_OPTIONS
    };
}
