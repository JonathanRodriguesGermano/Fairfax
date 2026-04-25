import Image from "next/image";

const SectionBannerTwo = () => {
  return (
    <>
      <div className="pb-10">
        <div className="block sm:hidden">
          <Image
            src="/banner-02.png"
            alt="Leve uma vida com estilo"
            height={1920}
            width={600}
            className="h-auto w-full rounded-2xl"
            priority
          />
        </div>

        <div className="hidden grid-cols-1 justify-center gap-6 sm:grid sm:grid-cols-2 lg:gap-10">
          <div className="relative flex h-[400px] w-full justify-end overflow-hidden rounded-3xl md:h-[500px] lg:h-[600px]">
            <Image
              src="/banner-desktop-tenis.png"
              alt="Leve uma vida com estilo"
              width={500}
              height={700}
              className="object-cover"
              priority
            />
          </div>

          <div className="relative mt-12 h-[400px] w-full overflow-hidden rounded-3xl md:h-[500px] lg:h-[600px]">
            <Image
              src="/banner-02.png"
              alt="Promoção especial"
              width={2900}
              height={2000}
              className="block object-cover object-top md:hidden"
            />
            <Image
              src="/banner-desktop-02.svg"
              alt="Promoção especial"
              width={2900}
              height={2000}
              className="hidden object-cover object-top md:block"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionBannerTwo;
