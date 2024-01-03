import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

import clsx from "clsx";
import "./globals.css";
import StoreProvider from "./_redux/StoreProvider";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["200", "400", "600", "800"],
  preload: true,
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Bandage",
  description: "Your favorite online store.",
};

export default function RootLayout({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <StoreProvider>
      <html lang="en">
        <body className={clsx("font-montserrat text-accent-2 bg-accent-1", montserrat.variable)}>
          {children}
        </body>
      </html>
    </StoreProvider>
  );
}
