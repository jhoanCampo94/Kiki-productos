import { z } from "zod";

export const productSchema = z.object({
  name: z
    .string()
    .min(3, "El nombre debe tener al menos 3 caracteres")
    .max(100, "El nombre no puede superar los 100 caracteres"),

  slug: z.string(),

  description: z
    .string()
    .min(10, "La descripción debe tener al menos 10 caracteres")
    .max(500, "La descripción no puede superar los 500 caracteres"),

  price: z
    .number()
    .positive("El precio debe ser mayor que cero"),

  stock: z
    .number()
    .min(0, "El stock no puede ser negativo"),

  categoryId: z
    .string()
    .min(1, "Debes seleccionar una categoría"),

  image: z.instanceof(File, {
    message: "Debes seleccionar una imagen.",
  })
});

export type ProductFormData = z.infer<typeof productSchema>;