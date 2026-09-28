import { Package, ShoppingCart, Tag } from "lucide-react";
import { getProducts } from "@/services/products.service";
import { getCategories } from "@/services/categories.service";
import { DashboardStat } from "@/types/dashboardStat";
import StatCard from "./StatCard";

export default async function DashboardStats() {
  const [products, categories] = await Promise.all([
    getProducts(),
    getCategories(),
  ]);

  const stats: DashboardStat[] = [
    {
      title: "Productos",
      value: products.length,
      icon: Package,
    },
    {
      title: "Categorías",
      value: categories.length,
      icon: Tag,
    },
    {
      title: "Pedidos",
      value: 0,
      icon: ShoppingCart,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      {
        stats.map((stat) => (
          <StatCard
            key={stat.title}
            Icon={stat.icon}
            title={stat.title}
            value={stat.value}
          />
        ))
      }
    </div>
  )
}