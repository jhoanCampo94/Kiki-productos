import { supabase } from "@/lib/supabase/client";
import { adminClient } from "@/lib/supabase/admin";
import { ProductFormData } from "@/schemas/product.schema";
import { ProductWithCategory } from "@/types/productWithCategory";
import { Product } from "@/types/product";

type CreateProductData = Omit<ProductFormData, "image"> & {
  imageUrl: string;
};

type UpdateProductData = Omit<ProductFormData, "image"> & {
  imageUrl?: string;
};

export async function getProducts(): Promise<ProductWithCategory[]> {
  const { data, error } = await supabase
    .from("products")
    .select(`
        *,
        categories (
          id,
          name
        )
    `);

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

export async function getProductById(
  id: string
): Promise<Product | null> {
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    throw new Error(error.message);
  }

  return data;
}

export async function updateProduct(id: string, data: UpdateProductData) {
  const { error } = await adminClient
    .from("products")
    .update({
      name: data.name,
      slug: data.slug,
      description: data.description,
      price: data.price,
      stock: data.stock,
      category_id: data.categoryId,
      ...(data.imageUrl ? { image_url: data.imageUrl } : {}),
    })
    .eq("id", id);

  if (error) {
    throw new Error(error.message);
  }
}

export async function deleteProduct(id: string) {
  const { error } = await adminClient
    .from("products")
    .delete()
    .eq("id", id);

  if (error) {
    throw new Error(error.message);
  }
}