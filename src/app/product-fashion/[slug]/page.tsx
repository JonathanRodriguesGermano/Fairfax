import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import Footer from "@/components/common/footer";
import { Header } from "@/components/common/header";
import { getCategoryBySlug } from "@/data/categories/get";
import { getProductsByCategoryId } from "@/data/products/get";

export default async function CategoriaPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const category = await getCategoryBySlug(slug);
  if (!category) {
    return notFound();
  }
  const products = await getProductsByCategoryId(category.id);

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <div className="flex w-full flex-1 flex-col gap-4 p-4 md:mx-auto md:max-w-7xl md:gap-6 md:p-8 md:px-6 lg:px-8">
        <h1 className="text-xl font-bold capitalize md:text-3xl">
          Categoria: {category.name}
        </h1>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
          {products.map((product) => {
            const defaultVariant = product.variants[0];

            if (!defaultVariant) return null;

            return (
              <Link
                key={product.id}
                href={`/product-variant/${defaultVariant.slug}`}
                className="group flex flex-col gap-3"
              >
                <div className="relative aspect-square w-full overflow-hidden rounded-lg bg-zinc-100">
                  <Image
                    src={defaultVariant.imageUrl}
                    alt={product.name}
                    width={500}
                    height={500}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                <div className="flex flex-col">
                  <h2 className="line-clamp-1 text-lg font-semibold text-zinc-900">
                    {product.name}
                  </h2>
                  <span className="text-sm text-zinc-500">
                    {defaultVariant.color}
                  </span>
                  <span className="mt-1 font-bold text-zinc-900">
                    {(defaultVariant.priceInCents / 100).toLocaleString(
                      "pt-BR",
                      {
                        style: "currency",
                        currency: "BRL",
                      },
                    )}
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
}