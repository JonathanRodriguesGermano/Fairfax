import "server-only";

export interface PriceableItem {
  priceInCents: number;
  quantity: number;
}

export const getCalculateSubtotal = (items: PriceableItem[]): number => {
  return items.reduce(
    (acc, item) => acc + item.priceInCents * item.quantity,
    0,
  );
};

export const getCalculateTax = (subtotalInCents: number): number => {
  const TAX_RATE = 0.1;
  return Math.round(subtotalInCents * TAX_RATE);
};

export const getCalculateTotals = (items: PriceableItem[]) => {
  const subtotal = getCalculateSubtotal(items);
  const taxa = getCalculateTax(subtotal);
  const total = subtotal + taxa;

  return { subtotal, taxa, total };
};