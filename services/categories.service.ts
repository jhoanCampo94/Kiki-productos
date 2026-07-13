import { supabase } from "@/lib/supabase/client";
import type { Category } from "@/types";

export async function getCategories(): Promise<Category[]> {
  const { data, error } = await supabase
    .from("categories")
    .select("*");

  if (error) {
    throw new Error(error.message);
  }

  return data ?? [];
}