"use client";

import { useState } from "react";
import { ArrowRight, User, Phone, Mail, Building2, MapPin } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { COUNTRY_CODES } from "@/data/countryCodes";
import { PROJECTS } from "@/data/projects";

export default function ReferralForm({ className }) {
    const [formState, setFormState] = useState({
        referrerName: "",
        referrerPhone: "",
        referrerEmail: "",
        referrerCountryCode: "+91",
        refereeName: "",
        refereePhone: "",
        refereeEmail: "",
        refereeCountryCode: "+91",
        interestedProject: ""
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    // Filter country codes for priority
    const PRIORITY_CODES = ["+91", "+971", "+1", "+44", "+61", "+65"];
    const sortedCountries = [
        ...COUNTRY_CODES.filter(c => PRIORITY_CODES.includes(c.code)),
        ...COUNTRY_CODES.filter(c => !PRIORITY_CODES.includes(c.code))
    ];

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call
        try {
            // In a real app, you'd send this to your API
            await new Promise(resolve => setTimeout(resolve, 2000));
            setIsSuccess(true);
            setTimeout(() => {
                setIsSuccess(false);
                setFormState({
                    referrerName: "", referrerPhone: "", referrerEmail: "", referrerCountryCode: "+91",
                    refereeName: "", refereePhone: "", refereeEmail: "", refereeCountryCode: "+91",
                    interestedProject: ""
                });
            }, 5000);
        } catch (error) {
            console.error("Error submitting form:", error);
        } finally {
            setIsSubmitting(false);
        }
    };

    if (isSuccess) {
        return (
            <div className="flex flex-col items-center justify-center p-12 text-center bg-card/50 backdrop-blur-md border border-gold-400/20 rounded-2xl h-full animate-in fade-in duration-700">
                <div className="w-20 h-20 rounded-full bg-gold-400/10 text-gold-400 flex items-center justify-center mb-6">
                    <ArrowRight size={40} />
                </div>
                <h4 className="text-3xl font-serif mb-4 text-white">Referral Submitted</h4>
                <p className="text-muted-foreground text-lg font-light">
                    Thank you for referring. Our team will contact your referral shortly.
                </p>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className={`bg-gradient-to-br from-onevihav-green via-[#0e3b2b] to-onevihav-green border border-gold-400/40 p-6 md:p-16 rounded-sm shadow-2xl relative overflow-hidden ${className}`}>

            {/* Background Texture for Card Feel */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] pointer-events-none" />
            <div className="absolute top-4 left-4 right-4 bottom-4 border border-gold-400/20 pointer-events-none" />

            {/* Section 1: Referrer Details */}
            <div className="space-y-12 relative z-10">
                <div className="flex items-center gap-6 mb-8 border-b border-gold-400/20 pb-6">
                    <span className="text-6xl font-serif text-gold-400/20 font-bold -mb-4">01</span>
                    <h3 className="text-2xl md:text-3xl font-serif tracking-widest text-gold-400 uppercase">Your Information</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="group space-y-4">
                        <label className="text-xs uppercase tracking-[0.2em] text-gold-400/60 font-medium ml-1">Full Name</label>
                        <div className="relative">
                            <User className="absolute left-0 bottom-4 text-gold-400/60 w-5 h-5 group-focus-within:text-gold-400 transition-colors" />
                            <input
                                type="text"
                                required
                                value={formState.referrerName}
                                onChange={(e) => setFormState({ ...formState, referrerName: e.target.value })}
                                className="w-full bg-transparent border-b border-gold-400/30 py-4 pl-10 pr-4 text-white text-base md:text-lg placeholder:text-white/20 focus:border-gold-400 focus:outline-none transition-all duration-500 font-light"
                                placeholder="Enter your full name"
                            />
                        </div>
                    </div>

                    <div className="group space-y-4">
                        <label className="text-xs uppercase tracking-[0.2em] text-gold-400/60 font-medium ml-1">Email Address</label>
                        <div className="relative">
                            <Mail className="absolute left-0 bottom-4 text-gold-400/60 w-5 h-5 group-focus-within:text-gold-400 transition-colors" />
                            <input
                                type="email"
                                required
                                value={formState.referrerEmail}
                                onChange={(e) => setFormState({ ...formState, referrerEmail: e.target.value })}
                                className="w-full bg-transparent border-b border-gold-400/30 py-4 pl-10 pr-4 text-white text-lg placeholder:text-white/20 focus:border-gold-400 focus:outline-none transition-all duration-500 font-light"
                                placeholder="name@example.com"
                            />
                        </div>
                    </div>

                    <div className="group space-y-4 md:col-span-2">
                        <label className="text-xs uppercase tracking-[0.2em] text-gold-400/60 font-medium ml-1">Phone Number</label>
                        <div className="flex gap-8">
                            <div className="w-32 relative">
                                <select
                                    value={formState.referrerCountryCode}
                                    onChange={(e) => setFormState({ ...formState, referrerCountryCode: e.target.value })}
                                    className="w-full h-full bg-transparent border-b border-gold-400/30 py-4 text-white text-xl focus:border-gold-400 focus:outline-none appearance-none cursor-pointer font-light"
                                >
                                    {sortedCountries.map((item, index) => (
                                        <option key={index} value={item.code} className="bg-onevihav-green text-white border-none">{item.code} {item.flag}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="relative flex-1">
                                <Phone className="absolute left-0 bottom-4 text-gold-400/60 w-5 h-5 group-focus-within:text-gold-400 transition-colors" />
                                <input
                                    type="tel"
                                    required
                                    value={formState.referrerPhone}
                                    onChange={(e) => setFormState({ ...formState, referrerPhone: e.target.value })}
                                    className="w-full h-full bg-transparent border-b border-gold-400/30 py-4 pl-10 pr-4 text-white text-xl placeholder:text-white/20 focus:border-gold-400 focus:outline-none transition-all duration-500 font-light tracking-wider"
                                    placeholder="98765 43210"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Section 2: Referee Details */}
            <div className="space-y-8 md:space-y-12 relative z-10 mt-12 md:mt-16 pt-8 border-t border-gold-400/10">
                <div className="flex items-center gap-4 md:gap-6 mb-8 border-b border-gold-400/20 pb-4 md:pb-6">
                    <span className="text-4xl md:text-6xl font-serif text-gold-400/20 font-bold -mb-2 md:-mb-4">02</span>
                    <h3 className="text-xl md:text-3xl font-serif tracking-widest text-gold-400 uppercase">Referral Details</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                    <div className="group space-y-4">
                        <label className="text-xs uppercase tracking-[0.2em] text-gold-400/60 font-medium ml-1">Friend's Name</label>
                        <div className="relative">
                            <User className="absolute left-0 bottom-4 text-gold-400/60 w-5 h-5 group-focus-within:text-gold-400 transition-colors" />
                            <input
                                type="text"
                                required
                                value={formState.refereeName}
                                onChange={(e) => setFormState({ ...formState, refereeName: e.target.value })}
                                className="w-full bg-transparent border-b border-gold-400/30 py-4 pl-10 pr-4 text-white text-lg placeholder:text-white/20 focus:border-gold-400 focus:outline-none transition-all duration-500 font-light"
                                placeholder="Enter friend's name"
                            />
                        </div>
                    </div>

                    <div className="group space-y-4">
                        <label className="text-xs uppercase tracking-[0.2em] text-gold-400/60 font-medium ml-1">Friend's Email</label>
                        <div className="relative">
                            <Mail className="absolute left-0 bottom-4 text-gold-400/60 w-5 h-5 group-focus-within:text-gold-400 transition-colors" />
                            <input
                                type="email"
                                required
                                value={formState.refereeEmail}
                                onChange={(e) => setFormState({ ...formState, refereeEmail: e.target.value })}
                                className="w-full bg-transparent border-b border-gold-400/30 py-4 pl-10 pr-4 text-white text-lg placeholder:text-white/20 focus:border-gold-400 focus:outline-none transition-all duration-500 font-light"
                                placeholder="friend@example.com"
                            />
                        </div>
                    </div>

                    <div className="group space-y-4 md:col-span-2">
                        <label className="text-xs uppercase tracking-[0.2em] text-gold-400/60 font-medium ml-1">Friend's Phone</label>
                        <div className="flex gap-8">
                            <div className="w-32 relative">
                                <select
                                    value={formState.refereeCountryCode}
                                    onChange={(e) => setFormState({ ...formState, refereeCountryCode: e.target.value })}
                                    className="w-full h-full bg-transparent border-b border-gold-400/30 py-4 text-white text-xl focus:border-gold-400 focus:outline-none appearance-none cursor-pointer font-light"
                                >
                                    {sortedCountries.map((item, index) => (
                                        <option key={index} value={item.code} className="bg-onevihav-green text-white border-none">{item.code} {item.flag}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="relative flex-1">
                                <Phone className="absolute left-0 bottom-4 text-gold-400/60 w-5 h-5 group-focus-within:text-gold-400 transition-colors" />
                                <input
                                    type="tel"
                                    required
                                    value={formState.refereePhone}
                                    onChange={(e) => setFormState({ ...formState, refereePhone: e.target.value })}
                                    className="w-full h-full bg-transparent border-b border-gold-400/30 py-4 pl-10 pr-4 text-white text-xl placeholder:text-white/20 focus:border-gold-400 focus:outline-none transition-all duration-500 font-light tracking-wider"
                                    placeholder="98765 43210"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="group space-y-4 md:col-span-2">
                        <label className="text-xs uppercase tracking-[0.2em] text-gold-400/60 font-medium ml-1">Interested Project</label>
                        <div className="relative">
                            <Building2 className="absolute left-0 bottom-4 text-gold-400/60 w-5 h-5 group-focus-within:text-gold-400 transition-colors" />
                            <select
                                value={formState.interestedProject}
                                onChange={(e) => setFormState({ ...formState, interestedProject: e.target.value })}
                                className="w-full bg-transparent border-b border-gold-400/30 py-4 pl-10 pr-4 text-white text-xl focus:border-gold-400 focus:outline-none appearance-none cursor-pointer font-light"
                            >
                                <option value="" disabled className="text-white/40">Select Project (Optional)</option>
                                {PROJECTS.map((project) => (
                                    <option key={project.id} value={project.title} className="bg-onevihav-green text-white">{project.title}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>
            </div>

            <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-6 mt-8 text-xl font-bold uppercase tracking-[0.2em] bg-gold-400 text-black hover:bg-white hover:text-onevihav-green transition-all duration-500 rounded-sm shadow-[0_0_30px_rgba(212,175,55,0.3)] hover:shadow-[0_0_50px_rgba(255,255,255,0.5)]"
            >
                {isSubmitting ? "Submitting Invitation..." : "Send Invitation"}
            </Button>

        </form>
    );
}
