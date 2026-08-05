"use server";

import { ProductFormData } from "@/schemas/product.schema";
import { uploadProductImage } from "@/services/storage.service";
import { saveProduct } from "@/services/products.service";

export async function createProduct(data: ProductFormData) {
  if (!data.image) {
    throw new Error("La imagen es obligatoria.");
  }

  const imageUrl = await uploadProductImage(data.image);

  await saveProduct({
    name: data.name,
    slug: data.slug,
    description: data.description,
    price: data.price,
    stock: data.stock,
    categoryId: data.categoryId,
    imageUrl
  });
}