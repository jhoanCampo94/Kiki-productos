"use client";
import { Card } from "@/components/ui/card";
import { Category } from "@/types";
import { useState } from "react";
import ProductBasicInfo from "./ProductBasicInfo";
import { Separator } from "@/components/ui/separator";
import ProductInventory from "./ProductInventory";
import ProductCategory from "./ProductCategory";
import ProductImage from "./ProductImage";
import ProductActions from "./ProductActions";

type ProductFormProps = {
  categories: Category[];
}

type ProductFormData = {
  name: string;
  slug: string;
  description: string;
  price: number;
  stock: number;
  categoryId: string;
  image: File | null;
};

export default function ProductForm({ categories }: ProductFormProps) {

  const [formData, setFormData] = useState<ProductFormData>({
    name: "",
    slug: "",
    description: "",
    price: 0,
    stock: 0,
    categoryId: "",
    image: null,
  })

  function handleChange(
    field: keyof ProductFormData,
    value: string | number | File | null
  ) {
    setFormData((prev) => ({
      ...prev,

      [field]: value
    }))
  }

  return (
    <div>
      <h1 className="text-3xl font-bold tracking-tight">📦 Crear producto</h1>
      <p className="text-muted-foreground">Registra tu producto para que aparezca en la tienda!</p>
      <Card className="mx-auto mt-8 max-w-4xl p-8 shadow-lg">
        <div className="space-y-10">
          <ProductBasicInfo
            data={{
              name: formData.name,
              slug: formData.slug,
              description: formData.description
            }}
            onChange={handleChange}
          />
          <Separator />
          <ProductInventory />
          <Separator />
          <ProductCategory
            categories={categories}
          />
          <Separator />
          <ProductImage />
          <Separator />
          <ProductActions />
        </div>
      </Card>
    </div>
  )
}