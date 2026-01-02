"use client";

import Link from "next/link";
import { MoveLeft } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground text-center px-6 isolate relative overflow-hidden">
            {/* Subtle Background Pattern */}
            <div className="absolute inset-0 -z-10 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

            {/* Large Watermark */}
            <h1 className="text-[12rem] md:text-[20rem] font-serif font-bold text-foreground/5 leading-none select-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[60%] -z-10">
                404
            </h1>

            <div className="relative space-y-8 max-w-2xl mx-auto">
                <h2 className="text-4xl md:text-6xl font-serif text-foreground">
                    Page Not Found
                </h2>

                <div className="w-24 h-1 bg-gold-400 mx-auto rounded-full"></div>

                <p className="text-muted-foreground text-lg md:text-xl font-light leading-relaxed">
                    The residence you are looking for might have been moved, sold, or doesn't exist. <br className="hidden md:block" /> Return to our collection to find your perfect home.
                </p>

                <div className="pt-8">
                    <Link href="/">
                        <Button className="gap-3 px-10 py-7 text-lg uppercase tracking-widest bg-foreground text-background hover:bg-gold-400 hover:text-black transition-all duration-300">
                            <MoveLeft size={20} />
                            Return Home
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
