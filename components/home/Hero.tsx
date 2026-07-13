import { Button } from "@/components/ui/button";
import Container from "@/components/layout/Container";

export default function Hero() {
  return (
    <section className="py-16">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Moda para toda la familia
          </h2>

          <p className="mt-6 text-muted-foreground">
            Descubre prendas cómodas, modernas y pensadas para cada ocasión.
          </p>

          <Button className="mt-8">
            Explorar categorías
          </Button>
        </div>
      </Container>
    </section>
  );
}