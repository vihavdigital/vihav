"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Trophy, Award, Star } from "lucide-react";

export default function AwardsPage() {
    return (
        <main className="min-h-screen bg-luxury-black text-white">
            <Header />

            {/* Hero Section */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=2000&auto=format&fit=crop"
                        alt="Awards Background"
                        className="w-full h-full object-cover brightness-[0.2]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-luxury-black via-luxury-black/50 to-transparent" />
                </div>

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-gold-400 uppercase tracking-[0.3em] text-sm font-bold mb-6 block flex items-center justify-center gap-3">
                            <Trophy size={16} /> Recognition
                        </span>
                        <h1 className="font-serif text-5xl md:text-7xl mb-6">
                            Awards & <br /> Accolades
                        </h1>
                        <p className="text-gray-400 text-lg max-w-2xl mx-auto font-light">
                            Celebrating our commitment to excellence, innovation, and trust in the real estate industry.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Featured Award Section */}
            <section className="py-24 px-6 container mx-auto">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Video Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative group "
                    >
                        <div className="absolute -inset-4 bg-gradient-to-r from-gold-400/20 to-transparent blur-xl opacity-50 group-hover:opacity-75 transition-opacity" />
                        <div className="relative aspect-video rounded-lg overflow-hidden border border-white/10 shadow-2xl">
                            <iframe
                                width="100%"
                                height="100%"
                                src="https://www.youtube.com/embed/h9iIlXmX8GU?rel=0"
                                title="Vihav Group Award Video"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className="w-full h-full object-cover"
                            ></iframe>
                        </div>
                    </motion.div>

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center gap-2 border border-gold-400/30 bg-gold-400/10 px-4 py-2 rounded-full mb-8">
                            <Award size={16} className="text-gold-400" />
                            <span className="text-gold-400 text-xs font-bold uppercase tracking-widest">Hurun India</span>
                        </div>

                        <h2 className="font-serif text-3xl md:text-4xl mb-6 leading-tight">
                            Excellence in Lifestyle Real Estate Development
                        </h2>

                        <div className="space-y-6 text-gray-300 font-light leading-relaxed">
                            <p>
                                <strong>Vihav Group Wins Hurun India Award.</strong> From Vadodara to national acclaim, Vihav Group has been honoured with the prestigious "Excellence in Lifestyle Real Estate Development – Gujarat Award 2025".
                            </p>
                            <p>
                                Presented by Hurun India, part of the globally renowned Hurun Report, the award recognises visionary companies setting benchmarks in business, lifestyle, and innovation. With forward-thinking leadership, cutting-edge design, and a deep understanding of lifestyle aspirations, Vihav Group creates spaces that blend culture with modernity.
                            </p>
                            <div className="bg-neutral-900 border-l-2 border-gold-400 p-6 mt-8">
                                <p className="text-white italic">
                                    "This accolade is a testament to Vihav’s role in shaping Vadodara’s skyline and placing it firmly on India’s map of excellence."
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-8 mt-12">
                            <div className="text-center">
                                <span className="block text-2xl font-serif text-white mb-1">2025</span>
                                <span className="text-xs uppercase tracking-widest text-gray-500">Year</span>
                            </div>
                            <div className="w-px bg-white/10" />
                            <div className="text-center">
                                <span className="block text-2xl font-serif text-white mb-1">Hurun India</span>
                                <span className="text-xs uppercase tracking-widest text-gray-500">Organizer</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Other Achievements Placeholder */}
            <section className="py-24 bg-neutral-900/50 border-t border-white/5">
                <div className="container mx-auto px-6 text-center">
                    <Star className="w-12 h-12 text-white/10 mx-auto mb-6" />
                    <h3 className="font-serif text-2xl text-white/50 mb-4">More Recognition Coming Soon</h3>
                    <p className="text-gray-500 text-sm max-w-md mx-auto">
                        Our journey of excellence continues. Stay tuned for more updates on our achievements and milestones.
                    </p>
                </div>
            </section>

            <Footer />
        </main>
    );
}
