"use client";

import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { COUNTRY_CODES } from "@/data/countryCodes";

export default function PreLeasedEnquiryForm() {
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        phone: "",
        countryCode: "+91",
        budget: "",
        location: "",
        _honey: "", // Honeypot
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

    // Mappings from PHP Logic
    const LOCATION_MAPPING = {
        "Atladara": {
            srd: "682d98bde114870eb17c11db",
            project_id: "682d957d58f1e7b216784bc5", // $atladara
            project_name: "Atladara"
        },
        "Tarsali": {
            srd: "682d98daa3d855098beaed88",
            project_id: "682d95db2f31c6a64d808bd6", // $tarsali
            project_name: "Tarsali"
        },
        "Sunpharma Road": {
            srd: "682d98fc58f1e703695f07f5",
            project_id: "682d967d5d8deff78c06ab62", // $sunpharma
            project_name: "Sunpharma Road"
        },
        "Gotri1": {
            srd: "682d991ea3d855c5b99f270f",
            project_id: "682d96ede11487bdc5d62edc", // $gotri1
            project_name: "Gotri1"
        },
        "Gotri2": {
            srd: "682d9939a3d8551fc318825c",
            project_id: "682d97385d8deff57cfa3f19", // $gotri2
            project_name: "Gotri2"
        }
    };

    const BUDGET_MAPPING = {
        "50 Lacs and below": "below_50_lac",
        "50 Lacs to 1 Crore": "50lac_to_1cr",
        "1 Crore to 1.5 Crore": "1cr_to_1_5cr",
        "1.5 Crore to 2 Crore": "1_5cr_to_2cr",
        "2 Crore and above": "2cr_and_above"
    };

    // Prioritize common countries
    const PRIORITY_CODES = ["+91", "+971", "+1", "+44", "+61", "+65"];
    const sortedCountries = [
        ...COUNTRY_CODES.filter(c => PRIORITY_CODES.includes(c.code)),
        ...COUNTRY_CODES.filter(c => !PRIORITY_CODES.includes(c.code))
    ];

    // Capture UTM & Device info
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

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        const locationData = LOCATION_MAPPING[formState.location];
        const budgetKey = BUDGET_MAPPING[formState.budget];

        const payload = {
            ...formState,
            budget: budgetKey,
            // Overrides based on location
            srd: locationData?.srd || "57a461320ef4bb1fc08c3e83", // Fallback to default if somehow missing
            project_id: locationData?.project_id || "670783300f33a908a5436662",
            sub_source: "Pre-Leased Property", // msource from PHP
            api_key: "e90c80d27f7ba2858b7e8d045b1d9f18" // Custom API Key from PHP
        };

        try {
            const response = await fetch('/api/leads', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });

            const data = await response.json();

            if (data.success) {
                setIsSuccess(true);
                // Reset form
                setFormState(prev => ({ ...prev, name: "", email: "", phone: "", budget: "", location: "" }));
            } else {
                console.error("Submission failed:", data);
            }
        } catch (error) {
            console.error("Error submitting form:", error);
        } finally {
            setIsSubmitting(false);
        }
    };

    if (isSuccess) {
        return (
            <div className="flex flex-col items-center justify-center p-8 bg-white border border-border rounded-xl shadow-2xl text-center h-full min-h-[400px]">
                <div className="w-20 h-20 rounded-full bg-green-500/10 text-green-600 flex items-center justify-center mb-6">
                    <ArrowRight size={40} />
                </div>
                <h4 className="text-3xl text-luxury-black font-serif mb-4">Request Received</h4>
                <p className="text-muted-foreground text-lg mb-8">
                    Our investment advisor will analyze your requirements and connect with matches shortly.
                </p>
                <Button onClick={() => setIsSuccess(false)} variant="outline" className="border-gold-400 text-luxury-black hover:bg-gold-400">
                    Submit Another Request
                </Button>
            </div>
        );
    }

    return (
        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-border/50 max-w-xl mx-auto">
            <div className="text-center mb-10">
                <span className="text-gold-400 uppercase tracking-[0.2em] text-xs font-bold mb-3 block">
                    Investment Enquiry
                </span>
                <h3 className="font-serif text-3xl text-luxury-black">
                    Start Your Portfolio
                </h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
                {/* Honeypot */}
                <input
                    type="text"
                    name="_honey"
                    value={formState._honey}
                    onChange={(e) => setFormState({ ...formState, _honey: e.target.value })}
                    style={{ display: 'none' }}
                />

                {/* Name */}
                <div className="space-y-2">
                    <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        className="w-full bg-secondary/30 border border-border rounded-lg px-4 py-4 text-foreground focus:border-gold-400 focus:outline-none transition-colors"
                        placeholder="Your Name*"
                    />
                </div>

                {/* Email */}
                <div className="space-y-2">
                    <input
                        type="email"
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        className="w-full bg-secondary/30 border border-border rounded-lg px-4 py-4 text-foreground focus:border-gold-400 focus:outline-none transition-colors"
                        placeholder="Your Email"
                    />
                </div>

                {/* Phone */}
                <div className="flex gap-4">
                    <div className="w-28 flex-shrink-0 relative">
                        <select
                            value={formState.countryCode}
                            onChange={(e) => setFormState({ ...formState, countryCode: e.target.value })}
                            className="w-full h-full bg-secondary/30 border border-border rounded-lg px-2 text-foreground focus:border-gold-400 focus:outline-none appearance-none cursor-pointer text-center"
                        >
                            {sortedCountries.map((item, index) => (
                                <option key={index} value={item.code}>
                                    {item.code} {item.flag}
                                </option>
                            ))}
                        </select>
                    </div>
                    <input
                        type="tel"
                        required
                        value={formState.phone}
                        onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                        className="w-full bg-secondary/30 border border-border rounded-lg px-4 py-4 text-foreground focus:border-gold-400 focus:outline-none transition-colors"
                        placeholder="Your Phone*"
                    />
                </div>

                {/* Budget Selection */}
                <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-muted-foreground ml-1">Select Budget</label>
                    <select
                        required
                        value={formState.budget}
                        onChange={(e) => setFormState({ ...formState, budget: e.target.value })}
                        className="w-full bg-secondary/30 border border-border rounded-lg px-4 py-4 text-foreground focus:border-gold-400 focus:outline-none appearance-none cursor-pointer"
                    >
                        <option value="" disabled>-- Select Budget --</option>
                        {Object.keys(BUDGET_MAPPING).map(opt => (
                            <option key={opt} value={opt}>{opt}</option>
                        ))}
                    </select>
                </div>

                {/* Location Selection */}
                <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-muted-foreground ml-1">Select Location</label>
                    <select
                        required
                        value={formState.location}
                        onChange={(e) => setFormState({ ...formState, location: e.target.value })}
                        className="w-full bg-secondary/30 border border-border rounded-lg px-4 py-4 text-foreground focus:border-gold-400 focus:outline-none appearance-none cursor-pointer"
                    >
                        <option value="" disabled>-- Select Location --</option>
                        <option value="Atladara">ATLADARA-PADRA ROAD (McDonald's)</option>
                        <option value="Tarsali">NR. GURUDWARA, TARSALI (Blinkit)</option>
                        <option value="Sunpharma Road">SUNPHARMA 30 MTR MAIN ROAD (OLA)</option>
                        <option value="Gotri1">18 MTR GOTRI MAIN ROAD (GUJCO Mart)</option>
                        <option value="Gotri2">18 MTR GOTRI MAIN ROAD (SWIGGY InstaMart)</option>
                    </select>
                </div>

                <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gold-400 text-luxury-black font-bold uppercase tracking-widest py-4 hover:bg-gold-500 shadow-lg shadow-gold-400/20"
                >
                    {isSubmitting ? "Submitting..." : "Submit Enquiry"}
                </Button>
            </form>
        </div>
    );
}
