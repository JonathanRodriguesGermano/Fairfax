import Image from "next/image";

const SectionBanner = () => {
  return (
    <>
      <div className="pb-10">
        <div className="block sm:hidden">
          <Image
            src="/banner-01.png"
            alt="Leve uma vida com estilo"
            height={1920}
            width={600}
            className="h-auto w-full rounded-2xl"
            priority
          />
        </div>

        <div className="hidden gap-6 sm:grid sm:grid-cols-1 md:grid-cols-3">
          <div className="relative h-[500px] overflow-hidden rounded-3xl md:col-span-2">
            <Image
              src="/banner-desktop-01.svg"
              alt="Leve uma vida com estilo"
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="relative h-[500px] overflow-hidden rounded-3xl">
            <Image
              src="/banner-02.png"
              alt="Promoção especial"
              fill
              className="object-cover md:hidden"
            />
            <Image
              src="/banner-desktop-02.svg"
              alt="Promoção especial"
              fill
              className="hidden object-cover md:block"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionBanner;

