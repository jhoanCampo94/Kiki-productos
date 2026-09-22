import { notFound } from "next/navigation";
import { getCategories } from "@/services/categories.service";
import { getProductById } from "@/services/products.service";
import ProductForm from "@/components/admin/product-form/product/ProductForm";

type EditProductPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function EditProductPage({
  params,
}: EditProductPageProps) {
  const { id } = await params;

  const [product, categories] = await Promise.all([
    getProductById(id),
    getCategories(),
  ]);

  if (!product) {
    notFound();
  }

  return (
    <div>
      <h1 className="text-3xl font-bold tracking-tight">
        ✏️ Editar producto
      </h1>

      <p className="text-muted-foreground">
        Modifica la información del producto.
      </p>

      <div className="mt-8">
        <ProductForm
          categories={categories}
          product={product}
        />
      </div>
    </div>
  );
}