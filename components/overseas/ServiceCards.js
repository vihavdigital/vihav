"use client";
import React from "react";
import { Video, FileCheck, Key, HandCoins } from "lucide-react";

const services = [
    {
        title: "Virtual Tours",
        desc: "Experience your future home from anywhere in the world with immersive 360° tours and live video walkthroughs.",
        icon: Video
    },
    {
        title: "Legal Assistance",
        desc: "Our dedicated legal team handles all documentation, Power of Attorney, and registration processes on your behalf.",
        icon: FileCheck
    },
    {
        title: "Rental Management",
        desc: "Turn your investment into income. We assist with finding tenants and managing rental agreements.",
        icon: Key
    },
    {
        title: "Easy Finance",
        desc: "Exclusive tie-ups with leading banks for hassle-free NRI home loan processing and disbursement.",
        icon: HandCoins
    }
];

export default function ServiceCards() {
    return (
        <section className="py-24 bg-secondary">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row gap-12 items-start">
                    <div className="md:w-1/3">
                        <span className="text-gold-400 uppercase tracking-widest text-xs font-bold mb-4 block">Concierge Services</span>
                        <h2 className="text-4xl md:text-5xl font-serif mb-6 text-foreground">Hassle-free <br />Ownership.</h2>
                        <p className="text-muted-foreground leading-relaxed mb-8">
                            We understand the challenges of managing property from abroad. That's why we've built a dedicated NRI Concierge desk to handle every detail—from selection to possession and beyond.
                        </p>
                        <button className="text-foreground border-b border-border pb-1 hover:border-gold-400 hover:text-gold-400 transition-all uppercase tracking-widest text-xs font-bold">
                            Contact NRI Desk
                        </button>
                    </div>

                    <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
                        {services.map((service, idx) => (
                            <div key={idx} className="bg-background border border-border p-8 rounded-xl hover:border-gold-400/30 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 group">
                                <service.icon className="text-gold-400 mb-6 group-hover:scale-110 transition-transform" size={32} />
                                <h3 className="text-xl font-serif mb-3 text-foreground">{service.title}</h3>
                                <p className="text-muted-foreground/80 text-sm leading-relaxed">{service.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
