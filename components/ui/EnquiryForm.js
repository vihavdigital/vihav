"use client";

import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { COUNTRY_CODES } from "@/data/countryCodes";

export default function EnquiryForm({ className, onSuccess, variant = "minimal", isCompact = false, contextData = {} }) {
    const [formState, setFormState] = useState({
        name: "",
        phone: "",
        email: "",
        countryCode: "+91",
        category: "",
        interest: "",
        _honey: "", // Honeypot field
        // UTM Fields
        utm_source: "",
        utm_medium: "",
        utm_campaign: "",
        utm_term: "",
        utm_content: "",
        user_agent: "",
        referrer: ""
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    // Capture UTM parameters & Device Info on mount
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const params = new URLSearchParams(window.location.search);
            setFormState(prev => ({
                ...prev,
                utm_source: params.get('utm_source') || "",
                utm_medium: params.get('utm_medium') || "",
                utm_campaign: params.get('utm_campaign') || "",
                utm_term: params.get('utm_term') || "",
                utm_content: params.get('utm_content') || "",
                user_agent: window.navigator.userAgent,
                referrer: document.referrer
            }));
        }
    }, []);

    // Interest Options Mapping
    const INTEREST_OPTIONS = {
        "Residential": ["3 BHK", "4 BHK", "5 BHK", "Bungalows", "Penthouses"],
        "Commercial": ["Shops", "Showrooms", "Offices"]
    };

    // Prioritize common countries
    const PRIORITY_CODES = ["+91", "+971", "+1", "+44", "+61", "+65"];
    const sortedCountries = [
        ...COUNTRY_CODES.filter(c => PRIORITY_CODES.includes(c.code)),
        ...COUNTRY_CODES.filter(c => !PRIORITY_CODES.includes(c.code))
    ];

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Merge form state with context data (SRD, Project ID, etc.)
        const payload = { ...formState, ...contextData };

        try {
            const response = await fetch('/api/leads', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });

            const data = await response.json();

            if (data.success) {
                setIsSuccess(true);
                if (onSuccess) onSuccess();
                // Reset form after delay
                setTimeout(() => {
                    setIsSuccess(false);
                    setFormState({ name: "", phone: "", email: "", countryCode: "+91", category: "", interest: "" });
                }, 3000);
            } else {
                console.error("Submission failed:", data);
                // Optional: Handle error UI
            }
        } catch (error) {
            console.error("Error submitting form:", error);
        } finally {
            setIsSubmitting(false);
        }
    };

    // Styles based on variant
    const styles = {
        minimal: {
            input: "w-full bg-transparent border-b border-border py-2 md:py-4 text-base md:text-xl text-foreground placeholder:text-muted-foreground/50 focus:border-gold-400 focus:outline-none transition-all font-light",
            select: "w-full bg-transparent border-b border-border py-2 md:py-4 text-base md:text-xl text-foreground focus:border-gold-400 focus:outline-none transition-all font-light appearance-none cursor-pointer",
            button: "bg-foreground text-background hover:bg-gold-400 hover:text-black rounded-none py-4 md:py-6 tracking-[0.2em] text-sm md:text-base"
        },
        standard: {
            input: "w-full bg-secondary border border-border rounded-lg px-3 md:px-4 py-2.5 md:py-3 text-sm md:text-base text-foreground placeholder:text-muted-foreground focus:border-gold-400 focus:outline-none transition-colors",
            select: "w-full bg-secondary border border-border rounded-lg px-3 md:px-4 py-2.5 md:py-3 text-sm md:text-base text-foreground focus:border-gold-400 focus:outline-none transition-colors appearance-none cursor-pointer",
            button: "bg-gold-400 text-black hover:bg-foreground hover:text-background rounded-lg py-3 md:py-4 tracking-widest text-sm md:text-base"
        }
    };

    const currentStyle = styles[variant] || styles.minimal;

    if (isSuccess) {
        return (
            <div className={`flex flex-col items-center justify-center py-12 text-center h-full ${className}`}>
                <div className="w-16 h-16 rounded-full bg-green-500/20 text-green-500 flex items-center justify-center mb-6">
                    <ArrowRight size={32} />
                </div>
                <h4 className="text-xl text-foreground font-serif mb-2">Thank You!</h4>
                <p className="text-muted-foreground">Our team will get in touch with you shortly.</p>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className={`space-y-5 md:space-y-8 ${className}`}>
            <div className={`space-y-6 ${variant === 'minimal' ? 'space-y-8' : ''}`}>

                <div className="group">
                    {/* Honeypot Field - Hidden for humans */}
                    <input
                        type="text"
                        name="_honey"
                        value={formState._honey}
                        onChange={(e) => setFormState({ ...formState, _honey: e.target.value })}
                        style={{ display: 'none' }}
                        tabIndex="-1"
                        autoComplete="off"
                    />

                    {variant === 'standard' && <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">Full Name</label>}
                    <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        className={currentStyle.input}
                        placeholder={variant === 'minimal' ? "Your Name" : "Enter your name"}
                        aria-label="Full Name"
                    />
                </div>

                <div className="space-y-4 md:space-y-6">
                    {/* Phone Input with Country Code */}
                    <div className="group">
                        {variant === 'standard' && <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">Phone Number</label>}
                        <div className="flex gap-4">
                            <div className="w-28 flex-shrink-0 relative">
                                <select
                                    value={formState.countryCode}
                                    onChange={(e) => setFormState({ ...formState, countryCode: e.target.value })}
                                    className={currentStyle.select}
                                    aria-label="Select Country Code"
                                >
                                    {sortedCountries.map((item, index) => (
                                        <option key={index} value={item.code} className="bg-popover text-foreground">
                                            {item.flag} {item.code}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <input
                                type="tel"
                                required
                                value={formState.phone}
                                onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                                className={currentStyle.input}
                                placeholder={variant === 'minimal' ? "Phone Number" : "XXXXX XXXXX"}
                                aria-label="Phone Number"
                            />
                        </div>
                    </div>

                    <div className="group">
                        {variant === 'standard' && <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">Email Address</label>}
                        <input
                            type="email"
                            required
                            value={formState.email}
                            onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                            className={currentStyle.input}
                            placeholder={variant === 'minimal' ? "Email Address" : "name@example.com"}
                            aria-label="Email Address"
                        />
                    </div>
                </div>

                {/* 1. Category Selection (Optional) */}
                <div className="group">
                    {variant === 'standard' && <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">Interested In</label>}
                    <select
                        value={formState.category}
                        onChange={(e) => setFormState({ ...formState, category: e.target.value, interest: "" })}
                        className={`${currentStyle.select} ${!formState.category ? 'text-muted-foreground/50' : ''}`}
                        aria-label="Select Property Category"
                    >
                        <option value="" disabled className="bg-popover text-muted-foreground">Select Category (Optional)</option>
                        <option value="Residential" className="bg-popover text-foreground">Residential</option>
                        <option value="Commercial" className="bg-popover text-foreground">Commercial</option>
                    </select>
                </div>

                {/* 2. Type Selection (Conditional & Optional) */}
                {formState.category && (
                    <div className="group animate-in fade-in slide-in-from-top-4 duration-500">
                        {variant === 'standard' && <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">Property Type</label>}
                        <select
                            value={formState.interest}
                            onChange={(e) => setFormState({ ...formState, interest: e.target.value })}
                            className={`${currentStyle.select} ${!formState.interest ? 'text-muted-foreground/50' : ''}`}
                            aria-label="Select Property Type"
                        >
                            <option value="" disabled className="bg-popover text-muted-foreground">Select Specific Requirement (Optional)</option>
                            {INTEREST_OPTIONS[formState.category].map((option) => (
                                <option key={option} value={option} className="bg-popover text-foreground">{option}</option>
                            ))}
                        </select>
                    </div>
                )}
            </div>

            <Button
                type="submit"
                className={`w-full md:w-auto px-12 font-bold uppercase transition-all duration-500 mt-4 ${currentStyle.button}`}
                disabled={isSubmitting}
            >
                {isSubmitting ? "Sending..." : "Submit Request"}
            </Button>
        </form>
    );
}
