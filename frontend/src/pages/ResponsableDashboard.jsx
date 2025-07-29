// frontend/src/pages/ResponsableDashboard.jsx
import DashboardLayout from "../components/DashboardLayout";
import { useAuth } from "../hooks/useAuth";

const ResponsableDashboard = () => {
  const { usuario } = useAuth();

  return (
    <DashboardLayout title="Panel del Responsable Parental">
      <p>Bienvenido/a al panel de {usuario?.rol?.toLowerCase()} de DIM Academy.</p>
    </DashboardLayout>
  );
};

export default ResponsableDashboard;
