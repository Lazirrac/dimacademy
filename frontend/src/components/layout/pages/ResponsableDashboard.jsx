// frontend/src/pages/ResponsableDashboard.jsx
import DashboardLayout from "../DashboardLayout";
import { useAuth } from "../auth/services/useAuth";

const ResponsableDashboard = () => {
  const { usuario } = useAuth();

  return (
    <DashboardLayout title="Panel del Responsable Parental">
      <div className="space-y-4 text-left">
        <p className="text-lg font-body">
          Bienvenido/a al panel de{" "}
          <span className="font-semibold capitalize text-primary dark:text-dark-primary">
            {usuario?.rol || "usuario"}
          </span>{" "}
          de DIM Academy.
        </p>

        {usuario?.email && (
          <p className="text-sm text-muted dark:text-dark-muted">
            Sesión iniciada como:{" "}
            <span className="font-medium text-text dark:text-dark-text">
              {usuario.email}
            </span>
          </p>
        )}

        {/* 👨‍👧 Panel informativo para responsables */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-surface dark:bg-dark-surface rounded-lg shadow">
            <h3 className="text-base font-heading font-semibold text-primary dark:text-dark-primary mb-1">
              Hijos/as asignados
            </h3>
            <p className="text-2xl font-bold text-text dark:text-dark-text">--</p>
          </div>

          <div className="p-4 bg-surface dark:bg-dark-surface rounded-lg shadow">
            <h3 className="text-base font-heading font-semibold text-primary dark:text-dark-primary mb-1">
              Notificaciones recientes
            </h3>
            <p className="text-2xl font-bold text-text dark:text-dark-text">--</p>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ResponsableDashboard;
