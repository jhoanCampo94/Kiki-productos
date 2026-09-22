"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { ProductFormData } from "@/schemas/product.schema";
import { uploadProductImage } from "@/services/storage.service";
import {
  saveProduct,
  updateProduct as updateProductInDb,
  deleteProduct as deleteProductInDb,
} from "@/services/products.service";

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

export async function updateProduct(id: string, data: ProductFormData) {
  const imageUrl = data.image
    ? await uploadProductImage(data.image)
    : undefined;

  await updateProductInDb(id, {
    name: data.name,
    slug: data.slug,
    description: data.description,
    price: data.price,
    stock: data.stock,
    categoryId: data.categoryId,
    imageUrl,
  });

  revalidatePath("/admin/products");
  redirect("/admin/products");
}

export async function deleteProduct(id: string) {
  await deleteProductInDb(id);
  revalidatePath("/admin/products");
}