"use client";

import Link from "next/link";
import { ArrowUpRight, Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import MagneticWrapper from "@/components/ui/MagneticWrapper";
import EnquiryForm from "@/components/ui/EnquiryForm";

export default function Footer() {
    return (
        <footer className="bg-background text-foreground pt-32 pb-8 overflow-hidden relative transition-colors duration-500">
            <div className="container mx-auto px-6 md:px-12 relative z-10">

                {/* 1. Giant CTA & Form Section */}


                {/* 2. Info Grid */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-12 mb-32">
                    {/* Brand & Address */}
                    <div className="col-span-1 md:col-span-4 space-y-8">
                        <Link href="/" className="block">
                            <img
                                src="/images/project-images/project-logos/vihav-group-logo.svg"
                                alt="Vihav Group"
                                className="h-24 md:h-48 w-auto object-contain opacity-100"
                            />
                        </Link>
                        <div className="space-y-6 text-muted-foreground font-light text-sm leading-relaxed max-w-xs">

                            <p className="pt-4">
                                <a href="mailto:info@vihav.com" className="hover:text-gold-400 transition-colors block mb-1">info@vihav.com</a>
                                <a href="tel:+918866341272" className="hover:text-gold-400 transition-colors">+91 88663 41272</a>
                            </p>
                        </div>
                    </div>

                    {/* Company Links */}
                    <div className="col-span-1 md:col-span-2">
                        <h4 className="text-amber-500 font-bold uppercase tracking-[0.2em] text-xs mb-8">Company</h4>
                        <ul className="space-y-4">
                            {[
                                { name: "Home", link: "/" },
                                { name: "Projects", link: "/projects" },
                                { name: "About Us", link: "/about" },
                                { name: "Awards", link: "/awards" },
                                { name: "One Vihav", link: "/onevihav" },
                                { name: "Careers", link: "/careers" },
                                { name: "Contact Us", link: "/contact" }
                            ].map(item => (
                                <li key={item.name}>
                                    <Link href={item.link} className="text-muted-foreground hover:text-foreground transition-colors text-sm uppercase tracking-wider block hover:translate-x-1 duration-300">
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Project Links */}
                    <div className="col-span-1 md:col-span-3">
                        <h4 className="text-amber-500 font-bold uppercase tracking-[0.2em] text-xs mb-8">Explore Projects</h4>
                        <ul className="space-y-4">
                            {[
                                { name: "3 BHK Flats", link: "/projects?category=Residential&type=3bhk" },
                                { name: "4 BHK Flats", link: "/projects?category=Residential&type=4bhk" },
                                { name: "5 BHK Flats", link: "/projects?category=Residential&type=5bhk" },
                                { name: "Penthouses", link: "/projects?category=Residential&type=penthouse" },
                                { name: "Bungalows", link: "/projects?category=Residential&type=Bunglow" }
                            ].map(item => (
                                <li key={item.name}>
                                    <Link href={item.link} className="text-muted-foreground hover:text-foreground transition-colors text-sm uppercase tracking-wider block hover:translate-x-1 duration-300">
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Socials */}
                    <div className="col-span-1 md:col-span-3">
                        <h4 className="text-amber-500 font-bold uppercase tracking-[0.2em] text-xs mb-8">Connect</h4>
                        <div className="flex flex-wrap gap-4">
                            {[
                                { icon: Instagram, href: "https://www.instagram.com/vihavgroup" },
                                { icon: Facebook, href: "https://www.facebook.com/vihavgroup/" },
                                { icon: Linkedin, href: "https://in.linkedin.com/company/vihav-group" },
                                { icon: Twitter, href: "https://x.com/vihavgroup" },
                                { icon: Youtube, href: "https://www.youtube.com/@vihavgroup" }
                            ].map((social, idx) => (
                                <MagneticWrapper key={idx}>
                                    <a href={social.href} className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-foreground hover:bg-gold-400 hover:border-gold-400 hover:text-black transition-all duration-300">
                                        <social.icon size={20} />
                                    </a>
                                </MagneticWrapper>
                            ))}
                        </div>
                    </div>
                </div>

                {/* 3. Bottom Bar */}
                <div className="flex flex-col md:flex-row justify-between items-center text-muted-foreground text-xs uppercase tracking-widest border-t border-border pt-8">
                    <div className="flex flex-col md:flex-row gap-4 items-center">
                        <p>&copy; {new Date().getFullYear()} Vihav Group.</p>
                        <span className="hidden md:block w-1 h-1 bg-muted-foreground rounded-full"></span>
                        <p className="opacity-70 hover:opacity-100 transition-opacity">Developed by SK Developers</p>
                    </div>
                    <div className="flex space-x-8 mt-4 md:mt-0">
                        <Link href="/privacy-policy" className="hover:text-foreground transition-colors">Privacy Policy</Link>
                        <Link href="/terms-and-conditions" className="hover:text-foreground transition-colors">Terms of Use</Link>
                        {/* <Link href="#" className="hover:text-foreground transition-colors">Cookie Policy</Link> */}
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
                    className="flex text-[25vw] md:text-[28rem] font-bold leading-none text-foreground tracking-tighter translate-y-[30%]"
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
