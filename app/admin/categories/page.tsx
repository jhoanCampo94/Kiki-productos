import CategoriesTable from "./components/CategoriesTable";
import NewCategoryDialog from "./components/NewCategoryDialog";
import { getCategories } from "@/services/categories.service";

export default async function CategoriesPage() {
  const categories = await getCategories();

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">
            Categorías
          </h1>

          <p className="text-muted-foreground">
            Administra todas las categorías de la tienda.
          </p>
        </div>

        <NewCategoryDialog />
      </div>

      <CategoriesTable categories={categories} />
    </div>
  );
}
