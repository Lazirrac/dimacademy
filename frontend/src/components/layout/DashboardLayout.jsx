// frontend/src/components/DashboardLayout.jsx
import React from "react";
import { useAuth } from "../../hooks/useAuth";

const DashboardLayout = ({ title, children }) => {
    const { logout } = useAuth();

    const handleLogout = async () => {
        logout(); // Limpia el contexto
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
        <div>
        <header>
            <div>
            <h1>{title}</h1>
            <p>Bienvenido/a al sistema DIM Academy</p>
            </div>
            <button onClick={handleLogout}>
            Cerrar sesión
            </button>
        </header>
        <main>{children}</main>
        </div>
    );
};

export default DashboardLayout;
