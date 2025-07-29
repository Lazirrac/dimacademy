//frontend\src\pages\AdminDashboard.jsx
import DashboardLayout from "../components/DashboardLayout";
import { useAuth } from "../hooks/useAuth";

const AdminDashboard = () => {
  const { usuario } = useAuth();

  return (
    <DashboardLayout title="Panel del Administrador">
      <p>Bienvenido/a al panel de {usuario?.rol?.toLowerCase()} de DIM Academy.</p>
    </DashboardLayout>
  );
};

export default AdminDashboard;
