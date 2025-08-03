// frontend/src/pages/AdminDashboard.jsx
import DashboardLayout from "../components/layout/DashboardLayout";
import { useAuth } from "../hooks/useAuth";

const AdminDashboard = () => {
  const { usuario } = useAuth();

  return (
    <DashboardLayout title="Panel del Administrador">
      <div>
        <p>
          Bienvenido/a al panel de{" "}
          <span>
            {usuario?.rol || "usuario"}
          </span>{" "}
          de DIM Academy.
        </p>

        {usuario?.email && (
          <p>
            Sesión iniciada como:{" "}
            <span>
              {usuario.email}
            </span>
          </p>
        )}

        {/* 💡 Aquí podés insertar métricas, cards, navegación o gráficos */}
        <div>
          <div>
            <h3>Total de Establecimientos</h3>
            <p>--</p>
          </div>
          <div>
            <h3>Usuarios creados</h3>
            <p>--</p>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default AdminDashboard;
