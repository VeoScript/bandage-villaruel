"use client";

import dynamic from "next/dynamic";

import DefaultLayout from "~/components/layouts/DefaultLayout";

const ProductDetails = dynamic(() => import("~/components/templates/product/ProductDetails"));
const ProductAbout = dynamic(() => import("~/components/templates/product/ProductAbout"));
const BestSellerProducts = dynamic(() => import("~/components/templates/BestSellerProducts"));
const BrandSponsor = dynamic(() => import("~/components/templates/product/BrandSponsor"));

export default function ProductPage() {
  return (
    <DefaultLayout>
      <ProductDetails />
      <ProductAbout />
      <div className="flex flex-col items-center justify-center w-full pb-10 gap-y-10">
        <div className="flex flex-col items-start justify-center w-full max-w-5xl p-5 border-b border-neutral-200">
          <h1 className="font-bold text-[24px] uppercase">Bestseller Products</h1>
        </div>
        <BestSellerProducts isPaginate={false} />
      </div>
      <BrandSponsor />
    </DefaultLayout>
  );
}
