import { useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { loginRequest } from "../services/authService";


function Login() {
    const { login } = useAuth();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const data = await loginRequest(email, password);
            login(data); // guarda el usuario en contexto
        } catch (error) {
            alert("Error: " + error.message);
        }
    };

    return (
    <form onSubmit={handleLogin}>
        <h2>Iniciar sesión</h2>
        <input type="email" placeholder="Correo" onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="Contraseña" onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit">Ingresar</button>
    </form>
    );
}

export default Login;
