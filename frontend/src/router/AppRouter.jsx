import { Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import Login from "../pages/Login";
import Admin from "../pages/AdminDashboard";
import Sistema from "../pages/SistemaDashboard";
import Establecimiento from "../pages/EstablecimientoDashboard";
import Docente from "../pages/DocenteDashboard";
import Estudiante from "../pages/EstudianteDashboard";
import Responsable from "../pages/ResponsableDashboard";

export const AppRouter = () => {
  const { usuario } = useAuth();

  if (!usuario) return <Login />;

  switch (usuario.rol) {
    case "admin":
      return <Admin />;
    case "sistema":
      return <Sistema />;
    case "establecimiento":
      return <Establecimiento />;
    case "docente":
      return <Docente />;
    case "estudiante":
      return <Estudiante />;
    case "responsable":
      return <Responsable />;
    default:
      return <Navigate to="/" />;
  }
};
