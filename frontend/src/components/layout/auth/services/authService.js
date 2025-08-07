// frontend/src/components/layout/auth/services/authService.js

import { API_URL } from "../../../../config/api";

/**
 * Paso 1 – Comprueba que el email existe en el backend.
 * @param {string} email
 * @returns {Promise<void>}
 * @throws {Error} con el mensaje devuelto por la API si el email no existe.
 */
export const verifyEmailRequest = async (email) => {
    const res = await fetch(`${API_URL}/auth/check-email`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
        credentials: "include",
    });

    const data = await res.json();
    if (!res.ok) {
        // Lanzamos el mensaje que venga en data.error o data.message
        throw new Error(data.error || data.message || "Error al verificar email");
    }
  // Si todo OK, devolvemos sin payload
};

/**
 * Paso 2 – Envía email y password para iniciar sesión.
 * @param {{email: string, password: string}} credentials
 * @returns {Promise<Object>} datos del usuario (rol, id_usuario, etc.)
 * @throws {Error} si la respuesta no es OK, usando data.error o data.message.
 */
export const loginRequest = async ({ email, password }) => {
    const res = await fetch(`${API_URL}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
        credentials: "include",
    });

    const data = await res.json();
    if (!res.ok) {
        throw new Error(data.error || data.message || "Error al iniciar sesión");
    }
    return data;
};

/**
 * Cierra la sesión actual.
 * @returns {Promise<Object>}
 * @throws {Error} si la respuesta no es OK.
 */
export const logoutRequest = async () => {
    const res = await fetch(`${API_URL}/auth/logout`, {
        method: "POST",
        credentials: "include",
    });

    const data = await res.json();
    if (!res.ok) {
        throw new Error(data.error || data.message || "Error al cerrar sesión");
    }
    return data;
};
