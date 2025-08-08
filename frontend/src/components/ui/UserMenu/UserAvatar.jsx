// src/components/ui/UserMenu/UserAvatar.jsx
export default function UserAvatar({ name, className = "" }) {
  return (
    <span
      className={`bg-gray-400 dark:bg-gray-700 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold text-lg ${className}`}
      aria-label={name || "Usuario"}
    >
      {name?.charAt(0).toUpperCase() || "A"}
    </span>
  );
}
