"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Loader2, CheckCircle } from "lucide-react";

export default function EnquireModal({ isOpen, onClose, project = "General Enquiry" }) {
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        project: project
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        const SELL_DO_API = "/api/enquire";

        try {
            const response = await fetch(SELL_DO_API, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                setIsSuccess(true);
                setTimeout(() => {
                    setIsSuccess(false);
                    setFormData({ name: "", email: "", phone: "", project: project });
                    onClose();
                }, 2000);
            } else {
                console.error("Failed to submit lead:", await response.text());
                // Optional: Handle error state in UI
            }
        } catch (error) {
            console.error("Error submitting form:", error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[60] flex items-center justify-center p-4"
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="fixed z-[70] bg-neutral-900 border border-gold-500/20 w-full max-w-md rounded-2xl overflow-hidden shadow-2xl shadow-gold-900/10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                    >
                        <div className="p-6 md:p-8 relative">
                            <button
                                onClick={onClose}
                                className="absolute top-4 right-4 text-white/40 hover:text-white transition-colors"
                            >
                                <X size={20} />
                            </button>

                            {!isSuccess ? (
                                <>
                                    <h2 className="text-2xl font-serif text-white mb-2">Enquire Now</h2>
                                    <p className="text-white/60 text-sm mb-6">
                                        Fill in your details and our property experts will get in touch with you shortly.
                                    </p>

                                    <form onSubmit={handleSubmit} className="space-y-4">
                                        <div>
                                            <label className="block text-xs uppercase tracking-widest text-gold-500 mb-2">Name</label>
                                            <input
                                                type="text"
                                                required
                                                value={formData.name}
                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold-500 transition-colors"
                                                placeholder="Enter your name"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-xs uppercase tracking-widest text-gold-500 mb-2">Phone Number</label>
                                            <input
                                                type="tel"
                                                required
                                                value={formData.phone}
                                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold-500 transition-colors"
                                                placeholder="+91 98765 43210"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-xs uppercase tracking-widest text-gold-500 mb-2">Email Address</label>
                                            <input
                                                type="email"
                                                required
                                                value={formData.email}
                                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold-500 transition-colors"
                                                placeholder="john@example.com"
                                            />
                                        </div>

                                        <button
                                            type="submit"
                                            disabled={isLoading}
                                            className="w-full bg-gold-500 hover:bg-gold-400 text-black font-bold py-4 rounded-lg mt-4 transition-all uppercase tracking-widest text-sm flex items-center justify-center gap-2"
                                        >
                                            {isLoading ? <Loader2 size={18} className="animate-spin" /> : "Submit Enquiry"}
                                        </button>
                                    </form>
                                </>
                            ) : (
                                <div className="py-12 flex flex-col items-center text-center">
                                    <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center text-green-500 mb-4">
                                        <CheckCircle size={32} />
                                    </div>
                                    <h3 className="text-2xl font-serif text-white mb-2">Thank You!</h3>
                                    <p className="text-white/60">We have received your enquiry. Our team will contact you shortly.</p>
                                </div>
                            )}
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
