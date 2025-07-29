//frontend\src\pages\Login.jsx
import { useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { loginRequest } from "../services/authService";

function Login() {
    const { login } = useAuth();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);
        setErrorMsg("");

        try {
        const data = await loginRequest(email, password);
        login(data);
        } catch (error) {
        setErrorMsg(error.message);
        } finally {
        setLoading(false);
        }
    };

    return (
        <div className="login-container">
        <form onSubmit={handleLogin}>
            <h2>Iniciar sesión</h2>

            <label htmlFor="email">Correo electrónico</label>
            <input
            id="email"
            type="email"
            placeholder="correo@ejemplo.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            />

            <label htmlFor="password">Contraseña</label>
            <input
            id="password"
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            />

            {errorMsg && <p className="error">{errorMsg}</p>}
            <button type="submit" disabled={loading}>
            {loading ? "Ingresando..." : "Ingresar"}
            </button>
        </form>
        </div>
    );
}

export default Login;
