import { Input } from "../ui/input";
import { Label } from "../ui/label";

export default function ProductImage() {

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
          <Input type="file" id="product-image" accept="image/*" />
        </div>
      </div>
    </section>
  )
}