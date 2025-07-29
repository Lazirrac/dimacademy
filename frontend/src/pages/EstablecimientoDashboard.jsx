// frontend/src/pages/EstablecimientoDashboard.jsx
import DashboardLayout from "../components/DashboardLayout";
import { useAuth } from "../hooks/useAuth";

const EstablecimientoDashboard = () => {
  const { usuario } = useAuth();

  return (
    <DashboardLayout title="Panel del Establecimiento">
      <p>Bienvenido/a al panel de {usuario?.rol?.toLowerCase()} de DIM Academy.</p>
    </DashboardLayout>
  );
};

export default EstablecimientoDashboard;
