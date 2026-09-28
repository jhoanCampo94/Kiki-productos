import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { formatPrice } from "@/lib/formatPrice";
import type { ProductWithCategory } from "@/types/productWithCategory";

type Props = {
  product: ProductWithCategory;
};

export default function ProductCard({ product }: Props) {
  const outOfStock = product.stock === 0;

  return (
    <Link
      href={`/productos/${product.slug}`}
      className="block rounded-2xl border bg-card p-6 shadow-sm transition hover:shadow-md"
    >
      <div className="relative mb-4 aspect-square overflow-hidden rounded-xl bg-muted">
        {product.image_url ? (
          <Image
            src={product.image_url}
            alt={product.name}
            fill
            className="object-cover"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-sm text-muted-foreground">
            Sin imagen
          </div>
        )}
      </div>

      <h3 className="text-xl font-semibold">
        {product.name}
      </h3>

      <p className="mt-2 text-sm text-muted-foreground">
        {formatPrice(product.price)}
      </p>

      {outOfStock && (
        <Badge variant="destructive" className="mt-2">
          Agotado
        </Badge>
      )}
    </Link>
  );
}
