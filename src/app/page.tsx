"use client";

import DefaultLayout from "~/components/layouts/DefaultLayout";
import MainBanner from "~/components/templates/MainBanner";
import BestSellerProducts from "~/components/templates/BestSellerProducts";
import BestServices from "~/components/templates/BestServices";
import FeaturedPosts from "~/components/templates/FeaturedPosts";
import Testimony from "~/components/templates/Testimony";
import CallToActionBanner from "~/components/templates/CallToActionBanner";

// import type { RootState } from "~/redux/store";
// import { useSelector, useDispatch } from "react-redux";
// import { increment, decrement, incrementByAmount } from "~/redux/slices/testing/testingSlice";

import { useGetProductsQuery } from "~/redux/slices/products/queries";

export default function Home(): JSX.Element {
  // const dispatch = useDispatch();
  // const { value } = useSelector((state: RootState) => state.testing);

  const {data, isLoading} = useGetProductsQuery();

  console.log("products", data)

  return (
    <DefaultLayout>
      <MainBanner />
      <BestSellerProducts />
      <BestServices />
      <FeaturedPosts />
      <Testimony />
      <CallToActionBanner />
    </DefaultLayout>
  );
}
