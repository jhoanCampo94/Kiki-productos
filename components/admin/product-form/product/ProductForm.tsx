"use client";
import { Card } from "@/components/ui/card";
import { Category } from "@/types";
import ProductBasicInfo from "./ProductBasicInfo";
import { Separator } from "@/components/ui/separator";
import ProductInventory from "./ProductInventory";
import ProductCategory from "./ProductCategory";
import ProductImage from "./ProductImage";
import ProductActions from "./ProductActions";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { productSchema, ProductFormData } from "@/schemas/product.schema";
import { createProduct, updateProduct } from "@/actions/products";
import type { Product } from "@/types";

function isRedirectError(error: unknown): boolean {
  return (
    typeof error === "object" &&
    error !== null &&
    "digest" in error &&
    typeof (error as { digest?: unknown }).digest === "string" &&
    (error as { digest: string }).digest.startsWith("NEXT_REDIRECT")
  );
}

type ProductFormProps = {
  categories: Category[];
  product?: Product;
}

export default function ProductForm({ categories, product }: ProductFormProps) {

  const form = useForm<ProductFormData>({
    resolver: zodResolver(productSchema),
    defaultValues: {
      name: product?.name ?? "",
      slug: product?.slug ?? "",
      description: product?.description ?? "",
      price: product?.price ?? 0,
      stock: product?.stock ?? 0,
      categoryId: product?.category_id ?? "",
      image: undefined,
    },
  });

  const onSubmit = async (data: ProductFormData) => {
    form.clearErrors("root");

    try {
      if (product) {
        await updateProduct(product.id, data);
      } else {
        await createProduct(data);
      }
    } catch (error) {
      if (isRedirectError(error)) {
        throw error;
      }

      form.setError("root", {
        message: error instanceof Error
          ? error.message
          : "Ocurrió un error inesperado. Inténtalo de nuevo.",
      });
    }
  }

  return (
    <div>
      <h1 className="text-3xl font-bold tracking-tight">
        {product ? "✏️ Editar producto" : "📦 Crear producto"}
      </h1>
      <p className="text-muted-foreground">
        {product
          ? "Actualiza la información del producto."
          : "Registra tu producto para que aparezca en la tienda!"}
      </p>
      <Card className="mx-auto mt-8 max-w-4xl p-8 shadow-lg">
        <form
          className="space-y-10"
          onSubmit={form.handleSubmit(onSubmit, (errors) => {
            console.log(errors);
          })}
        >
          <ProductBasicInfo
            form={form}
          />
          <Separator />
          <ProductInventory
            form={form}
          />
          <Separator />
          <ProductCategory
            categories={categories}
            form={form}
          />
          <Separator />
          <ProductImage
            form={form}
          />
          <Separator />
          {form.formState.errors.root && (
            <p className="text-center text-sm text-destructive">
              {form.formState.errors.root.message}
            </p>
          )}
          <ProductActions />
        </form>
      </Card>
    </div>
  )
}