// frontend/src/pages/SistemaDashboard.jsx
import DashboardLayout from "../components/layout/DashboardLayout";
import { useAuth } from "../hooks/useAuth";

const SistemaDashboard = () => {
  const { usuario } = useAuth();

  return (
    <DashboardLayout title="Panel del Sistema de Gestión">
      <div className="dashboard-content">
        <p className="welcome-text">
          Bienvenido/a al panel de{" "}
          <span className="role-text">
            {usuario?.rol || "usuario"}
          </span>{" "}
          de DIM Academy.
        </p>

        {usuario?.email && (
          <p className="session-info">
            Sesión iniciada como:{" "}
            <span className="user-email">{usuario.email}</span>
          </p>
        )}

        <div className="metrics-grid">
          <div className="metric-card">
            <h3 className="metric-title">Establecimientos registrados</h3>
            <p className="metric-value">--</p>
          </div>

          <div className="metric-card">
            <h3 className="metric-title">Usuarios activos</h3>
            <p className="metric-value">--</p>
          </div>

          <div className="metric-card">
            <h3 className="metric-title">Último acceso del sistema</h3>
            <p className="metric-value">--</p>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default SistemaDashboard;
