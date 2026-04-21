import { Home, ShoppingBag, Truck } from "lucide-react";
import Link from "next/link";

import { Separator } from "../ui/separator";

const MenuItem = () => {
  return (
    <div className="flex w-full flex-col text-lg font-medium text-zinc-900">
      <div className="px-5">
        <Separator />
      </div>
      <div className="flex flex-col gap-6 py-6 pl-5">
        <Link
          href="/"
          className="flex items-center gap-4 transition-colors hover:text-zinc-600"
        >
          <Home className="h-5 w-5" />
          Início
        </Link>

        <Link
          href="/my-orders"
          className="flex items-center gap-4 transition-colors hover:text-zinc-600"
        >
          <Truck className="h-5 w-5" />
          Meus Pedidos
        </Link>

        <Link
          href="/em-breve"
          className="flex items-center gap-4 transition-colors hover:text-zinc-600"
        >
          <ShoppingBag className="h-5 w-5" />
          Sacola
        </Link>
      </div>

      <div className="px-5">
        <Separator />
      </div>

      <div className="flex flex-col gap-6 py-6 pl-5">
        <Link
          href="/product-fashion/camisetas"
          className="transition-colors hover:text-zinc-600"
        >
          Camisetas
        </Link>
        <Link
          href="/product-fashion/bermuda-shorts"
          className="transition-colors hover:text-zinc-600"
        >
          Bermuda & Shorts
        </Link>
        <Link href="/product-fashion/calas" className="transition-colors hover:text-zinc-600">
          Calças
        </Link>
        <Link
          href="/product-fashion/jaquetas-moletons"
          className="transition-colors hover:text-zinc-600"
        >
          Jaquetas & Moletons
        </Link>
        <Link href="/product-fashion/tnis" className="transition-colors hover:text-zinc-600">
          Tênis
        </Link>
        <Link
          href="/product-fashion/acessrios"
          className="transition-colors hover:text-zinc-600"
        >
          Acessórios
        </Link>
      </div>
    </div>
  );
};

export default MenuItem;
