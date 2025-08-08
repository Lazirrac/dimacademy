//frontend\src\components\layout\dashboards\admin\AdminDashboard.jsx

import AdminLayout from "./AdminLayout";


export default function AdminDashboard() {
  // Aquí puedes obtener usuario, datos, etc.
  return (
    <AdminLayout>
      {/* Aquí van tus KPIs, cards, widgets, etc */}
      <section>
        <h1 className="text-2xl font-bold mb-6">Panel Administrador</h1>
        {/* Ejemplo de widgets */}
        {/* <KpiCards /> */}
        {/* <UltimasAcciones /> */}
      </section>
    </AdminLayout>
  );
}
