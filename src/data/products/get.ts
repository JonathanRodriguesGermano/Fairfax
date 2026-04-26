import "server-only";

import { desc, eq } from "drizzle-orm";

import { db } from "@/db";
import { productTable } from "@/db/schema";

// DTO (Data Transfer Object)
// interface ProductDto {
//   id: string;
//   name: string;
//   description: string;
//   price: number;
//   image: string;
//   category: string;
//   createdAt: Date;
// }

export const getProductsWithVariants = async () => {
  const products = await db.query.productTable.findMany({
    with: {
      variants: true,
    },
  });
  return products;
};

export const getNewlyCreatedProducts = async () => {
  const products = await db.query.productTable.findMany({
    orderBy: [desc(productTable.createdAt)],
    with: {
      variants: true,
    },
  });
  return products; 
};

export const getProductsByCategoryId = async (categoryId: string) => {
  const products = await db.query.productTable.findMany({
    where: eq(productTable.categoryId, categoryId),
    with: {
      variants: true,
    },
  });
  return products;
};

