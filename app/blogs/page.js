import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
    title: "Blogs | Vihav Group",
    description: "Read the latest news and updates from Vihav Group.",
};

const BLOG_POSTS = [
    // Placeholder data
    {
        id: 1,
        title: "Vihav Group Wins Best Luxury Developer Award 2024",
        excerpt: "We are thrilled to announce that Vihav Group has been recognized for excellence in luxury real estate development.",
        date: "January 15, 2024",
        image: "/images/project-images/projects/completed/vihav-sky-one/gallery/vihav-sky-one-gallery (1).webp", // Using existing image as placeholder
        slug: "best-luxury-developer-award-2024"
    },
    {
        id: 2,
        title: "The Future of Sustainable Living in Vadodara",
        excerpt: "Explore how Vihav Group is integrating eco-friendly technologies into our upcoming residential projects.",
        date: "December 10, 2023",
        image: "/images/project-images/projects/keystone-niwa/gallery/keystone-niwa-gallery (2).webp",
        slug: "sustainable-living-vadodara"
    },
    {
        id: 3,
        title: "Investing in Commercial Real Estate: A Guide",
        excerpt: "Why Vadodara's commercial sector is booming and what investors need to know before making a move.",
        date: "November 22, 2023",
        image: "/images/project-images/projects/cbd-res/gallery/vihav-cbd-gallery (1).webp",
        slug: "investing-commercial-real-estate"
    }
];

export default function BlogsPage() {
    return (
        <div className="min-h-screen bg-white text-luxury-black pt-24 pb-20">

            {/* Header */}
            <div className="container mx-auto px-6 md:px-12 mb-16 text-center">
                <h1 className="text-4xl md:text-6xl font-serif mb-6">Our Blogs</h1>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    Insights, updates, and stories from the world of Vihav Group and premium real estate.
                </p>
            </div>

            {/* Blog Grid */}
            <div className="container mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                    {BLOG_POSTS.map((post) => (
                        <Link href="#" key={post.id} className="group block h-full">
                            <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-gold-400/30 shadow-sm hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                                {/* Image */}
                                <div className="aspect-[16/9] relative overflow-hidden bg-gray-100">
                                    <div className="absolute inset-0 bg-gray-200 animate-pulse" /> {/* Loading state placeholder */}
                                    <Image
                                        src={post.image}
                                        alt={post.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    />
                                </div>

                                {/* Content */}
                                <div className="p-6 md:p-8 flex flex-col flex-grow">
                                    <div className="text-gold-500 text-xs font-bold uppercase tracking-widest mb-3">
                                        {post.date}
                                    </div>
                                    <h3 className="text-xl font-serif font-medium mb-3 group-hover:text-gold-600 transition-colors">
                                        {post.title}
                                    </h3>
                                    <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3 mb-6 flex-grow">
                                        {post.excerpt}
                                    </p>

                                    <div className="text-xs font-bold uppercase tracking-widest text-black flex items-center gap-2 group-hover:gap-3 transition-all">
                                        Read More <span className="text-gold-500">→</span>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

        </div>
    );
}
