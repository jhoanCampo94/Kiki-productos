import ProductActions from "@/components/admin/product-form/product/ProductActions";
import ProductBasicInfo from "@/components/admin/product-form/product/ProductBasicInfo";
import ProductCategory from "@/components/admin/product-form/product/ProductCategory";
import ProductForm from "@/components/admin/product-form/product/ProductForm";
import ProductImage from "@/components/admin/product-form/product/ProductImage";
import ProductInventory from "@/components/admin/product-form/product/ProductInventory";
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
        <Separator />
        <ProductActions />
      </ProductForm>
    </div>
  )
}