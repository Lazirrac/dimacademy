// frontend/src/components/DashboardLayout.jsx
import React from "react";
import { useAuth } from "../hooks/useAuth";

const DashboardLayout = ({ title, children }) => {
    const { logout } = useAuth();

    const handleLogout = () => {
        logout(); // Elimina sesión en frontend
        // Si querés también llamar a backend:
        fetch("/api/auth/logout", { method: "POST", credentials: "include" });
    };

    return (
        <div style={styles.container}>
        <header style={styles.header}>
            <h1 style={styles.title}>{title}</h1>
            <button onClick={handleLogout} style={styles.logoutBtn}>
            Cerrar sesión
            </button>
            <p style={styles.subtitle}>Bienvenido/a al sistema DIM Academy</p>
        </header>
        <main>{children}</main>
        </div>
    );
    };

    const styles = {
    container: {
        padding: "2rem",
        textAlign: "center",
        position: "relative",
    },
    header: {
        marginBottom: "1rem",
        position: "relative",
    },
    title: {
        color: "#003366",
        fontSize: "2rem",
        margin: 0,
    },
    subtitle: {
        color: "#555",
        fontSize: "1rem",
        margin: 0,
    },
    logoutBtn: {
        position: "absolute",
        top: 0,
        right: 0,
        margin: "1rem",
        padding: "0.5rem 1rem",
        backgroundColor: "#cc0000",
        color: "#fff",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer",
    },
};

export default DashboardLayout;
