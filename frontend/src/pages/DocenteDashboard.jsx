// frontend/src/pages/DocenteDashboard.jsx
import DashboardLayout from "../components/DashboardLayout";
import { useAuth } from "../hooks/useAuth";

const DocenteDashboard = () => {
  const { usuario } = useAuth();

  return (
    <DashboardLayout title="Panel del Docente">
      <p>Bienvenido/a al panel de {usuario?.rol?.toLowerCase()} de DIM Academy.</p>
    </DashboardLayout>
  );
};

export default DocenteDashboard;
