import { supabase } from "@/lib/supabase/client";
import type { Product } from "@/types";

export async function getProducts(): Promise<Product[]> {
  const { data, error } = await supabase
    .from("products")
    .select("*");

  if (error) {
    throw new Error(error.message);
  }

  return data ?? [];
}