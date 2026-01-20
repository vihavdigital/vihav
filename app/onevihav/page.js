"use strict";
"use client";

import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ReferralForm from "@/components/ui/ReferralForm";
import { Repeat, Gift, Users, BadgeCheck, Zap, ArrowRight } from "lucide-react";

export default function OneVihavPage() {
    return (
        <main className="min-h-screen bg-onevihav-green text-white font-sans selection:bg-gold-400 selection:text-black overflow-x-hidden">
            <Header />

            {/* Background */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <img
                    src="/images/project-images/other-images/onevihav-bg.jpg"
                    alt="OneVihav Background"
                    className="w-full h-full object-cover opacity-40 blur-sm"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-onevihav-green via-onevihav-green/90 to-black/60" />
            </div>

            {/* Compact Hero Section */}
            <section className="relative pt-32 pb-16 container mx-auto px-6 z-10 flex flex-col md:flex-row items-center justify-between gap-12">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="md:w-1/2 space-y-6"
                >
                    <div className="inline-flex items-center gap-2 border border-gold-400/30 px-4 py-1.5 rounded-full bg-gold-400/5 backdrop-blur-sm">
                        <BadgeCheck size={14} className="text-gold-400" />
                        <span className="text-xs font-bold tracking-widest text-gold-400 uppercase">Exclusive Associate Program</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-serif text-white leading-tight">
                        One<span className="text-gold-400">Vihav</span> <br />
                        <span className="text-3xl md:text-4xl text-white/60 font-light italic">Privilege Circle</span>
                    </h1>

                    <p className="text-lg text-gray-300 max-w-lg leading-relaxed border-l-2 border-gold-400 pl-6">
                        An ecosystem of rewards designed to honor the valuable contributions of our Vihav Group Associates.
                        Refer excellence, earn limitlessly.
                    </p>

                    <div className="flex gap-4 pt-4">
                        <a href="#join-now" className="bg-gold-500 hover:bg-gold-600 text-black px-8 py-3 rounded-none font-bold uppercase tracking-widest transition-all flex items-center gap-2">
                            Join Circle <ArrowRight size={18} />
                        </a>
                    </div>
                </motion.div>

                {/* Right: Condensed Benefits Card */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="md:w-1/2 w-full"
                >
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <BenefitCard
                            icon={Users}
                            title="REFER"
                            desc="Connect your network with premium Vihav properties."
                            delay={0.3}
                        />
                        <BenefitCard
                            icon={Gift}
                            title="REDEEM"
                            desc="Earn direct financial rewards on every successful booking."
                            delay={0.4}
                        />
                        <BenefitCard
                            icon={Repeat}
                            title="REPEAT"
                            desc="Uncapped earning potential for consistent partners."
                            delay={0.5}
                        />
                    </div>
                </motion.div>
            </section>

            {/* Combined Info & Form Section */}
            <section className="py-16 bg-black/20 backdrop-blur-sm border-t border-white/5 relative z-10" id="join-now">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row gap-16">

                        {/* Left: Program Details (Compact List) */}
                        <div className="lg:w-1/3 space-y-8">
                            <h3 className="text-2xl font-serif text-white mb-6">Program Highlights</h3>
                            <ul className="space-y-6">
                                <li className="flex gap-4 group">
                                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gold-400 flex-shrink-0 group-hover:bg-gold-400 group-hover:text-black transition-all">
                                        <Zap size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-white">Instant Activation</h4>
                                        <p className="text-sm text-gray-400">Start referring immediately after registration approval.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4 group">
                                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gold-400 flex-shrink-0 group-hover:bg-gold-400 group-hover:text-black transition-all">
                                        <BadgeCheck size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-white">Transparent Tracking</h4>
                                        <p className="text-sm text-gray-400">Clear documentation and timely payout processing.</p>
                                    </div>
                                </li>
                            </ul>

                            <div className="p-6 bg-gold-400/10 border border-gold-400/20 rounded-lg mt-8">
                                <p className="text-gold-300 text-sm italic">
                                    "Our associates are the pillars of our extended family. OneVihav is our way of saying thank you."
                                </p>
                            </div>
                        </div>

                        {/* Right: The Form (Existing Component) */}
                        <div className="lg:w-2/3">
                            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl">
                                <h3 className="text-xl font-serif text-white mb-8 border-b border-white/10 pb-4">Associate Registration</h3>
                                <ReferralForm />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}

function BenefitCard({ icon: Icon, title, desc, delay }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: delay }}
            className="bg-black/40 border border-white/10 p-6 rounded-xl hover:border-gold-400/50 transition-all group"
        >
            <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-gold-400 mb-4 group-hover:bg-gold-400 group-hover:text-black transition-colors">
                <Icon size={22} strokeWidth={1.5} />
            </div>
            <h4 className="text-lg font-bold text-white mb-2 tracking-wide">{title}</h4>
            <p className="text-xs text-gray-400 leading-relaxed">{desc}</p>
        </motion.div>
    )
}
