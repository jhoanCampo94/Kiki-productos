import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Controller, UseFormReturn } from "react-hook-form";
import { ProductFormData } from "@/schemas/product.schema";

type ProductImageProps = {
  form: UseFormReturn<ProductFormData>;
}

export default function ProductImage({ form }: ProductImageProps) {

  const { 
    formState: { errors },
  } = form;

  return (
    <section className="space-y-8">
      <header className="space-y-2">
        <h2 className="text-2xl font-bold tracking-tight">Imagen del producto</h2>
        <p className="text-muted-foreground">Selecciona la imagen principal que verán los clientes en la tienda.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="md:col-span-2 space-y-2">
          <Label htmlFor="product-image">
            Sube la imagen
          </Label>
          <Controller
            name="image"
            control={form.control}
            render={({ field: { onChange, ref } }) => (
              <Input
                id="product-image"
                type="file"
                accept="image/*"
                ref={ref}
                onChange={(e) => {
                  onChange(e.target.files?.[0] ?? null)
                }}
              />
            )}
          />
          {errors.image && (
            <p className="text-sm text-destructive">
              {errors.image.message}
            </p>
          )}
        </div>
      </div>
    </section>
  )
}