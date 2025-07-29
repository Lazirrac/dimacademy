//frontend\src\context\AuthProvider.jsx
import { useState, useEffect } from "react";
import { AuthContext } from "./AuthContext";

// 👉 Cargar usuario desde localStorage si existe
const obtenerUsuarioInicial = () => {
  const usuarioGuardado = localStorage.getItem("usuario");
  return usuarioGuardado ? JSON.parse(usuarioGuardado) : null;
};

export const AuthProvider = ({ children }) => {
  const [usuario, setUsuario] = useState(obtenerUsuarioInicial);

  // Guardar usuario en localStorage cuando cambia
  useEffect(() => {
    if (usuario) {
      localStorage.setItem("usuario", JSON.stringify(usuario));
    } else {
      localStorage.removeItem("usuario");
    }
  }, [usuario]);

  const login = (datosUsuario) => {
    setUsuario(datosUsuario); // ← recibido desde loginRequest
  };

  const logout = () => {
    setUsuario(null);
    localStorage.removeItem("usuario");
    // También podrías hacer un fetch a /auth/logout si querés cerrar sesión en backend
  };

  return (
    <AuthContext.Provider value={{ usuario, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
