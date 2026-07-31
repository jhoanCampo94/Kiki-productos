import { adminClient } from "@/lib/supabase/admin";

export async function uploadProductImage(file: File) {
  if (!file) {
    throw new Error("No se proporcionó ninguna imagen.");
  }

  const fileExt = file.name.split(".").pop();
  const fileName = `${crypto.randomUUID()}.${fileExt}`;

  const { error } = await adminClient.storage
    .from("products")
    .upload(fileName, file)

  if (error) {
    throw new Error(error.message);
  }
}