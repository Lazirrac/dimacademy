// frontend/src/components/layout/Header.jsx
import { Link } from "react-router-dom";
import Logo from "../ui/Logoo";
import ThemeToggle from "../ui/ThemeToggle";

export default function Header() {
    return (
        <header className="w-full px-6 md:px-12 py-3 border-b border-gray-200 dark:border-gray-700 backdrop-blur-lg bg-white/80 dark:bg-[#0f172a]/80 shadow-sm font-[Saira] text-sm md:text-base z-50">
        <div className="max-w-screen-xl mx-auto flex items-center justify-between">

            {/* 🔹 IZQUIERDA: Navegación principal */}
            <nav className="flex items-center gap-6 font-semibold text-text dark:text-white">
            <Link to="/" className="hover:text-primary transition-colors">Inicio</Link>
            <Link to="/contacto" className="hover:text-primary transition-colors">Contacto</Link>
            </nav>

            {/* 🟢 CENTRO: Logo + nombre centrado */}
            <div className="flex items-center">
            <Logo className="w-12 md:w-14 drop-shadow-md" />
            <span className="text-[0.85rem] md:text-base font-bold tracking-wide text-primaryDark dark:text-primary">
                DIM Academy
            </span>
            </div>

            {/* 🔸 DERECHA: Sesión + Botón + Tema */}
            <div className="flex items-center gap-4">
            <Link to="/login" className="font-semibold hover:text-primary transition-colors">
                Iniciar sesión
            </Link>

            <Link
                to="/registro"
                className="bg-primary hover:bg-primaryDark text-white font-bold py-1.5 px-4 rounded-lg transition-colors shadow-md"
            >
                Regístrate
            </Link>

            {/* Solo este toggle de tema */}
            <ThemeToggle />
            </div>
        </div>
        </header>
    );
}
