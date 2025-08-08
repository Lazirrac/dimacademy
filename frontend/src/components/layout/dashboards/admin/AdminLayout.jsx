//frontend\src\components\layout\dashboards\admin\AdminLayout.jsx
import Sidebar from "./Sidebar";
import HeaderAdmin from "./HeaderAdmin";

export default function AdminLayout({ children }) {
    return (
        <div className="min-h-screen flex bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark font-sans transition-colors duration-500">
        {/* Sidebar */}
        <Sidebar />

        {/* Main content area */}
        <div className="flex-1 flex flex-col min-w-0">
            {/* Header superior */}
            <HeaderAdmin />

            {/* Contenido central */}
            <main className="flex-1 p-4 md:p-8 bg-background-light dark:bg-background-dark">
            {children}
            </main>
        </div>
        </div>
    );
}
