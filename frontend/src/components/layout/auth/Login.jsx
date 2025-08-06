//frontend\src\pages\Login.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./services/useAuth";
import { loginRequest } from "./services/authService";
import LoginLayout from "./LoginLayout";
import LoginForm from "./LoginForm";

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
            <LoginForm
                email={email}
                onEmailChange={(e) => setEmail(e.target.value)}
                password={password}
                onPasswordChange={(e) => setPassword(e.target.value)}
                loading={loading}
                errorMsg={errorMsg}
                onSubmit={handleLogin}
            />
        </LoginLayout>
    );
}
