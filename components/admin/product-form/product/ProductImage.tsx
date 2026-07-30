import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Controller, UseFormReturn } from "react-hook-form";
import { ProductFormData } from "@/schemas/product.schema";
import { useEffect, useState } from "react";
import Image from "next/image";
import { ImageIcon } from "lucide-react";

type ProductImageProps = {
  form: UseFormReturn<ProductFormData>;
}

export default function ProductImage({ form }: ProductImageProps) {

  const [preview, setPreview] = useState<string | null>(null);

  const {
    formState: { errors },
  } = form;

  const image = form.watch("image");

  useEffect(() => {
    if (!image) {
      setPreview(null);
      return;
    }

    const objectUrl = URL.createObjectURL(image);
    setPreview(objectUrl);

    return () => {
      URL.revokeObjectURL(objectUrl);
    }
  }, [image])


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
          <div className="relative mt-6 flex h-72 w-64 items-center justify-center overflow-hidden rounded-lg border bg-muted">
            {preview ? (
              <Image
                src={preview}
                alt="Vista previa del producto"
                fill
                unoptimized
                className="object-cover transition-opacity duration-300"
              />
            ) : (
              <div className="text-center text-muted-foreground">
                <ImageIcon className="mx-auto mb-3 h-12 w-12" />
                <p className="text-lg font-medium">
                  Sin imagen seleccionada
                </p>

                <p className="text-sm">
                  La vista previa aparecerá aquí.
                </p>
              </div>
            )}
          </div>
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