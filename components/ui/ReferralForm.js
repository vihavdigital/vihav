"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { User, Mail, Phone, Building2 } from 'lucide-react';
import { Button } from "@/components/ui/Button";
import { COUNTRY_CODES } from "@/data/countryCodes";
import { PROJECTS } from "@/data/projects";

export default function ReferralForm({ className = "" }) {
    const [formState, setFormState] = useState({
        referrerName: "",
        referrerEmail: "",
        referrerCountryCode: "+91",
        referrerPhone: "",
        refereeName: "",
        refereeEmail: "",
        refereeCountryCode: "+91",
        refereePhone: "",
        interestedProject: "",
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [termsAccepted, setTermsAccepted] = useState(false);
    const [showTermsModal, setShowTermsModal] = useState(false);
    const [hasViewedTerms, setHasViewedTerms] = useState(false);

    // Sort country codes alphabetically
    const sortedCountries = [...COUNTRY_CODES].sort((a, b) => a.name.localeCompare(b.name));

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!termsAccepted) {
            alert("Please accept the Terms & Conditions to proceed.");
            return;
        }

        if (!hasViewedTerms) {
            alert("Please view the Terms & Conditions before submitting.");
            return;
        }

        setIsSubmitting(true);

        try {
            // Simulate form submission
            await new Promise(resolve => setTimeout(resolve, 2000));
            console.log("Form submitted:", formState);
            alert("Referral submitted successfully!");

            // Reset form
            setFormState({
                referrerName: "",
                referrerEmail: "",
                referrerCountryCode: "+91",
                referrerPhone: "",
                refereeName: "",
                refereeEmail: "",
                refereeCountryCode: "+91",
                refereePhone: "",
                interestedProject: "",
            });
            setTermsAccepted(false);
            setHasViewedTerms(false);
        } catch (error) {
            console.error("Submission error:", error);
            alert("Submission failed. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    }

    // Handle scroll locking side effect
    useEffect(() => {
        if (showTermsModal) {
            document.body.style.overflow = 'hidden';
            document.documentElement.style.overflow = 'hidden'; // Lock HTML as well
            document.body.style.paddingRight = '15px'; // Prevent layout shift
        } else {
            document.body.style.overflow = 'unset';
            document.documentElement.style.overflow = 'unset';
            document.body.style.paddingRight = '0px';
        }
        return () => {
            document.body.style.overflow = 'unset';
            document.documentElement.style.overflow = 'unset';
            document.body.style.paddingRight = '0px';
        };
    }, [showTermsModal]);

    const openTermsModal = () => {
        setShowTermsModal(true);
        setHasViewedTerms(true);
    };

    const closeTermsModal = () => {
        setShowTermsModal(false);
    };

    return (
        <>
            <form onSubmit={handleSubmit} className={`bg-gradient-to-br from-onevihav-green via-[#0e3b2b] to-onevihav-green border border-gold-400/40 p-6 md:p-12 rounded-sm md:shadow-2xl relative overflow-hidden ${className}`}>

                {/* Background Texture for Card Feel */}
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] pointer-events-none" />
                <div className="absolute top-6 left-6 right-6 bottom-6 border border-gold-400/20 pointer-events-none" />

                {/* Section 1: Referrer Details */}
                <div className="space-y-10 relative z-10">
                    <div className="flex items-center gap-8 mb-10 pb-6 border-b border-gold-400/30">
                        <span className="text-4xl md:text-5xl font-serif text-gold-400/15 font-bold">01</span>
                        <h3 className="text-xl md:text-2xl font-serif tracking-widest text-gold-400 uppercase font-light">Your Information</h3>
                    </div>

                    <div className="grid grid-cols-1 gap-y-8 md:gap-y-10">
                        <div className="group">
                            <label className="block text-xs uppercase tracking-[0.2em] text-gold-400/70 font-medium mb-3">Full Name</label>
                            <div className="flex items-center gap-4 border-b-2 border-gold-400/30 group-focus-within:border-gold-400 transition-colors duration-300 pb-3">
                                <User className="text-gold-400/60 w-5 h-5 flex-shrink-0 group-focus-within:text-gold-400 transition-colors" />
                                <input
                                    type="text"
                                    required
                                    value={formState.referrerName}
                                    onChange={(e) => setFormState({ ...formState, referrerName: e.target.value })}
                                    className="w-full bg-transparent border-none p-0 text-white text-lg md:text-xl placeholder:text-white/30 focus:ring-0 focus:outline-none font-light"
                                    placeholder="Enter your full name"
                                />
                            </div>
                        </div>

                        <div className="group">
                            <label className="block text-xs uppercase tracking-[0.2em] text-gold-400/70 font-medium mb-3">Email Address</label>
                            <div className="flex items-center gap-4 border-b-2 border-gold-400/30 group-focus-within:border-gold-400 transition-colors duration-300 pb-3">
                                <Mail className="text-gold-400/60 w-5 h-5 flex-shrink-0 group-focus-within:text-gold-400 transition-colors" />
                                <input
                                    type="email"
                                    required
                                    value={formState.referrerEmail}
                                    onChange={(e) => setFormState({ ...formState, referrerEmail: e.target.value })}
                                    className="w-full bg-transparent border-none p-0 text-white text-lg md:text-xl placeholder:text-white/30 focus:ring-0 focus:outline-none font-light"
                                    placeholder="name@example.com"
                                />
                            </div>
                        </div>

                        <div className="group">
                            <label className="block text-xs uppercase tracking-[0.2em] text-gold-400/70 font-medium mb-3">Phone Number</label>
                            <div className="flex gap-4">
                                <div className="w-24 md:w-32 border-b-2 border-gold-400/30 focus-within:border-gold-400 transition-colors duration-300">
                                    <select
                                        value={formState.referrerCountryCode}
                                        onChange={(e) => setFormState({ ...formState, referrerCountryCode: e.target.value })}
                                        className="w-full bg-transparent border-none py-3 text-white text-lg md:text-xl focus:ring-0 focus:outline-none appearance-none cursor-pointer font-light"
                                    >
                                        {sortedCountries.map((item, index) => (
                                            <option key={index} value={item.code} className="bg-onevihav-green text-white text-base">{item.code} {item.flag}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className="flex-1 flex items-center gap-4 border-b-2 border-gold-400/30 group-focus-within:border-gold-400 transition-colors duration-300 pb-3">
                                    <Phone className="text-gold-400/60 w-5 h-5 flex-shrink-0 group-focus-within:text-gold-400 transition-colors" />
                                    <input
                                        type="tel"
                                        required
                                        value={formState.referrerPhone}
                                        onChange={(e) => setFormState({ ...formState, referrerPhone: e.target.value })}
                                        className="w-full bg-transparent border-none p-0 text-white text-lg md:text-xl placeholder:text-white/40 focus:ring-0 focus:outline-none font-light tracking-wide"
                                        placeholder="98765 43210"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Section 2: Referee Details */}
                <div className="space-y-10 relative z-10 mt-16 pt-10 border-t border-gold-400/20">
                    <div className="flex items-center gap-8 mb-10 pb-6 border-b border-gold-400/30">
                        <span className="text-4xl md:text-5xl font-serif text-gold-400/15 font-bold">02</span>
                        <h3 className="text-xl md:text-2xl font-serif tracking-widest text-gold-400 uppercase font-light">Referral Details</h3>
                    </div>

                    <div className="grid grid-cols-1 gap-y-8 md:gap-y-10">
                        <div className="group">
                            <label className="block text-xs uppercase tracking-[0.2em] text-gold-400/70 font-medium mb-3">Friend&apos;s Name</label>
                            <div className="flex items-center gap-4 border-b-2 border-gold-400/30 group-focus-within:border-gold-400 transition-colors duration-300 pb-3">
                                <User className="text-gold-400/60 w-5 h-5 flex-shrink-0 group-focus-within:text-gold-400 transition-colors" />
                                <input
                                    type="text"
                                    required
                                    value={formState.refereeName}
                                    onChange={(e) => setFormState({ ...formState, refereeName: e.target.value })}
                                    className="w-full bg-transparent border-none p-0 text-white text-lg md:text-xl placeholder:text-white/30 focus:ring-0 focus:outline-none font-light"
                                    placeholder="Enter friend's name"
                                />
                            </div>
                        </div>

                        <div className="group">
                            <label className="block text-xs uppercase tracking-[0.2em] text-gold-400/70 font-medium mb-3">Friend&apos;s Email</label>
                            <div className="flex items-center gap-4 border-b-2 border-gold-400/30 group-focus-within:border-gold-400 transition-colors duration-300 pb-3">
                                <Mail className="text-gold-400/60 w-5 h-5 flex-shrink-0 group-focus-within:text-gold-400 transition-colors" />
                                <input
                                    type="email"
                                    required
                                    value={formState.refereeEmail}
                                    onChange={(e) => setFormState({ ...formState, refereeEmail: e.target.value })}
                                    className="w-full bg-transparent border-none p-0 text-white text-lg md:text-xl placeholder:text-white/30 focus:ring-0 focus:outline-none font-light"
                                    placeholder="friend@example.com"
                                />
                            </div>
                        </div>

                        <div className="group">
                            <label className="block text-xs uppercase tracking-[0.2em] text-gold-400/70 font-medium mb-3">Friend&apos;s Phone</label>
                            <div className="flex gap-4">
                                <div className="w-24 md:w-32 border-b-2 border-gold-400/30 focus-within:border-gold-400 transition-colors duration-300">
                                    <select
                                        value={formState.refereeCountryCode}
                                        onChange={(e) => setFormState({ ...formState, refereeCountryCode: e.target.value })}
                                        className="w-full bg-transparent border-none py-3 text-white text-lg md:text-xl focus:ring-0 focus:outline-none appearance-none cursor-pointer font-light"
                                    >
                                        {sortedCountries.map((item, index) => (
                                            <option key={index} value={item.code} className="bg-onevihav-green text-white text-base">{item.code} {item.flag}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className="flex-1 flex items-center gap-4 border-b-2 border-gold-400/30 group-focus-within:border-gold-400 transition-colors duration-300 pb-3">
                                    <Phone className="text-gold-400/60 w-5 h-5 flex-shrink-0 group-focus-within:text-gold-400 transition-colors" />
                                    <input
                                        type="tel"
                                        required
                                        value={formState.refereePhone}
                                        onChange={(e) => setFormState({ ...formState, refereePhone: e.target.value })}
                                        className="w-full bg-transparent border-none p-0 text-white text-lg md:text-xl placeholder:text-white/40 focus:ring-0 focus:outline-none font-light tracking-wide"
                                        placeholder="98765 43210"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="group">
                            <label className="block text-xs uppercase tracking-[0.2em] text-gold-400/70 font-medium mb-3">Interested Project</label>
                            <div className="flex items-center gap-4 border-b-2 border-gold-400/30 group-focus-within:border-gold-400 transition-colors duration-300 pb-3">
                                <Building2 className="text-gold-400/60 w-5 h-5 flex-shrink-0 group-focus-within:text-gold-400 transition-colors" />
                                <select
                                    value={formState.interestedProject}
                                    onChange={(e) => setFormState({ ...formState, interestedProject: e.target.value })}
                                    className="w-full bg-transparent border-none p-0 text-white text-lg md:text-xl focus:ring-0 focus:outline-none appearance-none cursor-pointer font-light"
                                >
                                    <option value="" disabled className="text-white/40">Select Project (Optional)</option>
                                    {PROJECTS.map((project) => (
                                        <option key={project.id} value={project.title} className="bg-onevihav-green text-white text-base">{project.title}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Terms & Conditions */}
                <div className="relative z-10 mt-12 pt-8 border-t border-gold-400/20">
                    <div className="flex items-start gap-4">
                        <input
                            type="checkbox"
                            id="terms"
                            checked={termsAccepted}
                            onChange={(e) => setTermsAccepted(e.target.checked)}
                            className="mt-1 w-5 h-5 rounded border-2 border-gold-400/40 bg-transparent checked:bg-gold-400 focus:ring-2 focus:ring-gold-400 focus:ring-offset-2 focus:ring-offset-black cursor-pointer flex-shrink-0"
                        />
                        <label htmlFor="terms" className="text-white/80 text-sm md:text-base font-light leading-relaxed select-none">
                            I have read and agree to the{' '}
                            <button
                                type="button"
                                onClick={openTermsModal}
                                className="text-gold-400 hover:text-gold-300 underline underline-offset-4 transition-colors font-medium"
                            >
                                Terms & Conditions
                            </button>
                            {' '}of the OneVihav Referral Program.
                        </label>
                    </div>
                </div>

                <Button
                    type="submit"
                    disabled={isSubmitting || !termsAccepted || !hasViewedTerms}
                    className={`w-full py-5 mt-10 text-lg font-bold uppercase tracking-[0.2em] transition-all duration-500 rounded-sm ${isSubmitting || !termsAccepted || !hasViewedTerms
                        ? 'bg-gold-400/40 text-white/40 cursor-not-allowed'
                        : 'bg-gold-400 text-black hover:bg-white hover:text-onevihav-green shadow-[0_0_30px_rgba(212,175,55,0.3)] hover:shadow-[0_0_50px_rgba(255,255,255,0.5)]'
                        }`}
                >
                    {isSubmitting ? "Submitting..." : "Submit"}
                </Button>

            </form>

            {/* Terms & Conditions Modal using Portal */}
            {showTermsModal && createPortal(
                <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 md:p-6 bg-black/95 backdrop-blur-xl animate-in fade-in duration-300" onClick={closeTermsModal}>
                    <div
                        className="relative bg-gradient-to-br from-[#0a2f23] to-[#051f16] border border-gold-400/40 rounded-sm max-w-3xl w-full flex flex-col max-h-[85vh] shadow-[0_0_50px_rgba(0,0,0,0.8)] animate-in zoom-in-95 duration-300 overflow-hidden"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Header - Sticky */}
                        <div className="p-6 border-b border-gold-400/20 bg-[#0a2f23] shrink-0 flex justify-between items-start gap-4 shadow-sm z-20">
                            <div>
                                <h2 className="text-2xl md:text-3xl font-serif text-gold-400 tracking-wider">Terms & Conditions</h2>
                                <p className="text-white/50 text-xs md:text-sm mt-1 tracking-wide uppercase">OneVihav Referral Program</p>
                            </div>
                            <button
                                onClick={closeTermsModal}
                                className="text-gold-400/60 hover:text-gold-400 hover:bg-gold-400/10 p-2 rounded-full transition-all"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 18 18" /></svg>
                            </button>
                        </div>

                        {/* Content - Scrollable */}
                        <div
                            className="flex-1 overflow-y-auto p-6 md:p-8 custom-scrollbar overscroll-contain bg-black/20"
                            onWheel={(e) => e.stopPropagation()}
                            onTouchMove={(e) => e.stopPropagation()}
                        >
                            <div className="space-y-8 text-white/90 leading-relaxed font-light text-sm md:text-base">
                                <div className="bg-white/5 p-6 rounded border border-white/5">
                                    <h3 className="text-xl font-serif text-gold-400 mb-3 flex items-center gap-3">
                                        <span className="text-gold-400/30 font-bold text-3xl">01</span>
                                        Voluntary Participation
                                    </h3>
                                    <p className="text-base md:text-lg text-gray-300">Participation in the One Vihav Referral Program is voluntary. The referrer agrees to submit referral details through authorized Vihav Group platforms. Incomplete or incorrect submissions may be deemed invalid.</p>
                                </div>

                                <div className="bg-white/5 p-6 rounded border border-white/5">
                                    <h3 className="text-xl font-serif text-gold-400 mb-3 flex items-center gap-3">
                                        <span className="text-gold-400/30 font-bold text-3xl">02</span>
                                        Referral Information & Consent
                                    </h3>
                                    <p className="text-base md:text-lg text-gray-300">The referrer confirms that referral details are shared with prior consent of the referral lead and in good faith.</p>
                                </div>

                                <div className="bg-white/5 p-6 rounded border border-white/5">
                                    <h3 className="text-xl font-serif text-gold-400 mb-3 flex items-center gap-3">
                                        <span className="text-gold-400/30 font-bold text-3xl">03</span>
                                        Referral Date & Validation
                                    </h3>
                                    <p className="text-base md:text-lg text-gray-300">The submission date shall be considered the Referral Date (RD). Leads already existing in the Vihav Group database shall be treated as invalid if they are within 1 year from the date of submission.</p>
                                </div>

                                <div className="bg-white/5 p-6 rounded border border-white/5">
                                    <h3 className="text-xl font-serif text-gold-400 mb-3 flex items-center gap-3">
                                        <span className="text-gold-400/30 font-bold text-3xl">04</span>
                                        Lead Validity
                                    </h3>
                                    <p className="text-base md:text-lg text-gray-300">All valid referrals shall remain tagged to the referrer subject to confirmation as per Clause 5.</p>
                                </div>

                                <div className="bg-white/5 p-6 rounded border border-white/5">
                                    <h3 className="text-xl font-serif text-gold-400 mb-3 flex items-center gap-3">
                                        <span className="text-gold-400/30 font-bold text-3xl">05</span>
                                        Confirmation, Communication & Validity Period
                                    </h3>
                                    <p className="text-base md:text-lg text-gray-300">Upon submission of a referral, Vihav Group shall review and confirm the validity of the Referral Lead through registered communication channels (email/phone/WhatsApp) within 1-2 working days. The date on which such official confirmation is shared by Vihav Group shall be considered the Confirmation Date (CD). From the Confirmation Date, the referral shall remain valid and exclusively tagged to the referrer for a period of 90 days.</p>
                                </div>

                                <div className="bg-white/5 p-6 rounded border border-white/5">
                                    <h3 className="text-xl font-serif text-gold-400 mb-3 flex items-center gap-3">
                                        <span className="text-gold-400/30 font-bold text-3xl">06</span>
                                        Confidentiality
                                    </h3>
                                    <p className="text-base md:text-lg text-gray-300">While your confidentiality shall be maintained through the program unless it is absolutely must for us to disclose your name to your Referrals name/ e-mail/ id / mobile no in case of any objections by individuals Referral Lead / Referral Lead details.</p>
                                </div>

                                <div className="bg-white/5 p-6 rounded border border-white/5">
                                    <h3 className="text-xl font-serif text-gold-400 mb-3 flex items-center gap-3">
                                        <span className="text-gold-400/30 font-bold text-3xl">07</span>
                                        Contacting Referral Leads
                                    </h3>
                                    <p className="text-base md:text-lg text-gray-300">Vihav Group may contact referral leads via calls, emails, SMS, or WhatsApp for marketing and sales follow-ups.</p>
                                </div>

                                <div className="bg-white/5 p-6 rounded border border-white/5">
                                    <h3 className="text-xl font-serif text-gold-400 mb-3 flex items-center gap-3">
                                        <span className="text-gold-400/30 font-bold text-3xl">08</span>
                                        Referral Eligibility
                                    </h3>
                                    <p className="text-base md:text-lg text-gray-300">Referral benefits apply only upon successful booking and registration of the Agreement to Sale by the referral lead.</p>
                                </div>

                                <div className="bg-white/5 p-6 rounded border border-white/5">
                                    <h3 className="text-xl font-serif text-gold-400 mb-3 flex items-center gap-3">
                                        <span className="text-gold-400/30 font-bold text-3xl">09</span>
                                        Taxes
                                    </h3>
                                    <p className="text-base md:text-lg text-gray-300">Referral benefits are subject to applicable taxes and TDS, payable by the referrer.</p>
                                </div>

                                <div className="bg-white/5 p-6 rounded border border-white/5">
                                    <h3 className="text-xl font-serif text-gold-400 mb-3 flex items-center gap-3">
                                        <span className="text-gold-400/30 font-bold text-3xl">10</span>
                                        Disqualification
                                    </h3>
                                    <p className="text-base md:text-lg text-gray-300">Leads not converting within the validity period or opting out of communication shall be discontinued.</p>
                                </div>

                                <div className="bg-white/5 p-6 rounded border border-white/5">
                                    <h3 className="text-xl font-serif text-gold-400 mb-3 flex items-center gap-3">
                                        <span className="text-gold-400/30 font-bold text-3xl">11</span>
                                        Regulatory Compliance
                                    </h3>
                                    <p className="text-base md:text-lg text-gray-300">If required under RERA, the referrer agrees to register as a Channel Partner.</p>
                                </div>

                                <div className="bg-white/5 p-6 rounded border border-white/5">
                                    <h3 className="text-xl font-serif text-gold-400 mb-3 flex items-center gap-3">
                                        <span className="text-gold-400/30 font-bold text-3xl">12</span>
                                        Program Rights
                                    </h3>
                                    <p className="text-base md:text-lg text-gray-300">Vihav Group reserves the right to amend or discontinue the program without prior notice. The company&apos;s decision shall be final.</p>
                                </div>

                                <div className="bg-white/5 p-6 rounded border border-white/5">
                                    <h3 className="text-xl font-serif text-gold-400 mb-3 flex items-center gap-3">
                                        <span className="text-gold-400/30 font-bold text-3xl">13</span>
                                        Acceptance
                                    </h3>
                                    <p className="text-base md:text-lg text-gray-300">Participation implies acceptance of all terms and conditions stated above.</p>
                                </div>
                            </div>
                        </div>

                        {/* Footer - Sticky with gradient blur */}
                        <div className="p-6 md:p-8 border-t border-gold-400/20 bg-[#0a2f23]/95 backdrop-blur shrink-0 flex justify-between items-center">
                            <span className="text-white/40 text-sm italic">Scroll to read all terms</span>
                            <Button
                                onClick={closeTermsModal}
                                className="px-10 py-4 bg-gold-400 text-black hover:bg-white hover:text-onevihav-green transition-all duration-300 rounded-sm font-bold uppercase tracking-widest shadow-lg"
                            >
                                I Understand
                            </Button>
                        </div>
                    </div>
                </div>,
                document.body
            )}
        </>
    );
}
