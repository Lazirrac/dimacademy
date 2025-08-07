// src/components/ui/InputField.jsx

import { AlertCircle } from 'lucide-react';

export default function InputField({
    id,
    label,
    type = "text",
    value,
    onChange,
    placeholder = "\u00a0",
    required = true,
    error = "",
    }) {
    const baseInput = [
        "peer",
        "w-full px-4 pt-6 pb-2",
        "rounded-xl border",
        "bg-surface-light dark:bg-surface-dark",
        "text-base text-text-light dark:text-text-dark",
        "placeholder-muted dark:placeholder-muted-dark",
        "shadow-sm",
        "focus:outline-none transition-all duration-200",
        error
        ? "border-2 border-red-500 bg-red-500/5 focus:ring-2 focus:ring-red-400"
        : "border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-primary",
        error ? "animate-shake" : "",
    ].join(" ");

    return (
        <div className="relative space-y-1">
        <input
            id={id}
            type={type}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            required={required}
            className={baseInput}
            autoComplete={type === "password" ? "current-password" : "on"}
        />
        <label
            htmlFor={id}
            className={`
            absolute left-4 top-0 text-sm font-medium
            transition-all
            peer-placeholder-shown:top-3
            peer-placeholder-shown:text-base
            peer-focus:top-0
            peer-focus:text-sm
            ${error
                ? "text-red-500 peer-focus:text-red-500"
                : "text-muted dark:text-muted peer-focus:text-primary"
            }
            `}
        >
            {label}
        </label>
        {error && (
            <div className="flex items-center gap-2 mt-1 text-red-500 font-heading text-sm animate-shake">
            <AlertCircle size={18} strokeWidth={2.2} className="shrink-0" />
            <span>{error}</span>
            </div>
        )}
        </div>
    );
}
