import Image from "next/image";

const images = [
  { id: 1, url: "/nike.svg", alt: "Marca da nike" },
  { id: 2, url: "/adidas.svg", alt: "Marca da adidas" },
  { id: 3, url: "/puma.svg", alt: "Marca da puma" },
  { id: 4, url: "/newbalance.svg", alt: "Marca da new balance" },
  { id: 5, url: "/converse.svg", alt: "Marca da converse" },
  { id: 6, url: "/polo.svg", alt: "Marca da polo" },
  { id: 7, url: "/zara.svg", alt: "Marca da zara" },
];

interface BrandsListProps {
  title: string;
}

const BrandsList = ({ title }: BrandsListProps) => {
  return (
    <div className="space-y-6">
      <h3 className="px-5 font-semibold">{title}</h3>
      <div className="overflow-hidden mask-fade">
        <div className="animate-scroll flex gap-2 px-5 [&::-webkit-scrollbar]:hidden">
          {[...images, ...images].map((image, index) => (
            <div key={index} className="shrink-0 w-36 h-32 flex items-center justify-center">
              <Image
                src={image.url}
                alt={image.alt}
                key={image.id}
                width={120}
                height={60}
                className="object-contain max-h-full max-w-full"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrandsList;