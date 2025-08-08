// frontend/src/pages/DocenteDashboard.jsx

import { useAuth } from "../auth/services/useAuth";

const DocenteDashboard = () => {
  const { usuario } = useAuth();

  return (
    <DashboardLayout title="Panel del Docente">
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

        {/* 📘 Espacio para futuras métricas del docente */}
        <div>
          <div>
            <h3>Total de estudiantes asignados</h3>
            <p>--</p>
          </div>

          <div>
            <h3>Actividades registradas</h3>
            <p>--</p>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default DocenteDashboard;
