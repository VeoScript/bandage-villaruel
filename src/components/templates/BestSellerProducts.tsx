import Image from "next/image";
import Link from "next/link";

import { useGetProductsQuery } from "~/redux/slices/products/queries";

export default function BestSellerProducts(): JSX.Element {
  const { data, isLoading }: any = useGetProductsQuery();

  console.log("products", data);

  return (
    <div className="flex flex-col items-center w-full max-w-6xl h-full gap-y-10">
      <div className="flex flex-col items-center w-full gap-y-3">
        <h2 className="font-normal text-[20px] text-neutral-500">Featured Products</h2>
        <h2 className="font-bold text-[24px] text-accent-2 uppercase">Bestseller Products</h2>
        <h2 className="font-normal text-[14px] text-neutral-500">
          Problems trying to resolve the conflict between
        </h2>
      </div>
      <div className="flex flex-wrap justify-center w-full gap-5">
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <>
            {data?.products?.map((product: any) => (
              <div key={product.id} className="flex flex-col items-center w-[183px] gap-y-5">
                <div className="relative w-[183px] h-[238px]">
                  <Image
                    priority
                    fill
                    className="object-cover"
                    src={product.thumbnail}
                    alt="Image3"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="flex flex-col items-center w-full gap-y-3">
                  <h2 className="font-bold text-center text-[16px]">{product.title}</h2>
                  <h3 className="font-bold text-center text-[14px] text-neutral-500">{product.brand}</h3>
                  <h3 className="flex flex-row items-center gap-x-3 font-bold text-[16px] text-neutral-500">
                    <span className="text-neutral-400">${product.price}</span>
                    <span className="text-accent-3">
                      ${Number(product.price - product.discountPercentage).toFixed(2)}
                    </span>
                  </h3>
                </div>
              </div>
            ))}
          </>
        )}
      </div>
      <Link
        href="/"
        className="w-auto mt-10 px-10 py-5 rounded-[5px] border border-accent-4 uppercase font-bold text-[14px] text-accent-4 tracking-[0.2px] hover:opacity-50"
      >
        Load More Products
      </Link>
    </div>
  );
}
