import { Category } from "@/types";
import CategoryActions from "./CategoryActions";

type CategoryRowProps = {
  category: Category;
};

export default function CategoryRow({
  category,
}: CategoryRowProps) {
  return (
    <tr className="border-b last:border-0 hover:bg-muted/30">
      <td className="p-3 font-medium">
        {category.name}
      </td>

      <td className="p-3 text-muted-foreground">
        {category.slug}
      </td>

      <td className="p-3 text-muted-foreground">
        {category.description ?? "Sin descripción"}
      </td>

      <td className="p-3">
        <CategoryActions category={category} />
      </td>
    </tr>
  );
}
