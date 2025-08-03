// frontend/src/router/AppRouter.jsx
import { Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import Login from "../pages/Login";
import Admin from "../pages/AdminDashboard";
import Sistema from "../pages/SistemaDashboard";
import Establecimiento from "../pages/EstablecimientoDashboard";
import Docente from "../pages/DocenteDashboard";
import Estudiante from "../pages/EstudianteDashboard";
import Responsable from "../pages/ResponsableDashboard";

/**
 * AppRouter – Enrutador principal de la aplicación
 */
export const AppRouter = () => {
  const { usuario } = useAuth();

  return (
    <Routes>
      {/* Ruta de inicio: redirige al rol o al login */}
      <Route
        path="/"
        element={
          !usuario ? <Navigate to="/login" replace /> : <Navigate to={`/${usuario.rol}`} replace />
        }
      />
      <Route
        path="/login"
        element={!usuario ? <Login /> : <Navigate to={`/${usuario.rol}`} replace />}
      />

      {/* Rutas por rol protegidas */}
      <Route path="/admin" element={<Protegida rol="admin"><Admin /></Protegida>} />
      <Route path="/sistema" element={<Protegida rol="sistema"><Sistema /></Protegida>} />
      <Route path="/establecimiento" element={<Protegida rol="establecimiento"><Establecimiento /></Protegida>} />
      <Route path="/docente" element={<Protegida rol="docente"><Docente /></Protegida>} />
      <Route path="/estudiante" element={<Protegida rol="estudiante"><Estudiante /></Protegida>} />
      <Route path="/responsable" element={<Protegida rol="responsable"><Responsable /></Protegida>} />

      {/* Ruta por defecto */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

/**
 * Protegida – Componente para proteger rutas según el rol
 */
const Protegida = ({ rol, children }) => {
  const { usuario } = useAuth();

  if (!usuario) return <Navigate to="/login" replace />;
  if (usuario.rol !== rol) return <Navigate to={`/${usuario.rol}`} replace />;

  return children;
};