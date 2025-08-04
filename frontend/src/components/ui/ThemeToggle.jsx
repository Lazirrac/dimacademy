//frontend\src\components\ui\ThemeToggle.jsx

// frontend/src/components/ui/ThemeToggle.jsx
import React from "react";
import { useTheme } from "../../hooks/useTheme.js";
import { motion as Motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();
    const isLight = theme === "light";

    const trackWidth = 64;   // w-16
    const trackPadding = 4;  // p-1
    const dotSize = 24;      // w-6
    const travel = trackWidth - dotSize - 2 * trackPadding; // 32px

    return (
        <Motion.button
        onClick={toggleTheme}
        aria-label="Cambiar tema"
        className="relative flex items-center w-16 h-8 p-1 rounded-full focus:outline-none animate-slide-in"
        initial={false}
        animate={{ backgroundColor: isLight ? "#E5E7EB" : "#374151" }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
        <Motion.span
            className="absolute top-1 left-1 w-6 h-6 rounded-full bg-white shadow-md "
            animate={{ x: isLight ? 0 : travel }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
        />

        <div className="absolute inset-0 flex items-center justify-between px-2">
            <Sun
            className={`w-5 h-5 transition-colors ${
                isLight ? "text-yellow-400 animate-glow" : "text-gray-400"
            }`}
            />
            <Moon
            className={`w-5 h-5 transition-colors ${
                !isLight ? "text-indigo-400 animate-glow" : "text-gray-400"
            }`}
            />
        </div>
        </Motion.button>
    );
}
