import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { formatPrice } from "@/lib/formatPrice";
import { ProductWithCategory } from "@/types/productWithCategory";
import ProductActions from "./ProductActions";

type ProductRowProps = {
  product: ProductWithCategory;
};

export default function ProductRow({
  product,
}: ProductRowProps) {
  return (
    <tr className="border-b last:border-0 hover:bg-muted/30">
      <td className="p-3">
        {product.image_url ? (
          <Image
            src={product.image_url}
            alt={product.name}
            width={64}
            height={64}
            className="h-16 w-16 rounded-md object-cover"
          />
        ) : (
          <div className="flex h-16 w-16 items-center justify-center rounded-md bg-muted text-xs text-muted-foreground">
            Sin imagen
          </div>
        )}
      </td>

      <td className="p-3 font-medium">
        {product.name}
      </td>

      <td className="p-3">
        {product.categories?.name ?? "Sin categoría"}
      </td>

      <td className="p-3">
        {formatPrice(product.price)}
      </td>

      <td className="p-3">
        <Badge
          variant={
            product.stock > 0
              ? "default"
              : "destructive"
          }
        >
          {product.stock}
        </Badge>
      </td>

      <td className="p-3">
        <ProductActions productId={product.id} />
      </td>
    </tr>
  );
}