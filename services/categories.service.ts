import { createClient } from "@/lib/supabase/server";
import { adminClient } from "@/lib/supabase/admin";
import type { Category } from "@/types";
import { CategoryFormData } from "@/schemas/category.schema";

export async function getCategories(): Promise<Category[]> {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("categories")
    .select("*");

  if (error) {
    console.log(error);
    return [];
  }

  return data ?? [];
}

export async function saveCategory(data: CategoryFormData) {
  const { error } = await adminClient
    .from("categories")
    .insert({
      name: data.name,
      slug: data.slug,
      description: data.description ?? null,
    });

  if (error) {
    throw new Error(error.message);
  }
}

export async function updateCategory(id: string, data: CategoryFormData) {
  const { error } = await adminClient
    .from("categories")
    .update({
      name: data.name,
      slug: data.slug,
      description: data.description ?? null,
    })
    .eq("id", id);

  if (error) {
    throw new Error(error.message);
  }
}

export async function deleteCategory(id: string) {
  const { error } = await adminClient
    .from("categories")
    .delete()
    .eq("id", id);

  if (error) {
    throw new Error(error.message);
  }
}