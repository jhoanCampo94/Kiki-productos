import { Product } from "./product";

export type ProductWithCategory = Product & {
  categories: {
    id: string;
    name: string;
  } | null;
};