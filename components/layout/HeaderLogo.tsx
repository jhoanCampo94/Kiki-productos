import Link from "next/link";

export default function HeaderLogo() {
  return (
    <Link href="/" className="flex items-center gap-2">
      <span className="text-2xl">🌸</span>

      <div>
        <h1 className="text-lg font-bold text-primary">
          Kiki Productos
        </h1>

        <p className="text-xs text-muted-foreground">
          Moda para toda la familia
        </p>
      </div>
    </Link>
  );
}