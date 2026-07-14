import ProductBasicInfo from "@/components/product/ProductBasicInfo";
import ProductForm from "@/components/product/ProductForm";
import ProductInventory from "@/components/product/ProductInventory";
import { Separator } from "@/components/ui/separator";

export default function Page() {
  return(
    <div className="space-y-8">
        <ProductForm>
          <ProductBasicInfo />
          <Separator />
          <ProductInventory />
          <Separator />
        </ProductForm>
    </div>
  )
}