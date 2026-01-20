"use client";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { ArrowRight, CheckCircle2, UploadCloud } from "lucide-react";

export default function OwnerForm({ theme }) {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        propertyType: "Residential",
        propertyName: "", // Project name
        configuration: "",
        expectedRent: "",
        details: ""
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
        <form onSubmit={handleSubmit} className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
            <div className="bg-blue-50 border border-blue-100 p-4 rounded mb-6">
                <p className="text-sm text-gray-600 text-center">
                    <span className="text-blue-600 font-bold">Note:</span> We only accept listings for premium properties in verified Vihav data or key prime locations.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 w-full">
                {/* Personal Details */}
                <div className="space-y-6">
                    <h4 className="text-xs uppercase tracking-widest text-gray-500 font-bold mb-4">Owner Details</h4>
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

                {/* Property Details */}
                <div className="space-y-6">
                    <h4 className="text-xs uppercase tracking-widest text-gray-500 font-bold mb-4">Property Data</h4>
                    <div className="relative group">
                        <select
                            name="propertyType"
                            value={formData.propertyType}
                            onChange={handleChange}
                            className="w-full bg-transparent border-b border-gray-300 py-4 text-gray-900 focus:outline-none focus:border-gold-500 transition-all font-serif text-lg tracking-wide appearance-none"
                        >
                            <option value="Residential" className="bg-white text-gray-900">Residential</option>
                            <option value="Commercial" className="bg-white text-gray-900">Commercial Space</option>
                            <option value="Plot" className="bg-white text-gray-900">Land / Plot</option>
                        </select>
                        <span className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400 text-xs uppercase tracking-widest">Type</span>
                    </div>

                    <div className="relative group">
                        <input
                            type="text"
                            name="propertyName"
                            required
                            placeholder="PROJECT / BUILDING NAME"
                            value={formData.propertyName}
                            onChange={handleChange}
                            className="w-full bg-transparent border-b border-gray-300 py-4 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-gold-500 transition-all font-serif text-lg tracking-wide"
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="relative group">
                            <input
                                type="text"
                                name="configuration"
                                placeholder="CONFIG (e.g. 3BHK)"
                                value={formData.configuration}
                                onChange={handleChange}
                                className="w-full bg-transparent border-b border-gray-300 py-4 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-gold-500 transition-all font-serif text-lg tracking-wide"
                            />
                        </div>
                        <div className="relative group">
                            <input
                                type="text"
                                name="expectedRent"
                                placeholder="EXPECTED RENT"
                                value={formData.expectedRent}
                                onChange={handleChange}
                                className="w-full bg-transparent border-b border-gray-300 py-4 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-gold-500 transition-all font-serif text-lg tracking-wide"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="relative group pt-4">
                <textarea
                    name="details"
                    rows="3"
                    placeholder="ADDITIONAL DETAILS (Furnishing status, floor no, etc.)"
                    value={formData.details}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-gray-300 py-4 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-gold-500 transition-all font-serif text-lg tracking-wide resize-none"
                />
            </div>

            <div className="pt-8 flex justify-end">
                <Button
                    type="submit"
                    variant="outline"
                    disabled={isSubmitting}
                    className="bg-transparent border border-black hover:bg-black hover:text-white text-black font-bold uppercase tracking-widest px-8 py-6 rounded-none min-w-[200px]"
                >
                    {isSubmitting ? (
                        <span className="animate-pulse">Submitting...</span>
                    ) : (
                        <span className="flex items-center gap-2">Submit Listing <ArrowRight size={18} /></span>
                    )}
                </Button>
            </div>
        </form>
    );
}
