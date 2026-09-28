import { z } from "zod";

export const categorySchema = z.object({
  name: z
    .string()
    .min(3, "El nombre debe tener al menos 3 caracteres")
    .max(100, "El nombre no puede superar los 100 caracteres"),

  slug: z.string(),

  description: z
    .string()
    .max(500, "La descripción no puede superar los 500 caracteres")
    .optional(),
});

export type CategoryFormData = z.infer<typeof categorySchema>;
