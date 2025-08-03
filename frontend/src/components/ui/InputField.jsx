//frontend\src\components\ui\InputField.jsx
export default function InputField({
    id,
    label,
    type = "text",
    value,
    onChange,
    placeholder = "\u00a0", // espacio duro invisible para activar peer-placeholder-shown
    required = true,
    error = "",
    }) {
    const baseInput =
        "peer w-full px-4 pt-6 pb-2 rounded-xl border bg-white dark:bg-[#1c1c1e] text-sm text-text dark:text-white shadow-sm focus:outline-none focus:ring-2 transition duration-200";

    const errorStyle = error
        ? "border-red-500 focus:ring-red-400"
        : "border-gray-300 dark:border-gray-600 focus:ring-primary";

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
            className="absolute left-4 top-2 text-sm font-medium text-muted dark:text-gray-400 transition-all
            peer-placeholder-shown:top-4.5 
            peer-placeholder-shown:text-base 
            peer-placeholder-shown:text-gray-500 
            dark:peer-placeholder-shown:text-gray-400 
            peer-focus:top-2 
            peer-focus:text-sm 
            peer-focus:text-primary"
        >
            {label}
        </label>
        {error && (
            <p className="text-sm text-red-500 font-[Rubik]">{error}</p>
        )}
        </div>
    );
}
