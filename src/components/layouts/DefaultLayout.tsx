import { ReactNode } from "react";

import NavBar from "../ui/NavBar";
import Footer from "../ui/Footer";

interface DefaultLayoutProps {
  children: ReactNode;
}

export default function DefaultLayout({ children }: DefaultLayoutProps): JSX.Element {
  return (
    <div className="flex flex-col items-center w-full h-full overflow-y-auto overflow-x-hidden">
      <NavBar />
      {children}
      <Footer />
    </div>
  );
}
