import { Card } from "@/components/ui/card"
import { ReactNode } from "react"

type Props = {
  children: ReactNode;
}

export default function ProductForm({ children }: Props) {
  return (
    <div>
      <h1 className="text-3xl font-bold tracking-tight">Crear producto</h1>
      <p className="text-muted-foreground">Registra tu producto para que aparezca en la tienda!</p>
      <Card className="mx-auto mt-8 max-w-4xl p-8">
        <div className="space-y-10">
          {children}
        </div>
      </Card>
    </div>
  )
}