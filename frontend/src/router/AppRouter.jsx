//frontend\src\router\AppRouter.jsx
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
  console.log("usuario actual:", usuario);
  return (
    <Routes>
      <Route path="/" element={!usuario ? <Login /> : <Navigate to={`/${usuario.rol}`} />} />

      <Route path="/admin" element={<Protegida rol="admin" componente={<Admin />} />} />
      <Route path="/sistema" element={<Protegida rol="sistema" componente={<Sistema />} />} />
      <Route path="/establecimiento" element={<Protegida rol="establecimiento" componente={<Establecimiento />} />} />
      <Route path="/docente" element={<Protegida rol="docente" componente={<Docente />} />} />
      <Route path="/estudiante" element={<Protegida rol="estudiante" componente={<Estudiante />} />} />
      <Route path="/responsable" element={<Protegida rol="responsable" componente={<Responsable />} />} />

      {/* Ruta por defecto */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

// Componente reutilizable para proteger rutas por rol
const Protegida = ({ rol, componente }) => {
  const { usuario } = useAuth();
  if (!usuario) return <Navigate to="/" />;
  return usuario.rol === rol ? componente : <Navigate to="/" />;
};
