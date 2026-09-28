import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/layout/Container";
import { Badge } from "@/components/ui/badge";
import { formatPrice } from "@/lib/formatPrice";
import { getProductBySlug } from "@/services/products.service";

type ProductPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;

  const product = await getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const outOfStock = product.stock === 0;

  return (
    <Container>
      <section className="py-16">
        <div className="grid gap-10 md:grid-cols-2">
          <div className="relative aspect-square overflow-hidden rounded-2xl bg-muted">
            {product.image_url ? (
              <Image
                src={product.image_url}
                alt={product.name}
                fill
                className="object-cover"
              />
            ) : (
              <div className="flex h-full items-center justify-center text-muted-foreground">
                Sin imagen
              </div>
            )}
          </div>

          <div className="space-y-6">
            <div>
              {product.categories && (
                <Link
                  href={`/categorias/${product.categories.slug}`}
                  className="text-sm text-muted-foreground hover:underline"
                >
                  {product.categories.name}
                </Link>
              )}

              <h1 className="text-3xl font-bold tracking-tight">
                {product.name}
              </h1>
            </div>

            <p className="text-2xl font-semibold">
              {formatPrice(product.price)}
            </p>

            {outOfStock ? (
              <Badge variant="destructive">Agotado</Badge>
            ) : (
              <Badge>Disponible</Badge>
            )}

            {product.description && (
              <p className="text-muted-foreground">
                {product.description}
              </p>
            )}
          </div>
        </div>
      </section>
    </Container>
  );
}
