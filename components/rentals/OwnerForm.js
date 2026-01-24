"use client";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { ArrowRight, CheckCircle2, UploadCloud } from "lucide-react";

export default function OwnerForm({ theme }) {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        project: "",
        unitNumber: "",
        expectedRent: "",
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
            <div className="bg-gold-50 border border-gold-200 p-8 rounded-2xl text-center py-24 animate-in fade-in zoom-in duration-500">
                <div className="w-16 h-16 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-6 text-gold-600">
                    <CheckCircle2 size={32} />
                </div>
                <h3 className="font-serif text-2xl text-gray-900 mb-4">Property Listed Successfully</h3>
                <p className="text-gray-600 mb-8 text-lg">
                    Thank you, {formData.name}. <br /> We have received your property details. Our relationship manager will verify the details and contact you within 24 hours.
                </p>
                <Button
                    onClick={() => setIsSuccess(false)}
                    className="bg-transparent border border-gray-400 text-gray-900 hover:bg-black hover:text-white"
                >
                    List Another Property
                </Button>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-5 md:space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">


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
                    <h4 className="text-xs uppercase tracking-widest text-gold-600 font-bold border-b border-gray-100 pb-2 mb-4 md:mb-6">Owner Details</h4>
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
                            className="w-full bg-gray-50/50 border border-gray-200 focus:border-gold-500 focus:bg-white focus:ring-1 focus:ring-gold-500/20 rounded-xl px-4 py-4 text-gray-900 placeholder:text-gray-400 transition-all duration-300 font-serif text-lg outline-none"
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
                            className="w-full bg-gray-50/50 border border-gray-200 focus:border-gold-500 focus:bg-white focus:ring-1 focus:ring-gold-500/20 rounded-xl px-4 py-4 text-gray-900 placeholder:text-gray-400 transition-all duration-300 font-serif text-lg outline-none"
                        />
                    </div>
                </div>

                {/* Property Details */}
                <div className="space-y-4 md:space-y-6">
                    <h4 className="text-xs uppercase tracking-widest text-gold-600 font-bold border-b border-gray-100 pb-2 mb-4 md:mb-6">Property Data</h4>

                    <div>
                        <label className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2 block ml-1">Project Name</label>
                        <input
                            type="text"
                            name="project"
                            required
                            placeholder="e.g. Vihav Skyones"
                            value={formData.project}
                            onChange={handleChange}
                            className="w-full bg-gray-50/50 border border-gray-200 focus:border-gold-500 focus:bg-white focus:ring-1 focus:ring-gold-500/20 rounded-xl px-4 py-4 text-gray-900 placeholder:text-gray-400 transition-all duration-300 font-serif text-lg outline-none"
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-4 md:gap-6">
                        <div>
                            <label className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2 block ml-1">Unit No.</label>
                            <input
                                type="text"
                                name="unitNumber"
                                required
                                placeholder="e.g. A-402"
                                value={formData.unitNumber}
                                onChange={handleChange}
                                className="w-full bg-gray-50/50 border border-gray-200 focus:border-gold-500 focus:bg-white focus:ring-1 focus:ring-gold-500/20 rounded-xl px-4 py-4 text-gray-900 placeholder:text-gray-400 transition-all duration-300 font-serif text-lg outline-none"
                            />
                        </div>
                        <div>
                            <label className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2 block ml-1">Expected Rent</label>
                            <input
                                type="text"
                                name="expectedRent"
                                placeholder="₹ / Month"
                                value={formData.expectedRent}
                                onChange={handleChange}
                                className="w-full bg-gray-50/50 border border-gray-200 focus:border-gold-500 focus:bg-white focus:ring-1 focus:ring-gold-500/20 rounded-xl px-4 py-4 text-gray-900 placeholder:text-gray-400 transition-all duration-300 font-serif text-lg outline-none"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="pt-4">
                <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-luxury-black hover:bg-gold-500 hover:text-black text-white font-bold uppercase tracking-widest py-4 md:py-6 rounded-xl shadow-lg transition-all duration-300"
                >
                    {isSubmitting ? (
                        <span className="animate-pulse">Processing...</span>
                    ) : (
                        <span className="flex items-center justify-center gap-2">Submit Listing <ArrowRight size={18} /></span>
                    )}
                </Button>
            </div>
        </form>
    );
}
