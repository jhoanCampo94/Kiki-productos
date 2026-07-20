// import { getProducts } from "@/services/products.service";
import Container from "../layout/Container";
import ProductCard from "../admin/product-form/product/ProductCard";
import { products } from "./products";

export default async function ProductsSection() {
  
  return (
    <section className="pb-16">
      <Container>
        <h2 className="mb-8 text-3xl font-semibold">
          Productos
        </h2>

        {products.length === 0
          ? <div className="rounded-xl border border-dashed p-10 text-center">
            No hay productos disponibles.
          </div>
          : <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}
          </div>
        }
      </Container>
    </section>
  )
}