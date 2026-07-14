import DashboardStats from "@/components/admin/DashboardStats";


export default async function Home() {

  return (
    <main className="space-y-8">
      <h1>Bienvenido nuevamente 👋</h1>
      <p>Aquí podrás administrar los productos y categorías de Kiki Productos.</p>
      <DashboardStats />
    </main>
  );
}