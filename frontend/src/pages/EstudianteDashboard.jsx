// frontend/src/pages/EstudianteDashboard.jsx
import DashboardLayout from "../components/DashboardLayout";
import { useAuth } from "../hooks/useAuth";

const EstudianteDashboard = () => {
  const { usuario } = useAuth();

  return (
    <DashboardLayout title="Panel del Estudiante">
      <p>Bienvenido/a al panel de {usuario?.rol?.toLowerCase()} de DIM Academy.</p>
    </DashboardLayout>
  );
};

export default EstudianteDashboard;
