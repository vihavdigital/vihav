"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    // Avoid hydration mismatch
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 border border-border rounded-full hover:border-gold-400 hover:text-gold-400 transition-colors"
            aria-label="Toggle theme"
        >
            {theme === "dark" ? <Sun size={14} /> : <Moon size={14} />}
        </button>
    );
}
