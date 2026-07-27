import ProductForm from "@/components/admin/product-form/product/ProductForm";
import { getCategories } from "@/services/categories.service";

export default async function Page() {
  const categories = await getCategories();

  return (
    <div className="space-y-8">
      <ProductForm 
        categories={categories} 
      />
    </div>
  )
}