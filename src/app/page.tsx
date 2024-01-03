"use client";

import DefaultLayout from "~/components/layouts/DefaultLayout";
import MainBanner from "~/components/templates/MainBanner";
import BestSellerProducts from "~/components/templates/BestSellerProducts";
import BestServices from "~/components/templates/BestServices";
import FeaturedPosts from "~/components/templates/FeaturedPosts";
import Testimony from "~/components/templates/Testimony";
import CallToActionBanner from "~/components/templates/CallToActionBanner";

export default function Home(): JSX.Element {
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
