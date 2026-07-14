import ProductBasicInfo from "@/components/product/ProductBasicInfo";
import ProductForm from "@/components/product/ProductForm";

export default function Page() {
  return(
    <div className="space-y-8">
        <ProductForm>
          <ProductBasicInfo />
        </ProductForm>
    </div>
  )
}