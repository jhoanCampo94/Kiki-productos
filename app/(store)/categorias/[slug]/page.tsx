import { notFound } from "next/navigation";
import Container from "@/components/layout/Container";
import ProductCard from "@/components/product/ProductCard";
import { getCategoryBySlug } from "@/services/categories.service";
import { getProductsByCategoryId } from "@/services/products.service";

type CategoryPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;

  const category = await getCategoryBySlug(slug);

  if (!category) {
    notFound();
  }

  const products = await getProductsByCategoryId(category.id);

  return (
    <Container>
      <section className="py-16">
        <h1 className="text-3xl font-semibold">
          {category.name}
        </h1>

        {category.description && (
          <p className="mt-2 text-muted-foreground">
            {category.description}
          </p>
        )}

        <div className="mt-10">
          {products.length === 0 ? (
            <div className="rounded-xl border border-dashed p-10 text-center">
              No hay productos disponibles en esta categoría.
            </div>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {products.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                />
              ))}
            </div>
          )}
        </div>
      </section>
    </Container>
  );
}
