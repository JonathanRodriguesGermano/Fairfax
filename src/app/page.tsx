import BrandsList from "@/components/common/brands-item";
import CategorySelector from "@/components/common/category-selector";
import Footer from "@/components/common/footer";
import { Header } from "@/components/common/header";
import ProductList from "@/components/common/product-list";
import SectionBanner from "@/components/common/section-banner";
import SectionBannerTwo from "@/components/common/section-banner-two";
import { getCategories } from "@/data/categories/get";
import {
  getNewlyCreatedProducts,
  getProductsWithVariants,
} from "@/data/products/get";

const Home = async () => {
  const [products, newlyCreatedProducts, categories] = await Promise.all([
    getProductsWithVariants(),
    getNewlyCreatedProducts(),
    getCategories(),
  ]);

  return (
    <>
      <Header />

      <div className="mx-auto w-full max-w-[1400px] space-y-10 px-3 md:px-8 lg:px-12">
        <SectionBanner />

        <BrandsList title="Marcas parceiras" />

        <ProductList products={products} title="Mais vendidos" />

        <div className="px-5">
          <CategorySelector categories={categories} />
        </div>

        <div className="px-5">
          <SectionBannerTwo />
        </div>
        <ProductList products={newlyCreatedProducts} title="Novos produtos" />
      </div>
      <Footer />
    </>
  );
};

export default Home;