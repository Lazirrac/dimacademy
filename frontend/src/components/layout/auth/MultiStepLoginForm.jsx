//frontend\src\components\layout\auth\MultiStepLoginForm.jsx
import React, { useState } from "react";
import { ChevronLeft, UserCircle } from "lucide-react";
import InputField from "../../ui/InputField";
import Button from "../../ui/Button";
import { verifyEmailRequest, loginRequest } from "./services/authService";

export default function MultiStepLoginForm({ onLoginSuccess }) {
    const [step, setStep] = useState(1);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [keepSignedIn, setKeepSignedIn] = useState(false);

    // Paso 1: Verifica email
    const handleEmailSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setEmailError("");
        try {
        await verifyEmailRequest(email);
        setStep(2);
        } catch (err) {
        setEmailError(err.message || "Correo no encontrado");
        } finally {
        setLoading(false);
        }
    };

    // Paso 2: Login
    const handleLoginSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setPasswordError("");
        try {
        const data = await loginRequest({ email, password });
        onLoginSuccess(data);
        } catch (err) {
        setPasswordError(err.message || "Contraseña incorrecta");
        } finally {
        setLoading(false);
        }
    };

    return (
        <div className="max-w-md mx-auto">
        {/* Paso 1: Email */}
        {step === 1 && (
            <form onSubmit={handleEmailSubmit} className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-heading font-semibold text-center mb-6">
                Iniciar sesión
            </h3>
            <InputField
                id="email"
                label="Correo electrónico"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={emailError}
                autoComplete="username"
            />
            <Button disabled={loading}>
                {loading ? "Verificando..." : "Siguiente"}
            </Button>
            <div className="flex flex-col items-center mt-8 space-y-1">
                <span className="text-sm text-muted">
                ¿Necesitas una cuenta DIM Academy?
                </span>
                <a
                href="#"
                className="text-base text-primary hover:text-primary-light font-semibold transition-colors"
                >
                Crear una cuenta
                </a>
            </div>
            </form>
        )}

        {/* Paso 2: Contraseña */}
        {step === 2 && (
            <form onSubmit={handleLoginSubmit} className="space-y-6">
            {/* Header centrado con flecha */}
            <div className="flex flex-col items-center text-center gap-0 mb-4">
                <div
                className="relative w-full flex items-center justify-center"
                style={{ minHeight: 44 }}
                >
                <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="absolute left-0 top-1/2 -translate-y-1/2 p-1 text-muted hover:text-primary-light"
                    aria-label="Volver a ingresar correo"
                    tabIndex={0}
                    style={{ lineHeight: 0 }}
                >
                    <ChevronLeft size={28} />
                </button>
                <h2 className="text-2xl font-heading font-semibold w-full text-center select-none leading-tight m-0">
                    Bienvenido/a
                </h2>
                </div>
                <span className="text-muted text-base leading-tight m-0">
                {email}
                </span>
                <UserCircle size={50} className="text-gray-400 mt-2" />
            </div>
            {/* Input de contraseña y olvidada */}
            <div>
                <div className="flex justify-end">
                <a
                    href="#"
                    className="text-sm text-primary hover:text-primary-light font-medium -mt-[2px] inline-block"
                    style={{ position: "relative", top: "-2px" }}
                >
                    ¿Olvidada?
                </a>
                </div>
                <InputField
                id="password"
                label="Contraseña"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                error={passwordError}
                autoComplete="current-password"
                />
            </div>
            {/* Botón login */}
            <Button className="w-full mt-4" disabled={loading} type="submit">
                {loading ? "Ingresando..." : "Iniciar sesión"}
            </Button>
            {/* Permanecer conectado */}
            <div className="flex items-center mt-2">
                <input
                type="checkbox"
                id="keep-signed-in"
                className="mr-2 accent-primary"
                checked={keepSignedIn}
                onChange={e => setKeepSignedIn(e.target.checked)}
                />
                <label htmlFor="keep-signed-in" className="text-sm text-muted">
                Permanecer conectado
                </label>
            </div>
            </form>
        )}
        </div>
    );
}
