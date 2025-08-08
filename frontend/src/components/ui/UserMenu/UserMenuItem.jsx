// src/components/ui/UserMenu/UserMenuItem.jsx
export default function UserMenuItem({ icon: Icon, children, onClick, className = "" }) {
  return (
    <button
      onClick={onClick}
      className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-primary/10 transition-colors ${className}`}
      type="button"
    >
      {Icon && <Icon size={18} />}
      {children}
    </button>
  );
}
