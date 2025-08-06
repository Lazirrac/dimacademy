// frontend\src\components\ui\Button.jsx
export default function Button({
    children,
    disabled,
    type = "submit",
    ...props
    }) {
    return (
        <button
        type={type}
        disabled={disabled}
        {...props}
        className={`
            w-full py-3 px-4
            rounded-xl font-semibold tracking-wide
            bg-primary text-white
            transition-transform duration-200 ease-in-out transform
            shadow-md focus:outline-none
            ${
            disabled
                ? "bg-muted cursor-not-allowed opacity-50"
                : "hover:bg-primary-light hover:scale-105 focus:ring-2 focus:ring-primary focus:ring-offset-1 focus:ring-offset-background-light dark:focus:ring-offset-background-dark"
            }
        `}
        >
        {children}
        </button>
    );
}