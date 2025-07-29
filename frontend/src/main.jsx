// frontend/src/main.jsx
import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { AuthProvider } from "./context/AuthProvider";
import "./index.css";

// 🎯 Punto de entrada principal con soporte para Concurrent Mode
const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("No se encontró el elemento root en index.html");
}

createRoot(rootElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <App />
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
