"use client"

import Image from "next/image";
import Link from "next/link";

import Footer from "@/components/common/footer";
import { Header } from "@/components/common/header";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogTitle,
} from "@/components/ui/dialog";

const CheckoutCancelPage = () => {
  return (
    <>
      <div className="flex min-h-screen flex-col">
      <Header showCategories={false} />
        <div className="flex-1">
          <Dialog open={true} onOpenChange={() => {}}>
            <DialogContent className="text-center sm:max-w-lg">
              <Image
                src="/illustrationErro.svg"
                alt="Checkout cancelado"
                width={300}
                height={300}
                className="mx-auto opacity-80"
              />
              <DialogTitle className="mt-4 text-2xl">
                Checkout cancelado
              </DialogTitle>
              <DialogDescription className="font-medium">
                Seu pagamento não foi concluído. Você pode tentar novamente ou
                voltar para a loja.
              </DialogDescription>

              <DialogFooter>
                <Button className="rounded-full" size="lg" asChild>
                  <Link href="/cart/identification">Tentar novamente</Link>
                </Button>
                <Button
                  className="rounded-full"
                  variant="outline"
                  size="lg"
                  asChild
                >
                  <Link href="/">Voltar para a loja</Link>
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default CheckoutCancelPage;
