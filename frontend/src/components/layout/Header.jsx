// frontend/src/components/layout/Header.jsx

import React, { useState } from "react";
import { Link } from "react-router-dom";
import NavLink from "../ui/NavLink";
import Logo from "../ui/Logoo";
import ThemeToggle from "../ui/ThemeToggle";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
        {/* ——— Cabecera fija ——— */}
        <header
            className={`
            fixed top-0 left-0 w-full z-50
            bg-white/80 dark:bg-[#0f172a]/80 backdrop-blur-lg
            border-b border-gray-200 dark:border-gray-700
            transition-all duration-300 font-sans
            ${menuOpen ? "pb-6" : "pb-0"}
            `}
        >
            <div className="
            max-w-screen-xl mx-auto px-6 md:px-12
            grid
            grid-cols-[1fr_auto]          /* móvil: primera columna fr, segunda auto */
            md:grid-cols-[auto_1fr_auto]  /* desktop: nav auto | logo 1fr | acciones auto */
            items-center
            ">
            {/* ◀️ Enlaces (solo desktop) */}
            <nav className="hidden md:flex gap-6">
                <NavLink to="/">Inicio</NavLink>
                <NavLink to="/contacto">Contacto</NavLink>
            </nav>

            {/* 🔶 Logo centrado */}
            <Link
                to="/"
                className="flex items-center justify-self-center py-2 animate-slide-in"
            >
                <Logo className="w-14 md:w-20 drop-shadow-md" />
                <span className="text-2xl ml-2 font-heading font-bold tracking-wide text-primary-dark dark:text-primary">
                DIM Academy
                </span>
            </Link>

            {/* ▶️ Acciones + hamburguesa */}
            <div className="flex items-center justify-end gap-4">
                {/* botones desktop */}
                <div className="hidden md:flex items-center gap-4">
                <NavLink to="/login">Iniciar sesión</NavLink>
                <Link
                    to="/registro"
                    className="
                    inline-block relative underline-anim
                    bg-primary text-white font-bold
                    py-1.5 px-4 rounded-lg shadow-md animate-slide-in
                    "
                >
                    Regístrate
                </Link>
                <ThemeToggle />
                </div>
                {/* hamburguesa móvil (ahora w-6 h-6) */}
                <button
                className="md:hidden self-center flex items-center justify-center w-6 h-6"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
                >
                {menuOpen ? (
                    <span className="text-xl leading-none">&times;</span>
                ) : (
                        <svg
                        className="w-full h-full text-text-light dark:text-text-dark"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={3}  
                            d="
                            M4 6h16               
                            M4 12h16            
                            M4 18h16   
                            "
                        />
                        </svg>
                )}
                </button>
            </div>
            </div>

            {/* ❗ Menú móvil expandido */}
            {menuOpen && (
            <div className="mt-2 md:hidden px-6">
                <nav className="flex flex-col gap-4">
                <NavLink to="/" onClick={() => setMenuOpen(false)}>Inicio</NavLink>
                <NavLink to="/contacto" onClick={() => setMenuOpen(false)}>Contacto</NavLink>
                <NavLink to="/login" onClick={() => setMenuOpen(false)}>Iniciar sesión</NavLink>
                <Link
                    to="/registro"
                    className="inline-block bg-primary text-white font-bold py-2 px-4 rounded-lg shadow-md text-center"
                    onClick={() => setMenuOpen(false)}
                >
                    Regístrate
                </Link>
                </nav>
                <div className="mt-4">
                <ThemeToggle />
                </div>
            </div>
            )}
        </header>
        </>
    );
}
