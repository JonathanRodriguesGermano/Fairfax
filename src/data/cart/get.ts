import "server-only"

import { eq } from "drizzle-orm";

import { db } from "@/db";
import { cartTable } from "@/db/schema";

export const getFullCartByUserId = async (userId: string) => {
  const cart = await db.query.cartTable.findFirst({
    where: eq(cartTable.userId, userId),
    with: {
      shippingAddress: true,
      items: {
        with: {
          productVariant: {
            with: {
              product: true,
            },
          },
        },
      },
    },
  });
  return cart;
};

export type FullCart = Awaited<ReturnType<typeof getFullCartByUserId>>;