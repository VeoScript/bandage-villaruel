"use client";

import dynamic from "next/dynamic";

import { useLazyLoadOnScroll } from "~/hooks/useLazyLoadOnScroll";

const NavBar = dynamic(() => import("../ui/NavBar"));
const Footer = dynamic(() => import("../ui/Footer"));
const Toast = dynamic(() => import("../ui/Toast"));

interface DefaultLayoutProps {
  children: React.ReactNode;
}

export default function DefaultLayout({ children }: DefaultLayoutProps): JSX.Element {
  const isLazyLoad = useLazyLoadOnScroll();

  return (
    <div className="relative flex flex-col items-center w-full h-full overflow-y-auto overflow-x-hidden">
      <NavBar />
      <Toast />
      {children}
      {isLazyLoad && <Footer />}
    </div>
  );
}
