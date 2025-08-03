//frontend\src\components\forms\LoginForm.jsx
import React from "react";
import InputField from "../ui/InputField";
import ErrorMessage from "../ui/ErrorMessage";
import Button from "../ui/Button";

export default function LoginForm({
    email, onEmailChange,
    password, onPasswordChange,
    loading, errorMsg,
    onSubmit,
    }) {
    return (
        <form onSubmit={onSubmit} className="space-y-6">
        <InputField
            id="email"
            label="Correo electrónico"
            type="email"
            value={email}
            onChange={onEmailChange}
            error={errorMsg.toLowerCase().includes("correo") ? errorMsg : ""}
        />

        <InputField
            id="password"
            label="Contraseña"
            type="password"
            value={password}
            onChange={onPasswordChange}
            error={errorMsg.toLowerCase().includes("contraseña") ? errorMsg : ""}
        />

        {errorMsg && !errorMsg.toLowerCase().includes("correo") && (
            <ErrorMessage message={errorMsg} />
        )}

        <Button disabled={loading}>
            {loading ? "Ingresando..." : "Ingresar"}
        </Button>
        </form>
    );
}
