"use client";

import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ReferralForm from "@/components/ui/ReferralForm";
import { Repeat, Gift, Users } from "lucide-react";

export default function OneVihavPage() {
    return (
        <main className="min-h-screen bg-onevihav-green text-white font-sans selection:bg-gold-400 selection:text-black overflow-x-hidden">
            <Header />

            {/* Image Background */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <img
                    src="/images/project-images/other-images/onevihav-bg.jpg"
                    alt="OneVihav Background"
                    className="w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-onevihav-green via-transparent to-black/40" />
            </div>

            {/* Hero Section */}
            <section className="relative min-h-screen flex flex-col justify-center pt-24 pb-16 md:pt-32 md:pb-20 container mx-auto px-4 md:px-6 z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                    {/* Left: Presentation Box */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="space-y-6 lg:pr-12 lg:order-1 order-2"
                    >
                        <h2 className="text-sm md:text-base font-medium tracking-[0.3em] text-gold-400 uppercase opacity-80 pl-2">Presenting</h2>

                        {/* Card Container */}
                        <div className="border border-gold-400/30 p-6 md:p-12 relative max-w-xl bg-gradient-to-br from-black/60 to-black/20 backdrop-blur-md shadow-2xl rounded-sm">
                            {/* Decorative Corner Accents */}
                            <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-gold-400" />
                            <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-gold-400" />
                            <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-gold-400" />
                            <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-gold-400" />

                            <p className="text-white/90 text-lg md:text-xl font-light mb-8 md:mb-10 leading-relaxed font-serif italic text-center md:text-left">
                                "An exclusive referral program curated for our cherished Vihav Group Associates."
                            </p>

                            {/* Logo Representation */}
                            <div className="mb-8 md:mb-10 flex justify-center md:justify-start">
                                <img
                                    src="/images/project-images/other-images/onevihav-logo.png"
                                    alt="One Vihav Privilege Circle"
                                    className="h-24 md:h-36 w-auto object-contain drop-shadow-[0_4px_20px_rgba(212,175,55,0.15)]"
                                />
                            </div>

                            <div className="space-y-3 text-sm text-gray-300 font-light border-t border-gold-400/20 pt-8">
                                <p className="leading-relaxed">The difference you make is invaluable and truly appreciated.</p>
                                <p className="text-gold-400">Let us be grateful for your enduring support.</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right: Say Hello */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                        className="text-center lg:text-left relative order-1 lg:order-2 mb-8 lg:mb-0"
                    >
                        <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-serif text-transparent bg-clip-text bg-gradient-to-r from-gold-200 via-gold-400 to-gold-600 leading-[0.9] tracking-tight drop-shadow-2xl py-2">
                            Say <span className="text-white/10 italic absolute -z-10 blur-sm scale-105 ml-4 hidden md:inline-block">Hello</span>
                            <span className="text-white italic relative z-10 font-thin">Hello</span>
                        </h1>
                        <p className="text-sm md:text-2xl text-gold-400/80 font-light tracking-[0.2em] md:tracking-[0.25em] mt-4 md:mt-8 uppercase border-t border-gold-400/20 pt-4 md:pt-8 inline-block">
                            to the world of privileges
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Refer, Redeem, Repeat Section */}
            <section className="py-32 relative z-10 bg-black/30 backdrop-blur-md border-y border-white/5">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-16 relative">
                        {/* Connecting Line (Desktop) */}
                        <div className="hidden md:block absolute top-[60px] left-[16%] right-[16%] h-px bg-gradient-to-r from-transparent via-gold-400/30 to-transparent z-0" />

                        {/* Step 1: Refer */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="space-y-8 relative z-10 group"
                        >
                            <div className="w-24 h-24 mx-auto md:mx-0 bg-gradient-to-br from-black to-onevihav-green border border-gold-400/30 rounded-full flex items-center justify-center shadow-2xl group-hover:border-gold-400 transition-colors duration-500">
                                <Users size={40} className="text-gold-400" strokeWidth={1} />
                            </div>
                            <div className="md:pr-8">
                                <h3 className="text-4xl font-serif text-gold-400 mb-4">REFER</h3>
                                <div className="space-y-4 text-gray-300 font-light leading-relaxed text-lg">
                                    <p className="font-medium text-white border-b border-gold-400/20 pb-2 inline-block">Spread the word</p>
                                    <p className="opacity-80">
                                        Help your network find their perfect residential or commercial space from our extraordinary portfolio.
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Step 2: Redeem */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="space-y-8 relative z-10 group"
                        >
                            <div className="w-24 h-24 mx-auto md:mx-0 bg-gradient-to-br from-black to-onevihav-green border border-gold-400/30 rounded-full flex items-center justify-center shadow-2xl group-hover:border-gold-400 transition-colors duration-500">
                                <Gift size={40} className="text-gold-400" strokeWidth={1} />
                            </div>
                            <div className="md:pr-8">
                                <h3 className="text-4xl font-serif text-gold-400 mb-4">REDEEM</h3>
                                <div className="space-y-4 text-gray-300 font-light leading-relaxed text-lg">
                                    <p className="font-medium text-white border-b border-gold-400/20 pb-2 inline-block">Assured Rewards</p>
                                    <p className="opacity-80">
                                        Successful bookings earn you substantial points transferred directly to your bank account. <span className="text-gold-400 italic">It's that simple.</span>
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Step 3: Repeat */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="space-y-8 relative z-10 group"
                        >
                            <div className="w-24 h-24 mx-auto md:mx-0 bg-gradient-to-br from-black to-onevihav-green border border-gold-400/30 rounded-full flex items-center justify-center shadow-2xl group-hover:border-gold-400 transition-colors duration-500">
                                <Repeat size={40} className="text-gold-400" strokeWidth={1} />
                            </div>
                            <div className="md:pr-8">
                                <h3 className="text-4xl font-serif text-gold-400 mb-4">REPEAT</h3>
                                <div className="space-y-4 text-gray-300 font-light leading-relaxed text-lg">
                                    <p className="font-medium text-white border-b border-gold-400/20 pb-2 inline-block">Limitless Benefits</p>
                                    <p className="opacity-80">
                                        The more you refer, the more your privileges grow. There is no cap on your potential rewards.
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Form Section */}
            <section className="py-32 px-6 container mx-auto relative z-10" id="join-now">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">Start Your Journey</h2>
                        <p className="text-gold-400 text-lg uppercase tracking-widest">Join the Circle of Privilege</p>
                    </motion.div>

                    <ReferralForm />
                </div>
            </section>

            <Footer />
        </main>
    );
}
