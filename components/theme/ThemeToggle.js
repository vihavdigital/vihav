"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider";

export default function ThemeToggle({ className = "" }) {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className={`relative p-2 rounded-full border border-white/10 hover:border-gold-400 transition-colors group ${className}`}
            aria-label="Toggle Theme"
        >
            <div className="relative w-5 h-5">
                <Sun
                    size={20}
                    className={`absolute inset-0 text-gold-400 transition-all duration-500 rotate-0 scale-100 ${theme === "dark" ? "rotate-90 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100"
                        }`}
                />
                <Moon
                    size={20}
                    className={`absolute inset-0 text-white transition-all duration-500 rotate-0 scale-100 ${theme === "dark" ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-0 opacity-0"
                        }`}
                />
            </div>
            <span className="sr-only">Toggle Theme</span>
        </button>
    );
}
