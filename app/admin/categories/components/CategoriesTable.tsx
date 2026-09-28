import { Category } from "@/types";
import CategoryRow from "./CategoryRow";

type CategoriesTableProps = {
  categories: Category[];
};

export default function CategoriesTable({
  categories,
}: CategoriesTableProps) {
  return (
    <table className="w-full border-collapse">
      <thead>
        <tr className="border-b">
          <th className="p-3 text-left">Nombre</th>
          <th className="p-3 text-left">Slug</th>
          <th className="p-3 text-left">Descripción</th>
          <th className="p-3 text-center">Acciones</th>
        </tr>
      </thead>

      <tbody>
        {
          categories.length === 0
            ? (
              <tr>
                <td
                  colSpan={4}
                  className="p-8 text-center text-muted-foreground"
                >
                  No hay categorías registradas.
                </td>
              </tr>
            )
            : (
              categories.map((category) => (
                <CategoryRow
                  key={category.id}
                  category={category}
                />
              )))}
      </tbody>
    </table>
  );
}
