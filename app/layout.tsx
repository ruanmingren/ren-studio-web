import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { StudioHeader, StudioFooter } from "./components/StudioNav";
import WibuPortal from "./components/WibuPortal";
import LanguageSwitcher from "./components/LanguageSwitcher";
import CustomCursor from "./components/CustomCursor";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ren Animation Studio",
  description: "Official Website of Ren Animation Studio",
};

export default function RootLayout({
  children,

}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        <CustomCursor />
        <StudioHeader />
        <WibuPortal />
        {children}
        <StudioFooter />
        <LanguageSwitcher />
      </body>
    </html>
  );
}