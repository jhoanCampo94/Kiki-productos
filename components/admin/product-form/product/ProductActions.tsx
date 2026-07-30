import { Button } from "@/components/ui/button";

export default function ProductActions() {
  return (
    <section className="space-y-8">
      <div className="flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
        <Button variant="outline">
          🩷 Cancelar
        </Button>

        <Button type="submit">
          🤍 Guardar producto
        </Button>
      </div>
    </section>
  )
}