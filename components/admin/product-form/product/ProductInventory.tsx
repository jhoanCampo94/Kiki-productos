import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { UseFormReturn } from "react-hook-form";
import { ProductFormData } from "@/schemas/product.schema";

type ProductInventoryProps = {
  form: UseFormReturn<ProductFormData>;
}

export default function ProductInventory({ form }: ProductInventoryProps) {

  const { register } = form;

  return (
    <section className="space-y-8">
      <header className="space-y-2">
        <h2 className="text-2xl font-bold tracking-tight">Inventario</h2>
        <p className="text-muted-foreground">Configura el precio y la cantidad disponible.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="product-price">
            Precio
          </Label>
          <Input
            type="number"
            id="product-price"
            placeholder="Ej: 45000"
            {...register("price", {
              valueAsNumber: true,
            })}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="stock">
            Cantidad
          </Label>
          <Input
            type="number"
            min={0}
            id="stock"
            placeholder="Ej: 10"
            {...register("stock", {
              valueAsNumber: true,
            })}
          />
        </div>
      </div>
    </section>
  )
}