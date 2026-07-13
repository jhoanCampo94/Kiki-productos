import Container from "@/components/layout/Container";
import CategoryCard from "@/components/category/CategoryCard";
import { getCategories } from "@/services/categories.service";

export default async function CategoriesSection() {
  const categories = await getCategories();

  return (
    <section className="pb-16">
      <Container>
        <h2 className="mb-8 text-3xl font-semibold">
          Categorías
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              category={category}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}