"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2, Building2, Wallet, Users } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function PreLeasedCard({ project, index }) {
    // Investment Data Merged with Project Data
    const {
        title,
        location,
        image,
        heroImage,
        roi = "6.0%",
        tenant = "Multinational Brands",
        price = "Price on Request",
        status = "Pre-Leased",
        slug,
        category = 'commercial'
    } = project;

    const href = `/projects/${category}/${slug}`;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="group relative bg-background border border-border rounded-xl overflow-hidden hover:border-gold-400/30 transition-all duration-500 shadow-sm hover:shadow-lg"
        >
            <div className="grid md:grid-cols-2 gap-0">
                {/* Image Section */}
                <div className="relative aspect-[4/3] md:aspect-auto md:h-full overflow-hidden">
                    <Image
                        src={heroImage || image}
                        alt={title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500" />

                    {/* Floating Status Badge */}
                    <div className="absolute top-4 left-4 flex gap-2">
                        <span className="px-3 py-1.5 bg-luxury-black/90 backdrop-blur-md text-gold-400 text-[10px] font-bold uppercase tracking-widest rounded-sm border border-gold-400/20 shadow-lg">
                            {status}
                        </span>
                    </div>
                </div>

                {/* Content Section */}
                <div className="p-6 md:p-8 flex flex-col justify-between relative bg-card">

                    <div>
                        {/* Header */}
                        <div className="mb-6">
                            <h3 className="text-2xl font-serif text-foreground mb-2 group-hover:text-gold-400 transition-colors">
                                <Link href={href} className="focus:outline-none">
                                    <span className="absolute inset-0 md:w-1/2" aria-hidden="true" />
                                    {title}
                                </Link>
                            </h3>
                            <div className="flex items-center text-muted-foreground text-sm">
                                <Building2 size={14} className="mr-1.5 text-gold-400" />
                                {location}
                            </div>
                        </div>

                        {/* Investment Metrics Grid */}
                        <div className="grid grid-cols-2 gap-4 mb-8">
                            <div className="p-3 rounded-lg bg-secondary/30 border border-border">
                                <div className="flex items-center gap-2 mb-1">
                                    <Wallet size={14} className="text-gold-400" />
                                    <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-medium">ROI</span>
                                </div>
                                <span className="text-lg md:text-xl font-bold text-foreground">
                                    Up to {roi}
                                </span>
                            </div>
                            <div className="p-3 rounded-lg bg-secondary/30 border border-border">
                                <div className="flex items-center gap-2 mb-1">
                                    <Users size={14} className="text-gold-400" />
                                    <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-medium">Tenant</span>
                                </div>
                                <span className="text-sm font-medium text-foreground line-clamp-1">
                                    {tenant}
                                </span>
                            </div>
                        </div>

                        {/* Key Benefits List */}
                        <ul className="space-y-2 mb-8">
                            {[
                                "Immediate Rental Income",
                                "Long-term Lease Stability",
                                "High Capital Appreciation"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                                    <CheckCircle2 size={16} className="text-green-500 shrink-0 mt-0.5" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Footer / CTA */}
                    <div className="flex flex-col sm:flex-row gap-4 items-center pt-6 border-t border-border">
                        <div className="w-full sm:w-auto">
                            <span className="block text-[10px] uppercase tracking-widest text-muted-foreground mb-1">Starting Investment</span>
                            <span className="text-xl font-serif text-foreground">{price}</span>
                        </div>

                        <div className="w-full sm:ml-auto sm:w-auto relative z-20">
                            <Button
                                href={href}
                                variant="outline"
                                className="w-full sm:w-auto border-gold-400 text-gold-400 hover:bg-gold-400 hover:text-black group-hover:shadow-[0_4px_20px_-5px_rgba(212,175,55,0.4)] transition-all"
                            >
                                View Details
                                <ArrowUpRight size={16} className="ml-2" />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
