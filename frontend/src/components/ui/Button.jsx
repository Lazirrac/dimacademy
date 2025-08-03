//frontend\src\components\ui\Button.jsx
export default function Button({ children, disabled, type = "submit" }) {
    return (
        <button
        type={type}
        disabled={disabled}
        className={`w-full py-2 px-4 rounded-xl font-semibold tracking-wide transition duration-300 ease-in-out transform
            ${
            disabled
                ? "bg-gray-400 cursor-not-allowed text-white"
                : "bg-primary text-white hover:bg-primaryDark hover:scale-[1.015] focus:ring-2 focus:ring-primaryDark dark:focus:ring-primary"
            }
            shadow-md focus:outline-none focus:ring-offset-1 focus:ring-offset-white dark:focus:ring-offset-[#0f172a]
        `}
        >
        {children}
        </button>
    );
}
