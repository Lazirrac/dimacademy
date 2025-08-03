//frontend\src\components\ui\ThemeToggle.jsx

import { useTheme } from "../../hooks/useTheme";
import { motion as Motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();

    return (
        <Motion.button
        onClick={toggleTheme}
        title="Cambiar tema"
        className="flex items-center justify-center w-12 h-6 p-1 rounded-full bg-gray-300 dark:bg-gray-700 relative"
        initial={{ scale: 0.9 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.8 }}
        transition={{ type: "spring", stiffness: 300 }}
        >
        <Motion.span
            layout
            className="block w-4 h-4 bg-white rounded-full shadow-md"
        />
        <div className="absolute inset-0 flex items-center justify-between px-1">
            <Sun
            className={`w-4 h-4 ${
                theme === "light" ? "text-neonDark" : "opacity-30"
            }`}
            />
            <Moon
            className={`w-4 h-4 ${
                theme === "dark" ? "text-neon" : "opacity-30"
            }`}
            />
        </div>
        </Motion.button>
    );
}
    