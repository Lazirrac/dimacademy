//frontend\src\components\layout\auth\Login.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./services/useAuth";
import LoginLayout from "./LoginLayout";
import MultiStepLoginForm from "./MultiStepLoginForm";

export default function Login() {
    const { login } = useAuth();
    const navigate = useNavigate();

    // Cuando el paso 2 finalice con éxito, recibimos `data` y
    // hacemos login + redirección
    const handleLoginSuccess = (data) => {
        login(data);
        navigate(`/${data.rol}`);
    };

    return (
        <LoginLayout>
        <MultiStepLoginForm onLoginSuccess={handleLoginSuccess} />
        </LoginLayout>
    );
}
