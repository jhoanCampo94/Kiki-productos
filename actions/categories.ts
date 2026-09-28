"use server";

import { revalidatePath } from "next/cache";
import { CategoryFormData } from "@/schemas/category.schema";
import {
  saveCategory,
  updateCategory as updateCategoryInDb,
  deleteCategory as deleteCategoryInDb,
} from "@/services/categories.service";

export async function createCategory(data: CategoryFormData) {
  await saveCategory(data);
  revalidatePath("/admin/categories");
}

export async function updateCategory(id: string, data: CategoryFormData) {
  await updateCategoryInDb(id, data);
  revalidatePath("/admin/categories");
}

export async function deleteCategory(id: string) {
  await deleteCategoryInDb(id);
  revalidatePath("/admin/categories");
}
