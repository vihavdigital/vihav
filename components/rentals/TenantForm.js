"use client";
import { useState } from "react";
import { Button } from "@/components/ui/Button"; // Check if this exists, or use standard button
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function TenantForm({ theme }) {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        requirement: "2BHK",
        location: "",
        budget: "",
        moveInDate: "",
        message: ""
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
        <form onSubmit={handleSubmit} className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="grid md:grid-cols-2 gap-6 w-full">
                {/* Personal Details */}
                <div className="space-y-6">
                    <div className="relative group">
                        <input
                            type="text"
                            name="name"
                            required
                            placeholder="YOUR NAME"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full bg-transparent border-b border-gray-300 py-4 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-gold-500 transition-all font-serif text-lg tracking-wide"
                        />
                    </div>
                    <div className="relative group">
                        <input
                            type="email"
                            name="email"
                            required
                            placeholder="EMAIL ADDRESS"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full bg-transparent border-b border-gray-300 py-4 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-gold-500 transition-all font-serif text-lg tracking-wide"
                        />
                    </div>
                    <div className="relative group">
                        <input
                            type="tel"
                            name="phone"
                            required
                            placeholder="PHONE NUMBER"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full bg-transparent border-b border-gray-300 py-4 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-gold-500 transition-all font-serif text-lg tracking-wide"
                        />
                    </div>
                </div>

                {/* Requirement Details */}
                <div className="space-y-6">
                    <div className="relative group">
                        <select
                            name="requirement"
                            value={formData.requirement}
                            onChange={handleChange}
                            className="w-full bg-transparent border-b border-gray-300 py-4 text-gray-900 focus:outline-none focus:border-gold-500 transition-all font-serif text-lg tracking-wide appearance-none"
                        >
                            <option value="1BHK" className="bg-white text-gray-900">1 BHK Apartment</option>
                            <option value="2BHK" className="bg-white text-gray-900">2 BHK Apartment</option>
                            <option value="3BHK" className="bg-white text-gray-900">3 BHK Apartment</option>
                            <option value="4BHK+" className="bg-white text-gray-900">4 BHK+ / Penthouse</option>
                            <option value="Villa" className="bg-white text-gray-900">Villa / Bungalow</option>
                            <option value="Commercial" className="bg-white text-gray-900">Commercial Space</option>
                        </select>
                        <span className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400 text-xs uppercase tracking-widest">Type</span>
                    </div>

                    <div className="relative group">
                        <input
                            type="text"
                            name="location"
                            placeholder="PREFERRED LOCATION (Optional)"
                            value={formData.location}
                            onChange={handleChange}
                            className="w-full bg-transparent border-b border-gray-300 py-4 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-gold-500 transition-all font-serif text-lg tracking-wide"
                        />
                    </div>
                    <div className="relative group">
                        <input
                            type="text"
                            name="budget"
                            placeholder="BUDGET RANGE (e.g. 25k - 40k)"
                            value={formData.budget}
                            onChange={handleChange}
                            className="w-full bg-transparent border-b border-gray-300 py-4 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-gold-500 transition-all font-serif text-lg tracking-wide"
                        />
                    </div>
                </div>
            </div>

            <div className="relative group pt-4">
                <textarea
                    name="message"
                    rows="3"
                    placeholder="ADDITIONAL REQUIREMENTS OR SPECIFIC PREFERENCES..."
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-gray-300 py-4 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-gold-500 transition-all font-serif text-lg tracking-wide resize-none"
                />
            </div>

            <div className="pt-8 flex justify-end">
                <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-gold-500 hover:bg-gold-600 text-black font-bold uppercase tracking-widest px-8 py-6 rounded-none min-w-[200px] shadow-lg"
                >
                    {isSubmitting ? (
                        <span className="animate-pulse">Processing...</span>
                    ) : (
                        <span className="flex items-center gap-2">Find My Home <ArrowRight size={18} /></span>
                    )}
                </Button>
            </div>
        </form>
    );
}
