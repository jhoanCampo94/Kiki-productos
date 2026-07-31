"use server";
import { ProductFormData } from "@/schemas/product.schema";
import { uploadProductImage } from "@/services/storage.service";

export async function createProduct(data: ProductFormData) {
  if (!data.image) {
    throw new Error("La imagen es obligatoria.");
  }
  const imageUrl = await uploadProductImage(data.image);
  return imageUrl;
}