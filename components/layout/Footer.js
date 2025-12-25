import Link from "next/link";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-luxury-black text-white pt-20 pb-10 border-t border-white/5">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    {/* Brand Column */}
                    <div className="space-y-6">
                        <Link href="/" className="block mb-6">
                            <img
                                src="/vihav-logo-final.png"
                                alt="Vihav Group"
                                className="h-16 w-auto object-contain opacity-90"
                            />
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                            Vihav Group stands at the forefront of luxury real estate, crafting timeless legacies with uncompromising quality and attention to detail.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-gold-400 font-bold uppercase tracking-wider mb-6 text-sm">Discover</h4>
                        <ul className="space-y-4">
                            {["Our Story", "Leadership", "Awards", "Sustainability", "Careers"].map(item => (
                                <li key={item}>
                                    <Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Properties */}
                    <div>
                        <h4 className="text-gold-400 font-bold uppercase tracking-wider mb-6 text-sm">Projects</h4>
                        <ul className="space-y-4">
                            {["Keystone Skyvillas", "Vihav Elinor", "Supremus III", "Vihav Trade Centre", "Vihav CBD"].map(item => (
                                <li key={item}>
                                    <Link href={`/projects/${item.toLowerCase().replace(/ /g, "-")}`} className="text-gray-400 hover:text-white transition-colors text-sm">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-gold-400 font-bold uppercase tracking-wider mb-6 text-sm">Contact Us</h4>
                        <div className="space-y-4 text-sm text-gray-400">
                            <p>
                                <strong className="block text-white mb-1">Corporate Office</strong>
                                Vihav Supremus, Near Iscon Heights,<br />
                                Gotri, Vadodara, Gujarat 390021
                            </p>
                            <p>
                                <strong className="block text-white mb-1">Registered Office</strong>
                                22, Greenwood, Sevasi-Ankodia Road,<br />
                                Vadodara, Gujarat 390021
                            </p>
                            <div className="pt-2">
                                <a href="tel:+918866341272" className="block hover:text-gold-400 transition-colors">+91 88663 41272</a>
                                <a href="mailto:info@vihav.com" className="block hover:text-gold-400 transition-colors">info@vihav.com</a>
                            </div>
                        </div>

                        <div className="flex space-x-4 mt-6">
                            <Facebook size={20} className="text-gray-400 hover:text-gold-400 cursor-pointer" />
                            <Instagram size={20} className="text-gray-400 hover:text-gold-400 cursor-pointer" />
                            <Twitter size={20} className="text-gray-400 hover:text-gold-400 cursor-pointer" />
                            <Linkedin size={20} className="text-gray-400 hover:text-gold-400 cursor-pointer" />
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
                    <p>&copy; {new Date().getFullYear()} Vihav Group. All rights reserved.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <Link href="#" className="hover:text-white">Privacy Policy</Link>
                        <Link href="#" className="hover:text-white">Terms of Use</Link>
                        <Link href="#" className="hover:text-white">Cookie Policy</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
