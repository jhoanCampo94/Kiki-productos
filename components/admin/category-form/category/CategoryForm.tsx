"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { categorySchema, CategoryFormData } from "@/schemas/category.schema";
import { createCategory, updateCategory } from "@/actions/categories";
import type { Category } from "@/types";
import { Button } from "@/components/ui/button";
import { DialogClose, DialogFooter } from "@/components/ui/dialog";
import CategoryBasicInfo from "./CategoryBasicInfo";

type CategoryFormProps = {
  category?: Category;
  onSuccess?: () => void;
}

export default function CategoryForm({ category, onSuccess }: CategoryFormProps) {

  const form = useForm<CategoryFormData>({
    resolver: zodResolver(categorySchema),
    defaultValues: {
      name: category?.name ?? "",
      slug: category?.slug ?? "",
      description: category?.description ?? "",
    },
  });

  const onSubmit = async (data: CategoryFormData) => {
    if (category) {
      await updateCategory(category.id, data);
    } else {
      await createCategory(data);
    }
    onSuccess?.();
  }

  return (
    <form
      className="space-y-8"
      onSubmit={form.handleSubmit(onSubmit, (errors) => {
        console.log(errors);
      })}
    >
      <CategoryBasicInfo
        form={form}
      />

      <DialogFooter>
        <DialogClose asChild>
          <Button type="button" variant="outline">
            🩷 Cancelar
          </Button>
        </DialogClose>

        <Button type="submit">
          🤍 Guardar categoría
        </Button>
      </DialogFooter>
    </form>
  )
}
