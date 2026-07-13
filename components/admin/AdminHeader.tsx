import MobileSidebar from "./MobileSidebar";

export default function AdminHeader() {
  return (
    <header className="flex items-center justify-between border-b px-4 py-3 lg:hidden">
      <MobileSidebar />

      <h1 className="font-semibold text-pink-600">
        🌸 Kiki Productos
      </h1>

      <div className="w-8" />
    </header>
  );
}