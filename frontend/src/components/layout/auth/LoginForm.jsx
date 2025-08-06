//frontend\src\components\layout\auth\LoginForm.jsx
import React from "react";
import InputField from "../../ui/InputField";
import Button from "../../ui/Button";

export default function LoginForm({
    email,
    onEmailChange,
    password,
    onPasswordChange,
    loading,
    errorMsg,
    onSubmit,
    }) {
    // 1. Si el mensaje habla de "correo", va a emailError; si no, queda vacío
    const emailError =
        errorMsg && errorMsg.toLowerCase().includes("correo") ? errorMsg : "";

    // 2. Si no es un error de correo, asumimos que es de contraseña u otro genérico
    const passwordError =
        errorMsg && !errorMsg.toLowerCase().includes("correo") ? errorMsg : "";

    return (
        <form onSubmit={onSubmit} className="space-y-6">
        <InputField
            id="email"
            label="Correo electrónico"
            type="email"
            value={email}
            onChange={onEmailChange}
            error={emailError}
        />

        <InputField
            id="password"
            label="Contraseña"
            type="password"
            value={password}
            onChange={onPasswordChange}
            error={passwordError}
        />

        <Button disabled={loading}>
            {loading ? "Ingresando..." : "Ingresar"}
        </Button>
        </form>
    );
}
