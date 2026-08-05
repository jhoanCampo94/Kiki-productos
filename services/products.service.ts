import { supabase } from "@/lib/supabase/client";
import { adminClient } from "@/lib/supabase/admin";
import { ProductFormData } from "@/schemas/product.schema";
import type { Product } from "@/types";

type CreateProductData = Omit<ProductFormData, "image"> & {
  imageUrl: string;
};

export async function getProducts(): Promise<Product[]> {
  const { data, error } = await supabase
    .from("products")
    .select("*");

  if (error) {
    throw new Error(error.message);
  }

  return data ?? [];
}


export async function saveProduct(data: CreateProductData) {
  const { error } = await adminClient
    .from("products")
    .insert({
      name: data.name,
      slug: data.slug,
      description: data.description,
      price: data.price,
      stock: data.stock,
      category_id: data.categoryId,
      image_url: data.imageUrl,
    });

  if (error) {
    throw new Error(error.message);
  }
}