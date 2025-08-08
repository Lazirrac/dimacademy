// src/components/ui/UserMenu/UserMenu.jsx
import { useState, useRef } from "react";
import { ChevronDown } from "lucide-react";
import UserAvatar from "./UserAvatar";
import UserMenuItem from "./UserMenuItem";
import UserMenuDivider from "./UserMenuDivider";

export default function UserMenu({
  usuario,
  menuItems = [],
  onLogout,
  className = "",
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  return (
    <div className={`relative ${className}`}>
      <button
        onClick={() => setMenuOpen((v) => !v)}
        className="flex items-center gap-2 px-2 py-1 rounded-full hover:bg-muted/20 focus:outline-none transition-all"
        aria-label="Abrir menú de usuario"
      >
        <UserAvatar name={usuario?.nombre} />
        <ChevronDown className="text-muted" size={20} />
      </button>

      {menuOpen && (
        <div
          ref={menuRef}
          className={`
            absolute right-0 mt-2 w-72
            bg-surface-light/90 dark:bg-surface-dark/90
            backdrop-blur-xl
            rounded-2xl
            shadow-2xl shadow-black/20
            border border-gray-200 dark:border-gray-700
            z-50 p-4
            animate-fade-in
            transition-all duration-200
          `}
        >
          {/* Info usuario */}
          <div className="flex flex-col items-center gap-1 mb-5">
            <span className="text-lg font-bold text-primary dark:text-primary-light drop-shadow">
              {usuario?.nombre || "Usuario"}
            </span>
            <span className="text-xs text-muted/70 dark:text-muted/60 font-medium">
              {usuario?.email}
            </span>
          </div>

          {/* Menú dinámico */}
          <ul className="flex flex-col gap-1">
            {menuItems.map((item, idx) =>
              item.divider ? (
                <UserMenuDivider key={idx} />
              ) : (
                <li key={item.label || idx}>
                  <UserMenuItem
                    icon={item.icon}
                    onClick={item.onClick}
                    className={`
                      font-semibold
                      text-base
                      text-text-light dark:text-text-dark
                      rounded-xl
                      px-4 py-2
                      flex items-center gap-2
                      hover:bg-primary-light/15
                      hover:text-primary
                      transition-all
                      ${item.className || ""}
                    `}
                  >
                    {item.label}
                  </UserMenuItem>
                </li>
              )
            )}
            <UserMenuDivider />
            <li>
              <UserMenuItem
                icon={menuItems?.logoutIcon}
                onClick={onLogout}
                className={`
                  text-red-500 font-semibold
                  hover:bg-red-500/10 hover:text-red-600
                  transition-all rounded-xl px-4 py-2
                `}
              >
                Cerrar sesión
              </UserMenuItem>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
