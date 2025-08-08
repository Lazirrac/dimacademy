//frontend\src\components\layout\dashboards\admin\HeaderAdmin.jsx

import UserMenu from "../../../ui/UserMenu/UserMenu";
import { LogOut, PlusCircle, Bell, Settings } from "lucide-react";
import { useAuth } from "../../auth/services/useAuth";
import ThemeToggle from "../../../ui/ThemeToggle";
export default function HeaderAdmin() {
  const { usuario, logout } = useAuth();

  // Opciones específicas para el rol admin
  const adminMenuItems = [
    {
      icon: PlusCircle,
      label: "Nuevo establecimiento",
      onClick: () => {
        /* lógica */
      },
    },
    {
      icon: Bell,
      label: "Notificaciones/Mensajes",
      onClick: () => {
        /* lógica */
      },
    },
    {
      icon: Settings,
      label: "Configuración",
      onClick: () => {
        /* lógica */
      },
    },
    // Puedes agregar un {divider: true} si querés separar secciones
  ];

  const handleLogout = async () => {
    logout();
    try {
      await fetch("/api/auth/logout", {
        method: "POST",
        credentials: "include",
      });
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
    }
  };

  return (
    <header className="flex items-center justify-between h-16 px-4 md:px-10 border-b border-gray-200 dark:border-gray-800 bg-surface-light dark:bg-surface-dark transition-colors duration-500">
      {/* Elementos a la izquierda (ejemplo: logo, navegación, etc.) */}
      <div className="flex items-center gap-4">
        {/* <Logo /> */}
        {/* <Nav /> */}
      </div>

      {/* Elementos a la derecha */}
      <div className="flex items-center gap-2">
        <ThemeToggle />
        <UserMenu
          usuario={usuario}
          menuItems={adminMenuItems}
          onLogout={handleLogout}
        />
      </div>
    </header>
  );
}
