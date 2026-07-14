import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";

export default function ProductBasicInfo() {

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
          <Input type="text" id="product-name" placeholder="Ej: Pijama fucsia" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="slug">
            Slug
          </Label>
          <Input type="text" id="slug" placeholder="pijama-fucsia" disabled />
        </div>
        <div className="space-y-2">
          <Label htmlFor="product-description">
            Descripción del producto
          </Label>
          <Textarea id="product-description" placeholder="pijama de tela suave y cómoda para dormir..." className="resize-none" rows={5} />
        </div>
      </div>
    </section>
  )
}