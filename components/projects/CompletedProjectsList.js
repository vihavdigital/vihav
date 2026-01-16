"use client";

import { PROJECTS } from "@/data/projects";
import CompletedProjectCard from "./CompletedProjectCard";
// (icons handled in card component)

export default function CompletedProjectsList() {
    // Filter for Completed / Ready to Move
    const rawCompletedProjects = PROJECTS.filter(p =>
        p.filterData?.possession === "Ready to Move" ||
        p.status === "Completed" ||
        p.status === "Ready to Move"
    );

    // Custom Sort Order
    const ORDER = [
        "Keystone 72",
        "Keystone Skyvillas",
        "Keystone Skymont",
        "Elite Square",
        "VTC",
        "VBS",
        "Skyone",
        "Supremus",
        "Wealth Square",
        "Excellus",
        "Ensign",
        "Keystone Mansion",
        "Keystone Mansion 2"
    ];

    const completedProjects = rawCompletedProjects.sort((a, b) => {
        const indexA = ORDER.indexOf(a.title);
        const indexB = ORDER.indexOf(b.title);
        // If both are in the list, sort by index
        if (indexA !== -1 && indexB !== -1) return indexA - indexB;
        // If only A is in list, it comes first
        if (indexA !== -1) return -1;
        // If only B is in list, it comes first
        if (indexB !== -1) return 1;
        // Otherwise keep original order (or alphabetical)
        return 0;
    });

    return (
        <section className="bg-white dark:bg-neutral-950">
            <div className="flex flex-col w-full">
                {completedProjects.map((project, index) => (
                    <CompletedProjectCard
                        key={project.id}
                        project={project}
                        index={index}
                    />
                ))}
            </div>

            {completedProjects.length === 0 && (
                <div className="text-center py-40">
                    <h3 className="text-4xl font-serif text-neutral-300 dark:text-neutral-700">Coming Soon.</h3>
                </div>
            )}
        </section>
    );
}
