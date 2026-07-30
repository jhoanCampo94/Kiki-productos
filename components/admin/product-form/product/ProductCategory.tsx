import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Category } from "@/types"
import { Label } from "@/components/ui/label";
import { Controller, UseFormReturn } from "react-hook-form";
import { ProductFormData } from "@/schemas/product.schema";

type ProductCategoryProps = {
  categories: Category[];
  form: UseFormReturn<ProductFormData>;
}

export default function ProductCategory({ categories, form }: ProductCategoryProps) {

  return (
    <section className="space-y-8">
      <header className="space-y-2">
        <h2 className="text-2xl font-bold tracking-tight">Categorías</h2>
        <p className="text-muted-foreground">Selecciona la categoría que deseas.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label>
            Categoría
          </Label>
          <Controller
            name="categoryId"
            control={form.control}
            render={({ field }) => (
              <Select
                value={field.value}
                onValueChange={field.onChange}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Selecciona una categoría" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    {
                      categories.length === 0
                        ? (
                          <SelectItem disabled value="empty">
                            No hay categorías
                          </SelectItem>
                        )
                        : categories.map((cat) => (
                          <SelectItem key={cat.id} value={cat.id}>
                            {cat.name}
                          </SelectItem>
                        ))
                    }
                  </SelectGroup>
                </SelectContent>
              </Select>
            )}
          />
        </div>
      </div>
    </section>
  )
}