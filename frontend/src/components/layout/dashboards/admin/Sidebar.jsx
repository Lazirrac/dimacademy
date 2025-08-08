//frontend\src\components\layout\dashboards\admin\Sidebar.jsx
import { Building, Clock } from "lucide-react";
import { useAuth } from "../../auth/services/useAuth";
import LogoBrand from "../../../ui/LogoBrand";
export default function Sidebar() {
  const { usuario } = useAuth();

  return (
    <aside className="w-64 bg-surface-light dark:bg-surface-dark border-r border-gray-200 dark:border-gray-800 flex flex-col justify-between transition-colors duration-500 min-h-screen">
      {/* Arriba: Logo y navegación */}
      <div>
        <div className="flex items-center gap-2 h-16 px-6 border-b border-gray-100 dark:border-gray-800">
          <LogoBrand size="w-10" textSize="text-lg" subtitleSize="text-[10px]" />
        </div>
        {/* Usuario */}
        <div className="flex flex-col items-center py-6">
          <div className="h-14 w-14 rounded-full bg-gray-300 dark:bg-gray-700 flex items-center justify-center text-3xl font-bold mb-2">
            {usuario?.nombre?.charAt(0) || "A"}
          </div>
          <div className="font-semibold text-base">
            {usuario?.nombre || "Administrador"}
          </div>
          <div className="text-muted text-xs">
            {usuario?.email || "admin@dim.com"}
          </div>
        </div>
        <nav className="flex flex-col gap-2 mt-2 px-4">
          <a
            href="#"
            className="flex items-center gap-2 px-4 py-2 rounded-xl font-medium text-base transition-colors
                text-primary dark:text-primary-light bg-primary/10 dark:bg-primary-dark/20 hover:bg-primary/20 hover:dark:bg-primary-dark/40"
          >
            <Building size={30} /> Gestionar establecimientos
          </a>
        </nav>
      </div>

      {/* Abajo: Últimas acciones/modificaciones */}
      <div className="px-4 py-3 border-t border-gray-100 dark:border-gray-800">
        <div className="flex items-center gap-2 mb-1 text-muted text-xs font-bold uppercase tracking-widest">
          <Clock size={16} />
          Últimas acciones
        </div>
        <ul className="text-sm space-y-1 text-muted">
          <li>Creó el establecimiento "Escuela 5"</li>
          <li>Editó datos de usuario</li>
        </ul>
      </div>
    </aside>
  );
}
