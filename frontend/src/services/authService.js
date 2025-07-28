import { API_URL } from "../config/api";

export const loginRequest = async (email, password) => {
    const res = await fetch(`${API_URL}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
    });

    const data = await res.json();
    if (!res.ok) throw new Error(data.error || "Error de login");

    return data; // contiene rol, id_usuario, etc.
};
