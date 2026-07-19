import ProductBasicInfo from "@/components/product/ProductBasicInfo";
import ProductCategory from "@/components/product/ProductCategory";
import ProductForm from "@/components/product/ProductForm";
import ProductImage from "@/components/product/ProductImage";
import ProductInventory from "@/components/product/ProductInventory";
import { Separator } from "@/components/ui/separator";
import { getCategories } from "@/services/categories.service";

export default async function Page() {
  const categories = await getCategories();

  return (
    <div className="space-y-8">
      <ProductForm>
        <ProductBasicInfo />
        <Separator />
        <ProductInventory />
        <Separator />
        <ProductCategory categories={categories} />
        <Separator />
        <ProductImage />
      </ProductForm>
    </div>
  )
}