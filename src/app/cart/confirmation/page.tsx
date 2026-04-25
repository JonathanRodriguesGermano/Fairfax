import { headers } from "next/headers";
import { redirect } from "next/navigation";

import Footer from "@/components/common/footer";
import { Header } from "@/components/common/header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { db } from "@/db";
import { auth } from "@/lib/auth";

import CartSummary from "../components/cart-summary";
import { formatAddress } from "../helpers/address";
import FinishOrderButton from "./components/finish-order-button";

const ConfirmationPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  if (!session?.user.id) {
    redirect("/");
  }
  const cart = await db.query.cartTable.findFirst({
    where: (cart, { eq }) => eq(cart.userId, session.user.id),
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
  if (!cart || cart?.items.length === 0) {
    redirect("/");
  }
  const cartTotalInCents = cart.items.reduce(
    (acc, item) => acc + item.productVariant.priceInCents * item.quantity,
    0,
  );
  const taxaTotalInCents =
    cart.items.reduce(
      (acc, item) => acc + item.productVariant.priceInCents * item.quantity,
      0,
    ) * 0.1;
  if (!cart.shippingAddress) {
    redirect("/cart/identification");
  }
  return (
    <div className="flex min-h-screen flex-col">
      <Header showCategories={false} />
      <div className="flex-1">
      <div className="space-y-4 px-5 md:mx-auto md:grid md:w-full md:max-w-7xl md:grid-cols-3 md:gap-6 md:space-y-0 md:px-6 lg:px-8">
        <div className="md:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Identificação</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <Card>
                <CardContent>
                  <p className="text-sm">
                    {formatAddress(cart.shippingAddress)}
                  </p>
                </CardContent>
              </Card>
              <FinishOrderButton />
            </CardContent>
          </Card>
        </div>
        <div className="md:col-span-1">
          <CartSummary
            subtotalInCents={cartTotalInCents}
            taxaPriceInCents={taxaTotalInCents}
            totalInCents={cartTotalInCents + taxaTotalInCents}
            products={cart.items.map((item) => ({
              id: item.productVariant.id,
              name: item.productVariant.product.name,
              variantName: item.productVariant.name,
              quantity: item.quantity,
              priceInCents: item.productVariant.priceInCents,
              imageUrl: item.productVariant.imageUrl,
            }))}
          />
        </div>
      </div>
      
        
      </div>
      <Footer />
    </div>
  );
};

export default ConfirmationPage;