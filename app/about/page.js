"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-luxury-black text-white">
            <Header />

            {/* Hero Section */}
            <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000&auto=format&fit=crop"
                        alt="Vihav Office"
                        className="w-full h-full object-cover brightness-[0.3]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-luxury-black via-luxury-black/50 to-transparent" />
                </div>

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-gold-400 uppercase tracking-[0.3em] text-sm font-bold mb-6 block">
                            Corporate Profile
                        </span>
                        <h1 className="font-serif text-5xl md:text-7xl mb-8 leading-tight">
                            The Rise of a <br /> New Name
                        </h1>
                        <p className="text-xl md:text-2xl font-light text-gray-300 max-w-3xl mx-auto leading-relaxed">
                            "Vihav" in Hindi literally means an invocation, an invitation, or a call.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Our Story / Intro */}
            <section className="py-24 px-6 container mx-auto">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="font-serif text-4xl mb-8">An Invitation to a <br /> Better Lifestyle</h2>
                        <div className="space-y-6 text-gray-300 font-light leading-relaxed">
                            <p>
                                And this is just the beginning... An invitation for a better lifestyle, a beginning of a good life for our valued customers.
                                Be it residences or commercial spaces, our indelible mark of quality, detailing, and intuitive thought is ever present.
                            </p>
                            <p>
                                At Vihav Group, we believe that there is no better proof of a commitment to service than a project which demonstrates the integrity of its builder.
                                What we do for a living is not especially unique. What we believe is unique.
                            </p>
                            <div className="h-px bg-white/10 w-24 my-8" />
                            <p className="text-white text-lg font-medium italic">
                                "We evaluate our success by many satisfied customers, be it top corporates or residential homeowners."
                            </p>
                        </div>
                    </motion.div>
                    <div className="relative h-[600px] bg-neutral-900 border border-white/5">
                        <img
                            src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=1000&auto=format&fit=crop"
                            alt="Luxury Living"
                            className="w-full h-full object-cover opacity-60"
                        />
                        <div className="absolute -bottom-8 -left-8 bg-neutral-800 p-8 border border-white/10 hidden md:block">
                            <span className="text-4xl font-serif block mb-2 text-gold-400">10+</span>
                            <span className="text-xs uppercase tracking-widest text-white/60">Years of Experience</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Founder / Leadership */}
            <section className="py-24 bg-neutral-900/50">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto text-center">
                        <span className="text-gold-400 uppercase tracking-widest text-xs font-bold block mb-4">Leadership</span>
                        <h2 className="font-serif text-4xl md:text-5xl mb-12">The Driving Force</h2>

                        <div className="bg-luxury-black border border-white/5 p-8 md:p-12 relative">
                            {/* Quote Icon */}
                            <div className="absolute top-8 left-8 text-gold-400/20 text-8xl font-serif">"</div>

                            <p className="text-lg md:text-xl text-gray-300 font-light leading-relaxed mb-8 relative z-10">
                                Mr. Kunal Rajeshkumar Arya is a BE Civil and carries the valuable experience of more than a decade in handling, planning, development & operations in the field of real estate development.
                                He has handled many commercial & residential projects, which all are massive in its class. Being a former director of Darshanam Group of Vadodara and various individual construction companies, he has passed through every phase of construction activities with utmost accurate management and fine execution.
                            </p>

                            <div>
                                <h3 className="text-xl font-serif text-white">Mr. Kunal Rajeshkumar Arya</h3>
                                <p className="text-gold-400 text-sm uppercase tracking-widest mt-2">Director, Vihav Group</p>
                                <p className="text-white/40 text-xs mt-1">Board of Directors, Vadodara CREDAI</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Vision & Mission */}
            <section className="py-24 px-6 container mx-auto">
                <div className="grid md:grid-cols-2 gap-8">
                    {/* Mission */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-neutral-900 p-12 border-t border-gold-400 group hover:bg-neutral-800 transition-colors"
                    >
                        <h3 className="font-serif text-3xl mb-6 group-hover:text-gold-400 transition-colors">Our Mission</h3>
                        <p className="text-gray-400 leading-relaxed text-sm md:text-base mb-6 uppercase tracking-wide">
                            To deliver promises with strong adherence to ethical business practices.
                        </p>
                        <p className="text-gray-300 font-light leading-relaxed">
                            Our pledge is to establish lasting relationships with our customers by exceeding their expectations and gaining their trust through exceptional service by every member of our team. We provide value-added construction services to our customers by creating a successful partnership with them throughout the construction process.
                        </p>
                    </motion.div>

                    {/* Vision */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="bg-neutral-900 p-12 border-t border-white/20 group hover:border-gold-400 hover:bg-neutral-800 transition-colors"
                    >
                        <h3 className="font-serif text-3xl mb-6 group-hover:text-gold-400 transition-colors">Our Vision</h3>
                        <p className="text-gray-400 leading-relaxed text-sm md:text-base mb-6 uppercase tracking-wide">
                            Think big and make dreams a reality.
                        </p>
                        <p className="text-gray-300 font-light leading-relaxed">
                            We believe in creating homes based on understanding of consumer needs and preferences. Our well thought vision motivates us to reach up to the customer’s expectations and ensure their delight at all times. To be known for our authenticity, hard work and largely excellent quality work.
                        </p>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
