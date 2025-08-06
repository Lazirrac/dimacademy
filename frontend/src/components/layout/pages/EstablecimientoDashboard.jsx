// frontend/src/pages/EstablecimientoDashboard.jsx
import DashboardLayout from "./DashboardLayout";
import { useAuth } from "../auth/services/useAuth";

const EstablecimientoDashboard = () => {
  const { usuario } = useAuth();

  return (
    <DashboardLayout title="Panel del Establecimiento">
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

        {/* 📊 Panel de métricas del establecimiento */}
        <div>
          <div>
            <h3>Total de docentes</h3>
            <p>--</p>
          </div>

          <div>
            <h3>Total de estudiantes</h3>
            <p>--</p>
          </div>

          <div>
            <h3>Responsables registrados</h3>
            <p>--</p>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default EstablecimientoDashboard;
