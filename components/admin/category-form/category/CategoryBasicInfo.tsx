import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { UseFormReturn, useWatch } from "react-hook-form";
import { CategoryFormData } from "@/schemas/category.schema";
import { useEffect } from "react";
import { generateSlug } from "@/lib/slug";

type CategoryBasicInfoProps = {
  form: UseFormReturn<CategoryFormData>;
}

export default function CategoryBasicInfo({ form }: CategoryBasicInfoProps) {

  const {
    register,
    formState: { errors }
  } = form;

  const name = useWatch({
    control: form.control,
    name: "name",
  })

  useEffect(() => {
    form.setValue("slug", generateSlug(name));
  }, [form, name])

  return (
    <section className="space-y-8">
      <header className="space-y-2">
        <h2 className="text-2xl font-bold tracking-tight">Información básica</h2>
        <p className="text-muted-foreground">Completa los datos principales de la categoría.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="category-name">
            Nombre de la categoría
          </Label>
          <Input
            type="text"
            id="category-name"
            placeholder="Ej: Pijamas"
            {...register("name")}
          />
          {errors.name && (
            <p className="text-sm text-destructive">
              {errors.name.message}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="slug">
            Slug
          </Label>
          <Input
            type="text"
            id="slug"
            placeholder="pijamas"
            {...register("slug")}
            disabled
          />
        </div>

        <div className="space-y-2 md:col-span-2">
          <Label htmlFor="category-description">
            Descripción
          </Label>
          <Textarea
            id="category-description"
            placeholder="Ropa cómoda y suave para dormir..."
            className="resize-none"
            rows={5}
            {...register("description")}
          />
          {errors.description && (
            <p className="text-sm text-destructive">
              {errors.description.message}
            </p>
          )}
        </div>
      </div>
    </section>
  )
}
