import { getProducts } from "@/services/products.service";
import Container from "../layout/Container";
import ProductCard from "../product/ProductCard";

export default async function ProductsSection() {
  const products = await getProducts();


  return (
    <section id="productos" className="pb-16">
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