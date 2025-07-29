//frontend\src\services\authService.js
import { API_URL } from "../config/api";

export const loginRequest = async (email, password) => {
    const res = await fetch(`${API_URL}/auth/login`, {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
        credentials: "include", // ⚠️ Esto es imprescindible para sesión
    });

    const data = await res.json();

    if (!res.ok) {
        throw new Error(data.error || "Error al iniciar sesión");
    }

    return data;
    };

    export const logoutRequest = async () => {
    const res = await fetch(`${API_URL}/auth/logout`, {
        method: "POST",
        credentials: "include", // ⚠️ También aquí
    });

    const data = await res.json();

    if (!res.ok) {
        throw new Error(data.error || "Error al cerrar sesión");
    }

    return data;
};
