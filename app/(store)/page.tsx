import CategoriesSection from "@/components/home/CategoriesSection";
import Hero from "@/components/home/Hero";
import ProductsSection from "@/components/home/ProductsSection";



export default async function Store() {

  return (
    <main className="max-w-6xl mx-auto p-8">
      <Hero />
      <CategoriesSection />
      <ProductsSection />
    </main>
  );
}