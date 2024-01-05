"use client";

import dynamic from "next/dynamic";

import DefaultLayout from "~/components/layouts/DefaultLayout";

import { useLazyLoadOnScroll } from "~/hooks/useLazyLoadOnScroll";

const MainBanner = dynamic(() => import("~/components/templates/MainBanner"));
const BestSellerProducts = dynamic(() => import("~/components/templates/BestSellerProducts"));
const BestServices = dynamic(() => import("~/components/templates/BestServices"));
const FeaturedPosts = dynamic(() => import("~/components/templates/FeaturedPosts"));
const Testimony = dynamic(() => import("~/components/templates/Testimony"));
const CallToActionBanner = dynamic(() => import("~/components/templates/CallToActionBanner"));

export default function Home(): JSX.Element {
  const isLazyLoad = useLazyLoadOnScroll();

  return (
    <DefaultLayout>
      <MainBanner />
      {isLazyLoad && (
        <>
          <BestSellerProducts isDisplayHeaderText isPaginate />
          <BestServices />
          <FeaturedPosts />
          <Testimony />
          <CallToActionBanner />
        </>
      )}
    </DefaultLayout>
  );
}
