import { eq } from "drizzle-orm";
import Image from "next/image";
import { notFound } from "next/navigation";

import Footer from "@/components/common/footer";
import { Header } from "@/components/common/header";
import ProductList from "@/components/common/product-list";
import { db } from "@/db";
import { productTable, productVariantTable } from "@/db/schema";
import { formatCentsToBRL } from "@/helpers/money";

import ProductActions from "./components/product-actions";
import VariantSelector from "./components/variant-selector";

interface ProductVariantPageProps {
  params: Promise<{ slug: string }>;
}

const ProductVariantPage = async ({ params }: ProductVariantPageProps) => {
  const { slug } = await params;
  const productVariant = await db.query.productVariantTable.findFirst({
    where: eq(productVariantTable.slug, slug),
    with: {
      product: {
        with: {
          variants: true,
        },
      },
    },
  });
  if (!productVariant) {
    return notFound();
  }
  const likelyProducts = await db.query.productTable.findMany({
    where: eq(productTable.categoryId, productVariant.product.categoryId),
    with: {
      variants: true,
    },
  });
  return (
    <>
      <Header />
      <div className="flex flex-col space-y-6 md:mx-auto md:w-full md:max-w-7xl md:px-6 lg:px-8">
        <div className="flex flex-col space-y-6 md:grid md:grid-cols-2 md:items-start md:gap-10 md:space-y-0">
          <Image
            src={productVariant.imageUrl}
            alt={productVariant.name}
            sizes="100vw"
            height={0}
            width={0}
            className="h-auto w-full object-cover md:rounded-2xl"
          />

          <div className="flex flex-col space-y-6">
            <div className="px-5 md:px-0">
              <VariantSelector
                selectedVariantSlug={productVariant.slug}
                variants={productVariant.product.variants}
              />
            </div>

            <div className="px-5 md:px-0">
              <h2 className="text-lg font-semibold md:text-2xl">
                {productVariant.product.name}
              </h2>
              <h3 className="text-muted-foreground text-sm md:text-base">
                {productVariant.name}
              </h3>
              <h3 className="text-lg font-semibold md:text-2xl">
                {formatCentsToBRL(productVariant.priceInCents)}
              </h3>
            </div>

            <div className="px-5 md:px-0">
              <ProductActions productVariantId={productVariant.id} />
            </div>

            <div className="px-5 md:px-0">
              <p className="text-shadow-amber-600">
                {productVariant.product.description}
              </p>
            </div>
          </div>
        </div>

        <ProductList title="Talvez você goste" products={likelyProducts} />

      </div>
      <Footer />
    </>
  );
};

export default ProductVariantPage;