"use client";

import { ShoppingBasketIcon, ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { formatCentsToBRL } from "@/helpers/money";
import { useCart } from "@/hooks/queries/use-cart";

import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "../ui/empty";
import { ScrollArea } from "../ui/scroll-area";
import { Separator } from "../ui/separator";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Spinner } from "../ui/spinner";
import CartItem from "./cart-item";

export const Cart = () => {
  const { data: cart, isPending: cartIsLoading } = useCart();
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon">
          <ShoppingBasketIcon />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="flex items-center gap-3">
            <ShoppingCart />
            Carrinho
          </SheetTitle>
        </SheetHeader>
        <div className="flex h-full flex-col px-5 pb-5">
          <div className="flex h-full max-h-full flex-col overflow-hidden">
            <ScrollArea className="h-full">
              <div className="flex h-full flex-col gap-8">
                {cartIsLoading && (
                  <Empty className="w-full">
                    <EmptyHeader>
                      <EmptyMedia variant="icon">
                        <Spinner />
                      </EmptyMedia>
                      <EmptyTitle>Carregando...</EmptyTitle>
                      <EmptyDescription>
                        Aguarde enquanto verificamos se existe items no seu
                        carrinho. Não atualize a página.
                      </EmptyDescription>
                    </EmptyHeader>
                  </Empty>
                )}

                {!cartIsLoading && !cart?.items?.length && (
                  <Empty className="flex h-full items-center justify-center px-5">
                    <EmptyHeader>
                      <EmptyMedia>
                        <Image
                          src="/compra.svg"
                          alt="Success"
                          width={300}
                          height={300}
                          className="mx-auto"
                        />
                      </EmptyMedia>
                      <EmptyTitle>Carrinho vazio</EmptyTitle>
                      <EmptyDescription>
                        Que tal aproveitar para descobrir produtos incríveis?
                        Temos novidades esperando por você!
                      </EmptyDescription>
                    </EmptyHeader>
                    <EmptyContent>
                      <Button variant="outline" size="sm" asChild>
                        <Link
                          href="/product-fashion"
                          className="flex items-center gap-4 transition-colors hover:text-zinc-600"
                        >
                          Explorar produtos
                        </Link>
                      </Button>
                    </EmptyContent>
                  </Empty>
                )}

                {cart?.items?.map((item) => (
                  <CartItem
                    key={item.id}
                    id={item.id}
                    productVariantId={item.productVariant.id}
                    productName={item.productVariant.product.name}
                    productVariantName={item.productVariant.name}
                    productVariantImageUrl={item.productVariant.imageUrl}
                    productVariantPriceInCents={
                      item.productVariant.priceInCents
                    }
                    quantity={item.quantity}
                  />
                ))}
              </div>
            </ScrollArea>
          </div>

          {cart?.items && cart?.items.length > 0 && (
            <div className="flex flex-col gap-4">
              <Separator />

              <div className="flex items-center justify-between text-xs font-medium">
                <p>Subtotal</p>
                <p>{formatCentsToBRL(cart?.totalPriceInCents ?? 0)}</p>
              </div>

              <Separator />

              <div className="flex items-center justify-between text-xs font-medium">
                <p>Entrega</p>
                <p>GRÁTIS</p>
              </div>

              <Separator />

              <div className="flex items-center justify-between text-xs font-medium">
                <p>Taxa estimada</p>
                <p>{formatCentsToBRL(cart?.taxaPriceInCents ?? 0)}</p>
              </div>

              <Separator />

              <div className="flex items-center justify-between text-xs font-medium">
                <p>Total</p>
                <p>
                  {formatCentsToBRL(
                    (cart?.totalPriceInCents ?? 0) +
                      (cart?.taxaPriceInCents ?? 0),
                  )}
                </p>
              </div>

              <Button className="mt-5 rounded-full" asChild>
                <Link href="/cart/identification">Finalizar compra</Link>
              </Button>
            </div>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};
