import type { Category } from "@/types";

type Props = {
  category: Category;
};

export default function CategoryCard({ category }: Props) {
  return (
    <div className="rounded-2xl border bg-card p-6 shadow-sm transition hover:shadow-md">
      <h3 className="text-xl font-semibold">
        {category.name}
      </h3>

      <p className="mt-2 text-sm text-muted-foreground">
        {category.description}
      </p>
    </div>
  );
}