"use client";

import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import dynamic from "next/dynamic";
import { ArrowRight, CheckCircle2, Building2, Globe2, ShieldCheck, Plane, Landmark, HandCoins } from "lucide-react";
import EnquiryForm from "@/components/ui/EnquiryForm";
import { useRouter } from "next/navigation";

const Footer = dynamic(() => import('@/components/layout/Footer'));

export default function OverseasUAE() {
    const router = useRouter();
    return (
        <main className="min-h-screen bg-background text-foreground selection:bg-gold-400 selection:text-luxury-black">
            <Header />

            {/* Hero Section - Unique Design */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden bg-background">
                {/* Ambient Background */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--color-gold-400)_0%,transparent_70%)] opacity-10" />

                {/* Animated Background Text Mesh */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none select-none opacity-10 dark:opacity-20">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 2 }}
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-bold text-transparent border-text leading-none whitespace-nowrap"
                        style={{ WebkitTextStroke: '1px var(--foreground)' }}
                    >
                        DUBAI
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 2, delay: 0.5 }}
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/4 text-[20vw] font-bold text-transparent border-text leading-none whitespace-nowrap"
                        style={{ WebkitTextStroke: '1px var(--color-gold-400)' }}
                    >
                        VADODARA
                    </motion.div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-0 left-0 w-full h-full">
                    <div className="absolute top-[20%] left-[10%] w-2 h-2 bg-gold-400 rounded-full animate-pulse" />
                    <div className="absolute bottom-[20%] right-[10%] w-1.5 h-1.5 bg-gold-400/50 rounded-full animate-pulse delay-700" />
                    <div className="absolute top-[40%] right-[20%] w-1 h-1 bg-foreground/10 rounded-full animate-pulse delay-300" />
                </div>

                <div className="relative z-30 container mx-auto px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        className="relative"
                    >
                        {/* Golden Line */}
                        <motion.div
                            initial={{ height: 0 }}
                            animate={{ height: 60 }}
                            transition={{ duration: 1, delay: 0.5 }}
                            className="w-[1px] bg-gradient-to-b from-transparent via-gold-400 to-transparent mx-auto mb-8"
                        />

                        <h1 className="font-serif text-5xl md:text-8xl text-foreground leading-none mb-8 tracking-tight">
                            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-foreground via-foreground to-foreground/60">Beyond</span>
                            <span className="block text-gold-400 italic font-light">Boundaries</span>
                        </h1>

                        <p className="text-muted-foreground text-lg md:text-xl max-w-xl mx-auto font-light leading-relaxed mb-12 tracking-wide">
                            Seamlessly blending the visionary ambition of the UAE with the grounded heritage of Vadodara.
                        </p>

                        <div className="flex flex-col items-center gap-4">
                            <button onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })} className="group flex flex-col items-center gap-2 text-muted-foreground hover:text-gold-400 transition-colors duration-500 cursor-pointer">
                                <span className="text-[10px] uppercase tracking-[0.3em]">Explore</span>
                                <div className="w-[1px] h-12 bg-foreground/10 group-hover:bg-gold-400/50 transition-colors duration-500 relative overflow-hidden">
                                    <div className="absolute top-0 left-0 w-full h-1/2 bg-gold-400 animate-fall" />
                                </div>
                            </button>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Significance Section */}
            <section className="py-24 md:py-32 bg-background relative overflow-hidden">
                {/* Subtle Golden Glow for Depth */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold-400/5 blur-[100px] rounded-full pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-gold-400/5 blur-[80px] rounded-full pointer-events-none" />

                <div className="container mx-auto px-6 relative z-10">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <span className="text-gold-400 uppercase tracking-[0.25em] text-xs font-bold mb-6 block">Why Vadodara?</span>
                            <h2 className="font-serif text-3xl md:text-5xl text-foreground mb-8 leading-tight">
                                A Strategic Investment <br /> Beyond Borders
                            </h2>
                            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                                For investors in the UAE seeking high-growth opportunities, Vadodara presents a compelling case. As the cultural capital of Gujarat turns into a cosmopolitan hub, it offers stability, rapid appreciation, and a lifestyle that mirrors the comfort you are accustomed to.
                            </p>
                            <ul className="space-y-4">
                                {[
                                    "Rapidly Expanding Industrial Hub (IT, Chemicals, Engineering)",
                                    "Proximity to Delhi-Mumbai Industrial Corridor (DMIC)",
                                    "High Rental Yields & Property Appreciation",
                                    "Safe, Peaceful, and Cosmopolitan Environment"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <CheckCircle2 className="text-gold-400 shrink-0 mt-1" size={18} />
                                        <span className="text-foreground/80">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="relative">
                            {/* Abstract Graphic or Map Representation */}
                            <div className="aspect-[4/5] bg-secondary/30 rounded-lg border border-border p-8 relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-gold-400/10 rounded-full blur-3xl -mr-16 -mt-16 transition-all duration-700 group-hover:bg-gold-400/20" />
                                <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold-400/10 rounded-full blur-3xl -ml-16 -mb-16 transition-all duration-700 group-hover:bg-gold-400/20" />

                                <div className="relative z-10 h-full flex flex-col justify-center items-center text-center">
                                    <Globe2 className="text-gold-400 mb-6" size={64} strokeWidth={1} />
                                    <h3 className="font-serif text-2xl text-foreground mb-2">Global Connectivity</h3>
                                    <p className="text-muted-foreground text-sm">Excellent Connectivity & Smooth Highways</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* What We Provide (NRI Services) */}
            <section className="py-24 bg-secondary/20 border-y border-border">
                <div className="container mx-auto px-6">
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <span className="text-gold-400 uppercase tracking-[0.25em] text-xs font-bold mb-4 block">White Glove Service</span>
                        <h2 className="font-serif text-3xl md:text-5xl text-foreground mb-6">
                            Tailored for Our NRI Clients
                        </h2>
                        <p className="text-muted-foreground">
                            We understand the challenges of managing investments from afar. Vihav Group provides a comprehensive ecosystem of services to ensure your peace of mind.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { icon: Plane, title: "Seamless Site Visits", desc: "Airport pick-up, luxury accommodation arrangements, and guided property tours." },
                            { icon: ShieldCheck, title: "Legal Assistance", desc: "Complete support with documentation, RERA compliance, and secure transactions." },
                            { icon: HandCoins, title: "Rental Assistance", desc: "Post-possession property management and tenant finding services to maximize ROI." },
                            { icon: Building2, title: "Property Management", desc: "Maintenance, bill payments, and regular upkeep of your asset." },
                            { icon: Landmark, title: "Financial Guidance", desc: "Expert advice on home loans for NRIs and tax implications in India." },
                            { icon: Globe2, title: "Virtual Walkthroughs", desc: "Experience your future home via high-definition video calls and 360° tours." }
                        ].map((service, i) => (
                            <div key={i} className="bg-background p-8 border border-border hover:border-gold-400/50 transition-all duration-300 group hover:-translate-y-1">
                                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-gold-400 mb-6 group-hover:scale-110 transition-transform">
                                    <service.icon size={24} />
                                </div>
                                <h3 className="font-serif text-xl text-foreground mb-3">{service.title}</h3>
                                <p className="text-muted-foreground text-sm leading-relaxed">{service.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Similarity / Comparison Section */}
            <section className="py-24 md:py-32">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-12 md:gap-24">
                        <div>
                            <span className="text-gold-400 uppercase tracking-[0.25em] text-xs font-bold mb-6 block">Home Away From Home</span>
                            <h2 className="font-serif text-3xl md:text-5xl text-foreground mb-8 leading-tight">
                                Bridging the Lifestyle Gap
                            </h2>
                            <p className="text-muted-foreground text-lg mb-8">
                                Moving from the UAE to Vadodara doesn't mean compromising on lifestyle. We build spaces that resonate with the global standards you are used to.
                            </p>
                        </div>
                        <div className="space-y-8">
                            {[
                                { title: "Luxury Infrastructure", desc: "From Italian marble floorings to automated home systems, our specifications match global luxury standards." },
                                { title: "Gated Security", desc: "24/7 surveillance and professional security personnel ensuring a safe environment for your family." },
                                { title: "Cosmopolitan Community", desc: "Live amongst a like-minded community of entrepreneurs, professionals, and fellow NRIs." }
                            ].map((item, i) => (
                                <div key={i} className="flex gap-4">
                                    <div className="w-12 h-px bg-gold-400 mt-3 md:mt-4 shrink-0" />
                                    <div>
                                        <h3 className="font-serif text-xl text-foreground mb-2">{item.title}</h3>
                                        <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-24 bg-primary text-primary-foreground text-center">
                <div className="container mx-auto px-6 max-w-2xl">
                    <h2 className="font-serif text-3xl md:text-5xl mb-6">Start Your Journey Home</h2>
                    <p className="text-primary-foreground/60 mb-10">
                        Let us help you build your legacy in Vadodara. Connect with our dedicated NRI desk today.
                    </p>
                    <div className="bg-primary-foreground/5 p-8 rounded-lg border border-primary-foreground/10 text-left">
                        <EnquiryForm variant="minimal" onSuccess={() => router.push('/thank-you/general')} contextData={{ srd: "68dacdaf2f31c6f751527c44" }} />
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
