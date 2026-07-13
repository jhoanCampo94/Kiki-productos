// import type { Product } from "@/types";
import { formatPrice } from "@/lib/formatPrice";
import { Button } from "../ui/button";

type Props = {
  product: {
    id: string;
    name: string;
    price: number;
    stock: number
  }
}

export default function ProductCard({ product }: Props) {
  const outOfStock = product.stock === 0;

  return (
    <div className="rounded-2xl border bg-card p-6 shadow-sm transition hover:shadow-md">
      <h3 className="text-xl font-semibold">
        {product.name}
      </h3>

      <p className="mt-2 text-sm text-muted-foreground">
        {formatPrice(product.price)}
      </p>

      {outOfStock && (
        <span>Agotado</span>
      )}

      < Button disabled={outOfStock}>
        Añadir al carrito
      </Button>
    </div >
  );
}