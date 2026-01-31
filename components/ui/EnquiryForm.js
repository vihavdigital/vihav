"use client";

import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { COUNTRY_CODES } from "@/data/countryCodes";

export default function EnquiryForm({ className, onSuccess, variant = "minimal", isCompact = false, contextData = {}, showBudget = true, showInterestFields = false }) {
    const [formState, setFormState] = useState({
        name: "",
        phone: "",
        email: "",
        budget: "", // Added budget
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
    const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");

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

    // Budget Options (Standardized)
    const BUDGET_OPTIONS = [
        { label: "50 Lacs and below", value: "below_50_lac" },
        { label: "50 Lacs to 1 Crore", value: "50lac_to_1cr" },
        { label: "1 Crore to 1.5 Crore", value: "1cr_to_1_5cr" },
        { label: "1.5 Crore to 2 Crore", value: "1_5cr_to_2cr" },
        { label: "2 Crore and above", value: "2cr_and_above" }
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
            input: "w-full bg-transparent border-b border-border py-4 md:py-4 text-base md:text-xl text-foreground placeholder:text-muted-foreground/50 focus:border-gold-400 focus:outline-none transition-all font-light",
            select: "w-full bg-transparent border-b border-border py-4 md:py-4 text-base md:text-xl text-foreground focus:border-gold-400 focus:outline-none transition-all font-light appearance-none cursor-pointer",
            button: "bg-foreground text-background hover:bg-gold-400 hover:text-black rounded-none py-4 md:py-6 tracking-[0.2em] text-sm md:text-base"
        },
        standard: {
            input: "w-full bg-secondary border border-border rounded-lg px-4 py-4 md:py-3 text-base md:text-base text-foreground placeholder:text-muted-foreground focus:border-gold-400 focus:outline-none transition-colors",
            select: "w-full bg-secondary border border-border rounded-lg px-4 py-4 md:py-3 text-base md:text-base text-foreground focus:border-gold-400 focus:outline-none transition-colors appearance-none cursor-pointer",
            button: "bg-gold-400 text-black hover:bg-foreground hover:text-background rounded-lg py-4 md:py-4 tracking-widest text-sm font-bold shadow-lg shadow-gold-400/20"
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
            <div className={`space-y-5 md:space-y-8 ${variant === 'minimal' ? 'space-y-8' : ''}`}>

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

                    {variant === 'standard' && <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2 font-medium">Full Name</label>}
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
                        {variant === 'standard' && <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2 font-medium">Phone Number</label>}
                        <div className="flex gap-3">
                            <div className="relative w-24 md:w-28 flex-shrink-0">
                                <button
                                    type="button"
                                    onClick={() => setIsCountryDropdownOpen(!isCountryDropdownOpen)}
                                    className={`${currentStyle.select} flex items-center justify-between gap-1 px-2 md:px-0`}
                                    aria-label="Select Country Code"
                                >
                                    <span className="w-6 h-4 md:w-8 md:h-5 relative shadow-sm overflow-hidden rounded-[2px] flex items-center justify-center bg-muted shrink-0">
                                        {(() => {
                                            const country = COUNTRY_CODES.find(c => c.code === formState.countryCode);
                                            if (!country) return null;
                                            const isoCode = [...country.flag].map(c => String.fromCharCode(c.codePointAt(0) - 127397)).join('').toLowerCase();
                                            return (
                                                <img
                                                    src={`https://flagcdn.com/w40/${isoCode}.png`}
                                                    alt={country.code}
                                                    className="w-full h-full object-cover"
                                                />
                                            );
                                        })() || "🌍"}
                                    </span>
                                    <span className="text-sm md:text-xl font-light truncate flex-1 text-center">{formState.countryCode}</span>
                                    {/* Chevron Down to indicate dropdown */}
                                    <span className="opacity-50 text-[10px] md:text-xs">▼</span>
                                </button>

                                {isCountryDropdownOpen && (
                                    <>
                                        <div
                                            className="fixed inset-0 z-40"
                                            onClick={() => setIsCountryDropdownOpen(false)}
                                        />
                                        {/* Dropdown: Fixed width but responsive safe */}
                                        <div className="absolute top-full left-0 w-[260px] max-w-[80vw] max-h-64 overflow-y-auto bg-background border border-border rounded-md shadow-xl z-50 mt-1 cursor-hover scrollbar-hide flex flex-col">
                                            {/* Search Input */}
                                            <div className="sticky top-0 bg-background p-2 border-b border-border z-10">
                                                <input
                                                    type="text"
                                                    value={searchQuery}
                                                    placeholder="Search country..."
                                                    className="w-full bg-secondary px-3 py-2 text-sm rounded-md focus:outline-none focus:ring-1 focus:ring-gold-400 placeholder:text-muted-foreground"
                                                    onChange={(e) => setSearchQuery(e.target.value)}
                                                    onClick={(e) => e.stopPropagation()}
                                                    autoFocus
                                                />
                                            </div>

                                            {sortedCountries.filter(c =>
                                                c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                                                c.code.includes(searchQuery)
                                            ).map((item, index) => {
                                                const isoCode = [...item.flag].map(c => String.fromCharCode(c.codePointAt(0) - 127397)).join('').toLowerCase();
                                                return (
                                                    <button
                                                        key={index}
                                                        type="button"
                                                        onClick={() => {
                                                            setFormState({ ...formState, countryCode: item.code });
                                                            setIsCountryDropdownOpen(false);
                                                            setSearchQuery(""); // Reset search on select
                                                        }}
                                                        className="flex items-center gap-3 w-full px-4 py-3 hover:bg-secondary text-left transition-colors border-b border-border/10 last:border-none group shrink-0"
                                                    >
                                                        <span className="relative w-6 h-4 shadow-sm overflow-hidden rounded-[2px] shrink-0">
                                                            <img
                                                                src={`https://flagcdn.com/w40/${isoCode}.png`}
                                                                srcSet={`https://flagcdn.com/w80/${isoCode}.png 2x`}
                                                                alt={item.name}
                                                                className="w-full h-full object-cover"
                                                                loading="lazy"
                                                            />
                                                        </span>
                                                        <span className="text-sm font-medium w-12 text-foreground group-hover:text-amber-600 transition-colors shrink-0">{item.code}</span>
                                                        <span className="text-xs text-muted-foreground truncate">{item.name}</span>
                                                    </button>
                                                );
                                            })}
                                            {sortedCountries.filter(c => c.name.toLowerCase().includes(searchQuery.toLowerCase()) || c.code.includes(searchQuery)).length === 0 && (
                                                <div className="p-4 text-center text-sm text-muted-foreground">No results found</div>
                                            )}
                                        </div>
                                    </>
                                )}
                            </div>
                            <input
                                type="tel"
                                required
                                value={formState.phone}
                                onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                                className={`${currentStyle.input} h-full`}
                                placeholder={variant === 'minimal' ? "Phone Number" : "XXXXX XXXXX"}
                                aria-label="Phone Number"
                            />
                        </div>
                    </div>

                    <div className="group">
                        {variant === 'standard' && <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2 font-medium">Email Address</label>}
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

                {/* 1b. Budget Selection (Optional/Conditional) */}
                {showBudget && (
                    <div className="group">
                        {variant === 'standard' && <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">Budget</label>}
                        <select
                            value={formState.budget}
                            onChange={(e) => setFormState({ ...formState, budget: e.target.value })}
                            className={`${currentStyle.select} ${!formState.budget ? 'text-muted-foreground/50' : ''}`}
                            aria-label="Select Budget"
                        >
                            <option value="" disabled className="bg-popover text-muted-foreground">Select Budget (Optional)</option>
                            {BUDGET_OPTIONS.map((opt) => (
                                <option key={opt.value} value={opt.value} className="bg-popover text-foreground">{opt.label}</option>
                            ))}
                        </select>
                    </div>
                )}

                {/* 2. Interest / Property Type Selection (Conditional) */}
                {showInterestFields && (
                    <>
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
                    </>
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
