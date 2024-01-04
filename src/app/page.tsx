"use client";

import dynamic from "next/dynamic";

import DefaultLayout from "~/components/layouts/DefaultLayout";

const MainBanner = dynamic(() => import("~/components/templates/MainBanner"));
const BestSellerProducts = dynamic(() => import("~/components/templates/BestSellerProducts"));
const BestServices = dynamic(() => import("~/components/templates/BestServices"));
const FeaturedPosts = dynamic(() => import("~/components/templates/FeaturedPosts"));
const Testimony = dynamic(() => import("~/components/templates/Testimony"));
const CallToActionBanner = dynamic(() => import("~/components/templates/CallToActionBanner"));

// import type { RootState } from "~/redux/store";
// import { useSelector, useDispatch } from "react-redux";
// import { increment, decrement, incrementByAmount } from "~/redux/slices/testing/testingSlice";

export default function Home(): JSX.Element {
  // const dispatch = useDispatch();
  // const { value } = useSelector((state: RootState) => state.testing);

  return (
    <DefaultLayout>
      <MainBanner />
      <BestSellerProducts isDisplayHeaderText isPaginate />
      <BestServices />
      <FeaturedPosts />
      <Testimony />
      <CallToActionBanner />
    </DefaultLayout>
  );
}
