"use client";
import { useState } from "react";
import { Button } from "@/components/ui/Button"; // Check if this exists, or use standard button
import { ArrowRight, CheckCircle2, ChevronDown } from "lucide-react";

export default function TenantForm({ theme }) {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        requirement: "Bunglow",
        preferredProject: "",
        area: "",
        message: "",
        _honey: "" // Honeypot
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        setIsSubmitting(false);
        setIsSuccess(true);
    };

    if (isSuccess) {
        return (
            <div className="bg-green-50 border border-green-200 p-8 rounded-2xl text-center py-24 animate-in fade-in zoom-in duration-500">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 text-green-600">
                    <CheckCircle2 size={32} />
                </div>
                <h3 className="font-serif text-2xl text-gray-900 mb-4">Request Received</h3>
                <p className="text-gray-600 mb-8 text-lg">
                    Thank you, {formData.name}. <br /> Our rental team has received your preferences and will curate a list of exclusive properties for you shortly.
                </p>
                <Button
                    onClick={() => setIsSuccess(false)}
                    className="bg-transparent border border-gray-300 text-gray-900 hover:bg-black hover:text-white"
                >
                    Send Another Request
                </Button>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-5 md:space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="grid md:grid-cols-2 gap-5 md:gap-8 w-full">
                {/* Personal Details */}
                <div className="space-y-4 md:space-y-6">
                    {/* Honeypot Field - Hidden */}
                    <input
                        type="text"
                        name="_honey"
                        value={formData._honey}
                        onChange={handleChange}
                        style={{ display: 'none' }}
                        tabIndex="-1"
                        autoComplete="off"
                    />
                    <div>
                        <label className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2 block ml-1">Name</label>
                        <input
                            type="text"
                            name="name"
                            required
                            placeholder="Your full name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full bg-gray-50/50 border border-gray-200 focus:border-gold-500 focus:bg-white focus:ring-1 focus:ring-gold-500/20 rounded-xl px-3 py-3 md:px-4 md:py-4 text-gray-900 placeholder:text-gray-400 transition-all duration-300 font-serif text-base md:text-lg outline-none"
                        />
                    </div>
                    <div>
                        <label className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2 block ml-1">Email</label>
                        <input
                            type="email"
                            name="email"
                            required
                            placeholder="Email address"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full bg-gray-50/50 border border-gray-200 focus:border-gold-500 focus:bg-white focus:ring-1 focus:ring-gold-500/20 rounded-xl px-3 py-3 md:px-4 md:py-4 text-gray-900 placeholder:text-gray-400 transition-all duration-300 font-serif text-base md:text-lg outline-none"
                        />
                    </div>
                    <div>
                        <label className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2 block ml-1">Mobile</label>
                        <input
                            type="tel"
                            name="phone"
                            required
                            placeholder="10-digit mobile number"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full bg-gray-50/50 border border-gray-200 focus:border-gold-500 focus:bg-white focus:ring-1 focus:ring-gold-500/20 rounded-xl px-3 py-3 md:px-4 md:py-4 text-gray-900 placeholder:text-gray-400 transition-all duration-300 font-serif text-base md:text-lg outline-none"
                        />
                    </div>
                </div>

                {/* Requirement Details */}
                <div className="space-y-4 md:space-y-6">
                    <div className="relative">
                        <label className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2 block ml-1">Requirement</label>
                        <select
                            name="requirement"
                            value={formData.requirement}
                            onChange={handleChange}
                            className="w-full bg-gray-50/50 border border-gray-200 focus:border-gold-500 focus:bg-white focus:ring-1 focus:ring-gold-500/20 rounded-xl px-3 py-3 md:px-4 md:py-4 text-gray-900 transition-all duration-300 font-serif text-base md:text-lg outline-none appearance-none cursor-pointer"
                        >
                            <option value="Bunglow" className="bg-white text-gray-900">Bunglow</option>
                            <option value="Apartments" className="bg-white text-gray-900">Apartments</option>
                            <option value="3BHK" className="bg-white text-gray-900">3BHK</option>
                            <option value="4BHK" className="bg-white text-gray-900">4BHK</option>
                            <option value="5BHK" className="bg-white text-gray-900">5BHK</option>
                            <option value="Penthouse" className="bg-white text-gray-900">Penthouse</option>
                            <option value="Shops" className="bg-white text-gray-900">Shops</option>
                            <option value="Showrooms" className="bg-white text-gray-900">Showrooms</option>
                            <option value="Offices" className="bg-white text-gray-900">Offices</option>
                        </select>
                        <div className="absolute right-4 top-[3.25rem] pointer-events-none text-gray-400">
                            <ChevronDown size={18} />
                        </div>
                    </div>

                    <div>
                        <label className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2 block ml-1">Preferred Project</label>
                        <input
                            type="text"
                            name="preferredProject"
                            placeholder="e.g. Vihav Skyone (Optional)"
                            value={formData.preferredProject}
                            onChange={handleChange}
                            className="w-full bg-gray-50/50 border border-gray-200 focus:border-gold-500 focus:bg-white focus:ring-1 focus:ring-gold-500/20 rounded-xl px-3 py-3 md:px-4 md:py-4 text-gray-900 placeholder:text-gray-400 transition-all duration-300 font-serif text-base md:text-lg outline-none"
                        />
                    </div>
                    <div>
                        <label className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2 block ml-1">Preferred Area</label>
                        <input
                            type="text"
                            name="area"
                            placeholder="e.g. Vasna-Bhayli (Optional)"
                            value={formData.area}
                            onChange={handleChange}
                            className="w-full bg-gray-50/50 border border-gray-200 focus:border-gold-500 focus:bg-white focus:ring-1 focus:ring-gold-500/20 rounded-xl px-3 py-3 md:px-4 md:py-4 text-gray-900 placeholder:text-gray-400 transition-all duration-300 font-serif text-base md:text-lg outline-none"
                        />
                    </div>
                </div>
            </div>

            <div className="pt-4">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2 block ml-1">Message</label>
                <textarea
                    name="message"
                    rows="3"
                    placeholder="Any specific requirements..."
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-gray-50/50 border border-gray-200 focus:border-gold-500 focus:bg-white focus:ring-1 focus:ring-gold-500/20 rounded-xl px-3 py-3 md:px-4 md:py-4 text-gray-900 placeholder:text-gray-400 transition-all duration-300 font-serif text-base md:text-lg outline-none resize-none"
                />
            </div>

            <div className="pt-4">
                <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-luxury-black hover:bg-gold-500 hover:text-black text-white font-bold uppercase tracking-widest py-6 rounded-xl shadow-lg transition-all duration-300"
                >
                    {isSubmitting ? (
                        <span className="animate-pulse">Processing Request...</span>
                    ) : (
                        <span className="flex items-center justify-center gap-2">Send Request <ArrowRight size={18} /></span>
                    )}
                </Button>
            </div>
        </form>
    );
}
