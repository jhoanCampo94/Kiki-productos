import { ProductWithCategory } from "@/types/productWithCategory";
import ProductRow from "./ProductRow";


type ProductsTableProps = {
  products: ProductWithCategory[];
};

export default function ProductsTable({
  products,
}: ProductsTableProps) {
  return (
    <table className="w-full border-collapse">
      <thead>
        <tr className="border-b">
          <th className="p-3 text-left">Imagen</th>
          <th className="p-3 text-left">Nombre</th>
          <th className="p-3 text-left">Categoría</th>
          <th className="p-3 text-left">Precio</th>
          <th className="p-3 text-left">Stock</th>
          <th className="p-3 text-center">Acciones</th>
        </tr>
      </thead>

      <tbody>
        {
          products.length === 0
            ? (
              <tr>
                <td
                  colSpan={6}
                  className="p-8 text-center text-muted-foreground"
                >
                  No hay productos registrados.
                </td>
              </tr>
            )
            : (
              products.map((product) => (
                <ProductRow
                  key={product.id}
                  product={product}
                />
              )))}
      </tbody>
    </table>
  );
}