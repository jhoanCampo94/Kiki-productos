import AdminHeader from "@/components/admin/AdminHeader";
import Sidebar from "@/components/admin/Sidebar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-dvh">
      <aside className="hidden lg:block">
        <Sidebar />
      </aside>

      <div className="flex flex-1 flex-col">
        <AdminHeader />

        <main className="flex-1 space-y-8 p-8">
          {children}
        </main>
      </div>
    </div>
  );
}