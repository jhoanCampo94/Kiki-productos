import Link from "next/link";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import ProductsTable from "./components/ProductsTable";
import { getProducts } from "@/services/products.service";

export default async function ProductsPage() {
  const products = await getProducts();

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

      <ProductsTable products={products} />
    </div>
  );
}