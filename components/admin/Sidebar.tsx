"use client";
import { LayoutDashboard, LogOut, Package, Tag } from "lucide-react";
import SidebarItem from "./SidebarItem";
import { Button } from "../ui/button";

export default function Sidebar() {

  const menuItems = [
    {
      label: "Dashboard",
      href: "/admin",
      icon: LayoutDashboard
    },
    {
      label: "Productos",
      href: "/admin/products",
      icon: Package
    },
    {
      label: "Categorías",
      href: "/admin/categories",
      icon: Tag
    },
  ];

  return (
    <nav className="flex h-full w-64 flex-col justify-between border-r bg-white px-6 py-8 transition-all duration-300 hover:translate-x-1">
      <header className="mb-10">
        <h1 className="text-2xl font-bold tracking-tight text-pink-600">
          🌸 Kiki Productos
        </h1>

        <p className="text-sm text-muted-foreground">
          Panel de administración
        </p>
      </header>

      <ul className="flex flex-1 flex-col gap-2">
        {menuItems.map((item) => (
          <SidebarItem
            key={item.href}
            label={item.label}
            href={item.href}
            Icon={item.icon}
          />
        ))}
      </ul>

      <Button
        variant="outline"
        className="w-full justify-start"
      >
        <LogOut className="mr-2 h-4 w-4" />
        Cerrar sesión
      </Button>
    </nav>
  )
}