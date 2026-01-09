"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { COUNTRY_CODES } from "@/data/countryCodes";

export default function EnquiryForm({ className, onSuccess, variant = "minimal", isCompact = false }) {
    const [formState, setFormState] = useState({
        name: "",
        phone: "",
        email: "",
        countryCode: "+91",
        category: "",
        interest: ""
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

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

        try {
            const response = await fetch('/api/leads', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formState)
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
            input: "w-full bg-transparent border-b border-border py-4 text-xl text-foreground placeholder:text-muted-foreground/50 focus:border-gold-400 focus:outline-none transition-all font-light",
            select: "w-full bg-transparent border-b border-border py-4 text-xl text-foreground focus:border-gold-400 focus:outline-none transition-all font-light appearance-none cursor-pointer",
            button: "bg-foreground text-background hover:bg-gold-400 hover:text-black rounded-none py-6 tracking-[0.2em]"
        },
        standard: {
            input: "w-full bg-secondary border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-gold-400 focus:outline-none transition-colors",
            select: "w-full bg-secondary border border-border rounded-lg px-4 py-3 text-foreground focus:border-gold-400 focus:outline-none transition-colors appearance-none cursor-pointer",
            button: "bg-gold-400 text-black hover:bg-foreground hover:text-background rounded-lg py-4 tracking-widest"
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
        <form onSubmit={handleSubmit} className={`space-y-8 ${className}`}>
            <div className={`space-y-6 ${variant === 'minimal' ? 'space-y-8' : ''}`}>

                <div className="group">
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

                <div className="space-y-6">
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
