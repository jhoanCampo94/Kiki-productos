import { DashboardStat } from "@/types/dashboardStat";
import { Package, ShoppingCart, Tag } from "lucide-react";

export const stats: DashboardStat[] = [
  {
    title: "Productos",
    value: 0,
    icon: Package,
  },
  {
    title: "Categorías",
    value: 1,
    icon: Tag,
  },
  {
    title: "Pedidos",
    value: 0,
    icon: ShoppingCart,
  },
];