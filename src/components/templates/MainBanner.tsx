import Image from "next/image";
import Link from "next/link";

export default function MainBanner(): JSX.Element {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full md:h-screen overflow-hidden">
      <div className="flex flex-col md:flex-row items-start justify-center w-full max-w-full md:max-w-1/2 p-5 md:p-3 gap-3">
        <div className="relative flex w-full md:w-[451px] h-[300px] md:h-[616px] bg-neutral-200">
          <Image
            fill
            className="object-cover"
            src="/images/image1.webp"
            alt="Image1"
            sizes="(max-width: 451px) 100vw, (max-width: 451px) 50vw, 33vw"
            placeholder="blur"
            blurDataURL="/images/image1.webp"
          />
          <div className="absolute z-10 top-5 left-5 flex flex-col items-start gap-y-1">
            <p className="font-bold text-[14px] text-green-500">5 Items</p>
            <h2 className="font-bold text-[24px] md:text-[40px] text-accent-2 uppercase">Furniture</h2>
            <Link href="/" className="font-semibold text-[14px] text-accent-2">
              Read More
            </Link>
          </div>
        </div>
        <div className="flex flex-col items-center md:items-start justify-start w-full md:w-auto gap-y-3">
          <div className="relative flex w-full md:w-[678px] h-[300px] bg-neutral-200">
            <Image
              fill
              className="object-cover"
              src="/images/image2.webp"
              alt="Image2"
              sizes="(max-width: 678px) 100vw, (max-width: 678px) 50vw, 33vw"
              placeholder="blur"
              blurDataURL="/images/image2.webp"
            />
            <div className="absolute z-10 top-5 left-5 flex flex-col items-start gap-y-1">
              <p className="font-bold text-[14px] text-green-500">5 Items</p>
              <h2 className="font-bold text-[24px] text-accent-2 uppercase">Furniture</h2>
              <Link href="/" className="font-semibold text-[14px] text-accent-2">
                Read More
              </Link>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-start w-full md:w-auto gap-x-0 md:gap-x-3 gap-y-3 md:gap-y-0">
            <div className="relative flex w-full md:w-[331px] h-[300px] bg-neutral-200">
              <Image
                fill
                className="object-cover"
                src="/images/image3.webp"
                alt="Image3"
                sizes="(max-width: 331px) 100vw, (max-width: 331px) 50vw, 33vw"
                placeholder="blur"
                blurDataURL="/images/image3.webp"
              />
              <div className="absolute z-10 top-5 left-5 flex flex-col items-start gap-y-1">
                <p className="font-bold text-[14px] text-green-500">5 Items</p>
                <h2 className="font-bold text-[24px] text-accent-2 uppercase">Furniture</h2>
                <Link href="/" className="font-semibold text-[14px] text-accent-2">
                  Read More
                </Link>
              </div>
            </div>
            <div className="relative flex w-full md:w-[331px] h-[300px] bg-neutral-200">
              <Image
                fill
                className="object-cover"
                src="/images/image4.webp"
                alt="Image4"
                sizes="(max-width: 331px) 100vw, (max-width: 331px) 50vw, 33vw"
                placeholder="blur"
                blurDataURL="/images/image4.webp"
              />
              <div className="absolute z-10 top-5 left-5 flex flex-col items-start gap-y-1">
                <p className="font-bold text-[14px] text-green-500">5 Items</p>
                <h2 className="font-bold text-[24px] text-accent-2 uppercase">Furniture</h2>
                <Link href="/" className="font-semibold text-[14px] text-accent-2">
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
