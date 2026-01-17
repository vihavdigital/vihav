import { PROJECTS } from "@/data/projects";

export default function sitemap() {
    const baseUrl = 'https://www.vihav.com'; // Change this to your actual domain

    const projectUrls = PROJECTS.map((project) => ({
        url: `${baseUrl}/projects/${project.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.8,
    }));

    const staticRoutes = [
        '',
        '/about',
        '/contact',
        '/projects',
        '/awards',
        '/completed-projects',
        '/onevihav',
        '/overseas',
        '/privacy-policy',
        '/terms-and-conditions',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: route === '' ? 1 : 0.8,
    }));

    return [...staticRoutes, ...projectUrls];
}
