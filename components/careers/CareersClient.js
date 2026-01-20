"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowUpRight, MapPin, Briefcase, Clock, FileText } from 'lucide-react';
import { CAREERS } from '@/data/careers';

export default function CareersClient() {
    return (
        <div className="min-h-screen bg-[#FDFBF7] text-luxury-black font-sans selection:bg-gold-500/30">
            {/* --- HERO SECTION --- */}
            <div className="relative pt-48 pb-32 overflow-hidden bg-luxury-black text-white">
                <div className="absolute inset-0 opacity-20">
                    <Image
                        src="/images/project-images/projects/cbd-res/gallery/vihav-cbd-gallery (1).webp"
                        alt="Background"
                        fill
                        className="object-cover grayscale"
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-luxury-black via-luxury-black/80 to-transparent" />

                <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        className="max-w-3xl mx-auto"
                    >
                        <span className="text-gold-400 font-bold tracking-[0.3em] text-xs uppercase mb-4 block">
                            Join Our Team
                        </span>
                        <h1 className="text-4xl md:text-6xl font-serif mb-6 leading-tight">
                            Build the Future <br /> with Vihav Group
                        </h1>
                        <p className="text-white/60 text-lg md:text-xl font-light">
                            We are looking for passionate individuals to help us redefine luxury living. Explore our open positions and find your place with us.
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* --- JOBS GRID --- */}
            <div className="container mx-auto px-6 md:px-12 py-24 -mt-10 relative z-20">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {CAREERS.map((job) => (
                        <JobCard key={job.id} job={job} />
                    ))}
                </div>

                {CAREERS.length === 0 && (
                    <div className="text-center py-20 bg-white rounded-2xl shadow-sm border border-gray-100">
                        <p className="text-gray-500 text-lg">No open positions at the moment. Please check back later.</p>
                    </div>
                )}
            </div>

            {/* --- VALUES / CULTURE SECTION (Simple) --- */}
            <div className="container mx-auto px-6 md:px-12 pb-32">
                <div className="bg-white rounded-3xl p-12 md:p-16 shadow-lg border border-gray-100 flex flex-col md:flex-row items-center gap-12">
                    <div className="flex-1 space-y-6">
                        <span className="text-gold-600 font-bold tracking-widest text-xs uppercase">Our Culture</span>
                        <h2 className="text-3xl md:text-4xl font-serif text-gray-900">Why Work With Us?</h2>
                        <p className="text-gray-500 leading-relaxed text-lg">
                            At Vihav Group, we believe in fostering a culture of innovation, integrity, and excellence. We offer a collaborative environment where your ideas are valued and your professional growth is a priority.
                        </p>
                        <ul className="space-y-3">
                            {['Growth Opportunities', 'Collaborative Environment', 'Premium Projects', 'Competitive Compensation'].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-gray-700">
                                    <div className="w-1.5 h-1.5 rounded-full bg-gold-500" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="flex-1 relative w-full h-[400px] rounded-2xl overflow-hidden">
                        <Image
                            src="/images/project-images/projects/skyone/gallery/skyone-gallery-2.jpg"
                            alt="Office Culture"
                            fill
                            className="object-cover hover:scale-105 transition-transform duration-700"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

function JobCard({ job }) {
    return (
        <div className="group bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full">
            <div className="mb-6">
                <div className="flex justify-between items-start mb-4">
                    <span className="inline-block px-3 py-1 bg-gold-50 text-gold-700 text-xs font-bold uppercase tracking-wider rounded-md">
                        {job.department}
                    </span>
                    <span className="text-gray-400 text-sm font-medium flex items-center gap-1.5">
                        <Clock size={14} /> {job.type}
                    </span>
                </div>
                <h3 className="text-2xl font-serif font-bold text-gray-900 group-hover:text-gold-600 transition-colors mb-2">
                    {job.title}
                </h3>
                <div className="flex items-center gap-2 text-gray-500 text-sm">
                    <MapPin size={14} />
                    <span>{job.location}</span>
                    <span className="mx-1">•</span>
                    <Briefcase size={14} />
                    <span>{job.experience}</span>
                </div>
            </div>

            <p className="text-gray-500 mb-8 line-clamp-3 leading-relaxed flex-grow">
                {job.description}
            </p>

            <div>
                <button
                    onClick={() => window.location.href = `mailto:careers@vihav.com?subject=Application for ${job.title}`}
                    className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-luxury-black text-white text-sm font-bold uppercase tracking-wider hover:bg-gold-500 hover:text-black transition-all duration-300 group-hover:shadow-lg"
                >
                    Apply Now <ArrowUpRight size={16} />
                </button>
            </div>
        </div>
    );
}
