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

type ProductFormProps = {
  categories: Category[];
}

export default function ProductForm({ categories }: ProductFormProps) {

  const form = useForm<ProductFormData>({
    resolver: zodResolver(productSchema),
    defaultValues: {
      name: "",
      slug: "",
      description: "",
      price: 0,
      stock: 0,
      categoryId: "",
      image: null,
    },
  }
  )

  const onSubmit = (data: ProductFormData) => {
    // TODO: Implementar la creación del producto.
  }

  return (
    <div>
      <h1 className="text-3xl font-bold tracking-tight">📦 Crear producto</h1>
      <p className="text-muted-foreground">Registra tu producto para que aparezca en la tienda!</p>
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
          <ProductActions />
        </form>
      </Card>
    </div>
  )
}