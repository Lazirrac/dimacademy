// frontend/src/services/authService.js

import { API_URL } from "../config/api";

    /**
     * Intenta iniciar sesión enviando credenciales al backend.
     * @param {string} email 
     * @param {string} password 
     * @returns {Promise<Object>} datos del usuario (rol, id_usuario, etc.)
     * @throws {Error} si la respuesta no es OK
     */
    export const loginRequest = async (email, password) => {
    const res = await fetch(`${API_URL}/auth/login`, {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
        credentials: "include", // ⚠️ imprescindibles para cookies/sesiones
    });

    const data = await res.json();

    if (!res.ok) {
        // Propaga mensaje de error enviado por el backend
        throw new Error(data.error || "Error al iniciar sesión");
    }

    return data;
    };

    /**
     * Cierra la sesión actual llamando al endpoint de logout.
     * @returns {Promise<Object>}
     * @throws {Error} si la respuesta no es OK
     */
    export const logoutRequest = async () => {
    const res = await fetch(`${API_URL}/auth/logout`, {
        method: "POST",
        credentials: "include", // ⚠️ para enviar la cookie de sesión
    });

    const data = await res.json();

    if (!res.ok) {
        throw new Error(data.error || "Error al cerrar sesión");
    }

    return data;
};
