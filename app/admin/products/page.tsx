import ProductsTable from "./components/ProductsTable";
import { getProducts } from "@/services/products.service";

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">
          Productos
        </h1>

        <p className="text-muted-foreground">
          Administra todos los productos de la tienda.
        </p>
      </div>

      <ProductsTable products={products} />
    </div>
  );
}