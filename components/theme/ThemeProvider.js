"use client";

import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext({
    theme: "dark",
    toggleTheme: () => { },
});

export function ThemeProvider({ children }) {
    // Default to dark
    const [theme, setTheme] = useState("dark");

    useEffect(() => {
        // Check localStorage or system preference on mount
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme) {
            setTheme(savedTheme);
        } else if (window.matchMedia("(prefers-color-scheme: light)").matches) {
            // Optional: Auto-detect. But we default to dark for luxury feel unless user overrides.
            // Actually, let's stick to 'dark' as default as per request "keep this black theme throughout".
            // Only if they explicitly switch, we save it.
            setTheme("dark");
        }
    }, []);

    useEffect(() => {
        // Apply theme to html document
        const root = window.document.documentElement;
        root.classList.remove("light", "dark");
        root.classList.add(theme);
        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prev) => (prev === "dark" ? "light" : "dark"));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export const useTheme = () => useContext(ThemeContext);
