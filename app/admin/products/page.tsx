import Link from "next/link";
import { Boxes, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import StatCard from "@/components/admin/StatCard";
import ProductsTable from "./components/ProductsTable";
import { getProducts } from "@/services/products.service";

export default async function ProductsPage() {
  const products = await getProducts();

  const totalStock = products.reduce(
    (sum, product) => sum + product.stock,
    0
  );

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">
            Productos
          </h1>

          <p className="text-muted-foreground">
            Administra todos los productos de la tienda.
          </p>
        </div>

        <Button asChild>
          <Link href="/admin/products/new">
            <Plus />
            Crear producto
          </Link>
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
        <StatCard
          Icon={Boxes}
          title="Unidades en stock (total)"
          value={totalStock}
        />
      </div>

      <ProductsTable products={products} />
    </div>
  );
}