import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { loginRequest } from "../services/authService";
import LoginLayout from "../components/layout/LoginLayout";
import InputField from "../components/ui/InputField"
import ErrorMessage from "../components/ui/ErrorMessage";
import Button from "../components/ui/Button";

export default function Login() {
    const { login } = useAuth();
    const navigate = useNavigate();

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
        navigate(`/${data.rol}`);
        } catch (error) {
        setErrorMsg(error.message || "Error al iniciar sesión");
        } finally {
        setLoading(false);
        }
    };

    return (
        <LoginLayout>
        <form onSubmit={handleLogin} className="space-y-6">
            <InputField
            id="email"
            label="Correo electrónico"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder=""
            error={errorMsg.includes("correo") ? errorMsg : ""}
            />

            <InputField
            id="password"
            label="Contraseña"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder=""
            error={errorMsg.includes("correo") ? errorMsg : ""}
            />

            {errorMsg && <ErrorMessage message={errorMsg} />}

            <Button disabled={loading}>
            {loading ? "Ingresando..." : "Ingresar"}
            </Button>
        </form>
        </LoginLayout>
    );
}