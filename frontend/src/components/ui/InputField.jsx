// src/components/ui/InputField.jsx

export default function InputField({
    id,
    label,
    type = "text",
    value,
    onChange,
    placeholder = "\u00a0", // espacio duro invisible para peer-placeholder-shown
    required = true,
    error = "",
    }) {
    const baseInput = [
        "peer",
        "w-full px-4 pt-6 pb-2",
        "rounded-xl border",
        "bg-surface-light dark:bg-surface-dark",
        "text-sm text-text-light dark:text-text-dark",
        "placeholder-muted dark:placeholder-muted-dark",
        "shadow-sm",
        "focus:outline-none transition-all duration-200",
    ].join(" ");

    const errorStyle = error
        ? "border-red-500 focus:ring-2 focus:ring-red-400"
        : "border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-primary";

    return (
        <div className="relative space-y-1">
        <input
            id={id}
            type={type}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            required={required}
            className={`${baseInput} ${errorStyle}`}
        />

        <label
            htmlFor={id}
            className={`
            absolute left-4 top-2 text-sm font-medium
            text-muted dark:text-muted
            transition-all
            peer-placeholder-shown:top-4.5
            peer-placeholder-shown:text-base
            peer-placeholder-shown:text-muted
            peer-focus:top-2
            peer-focus:text-sm
            peer-focus:text-primary
            `}
        >
            {label}
        </label>

        {error && (
            <p className="text-sm text-red-500 font-body">
            {error}
            </p>
        )}
        </div>
    );
}
