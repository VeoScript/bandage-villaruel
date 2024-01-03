import dynamic from "next/dynamic";

const NavBar = dynamic(() => import("../ui/NavBar"));
const Footer = dynamic(() => import("../ui/Footer"));

interface DefaultLayoutProps {
  children: React.ReactNode;
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
