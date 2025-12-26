"use client";

import Link from "next/link";
import { ArrowUpRight, Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import MagneticWrapper from "@/components/ui/MagneticWrapper";

export default function Footer() {
    return (
        <footer className="bg-luxury-black text-white pt-32 pb-8 overflow-hidden relative">
            <div className="container mx-auto px-6 relative z-10">

                {/* 1. Giant CTA Section */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-32 border-b border-white/10 pb-24 gap-12 md:gap-0">
                    <div>
                        <span className="text-gold-400 uppercase tracking-[0.25em] text-xs font-bold mb-6 block">Start Your Journey</span>
                        <h2 className="text-5xl md:text-8xl font-serif leading-[0.9] text-white">
                            Let&apos;s build<br />
                            <span className="text-gray-500">your legacy.</span>
                        </h2>
                    </div>

                    <div className="mb-2">
                        <Link href="/projects">
                            <Button size="lg" className="rounded-full h-20 px-10 text-lg bg-white text-black hover:bg-gold-400 hover:text-black border-none">
                                View Projects <ArrowUpRight className="ml-2 w-6 h-6" />
                            </Button>
                        </Link>
                    </div>
                </div>

                {/* 2. Info Grid */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-12 mb-32">
                    {/* Brand & Address */}
                    <div className="col-span-1 md:col-span-4 space-y-8">
                        <Link href="/" className="block">
                            <img
                                src="/vihav-logo-final.png"
                                alt="Vihav Group"
                                className="h-12 w-auto object-contain opacity-100 invert-0"
                            />
                        </Link>
                        <div className="space-y-6 text-gray-400 font-light text-sm leading-relaxed max-w-xs">
                            <p>
                                <strong className="block text-white mb-2 uppercase tracking-widest text-xs">Corporate Office</strong>
                                Vihav Supremus, Near Iscon Heights,<br />
                                Gotri, Vadodara, Gujarat 390021
                            </p>
                            <p>
                                <strong className="block text-white mb-2 uppercase tracking-widest text-xs mt-6">Registered Office</strong>
                                22, Greenwood, Sevasi-Ankodia Road,<br />
                                Vadodara, Gujarat 390021
                            </p>
                            <p className="pt-4">
                                <a href="mailto:info@vihav.com" className="hover:text-gold-400 transition-colors block mb-1">info@vihav.com</a>
                                <a href="tel:+918866341272" className="hover:text-gold-400 transition-colors">+91 88663 41272</a>
                            </p>
                        </div>
                    </div>

                    {/* Company Links */}
                    <div className="col-span-1 md:col-span-2">
                        <h4 className="text-gold-400 font-bold uppercase tracking-[0.2em] text-xs mb-8">Company</h4>
                        <ul className="space-y-4">
                            {[
                                { name: "Our Story", link: "/about" },
                                { name: "Leadership", link: "/about" },
                                { name: "Awards", link: "/awards" },
                                { name: "Sustainability", link: "#" },
                                { name: "Careers", link: "#" },
                                { name: "Contact", link: "/contact" }
                            ].map(item => (
                                <li key={item.name}>
                                    <Link href={item.link} className="text-gray-400 hover:text-white transition-colors text-sm uppercase tracking-wider block hover:translate-x-1 duration-300">
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Project Links */}
                    <div className="col-span-1 md:col-span-3">
                        <h4 className="text-gold-400 font-bold uppercase tracking-[0.2em] text-xs mb-8">Selected Projects</h4>
                        <ul className="space-y-4">
                            {[
                                "Keystone Skyvillas",
                                "Vihav Elinor",
                                "Supremus III",
                                "Vihav Trade Centre",
                                "Vihav CBD"
                            ].map(item => (
                                <li key={item}>
                                    <Link href={`/projects/${item.toLowerCase().replace(/ /g, "-")}`} className="text-gray-400 hover:text-white transition-colors text-sm uppercase tracking-wider block hover:translate-x-1 duration-300">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Socials */}
                    <div className="col-span-1 md:col-span-3">
                        <h4 className="text-gold-400 font-bold uppercase tracking-[0.2em] text-xs mb-8">Connect</h4>
                        <div className="flex flex-wrap gap-4">
                            {[
                                { icon: Instagram, href: "#" },
                                { icon: Facebook, href: "#" },
                                { icon: Linkedin, href: "#" },
                                { icon: Twitter, href: "#" },
                                { icon: Youtube, href: "#" }
                            ].map((social, idx) => (
                                <MagneticWrapper key={idx}>
                                    <a href={social.href} className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-gold-400 hover:border-gold-400 hover:text-black transition-all duration-300">
                                        <social.icon size={20} />
                                    </a>
                                </MagneticWrapper>
                            ))}
                        </div>
                    </div>
                </div>

                {/* 3. Bottom Bar */}
                <div className="flex flex-col md:flex-row justify-between items-center text-white/30 text-xs uppercase tracking-widest border-t border-white/5 pt-8">
                    <p>&copy; {new Date().getFullYear()} Vihav Group.</p>
                    <div className="flex space-x-8 mt-4 md:mt-0">
                        <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-white transition-colors">Terms of Use</Link>
                        <Link href="#" className="hover:text-white transition-colors">Cookie Policy</Link>
                    </div>
                </div>

            </div>

            {/* 4. Giant Watermark */}
            <div className="absolute bottom-0 left-0 right-0 overflow-hidden pointer-events-none select-none flex justify-center opacity-[0.03]">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-10%" }}
                    variants={{
                        visible: { transition: { staggerChildren: 0.1 } }
                    }}
                    className="flex text-[15rem] md:text-[28rem] font-bold leading-none text-white tracking-tighter translate-y-[30%]"
                >
                    {["V", "I", "H", "A", "V"].map((letter, i) => (
                        <motion.span
                            key={i}
                            variants={{
                                hidden: { y: "100%" },
                                visible: { y: "0%", transition: { duration: 1, ease: [0.22, 1, 0.36, 1] } }
                            }}
                        >
                            {letter}
                        </motion.span>
                    ))}
                </motion.div>
            </div>
        </footer>
    );
}
