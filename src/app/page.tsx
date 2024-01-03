"use client";

import DefaultLayout from "~/components/layouts/DefaultLayout";
import MainBanner from "~/components/templates/MainBanner";

export default function Home(): JSX.Element {
  return (
    <DefaultLayout>
      <MainBanner />
    </DefaultLayout>
  );
}
