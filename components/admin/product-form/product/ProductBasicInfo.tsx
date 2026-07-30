import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { UseFormReturn } from "react-hook-form";
import { ProductFormData } from "@/schemas/product.schema";
import { useEffect } from "react";
import { generateSlug } from "@/lib/slug";
import { useWatch } from "react-hook-form";

type ProductBasicInfoProps = {
  form: UseFormReturn<ProductFormData>;
}

export default function ProductBasicInfo({ form }: ProductBasicInfoProps) {

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
        <p className="text-muted-foreground">Completa los datos principales del producto.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="product-name">
            Nombre del producto
          </Label>
          <Input
            type="text"
            id="product-name"
            placeholder="Ej: Pijama fucsia"
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
            placeholder="pijama-fucsia"
            {...register("slug")}
            disabled
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="product-description">
            Descripción del producto
          </Label>
          <Textarea
            id="product-description"
            placeholder="pijama de tela suave y cómoda para dormir..."
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