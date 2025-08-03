// frontend/src/pages/EstudianteDashboard.jsx
import DashboardLayout from "../components/DashboardLayout";
import { useAuth } from "../hooks/useAuth";

const EstudianteDashboard = () => {
  const { usuario } = useAuth();

  return (
    <DashboardLayout title="Panel del Estudiante">
      <div>
        <p>
          Bienvenido/a al panel de{" "}
          <span>{usuario?.rol || "usuario"}</span> de DIM Academy.
        </p>

        {usuario?.email && (
          <p>
            Sesión iniciada como: <span>{usuario.email}</span>
          </p>
        )}

        {/* 🎓 Espacio para datos relevantes del estudiante */}
        <div>
          <div>
            <h3>Asistencias registradas</h3>
            <p>--%</p>
          </div>

          <div>
            <h3>Actividades completadas</h3>
            <p>--</p>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default EstudianteDashboard;
