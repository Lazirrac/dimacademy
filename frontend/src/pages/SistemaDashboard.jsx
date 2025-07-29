// frontend/src/pages/SistemaDashboard.jsx
import DashboardLayout from "../components/DashboardLayout";
import { useAuth } from "../hooks/useAuth";

const SistemaDashboard = () => {
  const { usuario } = useAuth();

  return (
    <DashboardLayout title="Panel del Sistema de Gestión">
      <p>Bienvenido/a al panel de {usuario?.rol?.toLowerCase()} de DIM Academy.</p>
    </DashboardLayout>
  );
};

export default SistemaDashboard;
